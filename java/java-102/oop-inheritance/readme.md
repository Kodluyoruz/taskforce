# Kalıtım Kavramı (Inheritance)

Kalıtım gerçek hayattaki gibi ebeveynlerden alınan genetik özellikleri temsil eder. Yazılım dünyasında da ortak özellikler bir üst sınıfta toplanır ve alt sınıflar bu özellikleri kalıtım yoluyla alır. Java&#39;da bir alt sınıf sadece bir üst sınıftan kalıtım alabilir. Java&#39;da birden fazla sınıftan kalıtım alınamaz.

Kalıtımda bir ATA sınıf vardır. Bu ata sınıftan kalıtım alan alt sınıflar olur.

#### Tekli Kalıtım (Single Inheritance) 

![](/Users/kodluyoruz/Projeler/kodluyoruz/taskforce/java/java-102/object-oriented-programming/figures/single-inheritence.png)



&quot; **Car**&quot; isminde bir ATA sınıf tanımladık. Ardından, &quot; **ElectricCar**&quot; isminde bir sınıf oluşturduk. &quot; **ElectricCar**&quot; isimli sınıf &quot; **Car**&quot; sınıftan kalıtım almaktadır. &quot; **extends**&quot; anahtar kelimesi ile &quot; **Car**&quot; sınıftan kalıtım almasını sağladık. Böylece, &quot; **ElectricCar**&quot; sınıfı &quot; **Car**&quot; sınıfa ait değişkenleri ve fonksiyonları kalıtım yoluyla almış olur. &quot; **ElectricCar**&quot;ise sınıfı alt sınıftır. Artık, &quot; **ElectricCar**&quot; sınıfta da &quot; **setBrand**&quot; ve &quot; **setLicensePlate**&quot; fonksiyonlarını ve &quot; **licensePlate**&quot;, &quot; **brand**&quot; değişkenlerini bünyesine almış olur. Aynı zamanda &quot; **charge**&quot; fonksiyonu da kendisine aittir. Bu fonksiyon ATA sınıfta yer almaz.

````java
// Ata sınıf
public class Car {

	// "protected" anahtar kelimesi ile tanımlanmış değişkenleri sadece kalıtım alan alt sınıflar erişebilir.
    protected String licensePlate = null;

    protected String brand;

    public Car() {
	this.licensePlate = "";
	this.brand = "";
    }

    public Car(String brand, String licensePlate) {
	this.licensePlate = licensePlate;
	this.brand = brand;
    }

    
 // "protected" anahtar kelimesi ile tanımlanmış fonksiyonları sadece kalıtım alan alt sınıflar erişebilir.
    protected void setLicensePlate(String license) {
        this.licensePlate = license;
    }

    protected void setBrand(String brand) {
    	this.brand = brand;
    }

    protected void showInfo() {
	System.out.println("Car: " + toString());
    }

    @Override
    public String toString() {
	
	StringBuilder builder = new StringBuilder();
	builder.append("[");
	builder.append(this.brand);
	builder.append(" ");
	builder.append(this.licensePlate);
	builder.append("]");
	return builder.toString();
    }
}


public class ElectricCar extends Car {

	// "private" anahtar kelimesi ile tanımlanmış değişkenlere veya fonksiyonlara sadece sınıf içinden erişebilir.
	// Sınıf içinden kasıt bu sınıftaki {} arasındaki kod bloğudur.
	private double power = 1000.0;


	public ElectricCar() {
	
	   // Car sınıfına ait parametresiz kurucu metodu çağırıyoruz.
	   super();
	}

      public ElectricCar(String brand, String licensePlate, double power) {
	
	// Car sınıfına ait parametreli kurucu metodu çağırıyoruz.
	// Bu kurucu metot "public Car(String brand, String licensePlate)" kendisidir.
	   super(brand, licensePlate);
	
	   this.power = power;
	}

	// "public" anahtar kelimesi ile tanımlanmış değişkenler veya fonksiyonlar sınıf dışından çağrılabilir. Dışarıya açık demektedir.
	public void charge(double extraPower) {
		this.power += extraPower;
	}

	@Override
	public void showInfo() {
		System.out.println("ElectricCar: " + toString());
	}

	public void showPower() {
		System.out.println("Electric Power: " + this.power);
	}

