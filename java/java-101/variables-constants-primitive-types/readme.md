

# Java Değişkenler

Değişkenler içinde veri barındıran ve bilgisayarın geçici hafızasında (RAM) fiziksel olan yer kaplayan yapılardır. Değişkenlere değer (veri) ataması yapılabilir. Java&#39;da değişkenleri veri tipleri vardır. Bu tipler Java&#39;da varsayılan olarak tanımlı gelen tipler de olabilir yahut yazılımcıların kendi tanımladığı tipler de olabilir.

```java
<veri tipi> <değişken ismi> = veri (değer)
```

Değişken tanımlaması yapıldığında aslında bilgisayar hafızasında bir yeri ayırmış oluyoruz. Bu alan o değişkenin veri tipinin boyutu kadar bir alanı ifade eder. Örneğin: 2 Byte&#39;lık bir veri tipine sahipsek ve bu tipte bir değişken tanımlıyorsak. Her değişken için hafızadan 2 Byte&#39;lık yer ayrılacaktır. Javadaki değişken tiplerini hemen alttaki şu fotoğrafta görebiliriz (ilkel (primitive) ve ilkel olmayan (non-primitive) veri tipleri ayrımına da ayrıca dikkat ediniz, ileride bahsedilecektir): 

![](figures/veri-tipleri-1.png)

Hafızada veri tutmak için değişkenleri kullanırız dedik. Değişkenlerle ilgili 5 önemli kavram vardır şimdi bunlara bakalım:

- **Tür**: Java tür kesinliği olan bir dildir. Bunun bir sonucu olarak, her değişkenin bir türü vardır. Bu tür değişken tanımlarken belirtilir ve bir daha değiştirilemez. Türünü belirtmeden değişken tanımlayamazsınız.
- **İsim**: Her değişkene bir isim verilir. Bu ismi değişkene değer atamak ve gerekirse bu değeri değiştirmek için kullanırız. Değişkene verilecek isim tek bir kelimeden oluşmalıdır (boşluk içermemelidir). Değişken isimleri harflerden, rakamlardan ve alt çizgi (_) karakterinden oluşabilir. Değişken isimleri rakam ile başlayamaz.
- **Değer**: Değişkenler hafızada değer tutmak için kullanılır. Değişkene tanımlandığı anda bir değer verebileceğiniz gibi, daha sonra da değer atayabilirsiniz. Değişkenin değeri istenilen bir anda değiştirilebilir. Bu değerler değişkenin türüne göre sınırlandırılmıştır. Değişkene vereceğimiz değer türüyle uyumlu olmalıdır. Aksi halde Java derleyicisi kodumuzun derlenmesine izin vermez. Örneğin, boolean bir değişkene tamsayı değer atayamazsınız.
- **Kapsam (Scope)**: Her değişkenin bir kapsamı vardır. Bu kapsam, değişkenin program içerisinde geçerli olduğu alanı belirler. Bir değişkene kapsamı dışında erişemezsiniz.
- **Yaşam Süresi (Lifetime)**: Sürekli değişken oluşturursak bir süre sonra bilgisayarın hafızası tükenebilir. Bunun için her programlama dilinde bir **çöp toplama (garbage collection)** mekanizması vardır. Java’da her değişkenin bir ömrü vardır ve gerektiği anda hafızadan silinirler. Yaşam süresi çoğu zaman değişkenin kapsamıyla bağlantılıdır.

### Değişken Tanımlamak

Şimdi değişken tanımlamaya ve örneklerine biraz daha ayrıntılı bakalım. Java’da bir değişken, sırasıyla önce türü ve sonra ismi belirterek tanımlanır.

```java
int number;
// number isminde, int türünde bir değişken tanımlanmış
```

Aynı satırda birden fazla değişken tanımlayabilirsiniz, fakat türleri aynı olmak zorundadır:

```java
double a, b, c;
// double türünde 3 ayrı değişken tanımlanmış
```

