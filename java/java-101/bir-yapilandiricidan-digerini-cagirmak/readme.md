# Bir yapılandırıcıdan diğerini çağırmak

Birden fazla yapılandırıcısı olan sınıflarda bir yapılandırıcıda diğer yapılandırıcıyı çağırmak için, daha önce de gördüğümüz **this** deyimini kullanırız. Daha önce this deyimini nesne olarak kullanmıştık. Buradaki kullanımda ise this deyimi yapılandırıcı (metot) halindedir. Aşağıdaki örneği inceleyelim:

```java
class Box
{
	int width;
	int height;
	int depth;

    Box(int myWidth, int myHeight)
	{
		this(myWidth, myHeight, 0);
		System.out.println(“Diğer yapılandırıcı çağrılıyor...”);
	}

    Box(int myWidth, int myHeight, int myDepth)
	{
		width = myWidth;
		height = myHeight;
		depth = myDepth;
	}
}
```

Yukarıda, ilk yapılandırıcıyı çalıştırdığımız zaman diğer yapılandırıcıya gideriz. Bu tarz kullanımlarda dikkat etmemiz gereken önemli bir nokta vardır: this deyimi kullanarak başka bir yapılandırıcıyı çağırıyorsak, bunu ilk satırda yapmalıyız, yani metoda ilk olarak bu satırla başlamalıyız. Örneğin, aşağıdaki kod hataya sebep olur:

```java
class Box
{
	int width;
	int height;
	int depth;

    Box(int myWidth, int myHeight)
	{
		System.out.println(“Diğer yapılandırıcı çağrılıyor...”);
		this(myWidth, myHeight, 0);
		// Yukarıdaki kod hataya sebep olur; çünkü this çağrımından
		// önce başka bir kod yazılmış
	}

    Box(int myWidth, int myHeight, int myDepth)
	{
		width = myWidth;
		height = myHeight;
		depth = myDepth;
	}
}
```

