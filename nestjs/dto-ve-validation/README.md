# DTO ve Validation

Bir API endpoint'i açtığında dışarıdan gelen veriyi körü körüne güvenemezsin. Kullanıcı sana beklediğin formatta, beklediğin tipte, beklediğin uzunlukta veri göndermeyebilir — bazen kasıtlı, bazen farkında olmadan. DTO ve validation katmanı bu sorunu sistematik olarak çözer: gelen veriyi kapıda kontrol eder, beklenmedik alanları eler, hataları anlamlı mesajlarla geri döndürür.

## DTO Nedir?

DTO, Data Transfer Object kelimelerinin kısaltmasıdır. Bir katmandan diğerine taşınan verinin şeklini tanımlayan sınıftır. NestJS'te DTO'lar genellikle HTTP isteğinin body'sini temsil eder: hangi alanlar var, hangi tiplerde, hangi kısıtlamalarla.

Neden interface değil, sınıf kullanıyoruz? TypeScript interface'leri derleme sonrasında tamamen silinir — JavaScript'te karşılıkları olmaz. Oysa `class-validator` kütüphanesi, decorator'ların çalışabilmesi için çalışma zamanında metadata'ya ihtiyaç duyar. Sınıflar JavaScript'te varlığını korur ve TypeScript'in emit ettiği metadata ile birlikte `class-validator` decorator'ları doğru çalışır.

Bir başka ince ama kritik nokta: `import type { CreateKullaniciDto }` yazmak TypeScript'e "bunu sadece tip olarak kullan, çalışma zamanında silmesine izin ver" demektir. Bu yüzden DTO sınıflarını her zaman düz `import { CreateKullaniciDto }` şeklinde import etmelisin. `import type` kullandığında `class-transformer` sınıfı çalışma zamanında bulamaz ve validation sessizce çalışmaz hale gelir — hata da vermez, sadece işe yaramaz.

## Kurulum

Projeye üç paket ekliyoruz:

```bash
npm install class-validator class-transformer @nestjs/mapped-types
```

- `class-validator` — decorator tabanlı validation kurallarını sağlar
- `class-transformer` — plain JavaScript nesnelerini sınıf örneklerine dönüştürür; `@Type()` decorator'ı bunun içinden gelir
- `@nestjs/mapped-types` — `PartialType`, `PickType`, `OmitType`, `IntersectionType` yardımcılarını sağlar

## class-validator Dekoratörleri

`class-validator` yüzlerce decorator içerir ama günlük işlerin büyük çoğunluğunda aşağıdakiler yeterli gelir.

**Tip kontrolü:**

```typescript
@IsString()       // string olmalı
@IsNumber()       // number olmalı (float dahil)
@IsInt()          // tam sayı olmalı
@IsBoolean()      // boolean olmalı
@IsEmail()        // geçerli e-posta formatı
@IsUrl()          // geçerli URL formatı
```

**Varlık kontrolü:**

```typescript
@IsNotEmpty()     // boş string, null, undefined geçmez
@IsOptional()     // alan yoksa validation'ı atla; varsa kuralları uygula
```

`@IsOptional()` önemli bir nüans içerir: alan tamamen yoksa (undefined) diğer decorator'ları tetiklemez. Ama alan varsa ve yanlış tipteyse hata fırlatır. Yani "gönderme ya da doğru gönder" demektir.

**Uzunluk ve boyut:**

```typescript
@MinLength(2)     // string en az 2 karakter
@MaxLength(50)    // string en fazla 50 karakter
@Min(0)           // sayı en az 0
@Max(100)         // sayı en fazla 100
```

**Koleksiyon ve özel tipler:**

```typescript
@IsEnum(Rol)      // sadece enum değerlerinden biri
@IsArray()        // dizi olmalı
@ValidateNested() // iç içe nesneyi de validate et (aşağıda detay var)
```

Her decorator özel hata mesajı alabilir. İkinci parametre olarak `{ message: '...' }` geçersin:

```typescript
@MinLength(8, { message: 'Şifre en az 8 karakter olmalıdır' })
@IsEmail({}, { message: 'Geçerli bir e-posta adresi girin' })
@Min(18, { message: '18 yaşından küçük kullanıcı kaydedilemez' })
```

