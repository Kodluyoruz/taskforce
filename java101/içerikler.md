# Java 101

## [Java Nedir?](java-nedir/)
1. Aşağıdakilerden hangisi Java'nın özelliklerinden değildir?
    - Gömülü sistemlerde programlama imkanı sağlar.
    - Java kararlı bir programlama dilidir.
    - Java platform bağımsız bir dildir.
    - Java nesneye dayalı bir dil değildir. (Doğru)

## [Java'da Yazım ve İsimlendirme Kuralları](yazim-ve-isimlendirme-kurallari/)
1. Java'daki isimlendirme kuralları ile ilgili hangi bilgi yanlıştır?
    - Java harflere duyarsız bir dildir ve küçük büyük harf ayrımı yoktur. (Doğru)
    - Java ve bir çok programlama dili Türkçe karakter desteklememektedir.
    - Java’da sınıf adlarının ilk harfi büyük olmalıdır.
    - Java’da metot adları küçük harfle başlar.

2. Aşağıdakilerden hangisi Java'da tanımlayıcı isimlendirme kurallarındandır?
    - İlk karakter harf, $ işareti ve _ (alt çizgi) ile başlayabilir. (Doğru)
    - Rakam ve sayı isimlendirmeleri başında yer alır.
    - Büyük küçük harf duyarlılığı yoktur.
    - Class ismi kullanılabilir.

3. Hangisi “Camel Case” kuralına uygun bir isimlendirmedir?
    - PATIKA_DEV
    - patika-dev
    - Patika_Dev
    - patikaDev (Doğru)

3. Java’da sınıflar için hangi isimlendirme kuralı uygulanır ?
    - Upper Camel Case (PatikaDev) (Doğru)
    - Lower Camel Case (patikaDev)
    - Screaming Snake Case (PATIKA_DEV)
    - Snake Case (Patika_Dev)

## [Main Metodu ve Kullanımı](main-metodu/)
1. Herhangi bir Java programı derlendikten sonra çalıştırılabiliyorsa, programın belli bir metodundan çalıştırılmaya başlanır. Bu metodun doğru yazımı nedir?
    - public static void main(String[] args) (Doğru)
    - int main()
    - void main()
    - static void main( String[] args)
    - static main()

## [Programlamaya Başlangıç](programlamaya-baslangic/)
1. Hangisi ekrana “Patika Dev” iletisini yazmaz?
    - Console.writeln ("Patika Dev"); (Doğru)
    - System.out.println("Patika Dev");
    - System.out.print("Patika Dev");
    - System.out.printf("Patika Dev");
    - System.out.print("\nPatika Dev");

2. ```
    **** 
    ***
    **
    *
    ```
   Ekrana bu yıldızı yazdırmak için gerekli olan Java kodu hangisidir ?
    - `System.out.print("****\n***\n**\n*");` (Doğru)
    - `System.out.print(“*” + “**” + “***”);`
    - `System.out.printf(“*\t**\***”)`
    - `System.out.print(“****\n \n*”);`
    - `System.out.println(“*\n**\n***”);`
    

3. Hangisi Java dilinde kullanılan Escape (Kaçış) karakterlerinden biri değildir?
    - \j (Doğru)
    - \n
    - \t
    - \r
    - \f

## [Yorum Satırları](yorum-satirlari/)
1. Java’da tek satırlık bir yorum için hangi ifade kullanılır ?
    - `//`(Doğru)
    - `**`
    - `*//*`
    - `<!-- -->`
    - `/**/`

2. Java’da birden fazla yorum satırı oluşturmak için hangi ifade kullanılır ?
    - `/* Yorum */` (Doğru)
    - `// Yorum`
    - `<!-- Yorum -->`
    - `** Yorum **`
    - `*/ Yorum */`
    
3. ```
    /**
     * @author Patika.Dev - 11.Nis.2021
     */    
    ```
   Java’da yukarıdaki gibi yapılan yorum satırlarına ne ad verilmektedir ?
    - Javadoc (Doğru)
    - Doctype
    - Document
    - JavaComment
    - Javadesc

