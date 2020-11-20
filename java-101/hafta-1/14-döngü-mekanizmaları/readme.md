## Java&#39;da Döngü Mekanizmaları

Döngüler bilgisayara tekrarlı işleri yaptırabilmek için gereklidir. Örneğin, 1000&#39;e kadar olan tüm tek sayıları bulmak tekrarlı bir işlemdir. Müşteri şifresini tekrar tekrar girmeye çalışmakta tekrarlı bir işlemdir.

Döngüler 4 ana bileşenden oluşur:

- Döngünün iterasyon sayısını tutacak değişkene ilk değer atanır.
- Döngünün sonlandırılması veya devam etmesi için bir koşul cümlesi belirtilir.
- Döngünün her iterasyonda ne kadar artıp ne kadar azalacağı belirtilir.

&quot;for&quot; Döngüsü

Bu döngü tipinde iterasyon sayısı belli bir miktardadır. Döngünün maksimum kaç kez işletileceği önceden bellidir.

**for** ( initialization; condition; incr/decr){

_//statement or code to be executed_

}

**for** (int i=-100; i \&lt;1000; i++){

_// tek sayıları bul_

**if** (i %2==-1|| i %2==1){

System.out.println(&quot;Tek sayı: &quot;+ i);

}

}

Döngüler iç içe tanımlanabilir. Bunlara nested loops denir. Örneğin: çarpım tablosunu ekrana yazdırmak için iç içe 2 tane döngü tanımlamak gerekir.

**for** (int i =1; i \&lt;=9; i++){

**for** (int j =1; j \&lt;=9; j++){

int result = i \* j;

String formattedOutput = String.format(&quot;(%d x %d)=%d&quot;,i,j,result);

System.out.println(formattedOutput);

}

}

&quot;while&quot; Döngüsü

&quot;for&quot; döngüsüne benzerdir. &quot;while&quot; döngüsü genellikle işlemin kaç kez tekrar edeceği bilinmediği durumda kullanılır. Örneğin: müşterinin hesabına giriş şifresini kaç kez yanlış gireceğini bilemeyiz. Bu nedenle bu tarz durumlarda &quot;while&quot; döngüsü tercih edilir.

Scanner scanner = **new** Scanner(System.in);

String customerPassword =&quot;12345&quot;;

boolean passwordSuccessfull = **false** ;

**while** (!passwordSuccessfull){

System.out.println(&quot;Hesap şifrenizi giriniz:&quot;);

String typedPassword = scanner.next();

**if** (customerPassword.contentEquals(typedPassword)){

passwordSuccessfull = **true** ;

System.out.println(&quot;Sisteme başarılı giriş yaptınız!&quot;);

}

}

&quot;do-while&quot; Döngüsü

&quot;while&quot; döngüsünün çok benzeridir. Bu döngüde koşul en sonda yer aldığı için en az bir kez tur çalıştırılır.

int i =1;

**do** {

System.out.println(&quot;Sadece bir kez çalıştım :) &quot;);

i++;

} **while** (i==1);

&quot;break&quot; ve &quot;continue&quot; Komutu ile Döngüyü Kontrol Etmek

İşletilen bir döngüyü bir koşul sonucu sonlandırmak için &quot;break&quot; komutu kullanılır. &quot;continue&quot; kelimesi ile döngünün devam etmesi sağlanır. Aşağıdaki örnekte döngü içinde ilk 50 değeri continue ile atlayacağız. Dizinin ortasına geldiğimizde ise break komutuyla döngüyü kıracağız.

**for** (int i=1; i \&lt;=100; i++){

**if** (i \&lt;50){

System.out.println(&quot;Daha yarısına gelmedim!&quot;);

**continue** ;

}

**if** (i ==50){

System.out.println(&quot;Dizinin ortasındayım!&quot;);

**break** ;}}

Java Sayı ve Yazı İşlemleri (Numbers &amp; Strings)