	@Override
	public String toString() {
	
		StringBuilder builder = new StringBuilder();
		builder.append("[");
		builder.append(this.brand);
		builder.append(" ");
		builder.append(this.licensePlate);
		builder.append(" ");
		builder.append(this.power);
		builder.append("]");
		return builder.toString();
	}
}
````



#### Erişim belirteçleri (Access Modifiers):

- &quot;private&quot; Erişim Belirteci: private anahtar kelimesi ile tanımlanmış değişkenlere veya fonksiyonlara sadece sınıf içinden erişilebilir.

- &quot;public&quot; Erişim Belirteci: public anahtar kelimesi ile tanımlanmış değişkenlere veya fonksiyonlara dışarıdan erişilebilir.

- &quot;protected&quot; Erişim Belirteci: protected anahtar kelimesi ile tanımlanmış değişkenlere veya fonksiyonlara sadece kalıtım alan alt sınıflar sahip olabilir ve erişebilir.

  

  ````java
  ElectricCar electricCar = new ElectricCar();
  
  /* 
   * "setLicensePlate" fonksiyonu "Car" sınıfına aittir.
   * Fakat, "ElectricCar" sınıfı kalıtım yoluyla "Car" sınıfından kalıtım aldığından ve 
   * "setLicensePlate" fonksiyonu "protected" olduğundan dolayı "ElectricCar" sınıfından üretilmiş olan "electricCar" nesnesi de bu fonksiyonu çağırabilir.
   */
  electricCar.setLicensePlate("45 FB 1907");
  
  
  // "ElectricCar" sınıfındaki "power" isimli değişken "private" olduğundan dışarıdan erişilemez.
  // Bu nedenle oluşturulmuş nesne üzerinden bu değişkene erişilemez. Sadece, sınıf içinden erişim sağlanabilir.
  electricCar.power = 3000;
  
  
  // "ElectricCar" sınıfındaki "charge" isimli fonksiyon "public" olduğundan dışarıdan erişilebilir.
  // Bu nedenle oluşturulmuş nesne üzerinden "public" olan "charge" isimli fonksiyonu çağırabilir.
  electricCar.charge(100);
  ````

&quot; **setLicensePlate**&quot; fonksiyonu &quot; **Car**&quot; sınıfına aittir. Fakat, &quot; **ElectricCar**&quot; sınıfı kalıtım yoluyla &quot; **Car**&quot; sınıfından kalıtım aldığından ve &quot; **setLicensePlate**&quot; fonksiyonu &quot; **protected**&quot; olduğundan dolayı &quot; **ElectricCar**&quot; sınıfından üretilmiş olan &quot; **electricCar**&quot; nesnesi de bu fonksiyonu çağırabilir.

&quot; **ElectricCar**&quot; sınıfındaki &quot; **power**&quot; isimli değişken &quot; **private**&quot; olduğundan dışarıdan erişilemez. Bu nedenle oluşturulmuş nesne üzerinden bu değişkene erişilemez. Sadece, sınıf içinden erişim sağlanabilir.

&quot; **ElectricCar**&quot; sınıfındaki &quot; **charge**&quot; isimli fonksiyon &quot; **public**&quot; olduğundan dışarıdan erişilebilir. Bu nedenle oluşturulmuş nesne üzerinden &quot; **public**&quot; olan &quot; **charge**&quot; isimli fonksiyonu çağırabilir.

#### Tip Dönüşümü (Type Casting)

Java&#39;da kalıtım alan sınıflar arasında tip dönüşümü yapılabilir. Üst yönde (Upcasting) veya Alt yönde (Downcasting) tip değiştirme yapılabilir. Değişkenin referans değeri üst sınıf tipinde olabilmektedir. Örneklerle durumu inceleyelim.

````java
ElectricCar electricCar1 = new ElectricCar();

// Üst yönde (Upcasting) tip dönüşümü
/* 
 * Bu tip dönüşümünde "car" isimli değişkenin tipi ATA sınıf olan "Car" sınıfıdır.
 * Car tipinde bir referansa "ElectricCar" tipinde bir nesneyi atayabiliriz.
 * Çünkü, "Car" ile "ElectricCar" arasında kalıtım yoluyla Parent-Child ilişkisi vardır.
 * "car" isimli değişkenin tipi Car olmasına rağmen kendisinden kalıtım alan ve alt sınıfı olan ElectricCar tipinde bir nesneyi atayabiliriz.
 * İşte buna Upcasting tip dönüşümü denir.
 */
