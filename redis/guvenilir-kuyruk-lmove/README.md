# Güvenilir Kuyruk — LMOVE ile

Şimdiye kadar öğrendiğin kuyruk yapısında kritik bir açık var: consumer bir mesajı `LPOP` ile aldıktan sonra işleme sırasında çökerse, o mesaj sonsuza dek kaybolur. `LMOVE` bu sorunu, mesajı atomik olarak ikinci bir listeye taşıyarak çözer.

## Sorun: Mesaj Kaybı

```
[ is_kuyrugu ] → LPOP → [Consumer]
                                 ↓
                         (consumer çöktü)
                                 ↓
                         Mesaj kayboldu!
```

Consumer `LPOP` ile mesajı aldı. Mesaj artık kuyrukta yok. Ama consumer işlemi tamamlamadan process kapandı. Mesaj ne kuyruğa geri döndü ne de işlendi. Kayıp.

Bu senaryo production'da sıkça yaşanır: memory killer, network bölünmesi, uygulama hatası, deployment yeniden başlatması...

## Çözüm: İki Listeli Güvenilir Kuyruk

Consumer mesajı alırken onu ana kuyruktan silmek yerine "işleniyor" listesine taşır. İş başarıyla bitince işleniyor listesinden siler. Çökerse mesaj hâlâ işleniyor listesinde bekler, daha sonra kurtarılabilir.

```
                  Başarı → sil
                     ↗
[ana_kuyruk] → LMOVE → [isleniyor_listesi]
                             ↓
                         (crash)
                             ↓
                         [isleniyor_listesi]'nde kalır
                             ↓
                         kurtarma scripti → tekrar işle
```

## LMOVE Komutu

```
LMOVE source destination LEFT|RIGHT LEFT|RIGHT
```

Kaynak listeden bir eleman alır ve atomik olarak hedef listeye ekler.

```bash
# Ana kuyruktan soldan al, işleniyor listesinin sağına ekle
LMOVE ana_kuyruk isleniyor_listesi LEFT RIGHT

# Atomic: ya her iki adım da gerçekleşir, ya da hiçbiri
```

```bash
127.0.0.1:6379> RPUSH ana_kuyruk "is1" "is2" "is3"
(integer) 3

127.0.0.1:6379> LMOVE ana_kuyruk isleniyor LEFT RIGHT
"is1"

127.0.0.1:6379> LRANGE ana_kuyruk 0 -1
1) "is2"
2) "is3"

127.0.0.1:6379> LRANGE isleniyor 0 -1
1) "is1"
```

`is1` ana kuyruktan gitti, işleniyor listesine geldi.

## Blocking Versiyonu: BLMOVE

```
BLMOVE source destination LEFT|RIGHT LEFT|RIGHT timeout
```

Kaynak liste boşsa timeout süresince bekler:

```bash
127.0.0.1:6379> BLMOVE ana_kuyruk isleniyor LEFT RIGHT 0
# ana_kuyruk boşsa burada bekler
```

## Güvenilir Consumer Implementasyonu

```javascript
// guvenilir_consumer.js
const Redis = require("ioredis");
const redis = new Redis();

const ANA_KUYRUK = "is_kuyrugu";
const ISLENIYOR = "isleniyor";

async function mesajAl() {
  // Atomik: ana kuyruktan al, isleniyor'a taşı
  const ham = await redis.blmove(ANA_KUYRUK, ISLENIYOR, "LEFT", "RIGHT", 0);
  return ham ? JSON.parse(ham) : null;
}

async function mesajTamamla(mesaj) {
  // İş bitti, isleniyor listesinden kaldır
  const ham = JSON.stringify(mesaj);
  await redis.lrem(ISLENIYOR, 1, ham);
}

async function islemDongusu() {
  console.log("Güvenilir consumer başladı");

  while (true) {
    const mesaj = await mesajAl();
    if (!mesaj) continue;

    try {
      console.log("İşleniyor:", mesaj.id);
      await islYap(mesaj);
      await mesajTamamla(mesaj);
      console.log("Tamamlandı:", mesaj.id);
    } catch (hata) {
      console.error("Hata:", hata.message);
      // Mesaj isleniyor'da kalır, kurtarma scripti halledecek
    }
  }
}

async function islYap(mesaj) {
  await new Promise((r) => setTimeout(r, 300));
}

islemDongusu();
```

## Kurtarma Scripti

`isleniyor` listesinde takılı kalan mesajları periyodik olarak kontrol et ve geri al:

