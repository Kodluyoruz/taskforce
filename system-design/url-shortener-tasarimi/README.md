# URL Shortener Tasarımı

Bu eğitim boyunca öğrendiğin her kavram — ölçeklendirme, veritabanı seçimi, caching, sharding, load balancing, CDN, API Gateway — aslında soyutta kalmıyor. Gerçek bir sistemde hepsinin birbirine nasıl bağlandığını görmek için en sade ve en öğretici örnek URL kısaltma servisidir. Bit.ly, TinyURL, t.co gibi servisler milyarlarca kısa URL üretiyor ve günde milyarlarca yönlendirme yapıyor. Bu başlıkta o sistemi sıfırdan tasarlayacağız; her adımda hangi eğitim kavramını kullandığımızı da not edeceğiz.

## Gereksinimler

### Fonksiyonel Gereksinimler

- Kullanıcı uzun bir URL girer, sistem ona kısa ve benzersiz bir kod üretir.
- Kısa koda yapılan GET isteği, kullanıcıyı orijinal URL'ye yönlendirir.
- Opsiyonel: her kısa URL için tıklama sayısı, ülke, zaman damgası gibi analitik veriler tutulabilir.
- Opsiyonel: URL'lere son kullanma tarihi (expiration) atanabilir.

### Teknik Varsayımlar

Tasarıma başlamadan önce sayıları netleştirelim — mülakat ortamında da bu adım kritiktir:

- Günde 100 milyon URL kısaltma isteği (write)
- Okuma/yazma oranı 10:1 → günde 1 milyar yönlendirme isteği (read)
- URL'ler 5 yıl aktif tutulacak
- Her kayıt ortalama 500 byte (long URL + metadata)
- Toplam depolama: 100M × 365 × 5 × 500 byte ≈ **91 TB** (5 yıl)
- Ortalama QPS (write): ~1.200 istek/saniye; Ortalama QPS (read): ~12.000 istek/saniye (Gerçek peak, ortalama değerin 2-3 katı olabilir.)

Bu rakamlar sistemi küçük bir proje olmaktan çıkarıp ciddi bir dağıtık sistem ihtiyacına taşır.

## High-Level Tasarım

### API Tasarımı

İki temel endpoint yeterli:

```
POST /shorten
Body: { "longUrl": "https://example.com/very/long/path?query=params" }
Response: { "shortUrl": "https://short.ly/aB3xK9z" }

GET /{shortCode}
Response: HTTP 301 veya 302 redirect → orijinal URL
```

**301 vs 302 farkı:** 301 kalıcı yönlendirme demektir; tarayıcı bunu önbelleğe alır ve sonraki istekleri doğrudan orijinal URL'ye gönderir. Bu sunucu yükünü azaltır ama tıklama analitiği toplayamazsın. 302 geçici yönlendirmedir; her seferinde sunucuya gelir, analitik tutabilirsin ama yük daha yüksektir. Analitik önemliyse 302 seç.

### Bileşen Diyagramı

```
İstemci
   |
   v
API Gateway          <- rate limiting, auth, routing
   |
   v
Load Balancer        <- gelen trafiği dağıtır
   |
   +---> Uygulama Sunucusu (1)
   +---> Uygulama Sunucusu (2)   <- horizontal scaling
   +---> Uygulama Sunucusu (N)
              |
              +---> Cache (Redis)     <- önce buraya bak
              |
              +---> Veritabanı        <- cache miss durumunda
```

## Hash Algoritması

En kritik bileşen: uzun URL'den benzersiz, kısa bir kod nasıl üretilir?

### Base62 Encoding

Base62, 62 karakterlik bir alfabe kullanır: `[0-9, a-z, A-Z]`. Rastgele bir sayı üretir veya global sayaç kullanır, ardından bu sayıyı base62'ye çevirirsin.

7 karakterlik bir kodun kapasite hesabı:

```
62^7 = 3.521.614.606.208 ≈ 3.5 trilyon kombinasyon
```

Yeterliliği kontrol edelim:
```
100M/gün × 365 gün × 5 yıl = 182.5 milyar URL
3.5 trilyon > 182.5 milyar → 7 karakter fazlasıyla yeterli
```

### Alternatif: MD5 + Kısaltma

Uzun URL'yi MD5 ile hash'leyip ilk 7 karakterini alabilirsin. Avantajı: aynı uzun URL her seferinde aynı kısa kodu üretir (deduplication). Dezavantajı: collision riski base62 rastgele üretiminden daha yüksektir.

### Collision Handling

İki farklı uzun URL aynı kısa koda dönüşürse ne olur? Bunu önlemek için:

1. Kod üretmeden önce veritabanında o kodun var olup olmadığını kontrol et.
2. Çakışma varsa yeni bir kod üret (veya sayacı artır).
3. Distributed sistemde bu kontrol optimistik lock veya atomic operasyon gerektirir.

Rastgele base62 üretiminde çakışma olasılığı matematiksel olarak son derece düşüktür — doğum günü paradoksu hesabıyla 3.5 trilyon kombinasyonda milyarlarca URL'de dahi ihmal edilebilir seviyelerde — ama yine de kodun bunu handle etmesi gerekir.

## Veritabanı Seçimi

### Tablo Şeması

```
short_code  VARCHAR(7)   PRIMARY KEY
long_url    TEXT         NOT NULL
created_at  TIMESTAMP
expires_at  TIMESTAMP    NULL
user_id     BIGINT       NULL
click_count BIGINT       DEFAULT 0
```

