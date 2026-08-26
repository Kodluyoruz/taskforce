# Redis Pub/Sub — Yayın/Abone Modeli

Pub/Sub (Publish/Subscribe), yayıncı ve abone arasında doğrudan bağ olmayan bir mesajlaşma modelidir. Yayıncı belirli bir kanala (channel) mesaj gönderir; o kanalı dinleyen tüm aboneler aynı anda mesajı alır. Yayıncı kimlerin dinlediğini bilmez, aboneler kimin yayınladığını bilmez.

Bu, List tabanlı queue'dan farklı bir paradigma. List'te bir mesaj tek consumer tarafından alınır (FIFO). Pub/Sub'da bir mesaj tüm abonelere yayınlanır (broadcast).

## Pub/Sub ne zaman kullanılır?

| Senaryo | Uygun Araç |
|---|---|
| Her iş bir kez işlensin | List (RPUSH + BLPOP) |
| Tüm dinleyiciler aynı mesajı alsın | Pub/Sub |
| Mesaj geçmişi önemli | Streams |
| Gerçek zamanlı yayın, kayıp kabul edilebilir | Pub/Sub |

Pub/Sub için örnek senaryolar:
- Chat uygulamasında bir kullanıcının mesajı tüm katılımcılara iletmek
- Canlı fiyat güncellemeleri (borsa, kripto)
- Anlık bildirimler (yeni sipariş geldi, tüm admin panelleri bilgilendir)
- Cache invalidation (bir veri değişti, tüm sunucular önbelleği temizlesin)

## SUBSCRIBE ve PUBLISH

### SUBSCRIBE — Kanala Abone Ol

```bash
# CLI'da bir kanalı dinle
127.0.0.1:6379> SUBSCRIBE haberler

Reading messages... (press Ctrl-C to quit)
1) "subscribe"
2) "haberler"
3) (integer) 1    # Abone olunan kanal sayısı
```

Abone olduktan sonra bu bağlantı sadece dinleme modundadır. Başka komut gönderilemez.

### PUBLISH — Mesaj Yayınla

Farklı bir terminal açıp:

```bash
127.0.0.1:6379> PUBLISH haberler "Bugün hava çok sıcak!"
(integer) 1    # Kaç abone mesajı aldı
```

İlk terminalde:

```bash
1) "message"
2) "haberler"          # Kanal adı
3) "Bugün hava çok sıcak!"   # Mesaj
```

## Birden Fazla Kanala Abone Ol

```bash
127.0.0.1:6379> SUBSCRIBE kanal_1 kanal_2 kanal_3
```

## PSUBSCRIBE — Pattern ile Abone Ol

Glob pattern kullanarak birden fazla kanala aynı anda abone ol:

```bash
# "haber." ile başlayan tüm kanallar
127.0.0.1:6379> PSUBSCRIBE haber.*

# Örnek kanallar: haber.spor, haber.ekonomi, haber.siyaset hepsi gelir
```

```bash
# Mesaj geldiğinde format (PSUBSCRIBE için farklı)
1) "pmessage"
2) "haber.*"        # Eşleşen pattern
3) "haber.spor"     # Gerçek kanal adı
4) "Galatasaray şampiyon!"
```

## Node.js'te Pub/Sub

```javascript
// subscriber.js
const Redis = require("ioredis");

const subscriber = new Redis();

subscriber.subscribe("bildirim_kanali", (err, sayi) => {
  if (err) {
    console.error("Abone olunamadı:", err);
    return;
  }
  console.log(`${sayi} kanalı dinliyorum`);
});

subscriber.on("message", (kanal, mesaj) => {
  console.log(`[${kanal}] ${mesaj}`);
  
  const veri = JSON.parse(mesaj);
  
  switch (veri.tip) {
    case "yeni_siparis":
      console.log(`Yeni sipariş: #${veri.siparisNo}`);
      break;
    case "stok_guncelleme":
      console.log(`Stok güncellendi: ${veri.urun}`);
      break;
    default:
      console.log("Bilinmeyen mesaj tipi:", veri.tip);
  }
});
```

```javascript
// publisher.js
const Redis = require("ioredis");
const publisher = new Redis();

async function bildirimYayinla(tip, veri) {
  const mesaj = JSON.stringify({ tip, ...veri, zaman: new Date().toISOString() });
  const aboneSayisi = await publisher.publish("bildirim_kanali", mesaj);
  console.log(`Mesaj yayınlandı, ${aboneSayisi} abone aldı`);
}

