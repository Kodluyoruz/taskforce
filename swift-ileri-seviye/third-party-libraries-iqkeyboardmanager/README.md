# IQKeyboardManager

IQKeyboardManager, birden çok girdi alanı olan ekranlarda, kullanıcının kolaylıkla diğer girdi alanlarına atlamasını sağlayan bir üçüncü parti kütüphanedir. Aynı zamanda iOS uygulama geliştirme süreçlerinde sıklıkla görülen, klavyenin girdi alanının üstüne gelmesi durumunuda, girdi alanını klavye boyu kadar yukarı kaydırarak çözemektedir. Eğer IQKeyboardManager kullanmasaydık bu durumları bizim kod yazarak halletmemiz gerekecekti. IQKeyboardManager'ın yaptığı iş basit gözüksede hem geliştiriciyi büyük bir efordan kurtarır hemde kullanıcıya daha iyi bir deneyim sunar. IQKeyboardManager'ı kullanmak için projeye dahil etmemiz be AppDelegate dosyasında ufak bir ayarlama yapmamız yeterlidir. Önceki üçüncü parti kütüphanelerde olduğu gibi IQKeyboardManager'ı Podfile dosyasına dahil ederek başlıyoruz.

```
pod 'IQKeyboardManagerSwift'
```

Yukarıda farkettiyseniz IQKeyboardManager yerine IQKeyboardManagerSwift yazdık. IQKeyboardManager, iOS uygulama geliştirmenin Objective-C ile yapıldığı dönemden bu yana geliştirilen bir kütüphane olduğu için, geliştiriciler Swift için ayrı bir kütüphane tanımı yapma yolunu tercih etmiştir. Bu nedenle eğer projemizi Swift ile yazıyorsak ki biz eğitim boyunca böyle yapacağız, IQKeyboardManagerSwift kütüphanesini projye eklememiz gerekmektedir.

Kütüphaneyi projemize entegre ettikten sonra AppDelegate dosyasında import edip bir takım ayarlamalar yapmamız gerekiyor. Şimdi AppDelegate dosyasını aşağıdaki şekilde düzenleyelim.

```
import IQKeyboardManagerSwift

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

      IQKeyboardManager.shared.enable = true

      return true
    }
}
```

Hepsi bu kadar artık birden çok girdi alanının olduğu ekranlarda klavyeyi kapatmadan sonraki veya önceki girdi alanına atlayabileceğiz. Aynı şekilde klavyenin altında kalan girdi alanlarını da ulaşılabilir hale getirmiş olduk. 

Kütüphane ile ilgili daha fazla bilgi almak için <a href="https://github.com/hackiftekhar/IQKeyboardManager">GitHub sayfasını</a> ziyaret edebilirsiniz.