Mesajı dinamik yapmak istersen fonksiyon da verebilirsin:

```typescript
@MinLength(2, {
  message: (args) => `${args.property} en az ${args.constraints[0]} karakter olmalıdır`,
})
```

Tam bir DTO örneği:

```typescript
// create-kullanici.dto.ts
import {
  IsString,
  IsEmail,
  IsInt,
  Min,
  Max,
  MinLength,
  IsOptional,
  IsEnum,
} from 'class-validator';

export enum Rol {
  Admin = 'admin',
  Kullanici = 'kullanici',
}

export class CreateKullaniciDto {
  @IsString()
  @MinLength(2, { message: 'Ad en az 2 karakter olmalıdır' })
  ad: string;

  @IsEmail({}, { message: 'Geçerli bir e-posta adresi girin' })
  email: string;

  @IsInt()
  @Min(18, { message: '18 yaşından küçük kullanıcı kaydedilemez' })
  @Max(120)
  yas: number;

  @IsEnum(Rol)
  rol: Rol;

  @IsString()
  @IsOptional()
  bio?: string;
}
```

Bu DTO'yu controller'da kullanmak için `@Body()` decorator'ıyla alırsın:

```typescript
@Post()
olustur(@Body() dto: CreateKullaniciDto) {
  return this.kullanicilarService.olustur(dto);
}
```

Validation hatası olduğunda NestJS otomatik olarak 400 Bad Request döner ve hangi alanların neden hatalı olduğunu listeler.

## ValidationPipe Kurulumu

Decorator'ları yazmak yeterli değil — bunları tetikleyecek bir `ValidationPipe` kurman gerekir. En yaygın yaklaşım global pipe olarak tanımlamaktır.

```typescript
// main.ts — ValidationPipe global kurulum
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // DTO'da tanımsız alanları sil
      forbidNonWhitelisted: true,   // Tanımsız alan gelirse 400 fırlat
      transform: true,             // Gelen veriyi DTO tipine dönüştür
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

Bu üç seçeneği anlamak önemli:

**`whitelist: true`** — DTO sınıfında decorator'ı olmayan her alanı gelen nesneden siler. Kullanıcı `{ ad: 'Ali', admin: true }` gönderirse, `admin` alanı DTO'nda tanımlı olmadığı için sessizce silinir. Bu, beklenmedik veriyi veritabanına taşıma riskini azaltır.

**`forbidNonWhitelisted: true`** — `whitelist`'i bir adım ileri taşır. Bilinmeyen alan geldiğinde sessizce silmek yerine 400 hatası fırlatır. Hangi davranışı tercih edeceğin uygulamanın tolerans seviyesine bağlıdır; API sözleşmesine sıkı uymak istiyorsan `forbidNonWhitelisted` daha doğru seçimdir.

**`transform: true`** — HTTP üzerinden gelen her şey başlangıçta string'dir. Route parametre olarak gelen `"42"` sayısını `ParseIntPipe` olmadan DTO'nun `number` alanına atayamazsın. `transform: true` olduğunda `ValidationPipe` bu dönüşümü otomatik yapar: DTO'da `yas: number` tanımlıysa ve `"25"` string'i gelirse, sınıf örneği oluşturulurken `25` sayısına çevrilir.

**Dependency injection gerektiren global pipe:**

`app.useGlobalPipes()` NestJS DI container'ının dışında çalışır — yani pipe içinde servis inject edemezsin. Pipe'ın başka servislere ihtiyacı varsa `APP_PIPE` token'ını kullanman gerekir:

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    },
  ],
})
export class AppModule {}
```

Bu yöntemle NestJS pipe'ı kendi DI container'ı içinde yönetir.

## DTO Türetme — PartialType ve PickType

Bir kaynak için genellikle birden fazla DTO yazman gerekir: oluştururken tüm alanlar zorunludur, güncellerken bir kısmı opsiyonel olabilir, farklı bir endpoint sadece belirli alanları alabilir. Her seferinde sıfırdan yazmak hem tekrar hem de bakım yükü yaratır. `@nestjs/mapped-types` bu problemi çözer.

**`PartialType`** — Verilen DTO'nun tüm alanlarını opsiyonel yapar. `@IsOptional()` decorator'ını elle eklemen gerekmez, bu otomatik yapılır. PATCH endpoint'leri için idealdir çünkü kullanıcı sadece değiştirmek istediği alanları gönderir:

