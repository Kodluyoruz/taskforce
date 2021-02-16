# Implementing Classes

Java’da herşey sınıflar ve nesnelerden oluşur.
İlk olarak, her bir sınıfın yeni bir veri türü tanımladığını belirterek işe başlamalıyız. Bir kere tanımlandıktan sonra, bu türde yeni nesneler oluşturmak için sınıfları kullanabiliriz. Bu yüzden diyebiliriz ki, sınıflar nesneler için bir şablon niteliğindedir. Daha da kısa bir şekilde özetleyecek olursak bir class nesnelerin özelliklerini ve davranışlarını tanımlar. 

Bir sınıf oluşturduğumuz zaman aslında yeni bir veri türünü taslak olarak tanımlamış oluruz. Sınıfın içinde tanımladığımız değişkenlere o sınıfın alanları (fields) denir. Kodlarımızı ise metotların içine yazarız. Birlikte, metotlar ve alanlar bir sınıfın üyelerini (members) oluşturur.

Sınıfın örneği alınarak yeni bir nesne oluşturulduğunda, sınıfın sahip olduğu alanların bir kopyası nesnede tutulur. Türleri aynı olsa da her bir nesnenin alanları birbirinden bağımsızdır.

Nesneler sınıfların birer örneğidir. Birden fazla örnek oluşturabiliriz. Nesneler gerçek dünyada bir varlığı temsil eder. Bir öğrenci, masa, araba yada bir pantolon bile olabilir. Nesnelerin  kendine ait bir kimliği vardır. Nesnelerin eylemleri metodlar tarafından tanımlanır.

Bu bilgileri somutlaştıracak olursak şekil adında bir class'a sahip olalım ve bundan dikdörtgen adında bir nesne oluşturalım. Classımız en, boy özelliklerine sahip olmalıdır ve şekil için gerekli alan ve çevre hesaplama metodlarına sahip olsun. Bu durumda classımızdan bir diktörtgen oluşturmak istersek sınıfın özelliklerine ve metodlarına sahip olacaktır.

## Basit Bir Sınıf Örneği

Basit bir sınıf tanımlayarak işe başlayalım.

```java
class Box
{
    double width;
    double height;
    double depth;
}
```

Yukarıda, _Box_ adında yeni bir sınıf tanımladık. Bu sınıfın 3 alanı vardır: genişlik, yükseklik ve derinlik. Her yeni sınıfın yeni bir tür tanımladığını daha önce belirtmiştik. Fakat unutmayın, sınıf tanımlamak yeni bir nesne oluşturmaz, sadece nesne şablonu belirtmiş olur.

Sınıfın örneğini alarak yeni bir nesne oluşturmak için **new** deyimini kullanırız:

```java
Box myNewBox = new Box();
```

Burada Box türünde yeni bir nesne oluşturduk ve bu nesneyi yine Box türünde bir değişkene atadık. Bu kodu çalıştırdığımız zaman, Box şablonuna uygun olarak bir nesne oluşturulur ve hafızaya kaydedilir. Burada sınıf ile nesne kavramları arasındaki farkı iyi anlayalım: **_Box_** bir sınıf, **_myNewBox_** ise bu sınıfa göre oluşturulmuş bir nesnedir.

Her nesnenin alanlarının birbirinden bağımsız olduğunu söylemiştik. Şimdi bunu inceleyelim:

```java
Box box1 = new Box();
Box box2 = new Box();
box1.width = 100.0;
box2.width = 150.0;
```

Burada Box türünde iki farklı nesne oluşturduk ve genişliklerine farklı değerler verdik. Buna göre _box1_ nesnesinin genişliği 100 iken, _box2_ nesnesininki 150’dir. İki ayrı nesnenin alanları bağımsız olduğu için, birinin alanını değiştirdiğimizde diğeri bundan etkilenmez.

Biraz daha karmaşık bir örnekle devam edelim. Bu örnekte, daire classımızdan farklı yarıçaplarda daire nesneleri oluşturup bunların metodlarını çağıralım.

