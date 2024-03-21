## Nesne yönelimli programlamada soyutlama

Bu görevde, bir önceki görevde tamamladığınız envanter projesini, kılavuz olarak nesne yönelimli programlama sütunlarını kullanarak yeniden gözden geçireceksiniz. Uygulama geliştirmede değerini daha iyi anlamak için her bir sütunun iç işleyişine ayrı ayrı dalacaksınız. Ardından, uygulamanızın son derlemesini yavaşlatacak optimizasyon darboğazlarını belirlemek için kodunuzun profilini nasıl çıkaracağınızı öğreneceksiniz. Bu görevi tamamlamak için portföyünüz için OOP ilkelerine dayalı olarak tamamen optimize edilmiş kod kullanan küçük bir uygulama geliştireceksiniz.

Bu görevi tamamladığınızda Junior Programmer yolunu tamamlayacaksınız - TEBRİKLER!

Anahtar ayrıntılar

Bu, mevcut yolunuzdaki son görevdir!
Bu görevi tamamlamak yaklaşık 5 saatinizi alacaktır. Kendi hızınızda yapın - yolun her adımında XP alacaksınız.
Unutmayın, yalnız değilsiniz: Görev boyunca Unity topluluğuyla bağlantı kurun ve Unity'nin yerleşik yaratıcılarıyla devam eden pratik oturumlar için Canlı Öğren takvimini kontrol edin.
Görevi tamamladığınızda, profiliniz ve portföyünüz için görev rozetini alacaksınız.

Bu malzemeyi zaten biliyor musunuz?

Görev değerlendirmelerini tamamlayarak bu görevi "test edebilirsiniz". Aşağı kaydırın ve Görev kontrol noktasına atla'yı seçin.

- Bu öğreticide, nesne yönelimli programlamanın ilk sütununu öğreneceksiniz: Soyutlama.
 
- Bu eğitimin sonunda şunları yapabileceksiniz:
- Yalnızca gerekli komut dosyası bileşenlerini ortaya çıkarmak için soyutlamanın nasıl kullanıldığını açıklayın
- Soyutlamayı uygulama fırsatlarını doğru bir şekilde tanıyarak bir nesnenin yalnızca önemli ayrıntılarını ortaya çıkarın

### 1. Adım: Genel Bakış
Yeniden düzenleme adı verilen bir süreç olan dış işlevselliğini değiştirmeden mevcut kodumuz üzerinde çalışmaya ve onu geliştirmeye hazırız. Yeniden düzenleme, daha önce yazdığınız herhangi bir dağınık kodu temizleyebileceğiniz ve ayrıca projenin gelecekteki yinelemelerinde kodunuzun nasıl kullanılacağını yeniden inceleyebileceğiniz geliştirme sürecinde önemli bir adımdır. Diğer bir deyişle, geliştirme aşamasında "şimdilik iyi çalışan" bir kod yazdınız ve yeniden düzenleme aşamasında kodu "daha sonra iyi çalışacak" şekilde revize edeceksiniz.
 
Son görevde, nesne yönelimli programlama kavramını tanıttık ve Junior Programmer Pathway boyunca en iyi uygulamalarından bazılarını uyguluyorsunuz. Şimdi, temel sütunların her birini (soyutlama, kalıtım, polimorfizm ve kapsülleme) derinlemesine inceleyecek ve soyutlamadan başlayarak kodunuzu etkili bir şekilde yeniden düzenlemek için paradigmayı kılavuz olarak kullanacaksınız.
 
Bu son görevde çalışırken, önceki görevde oluşturduğunuz envanter projesini iyileştirmeye devam edeceksiniz.

### Adım 2 - Soyutlama Nedir?

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/abstraction-object-oriented-programming/figures/JrProg_D.1_image1.png)

**Alternatif metin:** Soyutlama, Kapsülleme, Kalıtım ve Polimorfizm ile soldan sağa etiketlenmiş, arka arkaya dört sütunun görüntüsü. Soyutlama etiketli ilk sütun vurgulanır.
 
 
OOP'nin ilk ayağı, ister siz ister bir başkası olsun, kodunuzu kullanan programcı için temiz ve basit tutmakla ilgilidir. Soyutlama, diğer programcıların göreceği karmaşık kodu komut dosyalarından kaldırma ve yalnızca diğer programcıların gerçekten ihtiyaç duyduğu işlevselliği ortaya çıkarma işlemidir. Ayrıntıları "soyutladığınızda", yinelenen kodu azaltır ve en kullanışlı işlevlere kolay erişim sağlarsınız. Aslında bu sütuna zaten oldukça aşinasınız çünkü bu yol boyunca sık sık ondan faydalandınız. Tüm kodu elle yazmak yerine bir görevi gerçekleştirmek için bir yöntem çağırdığınızda, soyutlamadan yararlanırsınız!
 
