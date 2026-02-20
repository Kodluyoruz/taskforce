## Nesne Oluşturmak

Nesne oluşturmak için **new** deyimini kullanıyoruz. Şimdi bunu daha ayrıntılı inceleyelim. Nesne oluşturduğumuzda, sınıfın **yapılandırıcıları (constructor)** çalıştırılır. Yapılandırıcı, özel bir tür metottur. Aşağıda ayrıca konu olarak ele alınacaktır. Yapılandırıcılar, nesne oluşturulduğu zaman çalıştırılırlar ve nesneye ilk değerini vermek için kullanılırlar. Biz bir yapılandırıcı yazmazsak, Java derleyicisi derleme aşamasında sınıfa varsayılan yapılandırıcıyı _(default constructor)_ ekler.

![Nesne Oluşturmak](figures/object.jpg)

Yapılandırıcıların yapısı şu şekildedir:

```java
[sınıfın ismi] ( [parametreler] )
{
	[yapılandırıcının içeriği]
}
```

Yapılandırıcılar genellikle sınıf oluşturulduğunda ilk değerleri atamak için kullanılırlar. Örneğin aşağıdaki kodu inceleyelim:

```java
Box box = new Box();
box.width = 150;
box.height = 100;
box.depth = 200;
```

Burada Box türünde yeni bir nesne oluşturuluyor ve ilk değerleri veriliyor. Bunu aşağıdaki şekilde de yapabilirdik:

```java
class Box
{
	double width;
	double height;
	double depth;

    Box(double myWidth, double myHeight, double myDepth)
	{
		width = myWidth;
		height = myHeight;
		depth = myDepth;
	}
}
```

Yukarıdaki örnekte, Box sınıfı içinde bir yapılandırıcı tanımladık. Bu yapılandırıcı 3 parametre alıyor ve aldığı bu değerlere göre sınıfın alanlarının ilk değerlerini veriyor. Dolayısıyla şimdi, yukarıdaki kodu aşağıdaki gibi yeniden yazabiliriz:

```java
Box box = new Box(150, 100, 200);
```

Gördüğünüz gibi, sınıfı oluştururken genişlik, yükseklik ve derinlik değerlerini tek bir satırda verdik. Bunu yapılandırıcı sayesinde yapabildik.

Sınıflarımız birden fazla yapılandırıcıya sahip olabilir. Farklı sayıda parametre alan yapılandırıcılara bazen ihtiyaç duyulabilir. Bu durumları yönetmek ve kullanmak için çok farklı durum olabilir.

Şimdi örnek olarak düşünelim ki yeni bir _box_ üretmek istiyoruz fakat genişlik bilgimiz olmasın elimizde. Genişlik bilgisi sabit olarak tanımlansın. Bu durumda sınıfımızı şöyle tanımlardık:

```java
class Box
{
	double width;
	double height;
	double depth;

    Box(double myWidth, double myHeight, double myDepth)
	{
		width = myWidth;
		height = myHeight;
		depth = myDepth;
	}
	
	 Box(double double myHeight, double myDepth)
	{
		width = 50.0; // Genişkik bilgisi verilmeyen durumda 50 olarak kabul edilir.
		height = myHeight;
		depth = myDepth;
	}
}
```

Ve genişlik bilgisi vermeden nesne üretmek istediğimizde:

```java
Box box = new Box(100, 200);
```

Benzer şekilde yapılandırıcılar tasarlanarak nesne üretiminde esneklik sağlanabilir.

### Peki anlattıklarımıza göre aşağıda verdiğimiz cümlelerin hangileri doğrudur?

- Sınıfların yalnızce bir adet yapıcısı olabilir.
- Yapıcısı olmayan bir sınıf olması mümkündür.


### Cevaplar:

- Hayır, sınıfların farklı parametreler alan birden fazla yapıcısı olabilir.
- Evet, eğer bir yapıcı tanımlamazsak nesne üretmemiz yine mümkündür. Default yapıcının çalışacağını belirmiştik.

## Kaynaklar:
- [Oracle - Class](https://docs.oracle.com/javase/8/docs/api/java/lang/Class.html)
- [Oracle - Object](https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html)
- [Oracle - Creating Objects](https://docs.oracle.com/javase/tutorial/java/javaOO/objectcreation.html)
- [Oracle Objects and Classes](https://docs.oracle.com/javase/tutorial/java/javaOO/index.html)


