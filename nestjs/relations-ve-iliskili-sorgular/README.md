# Relations ve İlişkili Sorgular

Gerçek dünya uygulamalarında veriler nadiren izole yaşar. Bir kullanıcının gönderileri vardır, bir gönderinin etiketleri vardır, bir siparişin hem müşterisi hem de ürünleri vardır. Prisma, bu ilişkileri schema üzerinde tanımlamanı ve sorgulama sırasında güçlü araçlarla yönetmeni sağlar. Bu yazıda relation türlerini, ilişkili veri çekme yöntemlerini ve nested write ile atomik veri oluşturmayı ele alacağız.

## İlişki Türleri

Veritabanı ilişkileri üç temel kategoriye ayrılır:

**One-to-One:** İki model arasında bire bir eşleşme vardır. Bir kullanıcının yalnızca bir profili olabilir ve bir profil yalnızca bir kullanıcıya aittir.

**One-to-Many:** En yaygın ilişki türüdür. Bir kullanıcının birden fazla gönderisi olabilir; bir gönderi ise yalnızca tek bir kullanıcıya aittir. İlişkinin "many" tarafı, yani Gonderi modeli, foreign key tutar.

**Many-to-Many:** Birden fazla model birbirine çoklu bağlanabilir. Bir gönderinin birden fazla etiketi olabilir ve bir etiket birden fazla gönderide kullanılabilir.

Prisma'da ilişkiler `@relation` direktifi ile tanımlanır:

- `fields`: Foreign key'in bulunduğu alanı belirtir.
- `references`: Hedef modeldeki birincil anahtarı belirtir.
- `onDelete`: İlişkili kayıt silindiğinde ne yapılacağını belirler — `Cascade` (birlikte sil) veya `Restrict` (silmeyi engelle).

## One-to-Many İlişki

One-to-many ilişkilerde foreign key her zaman "many" tarafında tutulur. Örneğin kullanıcı-gönderi ilişkisinde, her gönderi kendi yazarının ID'sini tutar.

```prisma
// schema.prisma — one-to-many + many-to-many
model Kullanici {
  id       Int      @id @default(autoincrement())
  email    String   @unique
  ad       String
  gonderiler Gonderi[]        // one-to-many (Gonderi tarafında FK var)
  etiketler  KullaniciEtiket[] // explicit many-to-many
}

model Gonderi {
  id       Int      @id @default(autoincrement())
  baslik   String
  yazar    Kullanici @relation(fields: [yazarId], references: [id], onDelete: Cascade)
  yazarId  Int
  etiketler GonderiEtiket[]  // many-to-many
}

model Etiket {
  id       Int    @id @default(autoincrement())
  ad       String @unique
  gonderiler GonderiEtiket[]
  kullanicilar KullaniciEtiket[]
}

// Explicit junction tables — ekstra alan eklenebilir
model GonderiEtiket {
  gonderi   Gonderi @relation(fields: [gonderiId], references: [id])
  gonderiId Int
  etiket    Etiket  @relation(fields: [etiketId], references: [id])
  etiketId  Int
  eklenmeTarihi DateTime @default(now())  // junction'a ekstra alan

  @@id([gonderiId, etiketId])
}

model KullaniciEtiket {
  kullanici   Kullanici @relation(fields: [kullaniciId], references: [id])
  kullaniciId Int
  etiket      Etiket    @relation(fields: [etiketId], references: [id])
  etiketId    Int

  @@id([kullaniciId, etiketId])
}
```

`onDelete: Cascade` kullandığında, bir kullanıcı silindiğinde ona ait tüm gönderiler de otomatik olarak silinir. Bu davranış çoğu blog veya sosyal medya uygulaması için beklenen şeydir.

`onDelete: Restrict` ise tam tersini yapar: hâlâ gönderisi olan bir kullanıcıyı silmeye çalıştığında veritabanı hata fırlatır. Silme işlemini uygulamak yerine "bu kullanıcının içerikleri var, önce onları kaldır" mesajı vermek istediğin durumlarda bunu tercih edersin.

`onDelete: SetNull` da yaygın bir seçenektir; ilişkili kayıt silindiğinde foreign key alanı `null` değerini alır. Bunun çalışması için ilgili alanın nullable olması gerekir.

## Many-to-Many İlişki

Many-to-many ilişkiler iki biçimde kurulabilir.

**Implicit many-to-many:** İki model birbirini liste tipinde referans ederse Prisma migration sırasında junction table'ı otomatik oluşturur. Bu yöntem ekstra alan gerektirmeyen basit bağlantılar için idealdir.

```prisma
model Gonderi {
  etiketler Etiket[]
}

model Etiket {
  gonderiler Gonderi[]
}
```

Prisma bu schema'dan `_GonderiToEtiket` adında bir junction table üretir ve bunu tamamen şeffaf yönetir. İki model arasındaki bağlantıyı takip etmek dışında başka bir veriye ihtiyacın yoksa implicit yöntem tercih edilir.

**Explicit many-to-many:** Junction table'a ekstra alan eklemen gerektiğinde explicit yönteme geçersin. Yukarıdaki `GonderiEtiket` ve `KullaniciEtiket` modelleri bunun örneğidir. `eklenmeTarihi` alanı gibi meta verilerin junction'da tutulması gerektiğinde ya da ilişkinin kendisi üzerinde sorgulama yapman gerektiğinde bu yöntemi kullanırsın.

Explicit yöntemde junction modelini kendin yönetirsin: kayıt eklemek için `gonderiEtiket.create`, silmek için `gonderiEtiket.delete` çağırırsın.

## include ile İlişkili Veri Çekme

