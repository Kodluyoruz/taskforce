# Sorted Set ile Öncelikli Kuyruk

Standart FIFO kuyruğunda tüm mesajlar eşit öneme sahip, ilk giren ilk çıkar. Gerçek sistemlerde her zaman böyle değil: ödeme hatası acil, pazarlama e-postası bekleyebilir. Öncelikli kuyruk (priority queue), mesajlara önem skoru vererek yüksek öncelikli işlerin önce yapılmasını sağlar.

Redis'in Sorted Set veri yapısı, her elemana bir `score` atadığı için doğal öncelik kuyruğu görevi görür.

## Sorted Set Nedir?

Sorted Set (ZSet), her elemanın bir skora sahip olduğu ve elementin bu skora göre sıralandığı bir küme veri yapısıdır. Eleman eşsizdir (aynı elemandan birden fazla olamaz), ama skor değerleri tekrar edebilir.

Özellikler:
- Skor küçükten büyüğe sıralı tutulur
- Hem skora hem de elemana göre arama yapılabilir
- Eleman ekleme, silme, skor güncelleme O(log N)

## Temel Komutlar

### ZADD — Eleman Ekle

```bash
# ZADD key [NX|XX] [GT|LT] [CH] [INCR] score member
127.0.0.1:6379> ZADD is_kuyrugu 1 "dusuk_oncelik_is"
(integer) 1

127.0.0.1:6379> ZADD is_kuyrugu 5 "normal_is"
(integer) 1

127.0.0.1:6379> ZADD is_kuyrugu 10 "kritik_is"
(integer) 1
```

Skor olarak herhangi bir float değer kullanılabilir. Büyük skor = yüksek öncelik (ya da tersi, tasarıma bağlı).

### ZRANGE — Sıralı Listele

```bash
# Skordan küçükten büyüğe (varsayılan)
127.0.0.1:6379> ZRANGE is_kuyrugu 0 -1
1) "dusuk_oncelik_is"
2) "normal_is"
3) "kritik_is"

# Skor bilgisiyle birlikte
127.0.0.1:6379> ZRANGE is_kuyrugu 0 -1 WITHSCORES
1) "dusuk_oncelik_is"
2) "1"
3) "normal_is"
4) "5"
5) "kritik_is"
6) "10"

# Büyükten küçüğe (en yüksek öncelik başta)
127.0.0.1:6379> ZRANGE is_kuyrugu 0 -1 REV
1) "kritik_is"
2) "normal_is"
3) "dusuk_oncelik_is"
```

### ZPOPMIN ve ZPOPMAX

En düşük veya en yüksek skorlu elemanı al ve sil:

```bash
# En düşük skorlu (en az öncelikli)
127.0.0.1:6379> ZPOPMIN is_kuyrugu
1) "dusuk_oncelik_is"
2) "1"

# En yüksek skorlu (en öncelikli)
127.0.0.1:6379> ZPOPMAX is_kuyrugu
1) "kritik_is"
2) "10"

# Birden fazla al
127.0.0.1:6379> ZPOPMAX is_kuyrugu 3
```

### BZPOPMIN ve BZPOPMAX

Blocking versiyonları — kuyruk boşsa bekler:

```bash
127.0.0.1:6379> BZPOPMAX is_kuyrugu 0
# İş gelene kadar bekler
```

## Öncelik Skoru Tasarımı

Skoru nasıl belirlediğin önemli. İki ana yaklaşım:

### 1. Açık Öncelik Değeri

```
1 = düşük, 5 = normal, 10 = yüksek, 100 = kritik
```

Basit ama aynı öncelikte işler arasında FIFO garanti edilmez.

### 2. Ters Timestamp + Öncelik

Aynı öncelikteki işler arasında eski olanın önce gelmesini istiyorsan:

```
skor = öncelik * 1e13 - timestamp
```

Büyük öncelik yüksek skor, ama aynı önceliktede eski timestamp daha yüksek skor verir.

```javascript
function skorHesapla(oncelik, olusturulmaMs) {
  return oncelik * 1e13 - olusturulmaMs;
}

// Öncelik 10, şimdi: 10 * 1e13 - 1684567890000 = 99998315432110000
// Öncelik 10, 1 dk önce: 10 * 1e13 - 1684567830000 = 99998315492110000
// 1 dakika önce eklenen daha yüksek skor → daha önce gelir ✓
```

## Node.js'te Priority Queue

```javascript
// priority_producer.js
const Redis = require("ioredis");
const redis = new Redis();

const KUYRUK = "is_kuyrugu_oncelikli";

const ONCELIKLER = {
  KRITIK: 100,
  YUKSEK: 50,
  NORMAL: 10,
  DUSUK: 1,
};

async function isEkle(is, oncelik = ONCELIKLER.NORMAL) {
  const mesaj = JSON.stringify({
    ...is,
    oncelik,
    olusturulma: Date.now(),
  });

  // Score olarak öncelik kullan (yüksek score = ZPOPMAX ile önce gelir)
  const score = oncelik;
  await redis.zadd(KUYRUK, score, mesaj);
  console.log(`İş eklendi (öncelik ${oncelik}): ${is.tip}`);
}

async function main() {
  await isEkle({ id: "A1", tip: "pazarlama_emaili" }, ONCELIKLER.DUSUK);
  await isEkle({ id: "B1", tip: "siparis_onaylama" }, ONCELIKLER.NORMAL);
  await isEkle({ id: "C1", tip: "odeme_bildirimi" }, ONCELIKLER.YUKSEK);
  await isEkle({ id: "D1", tip: "fraud_uyarisi" }, ONCELIKLER.KRITIK);
  await isEkle({ id: "E1", tip: "sifre_sifirlama" }, ONCELIKLER.YUKSEK);

  redis.disconnect();
}

main();
```

