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

#### Video
* https://drive.google.com/file/d/178r5nJ0MpkQGhFZj8lxFL6aik4Jzsxlm/view?usp=sharing

### [Tip Dönüşümleri](6-tip-donusumleri/)

#### Sorular

#### Video
- https://drive.google.com/file/d/1HkwdQqmEfs3s2ncpnEVCTpQgjvp-7i0J/view?usp=sharing

### [Hata Yönetimi ve Kod İzleme](7-hata-yonetimi-ve-kod-izleme/)

#### Sorular

#### Videolar
1. Try Catch Finally ve Mantıksal Hatalar : https://drive.google.com/file/d/1Ht68ZgZesxuBfXzfYuPcNNQsksuvMx2X/view?usp=sharing

2. Debugging, Watch ve Variables Penceresi : https://drive.google.com/file/d/1_EigHrSwJ15R7P1aQkDF27pWDGI39Qcn/view?usp=sharing

### [Karar Yapıları](8-karar-yapilari/)

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
