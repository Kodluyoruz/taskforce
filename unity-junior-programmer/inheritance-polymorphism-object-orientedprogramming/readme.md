## Nesne yönelimli programlamada Inheritance ve Polymorphism 

Bu öğreticide, OOP'nin birbiriyle yakından ilişkili iki sütunu olan inheritance ve polimorfizm hakkında bilgi edineceksiniz.
 
- Bir ebeveyn ve alt sınıf arasında işlevselliği paylaşmak için inheritanceın nasıl kullanıldığını açıklayın
- Bir alt sınıfın kendi üst sınıfına göre yapabilecekleri ve yapamayacakları da dahil olmak üzere, bir ebeveyn ve alt sınıf arasındaki ilişkiyi tanımlayın.
- Kodu basitleştirmek için inheritanceın kullanılabileceği fırsatları tanıyın.
- Bir alt sınıfta üst sınıf işlevselliğini değiştirmek için polimorfizmin nasıl kullanıldığını açıklayın
- Derleme zamanında (yöntem over loadingleri) ve çalışma zamanında (yöntem geçersiz kılmaları) polimorfizmin nasıl uygulanabileceğini açıklayın.
- Belirli bir proje için üst düzey bir sistem mimarisi önerin


### 1. Adım: Genel Bakış
Nesne yönelimli programlamanın sonraki iki sütunu olan inheritance ve polimorfizm derinden iç içe geçmiş durumda. Inheritance, adından da anlaşılacağı gibi, farklı nesneler arasındaki ebeveyn-çocuk ilişkilerine odaklanır. Polimorfizm inheritanceın bir sonucudur ve bir alt sınıfın bir üst sınıftan miras aldığı şeyi değiştirme sürecini ifade eder. Birlikte kullanıldığında, inheritance ve polimorfizm, bir uygulamada yazmanız gereken kod miktarını azaltabilir.
 
### Adım 2: Miras nedir?

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/inheritance-polymorphism-object-orientedprogramming/figures/JrProg_D.2_image1.png)

Alternatif metin: Soyutlama, Kapsülleme, Inheritance ve Polimorfizm ile soldan sağa etiketlenmiş, arka arkaya dört sütunun görüntüsü. Inheritance etiketli ikinci sütun vurgulanır.
 
Miras diğer sınıfların (alt sınıflar olarak adlandırılır) oluşturulabileceği bir birincil sınıf (üst sınıf olarak da bilinir) oluşturma sürecidir. Bir alt sınıf, üst sınıfın tüm özelliklerini otomatik olarak devralır veya devralır. Bir uygulamada farklı sınıfların benzer özellikleri paylaşması yaygındır. Örneğin, bir video oyunu birçok farklı türde düşman sınıfı içerebilir, ancak kendi sağlıklarını yönetme ve oyuncuya zarar verme yeteneği gibi aynı temel özellikleri paylaşmaları muhtemeldir. Inheritance ile, her bir düşman sınıfı için bu sağlık ve hasar işlevselliğini yazma ihtiyacı ortadan kalkar, böylece her sınıfa özgü yazma işlevselliğine odaklanabilirsiniz.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/inheritance-polymorphism-object-orientedprogramming/figures/JrProg_D.2_image2.png)

Alternatif metin: Üst sınıflar ve alt sınıflar arasındaki ilişkiyi gösteren akış şeması. Düşman sınıfı diyagramın en üstündedir ve oklar aşağı doğru üç alt sınıfa işaret eder: Hırsız sınıfı, Aldatma sınıfı ve Kendini tanımlayan 'kötü adam' sınıfı. Hem ebeveyn hem de alt sınıflar, "hasar verme" ve "sağlığı azaltma" gibi paylaşılan davranışlara sahiptir, ancak her alt sınıf, ebeveyn veya diğer alt sınıflar tarafından paylaşılmayan benzersiz bir davranışa da sahiptir.
 
Şimdiye kadar Unity'de yazdığınız her komut dosyasında zaten inheritancedan yararlanıyorsunuz. Varsayılan olarak, yeni bir sınıf oluşturduğunuzda, MonoBehaviour'dan miras alır:


```csharp
public class SomeClass : MonoBehaviour { }
```
MonoBehaviour, tüm temel Unity komut dosyası oluşturma işlevlerinin devraldığı temel sınıftır. MonoBehaviour olmadan OnTriggerEnter, GetComponent'i çağıramaz, hatta Başlat veya Güncelle'yi bile kullanamazsınız!
 
