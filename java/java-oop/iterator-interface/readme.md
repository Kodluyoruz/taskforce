 # Iterator Interface (Arayüzü)

Iterator interface bizlere veri kümesinde döngü kurabilen bir olanak tanır. Iterable interface ile bir Iterator’a sahip olabilme işlevine sahiptik. Iterator ile ise döngüde elemanlara erişim yapabilen bir altyapı kazanıyoruz. Collection interface’den türemiş alt sınıflarda “iterator” fonksiyonunu çağırarak bir “Iterator” nesnesi oluşturup alıyoruz. Iterator nesnesi o anki veri kümesini dolaşabilecek işleve sahiptir. 

Iterator, veri kümesi içindeki elemanları tek tek dolaşabilmeyi sağlar. Bu dolaşma tek yönlüdür. İlk elemandan son elemana doğrudur. Bu durumu elindeki hasta listesini tek tek dolaşan bir doktora benzetebilirsiniz. Doktor sabah ilk hastasından son hastasına kadar tümüyle tek tek ilgilenir. Burada Iterator nesnesini doktora benzetip veri kümesi üzerinde dolaşan bir nesne olarak düşünebiliriz. 

Not: İndeks değeri olmayan veri kümelerini indeksli klasik for döngüsüyle gezemeyiz. Bu durumda Iterator nesnesi ile elemanları tek tek dolaşabiliriz. 

Iterator nesnesi aşağıdaki döngü tiplerinde kullanılabilir. 

\- while döngüsü (tavsiye edilen)

\- for döngüsü

\- do-while döngüsü 

**Iterator interface’in fonksiyonları:**

| boolean  hasNext()                                 | Iterator ile  veri kümesi üzerinde dolaşırken devam edilebilecek bir sonraki elemanın var  olup olmadığını true/false şeklinde belirtir. |
| -------------------------------------------------- | ------------------------------------------------------------ |
| E next();                                          | Veri  kümesindeki bir sonraki elemanı almayı sağlar.         |
| void remove();                                     | Veri kümesinden  bir elemanı silmeyi sağlar.                 |
| void forEachRemaining(Consumer<?  super E> action) | Iterator  nesnesi veri kümesi üzerinde dolaşırken o andaki konumundan sonra gelenler  üzerinde döngü kurabilmeyi sağlar. |

 Iterator nesnesi bir kere oluşturulduktan sonra artık veri kümesine ekleme yapılamaz. Veri kümesine ekleme yapıldıktan sonra mutlaka yeni bir Iterator nesnesi oluşturmak gerekecektir. 

```java
List<ElectricCar> electricalCars = new ArrayList<ElectricCar>();
electricalCars.add(new ElectricCar("BMW", "34 AL 377", 100));
electricalCars.add(new ElectricCar("Mercedes", "35 Aa 547", 200));

Iterator<ElectricCar> iteratorObject = electricalCars.iterator();

while(iteratorObject.hasNext()) 
{       
        ElectricCar electricCar = iteratorObject.next();
        System.out.println(electricCar);
}
```

 Yukarıda bir iteratorObject isimli Iterator ile veri kümesi üzerinde while döngüsüyle dolaşım yapıyoruz. List tipindeki bir listeden “electricalCars.iterator();” komutuyla iterator nesnesi oluşturmuş oluyoruz. Bu aşamadan sonra veri kümesine bir ekleme yapılırsa hata alınacaktır. 

```java
Iterator<ElectricCar> iteratorObject = electricalCars.iterator();
electricalCars.add(new ElectricCar("Mercedes", "35 Aa 547", 200));
```

Yukarıda iterator nesnesi oluştuktan sonra veri setine yeni bir eleman eklemeye çalıştığımızda aşağıdaki hatayı alırız. 

```java
Exception in thread "main" java.util.ConcurrentModificationException
        at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:909)
        at java.util.ArrayList$Itr.next(ArrayList.java:859)
        at chapter3.generics.Main.main(Main.java:33)
```

 Iterator ile döngü esnasında veri kümesinden eleman çıkarabilirsiniz. Normalde bir veri kümesi üzerinde Iterator nesnesi olmaksızın klasik bir döngü ile çalışıyorken eleman silme işlemi yapamazsınız. Bu durumda yine “ConcurrentModificationException” hatası alırsınız. Bu nedenle döngü içindeyken veri kümesinden eleman silmek istiyorsak Iterator nesnesini kullanmamız gerekir. 

```java
List<ElectricCar> electricalCars = new ArrayList<ElectricCar>();
electricalCars.add(new ElectricCar("BMW", "34 AL 377", 100));
electricalCars.add(new ElectricCar("Mercedes", "35 Aa 547", 200));
electricalCars.add(new ElectricCar("BMW", "45 AB 547", 200));

Iterator<ElectricCar> iteratorObject = electricalCars.iterator();

while(iteratorObject.hasNext()) 
{
        ElectricCar electricCar = iteratorObject.next();
        
        if(electricCar.getBrand().equals("BMW")) {
               iteratorObject.remove();
        }
}

Iterator<ElectricCar> iteratorObject2 = electricalCars.iterator();

while(iteratorObject2.hasNext()) 
{
        ElectricCar electricCar = iteratorObject2.next();
        electricCar.showInfo();
}
```

Yukarıdaki senaryo mülakatlarda da çıkacaktır. Sizlere bir liste verilir ve döngü kurup içinden bazı elemanları silmeniz beklenir. Bu tarz durumlarda bu silme işlemini Iterator üzerinden yapabileceğinizi söylemek gerekiyor. Aynı, şekilde Iterator nesnesi ile döngü içindeyken yeni bir eleman eklemesi yapamazsınız. Bunu akılda tutmak gerekiyor. 

Not: Veri kümemizde çok fazla eleman varsa, binlerce elemanlık bir veri kümesi gibi, Iterator ile while döngüsünü kullanmak performans kazancı sağlayacaktır.