## [Değişkenler ve Veri Tipler](degiskenler-veri-tipleri/)

1. Java'da veri tipi tanımlamak için kullanılan sözdizimi (syntax) hangisi şıkta doğru verilmiştir ?
    - `<veri tipi> <değişken ismi> = <değer>` (Doğru)
    - `<değişken ismi> <veri tipi> = <değer>`
    - ``<değer> <değişken ismi> = <veri tipi>``
    - `<veri tipi> <değer > = <değişken ismi>`

2. Java’da ilkel (primitive) veri tipleri ile ilgili hangisi doğrudur?
    - İlkel veri tiplerin boyutu alacağı veri tipine bağlıdır. (Doğru)
    - İlkel veri tipleri 'null' (boş) olabilir.
    - İlkel veri tipleri kullanıcı tarafından oluşturulur.
    - İlkel veri tipleri sınırsız veri alabilir.

3. Hangisi tam sayı bir veri tipi değildir ?
    - float (Doğru)
    - int
    - byte
    - short
    - long

4. Java'da karakterler hangi veri tipi ile ifade edilir ?
    - char (Doğru)
    - String
    - boolean
    - int
    - short

## [Byte, Short, Int ve Long Veri Tipleri](byte-short-int-long/)

1. Integer veri tipi ile ilgili hangisi yanlıştır ?
    - Anahtar sözcüğü : integer (Doğru)
    - 32 bit uzunluğundadır. Max 2,147,483,647 , Min -2,147,483,648 değerleri arasındadır.
    - En çok tercih edilen veri tipidir , sebebi ise optimize uzunluktadır.
    - Tam sayı türünde bir veri tipidir

2. Veri tiplerinden hangisi bellekte en az yer kaplar?
    - byte (Doğru)
    - short
    - long
    - int
    - double
    
3. Tam sayı veri tipleri arasında en geniş aralığa sahip veri tipi hangisidir ?
    - long (Doğru)
    - short
    - int
    - int
    - byte

## [Float ve Double Veri Tipleri](float-double/)

1. Float veri tipi ile ilgili bilgilerden hangisi yanlıştır ?
    - Float ile double ayırmak için , float tanımlamalardan sonra ‘float’ veya ‘FLOAT’ yazılmalıdır. (Doğru)
    - 32 Bit boyutundadır ve **1.4×10^-45** ile **3.4×10^38** aralığında bir değer tanımlanabilir.
    - Float içerisine tam sayı yazdığımız zamanda bile o sayı 1.0 şeklinde ondalıklı olarak algılar.
    - Float ile double ayırmak için , float tanımlamalardan sonra ‘f’ veya ‘F’ konulmalıdır.
    - Anahtar Sözcüğü : float

 ```
    float t, x;
    t = 35 + 5;
    x = t / 4;
    System.out.println(x);
```
 2.  Yukarıdaki programının çıktısı nedir ?
    - 10.0 (Doğru)
    - 10
    - 40
    - 40.00

3. Ondalıklı veri tipleriyle ilgili bilgilerden hangisi yanlıştır ?
    - Java hassas matematiksel işlemler, örneğin sinüs kosinüs fonksiyonları, float tipi değer döndürür. (Doğru)
    - Double tipi, yüksek duyarlıklı ve hassas matematiksel işlemlerde kullanılır.
    - Float veri tipi double veri tipine göre daha hızlıdır.
    - Double daha yavaş ve fazla yer kaplar.

## [Char ve Boolean Veri Tipleri](char-boolean/)

1. Char veri tipi ile ilgili hangi bilgi yanlıştır ?
    - Diğer dillere göre Char Java’da 32 bittir. (Doğru)
    - Java Unicode karakter setini kullanır ve tüm dilleri içerir.
    - Anahtar Sözcük : char
    - Karakterler Char ile saklanır.

