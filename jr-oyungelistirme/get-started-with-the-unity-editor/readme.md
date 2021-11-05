# Unity Editor Kullanmaya Başlayın

Bu eğitimde, Unity Editor’de Microgames ile deneyimlemiş olduğun bağımsızlıktan daha fazlası ile çalışmaya başlayacaksın. Sıfırdan yeni bir Unity Projesi ve 3D Scene (sahne) oluşturarak başlayacaksın. Daha sonra GameObjectler ile çalışacak ve Unity Editor’de onları manipüle etmenin çeşitli yollarını keşfedeceksin.

Bu eğitimde aşağıdakileri yapacaksın:

- Yeni bir 3D proje ve Scene oluşturma
- Yeni 3D GameObject’ler oluşturma
- Unity Editor’ün pencerelerini tanımlama
- Projelerini organize etmede Scene’lerin rolünü anlama
- Görünümü değiştirmek için Scene’de gezinme


**Aşama 1: Genel Bakış**

Şimdiye kadar Unity Editor’ü, belki de birçok nesnenin ve fonksiyonların senin için önceden oluşturulmuş olduğu bir Micromgame’de örneklediğini umuyoruz. Artık standart bir Template (şablon) kullanarak kendi projene başladığına göre tüm Unity yaratıcılarının başladığı yerden başlayacaksın: boş uzayda.

**Aşama 2: Başlamadan Önce.**

Çıktığın bu yolda bulunan projelerine hazırlanmak için Unity Editor’ün temel araç setini kullanmaya alışmak için biraz zaman ayır. İncelemek, bazı ipuçları ve püf noktaları için Unity Editor’ün pencerelerini, araçlarını ve klavye kısayollarını kullanmak gibi gerekli talimatları içeren “Unit Editor’ı keşfedin” bölümüne bakın.
**Not**:  LEGO® Microgame’i tamamladıysan, Unity Editor’de fiziksel LEGO® parçalarını kullanma deneyimini yeniden yaratan bazı özel fonksiyonlar kullandın. Bundan sonra özel LEGO geliştirmelerini görmeyeceksin- özelleştirilmemiş Unity Editor’ü kullanacaksın.


**Aşama 3: Unity Editor: İlk İzlenimler**

Unity Editor ilk yüklendiğinde kendini nasıl hissettin? Bu videoda köklü içerik üreticilerimiz Editor’ü ilk kez açıktıklarında neler hissettiklerini paylaşıyor.

İlk başta göze korkutucu gelse de Unity Editor ile kendini rahat hissetmek, özgüvenini geliştirmenin ve Unity ile olan hedeflerine ulaşmanın ilk adımıdır.


**Aşama 4: Basit 3D nesneler oluştur**

**Primitive’ler (Temel Nesneler),** daha sonra içe aktaracağın assetler için yarattığın basit nesneler ve yer tutucular olarak bir Scene’e ekleyebileceğin, Cube (küp) ve Sphere (küre) gibi basit 3D şekilleri olan GameObjectler’dir.  Bu proje boyunca Cube ve Sphere Primitive’lerini kullanacaksın. Mevcut diğer Primitiveler hakkında daha fazla bilgi edinmek için  Primitive ve Yer Tutucu nesneler dökümanına bakabilirsin. 

1.  Scene’de bir Cube Primitive oluşturmak için Hierarchy Window’da (Hiyerarşi penceresi) boş bir yere sağ tıkla ve ardından **3D Object > Cube** seç.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-started-with-the-unity-editor/figures/3.1.2.png)

Cube olarak adlandırılan GameObject artık Hierarchy Window’da belirdi, ve Scene View’da (sahne görünümü) bir Cube belirdi.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-started-with-the-unity-editor/figures/B.2.1_img2.png)

**Aşama 5: Unity Editor Becerilerinizi Geliştirin**

İşte sana Unity Editor’de önemli rutin görevleri yapma yeteneğini denemek ve test etmek için bir alıştırma. Becerilerini geliştirmek için bu alıştırmayı kullan. “Nasıl Yapılır” kılavuzuna ihtiyacın varsa, [Unity Editor’ü](https://learn.unity.com/tutorial/explore-the-unity-editor-1#6124ecdcedbc2a54df07500f) Keşfet dökümanına bakabilirsin.

**Not**: Aşağıdaki resimlere okunabilirliği arttırmak için renk ekledik. Unity Editor’de GameObject’ler ve zemin arasındaki kontrastı iyileştirmen gerekiyorsa, [background color’ı (arka plan rengi) değiştirebilirsin.](https://learn.unity.com/tutorial/project-setup-processes#61310680edbc2a061b6dddc9)


1.  Hierarchy Window’dan Cube’u seç.
2.  Cube’e odaklanmak için Focus’u (odaklanma) kullan, daha sonra biraz uzaklaştır.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-started-with-the-unity-editor/figures/Exercise_1.png)

3.  Aynı konuma başka bir Cube ekleyebilmek için yer açmak üzere, Cube’ü yatay olarak ( X veya Z ekseninde) hareket ettirmek için Move (yürütme) aracını kullan.
4.  Başka bir Cube eklemek için yukarıdaki adımı takip et.
5.  Her Cube bir birim (bir metre) genişliğindedir; Cube’leri aralarında dört veya beş birim olacak şekilde hareket ettir.
6.  Görünümünü her iki Cube’e de bakacak şekilde ayarla..

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-started-with-the-unity-editor/figures/Exercise_2.png)

7.  Bir Cube’ün boyutlarını kare yerine dikdörtgen olacak şekilde değiştirmek için Scale (ölçekleme) aracını kullan.
8.  Diğer Cube’ü elmas gibi görünecek şekilde döndürmek için Rotate (döndürme) aracını kullan.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/get-started-with-the-unity-editor/figures/Exercise_3.png)

9.  Bakış açınızı dikdörtgen Cube ve elmas Cube arasında hareket ettirmek için Pan( kaydır), Zoom (yakınlaştır) ve/veya Flythrough (geçiş) araçlarını kullan.
10. Bakışınızı etrafında ve çevresinde döndürmek için Orbit’i (yörünge) kullan, böylece bir yöne baktığında dikdörtgen Cube’ü tek başına, diğer yöne baktığında ise elmas Cube’ü tek başına görebilirsin. Bu bakış açısından, ikisini birden  aynı anda görememelisin.

Bu alıştırmada;  Move, Scale ve Rotate araçlarını, Pan, Zoomi Flythrough ve Orbit kullandın ve 3D uzayda belirli bir konuma gittin. Bu işlemleri kolayca yapabildiğinde devam etmeye hazır olacaksın! 


Editor’de başka neler yapmak istiyorsun? Ekstradan alıştırma için deneyebileceğin birkaç manevra daha var:

- Cube’lerin “aerial” (havadan - yukarıdan aşağıya) veya “underwater” (sualtından - aşağıdan yukarıya) bir görünümünü elde et.
- Daha fazla Primitive ekle ve bunları bir kardan adam, ev, araba veya başka bir prototip yapacak şekilde düzenle.
- Bir engel parkurunda birkaç Primitive’i sıraya koy ve daha sonra etraflarında uçmak için Flythrough aracını kullan.

**Aşama 6: Sonraki adımlar**

Unity Editor’ü kullanmaya  yönelik temel becerileri öğrendiğin için tebrikler. Bunlar Unity’deki yaratıcı yolculuğunda senin için “ikinci doğan” olacak becerilerdir. Sırada, Package Manager (paket yöneticisi)’da Unity özelliklerini nasıl özelleştirebileceğini ve assetleri nasıl yöneteceğini öğreneceksin.







