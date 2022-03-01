## Sorunları belirlemek için profil kodu

Bu öğreticide, bir sahneyi analiz etmek ve optimizasyon darboğazlarının nerede meydana geldiğini belirlemek için Profiler'ı nasıl kullanacağınızı öğreneceksiniz.
 
Bu eğitimin sonunda şunları yapabileceksiniz:
- Profiler penceresindeki CPU profil oluşturucuyu kullanarak en fazla CPU zamanını kullanan komut dosyası yöntemini (kullanmayan bir komut dosyası yöntemine karşı) belirleyin
- Bir Update() çağrısında bir koleksiyondan verimli bir şekilde geçen bir döngüyü, Update() çağrısında aynı koleksiyondan geçen birçok döngüden ayırt edin
- Bir senaryo verildiğinde, performans sorunlarına neden olabilecek olası sorunları (örneğin, çok fazla RigidBody bileşeni, çok fazla Çarpıştırıcı, çok fazla gölge vb.) tanıyın.
- Unity'nin İstatistikler penceresini kullanarak çoklu sayı, doku boyutları veya ekrandaki çok fazla nesnenin neden olduğu performans sorunlarını araştırın
- Gereksiz iç içe if deyimlerini tanımlayın

### 1. Adım: Genel Bakış

Projenizi sonlandırmaya ve yayınlamaya hazırlamaya çalışırken, yeniden düzenleme sırasında veya sonrasında kodunuzda kalan tüm darboğazları belirlemek ve çözmek önemlidir. Unity'nin Profil Oluşturma aracı, kare hızınızı düşürebilecek, bulunması zor sorunları bulmak için idealdir. Profiler, hangi komut dosyalarının çağrıldığı, belleğin nasıl ayrıldığı, görsellerin ekranda nasıl oluşturulduğu ve daha fazlası dahil olmak üzere, bir uygulamada kare kare tam olarak ne olduğuna dair ayrıntılı bir rapor üretir. Profiler'da projenizin performansını etkileyen her şeyi görebilirsiniz.

Projenizin performansı büyük ölçüde üzerinde çalıştığı bilgisayara bağlıdır; bu nedenle, projenizin profilini belirli hedef cihazınızda veya hedefinizin masaüstü gibi bir dizi desteklenen donanım varsa, farklı cihazlarla birden fazla cihazda profil oluşturmanız önemlidir. özellikler. Bu projeyi yeni bir üst düzey oyun bilgisayarında çalıştırırsanız, büyük olasılıkla çok yüksek kare hızları elde edersiniz, oysa yerleşik grafiklere sahip beş yıllık bir dizüstü bilgisayarda deneyim tamamen farklı olabilir.

Yaygın optimizasyon sorunlarını belirlemeyi kolaylaştırmak için, Profiler'ı ilk kez keşfederken gözden geçirmeniz için oldukça optimize edilmemiş bir sahne oluşturduk. Bunu akılda tutarak, bu eğitimde gördüğünüz sayıların muhtemelen kendi bilgisayarınızdakilerle tam olarak aynı olmayacağını unutmayın. Ancak, kare hızınızdan bağımsız olarak, komut dosyalarını optimize ettiğinizde ölçülebilir sonuçlar görebileceksiniz.
 
### 2. Adım: Sahneyi keşfedin
Profiler ile inceleyebileceğimiz bir performans sorunu örneğine bakalım. Daha önce de belirtildiği gibi, projenizde özel bir optimizasyon klasöründe bulunan, yalnızca bu eğitim için oluşturulmuş özel bir sahne kullanacağız.
 
- Projede Optimizasyon klasörünü bulun ve Sahneler klasöründe Optimizasyon sahnesini açın.
- Sahneyi ilk açtığınızda, yalnızca gri bir düzlem göreceksiniz. Hiyerarşide ayrıca bir OptimManager komut dosyası eklenmiş bir Manager GameObject göreceksiniz.
- Oynat'a basın ve sahneyi izleyin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/profile-code-identify-issues/figures/JrProg_D.4_image1.png)

