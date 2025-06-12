# İstisnai Durumların Yönetilmesi (Devam)
## Kendi Hata Tipimizi Oluşturmak

&quot;Exception&quot; ATA sınıftan türeterek kendimize ait hata tipleri oluşturabiliriz.

````java
public class BatuxException extends Exception {

	private static final long serialVersionUID = -1512968406062966965L;
	
	private String message;
	
	public BatuxException(String message) {
		this.setMessage(message);
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
````



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

## Hatayı Metot Tanımında Belirtmek

Bir metot yazarken hata fırlatabilecek bir metot çağırıyorsak, ya metodun içerisinde **try-catch** bloğuyla bu hatayı yakalamalı ya da hata yakalamayı bir üst metoda bırakmalıyız. Fakat bu durumda, çağıran metodun bu hatadan haberdar olabilmesi için metodun hata fırlatabileceğini metodun tanımında belirtmeliyiz. Bunu **throws** deyimiyle yaparız. Örneğe bakalım:

```java
public class Person
{
	private int age;

    public void setAge(int age) throws IllegalArgumentException
	{
	
        if (age < 0)
		{
			throw new IllegalArgumentException("Yaş sıfırdan küçük olamaz!");
		}

        this.age = age;
	}
}
```

Gördüğünüz gibi, setAge() metodunun hata fırlatabilecek bir metot olduğunu throws deyimiyle metot tanımında belirttik. Artık bu metodu çağıran metotlar da bu hatayı yakalamak veya bir üst metoda bırakmak zorundadır.

## Java’daki Bazı Hata Sınıfları

Java’da bazı ortak hatalar için önceden tanımlanmış hata sınıfları vardır. Bunlardan en çok karşılaşılanları kısaca inceleyelim:

- **ArithmeticException**: Sıfıra bölme başta olmak üzere matematiksel hataları belirtir.
- **ArrayIndexOutOfBoundsException**: Bir dizinin aralığı dışında elemanına erişmeye çalışıldığında fırlatılır.
- **ClassCastException:** Geçersiz tür dönüşümü işlemlerinde fırlatılır.
- **IllegalArgumentException:** Metoda verilen parametrelerden biri hatalı olduğunda fırlatılır.
- **IndexOutOfBoundsException**: Hatalı indeks erişimlerinde fırlatılır.
- **NullPointerException**: Henüz değer ataması yapılmamış değişkenler üzerinde işlem yapmaya çalışıldığında fırlatılır. Java’da en çok karşılaşılan hatalardan biridir. Bu hataya karşı önlem almak için yaptığımız kontrollere **null kontrolü** (**null-check**) denir.
- **NumberFormatException**: Bir String değerini sayısal bir türe dönüştürmeye çalıştığımızda, eğer String değer düzgün bir sayı ifade etmiyorsa fırlatılır.
- **UnsupportedOperationException**: Desteklenmeyen bir iş yapmaya çalışıldığında fırlatılır.