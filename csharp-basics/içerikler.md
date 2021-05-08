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

5. Console Program dosyasındaki hangi özellik bu projenin console projesi olduğunu belirtir ?

   - TargetFramework
   - OutputType (Doğru)
   - Project
   - Sdk

6. dotnet run komutunda aşağıdakilerden hangisi ilk olarak çalışır ?

   - Program
   - main methodu (Doğru)
   - Namespace
   - Proj dosyası

7. dotnet run komutundan sonra aşağıdaki dizinlerden hangisi proje dizininde oluşur ?

   - dll
   - output
   - obj
   - bin (Doğru)

8. .NET 5 kullanan bir console uygulaması derlendikten sonra hangi dosya uzantısı ile oluşur ?

   - dll (Doğru)
   - exe
   - obj
   - bin

9. Console ekranına bilgi yazdırmak için aşağıdaki methodlardan hangisini kullanabiliriz ?

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
1. Aşağıdaki operatörlerden hangisi aritmetik değildir ?

   - `++`
   - `%`
   - `|` (Doğru)
   - `*`

2. 2 bool değişkeni aşağıdaki hangi operatör ile işleme tabi tutamayız ?

   - `>` (Doğru)
   - `<<`
   - `&`
   - `^`

3. İlişkisel operatör ile yaptığımız işlemin sonucu hangi tiptedir ?

   - İşleme tabi tutulan değişkenler ile aynı tip
   - bool (Doğru)
   - byte
   - string

4. Atama yapmak için aşağıdaki opertörlerden hangisini kullanamayız ?

   - `+=`
   - `%=`
   - `|=`
   - `>=` (Doğru)

5. İki değişkenin birbirine eşit olup olmadığını hangi operatör ile kontrol ederiz ?

   - `!=`
   - `==` (Doğru)
   - `=`
   - `!`


#### Video
* https://drive.google.com/file/d/178r5nJ0MpkQGhFZj8lxFL6aik4Jzsxlm/view?usp=sharing

### [Tip Dönüşümleri](6-tip-donusumleri/)

#### Sorular
1. Aşağıdaki tip dönüşümlerinden hangisini implicit olarak gerçekleştirebiliriz ?

   - bool -> int
   - decimal -> short
   - long -> int
   - byte -> float (Doğru)

2. Aşağıdaki tip dönüşümlerinden hangisini explicit dahi olsa gerçekleştiremeyiz ?

   - byte -> int
   - string -> byte (Doğru)
   - decimal -> float
   - long -> int

3. 0-255 aralığında nümerik bilgi barındıran string tipindeki bir değişkenin dönüşümü için aşağıdakilerden hangisi kullanılamaz ?

   - Convert.ToByte() methodu
   - decimal.Parse() methodu
   - sbyte.Parse() methodu (Doğru)
   - Convert.ToDecimal() methodu

4. Herhangi bir tipteki değişkeni string tipine en kolay nasıl çevirebiliriz ?

   - Convert.ToString() methodu ile
   - string.Parse() methodu ile
   - string.From() methodu ile
   - Değişkenin sahip olduğu .ToString() methodu ile (Doğru)

5. DateTime tipine dönüşümü nasıl yapabiliriz ?

   - (DateTime) ile explicit cast ederek
   - Convert.ToDateTime() yada DateTime.Parse() methodları ile (Doğru)
   - DateTime.From() methodu ile
   - .NET bu dönüşümü implicit olarak yapar


#### Video
- https://drive.google.com/file/d/1HkwdQqmEfs3s2ncpnEVCTpQgjvp-7i0J/view?usp=sharing

### [Hata Yönetimi ve Kod İzleme](7-hata-yonetimi-ve-kod-izleme/)

#### Sorular
1. Aşağıdaki durumlardan hangisinde derleme zamanı hatası alınmaz ?

   - Değişken tipine uyumsuz bir değer atamaya çalıştığımızda
   - Değişkenler arasında uyumsuz bir operatör kullandığımızda
   - Komutu ; ile sonlandırmadığımızda
   - int değişkeni decimal değişkene atamaya çalıştığımızda (Doğru)

2. Aşağıdaki bloklardan hangisi çalışma zamanı hatası alınsa dahi her koşulda çalışır ?

   - final
   - catch
   - finally (Doğru)
   - try

3. Çalışma zamanında hata alabilecek kod bloğu aşağıdaki bloklardan hangisi içinde yer almalıdır ?

   - run
   - try (Doğru)
   - when
   - catch

4. Yazdığımız kodu adım adım çalıştırarak hatalarımızı bulabilmemize yarayan işlem hangisidir ?

   - Tracing
   - Profiling
   - Inspection
   - Debugging (Doğru)

5. Hata ayıklama işlemi sırasında aşağıdakilerden hangisi kod akışını belirlediğimiz yerlerde durdurmamıza yarar ?

   - Breakpoint (Doğru)
   - DebugPoint
   - ExecutionPoint
   - debugger

#### Videolar
1. Try Catch Finally ve Mantıksal Hatalar : https://drive.google.com/file/d/1Ht68ZgZesxuBfXzfYuPcNNQsksuvMx2X/view?usp=sharing

