# "super" Anahtar Kelimesi ile ATA Sınıfa Erişim Sağlamak

Alt sınıflar kalıtım yoluyla ATA sınıfa ait metotları ve değişkenleri de kendi bünyelerine alabilirler. ATA sınıftaki bir değişkene veya metoda erişmek istediğimizde "super" anahtar kelimesini kullanırız.

"super" Anahtar Kelimesi ile ATA Sınıfın Kurucularını Çağırmak

```java
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
```

`super();` komutuyla birlikte "**Car**" sınıfına ait parametresiz kurucu metodu çağırıyoruz. Böylece, kalıtım aldığımız ATA sınıfın kurucusuna erişmiş olduk.

`super(brand, licensePlate);` komutuyla "**Car**" sınıfına ait parametreli kurucu metodu çağırıyoruz. Bu kurucu metot `public Car(String brand, String licensePlate)` kendisidir.

"super" Anahtar Kelimesi ile ATA Sınıfın Metotlarını Çağırmak

"super" anahtar kelimesi ile ATA sınıfa ait kurucu metotları, değişkenleri ve fonksiyonları çağırabiliriz.

```java
@Override
public void showInfo() {
	// üst sınıfın, yani "Car" sınıfının "showInfo" metodunu çağıracaktır.
	super.showInfo();
	
	System.out.println("ElectricCar: " + toString());
}
```

`super.showInfo();` komutuyla birlikte ATA sınıfa ait, yani "Car" sınıfına ait "showInfo" metodunu çağırmış oluyoruz.
