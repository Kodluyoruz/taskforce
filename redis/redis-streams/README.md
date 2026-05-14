# Redis Streams — Modern Kuyruk

Redis Streams, Redis 5.0'da tanıtılan ve **append-only log** (yalnızca ekleme yapılabilen günlük) modeliyle çalışan bir veri yapısıdır. List tabanlı queue'dan daha güçlü, Pub/Sub'dan daha güvenilir: mesajlar kalıcıdır, geçmişe gidilebilir, consumer groups ile paralel işleme yapılabilir ve her mesaj için onay mekanizması vardır.

Kafka ile karşılaştırıldığında daha basit, daha düşük operasyonel maliyetli ama yeterince güçlü bir alternatif. Çoğu production senaryosu için Redis Streams fazlasıyla yeterlidir.

## Temel Kavramlar

**Stream:** Mesajların sırayla eklendiği ve hiç silinmediği (trim yapılmadıkça) bir log.

**Message ID:** Her mesajın benzersiz kimliği. Format: `<millisecond-timestamp>-<sequence>`. Örnek: `1684567890123-0`. Redis bunu otomatik üretir.

**Entry / Message:** ID + field-value çiftleri koleksiyonu. JSON gibi birden fazla alan taşıyabilir.

**Consumer Group:** Stream'i birden fazla consumer'ın paylaşmasını sağlayan yapı. Sonraki derste derinlemesine.

## XADD — Mesaj Ekle

```
XADD key [NOMKSTREAM] [MAXLEN|MINID [=|~] threshold] *|id field value [field value ...]
```

```bash
# * = ID'yi Redis otomatik oluştursun
127.0.0.1:6379> XADD siparisler * musteri "Ali" tutar "299.90" durum "bekliyor"
"1684567890123-0"   # Oluşturulan ID

127.0.0.1:6379> XADD siparisler * musteri "Veli" tutar "149.50" durum "bekliyor"
"1684567890456-0"
```

### Maksimum Boyut Sınırı

```bash
# Stream'i en fazla 1000 mesajla sınırla
XADD kuyruk MAXLEN 1000 * alan deger

# ~ ile yaklaşık sınır (daha verimli, ~1000 civarı tutar)
XADD kuyruk MAXLEN ~ 1000 * alan deger
```

## XLEN — Stream Uzunluğu

```bash
127.0.0.1:6379> XLEN siparisler
(integer) 2
```

## XRANGE — Mesajları Oku

```
XRANGE key start end [COUNT count]
```

```bash
# Tüm mesajlar
127.0.0.1:6379> XRANGE siparisler - +
1) 1) "1684567890123-0"
   2) 1) "musteri"
      2) "Ali"
      3) "tutar"
      4) "299.90"
      5) "durum"
      6) "bekliyor"
2) 1) "1684567890456-0"
   2) 1) "musteri"
      2) "Veli"
      ...

# İlk 10 mesaj
XRANGE siparisler - + COUNT 10

# Belirli ID'den itibaren
XRANGE siparisler 1684567890200-0 +
```

`-` minimum ID (en eski mesaj), `+` maksimum ID (en yeni mesaj).

## XREVRANGE — Ters Sırada Oku

```bash
# En yeniden en eskiye
XREVRANGE siparisler + - COUNT 5
```

## XREAD — Yeni Mesajları Oku

Bir veya birden fazla stream'den okuma yapılabilir. `XRANGE`'den farkı: son okunan konumdan devam edebilirsin.

```bash
# ID 0'dan itibaren tüm mesajlar
XREAD COUNT 10 STREAMS siparisler 0

# Sadece bu ID'den sonra gelen yeni mesajlar
XREAD COUNT 10 STREAMS siparisler 1684567890456-0
```

**Blocking XREAD:**

```bash
# Yeni mesaj gelene kadar bekle (0 = sonsuz)
XREAD BLOCK 0 STREAMS siparisler $

# $ son mesajı temsil eder — sadece bundan sonra gelenleri al
```

## Node.js'te Streams

### Producer

```javascript
// stream_producer.js
const Redis = require("ioredis");
const redis = new Redis();

async function siparisEkle(siparis) {
  // XADD: stream'e mesaj ekle
  const id = await redis.xadd(
    "siparis_stream",
    "*",                    // Redis ID üretsin
    "musteri_id", siparis.musteriId,
    "tutar", String(siparis.tutar),
    "urunler", JSON.stringify(siparis.urunler),
    "olusturulma", new Date().toISOString()
  );

  console.log(`Sipariş eklendi: ${id}`);
  return id;
}

async function main() {
  await siparisEkle({
    musteriId: "user_42",
    tutar: 299.90,
    urunler: [{ id: "P001", adet: 2 }],
  });

  await siparisEkle({
    musteriId: "user_17",
    tutar: 89.00,
    urunler: [{ id: "P003", adet: 1 }],
  });

  redis.disconnect();
}

main();
```