Değişkeni tanımladıktan sonra, atama operatörü (=) kullanarak değişkene bir değer verebilirsiniz:

```java
double pi; // Önce double türünde bir değişken tanımladık
pi = 3.14; // Daha sonra bu değişkene bir değer verdik
```

Eğer bir değişkene hemen değer atayacaksanız, bunu iki satırda yapmak yerine tek bir satırda halledebilirsiniz:

```java
double pi = 3.14;
```

Aynı satırda aynı türden birden fazla değişken tanımlıyorsanız bunlara şu şekilde değer verebilirsiniz:

```java
int year = 2020, age = 25;
// Aynı satırda int türünde 2 farklı değişken tanımlanmış ve ikisine de değer verilmiş
```

Değişkene verilen değer herhangi bir anda değiştirilebilir:

```java
int year = 2020; // Bir değişken tanımlanmış ve değer verilmiş
year = 2021; // Değişkenin değeri değiştirilmiş
year = 2022; // Değişkenin değeri tekrar değiştirilmiş
```

Bir değişkeni tanımladığınız zaman, aynı kapsam içinde aynı isimde başka bir değişken tanımlayamazsınız:

```java
boolean a = true; // a isminde bir değişken tanımlanmış
boolean a = false; // Bu satır hataya neden olur, a değişkeni zaten var
```

Buraya kadar olan örneklerimizde değişkene hep kesin bir değer atadık; fakat Java’da bir metodun sonucunu da değişkene atayabilirsiniz (metodlar konusunu ileride ayrıntılı göreceğiz):

```java
double result = Math.sqrt(16.0);
// Karekök metodu çağrılıyor ve sonucu bir değişkene atanıyor
// Bu işlem sonucunda result değişkeninin değeri 4.0 olur
```

**int** tipinde, yani sayı tipinde tanımlanmış **a,b,c,d** isimli değişkenlerin her biri hafızada bir alanı kaplarlar.

Yukarıdakilere benzer şekilde aşağıdaki değişken tanımlama örneklerine de bakalım:

```java

int a, b, c; // 3 tane değişken virgüller ile ayrılarak tek satırda tanımlanabilir.

int a = 10, b = 10; // Birden fazla değişken aynı satırda ilk değerleri atanarak tanımlanabilir.

byte b = 22; // Tek değişkene ilk değer ataması yapılarak

double pi = 3.14159; // Tek değişkene ilk değer ataması yapılarak

char a = "a" ;; // Tek değişkene ilk değer ataması yapılarak

```



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

## Yerel Değişken

```java
public class Test {

    public void popAge(){

        int age =0;
        age = age +7;
        System.out.println("Puppy age is : "  age);

    }

    public static void main(String args[]){

        Test test =  ew Test();
        test.popAge();

	}
}
```

Yukarıdaki örnekte &quot; **popAge**&quot; metodu içindeki &quot; **age**&quot; isimli değişken yerel tanımlıdır. Dikkat edilecek olunursa Test sınıfından bir nesne oluşturup &quot; **popAge**&quot; metodu çağrılmıştır. Sonuçta ekrana 7 değerini basacaktır. Yerel değişkenlere ilk değer ataması yapılmalıdır. &quot;age&quot; isimli değişkene sıfır değeri ilk değer olarak verilmiştir.

Not: Nesne değişkenlerinin varsayılan değerleri otomatik atanır. Eğer değişken sınıf (referans) tipinde bir değişkense varsayılan değeri &quot; **null**&quot; olacaktır.

Not: Sınıf değişkenleri daha çok sabit değerleri tanımlamada kullanılır.

```java
public static final double PI =3.14;
```

## Sabitler (Constants)

Değeri değiştirilemeyen değişkenlere **sabit (constant)** denir. Bazen, yazdığımız programlarda bazı değişkenlerin bir kere tanımlanmasını ve daha sonra değerlerinin değiştirilmemesini isteriz. Bu gibi durumlarda sabit tanımlarız. Sabitlerin değişkenlerden iki temel farkı vardır:

