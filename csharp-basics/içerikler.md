# C# Temel Index

### [C# Giriş](1-giris/)

#### Video
#### Sorular
1. Bir veritabanı yazılımı aşağıdaki dillerden hangisi ile geliştirilmiş olabilir ?
   - C (Doğru)
   - C#
   - Python
   - Java


### [Kurulumlar](2-kurulumlar/)

### [Console Programlama](3-console-programlama/)

#### Sorular

1. Console ekranına yazdırıp daha sonra alt satıra geçmek için aşağıdakilerden hangisi kullanılır? 

   - Console.println('Hi')
   - Console.Writeline('Hi')
   - Console.PrintLine('Hi')
   - Console.WriteLine('Hi') (Doğru)

2. Aşağıdaki komutlardan hangisi ile bir console projesi yaratırız ?

   - `new console -n "ConsoleProgramlama"`
   - `dotnet console -n "ConsoleProgramlama"`
   - `dotnet new console -n "ConsoleProgramlama"` (Doğru)
   - `dotnet new -n "ConsoleProgramlama"`

3. Console Projesi yaratıldığında aşağıdaki dosyalardan hangisi otomatik yaratılır ?

   - Program.cs (Doğru)
   - Start.cs
   - Main.cs
   - Startup.cs

4. Aşağıdaki dosya uzantılarından hangisi console programlama proje uzantısıdır ?

   - .cproj
   - .proj
   - .csprj
   - .csproj (Doğru)

5. Console Program dosyasındaki hangi özellik bu projenin console projesi olduğunu belirtir?

   - TargetFramework
   - OutputType (Doğru)
   - Project
   - Sdk

6. dotnet run komutunda aşağıdakilerden hangisi ilk olarak çalışır?

   - Program
   - main methodu (Doğru)
   - Namespace
   - Proj dosyası

7. dotnet run komutundan sonra aşağıdaki dizinlerden hangisi proje dizininde oluşur?

   - dll
   - output
   - obj
   - bin (Doğru)

8. .NET 5 kullanan bir console uygulaması derlendikten sonra hangi dosya uzantısı ile oluşur?

   - dll (Doğru)
   - exe
   - obj
   - bin

9. Console ekranına bilgi yazdırmak için aşağıdaki methodlardan hangisini kullanabiliriz?

   - Console.Read()
   - Console.Clear()
   - Console.Write() (Doğru)
   - Console.ReadLine()

10. Console ekranından bilgi okuyup aynı zamanda alt satıra geçebilmemizi sağlayan method hangisidir ?

   - Console.Clear()
   - Console.ReadLine()(Doğru)
   - Console.Write()
   - Console.Read()
   

#### Video

1. https://drive.google.com/file/d/1nw-lVXXeogEpRMBJn8sMoLPKz2goKku6/view?usp=sharing


### [Değişkenler](4-degiskenler/)

#### Sorular

1. Aşağıdaki degisken tanımlamalarından hangisi **yanlıştır** ?

   - int veri = 3;
   - string veri = null;
   - int class = 3; (Doğru)
   - decimal veri_2 = 4;
   #### Sorular

2. Aşağıdaki değişken tanımlarından hangisi doğrudur ?

   - `string 1test;`
   - `string t1est`
   - `string t1est;` (Doğru)
   - `string return;`

3. Ondalık değeri olabilecek bir bilgi için aşağıdaki değişken tiplerinden hangisi kullanılabilir ?

   - int
   - string
   - bool
   - decimal (Doğru)

4. Aşağıdaki gibi bir kod bloğunun çıktısı ne olur ?

   ```
      int degisken = 5;
      string degisken = "merhaba";
      Console.WriteLine(degisken);
   ```

   - Console ekranında merhaba yazar
   - Console ekranında 5 yazar
   - Degişken tiplerinin uyumsuzluğu nedeniyle kod hata alır çalışmaz.
   - Degişken isimlerinin aynı fakat farklı tiplerde olması nedeniyle kod hata alır çalışmaz. (Doğru)

5. Aşağıdaki değişken tanımlarından hangisinde hata alınır ?

   - `short degisken = 32,767;`
   - `int degisken3 = -2147483648`
   - `byte degisken4 = 255;`
   - `sbyte degisken5 = -128;`
   - `uint degisken2 = -4;` (Doğru)
   - `long degisken6 = 9223372036854775807;`

6. Saat ve tarih ile ilgili bir işlem yapmak istediğimizde hangi veri tipini kullanırız ?

   - Date
   - Time
   - Clock
   - DateTime (Doğru)

#### Video

- https://drive.google.com/file/d/1FY3gm3oG7VbYINFWfJGwO0CiodgVmHwt/view?usp=sharing

### [Operatörler](5-operatorler/)

#### Sorular
1. Aşağıdaki operatörlerden hangisi aritmetik değildir?

   - `++`
   - `%`
   - `|` (Doğru)
   - `*`

2. 2 bool değişkeni aşağıdaki hangi operatör ile işleme tabi tutamayız?

   - `>` (Doğru)
   - `<<`
   - `&`
   - `^`

