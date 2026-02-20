## Nesne yönelimli programlamada kapsülleme

Bu eğitimde, nesne yönelimli programlamanın ikinci ayağını öğreneceksiniz: kapsülleme.
- Yalnızca programlamacının amaçladığı şekilde kullanılabilen kod yazmak için kapsüllemenin nasıl kullanıldığını açıklayın.
- Get ve set ile kapsülleme uygulayarak bir sınıf içindeki verilere erişimi kontrol edin.
- Public değişkenler(özellikler), private değişkenler(alanlar) ve yerel değişkenlerde ayrım yapın.
- Sınıfları yalnızca tek amaçlı kodu içerecek şekilde doğru şekilde düzenleyerek daha kolay okunabilirlik ve hata ayıklama sağlayın.

### Adım 1: Genel Bakış
Soyutlamaya çok benzer şekilde, kapsülleme de büyük ölçüde kodunuzun altında yatan karmaşıklık ile onu kullanan diğer kodlar arasında bir ayrım düzeyi sağlamaya odaklanır. Benzerlikten dolayı, bazen OOP(nesne yönelimli programlama) uygulamaları grubunun bazı takipçileriyle soyutlama ve kapsüllemeyi, tipik olarak kapsülleme başlığı altında,  tek bir sütunda göreceksiniz. Yine de, önemli olduğunu düşündüğümüz bir ayrım yapıyoruz: soyutlama, diğer programcılar için daha basit hale getirmek iin kodu özetlemekle ilgilidir, kapsülleme tamamen değerleri ve verileri korumakla ilgilidir, sanki bir kapsülün içindelermiş gibi,böylece başkalarının ne yaptığını kontrol edersiniz ve bunlara erişiminiz olmaz. 

### Adım 2:  Kapsülleme nedir?

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/encapsulation-object-oriented-programming/figures/JrProg_D.3_image1.png)

Alt text: Soyutlama ile soldan sağa etiketlenmiş arka arkaya dört sütunun görüntüsü, Kapsülleme, Miras, and Polymorphism. Kapsülleme etiketli dördüncü sütun vurgulanıyor.

Kapsüllemenin ana teması, kodda güvenliktir -başka bir deyişle- kodun yalnızca amaçlandığı şekilde kullanılmasını ve manipüle ettiğiniz değerlerin ve verilerin bozulmamasını sağlamaktır. Kapsüllenmiş kodda, diğer programcılar değişkenlerin değerini veya nesnelerin özelliklerini kolayca değiştiremezler.Diğer scriptlerin kodunuza erişmesinin tüm yollarını hesaba katmak imkansızdır, bu nedenle, yalnızca amaçladığı gibi çalışabilmesi için yarattıklarınızı kapsüllemek çok daha iyidir.

