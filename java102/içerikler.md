# Java 102

## [Erişim Belirleyiciler](access-modifier/)

1. Main metodu için hangi erişim belirleyici kullanılmalıdır ?
    - public (Doğru)
    - private
    - protected
    - Varsayılan

2. Hangi erişim belirleyicisi, aynı paket (package) içerisinde erişilmesine izin verir ?
    - protected (doğru)
    - private
    - public
    - varsayılan

3. Aşağıdaki bilgilerden hangisi yanlıştır ?
    - Public ile tanımlanmış öğelere, program içindeki her yerden erişim vardır.
    - Private ile tanımlanmış öğelere, ait oldukları sınıf üzerinden erişim vardır.
    - Private ile tanımlanmış öğelere, ait olduğu paket içerisinde erişim vardır. (Doğru)
    - Protected ile tanımlanmış öğelere, ait olduğu paket içerisinden erişim vardır.

## [Static Anahtar Sözcüğü](static/)

1. Aşağıdakilerden hangisi statik olarak tanımlanamaz ?
    - nesneler (Doğru)
    - sınıflar
    - değişkenler
    - metotlar

2. Aşağıdaki ifadelerden hangisi yanlıştır?
    - statik metotlar yalnızca diğer statik metotlar tarafından çağrılır.
    - statik metotlar yalnızca statik değişkenlere erişebilir.
    - statik metotlar this anahtar sözcüğünü kullanamaz.
    - Sınıftan nesne üretildiğinde, sınıfa ait statik değişkenler nesneler için tekrar oluşturulur. (Doğru)

3. Aşağıdaki metotlardan hangisi static olmalıdır ?
    - main() (Doğru)
    - delete()
    - run()
    - finalize()

## [Final Anahtar Sözcüğü ve Sabit Tanımlama](final/)

1. Bir değişkenin içeriğinin değiştirilmesini önlemek için aşağıdaki anahtar sözcüklerden hangisi kullanılır?
    - final (Doğru)
    - last
    - constant
    - static

2. Aşağıdaki ifadelerden hangisi yanlıştır?
    - Metotlarda final olarak tanımlanabilir. (Doğru)
    - Final ile tanımlanan değişkenler değiştirilemezler.
    - Final ile tanımlanan değişkenlere nesneler üzerinden ulaşılır.
    - Sabit tanımlamak için final anahtar sözcüğü kullanılır.

## [Encapsulation (Kapsülleme)](encapsulation/)

1. Aşağıdakilerden hangisi Encapsulation (Kapsülleme) ilkesini en iyi şekilde tanımlar ?
    - Çeşitli nitelikleri tek bir birimde birleştirmenin bir yoludur.
    - Çeşitli metot parametrelerini tek bir birimde birleştirmenin bir yoludur.
    - Sınıflara ait metotların farklı parametreler ile yazılmasını sağlar.
    - Sınıfa ait niteliklerin anlamsızlaşmasını engelleyen bir yoldur. (Doğru)

2. Sınıfa ait değişken private (özel) olarak tanımlanış ise, niteliklere sınıf nesnesinden erişmek için ne yapabiliriz?
    - Sınıf içerisine, ilgili sınıf değişkenini geri döndüren public (herkese açık) bir metot ekleriz. (Doğru)
    - Sınıf içerisine, ilgili sınıf değişkenini geri döndüren prive (özel) bir metot ekleriz.
    - Private tanımlanmış değişkene hiç bir şekilde ulaşamayız.
    - Sınıf içerisine, ilgili sınıf değişkenini ekrana yazdıran bir metot ekleriz.

3. Kapsülleme kullanılarak hangi özellik uygulanabilir?
    - Inheritance
    - Abstraction (Doğru)
    - Polymorphism
    - Overloading

## [Sınıflar Arası İlişkiler](sinif-iliskiler/)

1. Kalıtım hangi sınıflar arası ilişki türü modellenir?
    - "is a" ilişkisi. (Doğru)
    - "has a" ilişkisi.
    - "uses a" ilişkisi.
    - Hiçbiri
