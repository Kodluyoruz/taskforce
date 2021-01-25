# Implementing Classes

İlk olarak, her bir sınıfın yeni bir veri türü tanımladığını belirterek işe başlamalıyız. Bir kere tanımlandıktan sonra, bu türde yeni nesneler oluşturmak için sınıfları kullanabiliriz. Bu yüzden diyebiliriz ki, sınıflar nesneler için bir şablon niteliğindedir.

Bir sınıf oluşturduğumuz zaman aslında yeni bir veri türünü taslak olarak tanımlamış oluruz. Sınıfın içinde tanımladığımız değişkenlere o sınıfın alanları (fields) denir. Kodlarımızı ise metotların içine yazarız. Birlikte, metotlar ve alanlar bir sınıfın üyelerini (members) oluşturur.

Sınıfın örneği alınarak yeni bir nesne oluşturulduğunda, sınıfın sahip olduğu alanların bir kopyası nesnede tutulur. Türleri aynı olsa da her bir nesnenin alanları birbirinden bağımsızdır.

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