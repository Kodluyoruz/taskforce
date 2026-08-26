# Redis CLI Temel Kullanımı

Redis CLI (`redis-cli`), Redis sunucusuyla doğrudan komut satırı üzerinden konuşmanı sağlar. Uygulamandan bağımsız olarak Redis'i incelemek, hata ayıklamak, kuyruk durumunu kontrol etmek için vazgeçilmezdir.

## CLI'ya Bağlanma

```bash
# Varsayılan: localhost:6379
redis-cli

# Uzak sunucuya bağlanma
redis-cli -h 192.168.1.10 -p 6379

# Şifre gereken sunucu
redis-cli -h host -p 6379 -a sifreni_buraya

# Bağlandıktan sonra AUTH komutuyla da girilebilir
AUTH sifreni_buraya
```

Bağlandıktan sonra prompt şöyle görünür: `127.0.0.1:6379>`

## Temel Komutlar

### PING

Bağlantının canlı olduğunu test eder:

```bash
127.0.0.1:6379> PING
PONG

127.0.0.1:6379> PING "merhaba"
"merhaba"
```

### SET ve GET

String değer yaz ve oku:

```bash
127.0.0.1:6379> SET kullanici:1:isim "Ali"
OK

127.0.0.1:6379> GET kullanici:1:isim
"Ali"

# Değer yoksa nil döner
127.0.0.1:6379> GET olmayan_anahtar
(nil)
```

### DEL

Bir veya birden fazla anahtarı sil:

```bash
127.0.0.1:6379> DEL kullanici:1:isim
(integer) 1

# Birden fazla anahtar silme
127.0.0.1:6379> DEL key1 key2 key3
(integer) 3
```

Dönen integer, kaç anahtarın silindiğini gösterir.

### EXISTS

Anahtarın var olup olmadığını kontrol et:

```bash
127.0.0.1:6379> SET test "deger"
OK

127.0.0.1:6379> EXISTS test
(integer) 1

127.0.0.1:6379> EXISTS olmayan
(integer) 0
```

### KEYS

Pattern'a uyan tüm anahtarları listele:

```bash
127.0.0.1:6379> KEYS *
# Tüm anahtarlar

127.0.0.1:6379> KEYS kullanici:*
# "kullanici:" ile başlayan tüm anahtarlar

127.0.0.1:6379> KEYS queue:*
# "queue:" ile başlayan tüm anahtarlar
```

> **Uyarı:** `KEYS *` üretim ortamında kullanma. Milyonlarca anahtar varsa Redis'i dondurabilir. Bunun yerine `SCAN` kullan.

### TYPE

Bir anahtarın veri tipini öğren:

```bash
127.0.0.1:6379> SET mesaj "merhaba"
OK
127.0.0.1:6379> TYPE mesaj
string

127.0.0.1:6379> RPUSH kuyruk "is1"
(integer) 1
127.0.0.1:6379> TYPE kuyruk
list
```

## Queue Bağlamında Faydalı Komutlar

### LLEN — Kuyruk Uzunluğunu Gör

```bash
127.0.0.1:6379> RPUSH email_queue "is1" "is2" "is3"
(integer) 3

127.0.0.1:6379> LLEN email_queue
(integer) 3
```

### LRANGE — Kuyruğun İçine Bak

Kuyruğu silmeden içini gör:

```bash
# Tüm elemanlar: 0 -1
127.0.0.1:6379> LRANGE email_queue 0 -1
1) "is1"
2) "is2"
3) "is3"

# İlk 2 eleman
127.0.0.1:6379> LRANGE email_queue 0 1
1) "is1"
2) "is2"
```

Bu komut kuyruk debug'larken çok kullanılır — mesajlar orada mı, sıra doğru mu kontrol edersin.

### MONITOR — Canlı Komut Akışı

Sunucuya gelen tüm komutları gerçek zamanlı izle:

```bash
127.0.0.1:6379> MONITOR
OK
# Buradan sonra Redis'e gelen her komutu görürsün
# Çıkmak için Ctrl+C
```

Uygulamanı çalıştırıp ayrı terminalde `MONITOR` açarsan tam olarak hangi komutların gönderildiğini görebilirsin. Debug için çok değerli.

### INFO — Sunucu Bilgisi

Redis hakkında detaylı bilgi al:

```bash
127.0.0.1:6379> INFO
# Server, Clients, Memory, Stats, Replication gibi bölümler gelir

# Sadece bellek bilgisi
127.0.0.1:6379> INFO memory

# Sadece istatistikler
127.0.0.1:6379> INFO stats
```

