# Metotları aşırı yüklemek (overloading methods)

Normal olarak, bir sınıf içinde aynı isme sahip birden fazla metot olamaz. Bu durumun bazı eksileri vardır. Örneğin, toplama işlemi yapan iki metot yazalım. Bu metotlardan birisi 2 parametre alırken diğeri 3 parametre alsın:

```java
class Math
{
	static int add2(int x, int y)
	{
		return x + y;
	}

        static int add3(int x, int y, int z)
	{
		return x + y + z;
	}
}
```

Burada _Math_ isminde bir sınıf oluşturduk ve bu sınıfın içine toplama işlemi yapan 2 metot yazdık. Bu metotlara, isimleri aynı olamayacağı için, _add2()_ ve _add3()_ şeklinde isim vermek zorunda kaldık. Bu yöntemin iyi olmadığını ve kodu karmaşıklaştırdığını söylememize gerek yoktur.

Java’da, bu gibi durumların önüne geçmek için metotları aşırı yükleyebilme özelliği vardır. Aynı işi yapan fakat parametreleri farklı olan metotlara aynı ismi verebiliriz. Bu duruma, **metodu aşırı yüklemek (method overloading)** denir. Yukarıdaki kodu aşağıdaki gibi yazabiliriz:

```java
class Math
{
	static int add(int x, int y)
	{
		return x + y;
	}

        static int add(int x, int y, int z)
	{
		return x + y + z;
	}
}
```

Gördüğünüz gibi, metodu aşırı yükleyebilmemiz sayesinde, aynı işi yapan fakat parametreleri farklı olan iki metoda farklı isimler vermek zorunda kalmadık. Aşırı yüklenmiş metotlar çağrılırken parametre sayısına bakılır ve uygun metot çalıştırılır:

```java
public static void main(String[] args){
    Math math = new Math();
    math.add(1, 2); // 2 parametre alan metot çalıştırılır
    math.add(1, 2, 3); // 3 parametre alan metot çalıştırılır
}
```

Metotları aşırı yükleyebilmek için mutlaka parametrelerinin farklı olması gerekir. **Parametreleri aynı olan birden fazla aşırı yüklenmiş metot olamaz.**

**Not:** Eğer Math class'ında add() metotlarımızı static olarak tanımlamasaydık compiler bize hata verecekti. Çünkü bu metotlarımızı main() metodunda çağırıyoruz ve bu metot static bir metottur ve static olmayan metotlar static bir metot tarafından çağırılamazlar.

Son olarak şunu belirtelim: aşırı yüklenmiş metotların dönüş türü birbirinden farklı olabilir. Fakat sadece dönüş türünü değiştirmek metodu aşırı yüklemek için yeterli değildir.