2. Bağımlılık (Dependency) ilişkisini hangisi ifade eder ?
    - "is a" ilişkisi.
    - "has a" ilişkisi.
    - "uses a" ilişkisi.  (Doğru)
    - Hiçbiri

## [Kalıtım (Inheritance) İlkesi](inheritance/)

1. Bir sınıftan kalıtım yapmak için hangi anahtar kelime kullanılmalıdır?
    - super
    - this
    - include
    - extends (Doğru)

2. Aşağıdakilerden hangisi B sınıfını A sınıfından kalıtım yapmanın doğru yoludur?
    - class B + class A {}
    - class B inherits class A {}
    - class B extends A {} (Doğru)
    - class B extends class A {}

3. Aşağıdakilerden hangisi Kalıtım konusunu en iyi tanımlar?
    - Önceden yazılmış kodun kopyalanmasıdır.
    - Daha önce yazılmış bir kod parçasını tekrar kullanmaktır.
    - Programlama dilinde önceden tanımlanmış fonksiyonları kullanmaktır.
    - Verileri ve fonksiyonları türetilmiş sınıflarda kullanmaktır. (Doğru)

## [Kalıtım'da Constructor Zinciri ve Super Anahtar Sözcüğü](inheritance-super/)

1. Alt sınıflardan üst sınıflardaki kurucu metotlara erişmek için hangi anahtar sözcük kullanılır ?
    - super (Doğru)
    - this
    - extends
    - Hiçbiri

## [Method Overriding (Metod Ezme)](method-overriding)

1. Üst sınıfındaki bir metot ile aynı isime ve parametrelere sahip olan alt sınıf metotlarına ne denir ?
    - Metotlarda Aşırı Yüklenme (Method Overloading)
    - Metotlarda Geçersiz Kılma (Method Overriding) (Doğru)
    - Metotlarda Gizleme (Method Hiding)
    - Hiçbiri

2. Metotlarda Geçersiz kılma (Method Overriding) , ata sınıftaki türetilmiş sınıf metotlarını alt sınıflarda değiştirmek anlamına gelir.
    - Doğru (Doğru)
    - Yanlış

## [Polymorphism (Çok Biçimlilik) İlkesi](polimorphism/)

1. Aşağıdakilerden hangisi Çok biçimlilik (polymorphism) hakkında doğru değildir?
    - Nesne Yönelimli Programlama ilkesidir.
    - Programın okunabilirliğini kolaylaştırır.
    - Bir sınıfa ait miras alınan davranışın yeniden tanımlanmasına sağlarç
    - Üst sınıftan miras alınan özellikleri yeniden tanılanmasını sağlar. (Doğru)

2. Çok biçimliliğin kullanılmasının en büyük nedeni nedir?
    - Programcının daha soyut bir düzeyde düşünmesini sağlar.
    - Daha az kod yazılmasını sağlar.
    - Program daha şık bir tasarıma sahip olacak ve bakımı ve güncellenmesi daha kolay olacaktır. (Doğru)
    - Program kodu daha az yer kaplayacaktır.

## [Abstraction (Soyutlama) İlkesi](abstraction/)

1. Aşağıdakilerden hangisi soyutlamayı en iyi tanımlar?
    - Sınıfı gizlemek
    - Sınıfa ait önemli nitelikleri gösterme
    - Sınıfa ait önemli nitelikleri gizlemek
    - Sınıfa ait özellikleri göstermek ve nesne üretilmesini engellemek. (Doğru)

## [Interface Kullanımı](interface/)

1. Aşağıdaki Erişim Belirleyicilerden hangisi interface için kullanılabilir ?
    - public (Doğru)
    - protected
    - private
    - hepsi

2. Bir A sınıfının B interface'ini kullandığı belirten kod parçacağı hangisidir ?
    - class A extends B {}
    - class A imports B {}
    - class A implements B {} (Doğru)
    - class A uses B {}

