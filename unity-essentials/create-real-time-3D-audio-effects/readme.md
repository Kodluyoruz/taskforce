# Gerçek Zamanlı 3D Ses Efektlerinin Oluşturulması

Gerçek zamanlı 3D'deki ses, gerçek dünyadaki ses gibi davranmalıdır: kaynağına yaklaştıkça daha yüksek gelmeli ve nesnelere çarpıp sıçramalıdır. Bu eğitim, sesi hayata geçiren Unity özelliklerine ilk bakış olacaktır.

Bu eğitim sonrasında öğreneceklerin:

- 3D sesin tanımlanması.
- Sahne ve Ses Dinleyicisinin rolü.
- Döngüde olan bir ses klibinin ayarlanması.
- Fon sesinin 3D sese dönüştürülmesi.

**Aşama 1: Genel Bakış**

Eklediğin fon müziği, Sahnenin (Scene) neresinde olursan ol aynı ses seviyesinde çalar. Ayrıca ses, sahnede nereye hareket ettiğine bağlı olarak gerçek uzayda hareket ettiğinden, ses seviyesini ve hatta perdeyi değiştiren sesler de ekleyebilirsin. Buna **3D ses** denir.

Unity'de 3D sesin nasıl çalıştığını keşfetmek için, Sahnede sesin nasıl alındığını ve çalındığını anlamak önemlidir. Tıpkı kameranın kullanıcının gözü gibi davranması gibi, Ses Dinleyici de **(Audio Listener)** kulak görevi görür. Belirli bir konumdaki duyulabilir sesleri algılar ve bunları kullanıcıya geri çalar. Bir Sahnede yalnızca bir Ses Dinleyicinin bulunabileceğini unutmamak önemlidir! Her varsayılan Unity Sahnesi (Unity Scene), Ana Kameraya bağlı bir Ses Dinleyiciye sahiptir, bu nedenle kullanıcının "gözleri" ve "kulakları" bir aradadır. 

**Aşama 2: Ses Dinleyicisinin Rolü**

Bu Sahnede, mutfakta hareket eden kullanıcıyı temsil etmek için Karakter adında bir GameObject hazırladık. GameObject Karakteri, gömülü Ses Dinleyicisi (kulaklar) ve bir kapsül Çarpıştırıcısı (gövde; görünmez ilkel bir kapsül gibi) ile Ana Kameradan (gözlerden) oluşur ve bir Çarpıştırıcı olarak, içinden geçmek yerine diğer GameObject'lere çarpar).
- Hiyerarşi penceresinde Karakter GameObject seçilmelidir.
- Karakter GameObject'i genişletmek ve alt GameObject'lerini görüntülemek için Karakter'in yanındaki sol ok seçilmelidir.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-real-time-3D-audio-effects/figures/B.4.2-1.png)
Karakter seçili iken alt GameObject öğelerinin ortaya çıkarılması için genişletilen hiyerarşi penceresi
- Ana Kamera GameObject'ini göremiyorsan, Ana Kamerayı göstermek için CharacterRoot'un yanındaki sol oku seçmelisin.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-real-time-3D-audio-effects/figures/B.4.2-2.png)
Karakter GameObject seçili iken CharacterRoot alt öğesi Ana Kamerayı gösterecek şekilde genişletilen hiyerarşi
- Karakter GameObject'i gözlemle. Çarpıştırıcının ana hatlarını ve Ana Kameranın kabaca karakterimizin başının olacağı yere yerleştirildiğini göreceksin.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-real-time-3D-audio-effects/figures/B.4.2-3.png)
Sahne görünümünde, kapsülü Çarpıştırıcının etrafındaki tel çerçeveyi ve içine gömülü Ana Kamerayı gösteren Karakter GameObject
- Hiyerarşiden, Ana Kamera Oyun Nesnesi seçilmelidir.
- Denetçi Penceresinde Ses Dinleyici Bileşenini göreceksin. Bu bileşenin hiçbir özelliği olmadığını unutma.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-real-time-3D-audio-effects/figures/B.4.2-4.png)
Denetçi penceresindeki Ana Kamera bileşenleri, hiçbir özelliği olmayan Ses Dinleyici Bileşenini gösterir.

**Aşama 3: 3D Ses Oluşturulması**

3D seste, Ses Klipleri, Sahnedeki Ses Dinleyicinin konumuna bağlı olarak farklı ses çıkarır. Bu örnek Sahnede, 3D sesi göstermek için ses çıkaran bir GameObject sağladık.

