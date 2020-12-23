# Java&#39;da Döngü Mekanizmaları

Programlama dilleri, kodun akış yönünü belirlemek için kontrol mekanizmaları kullanır. Java’da kodlar sırayla satır satır ilerler; fakat bu her zaman böyle olmak zorunda olduğu anlamına gelmez. Kontrol mekanizmalarını kullanarak kodda atlamalar, seçimler, hata ayıklamalar yapabilir veya döngüye girebiliriz.

Kontrol mekanizmalarını genel olarak 3 gruba ayırabiliriz:

- **Seçim ifadeleri**: Belli bir koşula bağlı olarak koda yön vermemizi sağlar.
- **Döngü ifadeleri:** Kodun belirli kısımlarını defalarca çalıştırmamızı sağlar.
- **Atlama ifadeleri**: Kodun belirli kısımlarını atlamamızı sağlar.

Seçim ifadeleri konusunu daha önce işlemiştik (if, if else, switch yapıları). Şimdi **döngü ifadeleri** ve **atlama ifadeleri** konularını ayrıntılı olarak inceleyelim.

## Döngü İfadeleri

3 farklı döngü ifadesi vardır: **for**, **while** ve **do-while**. Bu ifadeler kodumuzun belirli kısımlarının döngüye girmesini ve birden fazla kez çalışmasını sağlar. Döngüler bir koşula bağlanır ve bu koşul var olduğu sürece aynı kod bloğu çalışmaya devam eder. Koşul artık sağlanmıyorsa döngü sona erer.

### While Döngüsü

Java’nın en temel döngüsü while döngüsüdür. Hatta diyebiliriz ki, diğer bütün döngü türleri kodumuz derlendiğinde while bloğuna dönüştürülür. while döngüsünün çalışma mantığı basittir: while bloğu içindeki kod, bağlı olduğu koşul sağlandığı sürece çalışır. while bloğunun yapısı şu şekildedir:

```java
while ( [koşul] )
{
[döngüye girecek kodlar]
}
```

Burada belirtilen _koşul_, **boolean** bir ifadedir. Bu koşul **true** olduğu sürece döngü devam eder. Koşul **false** olursa döngü sonlanır.

Koşul ifadesi parantez içine yazılır. Eğer döngüye girecek kod tek satırdan oluşuyorsa blok açmaya gerek yoktur; fakat birden fazla satırdan oluşuyorsa mutlaka blok açılmalıdır.

```java
System.out.println("10'dan geriye sayıyorum...");
int counter = 10;

while (counter >= 0)
{
	System.out.println(counter);
	counter--;
}
```

Yukarıdaki kod çalıştırıldığında çıktısı aşağıdaki gibi olur:

```java
10'dan geriye sayıyorum...
10
9
8
7
6
5
4
3
2
1
0
```

Görüldüğü gibi koşul var olduğu sürece kodumuz çalışmış, sonra döngü sona ermiştir.

Döngülerin içeriği olmak zorunda değildir. Bazı durumlarda döngüye girecek kod olmasa bile döngüye girebiliriz. Aşağıdaki örneği inceleyelim:

```java
int left = 100, right = 200;
while (++left < --right);
System.out.println("100 ile 200'ün ortası: " + left);
```

Bu algoritma, 100 ile 200’ün arasında tam ortada bulunan sayıyı bulmamızı sağlar. Kodu çalıştırdığımızda çıktısı şu şekilde olur:

```java
100 ile 200'ün ortası: 150
```

Gördüğünüz üzere, içeriği olmasa bile bazı durumlarda döngüler fayda sağlayabilir.

Yani while döngüsü genellikle işlemin kaç kez tekrar edeceği bilinmediği durumda kullanılır. Örneğin: müşterinin hesabına giriş şifresini kaç kez yanlış gireceğini bilemeyiz. Bu nedenle bu tarz durumlarda "while" döngüsü tercih edilir hemen aşağıdaki örnekte olduğu gibi.