Java&#39;da ilkel (Primitive) veri tiplerinden bahsetmiştik. Bu veri tiplerinin bir de referans özellikte olanları da vardır. Bunlar sınıf tabanlı veri tipleri diyoruz. Örneğin: tamsayı olan ve ilkel bir veri tipi olan &quot;int&quot; tipinin bir de &quot;Integer&quot; şeklinde bir sınıf ile temsil edildiği veri tiplerine referans veri tipi diyoruz.

Bunun yanında matematiksel işlemlere yardımcı olmak ve matematiksek fonksiyonları hazır kullanmak için Java&#39;da Math isminde bir hazır tanımlanmış sınıf vardır. Aşağıdaki örnekler kodların içinde gerekli açıklamalar verilmiştir.

Örnek:

_// Veri dönüşümü_

Long personelId = **new** Long(100);

int personalAsId = personelId.intValue();

byte personalAsByte = personelId.byteValue();

short personalAsShort = personelId.shortValue();

double personalAsDouble = personelId.doubleValue();

float personalAsFloat = personelId.floatValue();

String personalAsText = personelId.toString();

System.out.println(personalAsId);

System.out.println(personalAsByte);

System.out.println(personalAsShort);

System.out.println(personalAsDouble);

System.out.println(personalAsFloat);

System.out.println(personalAsText);

_// Kıyaslama metodu ===\&gt; compareTo_

Long personelId = **new** Long(100);

System.out.println(personelId.compareTo(50L));

System.out.println(personelId.compareTo(100L));

System.out.println(personelId.compareTo(150L));

_// değerlerin eşitliğini karşılaştırma metodu ===\&gt; equals_

Long personelId = **new** Long(100);

System.out.println(personelId.equals(50L));

System.out.println(personelId.equals(100L));

_// String değerlerden sayılara dönüşüm metodu ===\&gt; valueOf_

long number1 = Long.valueOf(&quot;100&quot;);

int number2 = Integer.valueOf(&quot;5&quot;);

short number3 = Short.valueOf(&quot;1&quot;);

_// String değerlerden sayılara dönüşüm metodu ===\&gt; parseX_

long number1 = Long.parseLong(&quot;100&quot;);

int number2 = Integer.parseInt(&quot;5&quot;);

short number3 = Short.parseShort(&quot;1&quot;);

_// mutlak değer alma fonksiyonu ===\&gt; abs_

Integer a =-8;

double d =-100;

float f =-90;

System.out.println(Math.abs(a));

System.out.println(Math.abs(d));

System.out.println(Math.abs(f));

_// ceil metodu ile yukarı yuvarlama, floor ile ise aşağı yönlü yuvarlama yapılır._

double d =100.675;

float f =90.15f;

System.out.println(Math.ceil(d));

System.out.println(Math.ceil(f));

System.out.println(Math.floor(d));

System.out.println(Math.floor(f));

_// rint metodu ile ondalıklı kısım 0.5&#39;den büyükse yukarı doğru_

_// eğer 0.5&#39;e eşit ve küçük ise aşağı doğru yuvarlama yapar. rint fonksiyonu sonuç olarak sadece int tipinde değer verir._

double d =100.675;

double e =100.500;

double f =100.200;

System.out.println(Math.rint(d));

System.out.println(Math.rint(e));

System.out.println(Math.rint(f));

_// rint metodu ile ondalıklı kısım 0.5&#39;e eşit ve büyükse yukarı doğru_

_// eğer 0.5&#39;den küçük ise aşağı doğru yuvarlama yapar._

_// round fonksiyonu long veya int döndürür._

double d =100.675;

double e =100.500;

float f =100;

float g =90f;

System.out.println(Math.round(d));

System.out.println(Math.round(e));

System.out.println(Math.round(f));

System.out.println(Math.round(g));

_// max verilen iki değerden en büyüğünü döndürür._

_// min verilen iki değerden en küçüğünü döndürür._

System.out.println(Math.min(12.123,12.456));

System.out.println(Math.max(12.123,12.456));

_// e tabanında log alma fonksiyonudur._

double x =2.76;

System.out.printf(&quot;log(%.3f) is %.3f%n&quot;, x, Math.log(x));

