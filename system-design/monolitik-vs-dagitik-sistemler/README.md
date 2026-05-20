# Monolitik ve Dağıtık Sistemler

Bir yazılım projesi başlatırken, uygulamayı tek bir bütün olarak mı kuracaksın yoksa birbirinden bağımsız parçalara mı böleceğin sorusu çok erken geliyor gibi görünse de aslında oldukça geç cevaplanır. Çoğu sistem monolitik başlar — bu, kasıtlı bir tercih olduğu kadar doğal bir süreçtir. Küçük bir ekip, hızlı hareket etmek, ürünü çabuk piyasaya sürmek ister. Mimari karmaşıklığa harcayacak ne zamanı ne de ihtiyacı vardır.

Sorun şu ki sistem büyüdükçe, ekip genişledikçe ve iş gereksinimleri çeşitlendikçe tek parçanın içindeki gerilimler yüzeye çıkar. Bu noktada bazı ekipler monoliti parçalara ayırmayı düşünmeye başlar. Ama bu geçiş kaçınılmaz değildir; doğru koşullarda yıllarca başarıyla işletilmiş monolitler vardır.

İki mimari felsefe arasındaki fark, bir teknoloji seçiminin ötesinde bir düşünce biçimidir. Hangi koşulda hangisinin daha uygun olduğunu anlamak, ileride alacağın pek çok tasarım kararını şekillendirir.

## Monolitik Mimari

Monolitik mimaride uygulamanın tüm bileşenleri — kullanıcı arayüzü, iş mantığı, veri erişim katmanı — tek bir deployable unit olarak bir arada derlenir ve çalıştırılır. Tek bir kod tabanı, tek bir süreç, tek bir deployment.

Bir e-ticaret uygulamasını düşün: ürün kataloğu, sepet yönetimi, sipariş işleme, kullanıcı hesapları, ödeme — hepsi aynı uygulamanın içinde. Birini değiştirdiğinde tüm uygulamayı yeniden derleyip deploy edersin.

**Avantajları**

Monolitler başlangıçta son derece pratiktir. Geliştirme ortamını kurmak basittir; tüm kod tek bir yerdir. Bileşenler arasındaki fonksiyon çağrıları ağ üzerinden değil, doğrudan bellekte gerçekleşir — bu da hem hızlı hem de hata ayıklaması kolay demektir.

Deployment süreci de basittir: tek bir artefakt derlenip çalıştırılır. Test etmek kolaydır; entegrasyon testleri tüm sistemi kapsayan bir süreçte çalışır. Yeni bir geliştirici projeye katıldığında tek bir repo klonlar ve çalıştırmaya başlayabilir.

**Dezavantajları**

Sistem büyüdükçe monolitin içindeki karmaşıklık artar. Kod tabanı binlerce, onlarca binlerce satıra ulaşınca bir değişikliğin nereden etkilediğini takip etmek zorlaşır. Küçük bir değişiklik için tüm sistemin yeniden deploy edilmesi gerekir; bu hem zaman alır hem de risk taşır.

Ölçeklendirme monolitlerde kısıtlıdır. Uygulamanın yalnızca bir bölümü — diyelim ki sipariş işleme — yük altındaysa bile tüm monoliti ölçeklendirmek zorundasın. Tek bir teknoloji yığını (stack) kullanmak zorundasın; farklı bileşenler için farklı diller ya da frameworkler tercih edemezsin (veya bunu yapmak çok zorlaşır).

**StackOverflow Örneği**

StackOverflow, dünyanın en yoğun trafikli yazılım sitelerinden biridir. 2013 yılında aylık on milyonlarca benzersiz ziyaretçiye hizmet veriyordu ve bunu tek bir master veritabanı, birkaç uygulama sunucusu ve yoğun cache kullanımıyla başarıyordu. StackOverflow bugün hâlâ büyük ölçüde monolitik yapısını koruyor ve bu mimari onların şartlarında işe yarıyor. Sistemin monolitik kalmasının kararı, ekip büyüklüğüyle ve ürünün yapısıyla uyumlu.

## Dağıtık Sistemler

Dağıtık sistemlerde uygulama, ağ üzerinde birbirinden bağımsız çalışan bileşenlere bölünür. Her bileşen ayrı süreçlerde, genellikle farklı makinelerde çalışır ve diğerleriyle ağ üzerinden iletişim kurar.