```javascript
// recovery.js
const Redis = require("ioredis");
const redis = new Redis();

const ISLENIYOR = "isleniyor";
const ANA_KUYRUK = "is_kuyrugu";
const MAKS_ISLEME_SURESI_MS = 5 * 60 * 1000; // 5 dakika

async function takiliMesajlarıKurtar() {
  const mesajlar = await redis.lrange(ISLENIYOR, 0, -1);

  for (const ham of mesajlar) {
    const mesaj = JSON.parse(ham);
    const gecenSure = Date.now() - mesaj.islemeBaslangici;

    if (gecenSure > MAKS_ISLEME_SURESI_MS) {
      console.log(`Takılı mesaj kurtarılıyor: ${mesaj.id} (${Math.round(gecenSure / 1000)}s bekledi)`);

      // İşleniyor listesinden çıkar
      await redis.lrem(ISLENIYOR, 1, ham);

      // Deneme sayısını artır
      mesaj.deneme = (mesaj.deneme || 0) + 1;

      if (mesaj.deneme >= 3) {
        // 3 denemeden sonra dead letter queue'ya gönder
        console.log(`Dead letter: ${mesaj.id}`);
        await redis.rpush("dead_letter_queue", JSON.stringify(mesaj));
      } else {
        // Ana kuyruğa geri ekle
        console.log(`Ana kuyruğa iade: ${mesaj.id} (${mesaj.deneme}. deneme)`);
        await redis.rpush(ANA_KUYRUK, JSON.stringify(mesaj));
      }
    }
  }
}

// Her 60 saniyede kurtarma çalıştır
setInterval(takiliMesajlarıKurtar, 60 * 1000);
```

## Producer: Mesaja İşleme Başlangıç Zamanı Ekle

Consumer mesajı alırken başlangıç zamanını eklemesi gerekiyor:

```javascript
// guvenilir_consumer.js (güncellendi)
async function mesajAl() {
  const ham = await redis.blmove(ANA_KUYRUK, ISLENIYOR, "LEFT", "RIGHT", 0);
  if (!ham) return null;

  const mesaj = JSON.parse(ham);

  // İşleme başlangıç zamanını güncelle ve isleniyor'da yenile
  const eskiHam = ham;
  mesaj.islemeBaslangici = Date.now();
  const yeniHam = JSON.stringify(mesaj);

  // Eski versiyonu güncelle (LREM + LPUSH yerine transaction kullan)
  const multi = redis.multi();
  multi.lrem(ISLENIYOR, 1, eskiHam);
  multi.rpush(ISLENIYOR, yeniHam);
  await multi.exec();

  return mesaj;
}
```

## RPOPLPUSH — Eski Yöntem (Deprecated)

Redis 6.2 öncesinde `LMOVE` yoktu, bunun yerine `RPOPLPUSH` kullanılırdı:

```bash
# RPOPLPUSH: source'un sağından al, destination'ın soluna ekle
RPOPLPUSH kaynak hedef
```

**`RPOPLPUSH` Redis 6.2.0 itibarıyla resmi olarak deprecated edilmiştir.** Eski kod tabanlarında karşılabilirsin, geriye dönük uyumluluk amacıyla Redis'te var olmaya devam ediyor; ancak yeni kod yazarken kesinlikle `LMOVE` kullan.

## At-Least-Once vs Exactly-Once

Bu pattern **at-least-once** delivery garantisi sağlar: bir mesaj en az bir kez işlenir. Kurtarma scripti devreye girdiğinde mesaj tekrar işlenebilir.

**Exactly-once** (tam olarak bir kez) çok daha zor ve genellikle consumer'ın idempotent (aynı işlemi birden fazla yapsa da sonuç değişmez) olmasıyla çözülür:

```javascript
async function islYap(mesaj) {
  // Daha önce işlendiyse atla
  const islendi = await redis.exists(`islendi:${mesaj.id}`);
  if (islendi) {
    console.log(`Zaten işlenmiş, atlanıyor: ${mesaj.id}`);
    return;
  }

  // İşi yap
  await gercekIsYap(mesaj);

  // İşlendiğini kaydet (24 saat)
  await redis.setex(`islendi:${mesaj.id}`, 86400, "1");
}
```

## Dead Letter Queue

3 denemeden sonra işlenemeyen mesajları `dead_letter_queue`'ya at, orada tut ve analiz et:

```javascript
// CLI'dan dead letter kuyruğunu incele
// redis-cli LRANGE dead_letter_queue 0 -1
```

Production sistemlerde dead letter queue'yu düzenli izle. Burada biriken mesajlar sistemde bir bug olduğunun işareti.

## Özet

`LMOVE` ile iki listeli pattern, basit LPOP'a göre çok daha güvenilir. Mesaj consumer tarafından işlenene kadar kuyrukta kalır; crash durumunda kurtarma scriptiyle iade edilir. At-least-once garantisi sağlar, idempotent consumer ile exactly-once davranış elde edilir. Bu yapı, ilerleyen derslerde göreceğimiz Redis Streams'in daha gelişmiş versiyonudur.