2. Boolean veri tipi ile ilgili hangi bilgi doğrudur ?
    - Boolean sadece iki değer alabilir : True ve False (Doğru)
    - Boolean ekrana çıktı vermek için kullanılır.
    - Anahtar sözcüğü : bool
    - 16 bit boyutundadır
   
    
## [Temel Operatörler](temel-operatorler/)

1. Hangisi Java için geçerli bir karşılaştırma operatörü değildir?
    - `=` (Doğru)
    - `<=`
    - `>=`
    - `!=`
    - `<`
    
```
int x = 1, y = 2, r=3;
r *= x + y;
System.out.print(r)
```
2. Yukarıdaki programın çıktısı nedir ?
    - 9 (Doğru)
    - 12
    - 0
    - 1
3. Java’da değişkenin değerini 1 arttırmak için hangi operatör kullanılır ?
    - a++ (Doğru)
    - a--
    - a*
    - a+    
    - a-
    
```
byte b = 0; 
int a = b++; 
System.out.print(a);
```
4. Yukarıdaki programın çıktısı nedir ?
    - 0 (Doğru)
    - 1
    - -3
    - 4
```
t = t + i;
i = i + 1;
```    
5. Yukarıdaki ifadeye eşdeğer olan kod satırı hangisidir ?
    - `t += i++;` (Doğru)
    - `t++;`
    - `t=+i;`
    - `t--;`
    - `--i+t;`
6. Hangisi “X=X-2” işlemi ile aynı işleve sahiptir ?
    - X-=2 (Doğru)
    - X += 2
    - X++
    - X++2

7. Eğer m = −12 ve n = −5, ise m%n işleminin sonucu ne olur?
    - -2 (Doğru)
    - -3
    - -1
    - 2

## [Kullanıcıdan Veri Alma](scanner/)

1. Klavyeden girilen tüm satırı okuyan Scanner komutu hangisidir?
    - nextLine(); (Doğru)
    - nextInt();
    - nextByte();
    - next();
    - nextDouble();

2. Java dili program yapısında hazır kütüphane sınıflarını projemize eklemek için hangi deyim kullanılır?
    - import (Doğru)
    - include
    - package
    - enum
    - call

## [Karşılaştırma Operatörleri](karsilastirma-operatorleri/)

1. Java’da iki değişkenin eşitliğini kontrol eden karşılaştırma operatörü hangisidir ?
    - "==" (Doğru)
    - "="
    - <=
    - <>
    - <=>

## [Mantıksal Operatörler](mantiksal-operatorler/)

1. Girilen not 45’den büyükse geçti değilse kaldı mesajını yazan bir Java kod satırıdır ?
    - `System.out.println ( not > 45 ? "Geçti": "Kaldı");` (Doğru)
    - `System.out.println ( if (not>45) ; “Geçti”: “Kaldı”);`
    - `if (not>45) println “Geçti” else “Kaldı”;`
    - `if (not<=45) printf “Geçti” else “Kaldı”;`
    
```
boolean a = true, b = false;
System.out.println((a && b) || (a || b));
```
2. Yukarıdaki ifadenin çıktısı ne olur ?
    - true (Doğru)
    - false

## [Kod Bokları (Scope)](scope/)

1. İki küme parantezi “{“ ve “}” arasında kalan kod kesimine ne denir ?
    - scope (Doğru)
    - metot
    - sınıf
    - import

## [If ve Else Blokları](if-else/)

1. Java’daki karar mekanizmaları hakkında hangi bilgi doğrudur ?
    - İlk koşul yanlışsa, test edilecek yeni bir koşul belirtmek için eğer if else deyimi kullanılır. (Doğru)
    - Programımızda belirtilen bir koşul doğruysa yürütülecek bir kod bloğu belirtmek için else kullanılır.
    - Yürütülecek birçok alternatif kod bloğu belirtmek için while deyimi kullanılır.
    - Aynı koşul yanlışsa yürütülecek bir kod bloğu belirtmek için if deyimi kullanılır.
   
