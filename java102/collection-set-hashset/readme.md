## Set interface (Arayüzü)

Collection interface’den kalıtım almıştır. Aynı elemanların veri kümesi içinde tekrar bulunmasına izin vermez. HashSet sınıfı en yaygın olan alt sınıfıdır.
Eleman tekrarının olmamasını sağlayabilmek için veri kümesi içindeki nesnelerin “equals” ve “hashCode” fonksiyonlarının tanımlı olması gerekir.

Set interface’in alt sınıfları:

- EnumSet

- HashSet

- LinkedHashSet

- TreeSet

### HashSet Sınıfı

Liste tipinde veri tutmayı sağlar. Veri kümesindeki elemanlara ekleme, silme ve erişim imkanı tanır. Veri kümesinde mükerrer değer tutmaz. Mükerrer değer
tutmamayı nesnelerdeki hashCode fonksiyonunu kullanarak sağlar. “null” değer eklemesi yapılabilir.

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

