## Java Değişkenler

Değişkenler içinde veri barındıran ve bilgisayarın geçici hafızasında (RAM) fiziksel olan yer kaplayan yapılardır. Değişkenlere değer (veri) ataması yapılabilir. Java&#39;da değişkenleri veri tipleri vardır. Bu tipler Java&#39;da varsayılan olarak tanımlı gelen tipler de olabilir yahut yazılımcıların kendi tanımladığı tipler de olabilir.

\&lt;veri tipi\&gt;\&lt;değişken ismi\&gt;= veri (değer)

Değişken tanımlaması yapıldığında aslında bilgisayar hafızasında bir yeri ayırmış oluyoruz. Bu alan o değişkenin veri tipinin boyutu kadar bir alanı ifade eder. Örneğin: 2 Byte&#39;lık bir veri tipine sahipsek ve bu tipte bir değişken tanımlıyorsak. Her değişken için hafızadan 2 Byte&#39;lık yer ayrılacaktır.

![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_559b3eb1f714c61c.gif)

int a = 10;

![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_559b3eb1f714c61c.gif) ![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_559b3eb1f714c61c.gif) ![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_559b3eb1f714c61c.gif) ![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_cd5d771f0c3096f7.gif) ![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_6a6259ef8e1a22f7.gif) ![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_c78afce153a61a46.gif) ![](C:/GitHub/taskforce/java-101/hafta-1/RackMultipart20201119-4-xnzld6_html_7fae69e074ba9e7.gif)

int d = 100;

int c = 8;

int b = 5;

| 10 |
 |
| --- | --- |
| 5 |
 |
|
 | 8 |
|
 |
 |
|
 | 100 |

**int** tipinde, yani sayı tipinde tanımlanmış **a,b,c,d** isimli değişkenlerin her biri hafızada bir alanı kaplarlar.

Değişken tanımlama örnekleri:

int a, b, c;_// 3 tane değişken virgüller ile ayrılarak tek satırda tanımlanabilir._

int a =10, b =10;_// Birden fazla değişken aynı satırda ilk değerleri atanarak tanımlanabilir._

byte b =22;_// Tek değişkene ilk değer ataması yapılarak_

double pi =3.14159;_// Tek değişkene ilk değer ataması yapılarak_

char a =&#39;a&#39;;_// Tek değişkene ilk değer ataması yapılarak_

**public**** class ****ConnectionPool**

{_// Sınıf kapsamının başlangıcı_

int connectionMaximumLimit =50;_// Nesne değişkenidir._

**static** int currentActiveConnectionCount =10;_//static değişkendir. Sınıf değişkenidir._

**public** voidacquireConnection()

{_// metot (fonksiyon) kapsamının başlangıcı_

int processId =90;_// Yerel değişkendir._

_// Diğer kodlar ..._

}_// metot (fonksiyon) kapsamının sonu_

}_// Sınıf kapsamının sonu_

Yukarıdaki örnekte veritabanına bağlantı kurabilmek için bir havuz oluşturduğumuzu hayal edelim. Bu havuzaa belli bir sayıda kullanıcı bağlanıp bir bağlantıyı alıp kullanıp, tekrar sisteme iade ettiğini düşünelim. Bu senaryoda &quot;ConnectionPool&quot; isminde bir sınıf tanımlamak gerekecektir. Bu sınıf havuz nesnesinin taslağıdır. Kapsamı süslü parantezlerle başlayıp bittiği alan kadardır. Bu kısım kod üzerinde açıklama satırlarıyla belirtilmiştir. &quot;ConnectionPool&quot; sınıfı içindeki &quot;connectionMaximumLimit&quot; isimli değişken nesne değişkenidir. Bu sınıftan üretilen her nesnenin kendine ait &quot;connectionMaximumLimit&quot; bir değişkeni olacaktır. &quot;static&quot; olarak isimlendirilen &quot;currentActiveConnectionCount&quot; değişkeni ise sınıf değişkendir. Yani herhangi bir nesne üretmeksizin sınıf üzerinden global olarak erişilebilir.

Yani,

ConnectionPool.currentActiveConnectionCount=1000;

Yukarıdaki şekildeki gibi nesne olmadan sınıf tanımı üzerinden erişilebilir.

&quot;acquireConnection&quot; metodu ise havuzdan bağlantı alıp ilgili prosese atamayı sağlayan fonksiyondur. Bu fonksiyon içinde tanımlı olan tüm değişkenler yerel değişkendir. Çünkü, metodun kapsamı içinde tanımlanmıştır. Metodun kapsamı da süslü parantezler arasında kalan alandır. Yorum satırı olarak belirtilmiştir. Metot çalışıp işini bitirince bu yerel değişkenlerde ömürlerini tamamlarlar ve bilgisayar hafızasından silinirler.

**public**** class ****VariableDemo** {

**public**** static**voidmain(String[] args){

int firstParameter =10;

int secondParameter =20;

int summation = firstParameter + secondParameter;

System.out.println(summation);

}

}

Yukarıdaki örnekte de iki adet değişken tanımlanıp &quot;+&quot; toplama operatörüyle toplanıp sonuç &quot; **summation**&quot; isimli başka bir değişkene atanmıştır. Ardından, &quot; **println**&quot; fonksiyonuyla konsol ekranına sonuç yazdırılmıştır.

Yerel Değişken

**public**** class ****Test** {

**public** voidpopAge(){

int age =0;

age = age +7;

System.out.println(&quot;Puppy age is : &quot;+ age);

}

**public**** static**voidmain(String args[]){

Test test = **new** Test();

test.popAge();

}

}

Yukarıdaki örnekte &quot; **popAge**&quot; metodu içindeki &quot; **age**&quot; isimli değişken yerel tanımlıdır. Dikkat edilecek olunursa Test sınıfından bir nesne oluşturup &quot; **popAge**&quot; metodu çağrılmıştır. Sonuçta ekrana 7 değerini basacaktır. Yerel değişkenlere ilk değer ataması yapılmalıdır. &quot;age&quot; isimli değişkene sıfır değeri ilk değer olarak verilmiştir.

Not: Nesne değişkenlerinin varsayılan değerleri otomatik atanır. Eğer değişken sınıf (referans) tipinde bir değişkense varsayılan değeri &quot; **null**&quot; olacaktır.

Not: Sınıf değişkenleri daha çok sabit değerleri tanımlamada kullanılır.

**public**** static ****final** double PI =3.14;