 ## Comparator Interface (Arayüzü)

 Comparator interface’i de veri kümeleri üzerinde çeşitli sıralamalar yapabilmeyi sağlar. İki tane önemli fonksiyonu vardır. 

**int compare(Object obj1, Object obj2)**

"obj1" ve "obj2" nesnelerini birbiriyle kıyaslar. Bu kıyaslama aşağıdaki kural ile olur.

Eğer obj1 < obj2 ise -1,

Eğer obj1 == obj2 ise 0,

Eğer obj1 > obj2 ise 1

Şeklinde bir kural uygulanır. 

**boolean obj1.equals(obj2)**

"obj1" ve "obj2" nesnelerini eşit olup olmadığını kontrol eder. Eşit "true", değilse "false" döner. 

Bir önceki başlıkta "Comparable" interface’den bahsetmiştik. "Comparable" interface içindeki "compareTo" metodu bir veri kümesi üzerindeki doğal sıralamayı uygular.

Eğer veri kümesinde veri sıralaması yoksa ya da doğal sıralama dışında farklı tipte sıralamalar yapılması isteniyorsa bu durumda "Comparator" interface’i kullanılır. "Comparator" interface’den türemiş birden fazla alt sınıf oluşturup aynı veri kümesi üzerinde birbirinden farklı sıralama algoritmaları çalıştırabiliriz. 

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

 Yukarıda "BookPublisherComparator" isimli sıralama sınıfını oluşturduk. Bu sınıf "Comparator" interface’den kalıtım almaktadır. Böylece, "compare" isimli override ederek kendi ihtiyacımıza göre dolduruyoruz. Oluşturduğumuz bu sınıf yayınevi ismine göre sıralama yapmaktadır. 

Sıralamayı büyükten küçüğe veya küçükten büyüğe olmak üzere iki yönde yapabiliriz. Sıralamayı hangi yönde yapacağımızı "enum" tipinde bir veri tipiyle tutuyoruz. "BookOrderType" isimli enum’da "ASC" ve "DESC" isimli sabit değerler bulunmaktadır. "ASC" küçükten büyüğe doğru sıralamayı ifade eder. "DESC" ise büyükten küçüğe doğru sıralamayı ifade eder. 

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

Collections isimli sınıfın, "sort" isminde statik tanımlı bir fonksiyonu aracılığıyla veri kümesini sıralayabiliyoruz. "sort" fonksiyonuna eğer ki herhangi bir "Comparator" tipte bir nesne vermezseniz, varsayılan olarak veri kümesindeki nesnelerin "compareTo" metodunu kullanarak sıralama yapacaktır. Bu örnekte "BookPublisher" sınıfı kitap sınıfındaki yayınevi verisine göre, yani "publisher" isimli değişkenin değerine göre sıralama yapmaktadır. 

 
Comparable ve Comparator interface'lerindeki kullanım farkı şöyledir: Eğer bir nesneyi kıyaslayacaksak  Comparable interface kullanırız ; eğer iki nesneyi kıyaslayacaksak Comparator interface kullanırız.
 
##### Peki anlattıklarımıza göre aşağıdaki sorulara bi bakalım :)

Aşağıda verdiğimiz cümlelerin hangileri doğrudur?

- Nesnelerin sıralanmasının doğal sıraya dayalı olması gerekiyorsa, Comparable'ı kullanırız
- İki nesneyi kıyaslarken  Eğer obj1 < obj2 ise 1 değeri döner.

##### Cevaplar:

- Evet, Nesnelerin sıralanmasının doğal sıraya dayalı olması gerekiyorsa, Comparable'ı kullanılır, ancak sıralamanın farklı nesnelerin niteliklerine göre yapılması gerekiyorsa, Java'da Comparator'ı kullanılır.

- Hayır, int compare(Object obj1, Object obj2)  “obj1” ve “obj2” nesnelerini birbiriyle kıyaslar. Bu kıyaslama aşağıdaki kural ile olur.

   Eğer obj1 < obj2 ise -1,

   Eğer obj1 == obj2 ise 0,

   Eğer obj1 > obj2 ise 1

## Kaynaklar:

- [Sorunun orjinali](https://java.meritcampus.com/core-java-questions/Comparable-and-Comparator)
- [medium yazısı](https://java.meritcampus.com/core-java-questions/Comparable-and-Comparator)