Create with code başlığı altında kapsülleme kullandığımız bir duruma göz atalım,  [Unit 1 - Player Control](https://learn.unity.com/project/unit-1-driving-simulation?uv=2018.4&courseId=5cf96c41edbc2a2ca6e8810f) ‘e geri dönelim. Aşağıdakiler, yolda ilerleyen bir aracı kontrol etmek için kullanılacak değişkenlerdi.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/encapsulation-object-oriented-programming/figures/JrProg_D.3_image2.png)

Alt text: Create With code’da yapılan “Driving Simulation” prototipinden oynanış görüntüsü.  Unit 1. Bir kasaya çarptıktan sonra yolda dönen mavi bir aracı gösterir.

```csharp
public float speed = 20.0f;
public float turnSpeed = 45.0f;
public float horizontalInput;
public float forwardInput;
```
Bu kodu ilk yazdığınızda, tüm değişkenlerinizi public olacak şekilde ayarladınız,böylece oynatma modunda Inspector’da nasıl güncellendiklerini görebilirsiniz.O zamanlar programlamada yeni olduğunuz için, değişkenlerinizin değişen değerlerinin oyununuzu nasıl değiştirdiğini daha iyi anlamanıza yardımcı oldu. Değişkenlerinizi public hale getirmek, speed ve turnSpeed değerlerşnizi gerçek zamanlı test ederek aracın hareketinde ince ayar yapmanızı da sağladı.

Son sayılarınıza karar verdiğinizde, değişkenlerinizin değerini kilitlemek için private yaptınız


```csharp
// all variables now private instead of public
private float speed = 20.0f;
private float turnSpeed = 45.0f;
private float horizontalInput;
private float forwardInput;
```
Artık kimsenin, kararlaştırdığınız değerleri kolayca –belki de yanlışlıkla- değiştirebilmesini istemiyordunuz. Olabildiğince basit, bu sizin kapsüllemeyle ilgili ilk deneyiminizdi.
Değişkenlerinizin ve methodlarınızın erişilebilirliği, kapsüllemede önemli bir husustur. Genel bir kural olarak, değişkenlerinizi mümkün olduğunca sık private tutmak istiyorsanız,ve yalnızca methodları, herhangi bir yerden çağırmanız gerektiğinden emin olduğunuzda public olarak ayarlayın. Aksi takdirde herkes tarafından kullanılabilirler.
Kendi başınıza küçük bir proje üzerinde çalışırken,kapsülleme önemli görünmeyebilir —aslında,her şeyi public hale getirmek uygun bile görünebilir.Yine de, Eğer başkalarıyla çalışıyorsanız, yada başkaları sizin kodlarınızla sonradan çalışacaksa, değişkenler ve methodlar gerçekten kullanılmaması gereken zamanlarda kullanılırsa, beklenmedik sorunlar kolaylıkla ortaya çıkabilir.

### Adım 3:  Private değişkenler ve Inspector görünürlüğü
Bir değişkeni public hale getirmek onu Inspector’da gösterir, ancak aynı zamanda uygulamanızın herhangi başka bir methodunda değiştirilebilmesini sağlar. İyi haber, değerleri Inspector’da kullanılabilir hale getirmenin bir yolu vardır,serialized(serileştirme) olarak da bilinen, değerleri diğer kodlara maruz bırakmadan Inspector’da kullanılabilir hale getirmenin bir yolu vardır. Bu size ,onları hala güvende tutarken, Inspector’daki değişkenleri değiştirme özgürlüğü verir. Aslında, bir değişkenin erişim niteleyicisi (public, private) aslında serileştirmeyi kontrol etmez ancak public değişkenler varsayılan olarak serileştirilir. [SerializeField] etiketini ekleyerek Inspector’da private değişkenlerinizi kolayca ortaya çıkarabilirsiniz.


```csharp
public class Rabbit : MonoBehaviour 
{
    [SerializeField] // Inspectorda private değişkenleri ortaya çıkarır.
    private Color furColor;
}
```
![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/encapsulation-object-oriented-programming/figures/JrProg_D.3_image3.png)

### Adım 4: Projenizde savunmasız bir public değişken bulun
Değerleri kötüye kullanımdan korumak için tüm değişkenlerinizi private yapmak kolay olurdu, ama gerçekten publlic olması gereken değikenler ne olacak? Onları nasıl koruyorsunuz? Hadi projemizde bir örnek üzerinden çalışalım.

MainManager.cs’ de, ardından public değişkeni eklediniz:

```csharp
public static MainManager Instance;
```
Bu değişkeni private yapamazsınız çünkü ona erişmesi gereken diğer scriptlerde hatalara neden olur, ancak bunu public bırakmak, olası kötüye kullanıma karşı savunmasız olduğu anlamına gelir. Sorunu göstermek için biraz yaramazlık yapalım:
- Deneysel amaçlar için, MenuUIHandler.cs scriptinde, Start() methodunun sonuna MainManager Instance’ı null(boş) olarak ayarlayan bir kod satırı ekleyin.

```csharp
MainManager.Instance = null;
```
- Renk seçim düğmelerini seçerek uygulamanızı test edin. Şimdi Console’da Null Reference Exception dönüşü alacaksınız.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/encapsulation-object-oriented-programming/figures/JrProg_D.3_image4.png)

Alt text: Null Reference Exception hatası görüntüleyen Concole penceresinin yanında mavi renk seçili olarak Warehouse projesi Menu sahnesinin, Game penceresi görünümü.

Değişkene public erişimi sağlarken bu tür kötüye kullanımı önlemenin bir yoluna ihtiyacımız var. 

### Adım 5: Getter ve Setter ile Özellik Oluşturun
Esasen, yapmak istediğimiz, değişkeni “salt okunur” yapmak, diğer sınıfların değeri almasına izin vermek,ama değeri ayarlatmamak. Bunu yapmak için değişkenlerimizin nasıl ve ne zaman kullabılabileceğini kontrol edecek, C# get ve set methodlarını kullanabiliriz.
- MainManager.cs’ de, MainManager Instance değişkeninizin sonuna bir get erişimcisi ekleyin:

