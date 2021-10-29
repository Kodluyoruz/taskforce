# Arka Plan Müziği Eklemek

Bu öğretici içerik, seni Ses Kaynağı Bileşeni (Audio Source Component) ile tanıştıracak ve bir Sahne (Scene)’ye sesin nasıl ekleneceği konusunda yardımcı olacak.
Bu öğretici içerikte:

- Bir GameObject’e Ses Kaynağı Bileşeni (Audio Source Component) ekleyeceksin.
- Bir Ses Kaynağı (Audio Source)’na Ses Klibi (Audio Clip) ekleyeceksin.
- Bir 3B Sahne (Scene)’ye arka plan müziği ekleyeceksin.

**Aşama 1: Genel İnceleme**

Bu öğretici içerikte, Unity’nin ses özelliklerini keşfedeceksin. Simüle edilmiş ortamların gerçekmiş gibi olduğunu hissettirmek için ses çok önemlidir.

Önceki görevlerde, Unity’nin nesnelerin birbirleriyle olan etkileşim biçimlerini simüle etmene nasıl yardımcı olduğunu gözlemledin. Ayrıca, Unity ses dalgalarının fiziksel fiziksel bir ortamda etkileşim kurma biçimlerini de simüle eder. İşitilebilir sesler, dinleyicinin kaynağa olan mesafesine ve hatta kaynak ile dinleyici arasındaki malzemenin fiziksel özelliklerine bağlı olarak değişir.

Bu giriş niteliğindeki öğretici içerik, Unity’nin ses ile gerçekçiliği geliştirme yollarını keşfetmene yardımcı olacaktır.

Adım 2: Başlamadan Önce
Unity projeni kurmak için:
 - **Unity Hub’ı** aç.
 - URP Şablonu (URP Template’nu kullanarak [yeni bir Unity projesi oluştur.](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196)
 - Unity Asset Store’da [Foundations of Audio assets](https://assetstore.unity.com/packages/essentials/tutorial-projects/foundations-of-audio-183075) kısmına git.
- [Assetleri indir ve Unity projene aktar.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4)
 Hepsi bu kadar! Artık hazır olduğuna göre, Sahne (Scene)’I açıp test edelim


**Aşama 3: Örnek Sahne (Scene)’yi Açmak ve Test Etmek**

 - Proje (Project) penceresinde Sahneler (Scenes) klasörünü aç ve örnek Sahne (Scene)’yi açmak için EssentialsAudioScene’ye çift tıkla.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-background-music/figures/B.4.1-1.png)

EssentialsAudioScene’in seçili olduğunu gösteren, Sahneler (Scenes) klasörünün açık olduğu Proje (Project) penceresi.

 - Sahne (Scene)’yi test etmek için Oynat (Play) seçeneğine tıkla.
- Sahne (Scene)’ye bakmak için fareni tıklamadan sürükle. Sahne (Scene) görünümünde gezinmek için WASD tuşlarını (W ileri, S geri, A sol, D sağ) kullan.
- Örnek Sahne (Scene)’yi test etmeyi durdurmak için Oynat (Play) seçeneğine tıkla

**Aşama 4: Boş bir GameObject Yaratmak**

Arka plan sesi olarak başka bir şeyin yerine geçen ve onu kapsayıcı olarak boş bir GameObject kullanacaksın. Bunu ayarlamak için;
 - Hiyerarşi (Hierarchy)’e sağ tıkla ve **Boş Oluştur (Create Empty)’e** bas.


![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-background-music/figures/B.4.1-2.png)

Boş Oluştur (Create Empty)’un seçili olduğu Hiyerarşi (Hierarchy) bağlam menüsü.
- Bu GameObject’I Denetçi (Inspector)’de “Music” olarak yeniden adlandır. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-background-music/figures/B.4.1-3.png)

Denetçi (Inspector) penceresinin, seçilen GameObject’in adını “Music” olarak gösteren üst kısmı.

- Denetçi (Inspector)’de, sağ kısımdaki üç noktayı seçip ardından Konumu Sıfırla (Reset Position)’yı seçerek konumunu sıfırla. Bu, GameObject merkezinin konumunu 0,0,0’a ayarlar ve onu Sahne (Scene)’nin merkezine hizalar.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-background-music/figures/B.4.1-4.png)

Denetçi (Inspector) penceresi, Bileşeni Dönüştür (Transform Component) ve üç nokta seçili biçimde sonuç menüsünde Konumu Sıfırla (Reset Position) görüntüleniyor.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-background-music/figures/B.4.1-5.png)

Sahne (Scene) görünümünde seçilen ve Gizmo’yu gösteren 0,0,0 konumuna sıfırlanan boş GameObject.

