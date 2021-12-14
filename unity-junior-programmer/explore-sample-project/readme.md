## Örnek projeleri keşfet

Bu eğitimde, proje eğitimini gözden geçirmek ve üzerinde çalışacağınız uygulama için Unity projesini keşfetmek için biraz zaman ayıracaksınız. Başlamadan önce desteklenebilecek tüm kaynakları da göz önünde bulundurabileceksiniz.

### Adım 1 Genel Bakış
Sürüm kontrolünü ayarladığınıza göre, hem programlama alıştırması yapmak hem de nesne yönelimli programlama (OOP) ilkelerini kendi kodunuzla bağlamak için kullanacağınız ana projeyi keşfetmeye hazırsınız.

Hadi başlayalım! 

### Adım 2 Başlamadan önce
Devam etmeden önce, önceki eğitimde oluşturduğunuz projenin versiyonunu açın:

- **Unity 2020.3 LTS** yüklediğinizi kontrol edin. Eğer yüklü değilse, Unity Hub’daki listenin altında doğru versiyon yüklemeniz için bir uyarı bildirimi gözükecek.
- Projenizi Unity Editor’de açın.

**Adım 3 Projeye hoş geldiniz**

Üzerinde çalışacağınız Unity projesi bir **kaynak yönetimi simülasyon uygulaması.** Kaynak yönetimi popüler oyun türlerinin merkezinde, ancak bu simülasyonlar aynı zamanda eğitsel içeriklerde (örneğin, sürdürülebilirliği ve ekonomiyi keşfetmede). ve endüstride oldukça kullanılmakta.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/explore-sample-project/figures/JrProg_C.3_image1.png)

Alt metin: Depo temalı simülasyon, kaynak yönetim simülasyonunun çekirdeği

Bu tür bir proje, genellikle aşağıdakileri içerdiğinden, programlama sistemlerini ve mimarisini keşfetmenize yardımcı olmak için özellikle uygundur:
- Simülasyon etkilerini sağlamak için kullanıcı etkileşimi
- Kullanıcı tarafında daha fazla özelleştirme için sahneler arası geçiş
- Simülasyonun karmaşıklığını artırmak için sistem eklenti olarak tasarlandı


### Adım 4 Simülasyonu keşfedin

Bu projede basit bir kaynak yönetim simülasyonu temin ettik. Bunu keşfetmek için bir dakikanızı ayırın:


- Project penceresinde, **Assets > Scenes** tıklayın ve Main sahneyi açın. 
- Play mod’a girmek için **Play**’e basın ve simülasyonu gözlemleyin.
- Bu sırada: Her ikisi de 0,5 saniyede kaynak öğeleri üreten iki farklı **Resource Pile** (palet üzerindeki nesneler)

Kaynakları tanımlı **bölgelere**(kamyonun önünde kırmızı çember ile işaretli alan) nakleden iki **Transporter Unit** 
bulacaksınız

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/explore-sample-project/figures/JrProg_C.3_image2.png)

Detaylarıyla bir kullanıcı arayüzü bilgisi görmek için herhangi bir Transproter Unit’e veya Resource Pile’a sol tıklayın.

Not: Depo alanında kamerayı hareket ettirmek için **ok tuşlarını (veya WASD)** kullanabilirsiniz.

Alt metin: Scene görünümünün sol-üst kısmında kaplayan pencere açılır; Scene görünümünde merkez altta Transporter Unit’in üzerinde yeşil bir ok gözükür.

- Resource Pilelardan birine sol tıkla. Transport Unit, kaynak birimlerini toplamak ve taşıyabildiği kadarını bırakma noktasına kadar taşımak için Resource’a doğru hareket etmeye başlayacak

- Transport Unitleri ile neler yapabileceğini test et! Birini depoda başka bir yere göndermeyi dene veya aktif olduğunda ilgili Resource Pile’ı değiştir.

- Bitirdiğinde, Play moddan çıkmak için **Play**’e basmayı unutma.

### Adım 5 Proje özetini gözden geçirin

Şimdiye kadar simülasyonun basit fonksiyonelliğini gözden geçirdin, şimdi daha derine gitme zamanı. Size şu konularda rehberlik edecek bir proje özeti oluşturduk:
- Bu Unity projesinin içeriği
- Simülasyonun basit fonksiyonelliği
- Bu yolda sonraki iki görevde uygulayacağınız ek işlevler

Özeti gözden geçirmek için biraz zaman ayırın:

- [Proje özetini](https://connect-prd-cdn.unity.com/20210602/7105725f-6cb4-4171-a399-ba1b485a7e96/Project_Brief.pdf?_gl=1*wjdq4t*_ga*NDI3MDM1NDEuMTU5MjI0OTM3NA) indirin ve kaydedin.
- Unity Editor'de, proje açıkken belgeyi gözden geçirin, böylece projeyi yaparken bunu referans alabilirsiniz.
- Script dosyalarını açmayı ve onları daha detaylı keşfetmeyi daha faydalı bulabilirsiniz. — Bu yoldaki önceki işlerinize dayanarak, ne yaptığınıza dair ne kadar biliyorsunuz?

### Adım 6 Bu görevdeki amacınız

Bu görevde, uygulamanın fonksiyonelliğini çalışmasına odaklanacaksınız:
- Gerekli sahne akışları ve kullanıcı arayüzü butonları
- Sahneler arasında veri kalıcılığı, bu sayede kullanıcı başlangıç sahnesinde bir renk seçebilir ve simülasyonda Transport - Unitlere(forkliftlere) uygulanabilir
- Oturumlar arasında veri kalıcılığı, bu sayede kullanıcının seçtiği en son seçilen renk uygulamayı tekrar başlattıklarında ön seçimli olur.
uygulayacaksınız

Son göndermeniz için, öğrenmenizi ve veri kararlılığını basit bir oyun projesinde uygulayacaksınız. 

Sonraki görevde, simülasyona yeni fonksiyonellikler ekledikçe ve kodu iyileştirdikçe nesne yönelimli programlamaya odaklanacaksınız.

**Uygulamanızı özelleştirin**

Yapabildiğiniz kadar özelleştirme mi yapmak istiyorsunuz? Lütfen yapın! Her ne kadar bu görevin odak noktası Programlama Sistemleri ve Mimari olsa da, projeyi özelleştirmek ve önceki görevlerde öğrendiğiniz becerilerinizi pekiştirmek için fırsatlar bulacaksınız— Açık fırsatları vurgulayacağız ama insiyatif alın ve cesur olun!

### Adım 7: Sıradaki adımlar
Unutmayın, bu proje özeti öğrenme deneyimi boyunca size sunulan bir kaynaktır. Projeyle ilgili hafızanızı tazelemeniz gerekiyorsa veya ne üzerinde çalışacağınıza dair üst düzey bir görüş elde etmek istiyorsanız ona tekrar bakın.

Bir sonraki eğitimde, Junior Programmer yolunun bu ikinci yarısında çalışmanızın temelini oluşturan nesne yönelimli programlamanın temel ilkelerini keşfedeceksiniz.













