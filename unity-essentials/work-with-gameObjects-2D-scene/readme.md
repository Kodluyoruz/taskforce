# 2D Sahnede GameObjects ile Çalışma

Bu eğitimde:

- Yeni bir Sprite oluşturacaksın.
- Sprite Renderer bileşenini kullanarak bir Sprite görüntüsünü değiştireceksin.
- Unity Editor’ünün hem Hierarchy hem de Scene görünümü pencerelerinde 2D nesneleri seçeceksin.
- Inspector penceresindeki Transform bileşenindeki sayısal değerleri kullanarak 2D nesneleri taşıyıp, döndürüp, ölçeklendireceksin.
- Unity dönüştürücü araçlarını kullanarak Scene görünümündeki 2D nesneleri taşıyıp, döndürüp, ölçeklendireceksin.
- Inspector’da görüntülenen özellikler ile Scene’de GameObject’lerin görüntülenmesi arasındaki ilişkiyi belirleyeceksin.
- Scene’de bir Sprite’ı manipüle etmek için Rect Transform aracını kullanacaksın.
- Sprite’ın renk tonlarını değiştireceksin.

**Aşama 1: Genel Bakış**

3D projeler gibi 2D projeler de oluşturduğun deneyimdeki her şeyi kapsayan **Scene**’lere düzenlenir. 2D Scene’lerdeki GameObject’lere Sprite denir. Sprite’lar genellikle interaktif 2D GameObject’ler olarak kullanılmasını sağlayan belirli özellikli içe aktarılmış görüntülerdir. 

2D proje, aslında bir 3D alanın yandan görünümüdür, bu nedenle son kullanıcı düz bir 2D görünüm görürken, üzerinde çalıştığın gerçek alan hala 3D’dir. Bu yaklaşım sana daha fazla esneklik sağlar ve Microsoft'tan [Ori and the Will of the Wisps](https://www.orithegame.com/) oyunu tarzında hibrit projeler oluşturmayı mümkün kılar.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-2D-scene/figures/B.5.1-1.png)

Microsoft’un Ori and the Will of the Wisps oyunundan bir görüntü 

Bu eğitimde, Sprite oluşturacak ve bunları Hierarchy ve Inspector pencerelerinde inceleyeceksin. Unity Transform araçlarını kullanarak bu Sprite'ları manipüle edecek ve Insprector’ın değişikliklerini nasıl yansıttığını gözlemleyeceksin.

**Aşama 2: Başlamadan Önce**

Bu proje boyunca, [Gerçek Zamanlı 3D Projenin Temelleri](https://learn.unity.com/project/foundations-of-real-time-3d)'nde kapsanan bilgilerden yararlanıyoruz. Önce o projeyi tamamlamanı öneririz.

Unity projeni kurmak için:
- **Unity Hub**’ı aç.
- ** 2D Template**’i kullanarak [yeni bir Unity projesi oluştur.](https://learn.unity.com/tutorial/project-setup-processes#60f6aedeedbc2a7e96802196)

**Aşama 3: İlk Sprite’ını Oluştur**

Hierarchy penceresinde, yer tutucu görevi görecek boş bir Sprite oluşturmak için sağ tıkla ve **2D Object > Sprite**'ı seç. Bu noktada, Scene görünümünde Sprite'ı göremezsin ancak ona bir görüntü atadığında görünür hale gelir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-2D-scene/figures/B.5.1-2.png)

2D Object > Sprite seçiliyken Hierarchy’de Create menüsü

Hierarchy’de, oluşturduğun Sprite'ı seç ve Inspector'da adını Circle olarak değiştir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-2D-scene/figures/B.5.1-3.png)

Sprite’ın adı “Circle” olarak değiştirilmiş Inspector paneli. 

Hierarchy’de adı göreceksin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-2D-scene/figures/B.5.1-4.png)

Sprite adının "Circle" olarak güncellendiği Hierarchy penceresi

Inspector’da Sprite Renderer bileşenini ara. Sprite özelliğinde, Assets panelini açmak için daire simgesini tıkla.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-2D-scene/figures/B.5.1-5.png)

prite GameObject'ine bağlı görüntünün değiştirilebildiği Sprite özelliğini gösteren Inspector paneli