3. İlişkisel operatör ile yaptığımız işlemin sonucu hangi tiptedir?

   - İşleme tabi tutulan değişkenler ile aynı tip
   - bool (Doğru)
   - byte
   - string

4. Atama yapmak için aşağıdaki opertörlerden hangisini kullanamayız?

   - `+=`
   - `%=`
   - `|=`
   - `>=` (Doğru)

5. İki değişkenin birbirine eşit olup olmadığını hangi operatör ile kontrol ederiz?

   - `!=`
   - `==` (Doğru)
   - `=`
   - `!`


#### Video
* https://drive.google.com/file/d/178r5nJ0MpkQGhFZj8lxFL6aik4Jzsxlm/view?usp=sharing

### [Tip Dönüşümleri](6-tip-donusumleri/)

#### Sorular
1. Aşağıdaki tip dönüşümlerinden hangisini implicit olarak gerçekleştirebiliriz?

   - bool -> int
   - decimal -> short
   - long -> int
   - byte -> float (Doğru)

2. Aşağıdaki tip dönüşümlerinden hangisini explicit dahi olsa gerçekleştiremeyiz?

   - byte -> int
   - string -> byte (Doğru)
   - decimal -> float
   - long -> int

3. 0-255 aralığında nümerik bilgi barındıran string tipindeki bir değişkenin dönüşümü için aşağıdakilerden hangisi kullanılamaz?

   - Convert.ToByte() methodu
   - decimal.Parse() methodu
   - sbyte.Parse() methodu (Doğru)
   - Convert.ToDecimal() methodu

4. Herhangi bir tipteki değişkeni string tipine en kolay nasıl çevirebiliriz?

   - Convert.ToString() methodu ile
   - string.Parse() methodu ile
   - string.From() methodu ile
   - Değişkenin sahip olduğu .ToString() methodu ile (Doğru)

5. DateTime tipine dönüşümü nasıl yapabiliriz?

   - (DateTime) ile explicit cast ederek
   - Convert.ToDateTime() yada DateTime.Parse() methodları ile (Doğru)
   - DateTime.From() methodu ile
   - .NET bu dönüşümü implicit olarak yapar


#### Video
- https://drive.google.com/file/d/1HkwdQqmEfs3s2ncpnEVCTpQgjvp-7i0J/view?usp=sharing

### [Hata Yönetimi ve Kod İzleme](7-hata-yonetimi-ve-kod-izleme/)

#### Sorular
1. Aşağıdaki durumlardan hangisinde derleme zamanı hatası alınmaz?

   - Değişken tipine uyumsuz bir değer atamaya çalıştığımızda
   - Değişkenler arasında uyumsuz bir operatör kullandığımızda
   - Komutu ; ile sonlandırmadığımızda
   - int değişkeni decimal değişkene atamaya çalıştığımızda (Doğru)

2. Aşağıdaki bloklardan hangisi çalışma zamanı hatası alınsa dahi her koşulda çalışır?

   - final
   - catch
   - finally (Doğru)
   - try

3. Çalışma zamanında hata alabilecek kod bloğu aşağıdaki bloklardan hangisi içinde yer almalıdır?

   - run
   - try (Doğru)
   - when
   - catch

4. Yazdığımız kodu adım adım çalıştırarak hatalarımızı bulabilmemize yarayan işlem hangisidir?

   - Tracing
   - Profiling
   - Inspection
   - Debugging (Doğru)

5. Hata ayıklama işlemi sırasında aşağıdakilerden hangisi kod akışını belirlediğimiz yerlerde durdurmamıza yarar?

   - Breakpoint (Doğru)
   - DebugPoint
   - ExecutionPoint
   - debugger

#### Videolar
1. Try Catch Finally ve Mantıksal Hatalar : https://drive.google.com/file/d/1Ht68ZgZesxuBfXzfYuPcNNQsksuvMx2X/view?usp=sharing

2. Debugging, Watch ve Variables Penceresi : https://drive.google.com/file/d/1_EigHrSwJ15R7P1aQkDF27pWDGI39Qcn/view?usp=sharing

### [Karar Yapıları](8-karar-yapilari/)
#### Sorular
1. If komutu ile karar verebilmek için aşağıdakilerden hangisini kullanamayız?

   - Herhangi bir nümerik tip (int, long vb.) (Doğru)
   - İlişkisel operatörler ile yapılan işlemin sonucu
   - bool tipinde bir değişken
   - Mantıksal operatörler ile yapılan işlemin sonucu

2. Hiçbir if koşuluna uymayan bir durumda çalışmasını istediğimiz kodu hangi blokta yazarız?

   - default
   - finally
   - else (Doğru)
   - else if

3. Switch koşulu ile ilgili aşağıdaki bilgilerden hangisi yanlıştır?

   - case blokları birbirinden ayrılmalıdır, her bir case bloğu break; yada return; gibi komutlar ile sonlanmalıdır.
   - Switch içerisinde default bloğu olmak zorundadır. (Doğru)
   - Switch için nümerik tipler ile birlikte string ve char tiplerini de kullanabiliriz.
   - case koşulu : ile sonlandırılmalıdır.