- Bir değişkeni sabit yapmak istiyorsanız **final** belirteci ile tanımlamalısınız.
- Sabitlerin değeri sonradan değiştirilemediği için tanımladığınız anda değer atamalısınız.

```java
boolean someVariable = false;
// Bir değişken tanımlanmış. Değeri daha sonra değiştirilebilir.
final double pi = 3.14;
// Bir sabit tanımlanmış. Değeri daha sonra değiştirilemez.
```

Sabitlerle ilgili hataya neden olabilecek aşağıdaki örnekleri inceleyelim:

```java
final byte x; // Bu satır hataya neden olur; çünkü sabit olarak belirlenmesine rağmen bir değer atanmamış
```

```java
final int year = 2020;
year = 2021; // Bu satır hataya neden olur; çünkü sabitin değeri değiştirmeye çalışılıyor
```

## Java Veri Tipleri

Değişkenler, verileri hafızada belli bir alan içinde tutmaya, saklamaya yararlar. Her değişken tanımı yapılırken bir veri tipi belirtilir. Veri tipine göre de değişken tanımlandığı esnada hafızada ne kadar yer kaplayacağı belli olur. Yazının başında da verilen tabloya tekrar göz gezdirelim şimdi.

Java&#39;da iki tip değişken grubu vardır:

- İlkel Veri Tipleri (Primitive Data Types)
- Nesne Veri Tipi (Object Data Types ya da Non-Primitive Data Types)

![](figures/veri-tipleri-1.png)

## İlkel Veri Tipleri

Java&#39;da dille birlikte tanımlı olarak gelen 8 adet ilkel veri tipi vardır.

- boolean
- int
- char
- byte
- short
- long
- float
- double

| **Veri Tipi** | **Varsayılan Değeri** | **Veri Boyutu** |
| ------------- | --------------------- | --------------- |
| boolean       | false                 | 1 bit           |
| char          | &#39;\u0000&#39;      | 2 byte          |
| byte          | 0                     | 1 byte          |
| short         | 0                     | 2 byte          |
| int           | 0                     | 4 byte          |
| long          | 0L                    | 8 byte          |
| float         | 0.0f                  | 4 byte          |
| double        | 0.0d                  | 8 byte          |

### &quot; **boolean&quot; Veri Tipi**

Bu veri tipinde sadece iki değer tutabiliriz. &quot;true&quot; veya &quot;false&quot; şeklinde iki değere sahiptir. Hafızada 1 Bit büyüklüğünde yer kaplar.

Örnek Tanımlama:

````java
boolean printerEnabled = false ;
````



### &quot; **byte&quot; Veri Tipi**

-128 ile 127 arasında değer alabilen sayısal bir tam sayı tipidir. Varsayılan değeri sıfırdır. Özellikle, hafızada az yer kaplaması nedeniyle kullanılabilir. Eğer, &quot;int&quot; tipine gerek duymuyorsanız, &quot;byte&quot; kullanmak faydalı olacaktır.

Örnek Tanımlama:

````java
byte humanAge =32;
````



### &quot; **short&quot; Veri Tipi**

16 Bit&#39;lik (yani 2 Byte) veri büyüklüğüne sahip tam sayı veri tipidir. -32,768 ile 32,767 arasında değer alabilir. Varsayılan değeri sıfırdır. Yine &quot;int&quot; veri tipine ihtiyaç duymadığınız zaman &quot;short&quot; tipte değişkenler oluşturarak hafızadan kazanç sağlayabilirsiniz.

Örnek Tanımlama: 

````java
short m2OfRegion =11991;
````



### &quot; **int&quot; Veri Tipi**

