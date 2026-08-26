# Proje Kurulum Süreçleri


Bu, eğitimlerimizden birini tamamlamak için bir Unity projesi oluşturmaya ihtiyaç duyabileceğin yaygın süreçlerle ilgili bir kılavuzdur.

**Aşama 1: Genel Bakış**
Bu, proje kurulumu için ortak süreçlerin bir koleksiyonudur. Bu süreçlerden birini özetlemen gerekirse, diğer öğrenme deneyimlerinden buraya yönlendirilebilirsin.

**Aşama 2: Hub'dan Unity'nin yeni bir sürümünü yükle**
**Not**: Unity Editor ve Unity Hub'ı daha önce hiç yüklemediysen, [Unity'yi ve Hub’ı](https://learn.unity.com/tutorial/install-unity-and-the-hub) kur bu süreçte sana ayrıntılı olarak rehberlik edecektir.


Unity'nin yeni bir sürümünü yüklemek için:

- Unity Hub'ı aç ve **Installs** sekmesini seç.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-1.png)
Unity Hub’ın Installs sekmesi
- Yeni bir versiyon yüklemek için Add’i seç.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-2.png)
Kutucuk içerisindeki Add butonu ile Unity Hub’ın Installs sekmesi
- Yüklemek istediğiniz versiyonu seçin ve ardından devam etmek için Next’i seçin. 
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-3.png)
Kutucuk içerisindeki en son TECH Stream sürümü için Add Unity Version iletişim kutusu
- Kuruluma eklemek istediğin modülleri seç. Şunları düşünmek isteyebilirsin:
- Oluşturduğun deneyimlerin farklı platformlarda (WebGL, Windows, Mac ve Linux) oynatılabilmesi için destek oluştur
- Dil paketleri

Belgeler varsayılan olarak seçilecektir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-4.png)
Kullanılabilir modüllerin listesini içeren Add Unity Version iletişim kutusu
- Kurulumu tamamlamak için Done’yi seç.

Bu süreci tamamladığında, öğrenme deneyimine geri dön.

**İndirme ile ilgili sorunları gider**

Unity'nin yeni sürümü indirilirken herhangi bir hata görürsen aşağıdaki ipuçlarını ve geçici çözümleri göz önünde bulundur:
- **Yeterli bellek ve disk alanınız var mı?** Bilgisayarının hazır olduğundan emin olmak için [yüklediğin Unity sürümünün minimum sistem gereksinimlerini kontrol et.](https://docs.unity3d.com/Manual/system-requirements.html) Doğru Unity sürümünü bulmak için "System requirements" sayfasının üst kısmındaki açılır menüyü bul.
- **Dev tools (geliştirme araçları)’u devre dışı bırakın.** Editor’un bu sürümüyle herhangi bir scriptleme planlamıyorsan (ve bu sürümü zaten bu yolda kullanmayacaksan), “Microsoft Visual Studio Community 2019” araçlarının (veya benzerinin) indirme seçeneğini devre dışı bırak. Bu, disk alanından tasarruf sağlayacak ve olası hataları önleyecektir.
- **Bu versiyon için release information page (sürüm bilgileri sayfasını)’i kontrol et.** [2020.3.13 versiyonu için sayfadan başlayın](https://unity3d.com/unity/whats-new/2020.3.13) ve yüklemekte olduğun versiyonu seçmek için sayfanın üst kısmındaki açılır menüyü kullan. Sorununa neden olabilecek bilinen sorunlara bak. Eğer kesinlikle gerekliyse, Hub'ı kullanmadan Unity Editor'un bir versiyonunu indirmek için bu sayfaları kullanabilirsin.
Daha fazla yardım için [Unity Müşteri Desteği](https://support.unity.com/) ile iletişime geç. Destek sayfalarında oturum açtığından emin ol. Makalelere göz at, topluluğa danış veya durumunu bir Unity uzmanına açıklamak için **Submit a request’i** seç.

**1.3 Yüklü bir Unity versiyonuna modüller ekle **

Yüklemiş olduğun herhangi bir Unity versiyonuna modül eklemek için:
- Unity Hub’ı aç ve **Installs** sekmesini seç.
- Yönetmek istediğin versiyonun kutucuğundaki **More menu’yü (⋮)** seç.

![figures](https://github.com/Kodluyoruz/taskforce/blob/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-5.png?raw=true)
Unity Hub'ın Installs sekmesi, More menu (⋮) simgesi kutucuk içinde vurgulanmıştır.

- **Add Modules’ü** seç.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-6.png)
Genişletilmiş More menu’deki kutucuk içerisindeki Add Modules seçeneği
- Yüklemek istediğin modulü seç ve sonra Done’ye tıkla.

Bu süreci tamamladığında, öğrenme deneyimine geri dön.

**1.4 Unity Hub’a proje ekle**

Unity Hub’a Unity projesi eklemek için:
- **Projects** sekmesinde **Add’i** seç.
- Unity projesinin root klasörüne git ve **Open**’ı seç.

Bu süreci tamamladığında, öğrenme deneyimine geri dön.


**1.5 Yeni bir Unity projesi oluştur**

Yeni bir Unity projesi oluşturmak için:
-  Unity Hub’ı aç.  
-  **Projects** sekmesinde **New**’i seç.
-  Kullanmak istediğin Template (şablonu)’i seç. 

**Not**: Tüm Template’lerin mevcut listede görünür hale gelmesi birkaç dakika sürebilir. Bir Template’in indirme simgesi (aşağı ok) varsa, bunu bir projede kullanmadan önce bunu seçmen ve indirmen gerekir.
-  Yeni projeni isimlendir ve kaydetmek için uygun bir lokasyon seç.
-  **Create**’i seç. Projen Unity Editor’da açılacak — bu işlem birkaç dakika sürerse endişelenme
Bu süreci tamamladığında, öğrenme deneyimine geri dön.

**1.6 Package Manager üzerinden bir paket kur**

Bir paket kurmak için:
-  Açmadıysan Unity Editor’u aç.
- Üst menüde, **Window > Package Manager‘ı** seç.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-7.png)
Window > Package Manager’ın üst menüdeki gösterimi

- Yüklemek istediğin paketi bulmak için Unity Registry'ye (varsayılan görünüm) göz at veya arama çubuğunu kullan.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-8.png)
Bütün paketleriyle Package Manager penceresi
- Sana gerekli olan paketi bulduğunda, Unity projene kurmak için **Install**’u seç. 
- **Ctrl+S** (Windows) or **Cmd+S** (macOS) kısayolu ile değişiklerini kaydetmeyi unutma


Bu süreci tamamladığında, öğrenme deneyimine geri dön.

**1.7 Unity projendeki bir paketi güncelle**

Unity projendeki bir paketi güncellemek için:
- Açmadıysan Unity Editor’u aç.
- Üst menüde, **Window > Package Manager‘ı** seç. 
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-9.png)
Window > Package Manager’ın üst menüdeki gösterimi

Varsayılan olarak, açılan pencere, Unity Editor'ı geliştirmek için kullanabileceğin tüm mevcut paketleri listeleyen **Unity Registry'yi** gösterecektir.
- Pencerenin sol köşesinde, paketler açılır menüsünü seç ve **In Project’i** seç.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-10.png)
In Project’in paketler açılır menüsündeki gösterimi

