# 3B Sahne (Scene)’de GameObjects ile Çalışma

Bu öğretici içerikte, Unity Düzenleyici (Unity Editor)’de Microgames ile deneyimlemiş olabileceğinden daha özgür çalışmaya başlayacaksın. Sıfırdan ile oluşturduğun yeni bir Unity projesini ve 3B sahneyi kullanarak, GameObjects ile çalışacak ve Unity Düzenleyici (Unity Editor)’de bunları manipüle etmenin çeşitli yollarını keşfedeceksin. 

Bu öğretici içerikte;

- Yeni 3B GameObject’leri oluşturacak,
- Unity Düzenleyici (Unity Editor)’nin hem Hiyerarşi (Hierarchy) hem de Denetçi Pencereleri (Inspector Window)’daki 3B nesneleri seçeceksin
- Denetçi Penceresi (Inspector Window)’daki Bileşeni Dönüştür (Transform Component)’ü ve sayısal değerleri kullanarak 3B nesneleri taşıyacak, döndürecek ve ölçeklendireceksin..
- Unity dönüştürme araçlarını kullanarak Sahne (Scene) görünümünde 3B nesneleri taşıyacak, döndürecek ve ölçeklendireceksin.
- Karmaşık GameObject’ler oluşturmak için Hiyerarşi (Hierarchy) penceresini kullanarak üst öge-alt öge ilişkilerinde GameObject’leri bağlayacaksın.
- Denetçi (Inspector)’da görüntülenen özellikler ile Sahne (Scene)’de GameObject’lerin görüntülenmesi arasındaki ilişkiyi belirleyeceksin.

**Aşama 1: Genel İnceleme**

Bu öğretici içerikte, bir Sahne (Scene) içerisinde GameObject’leri oluşturken ve manipüle ederken Unity Düzenleyici (Unity Editor)’de öğrendiklerini uygulayacaksın. GameObject’lerini düzenlemek ve yapılandırmak için Hiyerarşi (Hierarchy) ve Denetçi (Inspector) pencerelerini nasıl kullanacağını öğrendikçe temel becerilerini daha fazla geliştireceksin.

**Aşama 2: Başlamadan Önce**

**Düzenleyici (Editor) Kontrollerine Aşina Olmak**

Bu öğretici içerikte, bir Küçük Oyun (Microgame)’da ve önceki Unity Temel Bilgileri (Unity Essentials) görevinde öğrendiğin teknikleri kullanmaya başlayacaksın. Sonraki eğitim projelerini incelerken GameObject’leri manipüle edebileceğini ve 3B alanda gezebileceğini varsayıyoruz.
İncelemek adına, temel teknikler, ipuçları ve püf noktalar için [Explore the Unity Editor bölümüne](https://learn.unity.com/tutorial/explore-the-unity-editor-1) bak.


**Bir Küçük Oyun (Microgame) Dene**

Unity’de yeniyseniz ve Unity Hub’da bulunan Küçük Oyun (Microgame)’lerden birindeki eğitimi henüz almadıysanız, ki almanızı şiddetle tavsiye ediyoruz — özellikle LEGO® Küçük Oyun (Microgame)’i! Bu Küçük Oyun (Microgame)’lerden herhangi biri, Unity Düzenleyici (Unity Editor)’a iyi bir başlangıç yapmanızı sağlayacaktır.

**Not:** Eğer LEGO® Küçük Oyun (Microgame)’u tamamladıysanız, Unity Düzenleyici (Editor)’da fiziksel LEGO® parçalarını kullanma deneyimini yeniden oluşturan bazı özel işlevleri kullandın.  Burada özel LEGO geliştirmelerini görmeyeceksin – özelleştirilmemiş Unity Düzenleyici (Unity Editor)’yi kullanacaksın.

**Aşama 3: Yeni bir 3B Proje ve Sahne (Scene) Oluştur**

**Önemli:** Önceki görevde “Essentials 3D project” adlı bir Unity projesi oluşturduysan, o projeyi Unity Hub’dan aç ve bu adımı atla.
 Bu öğretici içerik için yeni bir Unity projesi oluşturman gerekiyorsa, şu adımları izle:
 1.**Unity Hub’ı** aç.
 2.**3B Şablon’u** kullanarak [yeni bir Unity projesi oluştur.](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196) Bu projeye “Essentials 3D project” adını ver.
 **Not:** İlk kez kullanıyorsan, 3B Şablonu indirmeniz için bir istem görebilirsiniz. Seçtiğinizde 3B kartta bu istemi arayın.
 3.Boş Sahne (Scene)’nde basit bir küp oluştur. Hiyerarşi (Hierarchy)’de boş bir bölüme sağ tıkla ve **3B Nesne (3D Object) > Küp (Cube)’ü** seç.
 
**Aşama 4: Varsayılan 3B Sahne**

 Küçük Oyun (Microgame)’lerde, hareket eden ve komutlarınıza yanıt veren karakterlerle, ilerledikleri sabit bir zeminle, oyunu ilginç kılmak için hedefler ve engellerle hali hazırda senin için oluşturulmuş bir Sahne (Scene)’de başladın. Ancak şimdi, uçsuz bucaksız, sınırsız ve boş bir alanda çalışıyorsun. Zeminin sadece referans için olduğu gibi gözüken bir düzlem – sabit bir yüzey bile değil.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-3DScene/figures/B.2.1_img1.png)

