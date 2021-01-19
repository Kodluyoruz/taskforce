# Enumeration Interface (Arayüzü)

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