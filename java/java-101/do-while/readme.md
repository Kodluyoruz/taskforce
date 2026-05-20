# Do-While Döngüsü

Yukarıda gördüğünüz gibi, while döngüsünde koşul döngünün başlangıcında test edilir. Eğer koşul sağlanmıyorsa (**false** ise) döngüye girilmez. Kısacası, yazdığınız programlarda while döngüsüne hiç girilmediği durumlar da yaşanabilir.

Fakat bazen, döngü koşulu sağlanmasa bile döngüye en az bir kere girilmesini isteyebiliriz. Eğer döngü koşulu döngünün başında değil, sonunda test edilirse, döngü en az bir kere işletilir. do-while döngüsü bunu sağlar. Bu döngünün while döngüsünden tek farkı, döngü koşulunun döngünün sonunda test edilmesidir.

Bu döngünün yapısı aşağıdaki şekildedir:

```java
do
{
	[döngüye girecek kodlar]
} while ( [koşul] );
```

Gördüğünüz gibi, koşul döngünün sonunda test edilir. Bu durumda, koşul false olsa bile döngü en az bir kere çalıştırılmış olur. Bu şekilde döngü yazmak istediğiniz durumlarla karşılaşacaksınız. Aşağıdaki örneği inceleyelim:

```java
int year = 2020;
do
{
	System.out.println(“Döngü işletiliyor..”);
	year++;
} while (year < 2020);
```

Bu kod çalıştırıldığında çıktısı aşağıdaki gibi olur:

```java
Döngü işletiliyor..
```

Gördüğünüz gibi _year değişkeni_ 2020’den küçük olmamasına rağmen döngü en az bir kere çalıştırılmıştır.