Varsayılan 3B Sahne (Scene)’nin Hiyerarşi (Hierarchy)’si ve Sahne (Scene) görünümü pencereleri.

Varsayılan 3B Sahne (Scene), Hiyerarşi (Hierarchy) penceresinde listelenen iki önemli GameObject’ler ile donatılmış olarak gelir: 

- **Ana Kamera (Main Camera);** Oyuncularının Oyun görünümünde ne göreceğini kontrol eder (Oyun Modu (Play Mode))
- **Yönlü Işık (Directional Light);** Güneşi simüle eder ve gerçekçi görsel efektler oluşturmak için GameObject’ini 3B yansıtacak ışık sağlar.
 
Sahne (Scene)’ne bazı GameObject’ler ekledikten sonra bunlara geri döneceğiz – böylece Ana Kamera (Main Camera)’nın görecek bir şeyi ve Yönlü Işık (Directional Light)’ın yansıtacak bir şeyi olacak. 

**Aşama 5: Denetçi (Inspector)’de GameObject’ler ile Çalışma**

Denetçi Penceresi (Inspector Window), GameObject’ler ve diğer nesne türlerinin özelliklerini görüntüleyeceğin ve değiştireceğin yerdir. Haydi başlayalım!  

1.Sahne (Scene) görünümünde, oluşturmuş olduğun küp GameObject’i seç.

2.Küp (Cube) seçiliyken, Denetçi Penceresi (Inspector Window)’nde GameObject’in özelliklerine bak.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-3DScene/figures/B.2.1_img3.png)

Bir GameObject’e bağlı farklı çeşitli bileşenleri gösteren bir Denetçi Penceresi (Inspector Window).

Denetçi (Inspector)’nin her bölümü, seçilen GameObject’in bir dizi özellik ve hareketi olan bir bileşen (component)’ı temsil eder. Bazı **bileşen (component)’ler**, burada gördüğün gibi basit olanlara yerleşiktir. Daha sonra GameObject’lere daha gelişmiş özellikler ve davranışlar kazandırmak için daha fazla bileşen (component)’ler ekleyeceksin.
 Küp seçiliyken, Dönüştürme Bileşeni (Transform Component), X, Y ve Z değerlerini kullanarak Küpün boyutunu, rotasyonunu ve konumunu Sahne (Scene)’de görüntüler. Varsayılan olarak, bu değerler metre birimindendir.
 **Not:** Unity, **Y-yukarı koordinat sistem (Y-up coordinate system)’ini** kullanır. Bu, Düzenleyici (Editor) ekranı alanında Y yönünün dikey olduğu, X ve Z’nin de yatay düzlemi temsil ettiği (kuzey, güney, doğu ve batı gibi) anlamına gelir. Bazı 3DsMax gibi uygulamalar, dikey olarak Z yönünü kullanırlar

3.Küp’e odaklanmak için klavyede F tuşuna bas. (Tüyo: Sahne (Scene) görünümü penceresi etkinleştirilmelidir; Pencereyi etkinleştirmek için Sahne (Scene) görünümünde bir GameObject seçebilir veya herhangi bir yere sağ tıklayabilirsin.)

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-3DScene/figures/B.2.1_img4.png)

Sahne (Scene) görünümündeki basit küp

