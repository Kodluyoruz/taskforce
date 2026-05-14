# LPUSH, RPUSH, LPOP, RPOP Komutları

Dört komut, dört yön. Redis List'te sol (L) sola, sağ (R) sağa işaret eder. Push ekler, Pop çıkarır. Bu komutların kombinasyonunu anlamak, Redis ile queue kurmanın temelidir.

## Görsel Model

Redis'i yatay bir boru gibi düşün. İki ucu var: sol (L) ve sağ (R).

```
      L (sol)          R (sağ)
         ↓                ↓
 ← [  D  |  C  |  B  |  A  ] →
        LPOP            RPOP
        LPUSH           RPUSH
```

- `LPUSH` → soldan ekler, A'nın soluna D eklendi
- `RPUSH` → sağdan ekler, listenin sağ ucuna yeni eleman gelir
- `LPOP` → soldan çıkarır
- `RPOP` → sağdan çıkarır

## RPUSH — Sağa Ekle

```
RPUSH key element [element ...]
```

Listenin sağ ucuna eleman ekler. Liste yoksa otomatik oluşturur.

```bash
127.0.0.1:6379> RPUSH email_queue "ali@test.com"
(integer) 1

127.0.0.1:6379> RPUSH email_queue "veli@test.com"
(integer) 2

127.0.0.1:6379> RPUSH email_queue "ayse@test.com"
(integer) 3

# Sonuç:
# [ ali@test.com | veli@test.com | ayse@test.com ]
#   (sol, baş)                    (sağ, son)
```

Birden fazla eleman aynı anda eklenebilir — atomik işlem, ya hepsi eklenir ya da hiçbiri:

```bash
127.0.0.1:6379> RPUSH email_queue "a@test.com" "b@test.com" "c@test.com"
(integer) 6
```

## LPUSH — Sola Ekle

```
LPUSH key element [element ...]
```

Listenin sol ucuna (başına) ekler. Queue yerine stack için kullanılır.

```bash
127.0.0.1:6379> LPUSH aktivite_log "giris_yapildi"
(integer) 1

127.0.0.1:6379> LPUSH aktivite_log "profil_guncellendi"
(integer) 2

127.0.0.1:6379> LPUSH aktivite_log "cikis_yapildi"
(integer) 3

127.0.0.1:6379> LRANGE aktivite_log 0 -1
1) "cikis_yapildi"       # En son eklenen başta
2) "profil_guncellendi"
3) "giris_yapildi"       # En önce eklenen sonda
```

**Dikkat:** `LPUSH` ile birden fazla eleman eklerken sağdan sola yazılır:

```bash
127.0.0.1:6379> LPUSH liste "a" "b" "c"
# İç sıralama: [ c | b | a ]
# Çünkü önce "a" eklendi, sonra "b" onun soluna, sonra "c" "b"nin soluna
```

## LPOP — Soldan Çıkar

```
LPOP key [count]
```

Sol uçtaki elemanı alır ve listeden kaldırır. Liste boşsa `nil` döner.

```bash
127.0.0.1:6379> RPUSH email_queue "a@test.com" "b@test.com" "c@test.com"
(integer) 3

127.0.0.1:6379> LPOP email_queue
"a@test.com"

127.0.0.1:6379> LPOP email_queue
"b@test.com"

127.0.0.1:6379> LPOP email_queue
"c@test.com"

127.0.0.1:6379> LPOP email_queue
(nil)    # Liste boş
```

Redis 6.2 ve sonrasında `count` parametresiyle birden fazla eleman alınabilir:

```bash
127.0.0.1:6379> RPUSH kuyruk "a" "b" "c" "d" "e"
(integer) 5

127.0.0.1:6379> LPOP kuyruk 3
1) "a"
2) "b"
3) "c"
```

## RPOP — Sağdan Çıkar

```
RPOP key [count]
```

Sağ uçtaki (son eklenen) elemanı alır ve kaldırır.

```bash
127.0.0.1:6379> RPUSH kuyruk "a" "b" "c"
(integer) 3

127.0.0.1:6379> RPOP kuyruk
"c"    # En son eklenen

127.0.0.1:6379> RPOP kuyruk
"b"

127.0.0.1:6379> RPOP kuyruk
"a"
```

## FIFO Queue: RPUSH + LPOP

Standart kuyruk davranışı için `RPUSH` ile ekle, `LPOP` ile al:

```
Ekleme zamanı → A, B, C (sırasıyla)

RPUSH A  →  [ A ]
RPUSH B  →  [ A | B ]
RPUSH C  →  [ A | B | C ]

LPOP     →  "A"  ← İlk giren, ilk çıkar (FIFO)
LPOP     →  "B"
LPOP     →  "C"
```

Node.js'te gerçek bir FIFO queue:

```javascript
const Redis = require("ioredis");
const redis = new Redis();

// Mesaj kuyruğa ekle (producer)
async function mesajEkle(kuyruk, mesaj) {
  const uzunluk = await redis.rpush(kuyruk, JSON.stringify(mesaj));
  console.log(`Mesaj eklendi. Kuyruk uzunluğu: ${uzunluk}`);
  return uzunluk;
}

// Kuyruğun başından mesaj al (consumer)
async function mesajAl(kuyruk) {
  const ham = await redis.lpop(kuyruk);
  if (!ham) {
    console.log("Kuyruk boş");
    return null;
  }
  return JSON.parse(ham);
}

async function demo() {
  const kuyruk = "email_queue";

  // 3 mesaj ekle
  await mesajEkle(kuyruk, { kime: "ali@test.com", konu: "Hoş geldin" });
  await mesajEkle(kuyruk, { kime: "veli@test.com", konu: "Siparişin alındı" });
  await mesajEkle(kuyruk, { kime: "ayse@test.com", konu: "Kargo yola çıktı" });

  // Sırayla al
  console.log(await mesajAl(kuyruk)); // ali@test.com mesajı
  console.log(await mesajAl(kuyruk)); // veli@test.com mesajı
  console.log(await mesajAl(kuyruk)); // ayse@test.com mesajı
  console.log(await mesajAl(kuyruk)); // null — kuyruk boş

  redis.disconnect();
}

demo();
```

## LIFO Stack: LPUSH + LPOP

Son giren ilk çıkması gerekiyorsa:

```javascript
const Redis = require("ioredis");
const redis = new Redis();

// Stack'e ekle
async function stackEkle(key, deger) {
  await redis.lpush(key, deger);
}

// Stack'ten al (son eklenen gelir)
async function stackAl(key) {
  return await redis.lpop(key);
}

async function demo() {
  await stackEkle("undo_stack", "metin_A_yazildi");
  await stackEkle("undo_stack", "metin_B_yazildi");
  await stackEkle("undo_stack", "metin_C_yazildi");

  // Undo işlemi — en son yapılan geri alınır
  console.log(await stackAl("undo_stack")); // metin_C_yazildi
  console.log(await stackAl("undo_stack")); // metin_B_yazildi

  redis.disconnect();
}

demo();
```

## LMOVE — Atomik Taşıma

Bir liste ile başka bir liste arasında eleman taşımayı tek atomik adımda yapar. Redis 6.2 ile gelen bu komut, eski `RPOPLPUSH`'un (Redis 6.2.0'dan itibaren deprecated) resmi halefidir:

```bash
# email_queue'nun solundan al ve processing listesinin sağına ekle
LMOVE email_queue processing_queue LEFT RIGHT
```

Bu komut güvenilir queue implementasyonunun temelidir — 10. derste derinlemesine inceliyoruz.

## Komutların Boş Liste Davranışı

| Durum | Komut | Sonuç |
|---|---|---|
| Liste yok | `RPUSH` | Liste oluşturulur, eleman eklenir |
| Liste yok | `LPOP` | `(nil)` döner |
| Liste boş | `LPOP` | `(nil)` döner |
| Son eleman çıkarıldı | `LPOP` | `(nil)` döner, anahtar silinir |

Redis, list boşaldığında anahtarı otomatik siler. `DEL` çağırmana gerek yok.

## RPUSHX ve LPUSHX

Sadece liste zaten varsa ekle, yoksa hiçbir şey yapma:

```bash
127.0.0.1:6379> DEL test_liste
(integer) 0

# Liste yoksa ekleme
127.0.0.1:6379> RPUSHX test_liste "eleman"
(integer) 0   # Eklenmedi, liste yoktu

# Önce liste oluştur
127.0.0.1:6379> RPUSH test_liste "ilk"
(integer) 1

# Şimdi RPUSHX çalışır
127.0.0.1:6379> RPUSHX test_liste "ikinci"
(integer) 2
```

Bu, yanlışlıkla yeni bir kuyruk oluşturmak istemediğin senaryolarda kullanışlıdır.

## JSON Nesnelerini Kuyruğa Eklemek

Redis List, string depolar. Nesne veya dizi eklemek için JSON kullanırsın:

```javascript
const Redis = require("ioredis");
const redis = new Redis();

// Kuyruğa nesne ekle
const is = {
  id: "job_123",
  tip: "email_gonder",
  kime: "ali@test.com",
  konu: "Siparişin hazır",
  olusturulma: new Date().toISOString(),
};

await redis.rpush("is_kuyrugu", JSON.stringify(is));

// Kuyruktan nesne al
const ham = await redis.lpop("is_kuyrugu");
const alinan = JSON.parse(ham);
console.log(alinan.tip); // "email_gonder"

redis.disconnect();
```

## Özet

| Kombinas­yon | Davranış | Kullanım |
|---|---|---|
| `RPUSH` + `LPOP` | FIFO Queue | E-posta kuyruğu, iş kuyruğu |
| `LPUSH` + `LPOP` | LIFO Stack | Undo/Redo, son aktiviteler |
| `LPUSH` + `RPOP` | FIFO (ters yön) | Aynı sonuç, tercih meselesi |

Sonraki derste bu komutları kullanarak gerçek bir Producer/Consumer pattern kuracağız.
