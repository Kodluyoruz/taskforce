# Cocoapods

Cocoapods bir paket yönetim aracıdır. Cocoapods ile projeye üçüncü parti kütüphaneleri kolayca ekleme, kaldırma veya güncelleme işlemleri yapabilirsiniz. Cocopods bir <b>CLI(Command Line Interface)</b> aracı olduğu için terminal aracılığı ile sisteme kurulum yapmamız gerekiyor. Aşağıdaki komutu terminal ekranına yazarak Cocoapods'u kolayca sisteminize kurabilirsiniz.

```console
sudo gem install cocoapods
```

Şimdi mevcut bir projeye Cocoapods aracılığı ile üçüncü parti bir kütüphaneyi entegre edelim. Öncelikle proje ada dizinine gitmemiz gerekiyor. Proje ana dizininde olduğunuzu, bulunduğunuz dizin içinde <b>.xcodeproj</b> uzantılı bir dosya olmasından anlayabilirsiniz. Şimdi ana dizinde olduğumuza göre aşağıdaki komutu kullanarak Podfile dosyamızı oluşturabiliriz.

```console
pod init
```

Bu komutu terminale girip enter tuşuna bastığımızda, bulunduğumuz dizin içinde Podfile dosyası oluştuğunu göreceğiz. Bu dosya Cocoapods ile ilgili birtakım ayarlamaları yaptığımız bir script dosyası. Bu dosyayı dilediğiniz bir metin editörü ile kolayca düzenleyebilirsiniz. Ben Xcode ile düzenlemeyi tercih ediyorum. Dosyayı açtığınızda şu şekilde bir içerikle karşılaşacaksınız.

```
# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'ClosuresExample' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for ClosuresExample

end

```

<b>#</b> işareti ile başlayan satırlar yorum satırıdır ve Cocoapods tarfından dikkate alınmaz. Biz projeye eklemek istediğimiz paketleri <b># Pods for ClosuresExample</b> yorum satırının bulunduğu kısma yazacağız. Örneğin bir sonraki dersimizin konusu olan Alamofire'ı projemize entegre edelim. Bunun için Podfile içeriğini şu şekilde düzenlemeniz gerekiyor.

```
# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'ClosuresExample' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for ClosuresExample
  pod 'Alamofire'
end
```

Eklemek istediğiniz pakete ait komutu GitHub sayfasında bulabilirsiniz. Yada https://cocoapods.org adresindeki arama çubuğundan projeyi bulup yine açıklama kısmında tırnak işaretleri arasına yazmanız gereken komutu öğrenebilirsiniz. Şimdi aşağıdaki komutu kullanarak Podfile içindeki paketleri projemize entegre edelim.

```console
pod install
```

Yükleme işlemi ilk defa yapıldığında biraz sürebilir. Yükleme işlemi bittiğinde Podfile içinde belirttiğiniz paketler projeye dahil olmuş olacaktır. Şimdi eğer projemiz açıksa kapatalım. Artık projemizi farklı bir şekilde açacağız. Proje ana dizinine tekrar baktığınızda, Pods adında bir klasör, Podfile.lock adında bir belge ve bir .xcworkspace uzantılı dosyanın eklenmiş olduğunu göreceksiniz. Kısaca açıklarsak, Pods klasörü içinde projeye dahil ettiğiniz paketler bulunur. Podfile.lock projeye entegre edilmiş paketlerin sürüm bilgilerini tutar. Bu sayede birden çok kişinin çalıştığı projede <b>pod install</b> komutu kullanıldığında, aynı versiyon numarasına sahip paketler yüklenmiş olur. Son olarak .xcworkspace uzantılı dosya birden çok projeyi(.xcodeproj dosyasını) bünyesinde barındıran bir projeler topluluğudur. Projeye eklediğimiz paketler Pod projesi altına eklenmiştir. O paketlerin de derlenmesi için projemizi bu dosyaya tıklayarak açacağız. Şimdi .xcworkspace dosyamızı açalım. Artık projenizde Alamofire paketinin bize sağladığı olanakları kolayca kullanabiliriz. İşte bu kadar basit.

Eğer projeye paketleri manüel olarak ekleseydik, her projeyi tek tek eklememiz gerekecekti. Bu paketlerde hala geliştirilmeye devam ediyor ve daha stabil sürümleri yayınlanıyor. Bu gibi durumlarsa paketi projeden silip tekrar entegre etmeniz gerekecekti. Ayrıca version değişikliğini de takip edip hangi paketlerin güncellendiğini öğrenmeniz gerekecekti. Oysa Cocoapods ile projedeki paketleri tek satırlık bir terminal komutu ile yapabiliriz.

```console
pod update
```

Bu komut projede bulunan bütün paketleri eğer gerekliyse güncelleyecektir. Eğer projeden bir paketi kaldırmak istiyorsak tek yapmamız gereken Podfile içinde pakete ait olan satırı kaldırıp <b>pod install</b> komutunu kullanmamız olacaktır.

### Diğer Paket Yönetim Araçları

Cocoapods, Swift projelerimizde kullanabileceğimiz tek paket yönetim aracı değildir. Apple tarafından duyurulan ve geliştirlen SPM(Swift Package Manager) ve Cocoapods gibi topluluk tarafından geliştirilen Carthage bulunmaktadır. SPM iOS 13 ve üstü sürümleri desteklediği için sektörde şimdilik tercih edilmemektedir fakat muhtemelen gelecekte en popüler paket yönetim aracı olacaktır. Carthage ise Cocoapods'un aksine daha geliştiricinin kontrolünde olan, daha çok ayarlama yapmamız gereken bir paket yönetim aracıdır. Cocoapods'a nazaran en büyük avantajı, proje her derlendiğinde paketleri derlememesidir. Bu sayede derleme süresi çok daha hızlı olmaktadır. Fakat biz hem daha popüler olması(Google bile paketlerini Cocopods ile yayınlıyor.) hem de kullanımının kolay olması sebebiyle eğitim boyunca Cocoapods kullanacağız.
