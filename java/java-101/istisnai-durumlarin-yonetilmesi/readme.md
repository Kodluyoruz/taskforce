# İstisnai Durumların Yönetilmesi

Hata durumlarını yönetmek için 2 yöntem vardır.

- Try-catch blokları ile hatayı alınacağı tahmin edilen yerde kontrol altına alabiliriz veya
- Hatayı throws anahtar kelimesi ile çağrıldığı bir üst noktaya fırlatarak, çözümün orada yapılmasını zorunlu hale getiririz.

## &quot;try-catch-finally&quot; Mekanizması

Bu yöntemde öncelikle hata oluşacağı tahmin edilen ve izlenmesi gereken kod satırları "try" bloğu içerisine alınır.
Hata oluşmadığı durumda buradaki istenilen işlemler tamamlanacak ve kod sorunsuz bir şekilde devam edecektir ancak 
hata oluştuğunda &quot;catch&quot; bloğuna düşecektir. 

"catch" bloğu aldığımız hatayla nasıl baş edeceğimizi programladığımız bloktur. Bu yapı hatalarda programımızın
nasıl davranacağını, kapatılacaksa bile gerekli verilerin kaydedilmesini ve programın bilinçli bir şekilde
kapatılmasına veya sistemin hata durumlarıda gerekli önlemleri alarak çalışmasını sürdürmesini sağlar.
Bu sayede yapacağımız uygulama daha kararlı bir şekilde çalışacaktır.

&quot;try-catch&quot; mekanizmasının kullanımı maliyetlidir. Bu nedenle, "try-catch" bloklarını gerekli yerlerde
kullanmak gerekir.

````java
public class DataConverter {

	
	public int convertToInt(String numberAsText) {
		
		// bu örnekte hatayı tespit ediyoruz ve oluştuğu noktada önlemler alıyoruz.
		try {
			int number = Integer.parseInt(numberAsText);
			return number;
		}
		catch (NumberFormatException e) {
			e.printStackTrace();
			// bu kısımda mutlaka loglama yapmanız önerilir.
			// kurumsal projelerde hata takibi ve logların izlenmesi hataların çözümü için çok önemlidir.
		}
		catch (NullPointerException e) {
			// farklı hata tiplerine göre birden fazla catch bloğu açabilirsiniz.
			e.printStackTrace();
		}
		
		return -1;
	}
	
	
	public Date convertToDate(String dateAsText) throws ParseException {
		
		SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy-MM-dd");
	
		// bu örnekte ise String haldeki date bilgisini Date verisine çevirmeye çalıştık.
		// parse fonksiyonu "ParseException" tipinde bir hata fırlattığı için biz de bu hatayı çağrıldığımız bir üste ilettik.
		return dateFormatter.parse(dateAsText);
	}
	
}
````

&quot;catch&quot; bloklarının sıralaması önemlidir. Çünkü, sıralanmış haline göre işletilir.

````java
   catch (NumberFormatException e) {
			e.printStackTrace();
			// bu kısımda mutlaka loglama yapmanız önerilir.
			// kurumsal projelerde hata takibi ve logların izlenmesi hataların çözümü için çok önemlidir.
   }
   catch (NullPointerException e) {
			// farklı hata tiplerine göre birden fazla catch bloğu açabilirsiniz.
			e.printStackTrace();
   }
````

Yukarıdaki örnekte ilk önce gelen hatanın &quot;NumberFormatException&quot; tipinde olup olmadığına bakılır. 
Eğer gelen hata bu tipte değilse, sonra sırayla alttaki catch blokları kontrol edilir. Uygun hata hangi bloğa denk 
geliyorsa o &quot;catch&quot; bloğu işletilir.

Aynı zamanda Exception sınıfındaki hiyerarşik yapısında bulunan sıraya göre bu bloklar sıralanmalıdır.  

````java
   catch (Exception e) {
    ...
   }
   catch (NullPointerException e) {
    ...
   }
````
Bu örnekteki gibi sıralanmış bir "catch" bloğunda en genel "Exception" sınıfı kullanıldığı için gelen her "Exception" bu blok tarafından yakalancak ve o blok çalışacaktır.
Bu "NullPointerException" bloğundaki davranışın hiç çalışmamasına yani programda "NullPointerException" yakalandığı zaman uygulamanın beklendiği gibi davranmamasına neden olacaktır.


Eğer, belirli hata tiplerine göre işlemler yaptırmanız gerekmiyorsa tek bir &quot;catch&quot; bloğu yazıp tüm hataların aynı &quot;catch&quot; bloğuna düşmesini sağlayabilirsiniz. Bunun içinde ATA sınıf olan &quot;Exception&quot; tipinde bir hata tipi belirtmeniz gerekir.

````java
catch (Exception e) {
	e.printStackTrace();
}
````

## &quot;finally&quot; Bloğu

&quot;try-catch&quot; sonrasında opsiyonel olarak &quot;finally&quot; kod bloğunu ekleyebilirsiniz. &quot;try&quot; bloğu içindeki kod bloğu hata alsın ya da almasın &quot;finally&quot; bloğu her koşulda çalıştırılır. Bunu bir örnekle açıklayalım.

````java
public int readIntFromKeyboard() {
	
	Scanner scanner = new Scanner(System.in);
	
	// bu örnekte hatayı tespit ediyoruz ve oluştuğu noktada önlemler alıyoruz.
	try 
	{	
		String inputFromKeyboard = scanner.nextLine();
		
		int number = Integer.parseInt(inputFromKeyboard);
		
		return number;
		
	}
	catch (Exception e) 
	{
		e.printStackTrace();
	}
	// hata olsun veya olmasın mutlaka çalıştırılır.
	finally 
	{
		scanner.close();
	}
	
	return -1;
}
````

Yukarıdaki örnekte &quot;Scanner&quot; sınıfından bir nesne üretiyoruz. Bu nesne klavyeden girilen değeri alıyor. 
Aldığımız değeri int tipinde bir sayıya dönüştürüyoruz. Bu dönüşüm esnasında bir hata olsun ya da olmasın &quot;finally&quot; 
bloğunda &quot;Scanner&quot; sınıfının dinlediği Stream&#39;i close ediyoruz.

