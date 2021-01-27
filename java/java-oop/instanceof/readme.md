

# &quot;instanceof&quot; Komutu

&quot;instanceof&quot; komutu ile nesnenin kontrol edilen sınıf tipinde olup olmadığını söyler. Bu nedenle true/false bir sonuç döner.

````java
// "Car" tipinden oluşturulmuş "carObject1" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz.
// "carObject1" nesnesi Car tipinde olduğu için true dönecektir.
boolean isCar = carObject1 instanceof Car;
System.out.println("Is Car class => " + isCar);
````

Yukarıdaki örnekte &quot;Car&quot; tipinden oluşturulmuş &quot;carObject1&quot; nesnesinin &quot;Car&quot; tipinde olup olmadığını kontrol ediyoruz.&quot;carObject1&quot; nesnesi Car tipinde olduğu için &quot;true&quot; dönecektir.



````java
// "ElectricCar" tipinden oluşturulmuş "electricCar3" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz.
// "electricCar3" nesnesi "ElectricCar" tipindedir. Normalde false dönmesi beklenir.
// Fakat, "ElectricCar" sınıfı "Car" sınıfından kalıtım aldığı için true döner.
boolean isBaseCar = electricCar3 instanceof Car;
System.out.println("Is Car class => " + isBaseCar);
````

&quot;ElectricCar&quot; tipinden oluşturulmuş &quot;electricCar3&quot; nesnesinin &quot;Car&quot; tipinde olup olmadığını kontrol ediyoruz. &quot;electricCar3&quot; nesnesi &quot;ElectricCar&quot; tipindedir. Normalde &quot;false&quot; dönmesi beklenir. Fakat, &quot;ElectricCar&quot; sınıfı &quot;Car&quot; sınıfından kalıtım aldığı için &quot;true&quot; döner.



````java
// "ElectricCar" tipinden oluşturulmuş "electricCar3" nesnesinin "Car" tipinde olup olmadığını kontrol ediyoruz.
// electricCar3 nesnesi "Car" sınıfından kalıtım almış olan "ElectricCar" isimli alt sınıftan üretilmiştir.
// Bu nedenle true dönecektir.
boolean isElectricCar = electricCar3 instanceof ElectricCar;
System.out.println("Is ElectricCar class => " + isElectricCar);
````

&quot;ElectricCar&quot; tipinden oluşturulmuş &quot;electricCar3&quot; nesnesinin &quot;Car&quot; tipinde olup olmadığını kontrol ediyoruz. &quot;electricCar3&quot; nesnesi &quot;Car&quot; sınıfından kalıtım almış olan &quot;ElectricCar&quot; isimli alt sınıftan üretilmiştir. Bu nedenle &quot;true&quot; dönecektir.