Varsayılan biçimde, Yönlendirme aracı seçilidir ve Gizmo’su küpün ortasında bulunur. Yön okları, her boyutun pozitif yönünü gösterir. Çapları renk kodludur. Sahne (Scene) görünümünün sağ üst köşesindeki Sahne (Scene) Gizmo’suna bakarak her zaman yönünü görebilirsin. 


4.Küp (Cube) seçiliyken, Dönüştürme Bileşeni (Transform Component)’ndeki Ölçek (Scale)’in Y değerini 4 olarak değiştir. Kübün (Cube) yüksekliği 4 olarak değişecektir. Gerektiğinde uzaklaştır. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-3DScene/figures/B.2.1_img5.png)

Y boyutunda Ölçek (Scale) özelliğinden sonra Cube GameObject’I gösteren Sahne (Scene) görünümü ve Denetçi Penceresi (Inspector Window) 1’den 4’e değiştirildi. Şimdi, genişliği veya derinliği olduğundan dört kat daha uzun.

**Aşama 6: Hiyerarşi (Hierarchy)’deki GameObject’leri Organize Etmek**
Hiyerarşi (Hierarchy) penceresini GameObject’lerini düzenlemek ve birbirleriyle olan ilişkisini tanımlamak için kullanabilirsin. Daha karmaşık GameObject’ler oluşturmak için bunları Hiyerarşi (Hierarchy)’de gruplayabilirsin.

1.Küp’ün seçilmesi için Hiyerarşi (Hierarchy) penceresinde ona sağ tıkla.
2.**3B Nesne (3D Object) > Küre (Sphere)’yi seçin.**

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-3DScene/figures/B.2.1_img6.png)

Cube GameObject bağlam menüsü açık ve 3B Nesne (3D Object) > Küre (Sphere) seçili olarak gösterilen Hiyerarşi (Hierarchy) penceresi.

Hierarchy (Hiyerarşi)’de gösterildiği üzere, Küre, Küp’ün bir alt öğe GameObject’idir. Bu iki nesne artık birbiriyle bağlantılıdır. Onları bir birim olarak çalıştırabilirsin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-3DScene/figures/B.2.1_img7.png)

Küre (Sphere) GameObject’I doğrudan Küp (Cube) GameObject’in altında ve girintili olarak gösteren, üst öge – alt öge ilişkisini gösteren Hiyerarşi (Hierarchy) penceresi.

3.Bu Küre (Sphere), göremediğiniz Küp (Cube)’ün içerisindedir. Hiyerarşi (Hierarchy)’de Küre (Sphere)’I seç ve Gizmo görünecek, böylece onu Sahne (Scene) görünümünde Küp (Cube) dışında en azından kısmen görünen bir konuma taşıyabilirsin. Uzun olacak ve küresel olmayacak, çünkü ilk boyutları üst ögesine dayanıyordu.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-3DScene/figures/B.2.1_img8.png)

Küre (Sphere) GameObject, Küp’ün dışına taşındı.

4.Ana nesne olan Küp’ü seç ve taşı. Küp ve Küre birlikte hareket edecek. Nesneni de ölçeklendirmeyi ve döndürmeyi dene.

Üst öge – alt öge ilişkisini kaldırmak için, kök düzeyini belirtmek için Hiyerarşi (Hierarchy)’deki Küre’yi yukarı ve tamamen sola sürükle. Her iki GameObject de artık Hiyerarşi (Hierarchy)’de birbirinden bağımsız GameObject’ler olarak görünür. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-3DScene/figures/B.2.1_img9.png)

Bir nesne hareket ettirildiğinde görünen göstergeyi gösteren Hiyerarşi (Hierarchy); bu durumda Küre, kök seviyesine yerleştirilerek yukarıya ve tamamen sola hareket ettirilir.

**Aşama 7: Sonraki Adımlar**

Basit olarak adlandırılan taslak GameObject’leri Sahne (Scene)’ne nasıl ekleyeceğini gördün ve bu GameObject’lerin Hiyerarşi (Hierarchy) ve Denetçi Pencereleri (Inspector Window)’nde hangi yollarla temsil edildiğini gördün. Denetçi (Inspector)’de sayılarla veya Sahne (Scene) görünümünde bunları fiziksel olarak değiştirerek GameObject’leri iki şekilde nasıl taşıyacağını, yönlendireceğini ve ölçeklendireceğini gördün.

Artık pratik bir alıştırmaya hazırsın: basit olanları kullanarak bir yapı inşa etmek.



