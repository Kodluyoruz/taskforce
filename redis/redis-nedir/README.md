# Redis Nedir?

Redis, RAM üzerinde çalışan bir veri yapısı deposudur (data structure store). Veritabanı olarak kullanılabilir, önbellek (cache) olarak kullanılabilir, mesaj broker olarak kullanılabilir. Ama en büyük farkı şu: verilerini sabit disk yerine bellekte (RAM) tutar.

Bunun pratik anlamı basit — **çok hızlı**. Disk I/O yerine bellek erişimi olduğu için işlem süreleri milisaniye değil, mikrosaniye cinsinden. Saniyede milyonlarca okuma/yazma işlemi yapabilir.

## Redis Nasıl Ortaya Çıktı?

Redis, İtalyan geliştirici Salvatore Sanfilippo tarafından 2009 yılında yaratıldı. Kendi startup'ı için MySQL ile çalışırken, gerçek zamanlı web analitik sistemini ölçeklendirmekte sorun yaşadı. Disk tabanlı veritabanı yetişmiyordu. Çözüm olarak bellek tabanlı kendi veri deposunu geliştirdi — ve Redis doğdu.

Bugün Redis, Antirez (Sanfilippo'nun takma adı) tarafından başlatılmış, şu an Redis Ltd. tarafından sürdürülen açık kaynaklı bir projedir. Twitter, GitHub, Snapchat, StackOverflow, Craigslist ve daha binlerce şirket production'da Redis kullanır.

## Redis'i Diğer Veritabanlarından Ayıran Şey

### In-Memory Çalışma

Geleneksel bir SQL veritabanını düşün — veriler diskte, sorgu çalıştırıldığında disk okuma yapılır, indeks taranır, sonuç döner. Bu süreç milisaniye mertebesindedir.

Redis'te tüm veri RAM'dedir. Bir değer okumak `GET key` kadar basit ve sonuç mikrosaniyeler içinde döner.

```
PostgreSQL → Disk I/O → ~1-10ms
Redis      → RAM Erişim → ~0.1ms (100 mikrosaniye)
```

Bu 10-100x hız farkı, gerçek zamanlı uygulamalarda büyük anlam taşır.

### Zengin Veri Yapıları

Redis, basit bir anahtar-değer deposu değil. Birden fazla veri yapısını doğrudan destekler:

| Veri Yapısı | Kullanım Alanı |
|---|---|
| **String** | Sayaçlar, basit önbellekleme, token saklama |
| **List** | Kuyruklar, zaman serisi loglar, geçmiş |
| **Hash** | Kullanıcı profilleri, nesne saklama |
| **Set** | Benzersiz üyelik, tag sistemi, intersection |
| **Sorted Set** | Liderlik tabloları, öncelikli kuyruklar |
| **Pub/Sub** | Gerçek zamanlı mesajlaşma, bildirim yayını |
| **Streams** | Kalıcı mesaj kuyruğu, event log |

Bu veri yapıları sayesinde Redis, birçok farklı problemi tek araçla çözebiliyor.

### Atomik Operasyonlar

Redis'in komut yürütme motoru **single-threaded** (tek iş parçacıklı) çalışır. Redis 6.0'dan itibaren ağ I/O işlemleri için birden fazla thread kullanılsa da, komutların işlenip yürütülmesi hâlâ tek bir thread üzerinde sırayla gerçekleşir. Bu şu anlama gelir: aynı anda iki komut aynı anahtara erişse bile yarış durumu (race condition) oluşmaz. Her komut atomik olarak çalışır — ya tamamen tamamlanır ya da hiç başlamaz.

Bu özellik queue sistemleri için kritik. İki consumer aynı mesajı okuyup çift işleme yapmasının önüne geçer.

### Persistence (Kalıcılık)

"Bellek tabanlı" deyince ilk soru "sunucu kapanırsa veri gider mi?" olur.

Redis iki farklı kalıcılık mekanizması sunar:

**RDB (Redis Database)**
Belirli aralıklarla belleğin tamamının snapshot'ını alıp diske yazar. Sunucu açılınca bu snapshot'tan yüklenir. Hız öncelikli, küçük veri kaybı kabul edilebilir senaryolar için uygundur.

**AOF (Append Only File)**
Her yazma komutunu bir log dosyasına kaydeder. Sunucu kapanıp açılınca loglar tekrar oynatılır. Veri kaybı minimaldır ama disk kullanımı daha fazladır.

İkisi birlikte de kullanılabilir. Queue sistemlerinde mesaj kaybetmemek kritikse AOF veya her ikisi birden tercih edilir.

## Neden Redis Queue İçin Mükemmeldir?

Queue'ların temel ihtiyaçları şunlardır: hız, atomiklik, çoklu consumer desteği ve hata toleransı. Redis bunların hepsini karşılar.

**Hız:** Mesajları belleğe yazmak ve okumak çok hızlıdır. Yüksek throughput gereken sistemlerde — örneğin saniyede binlerce mesaj — Redis rahatlıkla ayakta durur.

**Atomiklik:** `LPOP` komutu atomik çalışır. Aynı mesajı iki consumer aynı anda alamaz. Çift işleme (duplicate processing) riski yoktur.

**Veri Yapısı Çeşitliliği:** Basit FIFO için List, öncelikli queue için Sorted Set, event streaming için Streams, yayın için Pub/Sub — her senaryoya uygun bir yapı var.

**Persistence:** Mesajları kaybetmemek gerektiğinde AOF ile tam güvenli queue kurulabilir.

**Ecosystem:** BullMQ, Celery (Python), Resque (Ruby) gibi popüler queue kütüphaneleri Redis üzerine inşa edilmiştir. Sıfırdan queue yazmak yerine olgun kütüphaneler kullanılabilir.

## Redis'in Kullanım Alanları

Redis, queue dışında birçok alanda kullanılır:

**Önbellekleme (Caching)**
Veritabanı sorgularının sonuçları Redis'te saklanır. Aynı sorgu tekrar geldiğinde veritabanına gitmeden Redis'ten döner. API response time dramatik şekilde düşer.

**Oturum Yönetimi (Session Management)**
Web uygulamalarında kullanıcı oturumları Redis'te tutulur. Birden fazla sunucu olsa bile tüm sunucular aynı Redis'e erişir — session tutarlıdır.

**Hız Sınırlandırma (Rate Limiting)**
"Bu IP adresinden dakikada en fazla 100 istek kabul et" gibi kurallar Redis'te atomik sayaçlarla uygulanır.

**Gerçek Zamanlı Liderlik Tabloları**
Oyun veya yarışma uygulamalarında Sorted Set kullanılarak anlık sıralama tutulur.

**Dağıtık Kilitleme (Distributed Lock)**
Birden fazla sunucunun aynı anda aynı kaynağa erişmemesi için Redis tabanlı kilitleme kullanılır.

## Redis vs Alternatifler

| | Redis | RabbitMQ | Apache Kafka |
|---|---|---|---|
| **Hız** | Çok yüksek | Orta | Yüksek |
| **Kurulum** | Basit | Orta | Karmaşık |
| **Message Persistence** | Opsiyonel | Var | Güçlü |
| **Consumer Groups** | Var (Streams) | Var | Var |
| **Kullanım Kolaylığı** | Çok kolay | Kolay | Orta |
| **Ölçeklenebilirlik** | Orta-Yüksek | Orta | Çok yüksek |

Redis'i tercih etmek için en güçlü argümanlar şunlardır: zaten altyapında Redis varsa (ki genellikle cache için vardır) ayrıca bir message broker kurmak gerekmez. Aynı araç hem cache hem queue görevi görür. Küçük-orta ölçekli sistemlerde bu sadelik büyük avantajdır.

Çok büyük ölçekli, petabyte veri işleyen sistemlerde Kafka gibi özel çözümler tercih edilir. Ama çoğu uygulama için Redis fazlasıyla yeterlidir.

## Redis Sürümleri ve Lisanslama

2024 itibarıyla Redis, lisans değişikliğine gitti. Redis 7.4 ve sonrasında RSALv2 ve SSPLv1 lisanslarına geçildi. Bu, bazı bulut sağlayıcıların Redis'i managed servis olarak sunmasını kısıtladı.

Bu gelişme üzerine Linux Foundation bünyesinde **Valkey** projesi forked olarak devam ediyor — BSD lisanslı, Redis 7.2 uyumlu, topluluk destekli. AWS, Google Cloud ve diğer büyük sağlayıcılar Valkey'e geçiş yaptı.

Bu eğitimde Redis komutları öğretiliyor ve bu komutlar Valkey ile tam uyumlu. Hangisini kullanırsan kullan, sözdizimi aynı.

## Özet

Redis, in-memory çalışan, zengin veri yapıları sunan, atomik operasyonlar garantileyen ve opsiyonel persistence destekleyen bir veri deposudur. Queue sistemleri için özellikle uygun çünkü hızlıdır, atomiklik sağlar ve List, Sorted Set, Pub/Sub, Streams gibi queue'ların farklı ihtiyaçlarını karşılayan veri yapıları sunar.

Sonraki derste Redis'i bilgisayarına kurarak ilk bağlantını yapacaksın.
