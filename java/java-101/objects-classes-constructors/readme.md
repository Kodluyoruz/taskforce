# Java Sınıf ve Nesne Kavramları

Java’nın temelinde sınıf kavramı vardır. Java’nın üzerine inşa edildiği temel mantıksal yapı sınıflardır; çünkü sınıflar, nesnelerin biçimini ve doğasını tanımlar. Nesne yönelimli programlamanın temelini sınıflar oluşturur. Java’da kurulacak yapıların tamamı sınıfların içinde inşa edilmelidir.

Bunun dışında Java, önceden de belirttiğimiz gibi Nesneye Dayalı Programlama yöntemini tamamıyla destekleyen bir programlama dilidir. Java bu nedenle aşağıdaki konseptleri destekler ve uygulanmasına olanak tanır. Bu özellikler ileriki konularda tek tek ele alınacaktır.

- Çok Biçimlilik (Polymorphism)
- Kalıtım (Inheritance)
- Kapsülleme (Encapsulation)
- Soyutlama (Abstraction)
- Sınıflar (Classes)
- Nesneler (Objects)
- Metot (Method)
- Mesaj Yoluyla Değer Geçmek (Message Passing)

## Java&#39;da Nesneler (Objects)

Gerçek hayata döndüğümüzde etrafımızda yüzlerce nesne görürüz. Aslında, her nesnenin var olan bir durumu ve davranışı vardır.

Örneğin: bir köpeği ele aldığımızda rengi, ismi, cinsi köpeğe ait durumu ifade eder. Havlaması, koşmak, acıkması ise onun davranışlarını ifade eder.

Aynı şekilde köpeği modelleyen bir nesneyi yazılım dünyasında oluşturduğumuzda renk, isim, cins gibi durumu ifade eden bilgiler değişkenler ile tanımlanır. Ve bu veriler değişkenlerde saklanır. Koşmak, havlamak, acıkmak gibi davranışlar ise yazılım dünyasında metotlar (fonksiyonlar) ile tanımlanır. Metotlar nesneler arası iletişim ve etkileşim için yol sunarlar. Örneğin: bir nesne başka bir nesnenin davranışını o nesnenin metodunu çağırarak etkileşime geçer.

## Java&#39;da Sınıflar (Classes)

Yukarıdaki örneğimizde bir köpeğin yazılım dünyasında nesneler vasıtasıyla bir modelinin olabileceğinden bahsetmiştik. Nesne modelin var olan fiziksel halidir. İşte bu noktada sınıflar bir nesnenin modellenmesi için oluşturulan taslağın kendisidir. Sınıflar bir nesneye ait taslaktır diyebiliriz. Nesne ise o taslaktan üretilmiş bir fiziksel kopyadır. Sınıflardan üretilen yazılımsal nesnelerde bilgisayar hafızasında fiziksel var olan yapılardır.

`````java
public class Dog {

   String breed;
   int age;
   String color;

   void barking() {
   }

   void hungry() {
   }

   void sleeping() {
   }
}
`````

Yukarıda örnek bir sınıf tanımı vardır. Java&#39;da sınıflar aşağıdaki yapıda tanımlanır.

````java
public class <SINIF_İSMİ>
{

   // Kod bloğu 
   // Bu alan sınıfın kapsamını belirler. Bu iki süslü parantez dışında kalan kod bloğu sınıfın dışıdır.

}

````

Süslü parantezler o sınıfa ait kod bloğunu temsil eder. Java&#39;da her süslü parantez açıp kapatmak bir kod bloğu oluşturur. İç içe açılan her kod bloğu alt kümeler gibi birbirini kapsar. Kapsayan blok içindeki tüm alt kod bloklarına erişim hakkına sahipken, alt kapsamdaki bir kod bloğu direkt olarak bir üst kapsam bloğuna erişemez. Bunu iç içe kümeler gibi düşünebiliriz.

![OOP](figures/class_1.png)



### Değişken Tipleri:

- Yerel Değişken: Bu değişkenler metot veya bir kod kapsamı içinde tanımlanmış olan değişkenlerdir. Tanımlandıkları metodun veya kod bloğunun işi bitince otomatik olarak hafızadan silinirler. Yaşam ömürleri kod kapsamının ömrü kadardır.
- Nesne Değişkenleri: Sınıf tanımı yaparken köpek örneğinde olduğu gibi renk, boy, isim gibi nitelikleri değişkenler vasıtasıyla tanımlarız. Sınıf içinde bunları değişken olarak tanımlarız. Ardından sınıftan üretilen her nesne bu değişkenlere sahiptir. İşte bunlara nesne değişkenleri denilmektedir.
- Sınıf Değişkenleri: Sınıf tanımı yapılırken bir değişken **static** anahtar sözcüğüyle tanımlanıyorsa bu sınıf tipi bir değişkendir. Değişkene değer atamak için bir nesne oluşturmanıza gerek yoktur. Sınıf ismi ve nokta operatörü kullanarak erişilir. Global kapsama sahip değişkenlerdir. Yazının ilerleyen kısımlarında **statik** anahtar sözcüğü ve kullanım yerleri ( statik değişken, statik metotlar vs.) ayrıntılı olarak ele alınacaktır.