- Hiyerarşi penceresinde, KaynayanKazan GameObject'i seçin.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-real-time-3D-audio-effects/figures/B.4.2-5.png)
KaynayanKazan GameObject seçiliyken hiyerarşi.
- Denetçi penceresinde, Sahnenizde GameObject'i etkinleştirmek için KaynayanKazan'un Adı alanının solundaki onay kutusunu seçin.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-real-time-3D-audio-effects/figures/B.4.2-6.png)
KaynayanKazan GameObject'in özelliklerini gösteren ve GameObject'i etkinleştiren onay kutusunu vurgulayan Denetçi penceresi.
- Test etmek için Oynat butonunu seçin. Artık Sahnenizde kaynar su sesi çıkaran bakır bir tencerenin olduğunu fark edeceksin. Ancak sahnede nereye gidersen git ses aynı seviyede olacaktır.
- Oynatma modundan çıkın. Hiyerarşi penceresinde, GameObject'in alt öğelerini görmek için KaynayanKazan GameObject öğesini genişletin.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-real-time-3D-audio-effects/figures/B.4.2-7.png)
BoilingWaterAudio alt GameObject öğesini KaynayanKazan GameObject üzerinde gösteren hiyerarşi.
-  KaynayanKazan'un alt öğesi olan BoilingWaterAudio GameObject öğesini seçin.
- Denetçi penceresinde, Ses Kaynağı Bileşeninin özelliklerin incele. Bu Ses Kaynağı için, sürekli kaynama sesi sağlamak için Döngü ayarını etkinleştirdik.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-real-time-3D-audio-effects/figures/B.4.2-8.png)
- Bu Ses Kaynağını 3D sese dönüştürmek için, Uzamsal Karışım kaydırıcısını (Spatial Blend) seçip tamamen sağa sürükle veya değerini 1'e ayarla.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-real-time-3D-audio-effects/figures/B.4.2-9.png)
1 değerini temsil eden, Uzamsal Karışım kaydırıcısını sağda gösteren Ses Kaynağı Bileşeni.
- Oyun Moduna girin ve Karakteri mutfak sobasının yakınına ve uzağına taşıyın.  KaynayanKazan’un sesi artık GameObject'e yaklaştıkça artıyor.

**Aşama 10: Ses geçişinin ayarlanması**

Bir ses klibinin yuvarlanması, üç boyutlu uzaydaki aralığını ve daha uzak mesafelerde kaybolma ve duyulamaz hale gelme hızını tanımlar. Farklı seslerin taşıma şekillerini simüle etmek için seslerinizin geçişini ayarlayabilirsiniz.
- Ses Kaynak GameObject seçiliyken, Denetçideki özellikleri genişletmek için 3D Ses Ayarlarının (3D Sound Settings) solundaki oku seçin.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-real-time-3D-audio-effects/figures/B.4.2-10.png)
Bir Ses Kaynağının Denetçide gösterildiği gibi 3D Ses Ayarları
Bu ayarlar, Ses Kaynağının ve Ses Dinleyicisinin konumlarına bağlı olarak sesin ve perdenin nasıl değişebileceğini kontrol eder.
- Minimum mesafeyi 0,5'e ve Maksimum mesafeyi 1'e ayarlayın. Minimum mesafe içinde, Ses Kaynağı klibi maksimum ses seviyesinde oynatır. Bu mesafenin dışında, ses, kullanıcının artık sesi duymayacağı Maks Mesafeye kadar azalır.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-real-time-3D-audio-effects/figures/B.4.2-11.png)
Min Distance ve Max Distance 1 olarak ayarlananSes Kaynağının rolloff eğrisi.
Sahne Görünümünde, Minimum Mesafe ve Maksimum Mesafe iki mavi tel küre ile temsil edilir. Bu size, kullanıcının sesi tam olarak Sahnenin neresinde duyabileceğini gösteren görsel bir çıktı verecektir.
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/create-real-time-3D-audio-effects/figures/B.4.2-12.png)
Sesin aralığını belirten mavi tel küreleri gösteren Sahne.
- Değişiklikleri test etmek için Oynatma moduna gir. KaynayanKazan’ı çok yüksek sesli veya Karakterin belirli bir mesafedeyken zar zor duyulabilir hale getirmek için yuvarlama ile denemeler yap.

**Aşama 5: Sonraki adımlar**

Bir 3D Sahneye iki tür ses ekledin: fon müziği ve 3D ses. Bir sonraki adımda, bu ve diğer projelere eklemek isteyebileceğin diğer ses varlıklarını keşfedebilirsin.



