## Sınıf Kavramının Temelleri

Şu ana kadar yaptığımız bütün örneklerde sınıfları gördük. Fakat o örneklerde sınıflar yalnızca main() metodunu kapsamak amacıyla kullanılmıştı. Öte yandan, sınıf kavramı bununla sınırlı değildir.

İlk olarak, her bir sınıfın yeni bir veri türü tanımladığını belirterek işe başlamalıyız. Bir kere tanımlandıktan sonra, bu türde yeni nesneler oluşturmak için sınıfları kullanabiliriz. Bu yüzden diyebiliriz ki, sınıflar nesneler için bir **şablon** niteliğindedir.

![Sınıf ve Nesne Benzetmesi](figures/class.jpg)

Bir sınıf oluşturduğumuz zaman aslında yeni bir veri türünü taslak olarak tanımlamış oluruz. Sınıfın içinde tanımladığımız değişkenlere o sınıfın alanları (fields) denir. Sınıflar ayrıca davranışlar tanımlayabilir. Bu davranışlara ise sınıfın metotları (metod) denir. Birlikte, metotlar ve alanlar bir sınıfın üyelerini (members) oluşturur.

Sınıfın örneği alınarak yeni bir nesne oluşturulduğunda, sınıfın sahip olduğu alanların bir kopyası nesnede tutulur. Türleri aynı olsa da her bir nesnenin alanları birbirinden bağımsızdır.

### Basit Bir Sınıf Örneği

Basit bir sınıf tanımlayarak işe başlayalım.

```java
class Cake
{
	double width;
	double height;
	double depth;
	double amountOfCreme;
	double retailPrice;
	
	boolean isFresh()
	{
		// returns state of the cake. If it is still fresh, retun true.
	};
}
```

Yukarıda, _Cake_ adında yeni bir sınıf tanımladık. Bu sınıfın 5 alanı vardır: genişlik, yükseklik, derinlik, krema miktarı ve satış fiyatı. Ayrıca her sınıfın ortak davranışlarını da tanımlayabiliriz. Örnekte her pasta için tazelik kontrolü yapılmasına yarayan; isFresh adlı bir fonksiyon da ekledik. Her yeni sınıfın yeni bir tür tanımladığını daha önce belirtmiştik. Fakat unutmayın, sınıf tanımlamak yeni bir nesne oluşturmaz, sadece nesne şablonu belirtmiş olur.

Sınıfın örneğini alarak yeni bir nesne oluşturmak için **new** deyimini kullanırız:

```java
Cake lemonCake = new Cake();
```

Burada _Cake_ türünde yeni bir nesne oluşturduk ve bu nesneyi yine _Cake_ türünde bir değişkene atadık. Bu kodu çalıştırdığımız zaman, _Cake_ şablonuna uygun olarak bir nesne oluşturulur ve hafızaya kaydedilir. Burada sınıf ile nesne kavramları arasındaki farkı iyi anlayalım: _Cake_ bir sınıf, _lemonCake_ ise bu sınıfa göre oluşturulmuş bir nesnedir.

Her nesnenin alanlarının birbirinden bağımsız olduğunu söylemiştik. Şimdi bunu inceleyelim:

```java
Cake strawberryCake = new Cake();
Cake bananaCake = new Cake();

strawberryCake.width = 100.0;
bananaCake.width = 150.0;

strawberryCake.retailPrice = 45.50;
bananaCake.retailPrice = 59.90;
```

Burada Cake türünde iki farklı nesne oluşturduk, fiyatlarına ve genişliklerine farklı değerler verdik. Buna göre _strawberryCake_ nesnesinin genişliği 100, fiyatı 45.50 iken; _bananaCake_ nesnesinin genişliği 150 ve fiyatı 59.90'dır. İki ayrı nesnenin alanları bağımsız olduğu için, birinin alanını değiştirdiğimizde diğeri bundan etkilenmez.

