Bölüm-3

#  Java Koleksiyon Çatısı (Java Collection Framework) – (JCF)

Yazılım gerçekleştirirken mutlaka liste tipinde verilerle uğraşmak gerekecektir. Bu liste tipindeki verilere dinamik olarak eleman ekleme, eleman almak gibi işlemler gerekecektir. Hatta, limiti dolduğunda otomatik olarak listenin büyümesini de en esnek şekilde isteyeceğiz. Tüm bu özellikler ve hazır veri yapıları bizim daha hızlı kod geliştirmemize büyük katkı sağlayacaktır. Bu hazır algoritmalar, veri yapıları ve sınıflar ile yaptığımız işe daha çok odaklanacağız. JCF sınıfları da JDK içinde tanımlanmış hazır gelen yapılardır.

JCF sınıfları Java 1.2 ile birlikte hayatımıza girmiştir.

Önceki konularda dizi kavramından bahsetmiştik. Diziler de liste halindeki verileri yazılım dünyasında modellemek için kullanılabilir. Fakat, dizilerin iki önemli eksikliği vardır.

\-    Dizinin büyüklüğü çalışma zamanında değiştirilemez. (immutable)

\-    Dizi elemanları aynı veri tipinden olmak zorundadır.

**Yazılım = Veri + Algoritma** şeklinde özetlenebilir. Yazılımlar verileri belli başlı algoritmalar ile işleyip kullanan ve çeşitli çıktılar üreten sistemlerdir. Algoritmaları da Java gibi programlama dilleriyle gerçekleştiririz.

Java Collection Framework aşağıdaki temel bileşenlerden oluşur.

\-    Arayüzler (interfaces): Java Collection çatısı temelde iki tane interface’den türemiştir. En temel arayüzler “Map” ve “Collection” interface’leridir. “Map” interface’den türeyen alt sınıflar anahtar-değer biçimindeki verileri depolarlar. Bu duruma örnek olarak öğrenci numarasına göre dönemlik ders notlarının tutulmasını verebiliriz. “Collection” interface’den türemiş alt sınıflar ise düz liste halinde tutulan verileri depolarlar. Dizilere benzerdirler. Fakat, dizilere göre daha esnek işlevleri vardır. Buna örnek olarak kredi kartının aylık hesap hareketleri verilebilir.

\-    “Map” ve “Collection” interface’lerden türeyen alt sınıflar: Bu iki temel interface’den türemiş içinde belli başlı algoritmalar çalışan sınıflardır. Bu sınıflardan direkt olarak nesne üretip kullanabiliriz. Veri yapıları dersindeki bir çok veri yapısı burada hazır olarak kodlanmıştır. Biz programcılar bu hazır sınıfları kullanarak yazılım geliştirme hızımızı arttırabiliriz. Yaptığımız iş akışına daha çok odaklanabiliriz.

\-    Algoritmalar: Verinin hangi mantığa göre ekleneceği, listedeki elemanlara hangi sırayla erişilebileceği, veri içinde arama yapılması gibi bir çok işleme ihtiyaç duyarız. Java Collection Framework içindeki sınıflar bu saydığımız işlemleri belli algoritmalara göre yaparlar. Her sınıfın kendine özgü bir algoritması vardır.

Java Collection Framework Soyağacı (Kalıtım Şeması)

![Java Collection Framework](figures/java-cf.png)

 ![img](figures/map.png)

 

 

## Collection Arayüzü (interface) ve Alt Sınıfları

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

 

 

 

 

Java Collection Framework altyapısını incelerken işimize yaracak yardımcı konulardan ve kavramlardan bahsetmek gerekiyor. Bu önemli başlıkları aşağıdaki gibi beş konuya ayırdık.

 

1-   Enumeration

2-   Iterable

3-   Iterator

4-   Comparable

5-   Comparator

 

 

1- Enumeration Interface (Arayüzü)

 

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

 

 

2- Iterable Interface (Arayüzü)

 

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

 

 

 

 

 

3- Iterator Interface (Arayüzü)

 

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

 

4- Comparable Interface (Arayüzü)

 

