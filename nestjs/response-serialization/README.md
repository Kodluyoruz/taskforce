# Response Serialization

API geliştirirken sık yapılan bir hata şu: veritabanından çekilen entity'yi doğrudan response olarak döndürmek. Prisma ya da TypeORM modeli genellikle `sifre`, `refreshToken`, `silinenTarih` gibi istemcinin hiçbir zaman görmemesi gereken alanlar içerir. Bu alanları unutmak ciddi bir güvenlik açığıdır.

Response serialization, neyin istemciye gönderileceğini kontrol etmeni sağlayan mekanizmadır. NestJS'te bu iş `class-transformer` kütüphanesi ve `ClassSerializerInterceptor` ile yapılır.

## Neden Serialization Gerekir?

Şöyle bir senaryo düşün: kullanıcı listesini döndüren bir endpoint yazdın ve service şunu döndürüyor:

```typescript
return this.prisma.kullanici.findMany();
```

Prisma'dan gelen veri şöyle görünebilir:

```json
[
  {
    "id": 1,
    "ad": "Ali",
    "email": "ali@ornek.com",
    "sifre": "$2b$10$xyz...",
    "refreshToken": "eyJhbGci...",
    "olusturmaTarihi": "2025-01-15T10:00:00.000Z"
  }
]
```

`sifre` ve `refreshToken` istemciye gidiyor. Bu kabul edilemez.

Manuel çözüm işe yarasa da ölçeklenmez:

```typescript
// Her endpoint'te bunu yazmak istemezsin
const { sifre, refreshToken, ...guvenliVeri } = kullanici;
return guvenliVeri;
```

`class-transformer`, bu kontrolü decorator seviyesinde ve tek seferliğine tanımlamanı sağlar. Bir kez entity'ye `@Exclude()` yazarsın, sonra interceptor bunu otomatik olarak uygular.

**Kritik not:** `class-transformer` kütüphanesinde `plainToClass` fonksiyonu deprecated oldu. Kodunda `plainToClass` görüyorsan `plainToInstance` ile değiştir — ikisi aynı şeyi yapar, ama `plainToInstance` güncel olan isimdir.

## Kurulum

`class-transformer` muhtemelen projena zaten eklidir çünkü `class-validator` ile birlikte gelir. Emin olmak için:

```bash
npm install class-transformer
```

`tsconfig.json`'da decorator desteğinin açık olduğunu kontrol et:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

NestJS projelerinde bunlar varsayılan olarak açıktır, ama bazı ortamlarda kapalı olabilir.

## @Exclude ve @Expose Dekoratörleri

`class-transformer` iki temel yaklaşım sunar: **blacklist** ve **whitelist**.

**Blacklist yaklaşımı:** Sadece gizlenmesini istediğin alanlara `@Exclude()` yazarsın. Yeni bir alan eklendiğinde varsayılan olarak görünür gelir — bu, gizlemesi gereken bir alanı unutma riskini taşır.

**Whitelist yaklaşımı:** Sınıf seviyesine `@Exclude()` yazarsın, sonra sadece görmek istediğin alanlara `@Expose()` eklersin. Yeni bir alan eklendiğinde varsayılan olarak **gizli** gelir. Güvenlik açısından daha sağlamdır.

```typescript
// kullanici.entity.ts
import { Exclude, Expose, Transform } from 'class-transformer';

export class KullaniciEntity {
  @Expose()
  id: number;

  @Expose()
  ad: string;

  @Expose()
  email: string;

  @Exclude()  // Yanıtta asla gönderilmez
  sifre: string;

  @Exclude()
  refreshToken: string | null;

  @Transform(({ value }) => value?.toISOString().split('T')[0])
  olusturma: Date; // "2025-01-15" formatında döner

  constructor(partial: Partial<KullaniciEntity>) {
    Object.assign(this, partial);
  }
}
```

Constructor'daki `Object.assign(this, partial)` pattern'i önemli: Prisma'dan gelen ya da servis katmanından gelen veriyi entity'ye kolayca aktarmanı sağlar. `new KullaniciEntity({ id: 1, ad: 'Ali', sifre: 'gizli' })` şeklinde kullanabilirsin.

`@Transform()` decorator'ı hem serileştirme hem de deserileştirme sırasında çalışır. `({ value })` ile mevcut değere erişirsin ve döndürdüğün şey yanıtta kullanılır.

## ClassSerializerInterceptor

`ClassSerializerInterceptor`, controller'ın döndürdüğü değeri yakalar ve `class-transformer`'ın `instanceToPlain()` fonksiyonunu çalıştırır. Bu işlem, `@Exclude()` ve `@Expose()` decorator'larını uygulayarak temiz bir nesne üretir.

```typescript
// kullanicilar.controller.ts
import { Controller, Get, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { KullaniciEntity } from './kullanici.entity';

@Controller('kullanicilar')
@UseInterceptors(ClassSerializerInterceptor)
export class KullanicilarController {
  @Get()
  tumunuGetir(): KullaniciEntity[] {
    // Önemli: class instance döndürülmeli, plain object değil
    return [
      new KullaniciEntity({
        id: 1,
        ad: 'Ali',
        email: 'ali@ornek.com',
        sifre: 'gizli123',      // @Exclude — yanıtta görünmez
        refreshToken: null,      // @Exclude — yanıtta görünmez
      }),
    ];
  }
}
```