4. Hiçbir case koşuluna uymayan bir durumda çalışmasını istediğimiz kodu hangi blokta yazarız?

   - else
   - finally
   - default (Doğru)
   - catch

5. Basit if-else bloklarının yerine aşağıdaki operatörlerden hangisini kullanabiliriz?

   - ?: (ternary if) (Doğru)
   - ?? (null-coalescing operator)
   - ?. (null-conditional operator)
   - || (conditional logical OR operator)


#### Videolar
1. If Else Ternary: https://drive.google.com/file/d/1_EigHrSwJ15R7P1aQkDF27pWDGI39Qcn/view?usp=sharing

2. Switch Case: https://drive.google.com/file/d/1G8fpKCR8_LtqnMSn54yy0DIrQmwI5nIh/view?usp=sharing

### [Döngüler](9-donguler/)

#### Sorular
1. Aşağıdaki komutlardan hangisi ile döngünün tamamlanmasını beklemeden döngüyü sonlandırmamıza yarar?

   - continue
   - while
   - if
   - break (Doğru)

2. Aşağıdaki komutlardan hangisi ile döngü içerisinde bir sonraki iterasyonua geçiş yaparız?

   - for
   - foreach
   - continue (Doğru)
   - break

3. Belirsiz sayıda iterasyona sahip, yalnızca belli bir koşul sağlandığı sürece döngü kullanmamız gerektiğinde aşağıdaki döngülerden hangisini kullanırız?

   - for
   - try
   - while (Doğru)
   - foreach

4. Bir dizi yada koleksiyon üyeleri ile ilgili döngü kullanmak istediğimizde hangi döngüyü kullanırız?

   - foreach (Doğru)
   - for
   - while
   - catch

5. Belirli bir sayıda iterasyona sahip bir döngü kullanmak istediğimizde hangi döngüyü kullanırız?

   - foreach
   - for (Doğru)
   - finally
   - while

#### Videolar 
1. For Loop, Break ve Continue Anahtar Kelimeleri: https://drive.google.com/file/d/17WxdIGUU4diMjLHU22E3h4Mzy3PnUjyc/view?usp=sharing

2. While ve Foreach Döngüleri: https://drive.google.com/file/d/17WxdIGUU4diMjLHU22E3h4Mzy3PnUjyc/view?usp=sharing 


### [Diziler](10-diziler/)

#### Sorular
1. Aşağıdaki tanımlardan hangisi ile string tipinde elemanlar barındıran dizi tanımlamış oluruz?

   - string{}
   - string[] (Doğru)
   - string()
   - string.

2. Aşağıdaki tanımlardan hangisi 15 elemanlı int değerlerden oluşan bir diziyi tanımlar?

   - `int[] dizi;`
   - `int dizi = new int[15];`
   - `int[] dizi = 1..15;`
   - `int[] dizi = new int[15];` (Doğru)

3. Bir dizinin boyutunu değiştirmek istediğimizde Array sınıfında bulunan aşağıdaki methodlardan hangisini kullanırız?

   - Array.Resize (Doğru)
   - Array.Reverse
   - Array.Clear
   - Array.IndexOf

4. Bir dizinin elemanlarını tersten sıralamak istersek Array sınıfındaki hangi methodu kullanabiliriz?

   - Array.Clear
   - Array.Reverse (Doğru)
   - Array.IndexOf
   - Array.Sort

5. Bir dizi içindeki verilen değere sahip elemanın hangi indexte bulunduğunu Array sınıfındaki aşağıdaki methodlardan hangisi ile bulabiliriz?

   - Array.Sort
   - Array.Clear
   - Array.IndexOf (Doğru)
   - Array.Reverse


#### Videolar 
1. Tanımlama, Erişim ve döngülerle dizi kullanımı: https://drive.google.com/file/d/17WxdIGUU4diMjLHU22E3h4Mzy3PnUjyc/view?usp=sharing

2. Array Sınıfı Methodları: https://drive.google.com/file/d/1MmLFRBjlvTMDiDgQZms-FocPNAQkyAj2/view?usp=sharing

### [Metotlar](11-metotlar/)

#### Sorular

1. Aşağıdaki kavramlardan hangisini aynı isimde fakat farklı dönüş tipleri yada parametreler ile method tanımladığımızda kullanırız?

   - Method Override
   - Operator Overload
   - Method Overload (Doğru)
   - Extension Method

2. Herhangi bir geri dönüş tipi olmayan methodları belirtmek için aşağıdaki anahtar kelimelerden hangisini kullanırız?

   - void (Doğru)
   - public
   - return
   - params

3. Bir method parametresini değeri yerine referansı ile kullanmak istediğimizde aşağıdaki anahtar kelimelerden hangisini method parametre tipinin önüne ekleriz?

   - reference
   - out
   - void
   - ref (Doğru)