Şimdi sınıf ve nesne kavramını daha ayrıntılı ve bol örnekle ele alalım.

## Sınıf Kavramının Temelleri

Şu ana kadar yaptığımız bütün örneklerde sınıfları gördük. Fakat o örneklerde sınıflar yalnızca main() metodunu kapsamak amacıyla kullanılmıştı. Öte yandan, sınıf kavramı bununla sınırlı değildir.

İlk olarak, her bir sınıfın yeni bir veri türü tanımladığını belirterek işe başlamalıyız. Bir kere tanımlandıktan sonra, bu türde yeni nesneler oluşturmak için sınıfları kullanabiliriz. Bu yüzden diyebiliriz ki, sınıflar nesneler için bir **şablon** niteliğindedir.

Bir sınıf oluşturduğumuz zaman aslında yeni bir veri türünü taslak olarak tanımlamış oluruz. Sınıfın içinde tanımladığımız değişkenlere o sınıfın alanları (fields) denir. Kodlarımızı ise metotların içine yazarız. Birlikte, metotlar ve alanlar bir sınıfın üyelerini (members) oluşturur.

Sınıfın örneği alınarak yeni bir nesne oluşturulduğunda, sınıfın sahip olduğu alanların bir kopyası nesnede tutulur. Türleri aynı olsa da her bir nesnenin alanları birbirinden bağımsızdır.

### Basit Bir Sınıf Örneği

Basit bir sınıf tanımlayarak işe başlayalım.

```java
class Box
{
	double width;
	double height;
	double depth;
}
```

Yukarıda, _Box_ adında yeni bir sınıf tanımladık. Bu sınıfın 3 alanı vardır: genişlik, yükseklik ve derinlik. Her yeni sınıfın yeni bir tür tanımladığını daha önce belirtmiştik. Fakat unutmayın, sınıf tanımlamak yeni bir nesne oluşturmaz, sadece nesne şablonu belirtmiş olur.

Sınıfın örneğini alarak yeni bir nesne oluşturmak için **new** deyimini kullanırız:

```java
Box myNewBox = new Box();
```

Burada _Box_ türünde yeni bir nesne oluşturduk ve bu nesneyi yine _Box_ türünde bir değişkene atadık. Bu kodu çalıştırdığımız zaman, _Box_ şablonuna uygun olarak bir nesne oluşturulur ve hafızaya kaydedilir. Burada sınıf ile nesne kavramları arasındaki farkı iyi anlayalım: _Box_ bir sınıf, _myNewBox_ ise bu sınıfa göre oluşturulmuş bir nesnedir.

Her nesnenin alanlarının birbirinden bağımsız olduğunu söylemiştik. Şimdi bunu inceleyelim:

```java
Box box1 = new Box();
Box box2 = new Box();

box1.width = 100.0;
box2.width = 150.0;
```

Burada Box türünde iki farklı nesne oluşturduk ve genişliklerine farklı değerler verdik. Buna göre _box1_ nesnesinin genişliği 100 iken, _box2_ nesnesininki 150’dir. İki ayrı nesnenin alanları bağımsız olduğu için, birinin alanını değiştirdiğimizde diğeri bundan etkilenmez.

## Nesne Oluşturmak

Nesne oluşturmak için **new** deyimini kullanıyoruz. Şimdi bunu daha ayrıntılı inceleyelim. Nesne oluşturduğumuzda, sınıfın **yapılandırıcıları (constructor)** çalıştırılır. Yapılandırıcı, özel bir tür metottur. Aşağıda ayrıca konu olarak ele alınacaktır. Yapılandırıcılar, nesne oluşturulduğu zaman çalıştırılırlar ve nesneye ilk değerini vermek için kullanılırlar. Biz bir yapılandırıcı yazmazsak, Java derleyicisi derleme aşamasında sınıfa varsayılan yapılandırıcıyı _(default constructor)_ ekler.

Yapılandırıcıların yapısı şu şekildedir:

```java
[sınıfın ismi] ( [parametreler] )
{
	[yapılandırıcının içeriği]
}
```

Yapılandırıcılar genellikle sınıf oluşturulduğunda ilk değerleri atamak için kullanılırlar. Örneğin aşağıdaki kodu inceleyelim:

```java
Box box = new Box();
box.width = 150;
box.height = 100;
box.depth = 200;
```

Burada Box türünde yeni bir nesne oluşturuluyor ve ilk değerleri veriliyor. Bunu aşağıdaki şekilde de yapabilirdik:

```java
class Box
{
	double width;
	double height;
	double depth;

    Box(double myWidth, double myHeight, double myDepth)
	{
		width = myWidth;
		height = myHeight;
		depth = myDepth;
	}
}
```

Yukarıdaki örnekte, Box sınıfı içinde bir yapılandırıcı tanımladık. Bu yapılandırıcı 3 parametre alıyor ve aldığı bu değerlere göre sınıfın alanlarının ilk değerlerini veriyor. Dolayısıyla şimdi, yukarıdaki kodu aşağıdaki gibi yeniden yazabiliriz:

