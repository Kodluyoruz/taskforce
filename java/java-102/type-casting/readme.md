# Tip Dönüşümü (Type Casting)

Java&#39;da kalıtım alan sınıflar arasında tip dönüşümü yapılabilir. Üst yönde (Upcasting) veya Alt yönde (Downcasting) tip değiştirme yapılabilir. Değişkenin referans değeri üst sınıf tipinde olabilmektedir. Örneklerle durumu inceleyelim.

````java
ElectricCar electricCar1 = new ElectricCar();

// Üst yönde (Upcasting) tip dönüşümü
/* 
 * Bu tip dönüşümünde "car" isimli değişkenin tipi ATA sınıf olan "Car" sınıfıdır.
 * Car tipinde bir referansa "ElectricCar" tipinde bir nesneyi atayabiliriz.
 * Çünkü, "Car" ile "ElectricCar" arasında kalıtım yoluyla Parent-Child ilişkisi vardır.
 * "car" isimli değişkenin tipi Car olmasına rağmen kendisinden kalıtım alan ve alt sınıfı olan ElectricCar tipinde bir nesneyi atayabiliriz.
 * İşte buna Upcasting tip dönüşümü denir.
 */
Car car = electricCar1;


// Aşağı yönde (Downcasting) tip dönüşümü
/*
 * Bu tip dönüşümünde "Car" sınıfı tipinde olan "car" isimli nesnemizi tip dönüşümü yaparak "ElectricCar" tipine çevirip atama yapıyoruz.
 * Dikkat ederseniz "electricCar2" isimli değişken "ElectricCar" tipindedir. "car" isimli değişkeni bu değişekene atama yaparken
 * "(ElectricCar)car" şeklinde değişkenin önüne dönüştürmek istediğimiz tipi veriyoruz.
 * İşte buna Downcasting tip dönüşümü denir.
 */ 
ElectricCar electricCar2 = (ElectricCar)car;
````



## Üst yönde (Upcasting) tip dönüşümü

Bu tip dönüşümünde &quot;car&quot; isimli değişkenin tipi ATA sınıf olan &quot;Car&quot; sınıfıdır. Car tipinde bir referansa &quot;ElectricCar&quot; tipinde bir nesneyi atayabiliriz. Çünkü, &quot;Car&quot; ile &quot;ElectricCar&quot; arasında kalıtım yoluyla Parent-Child ilişkisi vardır. &quot;car&quot; isimli değişkenin tipi Car olmasına rağmen kendisinden kalıtım alan ve alt sınıfı olan ElectricCar tipinde bir nesneyi atayabiliriz. İşte buna &quot;Upcasting&quot; tip dönüşümü denir.

### Aşağı yönde (Downcasting) tip dönüşümü

Bu tip dönüşümünde &quot;Car&quot; sınıfı tipinde olan &quot;car&quot; isimli nesnemizi tip dönüşümü yaparak &quot;ElectricCar&quot; tipine çevirip atama yapıyoruz. Dikkat ederseniz &quot;electricCar2&quot; isimli değişken &quot;ElectricCar&quot; tipindedir. &quot;car&quot; isimli değişkeni bu değişkene atama yaparken &quot;(ElectricCar)car&quot; şeklinde değişkenin önüne dönüştürmek istediğimiz tipi veriyoruz. İşte buna &quot;Downcasting&quot; tip dönüşümü denir.