Yukarıdaki şemada, devralan sınıflarını MonoBehaviour'dan Enemy'ye değiştirdikleri için, tüm alt düşman sınıflarının Unity işlevselliğine erişme yeteneklerini kaybedecekleri görünebilir. Neyse ki, Enemy sınıfı Monobehaviour'dan miras aldığı için, Enemy sınıfının çocukları da MonoBehaviour'un çocukları olarak kabul edilir!

### Adım 3: Polimorfizm nedir?

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/inheritance-polymorphism-object-orientedprogramming/figures/JrProg_D.2_image3.png)

Alternatif metin: Soyutlama, Kapsülleme, Inheritance ve Polimorfizm ile soldan sağa etiketlenmiş, arka arkaya dört sütunun görüntüsü. Polimorfizm etiketli üçüncü sütun vurgulanmıştır.
 
Bir üst sınıftan temel işlevleri devralmak yararlı olsa da, alt sınıfın üst sınıfla tam olarak aynı eylemi gerçekleştirmesini istemediğiniz birçok durum vardır. Polimorfizm, bir nesnenin üst sınıfından miras aldığı şeyin işlevselliğini değiştirmenize olanak tanır.

```csharp
public class Enemy : MonoBehaviour
{
	public void DealDamage ()
	{
    	Player.Health -= 10;
	}
}

```
Yukarıdaki örnekte, Enemy sınıfı, çağrıldığında Oyuncunun sağlığından 10 puan kaldıran bir DealDamage yöntemine sahiptir. Enemy'nin çocuğu olan Thief sınıfı, bu yöntemi sınıfta bildirmeden çağırabilir.


```csharp
public class Thief : Enemy
{
	private void Update()
	{
    	if (Player.isSeen)
    	{
        	DealDamage(); // method from parent class can be called
    	}
	}
}

```
Hırsızın Düşman sınıfıyla tam olarak aynı miktarda hasar vermesini istiyorsanız bu iyidir, ancak ya farklı bir değerde olmasını istiyorsanız? Bu değişiklikler, yöntemi geçersiz kılma olarak bilinen süreç aracılığıyla gerçekleştirilir.
 
Üst sınıfta geçersiz kılmak istediğiniz yöntemin önce geçersiz kılma için işaretlenmesi gerekir. Bu, onu sanal bir yöntem haline getirerek yapılır:


```csharp
public class Enemy : MonoBehaviour {

	public virtual void DealDamage () { // virtual keyword allows overriding

    	Player.Health -= 10;
	}
}

```
Bir yöntemi sanal olarak belirlemek, geçersiz kılınabileceğini, ancak zorunlu olmadığını gösterir. Bu, mevcut örnek için idealdir, çünkü Thief alt sınıfının DealDamage yöntemini değiştirmesi gerekebilirken, Scoundrel sınıfı gibi başka bir alt sınıf gerekmeyebilir.
 
DealDamage sanal olarak ayarlandığında, Thief sınıfı DealDamage için kendi yöntemini oluşturarak onu geçersiz kılabilir. Burada sanal yerine geçersiz kılma notasyonunu kullanacağız. Artık özellikle Thief sınıfı için yönteme yeni işlevler ekleyebilirsiniz:



```csharp
public class Thief : Enemy
{
	public override void DealDamage() // can override virtual methods from parent class
	{
    	Player.Health -= 2;
    	CommitPettyTheft();
	}
	private void Update()
	{
    	if (Player.isSeen)
    	{
        	DealDamage();
    	}
	}
}

```
Thief sınıfı artık ana Enemy sınıfından daha az miktarda hasar veriyor ve ayrıca Thief'e özgü yöntemlerden birini çağırıyor. Artık Update'te bir Hırsız nesnesi tarafından DealDamage çağrıldığında, ana yöntem yerine özelleştirilmiş DealDamage yöntemi çağrılacak.
 
### 4. Adım: Yeni bir birim türü oluşturun

Proje özetinde, inşa edilecek öğelerden birinin bir üretkenlik birimi olduğunu göreceksiniz. Bu birim, kullanıcının sahnede seçtiği herhangi bir kaynak türünün üretkenliğini artırmalıdır. Kullanıcı kaynağı forkliftle aynı şekilde seçecektir: üniteyi seçmek için sol tıklayın ve taşınacak kaynağı seçmek için sağ tıklayın. Bir kaynağın verimliliği ancak verimlilik birimi aktif olarak üzerinde çalışırken artırılmalı ve birim kaynaktan ayrılırsa normal üretim hızına dönmelidir.
 
Projenizde şöyle görünebilir:
 