```
int var1 = 5;
int var2 = 6;
if ((var2 = 1) == var1)
    System.out.print(var2);
else
    System.out.print(++var2);
```
2. Yukarıdaki programın çıktısı nedir ?
   - 2 (Doğru)
   - 1
   - 6
   - 5
   - 0
```
int a = 20, b = 10;
if ((a < b) && (b++ < 25)){
    System.out.println(a);
}else{
    System.out.print(a);
}
System.out.println(b);
```   
3. Yukarıdaki programın çıktısı nedir ?
   - 2010 (Doğru)
   - 21
   - 1020
   - 2021
   - 2025
   
4. Java if bloğu için kullanılan sözdizimlerinden hangisi doğrudur?
   - Hepsi (Doğru)
   - ```
     if(condition)
         //statement
     ```
   - 
     ```
     if(condition){
         //statement
      }
     ```
   -
     ```
      if(condition){
         //statement
         //statement
      }
     ```


## [Switch-Case Yapısı](switch-case/)

1. Java’daki kontrol mekanizmalarından hangisi sadece eşitliği kontrol eder?
   - switch (Doğru)
   - if
   - if ve switch
   - Hiçbiri

2. Java dilinde switch bloğunun alternatifi hangisidir?
   - if ve else (Doğru)
   - goto ve exit
   - while
   - break
   - for
   
```
int points=6;
switch(points)
{
  case 6: ;
  case 7: System.out.println("Java");break;
  case 8: ;
  case 9: System.out.println("101");break;
  case 10: System.out.println("Patika"); break;
  default: System.out.println("Dev");
}

```
3. Yukarıdaki programın çıktısı ne olur ?
   - Java (Doğru)
   - 101
   - Patika
   - Dev

## [Döngü Yapıları](donguler/)

1. Hangisi Java'da bulunan döngü yapılarından değildir ?
   - goto (Doğru)
   - for
   - while
   - do-while

## [While Döngüsü](while/)

```
int a=1;
while(a<4)
{
  System.out.print(a + " ");
  a++;
}
```
1. Yukarıdaki programın çıktısı nedir ?
   - 1 2 3 (Doğru)
   - 1 2 3 4
   - 6
   - Hata verir
   
2. Java while döngüsü için sözdizimi (syntax) nasıldır ?
   - ```
        while(condition)
        {
         //statements
        }
       (Doğru)
     ```
   - ```
        while(condition);
        {
         //statements
        }
     ```
   - ```
        while
        {
            //statements
        }(contition)
     ```
   - Hiçbiri  

## [Do-While Döngüsü](do-while/)

1. Java'da WHILE ve DO-WHILE döngüsü arasındaki temel fark nedir?
   - Do-while döngüsü, koşul yanlış olsa bile döngü en az bir kez çalışır. (Doğru)
   - While döngüsü, koşul yanlış olsa bile döngü en az bir kez çalışır.
   - While döngüsü daha hızlıdır
   - Do-while döngüsü daha hızlıdır
   
```
int age=20;
do
{
  age++;
}while(age<20);

System.out.println(age);
```
   
2. Do-while döngüsüne sahip yukarıdaki Java programında "yaş"ın değeri nedir?
   - 21 (Doğru)
   - 20
   - 24
   - Hata verir
   
```
int i=1, j=1;
while(i<3)
{
  do
  {
    System.out.print(j + ",");
    j++;
  }while(j<4);
  i++;
}
```
3. Yukarıdaki programın çıktısı nedir ?
   - 1,2,3,4, (Doğru)
   - 1,2,3,4,1,2,3,4,
   - 1,2,3,1,2,3,
   - 1,2,3,

## [For Döngüsü](for/)

```
int sum = 0;
for (int i = 0, j = 0; i < 5 || j < 5; ++i, j = i + 1) {
   sum += i;
}
System.out.println(sum);
```
1. Yukarıdaki programın çıktısı nedir ?
   - 10 (Doğru)
   - 6
   - 2
   - 1

