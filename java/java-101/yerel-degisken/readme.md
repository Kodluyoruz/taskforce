 # Yerel Değişken

Java programlama dilinin tanımladığı değişken türlerinden biri olan yerel (local) değişkenler, sadece tanımlandıkları metot, constructor (yapıcı metod) veya açma kapama süslü parantezleri arasında kalan blok alanlardan ulaşılırlar. 

Belleğin stack olarak adlandırılan kısmında tutulurlar. Tanımlandıkları yapılar her çağırıldıklarında, yerel değişkenler bellekte oluşur, bu yapılar sonlandığında ise bellekten silinirler. 

Instance (alan) değişkenlerinin aksine yerel değişkenler tanımlandıklarında, default (varsayılan) değer atanmaz. Kullanılmadan önce, kesinlikle başlangıç değeri atanması gerekir.



```java
if(kosul > 0)
{
    public int degisken = 10; // Hata verir
}
```

Yerel değişkenler, tanımlandıkları alanın dışından erişilemedikleri için access modifier (erişim belirleyici) almazlar. Class (sınıf) değişkenleri gibi static anahtar kelimesi almazlar.



```java
public class Vehicle {  

public void vehicleModelYear()  

{  
    int year = 2018;  // yerel değişken  

    year = year + 2;  

    System.out.println("Vehicle model is : " + year);  

}  

public static void main(String args[])  

{  
    Vehicle car = new Vehicle();  

    car.vehicleModelYear();  
    
    System.out.println("Vehicle model is : " + year);  //HATA

}
    
} 
```

Yukarıdaki örnekte Vehicle sınıfı içerisinde yer alan " **vehicleModelYear**" metodu içindeki "**year**" isimli değişken yerel tanımlıdır, ilk değer olarak 2018 verilmiştir. Dikkat edilecek olunursa Test sınıfından bir nesne oluşturup "**vehicleModelYear**" metodu çağrılmıştır. Sonuçta ekrana 2020 değerini basacaktır.  

Dikkat edilmesi gereken nokta: "**main**" metodu içerisinden "**year**" yerel değişkenine ulaşılmak istendiğinde, hata verecektir.
