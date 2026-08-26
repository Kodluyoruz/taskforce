# 3D GameObject’lere Bileşenler Ekleyin

Bu eğitimde, bileşenlerin GameObjects'e nasıl işlevsellik eklediğini göreceksin. Burada çalışırken göreceğin bileşen olan RigidBody Bileşeni, GameObject'in boşukta süzülmesi yerine fiziksel bir nesne gibi davranmasını sağlar. Bu eğitimde:

- Oyun görünümünde eylemi görüntülemek için Ana Kamerayı konumlandırmak,
- GameObjects ve bileşenler arasındaki ilişkiyi keşfetmek,
- Denetçi penceresinde belirli bileşenleri tanımlamak,
- RigidBody bileşenini uygulayarak ve özelliklerini ayarlayarak bir 3D GameObject'e fiziksel özellikler eklemek,
- Oyun görünümünde bir Sahneyi önizlemek için Oynatma moduna girmek
- Unity'de 3B fizik ile denemeler, 
yapabileceksin.

**Aşama 1: Genel Bakış**

Bileşenler, bir GameObject'e davranış ve işlevsellik ekler. Dönüştürme Bileşenini kullandın - ama bu daha başlangıç! Bu eğitimde, yerçekimi ve diğer GameObjects ile etkileşime girebilmesi için bir GameObject’e fiziksel özellikler veren RigidBody Bileşeni adlı başka bir bileşen öğreneceksin. Bir GameObject'in yerçekimine nasıl tepki verdiğini 3D olarak izlemek için Ana Kamerayı da konumlandıracaksın.

**Aşama 2: Başlamadan Önce**
- Hiyerarşide yeni bir Küre GameObject’i oluştur.

![figures](https://github.com/Kodluyoruz/taskforce/blob/main/unity-essentials/add-components-3D-gameObjects/figures/B.2.3-1.png?raw=true)

Hiyerarşide oluşturulmuş yeni Küre GameObject’i.
- Küreyi Anıtın içindeki boşluğa taşı, böylece basamakların üzerinde “havanın ortasında” konumlanacak. Dönüştürme araçlarını, Denetçi’deki Dönüştürme Bileşenini veya her ikisini de kullanabilirsin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-components-3D-gameObjects/figures/B.2.3-2.png)

Merdivenlerin üst kenarına konumlandırılmış küçük bir küre ile Anıt GameObject’i.

**Aşama 3: Ana Kamerayı Konumlandırmak**
Her yeni Sahnede aşağıda gösterildiği gibi bir **kamera** vardır.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-components-3D-gameObjects/figures/B.2.3-3.png)

Sahnede gösterilen Ana Kamera simgesi ve konumu.

Hiyerarşide Ana Kamera olarak adlandırılan bu kamera, Sahneni yakalayarak Oyun görünümünde göründüğü gibi oyuncuya gösterir. Sahne görünümü, Sahneleri oluşturduğun yer olsa da Oyun görünümü, oyununun oyuncuya nasıl göründüğünün bir önizlemesidir.
Sahnendeki kamera, diğerleri gibi bir GameObject'tir. Seçtiğinde, Dönüştürme Bileşenini Denetçi penceresinde göreceksin. Bu ayarları diğer GameObject'lerde yaptığın gibi değiştirebilirsin. Bir kamerayı ölçeklendirmenin hiçbir etkisi olmayacağını unutma.

Bir kamera seçtiğinde, frustum adı verilen piramit benzeri bir şeklin ana hatlarını görürsün. Frustum, kameranın Sahnenin hangi bölümünü görüntülediğini gösterir. Frustum dışındaki hiçbir şey kamera tarafından görülmez.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-components-3D-gameObjects/figures/B.2.3-4.png)

Kamera seçildiğinde kameranın frustum’ı görünürdür.
 
Bir kamera seçildiğinde **(1),** Denetçi’deki **(2)** Kamera Bileşenini genişleterek Sahnede kameranın ne gördüğünü gösteren bir Kamera Önizleme penceresini **(3)** açabilirsin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-components-3D-gameObjects/figures/B.2.3-5.png)

Kamera özelliklerini gösteren Denetçi ve etkinleştirildiğinde kamera önizlemesini gösteren sahne penceresi.

Kamerayı topu ve merdivenleri “görebileceği” bir yere konumlandır.

