# Servis Katmanı Organizasyonu

NestJS'te service katmanı, uygulamanın kalbini oluşturur. Controller HTTP isteklerini alır ve yanıt döner; ancak iş mantığı, veri erişimi ve hata yönetimi tamamen service'in sorumluluğundadır. Bu yazıda Prisma ile çalışırken service katmanını nasıl düzenleyeceğini, hataları nasıl ele alacağını ve transaction'larla atomik operasyonlar nasıl yazacağını göreceğiz.

## PrismaService ve Global Module

Prisma ile NestJS entegrasyonunun temel taşı `PrismaService`'tir. Bu service, `PrismaClient`'ı extend eder ve NestJS uygulama yaşam döngüsüyle entegre olur.

```typescript
// prisma/prisma.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
```

`PrismaModule`'ü `@Global()` olarak işaretlemek, bu service'i her feature module'de ayrıca import etme zorunluluğunu ortadan kaldırır:

```typescript
// prisma/prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

`@Global()` sayesinde `PrismaModule`'ü yalnızca `AppModule`'de bir kez import etmen yeterlidir. `KullanicilarModule`, `GonderilerModule` veya diğer feature module'ler `PrismaModule`'ü import etmeden doğrudan `PrismaService`'i constructor'larına inject edebilir.

**Singleton garantisi:** NestJS'in dependency injection container'ı varsayılan olarak her provider'ı singleton olarak yönetir. Yani uygulama boyunca tek bir `PrismaClient` instance'ı çalışır. Bu, bağlantı havuzu yönetimi açısından kritiktir — birden fazla `PrismaClient` instance'ı oluşturmak gereksiz kaynak tüketimine ve bağlantı sınırlarını aşmaya yol açabilir.

## Prisma Hata Kodları

Prisma, veritabanı hatalarını `PrismaClientKnownRequestError` sınıfıyla temsil eder ve her hataya bir kod atar. Bu kodları yakalayıp NestJS HTTP exception'larına dönüştürmek, service katmanının temel sorumluluklarından biridir.

Sık karşılaşılan hata kodları:

| Kod | Anlam | Önerilen HTTP Yanıt |
|-----|-------|---------------------|
| `P2002` | Unique constraint ihlali | 409 Conflict |
| `P2025` | Kayıt bulunamadı | 404 Not Found |
| `P2003` | Foreign key constraint ihlali | 400 Bad Request veya 422 |

```typescript
// Prisma hata kodlarını HTTP exception'a çevirme
import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class KullanicilarService {
  constructor(private readonly prisma: PrismaService) {}

  async olustur(data: Prisma.KullaniciCreateInput) {
    try {
      return await this.prisma.kullanici.create({ data });
    } catch (hata) {
      if (hata instanceof Prisma.PrismaClientKnownRequestError) {
        if (hata.code === 'P2002') {
          // Unique constraint — hangi alanın çakıştığını hata.meta?.target'dan alabiliriz
          throw new ConflictException('Bu e-posta adresi zaten kayıtlı');
        }
      }
      throw hata; // Beklenmeyen hatalar yukarı fırlatılır
    }
  }

  async bul(id: number) {
    return this.prisma.kullanici
      .findUniqueOrThrow({ where: { id } })
      .catch((hata) => {
        if (
          hata instanceof Prisma.PrismaClientKnownRequestError &&
          hata.code === 'P2025'
        ) {
          throw new NotFoundException(`${id} ID'li kullanıcı bulunamadı`);
        }
        throw hata;
      });
  }
}
```

`hata.meta?.target` alanı P2002 durumunda hangi alanın unique constraint'i ihlal ettiğini içerir. Bunu kullanarak daha açıklayıcı hata mesajları üretebilirsin; örneğin e-posta mı yoksa kullanıcı adı mı çakıştı, bunu ayırt edebilirsin.

P2003 (foreign key constraint) genellikle var olmayan bir ID'ye bağlanmaya çalışıldığında ortaya çıkar. Örneğin var olmayan bir yazarId ile gönderi oluşturmaya çalışmak bu hatayı tetikler. Bu durumu `BadRequestException` veya `UnprocessableEntityException` ile eşleştirebilirsin.

## findUniqueOrThrow vs findUnique

`findUnique` kayıt bulunamadığında `null` döner. Bu `null` değerini kontrol etmek ve `NotFoundException` fırlatmak tekrarlayan bir pattern haline gelir. `findUniqueOrThrow` bu işi Prisma seviyesinde otomatik yapar.

`findUnique` ile yazılan klasik yaklaşım:

```typescript
const kullanici = await this.prisma.kullanici.findUnique({ where: { id } });
if (!kullanici) {
  throw new NotFoundException(`${id} ID'li kullanıcı bulunamadı`);
}
return kullanici;
```

`findUniqueOrThrow` kullanarak aynı sonuç:

```typescript
async bul(id: number) {
  return this.prisma.kullanici
    .findUniqueOrThrow({ where: { id } })
    .catch((hata) => {
      if (
        hata instanceof Prisma.PrismaClientKnownRequestError &&
        hata.code === 'P2025'
      ) {
        throw new NotFoundException(`${id} ID'li kullanıcı bulunamadı`);
      }
      throw hata;
    });
}
```

`findUniqueOrThrow` bulamadığında `P2025` koduyla `PrismaClientKnownRequestError` fırlatır. Bunu yakalayıp NestJS'in `NotFoundException`'ına dönüştürürsün. Bu pattern, null kontrolünü unutma riskini ortadan kaldırır ve kodu daha az satırla ifade eder.

`findFirstOrThrow` da aynı şekilde çalışır; `findUnique` yerine `findFirst` kullandığın durumlarda geçerli alternatiftir.

## Transaction Kullanımı

Bir işlemin tamamlanması için birden fazla veritabanı operasyonunun hepsinin başarılı olması gerektiğinde transaction kullanırsın. Herhangi bir operasyon başarısız olursa önceki adımlar otomatik olarak geri alınır (rollback).

**Interactive transaction:** İşlemler arasında koşullu mantık çalıştırman gerekiyorsa bu yöntemi tercih edersin.

```typescript
// Interactive transaction — atomik operasyon
async transferYap(gonderenId: number, aliciId: number, miktar: number) {
  return this.prisma.$transaction(async (tx) => {
    const gonderen = await tx.hesap.update({
      where: { kullaniciId: gonderenId },
      data: { bakiye: { decrement: miktar } },
    });

    if (gonderen.bakiye < 0) {
      throw new Error('Yetersiz bakiye'); // Transaction otomatik rollback olur
    }

    return tx.hesap.update({
      where: { kullaniciId: aliciId },
      data: { bakiye: { increment: miktar } },
    });
  });
}
```

Interactive transaction'ın callback'i içinde `tx` nesnesini kullanırsın — doğrudan `this.prisma` değil. Callback içinde herhangi bir hata fırlatılırsa Prisma tüm değişiklikleri otomatik olarak geri alır. Yukarıdaki örnekte bakiye negatife düştüğünde hata fırlatıyoruz; böylece gönderenin bakiyesi düşmüş olsa bile transaction rollback olacağından gerçek bir değişiklik veritabanına yansımaz.

**Sequential transaction:** Birden fazla bağımsız sorguyu tek seferde atomik çalıştırmak istediğinde, aralarında koşullu mantık yoksa sequential yöntemi kullanabilirsin.

```typescript
// Sequential transaction — birden fazla sorguyu atomik çalıştır
async istatistikGetir() {
  const [toplam, aktif, bugunEklenen] = await this.prisma.$transaction([
    this.prisma.kullanici.count(),
    this.prisma.kullanici.count({ where: { aktif: true } }),
    this.prisma.kullanici.count({
      where: { olusturma: { gte: new Date(new Date().setHours(0, 0, 0, 0)) } },
    }),
  ]);
  return { toplam, aktif, bugunEklenen };
}
```

Sequential transaction, bir dizi Prisma sorgusu alır ve bunları tek bir veritabanı transaction'ında çalıştırır. Sonuçlar dizi sıralamasıyla eşleşir, bu yüzden destructuring ile kolayca alabilirsin. Bu yöntem özellikle dashboard istatistikleri gibi tutarlı snapshot almak istediğin durumlarda kullanışlıdır.

Transaction'lar uzun sürdüğünde veritabanı bağlantısını bloke edebilir. Mümkün olduğunca kısa tutmaya çalış ve transaction içinde harici API çağrısı veya dosya işlemi gibi uzun süren işlemler yapma.

## Servis Sorumluluğu Sınırları

Service katmanını temiz tutmanın en önemli kuralı sorumlulukları net olarak ayırmaktır.

**Service'e ait:**
- İş mantığı (business logic): "Bu kullanıcı bu işlemi yapabilir mi?", "Bakiye yeterli mi?"
- Veri erişimi: Prisma sorguları, veri dönüşümleri
- Hata yönetimi: Prisma hatalarını anlamlı exception'lara çevirme
- Transaction koordinasyonu: Birden fazla operasyonun atomik yürütülmesi

**Service'e ait olmayan:**
- HTTP status code kararları: Bu controller'ın işi. Service `NotFoundException` fırlatır; 404'ü HTTP yanıtına çevirmek NestJS'in ve controller'ın sorumluluğudur.
- Request parsing: Body, param, query parse etmek controller'da yapılır.
- Response formatlaması: Yanıt nesnesini HTTP formatına dönüştürmek controller ve serialization katmanına aittir.

Bu ayrımı koruduğunda service'ini HTTP'den bağımsız hale getirirsin. Yarın aynı service'i bir gRPC endpoint'ten ya da bir message queue consumer'ından çağırabilirsin — HTTP katmanına bağımlı olmadığı için herhangi bir değişiklik gerektirmez.

Controller ne kadar ince (thin) olursa o kadar iyi. Ideal controller şöyle görünür:

```typescript
@Get(':id')
async getir(@Param('id', ParseIntPipe) id: number) {
  return this.kullanicilarService.bul(id);
}
```

Tek satır: service'i çağır, sonucu dön. Hata yönetimi, veri dönüşümü, iş kuralı — bunların hiçbiri controller'da olmaz.

## Type-Safe Prisma Girdileri

Prisma, schema'dan otomatik olarak TypeScript tipleri üretir. Bu tipleri DTO yerine doğrudan kullanmak hem güvenlik sağlar hem de schema değişikliklerini anında yansıtır.

`Prisma.KullaniciCreateInput` kullanmanın avantajı: schema'ya yeni zorunlu bir alan eklediğinde TypeScript seni hemen uyarır. DTO üzerinden gidersen bu uyarıyı kaçırabilirsin.

```typescript
async olustur(data: Prisma.KullaniciCreateInput) {
  return this.prisma.kullanici.create({ data });
}

