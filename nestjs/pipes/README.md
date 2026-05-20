# Pipes

HTTP isteği bir NestJS uygulamasına ulaştığında middleware'den geçer, guard'lardan geçer ve en son route handler'a ulaşmadan hemen önce pipe'lardan geçer. Pipe'ların iki temel görevi vardır: gelen veriyi beklenen tipe dönüştürmek ve gelen veriyi kurallara göre doğrulamak. Bu iki görev birbirini tamamlar ama her zaman birlikte olmak zorunda değildir.

## Pipe Nedir?

Pipe, `PipeTransform` interface'ini implement eden ve `@Injectable()` decorator'ı taşıyan bir sınıftır. Route handler çalışmadan önce devreye girer: parametre değerini alır, üzerinde işlem yapar ve ya dönüştürülmüş değeri handler'a iletir ya da bir exception fırlatır.

Exception fırlatıldığında handler hiç çalışmaz. Bu önemli bir garantidir: validation pipe'ı "bu istek geçersiz" derse, iş mantığın kirli veriyle karşılaşmaz. Hata yönetimi ve iş mantığı birbirinden net biçimde ayrılmış olur.

İki kullanım biçimi vardır:

**Transformation:** Gelen değeri farklı bir tipe çevir. URL parametresi olarak gelen `"42"` string'ini `42` sayısına dönüştürmek tipik bir örnektir. HTTP katmanı her şeyi string olarak taşır; pipe bu string'i uygulamanın beklediği tipine getirir.

**Validation:** Gelen değerin belirli kurallara uyduğunu kontrol et. Uymuyorsa exception fırlat. DTO validation için kullandığın `ValidationPipe` bu kategoridedir.

## Built-in Pipes

NestJS, en yaygın ihtiyaçları karşılayan sekiz hazır pipe ile gelir. Bunları import edip doğrudan kullanabilirsin.

**`ParseIntPipe`** — String'i tam sayıya çevirir. `"42"` → `42`. Dönüştürme başarısız olursa (örneğin `"abc"`) varsayılan olarak 400 Bad Request fırlatır:

```typescript
@Get(':id')
biriniGetir(@Param('id', ParseIntPipe) id: number) {
  // id burada garantili number'dır
}
```

Hata status kodunu değiştirmek istersen pipe'ı yapılandırılmış şekilde geçersin:

```typescript
@Get(':id')
biriniGetir(
  @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
) {}
```

**`ParseFloatPipe`** — String'i ondalıklı sayıya çevirir. `"3.14"` → `3.14`.

**`ParseBoolPipe`** — `"true"` → `true`, `"false"` → `false`. Dikkat: `"1"` veya `"yes"` kabul edilmez, tam olarak `"true"` veya `"false"` string'i beklenir.

**`ParseArrayPipe`** — Gelen değeri diziye çevirir. Query parameter'dan `"1,2,3"` gibi virgülle ayrılmış değerleri diziye dönüştürmek için kullanışlıdır:

```typescript
@Get()
listele(@Query('idler', new ParseArrayPipe({ items: Number, separator: ',' })) idler: number[]) {
  return idler; // [1, 2, 3]
}
```

**`ParseUUIDPipe`** — UUID formatını doğrular. Geçersiz UUID gelirse 400 fırlatır. Hangi UUID sürümünü kabul edeceğini belirtebilirsin: `new ParseUUIDPipe({ version: '4' })`.

**`ParseEnumPipe`** — Değerin belirli bir enum'a ait olduğunu doğrular:

```typescript
enum Durum { Aktif = 'aktif', Pasif = 'pasif' }

@Get('durum/:durum')
durumIleGetir(@Param('durum', new ParseEnumPipe(Durum)) durum: Durum) {
  return durum;
}
```

**`DefaultValuePipe`** — Parametre yoksa (undefined) varsayılan bir değer atar. Query parameter'lar için özellikle işe yarar.

**`ParseDatePipe`** — ISO 8601 formatındaki string'i `Date` nesnesine çevirir. `"2024-01-15"` → `Date` objesi.

