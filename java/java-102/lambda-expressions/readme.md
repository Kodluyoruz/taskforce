

# Lambda Expressions

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

Şimdi, iki sayıyı toplayan bir **Operation sınıfı** yazalım:

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