# List Set ve Map Veri Yapıları

“Collection” interface’den kalıtım alan alt sınıflar “java.util” paketi altında toplanmıştır. “Collection” interface ile liste tipinde veri tutan bir veri yapısında hangi işlevlerin olması gerektiği belirtilmiştir. Liste tipinde veri tutacak olan her sınıf doğrudan veya dolaylı yoldan bu interface’den kalıtım almalıdır. Bu nedenle soyağacının en tepesinde “Collection” interface yer almaktadır.

Java Collection sınıfları ile liste halindeki veri üzerinde arama, ekleme, silme, sıralama gibi işlemler yapabilirsiniz.

Biliyoruzki interface’ler de birbirinden kalıtım alabilir. “Collection” interface’den kalıtım almış en önemli arayüzler “List”, “Queue”, “Set” interfae’leridir. 

Bu üç interface’den kalıtım alan alt sınıflar ise aşağıdaki gibidir.

 

\-    List interface’den kalıtım alan alt sınıflar: ArrayList, LinkedList, Vector, Stack

\-    Queue interface’den kalıtım alan alt sınıflar: PriorityQueue, ArrayQueue

\-    Set interface’den kalıtım alan alt sınıflar: HashSet, LinkedHashSet, TreeSet

 

Collection interface’den türeyen alt sınıfların sağlamak zorunda olduğu fonksiyonlar: 

| int size()                                       | Veri kümesinin  eleman sayısını verir.                       |
| ------------------------------------------------ | ------------------------------------------------------------ |
| boolean  isEmpty()                               | Veri kümesinde  eleman yoksa true döner.                     |
| boolean  contains(Object element)                | Veri kümesinde  aranan elemanın olup olmadığını true/false şeklinde belirtir. |
| Iterator<E>  iterator()                          | Veri  kümesindeki elemanları tek tek dolaşmayı sağlayan nesneyi verir. |
| Object[]  toArray()                              | Veri kümesini dizi  halinde verir.                           |
| boolean add(E  e)                                | Veri kümesine  eleman eklemeyi sağlar.                       |
| boolean remove(Object  element)                  | Veri kümesinden  eleman silmeyi sağlar.                      |
| boolean  addAll(Collection<? extends E elements) | Collection  tipinde başka bir veri kümesini olduğu gibi mevcut veri kümesine bütünüyle  ekler. |
| void clear()                                     | Veri  kümesindeki tüm elemanları temizler, siler.            |
| boolean  removeAll(Collection<?> elements)       | Verilen  elemanlar kümesini mevcut veri kümesinden siler.    |

Collection interface’den kalıtım alan alt sınıfları kendiniz de türetebilirsiniz. 

## List interface (Arayüzü)

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

 

### List ve Set Farkları

List ve Set interfaceleri her ikisi de Collection interface’den kalıtım almıştır. Her iki interface’den türeyen alt sınıflar liste halindeki veri kümeleri üzerinde işlemler yaparlar. Bu nedenle aslında birbirine çok benzerdirler. 

List ve Set arasındaki en önemli birinci fark List tipindeki sınıflarda liste halindeki veri içerisinde mükerrer kayıt bulunabilir. Yani elimizde basitçe bir isim listesi olsun “Mehmet”, “Ahmet”, “Mehmet” bu liste içinde “Mehmet” değerinden birden fazla olabilir. Set interface’den türeyen alt sınıflarda ise mükerrer kayıt olmaz. Her elemandan sadece bir adet olabilir. İkinci kez tekrar eden bir eleman bulunmaz. 

Diğer ikinci önemli fark ise List interface’den türeyen alt sınıflarda veri kümesine eleman eklenme sırasına göre tutulur. Yani “5”, “10”, “20” gibi bir liste oluşturduğumuzda sırayla bu elemanlar veri kümesine dahil edilir. “5” 1. Eleman olacaktır, “10” 2. Eleman olacaktır. Set interface’den türeyen alt sınıflarda ise eklenme sırasına göre bir sıralama yapılmaz. Rastgele bir sıralamaya sahiptirler. Sıralı tutabilmek için “SortedSet” isminde “Set” interface’den kalıtım alan başka bir interface kullanmak gerekir. 

### List interface’in alt sınıfları 