Prisma'da bir sorguya ilişkili modeli dahil etmek için `include` kullanırsın. Bu SQL'deki JOIN işlemine karşılık gelir — Prisma birden fazla sorgu çalıştırıp sonuçları birleştirerek sana tek bir nesne döner.

```typescript
// include ile ilişkili veri çekme — filtrelenmiş
const kullanici = await this.prisma.kullanici.findUnique({
  where: { id: 1 },
  include: {
    gonderiler: {
      where: { yayinlandi: true },
      orderBy: { id: 'desc' },
      take: 5,
      include: {
        etiketler: {
          include: { etiket: true },
        },
      },
    },
  },
});
```

Bu sorguda üç seviye derinlik var: kullanıcı → gönderiler → etiketler → etiket detayı. `include` içine `where`, `orderBy` ve `take` ekleyebilirsin; bu sayede ilişkili kayıtları filtreleyip sıralayabilirsin. Örneğin yalnızca yayınlanmış son 5 gönderiyi getirmek için `where: { yayinlandi: true }` ve `take: 5` kullandık.

**Performans uyarısı:** Nested include, her seviye için ek sorgu veya karmaşık JOIN üretebilir. Yüksek trafikli endpoint'lerde derin include zincirlerinden kaçın. İki ya da üç seviyeyi geçen include'lar için sorguyu parçalara bölmeyi ya da `select` ile veri alanını daraltmayı düşün.

## select ile Alan Seçimi

`include` tüm alanları getirir; `select` ise tam olarak hangi alanların döneceğini belirlemenize izin verir. Gereksiz veri aktarımını önlemek için mümkün olan her yerde `select` tercih edilir.

```typescript
// select ile sadece gerekli alanlar (include'dan daha verimli)
const kullanicilar = await this.prisma.kullanici.findMany({
  select: {
    id: true,
    ad: true,
    email: true,
    // sifre seçilmedi — yanıtta yer almaz
    _count: { select: { gonderiler: true } }, // gönderi sayısını ekle
  },
});
```

`_count` özelliği özellikle yararlıdır: ilişkili kayıtların sayısını ayrı bir sorgu yazmadan doğrudan elde edersin. Yukarıdaki örnekte her kullanıcı için gönderi sayısı otomatik hesaplanır.

`select` kullanırken dikkat edilmesi gereken bir kural var: aynı seviyede `select` ve `include` birlikte kullanılamaz. Prisma bu durumda derleme zamanı hatası verir. İlişkiyi dahil etmek istiyorsan bunu `select` içinde `{ select: {...} }` bloğuyla yaparsın:

```typescript
select: {
  id: true,
  gonderiler: {
    select: { baslik: true, id: true },
  },
}
```

Bu yöntemle hem alan seçimini hem de ilişkiyi aynı anda kontrol altında tutarsın.

## Nested Write — İlişkili Kayıt Oluşturma

Prisma nested write ile birden fazla modeli tek bir operasyonda yazabilirsin. Bu hem atomik (ya hepsi ya hiçbiri) çalışır hem de boilerplate kodu azaltır.

```typescript
// Nested write — kullanıcı oluştururken aynı anda gonderi ekle
const yeniKullanici = await this.prisma.kullanici.create({
  data: {
    ad: 'Ali',
    email: 'ali@ornek.com',
    sifre: 'hashli-sifre',
    gonderiler: {
      create: [
        { baslik: 'İlk Gönderi' },
        { baslik: 'İkinci Gönderi' },
      ],
    },
  },
  include: { gonderiler: true },
});

// Mevcut kaydı bağla (yeni oluşturma değil)
await this.prisma.gonderiEtiket.create({
  data: {
    gonderi: { connect: { id: gonderiId } },
    etiket: { connect: { id: etiketId } },
  },
});
```

**`create`:** Yeni kayıtlar oluşturur ve ana kayıtla otomatik ilişkilendirir. Kullanıcı oluştururken aynı anda gönderilerini de oluşturmak istediğinde kullanırsın.

**`connect`:** Zaten var olan bir kaydı ana kayıtla ilişkilendirir. Yeni veri yaratmaz, sadece bağlantı kurar. Bir gönderiyi mevcut bir etikete bağlamak için idealdir.

**`connectOrCreate`:** Belirtilen koşula uyan kayıt varsa onu bağlar, yoksa oluşturup bağlar. Tag sistemi gibi "varsa kullan, yoksa yarat" mantığı gerektiren durumlarda çok kullanışlıdır:

```typescript
gonderiler: {
  connectOrCreate: {
    where: { baslik: 'Başlangıç Rehberi' },
    create: { baslik: 'Başlangıç Rehberi' },
  },
},
```

Nested write ile ilişkili kayıtları yönetirken `update` içinde de `set`, `disconnect`, `delete` gibi operatörler kullanabilirsin. `set` var olan tüm ilişkiyi yeni listeyle değiştirir, `disconnect` belirli bir ilişkiyi kaldırır, `delete` ilişkili kaydı tamamen siler.

Örneğin bir gönderinin tüm etiketlerini değiştirmek istiyorsan:

```typescript
await this.prisma.gonderi.update({
  where: { id: gonderiId },
  data: {
    etiketler: {
      set: [{ id: 1 }, { id: 3 }], // mevcut etiketleri kaldır, bunları ekle
    },
  },
});
```

Implicit many-to-many'de `set` doğrudan kullanılabilir. Explicit junction modelinde ise junction kayıtlarını kendin yönetmen gerekir.

Relations ve ilişkili sorgular, Prisma'nın en güçlü yönlerinden biridir. `include`, `select`, `_count` ve nested write kombinasyonunu anladığında, karmaşık veri modellerini bile temiz ve okunabilir TypeScript koduyla yönetebilirsin.