Car car = electricCar1;


// Aşağı yönde (Downcasting) tip dönüşümü
/*
 * Bu tip dönüşümünde "Car" sınıfı tipinde olan "car" isimli nesnemizi tip dönüşümü yaparak "ElectricCar" tipine çevirip atama yapıyoruz.
 * Dikkat ederseniz "electricCar2" isimli değişken "ElectricCar" tipindedir. "car" isimli değişkeni bu değişekene atama yaparken
 * "(ElectricCar)car" şeklinde değişkenin önüne dönüştürmek istediğimiz tipi veriyoruz.
 * İşte buna Downcasting tip dönüşümü denir.
 */ 
ElectricCar electricCar2 = (ElectricCar)car;
````



##### Üst yönde (Upcasting) tip dönüşümü

Bu tip dönüşümünde &quot;car&quot; isimli değişkenin tipi ATA sınıf olan &quot;Car&quot; sınıfıdır. Car tipinde bir referansa &quot;ElectricCar&quot; tipinde bir nesneyi atayabiliriz. Çünkü, &quot;Car&quot; ile &quot;ElectricCar&quot; arasında kalıtım yoluyla Parent-Child ilişkisi vardır. &quot;car&quot; isimli değişkenin tipi Car olmasına rağmen kendisinden kalıtım alan ve alt sınıfı olan ElectricCar tipinde bir nesneyi atayabiliriz. İşte buna &quot;Upcasting&quot; tip dönüşümü denir.

##### Aşağı yönde (Downcasting) tip dönüşümü

Bu tip dönüşümünde &quot;Car&quot; sınıfı tipinde olan &quot;car&quot; isimli nesnemizi tip dönüşümü yaparak &quot;ElectricCar&quot; tipine çevirip atama yapıyoruz. Dikkat ederseniz &quot;electricCar2&quot; isimli değişken &quot;ElectricCar&quot; tipindedir. &quot;car&quot; isimli değişkeni bu değişkene atama yaparken &quot;(ElectricCar)car&quot; şeklinde değişkenin önüne dönüştürmek istediğimiz tipi veriyoruz. İşte buna &quot;Downcasting&quot; tip dönüşümü denir.

#### Metotların Ezilmesi (Overriding Metods)

Java&#39;da alt sınıflar ATA sınıftan aldıkları metotları ezebilirler. Bu yönteme &quot;Overriding&quot; denilmektedir. Alt sınıfta üst sınıfın metodunu ezmek için &quot;@Override&quot; anahtar kelimesi kullanılır.

Önemli: Metodu ezebilmek için alt sınıftaki metot imzasıyla, üst sınıftaki metot imzası aynı olması gerekmektedir. Metot imzasından kasıt, metot isimlerinin aynı olması, aynı girdileri alması ve aynı tipte değer döndürmeli veya döndürmemelidir. Ayrıca, Java&#39;da üst sınıftaki &quot;private&quot; metotları ezemezseniz, yani &quot;override&quot; edemezsiniz.

````java
@Override
protected void showInfo() {
	System.out.println("ElectricCar: " + toString());
}
````

Yukarıdaki &quot;showInfo&quot; metodu, &quot;ElectricCar&quot; sınıfı içinde &quot;@Override&quot; tanımlamasıyla üst sınıftaki metodu ezmektedir. &quot;ElectricCar&quot; tipinden oluşturulan nesneler üzerinden &quot;showInfo&quot; metodunu çağıracak olursak &quot;ElectricCar&quot; sınıfı içindeki metodu çağıracaktır.

````java
ElectricCar electricCar3 = new ElectricCar();
electricCar3.setLicensePlate("45 FB 1907");
electricCar3.setBrand("BMW");
/* ElectricCar tipinde bir nesne yaratıp, bu nesne üzerinden "showInfo" metodunu çağırdığımızda,
 * "ElectricCar" sınıfı içindeki metodu çağıracaktır. 
 * Metot ezmesi yaptığımız için kalıtım aldığı üst sınıftaki "Car" sınıfındaki "showInfo" metodunu çağırmayacaktır.
 */
electricCar3.showInfo();
````

Ekran Çıktısı:

````terminal
ElectricCar: [BMW 45 FB 1907 1000.0]
````