2. 7 den 77 e kadar olan sayılar, 7 şer 7 şer artıran komut satırı aşağıdakilerden hangisidir?
   - `for ( int i=7; i<=77; i+=7 );` (Doğru)
   - `for ( int k=71; k>=1; k-=10);`
   - `for ( int i=1; i<=77; i+=7 );`
   - `for ( int i=77; i<=1; i-=7 );`
   - `for ( int i=7; i<70; i=+7 );`

## [Continue ve Break Komutları](continue-break/)
```
int i=0;
for(i=1; i<=6;i++)
{
  if(i%3==0)
    continue;
  System.out.print(i+",");
}
```
1. Yukarıdaki programın çıktısı nedir ?
   - 1,2,4,5, (Doğru)
   - 1,2,
   - 3,6,
   - 1,2,4,5
   - Hata verir

```
for (int i = 1; i <= 2; ++i) {
    for (int j = 1; j < 4; ++j) {
        if (i == 1) continue;
            System.out.print(i + j);
    }
}
```
2. Yukarıdaki programın çıktısı nedir ?
   - 345 (Doğru)
   - 123
   - 234
   - 456
   - Hata verir

```
for (int k = 0; k < 9; k++) {
    System.out.print("*");   
    if (k == 3)              
        break;               
}                            
```
3. Yukarıdaki programın çıktısında kaç adet yıldız vardır  ?
   - 4 (Doğru)
   - 0
   - 3
   - 5
   - Hata verir

## [Metot Tanımı](metotlar/)
```
public class PatikaDev {
    public static void main(String args[]) {
        System.out.println(run());
    }

    int run()
    {
        return 20;
    }
}
```
1. Yukarıdaki programın çıktısı nedir ?
   - Derleme Hatası (Doğru)
   - 20
   - NULL
   - 0
   
2. Metotlarla ilgili hangi bilgi doğrudur ?
   - Metot içerisinde başka bir metot çağrılabilir. (Doğru)
   - Statik bir metot içerisinde metotlar çağrılmaz.
   - Metotlar tanımlandıkları veri tipinden farklı bir değer geriye döndürebilir.
   - Metotlar çağrılırken parametrelerin sırası önemsizdir.

```
public class PatikaDev {
    public static void main(String args[]) {
        int x = 25;
        System.out.println(run(5));
    }

    static int run(int x) {
        x = 10;
        return x;
    }
}
```
3. Yukarıdaki programın çıktısı nedir ?
   - 10 (Doğru)
   - 25
   - 5
   - Derleme Hatası

## [Return ve Void Tanımı](return-void/)
```
public class PatikaDev {
    static void show()
    {
        System.out.println("Show metodu..");
        return;
    }
    public static void main(String[] args)
    {
        show();
    }
}
```

1. Yukarıdaki programın çıktısı nedir ?
   - Show metodu... (Doğru)
   - NULL
   - Derleme Hatası Verir
   - Hiçbiri olmaz

2. Metot geriye bir değer döndürmeyecekse hangi tipte tanımlanmalıdır?
   - void (Doğru)
   - int
   - String
   - static
   - protected
   
## [Metotlarda Overloading (Aşırı Yüklenme)](overloading/)

1. Bir metodun aşırı yüklenmesi (overloading) ne demektir ?
   - Aynı isime sahip ama farklı parametrelere veya farklı türde parametrelere sahip metotlara denir. (Doğru)
   - Metodun başka bir metot içerisinde çağrılma durumuna denir.
   - Metodun geriye bir değer döndürmesi işlemine denir.
   - Metodun geriye bir değer döndürmemesi işlemine denir.

```
public class PatikaDev {
    static void show(int a, char b) {
        System.out.print("PATİKA PATİKA ");
    }

    static void show(char a, int b) {
        System.out.print("DEV DEV ");
    }

    public static void main(String[] args) {
        show(25, 'A');
        show('B', 11);
    }
}
```

