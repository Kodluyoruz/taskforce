# Teknik Donanım ve Araçlar #
iOS mobil uygulamaları geliştirmemiz için gerekli olacak teknik donanım ve araçları inceleyeceğiz.

```
Not: Yanında * işareti olanlar zorunludur.
```

## 1. Donanımlar ve Araçlar
Bu kısımda iOS uygulama geliştirme sürecinde bize lazım olacak donanım ve araçları inceleyeceğiz.

### 1. MacOS*
Güncel macOS işletim sistemine sahip bir bilgisayara ihtiyacımız var. Xcode'un güncel sürümünü yükleyebilmemiz için macOS'un güncel olması çok önemli. Cihazın güncel macOS sürümünü alması için üretim yılı olarak olabildiğince güncel olması gerekiyor. Detaylı bilgiyi apple.com üstünden alabilirsiniz.

### 2. Xcode*
Xcode, Apple tarafından geliştirilen bütünleşik geliştirme ortamıdır. Apple ürünlerine uygulama geliştirmek istediğimizde Xcode vazgeçilmez araçlardan biridir. App Store üstünden güncel Xcode sürümünü ücretsiz edinebilirsiniz.

Link: <a href="https://apps.apple.com/us/app/xcode/id497799835?mt=12">Xcode App Store Linki</a>

### 3. iOS
Geliştirdiğiniz mobil uygulamaları fiziksel bir cihaz üstünde çalıştırmak istiyorsanız iOS işletim sistemine sahip bir cihaza ihtiyacınız olacak. Biz eğitim sürecinde uygulamalarımızı Xcode ile birlikte gelen iOS simülatörü üstünde yapacağız. Kamera gibi simüle edilemeyen özellikleri test etmek için iOS cihaz zorunlu hale gelmektedir.

### 4. Apple Geliştirici Sertifikası
Geliştirdiğiniz mobil uygulamayı App Store üstünden dağıtmak için bu sertifikaya ihtiyacınız var. Sertifikayı developer.apple.com üstünden satın almanız gerekiyor. Standart geliştirici sertifikasının 99$ gibi bir maaliyeti oluyor. Eğitimde değineceğiz fakat sizin ihtiyacınız olmayacak.

Link: <a href="https://developer.apple.com">Apple Developer Web Sayfası</a>

## 2. Yetkinlikler
Uygulama geliştirme süresince ihtiyacınız olacak yetkinliklere bu kısımda değineceğiz.

### 1. Swift*
Swift 2014 yılında duyuruldu ve 2017 yılına kadar fazlasıyla gelişti ve olgunlaştı. Öncesinde Objective-C kullanılırken bu gün sektörde iOS mobil uygulamaları Swift programlama dili ile geliştiriliyor. Objective-C projeler de büyük oranda Swift diline geçirilmiş durumdalar. Bu nedenle bizde eğitim süresince Swift dili ile geliştirmelerimizi yapacağız.

Swift Apple tarafından açık kaynak olarak geliştiriliyor. Github üstünden Swift'in kaynak kodlarını görüntüleyebilirsiniz. Aynı şekilde Swift dökümantasyonuna da swift.org adresinden kolayca erişebilirsiniz.

GitHub Link: <a href="https://github.com/apple/swift">Swift Kaynak Kodları</a>
Swift Dökümantasyonu Link: <a href="https://www.swift.org">Swift Dökümantasyonu</a> 

### 2. Kütüphaneler*
Swift tek başına iOS uygulamaları geliştirmemiz için yeterli değil. Bu nedenle Apple'ın bize sağladığı kütüphanelerden sıklıkla faydalanacağız.

### 3. Üçüncü Parti Kütüphaneler*
Üçüncü parti kütüphaneler, Apple kütüphanelerinde var olan bir yapıyı daha kolay kullanmamızı ya da Apple kütüphanelerinde yer verilmeyen özellikleri bize sağlıyor. Bu nedenle üçüncü parti kütüphanelere de sıklıkla başvuracağız.

### 4. Paket Yönetim Sistemleri*
Projemize eklediğimiz üçüncü parti kütüphanelerin yönetimi, kütüphane sayısı arttıkça zorlaşıyor. Paket yöneticisi bu zorluğu geliştiriciden devralarak kolay şekilde yönetim olanakları sunuyor. Paket yöneticiler de sektörde sıklıkla kullanıldığı için eğitimde çokça yer vereceğiz.

Eğitim süresince, sektörde sıklıkla kullanılan paket yöneticisini Cocoapods'u kullanacağız. Diğer paket yöneticilerine de değineceğiz. Cocoapods içinde yer alan paketleri cocopods.org adresinden inceleyebilirsiniz.  

Cocoapods Link: <a href="https://cocoapods.org">Cocoapods</a>

### 5. Versiyon Kontrol Sistemleri*
Versiyon kontrol adından da anlaşılabileceği gibi projemizi versiyon versiyon kaydetmemizi, bu versiyonlar arasında kolayca geçebilmemizi, birden çok geliştiricinin çalıştığı projelerde sorunsuz bir şekilde versiyonların birleştirilmesini sağlayan araçlardır. En popüler olanı GIT versiyon kontrol sistemidir. Biz de eğitim süresince GIT versiyon kontrolünü kullanacağız.

GIT Link: <a href="https://git-scm.com">GIT</a>

### 6. Design Patterns*
Projemizin modüler, test edilebilir ve sürdürülebilir olması en az geliştirmenin kendisi kadar önemlidir. Design pattern projemizin mimarisini belirler. Projenin hangi parçalardan oluştuğunu ve hangi parçanın nelerden sorumlu olduğunu belirler. Biz de eğitimler süresince popüler design patternlara değineceğiz.

### 7. CI/CD
Geliştirilen projenin test ve mağazaya kolay bir şekilde ulaştırılması için CI/CD adını verdiğimiz Continuous Integration ve Continuous Delivery yöntemlerinden faydalanıyoruz. Zorunlu olmamakla birlikte bilmeniz faydalı olacaktır. Eğitim süresince bu süreçlere değineceğiz.

### 8. UI/UNIT Test
TDD(Test Driven Development) gün geçtikçe trendi artan bir geliştirme yöntemi. Başlangıçta ek maliyetler getirsede ilerleyen süreçlerde benzer sorunlar ile tekrar tekrar uğraşmaktan alıkoyduğu için günün sonunda olmasında fayda olan yetkinlikler arasında yer alıyor. Eğitimin ilerleyen kısımlarında test yazımına değineceğiz.

### 9. SwiftUI
SwiftUI, Apple tarafında duyurulan yeni bir UI geliştirme sürecine olanak sağlıyor. Gelecekte Objective-C - Swift dönüşümünde olduğu Swift projeler de SwiftUI tarafına aktarılacaktır. Şimdiden öğrenmeye başlamakta fayda var. Eğitimde SwiftUI'a basitçe değineceğiz.