````java
    interface HesapMakinesi
    {
        void hesapla(int item);
    }
    class Patika implements HesapMakinesi
    {
        int x;
        public void hesapla(int item)
        {
            x = item * item;            
        }
    }
    class main
    {
        public static void main(String args[])
        {
            Patika obj = new Patika();
            obj.x = 0;      
            obj.hesapla(2);
            System.out.print(obj.x);
        }
    }
````   

3. Yukarıda ki programın çıktısı nedir ?
    - 4 (Doğru)
    - 0
    - 2
    - 16

## [Nested ve Inner Sınıflar](nested/)

1. Aşağıdakilerden hangisi Nested sınıfları tanımlar ?
    - Sınıf içinde sınıf (Doğru)
    - Sınıf içinde metot
    - Sınıf içinde paket
    - Sınıf içinde değişken

2. OOP'nin hangi özelliği iç içe sınıfların kullanımını azaltır?
    - Encapsulation
    - Inheritance (Doğru)
    - Abstraction
    - Polymorphism

3. Nested sınıflar kaç ana kategoriye ayrılır ?
    - 2 (Doğru)
    - 3
    - 4
    - 5

## [Wrapper Sınıflar](wrapper/)

1. Aşağıdakilerden hangisi int veri türü için bir wrapper sınıftır ?
    - Integer (Doğru)
    - int
    - Number
    - Byte

2. Wrapper sınıfların kullanım amacı nedir ?
    - İlkel veri tiplerinin nesne gibi davranmasını sağlamak. (Doğru)
    - Veri tiplerini başka veri tiplerine dönüştürmeye yarar.
    - Veri tiplerine özel sınıflar yazmayı sağlar.
    - Kendi veri tiplerimizi oluşturmak.

## [Autoboxing ve Unboxing](boxing/)

1. Autoboxing ve Unboxing kavramlarının amacı nedir ?
    - İlkel veri tiplerinin Sarmalayıcı (Wrapper) sınıfları arasındaki dönüşümleri otomatik yapan yapıdır. (Doğru)
    - İlkel veri tiplerini başka veri tiplerine otomatik dönüştüren yapıdır.
    - Wrapper sınıflardan otomatik nesne üreten yapıdır.
    - Veri tipleri arasında dönüşümü sağlayan yapıdır.

## [Generic Sınıflar](generics/)

1. Jenerikler ile ilgili hangisi veya hangileri doğrudur ?

   ``I - Tip güvenliği sağlar II - Birden fazla tip parametresi alamaz III - Kod tekrarının önüne geçer``
    - Yalnız I
    - Yalnız II
    - I, III (Doğru)
    - II, III
    - I, II, III

2. Aşağıdakilerden hangisi diamond operatörünün sağladığı avantajlardan biri değildir?
    - Java derleyicisinin jenerik türü otomatik olarak tespit etmesini sağlar.
    - Programdaki denetlenmemiş uyarıları önler.
    - Bu operatör ile nesne oluşturmak daha kolaydır. (Doğru)
    - Bir nesne oluştururken jeneriklerin kullanımını basitleştirir.

## [Exception Handling (Hata Yakalama)](exception/)

1. Aşağıdaki anahtar kelimelerden hangisi istisna işlemenin bir parçası değildir?
    - try
    - finally
    - thrown (doğru)
    - catch

2. Aşağıdaki sınıflardan hangisi yakalanamayan tüm istisnaları yakalayabilir?
    - RuntimeException
    - Error (Doğru)
    - Exception
    - ParentException

## [Try-Catch-Finally Kullanımı](try-catch/)

1. Hangi kod blokları arasında istisnalar yakalanır ?
    - try (Doğru)
    - catch
    - finally
    - if

2. Try bloğu tarafından oluşturulan istisnayı rasyonel bir şekilde ele almak için bu anahtar kelimelerden hangisi kullanılmalıdır?
    - catch (Doğru)
    - try
    - finally
    - throw

## [Throw Kullanımı](throw/)

1. Aşağıdaki anahtar sözcüklerden hangisi manuel olarak istisna oluşturmak için kullanılır ?
    - throw (Doğru)
    - finally
    - try
    - catch

## [Özel Hata Ayıklama (Exception) Oluşturma](ozel-exception/)