4. Kaynak kodunu direk değiştirme imkanımız olmayan tiplere ihtiyacımıza özgü yeni methodlar ekleyebilmemize yarayan method tipi hangisidir?

   - Method Overload
   - Method Override
   - Extension Method (Doğru)
   - Extended Method

5. Aşağıdakilerden hangisi methodlar için yanlış bir bilgidir?

   - Her methodun geri dönüş tipi olmak zorunda değildir.
   - Bir methodun birden fazla geri dönüş tipi olabilir. (Doğru)
   - Bir method parametresine referansı ile erişip değerini değiştirmek istediğimizde ref yada out anahtar kelimelerini kullanırız.
   - Geri dönüş tipi yada parametrelerinin farklı olması koşuluyla aynı isimde method tanımlayabiliriz.

6. Geri dönüş tipi olmayan, Yazdir ismindeki methodun çağrımı aşağıdakilerden hangisinde doğru yapılmıştır?

   - Yazdir[];
   - Yazdir;
   - Yazdir(); (Doğru)
   - Yazdir{()};


#### Video

1. Metot'lara Giriş ve Ref Parametre Kullanımı: https://drive.google.com/file/d/1HhjKzZhZtvKi6HXgoKm3wSLxuBM8Gk46/view?usp=sharing

2. Metot Overloading ve Out Parametre Kullanımı: https://drive.google.com/file/d/1XP-mgNHYQ-7-iyVguwtw6DmAaZtqXdmX/view?usp=sharing

3. Extension ve Rekürsif Metotlar: https://drive.google.com/file/d/145its9eSFM5bG6oN-Cxh5usFB_B8Ituf/view?usp=sharing


### [Ödev 1](12-odev-1/)

#### Sorular

1. Bir konsol uygulamasında kullanıcıdan pozitif bir sayı girilmesi istenir (n). Sonrasında kullanıcıdan n adet pozitif sayı girilmesi istenir. Kullanıcının girmiş olduğu sayılardan çift olanlar console'a yazdırılır.

2. Bir konsol uygulamasında kullanıcıdan pozitif iki sayı girilmesi istenir (n, m). Sonrasında kullanıcıdan n adet pozitif sayı girilmesi istenir. Kullanıcının girmiş olduğu sayılardan m'e eşit yada tam bölünenler console'a yazdırılır.

3. Bir konsol uygulamasında kullanıcıdan pozitif bir sayı girilmesi istenir (n). Sonrasında kullanıcıdan n adet kelime girilmesi istenir. Kullanıcının girişini yaptığı kelimeler sondan başa doğru console'a yazdırılır.

4. Bir konsol uygulamasında kullanıcıdan bir cümle yazması istenir. Cümledeki toplam kelime ve harf sayısı console'a yazdırılır.


#### Video
** Gerekli Değil

### [C# Hazır Metotlar](13-csharp-hazir-metotlar/)

#### Sorular

** Gerekli Değil
#### Video

1. String: https://drive.google.com/file/d/1XFYS_ru9lJVLQzVSmJTLhP-f9W9XECij/view?usp=sharing

2. Datetime ve Math:  https://drive.google.com/file/d/12uVLhf3Xbbc25oa0tNB5md-UWL2i5dHJ/view?usp=sharing


### [Koleksiyonlar](14-koleksiyonlar/)
#### Sorular

1. Aşağıdakilerden hangisi koleksiyon sınıfında türemiş bir yapı **değildir**?
   - ArrayList            
   - Method (Doğru)           
   - SortedList
   - HashTable

2. ArrayList sınıfındaki removeAt metodu hangi amaç için kullanılır?
   - ArrayList'den bir elemanı silmek için kullanılır. (Doğru)
   - ArrayList'in sonuna bir eleman eklemek için kullanılır.
   - ArrayList'in ortasına bir eleman eklemek için kullanılır.
   - ArrayList'e bir eleman kopyalamak için kullanılır.

3. Aşağıdakilerden hangisi bir koleksiyon sınıfı **değildir**?

   - Sorted List
   - Queue
   - Params (Doğru)
   - Hashtable 

4. Aşağıdakilerden hangisi refereans tipinde bir veri tipidir?
   - int
   - struct
   - enum
   - string (Doğru) 

5. Aşağıdakilerden hangisi koleksiyonların **dezavantajlarından** biridir?
   - Boyutu dinamik olarak artabilir. 
   - Farklı veri tiplerini barındırır.
   - Veri eklerken boxing veri okurken unboxing yapılması gerekebilir. (Doğru)
   - Referans tipindeki verileri saklayabilir. 

6. Value Type ve Reference Type ile ilgili aşağıdakilerden hangisi **yanlıştır?** 
   - Value Type belleğin stack bölgesinde tutulur. 
   - Reference Type belleğin heap bölgesinde tutululur. 
   - Performans açısından Value Type Reference Type'a göre daha avantajlıdır. 
   - Integer veri tipindeki bir değişkenin object veri tipine dönüştürülmesine unboxing denir. (Doğru)
   

