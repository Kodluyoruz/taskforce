# Yapılandırıcıları aşırı yüklemek

Yapılandırıcıların (constructors) özel bir tür metot olduğunu söylemiştik. Aynı şekilde, metotları aşırı yükleyebildiğimiz gibi yapılandırıcıları da aşırı yükleyebiliriz. Bunu görebilmek için Box sınıfımıza geri dönelim:

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

Gördüğünüz gibi, Box sınıfının içine 2 farklı yapılandırıcı yazdık. Biri bütün alanlara değer verirken, diğeri yalnızca genişlik ve yüksekliği ayarlamak için kullanılıyor.

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
