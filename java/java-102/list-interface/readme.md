# List interface (Arayüzü)



Collection interface’den türemiş bir interface’dir. List interface’den kalıtım alan alt sınıflar vardır. Bu interface’den kalıtım alan sınıflarda veri kümesine mükerrer kayıt ekleyebilirsiniz. Aynı zaman null değere sahip elemanları da veri kümesine dahil edebilirsiniz.

 

List interface’den türemiş sınıflarda veri kümesine ekleme, çıkarma, okuma işlemleri yapabilirsiniz. Veri kümesindeki elemanların her birinin bir indisi vardır. Aynı dizilerdeki gibi veri kümesinden eleman okuması yaparken indis ile erişebilirsiniz. List interface de Generic Tipleri destekler. Böylece veri tipi güvenliği sağlar. TypeCasting (Tip Dönüşümü) yapmanıza gerek bırakmaz.

List interface Collection interface’e ek olarak aşağıdaki fonksiyonları da içerir.

 

| get(int index)                       | Verilen  indisteki nesneyi getirir.                          |
| ------------------------------------ | ------------------------------------------------------------ |
| add(Object  element)                 | Listeye eleman  eklemeyi sağlar. Eğer, indisle birlikte nesneyi verirseniz, ilgili indisin  gösterdiği noktaya elemanı ekler. Aynı indiste başka bir nesne varsa onun  üzerine yazar. |
| indexOf(Object)                      | Verilen bir  nesnenin listede hangi indiste tutulduğunu bulur. |
| remove(int  index)                   | Verilen  indisteki elemanı siler.                            |
| set(int index,  Object element)      | Verilen  indisteki elemanı başka bir eleman ile değiştirir.  |
| subList(int  fromIndex, int toIndex) | Verilen  indisler arasındaki elemanlardan oluşan yeni bir liste oluşturur. |

 

## List ve Set Farkları

List ve Set interfaceleri her ikisi de Collection interface’den kalıtım almıştır. Her iki interface’den türeyen alt sınıflar liste halindeki veri kümeleri üzerinde işlemler yaparlar. Bu nedenle aslında birbirine çok benzerdirler.

 

List ve Set arasındaki en önemli birinci fark List tipindeki sınıflarda liste halindeki veri içerisinde mükerrer kayıt bulunabilir. Yani elimizde basitçe bir isim listesi olsun “Mehmet”, “Ahmet”, “Mehmet” bu liste içinde “Mehmet” değerinden birden fazla olabilir. Set interface’den türeyen alt sınıflarda ise mükerrer kayıt olmaz. Her elemandan sadece bir adet olabilir. İkinci kez tekrar eden bir eleman bulunmaz.

 

Diğer ikinci önemli fark ise List interface’den türeyen alt sınıflarda veri kümesine eleman eklenme sırasına göre tutulur. Yani “5”, “10”, “20” gibi bir liste oluşturduğumuzda sırayla bu elemanlar veri kümesine dahil edilir. “5” 1. Eleman olacaktır, “10” 2. Eleman olacaktır. Set interface’den türeyen alt sınıflarda ise eklenme sırasına göre bir sıralama yapılmaz. Rastgele bir sıralamaya sahiptirler. Sıralı tutabilmek için “SortedSet” isminde “Set” interface’den kalıtım alan başka bir interface kullanmak gerekir.

 

## List interface’in alt sınıfları

 

\-    ArrayList

\-    LinkedList

\-    Vector

\-    Stack

 

En sık kullandığımız düz bir liste şeklinde verileri tutan “ArrayList” tipindeki alt sınıftır.

 

### ArrayList Sınıfı

 

List interface’den türemiş bir alt sınıftır. Liste halindeki verileri tutabilmeyi sağlar. Liste halindeki verileri tutmak için sıkça kullanılır. ArrayList’in dizilerden farkı çalışma zamanında kapasitesi dolunca boyutunu kendiliğinden dinamik olarak büyüyebilir. Böylece, esnek bir yapıya sahiptir. Ayrıca eleman ekleme ve çıkarma işlemleri fonksiyonlar vasıtasıyla basit bir şekilde yapılır. Elemanları bir dizi gibi blok olarak tutar. Araya ekleme veya silme yapınca kaydırma işlemi yapması gerekir. Bu da maliyetli bir iştir.

 