2. Debugging, Watch ve Variables Penceresi : https://drive.google.com/file/d/1_EigHrSwJ15R7P1aQkDF27pWDGI39Qcn/view?usp=sharing

### [Karar Yapıları](8-karar-yapilari/)
#### Sorular
1. If komutu ile karar verebilmek için aşağıdakilerden hangisini kullanamayız ?

   - Herhangi bir nümerik tip (int, long vb.) (Doğru)
   - İlişkisel operatörler ile yapılan işlemin sonucu
   - bool tipinde bir değişken
   - Mantıksal operatörler ile yapılan işlemin sonucu

2. Hiçbir if koşuluna uymayan bir durumda çalışmasını istediğimiz kodu hangi blokta yazarız ?

   - default
   - finally
   - else (Doğru)
   - else if

3. Switch koşulu ile ilgili aşağıdaki bilgilerden hangisi yanlıştır ?

   - case blokları birbirinden ayrılmalıdır, her bir case bloğu break; yada return; gibi komutlar ile sonlanmalıdır.
   - Switch içerisinde default bloğu olmak zorundadır. (Doğru)
   - Switch için nümerik tipler ile birlikte string ve char tiplerini de kullanabiliriz.
   - case koşulu : ile sonlandırılmalıdır.

4. Hiçbir case koşuluna uymayan bir durumda çalışmasını istediğimiz kodu hangi blokta yazarız ?

   - else
   - finally
   - default (Doğru)
   - catch

5. Basit if-else bloklarının yerine aşağıdaki operatörlerden hangisini kullanabiliriz ?

   - ?: (ternary if) (Doğru)
   - ?? (null-coalescing operator)
   - ?. (null-conditional operator)
   - || (conditional logical OR operator)


#### Videolar
1. If Else Ternary: https://drive.google.com/file/d/1_EigHrSwJ15R7P1aQkDF27pWDGI39Qcn/view?usp=sharing

2. Switch Case: https://drive.google.com/file/d/1G8fpKCR8_LtqnMSn54yy0DIrQmwI5nIh/view?usp=sharing

### [Döngüler](9-donguler/)

#### Sorular
1. Aşağıdaki komutlardan hangisi ile döngünün tamamlanmasını beklemeden döngüyü sonlandırmamıza yarar ?

   - continue
   - while
   - if
   - break (Doğru)

2. Aşağıdaki komutlardan hangisi ile döngü içerisinde bir sonraki iterasyonua geçiş yaparız ?

   - for
   - foreach
   - continue (Doğru)
   - break

3. Belirsiz sayıda iterasyona sahip, yalnızca belli bir koşul sağlandığı sürece döngü kullanmamız gerektiğinde aşağıdaki döngülerden hangisini kullanırız ?

   - for
   - try
   - while (Doğru)
   - foreach

4. Bir dizi yada koleksiyon üyeleri ile ilgili döngü kullanmak istediğimizde hangi döngüyü kullanırız ?

   - foreach (Doğru)
   - for
   - while
   - catch

5. Belirli bir sayıda iterasyona sahip bir döngü kullanmak istediğimizde hangi döngüyü kullanırız ?

   - foreach
   - for (Doğru)
   - finally
   - while

#### Videolar 
1. For Loop, Break ve Continue Anahtar Kelimeleri: https://drive.google.com/file/d/17WxdIGUU4diMjLHU22E3h4Mzy3PnUjyc/view?usp=sharing

2. While ve Foreach Döngüleri: https://drive.google.com/file/d/17WxdIGUU4diMjLHU22E3h4Mzy3PnUjyc/view?usp=sharing 


### [Diziler](10-diziler/)

#### Sorular
1. Aşağıdaki tanımlardan hangisi ile string tipinde elemanlar barındıran dizi tanımlamış oluruz ?

   - string{}
   - string[] (Doğru)
   - string()
   - string.

2. Aşağıdaki tanımlardan hangisi 15 elemanlı int değerlerden oluşan bir diziyi tanımlar ?

   - `int[] dizi;`
   - `int dizi = new int[15];`
   - `int[] dizi = 1..15;`
   - `int[] dizi = new int[15];` (Doğru)

3. Bir dizinin boyutunu değiştirmek istediğimizde Array sınıfında bulunan aşağıdaki methodlardan hangisini kullanırız ?

   - Array.Resize (Doğru)
   - Array.Reverse
   - Array.Clear
   - Array.IndexOf

4. Bir dizinin elemanlarını tersten sıralamak istersek Array sınıfındaki hangi methodu kullanabiliriz ?

   - Array.Clear
   - Array.Reverse (Doğru)
   - Array.IndexOf
   - Array.Sort

5. Bir dizi içindeki verilen değere sahip elemanın hangi indexte bulunduğunu Array sınıfındaki aşağıdaki methodlardan hangisi ile bulabiliriz ?

   - Array.Sort
   - Array.Clear
   - Array.IndexOf (Doğru)
   - Array.Reverse


#### Videolar 
1. Tanımlama, Erişim ve döngülerle dizi kullanımı: https://drive.google.com/file/d/17WxdIGUU4diMjLHU22E3h4Mzy3PnUjyc/view?usp=sharing