İpucu: Hiyerarşi penceresinde kamerayı seçip ardından Ctrl+Shift+F tuşlarına basarak mevcut sahne görünümünle hizalanacak şekilde kamerayı da hareket ettirebilirsin.

Oyunu çalıştırmak için oynat düğmesini seç. Şu an hiçbir şeyin olmadığını fark edeceksin. Bunun nedeni, küreye hala daha oyunun fiziği ile nasıl etkileşime girmesi gerektiğini söyleyen bir bileşen eklemen gerekmesidir. Bu durumda, yer çekimine tepki göstermesi için küreyi solid (katı madde) haline getirmen gerekiyor.

**Aşama 4: Küreyi Solid Hale Getirmek**

Küp içinde bir küre oluşturduğunu hatırlıyor musun? Fiziksel dünyadaki nesneler bu şekilde diğer nesnelerin içinde bulunmazlar, ancak Unity Sahnesi’nde varsayılan olarak GameObjects'in kütlesi yoktur veya yer çekimine tepki vermez. Bir GameObject'in gerçek dünyadaki fiziksel bir nesne gibi davranmasını sağlamak için bir RigidBody Bileşeni ekleyerek ona fiziksel özellikler verebilirsin.

Küre GameObject’e RigidBody Bileşeni eklemek için:

- Hiyerarşi penceresinde Küreyi seç. 
- Denetçi penceresinde Bileşen Ekle düğmesini seç.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-components-3D-gameObjects/figures/B.2.3-6.png)

Denetçi’deki Bileşen Ekle düğmesi

- Bir **Rigidbody** bileşeni bulmak için arama çubuğunu kullan ve bileşeni seç. **Rigidbody** ve Rigidbody 2D olmak üzere iki seçeneğin mevcut olduğunu unutma. 2D olanı değil, **Rigidbody** bileşenini seçtiğinden emin ol.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-components-3D-gameObjects/figures/B.2.3-7.png)

Seçilmiş GameObject’e Rigidbody Bileşeni eklenişi

- Eğer halihazırda seçili değilse, Denetçi’deki RigidBody Bileşeni’nde Yerçekimini Kullan’ı seç. 

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/add-components-3D-gameObjects/figures/B.2.3-8.png)

Yerçekimini Kullan aktifleştirilmiş Rigidbody Bileşeni

- Bu özelliklerin etkisini görmek için Oyun görünümünü gösterecek olan Oynat düğmesine basarak oyunu başlat.

Top düşer ve basamaklardan aşağı yuvarlanır. Yuvarlanmazsa, dönüştürme araçlarını kullanarak yeni bir konuma taşımayı dene ve oyunu yeniden çalıştır.

**Not:** Daha fazla bilgi için [bu eğitimdeki Fiziğin En İyi Uygulamaları’na](https://learn.unity.com/tutorial/physics-best-practices) bak.

**Aşama 5: Düşen GameObject’ler ile Deney Yapmak**
Bu alıştırmanın varyasyonlarını dene. İstediğin sonuçları elde etmek için Sphere GameObject ve Ana Kamerayı hareket ettir.

- Deneyebileceğin daha pek çok şey:
- Değişken yüksekliklerde RigidBody Bileşenleri ile daha fazla küre eklemek.
- Diğer primitive’leri eklemek ve nasıl davrandıklarını görmek.
- Nesneleri farklı yerlere bırakmak.
- Anıt GameObject'i döndürmek.

Unutulmaması gereken bir nokta, oyun çalışırken seçili GameObject'in özelliklerini, değerlerini ve konumunu değiştirebileceğindir, ancak oyun durdurulduğunda tüm değerler oyun başlamadan önceki değerlerine geri dönecektir. Bu, çalışma zamanı sırasında farklı parametreleri test etmek için kullanışlıdır, fakat değişikliklerin kalıcı olmasını istiyorsan, oyun durdurulduğunda değişiklikleri yapman gerekir.

**Aşama 6: Sıradaki Adımlar**

Bileşenler aracılığıyla GameObjects'e nasıl özellikler ekleyeceğini gördün ve GameObject'in Oyun görünümünde yer çekimine yanıt vermesi için RigidBody Bileşenini kullandın. Ayrıca Oyun görünümünün Sahne görünümünden nasıl farklı olduğunu gördün ve Oyun görünümünün görüntüsünü değiştirmek için Ana Kamerayı değiştirdin.

Ardından, GameObjects'in 3D alanda daha gerçekçi görünmesini sağlayan daha fazla bileşen ekleyeceksin.