Yazılımları kodlarken bir veri kümesinin sıralanması, veri kümesinde aranan bir elemana ulaşılması gibi gereklilikler mutlaka ortaya çıkacaktır. Özellikle, veri kümesinin artan veya azalan şekilde sıralanması gibi istekleri karşılamak gerekecektir. Verileri sıralamak için <, >, == gibi operatörleri kullanabiliriz. İlkel veri tipleri zaten varsayılan olarak bu operatörlerle çalışabilir. Zaten, 5 sayısının 10’dan küçük olup olmadığını kontrol etmek basit ve mantıklıdır. Fakat, “Order” tipinde bir sınıf oluşturduğunuzu düşünün bu sınıf içinde “value” isimli değişken siparişe ait toplam ücret değerini tutuyor olsun. Sizden kullanıcının tüm geçmiş siparişlerini en yüksek değerden en küçüğe doğru sıralamanızı istediklerinde Java’da bu sıralamayı yapmak için iki araç kullanabilirsiniz. Yazılımcının tasarladığı sınıflar olsun veya Java’da kendiliğindne tanımlı sınıflar olsun. Bunlardan oluşturduğumuz nesneleri direkt olarak >, <, == ile ifadeler ile kıyaslamak anlamsız kalır. İki nesnenin neye göre büyük veya küçük olduğunu tanımlamak gerekecektir. Bu nedenle bahsettiğimiz bu iki interface bizlere sıralama yapabilmek için yardımcı olacaktır.

 

\-    Comparable Interface

\-    Comparator Interface

 

Biz önce “Comparable” interface’i inceleyeceğiz. 

 

“Comparable” interface’i sınıflara kalıtım verir. Böylece, bu interface’den kalıtım alan sınıflar yani veri tipleri sıralanabilir özelliğine sahip olurlar. Sıralanabilirlik her veri tipi için olması gereken bir özelliktir. Fakat, sıralama için kurulacak algoritma ve hangi değişkenlere göre sıralama yapılabileceği alt sınıflarda doldurulması gerekir. Yani özetle sıralama için gerekli olan algoritma alt sınıflarda değişiklik gösterebilir ve her alt sınıf bu sıralama mantığını kendine göre doldurmalıdır. Bu da bize soyutlama yapmamız gerektiğini anlatıyor. Bu nedenle “Comparable” veri tipi bir interface olarak tanımlanmıştır.

 

“Comparable” interface içinde sadece “compareTo” metodu bulunur. Bu interface’den kalıtım alan sınıflar bu sana fonksiyonu ezmek (override) etmek zorundadırlar.

 

“compareTo” metodu kıyaslama yapabilmek için aynı veri tipinden bir tane nesne kabul eder. Fonksiyona gönderilen bu nesne ile kıyaslama yapılan nesnenin bazı özellikleri büyüklük küçüklük durumuna göre kıyaslanır. Bu metodun çalışma mantığı aşağıdaki gibidir.

“Order” sınıfından oluşturulmuş “a” ve “b” isminde iki tane nesnemiz olsun bunları kıyaslamaya kalktığımız şöyle bir kural ortaya çıkacaktır.

 

 

“a.compareTo(b)”  dediğimizde:

 

Eğer, a < b ise  -1,

Eğer, a == b ise  0,

Eğer, a > b ise  1,

 

şeklinde özetleyebiliriz. Şimdi bunu basit bir örnekle açıklayalım.

 

```java
public class Order implements Comparable<Order> {
 
        private double value;
        
        public Order(double value) {
               this.value = value;
        }
        
        public double getValue() {
               return this.value;
        }
        
        public void setValue(double value) {
               this.value = value;
        }
        
        @Override
        public int compareTo(Order order) {
               
               // Eğer b > a gibi
               if(order.getValue() > this.getValue()) {
                       return -1;
               }
               // Eğer a == b gibi
               else if(order.getValue() == this.getValue()) {
                       return 0;
               }
               // Eğer b < a gibi
               else if(order.getValue() < this.getValue()) {
                       return 1;
               }
               
               return this == order ? 1 : -1;
        }
        
        @Override
        public String toString() {
               
               return String.valueOf(this.getValue());
        }
 
}
```

 

“Order” sınıfı “implements Comparable<Order>” ifadesiyle kalıtım alıyor. Kalıtım aldıktan sonra “comperaTo” metodunu override ederek kendi ihtiyacına göre dolduruyor. Eğer fonksiyona gönderilen “order” isimli “Order” tipindeki nesnenin ücreti mevcut nesnenin ücretinden büyükse -1 dönüyoruz. Eğer, her iki nesnenin ücreti aynı ise 0 dönüyoruz. Eğer ki mevcut nesnenin ücret değeri fonksiyona gelen “order” isimli nesneden büyükse 1 dönüyoruz.

 

