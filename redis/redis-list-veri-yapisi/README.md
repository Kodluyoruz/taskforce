# Redis List Veri Yapısı

Redis List, sıralı bir eleman koleksiyonudur. Her eleman bir string'dir ve ekleme sırası korunur. Adını listeden alsa da aslında içeride **quicklist** olarak implementedir — Redis 3.2'den beri geçerli olan bu yapı, listpack nodelarından (sıkıştırılmış diziler) oluşan bağlı bir listedir. Küçük listelerde (az eleman, küçük boyut) Redis doğrudan tek bir listpack kullanır; büyüdükçe quicklist devreye girer. Sonuç olarak baş veya kuyruktan ekleme ve çıkarma işlemleri O(1) — sabit zaman — karmaşıklığındadır.

Queue (kuyruk) implementasyonu için bu özellik biçilmiş kaftan. Binlerce mesaj olsa bile `LPUSH` ve `RPOP` hep aynı hızda çalışır.

## Quicklist mi, Array mi?

Klasik bir array'de ortalara eleman eklemek pahalıdır — tüm elemanlar kaydırılır. Quicklist'te ise uç nodelar doğrudan erişilebilir; kaydırma gerekmez.

```
Array:     [ A ][ B ][ C ][ D ]  →  Uçlara ekleme: O(1), ortaya: O(n)
Quicklist: [node1] ↔ [node2] ↔ [node3]  →  Uçlara ekleme: O(1)
```

Redis List bu yüzden queue için mükemmel: başına veya sonuna ekleme daima hızlı. Ödediğin bedel, ortaya erişimin O(n) olması — ama bir queue'da ortaya erişmezsin zaten.

## Temel List Komutları

### RPUSH — Sonuna Ekle

```bash
RPUSH kuyruk "eleman"
```

Listenin sağ ucuna (sonuna) eleman ekler. Birden fazla eleman birden eklenebilir:

```bash
127.0.0.1:6379> RPUSH email_queue "ali@test.com" "veli@test.com" "ayse@test.com"
(integer) 3
```

Dönen integer, listenin güncel uzunluğunu gösterir.

### LPUSH — Başına Ekle

```bash
LPUSH kuyruk "eleman"
```

Listenin sol ucuna (başına) eleman ekler. Stack implementasyonu için LIFO davranışı ister, LPUSH+LPOP kombinasyonu kullanılır.

```bash
127.0.0.1:6379> LPUSH log_stack "log3"
(integer) 1
127.0.0.1:6379> LPUSH log_stack "log2"
(integer) 2
127.0.0.1:6379> LPUSH log_stack "log1"
(integer) 3

127.0.0.1:6379> LRANGE log_stack 0 -1
1) "log1"    # En son eklenen, başta
2) "log2"
3) "log3"
```

### LPOP — Başından Al

```bash
LPOP kuyruk
LPOP kuyruk 3   # Birden fazla al (Redis 6.2+)
```

```bash
127.0.0.1:6379> RPUSH email_queue "a@test.com" "b@test.com" "c@test.com"
(integer) 3

127.0.0.1:6379> LPOP email_queue
"a@test.com"

127.0.0.1:6379> LRANGE email_queue 0 -1
1) "b@test.com"
2) "c@test.com"
```

### RPOP — Sonundan Al

```bash
RPOP kuyruk
RPOP kuyruk 3   # Birden fazla al (Redis 6.2+)
```

```bash
127.0.0.1:6379> RPOP email_queue
"c@test.com"
```

### LLEN — Uzunluğu Öğren

```bash
127.0.0.1:6379> LLEN email_queue
(integer) 1
```

### LRANGE — İçine Bak

Listeyi silmeden elemanları gör:

```bash
# Tüm elemanlar
LRANGE email_queue 0 -1

# İlk 5
LRANGE email_queue 0 4

# Son 5
LRANGE email_queue -5 -1
```

Negatif index listenin sonundan sayar: `-1` son eleman, `-2` sondan ikinci eleman.

### LINDEX — Tek Elemana Eriş

```bash
127.0.0.1:6379> RPUSH isler "is1" "is2" "is3"
(integer) 3

127.0.0.1:6379> LINDEX isler 0   # İlk eleman
"is1"

127.0.0.1:6379> LINDEX isler -1  # Son eleman
"is3"

127.0.0.1:6379> LINDEX isler 10  # Olmayan index
(nil)
```

Bu O(n) bir operasyon — büyük listelerde dikkatli kullan.