```typescript
// update-kullanici.dto.ts — PartialType
import { PartialType } from '@nestjs/mapped-types';
import { CreateKullaniciDto } from './create-kullanici.dto';

// Tüm alanlar opsiyonel hale gelir — PATCH istekleri için ideal
export class UpdateKullaniciDto extends PartialType(CreateKullaniciDto) {}
```

**`PickType`** — Kaynak DTO'dan sadece belirli alanları seçer. Örneğin şifre sıfırlama endpoint'i sadece `email` alanına ihtiyaç duyuyorsa:

```typescript
import { PickType } from '@nestjs/mapped-types';
import { CreateKullaniciDto } from './create-kullanici.dto';

export class SifreSifirlaDto extends PickType(CreateKullaniciDto, ['email']) {}
```

**`OmitType`** — `PickType`'ın tersidir: listenen alanlar dışında kalanları alır. Kayıt DTO'sundan `id` veya `olusturmaTarihi` gibi alanları çıkarmak için kullanışlıdır:

```typescript
import { OmitType } from '@nestjs/mapped-types';
import { KullaniciDto } from './kullanici.dto';

export class CreateKullaniciDto extends OmitType(KullaniciDto, ['id', 'olusturmaTarihi']) {}
```

**`IntersectionType`** — İki DTO'yu birleştirir. Her iki sınıftaki tüm alanlar yeni DTO'da bulunur:

```typescript
import { IntersectionType } from '@nestjs/mapped-types';
import { CreateKullaniciDto } from './create-kullanici.dto';
import { ProfilDto } from './profil.dto';

export class KullaniciProfilDto extends IntersectionType(CreateKullaniciDto, ProfilDto) {}
```

Bu yardımcılar validation kurallarını da taşır — orijinal DTO'daki decorator'lar türetilmiş sınıflarda da aktif kalır.

## Nested Validation

Gelen veri iç içe nesneler içerebilir. Örneğin bir sipariş DTO'su, teslimat adresi için ayrı bir nesne barındırabilir. `@ValidateNested()` bu iç nesneyi de validate etmeni sağlar.

Ama sadece `@ValidateNested()` yazmak yetmez. `ValidationPipe` gelen JSON'ı plain JavaScript nesnesine çevirir; `class-validator`'ın iç nesneyi validate edebilmesi için onu ilgili DTO sınıfının bir örneğine dönüştürmesi gerekir. Bu dönüşümü `@Type(() => AdresDto)` decorator'ı yapar — `class-transformer` kütüphanesinden gelir.

```typescript
import { IsString, IsNotEmpty, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class AdresDto {
  @IsString()
  @IsNotEmpty()
  sehir: string;

  @IsString()
  @IsNotEmpty()
  ilce: string;

  @IsString()
  postaKodu: string;
}

export class CreateSiparisDto {
  @IsArray()
  @IsNotEmpty({ each: true })
  urunIdleri: string[];

  @ValidateNested()
  @Type(() => AdresDto)  // class-transformer: plain nesneyi AdresDto'ya çevir
  teslimatAdresi: AdresDto;
}
```

`@Type(() => AdresDto)` olmadan `ValidationPipe` iç nesneyi plain JavaScript nesnesi olarak bırakır ve `AdresDto`'daki decorator'lar hiçbir zaman çalışmaz. Hata da vermez — sadece validation yapılmaz. Bu, fark edilmesi güç bir hatadır.

Dizi içindeki nesneleri validate etmek istediğinde `each: true` seçeneğini eklersin:

```typescript
@ValidateNested({ each: true })
@Type(() => UrunDto)
urunler: UrunDto[];
```

Bu yapı her dizi elemanını ayrı ayrı validate eder.

---

DTO ve validation katmanı doğru kurulduğunda controller'ların içi temizlenir: tür kontrolü, alan varlığı, format doğrulama gibi işlerle controller veya servis uğraşmaz. Gelen veri ya DTO sözleşmesine uyar ve handler'a ulaşır, ya da uygun bir 400 hatası fırlatılır. Bu ayrım hem güvenliği hem okunabilirliği doğrudan etkiler.