Alternatif metin: Rastgele yönlerde hareket eden 2000 forkliftin bulunduğu Optimizasyon sahnesinden oyun görünümü. Oyun İstatistikleri penceresi, sağ üst köşede 9.2 FPS kare hızı vurgulanmış olarak açılır.
 
- Oynatma modunda, uçakta hepsi belirli bir sınır içinde dönen ve hareket eden binlerce forklift belirir. İstatistikler sekmesini açın ve bilgisayarınız için geçerli saniyedeki kare sayısını (FPS) not edin.
- Oynatma modundan çıkın ve denetçideki OptimManager komut dosyasına bakın. Bu komut dosyası, forklift alanının üretilmesinden sorumludur. Forklift hazır yapısı için değişkeni, örnek sayısını ve sınırın boyutunu not edin.
- Hiyerarşide Yönetici nesnesini seçin, ardından Optim Yöneticisi bileşeninde örnek sayısını 200 olarak değiştirin. Oynatma moduna yeniden girin ve FPS'nizdeki değişikliği gözlemleyin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/profile-code-identify-issues/figures/JrProg_D.4_image2.png)

**Alternatif metin:** Şu anda rastgele yönlerde hareket eden yalnızca 200 forkliftin bulunduğu Optimizasyon sahnesinden oyun görünümü. Oyun İstatistikleri penceresi, iyileştirilmiş 69,1 FPS kare hızı vurgulanmış olarak sağ üst köşede açıktır.
 
Sahnedeki forklift sayısının azalması genel FPS'yi artırıyor. Bir uygulamada kare hızının diğer her şeyden daha önemli olduğu bir durumda, bu uygun bir optimizasyon çözümü olabilir. Ancak, uygulama hem 2000 forklift hem de 60 FPS kare hızı gerektiriyorsa?

Bu gereksinimleri göz önünde bulundurarak, darboğazın tam olarak nerede meydana geldiğini anlamak önemlidir. İlk örnekte kare hızı, ekranda 10 kat daha fazla kafes olduğu için mi daha düşüktü? Hepsi hareket ettiği için mi? Başka bir şey mi? Cevabı bulmak size tam olarak neyi ele alacağınızı söyleyecektir.

Profil oluşturma, meydana gelen her şeyin ve her işlemin tam olarak ne kadar sürdüğünün bir anlık görüntüsünü verir, böylece kare hızınızı nasıl iyileştireceğiniz konusunda bilinçli bir karar verebilirsiniz.

### 3. Adım: Profil oluşturma verilerini toplayın
Şimdi kaputun altına bakalım ve Unity'nin bu sahnede ne işlediğini anlayalım.
- OptimManager'da Örnek Sayısını 2000'e geri ayarlayın.
- Pencere > Analiz > Profil Oluşturucu'yu seçerek Profil Oluşturucu'yu açın.
- Profiler penceresini Proje pencerenizin yanına yerleştirin.
- Şu anda Profiler tamamen boş çünkü sahne hakkında henüz hiçbir veri toplanmadı. Profil Oluşturucu, Oynatma modunu başlattığınızda çalışmaya başlar. Profiler'ın kayıt düğmesinin (kırmızı nokta) etkin olduğundan emin olun ve ardından Oynat'a basın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/profile-code-identify-issues/figures/JrProg_D.4_image3.png)

Alternatif metin: “Profil Bilgilerini Kaydet” düğmesinin vurgulandığı Profil oluşturucu penceresi.
 
- Profiler, performans verilerinin renk kodlu bir tablosunu günlüğe kaydetmeye başlayacaktır. Bir veya iki saniye sonra Oynatma modundan çıkın. Artık, bu süre zarfında uygulamada meydana gelen her şeyin ayrıntılı bir taslağına sahipsiniz.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/profile-code-identify-issues/figures/JrProg_D.4_image4.png)

