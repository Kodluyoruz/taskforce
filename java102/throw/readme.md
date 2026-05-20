# Throw (Hata Fırlatmak)

## &quot;throw&quot; Anahtar Kelimesi ile Hata Fırlatmak

&quot;try-catch&quot; yöntemiyle hatayı kontrol edip uygulamanın kırılmasını engelleyebiliyorduk. Bir başka yöntem de hata fırlatarak hatanın çağrıldığı noktada kontrolünün sağlanmasıdır.

````java
public int indexOf(String value, String searchedText) throws BatuxException {
	
	if(value == null) {
		throw new BatuxException("Gelen değer null olamaz!");
	}
	
	return value.indexOf(searchedText);
}
````

Yukarıdaki örnekte bir String değer içinde aranan ifadenin hangi indekste olduğunu bulmaya çalışıyoruz. Fakat, gönderilen değer &quot;null&quot; ise &quot;throw&quot; anahtar kelimesi ile yukarıda oluşturduğumuz kendi hata tipimizden bir hata fırlatıyoruz.

```java
import java.util.Scanner;

public class HataYakala {

    public static void checkAge(int age) {
        if (age < 18) {
            throw new ArithmeticException("Hatalı Yaş");
        }

        System.out.println("Yasaktan Muaf !");
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Yaşınız : ");
        int a = scan.nextInt();

        try {
            checkAge(a);
        } catch (ArithmeticException e) {
            System.out.println(e.getMessage());
        }

    }
}

```
