

# Comparable Comparator Interfaces

## Comparable Interface (Arayüzü)

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

 ## Comparator Interface (Arayüzü)

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