Adım 5: Boş GameObject’e Ses Eklemek
Bir GameObject’in Sahne (Scene)’nizde ses oynatmasını sağlamak için bir **Ses Kaynağı Bileşeni (Audio Source Component)** eklemen gerekir:
- Hiyerarşi (Hierarchy) penceresinde, Music GameObject’I seç.
- Denetçi (Inspector) penceresinde, Bileşen Ekle (Add Component) seçeneğini seç.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-background-music/figures/B.4.1-6.png)

Denetçi (Inspector) penceresindeki Bileşen Ekle (Add Component) seçeneği.
- Bir Ses Kaynağı (Audio Source) bulmak için, arama çubuğunu kullan ve seç.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-background-music/figures/B.4.1-7.png)

Seçili bir GameObject’e Ses Kaynağı Bileşeni (Audio Source Component) ekleniyor.
- Denetçi (Inspector)’deki Ses Kaynağı Bileşeni (Audio Source Component)’nde mevcut özellikleri incele.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-background-music/figures/B.4.1-8.png)
Ses Kaynağı Bileşeni (Audio Source Component) özellikleri.
Ses Kaynağı (Audio Source)’nın ses oynatması için bir Ses Klibi (Audio Clip) ekleyeceksin.
- Proje (Project) penceresinde, bu örnek projeyle sağlanan Ses Klipleri (Audio Clips)’ni görmek için Ses (Audio) klasörünü aç ve **Müzik (Music)’**i seç.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-background-music/figures/B.4.1-9.png)
Seçili Müzik Ses Klibi (Music Source Clip)’ni gösteren, Ses (Audio) klasörünün açık olduğu Proje (Project) penceresi.
- Denetçi (Inspector) penceresinde, Müzik Ses Klibi (Music Source Clip) için İçe Aktarma Ayarları (Import Settings)’nı göreceksin. Denetçi (Inspector) penceresinin altında, seçilen Ses Klibi (Audio Clip)’nin bir dalga formu şeklinde önizlemesini göreceksin. Eğer bunu görmüyorsan, Önizleme Paneli (Preview Panel)’ni ortaya çıkarmak için alttaki Önizleme Başlığı (Preview Header)’na tıkla ve yukarı doğru sürükle.
-  Müzik Ses Klibi (Music Audio Clip)’in önizlemesini yapmak için Oynat (Play) seçeneğini seç. Oynatmayı atlamak için dalga biçimine tıklayabilir ve dalga biçiminde gezinmek için tıklayıp sürükleyebilirsin. Önizlemeyi bitirdiğinde Oynat (Play) seçeneğini tekrar seç.
- Hiyerarşi (Hierarchy) penceresinde, Music GameObject’I seç.
- Denetçi (Inspector) penceresinde, Ses Klibi (Audio Clip)’nin sağındaki daire simgesine tıkla.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-background-music/figures/B.4.1-12.png)
AudioClip özelliğinde daire simgesinin vurgulandığı Ses Kaynağı Bileşeni (Audio Source Component)

- Seçim Penceresi (Select Window) açılacak ve bu Proje (Project)’deki mevcut olan tüm Ses Klipleri (Audio Clips)’ni gösterecektir. Müzik Ses Kaynağı (Music Audio Source) için Müzik Ses Klibi (Audio Source Clip)’ni Ses Klibi (Audio Clip) olarak ayarlamak için seç.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-background-music/figures/B.4.1-13.png)

Müzik (Music) klibi seçiliyken, onu Ses Kaynağı Bileşeni (Audio Source Component) için Ses Klibi (Audio Clip) olarak atayan Ses Klibi Seç (Select Audio Clip) kutusu.

- Test etmek için Oynat (Play) seçeneğini seç. Çalmakta olan herhangi bir müzik duymuyorsan, Oyun Görünümü (Game View)’nün Sesi Kapat (Mute Audio) seçeneğinin an itibariyle etkin olmadığına emin ol. Oynatma Modu (Play Mode)’ndayken sessiz ve sesli seçenekleri arasında geçiş yapmak için Sesi Kapat (Mute Audio) seçeneğini seç. 

**Not:** Hala müzik çaldığını duymuyorsan, Ses Kaynağı Bileşeni (Audio Source Component)’ndeki Harekete Geçtiğinde Çal (Play on Awake) ayarının etkinleştirildiğinden emin ol.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-background-music/figures/B.4.1-14.png)

**Aşama 6: Sonraki Adımlar**
Sesi bir Sahne (Scene)’ye dahil ettin, ancak ses ile yapabileceğin çok daha fazla seçenek var. Sonraki öğretici içerikte, gerçek zamanlı bir 3B projede sesin rolünü öğrenecek ve bir 3B ortam için gerçekçi bir ses yaratacaksın