```java
Box box = new Box(150, 100, 200);
```

Gördüğünüz gibi, sınıfı oluştururken genişlik, yükseklik ve derinlik değerlerini tek bir satırda verdik. Bunu yapılandırıcı sayesinde yapabildik.

## Java&#39;da Sınıf Kurucuları (Constructors)

Sınıf içinde kurucu metotlar tanımlanabilir. Kurucu metotlar bir nesne oluşturulurken yapılması gerekenlerin tanımlandığı metotlardır. Nesne oluşturma aşamasında bu özel metotlar çağrılır. Her sınıfın mutlaka bir kurucu metodu olur. Eğer, siz kod yazarken kurucu metot tanımlamadıysanız Java derleyicisi boş bir taneyi otomatik olarak tanımlayacaktır.

Kurucu metotların ismi sınıf ismiyle aynı olmak zorundadır. Farklı parametreler alan birden fazla kurucu metot tanımlayabilirsiniz.

`````java
public class Puppy {

   public Puppy() {
     // parametresiz bir kurucu metod.
   }

   public Puppy(String name) {
      // name isminde bir değişkenle tanımlanmış bir kurucu metod. 
   }
}
`````

Yukarıdaki örnekte Puppy isminde bir sınıfa ait iki tane kurucu metot görülmektedir. Java&#39;da bir sınıftan yeni bir nesne üretmek istediğinizde &quot;new&quot; anahtar kelimesini kullanmanız gerekmektedir yukarıda da bahsettiğimiz gibi.

````java
Puppy p = new Puppy("Pamuk");
````

Yukarıdaki şekildeki gibi Puppy sınıfına ait bir nesne oluşturmak istediğinizde dikkat ederseniz nesne oluştururken &quot;Pamuk&quot; şeklinde bir isim bilgisi geçtik. Bu nedenle nesne oluşturma işlemi sırasında **public** Puppy(String name) isimli kurucu metot çağrılır ve çalıştırılır.

````java
Puppy p = new Puppy();
````

Yukarıdaki şekildeki gibi parametresiz bir nesne oluşturmuş olsaydık. ``public Puppy() ``isimli kurucu metot çağrılır ve çalıştırılırdı.

## Metotlara Giriş

Yazdığımız kodları çalıştırmak için kullandığımız yapılara metot denir. Metotların genel yapısı aşağıdaki gibidir:

```java
[dönüş türü] [metodun ismi] ( [parametreler] )
{
	[metodun içeriği]
}
```

İlk olarak dönüş türünü inceleyelim. İki farklı tarzda metot vardır:

- **Değer döndüren metotlar:** Bu metotlar çalıştıktan sonra geriye bir değer döndürürler.
- **Değer döndürmeyen metotlar:** Bu metotlar yalnızca iş yapmak amacıyla kullanılırlar, çalıştıktan sonra geriye değer döndürmez.

Metodun döndüreceği verinin türünü _[dönüş türü]_ kısmında belirtiriz. Eğer değer döndürmeyen bir metot yazıyorsak, _[dönüş türü]_ kısmına **void** yazarız.

Daha sonra metodun ismini belirtiriz. Metot isimlendirme kuralları değişken isimlendirme kurallarıyla aynıdır.

Son olarak parantez içinde metodun aldığı parametreleri belirtiriz. Parametre, metoda verilecek değeri ifade eder. Bir metot bir veya daha fazla parametre alabileceği gibi, hiç parametre almayabilir. Parametresiz bir metot yazıyorsak parantez içini boş bırakırız.

Değer döndüren bir metot yazıyorsak, metodun çalışmasının sonlanacağı her durum için bir değer döndürmeliyiz. Değer döndürmeyi **return** deyimiyle yaparız.

Aşağıda örnek bir metot inceleyelim:

```java
int add(int number1, int number2)
{
	int result = number1 + number2;
	return result;
}
```

Bu örnekte toplama işlemi yapan bir metot yazdık. Bu metot parametre olarak 2 sayı alır, bunları toplar ve sonucu döndürür. Yazılan bir metodu aşağıdaki gibi çağırabiliriz:

```java
int result = add(5, 3); // result değişkeninin değeri 8 olur
```

Şimdi, yukarıda oluşturduğumuz _Box_ sınıfına bir metot ekleyelim. Bu metodu, kutunun hacmini hesaplamak için kullanacağız:

```java
class Box
{
	double width;
	double height;
	double depth;

    Box(double myWidth, double myHeight, double myDepth)
	{
		width = myWidth;
		height = myHeight;
		depth = myDepth;
	}

    void volume()
	{
		System.out.println(“Hacmim şudur: ”);
		System.out.println(width * height * depth);
	}
}
```

Şimdi, oluşturduğumuz bu metodu kullanarak kutunun hacmini konsola yazdıralım:

```java
Box box = new Box(150, 100, 200);
box.volume(); // Konsola 3000000 yazar
```

Bu metot bir değer döndürmediği için, sonucunu bir değişkene atamak istediğimizde hata alırız:

```java
Box box = new Box(150, 100, 200);
double volume = box.volume();
// Yukarıdaki satır hataya neden olur, çünkü volume() metodu değer döndürmüyor
```

Şimdi, hacim hesaplayan metodumuzu değer döndüren bir metot haline getirelim:

```java
class Box
{
	double width;
	double height;
	double depth;

    Box(double myWidth, double myHeight, double myDepth)
	{
		width = myWidth;
		height = myHeight;
		depth = myDepth;
	}

    double volume()
	{
		return width * height * depth;
	}
}
```

Artık metodun sonucunu bir değişkene atayabiliriz:

```java
Box box = new Box(150, 100, 200);
double volume = box.volume();
System.out.println(volume); // Konsola 3000000 yazar
```

Farklı nesnelerin alanlarının birbirinden bağımsız olması gibi, metotları da birbirinden bağımsız çalışır. Örneğin, aşağıdaki kodu inceleyelim:

```java
Box box1 = new Box(2, 3, 4);
Box box2 = new Box(5, 6, 7);
System.out.println(box1.volume()); // Konsola 24 yazar
System.out.println(box2.volume()); // Konsola 210 yazar
```

Gördüğünüz gibi, aynı metot farklı nesneler için birbirinden bağımsız çalışır.

### Değer döndürmeyen bir metodu sonlandırmak

Varsayılan olarak, bir metodun içeriğindeki bütün kodlar çalışır. Fakat bazı durumlarda metodun çalışmasını manuel olarak durdurmamız gerekebilir. Bu durumda **return** deyimi kullanılır. Aşağıdaki örneği inceleyelim:

```java
void multiply(int number1, int number2)
{
	if (number1 == 0 || number2 == 0)
	{
		System.out.println(0);
		return;
	}
	
    int result = number1 * number2;
	System.out.println(result);
}
```

Yukarıda, çarpma işlemi yapan bir metot yazdık. Bu metot 2 parametre alır ve bu değerleri birbiriyle çarpar. Daha sonra sonucu konsola yazdırır. Gördüğünüz gibi, eğer çarpanlardan biri sıfırsa, konsola sıfır yazıyor ve metodu sonlandırıyoruz. Çarpma işlemini sadece çarpanların ikisi de sıfırdan farklıysa yapıyoruz. Metodumuz değer döndürmediği için, return deyiminden sonra bir değer yazmıyoruz.

### Sınıf değişkeninin gizlenmesi (instance variable hiding)

Metot içinde tanımladığımız bir değişkenin veya metodun parametrelerinden birinin ismi, sınıfın içinde tanımlanmış değişkenlerden birinin ismiyle aynıysa sınıfın o alanına erişemez oluruz. Aşağıdaki örneği inceleyelim:

```java
class MyClass
{
	int year = 2019;
    
	void myMethod()
	{
		int year = 2020;
		System.out.println(year);
	}
}
```

```java
MyClass myObject = new MyClass();
myObject.myMethod();
```

Yukarıdaki kodu çalıştırdığımızda konsola 2020 yazar; çünkü hem metodun hem de sınıfın içinde _year_ isminde değişkenler vardır. Metodun içindeki _year_ değişkeni, sınıfın alanını gizlemektedir. Bu nedenle konsolda 2019 değil, 2020 yazar.

### this deyimi

Bazen bir sınıf için kod yazarken, kendi sınıfımıza referans vermemiz gerekir. Örneğin, bir önceki başlıkta incelediğimiz sınıf değişkeninin gizlenmesi durumunda sınıfın alanına erişmek isteyelim. Bu durumlarda this deyimini kullanırız:

```java
class MyClass
{
	int year = 2019;
	
    void myMethod()
	{
		int year = 2020;
		System.out.println(this.year);
	}
}
```

```java
MyClass myObject = new MyClass();
myObject.myMethod();
```

Yukarıdaki kodu çalıştırdığımızda konsola 2019 yazar; çünkü _year_ değişkeninden önce **this** deyimini yazdığımız için metodun içindeki _year_ değişkenine değil, sınıfın alanına erişmiş oluruz.

## Metotlara ve Sınıflara Daha Yakından Bakış

Yukarıda sınıfları ve metotları kısaca inceledik. Şimdi biraz daha ayrıntıya girelim.

### Metotları aşırı yüklemek (overloading methods)

Normal olarak, bir sınıf içinde aynı isme sahip birden fazla metot olamaz. Bu durumun bazı eksileri vardır. Örneğin, toplama işlemi yapan iki metot yazalım. Bu metotlardan birisi 2 parametre alırken diğeri 3 parametre alsın:

```java
class Math
{
	int add2(int x, int y)
	{
		return x + y;
	}

    int add3(int x, int y, int z)
	{
		return x + y + z;
	}
}
```

Burada _Math_ isminde bir sınıf oluşturduk ve bu sınıfın içine toplama işlemi yapan 2 metot yazdık. Bu metotlara, isimleri aynı olamayacağı için, _add2()_ ve _add3()_ şeklinde isim vermek zorunda kaldık. Bu yöntemin iyi olmadığını ve kodu karmaşıklaştırdığını söylememize gerek yoktur.

