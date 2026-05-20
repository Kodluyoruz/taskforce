# Reader & Writer

## Reader

Karakter akışlarından gelen verileri okumak için yazılmış soyut bir sınıftır. Okuma işlemleri için gerekli bazı metotları tanımlamıştır. Bu metotlardan bazılarını inceleyelim:

| **void** close()                 | Akışı kapatır. Bütün akış kaynakları işlem tamamlandıktan sonra kapatılmalıdır! |
| -------------------------------- | ------------------------------------------------------------ |
| **int** read()                   | Akışta bulunan sıradaki karakteri okur. Eğer dosyanın sonuna gelindiyse -1 döndürür. |
| **int** read(**char**[ ] buffer) | Parametre olarak verilen dizinin boyutu kadar karakteri okur ve dizinin içine atar. Bu dizinin türünün **_InputStream_** sınıfındakinden farklı olarak **char** olduğuna dikkatinizi çekerim. |
| **boolean** ready()              | Akışın okunmaya hazır olup olmadığını denetler.              |
| **long** skip(**int** n)         | Parametre olarak verilen sayı kadar karakteri okumadan atlar. |



## Writer

Karakter akışlarına veri yazmak için kullanılan soyut bir sınıftır. Yazma işlemleri için gerekli bazı metotları tanımlamıştır. Bu metotlardan bazılarını inceleyelim:

| **void** close()                   | Akışı kapatır. **Bütün akış kaynakları işlem tamamlandıktan sonra kapatılmalıdır!** |
| ---------------------------------- | ------------------------------------------------------------ |
| **void** flush()                   | Eğer fiziksel olarak akışa yazılmamış karakterler varsa, bunların yazılması için bir sinyal gönderir. |
| **void** write(**int** c)          | Akışa bir karakter yazar. Bu değeri parametre olarak alır.   |
| **void** write(**char**[ ] buffer) | Parametre olarak aldığı karakter dizisinin içindeki bütün karakterleri sırasıyla akışa yazar. Bu dizinin türünün OutputStream sınıfındakinden farklı olarak **char** olduğuna dikkatinizi çekerim. |
| **void** write(**String** s)       | Parametre olarak aldığı metni akışa yazar.                   |
| **Writer** append(**char** c)      | Parametre olarak aldığı karakteri akışın sonuna ekler, daha sonra kendini döndürür. Zincirleme metotlar yazabilmek amacıyla eklenmiştir. |

## FileReader

Metin dosyalarının içeriğini okumak için bu sınıfı kullanırız. Sınıfın bir örneğini alırken parametre olarak okuyacağımız dosyanın yolunu **_String_** veya **_File_** olarak veririz. Eğer okumak istediğimiz dosya mevcut değilse **_FileNotFoundException_** fırlatılır.

Şimdi **_FileInputStream_** başlığında yaptığımız örneği **_FileReader_** kullanarak tekrar yapalım:

```java
File inputFile = new File("ornek_dosya.txt");

try
{
	FileReader fileReader = new FileReader(inputFile);
	
    int c;
	while ((c = fileReader.read()) != -1)
	{
		System.out.print((char) c);
	}
	
    fileReader.close();
}
catch (IOException ex)
{
	System.out.println("Dosyayı okurken hata meydana geldi!");
}
```

Bu örnekte **_FileInputStream_** yerine **_FileReader_** kullandık. Ayrıca read() metoduyla okuduğumuz int türündeki karakteri **char** türüne dönüştürdüğümüze dikkat edin.

## FileWriter

Metin dosyalarının içeriğine yazmak için bu sınıfı kullanırız. Sınıfın bir örneğini alırken parametre olarak okuyacağımız dosyanın yolunu **_String_** veya **_File_** olarak veririz. Ayrıca ikinci parametre olarak **boolean** türünde **_append_** isminde bir argüman veririz. Bu argüman dosyaya ekleme yapılıp yapılmayacağını tespit etmek için kullanılır. Eğer **true** verirsek ve yazmak istediğimiz dosya mevcutsa; dosyanın içeriği korunur ve sonuna ekleme yapılır. Eğer **false** verirsek ve yazmak istediğimiz dosya mevcutsa; dosyanın mevcut içeriği silinir ve üzerine yazılır. Eğer biz bu parametreyi vermezsek varsayılan değer olarak **false** kullanılır.

