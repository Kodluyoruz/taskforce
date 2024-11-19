# Script Yazmaya Başlayın

Bu eğitimde sizler de:

- Unity’i deneyimlerken kodların rolünü belirlemeyi,
- IDE’lerin ne olduğunu ve sisteminizde hangi IDE’nin kurulu olduğunu keşfetmeyi,
- Yeni bir script component’i oluşturmayı,

öğreneceksiniz.

**Aşama 1: Genel Bakış**

Önceki eğitimlerde, özelliklerini ve davranışlarını değiştirmek için GameObject’lere bileşenler eklediniz. Unity Editor’de sağlanan bileşenleri kullanmanın yanı sıra, C# dilinde özel script dosyaları yazarak GameObject’lerin özelliklerini ve davranışlarını geliştirebilirsiniz.

Bu eğitimde, basit bir “Hello World” bileşeni oluşturacak ve onu bir GameObject’e ekleyeceksiniz. Herhangi bir GameObject için Inspector penceresinde görünenleri değiştirmek için script’leri nasıl kullanabileceğinizi göreceksiniz. Yol boyunca Unity’de programlama için kullanılan araçlar ve pencereler hakkında bilgi edineceksiniz.

**Aşama 2: Entegre Geliştirme Ortamları (IDE’ler)**
**IDE nedir?**

[Visual Studio](https://visualstudio.microsoft.com/) ve [Rider](https://www.jetbrains.com/rider/) gibi Entegre Geliştirme Ortamları (IDE’ler), programcıların mümkün olduğunca verimli bir şekilde kod yazmasına ve hata ayıklamasına olanak tanır. IDE’ler çok çeşitli dillerde (örneğin C#, Java, Javascript, Python vb.) programlamayı destekler; Unity geliştirme tipik olarak Visual Studio kullanılarak C#’ta (“Si Şarp” olarak telaffuz edilir) yapılır.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-started-with-scripts/figures/Foundations_UnityRT3D_1.2.5.1_visual-studio.png)

Microsoft Visual Studio adlı IDE’de gösterilen C# kodu. Kod metni çok renklidir ve bazı kelimeler mavi,yeşil,sarı,mor ve beyaz renklidir.

IDE’lerin bazı yerleşik geliştiricilerimiz tarafından nasıl kullanıldığını öğrenmek için aşağıdaki videoyu izleyin.

Basit bir metin belgesinde kod yazmak teknik olarak mümkündür, ancak IDE’ler geliştiricilere programlamayı kolaylaştırmak için bir dizi araç sağlar. Örneğin, çoğu IDE, bir şey yanlış kodlandığında vurgulamak için hata algılama, bir hatanın kaynağını bulmaya yardımcı olacak bir debugger, kodun daha kolay okunmasını sağlamak için syntax highlighting(sözdizimi vurgulama) ve kod satırlarını anında doldurmak için kod tamamlama içerir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-started-with-scripts/figures/Foundations_UnityRT3D_1.2.5.2_error-checking.png)

Visual Studio IDE’de gösterilen C# kodu. İlk kod satırının sonunda, iki nokta üst üste işaretinin altında, kodda bir hata olduğunu gösteren kırmızı dalgalı bir alt çizgi vardır. Açılır pencerede kırmızı alt çizginin yanında iki nokta üst üste yerine noktalı virgül beklendiğine dair bir öneri vardır.

Unity, Visual Studio ile birlikte gelir ve tamamen ayrı bir IDE’de olduğundan çok daha kolay kodlama ve hata ayıklama(debug) yapmak için Visual Studio ile bütünleşmiştir.

**Aşama 3: IDE’nizi Kontrol Edin**

Visual Studio, genellikle ilk Unity kurulumu sırasında bir modül olarak kurulur. IDE’nizi Visual Studio’ya ayarlamak için bu adımları izleyin ve gerekirse Unity Hub’ı kullanarak Visual Studio Community modülünü kurun. Unity diğer IDE’leri destekleyebilmesine rağmen, bu eğitim Visual Studio’ya dayanmaktadır.


**Aşama 4: Yeni bir script oluşturun**

İlk script’inizi oluşturalım.
-  **Challenge: The Floor is Lava!** Için oluşturduğunuz 3D projeyi açın. Bu projeyi script geliştirerek daha da özelleştirme fırsatınız olacak.
-  Hierarchy’de sağ tıklayarak **Create Empty** butonunu seçip Sahne’de yeni bir GameObject oluşturun.
-  Inspector penceresini kullanarak yeni GameObject’in adını ScriptObject olarak değiştirin.
-  Yeni GameObject’iniz seçiliyken, Inspector penceresinde **Add Component’i** seçin. Ardından **New Script** seçeneğini seçin.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-started-with-scripts/figures/B.3.1-NewScript.png)

Yeni bir script oluşturma
-  Yeni bir ortamda script yazmanın ilk dersi “Hello World!” bu yeni script ile yapacağımız şey budur. Yeni scripti “HelloWorld” olarak adlandırın ve **Create and Add butonunu** seçin.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-started-with-scripts/figures/B.3.1_img1.png)

Inspector penceresinde GameObject’e Hello World isimli yeni bir script ekleme. 
-  Script dosyası artık bir component olarak boş GameObject’e eklenir ve projenizin Assets klasöründe de görünür.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-started-with-scripts/figures/B.3.1_img2.png)
Script dosyası artık bir component olarak boş GameObject’e eklenir ve projenizin Assets klasöründe de görünür.

-  Scriptinizi Visual Studio’da açmak için üzerine çift tıklayın. 

**Aşama 5: Sonraki Adımlar**

Boş bir GameObject’e eklenen yeni script component’ini kodlamaya başlamaya hazırsınız. Ardından, Visual Studio’yu açtığınızda gördüğünüz varsayılan script’i açıklayacağız.





