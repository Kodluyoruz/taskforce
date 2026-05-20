# Çok Biçimlilik (Polymorphism)

Çok biçimlilik aynı görevin veya işin farklı yollarla yapılabilmesini ifade eder. Nesne, aynı davranışı farklı formlar ve görünüşler ile yerine getirebilir.

Bunu yapabilmek için iki yöntem vardır.

1. Overriding in Java (Ezme)
2. Overloading in Java (Aşırı yükleme)

## Aşırı Yükleme (Overloading)

```java
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
```

Yukarıda "Sum" sınıfı içinde "sum" isimli metotlar vardır. Bu metotların hepsi aynı isimle, aynı işi yapıyorlar. Fakat, farklı biçimlerle bunu yapıyorlar.

Metot ismi aynı olsa da farklı sayıda parametre alıyorlar. Farklı veri tipleri alabiliyorlar. Aynı isimli metodun farklı sayıda parametre veya farklı sayıda veri tipiyle ile çalışmasına metot aşırı yüklenmesi diyoruz.

## Metotların Ezilmesi (Overriding Metods)

Java'da alt sınıflar ATA sınıftan aldıkları metotları ezebilirler. Bu yönteme "Overriding" denilmektedir. Alt sınıfta üst sınıfın metodunu ezmek için `@Override` anahtar kelimesi kullanılır.

Önemli: Metodu ezebilmek için alt sınıftaki metot imzasıyla, üst sınıftaki metot imzası aynı olması gerekmektedir. Metot imzasından kasıt, metot isimlerinin aynı olması, aynı girdileri alması ve aynı tipte değer döndürmeli veya döndürmemelidir. Ayrıca, Java'da üst sınıftaki "private" metotları ezemezseniz, yani "override" edemezsiniz.

```java
@Override
protected void showInfo() {
	System.out.println("ElectricCar: " + toString());
}
```

Yukarıdaki "showInfo" metodu, "ElectricCar" sınıfı içinde `@Override` tanımlamasıyla üst sınıftaki metodu ezmektedir. "ElectricCar" tipinden oluşturulan nesneler üzerinden "showInfo" metodunu çağıracak olursak "ElectricCar" sınıfı içindeki metodu çağıracaktır.

```java
ElectricCar electricCar3 = new ElectricCar();
electricCar3.setLicensePlate("45 FB 1907");
electricCar3.setBrand("BMW");
/* ElectricCar tipinde bir nesne yaratıp, bu nesne üzerinden "showInfo" metodunu çağırdığımızda,
 * "ElectricCar" sınıfı içindeki metodu çağıracaktır. 
 * Metot ezmesi yaptığımız için kalıtım aldığı üst sınıftaki "Car" sınıfındaki "showInfo" metodunu çağırmayacaktır.
 */
electricCar3.showInfo();
```

```java
Ekran Çıktısı:
ElectricCar: [BMW 45 FB 1907 1000.0]
```

"Car" sınıfı tipinden üretilmiş olan nesne üzerinden "showInfo" metodu çağırıldığında alt sınıftakileri değil de "Car" sınıfında tanımlı olan metodu çağıracaktır.



```java
Car carObject1 = new Car();
carObject1.setBrand("Mercedes");
carObject1.setLicensePlate("34 AKH 1970");
/* Car tipinde bir nesne yaratıp, bu nesne üzerinden "showInfo" metodunu çağırdığımızda,
 * "Car" sınıfı içindeki metodu çağıracaktır. Alt sınıftaki sınıflara ait metotları çağırmayacaktır.
 */
carObject1.showInfo();
```

```java
Ekran Çıktısı:
Car: [Mercedes 34 AKH 1970]
```

### Polymorphism Özellikleri
* PolyMorphism: Bir nesnenin birden fazla nesne gibi davranması olarak tanımlanabilir.
    * Bir tane superclass'a ihtiyaç vardır. Superclass'ı inheritance yoluyla miras alan subclasslar olmalı.
    * Superclass'dan türetilen referans değeri new ile subclass adıyla da çağırılır.
    * Eğer subclass içinde overriding yapılmışsa subclass içindeki metod superclass içindeki metodu ezer.
    * Sonuç olarak Hayvan sınıfı farklı hayvan sınıflarına göre farklı davranışlar gösterdi.
    * Bir fonksiyona farklı nesneler göndermek isterseniz polymorphism işe yarayacaktır.
    * Superclass nesnesini default parametre olarak verirseniz onu miras almış diğer nesneler
    * fonksiyon içinde çağırıldığında Hayvan sınıfı artık subclass gibi davranır.
    * Tip dönüşümü yapmadan parametre olarak farklı değerleri yazdırabiliyoruz.


