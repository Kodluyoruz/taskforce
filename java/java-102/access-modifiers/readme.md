

# Erişim belirteçleri (Access Modifiers)

- &quot;private&quot; Erişim Belirteci: private anahtar kelimesi ile tanımlanmış değişkenlere veya fonksiyonlara sadece sınıf içinden erişilebilir.

- &quot;public&quot; Erişim Belirteci: public anahtar kelimesi ile tanımlanmış değişkenlere veya fonksiyonlara dışarıdan erişilebilir.

- &quot;protected&quot; Erişim Belirteci: protected anahtar kelimesi ile tanımlanmış değişkenlere veya fonksiyonlara sadece kalıtım alan alt sınıflar sahip olabilir ve erişebilir.

  

  ````java
  ElectricCar electricCar = new ElectricCar();
  
  /* 
   * "setLicensePlate" fonksiyonu "Car" sınıfına aittir.
   * Fakat, "ElectricCar" sınıfı kalıtım yoluyla "Car" sınıfından kalıtım aldığından ve 
   * "setLicensePlate" fonksiyonu "protected" olduğundan dolayı "ElectricCar" sınıfından üretilmiş olan "electricCar" nesnesi de bu fonksiyonu çağırabilir.
   */
  electricCar.setLicensePlate("45 FB 1907");
  
  
  // "ElectricCar" sınıfındaki "power" isimli değişken "private" olduğundan dışarıdan erişilemez.
  // Bu nedenle oluşturulmuş nesne üzerinden bu değişkene erişilemez. Sadece, sınıf içinden erişim sağlanabilir.
  electricCar.power = 3000;
  
  
  // "ElectricCar" sınıfındaki "charge" isimli fonksiyon "public" olduğundan dışarıdan erişilebilir.
  // Bu nedenle oluşturulmuş nesne üzerinden "public" olan "charge" isimli fonksiyonu çağırabilir.
  electricCar.charge(100);
  ````

&quot; **setLicensePlate**&quot; fonksiyonu &quot; **Car**&quot; sınıfına aittir. Fakat, &quot; **ElectricCar**&quot; sınıfı kalıtım yoluyla &quot; **Car**&quot; sınıfından kalıtım aldığından ve &quot; **setLicensePlate**&quot; fonksiyonu &quot; **protected**&quot; olduğundan dolayı &quot; **ElectricCar**&quot; sınıfından üretilmiş olan &quot; **electricCar**&quot; nesnesi de bu fonksiyonu çağırabilir.

&quot; **ElectricCar**&quot; sınıfındaki &quot; **power**&quot; isimli değişken &quot; **private**&quot; olduğundan dışarıdan erişilemez. Bu nedenle oluşturulmuş nesne üzerinden bu değişkene erişilemez. Sadece, sınıf içinden erişim sağlanabilir.

&quot; **ElectricCar**&quot; sınıfındaki &quot; **charge**&quot; isimli fonksiyon &quot; **public**&quot; olduğundan dışarıdan erişilebilir. Bu nedenle oluşturulmuş nesne üzerinden &quot; **public**&quot; olan &quot; **charge**&quot; isimli fonksiyonu çağırabilir.
