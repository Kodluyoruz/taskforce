# Microservices Mimarisi

Büyük bir uygulamayı tek bir kod tabanında geliştirip deploy etmek, başlangıçta pratik görünür. Takım küçükken monolitik yapı oldukça verimli çalışır: tek bir codebase, tek bir deploy süreci, basit bir geliştirme ortamı. Ancak uygulama büyüdükçe ve ekip genişledikçe bu avantajlar dezavantaja dönüşmeye başlar.

Monolitik bir sistemde küçük bir değişiklik bile tüm uygulamanın yeniden derlenmesini ve deploy edilmesini gerektirir. Beş farklı ekip aynı kod tabanında çalışıyorsa herkes birbirinin değişikliklerini beklemek zorunda kalır. Ödeme sistemini ölçeklendirmek için tüm uygulamayı ölçeklendirmek zorunda kalırsın; bu hem maliyetli hem de verimsizdir. İşte bu noktada microservices mimarisi devreye girer.

Microservices, bir uygulamayı bağımsız olarak geliştirilebilen, deploy edilebilen ve ölçeklendirilebilen küçük servislere bölme yaklaşımıdır. Her servis tek bir iş sorumluluğuna odaklanır ve diğer servislerden bağımsız yaşam döngüsüne sahiptir.

## Nasıl Çalışır

Microservices mimarisinin temel prensibi **tek sorumluluk**tır: her servis yalnızca bir domain'e aittir ve o domain'in tüm sorumluluğunu üstlenir. Kullanıcı yönetimi için bir servis, ödeme işlemleri için başka bir servis, bildirimler için ayrı bir servis. Her biri kendi veritabanına sahiptir; başka servislerin veritabanına doğrudan erişmez.

### Servisler Arası İletişim

Servisler birbirleriyle üç temel yöntemle konuşur:

- **REST / HTTP**: Senkron çağrılar için en yaygın yöntem. Basit, geniş araç desteği var, ancak çağrıyı yapan servis cevap gelene kadar bekler.
- **gRPC**: Google'ın geliştirdiği, Protocol Buffers kullanan yüksek performanslı RPC framework'ü. Düşük gecikme ve güçlü tip güvenliği sunar; servisler arası yoğun iletişimde REST'e göre avantajlıdır.
- **Message Queue**: Asenkron iletişim için RabbitMQ veya Kafka gibi araçlar kullanılır. Servis A mesajı kuyruğa bırakır, Servis B uygun olduğunda işler. Bağımlılığı azaltır ve hata yayılmasını önler.

### Service Discovery: Servisler Birbirini Nasıl Bulur?

Geleneksel bir sistemde bir servisin IP adresi sabittir. Microservices dünyasında ise servis instance'ları sürekli başlayıp kapanır, IP'ler değişir. Service discovery, bu dinamik ortamda servislerin birbirini bulmasını sağlar.

**Consul** ve **Eureka** en yaygın service registry araçlarıdır. Çalışma mantığı şöyledir: her servis ayağa kalktığında kendisini registry'ye kaydeder ("Ben buradayım, şu adresteyim"). Başka bir servis ona ulaşmak istediğinde önce registry'ye sorar: "Ödeme servisi nerede?" Registry güncel adresi döner ve iletişim kurulur. Servis kapandığında ya kendisi kaydını siler ya da registry health check mekanizmasıyla onu listeden çıkarır.

### Circuit Breaker Pattern

Dağıtık sistemlerde en kritik sorunlardan biri **hata yayılması**dır. Servis A, Servis B'yi çağırıyor; Servis B yavaşladı veya çöktü. Servis A cevap beklerken kendi thread'lerini tüketir, o da yavaşlar, onu çağıran Servis C de etkilenir. Domino etkisiyle tüm sistem çöker.

Circuit breaker bu problemi bir elektrik sigortası mantığıyla çözer. Üç durumu vardır:

- **Closed (Kapalı)**: Her şey normal, istekler geçiyor.
- **Open (Açık)**: Hata eşiği aşıldı. Artık hedef servise istek gönderilmiyor; hata anında döndürülüyor.
- **Half-Open (Yarı Açık)**: Belirli süre sonra birkaç test isteği gönderilir. Başarılıysa Closed'a döner, değilse Open kalır.

**Hystrix** (Netflix tarafından geliştirilen, artık bakımda değil) ve **Resilience4j** (Java ekosisteminin güncel alternatifi) bu pattern'ın yaygın implementasyonlarıdır.

## Gerçek Dünya Kullanımı

