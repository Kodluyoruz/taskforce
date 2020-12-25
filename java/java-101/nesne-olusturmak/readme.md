## Nesne Oluşturmak

Nesne oluşturmak için **new** deyimini kullanıyoruz. Şimdi bunu daha ayrıntılı inceleyelim. Nesne oluşturduğumuzda, sınıfın **yapılandırıcıları (constructor)** çalıştırılır. Yapılandırıcı, özel bir tür metottur. Aşağıda ayrıca konu olarak ele alınacaktır. Yapılandırıcılar, nesne oluşturulduğu zaman çalıştırılırlar ve nesneye ilk değerini vermek için kullanılırlar. Biz bir yapılandırıcı yazmazsak, Java derleyicisi derleme aşamasında sınıfa varsayılan yapılandırıcıyı _(default constructor)_ ekler.

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