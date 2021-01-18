# Metotların Ezilmesi (Overriding Metods)

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


