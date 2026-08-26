# Prisma Kurulum ve Schema

NestJS projelerinde veritabanı işlemlerini yönetmek için birden fazla seçenek var: TypeORM, Sequelize, MikroORM ve daha fazlası. Ama son birkaç yılda Prisma bu alanda ciddi bir popülerlik kazandı. Bunun arkasında yatan nedenleri anlamak için Prisma'nın ne olduğuna ve nasıl çalıştığına bakmak gerekiyor.

## Prisma Nedir?

Prisma, Node.js ve TypeScript için geliştirilmiş, tip güvenli (type-safe) bir ORM'dir. Klasik ORM'lerden farklı olarak schema-first bir yaklaşım benimser: veritabanı yapını kod içinde değil, ayrı bir `.prisma` dosyasında tanımlarsın. Bu dosyadan hem veritabanı migration'ları hem de TypeScript tipleri otomatik olarak üretilir.

Prisma üç ana bileşenden oluşur:

**Prisma Client** — Uygulamanda kullandığın sorgu kütüphanesi. `schema.prisma` dosyana bakarak tamamen tip güvenli bir istemci üretir. `prisma.kullanici.findMany()` yazdığında IDE'n hangi alanların döneceğini, hangi filtreleri kullanabileceğini hemen gösterir.

**Prisma Migrate** — Veritabanı şema değişikliklerini yöneten migration sistemi. `schema.prisma` dosyanda yaptığın değişikliklerden SQL migration dosyaları üretir ve bunları sürüm kontrolüne ekler.

**Prisma Studio** — Veritabanını görsel olarak incelemene ve düzenleme yapmanı sağlayan bir arayüz. Geliştirme sürecinde verilerle hızlıca çalışmak için kullanışlıdır.

Schema-first yaklaşımın pratik bir avantajı şudur: veritabanı modellerini tek bir yerde tanımlarsın, Prisma geri kalan her şeyi senin için halleder. TypeScript tiplerinle veritabanı schema'n her zaman senkronda kalır.

## Kurulum

Yeni bir NestJS projesine Prisma eklemek için iki paket kurman gerekiyor:

```bash
# Kurulum
npm install prisma @prisma/client
npx prisma init

# Migration oluştur ve uygula (development)
npx prisma migrate dev --name ilk-migration

# Prisma Client yeniden üret (schema değişikliğinden sonra)
npx prisma generate

# Veritabanını görsel incele
npx prisma studio
```

`prisma` paketi geliştirme aracıdır: CLI komutlarını, migration motorunu ve Prisma Studio'yu içerir. `@prisma/client` ise uygulamanın runtime'da kullandığı istemci paketidir.

`npx prisma init` komutunu çalıştırdıktan sonra projende iki şey oluşur:

- `prisma/schema.prisma` — Tüm veritabanı modellerini tanımladığın ana dosya
- `.env` — `DATABASE_URL` ortam değişkenini tutan dosya

`.env` dosyasını `.gitignore`'a eklemeyi unutma; veritabanı bağlantı bilgilerin versiyon kontrolüne girmemeli.

## schema.prisma Dosyası

`schema.prisma` dosyası üç ana bloktan oluşur: `generator`, `datasource` ve `model` tanımları.

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"  // mysql, sqlite, sqlserver da desteklenir
  url      = env("DATABASE_URL")
}

model Kullanici {
  id         Int      @id @default(autoincrement())
  email      String   @unique
  ad         String
  sifre      String
  olusturma  DateTime @default(now())
  guncelleme DateTime @updatedAt

  gonderiler Gonderi[]
}

