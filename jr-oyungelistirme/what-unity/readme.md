# Unity Nedir?

Bu eğitimde Unity motorunun kendisi hakkında daha fazla şey öğreneceksin: neden bazen bir oyun motoru olarak bahsediliyor, nasıl bu hale geldi ve yıllar boyunca nasıl gelişti.


**Aşama 1: Genel bakış**

Unity hayatına bir oyun motoru olarak başladı ama birçok farklı endüstri tarafından kullanılan bir kreatif araca evrildi. Ayrıca Unity hâlâ oyun motoru köklerini koruyor ve nasıl ve niçin yaratıldığı bize çalışma şekli hakkında fikir veriyor.

Eğer **oyun motoru** teriminin ne olduğundan emin değilsen, yalnız değilsin! Oyun motorları oyun endüstrisinde sık sık tartışılır ama nadiren açıklanırlar — bu yeni başlayanlar ve farklı endüstrilerden üreticiler için kafa karıştırıcı olabilir! O zaman ilk olarak bir oyun motorunun ne olduğunu açıklamak ile başlayalım.


**Adım 2: Oyun motoru nedir?**

Bir oyun yaratma süreci dışarıdan görünenden çok daha karmaşık büyük bir olaydır. Şu an bunu okuduğun bilgisayar ya da mobil cihaz ona nasıl gücü ekrana aktaracağını, parlaklık ayarını senin ayarladığın düzeyde tutacağını, internet bağlantısı kurup sürdüreceğini, ekranda resimleri ve yazıları gösterdiğini söyleyen bir işletim sistemi çalıştırıyor. Ayrıca, arka planda cihazın güç kaynağına erişimini ayarlamak gibi uzaktan yakından alakalı birçok iş yapıyor. Bu sadece ekranda birkaç yazı göstermek için kontrol edilmesi gereken çok fazla şey anlamına geliyor!

Şimdi sadece bakmak ya da okumak yerine bir içeriği üretmeyi düşün. Eğer daha önce bir e-posta yazdıysan, bir mesaj yazmak için e-posta programının iç dinamiklerini anlamana gerek olmadığını bilirsin. Diğer bütün işler senin için halledilir ve tek gereken mesajının içeriğine odaklanmandır. Bir oyun motoru da aynen böyledir.

Bir **oyun motoru** oyunu yapımı için gerekli bütün unsurların birleşme noktasıdır. Oyunlar, tüm diğer uygulamalar gibi, 3 boyutlu modeller, scriptler ve ses dosyaları gibi parçalardan meydana gelirler. Birleştirildiklerinde tamamlanmış bir kullanıcı deneyimi oluştururlar. Eğer 3 boyutlu modeller, scriptler ve ses dosyaları malzemeler olsaydı, Unity (ve diğer oyun motorları) bu malzemeleri attığınız tencere olurdu!

Bir oyun motoru oyun yapımında kullanılan bütün bileşenler için birleşme noktasıdır.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/what-unity/figures/Foundations_Intro2U_1.1.2.1.png)

Bir oyun motoru ve oyunu yapımı için gerekli olan çeşitli unsurlar arasındaki ilişkiyi gösteren bir grafik. 

Bu eğitimi okuyabilmeni sağlayan işletim sistemleri gibi oyun motorları da oyununun ekranda gösterilmesine, nesnelerin diğer nesnelerle etkileşime geçmesine, sesin işitilmesine ve uygulamanın cihazının çalıştırabileceği bir formatta yayınlanmasına olanak sağlar. Sen içeriği sağlarsın ve oyun motoru da bunu çalışacak bir ortama uygulayacak araçları sağlar.


**Aşama 3: Bir oyun motorunda ne yaparsın?**

Şimdi bir oyun motorunun ne olduğu hakkında temel bir fikrin olduğuna göre, üreticilerin onunla ne yaptığı hakkında daha fazla bilgi öğrenelim. Eğer bir oyun motoru sağladığın içeriği uygulamaya geçirmek için kullanılıyorsa — nedir bu içerikler?