2. Yukarıdaki programın çıktısı nedir ?
   - PATİKA PATİKA DEV DEV (Doğru)
   - PATİKA PATİKA PATİKA PATİKA
   - DEV DEV PATİKA PATİKA
   - DEV DEV DEV DEV

```
public class PatikaDev {
    static int info() {
        System.out.println("Patika");
        return 0;
    }

    static void info() {
        System.out.println("Dev");
    }

    public static void main(String[] args) {
        info();
    }
}
```

3. Yukarıdaki programın çıktısı nedir ?
   - Derlenme Hatası Verir (Doğru)
   - Patika
   - Dev
   - 0
   
## [Metotlarda Local Değişken Yapıları](local-variable/)

```
public class PatikaDev {
    static void number(int x, int z) {
        int y = 2;
        x = x * y;
        System.out.println(x);
    }
    public static void main(String[] args) {
        int y = 3;
        int z = 2;
        if (y != z) {
            int x = 20;
        }
        int x = 50;
        number(x, z);
    }
}
```

1. Yukarıdaki programın çıktısı nedir ?
   - 100 (Doğru)
   - Derleme Hatası Verir
   - 40
   - 60


```
public class PatikaDev {
    public static void main(String args[]) {
        String x = "Patika.dev";
        kodluyoruz(x);
        System.out.println(x);
    }
    static void kodluyoruz(String y)
    {
        String x = "Java101";
        y = "Kodluyoruz";
    }
}

```

2. Yukarıdaki programın çıktısı nedir ?
   - Patika.dev (Doğru)
   - Java101
   - Kodluyoruz
   - Derleme Hatası Verir

## [Recursive (Özyineli) Metotlar](recursive/)

1. Recursive (Özyineli) metotlar nedir ?
   - Bir metodun kendisini çağırmasına denir. (Doğru)
   - Aynı isme ama farklı parametrelere sahip metotlara denir.
   - Geriye değer döndüren metotlara denir.
   - Statik tanımlanan metotlara denir.

```
public class PatikaDev {
    public static void main(String[] args) {
        recursiveMethod(4);
    }

    static void recursiveMethod(int num) {
        num--;
        if (num == 0)
            return;
        System.out.print(num + ",");
        recursiveMethod(num);
    }
}
```

2. Yukarıdaki programın çıktısı nedir ?
   - 3,2,1 (Doğru)
   - 1,2,3,4
   - 4,3,2,1
   - Derleme Hatası Verir

```
public class PatikaDev {
    static int as(int i) {
        if (i < 2) return 1;
        else return (i * as(i - 1));
    }

    public static void main(String[] args) {
        System.out.println(as(3));
    }
}
```

3. Yukarıdaki programın çıktısı nedir ?
   - 6 (Doğru)
   - 2
   - 1
   - 3

```java
    class Recursion{
        static int basamaklarToplami(int sayi){
            if (sayi == 0){
                return 0;
            }else
               return sayi % 10 + basamaklarToplami(sayi / 10);
        }
        public static void main(String[] args){
      		  System.out.println("Basamak toplami: "+basamaklarToplami(45612));
        }
    }
```

4. Yukarıda verilen özyineleme çıktı değeri ne olur?
   - 18 (Doğru)
   - 17
   - 19
   - 20

## [Sınıf Tanımları](classes/)

1. Sınıflara ait nitelikler Java'da hangisi ile ifade edilir ?
   - Değişkenler (Doğru)
   - Döngüler
   - Karar Yapıları
   - Metotlar
   
2. Sınıflara ait davranışlar Java'da hangisi ile ifade edilir ?
   - Metotlar (Doğru)
   - If ve Else
   - Döngüler
   - Değişkenler
   
