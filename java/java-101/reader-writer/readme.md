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

## BufferedReader ve BufferedWriter sınıfları

**_BufferedInputStream_** ve **_BufferedOutputStream_** sınıflarının karakter akışları için karşılıklarıdır.

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