model Gonderi {
  id         Int      @id @default(autoincrement())
  baslik     String
  icerik     String?  // Opsiyonel alan
  yayinlandi Boolean  @default(false)
  olusturma  DateTime @default(now())

  yazar   Kullanici @relation(fields: [yazarId], references: [id], onDelete: Cascade)
  yazarId Int
}
```

`generator client` bloğu, `npx prisma generate` çalıştırıldığında hangi istemcinin üretileceğini belirtir. Varsayılan değer `prisma-client-js`'tir ve bu değeri nadiren değiştirirsin.

`datasource db` bloğu veritabanı bağlantı ayarlarını içerir. `provider` alanına `postgresql`, `mysql`, `sqlite` veya `sqlserver` yazabilirsin. `url` değeri `.env` dosyasındaki `DATABASE_URL` değişkeninden okunur. Tipik bir PostgreSQL bağlantı stringi şöyle görünür:

```
DATABASE_URL="postgresql://kullanici:sifre@localhost:5432/veritabani_adi?schema=public"
```

## Model Tanımlama

Her `model` bloğu, veritabanında bir tabloya karşılık gelir. Alanlar `ad tip @nitelikler` formatında tanımlanır.

**ID ve varsayılan değerler:**

- `@id` — Primary key olarak işaretler
- `@default(autoincrement())` — Otomatik artan integer ID
- `@default(cuid())` — Çakışma olasılığı çok düşük, URL-dostu string ID
- `@default(uuid())` — Standart UUID formatında string ID

**Kısıtlamalar:**

- `@unique` — Alanın benzersiz olmasını zorunlu kılar, veritabanında unique index oluşturur

**Zaman damgaları:**

- `@default(now())` — Kayıt oluşturulduğunda geçerli zamanı atar
- `@updatedAt` — Kayıt her güncellendiğinde otomatik olarak güncellenir

**Alan tipleri:**

Prisma aşağıdaki temel tipleri destekler:

- `String` — Metin
- `Int` — Tam sayı
- `Float` — Ondalıklı sayı
- `Boolean` — true/false
- `DateTime` — Tarih ve zaman
- `Json` — JSON veri (PostgreSQL ve MySQL'de desteklenir)

**Opsiyonel alanlar:**

Bir alanın sonuna `?` eklersen o alan opsiyonel olur; veritabanında `NULL` değer alabilir:

```prisma
icerik String?  // NULL olabilir
```

`?` olmayan alanlar zorunludur; veritabanında `NOT NULL` kısıtı uygulanır.

## Migration Çalıştırmak

Schema'nı değiştirdikten sonra bu değişiklikleri veritabanına yansıtman gerekir. Bunu yapmanın üç farklı yolu var:

**`npx prisma migrate dev --name migration-adi`** — Geliştirme ortamı için temel komut. `prisma/migrations/` klasöründe SQL içeren migration dosyaları oluşturur, bunları veritabanına uygular ve Prisma Client'ı yeniden üretir. Migration adını açıklayıcı tut: `kullanici-tablosu-olustur`, `gonderi-baslik-zorunlu`, `kategori-eklendi` gibi.

**`npx prisma migrate deploy`** — Production ortamı için. Yeni migration dosyaları oluşturmaz; sadece `prisma/migrations/` klasöründeki bekleyen migration'ları sırayla uygular. CI/CD pipeline'ında bu komutu kullan.

**`npx prisma db push`** — Schema'yı doğrudan veritabanına iter, migration dosyası oluşturmaz. Prototip geliştirirken veya schema'yı hızlıca denemek istediğinde kullanışlıdır. Ama production'da veya takım ortamında kullanmaktan kaçın; değişiklik geçmişi tutulmaz.

Özet olarak: geliştirme sırasında `migrate dev`, production'a deploy ederken `migrate deploy`, hızlı prototiplerde `db push`.

## PrismaService Oluşturma

Prisma'yı NestJS'in dependency injection sistemine entegre etmek için bir service oluşturman gerekiyor. Bu service `PrismaClient`'ı extend eder ve `OnModuleInit` arayüzünü implement eder:

```typescript
// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
```

`OnModuleInit` lifecycle hook'u, NestJS modülü başlatıldığında `onModuleInit()` metodunu çağırır. Burada `this.$connect()` ile veritabanı bağlantısını kuruyoruz. `PrismaClient`'ı extend ettiğimiz için `this.kullanici`, `this.gonderi` gibi tüm Prisma sorgularına doğrudan `PrismaService` üzerinden erişilebilir.

Bu service'i tüm modüllere otomatik olarak sağlamak için `@Global()` decorator'ı kullanarak global bir module oluşturuyoruz:

```typescript
// src/prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()  // Tüm modüllerde import gerektirmeden kullanılabilir
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

`@Global()` decorator'ı bu module'ü uygulama genelinde erişilebilir kılar. Başka bir module'de `PrismaModule`'ü `imports` dizisine eklemenе gerek kalmaz; `PrismaService`'i doğrudan inject edebilirsin.

Son adım olarak `PrismaModule`'ü `AppModule`'e ekle:

```typescript
// app.module.ts — PrismaModule'ü ekle
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
})
export class AppModule {}
```

Bu yapıyı kurduktan sonra herhangi bir service'de `PrismaService`'i inject edip kullanabilirsin:

```typescript
@Injectable()
export class KullanicilarService {
  constructor(private readonly prisma: PrismaService) {}

  async tumunuGetir() {
    return this.prisma.kullanici.findMany();
  }
}
```

## Prisma Studio

Geliştirme sürecinde veritabanını görsel olarak incelemek istediğinde `npx prisma studio` komutu işe yarıyor. Bu komut varsayılan olarak `http://localhost:5555` adresinde bir web arayüzü açar.

Prisma Studio üzerinden tablolardaki kayıtları görüntüleyebilir, yeni kayıt ekleyebilir, mevcut kayıtları düzenleyebilir ve silebilirsin. İlişkili tablolar arasında gezinmek de mümkün: bir kullanıcının tüm gönderilerini görmek için ilgili kaydın üzerine tıklaman yeterli.

Bu araç tamamen geliştirme amaçlıdır; production ortamında kullanmamalısın. Ama bir bug'ı araştırırken veya test verisi oluştururken oldukça zaman kazandırır.

---

Prisma'yı kurduğuna ve `PrismaService`'i NestJS'e entegre ettiğine göre artık gerçek CRUD sorguları yazmaya geçebilirsin. Bir sonraki bölümde `create`, `findMany`, `update`, `delete` gibi temel Prisma metotlarını ve bunları service katmanında nasıl kullanacağını göreceğiz.
