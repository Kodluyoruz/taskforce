# Event-Driven Architecture

Geleneksel mimarilerde servisler birbirine sıkı sıkıya bağlıdır. Servis A, servis B'yi doğrudan çağırır; B'nin adresi, API'si, response formatı değişirse A da bozulur. Sisteme yeni bir servis eklemek istersen, mevcut servisleri güncellemon gerekir. Zamanla bu bağımlılık ağı bakımı imkânsız bir yapıya dönüşür.

Event-driven architecture bu sorunu tersine çevirir: servisler birbirini çağırmak yerine **event** yayınlar, ilgilenen her servis bu event'leri dinler. Böylece hiçbir servis diğerinin varlığından haberdar olmak zorunda kalmaz.

## Nasıl Çalışır

### Event Nedir?

Event, sistemde gerçekleşen değişmez bir kayıttır. "Sipariş verildi", "ödeme onaylandı", "kullanıcı kaydoldu" — bunların hepsi birer event'tir. Event'lerin iki önemli özelliği vardır:

- **Geçmişe aittir:** Bir event bir şeyin *olduğunu* bildirir, bir şeyin *yapılmasını* istemez
- **Değişmezdir (immutable):** Bir kez yayınlanan event artık değiştirilemez

### Producer, Consumer ve Event Broker

**Producer** event'i yayınlar ve kimin dinlediğini bilmez. Bu, sıkı bağımlılığı kıran temel prensiptir — producer, event'ini bırakır ve işine devam eder.

**Consumer**, ilgilendiği event tipine subscribe olur. Producer ile arasındaki bağlantıyı **event broker** sağlar.

**Event Broker** (Kafka, RabbitMQ, AWS EventBridge) event'leri alır, saklar ve ilgili consumer'lara iletir. Kafka durumda event'ler kalıcı olarak diskte tutulur ve geçmişe dönük replay mümkündür; bu da onu audit trail ve replay senaryoları için güçlü bir araç yapar.

### Event Sourcing

Klasik yaklaşımda sistemin mevcut durumu bir veritabanında saklanır: "kullanıcının bakiyesi 150 TL." Event sourcing'de ise durum doğrudan saklanmaz; bunun yerine tüm değişiklikler event olarak kaydedilir ve durum bu event'lerin birikiminden türetilir.

```
Para yatırıldı: +200 TL
Alışveriş yapıldı: -50 TL
-------
Mevcut bakiye: 150 TL (replay ile hesaplanır)
```

Bu yaklaşımın güçlü yanları:
- **Tam audit trail:** Sistemde ne zaman ne olduğunun eksiksiz kaydı
- **Zaman yolculuğu:** Geçmişteki herhangi bir ana geri dönebilirsin
- **Hata ayıklama:** Bir sorun oluştuğunda event'leri tekrar oynatarak durumu yeniden oluşturabilirsin

Zorluk: şema değişiklikleri (event formatı güncellenmesi), dış sistemlerle entegrasyon ve state'in her sorguda hesaplanması gerektiğinde performans.

### CQRS — Command Query Responsibility Segregation

Yazma (command) ve okuma (query) modellerini birbirinden ayırma prensibidir. Klasik bir veritabanında aynı tablo hem yazılır hem de okunur. CQRS'te bu iki sorumluluk ayrı modellere taşınır:

- **Write model:** İş mantığını uygular, event'leri üretir
- **Read model:** Sorgular için optimize edilmiş, denormalize veri yapıları tutar

E-ticaret örneği: sipariş oluşturma write model'e gider; sipariş listeleme ise write model'den bağımsız, hızlı sorgu için optimize edilmiş bir read model'den karşılanır. Event sourcing ile birleştiğinde güçlü bir kombinasyon oluşturur.

## Gerçek Dünya Kullanımı

**Uber — Surge Pricing:** Şehirdeki binlerce araç ve yolcudan sürekli konum event'leri gelir. Bu event'ler işlenerek bölgesel arz-talep dengesi hesaplanır ve fiyatlandırma anlık güncellenir. Senkron bir yaklaşımla bu ölçekte veri işlemek mümkün değildir.