#### Video
1. Koleksiyonlar Nedir, Avantajları ve Dezavantajları Nelerdir? : https://drive.google.com/file/d/1bn9KdFJorMHxGU54aX5IYOEi0ELxPM4E/view?usp=sharing

2. Generic List: https://drive.google.com/file/d/19105hcqrMzYnSg2NipwYEJ-PHZvbo76d/view?usp=sharing

3. ArrayList: https://drive.google.com/file/d/1befufyG5l4R1iw9JXPegUp-VLMB_QFaZ/view?usp=sharing

4. Dictionary: https://drive.google.com/file/d/10qpIrq_2LNtCAi_fC36yy6Guebe4jxx4/view?usp=sharing


### [Ödev 2](15-odev-2/)

#### Sorular

Aşağıdaki 3 soruyu ayrı ayrı console uygulamaları açarak yazınız. 
Koleksiyonlar-Soru-1, Koleksiyonlar-Soru-2, Koleksiyonlar-Soru-3 isimlerini kullanınız. 

**Adım  - 1:** Klavyeden girilen 20 adet pozitif sayının asal ve asal olmayan olarak 2 ayrı listeye atın. (ArrayList sınıfını kullanarak yazınız.)
* Negatif ve numerik olmayan girişleri engelleyin.
* Her bir dizinin elemanlarını büyükten küçüğe sıralayarak şekilde ekrana yazdırın. 
* Her iki dizinin eleman sayısını ve ortalamasını ekrana yazdırın.


**Adım - 2:** Klavyeden girilen 20 adet sayının en büyük 3 tanesi ve en küçük 3 tanesi bulan, her iki grubun kendi içerisinde ortalamalarını alan ve bu ortalamaları ve ortalama toplamlarını console'a yazdıran programı yazınız. (Array sınıfını kullanarak yazınız.)


**Adım - 3:**
Klavyeden girilen cümle içerisindeki sesli harfleri bir dizi içerisinde saklayan ve dizinin elemanlarını sıralayan programı yazınız.(A->Z)

#### Video
** Gerekli Değil

### [Sınıf Kavramı](16-sinif-kavrami/)

#### Sorular

1.  Program içerisinde farklı değerler alabilen ifadelere ne ad verilir?
      - Sınıf 
      - Sabit   
      - Değişken  (Doğru)         
      - Hiçbiri

2. Bir sınıf kapsamında tanımlanmış değişkenlere ne ad verilir?
      -  Field (Doğru)               
      -  Variable               
      -  Metot              
      -  Params

3. Kapsüllenmiş sınıf field'larına ne isim verilir?
      - Field
      - Variable
      - Property (Doğru)
      - Sabit 

4. Bir sınıfın nesnesi ilk oluşturulduğunda yapılması gerekenler varsa aşağıdakilerden hangisi kullanılır?
      - Overload Metot
      - Static Metot
      - Extension Metot 
      - Constructor Metot (Doğru)

5. Tanımlanan sınıftan örneği oluşturulan bazı nesnelerin farklı durumlarda başlatılması gerektiğinde aşağıdakilerden hangisi kullanılır?
      - Örnek Oluşturma 
      - Aşırı yüklenmiş kurucu (Doğru)
      - Metot Override                        
      - Metot Genişletme
6. "new anahtar sözcüğünü kullanarak bir nesne yaratıldığında, nesneyi oluşturmak için gerekli bellek …………… üzerinden alınır." Boş bırakılan yere aşağıdakilerden hangisi getirilmelidir? 

      - stack 
      - heap (Doğru)
      - yığın
      - program
   
7. "Öğenin yığından öbeğe otomatik kopyalanmasına …………… adı verilir." Boş bırakılan yere aşağıdakilerden hangisi getirilmelidir? 

      - Boxing/Kapsülleme (Doğru)
      - Unboxing
      - Overload
      - Override

8. Statik bir sınıf içerisine aşağıdaki komutlardan hangisini yazarsak compile time da hata verir?
      - private int x; (Doğru)
      - public const double sayi = 5;
      - public static EkranaYazdir();
      - public static y = 5;
   
9. "Statik metotları kullanmak için mutlaka sınıfın bir örneğini oluşturmak gerekir." Ifadenin doğruluğunu teyit ediniz?
      - Doğru
      - Yanlış (Doğru)

10. Statik sınıflarla ilgili aşağıdakilerden hangisi **yanlıştır?**
      - Static sınıflar yanlızca üyeler barındırabilir.
      - Nesneleri yaratılmadan üyelerine erişilebilir. 
      - Değişkenleri sınıf tarafından paylaşılır.
      - Kurucu metotları yoktur. (Doğru)

11. Temel sınıfın bir üyesine, sadece bu sınıftan türemiş bir sınıfın erişebilmesi istiyorsak erişim belirteci olarak aşağıdakilerden hangisini kullanmamız gerekir? 
      - public        
      - internal   
      - protected (Doğru)              
      - private

12. Sadece yazılabilir bir property tanımlamak istersek aşağıdakilerden hangisine ihtiyacımız vardır? 
      - get               
      - set (Doğru)            
      - private              
      - get ve set

