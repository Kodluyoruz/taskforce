# 2D Asset’leri Edinmek

Bu eğitimde, 2D Dijital İçerik Üretme (DCC) araçlarını açıklayacağız ve bundan sonraki eğitim için ihtiyaç duyacağın 2D assetleri edinmek için Unity Asset Store’da dolaşacağız.

Bu eğitimde, şunları yapabilir duruma geleceksin;

- Gerçek Zamanlı 2D üretimi destekleyen içerik üretme araçlarını açıklamak
- Bir web tarayıcısında Asset Store’u açmak 
- Asset Store’da arama yapmak ve bir aramayı filtrelemek
- Bir Unity hesabı aracılığıyla Asset Store’dan otomatik olarak bir varlığı içe aktarmak

**Aşama 1: Genel Bakış**

Bu eğitim, 3D Dijital İçerik Üretme araçları (3D DCC'ler) kullanılarak 3D asset’lerin nasıl oluşturulduğunu ve Unity Asset Store'dan bu araçlarla oluşturulan asset’leri nasıl alabileceğini açıklar. Bu asset’ler, Sprites ve Sprite koleksiyonlarını, Materyaller için görselleri, kullanıcı arayüzü bileşenlerini ve zamandan ve emekten tasarruf etmeni sağlayan diğer 2D asset’leri içerir. Bu eğitim projesinin alıştırmasında faydalı olacak bazı asset’leri nasıl içe aktaracağını göstereceğiz.


**Aşama 2: 2D DCC’leri**

**2D DCC’leri Nedir?**

Adobe [Photoshop,](https://www.adobe.com/products/photoshop.html) [Illustrator,](https://www.adobe.com/products/illustrator.html) [Substance Painter](https://www.substance3d.com/products/substance-painter/) ve [Gimp](https://www.gimp.org/) gibi 2D Dijital İçerik Üretme araçları (DCC’ler) sanatçıların iki boyutta texture’lar, arka planlar ve kullanıcı arayüzü (UI) öğeleri oluşturmasına imkan tanır.
 
Bu programlarda, sanatçılar kağıda yaptıkları gibi resimler çizer veya boyar; kalite kaybı olmadan ölçeklenebilen vektör sanatı oluşturur; katmanlar, filtreler ve efektlerle mevcut görüntüleri düzenler ve geliştirir; ve menüler, düğmeler ve metin dahil olmak üzere arayüzler veya düzenler tasarlar.

Aşağıda Gimp’te düzenlenmiş bir texture’ın örneği bulunuyor. 


Photoshop'ta gösterilen 2D texture. Resmin üst kısmında, çatı kiremitleri ve ahşap dış cephe kaplaması dahil olmak üzere binalar için texture’lar var. Texture’ın alt kısmında, bir "Sheriff" işareti ve bir "Old Bills Bank" işareti de dahil olmak üzere karikatürümsü vitrin işaretleri bulunur.

3D asset’lerde olduğu gibi, 2D asset’ler motora aktarılırlar projeye dahil edilirler.

Yukarıdaki resimde Photoshop'ta gösterilenle aynı "Sheriff" işaretine sahip bir binayı gösteren Unity'deki 3D Sahne. Şerif binasının dışında, bir geyik karakteri kumda duruyor ve elinde tırmık tutuyor.
Profesyonel sanatçıların fikirlerini Unity'de hayata geçirmek için DCC'leri nasıl kullandığını öğrenmek için aşağıdaki videoyu izle.

**Unity’deki 2D Asset’ler için diğer kaynaklar**
Unity, 2D asset’lerle çalışmak için özel olarak tasarlanmış yerleşik araçlara sahiptir. Örneğin, 2D Tilemap Editor, 2D seviyelerin hızlı bir şekilde tasarlanmasına yardımcı olur ve Sprite Editor, 2D animasyonlara giren çeşitli görüntüleri (“Sprites”) yönetir. 2D fizik, 2D ışıklar ve çok daha fazlası için özel sistemler vardır. 

Unity’nin Tilemap editörü

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-2D-assets/figures/tilemap.png)
Bir grid’e yerleştirilmiş renkli tuğla desenlerini gösteren “Tile Palette” adlı Unity penceresi.

Unity’nin Sprite Editörü

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-2D-assets/figures/sprite-editor.png)
Duran ve sonra koşan bir 2D karakterin görüntülerinin ilerlemesini gösteren “Sprite Editor” adlı Unity penceresi.

Unity’de 2D ışıklar
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-2D-assets/figures/2d-lights.png)
Bir ormanda duran ve ışığın yarıçapını ayarlamak için bir ışık simgesinin düzenlendiğini gösteren bir karakterin Unity'deki 2D Sahnesi.

[Unity Asset Store,](https://assetstore.unity.com/) Unity düşünülerek özel olarak tasarlanmış 2D sanat için değerli bir kaynaktır.

**Aşama 3: Alıştırma**
[Unity ile yapılmış en az bir proje örneğine bak](https://unity.com/madewith) ve 2D DCC'lerde yapılmış ve Unity'ye aktarılmış öğeleri tanımla. Gözlemlerini yorumlarda paylaş.

**Aşama 4: Asset Store’da Arama Yapmak**

- [Unity Asset Store’a git](https://assetstore.unity.com) (bu bağlantı varsayılan tarayıcında açılacak) ve Unity Kimliğinle giriş yap.
**İpucu**: Asset Store aracılığıyla edindiğin her şey Unity hesabına bağlanacak ve aynı Unity Kimliği ile oturum açtığın sürece Editör'de mevcut olacaktır.
- Asset Store arama sekmesinde mevcut Sprite asset’lerini aramak için “sprite” yaz.
- Filtre panelindeki Fiyat bölümünde **Bedava Asset’leri** seç.
- Materyalleri içeren bedava bir asset paketi seç. **Brackey**’s **Free 2D Mega Pack’ini** öneriyoruz.
- Asset’lerini indirmeye ve projene aktarmaya ilişkin eksiksiz ve güncel talimatlar için [Asset Store’dan asset’leri İçe Aktarma bölümüne göz at.](https://learn.unity.com/tutorial/project-setup-processes#60ed7a86edbc2a002520b6f4)
- İçe aktarma işlemi tamamlandığında, yeni Sprite'lardan birini seç ve onu Sahnene sürükle.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-2D-assets/figures/B.5.3-1.png)

**Aşama 6: Sıradaki Adımlar**
Bu eğitimde, Unity Asset Store'u bir kez daha deneyimledin ve ücretsiz Asset’leri indirip içe aktardın. Devamında, bu asset’leri veya Asset Store’da bulabileceğin diğer asset’leri kullanarak bir meydan okuma görevini kendi başına tamamlamanı öneririz.












