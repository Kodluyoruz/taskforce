# TTL ve Mesaj Yönetimi

TTL (Time To Live — Yaşam Süresi), bir anahtarın Redis'te ne kadar süre kalacağını belirler. Süre dolduğunda Redis anahtarı otomatik olarak siler. Bu mekanizma mesaj yönetimi, önbellek, oturum ve gecikmeli iş kuyruğu gibi pek çok senaryoda kritik öneme sahip.

## TTL Neden Önemli?

Kuyrukta biriken mesajların bir kısmı artık işlenmeye değmeyebilir. Örneğin:

- Kullanıcı 2 gün önce "şifre sıfırlama e-postası" istedi ama e-posta servisi o sırada çöktü. Mesaj kuyrukta bekledi. 2 gün sonra consumer bu mesajı işleyip şifre sıfırlama linki gönderir — ama o link zaten geçersiz.
- Bir anlık kampanya bildirimi kuyruğa eklendi ama kampanya sona erdi. Consumer bir saat sonra bu bildirimi gönderirse kullanıcı geçmiş bir kampanya için bildirim alır.

TTL ile mesajlara bir "son kullanma tarihi" verirsin. Süresi geçen mesaj kullanıcıya ulaşmadan silinir.

## EXPIRE ve PEXPIRE

### EXPIRE

Saniye cinsinden ömür belirle:

```bash
# email_queue anahtarını 3600 saniye (1 saat) sonra sil
127.0.0.1:6379> EXPIRE email_queue 3600
(integer) 1   # 1: başarılı, 0: anahtar bulunamadı
```

### PEXPIRE

Milisaniye cinsinden ömür belirle:

```bash
# 30000 milisaniye = 30 saniye
127.0.0.1:6379> PEXPIRE gecici_token 30000
(integer) 1
```

## SET ile Birleşik TTL

String değer atarken aynı anda TTL de verebilirsin:

```bash
# EX = expire in seconds
127.0.0.1:6379> SET sifre_sifirlama_token:user123 "abc123xyz" EX 3600
OK

# PX = expire in milliseconds
127.0.0.1:6379> SET oran_limiti:ip:192.168.1.1 "0" PX 60000
OK

# EXAT = expire at unix timestamp (saniye)
127.0.0.1:6379> SET kampanya_verisi:2024 "..." EXAT 1735689600
OK
```

## TTL Kontrolü

### TTL

Kalan süreyi saniye cinsinden gösterir:

```bash
127.0.0.1:6379> SET mesaj "merhaba" EX 60
OK

127.0.0.1:6379> TTL mesaj
(integer) 57   # 57 saniye kaldı

# Sonra...
127.0.0.1:6379> TTL mesaj
(integer) -2   # Anahtar yok (silindi)

127.0.0.1:6379> SET kalici "deger"
OK
127.0.0.1:6379> TTL kalici
(integer) -1   # TTL yok, kalıcı
```

Dönüş değerleri:
- `> 0` — kalan süre (saniye)
- `-1` — TTL yok, kalıcı
- `-2` — anahtar yok

### PTTL

Milisaniye hassasiyetiyle:

```bash
127.0.0.1:6379> PTTL mesaj
(integer) 54321   # 54.321 milisaniye
```

## PERSIST — TTL Kaldır

Geçici bir anahtarı kalıcı yap:

```bash
127.0.0.1:6379> SET anahtar "deger" EX 3600
OK
127.0.0.1:6379> TTL anahtar
(integer) 3599

127.0.0.1:6379> PERSIST anahtar
(integer) 1

127.0.0.1:6379> TTL anahtar
(integer) -1   # Artık kalıcı
```

## Mesaj Kuyruğuna TTL Uygulamak

Redis List'in kendisine TTL verebilirsin, ama bu tüm kuyruğu siler. Genellikle istenen bu değil.

Mesaj bazlı TTL için iki yaygın yaklaşım var:

### 1. Mesaj İçine Geçerlilik Tarihi Göm

```javascript
// producer.js
const Redis = require("ioredis");
const redis = new Redis();

async function mesajEkle(kuyruk, icerik, gecerlilikSaniye = 3600) {
  const mesaj = {
    ...icerik,
    gecerliligeBitisZamani: Date.now() + gecerlilikSaniye * 1000,
    eklenme: Date.now(),
  };

  await redis.rpush(kuyruk, JSON.stringify(mesaj));
}

await mesajEkle("email_queue", {
  kime: "ali@test.com",
  konu: "Şifre sıfırlama",
  link: "https://example.com/reset/abc123",
}, 3600); // 1 saat geçerli
```

```javascript
// consumer.js
async function mesajIsle(kuyruk) {
  while (true) {
    const sonuc = await redis.blpop(kuyruk, 0);
    if (!sonuc) continue;

    const [_, ham] = sonuc;
    const mesaj = JSON.parse(ham);

    // Süre geçmiş mi kontrol et
    if (mesaj.gecerliligeBitisZamani < Date.now()) {
      console.log(`Mesaj süresi dolmuş, atlanıyor: ${mesaj.kime}`);
      continue; // Silindi sayılır, işleme
    }

    await isle(mesaj);
  }
}
```

### 2. Ayrı Bir TTL Anahtarı ile Kontrol

Her mesaj için ayrı bir Redis anahtarı tut, consumer almadan önce bu anahtarın hâlâ geçerli olup olmadığına bak:

```javascript
// producer.js
const Redis = require("ioredis");
const redis = new Redis();

async function mesajEkle(icerik, gecerlilikSaniye = 3600) {
  const mesajId = `msg:${Date.now()}:${Math.random().toString(36).slice(2)}`;

  // Mesaj içeriğini geçerlilik süresiyle sakla
  await redis.setex(`mesaj_meta:${mesajId}`, gecerlilikSaniye, JSON.stringify(icerik));

  // Kuyruğa sadece mesaj ID'si ekle
  await redis.rpush("email_queue", mesajId);

  console.log(`Mesaj eklendi: ${mesajId}`);
  return mesajId;
}

await mesajEkle({ kime: "ali@test.com", konu: "Hoş geldin" }, 86400);
```

```javascript
// consumer.js
async function islemDongusu() {
  while (true) {
    const sonuc = await redis.blpop("email_queue", 0);
    if (!sonuc) continue;

    const [_, mesajId] = sonuc;

    // Mesaj meta verisi hâlâ var mı? (TTL kontrolü)
    const ham = await redis.get(`mesaj_meta:${mesajId}`);

    if (!ham) {
      console.log(`Mesaj ${mesajId} süresi dolmuş veya işlenmiş, atlanıyor`);
      continue;
    }

    const mesaj = JSON.parse(ham);

    try {
      await isle(mesaj);
      // İşleme başarılıysa meta veriyi sil
      await redis.del(`mesaj_meta:${mesajId}`);
    } catch (hata) {
      console.error(`Hata: ${hata.message}`);
    }
  }
}
```

## Rate Limiting ile TTL

Redis'in en yaygın TTL kullanım alanlarından biri rate limiting (hız sınırlandırma). Kuyruk senaryosunda da bunu kullanabilirsin:

```javascript
// Bir kullanıcının dakikada en fazla 5 email talep edebileceği kontrol
async function emailTalebindeRateLimit(kullaniciId) {
  const anahtar = `rate:email:${kullaniciId}`;
  
  const mevcutSayac = await redis.incr(anahtar);
  
  if (mevcutSayac === 1) {
    // İlk istek, 60 saniye TTL başlat
    await redis.expire(anahtar, 60);
  }
  
  if (mevcutSayac > 5) {
    const kalanSure = await redis.ttl(anahtar);
    throw new Error(
      `Dakikada en fazla 5 email talep edilebilir. ${kalanSure} saniye sonra tekrar dene.`
    );
  }
  
  return true;
}
```

## GETEX — Al ve TTL Güncelle

Redis 6.2'de gelen `GETEX`, değeri alırken TTL'yi de güncelleyebilir:

```bash
# Değeri al ve TTL'yi 30 dakikaya sıfırla
GETEX oturum:user123 EX 1800

# Değeri al ve kalıcı yap
GETEX gecici_oturum PERSIST

# Değeri al ama TTL'yi değiştirme
GETEX normal_get    # TTL değişmez
```

Bu oturum yönetimi için mükemmel: her erişimde oturum süresi uzar.

## Delayed Queue (Gecikmeli Kuyruk)

TTL ve TTL izleme (keyspace notifications) ile basit bir delayed queue kurulabilir:

```javascript
// Mesajı 5 dakika sonra işlemek üzere kaydet
const Redis = require("ioredis");
const redis = new Redis();

async function gecikmeli(mesaj, gecikmeMs) {
  const mesajId = `delayed:${Date.now()}`;
  
  // Mesaj içeriğini sakla, gecikme süresi sonra TTL dolacak
  await redis.set(`delay_meta:${mesajId}`, JSON.stringify(mesaj));
  
  // Gerçek uygulamada Sorted Set ile daha güvenli yapılır (14. ders)
  await redis.zadd("delay_queue", Date.now() + gecikmeMs, mesajId);
  
  console.log(`${gecikmeMs}ms sonra işlenecek: ${mesajId}`);
}

// Gelecek 5 dakikada işlenecek işleri kontrol et
async function delayedConsumer() {
  while (true) {
    const simdi = Date.now();
    
    // Zamanı gelmiş mesajları al
    const mesajlar = await redis.zrangebyscore("delay_queue", 0, simdi);
    
    for (const mesajId of mesajlar) {
      const ham = await redis.get(`delay_meta:${mesajId}`);
      if (ham) {
        await isle(JSON.parse(ham));
        await redis.del(`delay_meta:${mesajId}`);
      }
      await redis.zrem("delay_queue", mesajId);
    }
    
    await new Promise((r) => setTimeout(r, 1000));
  }
}
```

Delayed queue'nun Sorted Set tabanlı daha olgun versiyonunu 14. derste göreceğiz.

## Özet

TTL, Redis'te zamana bağlı veri yönetiminin temel mekanizması. Mesaj kuyruklarında süresi dolmuş mesajları işlemekten kaçınmak için mesaj içine geçerlilik tarihi gömebilir ya da ayrı TTL anahtarı tutabilirsin. Rate limiting, oturum yönetimi ve gecikmeli kuyruk gibi senaryolarda da TTL kritik rol oynar.

Sonraki derste consumer mesajı aldıktan sonra çökerse ne olacağını ve bunu önlemek için güvenilir kuyruk pattern'ını ele alacağız.