**Alternatif metin:** Neredeyse tüm pencere açık mavi renkle doldurulmuş, CPU kullanımını gösteren Profiler penceresi, her karenin oluşturulmasının çok uzun sürdüğünü gösterir. Pencerede, belirli bir kareyi belirten, "94.57ms" etiketli dikey bir beyaz çizgi vardır; bu, karenin oluşturulmasının 94.57 ms sürdüğünü gösterir.
 
Profiler'ın üst yarısı, CPU Kullanımından başlayarak modüllere ayrılmıştır. Bu eğitimde kullanacağımız tek modül bu olacak.

Modül, çeşitli işlem kategorilerinin ve bunların CPU'yu nasıl kullandıklarının bir tablosunu içerir. Modülün sol tarafında bu kategoriler için bir renk tuşu bulunmaktadır. Ani artışlar, İşleme gibi bu işlem kategorilerinden birinin belirli bir çerçeve üzerinde çalışmak için daha fazla zaman harcadığını gösterir.

Mavi arka planın bir arka plan değil, çalışan komut dosyalarının bir temsili olduğuna dikkat edin! Bu çok yüksek seviyeden bile, senaryolarımızda bir şeylerin ters gittiğini söyleyebiliriz, çünkü senaryolar sahnenin kendisini oluşturmaktan bile çok daha fazla işlem gücü alıyorlar. Kısa süre içinde komut dosyalarını inceleyeceğiz.

### 4. Adım: Milisaniyelik bir bütçe oluşturun
Profiler'ın alt yarısı, her karede tam olarak ne olup bittiğinin görsel bir dökümünü gösterir. Profil Oluşturucu'nun alt yarısında çubuk grafik görselleştirmesini görmüyorsanız, Profil Oluşturucu Modülü bölümünün hemen altındaki açılır menüden Zaman Çizelgesi'ni seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/profile-code-identify-issues/figures/JrProg_D.4_image5.png)

Alternatif metin: Profiler penceresinin sol tarafının yarısında, “Zaman Çizelgesi” seçeneği seçili olarak bir açılır öğe vurgulanır.
 
CPU Kullanımı grafiğindeki beyaz dikey çizgi, uygulamada oynatılan bir kareyi temsil eder. Kullanımın çerçeveden çerçeveye nasıl değiştiğini görmek için CPU Kullanımı modülünde bu satırı sol tıklayın ve sürükleyin. CPU kullanımında ani artış olan bir çerçeve seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/profile-code-identify-issues/figures/JrProg_D.4_image6.png)


Alternatif metin: Profiler penceresinde tek bir çerçeve seçilir. Zaman Çizelgesi panelinde, CPU oluşturma süresi vurgulanır ve "CPU: 117.26ms" görüntülenir.

Yukarıdaki örnekte, CPU: 117.26ms (vurgulanmış) notasyonunu görebilirsiniz. Bu, bu çerçevedeki her şeyin tamamlanması için geçen milisaniye cinsinden toplam süreyi temsil eder.

Profil oluştururken, son kare hızı hedefine ulaşmanın anahtarı olduğu için bu milisaniyelik tamamlama oranına özellikle dikkat etmek istiyoruz. Hedef kare hızına bağlı olarak, kare başına belirli bir milisaniye bütçeniz olacaktır. Bunu hesaplamanın yolu şudur:

**1000 ms / saniye başına hedef kare = ms bütçe**

Bu nedenle, 60 FPS hedefine ulaşmak için her karenin milisaniye bütçesi 16'dır. Bu, şu anda profili çıkarılmakta olan karenin olması gerekenin yedi katından fazla olduğu anlamına gelir!

### Adım 5: Profiler Zaman Çizelgesini Keşfedin