````java

  class Myexception extends Exception 
    {
	int detail;
        Myexception(int a)
        {
            detail = a;
	}
	public String toString()
        {
	    return "detail";
	}
    }
    class Output 
    {
        static void compute (int a) throws Myexception 
        {
	     throw new Myexception(a);	 
	}
	public static void main(String args[]) 
        {
            try
            {
                compute(3);
            }
           catch(Myexception e)
           {
               System.out.print("Exception");
           } 
        }
    }
    
````

1. Yukarıdaki programın çıktısı nedir ?
    - 3
    - Exception (Doğru)
    - Runtime Error
    - Compilation Error

2. Aşağıdaki sınıflardan hangisi istisnaları tanımlamak için kullanılır?
    - Exception (Doğru)
    - Throwable
    - Abstract
    - System

## [Collection Sınıfı Nedir?](collection/)

1. Aşağıdaki paketlerden hangisi tüm koleksiyon sınıflarını içerir?
    - java.lang
    - java.util (Doğru)
    - java.net
    - java.awt

2. Bu sınıflardan hangisi Java'nın Collection sınıfının bir parçası değildir?
    - Maps (Doğru)
    - List
    - Set
    - Queue

## [Set Interface ve HashSet](collection-set-hashset/)

1. Set koleksiyonları içerisinde aynı veri sadece bir defa saklanır.
    - Doğru (Doğru)
    - Yanlış

2. HashSet içindeki verilerin girdiği sıra ile çıkacağının garantisini vermez.
    - Doğru (Doğru)
    - Yanlış

## [LinkedHashSet](collection-linkedhashset/)

1. LinkedHashSet içindeki verilerin girdiği sıra ile çıkacağının garantisini verir.
    - Doğru (Doğru)
    - Yanlış

## [TreeSet](collection-treeset/)

1. TreeSet koleksiyonu ile ilgili hangisi yanlıştır ?
    - Set interface’den kalıtım almıştır.
    - Veri kümesine konulan elemanların verdiğiniz kurala göre sıralanmasını sağlar.
    - Veri sınıfının sıralanabilir olmasına gerek yoktur. (Doğru).
    - Kendini tekrar eden veriler tutmaz.

## [ArrayList](collection-arraylist/)

1. Aşağıdaki Collection sınıflarından hangisi dinamik bir dizi tanımlar ?
    - Arraylist (Doğru)
    - HashSet
    - PriorityQueue
    - TreeSet

2. ArrayList nesnesinin kapasitesini manuel olarak artırmak için aşağıdaki metotlardan hangisi kullanılabilir ?
    - Capacity()
    - increaseCapacity()
    - addCapacity()
    - ensureCapacity() (Doğru)

3. Bir ArrayList nesnesinden statik bir dizi elde etmek için aşağıdaki metotlardan hangisi kullanılabilir ?
    - Array()
    - covertArray()
    - toArray() (Doğru)
    - covertoArray()

## [LinkedList Kullanımı ve ArrayList İle Arasındaki Farklar](collection-linkedlist/)

1. Aşağıdaki Collection sınıflarından hangisi bağlantılı liste veri yapısını uygular?
    - AbstractList
    - LinkedList (Doğru)
    - HashSet
    - AbstractSet

2. LinkedList nesnesinin başına bir öğe eklemek için aşağıdaki metotlardan hangisi kullanılır?
    - add()
    - first()
    - AddFirst()
    - addFirst() (Doğru)

## [Vector](collection-vector/)

1. Dinamik bir dizi oluşturmak için aşağıdaki sınıflardan hangisi kullanılabilir?
    - ArrayList
    - Map
    - Vector
    - ArrayList & Vector (Doğru)

## [Queue LinkedList](collection-queue-linkedlist/)

1. Kuyruk (Queue) ve Yığın (Stack) arasındaki fark nedir?
    - Stack LIFO'dur ; Queue FIFO'dur (Doğru)
    - Queue LIFO'dur ; Stack FIFO'dur
    - Stack ve Queue FIFO'dur
    - Stack ve Queue LIFO'dur

## [PriorityQueue](collection-priority/)

