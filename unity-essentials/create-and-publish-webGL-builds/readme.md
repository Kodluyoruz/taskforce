# WebGL Derlemeleri Oluştur ve Yayınla

Bu eğitimde,

- WebGL build oluşturacaksın
- WebGL Publisher paketini kullanarak doğrudan Unity Play’de yayınlayacaksın

**1.1 Genel Bakış**
Gerçek zamanlı deneyimin hazır olduğunda, başkalarıyla paylaşmak için bir build oluşturman gerekir. Build, oyununun bağımsız, oynanabilir bir versiyonudur. Oluşturabileceğin farklı build türleri vardır — bu eğitim, başkalarının oynaması için çevrimiçi yayınlayabileceğin WebGL build’lerine odaklanır.

Bu eğitimde,
- WebGL build oluşturacaksın 
- WebGL Publisher paketini kullanarak doğrudan Unity Play’de yayınlayacaksın

**1.2 Başlamadan Önce**

Projeni oluşturmak için ihtiyacın olacağı şeyler:

Unity kurulumuna eklenen WebGL Build Support modülü
Unity versiyonu için Packet Manager aracılığıyla yüklenen WebGL Publisher paketi

Bu eğitime başlamaya hazır olduğundan emin olmak için bu adımdaki talimatları izle.
Build Support modülünü kontrol et

Gerekli Build Support modülünün kurulu olup olmadığını kontrol etmek için:
- Unity Hub’ı aç.
- **Projects** sekmesini seç ve build etmek istediğin projenin Unity versiyonunu belirle.
- **Installs** sekmesini seç ve mevcut listede versiyonu ara. **WebGL Build Support** modülü kuruluysa, versiyon kutucuğunun altında bir WebGL simgesi bulunur.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-and-publish-webGL-builds/figures/WebGLBuilds_1.2.1.3_SupportModule.png)
Unity'nin 2019.4 LTS versiyonu için WebGL Build Support modülü simgesi, belirtme kutucuğu olarak vurgulanır — simge etiketi görünür
- WebGL simgesi yoksa, [Unity versiyonuna WebGL Build Support modülünü ekleyin.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a4cedbc2a002096b758)
WebGL Publisher paketini kontrol et
Bu paketi kontrol etmek için:
- Yayınlamak istediğin projeyi Unity Editor'da aç.
- **Window > Package Manager’ı** seçerek Package Manager’ı aç.
- ** In Project** paketlerini seçmek için pencerenin sol üst köşesindeki açılır filtre menüsünü kullan.
- **WebGL Publisher'ı** ara. Listelenmiş ve güncelse, gerçek zamanlı deneyimini build etmeye ve yayınlamaya hazırsın demektir. Değilse, [paketi şimdi yükle veya güncelle.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a6aedbc2a002520b6ec)

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-and-publish-webGL-builds/figures/WebGLBuilds_1.2.2.3_WebGLPublisherPackage.png)

**Önemli**: 

Arama yaparken paketi bulamıyorsan, aynı paketin önceki adını kullanmayı dene: **Share WebGL Game.** Paketi geçerli versiyona güncellediğinden emin ol.


Halihazırda bu paketin **bir önceki versiyonu** yüklü ise, onu en son versiyona güncellediğinden emin ol. Bunu yapmazsan, bu eğitimdeki talimatların projeni oluşturmak ve yayınlamak için gereken süreçle tam olarak eşleşmediğini göreceksin.

**1.3 WebGL Build’lerine Giriş**

Bir WebGL build oluşturmadan önce, bazı arka plan bilgilerini gözden geçirelim.

WebGl Build Nedir?
WebGL build, gerçek zamanlı deneyimini içeren bir dosya koleksiyonudur. Bunları yerel olarak tarayıcında oynayabilir,Unity Play veya diğer çevrimiçi hosting platformlarında yayınlayabilirsin.

WebGL build oluşturmak için ne tür projeler kullanabilirim?
Genel olarak konuşursak, Unity projesinin boyutu ne kadar küçükse, WebGL build için o kadar uygundur. Tasarımcılar ve geliştiriciler, projeyi online olarak yüklediklerinde iyi bir deneyim sunacak kadar küçük olduklarından emin olmak için deneyimlerini optimize etmeye genellikle önemli çaba harcarlar.

Unity Learn'deki Microgames, Create with Code meydan okumaları ve Junior Programmer portfolyo projelerinin tümü WebGL build’leri oluşturmaya uygun olmalıdır.

Projelerimin WebGL build’lerini nasıl paylaşabilirim?
Bir WebGL build’ini oluşturan dosya koleksiyonlarını bir dizi farklı çevrimiçi hosting platformunda yayınlayabilirsin. Doğrudan Unity Editor'dan Unity Play'de yayınlayabilir veya istersen dosyaları alternatif bir hizmete yükleyebilirsin.

**1.4 Bir WebGL Build Oluşturun**