// Yeni sipariş bildirimi
await bildirimYayinla("yeni_siparis", {
  siparisNo: "ORD-001",
  musteri: "Ali",
  tutar: 299.90,
});

publisher.disconnect();
```

## Gerçek Senaryo: Cache Invalidation

Birden fazla uygulama sunucusun var, hepsinin kendi in-memory cache'i var. Bir ürün fiyatı değiştiğinde tüm sunucuların önbelleği temizlemesi gerekiyor:

```javascript
// cache_manager.js
const Redis = require("ioredis");

class CacheManager {
  constructor() {
    this.localCache = new Map();
    
    this.subscriber = new Redis();
    this.publisher = new Redis();
    
    // Invalidation mesajlarını dinle
    this.subscriber.subscribe("cache_invalidate", () => {
      console.log("Cache invalidation kanalı dinleniyor");
    });
    
    this.subscriber.on("message", (kanal, mesaj) => {
      if (kanal === "cache_invalidate") {
        const { anahtar } = JSON.parse(mesaj);
        this.localCache.delete(anahtar);
        console.log(`[Cache] Silindi: ${anahtar}`);
      }
    });
  }

  async getir(anahtar, veritabaniSorgusi) {
    // Önce local cache
    if (this.localCache.has(anahtar)) {
      return this.localCache.get(anahtar);
    }
    
    // Yoksa veritabanından çek
    const deger = await veritabaniSorgusi();
    this.localCache.set(anahtar, deger);
    return deger;
  }

  async invalidate(anahtar) {
    this.localCache.delete(anahtar);
    
    // Diğer tüm sunuculara bildir
    await this.publisher.publish(
      "cache_invalidate",
      JSON.stringify({ anahtar, kaynak: process.env.SUNUCU_ID })
    );
    
    console.log(`[Cache] Invalidation yayınlandı: ${anahtar}`);
  }
}
```

## Pub/Sub'ın Kısıtlamaları

### 1. Mesaj Kalıcılığı Yok

Abone olmadığın sürede yayınlanan mesajlar kaybolur. Bağlantı kesilip tekrar bağlanırsan arada olan mesajları alamazsın.

```
Yayıncı:  [msg1] [msg2] [msg3]
Abone:    online        ↑bağlandı
                  msg1 ve msg2 kaçırdı
```

### 2. Onay Mekanizması Yok

Abonenin mesajı başarıyla işleyip işlemediğini bilemezsin. Bir işlemi garantili yapman gerekiyorsa List veya Streams kullan.

### 3. Mesaj Geçmişi Yok

Geçmiş mesajları sorgulayamazsın. Redis Streams bu sorunu çözer.

### 4. Bağlantı Sayısı

Her `SUBSCRIBE` bağlantısı Redis sunucusunda bir bağlantı tutar. Çok sayıda abone olduğunda bağlantı havuzu yönetimine dikkat et.

## Pub/Sub vs Streams — Ne Zaman Hangisini?

```
Pub/Sub kullan:
✓ Gerçek zamanlı, anlık yayın
✓ Mesaj kaybı kabul edilebilir
✓ Tüm abonelerin aynı mesajı alması gerekiyor
✓ Düşük gecikme öncelikli
✓ Sohbet, canlı dashboard, broadcast

Streams kullan:
✓ Mesaj geçmişi önemli
✓ Consumer çökse bile mesaj kaybolmamalı
✓ Consumer gruplarıyla yük dağıtımı
✓ Mesaj onayı (acknowledgment) gerekiyor
✓ Olay kaydı (event log), iş kuyruğu
```

## UNSUBSCRIBE

Belirli bir kanaldan ya da tüm kanallardan çık:

```javascript
// Belirli kanaldan ayrıl
await subscriber.unsubscribe("kanal_1");

// Tüm kanallardan ayrıl
await subscriber.unsubscribe();
```

## Özet

Pub/Sub, broadcast (yayın) tabanlı sistemler için idealdir. Yayıncı kanalları mesaj gönderir, tüm aboneler aynı anda alır. Mesaj kalıcılığı ve onay mekanizması yoktur — kayıp kabul edilebilir gerçek zamanlı senaryolar için mükemmel. Kalıcılık ve güvenilirlik gerekiyorsa Redis Streams tercih edilmeli.

Sonraki derste Redis Streams'i — mesaj geçmişi, consumer groups ve acknowledgment destekli modern kuyruk yapısını — inceliyoruz.
