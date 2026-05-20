## Değişlenlerin Kapsamı ve Yaşam Süresi

Değişkenlerin kapsamını ve yaşam süresini anlamak için önce **kod bloğu (block)** kavramını incelemeliyiz.

Java’da kodlarımızı satırlar halinde yazarız. Her bir satırın sonuna noktalı virgül işareti konur. Bunu satırın bittiğini belirtmek için yaparız. Birden fazla satırdan oluşan kodlarımızı ise bir blok içine alırız. Bunun için küme parantezleri ( { ve } ) kullanılır. Her sınıfın ve her metodun kendine ait kod blokları vardır. Bunun yanında, bazı özel kod blokları da bulunur; hatta kendimiz de kod blokları açabiliriz. Aşağıdaki örneği inceleyelim:

```java
class CodeBlocksDemo
{ // sınıfın kod bloğu başlıyor
	
    public static void main(String[] args)
	{ // main metodunun kod bloğu başlıyor
        
	    int year = 2020;
		
        if (year >= 2000)
		{ // if bloğu başlıyor
			System.out.println("Milenyum çağındayız.");
		} // if bloğu bitiyor

        for (int i = 0; i < 10; i++)
		{ // for bloğu başlıyor
			System.out.println(i);
		} // for bloğu bitiyor

        { // kod bloğu başlıyor
			System.out.println("Burası isimsiz bir kod bloğudur.");
		} // kod bloğu bitiyor

    } // main metodunun kod bloğu bitiyor

} // sınıfın kod bloğu bitiyor
```

Kısaca belirtmek gerekirse, bir değişkenin kapsamı tanımlandığı kod bloğuyla sınırlıdır. Bu blok içinde değişkene erişebilirsiniz. Kod bloğunun dışına çıktığınızda ise artık değişkeni kullanamazsınız. Yukarıdaki örnekteki kod bloklarını aynen bırakalım ve aşağıdaki örneği inceleyelim:

```java
class CodeBlocksDemo
{

    int a = 1;

    public static void main(String[] args)
	{
		// Burada a değişkenine erişimimiz var

        int b = 2;
	    // Burada a ve b değişkenlerine erişimimiz var

        if (b >= 2000)
		{
			int c = 3;
			// Burada a, b ve c değişkenlerine erişimimiz var
		}

        // c'nin kapsamı bitti, artık erişemeyiz

        for (int i = 0; i < 10; i++)
		{
			int d = 4;
			// Burada a, b ve d değişkenlerine erişimimiz var
		}
		
        // d'nin kapsamı bitti, artık erişemeyiz

        {
			int e = 5;
			// Burada a, b ve e değişkenlerine erişimimiz var
		}

        // e'nin kapsamı bitti, artık erişemeyiz
	}
	
    // b'nin kapsamı bitti, burada yalnızca a değişkenine erişebiliriz
}
```

Yukarıdaki örnekten de anlaşılacağı üzere, bir kod bloğunun içinde tanımlanan değişkene dışarıdaki bir bloktan erişilemez. Diğer yandan, bunun tam tersi geçerli değildir. Bir kod bloğunda tanımlanan değişkene içerideki bir bloktan da erişilebilir.

İlkel veri türüne sahip değişkenler kapsam dışına çıkınca otomatik olarak hafızadan da silinirler. Diğer bir deyişle, ilkel veri türüne sahip değişkenlerin yaşam süresi kapsamlarıyla aynıdır. Fakat bu diğer veri türündeki değişkenler için geçerli değildir. İlkel olmayan veri türündeki değişkenler kapsam dışına çıksa da hafızada kalmaya devam edebilir. Bunu daha sonra ayrıntıyla anlatacağımız için şimdilik bir örneğe daha bakıp geçeceğiz.

```java
public class ConnectionPool
{ // Sınıf kapsamının başlangıcı

	int connectionMaximumLimit =50; // Nesne değişkenidir.

	static int currentActiveConnectionCount =10; //static değişkendir. Sınıf değişkenidir.

	public voidacquireConnection()
	{ // metot (fonksiyon) kapsamının başlangıcı

		int processId =90; // Yerel değişkendir.

		// Diğer kodlar ...

	} // metot (fonksiyon) kapsamının sonu

} // Sınıf kapsamının sonu
```


Yukarıdaki örnekte veritabanına bağlantı kurabilmek için bir havuz oluşturduğumuzu hayal edelim. Bu havuza belli bir sayıda kullanıcı bağlanıp bir bağlantıyı alıp kullanıp, tekrar sisteme iade ettiğini düşünelim. Bu senaryoda &quot;ConnectionPool&quot; isminde bir sınıf tanımlamak gerekecektir. Bu sınıf havuz nesnesinin taslağıdır. Kapsamı süslü parantezlerle başlayıp bittiği alan kadardır. Bu kısım kod üzerinde açıklama satırlarıyla belirtilmiştir. &quot;ConnectionPool&quot; sınıfı içindeki &quot;connectionMaximumLimit&quot; isimli değişken nesne değişkenidir. Bu sınıftan üretilen her nesnenin kendine ait &quot;connectionMaximumLimit&quot; bir değişkeni olacaktır. **&quot;static&quot;** olarak isimlendirilen &quot;currentActiveConnectionCount&quot; değişkeni ise sınıf değişkendir. Yani herhangi bir nesne üretmeksizin sınıf üzerinden global olarak erişilebilir.

Yani,

```java
ConnectionPool.currentActiveConnectionCount=1000;
```

Yukarıdaki şekildeki gibi nesne olmadan sınıf tanımı üzerinden erişilebilir.

&quot;acquireConnection&quot; metodu ise havuzdan bağlantı alıp ilgili prosese atamayı sağlayan fonksiyondur. Bu fonksiyon içinde tanımlı olan tüm değişkenler yerel değişkendir. Çünkü, metodun kapsamı içinde tanımlanmıştır. Metodun kapsamı da süslü parantezler arasında kalan alandır. Yorum satırı olarak belirtilmiştir. Metot çalışıp işini bitirince bu yerel değişkenlerde ömürlerini tamamlarlar ve bilgisayar hafızasından silinirler.

```java
public class VariableDemo {

	public static void main(String[] args){

        int firstParameter =10;

        int secondParameter =20;

        int summation = firstParameter + secondParameter;

		System.out.println(summation);

	}

}
```

Yukarıdaki örnekte de iki adet değişken tanımlanıp &quot;+&quot; toplama operatörüyle toplanıp sonuç &quot; **summation**&quot; isimli başka bir değişkene atanmıştır. Ardından, &quot; **println**&quot; fonksiyonuyla konsol ekranına sonuç yazdırılmıştır.