Assets panelinde Knob görüntüsünü seç. Sprite artık Knob görüntüsünü içeriyor.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-2D-scene/figures/B.5.1-6.png)

Sprite GameObject'ine bağlı görüntünün seçilebildiği Sprite seçim penceresi

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-2D-scene/figures/B.5.1-7.png)

Bir görüntü Sprite GameObject'ine bağlandığında Scene, seçilen görüntüyü gösterecek şekilde güncellenir.

Transform bileşeni, seçili Sprite’ın Konum, Döndürme ve Ölçek değerlerini içerir. Bu değerleri Inspector'da değiştirebilir ve Scene'deki değişiklikleri görebilir veya Sprite'ı Scene’de manipüle edebilirsin ve bu değerler buna göre değişecektir. Circle Sprite’ını seç ve Scale değerlerini 10, 10, 1  olarak değiştir. Scene görünümünde Sprite değişimini izle.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-2D-scene/figures/B.5.1-8.png)

Scene’deki görüntünün ölçeğini değiştirmek için X=10, Y=10, Z=1 olarak ayarlanmış Inspector’daki Scale seçenekleri

**Not**: Unity, 2D ve 3D’de geçerli olan bir Y-yukarı koordinat sistemi kullanır. Y yukarı ve Z oyuncunun bakış açısına doğru ve uzaktadır. Bu nedenle, Z yönündeki ölçek değişiklikleri oyuncu tarafından görülmez. Z'deki konum değişiklikleri, Sprite'ları birbirinin arkasına veya önüne yerleştirir (diğer uygulamalardaki Z-sırası gibi).

Toolbar’da Move aracını seç (kısayol tuşu W) ve Sprite'ı Scene’de yeni bir konuma taşımak için fareni kullan.

Move aracı etkinleştirildiğinde ve GameObject seçildiğinde Sprite üzerinde görüntülenen dönüştürme aygıtı. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-2D-scene/figures/B.5.1-9.png)

Yeni konumun Transform bileşeninin Position özelliklerine nasıl yansıtıldığına dikkat et. (Not: senin sonuçların farklı olabilir.)

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-2D-scene/figures/B.5.1-10.png)

Yeni konum, Transform bileşeninin Position özelliklerine yansıtılmış. 

**Rect Transform aracı,** Sprite'larının şeklini ve konumunu değiştirmek için hızlı ve kolay bir yol sağlar. Bir Sprite seçip Toolbar’da Rect Transform aracını seçtiğinde (kısayol tuşu T), köşelerde tutma noktaları olan dikdörtgen bir sınır göreceksin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-2D-scene/figures/B.5.1-11.png)

Rect Transform aracı etkinleştirildiğinde görüntülenen, Sprite'ta köşelerinde tutma noktaları olan dikdörtgen bir sınır
Nesneyi herhangi bir noktasından fare ile sürükleyerek Sprite'ı Scene etrafında hareket ettir. Köşelerdeki tutamaçları sürükleyerek Sprite'ın ölçeğini X veya Y boyutlarında ayarla.

**Aşama 4 Sprite’ın rengini değiştirme**

Sprite'ın rengini değiştirmek için Sprite’ı seç, ardından Sprite Renderer bileşeninde Color özelliğini seç.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-2D-scene/figures/B.5.1-12.png)
Sprite'ın renginin değiştirilebildiği Sprite Renderer bileşenindeki Color özelliği

Sprite’ın renk tonunu değiştirmek için Color seçiciyi kullan.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/work-with-gameObjects-2D-scene/figures/B.5.1-13.png)
 Color özelliğine göre değiştirilmiş bir Sprite renk tonu


**Aşama 5 Bir sonraki adımlar**
Primitives olarak adlandırılan basit GameObject'leri Scene’ine nasıl ekleyeceğini gördün ve bu GameObject'lerin Hierarchy ve Inspector pencerelerinde nasıl temsil edildiğini gördün. GameObject’leri nasıl hareket ettireceğini, döndüreceğini ve ölçeklendireceğini iki yolda gördün: Inspector’daki sayılarla ya da Scene görünümünde onları fiziksel olarak değiştirerek.

Şimdi, Sprite'lara ekleyebileceğin bileşenlere bakalım.









