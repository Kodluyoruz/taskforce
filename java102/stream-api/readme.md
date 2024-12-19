# Stream API

JDK 8 ile lambda ifadelerinin Java’ya eklenmesi üzerine, yine bununla ilintili olarak Stream API yazılmıştır. Basitçe söylemek gerekirse, koleksiyonlar üzerinde lambda ifadeleri kullanarak işlem yapmamızı sağlayan metotlar eklemiştir.

Stream, akış demektir. Nesnelerin art arda gelmesiyle bir akış oluşur. Akış yaratarak, bir dizi veya koleksiyonun elemanları üzerinde işlemler yapabiliriz. Akışlar, verinin nasıl depolanacağıyla ilgilenmez, yalnızca veriyi bir yerden bir yere transfer eder. Bu transfer esnasında veri üzerinde bir veya birden fazla işlem yapılması muhtemeldir. Bu işlem verinin filtrelenmesi, sıralanması veya dönüştürülmesi gibi işlemler olabilir. Bu işlem, akışın kaynağını değiştirmez; fakat yeni bir akış oluşturur. Örneğin, bir akışın içindeki nesneleri sıralarsanız, kaynak değişmez; fakat sıralı nesnelerden oluşan yeni bir akış yaratılır.

JDK 8 ile akışları, Stream türünde bir nesne olarak ifade edebiliriz. Stream API çok kapsamlı bir konu olsa da biz yalnızca koleksiyonlar üzerinde yapılan işlemleri inceleyeceğiz.

Bir koleksiyonun akışını elde edebilmek için, JDK 8 ile _Collection_ arayüzüne _stream()_ adında yeni bir metot eklenmiştir. Bu metodun yapısı aşağıdaki gibidir:

```java
interface Collection<T>
{
	Stream<T> stream();
}
```

Bu metodu kullanarak bir koleksiyon için yeni bir akış oluşturabiliriz. Bu metot her çağrıldığında koleksiyon üzerinde yeni bir akış oluşturulur.

Şimdi _Stream_ arayüzünün en çok kullanılan metotlarını inceleyelim. Bu metotların hepsinde aynı listeyi kullanacağız. Önce bu listeyi oluşturalım:

```java
ArrayList<Integer> list = new ArrayList<>();
list.add(25);
list.add(12);
list.add(3);
list.add(89);
list.add(25);
list.add(44);
list.add(100);
list.add(7);
list.add(63);
```

### forEach()

Bu metodu kullanarak akışın bütün elemanları üzerinde bir işlem yapabilirsiniz. _Consumer<T>_ türünde bir parametre alır. Bu metot akışı sonlandıran bir metottur, yani bu metodu kullandıktan sonra akış üzerinde başka bir işlem yapamazsınız.

```java
list
.stream()
.forEach(number -> System.out.println(number));
```

Gördüğünüz gibi, forEach() metodunu kullanarak akışın bütün elemanlarını konsola yazdırıyoruz. Bu kodu çalıştırdığınız zaman çıktısı aşağıdaki gibi olur:

```java
25
12
3
89
25
44
100
7
63
```

### filter()

Bu metodu kullanarak akışın elemanlarını filtreleyebilirsiniz. Predicate<T> türünde bir parametre alır. Bu teste uymayan elemanları akışa almaz.

```java
list
.stream()
.filter(number -> number > 60)
.forEach(number -> System.out.println(number));
```

Burada, filter() metodunu kullanarak yalnızca 60’dan büyük sayıların konsola yazdırılmasını istiyoruz. Bu kodu çalıştırdığınız zaman çıktısı aşağıdaki gibi olur:

```java
89
100
63
```

### distinct()

Bu metodu kullanarak akışın içinde her elemanın en fazla 1 kez yer almasını sağlayabilirsiniz. Eğer akışın içinde bir eleman daha önce tanımlanmışsa, ikinci kez yer almaz. Parametre almaz.

```java
list
.stream()
.distinct()
.forEach(number -> System.out.println(number));
```

Bu kodu çalıştırırsanız, listeye iki kez eklenen 25 sayısının yalnızca bir kez konsola yazdırıldığını görürsünüz:

```java
25
12
3
89
44
100
7
63
```

### sorted()

Bu metodu kullanarak akışın elemanlarını sıralayabilirsiniz.

```java
list
.stream()
.sorted()
.forEach(number -> System.out.println(number));
```

Bu kodu çalıştırdığınız zaman çıktısı aşağıdaki gibi olur:

```java
3
7
12
25
25
44
63
89
100
```

Bu metodun _Comparator<T>_ türünde bir parametre alan başka bir versiyonu daha vardır. Bu versiyonu kullanarak akışın sıralama algoritmasını değiştirebilirsiniz.

```java
list
.stream()
.sorted(Comparator.reverseOrder())
.forEach(number -> System.out.println(number));
```

