# Java 101

- [ ] [Java Nedir?](what-is-java/)
  
  **1.Aşağıdakilerden hangisi Java'nın özelliklerinden değildir?**
  
  A.Gömülü sistemlerde programlama imkanı sağlar.
  
  B.Java kararlı bir programlama dilidir.
  
  C.Java platform bağımsız bir dildir.
  
  D.Java nesneye dayalı bir dil değildir.(Doğru)
  
  - [ ] [Java ile Uygulama Geliştirme Yapabileceğiniz Alanlar](uygulama-alanlari/)
  
    **1.Aşağıdakilerden hangisi java uygulama geliştirme altyapılarındandır?**
  
    A.Java EE(Doğru)
  
    B.Java SX
  
    C.Java MX
  
    D.Java X
  
  - [ ] [Java Geliştirme Ortamının Kurulumu](java-geliştirme-ortaminin-kurulumu/)
  
    **1.Aşağıdakilerden hangisi java ile yazılmış uygulamalarını çalıştırmak için gereklidir?**
  
    A.JRE(Doğru)
  
    B.JDK
  
    C.JE
  
    D.JM
  
  - [ ] [Geliştirme Araçlarının Kurulumu](gelistirme-araclarinin-kurulumu/)
  
    **1.Aşağıdakilerden hangisi eclipse modülerliğini sağlayan  altyapı yazılımıdır?**
  
    A.Equinox(Doğru)
  
    B.SWT
  
    C.TDK
  
    D.JFace
  
  - [ ] [İlk Uygulama](hello-world/)
  
    **1.Aşağıdakilerden hangisi JDK içinde tanımlı statik bir fonksiyondur?**
  
    A.String[] args(Doğru)
  
    B.Void
  
    C.System.out.println()
  
    D.Main
  
- [ ] [JDK-JRE-JVM](JDK-JRE-JVM/)
  
  **1.Aşağıdakilerden hangisi Heap tanımını içermektedir?**
  
  A.Hafıza alanına Java'da sınıflarından oluşturulan nesneleri depolamaktadır.(Doğru)
  
  B.Fonksiyonları bir arada tutan değişkendir.
  
  C.Java koleksiyon sınıdına ait bir terimdir.
  
  D.Javada en çok kullanılan fonksiyondur.
  
  - [ ] [Java Basic Syntax](java-basic-syntax/)
  
    **1.Aşağıdakilerden hangisi Java'da sınıfa ait kaynak kodları ......... dosyaların içine yazılır?**
  
    A.class(Doğru)
  
    B.java
  
    C.javac
  
    D.jv
  
    **2.Aşağıdakilerden hangisi Java'da tanımlayıcı isimlendirme kurallarındandır?**
  
    A. İlk karakter harf, $ işareti ve _ (alt çizgi) ile başlayabilir.(Doğru)
  
    B.Rakam ve sayı isimlendirmeleri başında yer alır.
  
    C.Büyük küçük harf duyarlılığı yoktur.
  
    D.Class ismi kullanılabilir.
  
