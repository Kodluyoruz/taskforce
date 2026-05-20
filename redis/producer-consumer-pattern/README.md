# Producer / Consumer Pattern

Producer/Consumer, dağıtık sistemlerin en temel tasarım kalıbıdır. İki bağımsız bileşen var: biri iş üretir (producer), diğeri bu işi alıp yapar (consumer). İkisi birbirini doğrudan çağırmaz — aralarında bir kuyruk var.

Redis List bu iki bileşeni birbirine bağlayan tampon bölgedir.

## Neden Direkt Çağrı Değil de Kuyruk?

Bir e-ticaret uygulaması düşün. Kullanıcı sipariş verdi. Sistemin:
1. Stok kontrolü yapması gerekiyor
2. Ödeme işlemesi gerekiyor
3. Onay e-postası göndermesi gerekiyor
4. Kargo sistemine bildirim vermesi gerekiyor
5. Analitik kaydı tutması gerekiyor

Bunları sırayla, hepsini aynı HTTP isteğinde yaparsan kullanıcı saniyeler bekler. Kargo servisi yavaşsa tüm istek durur. E-posta servisi çökerse sipariş de başarısız olur.

Kuyrukla çözdüğünde:
- HTTP isteği sipariş kaydını oluşturur ve işi kuyruğa atar — hızlı.
- Kullanıcıya anında "Siparişin alındı" yanıtı döner.
- Arka planda consumer işlemleri sırayla halleder.
- Bir servis çökse bile mesaj kuyrukta bekler, tekrar denenir.

## Temel Yapı

```
[ Producer ] → RPUSH → [ Redis List ] → LPOP → [ Consumer ]
```

Producer'ın consumer'dan tek haberi, bir kuyruğun adı. Consumer'ın producer'dan tek haberi, aynı kuyruğun adı.

## Basit Örnek: E-posta Kuyruğu

### Producer

```javascript
// producer.js
const Redis = require("ioredis");
const redis = new Redis();

async function emailKuyrugaEkle(emailBilgisi) {
  const mesaj = JSON.stringify({
    ...emailBilgisi,
    eklenme: new Date().toISOString(),
    deneme: 0,
  });

  await redis.rpush("email_queue", mesaj);
  console.log(`Email kuyruğa eklendi: ${emailBilgisi.kime}`);
}

async function main() {
  // Farklı yerlerden gelen siparişleri simüle ediyoruz
  await emailKuyrugaEkle({
    kime: "ali@test.com",
    konu: "Siparişin alındı",
    siparis_no: "ORD-001",
  });

  await emailKuyrugaEkle({
    kime: "veli@test.com",
    konu: "Kargo yola çıktı",
    siparis_no: "ORD-002",
  });

  await emailKuyrugaEkle({
    kime: "ayse@test.com",
    konu: "Siparişin teslim edildi",
    siparis_no: "ORD-003",
  });

  const uzunluk = await redis.llen("email_queue");
  console.log(`Kuyruktaki toplam mesaj: ${uzunluk}`);

  redis.disconnect();
}

main();
```

### Consumer

```javascript
// consumer.js
const Redis = require("ioredis");
const redis = new Redis();

// E-posta gönderme işlemini simüle eder
async function emailGonder(emailBilgisi) {
  // Gerçek uygulamada nodemailer, SendGrid vb. burada kullanılır
  console.log(`Email gönderiliyor → ${emailBilgisi.kime}: ${emailBilgisi.konu}`);
  
  // 200ms gecikme simülasyonu (ağ gecikmesi)
  await new Promise((resolve) => setTimeout(resolve, 200));
  
  console.log(`Email gönderildi ✓ → ${emailBilgisi.kime}`);
}

async function islemDongusu() {
  console.log("Consumer başladı, kuyruk bekleniyor...");

  while (true) {
    // Kuyruktan bir mesaj al
    const ham = await redis.lpop("email_queue");

    if (!ham) {
      // Kuyruk boş, 1 saniye bekle ve tekrar kontrol et
      await new Promise((resolve) => setTimeout(resolve, 1000));
      continue;
    }

    const mesaj = JSON.parse(ham);

    try {
      await emailGonder(mesaj);
    } catch (hata) {
      // Hata olursa mesajı kaybet, basit versiyon
      console.error(`Email gönderilemedi: ${hata.message}`);
    }
  }
}

islemDongusu();
```

Bu iki dosyayı ayrı terminal penceresinde çalıştır:

```bash
# Terminal 1
node consumer.js

# Terminal 2
node producer.js
```

Consumer arka planda çalışırken producer mesaj eklediğinde consumer anında işlemeye başlar.

## Polling'in Sorunu

Yukarıdaki consumer'da şu döngü var:

```javascript
if (!ham) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  continue;
}
```

