## Yeni bir repoda veri kalıcılığı

Artık bir uygulamada sahneler arasında ve oturumlar arasında nasıl veri kaydedeceğinizi bildiğinize göre, bu becerileri yepyeni bir projede kullanmaya hazırsınız. Bu aynı zamanda yeni bir repo kurmak ve sürüm kontrolünü kullanmak için iyi bir fırsattır.

Kalıtım ve polimorfizm ilkelerini doğru bir şekilde uygulayarak kodu basitleştirin ve yeniden kullanılabilir hale getirin
 
Arabirimlerin kullanımı da dahil olmak üzere soyutlama ve kapsülleme ilkelerini doğru bir şekilde uygulayarak kodu daha güvenli ve kullanılabilir hale getirin
 
Nesne yönelimli programlama ilkelerini doğru bir şekilde uygulayarak verimli, düzenli ve anlaşılır kod yazın
 
Tasarım belgelerinde tanımlandığı gibi kullanıcı arayüzleri oluşturun.
 
Etkileşimli kullanıcı arayüzleri için komut dosyaları yazın.
 
Bir uygulama durumunda sahne akışını oluşturun
 
Sahneler ve kullanıcı oturumları arasında veri kalıcılığı uygulayın
 
En iyi kodlama uygulamalarını doğru bir şekilde yürüterek kod verimliliğini en üst düzeye çıkarın


### Adım 1: Bu görev güncellendi!
Bu görevi, siz bakmadan yenilememiz durumunda, lütfen bu gönderiyi denemeden önce bu içeriği tamamladığınızdan emin olun:

- [Sürüm kontrolünü ayarla](https://learn.unity.com/tutorial/set-up-version-control)
- [Örnek projeyi keşfedin](https://learn.unity.com/tutorial/explore-the-sample-project)
- [Nesne yönelimli programlamanın ilkeleri](https://learn.unity.com/tutorial/principles-of-object-oriented-programming)
- [Bir sahne akışı oluşturun](https://learn.unity.com/tutorial/create-a-scene-flow)
- [Sahneler arasında veri kalıcılığı uygulayın](https://learn.unity.com/tutorial/implement-data-persistence-between-scenes)
- [Oturumlar arasında veri kalıcılığı uygulayın](https://learn.unity.com/tutorial/implement-data-persistence-between-sessions)

### Adım 2: Genel Bakış
Önceki öğreticilerde, hem veri kalıcılığını uyguladınız [sahneler arasında](https://learn.unity.com/tutorial/implement-data-persistence-between-scenes) ve [oturumlar arasında](https://learn.unity.com/tutorial/implement-data-persistence-between-sessions) örnek bir projede. 

Bu teslim görevinde, bu tekniklerin her ikisini de yeni bir oyun projesinde uygulayacaksınız. Kullanıcının adını sahneler arasında ve yüksek puanlarını oturumlar arasında kaydedeceksiniz.

Veri kalıcılığı becerilerinize odaklanmanıza yardımcı olmak için size işlevsel olan ancak veri kalıcılığı uygulanmamış basit bir koparma tarzı oyun sağladık. Buna rağmen, bunun yerine kendi basit oyununuzu sıfırdan yaratmanız memnuniyetle karşılanır ve teşvik edilirsiniz - sadece kullanıcının puanını izleyebilmesi ve gösterebilmesi gerekir. 

Bu gönderide şunları yapacaksınız:

- Yeni bir repo oluştur
- İlk taahhütte bulunun
- Bir projeyi sürüm kontrolüne aktarın ve taahhüt edin
 - Sahneler ve oturumlar arasında veri kalıcılığı uygulayın

### Adım 7.2 Yeni bir repo oluşturun 
Projenizin yedeklendiğinden ve sürüm kontrolüne hazır olduğundan emin olmak için yeni bir repo (repo) oluşturun. Bu aynı zamanda kodu daha sonra öğrenci arkadaşlarınızla daha kolay paylaşmanıza da olanak tanır!

- Projeniz için yeni bir repo oluşturun GitHub Masaüstü, Git Yoksay açılır menüsü için Unity'yi seçtiğinizden emin olun. Bu, Unity'ye özgü gereksiz dosyaları reponuzdan otomatik olarak dışlayacak önceden hazırlanmış bir yapılandırma dosyasıdır. Reponuza “Data-Persistence-Project” gibi bir ad verebilirsiniz.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-data-persistence-new-repo/figures/JrProg_C.S_image1.png)

**Alternatif metin:** GitHub Masaüstünden Ad "Veri-Kalıcı-Proje ve Git Yoksay açılır menüsü Unity olarak ayarlanmış olarak Yeni bir Repo penceresi oluşturun.

- Bilgisayarınızda, yeni oluşturulan klasörü bulun. GitHub'ın onu bir repo olarak tanıdığı bir .git klasörü ve yoksayılacak dosya ve dosya türlerinin listesini içeren bir .gitignore dosyası içermelidir. .git klasörünün yerleşimi GitHub'a o dizindeki tüm dosyaların izlenmesi gerektiğini söyler. Bilgisayarınızın ayarlarına bağlı olarak .git dosyaları görünmez olabilir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-data-persistence-new-repo/figures/JrProg_C.S_image2.png)

**Alternatif metin:** Veri-Persistence-Project'in içeriğini 3 gizli öğe içerecek şekilde gösteren dosya gezgini: .git klasörü, .gitattributes dosyası ve .gitignore dosyası.

**Not:** Ayrıca, repoyu doğrudan GitHub.com'dan oluşturabilir ve ardından bu repoyu klonlayabilirsiniz, ancak bu biraz zaman alır. birkaç ekstra adım. GitHub'ın veya sürüm kontrolünün ne olduğunu hatırlamıyorsanız, Sürüm kontrolü öğreticisine bakın.


### Adım 7.3 Projeyi açın ve bir başlangıç ​​taahhüdü yapın
Reponuza taahhüt ettiğiniz ilk dosya grubu, ilk işleme dahil edilecektir. Projenizi ilk kurduktan sonra genellikle bir ilk taahhütte bulunursunuz, o yüzden şimdi yapalım.

Proje zip klasörünü indirin, çıkarın ve Data-Persistence-Starter-Files klasörünü açın. İçinde aşağıdaki klasörleri bulacaksınız:
- Assets
- Paketler
- Proje ayarları


- Üç klasörü de seçmek için Ctrl+A (Windows) veya Cmd+A (Mac) tuşlarını kullanın, ardından bunları kopyalayıp gizli .git dosyalarınızın hemen yanındaki repo klasörünüze yapıştırın. Bu klasör artık Unity projesi olarak açılmaya hazır.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-data-persistence-new-repo/figures/JrProg_C.S_image3.png)

Alternatif metin: Jr-Programmer-Project repo klasörünün içeriğini gösteren Dosya Gezgini.

- Projeyi Unity Hub'dan başlatmak için Projeler sekmesine gidin ve Repo klasörünüzü ekleyin, ardından projeyi Unity Düzenleyici'de açın.
 
Bu projenin Unity 2020.3 LTS gerektirdiğini unutmayın. Yüklü değilse, Unity Hub'daki listesinin altında doğru sürümü yüklemeniz için bir uyarı ile bir uyarı bildirimi görüntülenecektir.
 
 - Proje penceresinden, Sahneler > Ana'yı açın ve ardından oyunu test etmek için Oynat'a basın. Topu fırlatmak için boşluk tuşuna basın ve raketi kontrol etmek için sol ve sağ ok tuşlarınızı kullanın. Puanınızın ekranın üst kısmında izlendiğine dikkat edin, ancak En İyi Puan işlevsel değildir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-data-persistence-new-repo/figures/JrProg_C.S_image4.png)

**Alternatif metin:** Oyunun ortasında koparma oyunu, mevcut puan 25 gösteriyor.

Github Desktop pencerenizde, Değişiklikler panelinde artık her dosyanın yanında yeni olduğunu gösteren küçük bir yeşil artı (+) simgesiyle uzun bir yeni dosya listesi görünür. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-data-persistence-new-repo/figures/JrProg_C.S_image5.png)

**Alternatif metin:** GitHub masaüstündeki Değişiklikler paneli, adlarının yanında seçildiklerini gösteren mavi onay işaretlerine sahip 29 değiştirilmiş dosyanın listesini gösterir.  

- Reponuzda listelenen değişikliklerin altındaki Özet alanına, "ilk taahhüt" yazın ve Açıklamayı doldurun (örneğin, "içe aktarılan başlangıç koparma oyunu"). Ardından, değişikliklerinizi projenin "ana" dalında kaydetmek için Ana olarak taahhüt et'i seçin. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-data-persistence-new-repo/figures/JrProg_C.S_image6.png)

**Alternatif metin:** Özet "ilk taahhüt" olarak ayarlanmış ve Açıklama "- Unity 2020LTS'de yeni 3d proje" olarak ayarlanmış Github Desktop'ın Taahhüt paneli

- Repoyu yayınla'yı seçin, ardından Bu kodu gizli tut onay kutusunun seçimini kaldırın. Bu, bu gönderide kodunuzu paylaşmanıza izin verecektir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/submission-data-persistence-new-repo/figures/JrProg_C.S_image7.png)

**Alternatif metin:** GitHub Desktop'ın repo penceresini "Bu kodu gizli tut" seçeneği seçili değil ve vurgulanmış olarak yayınlayın.




