Şimdi soyutlamayı kullandığınız bir duruma bir göz atalım. Sırasında [Kod ile Oluşturun. Ünite 4'te - Oynanış Mekaniği,](https://learn.unity.com/project/unit-4-gameplay-mechanics?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f) bir düşman dalgası oluşturmak için bazı işlevler yarattınız.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/abstraction-object-oriented-programming/figures/JrProg_D.1_image2.png)

Alternatif metin: Create with Code Unit 4'te yapılan “Sumo Battle” prototipinden oyun görüntüsü. Yüzen bir adada 3 beyaz küre (düşmanlar) ve bir siyah küre (oyuncu) vardır.
Kodu ilk yazdığınızda, Başlat yöntemine koyarsınız:

```csharp
private void Start()
{
    for (int i = 0; i < 3; i++)
    {
        Instantiate(enemyPrefab, GenerateSpawnPosition(),   
        enemyPrefab.transform.rotation);
    }
}
```
Start yalnızca oyun yüklendiğinde bir kez çalıştığından, başka bir düşman dalgası oluşturmak istiyorsanız, bu kod satırını komut dosyanızda olmasını istediğiniz başka bir yere yapıştırmanız gerekir. Aynı kod satırlarını sürekli olarak yeniden yazmak (veya kopyalayıp yapıştırmak) zorunda kalmak verimsizdir ve hataya açıktır. Ayrıca, tüm komut dosyalarınızda arama yapmanız ve tüm referansları yeniden yazmanız gerektiğinden, daha sonra yeniden düzenlemenin zorlaştığı anlamına gelir.
 
Bunun yerine, yumurtlama işlevini kendi yöntemine ayırdınız ve bunu Başlat'ta çağırdınız:


```csharp
void SpawnEnemyWave() // create new higher-level method 
{
    for (int i = 0; i < 3; i++)
    {
        Instantiate(enemyPrefab, GenerateSpawnPosition(), 
        enemyPrefab.transform.rotation);
    }
}

private void Start()
{
    SpawnEnemyWave(); // call higher-level method in Start()
}
```
SpawnEnemyWave adında daha yüksek seviyeli, daha "soyut" bir fonksiyon yarattınız. Daha sonra, tek bir kod satırından komut dosyanızın herhangi bir yerinde düşmanlar üretebildiniz. Ve daha sonra yeniden düzenlemeniz gerekirse, bunu tek bir konumda yapabilirsiniz. Ek olarak, siz ve programcı arkadaşlarınız artık düşmanların nasıl ortaya çıktığıyla ilgili ayrıntılar hakkında endişelenmenize gerek yok. Önemli olan tek şey daha soyut kavramdır: SpawnEnemyWave()'i çağırırsanız, bunlar ortaya çıkar.
 
Soyutlama deneyiminiz, kendi yaratım yöntemlerinizle sınırlı değildir. Aslında, Unity'de yerleşik bir yöntemi her çağırdığınızda soyutlamadan yararlanıyorsunuz:


```csharp
rb.AddForce(Vector3.up * Random.Range(12, 16), ForceMode.Impulse);
```
Bir RigidCody'ye kuvvet eklemek, fizik sistemiyle etkileşime giren büyük miktarda matematik içerir. Bununla birlikte, Unity size bu basit "soyut" yüksek seviyeli işlevi (AddForce) sağladığından, yalnızca AddForce yöntemini çağırmanız ve ona ihtiyaçlarınıza uygun parametreleri vermeniz yeterlidir. Nesnenize başarıyla güç eklemek için Unity fiziğini anlamanıza bile gerek yok!
 
### 3. Adım: Soyutlama ve komut dosyası yeniden düzenleme
Yeniden düzenleme kodunun önemli bir bölümünün, diğer programcıların onunla etkileşim şeklini değiştirmeden işlevselliğini geliştirmek olduğunu unutmayın. Soyutlama bunda önemli bir rol oynar! Yöntem çağrısı ve çıktısı değişmediği sürece, yöntemin içeriğini diğer programcının haberi olmadan ayarlayabilirsiniz. Bu, projenizin başka bir yerinde herhangi bir şeyi bozma riski olmadan kodunuzu güvenle yeniden düzenleyebileceğiniz anlamına gelir.

Basit bir örneğe bakalım:


```csharp
int TripleResult (int inputNumber)
{
    int outputNumber = inputNumber + inputNumber + inputNumber;
    return outputNumber; 
}
```
Yukarıdaki yöntemde, çağıran komut dosyası bir tamsayı olarak geçer ve üçe katlanmış bir çıktı alır. Çıktı numarasını alma yaklaşımı biraz etkisizdir, bu nedenle kodu aşağıdaki gibi görünecek şekilde yeniden düzenleyebilirsiniz:

```csharp
int TripleResult (int inputNumber)
{
    int outputNumber = inputNumber * 3;
    return outputNumber;
}
```
Yöntemin içeriği yeniden yazılmış olsa da, yöntemin çağrılma şekli, döndürülen şey ile tamamen aynı kalır. Bu nedenle, proje boyunca yönteme yapılan herhangi bir çağrı çalışmaya devam edecektir.

### Adım 4: Projede soyutlamanın uygulanması
Envanter projesinde UserControl'ü yeniden düzenleyerek yeni öğrendiğimiz soyutlama ilkelerini uygulayalım. Forkliftin seçilmesi ve istenen kaynağa taşınmasıyla ilgili tüm işlevler Güncelleme yöntemindedir. Peki ya daha sonra diğer faktörlerin bu seçimleri ve eylemleri kontrol edebilmesini istiyorsak? Bunu mümkün kılmak için bu işlevselliği iki yeni yönteme ayıralım.
 
- Gerekirse, önceki görevden Envanter projesini açın.
- Komut Dosyaları klasöründe UserControl komut dosyasını bulun ve Visual Studio'da açın.
- Güncellemenin üzerinde, dönüşü olmayan iki yeni genel yöntem tanımlayın ve bunları HandleSelection ve HandleAction olarak adlandırın.


```csharp
public void HandleSelection ()
{

}

public void HandleAction ()
{

}
```

HandleSelection, kullanıcı uygulamadaki Forkliftlerden birine sol tıkladığında meydana gelen her şeyi yönetecektir. Güncellemede sol fare düğmesini (Input.GetMouseButtonDown(0)) kontrol etmemiz gerekecek, ancak diğer her şey yeni yöntemimize taşınacak.
- Update yönteminde, if(Input.GetMouseButtonDown()) ifadesinin içeriğini seçin ve HandleSelection'a taşıyın


```csharp
public void HandleSelection()
{
    // start of code cut from GetMouseButtonDown(0) check
    var ray = GameCamera.ScreenPointToRay(Input.mousePosition);
    RaycastHit hit;
    if (Physics.Raycast(ray, out hit))
    {
        // the collider could be children of the unit, so we make sure to check in the parent
        var unit = hit.collider.GetComponentInParent<Unit>();
        m_Selected = unit;


        // check if the hit object have a IUIInfoContent to display in the UI
        // if there is none, this will be null, so this will hid the panel if it was displayed
        var uiInfo = hit.collider.GetComponentInParent<UIMainScene.IUIInfoContent>();
        UIMainScene.Instance.SetNewInfoContent(uiInfo);
    }
    // end of code cut from GetMouseButtonDown(0) check
}

private void Update()
{
    // ...

    if (Input.GetMouseButtonDown(0))
    {
        // code cut from here  
    }
    
    // ... 
}
```
- In the if(Input.GetmouseButtonDown()) statement, call HandleSelection();

```csharp
if (Input.GetMouseButtonDown(0))
{
    HandleSelection(); // method now called from here   
}
```
Now let’s repeat this process for HandleAction().
 
- Güncellemede, else if (m_Selected != null && Input.GetMouseButtonDown(1)) ifadesini bulun ve içeriğini HandleAction()'a taşıyın.

```csharp
public void HandleAction()
{
    // start of code cut from GetMouseButtonDown(1) check
    var ray = GameCamera.ScreenPointToRay(Input.mousePosition);
    RaycastHit hit;
    if (Physics.Raycast(ray, out hit))
    {
        var building = hit.collider.GetComponentInParent<Building>();

        if (building != null)
        {
            m_Selected.GoTo(building);
        }
        else
        {
            m_Selected.GoTo(hit.point);
        }
    }
    // end of code cut from GetMouseButtonDown(1) check
}


private void Update()
{
    // ...

    else if (m_Selected != null && Input.GetMouseButtonDown(1))
    {
        // code cut from here 
    }

    // ...
}

```
- else if (m_Selected != null && Input.GetMouseButtonDown(1)) deyiminde HandleAction()'ı çağırın.


```csharp
else if (m_Selected != null && Input.GetMouseButtonDown(1))
{
    HandleAction(); // method now called from here  
}
```
- Senaryoyu kaydedin ve Unity'ye dönün ve sahneyi test edin.
İşlevsellik değişmemeliydi: Bir Forklifte sol tıklayabilmeli ve bir kaynak yığınına sağ tıklayabilmelisiniz ve Forklift kaynakları aynen eskisi gibi taşımalıdır. Şimdiki fark şu ki, siz veya başka bir programcı bu işlevselliğe daha sonra uygulamanın başka bir yerinde ihtiyaç duyarsa, daha özgürce kullanılabilir.

### Adım 5: Özet
Soyutlama, kodunuzu basitleştirir ve temiz tutar, programcıların kullanımını kolaylaştırır. Soyutlamanın temel ilkesi, gereksiz karmaşıklığı diğer programcılardan gizlemek ve yalnızca kodu gerektiği gibi çalıştırmak için gerekenleri ortaya çıkarmaktır. Bu, karmaşık iç işleyişi alıp onları soyut, daha yeniden kullanılabilir kod parçalarıyla değiştirmek anlamına gelir. Bu ilkeyi takip etmek, daha sonra yeniden düzenleme sürecini de basitleştirir. Artık soyutlamayı envanter projesine nasıl uygulayacağınızı öğrendiğinize göre, onu kendi uygulamalarınıza nasıl uygulayabileceğinizi düşünün, hatta yapmayı deneyin!

