```java
public static void main(String[] args) {
        
        List<Order> orders = new ArrayList<Order>();
        orders.add(new Order(1001.5));
        orders.add(new Order(90.5));
        orders.add(new Order(1001.1));
        orders.add(new Order(20));
        orders.add(new Order(78.3));
        orders.add(new Order(9.4));
        
        System.out.println("Before Sorting");
        for(Order order : orders) {
               System.out.println(order);
        }
        
        Collections.sort(orders);
        
        System.out.println("After Sorting");
        for(Order order : orders) {
               System.out.println(order);
        }
}
```

 

Yukarıdaki örnekte “ArrayList” tipinde düz bir liste tutan veri yapısı oluşturuyoruz. Bu veri yapısına Order sınıfından oluşturduğumuz nesneleri ekliyoruz. Ardından, “Collections” isimli sınıfın “sort” isimli statik fonksiyonu ile listemizi sıralıyoruz. Bu sıralamayı yapabilmemizin sebebi “Order” sınıfının “Comparable” interface’den kalıtım alması ve “compareTo” fonksiyonunu doldurmamız. Bu fonksiyonda sıralamanın yönünü belirledik. Sıralamamız ücretlerin küçükten büyüğe doğru sıralanmış halidir.

 

“Comparable” interface kendi ürettiğimiz sınıflara ait nesnelerin birbiriyle sıralanmasını sağlar.

 

Peki listeyi büyükten küçüğe göre sıralamak isteseydik ne yapmamız gerekirdi. Bu durumda 1 ve -1 ifadelerinin yerini değiştirmek gerekecekti. Yani, “compareTo” fonksiyonunun içini aşağıdaki şekilde değiştirecektik.

 

```java
@Override
public int compareTo(Order order) {
        
        // Eğer b > a gibi
        if(order.getValue() > this.getValue()) {
               return 1;
        }
        // Eğer a == b gibi
        else if(order.getValue() == this.getValue()) {
               return 0;
        }
        // Eğer b < a gibi
        else if(order.getValue() < this.getValue()) {
               return -1;
        }
        
        return this == order ? 1 : -1;
}
```

 

 

İlkel veri tiplerini sıralamak istersek ise çeşitli statik fonksiyonlar bize yardımcı olmaktadır. Her ilkel veri tipinin sınıf tabanlı bir karşılığı vardı. Önceki konularda bundan bahsetmiştik.

 

Bu sınıflar içinde kıyaslama yapabilmek için “compare” isimli statik fonksiyon bulunur.

 

```java
double price1 = 100.2;
double price2 = 90.3;
 
// Eğer price1 > price2 ise 1 döndürür.
System.out.println(Double.compare(price1, price2));  
 
 
int age1 = 21;
int age2 = 34;
// Eğer age1 < age2 ise -1 döndürür.
System.out.println(Integer.compare(age1, age2));
 
 
long pageCount1 = 1000;
long pageCount2 = 1000;
// Eğer pageCount1 == pageCount2 ise 0 döndürür.
System.out.println(Long.compare(pageCount1, pageCount2));
```

 

 

5- Comparator Interface (Arayüzü)

 

Comparator interface’i de veri kümeleri üzerinde çeşitli sıralamalar yapabilmeyi sağlar. İki tane önemli fonksiyonu vardır.

 

 

**int compare(Object obj1, Object obj2)**

 

“obj1” ve “obj2” nesnelerini birbiriyle kıyaslar. Bu kıyaslama aşağıdaki kural ile olur.

 

Eğer obj1 < obj2 ise -1,

Eğer obj1 == obj2 ise 0,

Eğer obj1 > obj2 ise 1

 

Şeklinde bir kural uygulanır.

 

 

**boolean obj1.equals(obj2)**

 

“obj1” ve “obj2” nesnelerini eşit olup olmadığını kontrol eder. Eşit “true”, değilse “false” döner.

 

 

Bir önceki başlıkta “Comparable” interface’den bahsetmiştik. “Comparable” interface içindeki “compareTo” metodu bir veri kümesi üzerindeki doğal sıralamayı uygular.

 

Eğer veri kümesinde veri sıralaması yoksa ya da doğal sıralama dışında farklı tipte sıralamalar yapılması isteniyorsa bu durumda “Comparator” interface’i kullanılır. “Comparator” interface’den türemiş birden fazla alt sınıf oluşturup aynı veri kümesi üzerinde birbirinden farklı sıralama algoritmaları çalıştırabiliriz.

 