Kapsamlı bir örnek:

```typescript
// Built-in pipe kullanımı
import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ParseIntPipe,
  ParseUUIDPipe,
  DefaultValuePipe,
  ParseBoolPipe,
  ParseEnumPipe,
  HttpStatus,
} from '@nestjs/common';

enum Siralama { ASC = 'asc', DESC = 'desc' }

@Controller('urunler')
export class UrunlerController {
  // string ':id' → number
  @Get(':id')
  biriniGetir(@Param('id', ParseIntPipe) id: number) {
    return { id, tip: typeof id }; // tip: "number"
  }

  // UUID formatı doğrulanır
  @Get('uuid/:uuid')
  uuidIleGetir(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return uuid;
  }

  // Eksik query param için varsayılan değer — DefaultValuePipe önce gelir
  @Get()
  listele(
    @Query('sayfa', new DefaultValuePipe(1), ParseIntPipe) sayfa: number,
    @Query('aktif', new DefaultValuePipe(true), ParseBoolPipe) aktif: boolean,
    @Query('siralama', new DefaultValuePipe(Siralama.DESC), new ParseEnumPipe(Siralama)) siralama: Siralama,
  ) {
    return { sayfa, aktif, siralama };
  }
}
```

## Pipe Bağlama Kapsamları

NestJS'te pipe'ı dört farklı kapsamda bağlayabilirsin. Her kapsam farklı bir granülerlik sunar.

**Parametre kapsamı** — En dar kapsam. Sadece tek bir parametreye uygulanır. `@Param()`, `@Query()`, `@Body()` decorator'larının ikinci argümanı olarak geçilir:

```typescript
@Get(':id')
biriniGetir(@Param('id', ParseIntPipe) id: number) {}
```

Pipe birden fazla sınıf veya fonksiyon alabilir; soldan sağa sırayla uygulanır.

**Metot kapsamı** — `@UsePipes()` decorator'ıyla tek bir route handler'a uygulanır. O handler'ın tüm parametreleri bu pipe'tan geçer:

```typescript
import { UsePipes } from '@nestjs/common';

@Post()
@UsePipes(new ValidationPipe({ whitelist: true }))
olustur(@Body() dto: CreateUrunDto) {}
```

**Controller kapsamı** — `@UsePipes()` decorator'ını controller sınıfının üstüne yazarsan o controller'daki tüm handler'lar bu pipe'ı kullanır:

```typescript
@Controller('urunler')
@UsePipes(new ValidationPipe())
export class UrunlerController {
  // Tüm route handler'lar ValidationPipe'tan geçer
}
```

**Global kapsam** — Uygulamadaki tüm route handler'lara uygulanır. İki yolu var:

```typescript
// main.ts — DI dışında, basit kurulum
app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
```

```typescript
// app.module.ts — DI ile, servis inject edebilirsin
import { APP_PIPE } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
```

`useGlobalPipes()` NestJS DI container'ının dışında çalışır; pipe içinde başka bir servis inject edemezsin. Bunun gerekli olduğu nadir durumlarda `APP_PIPE` token'ını kullanman gerekir.

## DefaultValuePipe ile Opsiyonel Parametreler

Sayfalama, filtreleme veya sıralama gibi işlemlerde query parameter'lar genellikle opsiyoneldir. Kullanıcı `?sayfa=` göndermezse mantıklı bir varsayılan değer kullanmak istersin.

`DefaultValuePipe` tam bunun için vardır. Ama sıralaması önemlidir: `DefaultValuePipe` her zaman parse pipe'ından **önce** gelmelidir. Önce varsayılan değeri ata, sonra dönüştür:

```typescript
// DOĞRU: önce default, sonra parse
@Query('sayfa', new DefaultValuePipe(1), ParseIntPipe) sayfa: number

// YANLIŞ: önce parse, sonra default — undefined ParseIntPipe'a gider, hata fırlatır
@Query('sayfa', ParseIntPipe, new DefaultValuePipe(1)) sayfa: number
```

