# BLPOP ve BRPOP — Blocking Queue

Önceki derste producer/consumer pattern'ı kurdu, ama consumer'ın polling yaptığını fark ettin — kuyruk boşsa döngü boşuna döner, Redis'e anlamsız istekler gider. `BLPOP` ve `BRPOP` bu sorunu kökten çözer: kuyrukta mesaj yoksa consumer bekleme moduna geçer, mesaj geldiği anda uyandırılır.

## Polling'in Maliyeti

```javascript
// Polling ile consumer — verimsiz
while (true) {
  const mesaj = await redis.lpop("kuyruk");
  if (!mesaj) {
    await bekle(1000); // 1 saniye boşa bekle
    continue;
  }
  await isle(mesaj);
}
```

Kuyruk 10 dakika boşsa bu döngü 600 kez Redis'e gidip boş döner. Çarpanlı düşün: 10 consumer varsa 6000 boş istek. Sistem büyüdükçe bu gürültü artar.

## BLPOP — Blocking Left Pop

```
BLPOP key [key ...] timeout
```

- `key` — bir veya birden fazla liste anahtarı
- `timeout` — saniye cinsinden bekleme süresi (0 = sonsuz bekle)

Liste doluysa hemen döner (LPOP gibi). Boşsa timeout süresince bloke olur. Mesaj gelirse anında uyandırılır.

```bash
# Sonsuz bekle
127.0.0.1:6379> BLPOP email_queue 0

# 30 saniye bekle
127.0.0.1:6379> BLPOP email_queue 30
```

Mesaj geldiğinde dönen format:

```bash
1) "email_queue"    # Mesajın geldiği liste adı
2) "mesaj_icerigi"  # Mesajın değeri
```

Timeout dolduğunda:

```bash
(nil)
(30.07s)   # 30 saniye bekledi
```

## BRPOP — Blocking Right Pop

`BLPOP` ile aynı mantık, sağ uçtan alır. LIFO stack veya sağ uctan tüketim gerektiğinde kullanılır.

```bash
127.0.0.1:6379> BRPOP benim_listem 10
```

Pratikte queue'larda `BLPOP` (FIFO) daha yaygındır.

## Blocking Consumer Örneği

```javascript
// blocking_consumer.js
const Redis = require("ioredis");
const redis = new Redis();

async function islemDongusu() {
  console.log("Consumer başladı — mesaj bekleniyor...");

  while (true) {
    // 0 = sonsuz bekle, mesaj gelene kadar bloke ol
    const sonuc = await redis.blpop("email_queue", 0);

    if (!sonuc) continue; // Bağlantı kesilirse nil gelebilir

    const [_listeAdi, ham] = sonuc;
    const mesaj = JSON.parse(ham);

    console.log(`İşleniyor: ${mesaj.kime}`);

    try {
      await emailGonder(mesaj);
      console.log(`Tamamlandı: ${mesaj.kime}`);
    } catch (hata) {
      console.error(`Hata: ${hata.message}`);
    }
  }
}

async function emailGonder(mesaj) {
  // Gerçek email gönderimi burada
  await new Promise((r) => setTimeout(r, 200));
}

islemDongusu();
```

Bu consumer çalışırken CPU kullanımına bak — neredeyse sıfır. Polling versiyonunda CPU meşgul eder, burada bloke haldeyken işlemci serbest.

## Birden Fazla Kuyruğu Dinle

`BLPOP`'un güçlü özelliği, birden fazla listeyi aynı anda dinleyebilmesi. Verilen sırayla öncelik uygular:

```bash
# Önce urgent_queue, doluysa normal_queue, sonra low_queue
BLPOP urgent_queue normal_queue low_queue 0
```

Bu basit bir öncelik mekanizması sağlar. `urgent_queue`'da mesaj varsa hep oradan gelir. Boşsa `normal_queue`'ya bakılır.

