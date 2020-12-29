## Soyutlama (Abstraction)

&quot;abstract&quot; Anahtar Kelimesi ve Soyut Sınıf Kavramı (Abstract Class)

Soyutlama kavramı sınıfın içindeki iç işleyişi dışarıdan izole etmek, yani gizlemektir. Örneğin: bilgisayarı kullanırken çoğu kullanıcı bilgisayarın iç işleyişinden haberi olmaz. Hafızanın işlemciyle haberleşmesi, işlemler arası senkronizasyon, klavyeden girilen değerlerin ekrana yansıması gibi birçok işlemin detayı kullanıcılardan gizlenmiş durumdadır. Kullanıcılar sadece bu fonksiyonları veya işlevleri bir arayüz vasıtasıyla çağırıp kullanmaktadır. İç detaylarına müdahale etmemektedir.

Aynı şekilde Java&#39;da sınıflarımızı tasarlarken bazı fonksiyonların ve işlevlerin sadece sınıf içinde kalması, dış dünyada bu sınıftan nesneleri kullanan kişilerin bu iç fonksiyonları bilemelerine gerek yoktur. Örneğin: KDV tutarını hesaplayan fonksiyonun sınıf içinde kullandığı birçok başka fonksiyon olabilir. Bu fonksiyonların sınıf dışına açılmasının bir anlamı yoktur. Sadece miktarı verip o miktara göre KDV tutarını hesaplayacak bir dış fonksiyon yeterlidir. Yazılım dünyasında bu nedenle soyutlama kavramı yazılım tasarımında önemli bir kavramdır. Soyutlama yapabilmek için &quot;abstract&quot; anahtar kelimesi, &quot;interface&quot; gibi yapılar bizlere yardımcı olmaktadır.

Soyutlama için Java&#39;da iki yöntem mevcuttur:

- &quot;interface&quot; tanımlamak
- &quot;abstract&quot; sınıf tanımlamak

### Soyut Sınıf (Abstract Class)

&quot;abstract&quot; anahtar kelimesi ile tanımlanan sınıflardır. Sınıfın içinde soyut (&quot;abstract&quot;) metotlar veya normal fonksiyonlar tanımlanabilir. Soyut sınıflardan &quot;new&quot; anahtar kelimesi ile bir nesne oluşturulamaz.

#### Soyut Sınıf Özellikleri:

- &quot;abstract&quot; anahtar kelimesi ile tanımlanmış olması gerekiyor.
- Soyut veya soyut olmayan fonksiyonlar tanımlanabilir.
- Soyut sınıflardan &quot;new&quot; anahtar kelimesi ile nesne oluşturulamaz.
- Kurucu metodu ve static fonksiyonlar tanımlanabilir.
- &quot;final&quot; kelimesi ile tanımlanmış fonksiyonları içerebilir. Bu final fonksiyonlar alt sınıflarda ezilemezler (override).



````java
// abstract sınıf örneği
public abstract class Doping {

	protected double price;
	protected double[] taxes;

	public double[] getTaxes() {
		return taxes;
	}

	public void setTaxes(double[] taxes) {
		this.taxes = taxes;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	// soyut metot örneği
	public abstract double calculate();
}
````

Yukarıda soyut bir sınıf tanımladık. &quot;abstract&quot; kelimesi ile sınıf tanımladık, ayrıca sınıfın içinde &quot;calculate&quot; isimli &quot;abstract&quot; metot tanımladık. Aynı zamanda soyut olmayan metotlar da tanımladık. Senaryomuzda bir e-ticaret sisteminde &quot;Doping&quot; tipinde ek ürünler olduğunu düşünelim. İlan tarihini güncelleyen bir doping çeşidimiz olsun, bir de üst sırada çıkmanızı sağlayan bir doping olsun. Bu iki alt sınıfta &quot;Doping&quot; isimli sınıftan kalıtım alarak belli özellikleri kendilerine alsınlar. Fakat, her dopingin ücret hesaplama yöntemi birbirinden farklı olabilir. Ayrıca, her dopingin mutlaka fiyat hesaplama fonksiyonu olmalıdır.

Yukarıdaki durumda &quot;abstract&quot; sınıf tanımlayıp diğer doping çeşitleri bu ATA sınıftan kalıtım alacaklardır. &quot;calculate&quot; isimli &quot;abstract&quot; metodu, &quot;metod ezme&quot; (overriding) yöntemiyle ezip metodun içini kendilerine göre dolduracaklardır. Alt sınıflardaki diğer özellikler soyutlama tekniğiyle dış dünyadan gizlenecektir. Dış dünyadan dopingi kullanmak isteyen baka bir sınıf veya kod parçası doping nesnesi üzerindeki &quot;calcualte&quot; fonksiyonunu çağırıp fiyatı hesaplacaktır. Diğer iç hesaplama ve çalışma detaylarını bilmeyecektir.

````java
public class TopOfListDoping extends Doping {