\-    ArrayList

\-    LinkedList

\-    Vector

\-    Stack

 En sık kullandığımız düz bir liste şeklinde verileri tutan “ArrayList” tipindeki alt sınıftır.

 

#### ArrayList Sınıfı 

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

 

#### LinkedList Sınıfı 

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

 

#### LinkedList ile ArrayList Farkları 

| **ArrayList**                                                | **LinkedList**                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Dinamik bir  dizi ile çalışır.                               | Çift yönlü  bağlı listeyi kullanır.                          |
| Veri kümesi  üzerinde eleman ekleme-çıkarma işlemleri yoğunsa ArrayList yavaş çalışır.  Çünkü, her araya ekleme ve çıkarma sonucu kaydırma işlemi yaptığından  performans düşer. | Veri kümesi  üzerinde eleman ekleme çıkarma işlemlerinde ArrayList’e göre hızlıdır. Çünkü,  veri yapısı gereği herhangi bir kaydırma işlemine gerek duymaz. |
| Veri saklamak  ve veriye erişimin yoğun olduğu durumlar için ArrayList tercih edilir. | Veri kümesi  üzerinde yoğun bir şekilde ekleme-çıkarma gibi güncelleme işlemleri varsa bu  durumda LinkedList tercih edilir. |

 

## Set interface (Arayüzü)

 Collection interface’den kalıtım almıştır. Aynı elemanların veri kümesi içinde tekrar bulunmasına izin vermez. HashSet sınıfı en yaygın olan alt sınıfıdır. Eleman tekrarının olmamasını sağlayabilmek için veri kümesi içindeki nesnelerin “equals” ve “hashCode” fonksiyonlarının tanımlı olması gerekir. 

Set interface’in alt sınıfları:

 \-    EnumSet

\-    HashSet

\-    LinkedHashSet

\-    TreeSet

  

### HashSet Sınıfı 

Liste tipinde veri tutmayı sağlar. Veri kümesindeki elemanlara ekleme, silme ve erişim imkanı tanır. Veri kümesinde mükerrer değer tutmaz. Mükerrer değer tutmamayı nesnelerdeki hashCode fonksiyonunu kullanarak sağlar. “null” değer eklemesi yapılabilir. 

“equals” ve “hasCode” fonksiyonları doldurulmuş bir Book sınıfı tasarladık. Book nesnelerinden oluşan bir veri kümesi oluşturduk. 

```java
public class Book implements Comparable<Book> {
 
        private String name;
        
        private String publisher;
        
        private int publishYear;
        
        private int pageCount;
        
        private double price;
        
        
        public Book(String name, String publisher, int publishYear, int pageCount, double price) {
               
               this.name = name;
               this.publisher = publisher;
               this.publishYear = publishYear;
               this.pageCount = pageCount;
               this.price = price;
        }
        
 
        public String getName() {
               return name;
        }
 
        public String getPublisher() {
               return publisher;
        }
 
        public int getPublishYear() {
               return publishYear;
        }
 
        public int getPageCount() {
               return pageCount;
        }
 
        public double getPrice() {
               return price;
        }
 
 
        @Override
        public int compareTo(Book book) {
               // doğal sıralamayı kitap ismine göre yapıyoruz.
               return this.getName().compareTo(book.getName());
        }
        
        @Override
        public String toString() {
               
               StringBuilder builder = new StringBuilder();
               builder.append("[");
               builder.append(this.getName());
               builder.append(" - ");
               builder.append(this.getPublisher());
               builder.append(" - ");
               builder.append(this.getPublishYear());
               builder.append(" - ");
               builder.append(this.getPageCount());
               builder.append(" - ");
               builder.append(this.getPrice());
               builder.append("]");
               
               return builder.toString();
        }
 
 
        @Override
        public int hashCode() {
               final int prime = 31;
               int result = 1;
               result = prime * result + ((name == null) ? 0 : name.hashCode());
               result = prime * result + pageCount;
               long temp;
               temp = Double.doubleToLongBits(price);
               result = prime * result + (int) (temp ^ (temp >>> 32));
               result = prime * result + publishYear;
               result = prime * result + ((publisher == null) ? 0 : publisher.hashCode());
               return result;
        }
 
 
        @Override
        public boolean equals(Object obj) {
               if (this == obj)
                       return true;
               if (obj == null)
                       return false;
               if (getClass() != obj.getClass())
                       return false;
               Book other = (Book) obj;
               if (name == null) {
                       if (other.name != null)
                               return false;
               } else if (!name.equals(other.name))
                       return false;
               if (pageCount != other.pageCount)
                       return false;
               if (Double.doubleToLongBits(price) != Double.doubleToLongBits(other.price))
                       return false;
               if (publishYear != other.publishYear)
                       return false;
               if (publisher == null) {
                       if (other.publisher != null)
                               return false;
               } else if (!publisher.equals(other.publisher))
                       return false;
               return true;
        }
}
```

  