_// üs alma fonksiyonudur. 2 üzeri 3 gibi._

double x =2;

double y =3;

System.out.printf(&quot;pow(%f, %f) is %f&quot;, x, y, Math.pow(x, y));

_// karekök alma fonksiyonudur._

double x =4;

System.out.printf(&quot;sqrt(%.3f) is %.3f%n&quot;, x, Math.sqrt(x));

_// 0-1 arasında rastgele sayı üretme fonksiyonudur._

System.out.println(Math.random());

Java&#39;da String İşlemleri

Java&#39;da varsayılan dil içerisinde gelen String işleme kütüphaneleri mevcuttur. String sınıfı içinde yer alan statik fonksiyonlarda yazılımcılara yardımcı olmaktadır.

String veri tipi Java&#39;da ilkel (primitive) bir veri tipi değildir. Bu nedenle &quot;new&quot; anahtar sözcüğü kullanılarak nesne şeklinde oluşturulabilir.

Java&#39;da String veri tipinde bir değişken tanımı aşağıdaki gibi yapılabilir. Buna Literal tanımlama diyoruz. Sıklıkla kullanılan bir tanımlama biçimidir. Değişkene direkt olarak veriyi &quot;=&quot; operatörüyle atama yapıyoruz.

String greeting =&quot;Hello world!&quot;;

Literal tanımlama dışında &quot;new&quot; anahtar sözcüğüyle bir nesne olarak oluşturabilirsiniz. Bu yöntemle Heap hafıza bölgesinde bir alan kaplamış olursunuz. Literal tanımlama ile Heap hafızadan kazanç sağlanır.

Örnek:

String helloString = **new** String(&quot;Merhaba Dunya!&quot;);

String tipinde tanımlanan değişkenler veya nesneler değiştirilemez duruma sahiptir. Buna Immutable Object denir. String içindeki değeri değiştirmek isterseniz. Yeni bir değişken veya nesne tanımlama yapmak gerekecektir.

String veri tipi niçin Immurable (Değiştirilemez) tasarlandı diye düşünebilirsiniz. Bunun birden fazla sebebi vardır. Öncelikle, yazılım geliştirilirken String veri tipi çok sık kullanılır.

String tipinde sürekli nesne üretilmesi Heap hafıza bölgesini çok kötü kullanmaya ve performans problemlerine yol açar. Bu nedenle Literal tanımlarla ve özel String Pool (Havuz) ile birlikte performans kazancı hedeflenmiştir. String&#39;ler için Java&#39;da özel bir hafıza bölgesi vardır. Bu bölgede bir String havuzu vardır. Gerçekten bu havuz içinde belli miktarda tanımlı String nesneleri bulunur. Bu nesneler Heap hafızada belli bir bölgeyi kaplarlar. Fakat, sınırlı sayıdadırlar. Aşağıda, Literal tanımlama ile &quot;new&quot; ile String oluşturma arasındaki fark gösterilmektedir. İki tane Literal tanımlı s1 ve s2 isminde değişkenimiz olduğunu düşünelim.

String s1 =&quot;Hello World&quot;;

String s2 =&quot;Hello World&quot;;

s1 == s2

![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_65cf483949557af3.png)

Yukarıdaki örnekte bizler iki tane s1 ve s2 tipinde iki tane Literal tanımlı değişkenler oluşturduk. Aslında, bu iki değişken aynı değere sahip oldukları içim String Pool&#39;dan (Havuzdan) önceden oluşturulmuş bir nesneyi işaret ederek iki tane ayrı hafıza bölgesini doldurmaktan kurtuldular ve hafıza kazancı sağladılar. Yukarıdaki şekilde de bu durum izah edilmektedir. S3 değişkeni s1 ve s2 ile aynı değere sahip olsa da &quot;new&quot; ile yeni bir nesne olarak oluşturulduğu için hafızada başka bir bölgede oluşturulur.

Örnek:

String s1 =&quot;Hello&quot;;

String s2 =&quot;Hello&quot;;

