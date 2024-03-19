

# "instanceof" Komutu

"instanceof" komutu ile nesnenin karşılaştırılan sınıf tipinde olup olmadığını söyler. Bu nedenle true/false bir sonuç döndürür. "instanceof" tür karşılaştırma operatörü olarak da bilinir.

```java
class Car{
  	...
}
// "Car" tipinden oluşturulmuş "carObject1" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz.
Car carObject1 = new Car();
boolean isCar = carObject1 instanceof Car;
System.out.println("Is Car class => " + isCar);
// "carObject1" nesnesi Car tipinde olduğu için true dönecektir.
```

Yukarıdaki örnekte "Car" tipinden oluşturulmuş "carObject1" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz. "carObject1" nesnesi Car tipinde olduğu için "true" dönecektir.

```java
class Car{ ... }
class ElectricCar extends Car{ ... }
// "ElectricCar" tipinden oluşturulmuş "electricCar3" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz.
ElectricCar electricCar1 = new ElectricCar();
boolean isBaseCar = electricCar1 instanceof Car;
System.out.println("Is Car class => " + isBaseCar);
// "electricCar1" nesnesi "ElectricCar" tipindedir. Normalde "false" dönmesi beklenir.
// Fakat, "ElectricCar" sınıfı "Car" sınıfından kalıtım aldığı için "true" döner.
```

"ElectricCar" tipinden oluşturulmuş "electricCar3" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz. "electricCar3" nesnesi "ElectricCar" tipindedir. Normalde "false" dönmesi beklenir. Fakat, "ElectricCar" sınıfı "Car" sınıfından kalıtım aldığı için "true" döner.

```java
interface Car{ ... }
class ElectricCar implements Car{ ... }
// "ElectricCar" tipinden oluşturulmuş "electricCar3" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz.
// Bu örnekte ise electricCar2 nesnesi "Car" arayüzünü "implement" etmiş olan "ElectricCar" isimli alt sınıftan üretilmiştir.
ElectricCar electricCar2 = new ElectricCar();
boolean isElectricCar = electricCar2 instanceof Car;
System.out.println("Is ElectricCar class => " + isElectricCar);
// Ayno şekilde arayüzler ile de "ElectricCar" sınıfı "Car" implements ettiği için true dönecektir.
```

"ElectricCar" tipinden oluşturulmuş "electricCar2" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz. "electricCar2" nesnesi "Car" arayüzünü "implement" etmiş olan "ElectricCar" isimli alt sınıftan üretilmiştir. Bu nedenle "true" dönecektir.
