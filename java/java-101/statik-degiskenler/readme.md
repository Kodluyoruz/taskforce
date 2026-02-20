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

Bu örnekte, çift rakamları tutmak için bir dizi oluşturduk. Bu dizinin elemanlarını atamak için statik başlatma bloğunu nasıl kullandığımıza dikkatinizi çekerim.

