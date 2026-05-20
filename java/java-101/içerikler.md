# Java 101

## [Java Nedir?](what-is-java/)
1. Aşağıdakilerden hangisi Java'nın özelliklerinden değildir?
- Gömülü sistemlerde programlama imkanı sağlar.
- Java kararlı bir programlama dilidir.
- Java platform bağımsız bir dildir.
- Java nesneye dayalı bir dil değildir. (Doğru)

## [Java ile Uygulama Geliştirme Yapabileceğiniz Alanlar](uygulama-alanlari/)
1. Aşağıdakilerden hangisi java uygulama geliştirme altyapılarındandır?
- Java EE (Doğru)
- Java SX
- Java MX
- Java X
  
## [Java Geliştirme Ortamının Kurulumu](java-geliştirme-ortaminin-kurulumu/)
1. Aşağıdakilerden hangisi java ile yazılmış uygulamalarını çalıştırmak için gereklidir?
- JRE (Doğru)
- JDK
- JE
- JM
  
## [Geliştirme Araçlarının Kurulumu](gelistirme-araclarinin-kurulumu/)
1. Aşağıdakilerden hangisi eclipse modülerliğini sağlayan  altyapı yazılımıdır?
- Equinox (Doğru)
- SWT
- TDK
- JFace

## [İlk Uygulama](hello-world/)
1. Aşağıdakilerden hangisi JDK içinde tanımlı statik bir fonksiyondur?
- String[] args (Doğru)
- Void
- System.out.println()
- Main
  
## [JDK-JRE-JVM](JDK-JRE-JVM/)
1. Aşağıdakilerden hangisi Heap tanımını içermektedir?
- Hafıza alanına Java'da sınıflarından oluşturulan nesneleri depolamaktadır. (Doğru)
- Fonksiyonları bir arada tutan değişkendir.
- Java koleksiyon sınıdına ait bir terimdir.
- Javada en çok kullanılan fonksiyondur.
  
## [Java Basic Syntax](java-basic-syntax/)
1. Aşağıdakilerden hangisi Java'da sınıfa ait kaynak kodları ......... dosyaların içine yazılır?
- class (Doğru)
- java
- javac
- jv
  
2. Aşağıdakilerden hangisi Java'da tanımlayıcı isimlendirme kurallarındandır?
-  İlk karakter harf, $ işareti ve _ (alt çizgi) ile başlayabilir. (Doğru)
- Rakam ve sayı isimlendirmeleri başında yer alır.
- Büyük küçük harf duyarlılığı yoktur.
- Class ismi kullanılabilir.
  
## [Objects & Classes & Constructors](objects-classes-constructors/)

## [Sınıf Kavramının Temelleri](sinif-kavraminin-temelleri/)

1. Aşağıdakilerden hangisi Java sınıfın içinde tanımladığımız değişkenlere o sınıfın...... denir?
- Fields (Doğru)
- Metotu
- Fonksiyonu
- Hafızası

## [Nesne Oluşturmak](nesne-olusturmak/)

1. Aşağıdakilerden hangisinde Java'da yapılandırıcı yazmazsak  yerine ........... ekler?
- Default constructor (Doğru)
- Metot
- Değişken
- Sınıf

## [Java&#39;da Sınıf Kurucuları (Constructors)](sinif-kuruculari-(Constructors)/)
1. Aşağıdakilerden hangisinde Java sınıf kurucusunun tanımını içermektedir?
- Sınıf değişkeninin yerine geçen metottur.
- Kurucu metotlar bir nesne oluşturulurken yapılması gerekenlerin tanımlandığı metotlardır. (Doğru)
- Global mettottur.
- Katılımı sağlayan mettottur.

## [Metotlara Giriş](metotlara-giris/)
```java
    class MyClass
    {
    	int year = 2019;
        
    	void myMethod()
    	{
    		int year = 2020;
    		System.out.println(year);
    	}
    }
    MyClass myObject = new MyClass();
    myObject.myMethod();
```
Yukarıda yazılan kodlarda yapılmak istenen işlem nedir?
- Değer döndürme işlemi yapılmaktadır.
- Sınıf değişkeninin gizlenmesi (Doğru)
- Fonksiyon tanımlaması
- Değişken ataması