32 Bit&#39;lik (yani 4 Byte) veri büyüklüğüne sahip tam sayı veri tipidir. - 2,147,483,648 ile 2,147,483,647 arasında değer alabilir. Varsayılan değeri sıfırdır. &quot;int&quot; tipinde değişken tanımlarken gerçekten o kadar büyüklüğe sahip bir veri tutacak mıyız, iyi kontrol etmek gerekir. Örneğin: insan yaşı bilgisini &quot;int&quot; veri tipinde tutmak hafızada fazladan alan kaplamak demek olacaktır. Zaten insan yaşı &quot;int&quot; değerinden çok küçüktür. Bunun için &quot;byte&quot; tipinde bir değişken tanımlamak hafızayı etkin kullanmayı sağlayacaktır.

Örnek Tanımlama:

````java
int bookCountInWorld =1199221;
````



### &quot; **long&quot; Veri Tipi**

64 Bit&#39;lik (yani 8 Byte) veri büyüklüğüne sahip tam sayı değeridir. Tam sayı veri tipleri içinde en büyük değer aralığına sahip veri tipidir. Çok büyük basamaklı sayıları tutabilmek için idealdir. Hafızada önemli bir yer kaplar. Kullanırken dikkatli olmak gerekir.

-9,223,372,036,854,775,808 ile 9,223,372,036,854,775,807 arasında değer alabilir.

Örnek Tanımlama:

````java
long galaxyCountInSpace =51992212222;
````



### &quot; **float&quot; Veri Tipi**

32 Bit&#39;lik (yani 4 Byte) veri büyüklüğüne sahip ondalıklı sayı değeridir. Sayı aralığına bir limit getirilmemiştir. Hafızayı etkin kullanmak adına &quot;double&quot; veri tipi yerine tercih edilebilir. Çünkü, &quot;double&quot; veri tipi &quot;float&quot; &#39;dan daha büyük bir yer kaplamaktadır. Varsayılan değeri 0.0F şeklindedir. Float tipindeki değişkenlere atanan verilerin sonunda &quot;f&quot; son eki vardır. Değişkene atanan değerin &quot;float&quot; tipinde olduğunu belirtir.

Örnek Tanımlama:

  ````java
float freezeRatio =3.23f;
  ````



### &quot; **double&quot; Veri Tipi**

64 Bit&#39;lik (yani 8 Byte) veri büyüklüğüne sahip ondalıklı sayı değeridir. Sayı aralığına bir limit getirilmemiştir. Boyutu büyük olduğu için tanımlama yapılırken gerçekten &quot;float&quot; veri tipinin yetersiz olduğu durumlarda kullanılmalıdır. Varsayılan değeri 0.0d şeklindedir. Atanan verinin sonuna &quot;d&quot; son eki koyularak &quot;double&quot; tipte bir veri olduğu belirtilebilir. Fakat, &quot;d&quot; son ekinin koyulmadığı durumlarda ondalıklı sayı verisi varsayılan olarak &quot;double&quot; olarak kabul edilir. Konulması zorunlu değildir.

Örnek Tanımlama: 

````java
double freezeRatio =3.2322;
````



### &quot; **char&quot; Veri Tipi**

16 Bit&#39;lik (yani 2 Byte) büyüklüğüne sahip karakter verilerini tutar. Unicode tipinde karakter verilerini saklar. &#39;\u0000&#39; (0) ile &#39;\uffff&#39; (65535) aralığında değer alır.

Örnek Tanımlama:

``````java
char letter = 'A';

char letter = 'B';

char letter = 'C';
``````



## Tür Dönüşümleri

Türler arasında kurallara aykırı olmadığı sürece dönüşüm yapılabilir. Tür dönüşümüne, türleri birbirinden farklı değişkenler arasında atama yaparken ihtiyaç duyulur. Örneğin, int türündeki bir değişkenin değerini long türündeki bir değişkene aktarmak istiyorsanız. Tür dönüşümleri ikiye ayrılır.

### Dolaylı tür dönüşümü (Implicit type casting)

İlkel veri türlerini anlatırken, her bir türün kendine ait bir değer aralığı olduğundan söz etmiştik. Eğer değer aralığı düşük bir türden yüksek bir türe dönüşüm yapılıyorsa burada dolaylı tür dönüşümü söz konusudur.