Profiler Zaman Çizelgesi'nin en üstünde iki alternatif etiket vardır: PlayerLoop ve EditorLoop. Bunları görmüyorsanız, yakınlaştırmak için kaydırma tekerleğinizi veya izleme dörtgeninizi kullanmanız gerekebilir. PlayerLoop, oyunun kendisinde çalışan her şeyi temsil ederken, EditorLoop, Editör'de uygulamayı çalıştırmak için olan her şeyi temsil eder. Bu durumda, son kullanıcımız Unity Editor'daki uygulamayı kullanmayacağından, EditorLoop'u yok saymak ve yalnızca PlayerLoop'ta olanlara odaklanmak güvenlidir.

PlayerLoop'un altında listelenen çubuklar, o çerçeve sırasında uygulamada olan her şeyi zamana göre azalan sırayla temsil eder. Profiler Zaman Çizelgesi, CPU Kullanım grafiğiyle eşleşecek şekilde renk koordinelidir. Büyük mavi çubuk, bu çerçevede büyük miktarda zaman alan, komut dosyasıyla ilgili belirli bir eylemin gerçekleştiğini gösterir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/profile-code-identify-issues/figures/JrProg_D.4_image7.png)

Alternatif metin: Profiler penceresinin Zaman Çizelgesi'nde açık mavi bir çubuk seçilir. Mavi çubuğun yanında, “OptimUnit.Update()” için bilgi görüntüleyen bir açılır arayüz bulunur.
 
Bu eylemin kaynağının OptimUnit betiği, özellikle de Güncelleme yöntemi olduğunu görmek için çubuğa tıklayın. Tamamlanması 98,27 ms sürer, bu da kendi başına milisaniye bütçemizi birçok kez aşar. Ayrıca, bu çerçevede çalışan bu komut dosyasının 2.000 örneğinin bulunduğunu unutmayın; bu, OptimManager komut dosyasında 2.000 forklift oluşturduğumuzu bildiğimiz için önemlidir. Her nasılsa, bu iki faktör ilişkili olmalıdır.

Senaryo neden 2.000 kez çalıştırılsın? Her forklift için bir örnek olmalıdır. OptimManager'da OptimUnit Prefabrik'i seçersek, OptimUnit komut dosyasının Prefabrik'in kendisine eklendiğini keşfederiz - bu, bu komut dosyasının gerçekten 2.000 kopyasının çalıştığı anlamına gelir.

Ardından, bu projeyi yavaşlatan tam kod satırlarını belirlememize yardımcı olması için Profiler'ı kullanabiliriz.

### 6. Adım: Profiler örnek yöntemlerini ekleyin
OptimUnit komut dosyası Güncelleme yönteminde çok şey oluyor, bu yüzden Profiler'dan biraz daha yardım alalım. Profiler.BeginSample ve Profiler.EndSample yöntemlerini ekleyerek kodun belirli bölümlerini profilleyebiliriz.
- Komut Dosyaları klasöründe, Optimizasyon klasörünü bulun ve OptimUnit komut dosyasını açın.
Güncelleme yöntemi dört ayrı görevi yerine getirir: taşıma süresi, forklift hazır yapısını döndürme, forklift hazır yapısını taşıma ve Yönetici sınırını kontrol etme. Profiler'ın izlemesi için bu görevleri işaretleyelim.
- BeginSample ve EndSample yöntemlerini, Update'in en üstündeki HandleTime yönteminin hemen üstüne ve altına ekleyin:

```csharp
Profiler.BeginSample("Handling Time"); // begin profiling a piece of code with a custom label
HandleTime();
Profiler.EndSample(); // ends the current profiling sample
```
Profiler.BeginSample öğesinin özel bir etiket adı bildirmek için bir parametreye sahip olduğuna dikkat edin. Bu etiket Profiler'da "OptimUnit.Update" ile aynı şekilde görünecektir.
- Profiler.EndSample yönteminden hemen sonra, Döndürme için yeni bir BeginSample ekleyin:

```csharp
Profiler.BeginSample("Rotating"); // begin profiling

var t = transform;

if (transform.position.x <= 0)
    transform.Rotate(currentAngularVelocity * Time.deltaTime, 0, 0);
else if (transform.position.x > 0)
    transform.Rotate(-currentAngularVelocity * Time.deltaTime, 0, 0);

if (transform.position.z >= 0)
	transform.Rotate(0, 0, currentAngularVelocity * Time.deltaTime);
else if (transform.position.z < 0)
	transform.Rotate(0, 0, -currentAngularVelocity * Time.deltaTime);

Profiler.EndSample(); // end profiling
```
- Yine, son EndSample'ın hemen altına, bu sefer Moving için yeni bir BeginSample ekleyin:

```csharp
Profiler.BeginSample("Moving"); // begin profiling
    	
Move();
    	
Profiler.EndSample(); // end profiling
```
- Son olarak, önceki EndSample'ınızın altına son bir BeginSample ekleyin, bu sefer Sınır Kontrolü için:

```csharp
Profiler.BeginSample("Boundary Check"); // begin profiling

//check if we are moving away from the zone and invert velocity if this is the case
if (transform.position.x > areaSize.x && currentVelocity.x > 0)
{
    currentVelocity.x *= -1;
    PickNewVelocityChangeTime(); //we pick a new change time as we changed velocity
}
else if (transform.position.x < -areaSize.x && currentVelocity.x < 0)
{
    currentVelocity.x *= -1;
    PickNewVelocityChangeTime();
}
        
if (transform.position.z > areaSize.z && currentVelocity.z > 0)
{
    currentVelocity.z *= -1;
    PickNewVelocityChangeTime(); //we pick a new change time as we changed velocity
}
else if (transform.position.z < -areaSize.z && currentVelocity.z < 0)
{
    currentVelocity.z *= -1;
    PickNewVelocityChangeTime();
}

Profiler.EndSample(); // end profiling
```

- Komut dosyasını kaydedin ve Editör'e dönün.
- Profiler'da, halihazırda yakalanan verileri temizlemek için Temizle düğmesine basın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/profile-code-identify-issues/figures/JrProg_D.4_image8.png)

Alternatif metin: Temizle düğmesinin vurgulandığı Profil oluşturucu penceresi.
 
- Oynat'a basarak ve uygulamanın birkaç saniye çalışmasına izin vererek yeni verileri yakalayın, ardından Oynatma modundan çıkın.
- Profiler penceresinin CPU Kullanımı modülünde, CPU Kullanımında ani artış olan başka bir çerçeve seçin.
- İşaretlediğimiz kod bölümlerine bakalım. OptimUnit.Update çubuğunun hemen altında yeni bir komut dosyası çubuğu bulunur. Bu çubuk, tüm yeni örneklenmiş kodu temsil eder. Onu seçin ve yeni numune etiketlerinden biri görünecektir.
- Zaman Çizelgesi açılır menüsüne tıklayın ve Hiyerarşi'yi seçin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/profile-code-identify-issues/figures/JrProg_D.4_image9.png)

Alternatif metin: Profiler penceresinde, "Zaman Çizelgesi" açılır menüsü, fare imlecinin "Hiyerarşi" seçeneğinin üzerine gelmesiyle genişletilir.
 
 - Çerçeve verileri, otomatik olarak seçilen dört kod bölümü için etiketlerle bir liste görünümüne dönüşecektir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/profile-code-identify-issues/figures/JrProg_D.4_image10.png)

Alternatif metin: Profiler penceresinin Hiyerarşi görünümünde, Zaman sütunu için 99.74ms gösteren "Hareketli" etiketi satırı vurgulanır.
 
Bu görünümde, sorunun Hareketli yöntemde olduğu Zaman ms sütununda hemen anlaşılır! Artık sorunu tanımladığımıza göre, bunu kodda denemenin ve çözmenin zamanı geldi.