```csharp
public static MainManager Instance { get; } // satır sonuna get ekle
```
Bir değişkene bir get veya set erişimcisi eklediğiniz anda, bu değişkenbu özel yöntemlerle dahili verilere erişim sağlayam özel bir değişken türü yani bir Property(özellik) olur.
- Set erişimcisi olmadan,bu özellik kesinlikle salt okunurdur, değeri hiçbir yerde ayarlanamaz.Bu nedenle, MenuUIHandler.cs’ de daha önce eklediğiniz o yaramaz kod satırında artık bir hata var.Bu iyi, başka bir sınıfın onu sıfırlayabilmesini istemiyoruz, böylece artık o kod satırını silebilirsiniz. 

```csharp
// MainManager.Instance = null; // bu kod satırını silin ve yorum yapın
```
- Yine de, hala bir problem var: özellik kesinlikle salt okunur olduğundan, kendi sınıfında bile ayarlanamaz, MainManager.cs’de satırda bu da hataya sebep oluyor.
- 
Instance = this;.Bunu düzeltmek için, bu hatayı çözmesi gereken özelliğe özel bir set ekleyin:

```csharp
public static MainManager Instance { get; private set; } //  özel ayarlayıcı(set) ekle
```
Bu kod ile, artık özelliğin değerini sınıf içinden ayarlayabilir(set), ancak yalnızca sınıfın dışından alabilirsiniz(get).O yalnızca kendi sınıfındaki değişkenleri kabul edecek şekilde, dış dünyadan kötüye kullanımdan ve bozulmadan korunacak şekilde kapsüllenmiştir! 

### Adım 6: Ayarlayıcı doğrulama ihtiyacını bulun
Yukarıda eklediğiniz get ve set, yalnızca değeri aldığınız veya ayarladığınız en temel kapsülleme biçimini temsil eder— hiçbir şey fantezi değil. Bu basiy uygulamaya auto-implemented property(otomatik uygulanan özellik) denir. 

```csharp
{ get; private set; }
```
Ancak bir değerin ayarlanabileceğini kısıtlamak veya ayarlanabilir olmasının yanı sıra, bir değerin daha özelleştirilmiş, manuel bir şekilde nasıl ayarlanabileceğini de kısıtlamak isteyebilirsiniz. Örneğin, başka bir sınıfın tarihi ayarlamasına izin veren bir uygulamada, ayı 1 ile 12 arasında bir sayı ile sınırlayabilirsiniz. Veya negatif sayıların kullanılmasını engellemek isteyebilirsiniz.

Warehouse projemizde, tam olarak bunu yapabileceğimiz bir yer var: asla negatif bir sayıya ayarlanmaması gerken bir Production Speed değişkenimiz var.

- ResourcePile.cs’ de , public ProductionSpeed değişkeninde korunmayan alanları bulun.


```csharp
public float ProductionSpeed = 0.5f;
```

Ayrıca bu public değişkenin bir sabitle çarpıldığı ProductivityUnit.cs içindeki satırı bulun.

```csharp
m_CurrentPile.ProductionSpeed *= ProductivityMultiplier;
```

Bizi, kendimizin gelecekteki bir versiyonunu veya başka bir kaygısız geliştiriciyi, bu proje için sorunlara neden olacak şekilde negatif bir sayıya ayarlamaktan alıkoyan hiçbir şey yok.
 
- Deneysel amaçlar için, production speed’ten çarpmak yerine çıkarmak için bu kod satırını yaramaz bir şekilde değiştirin.

```csharp
m_CurrentPile.ProductionSpeed -= ProductivityMultiplier; // replace '*=' with '-='
```
Ardından uygulamanızı test edin ve Productivity Unit’I(verimlilik birimini) kullanarak olumsuz bir sonuç elde edin:

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/encapsulation-object-oriented-programming/figures/JrProg_D.3_image5.png)

Alt text:warehouse sahnesinden mesajı görüntüleyen kullanıcı arayüzü ekranı açılır penceresi, “Resource Type 2 Producing at the speed of -1.5/s.”

İhtiyacımız olan, bu değişkenin asla negatif bir değere ayarlanmamasını sağlayan özel bir ayarlayıcı. 

### Adım 7: Arka alanı olan bir özellik yapın
Bir get veya set içinde doğrulamalar veya hesaplamalar yapmak için özelliğiniz için bir arka alanına ihtiyacınız vardır: public özellik tarafından açığa çıkarılan verileri depolayan özel bir alan (değişken)

Bunu bağlamda görelim.