&quot;Car&quot; sınıfı tipinden üretilmiş olan nesne üzerinden &quot;showInfo&quot; metodu çağırıldığında alt sınıftakileri değil de &quot;Car&quot; sınıfında tanımlı olan metodu çağıracaktır.

````java
Car carObject1 = new Car();
carObject1.setBrand("Mercedes");
carObject1.setLicensePlate("34 AKH 1970");
/* Car tipinde bir nesne yaratıp, bu nesne üzerinden "showInfo" metodunu çağırdığımızda,
 * "Car" sınıfı içindeki metodu çağıracaktır. Alt sınıftaki sınıflara ait metotları çağırmayacaktır.
 */
carObject1.showInfo();
````

Ekran Çıktısı:

`````terminal
Car:[Mercedes 34 AKH 1970]
`````



#### &quot;instanceof&quot; Komutu

&quot;instanceof&quot; komutu ile nesnenin kontrol edilen sınıf tipinde olup olmadığını söyler. Bu nedenle true/false bir sonuç döner.

````java
// "Car" tipinden oluşturulmuş "carObject1" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz.
// "carObject1" nesnesi Car tipinde olduğu için true dönecektir.
boolean isCar = carObject1 instanceof Car;
System.out.println("Is Car class => " + isCar);
````

Yukarıdaki örnekte &quot;Car&quot; tipinden oluşturulmuş &quot;carObject1&quot; nesnesinin &quot;Car&quot; tipinde olup olmadığını kontrol ediyoruz.&quot;carObject1&quot; nesnesi Car tipinde olduğu için &quot;true&quot; dönecektir.



````java
// "ElectricCar" tipinden oluşturulmuş "electricCar3" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz.
// "electricCar3" nesnesi "ElectricCar" tipindedir. Normalde false dönmesi beklenir.
// Fakat, "ElectricCar" sınıfı "Car" sınıfından kalıtım aldığı için true döner.
boolean isBaseCar = electricCar3 instanceof Car;
System.out.println("Is Car class => " + isBaseCar);
````

&quot;ElectricCar&quot; tipinden oluşturulmuş &quot;electricCar3&quot; nesnesinin &quot;Car&quot; tipinde olup olmadığını kontrol ediyoruz. &quot;electricCar3&quot; nesnesi &quot;ElectricCar&quot; tipindedir. Normalde &quot;false&quot; dönmesi beklenir. Fakat, &quot;ElectricCar&quot; sınıfı &quot;Car&quot; sınıfından kalıtım aldığı için &quot;true&quot; döner.



````java
// "ElectricCar" tipinden oluşturulmuş "electricCar3" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz.
// electricCar3 nesnesi "Car" sınıfından kalıtım almış olan "ElectricCar" isimli alt sınıftan üretilmiştir.
// Bu nedenle true dönecektir.
boolean isElectricCar = electricCar3 instanceof ElectricCar;
System.out.println("Is ElectricCar class => " + isElectricCar);
````

&quot;ElectricCar&quot; tipinden oluşturulmuş &quot;electricCar3&quot; nesnesinin &quot;Car&quot; tipinde olup olmadığını kontrol ediyoruz. &quot;electricCar3&quot; nesnesi &quot;Car&quot; sınıfından kalıtım almış olan &quot;ElectricCar&quot; isimli alt sınıftan üretilmiştir. Bu nedenle &quot;true&quot; dönecektir.



#### &quot;super&quot; Anahtar Kelimesi ile ATA Sınıfa Erişim Sağlamak

Alt sınıflar kalıtım yoluyla ATA sınıfa ait metotları ve değişkenleri de kendi bünyelerine alabilirler. ATA sınıftaki bir değişkene veya metoda erişmek istediğimizde &quot;super&quot; anahtar kelimesini kullanırız.

&quot;super&quot; Anahtar Kelimesi ile ATA Sınıfın Kurucularını Çağırmak

````java
public ElectricCar() {
	
	// Car sınıfına ait parametresiz kurucu metodu çağırıyoruz.
	super();
}

public ElectricCar(String brand, String licensePlate, double power) {
	
	// Car sınıfına ait parametreli kurucu metodu çağırıyoruz.
	// Bu kurucu metot "public Car(String brand, String licensePlate)" kendisidir.
	super(brand, licensePlate);
	
	this.power = power;
}

