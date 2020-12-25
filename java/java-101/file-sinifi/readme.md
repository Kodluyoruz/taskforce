# File sınıfı

Java’nın I/O sınıflarının çoğu akışlar üzerinde işlem yapar; fakat _File_ sınıfı öyle değildir. Bu sınıfı bilgisayarımızda bulunan dosya ve klasörleri ifade etmek için kullanırız. Yani, _File_ sınıfı verinin nasıl saklandığını veya okunacağını belirtmez, yalnızca dosyaların özelliklerini belirtir.

File sınıfının bazı yapılandırıcı kalıpları şu şekildedir:

- **File** (**String** dosyanınTamYolu)
- **File** (**String** dosyanınBulunduğuDizin, **String** dosyanınAdı)
- **File** (**File** dosyanınBulunduğuDizin, **String** dosyanınAdı)

Bazı örnekleri inceleyelim:

```java
File file1 = new File("C:/Windows/System32");
File file2 = new File("C:/Windows", "System32");
File dir = new File("C:/Windows/");
File file = new File(dir, "System32");
```

Yukarıdaki örnekte C diskinin altında bulunan _Windows_ klasörünün altındaki _System32_ klasörüne erişmek için 3 farklı değişken tanımladık. Görebildiğiniz gibi, aynı klasör için 3 farklı yapılandırıcı çağırabiliriz.

_File_ sınıfının bazı önemli metotlarını aşağıdaki tabloda inceleyelim:

| **String** getName()            | Dosyanın ismini döndürür.                                    |
| ------------------------------- | ------------------------------------------------------------ |
| **String** getParent()          | Dosyanın bulunduğu klasörün ismini String olarak döndürür. Eğer yoksa null döndürür. |
| **File** getParentFile()        | Dosyanın bulunduğu klasörün ismini _File_ olarak döndürür. Eğer yoksa **null** döndürür. |
| **String** getAbsolutePath()    | Dosyanın tam yolunu **_String_** olarak döndürür.            |
| **File** getAbsoluteFile()      | Dosyanın tam yolunu **_File_** olarak döndürür.              |
| **boolean** canRead()           | Bu programın dosyayı okuma yetkisi olup olmadığını denetler. |
| **boolean** canWrite()          | Bu programın dosyaya yazma yetkisi olup olmadığını denetler. |
| **boolean** exists()            | Böyle bir dosya mevcutsa **true** döndürür.                  |
| **boolean** isDirectory()       | Eğer bir klasör belirtiyorsa **true** döndürür.              |
| **boolean** isFile()            | Eğer bir dosya belirtiyorsa **true** döndürür.               |
| **long** length()               | Dosyanın boyutunu byte cinsinden döndürür. Eğer böyle bir dosya yoksa 0 döndürür. |
| **boolean** delete()            | Dosyayı silmeye çalışır, silerse **true** döndürür.          |
| **String[]** list()             | Eğer bir klasör belirtiyorsa, bu klasörün içinde bulunan dosya ve klasörleri **_String_** dizisi olarak döndürür. |
| **File[]** listFiles()          | Eğer bir klasör belirtiyorsa, bu klasörün içinde bulunan dosya ve klasörleri **_File_** dizisi olarak döndürür. |
| **boolean** mkdir()             | Eğer bir klasör belirtiyorsa ve böyle bir klasör yoksa oluşturmaya çalışır, başarılı olursa true döndürür. |
| **boolean** mkdirs()            | Eğer bir klasör belirtiyorsa ve böyle bir klasör yoksa oluşturmaya çalışır. Eğer dizin yolundaki klasörlerden birden fazlası yoksa hepsini oluşturmaya çalışır, başarılı olursa **true** döndürür. |
| **boolean** renameTo(File dest) | Dosyanın ismini belirtilen parametreye uygun olarak değiştirmeye çalışır, başarılı olursa **true** döndürür. |
