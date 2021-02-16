

# &quot;instanceof&quot; Komutu

&quot;instanceof&quot; komutu ile nesnenin karşılaştırılan sınıf tipinde olup olmadığını söyler. Bu nedenle true/false bir sonuç döndürür. "instanceof" tür karşılaştırma operatörü olarak da bilinir.

````java
class Car{
  	...
}
// "Car" tipinden oluşturulmuş "carObject1" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz.
Car carObject1 = new Car();
boolean isCar = carObject1 instanceof Car;
System.out.println("Is Car class => " + isCar);
// "carObject1" nesnesi Car tipinde olduğu için true dönecektir.
````

Yukarıdaki örnekte &quot;Car&quot; tipinden oluşturulmuş &quot;carObject1&quot; nesnesinin &quot;Car&quot; tipinde olup olmadığını kontrol ediyoruz.&quot;carObject1&quot; nesnesi Car tipinde olduğu için &quot;true&quot; dönecektir.

````java
class Car{ ... }
class ElectricCar extends Car{ ... }
// "ElectricCar" tipinden oluşturulmuş "electricCar3" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz.
ElectricCar electricCar1 = new ElectricCar();
boolean isBaseCar = electricCar1 instanceof Car;
System.out.println("Is Car class => " + isBaseCar);
// "electricCar1" nesnesi "ElectricCar" tipindedir. Normalde "false" dönmesi beklenir.
// Fakat, "ElectricCar" sınıfı "Car" sınıfından kalıtım aldığı için "true" döner.
````

&quot;ElectricCar&quot; tipinden oluşturulmuş &quot;electricCar3&quot; nesnesinin &quot;Car&quot; tipinde olup olmadığını kontrol ediyoruz. &quot;electricCar3&quot; nesnesi &quot;ElectricCar&quot; tipindedir. Normalde &quot;false&quot; dönmesi beklenir. Fakat, &quot;ElectricCar&quot; sınıfı &quot;Car&quot; sınıfından kalıtım aldığı için &quot;true&quot; döner.

````java
interface Car{ ... }
class ElectricCar implements Car{ ... }
// "ElectricCar" tipinden oluşturulmuş "electricCar3" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz.
// Bu örnekte ise electricCar2 nesnesi "Car" arayüzünü "implement" etmiş olan "ElectricCar" isimli alt sınıftan üretilmiştir.
ElectricCar electricCar2 = new ElectricCar();
boolean isElectricCar = electricCar2 instanceof Car;
System.out.println("Is ElectricCar class => " + isElectricCar);
// Ayno şekilde arayüzler ile de "ElectricCar" sınıfı "Car" implements ettiği için true dönecektir.
````

&quot;ElectricCar&quot; tipinden oluşturulmuş &quot;electricCar2&quot; nesnesinin &quot;Car&quot; tipinde olup olmadığını kontrol ediyoruz. &quot;electricCar2&quot; nesnesi &quot;Car&quot; arayüzünü "implement" etmiş olan &quot;ElectricCar&quot; isimli alt sınıftan üretilmiştir. Bu nedenle &quot;true&quot; dönecektir.

Sorular

1- "instanceof" komutu ne için kullanılır?

A. İki değişkenin değerlerini karşılaştırmak için kullanılır.

B. Nesneler arasında dönüşüm yapmak için kullanılır.

C. Nesnelerin kopyasını oluşturmak için kullanılır.

D. İki nesnenin tipini karşılaştırmak için kullanılır.

Cevap: D