```java
Scanner scanner = new Scanner(System.in);
String customerPassword = "12345";
boolean passwordSuccessfull = false;

while(!passwordSuccessfull) {
	
	System.out.println("Hesap şifrenizi giriniz:");
	String typedPassword = scanner.next();
	
    if(customerPassword.contentEquals(typedPassword)) {
		passwordSuccessfull = true;
		System.out.println("Sisteme başarılı giriş yaptınız!");
	}
}
```

### Do-While Döngüsü

Yukarıda gördüğünüz gibi, while döngüsünde koşul döngünün başlangıcında test edilir. Eğer koşul sağlanmıyorsa (**false** ise) döngüye girilmez. Kısacası, yazdığınız programlarda while döngüsüne hiç girilmediği durumlar da yaşanabilir.

Fakat bazen, döngü koşulu sağlanmasa bile döngüye en az bir kere girilmesini isteyebiliriz. Eğer döngü koşulu döngünün başında değil, sonunda test edilirse, döngü en az bir kere işletilir. do-while döngüsü bunu sağlar. Bu döngünün while döngüsünden tek farkı, döngü koşulunun döngünün sonunda test edilmesidir.

Bu döngünün yapısı aşağıdaki şekildedir:

```java
do
{
	[döngüye girecek kodlar]
} while ( [koşul] );
```

Gördüğünüz gibi, koşul döngünün sonunda test edilir. Bu durumda, koşul false olsa bile döngü en az bir kere çalıştırılmış olur. Bu şekilde döngü yazmak istediğiniz durumlarla karşılaşacaksınız. Aşağıdaki örneği inceleyelim:

```java
int year = 2020;
do
{
	System.out.println(“Döngü işletiliyor..”);
	year++;
} while (year < 2020);
```

Bu kod çalıştırıldığında çıktısı aşağıdaki gibi olur:

```java
Döngü işletiliyor..
```

Gördüğünüz gibi _year değişkeni_ 2020’den küçük olmamasına rağmen döngü en az bir kere çalıştırılmıştır.

### For Döngüsü

Bu döngünün basit örneklerini daha önce görmüştük. Şimdi ayrıntılı inceleyelim.

2 farklı for döngüsü vardır. İlk for döngüsü, Java’nın ilk versiyonundan beri var olan geleneksel tarzdaki for döngüsüdür. Diğeri ise JDK 5 ile eklenen for-each döngüsüdür.

Geleneksel for döngüsünün yapısı şu şekildedir:

```java
for ( [döngü başlangıcı] ; [döngü koşulu] ; [döngü adımı] )
{
	[döngüye girecek kodlar]
}
```

for döngüsü şu şekilde işler: İlk olarak döngüde sayaç işlevi görecek bir değişken oluşturulur. Bu değişkenin ilk değeri _[döngü başlangıcı]_ ile belirtilen kısımda verilir. Bu değişken _[döngü adımı]_ kısmında isteğe göre artırılır veya azaltılır. Döngünün hangi koşulda çalışacağı ise [döngü koşulu] kısmında boolean bir ifadeyle belirtilir. Aşağıdaki örneği inceleyelim:

```java
for (int i = 1; i < 10; i++)
{
	System.out.println(i);
}
```

Bu örnekte int türünde **_i_** isminde bir döngü sayacı oluşturulur. Bu sayaç, döngünün her adımında **_i++_** ifadesiyle 1 artırılır. Bu döngü **_i_** sayacının değeri 10’dan küçük olduğu sürece çalışır. Bu döngü çalıştırıldığı zaman çıktısı aşağıdaki gibi olur:

```java
1
2
3
4
5
6
7
8
9
```

for döngüsünün içindeki 3 kısmın çalıştırılma sırası şu şekildedir:

- İlk olarak **_[döngü başlangıcı]_** kısmı çalışır. Bu kısım sadece bir kez çalıştırılır, döngü boyunca bir daha çalıştırılmaz.
- Daha sonra **_[döngü koşulu]_** kısmı çalıştırılır. Eğer sonuç **true** ise döngüye girer. Bu kısım her döngünün başında tekrar kontrol edilir. Eğer sonuç **false** ise döngü sonlandırılır.
- Her döngünün sonunda **_[döngü adımı]_** kısmı çalıştırılır. Döngüde en son çalışan kısım burasıdır.

Şunu da belirtmek gerekir ki, **_[döngü başlangıcı]_** kısmında oluşturulan değişkenin kapsamı for döngüsüyle sınırlıdır. Bu değişkene for döngüsü dışında ulaşılamaz.

### For Döngüsü Varyasyonları

Geleneksel for döngüsünün farklı varyasyonları olabilir. Döngünün içinde 3 farklı kısım olduğundan bahsetmiştik. Bu kısımların hiçbiri zorunlu değildir. Aşağıdaki örnekleri inceleyelim:

```java
int i = 1;
for ( ; i < 10; i++)
{
	System.out.println(i);
}
```

Bu örnekte döngü sayacı, for döngüsünden önce oluşturulmuştur. Ayrıca **_[döngü başlangıcı]_** kısmının boş bırakıldığına dikkatinizi çekerim. Bu durumda döngü sayacı olarak döngünün dışında oluşturulan bir değişken kullanılır, ilk değeri de yine döngüden önce verilmiştir. Şunu da belirtelim ki, for döngüsünü bu örnekte olduğu gibi kullanırsanız, döngü sayacına for döngüsünden sonra da erişebilirsiniz.

```java
int i = 1;
for ( ; i < 10; )
{
	System.out.println(i);
	i++;
}
```

Bu örnekte ise hem **_[döngü başlangıcı]_** kısmının hem de **_[döngü adımı]_** kısmının boş bırakıldığını görüyoruz. Döngü sayacını parantez içinde artırmak yerine, döngü kodlarının içinde artırıyoruz.

```java
for ( ; ; )
{
	// sonsuz döngü
}
```

Bu örnekte ise bütün kısımların boş bırakıldığını görüyoruz. Bu tarz for döngüleri sonsuz döngü oluşturur. Sonsuz döngü, hiçbir koşulda sona ermeyen döngü demektir. Bu döngüde hiçbir koşul test edilmediği için döngü her zaman çalışır. Yani, eğer bu kodu çalıştırırsanız, bilgisayarınız sonsuza kadar bu döngüyü işletecektir.

### Break Deyimi

Buraya kadar gördüğümüz bütün döngüler belirlediğimiz bir koşula göre kontrol ediliyor ve bu koşul sağlandığı sürece çalışıyordu. Bazı durumlarda, döngü koşulu sağlansa bile başka bir nedenden ötürü döngüyü sonlandırmak isteyebiliriz. Bu tarz durumlarda **break** deyimini kullanırız. Bu deyim, içinde kullanıldığı döngüyü anında sonlandırır. Aşağıdaki örneği inceleyelim:

```java
boolean continueLoop = true;

for (int i = 2; i <= 100; i += 2)
{
	if (!continueLoop)
	{
		break;
	}
    
    System.out.println(i);
    
    if (i == 50)
	{
		continueLoop = false;
	}
}
```

Bu örnekte, 2’den 100’e kadar olan çift sayılar konsola yazdırılıyor. Fakat döngü ayrıca boolean bir değişkenle kontrol ediliyor. Döngü sayacı 50’ye ulaştığında bu değişken false olarak ayarlanıyor. Döngünün her adımında ise bu değişken kontrol ediliyor; eğer false ise döngü break deyimiyle sonlandırılıyor. Bu kod çalıştırıldığında, 2’den 50’ye kadar olan çift sayıların konsola yazdırıldığını görürüz. Çünkü 50’ye ulaştıktan sonra break deyimiyle döngü sonlandırılmıştır. Gördüğünüz gibi, aslında döngü koşulu sağlanmasına rağmen manuel olarak döngü sonlandırılmıştır.