```java
public class BookPublisherComparator implements Comparator<Book> {
 
        // BookOrderType.ASC enum sabitini kullanırsak küçükten büyüğe doğru sıralama yapacak şekilde geliştirme yapacağız.
        // BookOrderType.DESC enum sabitini kullanırsak büyükten küçüğe doğru sıralama yapacak şekilde geliştirme yapacağız.
 
        private BookOrderType orderType;
        
        public BookPublisherComparator(BookOrderType orderType) 
        {
               this.orderType = orderType;
        }
        
        @Override
        public int compare(Book book1, Book book2) {
               
               String publisher1 = book1.getPublisher();
               String publisher2 = book2.getPublisher();
               
               int orderResult = publisher1.compareTo(publisher2);
               
               if(this.orderType.equals(BookOrderType.DESC)) {
                       
                       // "compareTo" fonksiyonun doğal sıralama davranışı küçükten büyüğe doğrudur.
                       // Bunu tersine çevirmek için gelen sonucun negatifini alırsak bu sefer büyükten küçüğe doğru sıralamaya başlar.
                       // normalde "orderResult" değişkenini -1 ile çarpıp kolayca işi çözebilirdik.
                       // fakat çarpma işlemi işlemcide ciddi bir maliyet.
                       // Bu nedenle ilk derslerde öğrendiğimiz bitwise operatörleri kullanarak, bir sayının negatifini alıyoruz.
                       
                       orderResult = ~(orderResult - 1);
               }
               
               return orderResult;
        }
 
}
```

 

Yukarıda “BookPublisherComparator” isimli sıralama sınıfını oluşturduk. Bu sınıf “Comparator” interface’den kalıtım almaktadır. Böylece, “compare” isimli override ederek kendi ihtiyacımıza göre dolduruyoruz. Oluşturduğumuz bu sınıf yayınevi ismine göre sıralama yapmaktadır.

 

Sıralamayı büyükten küçüğe veya küçükten büyüğe olmak üzere iki yönde yapabiliriz. Sıralamayı hangi yönde yapacağımızı “enum” tipinde bir veri tipiyle tutuyoruz. “BookOrderType” isimli enum’da “ASC” ve “DESC”isimli sabit değerler bulunmaktadır. “ASC” küçükten büyüğe doğru sıralamayı ifade eder. “DESC” ise büyükten küçüğe doğru sıralamayı ifade eder.

 

Şimdi de oluşturduğumuz Comparator sınıfının kullanımını inceleyelim.

 

```java
List<Book> books = new ArrayList<Book>();
               
books.add(new Book("Java Book", "Penguen Yayınevi", 2019, 500, 50));
books.add(new Book("Python Book", "Panda Yayınevi", 2012, 250, 45.5));
books.add(new Book("C# Book", "Elma Yayınevi", 2020, 660, 70));
books.add(new Book("Ruby Book", "Beyaz Balina Yayınevi", 2014, 450, 28));
books.add(new Book("Go Book", "Kanarya Yayınevi", 2017, 420, 80));
books.add(new Book("Javascript Book", "ABC Yayınevi", 2010, 300, 20));
 
 
// "sort" fonksiyonuna herhangi bir Comparator vermedik. 
// Bu nedenle "Book" sınıfı içindeki "compareTo" metoduna göre sıralayacaktır.
// Doğal sıralama yapıp kitap ismine göre küçükten büyüğe doğru sıralama yapacaktır.
Collections.sort(books);
 
 
BookPublisherComparator bookPublisherComparatorDesc = new BookPublisherComparator(BookOrderType.DESC);
Collections.sort(books, bookPublisherComparatorDesc);
 
System.out.println("Yayınevi bilgisine göre büyükten küçüğe doğru sıralanmış:");
printAll(books);
 
 
BookPublisherComparator bookPublisherComparatorAsc = new BookPublisherComparator(BookOrderType.ASC);
Collections.sort(books, bookPublisherComparatorAsc);
 
System.out.println("Yayınevi bilgisine göre küçükten büyüğe doğru sıralanmış:");
printAll(books);
```

 

Collections isimli sınıfın, “sort”isminde statik tanımlı bir fonksiyonu aracılığıyla veri kümesini sıralayabiliyoruz. “sort” fonksiyonuna eğer ki herhangi bir “Comparator” tipte bir nesne vermezseniz, varsayılan olarak veri kümesindeki nesnelerin “compareTo” metodunu kullanarak sıralama yapacaktır. Bu örnekte “BookPublisher” sınıfı kitap sınıfındaki yayınevi verisine göre, yani “publisher” isimli değişkenin değerine göre sıralama yapmaktadır. 

 

 

 