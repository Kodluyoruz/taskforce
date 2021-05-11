# Interface (Arayüzler)

Java'da soyutlamayı sağlamanın bir başka yolu "interface" tanımlamaktır. "interface" 'ler abstract sınıflara göre soyutlama oranı çok yüksektir. Çünkü, "interface" içinde sadece soyut fonksiyonlar tanımlayabilirsiniz. Metot gövdesi olan normal fonksiyonlar tanımlayamazsınız.

"interface"ler sözleşmeler gibidir. Bir sınıf eğer bir interface'den kalıtım alıyorsa o "interface"de tanımlı olan tüm soyut özellikleri karşılamak zorundadır. Eğer, kalıtım alan sınıf "interface"deki bazı metotlara ihtiyaç duymuyorsa yazılım tasarımınızda bir problem var demektir. Bu noktada "Interface Segregation" yapmanızı öneririm. "Interface Segregation" ile interface'ler alt interface tanımlarına bölünebilir.

Neden "interface" kullanırız?

- En önemli sebebi soyutlama ve çok biçimliliği sağlamak için

- "interface" ile çoklu kalıtımı sağlayabiliriz. Bir sınıf birden fazla interface'den kalıtım alabilir. Ayrıca, interface'ler de birbirinden kalıtım alabilir.

- Gevşek bağlı yazılım modülleri kurmak için gereklidir.

Bir sınıf "interface"den kalıtım alıyorsa "implements" anahtar kelimesi kullanılır. Örnek bir tanımlamaya göz atalım.

```java
// interface anahtar kelimesi ile bir interface tipi tanımlanır.
public interface PaymentProvider {

	// interface içinde yer alan fonksiyonların hepsi soyuttur.
	// Bu soyut fonksiyonlar interface'den kalıtım alan alt sınıflarda doldurulur.
	public boolean cancelCharge(int chargeId);

	public int charge(double totalPrice);

	public String loadInvoice(int chargeId);

}
```

Alt sınıflar interface'den kalıtım alırlar.

```java
public class AssecoPaymentSystem implements PaymentProvider {

	@Override
	public boolean cancelCharge(int chargeId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public int charge(double totalPrice) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public String loadInvoice(int chargeId) {
		// TODO Auto-generated method stub
		return null;
	}
}

public class IyzicoPaymentSystem implements PaymentProvider {

	@Override
	public boolean cancelCharge(int chargeId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public int charge(double totalPrice) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public String loadInvoice(int chargeId) {
		// TODO Auto-generated method stub
		return null;
	}
}
```