**Netflix**, microservices'in en sık anılan örneğidir. 700'den fazla microservice'e sahip olan Netflix, her ekibin kendi servisini bağımsız olarak deploy etmesine izin verir. Bir ekip öneri algoritmasını güncellerken başka bir ekip arama servisinde değişiklik yapar; bunlar birbirini etkilemez. Netflix ayrıca "Chaos Monkey" adını verdiği araçla üretim ortamında kasıtlı olarak servisler çökertir ve sistemin bu arızalara dayanıklı olup olmadığını test eder.

**Amazon**, microservices'e geçişi zorunlu hale getiren ünlü "two-pizza team" kuralını uygulamaktadır: bir ekip iki pizza ile doyurulabiliyorsa doğru büyüklüktedir. Her küçük ekip kendi servisine sahiptir ve onun her adımından sorumludur — geliştirme, deploy, monitoring. "You build it, you run it" felsefesi Amazon'un microservices kültürünün özüdür.

**Uber**, domain sınırlarına göre servis ayrımı yapar. Yolculuk yönetimi, konum servisi, ödeme, bildirim ve sürücü eşleştirme birer ayrı servistir. Her biri bağımsız ölçeklenebilir; yoğun saatlerde yolculuk eşleştirme servisi agresif biçimde scale out yapılabilirken diğerleri sabit kalabilir.

## Ne Zaman Kullanılır / Kullanılmaz

Microservices'in avantajlarından yararlanmak için bazı koşulların sağlanması gerekir:

**Kullanılması mantıklı durumlar:**
- Farklı bileşenlerin farklı ölçeklendirme ihtiyaçları var (ödeme sistemi vs. bildirim sistemi)
- Büyük ekipler var ve her ekip bağımsız çalışmak istiyor
- Hızlı ve bağımsız deploy döngüleri kritik
- Farklı servisler farklı teknolojilerle yazılabilir (polyglot architecture)

**Dikkat edilmesi gereken durumlar ve tuzaklar:**

*Distributed monolith tuzağı*: Servisleri fiziksel olarak ayırdın ama mantıksal olarak sıkı bağımlısın. Servis A'yı deploy etmeden Servis B çalışmıyor, değişiklikler her zaman birlikte yapılmak zorunda. Bu durum hem monolitin hem microservices'in dezavantajlarını birleştirir.

*Ağ gecikmesi*: Monolitte bir fonksiyon çağrısı nanosaniyeler sürerken microservices'te aynı işlem network round-trip gerektirir.

*Observability karmaşıklığı*: 20 servis varsa bir istek hangi servislerde dolaştı, hata nereden geldi? Distributed tracing (Jaeger, Zipkin) ve merkezi loglama (ELK stack) olmadan bu soruları cevaplamak çok zordur.

*Veri tutarlılığı*: Her servisin kendi veritabanı olduğunda transaction yönetimi karmaşıklaşır. Saga pattern gibi yaklaşımlar gerekir.

**En önemli tavsiye**: Eğer sıfırdan başlıyorsan, monolitik başla. Sistemin sınırlarını, domain modelini ve gerçek darboğazları öğrendikten sonra gerektiğinde microservices'e geç. "Monolitik başla, gerektiğinde böl" yaklaşımı, Martin Fowler dahil pek çok yazılım mimarının önerdiği stratejidir.

## Mülakatta Bu Konuya Nasıl Yaklaşılır

Mülakatta "Sistemi microservices'e nasıl bölerdiniz?" sorusuyla karşılaştığında, cevabını **Domain-Driven Design (DDD)** ve **Bounded Context** kavramı üzerine kur. Her servis bir domain sınırını temsil etmeli ve o sınırın dışına çıkmamalıdır. Bounded Context'ler bağımsız deploy edilebilirliğin temel kriterini oluşturur: eğer iki servisi her zaman birlikte deploy etmek zorundaysan, aslında onlar tek bir servis olmalıdır.

Anti-pattern olarak **nanoservices**'ten bahset: her fonksiyonu ayrı bir servise dönüştürmek, ağ gecikmesini ve operasyonel karmaşıklığı gereksiz yere artırır. Servis sınırlarını belirlerken "bu servis bağımsız deploy edilebilir mi?" sorusunu merkeze koy. Bağımsız deploy edilebilirlik, microservices mimarisinde servis sınırının en temel kriteridir.

Distributed monolith tuzağından, circuit breaker gibi resiliency pattern'larından ve observability'nin ne kadar kritik olduğundan bahsedebilirsen mülakatta güçlü bir izlenim bırakırsın. Son olarak, her sistemin microservices gerektirmediğini ve küçük takımlarda ya da yeni projelerde monolitin daha pragmatik olduğunu söylemekten çekinme — bu olgunluk işaretidir.
