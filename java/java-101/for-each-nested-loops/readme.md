# For-Each & Nested Loops

## For-Each Döngüsü

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

## İç  İçe Döngüler (Nested Loops)

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