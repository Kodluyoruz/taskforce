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