String s3 =&quot;Merhaba&quot;;

String s4 = **new** String(&quot;Merhaba&quot;);

System.out.println(&quot;s1 == s2 : &quot;+(s1 == s2));

System.out.println(&quot;s2 == s3 : &quot;+(s2 == s3));

System.out.println(&quot;s3 == s4 : &quot;+(s3 == s4));

Yukarıdaki örnekte de bu durum geliştirilmiştir. s1 ve s2 değişkenleri aynı değere sahip Literal tanımlı String değişkenleri oldukları için aynı hafıza bölgesini işaret ederler. s3 değişkeni Literal tanımlı olmasına rağmen başka bir değere sahip olduğu için String Pool&#39;dan (Havuzdan) başka bir nesneyi alıp onu işaret etmektedir. s4 değişkeni ise &quot;new&quot; ile oluşturulduğu için Heap hafızadan bambaşka bir alanı almıştır. Yukarıdaki programın çıktısı aşağıdaki gibidir. &quot;==&quot; operatörü String&#39;lerde hafıza adresi kıyaslaması yapar. s1 ile s2 aynı hafıza adresini gösterir. s2 ve s3 Literal tanımlı olsalar da havuzdaki farklı nesneleri işaret ettikleri için adresleri eşit değildir. s3 ve s4 aynı değerlere sahip olsa da biri Literal tanımlıdır ve havuzdaki bir nesneyi işaret eder. Diğeri ise &quot;new&quot; ile tanımlandığı için Heap hafızada başka bir adresi işaret eder.

s1 == s2 : **true**

s2 == s3 : **false**

s3 == s4 : **false**

String&#39;ler değiştirilemez olduğu için Güvenlik ile ilgili konularda da varsayılan olan korumacı bir özelliğe sahiptir. Ayrıca, String değişkenler Immutable (Değiştirilemez) olduklarından dolayı Çok Kanallı (MultiThread) programlamada Thread-Safe özelliğe sahiptirler. String Pool, String Literal ve String new arasındaki fark size mülakatlarda sorulabilir.

Not: String veri tiplerinde verinin karakter uzunluğunu bulmak için &quot;length()&quot; metodundan faydalanılır. Örnek:

String s1 =&quot;Hello&quot;;

int lengthOfs1 = s1.length();

Not: String ifadeleri birbiriyle birleştirmek için &quot;+&quot; operatörü veya &quot;concat&quot; metodu kullanılır. Örnek:

String namePrefix =&quot;My name is &quot;;

String greetimgMessage = namePrefix.concat(&quot;Zara&quot;);

Formatlı String İfadeler Oluşturmak

Java&#39;da &quot;String.format&quot; metoduyla formatlı veriler oluşturabilirsiniz. &quot;format&quot; metodu String sınıfının static fonksiyonudur. Nesne üretmeksizin direkt sınıf ismiyle çağırabilirsiniz.

Örnek:

int speed =50;

String departureCityName =&quot;Akhisar&quot;;

String arrivalCityName =&quot;İstanbul&quot;;

String fullText = String.format(&quot;Aracın ortalama hızı: %d kilometredir.&quot;+

&quot;Araç %s şehrinden kalkıp %s şehrine varacaktır.&quot;, speed, departureCityName, arrivalCityName);

System.out.println(fullText);

Yukarıdaki örnekte bir metin oluşturulmaya çalışılıyor. Metin içerisinde tanım sayıları ifade eden %d ve String veri tipini ifade eden %s alanları vardır. Bu alanlar dinamiktir. Gelen değerleri cümle içinde gösterilmesini sağlarlar.

String s =&quot;Strings are immutable&quot;;

_// s isimli String değişkendeki ifadenin 8. indeksindeki karakteri alır._

_// Burada dikkat edilmesi gereken şey indeksler sıfırdan başlar. O yüzden 9. karakteri okuyoruz._

char result = s.charAt(8);

-----------------------------------------------------------

String str1 =&quot;Strings are immutable&quot;;

String str2 =&quot;Strings ARE immutable&quot;;