### LSET — Değer Güncelle

```bash
127.0.0.1:6379> LSET isler 1 "is2_guncellendi"
OK
```

### LREM — Eleman Sil

```bash
# LREM key count element
# count > 0: soldan itibaren "count" kadar sil
# count < 0: sağdan itibaren "count" kadar sil
# count = 0: hepsini sil

127.0.0.1:6379> RPUSH kuyruk "a" "b" "a" "c" "a"
(integer) 5

127.0.0.1:6379> LREM kuyruk 2 "a"   # Soldan 2 tane "a" sil
(integer) 2

127.0.0.1:6379> LRANGE kuyruk 0 -1
1) "b"
2) "c"
3) "a"   # Üçüncü "a" kaldı
```

### LTRIM — Listeyi Kırp

Sadece belirtilen aralığı koru, geri kalanı sil:

```bash
# Son 100 elementi tut, eskilerini sil
127.0.0.1:6379> LTRIM log_list -100 -1
OK
```

Sabit boyutlu log listesi tutmak için çok kullanışlıdır.

## Queue ve Stack Olarak Redis List

Redis List iki farklı şekilde kullanılabilir:

### FIFO Queue (Kuyruk) — RPUSH + LPOP

```
Ekleme: RPUSH → [ C | B | A ] → LPOP :Alma
                  son         baş
```

En başa eklenen (A) ilk çıkar. Standart kuyruk davranışı.

```bash
127.0.0.1:6379> RPUSH is_kuyrugu "is_A"
127.0.0.1:6379> RPUSH is_kuyrugu "is_B"
127.0.0.1:6379> RPUSH is_kuyrugu "is_C"

127.0.0.1:6379> LPOP is_kuyrugu   # is_A — ilk giren
127.0.0.1:6379> LPOP is_kuyrugu   # is_B
127.0.0.1:6379> LPOP is_kuyrugu   # is_C — son giren
```

### LIFO Stack (Yığın) — LPUSH + LPOP

```
Ekleme: LPUSH → [ C | B | A ] → LPOP :Alma
                  baş         son
```

En son eklenen (C) ilk çıkar. Stack davranışı.

```bash
127.0.0.1:6379> LPUSH aktivite_log "sayfa_ziyaret"
127.0.0.1:6379> LPUSH aktivite_log "urun_tiklama"
127.0.0.1:6379> LPUSH aktivite_log "sepete_ekle"

127.0.0.1:6379> LPOP aktivite_log   # sepete_ekle — en son aktivite
```

## Maksimum Uzunluk Yönetimi

Redis List'te maksimum uzunluk sınırı yoktur — bellek dolana kadar büyüyebilir. Bunu yönetmek senin sorumluluğunda.

En yaygın yaklaşım `LTRIM` kullanmak:

```javascript
const Redis = require("ioredis");
const redis = new Redis();

async function logEkle(mesaj) {
  const key = "son_100_log";
  await redis.rpush(key, mesaj);
  // Sadece son 100 logu tut
  await redis.ltrim(key, -100, -1);
}
```

Ya da producer tarafında uzunluğu kontrol edip dolunca bekleme uygulayabilirsin — bunu ilerleyen derslerde göreceğiz.

## Performans Özeti

| Operasyon | Komut | Karmaşıklık |
|---|---|---|
| Başına/Sonuna ekle | LPUSH, RPUSH | O(1) |
| Başından/Sonundan çıkar | LPOP, RPOP | O(1) |
| Uzunluk | LLEN | O(1) |
| Index erişimi | LINDEX | O(n) |
| Aralık görüntüleme | LRANGE | O(n) |
| Eleman silme | LREM | O(n) |

Queue olarak kullanıldığında her zaman LPUSH/RPUSH + LPOP/RPOP kombinasyonunu tercih et. Bunlar O(1) olduğu için 10 elemanlı queue ile 10 milyon elemanlı queue aynı hızda çalışır.

## Özet

Redis List, quicklist (listpack nodelarından oluşan yapı) implementasyonu sayesinde baş ve kuyruktan O(1) ekleme/çıkarma yapar. FIFO queue için `RPUSH + LPOP`, LIFO stack için `LPUSH + LPOP` kombinasyonu kullanılır. `LRANGE` ile listeyi silmeden inceleyebilir, `LTRIM` ile boyutu kontrol altında tutabilirsin.

Sonraki derste bu komutları tek tek ele alıp gerçek bir queue nasıl kurulur adım adım göreceğiz.