3. Sınıflar ile ilgili hangi ifade doğrudur ?
   - Sınıf ismi ile java dosya ismi aynı olmalıdır. (Doğru)
   - Sınıflarda main() metodu tanımlanmak zorundadır.
   - Sınıflarda constructor (yapıcı) metot tanımlanmalıdır.
   - Sınıflar başka sınııflardan çağrılamazlar.

## [Nesne Oluşturma ve Sınıf Metotları](object/)

1. Java ____ programlama dilidir ?
   - Nesne Yönelimli (Doğru)
   - Fonksiyonel Tabanlı
   - Modüler Tabanlı
   - Yapısal tabanlı
   
2. Java'da tek bir Sınıftan maksimum kaç nesne oluşturulabilir?
   - Sınırsız (Doğru)
   - 32
   - 64
   - 128
   - 216
   
3. Java'da yeni bir nesne yaratmak için kullanılan anahtar sözcük ___.
   - new (Doğru)
   - class
   - create
   - java
   - object
   

## [Constructor (Yapıcı) Metot Kullanımı](constructor/)

1. Aşağıdakilerden hangisinde Java sınıf kurucusunun tanımını içermektedir?
   - Kurucu metotlar bir nesne oluşturulurken yapılması gerekenlerin tanımlandığı metotlardır. (Doğru)
   - Sınıf değişkeninin yerine geçen metottur.
   - Global mettottur.
   - Katılımı sağlayan mettottur.
   
```
public class Test
{
    public Test()
    {
        System.out.printf("1");
        new Test(10);
        System.out.printf("5");
    }
    public Test(int temp)
    {
        System.out.printf("2");
        new Test(10, 20);
        System.out.printf("4");
    }
    public Test(int data, int temp)
    {
        System.out.printf("3");
          
    }
      
    public static void main(String[] args)
    {
        Test obj = new Test();          
    }
}
```
2. Yukarıdaki programın çıktısı nedir ?
   - 12345 (Doğru)
   - 15
   - 3
   - Derlenmez

3. Java'da "this" anahtar kelimesinin neden kullanılır ?
   - Sınıfa ait niteliklere erişmek için kullanılır. (Doğru)
   - Metoda ait niteliklere erişmek için kullanılır.
   - Metotlara parametre göndermek için kullanılır.
   - Kurucu metotlar içerisinde parametrelere erişmek için kullanılır.
   
## [Dizilerin Genel Mantıkları](array/)

1. Diziler hakkında hangisi yanlıştır ?
   - Dizi içerisinde farklı türde veri tipinde eleman olabilir. (Doğru)
   - Dizilerin boyutu tanımlanırken belirtilmek zorundadır.
   - Dizilerde her elemana ait indis (index) numarası vardır.
   - Dizi içinde eleman olmasa bile hafızada yer tutar.
   
2. Dizilerde indis numarası nerden başlar ?
   - 0 (Doğru)
   - 1 
   - -1
   - Kendimiz tanımlarız.
   
3. Java'da bir değişkenin dizi olduğunu hangi sembol ile belirtiriz ?
   - Köşeli Parantez [] (Doğru)
   - Süslü Parantez {}
   - Parentez ()
   - Ünlem !!
   
## [Tek Boyutlu Diziler](1D-array/)

```
int[] numbers = {35,65,95}; 
System.out.print(numbers.length + "," + numbers[1]);
```
1. Yukarıdaki programın çıktısı nedir ?
   - 3,65 (Doğru)
   - 2,65
   - 3,95
   - Derleme Hatası Verir.
   
2. Dizi tanımlanırken {} ifadesi kullanarak varsayılan değer atayabiliriz. Bu işlemi yaparken dizi boyutunu belirtmemiz gerekir ?
   - Doğru (Doğru)
   - Yanlış
   
```
int cars[], count=3;
cars = new int[count];
for(int i=0; i<cars.length; i++)
    cars[i] = (i+1)*2;
for(int j=0; j<cars.length; j++)
    System.out.print(cars[j] + ",");
```
3. Yukarıdaki programın çıktısı nedir ?
   - 2,4,6 (Doğru)
   - 0,2,4
   - 1,2,3
   - Derleme hatası verir
   
