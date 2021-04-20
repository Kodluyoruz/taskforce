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

#### Sorular

#### Videolar
1. If Else Ternary: https://drive.google.com/file/d/1_EigHrSwJ15R7P1aQkDF27pWDGI39Qcn/view?usp=sharing

2. Switch Case: https://drive.google.com/file/d/1G8fpKCR8_LtqnMSn54yy0DIrQmwI5nIh/view?usp=sharing

### [Döngüler](9-donguler/)

#### Sorular

#### Videolar 
1. For Loop, Break ve Continue Anahtar Kelimeleri: https://drive.google.com/file/d/17WxdIGUU4diMjLHU22E3h4Mzy3PnUjyc/view?usp=sharing

2. While ve Foreach Döngüleri: https://drive.google.com/file/d/17WxdIGUU4diMjLHU22E3h4Mzy3PnUjyc/view?usp=sharing 


### [Diziler](10-diziler/)

#### Sorular

#### Videolar 
1. Tanımlama, Erişim ve döngülerle dizi kullanımı: https://drive.google.com/file/d/17WxdIGUU4diMjLHU22E3h4Mzy3PnUjyc/view?usp=sharing

2. Array Sınıfı Methodları: https://drive.google.com/file/d/1MmLFRBjlvTMDiDgQZms-FocPNAQkyAj2/view?usp=sharing

### [Metotlar](11-metotlar/)

#### Sorular

#### Video

### [Ödev 1](11-odev-1/)

#### Sorular

#### Video

### [C# Hazır Metotlar](13-csharp-hazir-metotlar/)

#### Sorular

#### Video

### [Koleksiyonlar](14-koleksiyonlar/)

#### Sorular

#### Video

### [Ödev 2](15-odev-2/)

#### Sorular

#### Video

### [Sınıf Kavramı](16-sinif-kavrami/)

#### Sorular

#### Video

### [Nesne Yönelimli Programlama](17-nesne-yonelimli-programlama/)

#### Sorular

#### Video

### [Enum](18-enum/)

#### Sorular

#### Video

### [Koleksiyonların Kullanımları](19-koleksiyonlarin-kullanimlari/)

#### Sorular

#### Video

### [Proje 1](20-proje-1/)

#### Sorular

#### Video

### [Proje 2](21-proje-2/)

#### Sorular

#### Video

### [Tüm Dökümanlar](22-dokumanlar/)
