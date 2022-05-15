# SnapKit

SnapKit, DSL(domain-specific language, "alana-özgü dil") olarak tanımlanan, uygulama geliştiricinin, farklı ekran boyutlarına uygun geliştirme yapması için Apple tarafından geliştiriciye sunulan Auto Layout aracını, daha kolay bir şekilde kullanmasını sağlayan ara bir dildir. Auto Layout, daha çok Interface Builder ile kullanılması için tasarlandığı için, kod ile tanımlamalarda, kodun okunabilirliğini olumsuz şekilde etkileyebilir. Bu nedenle yazılımcılar zaman içinde PureLayout ve SnapKit gibi Auto Layout tanımlamalarını kolaylaştıran ve okunabilirliği artıran ara diller geliştirmiştir. Ara dil tanımı burada gözünüzü korkutmasın yine Swift yazıyoruz ve alışık olduğumuzun dışında bir yazım şekli görmeyeceksiniz. Aşağıda aynı işi yapan Auto Layout ve SnapKit örneklerini karşılaştırmalı olarak inceleyebilirsiniz.

Bir constraint ataması yapmadan önce view'ın ekrana eklenmesi gerekiyor. Bu nedenle addSubview komutu ile tempView'ı mevcut view'ın subview'ları arasına ekliyoruz. Artık tempView ekranda görünür  hale geldi ama constraint ataması yapmadığımız sürece göremeyeceğiz çünkü ne x,y koordinatı belli nede boyutları biliniyor. Bu atamaları yapmadan önce Auto Layout ile ilgili ufak bir ayarlama yapmamız gerekiyor. tempView'ın translatesAutoresizingMaskIntoConstraints özelliğini false yapıyoruz ki constraint atamalarımız görünür hale gelsin. Bu atama olmazsa constraints atamalarımızın etkilerini göremeyiz. Artık constraint atamaları yapmaya hazırız. Auto Layout ile tempView'ı ekranda ortalıyor ve 64-64 boyutlarında olmasını sağlıyoruz.
```
addSubview(tempView)
tempView.translatesAutoresizingMaskIntoConstraints = false
tempView.centerXAnchor.constraint(equalTo: centerXAnchor).isActive = true
tempView.centerYAnchor.constraint(equalTo: centerYAnchor).isActive = true
tempView.widthAnchor.constraint(equalToConstant: 64.0).isActive = true
tempView.heightAnchor.constraint(equalToConstant: 64.0).isActive = true
```

Burada yapılan constraint atamaları yukarıdakine çok benzer olmakla birlikte bir farkı bulunmaktadır. Yukarıda yapılan atamada her atama sonunda constraint'in isActive özelliği true olarak atanmıştır. Bu atama constraint'in aktif hale gelmesini sağlar ve eğer atama yapılmazsa constraintin etkisi gözlenemez. Bu atamalardan kurtulmak için NSLayoutConstraint'in activate statik metodu kullanılır. Bu metod bir NSLayoutConstraint dizisini parametre olarak alır ve bu constraintleri aktif hale getirir.
```
addSubview(tempView)
tempView.translatesAutoresizingMaskIntoConstraints = false
NSLayoutConstraint.activate([
    tempView.centerXAnchor.constraint(equalTo: self.centerXAnchor),
    tempView.centerYAnchor.constraint(equalTo: self.centerYAnchor),
    tempView.widthAnchor.constraint(equalToConstant: 64.0),
    tempView.heightAnchor.constraint(equalToConstant: 64.0)
])
```

Yukarıda yapılan constraint atamalarını SnapKit ile yaparsak aşağıdaki gibi gözükür. Görüldüğü gibi çok daha az komut  ile hem eforumuzu azaltmış hemde kodu daha anlaşılır hale getirmiş olduk. Yine tempView'ı ekrana eklemek ile işleme başladık ve SnapKit'in viewlara eklediği snp.makeConstraints closure'ı içinde constraint atamalarımız yaptık. make burada constraint ataması yapılacak nesnenin kendisini temsil ediyor. Artık Auto Layout komutlarını kullanmamıza da gerek kalmamıştır. Yine SnapKit'in bize sağladığı komutlar aracılığı ile constraint'lere ulaşıp kolayca atama yapıyoruz. Örneğin yukarıdaki örneklerde x ve y ekseninde nesnemizi ortalamak için iki ayrı bildirim yapmıştık fakat SnapKit ile direkt nesnenin center değeri ile içinde bulunduğu view'ın center değerini eşitleyerek nesnemizi ortaladık.
```
addSubview(tempView)
tempView.snp.makeConstraints { make in
    make.center.equalToSuperview()
    make.width.height.equalTo(64.0)
}
```

Tabi SnapKit'i kullanmaya başlamadan önce projemize entegre etmemiz gerekiyor. Bunu dört farklı şekilde yapabiliriz. Manuel olarak projeye ekleyebiliriz veya CocoaPods, Carthage veya SPM(Swift Package Manager) gibi paket yöneticileri ile projemize entegre edebiliriz. Biz eğitim boyunca CocoaPods kullanacağımızdan bölüm başında bahsetmiştik. Bu nedenle CocoaPods aracılığı ile projemize SnapKit'i entegre edeceğiz. Bunun için Podfile'a aşağıdaki komutu yazmamız yeterli.

```
# Uncomment the next line to define a global platform for your project
platform :ios, '9.0'

target 'AppName' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for AppName
  # Aşağıdaki satırı Podfile'a ekleyerek SnapKit'i projemize entegre edebiliriz.
  pod 'SnapKit'

end
```

Normalde bir kütüphaneyi bir dosyada kullanmak istersek o dosya içinde import etmemiz gerekir. Fakat SnapKit'i projede bir yerde import etmemiz, proje genelinde kullanabilmemiz için yeterlidir. Ben bu tarz işlemleri AppDelegate dosyasında yapmayı tercih ediyorum. AppDelegate hem uygulama genelini ilgilendiren, hemde projeyi ilk oluşturduğumuz andan itibaren var olan bir dosya olması bu kararımda rol oynadı. Tabi siz istediğiniz yerde import yapmakta özgürsünüz.

```
import UIKit
import SnapKit // Bu satırda SnapKit'i projede kullanmak üzere ekliyoruz.

@main
class AppDelegate: UIResponder, UIApplicationDelegate {
```

Artık projemizde UIKit kütüphanesi elemanlarınından herhangi birine constraint ataması yapmak istediğimizde sonuna snp yazarak SnapKit'in bize sağladığı olanaklardan faydalanabiliriz. 