Önemli alanlar:
- `used_memory_human` — Redis'in kullandığı bellek
- `connected_clients` — aktif bağlantı sayısı
- `total_commands_processed` — toplam işlenen komut

### DBSIZE

Toplam anahtar sayısını gösterir:

```bash
127.0.0.1:6379> DBSIZE
(integer) 42
```

### FLUSHDB

Mevcut veritabanındaki tüm anahtarları sil (dikkatli kullan!):

```bash
127.0.0.1:6379> FLUSHDB
OK
```

Bunu sadece geliştirme ortamında test verilerini temizlemek için kullan. Üretimde çalıştırma.

## Komutları CLI'dan Doğrudan Çalıştırma

Önce CLI'a girmeden, terminal satırından doğrudan komut gönderebilirsin:

```bash
# Tek komut gönder
redis-cli PING

# Kuyruk uzunluğunu script'ten kontrol et
redis-cli LLEN email_queue

# Tüm queue içeriğini al
redis-cli LRANGE email_queue 0 -1
```

Bu özellikle shell script'leri veya monitoring araçları yazarken kullanışlıdır.

## TTL — Anahtar Ne Zaman Silinecek?

```bash
# 60 saniyelik ömür ver
127.0.0.1:6379> SET gecici_mesaj "merhaba" EX 60
OK

# Kalan süreyi gör (saniye)
127.0.0.1:6379> TTL gecici_mesaj
(integer) 57

# Milisaniye hassasiyetiyle
127.0.0.1:6379> PTTL gecici_mesaj
(integer) 54321

# Süresi yoksa -1 döner
127.0.0.1:6379> TTL kalici_anahtar
(integer) -1

# Anahtar yoksa -2 döner
127.0.0.1:6379> TTL olmayan
(integer) -2
```

## SCAN — Üretim Güvenli Anahtar Tarama

`KEYS *` yerine `SCAN` kullan:

```bash
# İlk sayfa, her sayfa 100 eleman
127.0.0.1:6379> SCAN 0 COUNT 100
1) "128"          # Sonraki cursor
2) 1) "key1"
   2) "key2"
   ...

# Pattern ile filtrele
127.0.0.1:6379> SCAN 0 MATCH "queue:*" COUNT 100

# Cursor 0 dönene kadar devam et — tarama tamamlandı
127.0.0.1:6379> SCAN 128 COUNT 100
1) "0"            # 0 dönünce bitti
2) ...
```

## HELP Komutu

Herhangi bir komutun kullanımını CLI içinden öğren:

```bash
127.0.0.1:6379> HELP LPUSH
127.0.0.1:6379> HELP LRANGE
127.0.0.1:6379> HELP @list    # List komutlarının tamamı
127.0.0.1:6379> HELP @string  # String komutları
```

## Pratik: CLI ile Queue İşlemleri

Şimdi bir mini alıştırma yapalım. CLI'ı aç ve şunları dene:

```bash
# Bir email kuyruğu oluştur
127.0.0.1:6379> RPUSH email_queue "hosgeldin@kullanici.com" "siparis@kullanici.com" "kargo@kullanici.com"
(integer) 3

# Kaç mesaj var?
127.0.0.1:6379> LLEN email_queue
(integer) 3

# İçine bak (silmeden)
127.0.0.1:6379> LRANGE email_queue 0 -1
1) "hosgeldin@kullanici.com"
2) "siparis@kullanici.com"
3) "kargo@kullanici.com"

# İlk mesajı al (FIFO — en önce eklenen)
127.0.0.1:6379> LPOP email_queue
"hosgeldin@kullanici.com"

# Kalan
127.0.0.1:6379> LRANGE email_queue 0 -1
1) "siparis@kullanici.com"
2) "kargo@kullanici.com"

# Temizle
127.0.0.1:6379> DEL email_queue
(integer) 1
```

Bu basit alıştırma, ilerleyen derslerde kodla yapacakların CLI karşılığı. Bir şeyler beklenmedik davranırsa hep bu şekilde CLI'dan kontrol edebilirsin.

## Özet

Redis CLI, Redis ile çalışırken sürekli başvuracağın araç. Kuyruk uzunluğunu kontrol etmek için `LLEN`, içeriğe bakmak için `LRANGE`, canlı komut akışını izlemek için `MONITOR`. Bu komutları ezberlemene gerek yok ama ne zaman hangisini kullanacağını bilmek debug sürecini çok kısaltır.

Sonraki derste queue'nun temel veri yapısı olan Redis List'i derinlemesine inceliyoruz.
