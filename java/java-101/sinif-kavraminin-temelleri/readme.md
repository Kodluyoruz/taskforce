## Sınıf Kavramının Temelleri

Şu ana kadar yaptığımız bütün örneklerde sınıfları gördük. Fakat o örneklerde sınıflar yalnızca main() metodunu kapsamak amacıyla kullanılmıştı. Öte yandan, sınıf kavramı bununla sınırlı değildir.

İlk olarak, her bir sınıfın yeni bir veri türü tanımladığını belirterek işe başlamalıyız. Bir kere tanımlandıktan sonra, bu türde yeni nesneler oluşturmak için sınıfları kullanabiliriz. Bu yüzden diyebiliriz ki, sınıflar nesneler için bir **şablon** niteliğindedir.

![Sınıf ve Nesne Benzetmesi](figures/class.jpg)

Bir sınıf oluşturduğumuz zaman aslında yeni bir veri türünü taslak olarak tanımlamış oluruz. Sınıfın içinde tanımladığımız değişkenlere o sınıfın alanları (fields) denir. Sınıflar ayrıca davranışlar tanımlayabilir. Bu davranışlara ise sınıfın metotları (metod) denir. Birlikte, metotlar ve alanlar bir sınıfın üyelerini (members) oluşturur.

Sınıfın örneği alınarak yeni bir nesne oluşturulduğunda, sınıfın sahip olduğu alanların bir kopyası nesnede tutulur. Türleri aynı olsa da her bir nesnenin alanları birbirinden bağımsızdır.

### Basit Bir Sınıf Örneği

Basit bir sınıf tanımlayarak işe başlayalım.

```java
class Box
{
	double width;
	double height;
	double depth;
	
	boolean isCube()
	{
		// returns state of the box. If it is an box, returns true.
	};
}
```

Yukarıda, _Box_ adında yeni bir sınıf tanımladık. Bu sınıfın 5 alanı vardır: genişlik ve yükseklik. Ayrıca her sınıfın ortak davranışlarını da tanımlayabiliriz. Örnekte her box için küplük kontrolü yapılmasına yarayan; isCube adlı bir fonksiyon da ekledik. Her yeni sınıfın yeni bir tür tanımladığını daha önce belirtmiştik. Fakat unutmayın, sınıf tanımlamak yeni bir nesne oluşturmaz, sadece nesne şablonu belirtmiş olur.

Sınıfın örneğini alarak yeni bir nesne oluşturmak için **new** deyimini kullanırız:

```java
Box box1 = new Box();
```

Burada _Box_ türünde yeni bir nesne oluşturduk ve bu nesneyi yine _Box_ türünde bir değişkene atadık. Bu kodu çalıştırdığımız zaman, _Box_ şablonuna uygun olarak bir nesne oluşturulur ve hafızaya kaydedilir. Burada sınıf ile nesne kavramları arasındaki farkı iyi anlayalım: _Box_ bir sınıf, _box1_ ise bu sınıfa göre oluşturulmuş bir nesnedir.

Her nesnenin alanlarının birbirinden bağımsız olduğunu söylemiştik. Şimdi bunu inceleyelim:

```java
Box matchBox = new Box();
Box shoeBox = new Box();

matchBox.width = 100.0;
shoeBox.width = 150.0;

```

Burada Cake türünde iki farklı nesne oluşturduk, genişliklerine farklı değerler verdik. Buna göre _matchBox_ nesnesinin genişliği 100 iken; _shoeBox_ nesnesinin genişliği 150'dir. İki ayrı nesnenin alanları bağımsız olduğu için, birinin alanını değiştirdiğimizde diğeri bundan etkilenmez.





## Peki, eğer 2 parametreli yapıcıma genişlik ve derinliği gönderip, uzunluğu göndermezsem ne olur?

Tabi ki paramatere geçtiğimiz yapıcı bizim gönderdiğimiz değerleri sırası ile alıp aynı işlemi yapacak. Yani genişliği bu yapıcı fonksiyona göndermemiz mümkün değil. Daha ileride bu tarz bir tasarımı nasıl yapacağımızı detaylıca anlatacağız.