Java’da, bu gibi durumların önüne geçmek için metotları aşırı yükleyebilme özelliği vardır. Aynı işi yapan fakat parametreleri farklı olan metotlara aynı ismi verebiliriz. Bu duruma, **metodu aşırı yüklemek (method overloading)** denir. Yukarıdaki kodu aşağıdaki gibi yazabiliriz:

```java
class Math
{
	int add(int x, int y)
	{
		return x + y;
	}

    int add(int x, int y, int z)
	{
		return x + y + z;
	}
}
```

Gördüğünüz gibi, metodu aşırı yükleyebilmemiz sayesinde, aynı işi yapan fakat parametreleri farklı olan iki metoda farklı isimler vermek zorunda kalmadık. Aşırı yüklenmiş metotlar çağrılırken parametre sayısına bakılır ve uygun metot çalıştırılır:

```java
Math math = new Math();
math.add(1, 2); // 2 parametre alan metot çalıştırılır
math.add(1, 2, 3); // 3 parametre alan metot çalıştırılır
```

Metotları aşırı yükleyebilmek için mutlaka parametrelerinin farklı olması gerekir. **Parametreleri aynı olan birden fazla aşırı yüklenmiş metot olamaz.**

Son olarak şunu belirtelim: aşırı yüklenmiş metotların dönüş türü birbirinden farklı olabilir. Fakat sadece dönüş türünü değiştirmek metodu aşırı yüklemek için yeterli değildir.

### Yapılandırıcıları aşırı yüklemek

Yapılandırıcıların (constructors) özel bir tür metot olduğunu söylemiştik. Aynı şekilde, metotları aşırı yükleyebildiğimiz gibi yapılandırıcıları da aşırı yükleyebiliriz. Bunu görebilmek için Box sınıfımıza geri dönelim:

```java
class Box
{
	int width;
	int height;
	int depth;

    Box(int myWidth, int myHeight)
	{
		width = myWidth;
		height = myHeight;
		depth = 0;
	}

    Box(int myWidth, int myHeight, int myDepth)
	{
		width = myWidth;
		height = myHeight;
		depth = myDepth;
	}
}
```

Gördüğünüz gibi, Box sınıfının içine 2 farklı yapılandırıcı yazdık. Biri bütün alanlara değer verirken, diğeri yalnızca genişlik ve yüksekliği ayarlamak için kullanılıyor.

```java
Box box1 = new Box(10, 15);
Box box2 = new Box(10, 15, 20);

System.out.println(“Birinci kutu:”);
System.out.println(box1.width);
System.out.println(box1.height);
System.out.println(box1.depth);

System.out.println(“İkinci kutu:”);
System.out.println(box2.width);
System.out.println(box2.height);
System.out.println(box2.depth);
```

Yukarıdaki kodu çalıştırdığımız zaman çıktısı şu şekilde olur:

```java
Birinci kutu:
10
15
0
İkinci kutu:
10
15
20
```



### Bir yapılandırıcıdan diğerini çağırmak

Birden fazla yapılandırıcısı olan sınıflarda bir yapılandırıcıda diğer yapılandırıcıyı çağırmak için, daha önce de gördüğümüz **this** deyimini kullanırız. Daha önce this deyimini nesne olarak kullanmıştık. Buradaki kullanımda ise this deyimi yapılandırıcı (metot) halindedir. Aşağıdaki örneği inceleyelim:

```java
class Box
{
	int width;
	int height;
	int depth;

    Box(int myWidth, int myHeight)
	{
		this(myWidth, myHeight, 0);
		System.out.println(“Diğer yapılandırıcı çağrılıyor...”);
	}

    Box(int myWidth, int myHeight, int myDepth)
	{
		width = myWidth;
		height = myHeight;
		depth = myDepth;
	}
}
```

Yukarıda, ilk yapılandırıcıyı çalıştırdığımız zaman diğer yapılandırıcıya gideriz. Bu tarz kullanımlarda dikkat etmemiz gereken önemli bir nokta vardır: this deyimi kullanarak başka bir yapılandırıcıyı çağırıyorsak, bunu ilk satırda yapmalıyız, yani metoda ilk olarak bu satırla başlamalıyız. Örneğin, aşağıdaki kod hataya sebep olur:

```java
class Box
{
	int width;
	int height;
	int depth;

    Box(int myWidth, int myHeight)
	{
		System.out.println(“Diğer yapılandırıcı çağrılıyor...”);
		this(myWidth, myHeight, 0);
		// Yukarıdaki kod hataya sebep olur; çünkü this çağrımından
		// önce başka bir kod yazılmış
	}

    Box(int myWidth, int myHeight, int myDepth)
	{
		width = myWidth;
		height = myHeight;
		depth = myDepth;
	}
}
```



### Özyineleme (Recursion)

Bir metodun kendini çağırmasına **özyineleme (recursion)** denir. Bu tarz metotlara **özyineli (recursive) metot** denir. Özyineli algoritmalara verilebilecek en meşhur örnek faktöriyel hesabıdır. Bir sayının faktöriyeli aşağıdaki gibi hesaplanır:

​		n! = n * (n – 1)!
​		f(n) = n * f(n – 1)

Gördüğünüz gibi, sayıyı 1 azaltarak yine faktöriyel fonksiyonunu çağırıyoruz. Java’da da bu tarz metotlar yazabiliriz. Özyineli metot yazarken dikkat etmemiz gereken önemli bir nokta, metoda bir çıkış koşulu yazmaktır. Eğer metoda bir çıkış noktası yazmazsak, sonsuza kadar aynı metot çağrılmaya devam eder. Aşağıdaki örneği inceleyelim:

```java
int factorial(int number)
{
	return number * factorial(number – 1);
}
```

Burada özyineli bir metot yazdığımızı görebilirsiniz; çünkü metodun içinde yine aynı metodu çağırıyoruz. Fakat bu metoda bir çıkış noktası yazmadığımız için metodumuz sonsuza kadar kendini çağırır ve bir süre sonra _StackOverflowException_ hatası alırız. Aşağıda düzgün bir özyineli metot yazdık:

```java
int factorial(int number)
{
	if (number == 1)
	{
		return 1;
	}

    return number * factorial(number – 1);
}
```

Yukarıda dikkat etmeniz gereken nokta, özyineli metoda bir çıkış noktası yazmış olmamızdır. Eğer parametre olarak aldığımız sayı 1 ise metodumuz 1 değerini döndürür; çünkü 1’in faktöriyeli 1’dir. Diğer durumlarda ise metodumuz kendini çağırmaya devam eder.

```java
System.out.println(factorial(4)); // Konsola 24 yazar
System.out.println(factorial(5)); // Konsola 120 yazar
```



## Erişim Denetimi

Nesne yönelimli programlamanın 4 temel kavramından biri **kapsüllemedir (encapsulation).** Bu kavram basitçe, sınıfın içine yazdığımız alanları ve metotları gizleyebileceğimizi ifade eder. Bu gizleme farklı seviyelerde olabilir. Alanları ve metotları gizleyebilmek için **erişim belirteçleri**ni **(access modifiers)** kullanırız.

### Erişim Belirteçleri

Java’da 4 adet erişim belirteci vardır:

- **public**: Bu erişim belirteciyle belirtilen bir alana veya metoda her yerden erişilebilir. **public** deyimini kullanır. Gizlilik seviyesi en düşük olan erişim belirtecidir.
- **default:** Yalnızca aynı paket içinden erişilebilir. Bu belirteç _default_ olarak isimlendirilmesine rağmen, herhangi bir deyim yazılmaz.
- **protected:** Yalnızca aynı paket içinden veya alt sınıflardan erişilebilir. **protected** deyimini kullanır.
- **private:** Yalnızca aynı sınıf içinden erişilebilir. private deyimini kullanır. Gizlilik seviyesi en yüksek olan erişim belirtecidir.

Aşağıdaki örnekleri inceleyelim:

```java
package package1;

class Box
{
	public int width;
	public int height;
	public int depth;
}
```

```java
package package2;

class Main
{
	public static void main(String[] args)
	{
		Box box = new Box();
		box.width = 100;
	}
}
```

Yukarıdaki örnekte _Box_ ve _Main_ sınıfları farklı paketler içindedir. Buna rağmen, _Box_ sınıfının alanları **public** olarak belirtildiği için, farklı pakette olmasına rağmen _Main_ sınıfından erişilebilir.

```java
package package1;

class Box
{
	int width;
	int height;
	int depth;
}
```

```java
package package2;

class Main
{
	public static void main(String[] args)
	{
        Box box = new Box();
	    box.width = 100; // Bu satır hataya sebep olur
	}
}
```

Yukarıdaki örnekte Box sınıfının alanlarına erişim **default** olarak belirlenmiştir, yalnızca **package1** paketinin içinden erişilebilir. Bu yüzden, _Main_ sınıfı **package2** paketi içinde olduğu için _Box_ sınıfının alanlarına erişmeye çalışıldığında hata fırlatılır.

```java
package package1;

class Box
{
	private int width;
	private int height;
	private int depth;
}
```

```java
package package1;

class Main
{
	public static void main(String[] args)
    {
		Box box = new Box();
		box.width = 100; // Bu satır hataya sebep olur
	}
}
```

Yukarıdaki örnekte _Box_ ve _Main_ sınıfları aynı paket içinde olmalarına rağmen, _Main_ sınıfından _Box_ sınıfının alanlarına erişilemez. _Box_ sınıfının alanları private olarak belirtildiği için yalnızca aynı sınıf içinden erişilebilir.

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



## Statik Değişkenler

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

### Statik değişkenlere ilk değer atamak

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

## İç İçe Sınıflar (Nested Classes)

Şu ana kadar sınıfların içinde değişkenlerin ve metotların bulunabileceğini biliyorduk. Fakat sınıfların gücü bununla sınırlı değildir. Sınıfların içinde başka sınıflar da tanımlayabiliriz. Bu şekilde **iç içe sınıflar (nested classes)** oluşturabiliriz.

