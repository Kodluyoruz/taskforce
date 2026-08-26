# İç İçe Sınıflar (Nested Classes)

Şu ana kadar sınıfların içinde değişkenlerin ve metotların bulunabileceğini biliyorduk. Fakat sınıfların gücü bununla sınırlı değildir. Sınıfların içinde başka sınıflar da tanımlayabiliriz. Bu şekilde **iç içe sınıflar (nested classes)** oluşturabiliriz.

İç içe tanımlanan sınıfları tabir ederken, diğerini kapsayan sınıfa **dıştaki sınıf** (outer class), içeride bulunan sınıfa ise **içteki sınıf** (inner class) deriz. Bir sınıf oluşturulduğunda bütün alanlarının ve metotlarının hafızaya yüklendiğini söylemiştik. Bu durum içteki sınıflar için de geçerlidir. İç içe sınıflarda, içteki sınıfı kullanabilmemiz için dıştaki sınıfın bir örneğinin alınması gerekir.

İçteki sınıf, dıştaki sınıfın bütün alanlarına ve metotlarına erişebilir. Dıştaki sınıf tek olmasına rağmen, içteki sınıfın birden fazla örneği alınabilir; bu gibi durumlarda içteki sınıftan oluşturulan nesnelerin hepsi aynı dıştaki sınıfa erişir.

Peki iç içe sınıfları ne zaman kullanmalıyız ? Bir sınıfın varlığı başka bir sınıfa bağlı ise, tek başına var olması mümkün değilse iç içe sınıfları kullanabiliriz. Örneğin bir üniversiteyi düşünecek olursak, her bölüm varlık için bir fakülteye ihtiyaç duyuyorsa, bu bölümün fakülte olmadan varlığının bir anlamı yoksa iç içe sınıflar kullanılabilir. Fakat fakülteden bağımsız bölümler veya birden fazla fakülteye bağlı olan bölümler için iç içe sınıflar kullanmak hatalı bir yaklaşım olacaktır.

```java
class Outer
{
	public void run()
	{
		System.out.println("Dıştaki sınıfın metodu çalıştı.");
		Inner inner = new Inner();
		inner.run();
	}

    class Inner
	{
		public void run()
		{
			System.out.println("İçteki sınıfın metodu çalıştı.");
		}
	}
}
```

Yukarıdaki örnekte iç içe 2 sınıf oluşturduk. Her ikisine de `run()` adında metotlar yazdık.

```java
Outer outer = new Outer();
outer.run();
```

Yukarıdaki kodu çalıştırdığımızda çıktısı aşağıdaki gibi olur:

```java
Dıştaki sınıfın metodu çalıştı.
İçteki sınıfın metodu çalıştı.
```



Şimdi de aşağıdaki örneği inceleyelim:

```java
class Outer
{
	private int number = 10;
	
    public void run()
    {
		System.out.println(number);
        
		Inner inner = new Inner();
		inner.run();
		
        System.out.println(number);
	}

    class Inner
	{
		public void run()
		{
			number++;
		}
	}
}
```

Yukarıdaki örnekte dıştaki sınıfın içinde _number_ isminde bir değişken oluşturduk. İçteki sınıfta ise bu değişkene erişip değerini 1 artırdık. Dıştaki sınıfın `run()` metodunu çalıştırdığınızda çıktısı aşağıdaki gibi olur:

```java
10
11
```

Buradan da görebileceğiniz gibi, içteki sınıflar dıştaki sınıfların elemanlarına erişebilir.

İç içe sınıflarla ilgili dikkat etmemiz gereken bazı noktalar vardır. İlk olarak, dıştaki sınıf olmadan içteki sınıfın bir örneğini alamayız. Ayrıca, içteki sınıfın içine statik bir değişken veya metot yazamayız. Bu kısıtlamaların önüne geçmek için içteki sınıfı statik olarak tanımlamalıyız.

## İçteki sınıfı statik yapmak

Hatırlarsınız: bir metodu kullanabilmek için tanımlandığı sınıfın bir örneğini almamız gerekiyordu. Bunun önüne geçmek için metodu statik olarak belirtiyorduk. Aynı durum içteki sınıflar için de geçerlidir: bu sınıfları kullanabilmek için dıştaki sınıfın örneğini almamız gerekir. Bunun önüne geçmek için içteki sınıfı statik olarak tanımlamalıyız:

```java
class Outer
{
	static class Inner
	{
		public void run()
		{
			System.out.println("İçteki sınıfın metodu çalıştı");
		}
	}
}
```

Şimdi aşağıdaki kodu çalıştırabiliriz:

```java
Outer.Inner inner = new Outer.Inner();
inner.run();
```

Gördüğünüz gibi, artık içteki sınıfın bir örneğini alabilmek için dıştaki sınıfa ihtiyacımız yoktur. Fakat, statik metotların sınıfın statik olmayan alanlarına erişemeyeceğini hatırlayın. Aynı durum burada da geçerlidir: içteki statik sınıflar dıştaki sınıfın statik olmayan alanlarına erişemez:

```java
class Outer
{
	private int number = 10;
	
    public void run()
	{
		System.out.println(number);
        
		Inner inner = new Inner();
		inner.run();
        
		System.out.println(number);
	}

    static class Inner
	{
		public void run()
		{
			number++; // Bu satır hataya neden olur
		}
	}
}
```

Yukarıdaki kod hataya neden olur; çünkü statik olarak belirlenmiş içteki Inner sınıfı dıştaki sınıfın statik olmayan number değişkenine erişmeye çalışıyor.



## İçteki sınıfı private yapmak