2. Array Sınıfı Methodları: https://drive.google.com/file/d/1MmLFRBjlvTMDiDgQZms-FocPNAQkyAj2/view?usp=sharing

### [Metotlar](11-metotlar/)

#### Sorular

1. Aşağıdaki kavramlardan hangisini aynı isimde fakat farklı dönüş tipleri yada parametreler ile method tanımladığımızda kullanırız ?

   - Method Override
   - Operator Overload
   - Method Overload (Doğru)
   - Extension Method

2. Herhangi bir geri dönüş tipi olmayan methodları belirtmek için aşağıdaki anahtar kelimelerden hangisini kullanırız ?

   - void (Doğru)
   - public
   - return
   - params

3. Bir method parametresini değeri yerine referansı ile kullanmak istediğimizde aşağıdaki anahtar kelimelerden hangisini method parametre tipinin önüne ekleriz ?

   - reference
   - out
   - void
   - ref (Doğru)

4. Kaynak kodunu direk değiştirme imkanımız olmayan tiplere ihtiyacımıza özgü yeni methodlar ekleyebilmemize yarayan method tipi hangisidir ?

   - Method Overload
   - Method Override
   - Extension Method (Doğru)
   - Extended Method

5. Aşağıdakilerden hangisi methodlar için yanlış bir bilgidir ?

   - Her methodun geri dönüş tipi olmak zorunda değildir.
   - Bir methodun birden fazla geri dönüş tipi olabilir. (Doğru)
   - Bir method parametresine referansı ile erişip değerini değiştirmek istediğimizde ref yada out anahtar kelimelerini kullanırız.
   - Geri dönüş tipi yada parametrelerinin farklı olması koşuluyla aynı isimde method tanımlayabiliriz.

6. Geri dönüş tipi olmayan, Yazdir ismindeki methodun çağrımı aşağıdakilerden hangisinde doğru yapılmıştır ?

   - Yazdir[];
   - Yazdir;
   - Yazdir(); (Doğru)
   - Yazdir{()};


#### Video

### [Ödev 1](12-odev-1/)

#### Sorular

1. Bir konsol uygulamasında kullanıcıdan pozitif bir sayı girilmesi istenir (n). Sonrasında kullanıcıdan n adet pozitif sayı girilmesi istenir. Kullanıcının girmiş olduğu sayılardan çift olanlar console'a yazdırılır.

2. Bir konsol uygulamasında kullanıcıdan pozitif iki sayı girilmesi istenir (n, m). Sonrasında kullanıcıdan n adet pozitif sayı girilmesi istenir. Kullanıcının girmiş olduğu sayılardan m'e eşit yada tam bölünenler console'a yazdırılır.

3. Bir konsol uygulamasında kullanıcıdan pozitif bir sayı girilmesi istenir (n). Sonrasında kullanıcıdan n adet kelime girilmesi istenir. Kullanıcının girişini yaptığı kelimeler sondan başa doğru console'a yazdırılır.

4. Bir konsol uygulamasında kullanıcıdan bir cümle yazması istenir. Cümledeki toplam kelime ve harf sayısı console'a yazdırılır.


#### Video

### [C# Hazır Metotlar](13-csharp-hazir-metotlar/)

#### Sorular

#### Video

### [Koleksiyonlar](14-koleksiyonlar/)

#### Sorular

#### Video

### [Ödev 2](15-odev-2/)

#### Sorular

Aşağıdaki 3 soruyu ayrı ayrı console uygulamaları açarak yazınız. 
Koleksiyonlar-Soru-1, Koleksiyonlar-Soru-2, Koleksiyonlar-Soru-3 isimlerini kullanınız. 

**Soru - 1:** Klavyeden girilen 20 adet pozitif sayının asal ve asal olmayan olarak 2 ayrı listeye atın. (ArrayList sınıfını kullanarak yazınız.)
* Negatif ve numerik olmayan girişleri engelleyin.
* Her bir dizinin elemanlarını büyükten küçüğe sıralayarak şekilde ekrana yazdırın. 
* Her iki dizinin eleman sayısını ve ortalamasını ekrana yazdırın.


**Soru - 2:** Klavyeden girilen 20 adet sayının en büyük 3 tanesi ve en küçük 3 tanesi bulan, her iki grubun kendi içerisinde ortalamalarını alan ve bu ortalamaları ve ortalama toplamlarını console'a yazdıran programı yazınız. (Array sınıfını kullanarak yazınız.)


**Soru - 3:**
Klavyeden girilen cümle içerisindeki sesli harfleri bir dizi içerisinde saklayan ve dizinin elemanlarını sıralayan programı yazınız.(A->Z)

#### Video

### [Sınıf Kavramı](16-sinif-kavrami/)

#### Sorular

#### Video

### [Enum](17-enum/)

#### Sorular

#### Video


### [Nesne Yönelimli Programlama](18-nesne-yonelimli-programlama/)

#### Sorular

#### Video


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

#### Sorular

#### Video

### [Tüm Dökümanlar](21-dokumanlar/)
