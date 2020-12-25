# While Döngüsü

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