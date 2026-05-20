## Version Control'ünü Ayarlayın

Bu öğreticide, Version controlü'nün temellerini ve uygulamaları kendi başınıza geliştiriyor olsanız bile bunu kendi projelerinizde uygulamanın nedenlerini öğreneceksiniz. Ayrıca Unity ile kullanılabilecek farklı Version controlü seçeneklerini öğrenecek ve sonraki eğitimlerde kullanacağınız projeyi indirerek yeni becerilerinizi uygulamaya koyacaksınız.
 
Bu eğitimin sonunda şunları yapabileceksiniz:
- Bir projeyi sürdürmek için kullanılabilecek farklı version control çözümlerini belirleyin.
- Bir projeyi sürdürmek için version controlünün nasıl kullanıldığını açıklayın

### Adım 1: Genel Bakış
İster tek başınıza ister bir ekipte çalışıyor olun, proje geliştirmenin önemli bir yönü proje dosyalarınızı nasıl yöneteceğinize karar vermektir. Tek başına bir geliştiriciyseniz, projenizin tek örneğini yerel bir sabit sürücüde tutmakla ilgili her zaman bir miktar risk vardır - sürücü arızalanırsa projeniz kaybolur! Projenizin birden çok yedek kopyasını farklı sürücülerde veya bulutta depolamak güncel tutmak için zahmetli olabilir. Bir ekipte geliştiriciyseniz, herkesin projeye nasıl erişeceğini ve bir kişinin yaptığı işin başka birinin çalışmasının üzerine yazmamasını veya zarar vermemesini nasıl sağlayacağınızı belirlemelisiniz. Neyse ki, tüm bu sorunların çözümü oldukça basit: version controlü.

Version controlü ile çalışma fikri korkutucu görünüyorsa, endişelenmeyin! Pek çok insan, geliştirmeye ilk başladıklarında version controlü fikri karşısında bunalmış hissederler. Yanlış başlangıçlar ve ilk depoyu kurmaya çalışırken oluşan kafa karışıklığı, version controlünün ne kadar yararlı olabileceğine rağmen yeni geliştiricilerin tekrar deneme konusunda tereddüt etmesine neden olabilir. Bu kategoriye girerseniz, yalnız olmadığınızı bilin ve bu projede tekrar deneyin!
 
### Adım 2: Version controlü nedir?
version controlü(bazen kaynak denetimi olarak da adlandırılır) bilgileri yöneten ve izleyen bir sistemdir. Version control sistemleri, her türlü dosya, yazılım, web sitesi veya diğer verileri depolamak, yönetmek ve değişiklikleri izlemek için yapılandırılabilir. Bireyler, küçük ekipler veya büyük kuruluşlar, karmaşık projeleri yedeklemeye ve yönetmeye yardımcı olmak için genellikle bir version control sistemi kullanır. Version control sistemleri bulut depolama hizmetleriyle çalıştığı için aşağıdaki gibi faydalı özelliklerden yararlanabilirsiniz:

- Yedek depolama
- Revizyon takibi
- Proje Yönetimi
 
Bu öğreticide, özel ekip koşulları için daha uygun olan yerelleştirilmiş depolama kullananların aksine bulut depolama kullanan version control sistemleri hakkında bilgi edineceksiniz.
 
### Adım 3: Version controlünü kim kullanır?
Birden fazla ekip üyesi koordineli projeler veya yazılım geliştirmeye dahil olduğunda, mevcut bir version control sistemi olmadan yönetmek zor olabilir. Herkesin buna ihtiyacı var! Bir proje daha karmaşık hale geldikçe, ekip üyelerinin takım arkadaşlarının yaptığı değişikliklerden haberdar olmaları gerekir. Tutarlı bir şekilde koordine etmezlerse, verimsizlikler, darboğazlar, kayıp kod, yeniden çalışma ve birçok hayal kırıklığı ile karşı karşıya kalacaklardır. Version controlünün amacı bu sorunlardan kaçınmaktır.
 
### Adım 4 - Version control aracınızı seçin
Versiyon kontrol sistemleri proje ihtiyaçlarınıza göre değişiklik göstermektedir. Unity, paket olarak sunulan Collaborate adlı kendi version control çözümüne sahiptir. Ancak, bu öğrenme projesi için, geliştirme kariyeriniz boyunca karşılaşmanız muhtemel olan son derece popüler bir version control çözümü olan Github'ı kullanacağız. Özellikle yeni başlayanlar için version controlü ile çalışmak da kolaydır.
 