Mikroservis mimarisi, dağıtık sistemlerin en yaygın biçimlerinden biridir. Her servis belirli bir iş kapasitesini temsil eder: ürün kataloğu servisi, sepet servisi, ödeme servisi, bildirim servisi — bunlar birbirinden bağımsız deploy edilebilir, bağımsız ölçeklendirilebilir ve bağımsız olarak başarısız olabilir.

**Avantajları**

Her servis bağımsız olarak deploy edilebilir. Ödeme servisinde bir değişiklik yaptığında yalnızca o servisi deploy edersin; sipariş servisi kesintisiz çalışmaya devam eder. Bu, geliştirme döngüsünü hızlandırır ve deployment riskini azaltır.

Farklı servisler farklı hızlarda büyüyebilir. Kullanıcı arama servisi çok yoğun trafik alıyorsa yalnızca onu ölçeklendirirsin; diğer servisler olduğu gibi kalır. Her servis kendi teknoloji yığınını kullanabilir: bir servis Python ile, başkası Go ile, bir diğeri Node.js ile yazılabilir.

Hata izolasyonu da önemli bir avantajdır. Bir servis çöktüğünde diğerleri çalışmaya devam edebilir (eğer sistem buna göre tasarlandıysa).

**Dezavantajları**

Ağ üzerinden iletişim, bellekteki fonksiyon çağrısına göre çok daha yavaş ve güvenilmezdir. Partial failure (kısmi başarısızlık) gerçek bir sorundur: bir servis yanıt vermeyi durdurduğunda onu çağıran diğer servislerin ne yapacağına karar vermek gerekir.

Consistency (tutarlılık) sağlamak zorlaşır. Monolitte bir transaction tüm bileşenleri kapsayabilirken, dağıtık sistemde birden fazla servisin verilerini tutarlı tutmak başlı başına bir mühendislik problemidir.

Operasyonel karmaşıklık artar. Her servis ayrıca deploy edilmeli, izlenmeli (monitoring), loglanmalı ve hata durumunda müdahale edilmelidir. Bu, küçük ekipler için ciddi bir yük oluşturabilir.

**Amazon Örneği**

Amazon'un erken dönemlerinde büyüyen monolitik yapısı yönetilemez hale gelince, Jeff Bezos bir direktif yayımladı: tüm servisler yalnızca API üzerinden iletişim kuracak, başka yol olmayacaktı. Bunun yanı sıra "two-pizza team" kuralını benimsedi — bir ekip, iki pizzayla beslenebilecek kadar küçük olmalıydı. Bu iki karar, bağımsız çalışan servis ekiplerinin önünü açtı. Her ekip kendi servisini kendi hızında geliştirdi ve deploy etti; bu dönüşüm Amazon'un farklı parçalarını (alışveriş, AWS, lojistik) birbirinden bağımsız büyütmesine zemin hazırladı.

## Ne Zaman Hangisi

Ekip küçükse ve ürün yeni ise monolitik başlamak genellikle daha mantıklıdır. Mimari karmaşıklıkla uğraşmak yerine ürünün kendisine odaklanmak, erken aşamada daha değerlidir. Birçok başarılı ürün monolitle başladı, zamanla ihtiyaca göre dönüştü.

Farklı bileşenlerin farklı ölçeklerde büyüdüğü, birden fazla ekibin bağımsız çalışması gerektiği ve sistemin büyük bir karmaşıklığa ulaştığı durumlarda dağıtık mimariye geçiş değerlendirilebilir.

Dikkat edilmesi gereken bir tuzak var: **distributed monolith**. Bu, dağıtık görünümlü ama sıkı bağımlı (tightly coupled) bir sistemdir. Servisler ayrı deploy edilir ama aralarındaki bağımlılıklar o kadar güçlüdür ki birinde yapılan değişiklik diğerlerini kırıyor, ya da her şey aynı anda deploy edilmek zorunda kalıyor. Bu durum hem monolitin hem dağıtık sistemin dezavantajlarını bir arada barındırır. Gerçek anlamda bağımsız servisler oluşturulmazsa dağıtık mimariye geçişin getireceği yük, kazanımdan fazla olabilir.

Sonuçta mimari seçim, bir kez yapılıp sonsuza kadar sabit kalan bir karar değildir. Sistemler büyür, gereksinimler değişir ve mimariler de zamanla evrilir. Önemli olan, içinde bulunduğun koşulları doğru okuyarak o an için en uygun kararı almaktır.
