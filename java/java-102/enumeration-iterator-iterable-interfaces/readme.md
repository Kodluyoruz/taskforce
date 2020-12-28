# Enumeration, Iterator, Iterable Interface

Java Collection Framework altyapısını incelerken işimize yaracak yardımcı konulardan ve kavramlardan bahsetmek gerekiyor. Bu önemli başlıkları aşağıdaki gibi beş konuya ayırdık. 

1-   Enumeration

2-   Iterable

3-   Iterator

4-   Comparable

5-   Comparator 

## 1- Enumeration Interface (Arayüzü)

 Enumeration arayüzü ile veri kümesindeki nesneler üzerinde tek tek gezme işlemi yapılabilir. Enumeration’lar bir veri listesi üzerine kurulur. Enumeration nesnesi bir gezgin gibi veri kümesindeki elemanları tek tek dolaşırken indeks numarasına gerek duymaz. Veri kümesi üzerinde döngü kurulmasını sağlar.

 Enumeration’ların yerini Iterator interface’i almıştır. Yeni yazılan Java projelerinin Iterator interface’den türemiş nesneleri kullanması istenir. Enumeration geriye dönük uyumluluk nedeniyle kaldırılmamıştır.

 Enumeration interface’in “hasMoreElements()” ve “nextElement()” isimli iki soyut metodu vardır. Bunlardan ilki Enumeration nesnesinin o anda bulunduğu konumdan sonra veri kümesinde başka eleman olup olmadığını belirtir. İkinci fonksiyon ise nesnenin bulunduğu konumdan bir sonraki elemana gitmesini sağlar.  

```java
List<ElectricCar> electricalCars = new ArrayList<ElectricCar>();
electricalCars.add(new ElectricCar("BMW", "34 AL 377", 100));
electricalCars.add(new ElectricCar("Mercedes", "35 Aa 547", 200));
electricalCars.add(new ElectricCar("BMW", "45 AB 547", 200));
 
Enumeration<ElectricCar> enumerationObject = Collections.enumeration(electricalCars);
 
while(enumerationObject.hasMoreElements()) 
{       
        ElectricCar electricCar = enumerationObject.nextElement();
        electricCar.showInfo();
}
 
Vector<ElectricCar> electricCarVector = new Vector<ElectricCar>();
electricCarVector.add(new ElectricCar("BMW", "34 AL 377", 100));
electricCarVector.add(new ElectricCar("Mercedes", "35 Aa 547", 200));
electricCarVector.add(new ElectricCar("BMW", "45 AB 547", 200));
 
// Vector veri yapısında "elements" isimli fonksiyon Enumeration tipinde bir nesneyi oluşturup döndürür.
Enumeration<ElectricCar> enumerationObject1 = electricCarVector.elements();
 
// Ya da Collections sınıfı içindeki static "enumeration" fonksiyonu ile Enumeration nesnesi oluşturabiliriz.
Enumeration<ElectricCar> enumerationObject2 = Collections.enumeration(electricCarVector);
 
 
while(enumerationObject1.hasMoreElements()) 
{       
        ElectricCar electricCar = enumerationObject1.nextElement();
        electricCar.showInfo();
}
```

 

Yukarıdaki örnekte bir veri kümesinden Enumeration oluşturup while döngüsünde kullanımı gösterilmiştir. Buradaki veri kümemiz liste tipinde elektrikli araçlar listesidir. Bu araç listesini tek tek dolaşacak bir Enumeration nesnesi oluşturuyoruz. Bunu yaparken Collections isimli sınıfın “enumeration()” isimli statik fonksiyonunu kullanıyoruz. Bu fonksiyona elimizdeki veri kümesini girdi olarak gönderiyoruz. “enumeration” fonksiyonu da bu veri kümesi üzerinde dolaşabileceğimiz bir enumeration nesnesi döndürüyor. 

## 2- Iterable Interface (Arayüzü)

Iterable interface’i Collection interface’in ATA sınıfır. Böylece, Collection’dan kalıtım alan tüm alt sınıflarda da Iterable interface’i kalıtım almış olur. Iterable interface ile elimizdeki veri kümesini tek tek dolaşabilme olanağı kazanırız. Bir for-each döngüsünde veri kümesi elemanlarına erişebiliriz.

 Iterable interface’i sadece “iterator” isminde bir tane soyut fonksiyona sahiptir. Bu fonksiyon “Iterator” tipinde bir nesne döndürür. Bu nesne ile veri kümesindeki elemanlara tek tek erişebiliriz. 

```java
public interface Iterable<T> {
 
  public Iterator<T> iterator();    
 
}
```

 Aşağıdaki gibi Person tipinde nesneleri tutan bir veri kümesini for-each döngüsüyle tek tek gezebiliyoruz. 

```java
for(Person person : persons) {
    // do something with person object.
}
```

 Elimizdeki veri kümesini binlerce kez döngüde kullanmamız gerektiği bir durumda Iterator ile for-each döngüsünde dolaşmak indeksli standart döngüyle dönmekten daha yavaş olacaktır. Bu bir performans kaybına sebep olur. Bunun sebebi her döngü iterasyonun “iterator” fonksiyonu çağrılıp yeniden bir nesne üretilecek ve bu milyonlarca kez tekrarlanırsa performans problemi yaratacaktır. 

```java
for(int i=0; i<list.size(); i++) {
    Object obj = list.get(i);
}
```

 Yoğun bir şekilde liste halindeki veriniz üzerinde binlerce, milyonlarca kez dönmeniz gerekiyorsa klasik for döngüsü, iterator ve for-each ile döngü kurmaktan daha performanslı olabilecektir.

 ## 3- Iterator Interface (Arayüzü)

Iterator interface bizlere veri kümesinde döngü kurabilen bir olanak tanır. Iterable interface ile bir Iterator’a sahip olabilme işlevine sahiptik. Iterator ile ise döngüde elemanlara erişim yapabilen bir altyapı kazanıyoruz. Collection interface’den türemiş alt sınıflarda “iterator” fonksiyonunu çağırarak bir “Iterator” nesnesi oluşturup alıyoruz. Iterator nesnesi o anki veri kümesini dolaşabilecek işleve sahiptir. 

Iterator, veri kümesi içindeki elemanları tek tek dolaşabilmeyi sağlar. Bu dolaşma tek yönlüdür. İlk elemandan son elemana doğrudur. Bu durumu elindeki hasta listesini tek tek dolaşan bir doktora benzetebilirsiniz. Doktor sabah ilk hastasından son hastasına kadar tümüyle tek tek ilgilenir. Burada Iterator nesnesini doktora benzetip veri kümesi üzerinde dolaşan bir nesne olarak düşünebiliriz. 

Not: İndeks değeri olmayan veri kümelerini indeksli klasik for döngüsüyle gezemeyiz. Bu durumda Iterator nesnesi ile elemanları tek tek dolaşabiliriz. 

Iterator nesnesi aşağıdaki döngü tiplerinde kullanılabilir. 

\-    while döngüsü (tavsiye edilen)

\-    for döngüsü

\-    do-while döngüsü 

Iterator interface’in fonksiyonları: 

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

4. ve 5. konular sonraki alt dalın içindedir.