- [ ] [Objects & Classes & Constructors](objects-classes-constructors/)

  - [ ] [Sınıf Kavramının Temelleri](sinif-kavraminin-temelleri/)

    **1.Aşağıdakilerden hangisi Java sınıfın içinde tanımladığımız değişkenlere o sınıfın...... denir?

    A.Fields(Doğru)

    B.Metotu

    C.Fonksiyonu

    D.Hafızası

  - [ ] [Nesne Oluşturmak](nesne-olusturmak/)

    **1.Aşağıdakilerden hangisinde Java'da yapılandırıcı yazmazsak  yerine ........... ekler?**

    A.Default constructor(Doğru)

    B.Metot

    C.Değişken

    D.Sınıf

  - [ ] [Java&#39;da Sınıf Kurucuları (Constructors)](sinif-kuruculari-(Constructors)/)

    **1.Aşağıdakilerden hangisinde Java sınıf kurucusunun tanımını içermektedir?**

    A.Sınıf değişkeninin yerine geçen metottur.

    B.Kurucu metotlar bir nesne oluşturulurken yapılması gerekenlerin tanımlandığı metotlardır.(Doğru)

    C.Global mettottur.

    D.Katılımı sağlayan mettottur.

  - [ ] [Metotlara Giriş](metotlara-giris/)

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

    **Yukarıda yazılan kodlarda yapılmak istenen işlem nedir?**

    A.Değer döndürme işlemi yapılmaktadır.

    B.Sınıf değişkeninin gizlenmesi(Doğru)

    C.Fonksiyon tanımlaması

    D.Değişken ataması

  - [ ] [Metotları aşırı yüklemek (overloading methods)](metotlari-asiri-yuklemek-(overloading-methods)/)

    **1.Aşağıdakilerden hangisinde overloading mehtodlara uygun ifade değildir?**

    A. Aynı işi yapan fakat parametreleri farklı olan metotlara aynı ismi verebiliriz.

    B.Aynı işi yapan fakat parametreleri farklı olan iki metoda farklı isimler vermek zorundayız.

    C.Metot biçimini değiştiren kavramdır.(Doğrudur.)

    D.Parametreleri aynı olan birden fazla aşırı yüklenmiş metottur.

  - [ ] [Yapılandırıcıları aşırı yüklemek](yapilandiricilari-asiri-yuklemek/)

    **1.New anahtar kelimesi neden kullanılmaktadır?**

    A.Parametrelere göre doğru yapılandırıcı çağrır.(Doğru)

    B.Nesne türetmek için kullanılır.

    C.Nesne katılımı için kullanılmaktadır.

    D.Sınıfa atama yapmak için kullanılır.

  - [ ] [Bir yapılandırıcıdan diğerini çağırmak](yapilandiricidan-digerini-cagirmak/)

    **1.Aşağıdakilerden hangisinde bir yapılandırıcıdan diğerini çağırmak için kullanılmaktadır?**

    A.This(Doğru)

    B.Loop
  
    C.For
  
    D.Default
  
  - [ ] [Özyineleme (Recursion)](ozyineleme-(recursion)/)
  
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
    **Yukarıda verilen özyineleme çıktı değeri ne olur?**
    
    A.17
    
    B.19
    
    C.20
    
    D.18(Doğru)
  
- [ ] [Erişim Denetimi](erisim-denetimi/)
  
  **1.Aşağıdakilerden hangisi protected erişim belirteci için doğrudur?**
  
  A.Yalnızca aynı paket içinden veya alt sınıflardan erişilebilir.(Doğrudur)
  
  B.Metotlara, değişkenlere ve yapıcı sınıflara (constructors) uygulanmaz.
  
  C.Her yerden erişilebilir.
  
  D.Gizlilik seviyesi en düşük olan erişim belirtecidir.
  
- [ ] [Statik Metotlar](statik-metotlar/)
  
  **1.Aşağıdakilerden hangisi statik metotlar kullanılan  deyimler değildir?**
  
  A.For
  
  B.IF
  
  C.This(Doğrudur)
  
  D.Do while
  
- [ ] [Statik Değişkenler](statik-degiskenler/)
  
  **1.Statik değişkenlere ilk değerlerini vermek için...........kullanırız.**
  
  A.Static initialization blocks(Doğrudur.)
  
  B.If bloğu
  
  C.Metot 
  
  D.This
  
- [ ] [İç İçe Sınıflar (Nested Classes)](ic-ice-siniflar-(nested-classes)/)
  
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
  1.Yukarıdaki verilen iç içe sınıf çıktısını ne olur?
  
  A)(Doğru)
  
  ```java
  10
  11
  ```
  
  B
  
  ```java
  12
  11
  ```
  C
  
  ```java
  11
  10
  ```
  D
  
  ```java
  11
  11
  ```
  
