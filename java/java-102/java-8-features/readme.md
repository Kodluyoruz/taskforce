# Java 8 Features

## Lambda İfadeleri

JDK 8 ile dile eklenen lambda ifadeleri Java’yı temelden etkilemiştir. Bir lambda ifadesi, en basit tanımıyla, isimsiz (anonim) bir metottur. Fakat bu metotları tanımlayabilmek için **fonksiyonel arayüz** (functional interface) oluşturmak gerekir. Lambda ifadelerini daha iyi anlayabilmek için, fonksiyonel arayüzleri anlatmadan önce **anonim sınıflardan** (anonymous class) bahsedelim.

## Anonim Sınıflar

Bir arayüz veya soyut sınıf üzerinden tanımlanan ve ismi olmayan sınıflara anonim sınıf denir. Bu sınıflar oluşturuldukları anda kullanılırlar. Anonim sınıfların bir örneğini alamazsınız; çünkü isimleri yoktur.

Şimdi anonim sınıfları anlayabilmek için bir örnek yapalım. Öncelikle bir arayüz tanımlayalım:

```java
public interface Operation
{
    int operate(int x, int y);
}
```

**_Operation_** isminde bir arayüz tanımladık ve içine **operate()** adında bir metot yazdık. Bu metot int türünde iki sayıyı parametre olarak alır, bu sayılar üzerinde bir işlem yapar ve sonucu yine int türünde döndürür.

Şimdi bu arayüzü kullanan bir metot yazalım:

```java
public class Math
{
	public static int operateTwoNumbers(int x, int y, Operation operation)
	{
		return operation.operate(x, y);
	}
}
```

_Math_ adında bir sınıf tanımladık ve bu sınıf içinde statik **_operateTwoNumbers()_** metodunu yazdık. Bu metot int türünde iki sayıyı parametre alıyor ve bu sayılar üzerinde bir işlem yapıyor; fakat bu işlemin nasıl yapılacağını yine parametre olarak aldığımız **_Operation_** türündeki nesneden öğreniyoruz.

Şimdi, iki sayıyı toplayan bir Operation sınıfı yazalım:

```java
public class AdditionOperation implements Operation
{
	@Override
	public int operate(int x, int y)
	{
		return x + y;
	}
}
```

Şimdi aşağıdaki işlemi gerçekleştirebiliriz:

```java
int result = Math.operateTwoNumbers(5, 10, new AdditionOperation());
System.out.println(result);
```

Bu kodu çalıştırdığınızda konsola 15 yazar; çünkü **_AdditionOperation_** sınıfı toplama işlemi yapmaktadır. Fakat burada şunu düşünelim: diyelim ki, bu metodu sadece bir kez kullandık. Sadece bir kez kullandığımız bu metot için **_AdditionOperation_** adında bir sınıf yazmamıza gerek var mıdır?

Bunun yerine anonim sınıfları kullanabilirdik. Şimdi yukarıdaki kodu anonim sınıf kullanarak tekrar yazalım:

```java
int result = Math.operateTwoNumbers(5, 10, new Operation()
{
    @Override
    public int operate(int x, int y)
    {
    	return x + y;
    }
});
System.out.println(result);
```

Kalın olarak belirttiğimiz kod anonim sınıf kodudur. Gördüğünüz gibi, new deyimini kullanarak **_Operation_** türünde bir nesne oluşturduk; fakat bildiğiniz gibi, new deyimini arayüzler üzerinde kullanamayız, yalnızca sınıflar üzerinde kullanabiliriz. Burada da new deyimini kullanarak bir sınıf oluşturduk; fakat bu sınıfın bir ismi yoktur. Bu sınıfla ilgili bildiğimiz tek şey, **_Operation_** arayüzünü uyguladığıdır, dolayısıyla **_operate()_** metodunu yazmak zorundadır.

Anonim sınıflar, yukarıda da gördüğümüz gibi, bir arayüz veya soyut sınıf üzerinden oluşturulan isimsiz sınıflardır. Bu sayede, bir daha hiçbir zaman kullanmayacağımız **_AdditionOperation_** sınıfını yazmamıza gerek kalmaz.

Lambda ifadeleri, anonim sınıf kullanarak yazdığımız kodları daha kısa yazmamıza imkân tanır. Lambda ifadelerini kullanarak, yukarıda yazdığımız kodu aşağıdaki gibi tek satırda da yazabiliriz:

```java
int result = Math.operateTwoNumbers(5, 10, (x, y) -> x + y);
System.out.println(result);
```

Kalın olarak belirttiğimiz kod bir lambda ifadesidir. Gördüğünüz gibi, anonim sınıf yerine lambda ifadesi kullandığımız zaman kodu tek satıra indirgedik.

Şimdi, lambda ifadelerini daha ayrıntılı incelemeden önce, fonksiyonel arayüzlerden bahsedelim.

## Fonksiyonel Arayüzler (Functional Interfaces)

Anonim sınıfların isimsiz sınıflar olduğunu belirtmiştik. İsimsiz bile olsalar, sınıfın yapısını belirleyebilmek için bir arayüze ihtiyaç duyarız. Lambda ifadelerinin de isimsiz metotlar olduğunu söylemiştik; aynı şekilde, isimsiz olsa bile bir metodun yapısını belirlemek gerekir. Bunu fonksiyonel arayüzleri kullanarak yaparız.

İçinde en fazla 1 tane soyut metot bulunan arayüzlere fonksiyonel arayüz denir. Fonksiyonel arayüzleri lambda ifadelerini tanımlayabilmek için kullanırız. Eğer bir arayüzde birden fazla soyut metot varsa, bu arayüz ile lambda ifadesi tanımlayamayız; çünkü Java çalışma ortamı hangi metodu kullanarak lambda ifadesi yazdığımızı kestiremez.

Örneğin, aşağıdaki 3 arayüzü inceleyelim:

```java
interface MyInterface1
{
	void myMethod1();
}

interface MyInterface2
{
	void myMethod2();
	default Date now()
	{
		return new Date();
	}
}

interface MyInterface3
{
	int myMethod3();
	boolean myMethod4(double myParam1, int myParam2);
}
```

**_MyInterface1_** ve **_MyInterface2_** arayüzleri fonksiyonel arayüzdür; çünkü bir tane soyut metot tanımlamışlardır. **_MyInterface3_** ise fonksiyonel arayüz değildir; çünkü birden fazla soyut metot tanımlamıştır. Bunun anlamı şudur: **_MyInterface1_** ve **_MyInterface2_** arayüzlerini lambda ifadesi oluşturmak için kullanabiliriz.