	public TopOfListDoping(double price) 
	{
		super.setPrice(price);
	}
	
	// "Doping" soyut sınıfından kalıtımla gelen, "calculate" isimli soyut metodu metot ezmesi yöntemiyle alt sınıf kendi ihtiyacına göre dolduruyor.
	// "TopOfList" isimli doping tipinde vergiler olmadığı için komisyon oranı eklenip ücret hesaplanıyor. Fakat, başka doping çeşitlerinde hesaplama farklı olabilir.
	@Override
	public double calculate() {
		
		return super.getPrice() + super.getPrice() * 0.35;
	}

}

public class UptodateDoping extends Doping {

	public UptodateDoping(double price, double[] taxes) {
		super.setPrice(price);
		super.setTaxes(taxes);
	}
	
	// "Doping" soyut sınıfından kalıtımla gelen, "calculate" isimli soyut metodu metot ezmesi yöntemiyle alt sınıf kendi ihtiyacına göre dolduruyor.
	// "UptodateDoping" isimli doping tipinde vergiler fiyata dahil olduğu için komisyon oranı eklenip ve vergiler hesaplanıp ücret belirleniyor.
	// Görüldüğü gibi her doping çeşidinin fiyat hesaplama yöntemleri birbirinden farklıdır. Soyutlama ile sınıflara ait iç çalışma detayları gizlenmmiş oluyor.
	// Doping tiplerinde sadece "calculate" isimli fonksiyonu dış dünyaya açtık. Diğer tüm fonksiyonlar ve özellikler sınıf içinde kaldı.
	@Override
	public double calculate() {
		
		return calculateTaxes() + commisionRate();
	}
	
	private double calculateTaxes() {
		
		double totalTaxValue = 0;
		for(int i=0; i < super.getTaxes().length; i++) {
			totalTaxValue += super.getTaxes()[i];
		}
		return totalTaxValue;
	}
	
	private double commisionRate() {
		return super.getPrice() * 0.2;
	}
}
````

&quot;Doping&quot; soyut sınıfından kalıtımla gelen, &quot;calculate&quot; isimli soyut metodu metot ezmesi yöntemiyle alt sınıf kendi ihtiyacına göre dolduruyor. &quot;TopOfList&quot; isimli doping tipinde vergiler olmadığı için komisyon oranı eklenip ücret hesaplanıyor. Fakat, başka doping çeşitlerinde hesaplama farklı olabilir.

&quot;Doping&quot; soyut sınıfından kalıtımla gelen, &quot;calculate&quot; isimli soyut metodu metot ezmesi yöntemiyle alt sınıf kendi ihtiyacına göre dolduruyor. &quot;UptodateDoping&quot; isimli doping tipinde vergiler fiayta dahil olduğu için komisyon oranı eklenip ve vergiler hesaplanıp ücret belirleniyor. Görüldüğü gibi her doping çeşidinin fiyat hesaplama yöntemleri birbirinden farklıdır. Soyutlama ile sınıflara ait iç çalışma detayları gizlenmiş oluyor. Doping tiplerinde sadece &quot;calculate&quot; isimli fonksiyonu dış dünyaya açtık. Diğer tüm fonksiyonlar ve özellikler sınıf içinde kaldı.

### Arayüzler (Interface)

Java&#39;da soyutlamayı sağlamanın bir başka yolu &quot;interface&quot; tanımlamaktır. &quot;interface&quot; &#39;ler abstract sınıflara göre soyutlama oranı çok yüksektir. Çünkü, &quot;interface&quot; içinde sadece soyut fonksiyonlar tanımlayabilirsiniz. Metot gövdesi olan normal fonksiyonlar tanımlayamazsınız.

&quot;interface&quot; &#39;ler sözleşmeler gibidir. Bir sınıf eğer bir interface&#39;den kalıtım alıyorsa o &quot;interface&quot; &#39;de tanımlı olan tüm soyut özellikleri karşılamak zorundadır. Eğer, kalıtım alan sınıf &quot;interface&quot; &#39;deki bazı metotlara ihtiyaç duymuyorsa yazılım tasarımınızda bir problem var demektir. Bu noktada &quot;Interface Segregation&quot; yapmanızı öneririm. &quot;Interface Segregation&quot; ile interface&#39;ler alt interface tanımlarına bölünebilir.

Neden &quot;interface&quot; kullanırız?

- En önemli sebebi soyutlama ve çok biçimliliği sağlamak için
- &quot;interface&quot; ile çoklu kalıtımı sağlayabiliriz. Bir sınıf birden fazla interface&#39;den kalıtım alabilir. Ayrıca, interface&#39;ler de birbirinden kalıtım alabilir.
- Gevşek bağlı yazılım modülleri kurmak için gereklidir.
- 





Bir sınıf &quot;interface&quot; &#39;den kalıtım alıyorsa &quot;implements&quot; anahtar kelimesi kullanılır. Örnek bir tanımlamaya göz atalım.

````java
// interface anahtar kelimesi ile bir interface tipi tanımlanır.
public interface PaymentProvider {
	