Bu görünüm, halihazırdaki Unity projende bulunan tüm paketleri listeler.
- Mevcut listeden ilgili paketi seç. İpucu: Bir ok simgesi, mevcut bir güncellemeye sahip paketleri gösterir.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-11.png)
- **Update to [versiyon numarası]** seç.

Bu süreci tamamladığında, öğrenme deneyimine geri dön.


1.8 Asset Store’dan asset’leri içeri aktar

Projene asset’leri Unity Asset Store’dan aktarmak için: 
- Projeni Unity Editor’da aç.
- İnternet tarayıcında Asset Store’a git ve indirmek istediğin paketi bul.
- **Add to My Assets’i** seç.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-12.png)
 Asset Store'da, tüm asset’lerin sayfasında bulunan Add to My Assets düğmesi

- Tamamlama penceresi açıldığında, Open in Unity’i seç.
Open in Unity düğmesinin kutucuk içerisinde gösterildiği Added to My Assets bildirimi
Paket, Package Manager penceresinde açılacak.
- **Download**’ı seç. Asset’leri daha önceden indirdiysen, bu süreçte doğrudan bir sonraki adıma geçersin.
- **Import**’u seç. 
- Bir uyarı penceresi proje ayarlarının üzerine yazman konusunda seni uyaracaktır — proje ayarlarını özelleştirmediysen bu uyarıyı yok sayabilirsin. Devam etmek için, **Import**’u seç.
- Başka bir uyarı penceresi, Package Manager bağımlılıkları olduğu konusunda seni uyarabilir — bu durumda, **Install/Upgrade’i** seç.
- Paket içeriğini listeleyen Import Unity Package penceresi açılacaktır. Çoğu durumda, seçilen asset paketinin tüm içeriğini tutmak isteyeceksin. Pencerenin sağ alt köşesinde **Import**’u seç.
Asset’ler, Unity projenin Assets folder klasörüne eklenecektir.

Bu süreci tamamladığında, öğrenme deneyimine geri dön.

