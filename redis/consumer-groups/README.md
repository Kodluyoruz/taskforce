# Consumer Groups ile Paralel İşleme

Consumer Group, bir Redis Stream'i birden fazla consumer arasında bölerek dağıtık işleme yapılmasını sağlar. Tek consumer'ın yetişemediği yüksek hacimli kuyrukları ölçeklendirmenin Redis Streams yoludur.

## Consumer Group Olmadan Problem

Önceki derste gördüğün basit XREAD consumer'ı şöyle çalışır:

```
Stream: [msg1, msg2, msg3, msg4, msg5]

Consumer A: msg1 okur
Consumer A: msg2 okur
Consumer A: msg3 okur...
```

Tek consumer'la yetişemiyorsan başka bir consumer başlatırsın ama ikisi de aynı mesajı okuyabilir. Her ikisi de `$` ile başlarsa yeni mesajlarda yarış var, aynı ID'yi okuyabilirler.

## Consumer Group Çözümü

Consumer Group, her mesajın yalnızca bir consumer'a dağıtılmasını garanti eder:

```
Stream: [msg1, msg2, msg3, msg4, msg5]
Group: "siparis_isleme"

Consumer A: msg1, msg3, msg5 alır
Consumer B: msg2, msg4 alır

Hiçbir mesaj çift işlenmez
```

## XGROUP CREATE — Grup Oluştur

```bash
# Stream mevcut, grubun stream başından okumasını iste
XGROUP CREATE siparis_stream siparis_isleme 0

# $ ile sadece yeni mesajları oku
XGROUP CREATE siparis_stream siparis_isleme $

# Stream yoksa oluştur
XGROUP CREATE olmayan_stream benim_grubum $ MKSTREAM
```

```bash
127.0.0.1:6379> XGROUP CREATE siparis_stream siparis_isleme $ MKSTREAM
OK
```

## XREADGROUP — Gruptan Mesaj Al

```
XREADGROUP GROUP group consumer [COUNT count] [BLOCK milliseconds] STREAMS key id
```

- `>` özel ID'si: daha önce bu consumer'a verilmemiş yeni mesajları al

```bash
# "worker_1" olarak "siparis_isleme" grubundan mesaj al
127.0.0.1:6379> XREADGROUP GROUP siparis_isleme worker_1 COUNT 5 STREAMS siparis_stream >
```

## XACK — Mesajı Onayla

Consumer mesajı başarıyla işledikten sonra onaylamalı. Onaylanmayan mesajlar **Pending Entries List (PEL)**'de kalır — kurtarılabilir.

```bash
127.0.0.1:6379> XACK siparis_stream siparis_isleme "1684567890123-0"
(integer) 1   # Onaylanan mesaj sayısı
```

## Node.js'te Consumer Group Örneği

### Producer

```javascript
// producer.js
const Redis = require("ioredis");
const redis = new Redis();

async function siparisEkle(siparis) {
  const id = await redis.xadd(
    "siparis_stream", "*",
    "siparis_id", siparis.id,
    "musteri", siparis.musteri,
    "tutar", String(siparis.tutar)
  );
  console.log(`Sipariş eklendi: ${id}`);
  return id;
}

async function main() {
  // 10 sipariş ekle
  for (let i = 1; i <= 10; i++) {
    await siparisEkle({ id: `ORD-${i}`, musteri: `musteri_${i}`, tutar: i * 50 });
    await new Promise((r) => setTimeout(r, 100));
  }
  redis.disconnect();
}

main();
```

### Consumer Worker

```javascript
// worker.js
const Redis = require("ioredis");

const STREAM = "siparis_stream";
const GROUP = "siparis_isleme";

async function worker(workerId) {
  const redis = new Redis();

  console.log(`[Worker ${workerId}] Başladı`);

  // Group yoksa oluştur
  try {
    await redis.xgroup("CREATE", STREAM, GROUP, "$", "MKSTREAM");
    console.log("Grup oluşturuldu");
  } catch (err) {
    if (!err.message.includes("BUSYGROUP")) throw err;
    // Grup zaten var, normal
  }

  while (true) {
    // Blok ile gruptan mesaj al
    const sonuclar = await redis.xreadgroup(
      "GROUP", GROUP, `worker_${workerId}`,
      "BLOCK", 0,
      "COUNT", 5,
      "STREAMS", STREAM, ">"
    );

    if (!sonuclar) continue;

    const [_streamAdi, mesajlar] = sonuclar[0];

    for (const [id, alanlar] of mesajlar) {
      // Flat array'i nesneye çevir
      const siparis = {};
      for (let i = 0; i < alanlar.length; i += 2) {
        siparis[alanlar[i]] = alanlar[i + 1];
      }

      try {
        console.log(`[Worker ${workerId}] İşleniyor: ${siparis.siparis_id}`);
        await islYap(siparis);

        // Başarılı — onayla
        await redis.xack(STREAM, GROUP, id);
        console.log(`[Worker ${workerId}] Onaylandı: ${id}`);
      } catch (hata) {
        console.error(`[Worker ${workerId}] Hata: ${hata.message}`);
        // XACK yapılmadı, PEL'de kalacak
      }
    }
  }
}

async function islYap(siparis) {
  await new Promise((r) => setTimeout(r, 200));
}

// İki paralel worker başlat
worker(1);
worker(2);
```