13. Yapılarla ilgili aşağıdakilerden hangisi **yanlıştır?**
      - Diğer struct'lardan kalıtım alamazlar.
      - Interface'lerden kalıtım alamazlar. (Doğru)
      - Sınıflardan kalıtım alamazlar. 
      - **new()** anahtar sözcüğü ile nesneleri yaratılabilir.

14. Yapılarla ilgili aşağıdakilerden hangisi doğrudur?

      - Yapılar için varsayılan yapıcı metod (default constructor) yazamayız. (Doğru)
      - Yapılar sadece başka yapılar içerisinde kullanılabilir. 
      - Yapılar sınıfları kapsar. Sınıflarla yapabildiğimiz herşeyi yapılarla da yapabiliriz. 
      - Sınıflar gibi referans tipindediler. 

15. "Bir sınıfında hem normal uurucusu hem de statik kurucusu aynı anda bulunamaz." Ifadenin doğruluğunu teyit ediniz. 
      - Doğru 
      - Yanlış (Doğru)

16. "Statik kurucu metotlar ..... çalışır." Cümle içerisinde boş bırakılan yere aşağıdakilerden hangisi getirilebilir?
      - Program ilk çalıştığında
      - Sınıfın nesnesi her yaratıldığında
      - Sınıfın ilk nesnesi oluşturulduğunda sadece 1 kez (Doğru)
      - Normal kurucu her çalıştığında

#### Videolar

1. Sinif söz dizimi, Field ve Metot Tanımlama, Erişim Belirleyiciler:  https://drive.google.com/file/d/11A8tkH5H5gnon9tSvViompfxPwR3UJ4r/view?usp=sharing

2. Kurucu Fonksiyonlar: https://drive.google.com/file/d/1iOOoZ5nPmfDOFEzcsBOXuOBMy_OnT8rN/view?usp=sharing

3. Encapsulation ve Property Kavramı: https://drive.google.com/file/d/1D0L9Zo9s-zeQQhH4j5Cva7842pEAwNbN/view?usp=sharing

4. Static sinif ve üyeler: https://drive.google.com/file/d/1HR1HiBtMQw7xwUb3RbIuKGm7cR4oAZy4/view?usp=sharing

5. Struct-Yapılar: https://drive.google.com/file/d/1yWqD0nN_FxzRgHJOu4bqWRG-ABT89C52/view?usp=sharing


### [Enum](17-enum/)

#### Sorular

1. Enum'lar ile ilgili aşağıdakilerden hangisi **doğrudur?**
      - Enum tanımlarken sadece public erişim belirteçlerini kullanabiliriz.
      - Enum elemanlarına verilen sıra numaraları string türünden olabilir.
      - Enum elemanlarına sayısal değer aktarırken, elemanların içeriği sıralı bir şekilde artıyorsa tüm elemanlara değer ataması yapılması zorunludur.
      - Enum isimleri string ifadeler olabilir. (Doğru)

2. "Enum'lar numeric değerleri içerir ve her zaman 1'den başlar." ifadesinin doğruluğunu teyit ediniz. 
      - Doğru
      - Yanlış (Doğru)

#### Video

https://drive.google.com/file/d/1Jl7bzljPVXDBhUXOqn4oq4cQHkZJIrnD/view?usp=sharing


### [Nesne Yönelimli Programlama](18-nesne-yonelimli-programlama/)

#### Sorular
1. Bir sınıfın en fazla kaç farklı sınıftan kalıtım alabilir?
   - 4           
   - 3             
   - 2             
   - 1 (Doğru)

2. Alt sınıftan miras veren temel sinifin açmış olduğu metotları çağırmak için aşağıdaki anahtar kelimelerden hangisi kullanılır?
   - this              
   - as                
   - base (Doğru)            
   - is

 3. Virtual anahtar kelimesi ile yazılan metodun alt sınıfta yeniden biçimlendirilmesi için kullanılması gereken anahtar kelime aşağıdakilerden hangisidir?

      - override (Doğru)     
      - new            
      - base                
      - void

4. Temel sınıfın üyelerinden birinin sadece türetildiği sınıflardan erişilmesi istemiyorsa aşağıdaki erişim belirteçlerinden hangisi kullanılmalıdır?
   - public
   - private
   - protected (Doğru)
   - internal

5. Bir sınıfın diğer sınıflar tarafından türetilmesi engellenmek isteniyorsa, aşağıdaki anahtar kelimelerden hangisi kullanılmalıdır?
   - virtual
   - protected
   - abstract
   - sealed (Doğru)

6. Interface isimlendirmesinin I ile başlamasıyla ilgili  aşağıdakilerden hangisi doğru bilgidir?
   - I ile başlamazsa uygulama runtime hatası verir. 
   - I ile başlamazsa derleyici compile-time hatası verir.
   - I ile başlamazsa uygulama onun interface olduğunu anlayamaz. 
   - I ile başlaması programcılar arasındaki ortak dili destekler. (Doğru)