**Kritik gotcha: class instance döndür, plain object değil.**

`ClassSerializerInterceptor` yalnızca class instance'ları üzerinde çalışır. Eğer şunu yazarsan:

```typescript
return { id: 1, ad: 'Ali', sifre: 'gizli123' };  // Bu plain object
```

Interceptor bunu işlemez ve `sifre` yanıta dahil olur. Mutlaka `new KullaniciEntity(...)` döndürmen gerekir.

Service'ten düz Prisma nesnesi döndürüp controller'da dönüşümü yapmak yerine, service'ten direkt `KullaniciEntity` instance'ı döndürmek daha temiz bir yaklaşımdır:

```typescript
// kullanicilar.service.ts
async tumunuGetir(): Promise<KullaniciEntity[]> {
  const kullanicilar = await this.prisma.kullanici.findMany();
  return kullanicilar.map((k) => new KullaniciEntity(k));
}
```

**`@SerializeOptions()` ile tip belirtme:** Bazen hangi sınıfın kullanılacağını interceptor'a söylemen gerekir — örneğin `plainToInstance` çağrısının hangi sınıfa karşı yapılacağını belirtmek istiyorsan:

```typescript
@Get(':id')
@SerializeOptions({ type: KullaniciEntity })
async bul(@Param('id') id: string) {
  // Prisma nesnesi bile döndürsen, interceptor KullaniciEntity'ye dönüştürür
  return this.kullanicilarService.biriniGetir(+id);
}
```

## Global Serialization

Her controller'a ayrı ayrı `@UseInterceptors(ClassSerializerInterceptor)` yazmak tekrar içerir. Eğer tüm uygulama genelinde serialization uygulamak istiyorsan, global interceptor olarak kayıt edebilirsin.

```typescript
// main.ts — global serialization
import { ClassSerializerInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
// Reflector DI ile alınmalı — manuel new Reflector() çalışmaz
app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
```

`Reflector`'ı `app.get(Reflector)` ile almanın sebebi: `ClassSerializerInterceptor`, controller ve metod seviyesindeki decorator metadata'yı okumak için `Reflector`'a ihtiyaç duyar. `new Reflector()` yaparsan interceptor bu metadata'ya erişemez ve `@SerializeOptions()` gibi decorator'lar çalışmaz.

Alternatif olarak, DI container'ın tam desteğini almak istiyorsan `APP_INTERCEPTOR` token'ını kullanabilirsin:

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ClassSerializerInterceptor } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
```

Bu yöntemde `Reflector`'ı manuel geçmene gerek yoktur — NestJS DI container'ı bunu otomatik inject eder.

## @Transform() ile Özel Dönüşümler

Bazen `@Exclude()` yeterli değildir. Bir değeri yanıta dahil etmek ama farklı bir formatta sunmak isteyebilirsin. `@Transform()` decorator'ı tam bunun için vardır.

```typescript
import { Transform } from 'class-transformer';

export class KullaniciEntity {
  // Tarih -> "YYYY-MM-DD" string formatına dönüştür
  @Transform(({ value }) => value?.toISOString().split('T')[0])
  olusturmaTarihi: Date;

  // Boolean alanını "evet"/"hayır" string'e dönüştür
  @Transform(({ value }) => (value ? 'aktif' : 'pasif'))
  aktif: boolean;

  // Hassas sayısal ID'yi base64'e encode et
  @Transform(({ value }) => Buffer.from(String(value)).toString('base64'))
  disariyaAcilanId: number;
}
```

`@Transform()` callback'i bir nesne alır: `{ value, key, obj, type }`. `value` mevcut alan değeridir, `key` alan adıdır, `obj` tüm nesnedir. Bu sayede başka alanlara bağlı dönüşümler de yapabilirsin:

```typescript
// Tam adı birleştir, kaynak alanlara gerek yok
@Transform(({ obj }) => `${obj.ad} ${obj.soyad}`)
tamAd: string;
```

`@Transform()` hem serileştirme (yanıta yazarken) hem de deserileştirme (gelen JSON'u parse ederken) sırasında çalışır. Eğer yalnızca birine ihtiyacın varsa `toClassOnly` veya `toPlainOnly` seçeneklerini kullanabilirsin:

```typescript
// Sadece yanıta yazarken uygula, gelen veriyi dönüştürme
@Transform(({ value }) => value?.toISOString(), { toPlainOnly: true })
tarih: Date;
```

Serialization'ın güzelliği tek tanımla tüm yerlerde geçerli olması. Bir kez `KullaniciEntity`'yi doğru yapılandırdığında, bu entity'yi döndüren tüm endpoint'ler otomatik olarak doğru filtreleme ve dönüşümü uygular. Güvenlik katmanını presentation katmanıyla birleştirmiş ve merkezi bir yerden yönetir hale gelmiş olursun.