```java
 1 public class TestSimpleCircle {
 2 /** Main method */
 3 public static void main(String[] args) {
 4 // Yarıçap değeri 1 olan circle1 dairesi oluşturuldu.
 5 SimpleCircle circle1 = new SimpleCircle();
 6 System.out.println("The area of the circle of radius "
 7 + circle1.radius + " is " + circle1.getArea());
 8
 9 // Yarıçap değeri 25 olan circle2 dairesi oluşturuldu.
10 SimpleCircle circle2 = new SimpleCircle(25);
11 System.out.println("The area of the circle of radius "
12 + circle2.radius + " is " + circle2.getArea());
13
14 // Yarıçap değeri 125 olan circle3 dairesi oluşturuldu.
15 SimpleCircle circle3 = new SimpleCircle(125);
16 System.out.println("The area of the circle of radius "
17 + circle3.radius + " is " + circle3.getArea());
18
19 // Daire yarıçapnı düzenleme
20 circle2.radius = 100; // yada circle2.setRadius(100)
21 System.out.println("The area of the circle of radius "
22 + circle2.radius + " is " + circle2.getArea());
23 }
24 }
25
26 // İki construct ile SimpleCircle tanımlandı.
27 class SimpleCircle {
28 double radius;
29
30 /** Radius değerini default olarak 2 veren Construct */
31 SimpleCircle() {
32 radius = 1;
33 }
34
35 /** Belirli bir yarıçapa sahip daire için constructor */
36 SimpleCircle(double newRadius) {
37 radius = newRadius;
38 }
39
40 /** Daire alanını döndüren metot */
41 double getArea() {
42 return radius * radius * Math.PI;
43 }
44
45 /** Dairenin çevresini döndüren metot */
46 double getPerimeter() {
47 return 2 * radius * Math.PI;
48 }
49
50 /** Daire yarıçapını güncellememizi sağlayan metod */
51 void setRadius(double newRadius) {
52 radius = newRadius;
53 }
54 }
    
```



Circle1'de radius değerine herhangi bir sayı girmediğimiz için default değer olan 1'i aldı.

Console çıktımız ise aşağıdaki gibi olacaktır.



```console
The area of the circle of radius 1.0 is 3.141592653589793
The area of the circle of radius 25.0 is 1963.4954084936207
The area of the circle of radius 125.0 is 49087.385212340516
The area of the circle of radius 100.0 is 31415.926535897932
```



Bir nesne **new** operatörü ile çağırıldığında ilk olarak sınıfa ait constructor çağırılır. Peki bu constructor'ın kuralları nelerdir?

- Kurucu sınıfın kendisi ile aynı ada sahip olmalıdır.
- Dönüş tipi yoktur.
- New oparatörü ile çağrılırlar.
- Constructorlar nesneleri başlatma rolünü oynarlar.


###### Oluşturduğumuz referans tipi ile primitive tipleri arasındaki fark nedir?

Her değişken bellekte bir alan kaplar. Referans tipteki bir değişkenin değeri nesnenin bulunduğu yere referanstır.

Bir değişkeni başka bir değişken değerine atadığımızda aynı değeri alır. Örneklendirecek olursak

```java
int i = 1;
int j = 2;
i = j;
```

   ilk değer ------- sonra

i    1                 2

j    2                 2

 Gördüğümüz gibi sadece i değişken değerine atama yaptık ve bundan j değişkenimiz etklenmedi.



Referans tipte bir değişkenimizin değerine atama yaparsak nesnenin bellekte bulunduğu yeri referans olarak gösterir. Yani referans tipindeki bir değişken için atanan değişkenin referansı değişkene atanmış olur. Daha iyi anlamak için örnekle devam edelim. 

```java
Circle c1 = 5;
Circle c2 = 9;
c1=c2;
```

 Referans gösterimi **ÖNCE**:

```
c1:Circle --------               c2:Circle --------
                  |                                |
             ------------                   ------------
            | radius = 5 |                 | radius = 5 |
             ------------                   ------------
 
```

**SONRA:**

```
c1:Circle -----------------------     c2:Circle -----
                                 |                  |
             ------------        |          ------------
            | radius = 5 |       |-------- | radius = 5 |
             ------------                   ------------
```

Artık c1 değişkenide c2'nin referansını göstermektedir. c2 değişken değeri güncellendiğinde c1 değeride değişecektir. Referans tip ve primitive tiplerdeki hafıza mantığını anlamak çok önemlidir.

*Artık c1'in referans değeri kullanılmamaktadır. Bu alan hafızada yer kaplamaması için **Garbage Collection** tarafından temizlenir.* 

##### Kaynaklar:

- INTRODUCTION TO JAVA PROGRAMMING COMPREHENSIVE VERSION Tenth Edition Y. Daniel Liang Armstrong Atlantic State University
- [yazilimbilisim.net](https://www.yazilimbilisim.net/java/java-sinif-ve-nesne-olusturma/)