Örneğin, bu kodu çalıştırırsanız, elemanların büyükten küçüğe doğru sıralanarak konsola yazdırıldığını görürsünüz:

```java
100
89
63
44
25
25
12
7
3
```

### limit()

Bu metodu kullanarak akış üzerinde gerçekleştireceğiniz işlemleri belli bir sayıyla sınırlandırabilirsiniz. **long** türünde bir sayıyı parametre olarak alır.

```java
list
.stream()
.limit(5L)
.forEach(number -> System.out.println(number));
```

Bu kodu çalıştırırsanız, yalnızca ilk 5 elemanın konsola yazdırıldığını görürsünüz:

```java
25
12
3
89
25
```

### skip()

Bu metodu kullanarak akışın belli sayıda elemanını atlayabilirsiniz. Bu elemanlar üzerinde işlem yapılmaz. long türünde bir sayıyı parametre olarak alır.

```java
list
.stream()
.skip(5L)
.limit(2L)
.forEach(number -> System.out.println(number));
```

Burada, akışın ilk 5 elemanını atlıyor ve sonraki 2 elemanı konsola yazdırıyoruz:

```java
44
100
```

### count()

Bu metodu kullanarak akıştaki eleman sayısını öğrenebilirsiniz. Bu metot akışı sonlandıran bir metottur, yani bu metodu kullandıktan sonra akış üzerinde başka bir işlem yapamazsınız.

```java
long count = list
.stream()
.filter(number -> number < 40)
.distinct()
.count();
System.out.println(count);
```

Burada, listenin içinde **40**’tan küçük kaç farklı sayı olduğunu konsola yazdırıyoruz. Bu kodu çalıştırırsanız konsola **4** yazar.

### anyMatch()

_Predicate<T>_ türünde bir parametre alır ve bu testi akışın bütün elemanları üzerinde uygular. Elemanlardan herhangi biri bu testten geçiyorsa **true**, aksi halde **false** döndürür. Bu metot akışı sonlandıran bir metottur, yani bu metodu kullandıktan sonra akış üzerinde başka bir işlem yapamazsınız.

```java
boolean match = list
.stream()
.anyMatch(number -> number < 5);
System.out.println(match);
```

Burada, listenin içinde 5’ten küçük sayı olup olmadığını test ediyoruz. Listede 5’ten küçük yalnızca 3 vardır; fakat bu bile metodun **true** döndürmesi için yeterlidir. Bu kodu çalıştırırsanız konsola **true** yazar.

### allMatch()

_Predicate<T>_ türünde bir parametre alır ve bu testi akışın bütün elemanları üzerinde uygular. Elemanların tamamı bu testten geçiyorsa **true**, aksi halde **false** döndürür. Bu metot akışı sonlandıran bir metottur, yani bu metodu kullandıktan sonra akış üzerinde başka bir işlem yapamazsınız.

```java
boolean match = list
.stream()
.allMatch(number -> number < 5);
System.out.println(match);
```

Bu kodu çalıştırırsanız konsola **false** yazar; çünkü listede 5’ten büyük elemanlar da vardır.

### noneMatch()

_Predicate<T>_ türünde bir parametre alır ve bu testi akışın bütün elemanları üzerinde uygular. Elemanların hiçbiri bu testten geçmiyorsa **true**, aksi halde **false** döndürür. Bu metot akışı sonlandıran bir metottur, yani bu metodu kullandıktan sonra akış üzerinde başka bir işlem yapamazsınız.

```java
boolean match = list
.stream()
.noneMatch(number -> number < 5);
System.out.println(match);
```

Bu kodu çalıştırırsanız konsola false yazar; çünkü listede 5’ten küçük elemanlar vardır.

### map()

Akışın elemanlarını değiştirmek için bu metodu kullanabilirsiniz. _Function<T,R>_ türünde bir parametre alır ve bu fonksiyonu akışın bütün elemanlarına uygular. Akışın yeni elemanları bu metottan dönen değerlerdir.

```java
list
.stream()
.map(number -> number * 2)
.forEach(number -> System.out.println(number));
```

Bu örnekte, akışın bütün elemanlarını 2 ile çarptık. Bu kodu çalıştırırsanız çıktısı aşağıdaki gibi olur:

```java
50
24
6
178
50
88
200
14
126
```

Bu metodu kullanarak akışın içindeki elemanların türünü değiştirmek de mümkündür:

```java
list
.stream()
.map(number -> Math.sqrt(number))
.forEach(number -> System.out.println(number));
```

Burada akışın türünü Integer’dan Double’a değiştiriyoruz. Bu kodu çalıştırırsanız çıktısı aşağıdaki gibi olur:

```java
5.0
3.4641016151377544
1.7320508075688772
9.433981132056603
5.0
6.6332495807108
10.0
2.6457513110645907
7.937253933193772
```