**Not**: Bu, temel kurulum sürecidir. Asset’leri karmaşık bir projeye aktarıyorsan, mevcut seçeneklere daha ayrıntılı bir genel bakış için [Unity Kılavuzunda Asset Store paketini Import etmeyi](https://docs.unity3d.com/Manual/upm-ui-import.html) inceleyebilirsin.


**1.9 Yerel bir asset paketini içe aktar**
Projene yerel bir asset paketini içe aktarmak için
- Projeni Unity Editor’da aç.
- Üst menüde, **Assets > Import Package > Custom Package** seçeneğine git.
- File browser penceresinde, içe aktarmak istediğin .unitypackage dosyasına git ve Open'ı seç.
- Asset’lerini projene aktarmak için Import'u seç. Bunları Project penceresine gidip Assets folder klasörünü açarak bulabilirsin.
Bu süreci tamamladığında, öğrenme deneyimine geri dön.


**Not**: Bu süreçte mevcut seçeneklere daha ayrıntılı bir genel bakış için [Unity Manual'deki local Asset paketlerini import etmeyi](https://docs.unity3d.com/Manual/AssetPackagesImport.html) inceleyebilirsin.

**1.10 Bilgisayarından özgün asset’leri içe aktar**
Unity projene bilgisayarından özgün asset’leri içe aktarmak için:
- File browser penceresinde, içe aktarmak istediğin dosyaya git.
- Projeni Unity Editor’da aç.
- Dosyayı file browser’dan Editor'daki Project penceresine sürükle. Bu, dosyayı Unity projects’in Assets folder klasörüne kopyalayacaktır.
Bu süreci tamamladığında, öğrenme deneyimine geri dön.

**Notlar**: 
Ayrıca dosyaları doğrudan bu Asset folder klasörüne kaydedebilir veya dışa aktarabilirsin. 
Dosyaları Unity projelerine içe aktarmaya ilişkin daha ayrıntılı bir genel bakış için [Unity Manual’in Asset iş akışı bölümünde import etmeyi](https://docs.unity3d.com/Manual/ImportingAssets.html) inceleyebilirsin.
Yapılandırma gerektiren daha karmaşık asset’leri içe aktarmak farklı bir süreç gerektirir. Bunu yapman gerekiyorsa, özel öğrenme deneyiminde adım adım yönlendirileceksin.

1.11 Unity Hub 2.X'teki Learn sekmesinden projeleri aç 

Unity Hub'daki Learn sekmesinden projeleri açmak için:
- **Unity Hub**’ı aç.
- Pencerenin solundan **Learn** sekmesini seç.
- Mevcut listede seçtiğin projeyi bul ve seç.
**Not**: Projen listede yoksa, Unity Hub'a proje eklemeyi gözden geçirin.
- Açılan pencerede, **Download Project’i** seç.
- İndirme tamamlandığında, **Open Project'i** seç. Unity Editor açılacak, projeyi içe aktar ve gerekli bütün gerekli [paketleri](https://docs.unity3d.com/Manual/Packages.html) güncelle.
- Üst menüde, proje sürümünü kaydetmek için **File > Save'e** git. Alternatif olarak **Ctrl+S** (Windows) veya **Cmd+S** (macOS) kısayolunu da kullanabilirsin.

Bu süreci tamamladığında, öğrenme deneyimine geri dön.


**1.12 Unity Hub 2.X'te Learn sekmesi aracılığıyla açılan bir projeyi kaydet**

Bazı kullanıcılar şu anda Unity Hub 2.X'in Learn sekmesinden indirilen Unity projelerini kaydetmelerini engelleyen bir hatayla karşılaşıyor.

Bu hatayla karşılaşırsan, aşağıdaki geçici çözümü kullanabilirsin:
- Üst menüde, **File > Close’a** git.
- Açılan **Keep Project?** pencerinde, **Keep**’i seç.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-14.png)
-  İşletim sisteminin kaydetme penceresini kullanarak projeni kaydet. Projen için özel projeler klasörü veya Belgeler klasörün gibi kolayca erişilebilen bir konum seç.
- Proje kaydedildikten sonra Unity Hub'ı yeniden aç. 
- **Add**’i seç ve kayıtlı projenin konumuna git. 
- Projeni Hub'daki Proje List’e eklemek için **Open**'ı seç.
- Açmak ve eğitime devam etmek için Proje List’deki projeye sol tıkla. Bu işlemi tamamladıktan sonra projeyi normal bir şekilde kaydedebileceksin.

**1.13 Scene görünümü arka planını değiştir**

Varsayılan arka plan ile temel öğeler arasındaki kontrastı varsayılan malzemeyle değiştirmek istersen, arka plan rengini değiştirebilirsin:

- Scene görünümünün üzerindeki araç çubuğunda, bunları Scene görünümünde kapatmak için **skybox, fog ve effects toggle** seç.

![figures](https://github.com/Kodluyoruz/taskforce/blob/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-15.png?raw=true)
Kutucuk içerisindeki skybox, fog ve effects toggle Scene görünümü araç çubuğu
- Ana menüde, **Edit > Preferences’e** git.
- Gezinme çubuğunda **Colors** sekmesini seç.
- **Scene** başlığı altında, **Background** özelliğini bul. Sana uygun arka plan rengini seçmek için color picker (renk seçiciyi)’ı kullan.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/project-setup-processes/figures/ProjectSetupProcess-16.png)
Colors sekmesinini seçili olduğu Preferences penceresi

Dilersen grid rengini ayarlamak için Grid özelliğini de aynı şekilde değiştirebilirsin.
- Preferences penceresini kapat.
**Önemli**: Scene görünümünde normal varsayılan gökyüzüne dönmek için, bunu tekrar açmak için **skybox, fog ve effects toggle’**ı tekrar seçin.




