Forklift, kendisi Unit sınıfının bir alt öğesi olan TransporterUnit betiği tarafından yönetilir. Unit sınıfına bakarsanız, hareket için ihtiyaç duyduğumuz tüm işlevlerin orada olduğunu görürsünüz, bu nedenle üretkenlik birimimizin Unit'in başka bir alt sınıfı olması mantıklıdır.
 
- Hazır Yapılar klasöründe, Üretkenlik Birimi Hazır Yapısını bulun ve sahneye ekleyin. Bu, kaynak yığınlarınızın kalitesini artıracak işçidir!

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/inheritance-polymorphism-object-orientedprogramming/figures/JrProg_D.2_image4.png)

**Alternatif metin:** Kollarını tutan bir işçi olan “ProductivityUnit Prefabrik” in Sahne görünümünde yakın çekim

- Yeni bir C# betiği oluşturun ve onu ProductivityUnit olarak adlandırın.
 
- Visual Studio'da açmak için çift tıklayın. Başlat ve Güncelle yöntemlerini silin.
 
- ProductivityUnit sınıfını Unit'ten devralmak için, MonoBehaviour'u sınıf bildiriminden kaldırın ve Unit ile değiştirin.

```csharp
public class ProductivityUnit : Unit // replace MonoBehaviour with Unit
{

}

```
Komut dosyanızda şunu söyleyen bir hata görünecektir: 'ProductivityUnit', devralınan soyut üye 'Unit.BuildingInRange()' uygulamıyor. Endişelenme - bunu hemen düzelteceğiz.
 
- Unit.cs'e bakarsanız, aşağıdaki kodu göreceksiniz:


```csharp
protected abstract void BuildingInRange();
```
Geçersiz kılmanın isteğe bağlı olduğu sanal yöntemlerin aksine, bu yöntem geçersiz kılınması gerektiğini belirten soyut gösterimi kullanır. Soyut yöntemler, tüm alt sınıfların belirli bir işlevsellik türüne ihtiyaç duyacağını, ancak bu işlevselliğin her alt sınıfta ayrı olarak kodlanması gerektiğini fark ettiğinizde yararlıdır. Bu durumda, BuildingInRange, bir birim bir kaynak yığınıyla (bina sınıfının bir çocuğu olan) etkileşim kurduğunda olan her şeyi yönetmeyi amaçlar, ancak meydana gelen şey, hangi alt sınıfın yöntemi çağırdığına bağlı olarak değişecektir.
 
Bu nedenle, ProductivityUnit.cs'de yapmanız gereken tek şey bu yöntemi geçersiz kılmaktır:

```csharp
protected override void BuildingInRange()
{
	
}

```

- Bu hata çözüldüğünde, Unit sınıfını genişleterek otomatik olarak kazandığımız işlevselliği keşfedelim. ProductivityUnit betiğini kaydedin ve Unity'ye dönün.

- ProductivityUnit komut dosyasını Prefabs’'e ekleyin. Sınıf, Unit'in bir alt öğesi olduğundan, hızını kontrol etmesi için otomatik olarak bir genel kayan nokta değişkeni verildiğine dikkat edin.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/inheritance-polymorphism-object-orientedprogramming/figures/JrProg_D.2_image5.png)

**Alternatif metin:** Hız özelliğinin 3 olarak ayarlandığını gösteren Üretkenlik Birimi bileşeni.
 
- Oynat'a basın. Yeni çalışanınıza sol tıklayın ve ardından kaynak yığınlarından birine sağ tıklayın. Çalışanınız otomatik olarak kaynak yığınına gidecektir. Sahnede başka bir yere sağ tıklarsanız, oraya da hareket edecektir. Tüm bunlar, ProductivityUnit sınıfına tek bir ek kod satırı yazılmadan gerçekleştirilir - mevcut tüm işlevler Unit'ten devralınmıştır.

### Adım 5: BuildingInRange yöntemini geçersiz kılın
Verimlilik biriminin temel özelliği, halihazırda atanmış olduğu kaynak yığınının üretim hızını artırmaktır. Bu işlevselliği geliştirelim.
 
- BuildingInRange yöntemini tamamlamak için, kullanıcının seçtiği herhangi bir kaynak yığınını takip edecek bir değişkene ihtiyacınız olacak. Sınıfın en üstünde, m_CurrentPile adında bir ResourcePile değişkeni oluşturun ve onu null olarak ayarlayın. Ayrıca, kaynak verimliliğinin ne kadar artırılması gerektiğini tanımlayacak bir şamandıraya da ihtiyacınız olacak:

```csharp
public class ProductivityUnit : Unit
{
    // new variables
	private ResourcePile m_CurrentPile = null;
  public float ProductivityMultiplier = 2;

```
- Üretkenlik birimi bir kaynak yığını aralığında olduğunda ne olduğunu kodlamak için BuildingInRange yöntemine dönün. Bu kod her kareyi çalıştıracaktır. Verimlilik birimi, kaynak yığını olan bir Binanın menziline girdiğinde, üretim hızının çerçeve boyunca artmasını istiyoruz. O zaman bu kodun sonraki karelerde çalışmasını engellemek istiyoruz, yoksa üretim hızı artmaya devam edecek!

```csharp
protected override void BuildingInRange()
{
	// start of new code
    if (m_CurrentPile == null)
	{
    	ResourcePile pile = m_Target as ResourcePile;

    	if (pile != null)
    	{
        	m_CurrentPile = pile;
            m_CurrentPile.ProductionSpeed *=  ProductivityMultiplier;
    	}
	}
	// end of new code
}

```
"As ResourcePile" gösterimi, yığın değişkenini yalnızca m_Target bir ResourcePile türüyse m_Target olarak ayarlar. m_Target bir Temel ise, bu türler eşleşmeyecek ve yığın boş olarak ayarlanacaktır. Bu, m_Target'ın bir kaynak yığını olup olmadığını kontrol etmenin etkili bir yoludur. (yığın != null) ise, m_CurrentPile bu kaynak yığınına ayarlanır ve ProductionSpeed ikiye katlanır.

Bir sonraki çerçevede, yöntemin en üstündeki if ifadesi bu kodun tekrar çalışmasını engelleyecektir, çünkü m_CurrentPile bir değere (kaynak yığını) ayarlanacaktır.
 
Bu kodda dikkat edilmesi gereken bir diğer ilginç şey de, ebeveyn Unit sınıfında "korumalı" bir değişken olan m_Target değişkenine erişebilmenizdir. Korumalı değişkenler özel değişkenler gibidir, ancak bunlara herhangi bir alt sınıf tarafından da erişilebilir - buna yalnızca ProductivityUnit.cs Unit.cs'den türetildiği için erişebildiniz.
 
- Komut dosyasını kaydedin ve Unity'ye dönün.
- Oynat'a basın ve çalışanınızı bir kaynak yığınına gönderin.
- Verimlilik birimi gelmeden önce kaynak yığınını seçin ve geldiğinde üretim hızının iki katına çıktığını unutmayın.
 
### 6. Adım: OverLoads’ı Anlayın
Verimlilik birimini sonlandırmak için, özette açıklandığı gibi, kaynak yığınının üretim hızının birim ayrılır ayrılmaz önceki değerine dönmesini sağlamanız gerekir. Unit sınıfında bu, GoTo yöntemiyle yönetilir - ancak sınıfa bakarsanız, bu ada sahip bir değil iki yöntem olduğunu fark edeceksiniz:


```csharp
public virtual void GoTo(Building target)
{
	m_Target = target;

	if (m_Target != null)
	{
        m_Agent.SetDestination(m_Target.transform.position);
    	m_Agent.isStopped = false;
	}
}

public virtual void GoTo(Vector3 position)
{
	m_Target = null;
	m_Agent.SetDestination(position);
	m_Agent.isStopped = false;
}

```

Yöntemler adları paylaşamaz - değil mi? Yöntem over loadingsi olarak adlandırılan bu özel durum dışında çoğu durumda bu doğrudur. Her iki GoTo yönteminin de farklı parametre türlerine ve farklı işlevlere sahip olduğuna dikkat edin. Yöntem over loading’i, tek bir yöntemi çok amaçlı hale getirir. Kullanıcı bir hedef seçtiğinde, bu over loading çifti, seçtikleri nesnenin türüne bağlı olarak navigasyonu gerçekleştirecektir.
 
İlk GoTo yöntemi, parametre olarak kullanıcı bir kaynak yığınına veya tabana sağ tıkladığında toplanan bir Yapı sınıfını alır. Bu parametre daha sonra Unit komut dosyasındaki SetTarget yöntemine iletilir.
 
İkinci GoTo yöntemi, kullanıcının bir kaynak yığını yerine depoda rastgele bir nokta seçtiği durumlar için bir Vector3 parametresi alır.
 
Bunları ayrı yöntemler olarak yazabilirsiniz, ancak birden çok aramayı hatırlamanız gerekir! Yöntem over loadinginde, yalnızca bir çağrıyı hatırlamanız gerekir ve iletilen veri türü/türleri hangi kodun çalıştırılacağını belirleyecektir.
 
