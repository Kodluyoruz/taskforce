# Arayüzler (Interface)

Java&#39;da soyutlamayı sağlamanın bir başka yolu &quot;interface&quot; tanımlamaktır. &quot;interface&quot; &#39;ler abstract sınıflara göre soyutlama oranı çok yüksektir. Çünkü, &quot;interface&quot; içinde sadece soyut fonksiyonlar tanımlayabilirsiniz. Metot gövdesi olan normal fonksiyonlar tanımlayamazsınız.

&quot;interface&quot; &#39;ler sözleşmeler gibidir. Bir sınıf eğer bir interface&#39;den kalıtım alıyorsa o &quot;interface&quot; &#39;de tanımlı olan tüm soyut özellikleri karşılamak zorundadır. Eğer, kalıtım alan sınıf &quot;interface&quot; &#39;deki bazı metotlara ihtiyaç duymuyorsa yazılım tasarımınızda bir problem var demektir. Bu noktada &quot;Interface Segregation&quot; yapmanızı öneririm. &quot;Interface Segregation&quot; ile interface&#39;ler alt interface tanımlarına bölünebilir.

Neden &quot;interface&quot; kullanırız?

- En önemli sebebi soyutlama ve çok biçimliliği sağlamak için

- &quot;interface&quot; ile çoklu kalıtımı sağlayabiliriz. Bir sınıf birden fazla interface&#39;den kalıtım alabilir. Ayrıca, interface&#39;ler de birbirinden kalıtım alabilir.

- Gevşek bağlı yazılım modülleri kurmak için gereklidir.

  

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

## Nesneye Dayalı Programlamada &quot;IS-A&quot; İlişkisi

Sınıflar arasında kalıtım (Inheritance) yoluyla kurulan ilişkiler &quot;IS-A&quot; ilişki biçimidir. &quot;IS-A&quot; kalıbı İngilizce&#39;den türemiştir. Aslında, bu nesne arabadır, bu nesne faturadır, bu nesne insandır demenin bir başka biçimidir. Kalıtım konusunda da işledik, kalıtım yoluyla aslında bir aileye üye olursunuz. Nasıl ki gerçek hayatta genetik olarak ebeveynlerinizden miras alıyorsanız, aynı şekilde yazılımda da bir sınıf başka sınıftan kalıtım alıyorsa o ailenin bir alt türü olmuş oluyor.

Mesela, Tax tipinde bir ATA sınıf oluşturmuştuk. Bu sınıftan kalıtım alan KDVTax, OTVTax tipinde alt sınıflar da oluşturduk. Bu alt sınıflara &quot;Bu nesne nedir?&quot; sorusunu sorduğumuzda &quot;Tax&quot; sınıfının bir alt türüdür diyebiliyoruz. Yani bu nesne KDV vergisidir. Bu nesne OTV vergisidir diyebiliyoruz. Yani İngilizce&#39;ye dökecek olursak &quot;KDVTax class is a Tax&quot;, &quot;OTVTax class is a Tax&quot; prensibine uyuyor. Genellikle, ebeveyn-çocuk ilişkisi olan durumlar &quot;IS-A&quot; ilişkisine örnektir. Zaten, Kalıtım yoluyla sınıflar arasında ebeveyn-çocuk ilişkisi kurduğumuzdan Kalıtım yoluyla kurulan ilişkilerde &quot;IS-A&quot; ilişkisi vardır diyebiliriz.

## Nesneye Dayalı Programlamada &quot;HAS-A&quot; İlişkisi

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

