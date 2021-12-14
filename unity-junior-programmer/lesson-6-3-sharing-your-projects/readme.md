## Genel Bakış:
Bu derste, projelerinizi Unity arayüzünün dışında oynanabilecek şekilde nasıl oluşturacağınızı öğreneceksiniz. Öncelikle projelerinizi yayınlayabilmek için gerekli dışa aktarma modüllerini kuracaksınız. Bundan sonra, projenizi Mac veya PC bilgisayarlarda oynatılacak bağımsız bir uygulama olarak oluşturacaksınız. Son olarak, projenizi WebGL için dışa aktaracak ve hatta arkadaşlarınıza ve ailenize gönderebilmeniz için bir oyun paylaşım sitesine yükleyeceksiniz.

**Proje Sonucu:**

Projeniz Mac/PC’de bağımsız bir uygulama olarak veya çevrimiçi olarak oynanmak üzere dışa aktarılacak.

### Adım 1: Dışa Aktarma Modüllerinin Kurulumu

Projelerimizi dışa aktarmadan önce, belirli platformlar için dışa aktarma yapmamızı sağlayacak “Dışa Aktarma Modüllerini” eklememiz gerekiyor.

- **Unity Hub’ı** açın ve **Installs** sekmesine gidin.
- Bu kursta kullandığınız Unity sürümünde **Add Modules** seçeneğini seçin.
- **WebGL Build Support** seçeneğini ve **Mac** veya **Windows** oluşturma desteğini seçin, ardından Done butonuna tıklayın ve kurulumun tamamlanmasını bekleyin.

### Adım 2: Oyununuzun Mac veya Windows için Oluşturulması

Artık dışa aktarma modüllerini yüklediğimize göre, bunları projelerimizden birinde kullanabilir ve dışa aktarabiliriz.

- Oluşturmak istediğiniz projeyi açın.(bir prototip veya kişisel projeniz olabilir)
- Unity içerisinde, File > Build Settings ‘e tıklayın. Ardından sahnenizi eklemek için **Add Open Scenes** seçeneğine tıklayın.
- **Player Settings** ‘e tıklayın ve “Windowed” veya “Resizable” yapmak ve “Display Resolution Dialog” etkinleştirmek isteyip istemediğiniz dahil olmak üzere istediğiniz ayarları yapın. 
Daha fazla bilgi için oynatıcı ayarlarını yapılandırmayla ilgili dökümanlara bakın.
- Build butonuna tıklayın, projenize bir isim verin ve Create with Code klasörünüzün içindeki  “**Builds**” adlı yeni bir klasöre kaydedin.
- **Test etmek için oyununuzu oynayın,** ardından isterseniz farklı ayarlarla yeniden oluşturun.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/lesson-6-3-sharing-your-projects/figures/CWC_B.5.4_image1.png)

### Adım 3: WebGL için Oyununuzu Oluşturma

Oyunlarınızın Mac veya Windows’ta dağıtmak oldukça zor olduğundan, WebGL için derleyerek projelerinizi çevrimiçi hale getirmek daha iyi bir fikirdir:

- **Build Settings** menüsünü yeniden açın, **WebGL** seçeneğini seçin ve ardından **Switch Platform‘a** tıklayın. 
**Not**: Bunu yalnızca WebGL Build Support dışa aktarma modülünü yüklediyseniz yapabilirsiniz.
- Build’e tıklayın, daha sonra “Builds” klasörüne isminde  “ - WebGL” olacak şekilde kaydedin.
- Projenizi çalıştırmak için **index.html’e** tıklamayı deneyin. (farklı tarayıcılarda çalıştırmayı denemeniz gerekebilir.)
- WebGL build klasörünüze sağ tıklayın ve **.zip dosyasına sıkıştırın.**
- Eğer isterseniz, oyununuzu [Unity Play](https://play.unity.com/) veya [itch.io](https://itch.io/) gibi oyun paylaşım sitelerine upload edin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/lesson-6-3-sharing-your-projects/figures/CWC_B.5.4_image2.png)

### Adım 4: Ders Özeti

**Yeni Kavramlar ve Beceriler**

- Dışa Aktarma modüllerini yükleme
- Mac/PC için oluşturma
- WebGL/HTML için oluşturma