Bir oyun motorunda üretici, kullanıcının tamamlanmış üründe tecrübe edeceği her şeyi bir araya getirir. Eğer bu ürün bir oyunsa, üretici platformlar üzerinde zıplama gibi oyun mekanikleri tasarlar; eğer bir animasyonsa, üretici kayda alınacak olan olayları planlar; eğer bir VR mimarili görselleştirme ise, üretici kullanıcının yürüyeceği fotorealistik bir ortam inşa eder. Ayrıca bir oyun motoru üreticiye ürününü kullanıcı için interaktif bir deneyim yapacak olanaklar da sağlar. Unity arka planda birçok işi halleder böylece senin, yani üreticinin, sadece en önemli şey olan kullanıcı tecrübesine odaklanman gerekir.

**Aşama 4: Bir oyun motorunda ne yapmazsın?**

Bir oyun motorunda assetler oluşturmazsın, assetler interaktif deneyimin temellerini oluşturan nesneler ve seslerdir. Bunun yerine assetler Dijital İçerik Üretim (DCC) araçları denilen özelleştirilmiş harici programlarda oluşturulurlar. Birçok DCC onların içe aktarma işlemini kolaylaştırmak için Unity’ye entegre edilmiştir.

Gerçek zamanlı geliştirmede en sık kullanılan DCC aracı türleri şunlardır:

- **3B DCCler** 3B modeller, animasyon karakterler ve ortamlar oluşturmaya yarayan programlardır; örneğin: [Maya](https://www.autodesk.com/products/maya/overview), [ZBrush](https://pixologic.com/) ve [Blender.](https://www.blender.org/)
- **2B DCCler:** 2B resimler, illüstrasyonlar, dokular ve arayüzler oluşturmaya yarayan programlardır; örneğin: [Photoshop,](https://www.adobe.com/products/photoshop.html) [Illustrator,](https://www.adobe.com/products/illustrator.html) [Substance Painter](https://www.substance3d.com/products/substance-painter/) ve [Gimp.](https://www.gimp.org/)
- **Ses DCCleri:** kayıt alma, düzenleme ve ses efektleri ile müzikleri birleştirmeye yarayan programlardır; örneğin: [Audition,](https://www.adobe.com/products/audition.html) [Logic Pro,](https://www.apple.com/logic-pro/) [Reaper,](https://www.reaper.fm/) ve [Audacity.](https://www.audacityteam.org/)
- **Tümleşik Geliştirme Ortamları (IDEler):** çeşitli dillerde kod yazmaya yarayan programlardır; örneğin: [Visual Studio](https://visualstudio.microsoft.com/) ve [Rider](https://www.jetbrains.com/rider/)
- **Gerçek Zamanlı Motorlar:** gerçek zamanlı geliştirme, renderlama ve 3 boyutlu içerik ya da uygulama yayınlamaya yarayan programlardır; örneğin: [Unity](https://unity.com/) ve [Unreal](https://www.unrealengine.com/)

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/what-unity/figures/Foundations_UnityRT3D_1.2.2.0_dcc-rt3d-diagram.png)

Gerçek zamanlı bir motor ve çeşitli DCC türleri arasındaki ilişkiyi gösteren bir şema. “Gerçek Zamanlı Motor” şemanın ortasında yer alıyor ve “Işık”, “Tasarım”, “Renderlama”, “Fizik” kelimeleri ile bağlı. DCC türleri, 3B DCCler, 2B DCCler, Ses DCCleri ve IDEleri içerecek şekilde şemanın etrafında yer alıyorlar ve her biri ortadaki “Gerçek Zamanlı Motor”a işaret eden bir oka sahip. Her DCC türünün yanında o türden örnek programlar (örn. Photoshop, Maya) ve o tür kullanılarak oluşturulan assetler (örn. 3B modeller, resimler, müzik) yer alıyor.

İleriki eğitimlerde her DCC türünü detaylıca anlatacağız.

**Unity Asset Store**

İyi haber: Unity assetlerini oluşturmak için bir DCC kullanmayı öğrenmek, sahip olması mükemmel bir beceri de olsa projendeki her asseti sıfırdan oluşturmak zorunda değilsin. DCClerle oluşturulmuş yüzlerce kullanıma hazır asset Unity Asset Store’da erişime açık. Hatta bazıları ücretsiz. Unity ID’n ile Asset Store internet sitesi ve Unity editöründeki paket yöneticisi arasında bir bağlantıyı kullanarak assetleri indirebilir ve projene aktarabilirsin. İleriki eğitimlerde projeni geliştirmek için Asset Store’a girip belirli assetleri edineceksin ve Asset Store’u kendi başına keşfetmek için hazır olacaksın.

**Aşama 5: Unity'nin Hikayesi**

Unity Technologies tarafından piyasaya sürülen ilk ürün bir oyun motoru değil, bir oyundu.

GooBall — Unity ile yapılmış ilk oyun

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/what-unity/figures/Foundations_Intro2U_1.1.2.5.png)

Over The Edge Entertainment (daha sonra Unity Technologies olarak yeniden adlandırılacak) -GooBall’dan bir ekran görüntüsü: Ana karakter resmin ortasında jölemsi bir kürenin içerisinde yer alırken önünde çöl benzeri bir sahne uzanıyor.

2005’te Unity’nin kurucularından Joachim Ante, David Helgason ve Nicholas Francis o zamanlar **Over the Edge Entertainment** olarak adlandırılan şirketlerinin kuruluşundan bir yıl sonra **GooBall** oyununu MacOS’a çıkardılar. Oyun, diğer geliştiricilere lisanslama niyetiyle sıfırdan inşa ettikleri bir motorla yapıldı.

Unity’nin kurucuları, soldan sağa doğru: Joachim Ante, Nicholas Francis, David Helgason

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/what-unity/figures/Foundations_Intro2U_1.1.2.6.jpg)

Unity’nin kurucuları Joachim Ante, Nicholas Francis, David Helgason kol kola kameraya gülümserken çekilmiş siyah beyaz bir fotoğraf.

**Oyunlar nasıl yapılırdı (Unity’den önce)?**

Çoğu oyun firması zamanında çeşitli projeler için kendi kurum içi oyun motorunu yarattı, bazen de yaptıkları her oyun için yeni bir tane yarattılar. Bu onlara belirli ihtiyaçlarını karşılayacak araç takımları yaratma fırsatı verdi ama çok fazla zamana ve paraya mal oluyordu. Oyun geliştirme çoğu zaman motor üretimiyle paralel olarak gerçekleştiğinden oyunun konseptindeki temel değişiklikler büyük ihtimalle motor üzerinde de çalışma gerektiriyor ve bu da bir ürünün piyasaya sürülebilmesi için gereken zamanı uzatıyordu.

Bireysel geliştiriciler ve küçük takımlar gibi bağımsız geliştiriciler için, önceden hazırlanmış motorlara olan kısıtlı erişim özellikle bir problemdi. Oyun motoru üretimi son derece teknik bir süreç ve kapsamlı bir programlama deneyimi gerektiriyordu. Bağımsız bir geliştirici kapsamlı programlama deneyimine sahip değilse bir motor lisanslamaktan başka çaresi kalmazdı ki bu çoğu zaman maliyetin önüne geçerdi. Bu nedenlerden dolayı 2000’li yılların ortalarından önce bağımsız oyun geliştiriciliği, kurumsal geliştiricilikten çok daha az yaygın ve ticari olarak başarılı bağımsız oyunlar nadirdi.

**Bir motorun doğuşu**

GooBall başarılı değildi ama Unity olabilirdi. Ante, Francis ve Helgason Unity motorunun ön gösterimini Apple’ın Dünya Çapında Geliştiriciler Konferansı’nda yaptı. Motorun ilk benimsenişi yavaştı ama yakında bağımsız geliştiriciler arasında popüler olacaktı.

Unity, oyun endüstrisinin yüzünün değişmeye başladığı 2000’lerin ortalarında piyasaya çıktı. Öyle denirdi ki, Unity “bağımsız oyun devrimi”nin önemli bir parçası olmak üzere benzersiz bir şekilde konumlanmıştı. Unity’nin erken başarısında üç faktör kritik öneme sahipti: oyunlar için güvenilir dijital dağıtım modellerinin tanıtımı, bağımsız geliştiricilere hitap etmeye odaklanma ve ilk akıllı telefonlar için destek.

Unity ilk piyasaya sürüldüğünde yüksek hızlı internetin benimsenmesi tüm hızıyla devam ediyordu ve bu da oyunların dijital dağıtımını ilk kez uygulanabilir bir seçenek haline getirdi. Bundan önce bağımsız geliştiricilerin oyunlar için dağıtım modellerinde çok az seçeneği vardı. Neredeyse tüm oyunlar bağımsız geliştiricilerin “bağımsız” olduğu büyük gruplarla anlaşmalar yapılarak perakende mağazalarda satılırdı. İnternete daha hızlı ve daha kolay erişimle birlikte, ortalama bir kullanıcı, geliştiricinin kişisel internet sitesinde ya da o zamanlarda ortaya çıkmaya başlayan dijital dağıtım hizmetleri adı verilen çevrim içi vitrinlerde barındırılan oyunları kolayca indirebilir hale geldi. Bu hizmetler barındırmayı, satış işlemlerini, bazen dijital hakların yönetimini ve çoğu zaman da bir sosyal bileşeni yönetir. Bu hizmetlerden birini kullanarak geliştiriciler satış ve dağıtımları yönetmek yerine oyunlarını yapmak ve sürdürmek için daha çok zaman harcayabildiler. 2000’li yılların ortalarında perakende oyun satışları hâlâ oyun satın alımlarının çoğunu oluştururken, giderek artan sayıda tüketici oyun bulma ve oynamanın bu yeni yolunu benimsemeye başladı. Ve aniden, bağımsız geliştiriciler kitlelerine ulaşabiliyordu.

Unity piyasaya ilk çıktığında, bağımsız geliştiriciler için uygun fiyatlar sunarak kendini diğer lisanslı motorlardan ayırdı. Unity ayrıca diğer lisanslı motorların çoğunlukla gözden kaçırdığı geliştiriciler için iyi bir deneyim sağlama üzerine de odaklanmıştı. Bu iki etken, Unity’nin büyüyen bağımsız geliştirme topluluğunda insanları kendine çekmesine yardımcı oldu.

Orijinal iPhone, App Store’u üçüncü parti uygulamalara açtığında, Unity, platformu destekleyen ilk araçlardan biriydi. Bu da Unity’nin bir anda aşırı popüler olan mobil oyun marketindeki yerini sağlamlaştırdı. Çok geçmeden App Store’daki oyunların yarısından fazlası Unity ile geliştirilmişti, bu hem iOS hem de Android’de mobil oyunlar için bugün de devam eden bir trend.

**Aşama 6: Sonraki adımlar**

Unity’nin temel değeri bir zamanlar “oyun geliştiriciliğini demokratikleştirmek” idi; bugün ise sadece “geliştiriciliği demokratikleştirmek”, odağını oyunların üzerinden uzaklaştırmak için değil ama daha fazlasına imkan sağlamak için. Unity birçok endüstriden oyun geliştiricilerine, animatörlere, mühendislere, tasarımcılara, eğitmenlere ve pazarlamacılara hizmet eden yeni olanaklar eklemesiyle, bir oyun motoru olmaktan gerçek zamanlı bir motor olmaya evrildi. Unity herkes içindir ve burada herkes hoş karşılanır.

Artık Unity’nin hikayesini bildiğine göre, Unity’nin gerçek zamanlı motorunu kullanan endüstriler hakkında bilgi sahibi olmak için bir sonraki eğitimle devam et.