`DefaultValuePipe` gelen değer `undefined` olduğunda devreye girer; başka bir değer varsa dokunmaz:

```typescript
@Get()
listele(
  @Query('sayfa', new DefaultValuePipe(1), ParseIntPipe) sayfa: number,
  @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit: number,
  @Query('aktif', new DefaultValuePipe(true), ParseBoolPipe) aktif: boolean,
) {
  // GET /urunler → sayfa: 1, limit: 20, aktif: true
  // GET /urunler?sayfa=3 → sayfa: 3, limit: 20, aktif: true
  return { sayfa, limit, aktif };
}
```

## Custom Pipe Yazmak

Hazır pipe'lar yetmediğinde kendi pipe'ını yazarsın. Tek koşul `PipeTransform<T, R>` interface'ini implement etmek ve `transform(value, metadata)` metodunu tanımlamak.

- `T` — giriş tipi
- `R` — çıkış tipi (dönüştürülmüş değerin tipi)
- `value` — pipe'a gelen ham değer
- `metadata` — parametrenin tipi (`body`, `param`, `query`), adı ve metatype bilgisi

Basit bir örnek: gelen string'i büyük harfe çeviren pipe.

```typescript
// Custom pipe — string'i büyük harfe çevirir
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class BuyukHarfPipe implements PipeTransform<string, string> {
  transform(value: string, metadata: ArgumentMetadata): string {
    if (typeof value !== 'string') {
      throw new BadRequestException(`${metadata.data} string olmalıdır`);
    }
    return value.toUpperCase();
  }
}
```

```typescript
// Custom pipe kullanımı
@Get('ara')
ara(@Query('kelime', BuyukHarfPipe) kelime: string) {
  return `Aranan: ${kelime}`; // GET /urunler/ara?kelime=kedi → "Aranan: KEDİ"
}
```

Daha karmaşık bir örnek: sayısal bir değerin belirli bir aralıkta olduğunu doğrulayan pipe.

```typescript
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

export interface AralikSecenekleri {
  min: number;
  max: number;
}

@Injectable()
export class AralikDogrulamaPipe implements PipeTransform<number, number> {
  constructor(private readonly secenekler: AralikSecenekleri) {}

  transform(value: number, metadata: ArgumentMetadata): number {
    if (value < this.secenekler.min || value > this.secenekler.max) {
      throw new BadRequestException(
        `${metadata.data} ${this.secenekler.min} ile ${this.secenekler.max} arasında olmalıdır`,
      );
    }
    return value;
  }
}
```

```typescript
// Kullanırken seçenekleri constructor'dan geçirirsin
@Get(':id')
biriniGetir(
  @Param('id', ParseIntPipe, new AralikDogrulamaPipe({ min: 1, max: 9999 })) id: number,
) {
  return { id };
}
```

Pipe zincirlerinde soldan sağa uygulama sırası önemlidir. Yukarıdaki örnekte önce `ParseIntPipe` string'i sayıya çevirir, ardından `AralikDogrulamaPipe` bu sayıyı aralık kontrolünden geçirir.

`ArgumentMetadata` nesnesinin üç alanı vardır:

```typescript
interface ArgumentMetadata {
  type: 'body' | 'query' | 'param' | 'custom'; // Parametrenin kaynağı
  metatype?: Type<unknown>;                     // TypeScript tipi (runtime'da varsa)
  data?: string;                                // Decorator'a verilen string ('id', 'kelime' gibi)
}
```

Bu bilgiyi kullanarak bir pipe'ı farklı parametre türleri için farklı davranacak şekilde yazabilirsin.

---

Pipe'lar NestJS'in istek yaşam döngüsünde kritik bir noktada durur. Doğru kapsamda, doğru sırayla bağlandıklarında hem type safety hem de validation garantisi sağlarlar. Built-in pipe'lar günlük ihtiyaçların büyük kısmını karşılar; özel ihtiyaçlar için `PipeTransform` interface'ini implement etmek yeterlidir.
