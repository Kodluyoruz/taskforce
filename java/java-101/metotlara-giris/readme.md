# Metotlara Giriş

Yazdığımız kodları çalıştırmak için kullandığımız yapılara metot denir. Metotların genel yapısı aşağıdaki gibidir:

```java
[dönüş türü] [metodun ismi] ( [parametreler] )
{
	[metodun içeriği]
}
```

İlk olarak dönüş türünü inceleyelim. İki farklı tarzda metot vardır:

- **Değer döndüren metotlar:** Bu metotlar çalıştıktan sonra geriye bir değer döndürürler.
- **Değer döndürmeyen metotlar:** Bu metotlar yalnızca iş yapmak amacıyla kullanılırlar, çalıştıktan sonra geriye değer döndürmez.

Metodun döndüreceği verinin türünü _[dönüş türü]_ kısmında belirtiriz. Eğer değer döndürmeyen bir metot yazıyorsak, _[dönüş türü]_ kısmına **void** yazarız.

Daha sonra metodun ismini belirtiriz. Metot isimlendirme kuralları değişken isimlendirme kurallarıyla aynıdır.

Son olarak parantez içinde metodun aldığı parametreleri belirtiriz. Parametre, metoda verilecek değeri ifade eder. Bir metot bir veya daha fazla parametre alabileceği gibi, hiç parametre almayabilir. Parametresiz bir metot yazıyorsak parantez içini boş bırakırız.

Değer döndüren bir metot yazıyorsak, metodun çalışmasının sonlanacağı her durum için bir değer döndürmeliyiz. Değer döndürmeyi **return** deyimiyle yaparız.

Aşağıda örnek bir metot inceleyelim:

```java
int add(int number1, int number2)
{
	int result = number1 + number2;
	return result;
}
```

Bu örnekte toplama işlemi yapan bir metot yazdık. Bu metot parametre olarak 2 sayı alır, bunları toplar ve sonucu döndürür. Yazılan bir metodu aşağıdaki gibi çağırabiliriz:

```java
int result = add(5, 3); // result değişkeninin değeri 8 olur
```

Şimdi, yukarıda oluşturduğumuz _Box_ sınıfına bir metot ekleyelim. Bu metodu, kutunun hacmini hesaplamak için kullanacağız:

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

    void volume()
	{
		System.out.println(“Hacmim şudur: ”);
		System.out.println(width * height * depth);
	}
}
```

Şimdi, oluşturduğumuz bu metodu kullanarak kutunun hacmini konsola yazdıralım:

```java
Box box = new Box(150, 100, 200);
box.volume(); // Konsola 3000000 yazar
```

Bu metot bir değer döndürmediği için, sonucunu bir değişkene atamak istediğimizde hata alırız:

```java
Box box = new Box(150, 100, 200);
double volume = box.volume();
// Yukarıdaki satır hataya neden olur, çünkü volume() metodu değer döndürmüyor
```

Şimdi, hacim hesaplayan metodumuzu değer döndüren bir metot haline getirelim:

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

    double volume()
	{
		return width * height * depth;
	}
}
```

Artık metodun sonucunu bir değişkene atayabiliriz:

```java
Box box = new Box(150, 100, 200);
double volume = box.volume();
System.out.println(volume); // Konsola 3000000 yazar
```

Farklı nesnelerin alanlarının birbirinden bağımsız olması gibi, metotları da birbirinden bağımsız çalışır. Örneğin, aşağıdaki kodu inceleyelim:

```java
Box box1 = new Box(2, 3, 4);
Box box2 = new Box(5, 6, 7);
System.out.println(box1.volume()); // Konsola 24 yazar
System.out.println(box2.volume()); // Konsola 210 yazar
```

Gördüğünüz gibi, aynı metot farklı nesneler için birbirinden bağımsız çalışır.

## Değer döndürmeyen bir metodu sonlandırmak

Varsayılan olarak, bir metodun içeriğindeki bütün kodlar çalışır. Fakat bazı durumlarda metodun çalışmasını manuel olarak durdurmamız gerekebilir. Bu durumda **return** deyimi kullanılır. Aşağıdaki örneği inceleyelim:

```java
void multiply(int number1, int number2)
{
	if (number1 == 0 || number2 == 0)
	{
		System.out.println(0);
		return;
	}
	
    int result = number1 * number2;
	System.out.println(result);
}
```

Yukarıda, çarpma işlemi yapan bir metot yazdık. Bu metot 2 parametre alır ve bu değerleri birbiriyle çarpar. Daha sonra sonucu konsola yazdırır. Gördüğünüz gibi, eğer çarpanlardan biri sıfırsa, konsola sıfır yazıyor ve metodu sonlandırıyoruz. Çarpma işlemini sadece çarpanların ikisi de sıfırdan farklıysa yapıyoruz. Metodumuz değer döndürmediği için, return deyiminden sonra bir değer yazmıyoruz.

## Sınıf değişkeninin gizlenmesi (instance variable hiding)

Metot içinde tanımladığımız bir değişkenin veya metodun parametrelerinden birinin ismi, sınıfın içinde tanımlanmış değişkenlerden birinin ismiyle aynıysa sınıfın o alanına erişemez oluruz. Aşağıdaki örneği inceleyelim:

```java
class MyClass
{
	int year = 2019;
    
	void myMethod()
	{
		int year = 2020;
		System.out.println(year);
	}
}
```

```java
MyClass myObject = new MyClass();
myObject.myMethod();
```

Yukarıdaki kodu çalıştırdığımızda konsola 2020 yazar; çünkü hem metodun hem de sınıfın içinde _year_ isminde değişkenler vardır. Metodun içindeki _year_ değişkeni, sınıfın alanını gizlemektedir. Bu nedenle konsolda 2019 değil, 2020 yazar.

## this deyimi

Bazen bir sınıf için kod yazarken, kendi sınıfımıza referans vermemiz gerekir. Örneğin, bir önceki başlıkta incelediğimiz sınıf değişkeninin gizlenmesi durumunda sınıfın alanına erişmek isteyelim. Bu durumlarda this deyimini kullanırız:

```java
class MyClass
{
	int year = 2019;
	
    void myMethod()
	{
		int year = 2020;
		System.out.println(this.year);
	}
}
```

```java
MyClass myObject = new MyClass();
myObject.myMethod();
```

Yukarıdaki kodu çalıştırdığımızda konsola 2019 yazar; çünkü _year_ değişkeninden önce **this** deyimini yazdığımız için metodun içindeki _year_ değişkenine değil, sınıfın alanına erişmiş oluruz.

Yukarıda sınıfları ve metotları kısaca inceledik. Şimdi ileriki konularda biraz daha ayrıntıya girelim.