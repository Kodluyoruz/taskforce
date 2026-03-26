# Script İle GameObject Değiştirin

Bu eğitimde, script oluşturma hakkında öğrendiklerinizi bir GameObject'e uygulayacak ve Scene’de görünür bir değişiklik yapacaksınız.

Bu eğitimde şunları yapacaksınız:

- Yeni oluşturulan bir C# script dosyasında oluşturulan varsayılan kodu düzenleme
- GameObject'in dönüştürme özelliklerini değiştirmek için script kullanma
- Unity API'lerini kullanan kod yazma

**Aşama 1: Genel Bakış**

Bu eğitim size, script dosyalarınızda kullanabileceğiniz sınıfları, yöntemleri ve özellikleriyle birlikte tanımlayan Unity Scripting API'sini tanıtacaktır. (Bu kavramlara aşina değilseniz endişelenmeyin, size bunları anlatacağız.)
 
 
Unity Scripting API'si oldukça geniştir, ancak Unity çok sayıda kapsamlı belge sağlar ve IDE'niz size yol boyunca rehberlik eder. Unity'de programlama ile ilgileniyorsanız, script oluşturma ile ilgili yeni sorunları çözmeye çalışırken API'ye aşinalık kazanacaksınız.
 

Bu aşamada, [“The floor is lava!”](https://learn.unity.com/tutorial/challenge-the-floor-is-lava) projesinde topun boyutunu değiştirmek için script kullanacaksınız. Top yokuş aşağı yuvarlandıkça büyüyecek. Ayrıca, kendi başınıza daha fazla deneme yapmak istemeniz durumunda konumu ve dönüşü nasıl değiştireceğinizi de göstereceğiz.
 
**Aşama 2: Scriptinizi oluşturun**
-Yuvarlanan topunuz için GameObject'i seçin.
-Önceki eğitimde yaptığınız gibi, [GameObject'inize yeni bir script ekleyin.](https://learn.unity.com/tutorial/get-started-with-scripts#5fa1c722edbc2a002191f052) Yeni scripti BallTransform olarak adlandırın ve Visual Studio'da açmak için Assets klasörünüzde (Proje penceresi) çift tıklayın.
 
**İpucu**: IDE pencerenizin sağ tarafındaki pencereleri kapatabilirsiniz.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/change-gameObject-with-script/figures/B.3.3_img1.png)

Yeni BallTransform Bileşeninin varsayılan scripti

**Aşama 3: Ölçeği artır**
 
Topu büyütmek için her karede Scale özelliğine ekleme yapacağız.Inspector penceresinde bileşen özelliklerini ayarlayarak her karede ne kadar büyütüleceğini deneyebilirsin.
 
Bunu yapmak için, X, Y ve Z eksenlerinde Scale özelliğinin artışlarını tutmak için bir genel değişken oluşturacağız. Daha sonra bu artışları her karede topun Scale özelliğine ekleyeceğiz.
 
-Sınıf ifadesinin açılış paranteziyle Start() yönteminin yorumu arasına, scaleChange adlı bir değişkeni tanımlamak için bu satırı ekleyin:
 ```csharp
public Vector3 scaleChange;
 ````
Bu değişken public, dolayısıyla Inspector’da görünecektir. Değişken türü, Vector3, üç değeri tutan bir veri türüdür.
 
-Update() yönteminde yeni bir satırda şunu yazın:
 ```csharp
transform.
 ```
 
Bu, GameObject'inizin Transform Bileşenini ifade eder. Noktayı yazdığınızda, Transform Bileşeninin tüm özelliklerini ve yöntemlerini içeren bir açılır pencere göreceksiniz.
 
-localScale yazın veya seçin, ardından bu kod satırını aşağıdaki gibi tamamlayın:
 ```charp
transform.localScale += scaleChange;
 ```
Not: Eğer açılır menüde localScale bir seçenek değilse, Visual Studio'nun IDE'niz olarak ayarlandığından emin olun.
 
+= operatörü, topun büyümesi için ScaleChange'deki değerleri GameObject'in geçerli ölçek değerlerine ekleyecektir.
 
-Scriptinizi Ctrl+S/Cmd+S ile kaydedin.
 
Nihai sonuç şöyle görünecektir:

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/change-gameObject-with-script/figures/B.3.3_img2.png)

Topun ölçeğini değiştirecek olan BallTransform adlı tamamlanmış script

**Aşama 4: Ölçek ile deneme**

-Unity Editor'a dönün ve topu seçin. Inspector'da BallTransform bileşenini göreceksiniz.

![figures](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/unity-essentials/change-gameObject-with-script/figures/B.3.3_img2.png)

Scale Change özelliğine sahip BallTransform Bileşeni

Unity'nin komut dosyasındaki scaleChange değişken adını Inspector'da Scale Change'e otomatik olarak nasıl dönüştürdüğüne dikkat edin. Public değişkenleriniz için her zaman camelCase kullanarak bu özellikten yararlanabilirsiniz.
- Dönüştürme Bileşeninde gösterildiği gibi topunuzun mevcut Scale özellikleri göz önüne alındığında, her karede ölçeği ne kadar değiştireceğinizi düşünün. Saniyede kabaca 24 kare vardır; bu nedenle, topunuzun Scale’i 1,1,1 ise, 1, 1, 1 Scale Change değerleri her saniyede topun boyutunu 24 ile çarpacaktır! Bazı çok küçük sayılarla (0.01 gibi) denemeler yapın ve bunları test etmek için Play düğmesine basın.
- Deneneyebileceğiniz diğer şeyler:
- Top ne zaman sahanız için fazla büyümüş olur? Topun daha büyük boyutuna uyması için yuvarlandığı yüzeyleri ayarlamayı deneyin.
- Üç Scale Change değeri için farklı sayılar kullanın ve topunuzun yuvarlanmak yerine yuvarlanan dikdörtgen bir küremsiye dönüşmesini izleyin.
- Büyümesini sağlayabileceğiniz başka GameObject'ler var mı?


**Aşama 5: Daha fazla transformasyon deneyin**

İşte ölçeği değiştirdiğimiz gibi GameObjects'in dönüşünü ve konumunu değiştirmek için kullanabileceğiniz bazı kod satırları. Engel parkurunuzu daha ilginç hale getirmek için bunları GameObjects üzerinde kendi projenizde deneyin.
 
Pozisyonu yükseltin
```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
 
public class TrackPosition : MonoBehaviour
{
	public Vector3 positionChange;
 
	// Start is called before the first frame update
	void Start()
	{
    	
	}
 
	// Update is called once per frame
	void Update()
	{
    	transform.position += positionChange;
	}
}
```
 
Rotasyonu artırın
```csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
 
public class PlatformRotate : MonoBehaviour {
 
	public Vector3 rotateChange;
 
	// Start is called before the first frame update
	void Start()
	{
	
	}
 
	// Update is called once per frame
	void Update()
	{
    	transform.Rotate (rotateChange);
	}
}
```
 
**Note:** Döndürmeyi artıran script biraz farklıdır. Rotate() yöntemi, GameObject'in dönüşüne katkıda bulunurken, diğer scriptler, += operatörüyle scriptte hesaplanan özellikleri değiştirir.
 
Bu dönüştürme komut dosyalarını meydan okuma projesinde kullanmanın yollarından biri için aşağıdaki videoyu izleyin.
 
**Aşama 6: Programlama için diğer kaynaklar**
Unity'de script oluşturmanın gücünü daha yeni keşfetmeye başladınız. Kodlama konusunda yeniyseniz ve daha fazlasını öğrenmek istiyorsanız, Unity Essentials'ı tamamladıktan sonra Junior Programmer Pathway'i düşünün. Orada, burada deneyimlediklerinin ardındaki programlama terimleri ve kavramları hakkında daha fazlasını öğreneceksiniz.
 
Unity'de karmaşık etkileşimli projeler geliştirirken programlama yararlı bir beceri olsa da Unity ile oluşturmak için yazılımcı olmak gerekli değildir. Örneğin:

- 3B görselleştirmeler ve animasyonlar gibi belirli proje türleri hiç kod gerektirmez.
- “Visual scripting” için Bolt gibi kaynaklar, geliştiricilerin herhangi bir kod veya IDE bilgisi olmadan sezgisel sürükle ve bırak grafik bağlayıcıları kullanarak projelerinde mantık uygulamalarına olanak tanır.
- Unity Asset Store, birinci şahıs denetleyicisi veya envanter sistemi gibi ortak özelliklerin geliştirilmesi için önceden oluşturulmuş scriptler ve araçlar sağlar.
- Geliştiriciler, Unity Answers, Unity Forums ve Stack Overflow gibi sitelerle birlikte Google'ı kullanarak diğer geliştiriciler tarafından sağlanan kodlama çözümlerini kopyalayabilir, yapıştırabilir ve değiştirebilir. (Biraz googlelama ve çok fazla azim ile ne kadar ileri gidebileceğinize şaşıracaksınız!)
 
**Aşama 7: Özet**

Bu öğrenme projesi ile, Unity ile script oluşturmaya yalnızca kısa bir giriş yaptık. Meydan okuma projenizi script oluşturma ile geliştirdiniz: varsayılan script ve onun Start() ve Update() yöntemleri hakkında bilgi edindiniz ve GameObjects'in Transform Bileşenini değiştirmek için kod kullanarak Unity Scripting API'sine bir göz attınız. Script oluşturma, Unity'ye sonsuz olanaklar sunar. Yazılımcı değilseniz bile, artık Unity'de yapılabileceklerinizin boyutunu görebiliyor olmalısınız.