İşleri daha da basitleştirmek için, GitHub projelerine Git komutlarını kullanarak bir komut satırı yerine grafiksel bir kullanıcı arabirimi aracılığıyla erişmenizi sağlayan, kullanımı kolay bir uygulama olan GitHub Desktop'ı kullanmanız için size rehberlik edeceğiz. GitHub'a zaten aşinaysanız veya komut satırıyla çalışmayı tercih ediyorsanız, bir sonraki adımı atlamaktan çekinmeyin!
 
Unity'nin diğer version control sistemleriyle nasıl entegre olduğu hakkında daha fazla bilgi edinmek istiyorsanız, lütfen aşağıdaki eğitimlerimize bakın. [Unity Collaborate'e Giriş](https://learn.unity.com/tutorial/introduction-to-unity-collaborate?uv=2020.1&pathwayId=5f7e17e1edbc2a5ec21a20af&missionId=5f779f1eedbc2a00201f3e5e&projectId=5fadaa43edbc2a0020bdedfd) ve [Unity ve Helix Core Perforce ile Çalışmak.](https://learn.unity.com/tutorial/working-with-unity-and-helix-core-perforce?uv=2020.1&pathwayId=5f7e17e1edbc2a5ec21a20af&missionId=5f779f1eedbc2a00201f3e5e&projectId=5fadaa43edbc2a0020bdedfd)

Adım 5 - GitHub Desktop'ı kullanmaya başlayın
GitHub deposu oluşturmak için ücretsiz bir GitHub hesabına kaydolmanız ve GitHub Desktop'ı yüklemeniz gerekir.
 
**Bunu ayarlamak için:**
 
- Henüz bir hesabınız yoksa, adresinden ücretsiz bir GitHub hesabı için kaydolun. [github.com](https://github.com/).

- GitHub Desktop'ı şu adresten indirin ve yükleyin: [masaüstü.github.com](https://desktop.github.com/), hem Mac hem de PC için kullanılabilir. Site, kullandığınız platformu otomatik olarak algılamalıdır veya platform türünüzü manuel olarak seçebilirsiniz.
 
- Kurulumdan sonra GitHub Desktop'ta hesabınızda oturum açın:
- 
Windows'ta Dosya > Seçenekler > Hesap'ı seçin.

Mac'te GitHub Desktop > Tercihler'i seçin.

Oturum açma ve hesabınızın kimliğini doğrulama hakkında daha fazla bilgiyi şurada bulabilirsiniz: [GitHub belgeleri.](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/authenticating-to-github)
 
Halihazırda hesabınızla ilişkili herhangi bir deponuz yoksa, şimdi başlamanız için sizi teşvik eden bu hoş geldiniz ekranını görmelisiniz!

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/setup-version-control/figures/JrProg_C.2_image1.png)

Alternatif metin: GitHub Desktop karşılama ekranı, "Hadi başlayalım!" zirvede.

### Adım 6 - Sabit sürücünüzde yeni bir depo oluşturun
GitHub deposu (genellikle "repo" olarak kısaltılır), bir projenin içinde yaşadığı bir klasördür. Bu klasörün içinde, tüm değişiklikler version control yazılımınız tarafından dikkatle izlenir. Yapılacak ilk şey, bir Unity projesi için özel olarak yapılandırılmış boş bir depo oluşturmaktır.
 
- GitHub Desktop'taki karşılama ekranından, Sabit Diskinizde Yeni Bir Depo Oluştur'u seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/setup-version-control/figures/JrProg_C.2_image2.png)

Alternatif metin: GitHub Desktop karşılama ekranında, Sabit Diskinizde Yeni Bir Depo Oluştur düğmesi vurgulanır.

GitHub masaüstünün üst menüsünden Dosya > Yeni Depo'ya da tıklayabilirsiniz.

- Görüntülenen Yeni Depo Oluştur penceresinde deponuzun ayarlarını yapılandırın:
- 
Deponuza “Jr-Programmer-Project” gibi bir İsim verin. Boşlukların kısa çizgi ile değiştirileceğini unutmayın

Deponuzu kaydetmek istediğiniz Yerel Yolu seçin. Orada az önce girdiğiniz isimle bir klasör oluşturulacaktır.

Git Yoksay açılır menüsünden Birlik seçeneğini seçin. Bu, deponuzda version controlünde saklamak istemediğiniz tüm dosya türlerini listeleyen önceden yapılandırılmış bir .gitignore dosyası oluşturacaktır. Unity için bu, yalnızca projenize özgü dosyalara odaklanacağı ve diğer her şeyi yok sayacağı anlamına gelir.


![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/setup-version-control/figures/JrProg_C.2_image3.png)

