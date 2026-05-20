# Arayüzler (Interface)

Java'da soyutlamayı sağlamanın bir başka yolu "interface" tanımlamaktır. "interface" 'ler abstract sınıflara göre soyutlama oranı çok yüksektir. Çünkü, "interface" içinde sadece soyut fonksiyonlar tanımlayabilirsiniz. Metot gövdesi olan normal fonksiyonlar tanımlayamazsınız.

"interface"ler sözleşmeler gibidir. Bir sınıf eğer bir interface'den kalıtım alıyorsa o "interface"de tanımlı olan tüm soyut özellikleri karşılamak zorundadır. Eğer, kalıtım alan sınıf "interface"deki bazı metotlara ihtiyaç duymuyorsa yazılım tasarımınızda bir problem var demektir. Bu noktada "Interface Segregation" yapmanızı öneririm. "Interface Segregation" ile interface'ler alt interface tanımlarına bölünebilir.

Neden "interface" kullanırız?

- En önemli sebebi soyutlama ve çok biçimliliği sağlamak için

- "interface" ile çoklu kalıtımı sağlayabiliriz. Bir sınıf birden fazla interface'den kalıtım alabilir. Ayrıca, interface'ler de birbirinden kalıtım alabilir.

- Gevşek bağlı yazılım modülleri kurmak için gereklidir.

Bir sınıf "interface"den kalıtım alıyorsa "implements" anahtar kelimesi kullanılır. Örnek bir tanımlamaya göz atalım.

```java
// interface anahtar kelimesi ile bir interface tipi tanımlanır.
public interface PaymentProvider {

	// interface içinde yer alan fonksiyonların hepsi soyuttur.
	// Bu soyut fonksiyonlar interface'den kalıtım alan alt sınıflarda doldurulur.
	public boolean cancelCharge(int chargeId);

	public int charge(double totalPrice);

	public String loadInvoice(int chargeId);

}
```

Alt sınıflar interface'den kalıtım alırlar.

```java
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
```

## Nesneye Dayalı Programlamada "IS-A" İlişkisi

Sınıflar arasında kalıtım (Inheritance) yoluyla kurulan ilişkiler "IS-A" ilişki biçimidir. "IS-A" kalıbı İngilizce'den türemiştir. Aslında, bu nesne arabadır, bu nesne faturadır, bu nesne insandır demenin bir başka biçimidir. Kalıtım konusunda da işledik, kalıtım yoluyla aslında bir aileye üye olursunuz. Nasıl ki gerçek hayatta genetik olarak ebeveynlerinizden miras alıyorsanız, aynı şekilde yazılımda da bir sınıf başka sınıftan kalıtım alıyorsa o ailenin bir alt türü olmuş oluyor.

Mesela, Tax tipinde bir ATA sınıf oluşturmuştuk. Bu sınıftan kalıtım alan KDVTax, OTVTax tipinde alt sınıflar da oluşturduk. Bu alt sınıflara "Bu nesne nedir?" sorusunu sorduğumuzda "Tax" sınıfının bir alt türüdür diyebiliyoruz. Yani bu nesne KDV vergisidir. Bu nesne OTV vergisidir diyebiliyoruz. Yani İngilizce'ye dökecek olursak "KDVTax class is a Tax", "OTVTax class is a Tax" prensibine uyuyor. Genellikle, ebeveyn-çocuk ilişkisi olan durumlar "IS-A" ilişkisine örnektir. Zaten, Kalıtım yoluyla sınıflar arasında ebeveyn-çocuk ilişkisi kurduğumuzdan Kalıtım yoluyla kurulan ilişkilerde "IS-A" ilişkisi vardır diyebiliriz.


## Nesneye Dayalı Programlamada "HAS-A" İlişkisi

İngilizce terim olarak "Aggregation" olarak adlandırılır. Kelime anlamı olarak "bir araya getirme" olarak adlandırılır. Sınıf içinde başka bir sınıfın nesne referansını tutuyorsak bu "HAS-A" ilişki biçimidir. "HAS-A" ifade de "sınıfımız bu nesneye sahip midir?" sorusundan ortaya çıkıyor. HAS-A ilişkilerde bir aile üyesi olmanıza gerek yoktur. Bunu Computer sınıfı örneğimiz üzerinden açıklayalım.

```java
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
```

"Screen" ve "Keyboard" tipinden bir nesneleri referans olarak tutuyoruz. "keyboard" ve "screen" isimli nesneler "HAS-A" ilişkisine örnektir. "Inheritance" yoluyla değil de "Aggregation" yoluyla sınıf içinde tanımlanmıştır.

"Keyboard" ve "Screen" sınıfları ile "Computer" sınıfı arasında neden kalıtım yoluyla bir ilişki kurmuyoruz diye sorabilirsiniz. Çünkü, "Keyboard" ve "Screen" veri tipi, "Computer" veri tipiyle bir akrabalık ilişkisi yoktur. "Computer" başka bir nesnedir. Keyboard başka bir nesnedir. Akrabalık bağı bulunmadığı için bu sınıflardan nesneleri "Aggregation" yoluyla "Computer" sınıfı içinde kullandık.

```java
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
```

Fakat, "Computer" sınıfından kalıtım almış "Laptop" ve "Desktop" alt sınıfları kalıtım yoluyla ilişki kurarlar. Çünkü, "Desktop" ve "Laptop", "Computer" nesnesinin bir alt türüdür. Bir akrabalık ilişkisi vardır. Aynı ailenin üyesidirler. "Computer" sınıfı ile "Desktop" ve "Laptop" sınıfları arasındaki ilişki "IS-A" ilişkisidir.
