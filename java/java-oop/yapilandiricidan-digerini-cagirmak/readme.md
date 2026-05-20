# Bir yapılandırıcıdan diğerini çağırmak

Birden fazla yapılandırıcısı olan sınıflarda bir yapılandırıcıda diğer yapılandırıcıyı çağırmak için, daha önce de gördüğümüz **this** deyimini kullanırız. Daha önce this deyimini nesne olarak kullanmıştık. Buradaki kullanımda ise this deyimi yapılandırıcı (metot) halindedir. Bir başka deyişle bu sınıfın yapılandırıcısını çağır demektir. Ancak bu işlemi yapmadan önce doğru parametreleri kullandığımıza emin olmalıyız. Eğer ki kullandığımız parametleri içeren bir yapılandırıcı sınıfın içinde yok ise hata alırız. Aşağıdaki örneği inceleyelim:

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

Yukarıda, ilk yapılandırıcıyı çalıştırdığımız zaman mevcut parametreler ile diğer yapılandırıcıya gideriz ve burada değer atama işlemini yaparız. Tabiki bu işlemi yapmadan da değerleri teker teker yazarak atayabilirdik. Ancak bu kodumuzda gereksiz tekrara sebep olacaktı. Örnekte gösterildiği **this** anahtar kelimesini kullanarak diğer yapılandırıcıyı çağırıp daha kısa ve şık bir yolla değerlerimizi atamış olduk. 
Bu tarz kullanımlarda dikkat etmemiz gereken önemli bir nokta vardır: this deyimi kullanarak başka bir yapılandırıcıyı çağırıyorsak, bunu ilk satırda yapmalıyız, yani metoda ilk olarak bu satırla başlamalıyız. Örneğin, aşağıdaki kod hataya sebep olur:

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

Ayrıcada Java'da özyinelemeli yapılandırıcı çağrısının da(**this** ile mevcut yapılandırıcıyı çağırmak) geçerli olmadığını ve hataya sebep olacağını bilmemiz gerekir.
