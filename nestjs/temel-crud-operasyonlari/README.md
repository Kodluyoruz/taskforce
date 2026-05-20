# Temel CRUD Operasyonları

`PrismaService`'i NestJS'e entegre ettiğine göre artık veritabanı sorgularını yazmaya hazırsın. Prisma Client'ın sunduğu metotlar oldukça okunabilir ve tip güvenlidir: yazdığın her sorgu, `schema.prisma` dosyana göre üretilmiş TypeScript tipleriyle desteklenir. Bu bölümde temel CRUD operasyonlarını — oluşturma, okuma, güncelleme ve silme — nasıl gerçekleştireceğini göreceğiz.

## Prisma Client ile Temel Metotlar

Prisma Client, her model için aynı arayüzü sunar. `kullanici` modelin varsa `this.prisma.kullanici` üzerinden, `gonderi` modelin varsa `this.prisma.gonderi` üzerinden erişirsin. Her iki model de aynı metot setine sahiptir:

- `create` — Yeni bir kayıt oluşturur
- `findMany` — Koşula uyan tüm kayıtları getirir
- `findUnique` — Benzersiz bir alana (ID veya unique alan) göre tek kayıt getirir; bulamazsa `null` döner
- `findUniqueOrThrow` — `findUnique` gibi çalışır, ancak kayıt bulunamazsa otomatik olarak hata fırlatır
- `update` — Koşula uyan kaydı günceller
- `delete` — Koşula uyan kaydı siler

`findUnique` mi yoksa `findUniqueOrThrow` mu kullanmalısın? Çoğu durumda `findUniqueOrThrow` daha güvenli bir seçimdir. `findUnique` `null` döndürdüğünde bunu elle kontrol edip `NotFoundException` fırlatman gerekir; `findUniqueOrThrow` ise bu adımı otomatikleştirir. Yine de hata mesajını özelleştirmek istiyorsan `.catch()` ile yakalayıp kendi exception'ını fırlatabilirsin.

## Veri Oluşturma — create

`create` metodu `data` alanını alır. Tip güvenliği sayesinde Prisma, hangi alanların zorunlu olduğunu ve hangi tiplerin beklediğini derleme zamanında bildirir:

```typescript
const yeniKullanici = await this.prisma.kullanici.create({
  data: {
    email: 'ali@ornek.com',
    ad: 'Ali',
    sifre: 'hashlenmisSifre',
  },
});
```

Varsayılan olarak `create` tüm alanları döndürür — `sifre` dahil. Hassas alanları yanıttan çıkarmak için `select` kullan:

```typescript
const yeniKullanici = await this.prisma.kullanici.create({
  data: {
    email: 'ali@ornek.com',
    ad: 'Ali',
    sifre: 'hashlenmisSifre',
  },
  select: {
    id: true,
    email: true,
    ad: true,
    olusturma: true,
    // sifre burada yok — yanıtta yer almayacak
  },
});
```

`select` kullandığında dönen nesnenin TypeScript tipi de buna göre daralır. `yeniKullanici.sifre` yazmaya çalışsan derleme hatası alırsın; bu da yanlışlıkla hassas veriyi döndürme riskini ortadan kaldırır.

## Veri Okuma — findMany ve findUnique

`findMany` birden fazla kayıt getirmek için kullanılır. Parametresiz çağırırsan tablodaki tüm kayıtları döndürür, ama çoğu zaman filtreleme ve sıralama eklemek istersin:

```typescript
// Yayınlanmış gönderileri yeniden eskiye sırala
const gonderiler = await this.prisma.gonderi.findMany({
  where: { yayinlandi: true },
  orderBy: { olusturma: 'desc' },
});
```

`where` ile birden fazla koşul birleştirebilirsin. Prisma bunları varsayılan olarak `AND` ile birleştirir:

```typescript
const gonderiler = await this.prisma.gonderi.findMany({
  where: {
    yayinlandi: true,
    yazarId: 5,
  },
  orderBy: { baslik: 'asc' },
  take: 10,   // en fazla 10 kayıt
  skip: 20,   // ilk 20 kaydı atla
});
```

`take` ve `skip` sayfalama için kullandığın parametrelerdir. `take` döndürülecek maksimum kayıt sayısını, `skip` baştan kaç kaydın atlanacağını belirler.

`findUniqueOrThrow` ile ID'ye göre tek bir kayıt getirebilirsin:

```typescript
const kullanici = await this.prisma.kullanici.findUniqueOrThrow({
  where: { id: 1 },
});
```

Eğer `id: 1` olan kayıt yoksa Prisma bir hata fırlatır. Bunu yakalayıp özelleştirmek için:

```typescript
const kullanici = await this.prisma.kullanici
  .findUniqueOrThrow({ where: { id } })
  .catch(() => {
    throw new NotFoundException(`${id} ID'li kullanıcı bulunamadı`);
  });
```

## Veri Güncelleme — update

`update` metodu iki zorunlu alan alır: `where` ile kaydı bul, `data` ile ne değiştireceğini belirt:

```typescript
const guncellendi = await this.prisma.kullanici.update({
  where: { id: 1 },
  data: { ad: 'Yeni Ad' },
});
```

Sadece `data` içinde belirttiğin alanlar güncellenir; diğer alanlar dokunulmadan kalır.

Sayısal alanlarda atomik operasyonlar kullanabilirsin. Bir kaydı önce okuyup sonra yazmak yerine doğrudan veritabanı seviyesinde işlem yaparsın:

```typescript
// Görüntülenme sayısını artır
await this.prisma.gonderi.update({
  where: { id: 1 },
  data: {
    goruntulenmeSayisi: { increment: 1 },
  },
});