**E-Ticaret Sipariş İşleme:** `siparis.olusturuldu` event'i yayınlandığında ödeme servisi, envanter servisi, kargo servisi ve bildirim servisi aynı anda bu event'i alır ve bağımsız şekilde işler. Yeni bir servis eklemek istersen — örneğin sadakat puanı servisi — mevcut servislere tek bir satır dokunmadan yalnızca yeni servisi bu event'e subscribe edersin.

**Netflix — İzleme Geçmişi ve Öneri Motoru:** Kullanıcı bir içerik izlediğinde `izleme.tamamlandi` event'i üretilir. Bu event'i öneri motoru, devam et özelliği, izleme istatistikleri ve içerik lisanslama sistemleri bağımsız olarak tüketir.

## Ne Zaman Kullanılır, Ne Zaman Kullanılmaz

### Güçlü Olduğu Durumlar

- **Loosely coupled sistemler:** Servisler bağımsız olarak deploy ve ölçeklendirilmeli
- **Real-time processing:** Anlık veri akışlarının işlenmesi (IoT, finansal işlemler, kullanıcı davranışı)
- **Audit trail gereksinimi:** Her değişikliğin kaydedilmesi zorunlu olan alanlar (finans, sağlık, e-devlet)
- **Fan-out senaryoları:** Tek bir olayın birden fazla servisi tetiklemesi gerektiğinde

### Dikkatli Olunması Gereken Durumlar

**Eventual consistency:** Event yayınlandığında tüm consumer'lar anında işlemiş olmaz. Sistemin tutarlı duruma gelmesi zaman alır. Anlık tutarlılık gerektiren işlemlerde (banka transferi onayı) ek önlemler gerekir.

**Debug zorluğu:** Bir sorun oluştuğunda akışı takip etmek güçtür. "Sipariş oluşturuldu ama envanter güncellenmedi" gibi bir sorunu anlamak için birden fazla servisin log'larını ve event sırasını incelmen gerekir. Distributed tracing araçları (Jaeger, Zipkin) bu ihtiyacı kısmen karşılar ama ekstra operasyonel yük getirir.

### Choreography vs Orchestration

Event-driven sistemlerde servislerin koordinasyonu iki şekilde yönetilebilir:

**Choreography:** Her servis event'lere tepki vererek kendi akışını yönetir. Merkezi bir koordinatör yoktur. Daha az bağımlılık, ama akışı anlamak güçleşir.

**Orchestration:** Merkezi bir koordinatör (orchestrator) servislere ne yapmaları gerektiğini söyler. Akış görünürlüğü yüksektir ama orchestrator tek nokta bağımlılığı (single point of failure) yaratabilir.

Basit akışlar için choreography tercih edilir; karmaşık, çok adımlı süreçlerde (örneğin saga pattern ile uzun süren işlemler) orchestration daha yönetilebilir olabilir.

## Mülakatta Bu Konuya Nasıl Yaklaşılır

Sistem tasarımı mülakatlarında "servisler arası iletişimi nasıl tasarlarsın?" sorusuyla sıkça karşılaşırsın. İlk adım her zaman **synchronous mu, asynchronous mu** kararı olmalıdır. Bu kararı kullanıcı deneyimi ve tutarlılık gereksinimi belirler. Kullanıcı işlemin sonucunu o an görmek zorundaysa senkron gerekir; değilse async event-driven tercih edilmeli.

Sipariş-ödeme ve sipariş-bildirim senaryosunu güzel bir örnek olarak kullanabilirsin: ödeme onayı kullanıcıya anında gösterilmek zorundadır, dolayısıyla sipariş → ödeme arası çağrı synchronous olmalıdır. Ancak sipariş oluşturulduktan sonra e-posta ve SMS göndermek, envanter sistemini güncellemek, sadakat puanı vermek gibi işlemler kullanıcının beklediği şeyler değildir — bunlar async event olarak tasarlanır. Bu ayrımı net biçimde ifade etmek seni mülakatçının gözünde öne çıkarır.

Son olarak trade-off'ları açık konuş: event-driven mimari **latency**'yi düşürür (kullanıcı beklemez), **decoupling** sağlar (servisler bağımsız evrim geçirebilir) ancak **complexity** getirir (eventual consistency, debug güçlüğü, event schema yönetimi). Mülakatçı sihirli bir çözüm duymak istemez; hangi durumda hangi yaklaşımın avantajlı olduğunu bilen ve bilinçli seçim yapan bir mühendis profili görmek ister.