Gerçek zamanlı deneyiminin bir build’ini oluşturmak için:


- Projeyi Unity Editor'da açın. Aklında kendi projen yoksa neden Microgames’lerimizden birini denemiyorsun?

**Önemli**: Projenin kullandığı Unity versiyonu için WebGL Build Support modülünü kurduğundan emin ol.

- Unity Editor üst menüsünde **File > Build Settings’e** git. Ayrıca **Ctrl + Shift + B** (Windows) veya **Cmd + Shift + B** (macOS) kısayolunu da kullanabilirsiniz.

- Build Settings penceresinde, **Scenes in Build** bölümünü bul. Bu, build’ine hangi sahnelerin dahil edildiğini kontrol edebileceğin yerdir. Şunları yapabilirsin:

Build’ine herhangi bir açık sahne eklemek için **Add Open Scenes** düğmesini seç.
Sahneleri build’den hariç tutmak istiyorsan (adlarının solundaki onay kutusunu kullanarak) devre dışı bırak.
Listede yeniden sıralamak için sahneleri sürükle — Sahne 0, build’i başlattığında yüklenecek ilk sahnedir.


![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-and-publish-webGL-builds/figures/WebGLBuilds_1.4.3_ScenesInBuild.png)

Build Settings penceresinin üst kısmında bulunan Scenes in Build bölümü bir belirtme kutucuğuyla vurgulanır
- Build Settings penceresinin sol alt kısmındaki Player Settings’i seç. Bu, Project Settings penceresini açar.
- Project Settings penceresinde, build’inin ayrıntılarıyla Company Name, Product Name ve Version alanlarını güncelle.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-and-publish-webGL-builds/figures/WebGLBuilds_1.4.5_ProjectSettings.png)
Project Settings penceresinin üst kısmında bulunan ilgili alanlar bir belirtme kutucuğu ile vurgulanır

**Not**: 

- Buradaki Version alanı, kullandığın Unity versiyonundan ziyade bu build’in projenle ilgili versiyonunu ifade eder.
- En üstteki alanın altındaki ayarlar bu öğreticinin kapsamı dışındadır — temel bir WebGL build’i oluşturmak için bu ayarları yapılandırman gerekmez.
- Close the Project Settings window and return to the Build Settings window.
Project Settings penceresini kapat ve Build Settings penceresine dön.
- **Platform** seçimini bul ve mevcut listeden WebGL'i seç. Bu, listenin sağında bulunan ayarları ve yapılandırma seçeneklerini değiştirecektir.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-and-publish-webGL-builds/figures/WebGLBuilds_1.4.7_SelectPlatform.png)
- Çoğu durumda, pencerenin sağ alt tarafında bir Switch Platform düğmesi bulunur. Bu varsa, bir WebGL build’i oluşturmaya hazırlanmak için onu seç.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-and-publish-webGL-builds/figures/WebGLBuilds_1.4.8_SwitchPlatform.png)
- Artık gerçek zamanlı deneyiminizi oluşturmaya hazırsınız! Şunları yapabilirsin:
Build’i oluşturmak için **Build**’i seç.
Build’i oluşturmak ve hemen varsayılan tarayıcında çalıştırmak için **Build And Run**’ı seç.
- Build dosyalarını kaydetmek için bir dosya adı ve konum seç, ardından devam etmek için **Save**'i seç.
**Önemli**: Build’ini Assets klasörü Unity projesine kaydetme; root dizinde build’ler için ayrı bir klasör oluşturabilir veya tercih ettiğin yeni bir konum seçebilirsin.
- Son olarak, Unity'nin build’ini oluşturmasını bekle. Projenin boyutuna ve yapılandırmasına bağlı olarak, bu biraz zaman alabilir ve build devam ederken diğer bilgisayar işlemlerini yavaşlatabilir. Unity Editor, Görev Yöneticisi'nde (Windows) veya Etkinlik İzleyicisi'nde (macOS) yanıt vermiyor olarak gösteriliyorsa endişelenme — bir zorlamayla kesilmediği sürece build’ini oluşturmayı tamamlayacaktır.

**1.5 Build Dosyaların Hakkında**