- ResourcePile.cs’ de, ProductionSpeed ile aynı adı kullanarak bir private değişkeni (arka alanı) ekleyin, ancak bunun yerine değeri bu yeni özel alanda saklayın:

```csharp
private float m_ProductionSpeed = 0.5f; // yeni private arka alanı ekle
public float ProductionSpeed; //public özellikten değeri kaldır
```
- Arka alanı bildirildiğinde, artık biri public özelliğe eriştiğinde yedekleme alanını alan veya atayan get ve set işlevlerini manuel olarak ekleyebilirsiniz.

```csharp
private float m_ProductionSpeed = 0.5f;
public float ProductionSpeed // noktalı virgülü sil
{
    get { return m_ProductionSpeed; } // get arka alanı döndürür
    set { m_ProductionSpeed = value; } // set arka alanı kullanır
}
```
Bunlar basit get ve set methodları olmayacağı için “{get; set;}”  stenografisini daha önce otomatik olarak uygulanan özellik ile kullandık.

Bunun yerine, manuel olarak yapıyoruz. Birisi ProductionSpeed özelliğini aldığında(get),arka alanını döndürür. Biri ProductionSpeed özelliğini ayarladığında(set), arka alanı, girdikleri değere ayarlanır.
- Ardından, veriler artık public özellik yerine arka alanda depolandığından, özelliğe yapılan referanslar private alanla değiştirilmelidir. ResourcePile.cs’ de, ProductionSpeed’e yapılan iki referansı m_ProductionSpeed’ e aktarın.

```csharp
...
m_CurrentProduction += m_ProductionSpeed * Time.deltaTime; // swap in m_ version
...
return $"Producing at the speed of {m_ProductionSpeed}/s"; // swap in m_ version
```
Şimdi, ne zaman biri public özelliği almaya veya ayarlamaya çalışsa, set veya get aracılığıyle sınıfta kapsüllenmiş destek alanına erişir. Ancak set doğrulamasını henüz uygulamadık, bu nedenle negatif sayı hala mümkün! Bunu hemen düzelteceğiz.

### Adım 8: Negatif sayıları önlemek için set doğrulamasını uygulayın
Son olarak, yapılandırılan her şeyle, artık Production Speed’in her zaman pozitif bir sayı olmasını sağlayarak, belirlenen yöntem içinde bir doğrulama denetimi uygulayabiliriz. Aslında negatif bir sayı denenirse Concole’da bir uyarı mesajı bile görüntüleyebilirsiniz. 

- Set yöntemi içinde, değer negatifse bir uyarı mesajı görüntüleyen, ancak pozitifse değeri başarıyla ayarlayan bir if-else ifadesi ekleyin.


```csharp
set
{
    if (value < 0.0f)
        {
            Debug.LogError("You can't set a negative production speed!");
        }
        else
        {
          m_ProductionSpeed = value; //orjinal ayarlayıcı şimdi if/else ifadesinde
        }
    }
}
```
- Uygulamanızı tekrar test edin ve production speed negatif bir sayıya ayarlandığında ne olduğunu görün. Hata mesajını göstermelidir.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/encapsulation-object-oriented-programming/figures/JrProg_D.3_image6.png)

**Alt text:** “You can’t set a negative production speed!” hata mesajını görüntüleyen Console penceresinin yanındaki warehouse sahnesinin oyun görünümü.
- Ayarlayıcı doğrulaması tamamen uygulanmış ve test edilmişken, artık ProductivityUnit’I çıkarma operatörü yerine çarpma ile normal çalışmasına döndürebilirsiniz.

```csharp
m_CurrentPile.ProductionSpeed *= ProductivityMultiplier; //  '-=' ten '*=' e geri al
```

### Adım 9: Özet
Kapsülleme, değerlere erişilme ve değiştirilme biçimlerini denetleyerek kodunuzu korur, böylece kodunuz yalnızca açıkça tasarlandığı şekilde kullanılır.Soyutlama gibi, kapsüllerde kodunuzun altında yatan karmaşıklık ile ona erişilebilecek programcılar arasında bir ayrım katmanı yerleştirir.
Projede, bir değişkeni harici sınıflara salt okunur yapmak için otomatik olarak uygulanan bir özellik kullandınız. Ardından, negatif bir sayıya ayarlanmasını önlemek için bir get verisi ve set verisi yazdınız. Artık bu iki veri parçasının da kapsüllenmiş olduğunu, yaramazlık veya yanlış kullanımdan korunduğunu bilerek sağlıklı bir şekilde uyuyabilirsiniz.




