_// s1 ve s2 değişkenleri içinde yer alan değerleri büyük küçük harf duyarlılığı olmaksızın kıyaslar._

int result = str1.compareToIgnoreCase(str2);

System.out.println(result);

-----------------------------------------------------------

String str = **new** String(&quot;This is really not immutable!!&quot;);

_// String ifadenin sonu verilen ifadeyle bitiyor mu kontrol eder. true veya false döner._

_// Cümlenin sonu &quot;immutable!!&quot; ile bitiyor mu kontrol ediyoruz. true döner._

boolean retVal = str.endsWith(&quot;not immutable!!&quot;);

System.out.println(&quot;Returned Value = &quot;+ retVal );

-----------------------------------------------------------

String str1 = **new** String(&quot;This is really not immutable!!&quot;);

String str2 = **new** String(&quot;This is really not immutable!!&quot;);

_// equals metodu iki String değişkenin aynı değere sahip olup olmadığını kıyaslar._

_// == operatörü ile iki String&#39;leri kıyaslasaydık, hafıza adreslerini kıyaslamış olacaktır. O da false dönecekti._

boolean retVal = str1.equals( str2 );

System.out.println(&quot;Returned Value = &quot;+ retVal );

-----------------------------------------------------------

String str = **new** String(&quot;Welcome to kodluyoruz.org&quot;);

String subStr1 = **new** String(&quot;Tutorials&quot;);

_// indexOf metodu verilen ifadenin cümlede nerede hangi indeksten itibaren başladığını belirtir._

_// Eğer ifadeyi cümle içinde bulamazsa -1 döner._

System.out.println(&quot;Found Index :&quot;+ str.indexOf( subStr1 ));

-----------------------------------------------------------

String str = **new** String(&quot;Welcome to kodluyoruz.com&quot;);

_// replace metoduyla bir cümle içindeki istediğimiz ifadeyi bir başka ifade ile değiştirebiliriz._

_// Örneğin: Welcome ifadesini Merhaba ile değiştiriyoruz. Değişiklik sonucunda değişmiş halini yeni bir String olarak döner_

str = str.replace(&quot;Welcome&quot;,&quot;Merhaba&quot;);

str = str.replace(&quot;to&quot;,&quot;&quot;);

System.out.println(str);

-----------------------------------------------------------

String str = **new** String(&quot;Welcome-to-kodluyoruz.org&quot;);

_// split fonksiyonu cümleyi ayırmak için bir karakter alır. Sonra o karaktere göre cümleyi parçalara böler._

_// bu örnekte - işaretiyle ayırma işlemi uygulanmıştır._

String[] items = str.split(&quot;-&quot;);

System.out.println(&quot;Return Value :&quot;);

-----------------------------------------------------------

String str = **new** String(&quot;Welcome to kodluyoruz.com&quot;);

_// startsWith metoduyla cümle belirtilen ifadeyle başlıyor mu diye kontrol edilebilir._

System.out.println(str.startsWith(&quot;Welcome&quot;));

-----------------------------------------------------------

String str = **new** String(&quot;Welcome to kodluyoruz.com&quot;);

_// substring fonksiyonu verilen başlangıç indeksinden itibaren verilen bitiş indeksine kadar olan bölümü kırpar ve yeni bir string olarak döndürür._

String subStringPart = str.substring(10,15);

StringBuilder Sınıfının Kullanımı

Java&#39;da performanslı String birleştirme işlemleri için &quot;StringBuilder&quot; sınıfı kullanılabilir. &quot;+&quot; operatörü ve &quot;concat&quot; fonksiyonuna göre daha performanslı bir yöntemdir.

Örnek:

StringBuilder builder = **new** StringBuilder();

builder.append(&quot;İlk cümle&quot;);

builder.append(&quot;İkinci cümle&quot;);

builder.append(&quot;Üçüncü cümle&quot;);

System.out.println(builder.toString());

&quot;append&quot; metoduyla String ifadeler eklenir. Ardından, &quot;toString&quot; metoduyla birleştirilmiş tüm String ifade alınır.