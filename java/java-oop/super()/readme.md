

# &quot;super&quot; Anahtar Kelimesi ile ATA Sınıfa Erişim Sağlamak

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

### "super" Anahtar Kelimesi ile ATA Sınıfın Metotlarını Çağırmak

Bir sınıftaki öğelere erişmek için this anahtar kelimesini kullanıyorduk. Ona benzer olarak "super" anahtar kelimesi ile ATA sınıfa ait kurucu metotları, değişkenleri ve fonksiyonları çağırabiliriz.

```java
class A {

 int i;

}

// Alt-sınıf tanımı
class B extends A {

 int i; 

 B(int a, int b) {

    super.i = a;      //  A içindeki i
    i = b;            //  B içindeki i
 }

 void show() {
 
    System.out.println("i nin A ust-sınıfındaki degeri : " + super.i);

    System.out.println("i nin B alt-sınıfındaki degeri : " + i);  }
}

class UygulamaPrg {

  public static void main(String args[]) {

    B subOb = new B(1, 2);
    
    subOb.show();

  }

}
```

Yukarıdaki örnekte i değişkeni iki sınıf da ortak bir değişkendir. B alt-sınıfı A ‘nın i öğesini doğrudan göremez. ATA sınıftaki i değişkenine erişmek için süper anahtar kelimesini kullanmamız gerekir. 

```java
@Override
public void showInfo() {
	
	// üst sınıfın, yani "Car" sınıfının "showInfo" metodunu çağıracaktır.
	super.showInfo();
	
	System.out.println("ElectricCar: " + toString());
}
```

"super.showInfo();" komutuyla birlikte ATA sınıfa ait, yani "Car" sınıfına ait "showInfo" metodunu çağırmış oluyoruz.

```java
class Animal{  
void eat(){System.out.println("eating...");}  
}  
class Dog extends Animal{  
void eat(){System.out.println("eating bread...");}  
void bark(){System.out.println("barking...");}  
void work(){  
super.eat();  
bark();  
}  
}  
class TestSuper2{  
public static void main(String args[]){  
Dog d=new Dog();  
d.work();  
}}  
```

Yukarıdaki örnekte Animal ve Dog her iki sınıfta da eat yöntemi vardır. Eğer Dog sınıfından eat yöntemini çağırırsak, öncelik local olarak verildiğinden varsayılan olarak Dog sınıfının eat yöntemini çağıracaktır. ATA sınıf yöntemini çağırmak için, super anahtar sözcüğünü kullanmamız gerekir.