1. PriorityQueue saysinde kuyruk içindeki sıralamayı kendimiz belirleyebiliriz.
    - Doğru (Doğru)
    - Yanlış

## [Map Interface ve HashMap](map-hashmap/)

1. Aşağıdaki sınıflardan hangisi anahtarlar (key) ve değerler (value) arasındaki ilişkiyi depolar?
    - Hash table
    - Map (Doğru)
    - Array
    - String

2. Map içinde belirtilen anahtara sahip bir elemanı elde etmek için Map sınıfı aşağıdaki metotlardan hangisi kullanılır?
    - search()
    - get() (Doğru)
    - set()
    - look()

3. Hashmap sınıfı sıralı bir koleksiyon mudur?
    - Doğru
    - Yanlış (Doğru)

## [LinkedHashMap ve TreeMap](map-linked-tree)

1. TreeMap sınıfı ile ilgili hangisi yanlıştır ?
    - Map interface’den kalıtım almıştır.
    - Veri kümesine konulan elemanların verdiğiniz kurala göre sıralanmasını sağlar.
    - Veri sınıfının sıralanabilir olmasına gerek yoktur. (Doğru).
    - Verileri anahtar değer ilişkine göre depolar.

## [I/O Veri Akışları](io-stream/)

1. Java'da tüm giriş ve çıkış işlemlerini gerçekleştirmek için aşağıdakilerden hangisi kullanılır?
    - streams (Akışlar) (Doğru)
    - Variables (Değişkenler)
    - classes (Sınıflar)
    - Methods (Metotlar)

2. Aşağıdakilerden hangisi Java'daki bir akış türüdür?
    - Integer stream
    - Short stream
    - Byte stream (Doğru)
    - Long stream

## [FileInputStream Sınıfı](io-fileinputstream/)

1. Aşağıdaki sınıflardan hangileri, giriş ve çıkış işlemi için Bayt akışları tarafından kullanılır?
    - InputStream (Doğru)
    - InputOutputStream
    - Reader
    - Hepsi

2. Dosyadan veri okumak için aşağıdaki sınıflardan hangisi kullanılır?
    - InputStream
    - BufferedInputStream
    - FileInputStream (Doğru)
    - BufferedFileInputStream

## [FileOutputStream Sınıfı](io-fileoutputstream/)

1. Aşağıdaki sınıflardan hangileri byte akışları tarafından giriş ve çıkış işlemleri için kullanılır?
    - InputStream
    - Writer
    - ReadStream
    - OutputStream (Doğru)

## [ByteArrayInputStream ve ByteArrayOutputStream Sınıfları](io-bytearraystream/)

1. Byte dizisinden veri okumak için aşağıdaki sınıflardan hangisi kullanılır?
    - InputStream
    - BufferedInputStream
    - ArrayInputStream
    - ByteArrayInputStream (Doğru)

## [Serialization ve ObjectStream Sınıfları](io-objectstream/)

1. Aşağıdakilerden hangisi bir nesnenin durumunu bir bayt akışına yazma işlemidir?
    - Serialization (Doğru)
    - Externalization
    - File Filtering
    - Hepsi

2. Java'da serileştirme (Serialization) işlemini hangi akış sınıfı sağlar ?
    - ObjectOutputStream (Doğru)
    - ByteArrayOutputStream
    - BufferedOutputStream
    - FileOutputStream

## [BufferedInputStream ve BufferedOutputStream Sınıfları](io-bufferedstream/)

1. _____ sınıfı girdi işlemlerinin verimliliğini artırmak için kullanılır.
    - DataInputStream
    - FileInputStream
    - BufferedInputStream (Doğru)
    - PipeInputStream

## [PrintStream Sınıfı](io-printstream/)

1. Aşağıdaki sınıflardan hangisi print() & println() metotlarını içerir?
    - System
    - System.out
    - BufferedOutputStream
    - PrintStream (Doğru)

## [InputStreamReader Sınıfı](io-inputstreamreaders/)