Örneğin, int türünde bir değişkeniniz var. Bunun değerini long türündeki bir değişkene aktarmak istiyorsunuz. Bildiğiniz gibi, int türünün alabileceği bütün değerler long türünün değer aralığında zaten tanımlıdır. Dolayısıyla bu dönüşüm sorunsuz bir şekilde gerçekleşecektir. Aşağıdaki örneği inceleyelim:

```java
int a = 5;
long b = a;
```

Yukarıdaki örnekte ilk önce int türünde bir değişken tanımlanıyor ve bu değişken üzerinden long türündeki bir değişkene atama yapılıyor. Burada gördüğünüz gibi, atama operatörü (=) kullanarak değişkenin ismini yazmanız yeterlidir. İlk bakışta burada bir tür uyumsuzluğu varmış gibi gözükebilir, int türünde bir değeri long türüne aktarmaya çalışıyorsunuz. Fakat burada arka planda bir tür dönüşümü yapılmaktadır. Bizim bu dönüşüm için ekstra kod yazmamız gerekmediğinden, bu tarz dönüşümlere dolaylı tür dönüşümü denir.

Dolaylı tür dönüşümü yalnızca daha az kapsayıcı bir türden daha çok kapsayıcı bir türe doğru yapılabilir. Bu nedenle bu tür dönüşümler **genişleyen dönüşüm (widening conversion)** olarak da adlandırılır.

### Doğrudan tür dönüşümü (Explicit type casting)

Dolaylı tür dönüşümünün aksine, daha kapsayıcı bir türden daha az kapsayıcı bir türe doğru yapılan dönüşümlere doğrudan tür dönüşümü denir. Doğrudan denmesinin sebebi, yapılacak dönüşümün yönünü belirtmemiz gerektiğindendir.

Bunu gösterebilmek için yukarıdaki örneğin tam tersini inceleyelim:

```java
long a = 5;
int b = (int) a;
```

Görüldüğü gibi, doğrudan tür dönüşümü yaparken, dönüştürülecek türün adı değişkenin adından önce parantez içinde yazılır. Bunu yaparak Java’ya, türü dönüştüreceği yönü belirtmiş oluruz.

Doğrudan tür dönüşümleri, **daralan dönüşüm (narrowing conversion)** olarak da adlandırılır.

## Unicode Karakter Sistemi

Bilgisayar dünyasında karakterler sayısal ifadeler ile temsil edilir. Aslında, her harfin veya sembolün bir sayısal karşılığı vardır. Dünyadaki çoğu dile ait karakterleri tanımlayan sisteme Unicode Karakter Sistemi denir.

Unicode sistemi dışında kullanılan diğer karakter sistemleri:

- **ASCII** (American Standard Code for Information Interchange)
- **ISO 8859-1** (Batı Dilleri için)
- **KOI-8** (Rusça için)
- **GB18030** ve **BIG-5** (Çince ve diğer diller için)

Unicode sistemi ile tüm dillere ait karakterler 2 Byte şeklinde tanımlandığı için uluslararası bir standarda sahiptir. Bu nedenle Java tarafından tercih edilmiştir. Diğer karakter sistemlerinden birbirine dönüşüm yapmak sorunlu ve maliyetli bir iştir.

| **Notasyon** | **Temsil Eden Karakter**             |
| ------------ | ------------------------------------ |
| \n           | Yeni satır (0x0a)                    |
| \r           | Satırbaşı (0x0d)                     |
| \b           | Geri tuşu (0x08)                     |
| \s           | Boşluk (0x20)                        |
| \t           | Bir tab Boşluk                       |
| \ "          | Çift Tırnak Kaçış Karakteri          |
| \ '          | Tek Tırnak KaçışKarakteri            |
| \ \          | Ters slash karakteri                 |
| \uxxxx       | Hexadecimal UNICODE Karakteri (xxxx) |