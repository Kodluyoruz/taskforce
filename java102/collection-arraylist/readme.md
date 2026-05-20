# List interface (Arayüzü)

Collection Interface'ini implemente eden List Interface'i Java 5 ile jenerik (generic) olmuştur. Veriler, geliş sırasına göre (ordered) tutulur.

List'lerin her elemanı bellekte kendine özgü bir alan tutar. List üzerinde veri ekleme ve bu verilere erişme indis(index) denilen integer sayılar üzerinden yapılır. Başlangıç indisi sıfırdır.

List Interface'inden kalıtım alan sınıflarda, tekrarlı (duplicate) veya null değerli elemanlar tutulabilir.

Dizilerin kullanıldığı her yerde List'ler kullanılabilirler ayrıca birbirlerine dönüştürülebilirler. Veri işlemeye yarayan metotlarından dolayı List'ler, programcılar, bu yapıları daha çok tercih ederler.



Bu interface'te implemente edilen metotlar;



| Metot imzaları                       | Açıklama                                                     |
| ------------------------------------ | :----------------------------------------------------------- |
| get(int index)                       | Verilen indisteki nesneyi getirir.                           |
| add(Object  element)                 | Listeye eleman  eklemeyi sağlar. Eğer, indisle birlikte nesne verilirse, ilgili indisin  gösterdiği noktaya elemanı ekler. Aynı indiste başka bir nesne varsa onun  üzerine yazar. |
| indexOf(Object)                      | Verilen bir  nesnenin listede hangi indiste tutulduğunu bulur. |
| remove(int  index)                   | Verilen  indisteki elemanı siler.                            |
| set(int index,  Object element)      | Verilen  indisteki elemanı başka bir eleman ile değiştirir.  |
| subList(int  fromIndex, int toIndex) | Verilen  indisler arasındaki elemanlardan oluşan yeni bir liste oluşturur. |

## List interface’in alt sınıfları

-    ArrayList

-    LinkedList

-    Vector

-    Stack

NOT: Vector ve Stack sınıfları, legacy (miras) sınıflardır. Java 5'ten önceki versiyonlarında var olup, artık daha iyi alternatifleri olan sınıflardır. Hala bu sınıfları kullanan projeler olabileceği için tamamen kaldırılamazlar.

### ArrayList Sınıfı

List Interface’den türemiş alt sınıf olan ArrayList, liste halindeki verileri dinamik diziler(array) kullanarak saklar. Default boyutu 10’dur.

![img](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/java102/collection-arraylist/figures/arraylist.png)

Bu dizilere yeni eleman eklendikçe eğer boyutu yetmiyorsa, çalışma zamanında, arka tarafta var olan dizinin boyutunun 2 katı olan yeni dizi tanımlanır. Eski dizideki elemanlar indis değerleri korunarak yeni diziye aktarılırlar. Esnek fakat maliyetli bir collection’dır.

Veri saklamak ve veriye erişimin yoğun olduğu durumlar için ArrayList tercih edilir.

ArrayList’ler tanımlanırken <>(diamond) operatörleri arasına içerisinde tutulacak değerlerin tipi yazılmalıdır.

Araya ekleme veya silme işlemleri yapılması durumunda kaydırma işlemleri yapılması gerekir. Bu durum performansı düşürür.

ArrayList sınıfı thread-safe değildir. Bir ArrayList’e aynı anda birden fazla thread erişebilir. Bu durum veri bütünlüğünü bozar.



Sınıf imzası;

```java
public class ArrayList<E> extends AbstractList<E> implements List<E>, RandomAccess, Cloneable, Serializable  
```



| Constructor                          | Açıklama                                                     |
| ------------------------------------ | :----------------------------------------------------------- |
| ArrayList()                          | Boş bir ArrayList oluşturmak için kullanılır.                |
| ArrayList(Collection<? extends E> c) | C Collection'ının öğeleriyle başlatılan bir ArrayList oluşturmak için kullanılır. |
| ArrayList(int capacity)              | Belirtilen başlangıç kapasitesine sahip bir ArrayList oluşturmak için kullanılır. |



```java
import java.util.*;

public class Alist {
    public static void main(String[] args) {
        //String tipinde elemanları tutan ArrayList initialize
        List<String> nameList = new ArrayList<String>();

        //İndis 0'dan başlayarak elemanları sırayla yerleştirir.
        nameList.add("Gamze");
        nameList.add("Elif");
        nameList.add("Mustafa");
        nameList.add("Umut");
        nameList.add("Umut");
        //ArrayList null değerli eleman tutabilir.
        nameList.add(null);

        //Tüm listeyi ekrana yazdırır.
        System.out.println(nameList);

        //size() metodu, Collection Interface'inden gelen bir mirastır.
        System.out.println("Size of list: " + nameList.size());

        // get ile listeden eleman okuması yapılır. Okunan eleman listeden çıkartılmaz.
        System.out.println("Element of 1 index: " + nameList.get(1));
        System.out.println("Element of 2 index: " + nameList.get(2));


        // Liste başından taramaya başlarayarak ilk geçen noktadaki Umut bilgisinin indis değerini verir.
        System.out.println("Index of 'Umut': " + nameList.indexOf("Umut"));

        // Liste sonundan taramaya başlayarak son geçen noktadaki Umut bilgisinin indis değerini verir.
        System.out.println("Index of 'Umut': " + nameList.lastIndexOf("Umut"));

        //add() fonksiyonuna ilk verilen argüman indis, sonraki elemandır.
        //Verilen indise gidip verilen elemanı koyar.
        //Verilen indiste daha önceden tanımlanmış değer varsa, fonksiyondaki elemanı o indise koyar ve geri kalan elemanları kaydırır.
        nameList.add(3, "Zeynep");

        //set() fonksiyonuna ilk verilen argüman indis, sonraki elemandır.
        //Verilen indise gidip verilen elemanı koyar.
        //Verilen indis, liste boyutunun dışında olmamalıdır.
        nameList.set(1, "Naz");


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
        //Başlangıç ve bitiş indisleri verilir.
        //Başlangıç indisindeki eleman dahil, bitiş indisindeki eleman hariç yeni bir liste oluşturulur.
        List<String> subList = nameList.subList(4, 6);

        System.out.println("Sublist from name list");
        System.out.println(subList);


        // toArray fonksiyonu parametresiz çağırırsanız Object tipinde bir dizi döner.
        Object[] objectArray = nameList.toArray();

        // toArray fonksiyonuna hangi tipte bir dizi oluşturmak istiyorsak,
        // o tipten bir nesne üretip parametre olarak göndeririz.
        // String tipinden bir dizi almak istediğimiz için "new String[0]" şeklinde bir nesne üretip, "toArray" fonksiyonuna gönderdik.
        String[] stringArray = nameList.toArray(new String[0]);


        // listedeki tüm elemanları temizler. yani tümünü listeden siler.
        nameList.clear();
    }
}

```