## [Metotları aşırı yüklemek (overloading methods)](metotlari-asiri-yuklemek-(overloading-methods)/)

1. Aşağıdakilerden hangisinde overloading mehtodlara uygun ifade değildir?
- Aynı işi yapan fakat parametreleri farklı olan metotlara aynı ismi verebiliriz.
- Aynı işi yapan fakat parametreleri farklı olan iki metoda farklı isimler vermek zorundayız.
- Metot biçimini değiştiren kavramdır. (Doğru)
- Parametreleri aynı olan birden fazla aşırı yüklenmiş metottur.

## [Yapılandırıcıları aşırı yüklemek](yapilandiricilari-asiri-yuklemek/)
1. New anahtar kelimesi neden kullanılmaktadır?
- Parametrelere göre doğru yapılandırıcı çağrır. (Doğru)
- Nesne türetmek için kullanılır.
- Nesne katılımı için kullanılmaktadır.
- Sınıfa atama yapmak için kullanılır.

## [Bir yapılandırıcıdan diğerini çağırmak](yapilandiricidan-digerini-cagirmak/)
1. Aşağıdakilerden hangisinde bir yapılandırıcıdan diğerini çağırmak için kullanılmaktadır?
- This (Doğru)
- Loop
- For
- Default
  
## [Özyineleme (Recursion)](ozyineleme-(recursion)/)
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
Yukarıda verilen özyineleme çıktı değeri ne olur?
- 17
- 19
- 20
- 18 (Doğru)
  
## [Erişim Denetimi](erisim-denetimi/)
1. Aşağıdakilerden hangisi protected erişim belirteci için doğrudur?
- Yalnızca aynı paket içinden veya alt sınıflardan erişilebilir. (Doğru)
- Metotlara, değişkenlere ve yapıcı sınıflara (constructors) uygulanmaz.
- Her yerden erişilebilir.
- Gizlilik seviyesi en düşük olan erişim belirtecidir.

## [Statik Metotlar](statik-metotlar/)
1. Aşağıdakilerden hangisi statik metotlar kullanılan  deyimler değildir?
- For
- IF
- This (Doğru)
- Do while

## [Statik Değişkenler](statik-degiskenler/)
1. Statik değişkenlere ilk değerlerini vermek için...........kullanırız.
- Static initialization blocks (Doğru)
- If bloğu
- Metot
- This
  
## [İç İçe Sınıflar (Nested Classes)](ic-ice-siniflar-(nested-classes)/)
1. 
```java
  class Outer
  {
  	private int number = 10;
  	
      public void run()
      {
  		System.out.println(number);
          
  		Inner inner = new Inner();
  		inner.run();
  		
          System.out.println(number);
  	}
  
      class Inner
  	{
  		public void run()
  		{
  			number++;
  		}
  	}
  }
```
Yukarıdaki verilen iç içe sınıf çıktısını ne olur?
A) (Doğru)
```java
  10
  11
```
B)
```java
  12
  11
```
C)
```java
  11
  10
```
D)
```java
  11
  11
```

## [Java&#39;da Paketler (Packages)](paketler/)
1. Aşağıdakilerden hangisi  import package.name.* ne anlama geldiğini  belirtir?
- Tek bir sınıf import edilir.
- Tüm paket import edilir. (Doğru)
- Name paketini import edilir.
- Math paketini import edilir.
  
## [Değişkenler (Variables)](degiskenler/)
```java
  double result = Math.sqrt(16.0);
```
Yukarıda verilen kodun çıktısı ne olur?
- Result değişkeninin değeri 4.0 olur. (Doğru)
- Hata fırlatır.
- 16 yazar.
- 16.0 yazar.
  
