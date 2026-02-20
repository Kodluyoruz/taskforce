# Yapılandırıcıları aşırı yüklemek

Yapılandırıcıların (constructors) özel bir tür metot olduğunu söylemiştik. Aynı şekilde, metotları aşırı yükleyebildiğimiz gibi yapılandırıcıları da aşırı yükleyebiliriz. **"new"** anahtar kelimesi ile yeni bir obje yaratmak istediğimizde girilen parametrelere göre doğru yapılandırıcı çağrılır. Peki neden buna ihtiyaç duyuyoruz? Öncelikle karakter dizileri ile işlem yapmamıza olanak sağlayan StringBuilder sınıfını düşünelim. Bu sınıftan yeni bir obje yaratmak istediğimizde ister parametre girmeden boş bir obje yaratabilir, ister parametre olarak CharSequence sınıfından bir obje gönderebilir, istersek de parametre olarak String objesi gönderip StringBuilder objemizi yaratabiliriz. Bu sayede mevcut duruma göre doğru yapılandırıcıyı kullanarak kolay bir şekilde istediğimiz objeyi yaratabilmiş oluyoruz.
Bir başka örnekle bunu görebilmek için Box sınıfımıza geri dönelim:


```java
class Box
{
	int width;
	int height;
	int depth;

    Box(int myWidth, int myHeight)
	{
		width = myWidth;
		height = myHeight;
		depth = 0;
	}

    Box(int myWidth, int myHeight, int myDepth)
	{
		width = myWidth;
		height = myHeight;
		depth = myDepth;
	}
}
```

Gördüğünüz gibi, Box sınıfının içine 2 farklı yapılandırıcı yazdık. Biri bütün alanlara değer verirken, diğeri yalnızca genişlik ve yüksekliği ayarlamak için kullanılıyor. Bu sayede derinlik değerine sahip olmasak bile Box objesini yaratabilme imkanına sahip oluruz.

```java
Box box1 = new Box(10, 15);
Box box2 = new Box(10, 15, 20);

System.out.println(“Birinci kutu:”);
System.out.println(box1.width);
System.out.println(box1.height);
System.out.println(box1.depth);

System.out.println(“İkinci kutu:”);
System.out.println(box2.width);
System.out.println(box2.height);
System.out.println(box2.depth);
```

Yukarıdaki kodu çalıştırdığımız zaman çıktısı şu şekilde olur:

```java
Birinci kutu:
10
15
0
İkinci kutu:
10
15
20
```
