# Java'da Kurucu Metotlar (Constructors)

Kurucu metotlar sınıf tasarlanırken yazılırlar. Sınıfınızı yazarken kurucu metotlarınızı da tanımlayabilirsiniz. Eğer sınıf içinde hiç kurucu metot tanımlamazsınız parametresiz boş bir kurucu metot Java tarafından otomatik olarak tanımlanır.

Kurucu metotlar ilgili sınıftan bir nesne üretmeye çalıştığınızda daha nesne üretme aşamasında çalıştırılan özel metotlardır (fonksiyonlardır). **Kurucu metotların isimleri Sınıf ismiyle aynı olmak zorundadır.** Dönüş tipi olarak veya void olarak herhangi bir tanımlama yapılmasına gerek yoktur.

"new" anahtar kelimesi ile nesne üretirken kurucu metot çağrımı yapılır. İki tip kurucu metot vardır:

- Parametresiz Varsayılan Kurucu Metot
- Parametreli Kurucu Metot

## Parametresiz Varsayılan Kurucu Metot

```java
class DatabaseConnection {

	private String url;
	private int portNo;

	// Parametresiz varsayılan boş kurucu metot.
	// Kurucu metot içinde port numarasını sıfıra, bağlantı cümlesini de boş String'e eşitliyoruz.
	public DatabaseConnection() {
		this.url = "";
		this.portNo = 0;
	}

}
```

Aşağıdaki gibi parametresiz şekilde bir nesne oluşturma esnasında otomatik olarak yukarıdaki "Parametresiz Kurucu Metot" çağrılacaktır.

```java
// nesne oluştururken new anahtar kelimesinden sonra hangi kurucuyu çağıracağımızı belirtiyoruz.
// "DatabaseConnection()" ifadesi ile aslında Parametresiz varsayılan kurucuyu çağıracağımızı söylüyoruz.
DatabaseConnection dbConnection = new DatabaseConnection();
```

## Parametreli Kurucu Metot

```java
class DatabaseConnection {

	private String url;
	private int portNo;

	// Parametreli kurucu metot.
	// url ve port bilgisi dışarıdan nesne oluşturulurken verilir.
	public DatabaseConnection(String url, int portNo){
		this.url = url;
		this.portNo = portNo;
	}
}
```

Aşağıdaki gibi parametreli bir şekilde nesne oluşturma esnasında otomatik olarak yukarıdaki &quot;Parametreli Kurucu Metot&quot; çağrılacaktır.

```java
// Nesne oluştururken new anahtar kelimesinden sonra parametreli kurucuyu çağıracağımızı söylüyoruz.
// Çünkü nesne oluşturma aşamasında "DatabaseConnection("jdbc:Mysql//localhost", 3307)" şeklinde bir çağrım yaparak, sınıfı yazarken tanımlamış olduğumuz parametreli kurucuyu çağırıyoruz.
DatabaseConnection dbConnection = new DatabaseConnection("jdbc:Mysql//localhost", 3307);
```
