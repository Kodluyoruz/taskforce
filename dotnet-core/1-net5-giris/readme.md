# .NET 5 Giriş

.Net5 Microsoft un duyurduğu en son .Net platform versiyonudur. .Net5 gücünün farkına varabilmek için tarihinin iyi anlaşılması gerekiyor. Sonundaki 5 ifadesi sadece bir versiyon arttırımından ziyade, .Net platformda geliştirme yapanlar için yeni bir devirdir.
Şimdi .Net Framework, .Net Core ve .Net5'e yakından bakıp yolculuğu görelim.

## .Net Framework

.Net Framework ilk olarak 2002 yılında Windows makinalarda çalışacak uygulamalar yazılabilmesine olanak sağlamak için Microsoft tarafından yaratıldı. Windows'da microsoft'un ürünü olduğu için ilk etapta hedef sadece Windows makinalardı. İlk version .Net Framework 1.0 olarak duyuruldu.

- .Net Framework 1.x
- .Net Framework 2.x
- .Net Framework 4.x

Bir çok minor ve major versiyon sonunda .Net Framework 4.8 versiyonuna ulaşıldı. Bu .Net Framework için final versiyondur.

**Okuma Önerisi:** .Net Framework'un versiyonları hakkında daha detaylı bilgi için [tıklayınız.](https://en.wikipedia.org/wiki/.NET_Framework_version_history)

## .Net Core

Cross platform ve docker ile birlikte konteynır teknolojilerinin yaygınlaşması Microsoft'u da Cross Platform'u ve açık kaynaklı kodları destekleyen bir şirket olmaya itti diyebiliriz. Sadece Windows'a destek veren .Net Framework yetersiz hale geldi. Ve Microsoft 2016 yılında .Net Core 1.0'ı Windows, MacOS ve Linux da yazılım geliştirmeyi destekleyen bit platform olarak duyurdu. Üstelik açık kaynaklı halde.

**Inceleme Önerisi:** Microsoft'un dotnet platformunu incelemek için [tıklayınız.](https://github.com/dotnet)

2016 yılında ilk olarak duyurulduktan sonra hızlı bir şekilde .Net Core 3.1 versiyonuna 2019 yılı sonunda erişildi. İlk duyurulduğunda .Net Framework'ü tam olarak kapsamıyordu. Bir MVP(Most Valuable Product) versiyon ile çıktılar gibi düşünebilirsiniz. Bu nedenle .Core son haline gelene kadar .Net Framework'e yeni feature'lar eklemeye devam ettiler. Ama yapılan her yenilik aynı zamanda .Net Core'a da ekleniyordu.

## .Net5

Microsot 2021 Nisan ayında tüm platformlarda geliştirme yapılabilmesine olanak sağlayan ve .Net'in bundan sonraki tek yolculuğu olan .Net5'i duyurdu. .Net 5 sadece .Net Core 3.1'in sonraki major versiyonudur. Ozaman .Net4 olması gerekmez miydi diye düşünebilirsiniz. Bu konuyla ilgili resmi olarak bir bilgiye ulaşamaadım ama düşüncem şu ki; yeni versiyonun .Net Framework 4.x ile karışmasından endişe edildi. Aslında .Net5'e geçişteki temel amaç bu isim karmaşasını ortadan kaldırmak. .Net Core ve .Net Framework x.x gibi değil bundan sonra tek bir .Net versiyonu vardır motivasyonu ile yapılmış bir değişiklik. Microsoft'un .Net Framework'e desteği hala sürüyor. Windows var olduğu sürece de devam edeceğini duyurdular. Ama yeni özellikler sadece .Net'e eklenecek.

Peki nedir bu isim karmaşası? Ben Microsoft'un bu geçiş sürecini doğru yönetemediğini düşünüyorum. Hala çok büyük bir karmaşa var. Kendi web sitelerine girdiğinizde bile bazen kaybolabiliyorsunuz. Umarım bu şekilde daha açıklayıcı olmuştur.

**Özetle .Net5 cross-platform(Windows, macOS, Linux, iOS, Android, IoT, Gaming, vs..) çalışan .Net Core'un yeni versiyonudur.**

Microsoft'un duyurmuş olduğu release takvimi ise aşağıdaki gibi.
Bu takvime göre .Net 6 2021 Kasım ayında bizlerle!

![Release Schedule](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/dotnet-core/1-net5-giris/figures/dotnet-giris-image.png)