```java
Set<Book> books = new HashSet<Book>();
books.add(new Book("Java Book", "Penguen Yayınevi", 2019, 500, 50));
books.add(new Book("Python Book", "Panda Yayınevi", 2012, 250, 45.5));
books.add(new Book("C# Book", "Elma Yayınevi", 2020, 660, 70));
books.add(new Book("Ruby Book", "Beyaz Balina Yayınevi", 2014, 450, 28));
books.add(new Book("Go Book", "Kanarya Yayınevi", 2017, 420, 80));
books.add(new Book("Javascript Book", "ABC Yayınevi", 2010, 300, 20));
books.add(new Book("Javascript Book", "ABC Yayınevi", 2010, 300, 20));
books.add(new Book("Javascript Book", "ABC Yayınevi", 2010, 300, 20));
 
printAll(books);
```

  

### SortedSet interface (Arayüzü)

 Set interface’den kalıtım almıştır. Set’in tanımladığı özelliklere ek olarak veri kümesi içerisindeki elemanların sıralanması, ilk son elemana erişim, bir elemandan önce-sonra gelen elemanların alınması gibi ek özellikleri de tanımlar. SortedSet’in en yaygın kullanıldığı alt sınıf “TreeSet” sınıfıdır. 

#### TreeSet Sınıfı 

Veri kümesine konulan elemanların verdiğiniz kurala göre sıralanmasını sağlar. Bunun sağlanabilmesi için kullanacağınız sınıfın “sıralanabilir” olması gerekmektedir. Bir sınıfın sıralanabilir olması için “Comparable” interface’den kalıtım alıp “compareTo” metodunu doldurması gerekmektedir. Nesne üzerindeki “compareTo” fonksiyonu küçükten büyüğe doğal sıralama imkanı sağlar.

 Eğer sıralanabilir bir nitelik yoksa veya doğal sıralama dışında değişik bir sıralama ile TreeSet’te elemanları saklamak istiyorsak, bu durumda “Comparator” interface’den türemiş alt sınıflar oluşturmak gerekecektir. Comparator sınıfları sıralama yapabilmeyi sağlamaktadır. İçinde “compare” isimli bir fonksiyonu bulunur.

 Yine Book sınıfını kullanarak örneğimize devam edelim. 