async guncelle(id: number, data: Prisma.KullaniciUpdateInput) {
  return this.prisma.kullanici.update({ where: { id }, data });
}
```

`Prisma.KullaniciUpdateInput` tüm alanları opsiyonel olarak tanımlar, bu yüzden partial update için ayrıca `Partial<>` kullanmana gerek kalmaz.

Ancak her zaman Prisma girdisini doğrudan kullanmak uygun olmayabilir. Özellikle hassas alanları (şifre hash'leme gibi) service katmanında eklemen gerektiğinde ya da controller'dan gelen DTO'nun bazı alanlarını dönüştürmen gerektiğinde, DTO'yu alıp alanları manuel seçebilirsin:

```typescript
async olustur(dto: KullaniciOlusturDto) {
  const hashliSifre = await bcrypt.hash(dto.sifre, 10);
  return this.prisma.kullanici.create({
    data: {
      ad: dto.ad,
      email: dto.email,
      sifre: hashliSifre, // DTO'dan değil, service'den geliyor
    },
  });
}
```

Bu yaklaşımda DTO validasyon sorumluluğunu üstlenir (NestJS pipes ile), service ise iş mantığını ve veri dönüşümünü üstlenir. İki katmanın sorumluluğu net biçimde ayrışır.

Service katmanını bu prensipler etrafında organize ettiğinde — global PrismaService, tutarlı hata yönetimi, uygun transaction kullanımı ve net sorumluluk sınırları — hem test edilmesi kolay hem de bakımı sürdürülebilir bir mimari elde edersin.
