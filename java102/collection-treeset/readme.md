# TreeSet Sınıfı

Veri kümesine konulan elemanların verdiğiniz kurala göre sıralanmasını sağlar. Bunun sağlanabilmesi için kullanacağınız sınıfın “sıralanabilir” olması
gerekmektedir. Bir sınıfın sıralanabilir olması için “Comparable” interface’den kalıtım alıp “compareTo” metodunu doldurması gerekmektedir. Nesne üzerindeki
“compareTo” fonksiyonu küçükten büyüğe doğal sıralama imkanı sağlar.

Eğer sıralanabilir bir nitelik yoksa veya doğal sıralama dışında değişik bir sıralama ile TreeSet’te elemanları saklamak istiyorsak, bu durumda “Comparator”
interface’den türemiş alt sınıflar oluşturmak gerekecektir. Comparator sınıfları sıralama yapabilmeyi sağlamaktadır. İçinde “compare” isimli bir fonksiyonu
bulunur.

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

İlk örnekte Long değerleri tutan bir TreeSet veri kümesi oluşturduk. Long sınıfındaki “compareTo” metodu doldurulduğu için küçük büyüğe doğal bir sıralama
yapıyor.

İkinci örnekte ise Book sınıfından oluşturulmuş nesneleri tutuyoruz. Book sınıfındaki compareTo metodu override edilmiş durumdadır. “compareTo” metodu kitapları
isimlerine göre küçükten büyüğe sıralayacak şekilde doldurulmuştur. TreeSet’in kurucu metoduna herhangi bir Comparator nesnesi göndermezsek, nesneler üzerindeki
doğal sıralama metodunu kullanır. Bu örnekte de kitap isimlerine göre bir sıralama yapacaktır.

Ardından aynı örnekte “BookComparatorByPublisher” isminde “Comparator” interface’den kalıtım alan bir sıralayıcı geliştirdik. Bu sıralayıcı kitap nesnelerini
yayınevi ismine göre küçükten büyüğe doğru sıralıyor.


