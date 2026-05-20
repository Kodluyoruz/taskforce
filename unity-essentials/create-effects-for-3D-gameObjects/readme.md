# 3D GameObject’ler için Efektler Oluşturmak

Bu Eğitimde, 3D bir Sahnede elde edebileceğin bazı görsel ve fiziksel efektleri keşfedeceksin. Bu eğitimde:

- Bir GameObject'e görsel özellikler eklemek için yeni bir Materyal oluşturmak ve yapılandırmak,
- Bir GameObject'e fiziksel özellikler eklemek için bir Fizik Materyali oluşturmak ve yapılandırmak,
- Directional Light’ı ayarlamak.

**Aşama 1: Genel Bakış**

**Materyaller**, nesnelerin yüzey özelliklerini ve bu yüzeylerin ışıkla nasıl etkileşime girdiğini tanımlayan bileşenlerdir. Yeni bir 3D Sahnede, güneşi simüle etmek için directional light  eklenmektedir. Bu eğitimde, bir GameObject'in görsel görünümünü değiştirmek için basit bir Materyal oluşturacak ve aynı zamanda  fiziksel özelliklerini değiştirmek için de bir Materyal kullanacaksın. Directional Light, görsel olarak gerçekçi bir efekt yaratmak için GameObject'in Materyaliden yansıyacaktır.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-1.png)

Bir Materyal oluşturma süreci: görüntüden bileşene ve Materyale

**Aşama 2: Başlamadan Önce**
Materyalin görsel görünümü bir görüntü dosyasından gelecektir. Aşağıdaki adımlarda kullanılan Herringbone_Brick_baseColor.png dosyasını bu eğitimin üst kısmındaki masthead'de **Eğitim Materyalleri'ni** seçerek indirebilirsin.


**Aşama 3: Resim Dosyasını İçe Aktarmak**
- Unity pencerelerini aşağıdaki örneklerle eşleştirmek için, Proje penceresinin sekmesine sağ tıkla ve henüz seçili değilse **İki Sütun Düzeni'ni** seç. Projenin klasörleri sol sütunda, seçilen klasörün içeriği sağ sütunda görünür.

- Proje penceresinde Asset’ler klasörüne sağ tıkla ve O**luştur > Materyal’i** seç.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-2.png)

Materyal seçeneği seçiliyken Oluştur menüsü

- Yeni Materyali BrickMaterial olarak yeniden adlandır. Yeni Materyal önizlemesi, ışığın Materyal ile birçok açıdan nasıl etkileşime girdiğini görebilmen için bir 3D küredir. Proje penceresinde Materyali seçtiğinde, Denetçinin yeniden boyutlandırılabilir bölmesinde daha doğru bir önizleme görünür.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-3.png)

BrickMaterial olarak yeniden adlandırılan yeni temel Materyali gösteren Asset’ler klasörü

- Herringbone_Brick_baseColor.png dosyasını bu eğitimin başında listelenen Dosyalar’dan indir.

- Dosyayı projeye aktarmak için, indirilen dosyayı Proje penceresinde gösterilen bu Unity projesinin Asset’ler klasörüne taşıman yeterli. Dosya gezgininde Asset’ler klasörünün içeriğini görmek için Asset’ler klasörünü sağ tıkla ve Gezginde Göster'i seç.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-4.png)

Gezginde Göster seçeneği seçilmiş Asset Klasörü menüsü.

- Bilgisayarının dosya gezgininde Herringbone_Brick_baseColor.png dosyasını Assets klasörüne taşı. Unity'ye döndüğünde onun simgesini göreceksin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-5.png)

Bilgisayarındaki dosya ve klasörlerin listesini görüntüleyen Proje penceresi

**Aşama 4: Tuğla Materyalini Oluşturmak**

- BrickMaterial’ı (Tuğla Materyali) seç. 

- Denetçi penceresinde Albedo özelliğinin yanındaki daire simgesini seç. Albedo, düz bir renge veya bir görüntüye dayalı olarak Materyalin yansıtıcı özelliklerini kapsar.

- Projendeki görseller listesinden **Herringbone_Brick_baseColor** seç.

Görüntü artık materyale **Albedo Haritası** olarak uygulanır ve Materyal önizlemesinde görünür.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-6.png)

Asset’ler klasöründe gösterildiği gibi Albedo haritası uygulanmış haliyle Materyalin önizlemesi.

- Sahnede yeni bir küp GameObject’i oluştur. 

- Sahne Görünümündeki küpün üzerine Materyali sürükle.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-7.png)

Küp artık tuğla Materyaline sahip.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-8.png)