```javascript
// prioritized_consumer.js
const Redis = require("ioredis");
const redis = new Redis();

async function oncelikliConsumer() {
  while (true) {
    // Öncelik sırası: kritik > normal > dusuk
    const sonuc = await redis.blpop(
      "is_queue:kritik",
      "is_queue:normal",
      "is_queue:dusuk",
      0
    );

    if (!sonuc) continue;

    const [kaynak, ham] = sonuc;
    const is = JSON.parse(ham);

    console.log(`[${kaynak}] İşleniyor:`, is);
    await isYap(is);
  }
}

async function isYap(is) {
  await new Promise((r) => setTimeout(r, 100));
}

oncelikliConsumer();
```

Farklı producer'lar farklı kuyruklara atar, consumer hangisinde mesaj varsa oradan alır, ama öncelikli olanı her zaman öne alır.

## Timeout ile Graceful Shutdown

Sonsuz bekleme yerine belirli bir timeout kullanmak, consumer'ı temiz kapatmayı kolaylaştırır:

```javascript
// graceful_consumer.js
const Redis = require("ioredis");
const redis = new Redis();

let calisiyor = true;

// SIGTERM veya Ctrl+C sinyalini yakala
process.on("SIGTERM", () => {
  console.log("Kapatma sinyali alındı...");
  calisiyor = false;
});

process.on("SIGINT", () => {
  calisiyor = false;
});

async function consumer() {
  console.log("Consumer başladı");

  while (calisiyor) {
    // 5 saniye bekle, sonra döngüyü kontrol et
    const sonuc = await redis.blpop("email_queue", 5);

    if (!sonuc) {
      // Timeout doldu ama mesaj gelmedi
      // calisiyor false ise döngü çıkacak
      continue;
    }

    const [_, ham] = sonuc;
    await isle(JSON.parse(ham));
  }

  console.log("Consumer kapatıldı");
  redis.disconnect();
}

async function isle(mesaj) {
  console.log("İşleniyor:", mesaj);
}

consumer();
```

## BLPOP vs Polling Karşılaştırma

| | Polling (LPOP + sleep) | Blocking (BLPOP) |
|---|---|---|
| **Boş kuyruktaki CPU** | Sürekli döner | Sıfır |
| **Gecikme** | Sleep süresi kadar (ör. 1s) | Anında (mikrosaniye) |
| **Redis yükü** | Yüksek (boşa istek) | Minimal |
| **Öncelikli kuyruk** | Manuel | Yerleşik (sıralı listeler) |
| **Graceful shutdown** | Kolayca | Timeout ile |

Gerçek uygulamada neredeyse her zaman `BLPOP` tercih edilir. Polling için meşru senaryo yok denecek kadar az.

## Dikkat Edilecekler

**Connection timeout:**
`BLPOP` uzun süre bloke olabilir. Redis client'ın bağlantı timeout'unu bu süreye göre ayarla. İoredis'te:

```javascript
const redis = new Redis({
  commandTimeout: 0, // BLPOP için timeout devre dışı
});
```

**Bir connection, bir BLPOP:**
Bir Redis bağlantısı üzerinde aynı anda sadece bir `BLPOP` çalışabilir. Paralel consumer'lar için ayrı Redis bağlantısı kullan:

```javascript
// Her consumer kendi bağlantısını açar
async function consumer(id) {
  const redis = new Redis(); // Ayrı bağlantı
  while (true) {
    const sonuc = await redis.blpop("kuyruk", 0);
    // ...
  }
}

consumer(1);
consumer(2);
consumer(3);
```

## Özet

`BLPOP` ve `BRPOP`, polling'in verimsizliğini ortadan kaldırır. Consumer mesaj gelene kadar uyur, mesaj geldiğinde uyandırılır. Birden fazla kuyruğu sırayla dinleyerek basit öncelik mekanizması elde edilir. Production'da polling yerine her zaman `BLPOP` kullan.

Sonraki derste mesajların ne kadar süre geçerli olduğunu ve TTL ile nasıl yönetileceğini göreceğiz.