## [Değişlenlerin Kapsamı ve Yaşam Süresi](degiskenlerin-kapsami-ve-yasam-suresi/)
1. Aşağıdakilerden hangisi değişkenlerin kapsamı ve yaşam süresi için yanlış ifadedir?
- İlkel veri türüne sahip değişkenler kapsam dışına çıkınca otomatik olarak hafızadan da silinirler. (Doğru)
- İlkel olmayan veri türündeki değişkenler kapsam dışına çıksa da hafızada kalmaya devam edebilir.
- Bir değişkenin kapsamı tanımlandığı kod bloğuyla sınırlıdır.
- Değişkenlerin yaşam süresi kısadır.
  
## [Yerel Değişken](yerel-degisken/)
```java
  if(kosul > 0)
  {
      public int degisken = 10;
  }
```
Yukarıda verilen kodun çıktısı ne olur?
- 12
- 18
- 20
- Hata verir. (Doğru)

## [Sabit Değişken](sabit-degiskenler/)
1. Aşağıdakilerden hangisi class’ın bir field’i (alanı) olarak tanımlanan değişkenlere denir?
- INSTANCE VARIABLE (Doğru)
- Heap
- Stack
- Main
  
## [İlkel Veri Tipleri](veri-tipleri/)

1. Aşağıdakilerden hangisi byte veri tipi değerleridir?
- -128 ile 127  (Doğru)
- -32,768 ile 32,767
- \- 2,147,483,648 ile 2,147,483,647
- 127 ile 128

## [Tür Dönüşümleri](tur-donusumleri/)
1. Aşağıdakilerden hangisi explicit type casting için yanlış ifadedir?
- Daha kapsayıcı bir türden daha az kapsayıcı bir türe doğru yapılan dönüşümlere denir. (Doğru)
- Eğer değer aralığı düşük bir türden yüksek bir türe dönüşüm yapılıyorsa burada dolaylı tür dönüşümü söz konusudur.
- byte, short, int, float, double. veri tiplerine denir.
- Genişleyen dönüşüm denir.

## [Unicode Karakter Sistemi](unicode-karakter-sistemi/)
1. Aşağıdakilerden hangisi /r  ifadesi unicode karakter sistemine karşılık gelir?
- Satırbaşı (0x0d) (Doğru)
- Yeni satır (0x0a)
- Boşluk (0x20)
- Geri tuşu (0x08)

## [Temel Operatörler & Aritmatik Operatörü](operatorler-aritmatik-operatoru/)
```java
  int x = 12;
  double y =13.12;
  System.out.println(--x);
  System.out.println(--y);
```
Yukarıda verilen kodun çıktısı ne olur?
- 11 12.12 (Doğru)
- 12 11
- 12 13.12
- 25.00
  
## [İlişkisel ve Eşitlik Operatörleri](iliskisel-esiktik-oparotorleri/)

```java
    public class Kodluyoruz {
    public static void main(String[] args) {
     int x = 10;
     int y = 4;
     boolean sonuç;
    sonuç = (x != y);
     System.out.println("x != y = " + sonuç);
       }
    }
```
Yukarıda verilen kodun çıktısı ne olur?
- x != y = true (Doğru)
- Hata verir
-  x=10 y=4
- Sonuç
  
## [Bitsel Operatörler](bitsel-operatorler/)
1. Aşağıdakilerden hangisi  `\>>>`  bitsel operatörün karşılığıdır?

- Sağa kaydırma
- Sıfırlı sağa kaydırma (Doğru)
- Sola kaydırma
- Sola sıfırlı kaydırma

## [Mantıksal Operatörler](mantıksal-operatorler/)
1. Aşağıdakilerden hangisi "instanceof" operatörü için doğru ifadedir?
- İlkel veri tipleri için bu operatör kullanılır.
- Java'daki "if-else" yapısı yerine kullanılabilir.
- Nesne tipinde değişkenler için kullanılabilir.
- Eşittir operatörüdür.

## [Operatör Önceliği](operator-onceligi/)
1. Aşağıdakilerden hangisi -> operatörünün ifade eder?
- Lambda operatörü (Doğru)
- Eksiltme operatörü
- Karesini alma operatörü
- Çıkarma operatörü
- Variable, data types ve literals arasındaki farklar