## XPENDING — Bekleyen Mesajları Gör

Onaylanmamış, PEL'de bekleyen mesajlar:

```bash
# Özet
127.0.0.1:6379> XPENDING siparis_stream siparis_isleme - + 10

# Detaylı: hangi consumer'da, ne kadar süre bekliyor
XPENDING siparis_stream siparis_isleme - + 10 worker_1
```

Çıktı:

```bash
1) 1) "1684567890123-0"    # Mesaj ID
   2) "worker_1"            # Hangi consumer'a atandı
   3) (integer) 45231       # Kaç ms önce verildi
   4) (integer) 1           # Kaç kez teslim edildi
```

## XCLAIM — Takılı Mesajı Sahiplen

Bir consumer'ın işleyemediği mesajı başka bir consumer üstlenebilir:

```bash
# En az 60000ms (1 dakika) önce atanmış ve hâlâ onaylanmamış mesajları al
127.0.0.1:6379> XCLAIM siparis_stream siparis_isleme worker_2 60000 "1684567890123-0"
```

## XAUTOCLAIM — Otomatik Yeniden Sahiplenme

Redis 6.2'de gelen daha pratik versiyon:

```bash
# 1 dakikadan uzun süredir işlenmeyen mesajları worker_3'e ver, ID 0'dan başla
XAUTOCLAIM siparis_stream siparis_isleme worker_3 60000 0-0
```

## Kurtarma Worker'ı

Takılı mesajları periyodik taramak için ayrı bir worker:

```javascript
// recovery_worker.js
const Redis = require("ioredis");
const redis = new Redis();

const STREAM = "siparis_stream";
const GROUP = "siparis_isleme";
const BEKLEMESI_LIMIT_MS = 60 * 1000; // 1 dakika
const MAKS_DENEME = 3;

async function takiliMesajlariKurtar() {
  // 1 dakikadan fazla bekleyen mesajları bul
  const [_yeniBaslangic, mesajlar] = await redis.xautoclaim(
    STREAM,
    GROUP,
    "recovery_worker",
    BEKLEMESI_LIMIT_MS,
    "0-0",
    "COUNT", 10
  );

  for (const [id, alanlar] of mesajlar) {
    const siparis = {};
    for (let i = 0; i < alanlar.length; i += 2) {
      siparis[alanlar[i]] = alanlar[i + 1];
    }

    // Kaç kez denendi?
    const pending = await redis.xpending(STREAM, GROUP, id, id, 1);
    const denemeSayisi = pending[0]?.[3] || 0;

    if (denemeSayisi >= MAKS_DENEME) {
      // Dead letter stream'e gönder
      console.log(`Dead letter: ${id} (${denemeSayisi} deneme)`);
      await redis.xadd("dead_letter_stream", "*", "orijinal_id", id, ...alanlar);
      await redis.xack(STREAM, GROUP, id);
    } else {
      // Tekrar işlemeyi dene
      console.log(`Yeniden işleniyor: ${id} (${denemeSayisi}. deneme)`);
      try {
        await islYap(siparis);
        await redis.xack(STREAM, GROUP, id);
      } catch (err) {
        console.error(`Yine hata: ${err.message}`);
      }
    }
  }
}

async function islYap(siparis) {
  await new Promise((r) => setTimeout(r, 200));
}

// Her 30 saniyede bir çalıştır
setInterval(takiliMesajlariKurtar, 30 * 1000);
console.log("Recovery worker başladı");
```

## XINFO GROUPS — Grup Durumu

```bash
127.0.0.1:6379> XINFO GROUPS siparis_stream

1) 1) "name"
   2) "siparis_isleme"
   3) "consumers"
   4) (integer) 2          # Aktif consumer sayısı
   5) "pending"
   6) (integer) 3          # Onaylanmamış mesaj sayısı
   7) "last-delivered-id"
   8) "1684567890789-0"    # En son dağıtılan mesaj
```

## Özet

Consumer Group'lar, Redis Streams'in en güçlü özelliğidir. `XREADGROUP` ile her mesaj sadece bir worker'a verilir, `XACK` ile işlendiği onaylanır. İşlenemeyen mesajlar PEL'de kalır, `XAUTOCLAIM` veya `XCLAIM` ile başka bir worker üstlenebilir. Bu mekanizma, tam güvenilir ve ölçeklenebilir bir mesaj kuyruğu sağlar.

Sonraki derste Sorted Set'i kullanarak öncelikli kuyruk (priority queue) kuracağız.
