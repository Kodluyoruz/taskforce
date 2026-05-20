# While Döngüsü

​		Java’nın en temel döngüsü while döngüsüdür. Hatta diyebiliriz ki, diğer bütün döngü türleri kodumuz derlendiğinde while bloğuna dönüştürülür. while döngüsünün çalışma mantığı basittir: while bloğu içindeki kod, bağlı olduğu koşul sağlandığı sürece çalışır. while bloğunun yapısı şu şekildedir:

```java
while ( [koşul] )
{
[döngüye girecek kodlar]
}
```

Burada belirtilen _koşul_, **boolean** bir ifadedir. Bu koşul **true** olduğu sürece döngü devam eder. Koşul **false** olursa döngü sonlanır.

​		Koşul ifadesi parantez içine yazılır. Eğer döngüye girecek kod tek satırdan oluşuyorsa blok açmaya gerek yoktur; fakat birden fazla satırdan oluşuyorsa mutlaka blok açılmalıdır.

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

​		Döngülerin içeriği olmak zorunda değildir. Bazı durumlarda döngüye girecek kod olmasa bile döngüye girebiliriz. Aşağıdaki örneği inceleyelim:

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

​		Yani while döngüsü genellikle işlemin kaç kez tekrar edeceği bilinmediği durumda kullanılır. Örneğin: müşterinin hesabına giriş şifresini kaç kez yanlış gireceğini bilemeyiz. Bu nedenle bu tarz durumlarda "while" döngüsü tercih edilir hemen aşağıdaki örnekte olduğu gibi.

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

​		Java programla dilinde while döngüleri yapacağımız işin ne zaman biteceğiniz bilmediğimiz durumlarda kullanışlı olabilmektedir.Bu duruma verilebilecek örneklerden biri de yazdığımız herhangi bir oyun uygulaması olabilir.

​		Oyunların genelde bitmesi için belirli şartların sağlanması gerekmektedir .Bu şartlar oyunu oynayan kullanıcıların yaptığı hamlelere,oyunun değişkenlerine ve dinamikliğine göre değişebilmektedir. Aşağıda örnek bir şans oyunu simule edilmiştir. Öncelikle boolean dönüş tipine sahip bir game değişkeni tanımlanmış ve değeri true olarak atanmıştır. Döngümüz bu değişken true değerini döndükçe devam edecektir. Ardından 2 oyunculu oyunumuzda oyuncuların puanları tanımlanmış ve başlangıç değerleri 0'a atanmıştır.

​		While döngümüzün içinde ilk olarak 2 adet int tipinde değişken oluşturulmuş ve bu değişkenlerin her döngüde 0-2 arasında değerler üretmesi için random sınıfı kullanılarak atama yapılmıştır.Eğer random olarak üretilen değer 0'a eşitse, 0 değerini üreten kullanıcı 1 puan kazanır ve oyunun bitmesi için herhangi bir kullanıcının puan toplamının 2 olması yeterlidir.Her döngüde kullanıcıların puanları kontrol edilir ve herhangi bir oyuncunun 2 puana ulaşması halinde game değişkeni false değerine atanır ve döngü sonra erer. Döngü sonunda kullanıcıların puanı ekrana yazdırılır.

```java
public static void main(String[] args){


    boolean game=true;
    Random random =new Random();

    int scorePlayer1=0;
    int scorePlayer2=0;


    while (game){

        int valuePlayer1=random.nextInt(2);
        int valuePlayer2=random.nextInt(2);

        if(valuePlayer1==0)
            scorePlayer1++;

        if(valuePlayer2==0)
            scorePlayer2++;

        if(scorePlayer1==2 || scorePlayer2==2)
            game=false;

    }

    System.out.println("Player1 score:"+scorePlayer1);
    System.out.println("Player2 score:"+scorePlayer2);

}
```

Aşağıda programımızın örnek bir çıktısı verilmiştir:


```java
Player1 score:0
Player2 score:2
```

Görüldüğü üzere kullanıcılardan herhangi birinin puanının 2 olması durumunda oyunumuz sonra ermiş ve ekrana puanları yazdırılmıştır.

​		Javada dosya işlemleri yaparken while döngüleri kullanılabilir.Örnek olarak FileReader sınıfından bir file nesnesi oluşturalım.Ardından bu nesne BufferedReader sınıfına ait read nesnesine parametre olarak gönderilir.Dosya oluşturma işlemlere ileride File sınıfı konumuzda detaylı olarak değineceğiz.Burada while döngüleri ile ilgili bilmemiz gereken dosyaların okuma işlemlerinde kullanılabileceğidir.Aşağıda bu duruma bir örnek verilmiştir:

```java
public static void main(String[] args) throws IOException {

FileReader file = new FileReader(new File("source.txt"));
BufferedReader read = new BufferedReader(file);

String line = null;

while ((line = read.readLine()) != null) {
    System.out.println(line.length());

	}
}
```



Örneğimizi incelersek dosya oluşturma işlemleri tamamlandıktan sonra line adından bir string değişkeni oluşturulur ve ilk olarak null değeri atanır.Ardından while döngümüzdeoluşturduğumuz read nesnesin bir fonksiyonu olan readLine() çağrılır ve line değişkenine eşitlenir.Burada yapılmak istenen dosyanın satır satır okunma işlemidir.Bu döngümüz line değişkeni null değerine eşit olana kadar çalıştırılır ve her bir döndüe mevcut satırın uzunluğu döndürülür.

​		While döngüsünün bir başka kullanım örneğide aşağıda gösterildiği gibi oluşturulan List nesnelerinin içerisinde bulunan elemanları okuma işlemidir:

```java
public static void main(String[] args) {

       List<String> cars = new ArrayList<>();

	cars.add("Mercedes");
	cars.add("Bmw");
	cars.add("Ferrari");

	Iterator<String> carList = cars.iterator();
	
		while(carList.hasNext()) {
    
    	System.out.println(carList.next());
	
			}
```
Oluşturulan nesnenin içine öncelikle yeni değerler eklenir.Ardından while döngüsü yardımıyla bu değerler sırasıyla okunabilir.Programımızın çıktısı şöyle olacaktır:

```java
Mercedes
Bmw
Ferrari
```
​		Bir başka while kullanımı ise char değişkenlerinde mümkündür.Önceki örneklerimizde while döngüsünde int veri tipi ile ilgili kullanımları görmüştük.Şimdi ise char veri tipinde while kullanımına bir göz atalım.Eğer alfabede bulunan tüm harfleri ekrana yazdırmak istersek while döngülerini kullanabiliriz.

​		Aşağıda bulunan örneğimize bakarsak ilk olarak char tipinde bir c değişkeni oluşturulmuş ve A karakteri ilk değer olarak atanmıştır.Ardından while döngümüzde bu değerin Z karakterinden küçük veya eşit olması durumu kontrol edilmiştir.Eğer koşul sağlanıyorsa döngümüze girilmiş ve ilk olarak  bu değer ekrana basılmıştır.Sonra ise c değişkenimiz bir arttırılmış ve tekrardan while döngüsünün kontrol bloğuna gidilmiştir.Burada önemli bir not olarak ise Java Programlama Dilinde char veri tipinde ++ operatörü kullanıldığı takdirde mevcut değerin alfabetik olarak bir arttırılması işlemi yapılır.


```java
public static void main(String[] args) {

		System.out.print("Alphabet: ");

		char c = 'A';

		while (c <= 'Z')	 {
    	System.out.print(c);
    	c++;
		
        	}

		System.out.println();
    
}
```

Programımız çıktı olarak sırasıyla A karakterinden Z karakterine kadar bulunan tüm karakterleri yazdıracaktır:

	Alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZ

​		Daha önceki örneklerimizde while döngüsünde farklı tipte değişkenleri kullanarak işlemler yapmıştık.Şimdi ise farklı tipte değişkenlerin aynı döngüde nasıl kontrol şartı olarak kullanılacağına bir göz atalım.İlk olarak char tipinde letter adında bir değişken tanımlayalım ve ilk değer olarak a değerini atayalım.

​		Ardından int tipinde number adında bir değişken tanımlayalım ve 0 değerine atayalım.Ardından döngümüz içinde letter değişkeninin 'e' değerine,number değişkeninde 10 değerine eşit olup olmadığı koşul olarak kontrol edilir ve şartların her ikiside sağlanırsa döngümüz çalışır.Döngü içinde değerler ekrana bastırılır ve değişkenlerin değeri birer arttırılır.Koşul sağlanana kadar döngümüz çalışmış olur:

```java
	public static void main(String[] args) {

    char letter='a';
    int number=0;

    while (letter!='e' && number!=10){


        System.out.print(letter);
        System.out.print(number);
        System.out.println();

        letter++;
        number++;

    }
}
```

Çıktımıza baktığımızda ise letter değişkeni 5. adımda 'e' karakterine eşit olduğu için, i değeri şartı sağlasa bile döngümüz false değerine eşit olmuş ve  sonra ermiştir.Çıktımız aşağıdadır:

```java
a0
b1
c2
d3
```



​		

​		