1. InputStreamReader hakkında hangisi yanlıştır ?
    - InputStreamReader sınıfı, bayt cinsinden verileri karakter cinsinden verilere dönüştürmek için kullanılabilir.
    - Soyut Writer sınıfını genişletir. (Doğru)
    - InputStreamReader sınıfı, diğer giriş akışlarıyla (Input Streams) çalışır.
    - Bayt akışları ve karakter akışları arasında bir köprü olarak da bilinir.

## [OutputStreamWriter Sınıfı](io-outputstreamwriter/)

1. OutputStreamWriter için varsayılan karakter seti nedir?
    - UTF-8
    - Ana makinanın varsayılan karakter seti. (Doğru)
    - UTF-12
    - ANSI

## [FileReader ve FileWriter Sınıfları](io-file-reader-writer)

1. Aşağıdaki ifadelerden hangisi doğrudur ?
    - FileReader ile dosyalardan karakterler okunur. (Doğru)
    - FileReader ile dosyalara karakter yazdırılır.
    - FileReader ile integer ve float değerleri okuyabilirsiniz.
    - Hiçbiri

2. Dosyalara karakter yazmak için  _______________ kullanabilirsiniz.
    - FileWriter (Doğru)
    - FileReader
    - ObjectWriter
    - CharWriter

## [JDBC Nedir ?](jdbc/)

1. JDBC'nin ana bileşenleri nelerdir?
    - DriverManager, Driver, Connection, Statement, and ResultSet (Doğru)
    - DriverManager, Driver, Connection, and Statement
    - DriverManager, Statement, and ResultSet
    - DriverManager, Connection, Statement, and ResultSet

## [Veritabanı Bağlantısı](db-connection/)

1. Aşağıdakilerden hangisi veri tabanında sorgu çalıştırma adımlarından birisi değildir?
    - Sürücü sınıfını kaydetmek
    - Bir connection almak
    - Statement oluşturmak
    - Rollback yapmak (Doğru)
    - Connectionu kapatmak

## [Veritabanı İşlemleri ve Statement Interface](db-statement/)

1. Aşağıdakilerden hangisi Java'da PreparedStatement kullanmanın avantajlarından biridir?
    - Daha iyi performans
    - SQL injection teşvik eder
    - SQL injection önler (Doğru)
    - Daha fazla bellek kullanımı

2. Parametreli sorgular oluşturmak için hangisi kullanılır ?
    - ParameterizedStatement
    - PreparedStatement (Doğru)
    - CallableStatement ve ParameterizedStatement
    - Statements

## [Transaction Yöntemi](db-transaction/)

1. JDBC' de connection otomatik olarak yapılan işlemleri kaydetmesini sağlayan özelliği devre dışı bırakıldığında yapılan işlemin kaydedilmesini ve tablolarda
   uygulanmasını hangi fonksiyon ile sağlarız?
    - accept()
    - acceptAll()
    - apply()
    - commit() (Doğru)
    - make()

2. JDBC' de connection'nın yapılan işlemlerin otomatik olarak kaydetmesini ve tablolara uygulanmasını kontrol eden özellik hangisidir?
    - autoAccept
    - acceptMod
    - autoCommit (Doğru)
    - applyMod
    - makeMod

## [Thread’lerin Oluşturulması ve Kullanılması](thread/)

1. Thread oluşturmak ve çalıştırmak için hangi metot kullanılır ?
    - start() (Doğru)
    - run()
    - thread()
    - play()

2. Thread oluşturmak için hangi sınıf kullanılır ?
    - String
    - System
    - Thread (Doğru)
    - Runnable

## [Runnable Interface](thread-runnable/)

1. Interface'lerden hangisi Java'da iş parçacığıyla (Thread) ilgili işlemleri işlemek için kullanılan tüm yöntemleri içerir ?
    - Runnable interface (Doğru)
    - Math interface
    - System interface
    - ThreadHandling interface

2. Runnable arabirimini uygulamak için aşağıdaki yöntemlerden hangisi kullanılır?
    - stop()
    - run() (Doğru)
    - runThread()
    - stopThread()

## [Thread Durdurmak ve Bekletmek](thread-sleep-live/)

