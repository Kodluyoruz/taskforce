# SwiftGen

SwiftGen, Swift Generator isimlerinin kısaltmasından oluşan bir isimlendirmedir ve tam olarak adının hakkını vererek, tekrar tekrar yapacağımız Swift tanımlamalarını, otomatik olarak bizim yerimize yapmaktadır. Örneğin en temel kullanımlarından biri görsel tanımlamalarının kod tarafındaki karşılıklarının oluşturulmasıdır. Bu sayede projedeki görselleri tek bir dosyadan kolayca yönetmemizi sağlar ve bizi yüzlerce satır kod yazmaktan kurtarır. Projemizde flower adında bir görsel olduğunu varsayalım. Bu görseli kullanmak için aşağıdaki gibi bir tanımlama yapmamız gerekecekti;

```
imageView.image = UIImage(named: "flower")
``` 

Yukarıdaki kullanım çok güvenli bir kullanım şekli değil. Bir kere kodun içerisinde sabit bir string değer kullanıyoruz. Eğer görseli birden çok yerde kullandıysak ve sonrasında adını değiştirdiysek pek çok yerde değişiklik yapmamız gerekcek. Kod içerisinde sabit değerler bulundurmaktan kaçınmak her zaman için iyi bir yöntemdir. Bu nedenle görsellerimize erişim için bir struct oluşturup, içinde görsel tanımlarını static olarak yaparsak, kod içerisinde sabit string değer kullamadan sorunu çözebiliriz. Buna benzer bir yapıyı şu şekilde tanımayıp kullanabiliriz;

```
struct Assets {
    static var flower: UIImage? = { UIImage(named: "flower") }
}

imageView.image = Assets.flower
```

Bu sayede görsel tanımlarını Assets struct yapısı altında toplamış ve tek bir noktadan string yönetimi sağlamış oluruz. İleride yapılacak isimlendirme değişikliklerinden de en az şekilde etkileniriz. Fakat gerçek hayatta uygulamamızda pek çok görsel yer alacak ve bu durumda bizim tekrar eden pek çok tanımlama yapmamız gerekecek. Ayrıca eğer uygulamaya yeni görsel de eklediysek bunu struct içinde tanımlamamız gerekecek. Eğer projede birden çok kişi çalışıyorsa ve bu kişiler iyi bir şekilde onboard edilip proje hakkında detaylı bilgi sahibi değilse bu adımları atlayabilir. Bu gibi durumaların önüne geçmek için SwiftGen imdadımıza koşuyor. Şimdi projemize SwiftGen'i entegre edip nasıl kullanıldığına bakalım. Öncelikle Podfile dosyamızın ilgili kısmına aşağıdaki satırı ekleyelim.

```
pod 'SwiftGen'
```

Şimdi Podfile dosyamızın olduğu konumda terminal ekranı açalım ve aşağıdaki komut ile kütüphanenin projemize entegre olmasını sağlayalım.

```
pod install
```

Diğer kütüphanelerden farklı olarak SwiftGen bir takım ayarlamalar yapacağımız swiftgen.yml dosyayasına ihtiyaç duyar. Öncelikle aşağıdaki terminal komutu ile dosyayı oluşturalım.

```
touch swiftgen.yml
```

Bu komut bize swiftgen adında yml uzantılı bir dosya oluşturacak. Şimdi bu dosyayı Xcode ile veya vscode benzeri bir editör yazılımı ile açıp düzenleyelim. Bu dosya içerisinde kodu oluşturulacak içeriğin tipi ve bu tip altında dosya konumu ve oluşturulacak içerik için bir dosya yolu belirtmemiz gerekmektedir. İçeriği pek çok proje için aşağı yukarı şuna benzeyecektir;

```
xcassets:
  inputs:
    - SupportingFiles/Assets.xcassets
  outputs:
    - templateName: swift5
      output: Generated/Assets.swift
```

Şimdi gelin yukarıda görülen swiftgen.yml dosya içeriğini inceleyelim. Öncelikle kod oluşturulacak içeriğin tipini belirleyerek işleme başlıyoruz. Bir iOS projesi oluşturduğumuzda xcassets uzantılı Assets dosyası varsayılan olarak gelir ve Apple görsel içerikleri bu dosyada barındırmamızı tavsiye eder. Görseller bu dosyada farklı boyutlarda tutulur ve iOS işletim sistemi ekran çözünürlüğüne uygun olarak bu görsellerden birini kullanır. Bu sayede farklı çözünürlüklerde benzer kalitede bir görsel kullanıcıyı karşılar. Bizde bu dosya içeriğindeki içeriklerin otomatik bir şekilde kod tarafında tanımlanması istediğimizi SwiftGen'e bildirmiş oluyoruz. Devamında inputs alanını görüyoruz burada swiftgen.yml dosyasını ana dizin kabul ederek kaynak dosyamızın konumunu SwiftGen'e bildiriyoruz. Sonrasında ise outputs kısmında oluşturulacak kod dosyasının bulunacağı dizini bildiriyoruz. Bu bilgiler SwiftGen'in çalışması için yeterlidir. Şimdi dosyamızı kaydedip kapatalım.

SwiftGen'in çalışabilmesi için son bir işlem yapmamız gerekiyor. Proje ayarlarından Build Phases kısmına yeni bir Run Script ekleyip içeriğine aşağıdaki komutu yapıştırmamız gerekiyor. Bu sayede projemiz her build olduğunda SwiftGen çalışacak ve Asset dosya içeriğinde bir değişiklik olduysa bunları projemize ekleyecektir. Xcode ile bir çok komutu bu sayede çalıştırabilirsiniz. Örneğin her build işleminde build number'ı artıracak scriptleri de buraya ekleyebilirsiniz.

```
if which swiftgen >/dev/null; then
  swiftgen
else
  echo "warning: SwiftGen not installed, download it from https://github.com/SwiftGen/SwiftGen"
fi
```

Yukarıdaki komut SwiftGen'in projeye entegre edilmesi durumunu kontrol eder. Eğer entegre edildiyse SwiftGen çalıştırılır ve kodlar oluşturulur. Eğer entegrasyon gerçekleştirilmediyse veya hatalıysa bize uyarı verir.

SwiftGen başta biraz efora sebep olsa da bizi çok daha fazlasından kurtardığı için yeni projelerimde mümkün olduğunca kullanmaya çalıştığım harika bir kütüphane, sizlere de tavsiye derim.

Tabi SwiftGen'in marifetleri bununla sınırlı değil. SwiftGen aşağıdaki dosya tiplerinin tamamını otomatik olarak kod tarafında oluşturabiliyor.

- colors
- coredata
- files
- fonts
- ib
- json
- plist
- strings
- xcassets
- yaml

SwiftGen ile ilgili daha detaylı bilgi için <a href="https://github.com/SwiftGen/SwiftGen">GitHub sayfasını</a> ziyaret edebilirsiniz.
