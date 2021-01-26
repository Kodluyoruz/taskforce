# Dosya kopyalamak

Şimdi **_FileInputStream_** ve **_FileOutputStream_** sınıflarını kullanarak bir dosya kopyalayalım:

```java
File sourceFile = new File("kopyalanacak_dosya.txt");
File destinationFile = new File("yeni_dosya.txt");

try
{
	FileInputStream source = new FileInputStream(sourceFile);
	FileOutputStream destination = new FileOutputStream(destinationFile, false);

    int c;
	while ((c = source.read()) != -1)
	{
		destination.write(c);
	}	

    destination.close();
	source.close();
}
catch (IOException ex)
{
	System.out.println("Dosyayı kopyalarken hata meydana geldi!");
}
```

## BufferedInputStream

Yukarıda gördüğümüz **_FileInputStream_** sınıfı dosyadan okuma yapmak için kullanılıyordu. Okuma yapmak için kullandığımız **_read()_** metodu her seferinde disk üzerindeki dosyaya gidiyor ve fiziksel olarak dosyanın içinde bulunan 1 byte değerini okuyordu.

Sabit diske erişim RAM’e erişime göre daha yavaştır. Sıklıkla sabit disk üzerinde işlem yapmak programımızın hızını nispeten yavaşlatır. Peki bunun önüne nasıl geçebiliriz? Şöyle bir çözüm düşünülebilir: dosya üzerinde her seferinde tek bir byte değeri okumaktansa birden fazla byte değerini okuyabilir ve bu değerleri bir dizi halinde RAM’de tutabiliriz. Böylece sık sık sabit diske erişmek yerine RAM’e erişir ve işlemlerimizi daha hızlı yapabiliriz.

**_BufferedInputStream_** sınıfı bize bu işlevselliği sağlar. Parametre olarak bir **_InputStream_** nesnesi ve bir dizi boyutu alır. Siz o InputStream nesnesi üzerindeki **_read()_** metodunu çağırdığınızda, tek bir byte değeri okumak yerine verdiğiniz dizi boyutu kadar okuma yapar ve bunu hafızada tutar. Dizinin tamamını okuduğunuzda tekrar dosyaya başvurur ve dizi boyutu kadar yeni bir okuma yapar. Yani, gerçek akış kaynağına erişimi olabildiğince azaltarak RAM üzerinden okuma işlemi yapar.

Şimdi **_BufferedInputStream_** sınıfının işlevini anlayabilmek için iki örnek yapalım:

```java
File inputFile = new File("ornek_dosya.docx");

try
{
	long start = System.currentTimeMillis();
	FileInputStream fis = new FileInputStream(inputFile);

    int c;
	while ((c = fis.read()) != -1)
	{
		System.out.println(c);
	}

    fis.close();
	long end = System.currentTimeMillis();
	
    System.out.println("İşlem " + (end - start) + " milisaniye sürdü.");
}
catch (IOException ex)
{
	System.out.println("Dosyayı okurken hata meydana geldi!");
}
```

Yukarıdaki örnekte **_BufferedInputStream_** kullanmadan, **_FileInputStream_** ile dosyadan okuma yapıyoruz. Okuma işleminin başlangıcında ve sonunda tarihe bakıyor ve işlemin kaç milisaniye sürdüğünü tespit ediyoruz. Bu kodu 37 KB boyutundaki bir .docx dosyası üzerinde çalıştırdığım zaman 177 milisaniye sürdü. Tabi bu değerin işlemci hızı vs. gibi ortam faktörlerine göre değişebileceğini unutmayın. Şimdi aynı örneği **_BufferedInputStream_** kullanarak tekrar yapalım:

```java
File inputFile = new File("ornek_dosya.docx");

try
{
	long start = System.currentTimeMillis();
	FileInputStream fis = new FileInputStream(inputFile);
	BufferedInputStream bis = new BufferedInputStream(fis);

    int c;
	while ((c = bis.read()) != -1)
	{
		System.out.println(c);
	}

    fis.close();
	long end = System.currentTimeMillis();
	
    System.out.println("İşlem " + (end - start) + " milisaniye sürdü.");
}
catch (IOException ex)
{
	System.out.println("Dosyayı okurken hata meydana geldi!");
}
```

Yukarıdaki kodu aynı dosya üzerinde çalıştırdığım zaman 120 milisaniye sürdü. Arada **57** milisaniyelik fark olduğuna dikkatinizi çekerim. Bu fark **_BufferedInputStream_** sınıfının verileri hafızaya atmasından kaynaklanmaktadır.

**_BufferedInputStream_** nesnesi oluştururken parametre olarak bir dizi boyutu verebilirsiniz. Eğer vermezseniz varsayılan olarak bu değer 8192 olur. Yani **_BufferedInputStream_** nesnesi akışlar üzerinde varsayılan olarak **8 KB** büyüklüğünde okumalar yapar.

## BufferedOutputStream

Akışlara veri yazmak için kullanılır. **_BufferedInputStream_** sınıfına benzer şekilde çalışır. Amacı fiziksel akışa erişimi olabildiğince azaltmaktır. Bunun için hafızada bir dizi oluşturur ve değerleri bu diziye yazar. Dizi tamamen dolduğunda dizinin içindeki verileri gerçek akışa yazar. **_BufferedOutputStream_** kullanırken dikkat etmeniz gereken nokta şudur: yazılacak verilerin sonuna gelindiğinde veriler gerçek akışa yazılmamış olabilir. Bu yüzden, yazma işleminin tamamlanması için flush() metodunu kullanmalısınız.

## ByteArrayInputStream

Bir byte dizisini tıpkı bir akış gibi okumanızı sağlar. Bu sınıfın sağladığı faydayı bir örnekle anlatalım. Örneğin, dosyalar üzerinde okuma yapmak için bir kod yazdınız. Fakat daha sonra programınız gelişti ve internet üzerinden veri okur hale geldiniz. Bu veriler size byte dizisi halinde geliyor ve siz bu akışı okumak için yeni bir kod yazmak zorundasınız. Bu sınıfı kullanarak yeni bir kod yazmaktansa, byte dizisini bir akış olarak değerlendirebilir ve aynı kodu kullanabilirsiniz.

## ByteArrayOutputStream

Hedef olarak bir byte dizisi kullanan akış sınıfıdır. Bu sınıfı kullanarak akış üzerinde yazdığınız veriler nihai olarak size bir byte dizisi olarak sunulur.