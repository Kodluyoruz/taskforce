# Sistem Tasarımı Nedir ve Neden Önemlidir?

Bir uygulama geliştiriyorsun, kodun çalışıyor, testler geçiyor. Sonra ürününü yayına alıyorsun ve ilk hafta her şey yolunda gidiyor. Ama kullanıcı sayısı birkaç bine ulaştığında sayfalar yavaşlamaya başlıyor, veritabanı sorguları zaman aşımına uğruyor, sunucu belleği dolup sistem çöküyor. Ne oldu? Kod hâlâ aynı kod. Sorun kodda değil, sistemin nasıl tasarlandığında.

Sistem tasarımı (system design), bir yazılım sisteminin mimarisini, bileşenlerini ve bu bileşenler arasındaki ilişkileri belirleyen sürecin adıdır. Tek bir sunucudan milyonlarca kullanıcıya hizmet veren dağıtık bir altyapıya kadar her ölçekteki yazılım, bilinçli ya da bilinçsiz bir sistem tasarımının ürünüdür. Bilinçsiz tasarımın bedeli ise genellikle geç öğrenilir.

Mühendisler için sistem tasarımını anlamak; sadece teknik mülakatlara hazırlanmak değil, gerçek dünyada sürdürülebilir ve büyüyebilen sistemler kurmaktır. Sistemi doğru tasarlayan bir ekip, ilerleyen zamanlarda çıkacak sorunların büyük kısmını daha baştan ortadan kaldırır.

## Bir Sistemin Temel Bileşenleri

Modern bir web uygulaması tek bir parçadan oluşmuyor. Aralarında sürekli iletişim kuran, birbirini tamamlayan birkaç temel bileşenden meydana geliyor. Bunları anlamak, herhangi bir sistemi tasarlarken kafanda doğru bir harita oluşturman için ilk adım.

**Client (İstemci)**

Client, sisteme istek gönderen taraftır. Web tarayıcın, mobil uygulaması, ya da başka bir servis — hepsi birer client'tır. Kullanıcı bir butona tıkladığında ya da bir URL'ye gittiğinde, bu isteği başlatan client'tır. Client, sistemin dışındaki dünyayı temsil eder.

**Server (Sunucu)**

Server, client'ın isteklerini karşılayan taraftır. Gelen isteği işler, gerekirse veritabanına gider, sonucu client'a döndürür. Basit uygulamalarda tek bir server yeterli olabilir; ama trafik arttıkça birden fazla server devreye girmek zorunda kalır.

**Database (Veritabanı)**

Verilerin kalıcı olarak saklandığı yerdir. Kullanıcı hesapları, siparişler, yorumlar, mesajlar — bunların hepsi bir veritabanında yaşar. Server kapanıp açılsa bile veriler burada bozulmadan durur. İlişkisel (SQL) ya da ilişkisel olmayan (NoSQL) olabilir; hangisinin seçileceği kullanım senaryosuna göre değişir.

**Network (Ağ)**

Client ile server arasındaki tüm iletişim, ağ üzerinden gerçekleşir. İnternetin altyapısı — kablolar, yönlendiriciler, protokoller — bu iletişimin zeminidir. Ağ gecikmesi (latency) ve bant genişliği (bandwidth), sistem tasarımında göz ardı edilemeyecek gerçeklerdir.

**Cache**

Cache, sık erişilen verilerin geçici olarak hızlı bir depolama alanında tutulmasıdır. Veritabanına her seferinde gitmenin yerine, önceden hesaplanmış ya da sorgulanmış sonucu hızlıca döndürür. Redis ve Memcached, bu amaçla yaygın kullanılan araçlardır. Doğru cache stratejisi, sistemin hem hızını hem de veritabanı yükünü ciddi ölçüde iyileştirir.

**CDN (Content Delivery Network)**

Statik içeriklerin (resim, video, CSS, JavaScript dosyaları) kullanıcıya coğrafi olarak yakın sunuculardan dağıtılmasını sağlayan ağdır. İstanbul'daki bir kullanıcı, içeriği San Francisco'daki bir sunucudan değil, Frankfurt'taki bir CDN node'undan alır. Sonuç: daha düşük gecikme, daha hızlı yükleme.

**Load Balancer**

Gelen trafiği birden fazla sunucuya dağıtan bileşendir. Tek bir sunucu yetersiz kaldığında, load balancer devreye girer ve istekleri mevcut sunucular arasında paylaştırır. Hem performansı artırır hem de bir sunucu çöktüğünde tüm sistemi durdurmadan çalışmaya devam etmeyi sağlar.