İç içe tanımlanan sınıfları tabir ederken, diğerini kapsayan sınıfa **dıştaki sınıf** (outer class), içeride bulunan sınıfa ise **içteki sınıf** (inner class) deriz. Bir sınıf oluşturulduğunda bütün alanlarının ve metotlarının hafızaya yüklendiğini söylemiştik. Bu durum içteki sınıflar için de geçerlidir. İç içe sınıflarda, içteki sınıfı kullanabilmemiz için dıştaki sınıfın bir örneğinin alınması gerekir.

İçteki sınıf, dıştaki sınıfın bütün alanlarına ve metotlarına erişebilir. Dıştaki sınıf tek olmasına rağmen, içteki sınıfın birden fazla örneği alınabilir; bu gibi durumlarda içteki sınıftan oluşturulan nesnelerin hepsi aynı dıştaki sınıfa erişir.

```java
class Outer
{
	public void run()
	{
		System.out.println("Dıştaki sınıfın metodu çalıştı.");
		Inner inner = new Inner();
		inner.run();
	}

    class Inner
	{
		public void run()
		{
			System.out.println("İçteki sınıfın metodu çalıştı.");
		}
	}
}
```

Yukarıdaki örnekte iç içe 2 sınıf oluşturduk. Her ikisine de run() adında metotlar yazdık.

```java
Outer outer = new Outer();
outer.run();
```

Yukarıdaki kodu çalıştırdığımızda çıktısı aşağıdaki gibi olur:

```java
Dıştaki sınıfın metodu çalıştı.
İçteki sınıfın metodu çalıştı.
```



Şimdi de aşağıdaki örneği inceleyelim:

```java
class Outer
{
	private int number = 10;
	
    public void run()
    {
		System.out.println(number);
        
		Inner inner = new Inner();
		inner.run();
		
        System.out.println(number);
	}

    class Inner
	{
		public void run()
		{
			number++;
		}
	}
}
```

Yukarıdaki örnekte dıştaki sınıfın içinde _number_ isminde bir değişken oluşturduk. İçteki sınıfta ise bu değişkene erişip değerini 1 artırdık. Dıştaki sınıfın _run()_ metodunu çalıştırdığınızda çıktısı aşağıdaki gibi olur:

```java
10
11
```

Buradan da görebileceğiniz gibi, içteki sınıflar dıştaki sınıfların elemanlarına erişebilir.

İç içe sınıflarla ilgili dikkat etmemiz gereken bazı noktalar vardır. İlk olarak, dıştaki sınıf olmadan içteki sınıfın bir örneğini alamayız. Ayrıca, içteki sınıfın içine statik bir değişken veya metot yazamayız. Bu kısıtlamaların önüne geçmek için içteki sınıfı statik olarak tanımlamalıyız.

### İçteki sınıfı statik yapmak

Hatırlarsınız: bir metodu kullanabilmek için tanımlandığı sınıfın bir örneğini almamız gerekiyordu. Bunun önüne geçmek için metodu statik olarak belirtiyorduk. Aynı durum içteki sınıflar için de geçerlidir: bu sınıfları kullanabilmek için dıştaki sınıfın örneğini almamız gerekir. Bunun önüne geçmek için içteki sınıfı statik olarak tanımlamalıyız:

```java
class Outer
{
	static class Inner
	{
		public void run()
		{
			System.out.println("İçteki sınıfın metodu çalıştı");
		}
	}
}
```

Şimdi aşağıdaki kodu çalıştırabiliriz:

```java
Outer.Inner inner = new Outer.Inner();
inner.run();
```

Gördüğünüz gibi, artık içteki sınıfın bir örneğini alabilmek için dıştaki sınıfa ihtiyacımız yoktur. Fakat, statik metotların sınıfın statik olmayan alanlarına erişemeyeceğini hatırlayın. Aynı durum burada da geçerlidir: içteki statik sınıflar dıştaki sınıfın statik olmayan alanlarına erişemez:

```java
class Outer
{
	private int number = 10;
	
    public void run()
	{
		System.out.println(number);
        
		Inner inner = new Inner();
		inner.run();
        
		System.out.println(number);
	}

    static class Inner
	{
		public void run()
		{
			number++; // Bu satır hataya neden olur
		}
	}
}
```

Yukarıdaki kod hataya neden olur; çünkü statik olarak belirlenmiş içteki Inner sınıfı dıştaki sınıfın statik olmayan number değişkenine erişmeye çalışıyor.

### Değişken sayıdaki metot argümanları (Varargs: variable-length arguments)

Metotların nasıl parametre aldığını daha önce görmüştük. Örneğin aşağıda tanımladığımız toplama metodu 2 parametre almaktadır:

```java
public int add(int x, int y)
{
	return x + y;
}
```

Bu metot 2 sayıyı toplar ve sonucunu döndürür. Peki, ya 3 sayıyı toplamak istersek? Java’da metotları aşırı yükleyebildiğimizi görmüştük. Şimdi bu metodu aşağıdaki gibi aşırı yükleyelim:

```java
public int add(int x, int y)
{
	return x + y;
}

public int add(int x, int y, int z)
{
	return x + y + z;
}
```

Artık aynı metodun 2 ve 3 parametre alan farklı varyasyonları var. Peki, ya 4 sayıyı toplamak istiyorsak? Aynı şekilde metodu aşırı yüklemeye devam edebiliriz:

```java
public int add(int x, int y)
{
	return x + y;
}

public int add(int x, int y, int z)
{
	return x + y + z;
}

public int add(int x, int y, int z, int t)
{
	return x + y + z + t;
}
```

Fakat bu yöntemin pek hoş olmadığı gözünüzden kaçmamıştır. 5 veya 6 sayıyı toplamak istediğimizde metodu tekrar aşırı yüklememiz gerekir. Bu durum kod fazlalığına neden olur. Buradaki sorun, metodun alacağı parametre sayısının belirsiz (değişken) olmasıdır. Toplama işleminde birden fazla toplanan vardır: fakat sayısı değişken olabilir. Java, parametre sayısını önceden bilemeyeceğimiz bu gibi durumlar için metodun **değişken sayıda argüman (varargs)** almasına izin verir.

Değişken sayıda parametre tanımlamak için değişken türünden sonra 3 nokta koyarız. Artık, metodu çağırırken istediğimiz sayıda parametre verebiliriz: bunların her biri için metodu aşırı yüklememiz gerekmez. Java bu parametreleri bize bir dizi (array) halinde sunar.

```java
public int add(int... numbers)
{
	int sum = 0;
	for (int number : numbers)
	{
		sum += number;
	}
	return sum;
}
```

Yukarıda add() metodumuzu yeniden düzenledik ve toplama işlemine giren eleman sayısının değişken olmasını sağladık. Artık metoda parametre olarak farklı sayıda toplanan verebiliriz:

```java
System.out.println(add(2, 3)); // Konsola 5 yazar
System.out.println(add(1, 5, 7)); // Konsola 13 yazar
System.out.println(add(9)); // Konsola 9 yazar
System.out.println(add(10, 15, 20, 25)); // Konsola 70 yazar
```

Değişken sayıdaki argümanlar bir dizi halinde sunulur. Dizinin elemanı olmayabilir. Yani, hiç argüman vermesek de değişken sayıda argüman alan metot yine çalışır.

```java
System.out.println(add()); // Konsola 0 yazar
```

Yukarıda hiç argüman vermememize rağmen metodun yine çalıştığını görürüz. Değişken sayıda argüman alan metot yazarken bunu göz önünde bulundurmak gerekir.

Değişken sayıda parametre alan metotları aşırı yükleyebilirsiniz. Aşağıdaki örneği inceleyelim:

```java
public int add(int... numbers)
{
	int sum = 0;
	for (int number : numbers)
	{
		sum += number;
	}
	return sum;
}

public double add(double... numbers)
{
	double sum = 0.0;
	for (double number : numbers)
	{	
		sum += number;
	}
	return sum;
}
```

```java
System.out.println(add(5, 4, 3)); // Konsola 12 yazar
System.out.println(add(9.0, 8.5, 8.0)); // Konsola 25.5 yazar
```



### Varargs ve belirsizlik (Ambiguity)

Değişken sayıda parametre (varargs) alan metotları aşırı yüklediğinizde ortaya belirsizlik çıkabilir. Yukarıdaki örnekte 2 farklı _add()_ metodu oluşturmuştuk. Bu durumda aşağıdaki kodu çalıştırdığımızı düşünelim:

```java
add();
```

Bu satır belirsizliğe neden olur; çünkü metoda parametre vermedik. Bu durumda Java ortamı aşırı yüklenmiş 2 metottan hangisini çalıştıracağına karar veremez; çünkü bu kullanım her ikisine de uygundur.

Başka bir belirsizlik örneği inceleyelim:

```java
public int add(int... numbers)
{
	// metodun içeriği
}

public int add(int number, int... numbers)
{
	// metodun içeriği
}
```

İki farklı add() metodu tanımladık. Şimdi aşağıdaki kodu çalıştıralım:

```java
add(1);
```

Bu kod belirsizliğe sebep olur; çünkü metodun her 2 tanımına da uygundur. Dolayısıyla Java ortamı hangisini çalıştıracağına karar veremez.

## Java&#39;da Paketler (Packages)

Java&#39;da sınıfları (classes) ve arayüzleri (interfaces) bir araya toplamak için paket kavramı vardır. Birbiriyle mantıksal ilişkiye sahip sınıflar bir paket altına hiyerarşik bir şekilde toplanır. Sizler de kendi Java uygulamalarınızı geliştirirken yeni paketler oluşturup birbiriyle alakalı sınıfları bir araya toplayabilirsiniz.

`````java
import java.io.*;
`````

Yukarıdaki Java paketinde giriş/çıkış işlemleriyle ilgili sınıflar **java.io** isimli bir paket altına toplanmıştır. Sondaki \* işareti ise **java.io** paketi altındaki tüm sınıfları projeye dahil et anlamına gelmektedir.