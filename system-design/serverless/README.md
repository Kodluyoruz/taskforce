# Serverless Mimari

"Sunucu yönetmekten nefret ediyorum" diyorsan, serverless tam sana göre. Ancak serverless'ın ne olduğunu anlamak için önce ne olmadığını netleştirmek gerekir: serverless "sunucu yok" demek değildir. Arka planda hâlâ sunucular var. Fark şu: o sunucuları sen yönetmiyorsun, provision etmiyorsun, patch atmıyorsun, kapasite planlaması yapmıyorsun. Sunucuyu cloud sağlayıcısı yönetiyor; sen yalnızca kodun mantığını yazıyorsun.

Bu yaklaşım altyapı yönetim yükünü ortadan kaldırır. Kaç server gerekiyor? Hangi instance type? Auto scaling group nasıl yapılandırılacak? Bu soruların hiçbiriyle uğraşmıyorsun. Odaklanman gereken tek şey iş mantığı.

## Nasıl Çalışır?

Serverless'ın özü **FaaS (Function-as-a-Service)**'dir. Çalışma mantığı son derece basittir: bir fonksiyon yaz, bir event tanımla, event gerçekleşince fonksiyon çalışsın.

```
Event geldi → Container başlatıldı → Fonksiyon çalıştı → Container durdu → Fatura kesildi
```

Fonksiyon çalışmadığı sürece hiçbir şey olmuyor, para ödemiyorsun. Trafik gelince otomatik olarak ölçekleniyor — sıfırdan binlerce eş zamanlı çalışmaya kadar. Trafik düşünce tekrar sıfıra iniyor.

### Event Trigger'lar

FaaS fonksiyonları çeşitli event'lerle tetiklenebilir:

- **HTTP request**: API Gateway üzerinden gelen web isteği
- **Dosya yükleme**: S3 bucket'a görsel yüklendiğinde
- **Message queue**: SQS veya Kafka kuyruğuna mesaj geldiğinde
- **Cron/zamanlayıcı**: Her gece 02:00'da rapor oluşturma
- **Veritabanı değişikliği**: DynamoDB Streams ile kayıt güncellendiğinde

### Stateless Zorunluluğu

FaaS fonksiyonları **stateless** olmak zorundadır. Bir çağrıdan diğerine bellek tutamazsın. Her fonksiyon çağrısı bağımsız bir container'da başlar — bir önceki çağrıda ne olduğunu bilmez. Durum tutman gerekiyorsa bunu harici bir store'da (Redis, DynamoDB, S3) saklamalısın.

### Cold Start: İlk Çağrının Bedeli

Serverless'ın en önemli teknik kısıtı **cold start**'tır. Bir fonksiyon uzun süredir çağrılmadıysa, yeni bir istek geldiğinde cloud sağlayıcısı önce bir container başlatmak zorundadır. Bu işlem 100 milisaniyeden 1 saniyenin üzerine kadar uzayabilir; kullanılan runtime'a ve fonksiyonun bağımlılık ağırlığına göre değişir.

Java ve .NET gibi ağır runtime'lar cold start'ta daha fazla gecikir. Node.js ve Python genellikle daha hızlı başlar. Yüksek trafikli uygulamalarda cold start nadiren yaşanır çünkü container'lar warm kalır. Düşük trafikli ya da trafik patlaması olan sistemlerde ise sık karşılaşılır.

Cold start etkisini azaltmak için AWS Lambda'nın "Provisioned Concurrency" özelliği gibi çözümler mevcuttur: belirli sayıda container'ı her zaman sıcak tut.

## Gerçek Dünya Kullanımı

**AWS Lambda**, FaaS alanında en yaygın kullanılan servistir. Milyonlarca olay per saniye işleyebilir, faturayı milisaniye bazında keser.

**Vercel** ve **Netlify Functions**, frontend geliştiriciler arasında serverless'ı ana akıma taşıdı. Bir Next.js uygulaması deploy ettiğinde her API route otomatik olarak bir serverless function haline gelir. Sunucu yapılandırmasına gerek kalmadan tam bir fullstack uygulama ayağa kalkabilir.

Klasik kullanım senaryoları:

**Image resize pipeline**: Kullanıcı S3'e bir görsel yüklediğinde Lambda otomatik tetiklenir. Görseli farklı boyutlara resize eder, optimize eder ve tekrar S3'e yazar. Yükleme olmadığında hiçbir şey çalışmıyor, para ödenmiyor.

**Cron job'lar**: Her gece belirli bir saatte rapor oluşturan, veritabanı temizliği yapan, e-posta gönderen işler. Bunlar için her zaman açık bir sunucu tutmak yerine lambda + EventBridge Scheduler ile dakikada aç, işini yap, kapat.

**Webhook işleyiciler**: GitHub, Stripe, Twilio gibi servislerden gelen webhook'ları işlemek için ideal. Trafik düzensiz ve tahmin edilemez; serverless bu tür spike'lara mükemmel uyum sağlar.

## Ne Zaman Kullanılır / Kullanılmaz

Serverless her problem için uygun değildir. Doğru senaryolarda inanılmaz verimli, yanlış senaryoda ise hem pahalı hem de can sıkıcıdır.

**Serverless'ın parladığı durumlar:**

- **Event-driven workload'lar**: Bir şey olduğunda çalış, olmadığında dur.
- **Düzensiz ve öngörülemeyen trafik**: Saatler boyu sessiz, sonra ani spike. Auto scaling'i kendisi yönetiyor.
- **Küçük ve bağımsız fonksiyonlar**: Her işi ayrı bir fonksiyon olarak modelleyebildiğin durumlar.
- **Hızlı prototipleme**: Altyapı kurulumu olmadan fikri hızla test et.

**Serverless'tan kaçınman gereken durumlar:**

*Cold start latency kritikse*: Gerçek zamanlı işlemler, oyun sunucuları, yüksek frekanslı trading gibi sub-millisecond yanıt gerektiren sistemler için uygun değil.

*Uzun süreli işlemler*: AWS Lambda maksimum 15 dakika çalışabilir. Video encoding, büyük veri işleme gibi saatler süren batch işlemler için uygun değil. Bu tür iş yükleri için EC2 veya container tabanlı çözümler daha uygun.

*Vendor lock-in riski*: AWS Lambda kodu kolayca Google Cloud Functions'a taşınamaz. Event trigger yapılandırması, monitoring entegrasyonu, IAM tanımları — hepsi platforma özgü. Eğer multi-cloud stratejin varsa serverless bağımlılığını dikkatli yönetmelisin.

*Maliyet karşılaştırması*: Düşük trafik için serverless çok ucuzdur; bazen ücretsiz tier'a bile girer. Ancak sürekli yüksek trafiğin varsa hikaye değişir. 7/24 tam kapasite çalışan bir servis için EC2 veya container genellikle daha ekonomiktir. Serverless'ın avantajı boşta bekleyen kapasiteye para ödememendir; boşta zaten beklemeyen bir servis için bu avantaj ortadan kalkar.

## Mülakatta Bu Konuya Nasıl Yaklaşılır

"Serverless ne zaman tercih edersiniz?" sorusuna cevabın net olmalı: "Spiky ve event-driven iş yüklerinde, trafik öngörülemez ve altyapı yönetim maliyetini minimize etmek istediğimde serverless'ı tercih ederim." Bu ifade hem ne zaman kullanacağını hem de neden kullanacağını tek cümlede özetler.

Trade-off'ları dürüstçe ifade etmekten çekinme. Cold start'ın gecikme getirdiğini, uzun işlemler için uygun olmadığını ve vendor lock-in riskini bil. "AWS Lambda'yı seçersem Google Cloud Functions'a geçmek sadece kod taşımak değil; tüm altyapı yapılandırmasını yeniden yazmak demektir" diyebilmek, konuya gerçekten hakim olduğunu gösterir.

Son olarak, "tüm sistemi serverless yapayım" anti-pattern'inden bahset. Gerçekçi bir mimari, serverless ile container veya traditional servisler arasında dengeli bir hybrid yaklaşım benimser: event-driven ve düzensiz iş yükleri serverless, uzun süreli ve yüksek trafikli servisler ise container ya da VM tabanlı çalışır. Her şeyi tek bir paradigmaya zorlamak yerine iş yüküne göre doğru aracı seçmek mühendislik olgunluğunun işaretidir.