İçteki sınıflar static yapılabildiği gibi, içteki sınıfa dışarıdan bir erişim sağlanmasının önüne geçmek için private ve protected erişim belirleyicileri de kullanılabilir.

```java
class Outer {
  int x = 10;

  private class Inner {
    int y = 5;
  }
}

public class Main {
  public static void main(String[] args) {
    Outer outer = new Outer();
    Outer.Inner inner = outer.new Inner();
    System.out.println(inner.y + outer.x);
  }
}
```

Yukarıdaki kod dışarıdan, private bir sınıfa erişmek istediği için hataya neden olur.



## Değişken sayıdaki metot argümanları (Varargs: variable-length arguments)

Metotların nasıl parametre aldığını daha önce görmüştük. Örneğin aşağıda tanımladığımız toplama metodu 2 parametre almaktadır:

```java
public int add(int x, int y)
{
	return x + y;
}
```

Bu metot 2 sayıyı toplar ve sonucunu döndürür. Peki, ya 3 sayıyı toplamak istersek? Java’da metotları aşırı yükleyebildiğimizi görmüştük. Şimdi bu metodu aşağıdaki gibi aşırı yükleyelim:

```java
public int add(int x, int y)
{
	return x + y;
}

public int add(int x, int y, int z)
{
	return x + y + z;
}
```

Artık aynı metodun 2 ve 3 parametre alan farklı varyasyonları var. Peki, ya 4 sayıyı toplamak istiyorsak? Aynı şekilde metodu aşırı yüklemeye devam edebiliriz:

```java
public int add(int x, int y)
{
	return x + y;
}

public int add(int x, int y, int z)
{
	return x + y + z;
}

public int add(int x, int y, int z, int t)
{
	return x + y + z + t;
}
```

Fakat bu yöntemin pek hoş olmadığı gözünüzden kaçmamıştır. 5 veya 6 sayıyı toplamak istediğimizde metodu tekrar aşırı yüklememiz gerekir. Bu durum kod fazlalığına neden olur. Buradaki sorun, metodun alacağı parametre sayısının belirsiz (değişken) olmasıdır. Toplama işleminde birden fazla toplanan vardır: fakat sayısı değişken olabilir. Java, parametre sayısını önceden bilemeyeceğimiz bu gibi durumlar için metodun **değişken sayıda argüman (varargs)** almasına izin verir.

Değişken sayıda parametre tanımlamak için değişken türünden sonra 3 nokta koyarız. Artık, metodu çağırırken istediğimiz sayıda parametre verebiliriz: bunların her biri için metodu aşırı yüklememiz gerekmez. Java bu parametreleri bize bir dizi (array) halinde sunar.

```java
public int add(int... numbers)
{
	int sum = 0;
	for (int number : numbers)
	{
		sum += number;
	}
	return sum;
}
```

Yukarıda add() metodumuzu yeniden düzenledik ve toplama işlemine giren eleman sayısının değişken olmasını sağladık. Artık metoda parametre olarak farklı sayıda toplanan verebiliriz:

```java
System.out.println(add(2, 3)); // Konsola 5 yazar
System.out.println(add(1, 5, 7)); // Konsola 13 yazar
System.out.println(add(9)); // Konsola 9 yazar
System.out.println(add(10, 15, 20, 25)); // Konsola 70 yazar
```

Değişken sayıdaki argümanlar bir dizi halinde sunulur. Dizinin elemanı olmayabilir. Yani, hiç argüman vermesek de değişken sayıda argüman alan metot yine çalışır.

```java
System.out.println(add()); // Konsola 0 yazar
```

Yukarıda hiç argüman vermememize rağmen metodun yine çalıştığını görürüz. Değişken sayıda argüman alan metot yazarken bunu göz önünde bulundurmak gerekir.

Değişken sayıda parametre alan metotları aşırı yükleyebilirsiniz. Aşağıdaki örneği inceleyelim:

```java
public int add(int... numbers)
{
	int sum = 0;
	for (int number : numbers)
	{
		sum += number;
	}
	return sum;
}

public double add(double... numbers)
{
	double sum = 0.0;
	for (double number : numbers)
	{	
		sum += number;
	}
	return sum;
}
```

```java
System.out.println(add(5, 4, 3)); // Konsola 12 yazar
System.out.println(add(9.0, 8.5, 8.0)); // Konsola 25.5 yazar
```

## Varargs ve belirsizlik (Ambiguity)

Değişken sayıda parametre (varargs) alan metotları aşırı yüklediğinizde ortaya belirsizlik çıkabilir. Yukarıdaki örnekte 2 farklı `add()` metodu oluşturmuştuk. Bu durumda aşağıdaki kodu çalıştırdığımızı düşünelim:

```java
add();
```

Bu satır belirsizliğe neden olur; çünkü metoda parametre vermedik. Bu durumda Java ortamı aşırı yüklenmiş 2 metottan hangisini çalıştıracağına karar veremez; çünkü bu kullanım her ikisine de uygundur.

Başka bir belirsizlik örneği inceleyelim:

```java
public int add(int... numbers)
{
	// metodun içeriği
}

public int add(int number, int... numbers)
{
	// metodun içeriği
}
```

İki farklı `add()` metodu tanımladık. Şimdi aşağıdaki kodu çalıştıralım:

```java
add(1);
```

Bu kod belirsizliğe sebep olur; çünkü metodun her 2 tanımına da uygundur. Dolayısıyla Java ortamı hangisini çalıştıracağına karar veremez.





### Kaynaklar:

- [w3schools.com](https://www.w3schools.com)

- [bilgisayarkavramlari.com](http://bilgisayarkavramlari.com)

