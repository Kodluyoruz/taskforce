# Java&#39;da "switch-case" Yapıları

Programlama yaparken birden fazla koşula sahip durumlarla karşılaşabiliriz. Örneğin: eğer 1&#39;e basarsanız "vize işlemleri", eğer 2&#39;ye basarsanız "kredi kartı işlemleri", eğer 3&#39;e basarsanız "ev kredisi işlemleri", eğer 4&#39;e basarsanız "müşteri temsilcisine bağlanmak", sıfıra basarsanız "diğer işlemler menüsüne gitmek" gibi çoklu koşullara göre programlama yapmak gerekebilir. Bunu çözmek için "if-else if" yapılarını ya da "switch-case" yapısını kullanırız.

Not: "switch-case" yapısında eğer her case&#39;in sonuna "break" ifadesi koymazsak ise aradığı koşulu bulana kadar tüm case&#39;lere girip o kod bloklarını çalıştıracaktır.

````java
Scanner scanner = new Scanner(System.in);
int operationChoice = scanner.nextInt();

System.out.println("0-Diğer işlemler");
System.out.println("1-Vize işlemler");
System.out.println("2-Kredi kartı işlemler");
System.out.println("3-Ev kredisi işlemler");
System.out.println("4-Müşteri temsilcisi işlemler");
System.out.println("Your choice is : " + operationChoice);

switch (operationChoice) {
	case 0:
		System.out.println("Diğer işlemler menüsü");
		break;
	case 1:
		System.out.println("Vize işlemleri");
		break;
	case 2:
		System.out.println("Kredi kartı işlemleri");
		break;
	case 3:
		System.out.println("Ev kredisi işlemleri");
		break;
	case 4:
		System.out.println("Müşteri temsilcisi işlemleri");
		break;
	default:
		System.out.println("Lütfen geçerli bir işlem tipi seçiniz");
}

````

karar mekanizmalarıyla ilgili birkaç örneğe daha bakalım.

```java
import java.util.Random;

class FirstJavaApp
{
	public static void main(String[] args)
	{
		Random random = new Random();
		int number = random.nextInt(11);
		
        System.out.println("Rastgele bir sayı tuttum: " + number);

        if (number < 5)
		{
			System.out.println("Sayı 5'ten küçük.");
		}
	}
}
```

Burada kısaca anlatmak gerekirse, bilgisayardan 0 ile 10 arasında rastgele bir sayı seçmesini istiyoruz, daha sonra bu sayıyı konsola yazdırıyoruz. Buna ek olarak, eğer sayı 5’ten küçükse konsolda bunu belirtiyoruz. Programı arka arkaya birkaç kez çalıştırırsanız şuna benzer sonuçlar alırsınız:

```java
Rastgele bir sayı tuttum: 6
```

```java
Rastgele bir sayı tuttum: 3
Sayı 5'ten küçük.
```

Görüldüğü gibi ilk çalıştırmamızda çıkan sonuçla ikincisindeki farklıdır. Buna **if bloğu** sebep olmaktadır. Java’da belli bir koşula bağlı olarak bir şey yapmak istediğimizde if bloğunu kullanırız. Yukarıdaki örnekte, "Sayı **5**' ten küçük." yazısını yalnızca sayı gerçekten 5’ten küçükse yazdırıyoruz. Eğer sayı **5** veya **5**’ten büyükse kodumuz if bloğuna girmez.

Belli bir koşula bağlı olarak iş yapmamızı sağlayan bu tarz ifadelere, **seçim ifadeleri** (**selection statements**) denir. Seçim ifadelerini daha sonra ayrıntılı olarak inceleyeceğiz.

Şimdi başka bir karar mekanizmasına göz atalım. Kodumuzu aşağıdaki gibi değiştirelim:

```java
class FirstJavaApp
{
	public static void main(String[] args)
	{

        System.out.println("1'den 10'a kadar sayıyorum...");

        for (int i = 1; i <= 10; i++)
		{
			System.out.println(i);
		}

        System.out.println("Saydım.");
	}
}
```

Bu programı çalıştırdığınızda aşağıdaki çıktıyı alırsınız:

```java
1'den 10'a kadar sayıyorum...
1
2
3
4
5
6
7
8
9
10
Saydım.
```

Bu örneğimizde bilgisayardan bir işlemi defalarca yapmasını istedik. 1’den 10’a kadar olan sayıları konsola yazdırdık. Bu şekilde, belli bir kod bloğunu birden fazla kez çalıştırmamızı sağlayan ifadelere **döngü ifadeleri** (**iteration statements**) denir. Biz buradaki örneklerde konuya giriş yaptık. Döngü ifadelerini ileride ayrıntıyla inceleyeceğiz.