

# Çok Katmanlı Kalıtım (Multilevel Inheritance)

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