#### Video
* OOP Nedir: https://drive.google.com/file/d/1tVGeK9TfRwxkc_8IgMbiBE9azJqTf5IZ/view?usp=sharing
* Inheritance: https://drive.google.com/file/d/1RM7YpK6yjsBFJXohv2M5kS-Y-vAl5h0R/view?usp=sharing
* Polymorphism: https://drive.google.com/file/d/1p2Ttn8ojY2YawuZqNkpCOEsIsVBuNB7O/view?usp=sharing
* Interface: https://drive.google.com/file/d/1BohgiwwmiCRrztR5TghBOaGd7bSEl93y/view?usp=sharing
* Interface - Ek Uygulama: https://drive.google.com/file/d/1mmPNpIdmYfGuzpj1UPmvaIVbzvjoGR05/view?usp=sharing
* Abstract Sınıf: https://drive.google.com/file/d/1Ct_3Dc6GuPeG6C3Ckq3FctHei4S69RAf/view?usp=sharing


### [Proje 1](19-proje-1/)

# PROJE-1 : Console Telefon Rehberi Uygulaması
Yeni bir console uygulaması açarak telefon rehberi uygulaması yazınız. 
Uygulamada olması gereken özellikler aşağıdaki gibidir. 

1. Telefon Numarası Kaydet
2. Telefon Numarası Sil
3. Telefon Numarası Güncelle
4. Rehber Listeleme (A-Z, Z-A seçimli)
5. Rehberde Arama


Açıklama: 

- Başlangıç olarak 5 kişinin numarasını varsayılan olarak ekleyiniz.
- Uygulama ilk başladığında kullanıcıya yapmak istediği işlem seçtirilir. 

        Lütfen yapmak istediğiniz işlemi seçiniz :) 
        *******************************************
        (1) Yeni Numara Kaydetmek
        (2) Varolan Numarayı Silmek
        (3) Varolan Numarayı Güncelleme
        (4) Rehberi Listelemek
        (5) Rehberde Arama Yapmak

    -  **(1) Yeni Numara Kaydetmek**
        
            Lütfen isim giriniz: 
            Lütfen soyisim giriniz:
            Lütfen telefon numarası giriniz:
    
    - **(2) Varolan Numarayı Silmek**
        
        İsim  ve soyisime göre arama yapılması yeterlidir. 

            Lütfen numarasını silmek istediğiniz kişinin adını ya da soyadını giriniz:
        
        Kullanıcıdan alınan girdi doğrultusunda rehberde bir kişi bulunamazsa:

            Aradığınız krtiterlere uygun veri rehberde bulunamadı. Lütfen bir seçim yapınız.
            * Silmeyi sonlandırmak için : (1)
            * Yeniden denemek için : (2)

        
        Rehberde uygun veri bulunursa: 
            
            {} isimli kişi rehberden silinmek üzere, onaylıyor musunuz ?(y/n)
        
        **Not:** Rehber uygun kriterlere uygun birden fazla kişi bulunursa ilk bulunan silinmeli.

    
     - **(3) Varolan Numarayı Güncelleme**
            
            Lütfen numarasını silmek istediğiniz kişinin adını ya da soyadını giriniz:
        
        Kullanıcıdan alınan girdi doğrultusunda rehberde bir kişi bulunamazsa: 

            Aradığınız krtiterlere uygun veri rehberde bulunamadı. Lütfen bir seçim yapınız.
            * Güncellemeyi sonlandırmak için : (1)
            * Yeniden denemek için : (2)
        
        Rehberde uygun veri bulunursa güncelleme işlemi gerçekleştirilir.
        
        **Not:** Rehber uygun kriterlere uygun birden fazla kişi bulunursa ilk bulunan silinmeli.

    - **(4) Rehberi Listelemek**
        
        Tüm rehber aşağıdaki formatta console'a listelenir. 

            Telefon Rehberi
            **********************************************
            isim: {}
            Soyisim: {}
            Telefon Numarası: {}
            - 
            isim: {}
            Soyisim: {}
            Telefon Numarası: {}
            .
            .

     - **(4) Rehberde Arama Yapmak**
     
            Arama yapmak istediğiniz tipi seçiniz.
            **********************************************
            
            İsim veya soyisime göre arama yapmak için: (1)
            Telefon numarasına göre arama yapmak için: (2)
        
        Arama sonucuna göre bulunan veriler aşağıdaki formatta gösterilmeli.

            Arama Sonuçlarınız:
            **********************************************
            isim: {}
            Soyisim: {}
            Telefon Numarası: {}
            - 
            isim: {}
            Soyisim: {}
            Telefon Numarası: {}
            .
            .

    
    ** Her bir feature ayrı class/method kullanarak yapılmalıdır. Mümkün olduğunca sorumlulukları parçalanmalı ve kod okunabilir olmalıdır. 



### [Proje 2](20-proje-2/)
**Bu proje zorunlu değildir. Ama kavramların oturması için faydalı bir örnek. Tamamlanması tavsiye edilir.**