```javascript
// priority_consumer.js
const Redis = require("ioredis");
const redis = new Redis();

const KUYRUK = "is_kuyrugu_oncelikli";

async function oncelikliConsumer() {
  console.log("Öncelikli consumer başladı");

  while (true) {
    // BZPOPMAX — en yüksek öncelikli işi al
    const sonuc = await redis.bzpopmax(KUYRUK, 0);

    if (!sonuc) continue;

    const [_kuyrukAdi, ham, skor] = sonuc;
    const is = JSON.parse(ham);

    console.log(`[Öncelik ${skor}] İşleniyor: ${is.tip} (ID: ${is.id})`);
    await islYap(is);
    console.log(`[Öncelik ${skor}] Tamamlandı: ${is.id}`);
  }
}

async function islYap(is) {
  await new Promise((r) => setTimeout(r, 200));
}

oncelikliConsumer();
```

Çıktı:

```
[Öncelik 100] İşleniyor: fraud_uyarisi (ID: D1)
[Öncelik 100] Tamamlandı: D1
[Öncelik 50] İşleniyor: odeme_bildirimi (ID: C1)
[Öncelik 50] Tamamlandı: C1
[Öncelik 50] İşleniyor: sifre_sifirlama (ID: E1)
[Öncelik 50] Tamamlandı: E1
[Öncelik 10] İşleniyor: siparis_onaylama (ID: B1)
...
```

Fraud uyarısı her zaman önce işlendi.

## Delayed Queue (Gecikmeli Kuyruk)

Sorted Set'in timestamp tabanlı skoru, gecikmeli iş kuyruğu için idealdir. Score olarak işin çalışması gereken zamanı (Unix timestamp) kullan:

```javascript
// delayed_producer.js
const Redis = require("ioredis");
const redis = new Redis();

const GECIKTIRMELI_KUYRUK = "geciktirilmis_isler";

async function gecikmeli(is, gecikmeSaniye) {
  const calismaZamani = Date.now() + gecikmeSaniye * 1000;

  await redis.zadd(
    GECIKTIRMELI_KUYRUK,
    calismaZamani, // Score = ne zaman çalışacak
    JSON.stringify({ ...is, calismaZamani })
  );

  console.log(`İş ${gecikmeSaniye}s sonra çalışacak: ${is.id}`);
}

await gecikmeli({ id: "mail_1", tip: "hatirlatma_emaili" }, 300);   // 5 dakika
await gecikmeli({ id: "mail_2", tip: "siparis_iptal"      }, 1800); // 30 dakika
await gecikmeli({ id: "mail_3", tip: "anket"               }, 86400); // 1 gün
```

```javascript
// delayed_consumer.js
const Redis = require("ioredis");
const redis = new Redis();

const GECIKTIRMELI_KUYRUK = "geciktirilmis_isler";
const AKTIF_KUYRUK = "aktif_is_kuyrugu";

async function geciktirilmisKontrol() {
  const simdi = Date.now();

  // Zamanı geçmiş tüm işleri al
  const isler = await redis.zrangebyscore(GECIKTIRMELI_KUYRUK, 0, simdi);

  for (const ham of isler) {
    const is = JSON.parse(ham);
    console.log(`Zamanı geldi: ${is.id}`);

    // Aktif kuyruğa taşı
    const multi = redis.multi();
    multi.zrem(GECIKTIRMELI_KUYRUK, ham);
    multi.rpush(AKTIF_KUYRUK, ham);
    await multi.exec();
  }
}

// Her 1 saniyede kontrol et
setInterval(geciktirilmisKontrol, 1000);

// Aktif kuyruğu işle
async function aktifConsumer() {
  while (true) {
    const ham = await redis.blpop(AKTIF_KUYRUK, 0);
    if (!ham) continue;

    const is = JSON.parse(ham[1]);
    console.log("İşleniyor:", is.id, is.tip);
    await islYap(is);
  }
}

async function islYap(is) {
  await new Promise((r) => setTimeout(r, 200));
}

aktifConsumer();
console.log("Gecikmeli kuyruk consumer başladı");
```

## ZRANGEBYSCORE — Skor Aralığında Sorgula

```bash
# 5-10 skor aralığındaki işler
127.0.0.1:6379> ZRANGEBYSCORE is_kuyrugu 5 10 WITHSCORES

# -inf'den 50'ye kadar (düşük öncelikli)
127.0.0.1:6379> ZRANGEBYSCORE is_kuyrugu -inf 50

# Skor 1 olan ilk 5 iş
127.0.0.1:6379> ZRANGEBYSCORE is_kuyrugu 1 1 LIMIT 0 5
```

## ZCARD — Toplam Eleman Sayısı

```bash
127.0.0.1:6379> ZCARD is_kuyrugu
(integer) 5
```

## Özet

Sorted Set, skor mekanizmasıyla doğal bir öncelik kuyruğu sunar. `ZADD` ile öncelik skoru ver, `BZPOPMAX` ile en yüksek öncelikliyi al. Skor olarak Unix timestamp kullanarak gecikmeli kuyruk da kurulabilir. Hem öncelikli hem de gecikmeli işleri tek Redis veri yapısıyla yönetmek mümkün — basit ve verimli.

Son dersimizde Redis üzerine kurulu hazır bir framework olan BullMQ'yu inceliyoruz.