Objeye Materyalin uygulanmış olduğu Sahnedeki GameObject.

Materyalin ölçeğini değiştirmek için küpü seç, Denetçide BrickMaterial Bileşenini aç ve X ve Y Tiling özelliklerini değiştir. Daha küçük sayılar, tuğlaların daha büyük görünmesini sağlar.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-9.png)

Tiling özelliğini gösteren Denetçi paneli

**Aşama 5: Bir Physic Materyali Eklemek**

Daha önce GameObject’e fiziksel özellikler vermesi için Rigidbody bileşenini eklemiştin. Ayrıca, Physic Materyali adı verilen başka bir Materyal türüyle ek fiziksel özellikler de ekleyebilirsin.
Physic Materyalleri ile bir cismi zıplatabilir, sürtünme ve sürükleme özelliklerini değiştirebilirsin. Bu özellikler cisim yerçekimi etkisi altındayken devreye girer. Physic Materyalleri, GameObject ağının görsel özelliklerini değiştirmez.

- Asset’ler penceresindeki Materyaller klasörüne sağ tıkla ve Oluştur > Physic Materyali’ni seç.
 
- Materyalin adını BouncyBall (Zıplayan Top) olarak değiştir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-10.png)

Seçilen Physic materyalini gösteren Oluştur menüsü

- Yeni Physic Materyali’ni seç.

- Denetçi penceresinden Zıplama değerini 1 ile değiştir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-11.png)

Physic Materyalinin özelliklerini gösteren Denetçi paneli ve 1 olarak ayarlanmış Zıplama özelliği 

- Küpü seç. Denetçi penceresinden Bileşen Ekle’yi seç ve RigidBody bileşenini ekle.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-12.png)

RigidBody Bileşeni seçiliyken Bileşen Ekle seçeneği aktif.

- Küpüne zaten bir Box Collider bileşeni eklenmiş olmalıdır. Bu bileşen, sahnede küpü oluşturduğunda otomatik olarak eklenir. Daha önceden oluşturduğun yeni Zıplama phycis materyalini Box Collider bileşenindeki Materyal yuvasına sürükle.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-13.png)

Denetçi panelindeki Materyal yuvasına sürüklenen BouncyBall Physic Materyalini eklenişi.

- Oyunu çalıştır. Şu an küpün platforma doğru düşmeli ve yere çarptığında biraz zıplamalı. 
- Zıplayan küpünü dene: döndürmeyi, kopyalamayı ve küpleri üst üste düşürmeyi dene!

**Aşama 6: Sahnedeki Aydınlatmayı Ayarlamak** 

Yeni bir 3D Sahnede, güneş ışığını simüle etmek için Directional Light adlı bir nesne dahil edilmiştir. Bu ışığı, diğer GameObject'ler gibi dönüştürme araçlarıyla değiştirebilirsin.

- Hiyerarşi penceresinde Directional Light seç.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-14.png)

GameObjects'leri olay yerinde gösteren hiyerarşi paneli seçilen Directional Light ile.

- Hareket ettir (“w” kısayolu) ve Döndür (“e” kısayolu) dönüştürme araçlarını kullanarak ışığın dönüşünü değiştir. Directional lights, belirli bir yönden gelen ışığın tüm sahneyi yıkadığı bir ışık kaynağını simüle eder. Işığın konumunu değiştirmenin sahnede bir etkisi olmaz ancak rotasyonu değiştirmek, Sahnedeki ışığın açısını değiştirecektir. Işığın açısını değiştirirken gökyüzünün ve ortam ışığının nasıl değiştiğini not et.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-effects-for-3D-gameObjects/figures/B.2.4-15.png)

Directional Light’ın konumu ve dönme ayarları ayarlandığında farklı aydınlatma ve gölge ayarlarını gösteren Sahne görünümündeki Anıt GameObject’i.  

Directional light ışık türlerinden sadece biridir. Diğer türleri merak ettiysen, Işık Türleri’ne bak.

**Aşama 7: Sıradaki Adımlar**

Bu eğitimde, GameObjects'in görsel olarak gerçekçi görünmesini sağlamak için Materyallerin ve ışığın birlikte nasıl çalıştığını gördün. Ayrıca bir GameObject'e fiziksel özellikler eklemek için bir Materyal kullandın ve directional light’ı ayarladın. Ancak gerçek dünya uygulamalarında küreler ve küplerden daha fazlasına ihtiyacın olacak. Sonraki eğitimde, sıfırdan inşa etmek zorunda kalmadan projelerine nasıl daha sofistike GameObject’ler ekleyeceğini göreceksin.



