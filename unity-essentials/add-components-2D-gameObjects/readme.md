# 2D GameObject’lere Bileşenler Ekleyin

Bu eğitimde, bileşenlerin Sprite’lara nasıl işlevsellik eklediğini göreceksiniz. Burada çalışırken göreceğiniz bileşen olan RigidBody2D bileşeni, Sprite’ın fiziksel bir nesne gibi davranmasını sağlar. Bu eğitimde şunları yapacaksınız:

- Game görünümünde Main Camera’yı konumlandırma.
- 2D GameObject’e bir RigidBody2D bileşeni ekleyerek fiziksel özellikler ekleme.
- Unity’de 2D fizikleri deneyimleme.

**Aşama 1: Genel Bakış**
Component‘ler bir GameObject’e davranış ve işlevsellik ekler. GameObject’ler, yeni bir Sprite oluşturduğunuzda hemen görebileceğiniz bir Transform ve Sprite Renderer component’leri gibi varsayılan component’lere sahiptir. Bu eğitimde, yerçekimi ve diğer Sprite’larla etkileşime girebilmesi için Sprite’a fiziksel özellikler veren RigidBody2D componenti adlı başka bir component ekleyeceksiniz. Bir Sprite’ın yerçekimine nasıl tepki verdiğini 2D olarak izlemek için Main Camera’yı konumlandıracaksınız.


**Aşama 2: Başlamadan Önce**
Önceki eğitimde, Circle isminde bir Sprite GameObject’i oluşturmuştunuz. Bu eğitimde aynı Sprite’ı kullanacağız. Önceki eğitimi tamamlamadıysanız ya da Scene’i kaydetmeyi unuttuysanız, önceki eğitimde yaptığınız gibi Circle Sprite’ı oluşturun.



**Aşama 3: Main Camera’yı Konumlandırm**a
Her yeni Scene’de, Scene görünümünde bir kamera simgesiyle gösterilen bir camera bulunur. Hierarchy’de Main Camera olarak adlandırılan bu kamera, sahnenizi yakalar ve Game view’de göründüğü gibi oyuncuya gösterir.
1.  Hierarchy penceresinden Main Camera’yı seçin.
2.  Circle’ın aşağıya doğru düştüğünü görebilmek için Main Camera’yı hareket ettirin. Dönüştürme araçlarını kullanarak Main Camera’yı diğer Sprite’lar gibi 2D alanda hareket ettirebilir ve döndürebilirsiniz.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-components-2D-gameObjects/figures/B.5.2-1.png)

Dönüştürme araçları: Hareket Ettir, Döndür, Ölçeklendir

**Not**: Scene görünümünde, pencerenin üst kısmındaki 2D butonunu seçerek 2D ve 3D görünümleri arasında geçiş yapabilirsiniz.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-components-2D-gameObjects/figures/B.5.2-2.png)

Scene penceresinin üst kısmındaki 2D düğmesi, 2D ve 3D görünümleri arasında geçiş yapmanızı sağlar.

**Aşama 4: Sprite’a kütle verme**
- Hierarchy penceresinden, Circle’ı seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-components-2D-gameObjects/figures/B.5.2-3.png)

Circle GameObject’i seçiliyken Hierarchy penceresi.

- Inspector penceresinden Add Component butonunu seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-components-2D-gameObjects/figures/B.5.2-4.png)

Bir GameObject’e ek componentler eklemek için seçebileceğiniz Inspector panelindeki Add Component butonu. 
- Bir **Rigidbody 2D** componenti bulmak için arama çubuğunu kullanın ve onu seçin. **Rigidbody** ve **Rigidbody 2D** olmak üzere iki seçeneğin mevcut olduğunu unutmayın. Normal olanı(3D) değil, **Rigidbody 2D** bileşenini seçtiğinizden emin olun.  

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-components-2D-gameObjects/figures/B.5.2-5.png)

 Rigidbody2D component’i seçiliyken Add Component butonu aktif

- Bu efektlerin etkisini görmek için Game görünümünü gösterecek olan Play butonuna basarak oyunu başlatın.
Sprite düşmeye başlayacak ve siz oyunu durdurana kadar düşmeye devam edecek.
- Ekranın üst kısmındaki Play butonuna tıklayarak oyunu tekrar durdurun.

**Aşama 5: Collider Ekleme**

Bir cismin başka bir cisme çarpması, bir cismin sonsuzluğa düşmesinden daha eğlenceli olduğu için, cisimlere fiziksel uzayda şekil veren **collider**’lardan bahsedelim. Bu kursun 3D projesinde, oluşturduğunuz ilkel GameObject’lerde zaten yerleşik collider’lar vardı. Bir görüntüden oluşturduğunuz Sprite için collider’ı kendiniz eklemelisiniz.