Kuyruk boşken her saniye Redis'e gidip "bir şey var mı?" diye soruyor. Buna **polling** denir.

Sorunlar:
- Kuyruk saatlerce boşsa gereksiz yere saniyede 1 istek gidiyor
- Yük altında bile 1 saniyelik gecikme var
- Redis kaynakları boşa harcanıyor

Çözüm: `BLPOP` — bir sonraki derste bunun için.

## Çoklu Consumer

Aynı kuyruğu birden fazla consumer okuyabilir. Redis List'in atomik `LPOP` operasyonu sayesinde aynı mesaj iki consumer'a verilmez.

```javascript
// multi_consumer.js
const Redis = require("ioredis");

async function consumer(id) {
  const redis = new Redis();
  console.log(`Consumer ${id} başladı`);

  while (true) {
    const ham = await redis.lpop("email_queue");

    if (!ham) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      continue;
    }

    const mesaj = JSON.parse(ham);
    console.log(`[Consumer ${id}] İşleniyor: ${mesaj.kime}`);
    
    // İşleme süresi simülasyonu
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    console.log(`[Consumer ${id}] Tamamlandı: ${mesaj.kime}`);
  }
}

// 3 paralel consumer başlat
consumer(1);
consumer(2);
consumer(3);
```

Çıktı şuna benzer:

```
[Consumer 1] İşleniyor: ali@test.com
[Consumer 2] İşleniyor: veli@test.com
[Consumer 3] İşleniyor: ayse@test.com
[Consumer 1] Tamamlandı: ali@test.com
...
```

Üç consumer paralel çalışır, her mesaj sadece bir consumer tarafından alınır.

## Gerçek Dünya Senaryosu: Resim İşleme

Kullanıcı profil fotoğrafı yükledi. Sistemin 3 boyutta işlemesi gerekiyor: 50x50 (thumbnail), 200x200 (profile), 800x800 (fullsize).

```javascript
// upload_producer.js
const Redis = require("ioredis");
const redis = new Redis();

async function resimIslemeyeGonder(dosyaYolu, kullanicıId) {
  const boyutlar = [
    { genislik: 50, yukseklik: 50, tip: "thumbnail" },
    { genislik: 200, yukseklik: 200, tip: "profile" },
    { genislik: 800, yukseklik: 800, tip: "fullsize" },
  ];

  for (const boyut of boyutlar) {
    await redis.rpush(
      "resim_isleme_queue",
      JSON.stringify({
        dosyaYolu,
        kullanicıId,
        ...boyut,
        olusturulma: Date.now(),
      })
    );
  }

  console.log(`${boyutlar.length} iş kuyruğa eklendi`);
  redis.disconnect();
}

resimIslemeyeGonder("/uploads/user_42_photo.jpg", 42);
```

```javascript
// resim_consumer.js
const Redis = require("ioredis");
const redis = new Redis();

async function resimIsle(is) {
  console.log(
    `Resim işleniyor: ${is.dosyaYolu} → ${is.genislik}x${is.yukseklik} (${is.tip})`
  );
  // Sharp, ImageMagick vb. ile gerçek işleme burada olur
  await new Promise((resolve) => setTimeout(resolve, 500));
  console.log(`Tamamlandı: ${is.tip}`);
}

async function basla() {
  while (true) {
    const ham = await redis.lpop("resim_isleme_queue");
    if (!ham) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      continue;
    }
    await resimIsle(JSON.parse(ham));
  }
}

basla();
```

## Kuyruk Dolduğunda Ne Olur?

Redis List'te bellek dolana kadar büyüyebilir. Yüzlerce producer var ama consumer yetişemiyorsa kuyruk patlar. Bunu yönetmek için birkaç strateji var:

**Kuyruk boyutunu kontrol et ve gerekirse beklet:**

```javascript
async function mesajEkle(kuyruk, mesaj, maksUzunluk = 10000) {
  const uzunluk = await redis.llen(kuyruk);
  
  if (uzunluk >= maksUzunluk) {
    throw new Error(`Kuyruk dolu (${uzunluk}/${maksUzunluk}). Daha sonra tekrar dene.`);
  }
  
  await redis.rpush(kuyruk, JSON.stringify(mesaj));
}
```

**Back-pressure pattern:** Producer, consumer'ı bloke etmeden sistemi yavaşlatır.

## Özet

Producer/Consumer pattern, uygulamanın birbirinden bağımsız çalışan parçalara ayrılmasını sağlar. Redis List `RPUSH` ile ekle, `LPOP` ile al — bu kadar basit. Birden fazla consumer aynı kuyruğu güvenle paylaşabilir çünkü `LPOP` atomik. Polling yerine `BLPOP` kullanımını bir sonraki derste ele alacağız.
