# Statik Değişkenler

Sınıfın içerisine yazdığımız değişkenleri statik olarak belirleyebiliriz. Statik değişkenleri genelde sınıflarla ilgili sabit değerleri belirlemek için kullanırız.

Statik değişkenler **tek (singleton)** nesnelerdir. Bunun anlamı şudur: Java programı çalıştırıldığında statik değişkenler bir kez oluşturulurlar ve program boyunca buradan kullanılırlar. Statik değişkenler, erişim belirteçlerinin izin verdiği ölçüde programın diğer parçaları tarafından kullanılabilirler.

```java
class Math
{
	public static final double PI = 3.14;
}
```

Yukarıdaki örnekte _Math_ sınıfı içerisinde _PI_ adında bir değişken oluşturduk. Matematikteki pi sayısını belirtmek için programımız boyunca bu değişkeni kullanabiliriz; çünkü **static** olarak belirttik. Değişkeni **final** olarak belirttiğimize de dikkat edin; bu sayede bu değişkenin değeri hiçbir şekilde değiştirilemeyecektir. Ayrıca değişkeni **public** olarak tanımladığımız için programımızın her parçasından bu değişkene ulaşılabilecektir. Aşağıdaki örnekte bu değişkene ulaşıp değerini konsola yazdırıyoruz:

```java
class Main
{
	public static void main(String[] args)
	{
		System.out.println(Math.PI); // Konsola 3.14 yazar
	}
}
```

Burada bir not olarak şunu belirtelim: Java’da statik değişkenleri isimlendirmek için genelde büyük harfle isimlendirme (upper case naming) yöntemi kullanılır. Bu yönteme göre değişkenin bütün harfleri büyük olarak yazılır. Eğer değişkenin ismi birden fazla kelimeden oluşuyorsa bu kelimeler alt çizgi (_) ile ayrılır.

## Statik değişkenlere ilk değer atamak

Bazen statik değişkenlere ilk değerlerini vermemiz gerekebilir.

Hatırlayacaksanız, sınıfın içindeki değişkenlere ilk değerlerini vermek için yapılandıcıları (constructors) kullanıyorduk. Fakat yapılandırıcılar yalnızca sınıfın bir örneği alındığında çalışır. Statik değişkenler için bu durum söz konusu değildir. Statik değişkenlere ilk değerlerini vermek için **statik başlatma bloklarını (static initialization blocks)** kullanırız. Aşağıdaki örneği inceleyelim:

```java
class Main
{
	static int[] EVEN_DIGITS = new int[5];
	
    static
	{
		EVEN_DIGITS[0] = 0;
		EVEN_DIGITS[1] = 2;
		EVEN_DIGITS[2] = 4;
		EVEN_DIGITS[3] = 6;
		EVEN_DIGITS[4] = 8;
	}
}
```

## Statik Metotlar

Sınıfın içine yazdığımız değişkenler ve metotlar, o sınıfın bir örneği oluşturulduğunda hafızaya yüklenir. Bir metodu çağırabilmeniz için, önce o metodun ait olduğu sınıfın bir örneğini almanız gerekir. Fakat bazı durumlarda sınıftan bağımsız metotlar yazmak isteyebilirsiniz. Bu metotları çağırmak için bütün sınıfın bir örneğini oluşturup hafızaya yüklemek gereksiz olabilir. Bu gibi durumlarda **statik metot** tanımlarız. Statik metotlar, sınıfın içine yazılmasına rağmen sınıftan bağımsız olan ve çalıştırılması için sınıfın örneğinin alınmasına gerek olmayan metotlardır. Her Java programının giriş noktası olan _main()_ metodunun da statik bir metot olduğunu hatırlayacaksınız.

Statik metot tanımlarken metodun dönüş tipinden önce **static** deyimini kullanırız.

Statik metotlarla ilgili bazı kısıtlamalar bulunmaktadır:

- Yalnızca aynı sınıf içindeki statik metot ve değişkenlere doğrudan erişebilirler; çünkü statik olmayan alanların hafızada oluşabilmesi için sınıfın bir örneğinin alınması gerekir.
- Statik metotlar **this** ve **super** deyimlerini kullanamazlar; çünkü bu deyimleri kullanabilmek için sınıfın bir örneğinin alınmış olması gerekir.

Şimdi durumu daha iyi kavramak adına bir örnek inceleyelim. _Math_ adında matematiksel işlemleri yaptığımız bir sınıfımız olsun. Bu sınıfın içine, iki parametre arasında değeri en küçük olan sayıyı bulan bir metot yazalım:

```java
class Math
{
	public int min(int a, int b)
	{
		return a < b ? a : b;
	}
}
```

Yukarıda yazdığımız min() metodunu aşağıdaki gibi kullanabiliriz:

```java
Math math = new Math();
System.out.println(math.min(3, 5)); // Konsola 3 yazar
```

Gördüğünüz gibi metodu çağırabilmek için sınıfın örneğini almak zorundayız. Fakat hemen fark edeceğiniz gibi, bu metodun Math sınıfıyla herhangi bir bağlantısı yoktur. Sınıfın herhangi bir metoduna veya değişkenine erişmediği gibi, çalışması için bu sınıfın hafızada var olmasına da gerek yoktur. Yine de metodu çağırabilmek için mecburen sınıfın bir örneğini alıyoruz. Şimdi aynı metodu statik olarak tanımlayalım ve aradaki farkı görelim:

```java
class Math
{
	public static int min(int a, int b)
	{
		return a < b ? a : b;
	}
}
```

Statik olarak tanımladığımız bu metodu aşağıdaki gibi kullanabiliriz:

```java
System.out.println(Math.min(3, 5)); // Konsola 3 yazar
```

Gördüğünüz gibi, statik metodu çağırmak için sınıfın bir örneğini almamıza gerek yoktur. Bu tarz metotları yazmak için statik deyimini sıklıkla kullanacağız. Fakat statik kısıtlamalarına dikkat etmemiz gerekir. Aşağıdaki örnekleri inceleyelim:

```java
class Math
{
	private int result;

    public static int min(int a, int b)
	{
		result = a < b ? a : b; // Bu satır hataya neden olur
		return result;
	}
}
```

Yukarıdaki örnekte _Math_ sınıfının içinde _result_ adında bir değişken tanımladık. Şimdi metodun içinde iki sayı arasından değeri küçük olanı buluyor ve bu değişkene atıyoruz. Fakat bu satır hataya neden olur; çünkü _result_ değişkeni statik olarak belirtilmediği için ancak sınıfın bir örneği alınırsa hafızada bulunabilir. Metodumuz ise statik olduğundan _Math_ sınıfının örneğini almaya gerek yoktur. Uzun lafın kısası, _min()_ metodumuz çalıştığında hafızada _result_ adında bir değişken yoktur.

Statik bir metottan, ancak ve ancak sınıfın diğer statik alanlarına erişilebilir. Yukarıdaki kodu değiştirerek _result_ değişkenini de statik olarak belirlersek hata olmayacaktır:

```java
class Math
{
	private static int result;
	
    public static int min(int a, int b)
	{
		result = a < b ? a : b; // Bu satır hataya neden olmaz
		return result;
	}
}
```