## [Input/Output Classes](input-output-classes/)
1. Aşağıdakilerden hangi paket  girdi-çıktı sınıfları içinde yer alır?
- Java import
- Java.io (Doğru)
- Java.math
- Java.op

## [File sınıfı](file-sinifi/)
1. Aşağıdakilerden hangisi File getAbsoluteFile() metodunu doğru ifade eder?
- Dosyanın tam yolunu String olarak döndürür.
- Dosyanın bulunduğu klasörün ismini String olarak döndürür. Eğer yoksa null döndürür.
- Dosyanın tam yolunu File olarak döndürür. (Doğru)
- Bu programın dosyaya yazma yetkisi olup olmadığını denetler.

## [Akış Sınıfları](akis-siniflari/)
1. Aşağıdakilerden hangisi voidwrite(int c) metodunu doğru ifade eder?
- Akışa bir byte değeri yazar. Bu değeri parametre olarak alır. (Doğru)
- Parametre olarak verilen sayı kadar byte değerini okumadan atlar.
- Parametre olarak aldığı byte dizisinin içindeki bütün byte değerlerini sırasıyla akışa yazar.
- Dosyanın sonuna kadar bütün byte değerlerini okur ve bir dizi halinde döndürür.
## [Dosya kopyalamak](dosya-kopyalamak/)

1. Aşağıdakilerden hangisi ByteArrayInputStream sınıfının tanımına karşılık gelir?
- Hedef olarak bir byte dizisi kullanan akış sınıfıdır.
- Bir byte dizisini tıpkı bir akış gibi okumanızı sağlayan sınıftır. (Doğru)
- Akışlara veri yazmak için kullanılır.
- Veri yazan bir sınıftır.
  
## [ObjectInputStream ve ObjectOutputStream sınıfları](ObjectInputStream-ObjectOutputStream-siniflari/)
1. Bir nesneyi serialize edebilmek için o sınıfın........... kullanmalıyız?
- Serializable Arayüzünü (Doğru)
- Soyut Arayüzünü
- Çıktı Arayüzü
- Giriş Arayüzünü

## [Reader & Writer](reader-writer/)

1. CharArrayReader sınıfı neden kullanılmaktadır?
- Bir karakter dizisine tıpkı bir akış gibi yazmak için kullanılır.
- Bir karakter dizisini tıpkı bir akış gibi okumak için kullanılır. (Doğru)
- Parametre olarak aldığı metni akışa yazar.
- Karakter akışlarına veri yazmak için kullanılan soyut bir sınıftır.
- Replit, BlueJ, Eclipse, IntelliJ, NetBeans (İleri Seviye)

## [If Statements](if-statements/)
```java
  if(creditRatio > 0.8) {
  	System.out.println("Kurumsal kredi");
  }
  else {
  	System.out.println("Standart kredi");
  }
```
Yukarıda verilen kodun anlamı nedir?
- Eğer, faiz oranı %80'den büyükse "Kurumsal kredi" tipinde kredi ver, değilse "Standart Müşteri" tipinde kredi ver. (Doğru)
- Eğer, faiz oranı %80'den büyükse "Standart kredi"  ver.
- Eğer, faiz oranı %80'den büyükse "Kurumsal kredi" ver.
- Eğer faiz oranı %80 büyük eşitse  "Kurumsal kredi" ver.

## [Java&#39;da "switch-case" Yapıları](switch-case/)
1. 
```java
    class Kodluyoruz
    {
    	public static void main(String[] args)
    	{
    
            System.out.println("1'den 11'a kadar sayıyorum...");
    
            for (int i = 1; i <= 11; i++)
    		{
    			System.out.println(i);
    		}
    
            System.out.println("Saydım.");
    	}
    }
```
Yukarıda verilen kodun çıktısı ne olur?
- A) (Doğru)
```java
    1'den 11'a kadar sayıyorum...
    1
    2
    3
    4
    5
    6
    7
    8
    9
    11
    Saydım.
```
- B)
```java
  1'den 10'a kadar sayıyorum...
  1
  2
  3
  4
  5
  6
  7
  8
  9
  Saydım.
```
- C)
```java
  1'den 10'a kadar sayıyorum...
  1
  2
  3
  4
  5
  6
  7
  8
  9
  10
```
- D)
```java
  1'den 11'a kadar sayıyorum...
  1
  2
  3
  4
  5
  6
  7
  8
  9
  10
  Saydım.
```

