# Message Queue

Modern sistemlerde servisler birbirleriyle sürekli konuşur. En basit yöntem, bir servisin diğerini doğrudan HTTP ile çağırmasıdır. Ama bu senkron yaklaşımın ciddi bir zayıflığı var: çağrılan servis o anda cevap veremezse, istek kaybolur. Anlık trafik artışlarında (flash sale, gece yarısı bildirim gönderimi) sistem ya tıkanır ya da çöker. İşte message queue'lar tam bu noktada devreye girer — iki servis arasına bir tampon koyarak onları birbirinden ayırır.

## Nasıl Çalışır

Message queue'nun temel modeli üç bileşenden oluşur: **producer**, **queue (broker)** ve **consumer**.

- **Producer** mesajı oluşturur, kuyruğa bırakır ve işine devam eder. Karşı tarafın mesajı alıp almadığını beklemez.
- **Queue (broker)** mesajı güvenli biçimde saklar. Producer ile consumer arasındaki aracıdır.
- **Consumer** mesajları kendi kapasitesine göre kuyruktan çeker ve işler.

Bu model sayesinde producer ve consumer birbirinden bağımsız hale gelir. Consumer yavaşlarsa veya geçici olarak kapanırsa, mesajlar kuyrukta bekler; consumer tekrar ayağa kalktığında kaldığı yerden devam eder.

### Delivery Garantileri

Message queue sistemleri üç farklı teslimat garantisi sunar:

| Garanti | Açıklama | Risk |
|---|---|---|
| **At-most-once** | Mesaj en fazla bir kez teslim edilir | Kayıp olabilir |
| **At-least-once** | Mesaj en az bir kez teslim edilir | Duplicate olabilir |
| **Exactly-once** | Mesaj tam olarak bir kez teslim edilir | Zor ve maliyetli |

Çoğu sistem at-least-once garantisiyle çalışır. Bu durumda consumer tarafında **idempotency** sağlamak gerekir — aynı mesajı iki kez işlemek, bir kez işlemekle aynı sonucu vermelidir.

### Queue vs Topic: Point-to-Point ve Pub-Sub

İki temel mesajlaşma modeli vardır:

**Point-to-Point (Queue):** Mesaj tek bir consumer tarafından işlenir. Birden fazla consumer varsa, mesaj yalnızca birine gider. Sipariş işleme gibi "bir iş tam olarak bir kez yapılmalı" senaryoları için uygundur.

**Pub-Sub (Topic):** Mesaj, o topic'e abone olan tüm consumer'lara iletilir. Apache Kafka bu modeli kullanır. "Sipariş verildi" event'ini hem ödeme servisi hem envanter servisi hem de bildirim servisi alabilir.

## Gerçek Dünya Kullanımı

### Popüler Araçlar

**RabbitMQ** — Klasik message broker. AMQP protokolünü kullanan, olgun ve yaygın kullanımlı bir çözüm. Routing kuralları, dead letter queue'lar ve esnek exchange yapıları sunar. Orta ölçekli sistemler için iyi bir başlangıç noktasıdır.

**Apache Kafka** — Distributed log mimarisine dayanır. Mesajlar kalıcı olarak diskte saklanır ve geçmişe dönük replay mümkündür. Saniyede milyonlarca mesaj işleyebilir. LinkedIn, Netflix ve Uber gibi şirketler Kafka'yı veri akışlarının omurgası olarak kullanır.

**AWS SQS** — Tam yönetilen (managed) bir kuyruk servisi. Altyapı yönetimi istemeyenler için hızlı ve ölçeklenebilir seçenek. Standard Queue (at-least-once) ve FIFO Queue (exactly-once, sıralı) olmak üzere iki tür sunar.

### E-Ticaret Sipariş Senaryosu

Bir kullanıcı sipariş verdiğinde ne olur? Senkron yaklaşımda sipariş servisi sırayla ödeme servisini, envanter servisini ve bildirim servisini çağırır. Herhangi biri yavaşlarsa veya çökerse tüm akış durur.

Message queue ile aynı senaryo şöyle çalışır:

1. Kullanıcı siparişi verir → sipariş servisi `siparis.olusturuldu` mesajını kuyruğa bırakır
2. **Ödeme servisi** bu mesajı alır, ödemeyi işler
3. **Envanter servisi** bu mesajı alır, stoku günceller
4. **Bildirim servisi** bu mesajı alır, kullanıcıya e-posta/SMS gönderir

Bu üç servis birbirinden habersiz şekilde çalışır. Bildirim servisi çökerse sipariş işlemi etkilenmez; servis düzeldiğinde kuyruktaki mesajı işler.

## Ne Zaman Kullanılır, Ne Zaman Kullanılmaz

### Kullanman Gereken Durumlar

- **Servisler arası decoupling:** İki servisin birbirinden bağımsız ölçeklenmesi ve güncellenmesi gerekiyorsa
- **Asenkron işlemler:** Kullanıcının cevap beklemesine gerek olmayan işlemler (e-posta, rapor üretimi, video encoding)
- **Peak load buffering:** Anlık trafik artışlarında sistemi korumak için — trafiği düzleştirip consumer'ın kendi hızında işlemesini sağlar
- **Retry mekanizması:** Başarısız olan mesajları dead letter queue'ya taşıyıp yeniden işleyebilirsin

### Dikkat Etmen Gereken Durumlar

**Ekstra karmaşıklık:** Message queue sisteme yeni bir bileşen ekler. Bu bileşenin kendi bakımı, izlenmesi ve olası hataları vardır. Basit, düşük trafikli bir sistemde bu ekstra yük gereksiz olabilir.

**Eventual consistency:** Mesaj kuyruğa girdiğinde işlenmiş değildir. Sistemin tutarlı duruma gelmesi zaman alır. "Sipariş verildi ama envanter hâlâ güncellenmedi" gibi geçici tutarsızlıkları kabul etmen gerekir.

**Senkron yeterli olduğunda:** Kullanıcı işlemin sonucunu hemen beklemek zorundaysa (örneğin ödeme onayı), asenkron kuyruk değil doğrudan senkron çağrı daha uygun olabilir. Her şeyi kuyruğa atmak çözüm değil, yeni bir problem kaynağı olabilir.

Message queue, doğru kullanıldığında sistemleri çok daha dayanıklı ve ölçeklenebilir hale getirir. Ama onu bir araç olarak değil, belirli problemlere yönelik bir çözüm olarak düşünmek gerekir.
