# FLEX

Flex mobil cihaz üstünde uygulamanın testlerini kolayca gerçekleştirmemizi sağlayan bir araçtır. Flex ile uygulamanın sunucuya yaptığı istekleri ve bu istekler sonucunda dönen sonuçları görebileceğimiz gibi ekrandaki kullanıcı arayüz elemanlarının konum, boyut, tip vb özelliklerini görüntüleyebiliriz. Bu kontrolleri geliştirici Xcode üstünde kolaylıkla yapabilir fakat uygulamanın test edilmesi tarafında çalışan ve Xcode erişimi olmayan ekip üyelerinin test sürecini kolaylaştırır. Tabi geliştirici de Xcode'a ihtiyaç duymadan mobil cihaz üstünde bir takım kontrolleri yapabilir ve bu mükemmel bir rahatlık sağlar.

Önceki üçüncü parti araçlarda olduğu gibi Flex'i projeye entegre etmemiz aynı adımları gerçekleştirmemiz gerekiyor. Öncelikle Podfile dosyamızı güncelleyerek işleme başlıyoruz. Podfile dosyasının ilgili kısmına aşağıdaki satırı ekleyeceğiz.

```
pod 'FLEX'
```

Bu aşamadan sonra Podfile dosyamızı kaydedip kapatalım ve terminal üstünde aşağıdaki komutu çalıştırarak CocoaPods'un kütüphaneyi projeye entegre etmesini sağlayalım. Komutun çalışması için Podfile dosyasının bulunduğu konumda olmaya dikkat etmeyi unutmayın.

```
pod install
```

Artık Flex'i projeye entegre etmiş bulunmaktayız. Öncelikle Flex kütüphanesini kullanacağımız AppDelegate dosyasının başında import komutu ile ekledikten sonra Flex ekranını açmak için yine AppDelegate dosyasında yer alan didFinishLaunchingWithOptions metodunu aşağıdaki şekilde düzenleyelim.

```
import UIKit
import FLEX

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        
        // Aşağıdaki kod satırı Flex ekranını açar.
        FLEXManager.shared.showExplorer()
        
        return true
    }
}
```

Uygulamayı build edip çalıştırdığımızda, uygulama çalışmaya başladığı gibi Flex ekranının görünür hale geldiğini göreceğiz. Tabi Flex ekranını ihtiyacımız olduğunda açabilmemiz daha doğru bir kullanım olacaktır. Bunun için kütüphanenin de bize tavsiye ettiği gibi bir gesture tanımlayıp bu gesture gerçekleştirildiğinde Flex ekranının görünür hale gelmesini sağlayabiliriz. Burada gesture, mobil cihaz ekranında gerçekleştireceğimiz dokunma, kaydırma, sıkıştırma gibi çeşitli parmak hareketleridir. Bu parmak hareketlerini GestureRecognizer dediğimiz Apple tarafından bize sağlanan araçlar ile algılayabiliriz. Her gesture tipi için farklı bir GestureRecognizer vardır. Ben burada ekrana iki parmak ile iki defa dokunma olduğunda Flex'i gösterecek şekilde bir gesture tanımı yapacağım. Siz üç parmak ile sağdan sola kaydırma gibi daha karmaşık gesture tanımlayarak da bu işlemi gerçekleştirebilirsiniz.

```
import UIKit
import FLEX

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
    
    var window: UIWindow?
    
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        
        setupFlexGesture()
        
        return true
    }
    
    private func setupFlexGesture() {
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(didFlexGestureRecognized(_:)))
        tapGesture.numberOfTapsRequired = 2
        tapGesture.numberOfTouchesRequired = 2
        window?.addGestureRecognizer(tapGesture)
    }
    
    @objc
    private func didFlexGestureRecognized(_ tapGesture: UITapGestureRecognizer) {
        FLEXManager.shared.showExplorer()
    }
}

```

Yukarıdaki örnekte setupFlexGesture adında bir metod oluşturduk ve bu metod içinde gesture tanımını yaptık ve window'a bu gesture'ı ekledik. Bu sayede uygulama içinde hangi ekranda olursak olalım ekrana iki parmak ile iki defa dokunduğumuzda Flex ekranı açılacaktır. Gesture'ın tetikleyeceği metodu'da action kısmında parametre olarak geçmemiz gerekiyor. didFlexGestureRecognized metod tanımı ile gesture işlemi algılandığında Flex ekranını açmamızı sağlayan komutu çalıştırmış olduk. Artık uygulama üstünde test işlemlerini gerçekleştirmeye hazırız. Tabi bu dersin konusu Flex'in kullanımından çok projeye entegrasyonu olduğu için dersi burada bitirmiş olacağız fakat daha detaylı bilgi için Flex kütüphanesinin GitHub reposunu inceleyebilirsiniz.