### SQL mi, NoSQL mi?

Bu sistem için erişim paterni son derece basit: `short_code` ile tek bir satır oku veya yaz. İlişkisel veri yok, join yok, karmaşık transaction yok. Bu yüzden NoSQL tercih edilebilir — özellikle Cassandra veya DynamoDB gibi key-value ağırlıklı sistemler bu iş için biçilmiş kaftandır.

| Kriter | SQL | NoSQL |
|--------|-----|-------|
| Yatay ölçekleme | Zor | Kolay |
| Erişim paterni | Esnek | Key-value için ideal |
| Consistency | Strong | Eventual |
| Operasyonel basitlik | Daha az yapılandırma | Daha fazla dikkat gerekir |

Okuma ağırlıklı (%90), basit key-value erişimi olan bu sistemde NoSQL güçlü bir tercih. Ancak kullanıcı hesapları veya gelişmiş analitik gibi ek özellikler eklenirse hibrit mimari de düşünülebilir.

### Sharding

91 TB veriyi tek bir node'da tutamazsın. `short_code`'un hash'ine göre consistent hashing ile sharding yap. Böylece yük düzgün dağılır ve yeni node eklemek mevcut veriyi minimum ölçüde taşır.

## Cache Katmanı

### Pareto Prensibi

Gerçek dünyada tüm URL'lerin %20'si toplam trafiğin %80'ini oluşturur. Bit.ly gibi servislerde viral linkler dakikalar içinde milyonlarca tıklama alır. Bu "hot" URL'leri her seferinde veritabanından çekmek hem yavaş hem de gereksiz pahalıdır.

### Redis ile Caching

```
Anahtar: short_code (string)
Değer:   long_url (string)
TTL:     24 saat
Eviction policy: LRU (en az kullanılan önce silinir)
```

Bir yönlendirme isteği geldiğinde akış şöyle işler:

1. Redis'te `short_code` ara.
2. Cache hit → doğrudan 301/302 redirect döndür. Veritabanına hiç dokunma.
3. Cache miss → veritabanından oku, Redis'e yaz, redirect döndür.

Cache hit oranı %80-90 seviyesine ulaştığında veritabanına giden istek sayısı dramatik biçimde düşer. 12.000 QPS'lik okuma trafiğinde bu fark, veritabanına binen yükü 10 kat azaltabilir anlamına gelir.

## Ölçeklendirme

### Uygulama Katmanı

Uygulama sunucuları stateless olduğu için — her state veritabanı veya cache'de tutuluyor — horizontal scaling doğrudan uygulanabilir. Load balancer önüne N tane sunucu ekleyebilirsin; herhangi bir isteği herhangi bir sunucu karşılayabilir. Trafik patiklerinde yeni instance'lar devreye alınır, düşünce hiçbir şeyi değiştirmeden kaldırılır.

### Veritabanı Katmanı

- **Read replica:** Yönlendirme istekleri (okuma) replica'lardan karşılanır. Write (URL kısaltma) primary'e gider. Bu, okuma trafiğini primary'den izole eder ve dayanıklılığı artırır.
- **Sharding:** `short_code` hash'ine göre veriyi farklı node'lara dağıt. Tek bir shard'ın kapasitesini aştığında yeni shard eklemek mümkün olur.

### CDN

Popüler short URL'ler için 301 redirect yanıtlarını CDN edge node'larında cache'leyebilirsin. Kullanıcı Türkiye'den `short.ly/aB3xK9z`'yi ziyaret ettiğinde istek Amerika'daki origin sunucuya gitmeden Frankfurt CDN node'undan yanıt alabilir. Bu hem latency'yi düşürür hem de origin sunucu yükünü azaltır.

### Rate Limiting

API Gateway katmanında rate limiting uygula. Tek bir IP'den saniyede yüzlerce URL kısaltma isteği geliyorsa bu muhtemelen bot ya da kötüye kullanım. Token bucket veya sliding window algoritmasıyla kısıtla; meşru kullanıcılar etkilenmez.

## Bu Tasarımda Öğrendiklerimiz

URL shortener tasarımı, bu eğitimde gördüğün kavramların neredeyse tamamını tek bir sistemde birleştiriyor:

| Kullanılan Kavram | Bu Sistemdeki Rolü |
|---|---|
| **Ölçeklendirme** | Stateless uygulama sunucuları ile horizontal scaling |
| **SQL vs NoSQL** | Key-value erişim paterni → NoSQL tercih kararı |
| **Cache** | Redis ile hot URL'leri önbellekleme, LRU eviction |
| **Sharding** | short_code hash'i ile 91 TB veriyi dağıtma |
| **Load Balancing** | Gelen trafiği uygulama sunucuları arasında dağıtma |
| **CDN** | Popüler redirect yanıtlarını edge'de cache'leme |
| **API Gateway** | Rate limiting, routing, auth |
| **Replikasyon** | Read replica ile okuma yükünü izole etme |

Bir sistem tasarımı mülakatında URL shortener klasik bir başlangıç sorusudur — hem basit görünür hem de derinleştirildiğinde her katmanı test eder. Bu başlığı iyi anladıysan, sonraki başlıkta öğreneceğin mülakat çerçevesini bu sisteme uygulayarak pratik yapabilirsin.