```java
List<String> nameList = new ArrayList<String>();
nameList.add("Gamze");
nameList.add("Elif");
nameList.add("Mustafa");
nameList.add("Umut");
nameList.add("Umut");
nameList.add(null);
 
printAll(nameList);
 
System.out.println("Size of list: " + nameList.size());
 
// get ile listeden eleman okuması yapılır. Okunan eleman listeden çıkartılmaz.
System.out.println("Element of 1 index: " + nameList.get(1));
System.out.println("Element of 2 index: " + nameList.get(2));
 
 
// ilk geçen noktadaki Umut bilgisinin indis değerini veriyor.
System.out.println("Index of 'Umut': " + nameList.indexOf("Umut"));
 
// son geçen noktadaki Umut bilgisinin indis değerini veriyor.
System.out.println("Index of 'Umut': " + nameList.lastIndexOf("Umut"));
 
nameList.set(1, "Zeynep");
 
printAll(nameList);
 
 
// contains ile liste içinde aradığımız eleman var mı yok mu belirtir.
// varsa true, yoksa false döner
System.out.println(nameList.contains("Elif"));
System.out.println(nameList.contains("Mustafa"));
 
// remove fonksiyonu ile listeden belirttiğimiz indisteki değer silinir.
// silinen değer fonksiyondan bize geri döndürülür.
String firstElement = nameList.remove(0);
System.out.println(firstElement + " is removed from list!");
 
 
List<String> newNameList = new ArrayList<String>();
newNameList.add("Batuhan");
newNameList.add("Kemal");
 
// bir listeyi tümüyle bir diğer listeye eklemek için "addAll" fonksiyonu kullanılır.
nameList.addAll(newNameList);
 
 
// listeden alt bir liste oluşturmak için "sublist" fonksiyonunu kullanırız.
List<String> subList = nameList.subList(4, 6);
 
System.out.println("Sublist from name list");
printAll(subList);
 
 
// toArray fonksiyonu parametresiz çağırırsanız Object tipinde bir dizi döner.
Object[] objectArray = nameList.toArray();
 
// toArray fonksiyonuna hangi tipte bir dizi oluşturmak istiyorsak,
// o tipten bir nesne üretip parametre olarak göndeririz.
// String tipinden bir dizi almak istediğimiz için "new String[0]" şeklinde bir nesne üretip, "toArray" fonksiyonuna gönderdik.
String[] stringArray = nameList.toArray(new String[0]);
 
 
// listedeki tüm elemanları temizler. yani tümünü listeden siler.
nameList.clear();
```

 

### LinkedList Sınıfı

 

ArrayList sınıfına çok benzer. Çift yönlü bağlı liste algoritmasının Java’da hazır haldeki halidir.

![img](file:///C:/Users/ozan-/AppData/Local/Packages/oice_16_974fa576_32c1d314_17f5/AC/Temp/msohtmlclip1/01/clip_image010.png)

Yukarıdaki gibi her eleman önceki ve sonraki elemanını işaret edecek şekilde çift yönlü bir ilişki içindedir. Bu yapıda eleman silme veya araya eleman ekleme durumlarında kaydırma işlemi yapılmaz.

 

```java
 
List<String> nameList = new LinkedList<String>();
nameList.add("Hale");
nameList.add("Jale");
nameList.add("Lale");
nameList.add("Ahmet");
nameList.add("Mehmet");
nameList.add("Kemal");
 
// get ile listeden eleman okuması yapılır. Okunan eleman listeden çıkartılmaz.
System.out.println("Element of 1 index: " + nameList.get(1));
System.out.println("Element of 2 index: " + nameList.get(2));
```

 

### LinkedList ile ArrayList Farkları

 

| **ArrayList**                                                | **LinkedList**                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Dinamik bir  dizi ile çalışır.                               | Çift yönlü  bağlı listeyi kullanır.                          |
| Veri kümesi  üzerinde eleman ekleme-çıkarma işlemleri yoğunsa ArrayList yavaş çalışır.  Çünkü, her araya ekleme ve çıkarma sonucu kaydırma işlemi yaptığından  performans düşer. | Veri kümesi  üzerinde eleman ekleme çıkarma işlemlerinde ArrayList’e göre hızlıdır. Çünkü,  veri yapısı gereği herhangi bir kaydırma işlemine gerek duymaz. |
| Veri saklamak  ve veriye erişimin yoğun olduğu durumlar için ArrayList tercih edilir. | Veri kümesi  üzerinde yoğun bir şekilde ekleme-çıkarma gibi güncelleme işlemleri varsa bu  durumda LinkedList tercih edilir. |