## CharArrayReader ve CharArrayWriter sınıfları

Bir karakter dizisini tıpkı bir akış gibi okumak için **_CharArrayReader_** sınıfını kullanırız.

Bir karakter dizisine tıpkı bir akış gibi yazmak için ise **_CharArrayWriter_** sınıfını kullanırız.

## InputStreamReader

**_InputStream_** türündeki bir akış kaynağını **_Reader_** türüne dönüştürmek için bu sınıf kullanılır. Eğer parametre olarak aldığınız **_InputStream_** türündeki bir akış kaynağının karakter akışı olduğunu biliyor ve **_Reader_** sınıfının işlevselliğinden faydalanmak istiyorsanız bu sınıfı kullanmalısınız:

```java
try
{
	InputStream inputStream = new FileInputStream("ornek_dosya.txt");
	Reader reader = new InputStreamReader(inputStream);
}
catch (IOException ex)
{
	System.out.println("Bir hata meydana geldi!");
}
```

## OutputStreamWriter

**_OutputStream_** türündeki bir akış kaynağını **_Writer_** türüne dönüştürmek için bu sınıf kullanılır. Eğer parametre olarak aldığınız **_OutputStream_** türündeki bir akış kaynağının karakter akışı olduğunu biliyor ve **_Writer_** sınıfının işlevselliğinden faydalanmak istiyorsanız bu sınıfı kullanmalısınız:

```java
try
{
	OutputStream outputStream = new FileOutputStream("ornek_dosya.txt");
	Writer writer = new OutputStreamWriter(outputStream);
}
catch (IOException ex)
{
	System.out.println("Bir hata meydana geldi!");
}
```

## BufferedReader ve BufferedWriter sınıfları

**_BufferedInputStream_** ve **_BufferedOutputStream_** sınıflarının karakter akışları için kullanılan karşılıklarıdır.

Dosyaya yazma ve okuma işlemleri zaman açısından maliyetlidir. 

Neden Maliyetelidir;

-  Uygulamanın daha yavaş bir donanımla muhatap oluyor olması, 
-  Her I/O işleminde byte dönüştürme işlemi yapıyor olması. 
- Dosya üzerinde yapılacak her işlemin bir sonraki işlemi beklemek zorunda olması

Bunu yavaşlığa çözem olarak Bellekte tampon bölge oluşturup I/O işlemlerinin orada yönetilmesinde bulunmuş. Buffer sayesinde bir dosyadan okuma yaparken aynı anda veri yollayabilirsiniz.

#### BufferedReader

BufferedReader  ile dosyayı `read()` metodu ile karakter karakter okuyabiliriz:

```java
try
{
  String fileName = "ornek_dosya.txt"; 
  FileReader reader = new FileReader(fileName);
  BufferedReader bufferedReader = new BufferedReader(reader);
  int c;
  while ((c = bufferedReader.read()) != -1) {
    System.out.println("Char: " + (char) c);
  }
  bufferedReader.close();   
}
catch (IOException ex)
{
	System.out.println("Bir hata meydana geldi!");
}
```

BufferedReader  InputStreamReader'a kıyasla epey hızlı çalışır. Bunu buffer kullanarak başarır.

 `BufferedReader`ın  bir başka avantajı , metin dosyasını yalnızca karakter karakter değil, satır satır da okumanıza ve işlemenize olanak tanıyan ek bir yöntem olarak `readLine()` metodunu sunmasıdır:

```java
try  
{
  String fileName = "ornek_dosya.txt";  
  FileReader reader = new FileReader(fileName);
  BufferedReader bufferedReader = new BufferedReader(reader);  
  String line;
  while ((line = bufferedReader.readLine()) != null) {
    System.out.println("Line: " + line);
  }
  bufferedReader.close();  
}
catch (IOException ex)
{
	System.out.println("Bir hata meydana geldi!");
}
```