### Basit Consumer (Consumer Group olmadan)

```javascript
// stream_consumer.js
const Redis = require("ioredis");
const redis = new Redis();

let sonOkunanId = "$"; // Sadece yeni mesajlar (başlangıçta)

async function mesajOku() {
  // XREAD BLOCK ile yeni mesajları bekle
  const sonuclar = await redis.xread(
    "BLOCK", 0,
    "COUNT", 10,
    "STREAMS", "siparis_stream", sonOkunanId
  );

  if (!sonuclar) return [];

  const [_streamAdi, mesajlar] = sonuclar[0];

  // Son okunan ID'yi güncelle
  if (mesajlar.length > 0) {
    sonOkunanId = mesajlar[mesajlar.length - 1][0];
  }

  return mesajlar;
}

function mesajCoz(mesaj) {
  const [id, alanlar] = mesaj;
  const nesne = {};

  // Alanlar flat array: ["alan1", "deger1", "alan2", "deger2", ...]
  for (let i = 0; i < alanlar.length; i += 2) {
    nesne[alanlar[i]] = alanlar[i + 1];
  }

  return { id, ...nesne };
}

async function basla() {
  console.log("Stream consumer başladı");

  while (true) {
    const mesajlar = await mesajOku();

    for (const ham of mesajlar) {
      const siparis = mesajCoz(ham);
      console.log("İşleniyor:", siparis.id, "→", siparis.musteri_id);
      // İşlem burada yapılır
    }
  }
}

basla();
```

## XINFO — Stream Bilgisi

```bash
# Stream özet bilgisi
127.0.0.1:6379> XINFO STREAM siparis_stream

# Consumer group'ları listele
127.0.0.1:6379> XINFO GROUPS siparis_stream
```

## XTRIM — Stream'i Kırp

Eski mesajları elle sil:

```bash
# En fazla 1000 mesaj tut
127.0.0.1:6379> XTRIM siparis_stream MAXLEN 1000

# Belirli ID'den eski olanları sil
127.0.0.1:6379> XTRIM siparis_stream MINID 1684567890000-0
```

## XDEL — Belirli Mesajı Sil

```bash
127.0.0.1:6379> XDEL siparis_stream "1684567890123-0"
(integer) 1
```

Dikkat: XDEL mesajı siler ama boşluk bırakır (entry sayısı düşer, ID gap oluşur). Trim gibi kompakt değildir.

## List vs Streams Karşılaştırması

| Özellik | List (RPUSH/BLPOP) | Streams |
|---|---|---|
| Mesaj kalıcılığı | Hayır (alınınca gider) | Evet |
| Geçmişe erişim | Hayır | Evet |
| Consumer groups | Hayır | Evet |
| Acknowledgment | Hayır | Evet |
| Çoklu okuyucu | Hayır (1 mesaj 1 consumer) | Evet (group veya individual) |
| Mesaj boyutu | Basit string | Field-value çiftleri |
| Kurulum kolaylığı | Çok kolay | Orta |
| Kullanım senaryosu | Basit iş kuyruğu | Event log, güvenilir kuyruk |

## Ne Zaman Streams Kullan?

**Streams tercih et:**
- Mesajların kaybolmaması kritik (ödeme, sipariş)
- İşlem geçmişine sonradan bakma ihtiyacı var
- Aynı stream'i birden fazla consumer grubu okuyacak
- Consumer çöktüğünde mesajın geri alınması gerekiyor

**List tercih et:**
- Basit, düşük hacimli iş kuyruğu
- Mesaj tarihçesi önemsiz
- Hızlı kurulum öncelikli
- BullMQ gibi bir kütüphane zaten kullanılıyorsa

## Özet

Redis Streams, append-only log modeliyle çalışan kalıcı bir mesaj kuyruğu sunar. `XADD` ile mesaj ekle, `XREAD` ya da `XRANGE` ile oku. Mesajlar işlense de stream'de kalır, geçmişe gidebilirsin. Consumer Group desteğiyle birden fazla worker aynı stream'i paralel işleyebilir — bunu bir sonraki derste ele alıyoruz.