# PROJE-2 : Console ToDo Uygulaması
Yeni bir console uygulaması açarak bir 3 kolondan oluşan bir TODO uygulaması yazınız. 
Uygulamada olması gereken özellikler aşağıdaki gibidir. 

- Kart Ekle
- Kart Güncelle
- Kart Sil
- Kart Taşı
- Board Listeleme

** <u>Kart İçeriği:</u> 
* Baslık
* Icerik
* Atanan Kisi (Takım üyelerişnden biri olmalı)
* Büyüklük (XS, S, M, L, XL) 


<u>Açıklama:</u>

- Board **TODO - IN PROGRESS - DONE** kolonlarından oluşmalı.
- Varsayılan olarak bir board tanımlı olmalı ve 3 tane de kart barındırmalı.(Kartlar herhangi bir line'da yani kolonda olabilir.)
- Kartlar ancak takımdan birine atanabilir. Takımdaki kişiler ise varsayılan olarak tanımlanmalı. Takım üyeleri Dictionary kullanılarak key-value pair şeklinde yada bir sınıf aracılığıyla tutulabilir. Kartlara atama yapılırken takım üyeleri ID leri ile atanacak. Yani kullanılacak ypının mutlaka bir ID içermesi gerekir.

- Uygulama ilk başladığında kullanıcıya yapmak istediği işlem seçtirilir. 

        Lütfen yapmak istediğiniz işlemi seçiniz :) 
        *******************************************
        (1) Board Listelemek
        (2) Board'a Kart Eklemek
        (3) Board'dan Kart Silmek
        (4) Kart Taşımak

    -  **(1) Board Listelemek**
        
            TODO Line
            ************************
            Başlık      :
            İçerik      :
            Atanan Kişi :
            Büyüklük    :
            -
            Başlık      :
            İçerik      :
            Atanan Kişi :
            Büyüklük    :
            
            
            IN PROGRESS Line
            ************************
            Başlık      :
            İçerik      :
            Atanan Kişi :
            Büyüklük    :
            -
            Başlık      :
            İçerik      :
            Atanan Kişi :
            Büyüklük    :


            DONE Line
            ************************
            ~ BOŞ ~

    -  **(2) Board'a Kart Eklemek**

            Başlık Giriniz                                  : 
            İçerik Giriniz                                  :
            Büyüklük Seçiniz -> XS(1),S(2),M(3),L(4),XL(5)  :
            Kişi Seçiniz                                    : 

        **Büyüklükler Enum olarak saklanmalı. Kart üzerinde gösterilirken XS olarak gösterilmeli. Giriş yapılırken kullanıcıdan 1 alınmalıdır. 

        **Takım üyeleri mevcut bir listede daha tanımlanmış olamlıdır.(Program içerisinde dinamik tanımlanmasına gerek yok.) Kart tanımlarken takım üyesinin ID'si istenmeli. Tanımlı bir ID değilse "Hatalı girişler yaptınız!" uyarısı ile işlem iptal edilebilir.

    -  **(3) Board'a Kart Silmek**

            Öncelikle silmek istediğiniz kartı seçmeniz gerekiyor.
            Lütfen kart başlığını yazınız:  

        Kart bulunamaz ise:

            Aradığınız krtiterlere uygun kart board'da bulunamadı. Lütfen bir seçim yapınız.
            * Silmeyi sonlandırmak için : (1)
            * Yeniden denemek için : (2)
        
        ** Aynı isimde birden fazla kart bulunursa her ikisi de silinebilir.

    -  **(4) Kart Taşımak**

            Öncelikle silmek istediğiniz kartı seçmeniz gerekiyor.
            Lütfen kart başlığını yazınız:  
        
        <u>Kart bulunamaz ise:</u>

            Aradığınız krtiterlere uygun kart board'da bulunamadı. Lütfen bir seçim yapınız.
            * İşlemi sonlandırmak için : (1)
            * Yeniden denemek için : (2)
        
        <u>Kart bulunur ise:</u>

            Bulunan Kart Bilgileri:
            **************************************
            Başlık      :
            İçerik      :
            Atanan Kişi :
            Büyüklük    :
            Line        :

            Lütfen taşımak istediğiniz Line'ı seçiniz: 
            (1) TODO
            (2) IN PROGRESS
            (3) DONE
        
        ** Doğru bir seçim yapılırsa board listelenerek **(1) Board Listelemek** kullanılarak  kullanıcıya gösterilir. Seçim doğru değil ise "Hatalı bir seçim yaptınız!" bilgisi ile işlem sonlandırılabilir. 
    
    **NOT:** Uygulamanın yapısı genel olarak aşağıdaki gibi olmalıdır: 
        
    * Board 3 tane line'dan oluşur. 
    * Her bir line bir kart listesi tutar
    * Kartların büyüklükleri pre-defined olan bir enum'da tutulur. 
    * Bir kart sadece takım üyelerinden birine atanabilir. 
    * Takım üyeleri daha önceden varsayılan olarak tanımlanmış bir listede olmalı. Struct, class yada bir koleksiyon kullanılabilir.

### [Tüm Dökümanlar](21-dokumanlar/)