Java'da dosya okumak için kullanılan yöntemlerinin, okuma süresi üzerinde nasıl etkili olduğunu görmek için 100 milyon baytlık bir dosya kullanılarak süreleri karşılaştırılmış.

![Reading-files-in-Java-performance-comparison](https://raw.githubusercontent.com/mustafakilicc/taskforce/main/java/java-101/reader-writer/figures/Reading-files-in-Java-performance-comparison.webp)

**Buffer kullanmayan** ve **Buffer kullanan** yöntemler arasındaki büyük fark, **Buffer kullanan **yöntemlerin yukarıdaki şemada kendi aralarındaki farkın görünmesini zorlaştırıyor. Bu nedenle, aşağıda **Buffer kullanan** yöntemleri gösteren ikinci bir diyagramla yakından bakalım:

![Reading-files-in-Java-performance-comparison-buffered](https://raw.githubusercontent.com/mustafakilicc/taskforce/main/java/java-101/reader-writer/figures/Reading-files-in-Java-performance-comparison-buffered.webp)

Biraz karışık gelmiş olabilir, buraya kadar bir çok sınıf ve metod kullandık. Bu sınıfların ilişkilerini görsel olarak görmek size biraz yardımcı olacaktır.

![](https://github.com/mustafakilicc/taskforce/blob/main/java/java-101/reader-writer/figures/Java-FileInputStream-FileReader-InputStreamReader-BufferedInputStream-BufferedReader-en-v2.svg)

Düz çizgiler, binary verilerin akışını temsil eder; kesikli çizgiler, metin verilerinin, yani karakterlerin akışını gösterir.

#### BufferedWriter

`BufferedWriter` 'a bir FileWriter verdikten sonra artık yapmamız gereken sadece dosyaya yazmak istediğimiz veriyi write metoduna vermek.

```java
try 
{
    String fileName = "ornek_dosya.txt";
	FileWriter writer = new FileWriter(fileName);
    BufferedWriter bufferedWriter = new BufferedWriter(writer);
    String kodluyoruz="Öğrenmek için kodluyoruz";
    bufferedWriter.write(kodluyoruz);
    bufferedWriter.close();
}
catch (IOException ex)
{
	System.out.println("Bir hata meydana geldi!");
}
```

Java'da dosyaya veri  yazmak için kullanılan yöntemlerinin, yazma süresi üzerinde nasıl etkili olduğunu görmek için 100 milyon baytlık bir dosya kullanılarak süreleri karşılaştırılmış:

![Writing-files-in-Java-performance-comparison-v2](https://raw.githubusercontent.com/mustafakilicc/taskforce/main/java/java-101/reader-writer/figures/Writing-files-in-Java-performance-comparison-v2.webp)

**Buffer kullanmayan** ve **Buffer kullanan** yöntemler arasındaki büyük fark okumada olduğu gibi burda da açıkça görünüyor.  **Buffer kullanan** yöntemlerin kendi aralarındaki farkı da aşağıdaki görselde görebiliyoruz:

![Writing-files-in-Java-performance-comparison-buffered](https://raw.githubusercontent.com/mustafakilicc/taskforce/main/java/java-101/reader-writer/figures/Writing-files-in-Java-performance-comparison-buffered.webp)

Okuma yapmak için kullanılan sınıfların kendi aralarındaki ilişkiyi görmek işinizi kolaylaştıracaktır:

![Java-FileOutputStream-FileWriter-OutputStreamWriter-BufferedOutputStream-BufferedWriter-en](https://github.com/mustafakilicc/taskforce/blob/main/java/java-101/reader-writer/figures/Java-FileOutputStream-FileWriter-OutputStreamWriter-BufferedOutputStream-BufferedWriter-en.svg)


## Kaynak:
- [İlk üç görselin kaynağı](https://www.happycoders.eu/java/how-to-read-files-easily-and-fast/)

- [son üç görselin görselin kaynağı](https://www.happycoders.eu/java/how-to-write-files-quickly-and-easily/)