### 7. Adım: Kodu Optimize Edin
- OptimUnit komut dosyasına dönün ve Update'te Move yöntemi çağrısını bulana kadar aşağı kaydırın. Yöntemin kendisine atlamak için Ctrl (Windows) veya Cmd (Mac) tuşunu basılı tutun ve Taşı'ya sol tıklayın.

```csharp
void Move()
{
    Vector3 position = transform.position;

    float distanceToCenter = Vector3.Distance(Vector3.zero, position);
    float speed = 0.5f + distanceToCenter / areaSize.magnitude;

    int steps = Random.Range(1000, 2000);
    float increment = Time.deltaTime / steps;
    for (int i = 0; i < steps; ++i)
    {
        position += currentVelocity * increment * speed;
    }

    transform.position = position;

    transform.position = transform.position + currentVelocity * Time.deltaTime;
}

```
Move yöntemi birkaç değişkeni hesaplar ve forkliftin yeni konumunu hesaplamak için 1.000 ile 2.000 kez arasında bir for döngüsü yineler. Bunu 2.000 forklift (2-4 milyon döngü!) ile çarpın ve bu yöntemin çerçeve başına bir kez çalıştığını düşünün - bu yöntemin neden bu kadar yavaş olduğunu görmek kolaydır. Bu hesaplamalar, Sınır Kontrol kodunda hesaplanan currentVelocity için fazlalıktır, bu nedenle bu yöntemi basitleştirmek kolaydır, böylece sadece forklifti hareket ettirmekle ilgilenir.


- Move'un gövdesini aşağıdaki satırla değiştirin:

```csharp
void Move()
{
	transform.position = transform.position + currentVelocity * Time.deltaTime;
}
```
- Komut dosyasını kaydedin ve Editör'e dönün.
- Profiler verilerini temizleyin ve Oynatma modunda bir kez daha daha fazla veri yakalayın.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/profile-code-identify-issues/figures/JrProg_D.4_image11.png)

Alternatif metin: Profiler penceresinin Hiyerarşi görünümünde, "Hareketli" etiketi satırı vurgulanır, şimdi Zaman sütunu için 1,08 ms ve tüm çerçeve için toplam CPU oluşturma süresi 14,94 ms'dir.
 
Profiler'daki değişiklik çarpıcı! Daha önce, Taşıma kodunun tamamlanması 99.74 ms alıyordu. Optimizasyon değiştikten sonra sadece 1.08 alır. Toplam CPU ms'si de 16 ms hedefinin altında olan 14.94'e düştü!

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/profile-code-identify-issues/figures/JrProg_D.4_image12.png)

Alternatif metin: Rastgele yönlerde hareket eden 2000 forkliftin bulunduğu Optimizasyon sahnesinden oyun görünümü. Oyun İstatistikleri penceresi sağ üst köşede açık ve şimdi 67.9 FPS (14.7 ms) kare hızı gösteriyor.
Oyun görünümünde FPS 67'ye yükseldi!

### 8. Adım: Özet
Bu uç bir örnek olmasına rağmen, bu örnek sahne basit komut dosyası yazma hatalarının bazen bir uygulamanın performansı üzerinde nasıl büyük bir etki yaratabileceğini göstermektedir. Ticari bir amaç için üretilen bir uygulamada, birçok komut dosyasında birçok farklı darboğaz bulacaksınız, ancak süreç her zaman aynı kalacaktır. Sorunlu komut dosyalarını belirlemek için Profiler'ı kullanın ve bir sorun olabileceğinden şüphelendiğiniz kod bloklarını yalıtmak için Profiler Örneği yöntemlerini kullanın. Belirli sorun kodu belirlendikten sonra, yeniden düzenleyin, yeniden profil oluşturun ve tüm sorunları çözene kadar işlemi tekrarlayın. Artık kendi projelerinizdeki verimsiz kodu belirlemek için araçlara sahipsiniz.