Bu, Unity'nin yerleşik yöntemlerinde gördüğünüz başka bir özelliktir. Unity API'sinden bir yöntem çağırdığınızda ve kullanmak için birçok parametre seçeneğiniz olduğunda, yöntem over loadinginden yararlanırsınız. Örneğin, transform.Translate'de dört ayrı aşırı yük vardır; bunlardan birkaçını, Kodla Oluştur'un ilk ünitesinde bir arabayı yolda hareket ettirmek için kullandınız:

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-junior-programmer/inheritance-polymorphism-object-orientedprogramming/figures/JrProg_D.2_image6.png)

**Alternatif metin:** Create with Code Unit 1'de yapılan “Sürüş Simülasyonu” prototipinden oynanış görüntüsü. Bu, yolun ortasından geçen kırmızı bir aracı gösterir.

```csharp
public void Translate(Vector3 translation);
// implemented as transform.Translate(Vector3.forward);
 
public void Translate(float x, float y, float z);
// implemented as transform.Translate(0, 0, 1);
 
public void Translate(Vector3 translation, Transform relativeTo);
// implemented as transform.Translate(Vector3.forward, Space.Self);
 
public void Translate(float x, float y, float z, Transform relativeTo);
// implemented as transform.Translate(0, 0, 1, Space.Self);

```


### 7. Adım: GoTo yöntemlerini geçersiz kılın
Üretkenlik biriminin, şu anda bir kaynak yığını üzerinde çalışıp çalışmadığını kontrol etmesi ve görmesi ve ardından, çalışıyorsa, temel GoTo yönteminde meydana gelenleri gerçekleştirmesi ve uzaklaşmadan önce bu kaynak yığınının üretim çıktısını orijinal değerine geri döndürmesi gerekir. Bunu yapmak için GoTo yöntemlerini geçersiz kılalım.
 
- ProductivityUnit komut dosyasında, ResetProductivity adlı yeni bir yöntem oluşturun. GoTo yöntemlerinin her ikisi de aynı işlevselliği gerektirir, bu nedenle her ikisinden de çağırmak için bir yöntem oluşturacağız.
- Ardından, m_CurrentPile değişkeninin boş olup olmadığını kontrol edin. Değilse, orijinal değerine döndürmek için m_currentPile.ProductionSpeed'i ProductivityMultiplier'a bölün ve ardından null olarak ayarlayın.

```csharp
void ResetProductivity()
{
	if (m_CurrentPile != null)
	{
    	m_CurrentPile.ProductionSpeed /= ProductivityMultiplier;
    	m_CurrentPile = null;
	}
}

```
- Hedef parametre olarak Building ile yeni bir genel geçersiz kılma GoTo yöntemi oluşturun:

```csharp
public override void GoTo(Building target)
{

}
```

Oluşturduğunuz ResetProductivity yöntemini ve base.GoTo yöntemini çağırın.

```csharp
public override void GoTo(Building target)
{
    ResetProductivity(); // call your new method
	base.GoTo(target); // run method from base class
}

```

Temel etiket, komut dosyasına bu geçersiz kılma yöntemindeki yeni koda ek olarak orijinal yöntemi çalıştırmasını söyler.
- Aynı işlemi diğer GoTo için de tekrarlayacağız:

```charp
public override void GoTo(Vector3 position)
{
	ResetProductivity();
	base.GoTo(position);
}
```

Bu yöntemler, kullanıcı üretkenlik birimi için yeni bir konum seçer seçmez çalışacaktır. Hareket etmeden önce, halihazırda bir verimlilik yığını seçilmişse, mevcut yığının üretim hızını orijinal hızına geri döndürür.

- Komut dosyasını kaydedin ve Unity'ye dönün ve tekrar test edin.
- Çalışanınızı bir kaynak yığınına gönderin ve çalışan ona ulaşmadan yığını seçin.
- Kaynak yığınının artan üretim hızını gözlemleyin ve ardından işçinizi başka bir yığına gönderin.
- Orijinal yığını yeniden seçin ve oranının azaltılmış miktarına döndüğünü unutmayın.
 
### 8. Adım: Özet
Inheritance ve polimorfizm, sınıflarınız arasında, yazmanız gereken toplam kod miktarını azaltmaya yardımcı olan karşılıklı ilişkiler oluşturmanıza yardımcı olur. Bu öğreticide, ebeveyn Unit sınıfının işlevselliğini genişleten kendinize ait yeni bir sınıf oluşturdunuz.





























