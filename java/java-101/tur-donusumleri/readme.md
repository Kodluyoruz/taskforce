# Tür Dönüşümleri

Türler arasında kurallara aykırı olmadığı sürece dönüşüm yapılabilir. Tür dönüşümüne, türleri birbirinden farklı değişkenler arasında atama yaparken ihtiyaç duyulur. Değişkenlerin değerleri birbirine atanırken değişken türlerinin birbirine uyumuna dikkat edilmelidir. Mesela String türündeki bir değişkenin değeri int türündeki bir değişkene atanamaz. Fakat int türündeki bir değişkenin değeri long türündeki bir değişkene aktarılabilir. Tür dönüşümleri ikiye ayrılır.

## Dolaylı tür dönüşümü (Implicit type casting)

İlkel(primitive) veri türlerini anlatırken, her bir türün kendine ait bir değer aralığı olduğundan söz etmiştik. Eğer değer aralığı düşük bir türden yüksek bir türe dönüşüm yapılıyorsa burada dolaylı tür dönüşümü söz konusudur. Sayısal değerleri tutan değişkenlerin hafızada kapladığı boyut, türlerine göre, şu şekilde küçükten büyüğe doğru artar: byte, short, int, float, double. 

Örneğin, int türünde bir değişkeniniz var. Bunun değerini long türündeki bir değişkene aktarmak istiyorsunuz. Bildiğiniz gibi, int türünün alabileceği bütün değerler long türünün değer aralığında zaten tanımlıdır. Dolayısıyla bu dönüşüm sorunsuz bir şekilde gerçekleşecektir. Aşağıdaki örneği inceleyelim:

```java
public class App {

	public static void main(String[] args) {
		
		byte a = 65;
		short b = a;
		int c = b;
		long d = c;
		float e = d;
		double f = e;
		
		System.out.println("byte -> " + a);
		System.out.println("short -> " + b);
		System.out.println("int -> " + c);
		System.out.println("long -> " + d);
		System.out.println("float -> " + e);
		System.out.println("double -> " + f);
		}
	}
```
Output:
```java
byte -> 65
short -> 65
int -> 65
long -> 65
float -> 65.0
double -> 65.0
```

Yukarıdaki örnekte ilk önce byte türünde bir değişken tanımlanıyor ve bu değişken üzerinden short türündeki bir değişkene atama yapılıyor. Short değişkeninin değeri int değişkenine, int değişkeninin değeri long değişkenine, long değişkeninin değeri float değişkenine, float değişkeninin değeri ise double değişkenine atanıyor. Burada gördüğünüz gibi, atama operatörü (=) kullanarak değişkenin ismini yazmanız yeterlidir. İlk bakışta burada bir tür uyumsuzluğu varmış gibi gözükebilir fakat burada arka planda bir tür dönüşümü yapılmaktadır. Bizim bu dönüşüm için ekstra kod yazmamız gerekmediğinden, bu tarz dönüşümlere dolaylı tür dönüşümü denir.

Dolaylı tür dönüşümü yalnızca daha az kapsayıcı bir türden daha çok kapsayıcı bir türe doğru yapılabilir. Bu nedenle bu tür dönüşümler **genişleyen dönüşüm (widening conversion)** olarak da adlandırılır.

## Doğrudan tür dönüşümü (Explicit type casting)

Dolaylı tür dönüşümünün aksine, daha kapsayıcı bir türden daha az kapsayıcı bir türe doğru yapılan dönüşümlere doğrudan tür dönüşümü denir. Doğrudan denmesinin sebebi, yapılacak dönüşümün yönünü belirtmemiz gerektiğindendir.

Bunu gösterebilmek için yukarıdaki örnekteki tür sıralamasının tersinde bir dönüşüm uygulayalım:

```java
public class App {

	public static void main(String[] args) {
		
		double pi = 3.1415;
		int x = (int) pi;
		
		System.out.println("double pi -> " + pi);
		System.out.println("int x -> " + x);
	}
}
```
Output:
```java
double pi -> 3.1415
int x -> 3
```
Görüldüğü gibi, doğrudan tür dönüşümü yaparken, dönüştürülecek türün adı değişkenin adından önce parantez içinde yazılır. Bunu yaparak Java’ya, türü dönüştüreceği yönü belirtmiş oluruz. Yukarıdaki örnekte double türündeki bir değişkenin değeri int türündeki bir değişkene atanmıştır. int türündeki değişkenler sadece tamsayı değerlerini tutabileceğinden double değişkeninin sayısal değerinin noktadan sonraki kısmı atılmıştır. Bu tarz dönüşümlerde değer kayıpları yaşanabilir. 

Doğrudan tür dönüşümleri, **daralan dönüşüm (narrowing conversion)** olarak da adlandırılır.