WebGL build’in, bir index.html dosyasının yanı sıra [oyunun çalıştırması gereken diğer klasörler, dosyalar ve asset’lerden oluşur.](https://docs.unity3d.com/Manual/webgl-building.html) index.html dosyası bir yükleyici dosyasıdır; oyunun için bir başlatıcı işlevi görür. Yine de, diğer dosyalar doğru konumlarında olmadan, build’ini çalıştırmak onlara bağlı olduğundan düzgün çalışmayacaktır.


Build dosyalarını farklı bir konuma taşıman gerekiyorsa, her şeyi birlikte taşıdığından emin ol — bunu yapmak için dosyaları sıkıştırmanı öneririz.
WebGL build’ini başkalarıyla paylaşma
WebGL build’ini başkalarıyla paylaşmanın en iyi yolu, onu çevrimiçi olarak barındırmaktır. Bununla birlikte, WebGL build’inin sıkıştırılmış bir klasörünü doğrudan başkalarına verebilirsin.

**1.6 WebGL build’ini Unity Play'de yayınla **

WebGL build’ini Unity Play'de yayınlamak için:
- WebGL publisher paketini kurduğundan ve güncellemeleri kontrol ettiğinden emin ol.
- Unity Editor'da ana menüye git ve **Publish > WebGL Project**’i seç.
- WebGL Publish penceresinde **Get Started’**ı seç.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-and-publish-webGL-builds/figures/WebGLBuilds_1.6.3_PublisherGetStartedSmall.png)
- Listede oluşturduğun build’i bul ve **Publish**’i seç
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-and-publish-webGL-builds/figures/WebGLBuilds_1.6.4_PublishSmall.png)

**Not**:

Build’ini önceki bir Unity Editor oturumunda oluşturduysan, build’inin listelendiğini görmezsin. Bu durumda, **Locate Existing Build'i** seç ve build’ini içeren klasöre git.
Sürecin bu noktasından bir WebGL build’i oluşturabilir ve doğrudan yayınlayabilirsin, ancak bunu yaparsan sahne sırasını veya proje ayarlarını yapılandıramazsın.

- Unity Editor daha sonra build’ini Unity Play'de yayınlayacaktır; bu, projenin boyutuna ve karmaşıklığına bağlı olarak biraz zaman alabilir.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-and-publish-webGL-builds/figures/WebGLBuilds_1.6.5_UploadingSmall.png)
Unity Editor build’i Unity Play'de yayınlarken Publish penceresinde bir ilerleme izleyici görüntülenir
- Yükleme işleminin bir bölümünde, build’inin Unity Play sayfası varsayılan tarayıcı pencerenizde düzenleme modunda açılır.
Şunları yapabileceksin:

- Build’ine isim ver
- Kısa bir tanım ekle
- Bir küçük resim sağlayın - Play Mode’dan Unity Editor'da bir resim çekmenizi öneririz
- Gerçek zamanlı deneyiminizi oluşturmak için kullandığınız asset’leri ve eğitimleri etiketleyin

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-and-publish-webGL-builds/figures/WebGLBuilds_1.6.6_UnityPlayEditMode.png)
Sayfa düzenleme modundayken Unity Play'de yüklenen bir build’in örnek görünümü

İşin bittiğinde değişikliklerini kaydettiğinden emin ol!
- URL'yi doğrudan gezinme çubuğunuzdan kopyalayın veya gerçek zamanlı deneyiminizi başkalarıyla paylaşmak için Share düğmesini kullanın.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-and-publish-webGL-builds/figures/WebGLBuilds_1.6.7_ShareButton.png)

Kişisel bilgilerin yeniden düzenlendiği ve Share düğmesinin bir belirtme kutucuğuyla vurgulandığı WebGL build’i için yayınlanan sayfa

**1.7 Build’ini çevrimiçi olarak başka yerlerde yayınlama**

Bir içerik oluşturucu olarak gerçek zamanlı deneyiminizi yüklemek isteyebileceğiniz başka yerler de var.

**Oyun hosting platformları**

Bir platform, kullanıcı tarafından gönderilen HTML5 oyunlarını barındırabiliyorsa, WebGL build’ini de barındırabilmelidir. Bu platformların, süreçte sana yardımcı olacak kendi kılavuzları olacaktır.
Şu anda içerik oluşturucular için popüler seçeneklerden bazıları şunlardır:

- [itch.io](https://itch.io/docs/creators/html5)
- [simmer.io](https://get.simmer.io/)
- 
Kişisel siteler ve portfolyolar
Ayrıca build’ini kişisel bir web sitesine veya portfolyoya yükleyebilirsin. Birçok web sitesi platformu (Squarespace ve Wix gibi), platform araçlarına entegre edilmiş WebGL içeriğini barındırma seçeneklerine sahiptir.

**1.8 Özet**
Bu eğitimde, bir WebGL build’i oluşturdun ve bunu Unity Play'e yükledin. Ayrıca, diğer çevrimiçi konumlarda gerçek zamanlı deneyimlerinin build’ini barındırmaya yönelik kılavuzu da inceledin.


Çalışmanı paylaşmak, daha geniş içerik oluşturucu topluluğuyla etkileşim kurmanın ve kullanıcılarla bağlantı kurmanın harika bir yoludur — ne oluşturduğunu görmek için sabırsızlanıyoruz!

**Sonraki adımlar**
Unity Play'de bir oyun yayınlamayı seçersen, aylık vitrinlerimize katılmaya davet edileceksin. Bunlar, oyununla etkileşimi artırmanın ve oyuncu geri bildirimi almanın harika bir yoludur. Oyunun, Twitch yayınlarımızda da oynanabilir ve incelenebilir!









