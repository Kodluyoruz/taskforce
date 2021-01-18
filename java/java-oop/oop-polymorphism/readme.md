# Çok Biçimlilik (Polymorphism)

Çok biçimlilik aynı görevin veya işin farklı yollarla yapılabilmesini ifade eder. Nesne, aynı davranışı farklı formlar ve görünüşler ile yerine getirebilir.

Bunu yapabilmek için iki yöntem vardır.

1. Overriding in Java (Ezme)
2. Overloading in Java (Aşırı yükleme)

## Aşırı Yükleme (Overloading)

````java
public class Sum { 
  
    // aşırı yüklenmiş sum() fonksiyonu
    // metod ismi aynı ve 2 parametre alıyor.
    public static int sum(int x, int y) 
    { 
        return (x + y); 
    } 
  
    // aşırı yüklenmiş sum() fonksiyonu
    // metod ismi aynı ve 3 parametre alıyor.
    public static int sum(int x, int y, int z) 
    { 
        return (x + y + z); 
    } 
  
    // aşırı yüklenmiş sum() fonksiyonu
    // metod ismi aynı ve 2 parametre alıyor. Fakat veri tipi int değil, double oldu!
    public static double sum(double x, double y) 
    { 
        return (x + y); 
    } 
} 
````



Yukarıda &quot;Sum&quot; sınıfı içinde &quot;sum&quot; isimli metotlar vardır. Bu metotların hepsi aynı isimle, aynı işi yapıyorlar. Fakat, farklı biçimlerle bunu yapıyorlar.

Metot ismi aynı olsa da farklı sayıda parametre alıyorlar. Farklı veri tipleri alabiliyorlar. Aynı isimli metodun farklı sayıda parametre veya farklı sayıda veri tipiyle ile çalışmasına metot aşırı yüklenmesi diyoruz.

## Metotların Ezilmesi (Overriding Metods)

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

````
Ekran Çıktısı:
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

````
Ekran Çıktısı:
Car: [Mercedes 34 AKH 1970]
````