	// interface içinde yer alan fonksiyonların hepsi soyuttur.
	// Bu soyut fonksiyonlar interface'den kalıtım alan alt sınıflarda doldurulur.
	public boolean cancelCharge(int chargeId);
	
	public int charge(double totalPrice);
	
	public String loadInvoice(int chargeId);
	
}
````



Alt sınıflar interface&#39;den kalıtım alırlar.

````java
public class AssecoPaymentSystem implements PaymentProvider {

	@Override
	public boolean cancelCharge(int chargeId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public int charge(double totalPrice) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public String loadInvoice(int chargeId) {
		// TODO Auto-generated method stub
		return null;
	}

}

public class IyzicoPaymentSystem implements PaymentProvider {

	@Override
	public boolean cancelCharge(int chargeId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public int charge(double totalPrice) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public String loadInvoice(int chargeId) {
		// TODO Auto-generated method stub
		return null;
	}

}
````

#### Nesneye Dayalı Programlamada &quot;IS-A&quot; İlişkisi

Sınıflar arasında kalıtım (Inheritance) yoluyla kurulan ilişkiler &quot;IS-A&quot; ilişki biçimidir. &quot;IS-A&quot; kalıbı İngilizce&#39;den türemiştir. Aslında, bu nesne arabadır, bu nesne faturadır, bu nesne insandır demenin bir başka biçimidir. Kalıtım konusunda da işledik, kalıtım yoluyla aslında bir aileye üye olursunuz. Nasıl ki gerçek hayatta genetik olarak ebeveynlerinizden miras alıyorsanız, aynı şekilde yazılımda da bir sınıf başka sınıftan kalıtım alıyorsa o ailenin bir alt türü olmuş oluyor.

Mesela, Tax tipinde bir ATA sınıf oluşturmuştuk. Bu sınıftan kalıtım alan KDVTax, OTVTax tipinde alt sınıflar da oluşturduk. Bu alt sınıflara &quot;Bu nesne nedir?&quot; sorusunu sorduğumuzda &quot;Tax&quot; sınıfının bir alt türüdür diyebiliyoruz. Yani bu nesne KDV vergisidir. Bu nesne OTV vergisidir diyebiliyoruz. Yani İngilizce&#39;ye dökecek olursak &quot;KDVTax class is a Tax&quot;, &quot;OTVTax class is a Tax&quot; prensibine uyuyor. Genellikle, ebeveyn-çocuk ilişkisi olan durumlar &quot;IS-A&quot; ilişkisine örnektir. Zaten, Kalıtım yoluyla sınıflar arasında ebeveyn-çocuk ilişkisi kurduğumuzdan Kalıtım yoluyla kurulan ilişkilerde &quot;IS-A&quot; ilişkisi vardır diyebiliriz.

#### Nesneye Dayalı Programlamada &quot;HAS-A&quot; İlişkisi

İngilizce terim olarak &quot;Aggregation&quot; olarak adlandırılır. Kelime anlamı olarak &quot;bir araya getirme&quot; olarak adlandırılır. Sınıf içinde başka bir sınıfın nesne referansını tutuyorsak bu &quot;HAS-A&quot; ilişki biçimidir. &quot;HAS-A&quot; ifade de &quot;sınıfımız bu nesneye sahip midir?&quot; sorusundan ortaya çıkıyor. HAS-A ilişkilerde bir aile üyesi olmanıza gerek yoktur. Bunu Computer sınıfı örneğimiz üzerinden açıklayalım.



````java
public class Computer {

