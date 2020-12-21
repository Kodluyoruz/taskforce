# Java&#39;da Döngü Mekanizmaları

Döngüler bilgisayara tekrarlı işleri yaptırabilmek için gereklidir. Örneğin, 1000&#39;e kadar olan tüm tek sayıları bulmak tekrarlı bir işlemdir. Müşteri şifresini tekrar tekrar girmeye çalışmakta tekrarlı bir işlemdir.

Döngüler 4 ana bileşenden oluşur:

- Döngünün iterasyon sayısını tutacak değişkene ilk değer atanır.
- Döngünün sonlandırılması veya devam etmesi için bir koşul cümlesi belirtilir.
- Döngünün her iterasyonda ne kadar artıp ne kadar azalacağı belirtilir.

## "for" Döngüsü

Bu döngü tipinde iterasyon sayısı belli bir miktardadır. Döngünün maksimum kaç kez işletileceği önceden bellidir.

````java
for( initialization; condition; incr/decr) {
	//statement or code to be executed  
}  
````

````java
for( int i=-100; i < 1000; i++) {
	// tek sayıları bul
	if(i % 2 == -1 || i % 2 == 1) {
		System.out.println("Tek sayı: " + i);
	}
}
````



Döngüler iç içe tanımlanabilir. Bunlara nested loops denir. Örneğin: çarpım tablosunu ekrana yazdırmak için iç içe 2 tane döngü tanımlamak gerekir.

````java
for(int i = 1; i <= 9; i++) {
	for(int j = 1; j <= 9; j++) {
		int result = i * j;
		String formattedOutput = String.format("(%d x %d)=%d",i,j,result);
		System.out.println(formattedOutput);
	}
}
````



## "while" Döngüsü

"for" döngüsüne benzerdir. "while" döngüsü genellikle işlemin kaç kez tekrar edeceği bilinmediği durumda kullanılır. Örneğin: müşterinin hesabına giriş şifresini kaç kez yanlış gireceğini bilemeyiz. Bu nedenle bu tarz durumlarda "while" döngüsü tercih edilir.

````java
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

````



## "do-while" Döngüsü

"while" döngüsünün çok benzeridir. Bu döngüde koşul en sonda yer aldığı için en az bir kez tur çalıştırılır.

````java
int i = 1;
do {
	System.out.println("Sadece bir kez çalıştım :) ");
	i++;
} while(i==1);

````



## "break" ve "continue" Komutu ile Döngüyü Kontrol Etmek

İşletilen bir döngüyü bir koşul sonucu sonlandırmak için "break" komutu kullanılır. "continue" kelimesi ile döngünün devam etmesi sağlanır. Aşağıdaki örnekte döngü içinde ilk 50 değeri continue ile atlayacağız. Dizinin ortasına geldiğimizde ise break komutuyla döngüyü kıracağız.

````java
for(int i=1; i <= 100; i++) {
	
	if(i < 50) {
		System.out.println("Daha yarısına gelmedim!");
		continue;
	}
	
	if(i == 50) {
		System.out.println("Dizinin ortasındayım!");
		break;  }  }

````