```java
Set<Long> yearSet = new TreeSet<Long>();
yearSet.add(2019l);
yearSet.add(2014l);
yearSet.add(2020l);
yearSet.add(2001l);
yearSet.add(2017l);
yearSet.add(2010l);
yearSet.add(2009l);
yearSet.add(2005l);
 
System.out.println("Doğal bir şekilde sıralanmış TreeSet");
printAll(yearSet);
 
Set<Book> books = new TreeSet<Book>();
books.add(new Book("Java Book", "Penguen Yayınevi", 2019, 500, 50));
books.add(new Book("Python Book", "Panda Yayınevi", 2012, 250, 45.5));
books.add(new Book("C# Book", "Elma Yayınevi", 2020, 660, 70));
books.add(new Book("Ruby Book", "Beyaz Balina Yayınevi", 2014, 450, 28));
books.add(new Book("Go Book", "Kanarya Yayınevi", 2017, 420, 80));
books.add(new Book("Javascript Book", "ABC Yayınevi", 2010, 300, 20));
books.add(new Book("Javascript Book", "ABC Yayınevi", 2010, 300, 20));
books.add(new Book("Javascript Book", "ABC Yayınevi", 2010, 300, 20));
 
System.out.println("Doğal bir şekilde sıralanmış kitap listesi");
printAll(books);
 
Set<Book> sortedBooksByPublisher = new TreeSet<Book>(new BookComparatorByPublisher());
sortedBooksByPublisher.add(new Book("Java Book", "Penguen Yayınevi", 2019, 500, 50));
sortedBooksByPublisher.add(new Book("Python Book", "Panda Yayınevi", 2012, 250, 45.5));
sortedBooksByPublisher.add(new Book("C# Book", "Elma Yayınevi", 2020, 660, 70));
sortedBooksByPublisher.add(new Book("Ruby Book", "Beyaz Balina Yayınevi", 2014, 450, 28));
sortedBooksByPublisher.add(new Book("Go Book", "Kanarya Yayınevi", 2017, 420, 80));
sortedBooksByPublisher.add(new Book("Javascript Book", "ABC Yayınevi", 2010, 300, 20));
sortedBooksByPublisher.add(new Book("Javascript Book", "ABC Yayınevi", 2010, 300, 20));
sortedBooksByPublisher.add(new Book("Javascript Book", "ABC Yayınevi", 2010, 300, 20));
 
System.out.println("Comparator ile sıralanmış kitap listesi");
printAll(sortedBooksByPublisher);
```

 İlk örnekte Long değerleri tutan bir TreeSet veri kümesi oluşturduk. Long sınıfındaki “compareTo” metodu doldurulduğu için küçük büyüğe doğal bir sıralama yapıyor.

 İkinci örnekte ise Book sınıfından oluşturulmuş nesneleri tutuyoruz. Book sınıfındaki compareTo metodu override edilmiş durumdadır. “compareTo” metodu kitapları isimlerine göre küçükten büyüğe sıralayacak şekilde doldurulmuştur. TreeSet’in kurucu metoduna herhangi bir Comparator nesnesi göndermezsek, nesneler üzerindeki doğal sıralama metodunu kullanır. Bu örnekte de kitap isimlerine göre bir sıralama yapacaktır.

 Ardından aynı örnekte “BookComparatorByPublisher” isminde “Comparator” interface’den kalıtım alan bir sıralayıcı geliştirdik. Bu sıralayıcı kitap nesnelerini yayınevi ismine göre küçükten büyüğe doğru sıralıyor. 

## Map interface (Arayüzü)

 “java.util” paketi altında tanımlıdır. Map interface’den türeyen birden çok alt sınıf vardır. Map ile anahtar-değer (key-value) şeklinde veri formatına sahip verileri saklayabiliriz. Düz liste veri kümesinden farklıdır. Anahtarlar tekrar etmeyecek şekilde olmalıdır. Yani bir anahtara karşılık gelen yalnızca bir tane nesne olmalıdır. 

### HashMap Sınıfı 

Map interface’den kalıtım almıştır. Anahtar-değer şeklindeki verilerin saklanmasını sağlar. HashMap, anahtar (key) değerlerini hashcode’larına göre tutar. Bu nedenle anahtar olarak verdiğimiz nesnelerin “equals” ve “hashCode” fonksiyonlarını doldurmak gerekecektir. 

 Aynı anahtara sahip iki elemanın eklenmesine izin vermez. İlgili anahtarda bir değer varsa üzerine yazar. 

```java
Map<Student, List<Lesson>> studentLessonMap = new HashMap<Student, List<Lesson>>();
               studentLessonMap.put(
                               new Student("100", "Ahmet", "Mehmet"), 
                               Arrays.asList(
                                              new Lesson("Matematik", 90),
                                              new Lesson("Türkçe", 70) ));
               
               studentLessonMap.put(
                               new Student("101", "Ali", "Veli"), 
                               Arrays.asList(
                                              new Lesson("Matematik", 90),
                                              new Lesson("Türkçe", 70) ));
               
               studentLessonMap.put(
                               new Student("105", "Hale", "Jale"), 
                               Arrays.asList(
                                              new Lesson("Matematik", 80),
                                              new Lesson("Türkçe", 60) ));
               
               studentLessonMap.put(
                               new Student("90", "Ahmet", "Mehmet"), 
                               Arrays.asList(
                                              new Lesson("Matematik", 100),
                                              new Lesson("Türkçe", 60) ));
```