## [Loops(for, foreach, while)](loops/)
1. Java'da döngü mekanizmaları neden kullanılır?
- Kodun akış yönünü belirlemek için kullanılır. (Doğru)
- Kodun yapısını belirlemek için kullanılır.
- Çıktı almak için kullanılır.
- Kodu sabitlemek için kullanılır.
  
## [While Döngüsü](while/)
1. 
```java
    int left = 200, right = 300;
    while (++left < --right);
    System.out.println("200 ile 300'ün ortası: " + left);
```
Yukarıda verilen kodun çıktısı ne olur?
- 200 ile 300'ün ortası:
- 200 ile 300'ün ortası: 250 (Doğru)
- 250
- Left

## [Do-While Döngüsü](do-while/)

1. 
```java
    int year = 2021;
    do
    {
    	System.out.println(“Döngü işletiliyor”);
    	year++;
    } while (year < 2021);
```
Yukarıda verilen kodu çıktısı ne olur?
- 2021
- 2020
- Döngü işletiliyor (Doğru)
- Hata verir

## [For Döngüsü](for-loops/)
1. 
```java
    for (int i = 1; i < 11; i++)
    {
    	System.out.println(i);
    }
```
Yukarıda verilen kodun çıktısı ne olur? 
- A)
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
- B) 
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
    10
```
- C) (Doğru)
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
    10
    11
```
- D)
```java
    0
    2
    3
    4
    5
    6
    7
    8
    9
```

## [Break & Continue](break-continue/)
1. 
```java
    for (int i = 0; i <= 12; i += 2)
    {
    	if (i == 4)
    	{
    		continue;
    	}
    	
        System.out.println(i);
    }
```
Yukarıda verilen kodun çıktısı ne olur?
- A)
```java
    0
    2
    6
    8
    10
```
- B) (Doğru)
```java
    0
    2
    6
    8
    10
    12
```
- C)
```java
    0
    2
    6
    8
    12
```
- D)
```java
    0
    2
    6
    8
    11
```

## [For-Each & Nested Loops](for-each-nested-loops/)
1. Aşağıdakilerden hangisi iç içe döngüler içinde kullanılır?
- For  (Doğru)
- This
- Super
- Regex

## [Numbers & Strings](numbers-strings/)
1. Java'da performanslı String birleştirme işlemleri için........ kullanılmaktadır?
- StringJx
- StringMetod
- StringBuilder (Doğru)
- + operotörü

## [Diziler (Arrays)](arrays/)
1. Aşagıdakilerden hangisi dizinin boyutunu vermektedir?
-  Count
- Length (Doğru)
- Max
- Array

## [Matrisler (Matrice)](matris-islemleri/)
1. 
```java
   int[][] array = {{2, 3}, {4, 5}, {6, 7}};
          for (int i = array.length - 1; i >= 0; i--) {
              for (int j = array[i].length - 1; j >= 0; j--) {
                  System.out.print(array[i][j] + " ");
              }
              System.out.println();
          }
```
Yukarıda verilen kodun çıktısı ne olur?
- A) 
```java
  6 5 
  4 3 
  2 1 
```
- B) (Doğru)
```java
  7 6
  5 4
  3 2
```
- C)
```java
  7 5 
  4 3 
  2 1 
```
- D)
```java
  7 5 
  4 3 
  3 1 
```

## [Date & Time](date-time/)
1. Aşağıdakilerden hangisi tarih ve zaman bilgisini işleyen yapılar ve sınıflar ...... sürümde değiştirilmiştir?
- Java 8 (Doğru)
- Java 6
- Java 7
- Java 9