- [ ] [Java&#39;da Paketler (Packages)](paketler/)
  
  **1.Aşağıdakilerden hangisi  import package.name.* ne anlama geldiğini  belirtir?**
  
  A.Tek bir sınıf import edilir.
  
  B.Tüm paket import edilir.(Doğru)
  
  C.Name paketini import edilir.
  
  D.Math paketini import edilir.
  
- [ ] [Değişkenler (Variables)](degiskenler/)
  
  ```java
  double result = Math.sqrt(16.0);
  ```
  **Yukarıda verilen kodun çıktısı ne olur?**
  A.Result değişkeninin değeri 4.0 olur.(Doğru)
  
  B.Hata fırlatır.
  
  C.16 yazar.
  
  D.16.0 yazar.
  
  - [ ] [Değişlenlerin Kapsamı ve Yaşam Süresi](degiskenlerin-kapsami-ve-yasam-suresi/)
  
    **1.Aşağıdakilerden hangisi değişkenlerin kapsamı ve yaşam süresi için yanlış ifadedir?**
  
    A.İlkel veri türüne sahip değişkenler kapsam dışına çıkınca otomatik olarak hafızadan da silinirler.(Doğru)
  
    B.İlkel olmayan veri türündeki değişkenler kapsam dışına çıksa da hafızada kalmaya devam edebilir.
  
    C.Bir değişkenin kapsamı tanımlandığı kod bloğuyla sınırlıdır.
  
    D.Değişkenlerin yaşam süresi kısadır.
  
- [ ] [Yerel Değişken](yerel-degisken/)
  
  ```java
  if(kosul > 0)
  {
      public int degisken = 10;
  }
  ```
  **Yukarıda verilen kodun çıktısı ne olur?**
  
  A.12
  
  B.18
  
  C.20
  
  D.Hata verir.(Doğru)
  
  - [ ] [Sabit Değişken](sabit-degiskenler/)
  
    **1.Aşağıdakilerden hangisi class’ın bir field’i (alanı) olarak tanımlanan değişkenlere denir?**
  
    A.INSTANCE VARIABLE(Doğru)
  
    B.Heap
  
    C.Stack
  
    D.Main
  
  - [ ] [İlkel Veri Tipleri](veri-tipleri/)
  
    **1.Aşağıdakilerden hangisi byte veri tipi değerleridir?**
  
    A.-128 ile 127 (Doğru)
  
    B.-32,768 ile 32,767
  
    C.\- 2,147,483,648 ile 2,147,483,647
  
    D.127 ile 128
  
  - [ ] [Tür Dönüşümleri](tur-donusumleri/)
  
    **1.Aşağıdakilerden hangisi explicit type casting için yanlış ifadedir?**
  
    A.Daha kapsayıcı bir türden daha az kapsayıcı bir türe doğru yapılan dönüşümlere denir.(Doğru)
  
    B.Eğer değer aralığı düşük bir türden yüksek bir türe dönüşüm yapılıyorsa burada dolaylı tür dönüşümü söz konusudur.
  
    C.byte, short, int, float, double. veri tiplerine denir.
  
    D.Genişleyen dönüşüm denir.
  
  - [ ] [Unicode Karakter Sistemi](unicode-karakter-sistemi/)
  
    **1.Aşağıdakilerden hangisi /r  ifadesi unicode karakter sistemine karşılık gelir?**
  
    A.Satırbaşı (0x0d)(Doğrudur)
  
    B.Yeni satır (0x0a)
  
    C.Boşluk (0x20)
  
    D.Geri tuşu (0x08)
  
- [ ] [Temel Operatörler & Aritmatik Operatörü](operatorler-aritmatik-operatoru/)
  
  ```java
  int x = 12;
  double y =13.12;
  System.out.println(--x);
  System.out.println(--y);
  ```
  **Yukarıda verilen kodun çıktısı ne olur?**
  
  A.11 12.12(Doğrudur)
  
  B.12 11
  
  C.12 13.12
  
  D.25.00
  
  
  - [ ] [İlişkisel ve Eşitlik Operatörleri](iliskisel-esiktik-oparotorleri/)
  
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
    **Yukarıda verilen kodun çıktısı ne olur?**
  
    A.x != y = true(Doğru)
  
    B.Hata verir
  
    C. x=10 y=4
  
    D.Sonuç
  
  - [ ] [Bitsel Operatörler](bitsel-operatorler/)
  
    **1.Aşağıdakilerden hangisi  \>>>  bitsel operatörün karşılığıdır?**
  
    A.Sağa kaydırma
  
    B.Sıfırlı sağa kaydırma(Doğru)
  
    C.Sola kaydırma
  
    D.Sola sıfırlı kaydırma
  
  - [ ] [Mantıksal Operatörler](mantıksal-operatorler/)
  
    **1.Aşağıdakilerden hangisi "instanceof" operatörü için doğru ifadedir?**
  
    A.İlkel veri tipleri için bu operatör kullanılır.
  
    B. Java'daki "if-else" yapısı yerine kullanılabilir.
  
    C.Nesne tipinde değişkenler için kullanılabilir.
  
    D.Eşittir operatörüdür.
  
  - [ ] [Operatör Önceliği](operator-onceligi/)
  
    **1.Aşağıdakilerden hangisi -> operatörünün ifade eder?**
  
    A.Lambda operatörü(Doğru)
  
    B.Eksiltme operatörü
  
    C.Karesini alma operatörü
  
    D.Çıkarma operatörü
  
- [ ] Variable, data types ve literals arasındaki farklar

- [ ] [Input/Output Classes](input-output-classes/)
  
  **1.Aşağıdakilerden hangi paket  girdi-çıktı sınıfları içinde yer alır?**
  
  A.Java import
  
  B.Java.io(Doğru)
  
  C.Java.math
  
  D.Java.op
  
  - [ ] [File sınıfı](file-sinifi/)
  
    **1.Aşağıdakilerden hangisi File getAbsoluteFile() metodunu doğru ifade eder?**
  
    A.Dosyanın tam yolunu String olarak döndürür.
  
    B.Dosyanın bulunduğu klasörün ismini String olarak döndürür. Eğer yoksa null döndürür.
  
    C.Dosyanın tam yolunu File olarak döndürür.(Doğru)
  
    D.Bu programın dosyaya yazma yetkisi olup olmadığını denetler.
  
  - [ ] [Akış Sınıfları](akis-siniflari/)
  
    **1.Aşağıdakilerden hangisi voidwrite(int c) metodunu doğru ifade eder?**
  
    A.Akışa bir byte değeri yazar. Bu değeri parametre olarak alır.(Doğru)
  
    B.Parametre olarak verilen sayı kadar byte değerini okumadan atlar.
  
    C.Parametre olarak aldığı byte dizisinin içindeki bütün byte değerlerini sırasıyla akışa yazar.
  
    D.Dosyanın sonuna kadar bütün byte değerlerini okur ve bir dizi halinde döndürür.
  
  - [ ] [Dosya kopyalamak](dosya-kopyalamak/)
  
    **1.Aşağıdakilerden hangisi ByteArrayInputStream sınıfının tanımına karşılık gelir?**
  
    A.Hedef olarak bir byte dizisi kullanan akış sınıfıdır.
  
    B.Bir byte dizisini tıpkı bir akış gibi okumanızı sağlayan sınıftır.(Doğru)
  
    C.Akışlara veri yazmak için kullanılır.
  
    D.Veri yazan bir sınıftır.
  
  - [ ] [ObjectInputStream ve ObjectOutputStream sınıfları](ObjectInputStream-ObjectOutputStream-siniflari/)
  
    **1.Bir nesneyi serialize edebilmek için o sınıfın........... kullanmalıyız?**
  
    A.Serializable Arayüzünü(Doğru)
  
    B.Soyut Arayüzünü
  
    C.Çıktı Arayüzü
  
    D.Giriş Arayüzünü
  
  - [ ] [Reader & Writer](reader-writer/)
  
    **1.CharArrayReader sınıfı neden kullanılmaktadır?**
  
    A.Bir karakter dizisine tıpkı bir akış gibi yazmak için kullanılır.
  
    B.Bir karakter dizisini tıpkı bir akış gibi okumak için kullanılır.(Doğru)
  
    C.Parametre olarak aldığı metni akışa yazar.
  
    D.Karakter akışlarına veri yazmak için kullanılan soyut bir sınıftır.
  
- [ ] Replit, BlueJ, Eclipse, IntelliJ, NetBeans (İleri Seviye)

- [ ] [If Statements](if-statements/)
  
  ```java
  if(creditRatio > 0.8) {
  	System.out.println("Kurumsal kredi");
  }
  else {
  	System.out.println("Standart kredi");
  }
  ```
  **Yukarıda verilen kodun anlamı nedir?**
  
  A.Eğer, faiz oranı %80'den büyükse "Kurumsal kredi" tipinde kredi ver, değilse "Standart Müşteri" tipinde kredi ver.(Doğru)
  
  B.Eğer, faiz oranı %80'den büyükse "Standart kredi"  ver.
  
  C.Eğer, faiz oranı %80'den büyükse "Kurumsal kredi" ver.
  
  D.Eğer faiz oranı %80 büyük eşitse  "Kurumsal kredi" ver.
  
  - [ ] [Java&#39;da "switch-case" Yapıları](switch-case/)
  
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
    **Yukarıda verilen kodun çıktısı ne olur?**
  
   A.(Doğru)
  
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
    B.

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
    C
  
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
  D.
  
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


- [ ] [Loops(for, foreach, while)](loops/)
  
  **1.Java'da döngü mekanizmaları neden kullanılır?**
  
  A.Kodun akış yönünü belirlemek için kullanılır.(Doğru)
  
  B.Kodun yapısını belirlemek için kullanılır.
  
  C.Çıktı almak için kullanılır.
  
  D.Kodu sabitlemek için kullanılır.
  
  - [ ] [While Döngüsü](while/)
  
    ```java
    int left = 200, right = 300;
    while (++left < --right);
    System.out.println("200 ile 300'ün ortası: " + left);
    ```
    **Yukarıda verilen kodun çıktısı ne olur?**
  
    A.200 ile 300'ün ortası:
  
    B.200 ile 300'ün ortası: 250(Doğru)
  
    C.250
  
    D.Left
  
  - [ ] [Do-While Döngüsü](do-while/)
  
    ```java
    int year = 2021;
    do
    {
    	System.out.println(“Döngü işletiliyor”);
    	year++;
    } while (year < 2021);
    ```
    **Yukarıda verilen kodu çıktısı ne olur?**
  
    A.2021
  
    B.2020
  
    C.Döngü işletiliyor(Doğru)
  
    D.Hata verir
  
  - [ ] [For Döngüsü](for-loops/)
  
    ```java
    for (int i = 1; i < 11; i++)
    {
    	System.out.println(i);
    }
    ```
    Yukarıda verilen kodun çıktısı ne olur?
    A.
  
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
     B.
  
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
    C.(Doğru)
  
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
    D.
    
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
    
  - [ ] [Break & Continue](break-continue/)
  
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
    A.
  
    ```java
    0
    2
    6
    8
    10
    ```
    B.(Doğru)
  
    ```java
    0
    2
    6
    8
    10
    12
    ```
    C.
  
    ```java
    0
    2
    6
    8
    12
    ```
    D.
  
    ```java
    0
    2
    6
    8
    11
    ```
  
  - [ ] [For-Each & Nested Loops](for-each-nested-loops/)
  
    **1.Aşağıdakilerden hangisi iç içe döngüler içinde kullanılır?**
  
    A.For (Doğru)
  
    B.This
  
    C.Super
  
    D.Regex
  
- [ ] [Numbers & Strings](numbers-strings/)

  **1.Java'da performanslı String birleştirme işlemleri için........ kullanılmaktadır?**

  A.StringJx

  B.StringMetod

  C.StringBuilder(Doğru)

  D.+ operotörü

- [ ] [Diziler (Arrays)](arrays/)

  **1.Aşagıdakilerden hangisi dizinin boyutunu vermektedir?**

  A. Count

  B.Length(Doğru)

  C.Max

  D.Array

- [ ] [Matrisler (Matrice)](matris-islemleri/)

  ```java
   int[][] array = {{2, 3}, {4, 5}, {6, 7}};
          for (int i = array.length - 1; i >= 0; i--) {
              for (int j = array[i].length - 1; j >= 0; j--) {
                  System.out.print(array[i][j] + " ");
              }
              System.out.println();
          }
  ```
  **Yukarıda verilen kodun çıktısı ne olur?**
  A.

  ```java
  6 5 
  4 3 
  2 1 
  ```
  B.(Doğru)

  ```java
  7 6
  5 4
  3 2
  ```
  C.

  ```java
  7 5 
  4 3 
  2 1 
  ```
  D.

  ```java
  7 5 
  4 3 
  3 1 
  ```

- [ ] [Date & Time](date-time/)

  **1.Aşağıdakilerden hangisi tarih ve zaman bilgisini işleyen yapılar ve sınıflar ...... sürümde değiştirilmiştir?**

  A.Java 8(Doğru)

  B.Java 6

  C.Java 7

  D.Java 9

- [ ] [Java Regular Expressions](regular-expressions/)

  **1.Aşağıdakilerden hangisi + belirteci regular expressions ............. amaçla kullanır?**

  A.Kendisinden önceki karakterin metinde 1 defa bulunduğunu belirtir.

  B.Kendisinden önceki karakterin metinde en az 1 defa bulunduğunu belirtir.(Doğru)

  C.Kendisinden önceki karakterin metinde en az n, en çok m defa bulunduğunu belirtir.

  D.Kendisinden önceki karakterin metinde bulunmadığını veya 1 ya da daha fazla defa bulunduğunu belirtir.

- [ ] [Exception Handling](exception-handling/)
  
  **1.Aşağıdakilerden hangisi RuntimeException hatasını tanımına karşılık gelir?**
  
  A. Geçersiz ya da hatalı bir işlem sonucunda uygulamada oluşan hatalardır.(Doğru)
  
  B.Kullanıcı tanımlı Exception sınıfları dahil olmak üzere tüm Exception alt sınıflarının ATA sınıfıdır. 
  
  C.Exception hiyerarşinin en üstündeki sınıftır.
  
  D. Programdaki ciddi hatalı temsil eder.
  
  - [ ] [İstisnai Durumların Yönetilmesi](istisnai-durumlarin-yonetilmesi/)
  - [ ] [İstisnai Durumların Yönetilmesi (Devam)](istisnai-durumlarin-yonetilmesi-devam/)