### Continue Deyimi

Bazı durumlarda döngünün sadece o adımının sonlanmasını, diğer adımların ise çalışmaya devam etmesini isteriz. Bu gibi durumlarda **continue** deyimini kullanırız. Aşağıdaki örneği inceleyelim:

```java
for (int i = 0; i <= 10; i += 2)
{
	if (i == 4)
	{
		continue;
	}
	
    System.out.println(i);
}
```

Bu örnekte 0’dan 10’a kadar olan çift sayılar konsola yazdırılıyor. Fakat döngü sayacı 4 olduğunda continue deyimi çalıştırılıyor. continue deyimi kullanıldığında döngünün geri kalanı çalıştırılmaz; fakat diğer adımlar çalışmaya devam eder. Bu kod çalıştırıldığında çıktısı aşağıdaki gibi olur:

```java
0
2
6
8
10
```

Gördüğünüz gibi, continue deyimi çalıştırıldığı için 4 konsola yazılmamış; fakat diğer değerler yazılmıştır.

### For-Each Döngüsü

Çoğu zaman for döngüsünü, bir dizinin veya koleksiyonun içindeki elemanları gezmek için kullanırız. Aşağıdaki örneği inceleyelim:

```java
int[] numbers = { 1, 2, 3, 4, 5 };

for (int index = 0; index < numbers.length; index++)
{
	int number = numbers[index];
	System.out.println(number);
}
```

Bu örnekte 5 elemanlı bir dizi oluşturuluyor ve for döngüsü kullanarak bu dizinin elemanları konsola yazdırılıyor. Dizinin hiçbir elemanının atlanmadığına dikkat edelim.

Bu gibi durumlar (bir dizinin veya koleksiyonunun bütün elemanlarını gezmek) için **for-each** döngüsü geliştirilmiştir. Bu döngünün yapısı aşağıdaki gibidir:

```java
for ( [elemanların türü] [değişken ismi] : [dizi veya koleksiyon] )
{
	[döngüye girecek kodlar]
}
```

İlk olarak elemanların türü belirtilir. Bu tür, dizinin veya koleksiyonun içindeki elemanların türüdür. Daha sonra bir değişken ismi verilir. Bu isim, döngünün her adımında sıradaki elemanı belirtir. Sonra iki nokta konulur ve ardından dizinin veya koleksiyonun ismi yazılır.

Örneğin, yukarıdaki örneği for-each döngüsüyle aşağıdaki gibi yazabiliriz:

```java
int[] numbers = { 1, 2, 3, 4, 5 };

for (int number : numbers)
{
	System.out.println(number);
}
```

Sonucu aynı olmasına rağmen, bu kodun geleneksel for döngüsüne göre daha kısa olduğunu fark etmişsinizdir.

Bu döngüyle ilgili belirtmemiz gereken önemli bir nokta vardır. for-each içinde belirtilen döngü değişkeni **dolaylı olarak sabittir** (**effectively final**). Yani, döngü içinde bu değişkene atama yapamazsınız. Örneğin, aşağıdaki kod hata fırlatır:

```java
int[] numbers = { 1, 2, 3, 4, 5 };

for (int number : numbers)
{
	number = 10; // Bu satır hataya neden olur.
				// for-each içinde tanımlanan değişkenlere değer atayamazsınız
}
```

### İç  İçe Döngüler (Nested Loops)

Döngüler iç içe tanımlanabilir. Bunlara **nested loops** denir. Örneğin: çarpım tablosunu ekrana yazdırmak için iç içe 2 tane döngü tanımlamak gerekir.

```java
for(int i = 1; i <= 9; i++) {
	for(int j = 1; j <= 9; j++) {
		int result = i * j;
		String formattedOutput = String.format("(%d x %d)=%d",i,j,result);
		System.out.println(formattedOutput);
	}
}
```