#### Örnek:
```java
package org.java.review.oop;

class Hayvan{
    private String isim;

    public Hayvan(String isim) {
        this.isim = isim;
    }

    public String getIsim() {
        return isim;
    }

    public void setIsim(String isim) {
        this.isim = isim;
    }

    public String konus(){
        return "Hayvan Konuşuyor...";
    }
}

class Kedi extends Hayvan{

    public Kedi(String isim) {
        super(isim);
    }

    @Override
    public String konus() {
        return this.getIsim() + " Miyavlıyor...";
    }
}

class Kopek extends Hayvan {

    public Kopek(String isim) {
        super(isim);
    }

    @Override
    public String konus() {
        return this.getIsim() + " Havlıyor...";
    }
}

class At extends Hayvan {

    public At(String isim) {
        super(isim);
    }

    @Override
    public String konus() {
        return this.getIsim() + " Kişniyor...";
    }
}

public class Main {

    public static void konustur(Hayvan hayvan){
        System.out.println(hayvan.konus());
    }

    public static void main(String[] args){
        // İlk Gösterim
        Hayvan hayvan = new Hayvan("Hiper");
        System.out.println(hayvan.konus());
        Hayvan hayvan1 = new Kedi("Hiper");
        System.out.println(hayvan1.konus());
        Hayvan hayvan2 = new Kopek("Hiper");
        System.out.println(hayvan2.konus());
        Hayvan hayvan3 = new At("Hiper");
        System.out.println(hayvan3.konus());

        //Fonksiyon kullanarak gösterim
        konustur(new Kedi("Nasip"));
        konustur(new Kopek("Karabaş"));
        konustur(new At("Bold-Pilot"));
    }
}

```

### instanceof - polymorphism ilişkisi
- Obje vereceğiz objenin hangi sınıftan olduğuna bakacağız
- Kedi sınıfı aynı zamanda Hayvan sınıfından miras alıyor. Bu yüzden superclass'la kıyaslanırsa inheritance olduğu için true döner.
- **_Bütün classlar objeden türüyor.(Object class)_**
- Polymorphism kullanmazsak bütün nesneleri instanceof ile kontrol etmemiz gerekir.
- **_Yeni bir sınıf üretirsek_** ve Hayvan sınıfından miras alırsa yine kontrol etmemiz gerekecek ama polymorphism bu iş yükünü azaltıyor.

#### Örnek II:
```java
package org.java.review.oop;

class Hayvan{
    private String isim;

    public Hayvan(String isim) {
        this.isim = isim;
    }

    public String getIsim() {
        return isim;
    }

    public void setIsim(String isim) {
        this.isim = isim;
    }

    public String konus(){
        return "Hayvan Konuşuyor...";
    }
}

class Kedi extends Hayvan{

    public Kedi(String isim) {
        super(isim);
    }

    @Override
    public String konus() {
        return this.getIsim() + " Miyavlıyor...";
    }
}

class Kopek extends Hayvan {

    public Kopek(String isim) {
        super(isim);
    }

    @Override
    public String konus() {
        return this.getIsim() + " Havlıyor...";
    }
}

class At extends Hayvan {

    public At(String isim) {
        super(isim);
    }

    @Override
    public String konus() {
        return this.getIsim() + " Kişniyor...";
    }
}

public class Main {

    public static void konustur(Object object){

        if (object instanceof Kopek){
            Kopek kopekTest = (Kopek)object;
            System.out.println(kopekTest.konus());
        }
        else if(object instanceof Kedi){
            Kedi kediTest = (Kedi)object;
            System.out.println(kediTest.konus());
        }
        else if (object instanceof At){
            At atTest = (At)object;
            System.out.println(atTest.konus());
        }
        else if (object instanceof Hayvan){
            Hayvan hayvanTest = (Hayvan)object;
            System.out.println(hayvanTest.konus());
        }
    }

    public static void main(String[] args){

        // Temel Gösterim
        Kedi kedi = new Kedi("Nasip");

        if (kedi instanceof Kedi){
            System.out.println("Bu nesne Kedi sınıfından");
        }

        if (kedi instanceof Hayvan){
            System.out.println("Bu nesne Hayvan sınıfından");
        }

        //Fonksiyon ile gösterim

        Kedi kedii = new Kedi("Nasip");
        Kopek kopek = new Kopek("Zizu");
        At at = new At("BoldPilot");
        Hayvan hayvan = new Hayvan("Turunç");

        konustur(kedii);
        konustur(kopek);
        konustur(at);
        konustur(hayvan);
    }
}
```

- Yukarıdaki Örnek II Polymorphism'in gerçek faydasını tam olarak ortaya çıkartıyor. Daha fazla hata yapma ihitmali, daha fazla kod ve daha fazla manuel kontrol. Sonuç olarak, polymorphism kullanmak kod temizliği ve güvenliği açısından verimli bir özellik.

### Kaynaklar

- [Oracle - JavaSE Polymorphism](https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html)
- [Udemy - Online Kurs](https://www.udemy.com/course/sifirdan-ileri-seviyeye-komple-java-gelistirici-kursu/)
- [Medium - Nesneye Yönelik Programlama](https://medium.com/s%C4%B1f%C4%B1rdan-i%CC%87leri-d%C3%BCzeye-java-e%C4%9Fitim-serisi/nesneye-y%C3%B6nelik-programlama-oop-be3094786889)