Alternatif metin: GitHub Desktop'ta Ad, Yerel Yol ve Git Yoksay alanları vurgulanmış olarak Yeni bir Depo Penceresi oluşturun.

- Depo Oluştur'u seçin. Bu, Mevcut Depo açılır menüsünü yeni deponuza ayarlayacaktır. Ana pencerede, şu anda “Yerel değişiklik yok” olduğunu göreceksiniz. Bunun nedeni, henüz düzenlemediğiniz yepyeni bir repo olmasıdır.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/setup-version-control/figures/JrProg_C.2_image4.png)

Alternatif metin: Geçerli Deponun Jr-Programmer-Project olarak ayarlandığı GitHub Desktop depo penceresi.

- Bilgisayarınızda yeni oluşturulan klasörü belirttiğiniz konumda açın. Bilgisayarınız gizli dosyaları görüntüleyecek şekilde yapılandırılmışsa, üç öğe içerdiğini göreceksiniz:

.git klasörü

.gitattributes

.gitignore

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/setup-version-control/figures/JrProg_C.2_image5.png)

Alternatif metin: Jr-Programmer-Project depo klasörünün içeriğini gösteren Dosya Gezgini.

.git klasörü GitHub'a bunun aslında bir GitHub deposu olduğunu söyler. .gitignore ve .gitattributes, deponuzun yapılandırmasını belirtir. Gerekli değil, ancak bu gizli dosyaları görmek isterseniz, Windows veya Mac için nasıl yapılacağını Google'a yazabilirsiniz.
 
GitHub'a izlenecek bir şey vermek için, bir sonraki adımda bu klasöre gerçek bir Unity projesi koyacaksınız.
 
### Adım 7 - Projenizi indirin, açın ve izlemeye başlayın
Değişiklikleri izlemek için sabırla bekleyen boş deponuzla, ona bir Unity projesi ekleyip ilk kez açalım.
 
- Proje zip klasörünü indirin, çıkarın ve Junior-Programmer-Starter-Files klasörünü açın. İçinde aşağıdaki klasörleri bulacaksınız:

Assets

Paketler

Proje ayarları
 
- Üç klasörü de seçmek için Ctrl+A (Windows) veya Cmd+A (Mac) tuşlarını kullanın, ardından bunları kopyalayıp gizli .git dosyalarınızın hemen yanındaki repo klasörünüze yapıştırın. Bu klasör artık Unity projesi olarak açılmaya hazır.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/setup-version-control/figures/JrProg_C.2_image6.png)

Alternatif metin: Jr-Programmer-Project depo klasörünün içeriğini gösteren Dosya Gezgini.

- Projeyi Unity Hub'dan başlatmak için Projeler sekmesine gidin ve Depo klasörünüzü ekleyin, ardından projeyi Unity Düzenleyici'de açın.
Bu projenin Unity 2020.3 LTS gerektirdiğini unutmayın. Yüklü değilse, Unity Hub'daki listesinin altında doğru sürümü yüklemeniz için bir uyarı ile bir uyarı bildirimi görüntülenecektir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/setup-version-control/figures/JrProg_C.2_image7.png)

Alternatif metin: Proje penceresinde Proje içeriğini ve Sahne görünümünde boş bir sahneyi gösteren Unity Düzenleyicisi.  

- Github Desktop pencerenizde, Değişiklikler panelinde artık her dosyanın yanında yeni olduğunu gösteren küçük bir yeşil artı (+) simgesiyle uzun bir yeni dosya listesi görünür. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/setup-version-control/figures/JrProg_C.2_image8.png)

Alternatif metin: GitHub masaüstünde, hepsinin adlarının yanında seçildiğini gösteren mavi onay işaretleri bulunan 164 değiştirilmiş dosyanın listesini gösteren Değişiklikler paneli. 

Tebrikler! Projeniz artık version controlü için hazır. Bu projede yaptığınız tüm değişiklikler GitHub tarafından izlenecektir.

### Adım 8 - Bir ilk taahhütte bulunun ve deponuzu yayınlayın

Deponuza taahhüt ettiğiniz ilk dosya grubu, ilk işleme dahil edilecektir. Projenizi ilk kurduktan sonra genellikle bir ilk taahhütte bulunursunuz, o yüzden şimdi yapalım.
- Deponuzda listelenen değişikliklerin altındaki Özet alanına, “initial commit” yazın ve Açıklamayı doldurun (örneğin “proje başlangıç dosyaları”). Ardından, değişikliklerinizi projenin "ana" dalında kaydetmek için Ana olarak taahhüt et'i seçin. Dalların ne olduğunu bilmiyorsanız endişelenmeyin - bunu daha sonraki bir eğitimde ele alacağız.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/setup-version-control/figures/JrProg_C.2_image9.png)

