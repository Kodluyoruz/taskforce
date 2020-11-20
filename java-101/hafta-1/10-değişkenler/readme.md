# Java Değişkenler

Değişkenler içinde veri barındıran ve bilgisayarın geçici hafızasında (RAM) fiziksel olan yer kaplayan yapılardır. Değişkenlere değer (veri) ataması yapılabilir. Java&#39;da değişkenleri veri tipleri vardır. Bu tipler Java&#39;da varsayılan olarak tanımlı gelen tipler de olabilir yahut yazılımcıların kendi tanımladığı tipler de olabilir.

```java
<veri tipi> <değişken ismi> = veri (değer)
```



Değişken tanımlaması yapıldığında aslında bilgisayar hafızasında bir yeri ayırmış oluyoruz. Bu alan o değişkenin veri tipinin boyutu kadar bir alanı ifade eder. Örneğin: 2 Byte&#39;lık bir veri tipine sahipsek ve bu tipte bir değişken tanımlıyorsak. Her değişken için hafızadan 2 Byte&#39;lık yer ayrılacaktır.

![](figures/variables-1.png)



**int** tipinde, yani sayı tipinde tanımlanmış **a,b,c,d** isimli değişkenlerin her biri hafızada bir alanı kaplarlar.

Değişken tanımlama örnekleri:

```java

int a, b, c; // 3 tane değişken virgüller ile ayrılarak tek satırda tanımlanabilir.

int a = 10, b = 10; // Birden fazla değişken aynı satırda ilk değerleri atanarak tanımlanabilir.

byte b = 22; // Tek değişkene ilk değer ataması yapılarak

double pi = 3.14159; // Tek değişkene ilk değer ataması yapılarak

char a = "a" ;; // Tek değişkene ilk değer ataması yapılarak

```

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


Yukarıdaki örnekte veritabanına bağlantı kurabilmek için bir havuz oluşturduğumuzu hayal edelim. Bu havuzaa belli bir sayıda kullanıcı bağlanıp bir bağlantıyı alıp kullanıp, tekrar sisteme iade ettiğini düşünelim. Bu senaryoda &quot;ConnectionPool&quot; isminde bir sınıf tanımlamak gerekecektir. Bu sınıf havuz nesnesinin taslağıdır. Kapsamı süslü parantezlerle başlayıp bittiği alan kadardır. Bu kısım kod üzerinde açıklama satırlarıyla belirtilmiştir. &quot;ConnectionPool&quot; sınıfı içindeki &quot;connectionMaximumLimit&quot; isimli değişken nesne değişkenidir. Bu sınıftan üretilen her nesnenin kendine ait &quot;connectionMaximumLimit&quot; bir değişkeni olacaktır. &quot;static&quot; olarak isimlendirilen &quot;currentActiveConnectionCount&quot; değişkeni ise sınıf değişkendir. Yani herhangi bir nesne üretmeksizin sınıf üzerinden global olarak erişilebilir.

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

    public voidpopAge(){

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