RigidBody2D componenti ayrıca bir Sprite’a fiziksel özellikleri sağlar, peki ya fark nedir? Rigidbody özellikleri, GameObject’in yerçekimi ve hava yoğunluğu ile nasıl etkileştiğini kontrol eder. Örneğin, Circle Sprite’ındaki Rigidbody özellikleri onu düşürür, ancak başka bir GameObject’e çarptığında içinden geçer. Collider componenti, nesnelerin birbirleriyle nasıl etkileşime geçtiğini belirleyen ek özellikler ekler. Circle’a bir Collider Component’i ve zemini temsil etmek için altına bir Sprite ekleyerek, Circle yere ulaştığında aşağı düşmesini durduracaktır.

- Hierarchy paneline sağ tıklayarak ve **2D Object > Sprite Shape** ‘i seçerek yeni bir Sprite oluşturun.
- Yeni Sprite Shape’i seçin, Ground olarak yeniden adlandırın ve Y Scale özelliğini 0.1 olarak değiştirin.

![figures](https://github.com/Kodluyoruz/taskforce/blob/main/unity-essentials/add-components-2D-gameObjects/figures/B.5.2-6.png?raw=true)

 Sprite Shape, Inspector panelinde Ground olarak yeniden adlandırıldı ve Y Scale değeri 0.1 olarak ayarlandı.

- Ground Sprite’a bir Rigidbody 2D component’i ekleyin.
- Oyunu başlatın. Hem Circle hem de Ground düşecek. Zemini yerinde tutmak için, Ground Sprite’ın Rigidbody2D componentine gidin, Constraints’i genişletin ve X, Y ve Z eksenleri için Freeze Position kutusunu seçin. Bu seçenekler, Sprite’a oyun çalışırken yerinde kalması ve düşmemesi gerektiğini söyleyecektir.
- Oyunu tekrar çalıştırın. Circle’ın Ground’a düştüğünü göreceksin, ama onu geçmeye devam edecek. Bunun nedeni, iki nesnenin hala fiziksel sınırları olmamasıdır. Bu nedenle Circle hala Ground’u geçebilir. Collider Component’leri bu durumu düzeltecektir.
- Circle Sprite’ı seçin ve Inspector penceresinde Add Component butonuna tıklayın. Bir Circle Collider 2D ekleyin ve varsayılan ayarları olduğu gibi bırakın.
- Box Collider 2D componenti ekleyerek Ground Sprite’ı için aynı işlemi uygulayın.
- Oyunu başlatın. Circle, Ground’un üstüne düşecek ve duracak.


**Aşama 6: Düşen Sprite’larla Deney Yapma**

Bu alıştırmanın varyasyonlarını deneyin. İstediğiniz sonuçları elde etmek için Circle Sprite ve Main Camera’yı hareket ettirin.

Bunları deneyebilirsiniz:

- Farklı yüksekliklerde daha fazla daire ekleyin.
- Küçük görüntüleri içe aktararak farklı şekillerde başka Sprite'lar ekleyin.
- Nesneleri farklı yerlere bırakın.

Unutulmaması gereken bir şey, oyun çalışırken seçilen bir Sprite'ın özelliklerini değiştirebileceğinizdir, ancak oyun durdurulduğunda tüm değerler oyun başlamadan önceki değerlerine geri dönecektir. Bu, çalışma zamanı sırasında farklı parametreleri test etmek için kullanışlıdır, ancak değişikliklerin kalıcı olmasını istiyorsanız, değişiklikleri oyun çalışmıyorken yapmanız gerekir.

**Aşama 7: Sonraki Adımlar**

Component’ler aracılığıyla Sprite'lara nasıl özellikler ekleyeceğinizi gördünüz ve Game görünümünde bir Sprite'ın yerçekimine yanıt vermesi için RigidBody 2D component’ini kullandınız. Ayrıca Game görünümünün Scene görünümünden nasıl farklı olduğunu gördünüz ve Game görünümünün görüntüsünü değiştirmek için Main Camera’yı hareket ettirdiniz.

Bir 3D projede olduğu gibi, componentleri özelleştirmek ve GameObject'leriniz üzerinde daha da fazla kontrol sahibi olmak için script’leri düzenleyebilir ve oluşturabilirsiniz. Dilerseniz bu 2D projede scriptlere başlama eğitimini inceleyebilir ve kendi script’inizi oluşturabilirsiniz.
Ardından, 2D mücadelesine hazırlık olması için Unity Asset Store'da 2D assetleri keşfedeceksiniz. 