Alternatif metin: Özet "ilk kesinleştirme" ve Açıklama "proje başlangıç ​​dosyaları" olarak ayarlanmış şekilde Github Desktop'ın Taahhüt paneli.

Kabul Et'e tıkladıktan sonra, version controlünde güvenli bir şekilde saklandıkları için listelenen tüm değişikliklerin kaybolması gerekir.
 
Ancak, tüm değişiklikleriniz sabit sürücünüzde yerel olarak izlenecek olsa da, yanlışlıkla bilgisayarınızı uçurumdan düşürürseniz ne olur? Tüm çalışmalarınız kaybolur! Her ihtimale karşı projenizi bulutta yedekleyelim.
- GitHub Desktop arayüzünden Publish Repository'yi seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/setup-version-control/figures/JrProg_C.2_image10.png)

Alternatif metin: Yayın Havuzu düğmesinin vurgulandığı GitHub Masaüstü penceresi.

- Açılan pencerede projenizin Adını ve kodunuzu herkese açık mı yoksa gizli mi tutmak istediğinizi onaylayın. Ardından Depoyu Yayınla'yı seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/setup-version-control/figures/JrProg_C.2_image11.png)

Alternatif metin: Ad “Jr-Programmer-Project” olarak ayarlanmış ve “Bu kodu gizli tut” seçili olarak GitHub Desktop arayüzünün Yayın Havuzu penceresi.

- Deponuzun GitHub.com'da yedeklendiğini ve yayınlandığını görmek için GitHub masaüstünün üst menüsüne gidin ve Depo > GitHub'da Görüntüle'yi seçin. Burada tüm dosyaları keşfedebilir, işlem geçmişini görüntüleyebilir, sorunları günlüğe kaydedebilir ve çok daha fazlasını yapabilirsiniz. Biraz daha rahat olmak için arayüzü keşfetmekten çekinmeyin.


### Adım 9: Version controlü nasıl çalışır?

**Değişiklikleri itme ve çekme**

Version controlünü kullandığınızda, yaptığınız değişiklikleri belgeleyen bir notla birlikte bir bulut havuzu (veya dosya depolama dizini) aracılığıyla projede yaptığınız değişiklikleri kaydedersiniz. Bu, bir projenin en son sürümünü çekebileceğiniz (indirebileceğiniz) ve açabileceğiniz, yerel olarak değişiklik yapabileceğiniz ve ardından değişikliklerinizi bulut havuzuna geri gönderebileceğiniz (yükleyebileceğiniz) anlamına gelir.


**Değişiklikleri birleştirme**

Aynı proje üzerinde aynı anda birden fazla kişi çalışırken, bazen aynı dosyada farklı değişiklikler yapabilirler. Örneğin, bir kişi bir Unity projesinde bir nesne varlığına atanan dokuyu değiştirebilir ve bir diğeri sahnedeki konumunu değiştirebilir. Version controlü, birleştirme olarak bilinen bir işlemdeki tüm değişiklikleri birleştirmek ve birleştirmek için proje dosyalarını yönetir. Bazen bir proje dosyasında yapılan değişiklikler aynı değerleri etkileyebilir. Bu olduğunda, version control sistemi değişiklikleri bir araya getiremez ve bu da bir geliştiricinin girdisini gerektiren bir birleştirme çakışmasına neden olur. Version control sistemi, tipik olarak iki farklı değeri yan yana görüntüleyerek çakışmayı tanımlayacaktır. Geliştirici daha sonra çakışmayı çözmek için hangisini tutacağını belirler.

**Önceki sürümlere dönüş**

Version controlünün en büyük faydalarından biri, zaman içindeki tüm değişiklikleri takip etmektir. Herhangi bir değişiklik çakışıyorsa veya daha önceki bir sürüme geri dönmenin en iyisi olduğuna karar verirseniz, herhangi bir zamanda projenizin önceki herhangi bir sürümüne geri dönebilir ve onu geri yükleyebilirsiniz.

### Adım 10: Özet
Version controlünün hem tek başına geliştiriciler hem de bir ekipte birlikte çalışanlar için büyük faydaları vardır. Başlamak ürkütücü görünse de version control sistemleri, siz çalışırken bir projeyi sürdürmek için güçlü araçlardır. Bu eğitimde:

- Temel version control teorisi hakkında bilgi edinildi.
- Kendinizi GitHub ekosisteminde çalışmaya hazırlayarak bu teoriyi uyguladınız.