## [Java Regular Expressions](regular-expressions/)
1. Aşağıdakilerden hangisi + belirteci regular expressions ............. amaçla kullanır?
- Kendisinden önceki karakterin metinde 1 defa bulunduğunu belirtir.
- Kendisinden önceki karakterin metinde en az 1 defa bulunduğunu belirtir. (Doğru)
- Kendisinden önceki karakterin metinde en az n, en çok m defa bulunduğunu belirtir.
- Kendisinden önceki karakterin metinde bulunmadığını veya 1 ya da daha fazla defa bulunduğunu belirtir.

## [Exception Handling](exception-handling/)
1. Aşağıdakilerden hangisi RuntimeException hatasını tanımına karşılık gelir?
-  Geçersiz ya da hatalı bir işlem sonucunda uygulamada oluşan hatalardır. (Doğru)
- Kullanıcı tanımlı Exception sınıfları dahil olmak üzere tüm Exception alt sınıflarının ATA sınıfıdır. 
- Exception hiyerarşinin en üstündeki sınıftır.
-  Programdaki ciddi hatalı temsil eder.

## [İstisnai Durumların Yönetilmesi](istisnai-durumlarin-yonetilmesi/)
1. 
```java
    import java.io.File;  // Import the File class
    import java.io.FileNotFoundException;  // Import this class to handle errors
    import java.util.Scanner; // Import the Scanner class to read text files
    
    public class ReadFile {
      public static void main(String[] args) {
        try {
          File myObj = new File("filename.txt");
          Scanner myReader = new Scanner(myObj);
          while (myReader.hasNextLine()) {
            String data = myReader.nextLine();
            System.out.println(data);
          }
          myReader.close();
        }catch (Exception e){
            System.out.println("An error occurred.");
            e.printStackTrace();
        } catch (FileNotFoundException e) {
          System.out.println("An error occurred.");
          e.printStackTrace();
        } 
      }
    }
```
Lütfen yukarıda yapılan hatayı bulunuz ve çözüm yöntemini seçiniz?
- File sınıfı yerine FileReader sınıfı kullanılmalıydı.
- Catch blokları yanlış kurgulanmıştır. Öncelikle FileNotFoundException bloğu gelmeliydi. (Doğru)
- try bloğu içerisine yalnızca döngü konulmalıydı. myobj ve myReader nesnelerin oluşturulması dışarıda yapılmalıydı.
- while döngüsü içerisinde myReader.nextline() ifadesinin bulunduğu satır bir try ifadesi içerisine alınmalıdır.

2. 
```java
    import java.util.Scanner;
    
    class Main {
      public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);
    
        System.out.println("Enter name, age and salary:");
    
        // String input
        String name = myObj.nextLine();
    
        // Numerical input
        int age = myObj.nextInt();
        double salary = myObj.nextDouble();
    
        // Output input by user
        System.out.println("Name: " + name); 
        System.out.println("Age: " + age); 
        System.out.println("Salary: " + salary); 
      }
    }
```
Yukarıdaki programın kullanıcıları geliştiricilerine programın bazen çöktüğünü bazen çalıştığını söylemişlerdir. Programın çökmesini engellemek için aşağadıkilerden hangisi yapılmalıdır?
- System.out.println() fonksiyonu işletilen satırlar try-catch bloklarının içine alınmalı ve gerekli durumlarda programın davranışı düzenlenmelidir.
- Scanner sınıfı yerine GetInput sınıfı kullanılmalıdır.
- Main fonksiyonunun dönüş tipi void yerine String yapılmalı ve değerler dönüş değeri olarak verilmelidir.
- NextInt() ve nextDouble işletilen satırlar try-catch bloklarının içine alınmalı ve gerekli durumlarda programın davranışı düzenlenmelidir. (Doğru)

## [İstisnai Durumların Yönetilmesi (Devam)](istisnai-durumlarin-yonetilmesi-devam/)