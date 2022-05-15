# KingFisher

KingFisher, sunucudan görselleri kolayca uygulamamıza indirmemizi ve bu görselleri önbellekte tutmamızı sağlayan bir kütüphanedir. Önceki bölümlerde öğrendiğimiz Alamofire gibi bir network kütüphanesi ile de görselleri indirebiliriz fakat bu işlem hem biraz daha zahmetli olurdu hemde önbelleğe kaydetme kısmını bizim yapmamız gerekirdi. Önbellek mekanizması önceden indirilen görsellerin tutulduğu alanı ifade etmektedir. Bu sayede önceden indirilen görseller ihtiyaç olduğunda önbellekten kullanılır. Görselleri önbelleğe kaydetmek, uygulamanının internet kullanımını azaltmak için önemli bir özelliktir.

KingFisher'ı projede kullanmak için öncelikle kütüphaneyi projemize entegre etmemiz gerekiyor. Bunun için CocoaPods'dan faydalanacağız. Aşağıdaki komutu Podfile dosyasına ekleyerek Podfile dosyamızı güncelliyoruz.

```
pod 'Kingfisher'
```

Podfile'ı güncelledikten sonra terminal üstünden aşağıdaki komutu çalıştırarak Kingfisher'ı projeye entegre edebiliriz.

```
pod install
```

Artık KingFisher'ı istediğimiz dosyada import ederek kullanmaya başlayabiliriz. Dosyanın başına aşağıdaki komutu eklememiz yeterli olacaktır.

```
import KingFisher
```

Aşağıdaki örnekte KingFisher kullanımını gözlemleyebilirsiniz.

```
let url = URL(string: "https://example.com/image.png")
imageView.kf.setImage(with: url)
``` 

Yukarıdaki kullanımda öncelikle indirmek istediğimiz görselin adresini tanımlıyoruz. Daha sonra imageView nesnesinin kf özelliği ile KingFisher'ın bu nesnemize eklediği metodlara ulaşıyoruz. setImage metodu imageView üstünde görüntülemek istediğimiz görselin adresini parametre olarak alıyor. Bir üst satırda tanımladığımız adresi bu metoda parametre olarak geçiyoruz. Bu sayede KingFisher önce görseli indiriyor, önbelleğe kaydediyor ve imageView üstünde görüntülenmesini sağlıyor. Görüldüğü gibi çok kolay bir şekilde bu işlemi gerçekleştirdik. Eğer uygulamamız birden çok görsel indiriyorsa KingFisher bu indirme işlemlerini farklı akışlarda işleme alarak eş zamanlı olarak indirme işlemini başlatmamızı sağlıyor. Eğer bu işlemleri Alamofire ile yapmak isteseydik aşağıdaki gibi bir kod yazımına ihtiyacımız vardı.

```
let imageCache = NSCache<AnyObject, AnyObject>()

// Eğer görsel önbellekte tutuluyorsa oradan alır ve indirme işlemine devam etmez.
if let imageFromCache = imageCache.object(forKey: url as AnyObject) as? UIImage {
    imageView.image = imageFromCache
    return
}

let url = URL(string: "https://example.com/image.png")

AF.request(url, method: .get).response { response in
   switch response.result {
    case .success(let responseData):
        self.imageCache.setObject(UIImage(data: responseData!), forKey: url as AnyObject)
        self.imageView.image = UIImage(data: responseData!, scale:1)
    case .failure(let error):
        print(error)
    }
}
```

Yukarıdaki örnekte öncelikle görselleri önbelleğe kaydetmek için bir NSCache nesnesi oluşturuluyor. Daha sonra ilgili adresteki görselin önbellekte tutulup tutulmadığı kontrol ediliyor. Eğer görsel önbellekte tutuluyorsa bu görselin kullanılması sağlanıyor ve akışa devam etmesi return anahtar kelimesi ile engelleniyor. Böylece indirme işleminin gerçekleştirildiği kod satırlarının tekrar çalışması önleniyor. Eğer görsel bellekte tutulmuyorsa program kontrol bloğu sonrasındaki kod satırlarına atlıyor ve buradan çalışmaya devam ediyor. Önceki örnekte olduğu gibi indirme işleminin yapılacağı adres tanımlanıyor. Sonrasında Alamofire ile bu adrese istek gönderiliyor. İndirme işlemi sonrası çalışacak komutlar bir closure içinde tanımlanıyor. switch ile indirme işleminden dönen sonucun durumu kontrol ediliyor. Eğer işlem başarılı ise .succes durumu altındaki satırlar çalışıyor ve görsel önce önbelleğe kaydediliyor ve sonrasında ilgili imageView nesnesinde görüntülenmesi sağlanıyor. Eğer indirme işlemi başarısız olursa .failure durumu altında yer alan kod satırı çalışıyor ve hata mesajı terminal ekranına yazdırılıyor.

KingFisher kullanımı projenin bağımlılığını artırsada bizi fazlaca bir efordan kurtarıyor. Burada seçim programcının kararına kalıyor. Şahsen Alamofire kullansam bile KingFisher'ın konforu nedeniyle projelerimde kullanmayı tercih ediyorum. Zor yolu bilmekte her zaman fayda vardır fakat geliştirme sürecinde deadline nedeniyle kolay yolu tercih etmek doğru bir karar olabilir.
