# For-Each & Nested Loops

## For-Each Döngüsü

Çoğu zaman for döngüsünü, bir dizinin veya koleksiyonun içindeki elemanları gezmek için kullanırız. Döngüyü kontrol eden değişkenin hangi değerle başlayacağı ilk deger kısmına, döngü hangi koşullar içinde çalışması gerekiyorsa döngü koşulu kısmına, döngü kontrol değişkeninin nasıl değişmesi (değişkenin artması veya azalması gibi) gerekiyorsa bu da döngü sayacı kısmında belirtilir.  

```java
for(ilk deger;döngü koşulu;döngü sayacı){
//kod dizimi
}
```

Aşağıdaki örneği inceleyelim:

```java
int[] numbers = { 1, 2, 3, 4, 5 };

for (int index = 0; index < numbers.length; index++)
{
	int number = numbers[index];
	System.out.println(number);
}
```

Bu dizinin çıktısı şu şekilde olur:

```java
1
2
3
4
5
```

Bu örnekte 5 elemanlı bir dizi oluşturuluyor ve for döngüsü kullanarak bu dizinin elemanları konsola yazdırılıyor. Dizinin hiçbir elemanının atlanmadığına dikkat edelim.

Bu gibi durumlar (bir dizinin veya koleksiyonunun bütün elemanlarını gezmek) için **for-each** döngüsü geliştirilmiştir. For-each döngüsü veya bir diğer ismiyle geliştirilmiş for döngüsü, J2SE 5.0'dan beri tanımlanmış bir yapıdır. Java'da bir dizi veya koleksiyonda gezinmek için alternatif bir olanak sağlar. Esas olarak dizi veya koleksiyon ögeleri üzerinde tek tek gezinebilmek için kullanılır. For-Each yapısının For yapısından daha avantajlı olmasının nedeni, hata olasılığını ortadan kaldırması ve kodu daha okunaklı hale getirmesidir. Fakat bu geliştirilmiş for döngüsünün dezavantajları, dizi içerisindeki elemanların üzerinden ters sırayla tek tek geçememesidir. Dizinin herhangi bir ögesini atlama seçeneği de yoktur çünkü for-each yapısı indeks bazında çalışmaz, yani mevcut indeks bilinmez. For-each'de döngünün tekrarlaması otomatik olarak çalışır, son ögeye geldiğinde durur. Fakat kodu daha okunabilir kıldığından ögeler arası geçişte bu yapının kullanılması önerilir. Bu döngünün yapısı aşağıdaki gibidir:

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

Output:

```java
1
2
3
4
5
```

Sonucu aynı olmasına rağmen, bu kodun geleneksel for döngüsüne göre daha kısa olduğunu fark etmişsinizdir. Aradaki fark, for döngüsünde ögelere müdahale edebiliriz fakat for-each yapısında bunu yapamayız, yukarıda da belirttiğimiz gibi sadece ögeler üzerinde gezinebiliriz. 

Bu döngüyle ilgili belirtmemiz gereken önemli bir nokta vardır. for-each içinde belirtilen döngü değişkeni **dolaylı olarak sabittir** (**effectively final**). Yani, döngü içinde bu değişkene atama yapamazsınız. Örneğin, aşağıdaki kod hata fırlatır:

```java
int[] numbers = { 1, 2, 3, 4, 5 };

for (int number : numbers)
{
	number = 10; // Bu satır hataya neden olur.
				// for-each içinde tanımlanan değişkenlere değer atayamazsınız
}
```

## İç İçe Döngüler (Nested Loops)

Döngüler iç içe tanımlanabilir. İç veya dış döngü herhangi döngü yapılarıyla oluşturulabilir: while, do while veya for. Bunlara **nested loops** denir. Dıştaki döngü her yürütüldüğünde içteki döngü tamamen döner. 

For içinde for döngüsünün söz dizimi şu şekildedir:

```java
for(ilk deger; döngü koşulu; döngü sayacı){
	for(ilk deger2; döngü koşulu2; döngü sayacı2){
			//iç döngü söz dizimi
	}
//dış döngü söz dizimi
}
```

while/do while yapılarının içe içe döngü yapıları da şu şekilde gösterilir:

```java
while(koşul){
	while(koşul2){
	//iç döngü söz dizimi
	}
//dış döngü söz dizimi
}
```

```java
do{
	do{
		//iç döngü söz dizimi
	} while(koşul);
//dış döngü söz dizimi
}while(koşul2);
```

Örneğin: çarpım tablosunu ekrana yazdırmak için iç içe 2 tane for döngüsü tanımlamak gerekir.

```java
for(int i = 1; i <= 9; i++) {
	for(int j = 1; j <= 9; j++) {
		int result = i * j;
		String formattedOutput = String.format("(%d x %d)=%d",i,j,result);
		System.out.println(formattedOutput);
	}
}
```

Aynı örnek bu sefer while döngüsü ile de yapılabilir. Dış döngüyü while, iç döngüyü for yapalım fakat bu sefer arttırma veya azaltma işlemi while döngüsünün parantezleri içinde tanımlanamayacağı için scope içinde bu işlemi yapmamız gerekiyor. 

```java
	int i=1;
        while(i <= 9) {
            for(int j = 1; j <= 9; j++) {
                int result = i * j;
                String formattedOutput = String.format("(%d x %d)=%d",i,j,result);
                System.out.println(formattedOutput);
            }
            i++;
        }
```

Yukarıda görüldüğü gibi döngüler illa aynı türde olmayabilir, bir while döngüsü içerisinde bir for döngüsü de tanımlanabilir. Ayrıca iki döngü iç içe kullanmanın yanı sıra üç döngü de içe içe(döngü içindeki döngü içindeki döngü) kullanılabilir. Amaç doğrultusunda döngü yapıları bu şekilde değiştirilebilir. 

## Kaynak:
- https://www.javapoint.com