````

&quot;**super();**&quot; komutuyla birlikte &quot; **Car**&quot; sınıfına ait parametresiz kurucu metodu çağırıyoruz. Böylece, kalıtım aldığımız ATA sınıfın kurucusuna erişmiş olduk.

&quot;**super(brand, licensePlate);**&quot; komutuyla &quot; **Car**&quot; sınıfına ait parametreli kurucu metodu çağırıyoruz. Bu kurucu metot &quot;**public Car(String brand, String licensePlate)**&quot; kendisidir.

&quot;super&quot; Anahtar Kelimesi ile ATA Sınıfın Metotlarını Çağırmak

&quot;super&quot; anahtar kelimesi ile ATA sınıfa ait kurucu metotları, değişkenleri ve fonksiyonları çağırabiliriz.

`````java
@Override
public void showInfo() {
	
	// üst sınıfın, yani "Car" sınıfının "showInfo" metodunu çağıracaktır.
	super.showInfo();
	
	System.out.println("ElectricCar: " + toString());
}
`````

&quot;super.showInfo();&quot; komutuyla birlikte ATA sınıfa ait, yani &quot;Car&quot; sınıfına ait &quot;showInfo&quot; metodunu çağırmış oluyoruz.

#### Çok Katmanlı Kalıtım (Multilevel Inheritance)

Bu modelde zincirleme bir kalıtım hiyerarşisi mevcuttur. Örneğin: C sınıfı B sınıfından kalıtım alsın. Bu durumda B sınıfı C için ATA sınıf olmuş oluyor. Farz edelim ki B sınıfı da A sınıfından kalıtım aldı. Bu durumda B sınıfının ATA sınıfı A olmuş oldu. Fakat, C sınıfı hem A sınıfının hem de B sınıfının özelliklerini kalıtım yoluyla kendisine almış oldu.

![Çok Katmanlı Kalıtım](/Users/kodluyoruz/Projeler/kodluyoruz/taskforce/java/java-102/object-oriented-programming/figures/multi-level-inheritance.png)

Yukarıdaki örnekte &quot;ElectricCar&quot; sınıfı &quot;Car&quot; sınıfından kalıtım alıyor. Ardından, &quot;Car&quot; sınıfı da &quot;Vehicle&quot; sınıfından kalıtım alıyor. Böylece dikey yönde çok katmanlı bir hiyerarşik kalıtım modeli oluşuyor.

````java
public class Vehicle {

	// Vehicle sınıfına ait kodlar
}

// "Car" sınıfı extends anahtar kelimesi ile "Vehicle" sınıfından kalıtım alıyor.
// Car sınıfı Vehicle sınıfa ait metotları ve değişkenleri kendi bünyesine almış oluyor.
public class Car extends Vehicle {

	// Car sınıfına ait kodlar
}

// "ElectricCar" sınıfı extends anahtar kelimesi ile "Car" sınıfından kalıtım alıyor.
// ElectricCar sınıfı Crr sınıfa ait metotları ve değişkenleri kendi bünyesine almış oluyor. 
// Fakat aynı zamanda Car sınıfı Vehicle sınıfı ile ilgili özelliklere sahip olduğundan ElectricCar sınıfı da dolaylı yoldan Vehicle sınıfından kalıtım almış oluyor.
public class ElectricCar extends Car {

	// ElectricCar sınfına ait kodlar
}
````





#### Hiyerarşik Kalıtım (Hierarchical Inheritance)

Bu modelde bir tane ATA sınıfımız vardır ve bu sınıftan kalıtım alan birden fazla alt sınıf vardır. Örneğin: A sınıfı ATA sınıf olsun. B,C,D ondan kalıtım alıyor olsunlar. Bu modele hiyerarşik kalıtım denir.

![Hiyerarşik Kalıtım](/Users/kodluyoruz/Projeler/kodluyoruz/taskforce/java/java-102/object-oriented-programming/figures/hierarchical-inheritance.png)

````java
public class Tax {
	
	public double calculate(double value) {
		
		return value + value * 0.1;
	}
}

public class OTVTax extends Tax {

	@Override
	public double calculate(double value) {
		
		return value + value * 0.2;
	}
}

public class KDVTax extends Tax{

	@Override
	public double calculate(double value) {
		
		return value + value * 0.3;
	}
}
````