Bu bileşenler birbirinden bağımsız değildir. Bir kullanıcı tarayıcısından istek gönderdiğinde, bu istek önce DNS çözümlemesinden geçer, load balancer'a ulaşır, oradan uygun server'a yönlendirilir, server gerekirse cache'e bakar, yoksa veritabanına gider ve sonucu client'a döndürür. Statik dosyalar ise CDN üzerinden doğrudan kullanıcıya ulaşır. Tüm bu akış saniyenin küçük bir kesri içinde gerçekleşir.

## Gerçek Dünya Kullanımı

**Amazon**

Amazon'un bugünkü altyapısı, 2000'li yıllarda tek bir büyük sistemin yönetilemez hale gelmesiyle dönüşüm geçirdi. Farklı ekiplerin aynı kod tabanı üzerinde çalışması hem geliştirmeyi yavaşlatıyordu hem de bir değişikliğin tüm sistemi etkileme riskini taşıyordu. Bu soruna yanıt olarak Amazon, sistemi bağımsız servisler olarak yeniden tasarladı. Her servis kendi verisini yönetiyor, kendi ölçeğinde büyüyor ve diğer servislerden bağımsız deploy edilebiliyordu. Bu mimari karar sonunda AWS'nin temelini oluşturdu.

**Netflix**

Netflix, 2008 yılında büyük bir veritabanı arızası nedeniyle üç gün boyunca DVD gönderimini durdurmak zorunda kaldı. Bu deneyim, şirketi merkezi bir sistem yerine dağıtık bir bulut altyapısına geçmeye itti. Bugün Netflix, AWS üzerinde çalışıyor ve tüm dünyaya yüksek kaliteli video akışı sunabiliyor. Sistemin önemli bir parçası da CDN altyapısıdır: Netflix, popüler içerikleri internet servis sağlayıcılarının kendi ağlarına yakın noktalarda önbellekler. Böylece aynı bölgeden aynı içeriğe yapılan istekler, uzaktaki bir sunucuya gitmek yerine çok yakındaki bir cache'den karşılanır.

**WhatsApp**

WhatsApp, 2014'te Facebook tarafından satın alındığında 450 milyon aktif kullanıcıya yalnızca 32 mühendisle hizmet veriyordu. Bu verimlilik rastlantı değildi: sistem, Erlang ile yazılmış ve eş zamanlı çok sayıda bağlantıyı verimli biçimde yönetecek şekilde tasarlanmıştı. Mesajlaşma uygulamalarının temel yükü olan sürekli açık bağlantılar (persistent connections) ve anlık ileti iletimi, doğru sistem tasarımı sayesinde küçük bir ekiple bile büyük ölçekte işletilebiliyordu.

## İyi Bir Sistemin Kriterleri

Her sistem farklı gereksinimlere sahiptir, ama değerlendirme ölçütleri büyük ölçüde ortaktır.

**Scalability (Ölçeklenebilirlik)**

Sistem, artan yük karşısında kapasitesini büyütebiliyor mu? Kullanıcı sayısı ikiye katlandığında sistem performansı kabul edilebilir düzeyde kalıyor mu? Ölçeklenebilirlik, büyüme planlarının merkezinde yer alır.

**Reliability (Güvenilirlik)**

Sistemin belirli bir süre boyunca beklenen işlevi doğru ve tutarlı biçimde yerine getirme kapasitesi. Sistem, ne zaman çağrılırsa çağrılsın yapması gerekeni yapıyor mu?

**Availability (Erişilebilirlik)**

Sistem, kullanıcıların ihtiyaç duyduğu her an erişilebilir mi? %99.9 gibi ifadeler (uptime), sistemin yılda ne kadar süre ayakta kalacağını gösterir. Yüksek availability için genellikle redundancy (yedeklilik) gerekir.

**Maintainability (Sürdürülebilirlik)**

Sistemin bakımını yapmak, yeni özellikler eklemek ve hataları düzeltmek ne kadar kolay? Karmaşık, belgelenmemiş ve sıkı bağımlı sistemler zamanla teknik borç biriktirir ve geliştirme hızını yavaşlatır. İyi tasarlanmış sistemler, ekibin değiştiğinde bile yönetilebilir olmaya devam eder.

Bu dört kriter birbiriyle her zaman uyumlu değildir. Yüksek availability için yedeklilik eklediğinde maliyet artar. Ölçeklenebilirliği artırmak için dağıtık bir yapıya geçtiğinde maintainability zorlaşabilir. Sistem tasarımı, bu trade-off'ları anlayıp kullanım senaryosuna göre bilinçli kararlar almaktır.
