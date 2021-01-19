# Tekli Kalıtım (Single Inheritance) 

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