## [Çok Boyutlu Diziler](2D-array/)
 
1. Çok boyutlu dizilerde satır ve sütun indis (index) numaraları ___ ile başlar.
   - 0 (Doğru)
   - -1
   - 1
   - Dizi tanımlanırken belirtilir.
   
```
int[][] numbers;
numbers = new int[3][];
numbers[0] = {1,2};
System.out.println(numbers[0][1]);
```
2. Yukarıdaki programın çıktısı nedir ?
   - Derlenmez Hata Verir. (Doğru)
   - 0
   - 1
   - 2
   
```
public class PatikaDev {
    public static void main(String[] args) {
        int[][] arr = new int[3][];
        arr[0] = new int[1];
        arr[1] = new int[2];
        arr[2] = new int[3];
        int sum = 0;
        for (int i = 0; i < 3; ++i)
            for (int j = 0; j < i + 1; ++j)
                arr[i][j] = j + 1;
        for (int i = 0; i < 3; ++i)
            for (int j = 0; j < i + 1; ++j)
                sum += arr[i][j];
        System.out.print(sum);
    }
}
```
3. Yukarıdaki programın çıktısı nedir ?
   - 10 (Doğru)
   - 11
   - 15
   - 14
   
## [ForEach Kullanımı](foreach/)

```
public class PatikaDev {
    public static void main(String[] args) {
        int[] scores = new int[10];
        scores = new int[3];
        scores = new int[]{215, 234, 218, 189, 221, 290};

        for (int score : scores) {
            System.out.print(score + "  ");
        }
    }
}
```
1. Yukarıdaki programını çıktısı nedir ?
   - 215 234 218 189 221 290 (Doğru)
   - 215 234 218 0 0 0
   - 0 0 0
   - 215 234 218
   
2. Bir koleksiyondaki elemanlara ulaşmak için java 8'de sunulan yeni yöntem hangisidir?
   - foreach (String i : StringList) (Doğru)
   - for (String i : StringList)
   - StringList.forEach()
   - List.for()
   
## [Arrays Sınıfı ve Metotları](arrays-class/)

1. Java'da Arrays sınıfını projeye dahil etmek için hangi yöntem kullanılır?
   - import java.util.Arrays; (Doğru)
   - include Arrays;
   - use /Java/Util/Arrays;
   - Hiçbiri
   
2. Arrays sınıfında dizileri ekrana bastırmak için kullanılan metot hangisidir ?
   - Arrays.toString(dizi); (Doğru)
   - Arrays.toString();
   - Arrays.fill(dizi);
   - Arrays.print(dizi);

3. Arrays.binarySearch((dizi) metotunun doğru çalışması için dizinin önceden küçükten büyüğe sıralanması lazım ?
   - Doğru (Doğru)
   - Yanlış
   
## [Math Sınıfı ve Metotları](math-sinifi/)

1. Java'da Math sınıfı üzerinden üs alma işlemi için hangi metot kullamılır ?
   - Math.pow(); (Doğru)
   - Math.floor();
   - Math.abs();
   - Math.cos();
   
2. Java Math sınıfından 0 ile 100 arasında rastgele sayı üretmek için hangi komut kullanılır ?
   - (int) (Math.random() * 101) (Doğru)
   - Math.random() * 100
   - Math.random(100)
   - Math.random() / 100
   
## [String Sınıfı ve Metotları](string-sinifi/)

1. Java'da bir string değere ait elemanları gezmek için hangi metot kullanılır ?
   - charAt(); (Doğru)
   - equals();
   - valueOf();
   - toString();
   
2. Java String sınıfına ait equals(); metodu iki string ifadeyi karşılaştırmak için kullanılır. Bu karşılaştırmada küçük büyük harf duyarı yoktur ?
   - Doğru 
   - Yanlış (Doğru)