	// Screen ve Keyboard tipinden bir nesneleri referans olarak tutuyoruz.
	// "keyboard" ve "screen" isimli nesneler "HAS-A" ilişkisine örnektir.
	// "Inheritance" yoluyla değil de "Aggregation" yoluyla sınıf içinde tanımlanmıştır.
	
	/*
	 * Keyboard ve Screen niçin Computer sınıfına kalıtım vermemiştir diye sorabilirsiniz.
	 * Çünkü, Keyboard ve Screen veri tipi, Computer veri tipiyle bir akrabalık ilişkisi yoktur.
	 * Computer başka bir nesnedir. Keyboard başka bir nesnedir. Akrabalık bağı bulunmadığı için bu sınıflardan nesneleri "Aggregation" yoluyla
	 * Computer sınıfı içinde kullandık.
	 * 
	 * Fakat, Computer sınıfından kalıtım almış Laptop ve Desktop alt sınıfları kalıtım oluyla ilişki kurarlar.
	 * Çünkü, Desktop ve Laptop, Computer nesnesinin bir alt türüdür. Bir akrabalık ilişkisi vardır. 
	 * Aynı ailenin üyesidirler. Computer sınıfı ile Desktop ve Laptop sınıfları arasındaki ilişki "IS-A" ilişkisidir.
	 * 
	 */
	
	protected Keyboard keyboard;
	protected Screen screen;
	
	protected Computer(Screen screen, Keyboard keyboard) {
		
		this.screen = screen;
		this.keyboard = keyboard;
	}
	
	public void showOnScreen(String message) {
		
		this.screen.show(message);
	}
	
	public String readFromKeyboard() {
		
		return this.keyboard.readFromKeyboard();
	}
}

````



&quot;Screen&quot; ve &quot;Keyboard&quot; tipinden bir nesneleri referans olarak tutuyoruz. &quot;keyboard&quot; ve &quot;screen&quot; isimli nesneler &quot;HAS-A&quot; ilişkisine örnektir. &quot;Inheritance&quot; yoluyla değil de &quot;Aggregation&quot; yoluyla sınıf içinde tanımlanmıştır.

&quot;Keyboard&quot; ve &quot;Screen&quot; sınıfları ile &quot;Computer&quot; sınıfı arasında neden kalıtım yoluyla bir ilişki kurmuyoruz diye sorabilirsiniz. Çünkü, &quot;Keyboard&quot; ve &quot;Screen&quot; veri tipi, &quot;Computer&quot; veri tipiyle bir akrabalık ilişkisi yoktur. &quot;Computer&quot; başka bir nesnedir. Keyboard başka bir nesnedir. Akrabalık bağı bulunmadığı için bu sınıflardan nesneleri &quot;Aggregation&quot; yoluyla &quot;Computer&quot; sınıfı içinde kullandık.

````java
public class Desktop extends Computer {

	public Desktop(Screen screen, Keyboard keyboard) {
		super(screen, keyboard);
	}

}

public class Laptop extends Computer {

	public Laptop(Screen screen, Keyboard keyboard) {
		super(screen, keyboard);
	}

}
````



Fakat, &quot;Computer&quot; sınıfından kalıtım almış &quot;Laptop&quot; ve &quot;Desktop&quot; alt sınıfları kalıtım yoluyla ilişki kurarlar. Çünkü, &quot;Desktop&quot; ve &quot;Laptop&quot;, &quot;Computer&quot; nesnesinin bir alt türüdür. Bir akrabalık ilişkisi vardır. Aynı ailenin üyesidirler. &quot;Computer&quot; sınıfı ile &quot;Desktop&quot; ve &quot;Laptop&quot; sınıfları arasındaki ilişki &quot;IS-A&quot; ilişkisidir.