1. Bir iş parçacığını belirli bir süre askıya almak için Thread sınıfının hangi metodu kullanılır ?
    - sleep() (Doğru)
    - terminate()
    - suspend()
    - stop()

2. Bir iş parçacığının hala çalışıp çalışmadığını bulmak için bu yöntemlerden hangisi kullanılır?
    - run()
    - Alive()
    - isAlive() (Doğru)
    - checkRun()

## [Critical Sections ve Race Condition](thread-senkron/)

1. Bir iş parçacığına göre senkronizasyon nedir?
    - İki veya daha fazla iş parçacığının paylaşılan bir kaynağa erişmesi gerektiğinde durumları ele alma sürecidir. (Doğru)
    - Birçok iş parçacığının aynı paylaşılan kaynağa aynı anda erişebildiği bir işlemdir.
    - Bir yöntemin aynı anda birçok farklı iş parçacığına erişebildiği bir işlemdir.
    - Çok fazla iş parçacığının ihtiyaç duyduğu herhangi bir bilgiye erişmesine izin veren bir yöntemdir.

2. Paylaşılan verilere eşzamanlı erişim ____________ ile sonuçlanabilir.
    - veri tutarlılığı
    - veri güvensizliği
    - veri tutarsızlığı (Doğru)
    - belirtilenlerin hiçbiri

3. Birkaç işlemin aynı verilere aynı anda eriştiği ve bunları manipüle ettiği ve yürütmenin sonucunun erişimin gerçekleştiği belirli sıraya bağlı olduğu bir
   duruma ____________ denir.
    - veri tutarlılığı (data consistency)
    - yarış durumu (Race Condition) (Doğru)
    - yaşlanma (Aging)
    - açlık (Startavation)

## [İş Parçacığı Havuzları (ThreadPooling)](thread-pooling/)

1. İş parçacığı havuzlarının mantığı nedir?
    - Süreç başlangıcında bir dizi iş parçacığı oluşturulur ve oturup iş için bekledikleri bir havuza yerleştirilir. (Doğru)
    - Bir süreç başladığında, mevcut birçok iş parçacığı arasından bir iş parçacığı havuzu seçilir ve her iş parçacığına eşit miktarda iş verilir.
    - Bir havuzdaki tüm iş parçacıkları görevi kendi aralarında eşit olarak dağıtır
    - Hiçbiri

2. İş parçacığı havuzunda kullanılabilir iş parçacığı yoksa ____________
    - sunucu yeni bir süreç çalıştırır
    - sunucu başka bir iş parçacığı havuzuna gider
    - sunucunun yeni bir havuz oluşturma talepleri
    - sunucu, biri serbest kalana kadar bekler (Doğru)

## [Tip Dönüşümleri](type-casting/)

1. Java'da otomatik tür dönüştürme için aşağıdakilerden hangisi gereklidir ?
    - Hedef veri tipi, kaynak veri tipinden daha küçük olmalıdır.
    - Hedef veri tipi, kaynak veri tipinden daha büyük olmalıdır. (Doğru)
    - Hedef veri tipi, kaynak veri tipinden daha büyük veya daha küçük olabilir
    - Hiç biri

2. Bir ifade double, int, float, long içeriyorsa, ifadenin tamamı bu veri türlerinden hangisine yükseltilir ?
    - long
    - int
    - double (Doğru)
    - float

## [Lambda Expressions](lambda/)

1. Java'da lambda ifadeleri hangi interface'ler üzerinde uygulanabilir ?
    - Functional Interface (Doğru)
    - Runnable Interface
    - Stream Interface
    - Collection Interface

2. Lambda ifadeleri oluşturmak için kullanılan sembol hangisidir ?
    - -> (Doğru)
    - ==
    - =>
    - <>

## [Enum Sınıfı](enum/)

1. Enum'un kendisinin dışında bir Enum nesnesi oluşturabilir miyiz?
    - Doğru
    - Yanlış (Doğru)

2. Enum tip güvenliğini sağlar mı ?
    - Doğru (Doğru)
    - Yanlış