// Puana çarp veya böl
await this.prisma.kullanici.update({
  where: { id: 1 },
  data: {
    puan: { multiply: 2 },
  },
});
```

Desteklenen atomik operasyonlar: `increment`, `decrement`, `multiply`, `divide`, `set`. `set` mevcut değerden bağımsız olarak doğrudan bir değer atar.

## Veri Silme — delete

`delete` metodu `where` ile silinecek kaydı belirler:

```typescript
const silindi = await this.prisma.kullanici.delete({
  where: { id: 1 },
});
```

Kayıt bulunamazsa Prisma hata fırlatır. Schema'nda `onDelete: Cascade` tanımladıysan ilişkili kayıtlar da otomatik olarak silinir.

## Tam CRUD Service Örneği

Aşağıdaki service tüm operasyonları bir arada gösteriyor. Update ve delete işlemlerinde önce kaydın varlığı doğrulanıyor; böylece veritabanı hatası yerine anlamlı bir HTTP hatası dönüyor:

```typescript
// kullanicilar.service.ts — tam CRUD service
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class KullanicilarService {
  constructor(private readonly prisma: PrismaService) {}

  async olustur(data: Prisma.KullaniciCreateInput) {
    return this.prisma.kullanici.create({ data });
  }

  async tumunuGetir() {
    return this.prisma.kullanici.findMany({
      orderBy: { olusturma: 'desc' },
      select: {
        id: true,
        ad: true,
        email: true,
        olusturma: true,
        // sifre seçilmedi — yanıtta yer almaz
      },
    });
  }

  async biriniGetir(id: number) {
    // findUniqueOrThrow — bulamazsa otomatik hata fırlatır
    return this.prisma.kullanici.findUniqueOrThrow({
      where: { id },
    }).catch(() => {
      throw new NotFoundException(`${id} ID'li kullanıcı bulunamadı`);
    });
  }

  async guncelle(id: number, data: Prisma.KullaniciUpdateInput) {
    await this.biriniGetir(id); // önce varlığını doğrula
    return this.prisma.kullanici.update({
      where: { id },
      data,
    });
  }

  async sil(id: number) {
    await this.biriniGetir(id); // önce varlığını doğrula
    return this.prisma.kullanici.delete({ where: { id } });
  }

  async sayfalayarakGetir(sayfa: number, sayfaBasi: number) {
    const atla = (sayfa - 1) * sayfaBasi;
    const [veri, toplam] = await this.prisma.$transaction([
      this.prisma.kullanici.findMany({
        skip: atla,
        take: sayfaBasi,
        orderBy: { olusturma: 'desc' },
        select: { id: true, ad: true, email: true },
      }),
      this.prisma.kullanici.count(),
    ]);
    return { veri, toplam, sayfa, sayfaBasi, toplamSayfa: Math.ceil(toplam / sayfaBasi) };
  }
}
```

`Prisma.KullaniciCreateInput` ve `Prisma.KullaniciUpdateInput` tipleri Prisma tarafından otomatik üretilir. `create` için zorunlu alanları, `update` için tüm alanları opsiyonel olarak içerirler. Bu tipleri kullanmak DTO yazma yükünü azaltır; ancak daha fazla kontrol istiyorsan kendi DTO sınıflarını yazıp Prisma tiplerine dönüştürebilirsin.

`tumunuGetir` metodunda `select` ile `sifre` alanını kasıtlı olarak dışarıda bıraktık. Veritabanından veri çekilse de yanıtta yer almaz. Bu, controller katmanında `@Exclude()` decorator'ları kullanmaktan daha güvenli bir yaklaşımdır; çünkü alan hiç yüklenmez.

## Sayfalama Paterni

Büyük veri setleriyle çalışırken tüm kayıtları tek seferde çekmek hem yavaş hem de gereksizdir. `skip`/`take` tabanlı sayfalama bu sorunu çözer:

```typescript
async sayfalayarakGetir(sayfa: number, sayfaBasi: number) {
  const atla = (sayfa - 1) * sayfaBasi;

  const [veri, toplam] = await this.prisma.$transaction([
    this.prisma.kullanici.findMany({
      skip: atla,
      take: sayfaBasi,
      orderBy: { olusturma: 'desc' },
      select: { id: true, ad: true, email: true },
    }),
    this.prisma.kullanici.count(),
  ]);

  return {
    veri,
    toplam,
    sayfa,
    sayfaBasi,
    toplamSayfa: Math.ceil(toplam / sayfaBasi),
  };
}
```

Burada dikkat çeken nokta `$transaction` kullanımıdır. `findMany` ve `count` sorgularını aynı transaction içinde çalıştırarak tutarlı veri elde ediyoruz. İki sorguyu ayrı ayrı yapsaydık, aralarında yeni bir kayıt eklenebilir veya silinebilirdi — bu da sayfa sayısı hesabını hatalı yapardı.

Controller katmanında bu metodu şöyle çağırırsın:

```typescript
@Get()
getKullanicilar(
  @Query('sayfa') sayfa = '1',
  @Query('sayfaBasi') sayfaBasi = '10',
) {
  return this.kullanicilarService.sayfalayarakGetir(
    parseInt(sayfa),
    parseInt(sayfaBasi),
  );
}
```

`/kullanicilar?sayfa=2&sayfaBasi=20` isteği 21. ile 40. kayıtları getirir ve toplam kayıt sayısıyla birlikte döner.

Cursor tabanlı sayfalama, `skip`/`take`'e kıyasla çok büyük veri setlerinde daha performanslıdır; son okunan kaydın ID'sini referans alarak çalışır. Ancak basit kullanım senaryoları için `skip`/`take` yeterlidir ve uygulanması daha kolaydır.

---

Bu bölümde Prisma'nın temel CRUD metotlarını, `select` ile alan filtrelemeyi, atomik güncelleme operasyonlarını ve `$transaction` tabanlı sayfalama desenini gördün. Bir sonraki adımda ilişkili verileri sorgulama — `include` ile eager loading ve nested write'lar — konusuna geçebiliriz.
