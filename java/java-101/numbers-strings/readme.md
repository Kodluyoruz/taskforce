## Java Sayı ve Yazı İşlemleri (Numbers & Strings)

Java'da ilkel (Primitive) veri tiplerinden bahsetmiştik. Bu veri tiplerinin bir de referans özellikte olanları da vardır. Bunlar sınıf tabanlı veri tipleri diyoruz. Örneğin: tamsayı olan ve ilkel bir veri tipi olan "int" tipinin bir de "Integer" şeklinde bir sınıf ile temsil edildiği veri tiplerine referans veri tipi diyoruz.

Bunun yanında matematiksel işlemlere yardımcı olmak ve matematiksek fonksiyonları hazır kullanmak için Java'da Math isminde bir hazır tanımlanmış sınıf vardır. Aşağıdaki örnekler kodların içinde gerekli açıklamalar verilmiştir.

**Örnek:**

```java
// Veri dönüşümü
Long personelId = new Long(100);

int personalAsId = personelId.intValue();
byte personalAsByte = personelId.byteValue();
short personalAsShort = personelId.shortValue();
double personalAsDouble = personelId.doubleValue();
float personalAsFloat = personelId.floatValue();
String personalAsText = personelId.toString();

System.out.println(personalAsId);
System.out.println(personalAsByte);
System.out.println(personalAsShort);
System.out.println(personalAsDouble);
System.out.println(personalAsFloat);
System.out.println(personalAsText);

// Kıyaslama metodu ===> compareTo
Long personelId = new Long(100);

System.out.println(personelId.compareTo(50L));
System.out.println(personelId.compareTo(100L));
System.out.println(personelId.compareTo(150L));
// değerlerin eşitliğini karşılaştırma metodu ===> equals
Long personelId = new Long(100);

System.out.println(personelId.equals(50L));
System.out.println(personelId.equals(100L));
// String değerlerden sayılara dönüşüm metodu ===> valueOf
long number1 = Long.valueOf("100");
int number2 = Integer.valueOf("5");
short number3 = Short.valueOf("1");
// String değerlerden sayılara dönüşüm metodu ===> parseX
long number1 = Long.parseLong("100");
int number2 = Integer.parseInt("5");
short number3 = Short.parseShort("1");

// mutlak değer alma fonksiyonu ===> abs
Integer a = -8;
double d = -100;
float f = -90;

System.out.println(Math.abs(a));
System.out.println(Math.abs(d));     
System.out.println(Math.abs(f)); 

// ceil metodu ile yukarı yuvarlama, floor ile ise aşağı yönlü yuvarlama yapılır.
double d = 100.675;
float f = 90.15f;    

System.out.println(Math.ceil(d));
System.out.println(Math.ceil(f)); 

System.out.println(Math.floor(d));
System.out.println(Math.floor(f));  


// rint metodu ile ondalıklı kısım 0.5'den büyükse yukarı doğru
// eğer 0.5'e eşit ve küçük ise aşağı doğru yuvarlama yapar. rint fonksiyonu sonuç olarak sadece int tipinde değer verir.
double d = 100.675;
double e = 100.500;
double f = 100.200;

System.out.println(Math.rint(d));
System.out.println(Math.rint(e)); 
System.out.println(Math.rint(f)); 


// rint metodu ile ondalıklı kısım 0.5'e eşit ve büyükse yukarı doğru
// eğer 0.5'den küçük ise aşağı doğru yuvarlama yapar.

// round fonksiyonu long veya int döndürür. 
double d = 100.675;
double e = 100.500;
float f = 100;
float g = 90f;

System.out.println(Math.round(d));
System.out.println(Math.round(e)); 
System.out.println(Math.round(f)); 
System.out.println(Math.round(g));


// max verilen iki değerden en büyüğünü döndürür.
// min verilen iki değerden en küçüğünü döndürür.
System.out.println(Math.min(12.123, 12.456));
System.out.println(Math.max(12.123, 12.456));


// e tabanında log alma fonksiyonudur.
double x = 2.76;
System.out.printf("log(%.3f) is %.3f%n", x, Math.log(x));


// üs alma fonksiyonudur. 2 üzeri 3 gibi.
double x = 2;
double y = 3;
System.out.printf("pow(%f, %f) is %f", x, y, Math.pow(x, y));


// karekök alma fonksiyonudur.
double x = 4;
System.out.printf("sqrt(%.3f) is %.3f%n", x, Math.sqrt(x));


// 0-1 arasında rastgele sayı üretme fonksiyonudur.
System.out.println(Math.random());

//PI Sayısının Değerini almak için PI sabiti kullanılabilir.
System.out.println(Math.PI);

```

## Java'da String İşlemleri

Java'da varsayılan dil içerisinde gelen String işleme kütüphaneleri mevcuttur. String sınıfı içinde yer alan statik fonksiyonlarda yazılımcılara yardımcı olmaktadır.

String veri tipi Java'da ilkel (primitive) bir veri tipi değildir (non-primitive veri tipidir). Bu nedenle "new" anahtar sözcüğü kullanılarak nesne şeklinde oluşturulabilir.

Java'da String veri tipinde bir değişken tanımı aşağıdaki gibi yapılabilir. Buna Literal tanımlama diyoruz. Sıklıkla kullanılan bir tanımlama biçimidir. Değişkene direkt olarak veriyi "=" operatörüyle atama yapıyoruz.

```java
String greeting = "Hello world!";
```

Literal tanımlama dışında "new" anahtar sözcüğüyle bir nesne olarak oluşturabilirsiniz. Bu yöntemle Heap hafıza bölgesinde bir alan kaplamış olursunuz. Literal tanımlama ile Heap hafızadan kazanç sağlanır.

Örnek:

```
String helloString = new String("Merhaba Dunya!");
```

String tipinde tanımlanan değişkenler veya nesneler değiştirilemez duruma sahiptir. Buna Immutable Object denir. String içindeki değeri değiştirmek isterseniz. Yeni bir değişken veya nesne tanımlama yapmak gerekecektir.

String veri tipi niçin Immurable (Değiştirilemez) tasarlandı diye düşünebilirsiniz. Bunun birden fazla sebebi vardır. Öncelikle, yazılım geliştirilirken String veri tipi çok sık kullanılır.

String tipinde sürekli nesne üretilmesi Heap hafıza bölgesini çok kötü kullanmaya ve performans problemlerine yol açar. Bu nedenle Literal tanımlarla ve özel String Pool (Havuz) ile birlikte performans kazancı hedeflenmiştir. String'ler için Java'da özel bir hafıza bölgesi vardır. Bu bölgede bir String havuzu vardır. Gerçekten bu havuz içinde belli miktarda tanımlı String nesneleri bulunur. Bu nesneler Heap hafızada belli bir bölgeyi kaplarlar. Fakat, sınırlı sayıdadırlar. Aşağıda, Literal tanımlama ile "new" ile String oluşturma arasındaki fark gösterilmektedir. İki tane Literal tanımlı s1 ve s2 isminde değişkenimiz olduğunu düşünelim.

```java
String s1 = "Hello World";
String s2 = "Hello World";

s1 == s2
```



![img](figures/loops_1.jpg)

Yukarıdaki örnekte bizler iki tane s1 ve s2 tipinde iki tane Literal tanımlı değişkenler oluşturduk. Aslında, bu iki değişken aynı değere sahip oldukları içim String Pool'dan (Havuzdan) önceden oluşturulmuş bir nesneyi işaret ederek iki tane ayrı hafıza bölgesini doldurmaktan kurtuldular ve hafıza kazancı sağladılar. Yukarıdaki şekilde de bu durum izah edilmektedir. S3 değişkeni s1 ve s2 ile aynı değere sahip olsa da "new" ile yeni bir nesne olarak oluşturulduğu için hafızada başka bir bölgede oluşturulur.

Örnek:

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = "Merhaba";
String s4 = new String("Merhaba");

System.out.println("s1 == s2 : " + (s1 == s2));
System.out.println("s2 == s3 : " + (s2 == s3));
System.out.println("s3 == s4 : " + (s3 == s4));
```

Yukarıdaki örnekte de bu durum geliştirilmiştir. s1 ve s2 değişkenleri aynı değere sahip Literal tanımlı String değişkenleri oldukları için aynı hafıza bölgesini işaret ederler. s3 değişkeni Literal tanımlı olmasına rağmen başka bir değere sahip olduğu için String Pool'dan (Havuzdan) başka bir nesneyi alıp onu işaret etmektedir. s4 değişkeni ise "new" ile oluşturulduğu için Heap hafızadan bambaşka bir alanı almıştır. Yukarıdaki programın çıktısı aşağıdaki gibidir. "==" operatörü String'lerde hafıza adresi kıyaslaması yapar. s1 ile s2 aynı hafıza adresini gösterir. s2 ve s3 Literal tanımlı olsalar da havuzdaki farklı nesneleri işaret ettikleri için adresleri eşit değildir. s3 ve s4 aynı değerlere sahip olsa da biri Literal tanımlıdır ve havuzdaki bir nesneyi işaret eder. Diğeri ise "new" ile tanımlandığı için Heap hafızada başka bir adresi işaret eder.

```java
s1 == s2 : true

s2 == s3 : false

s3 == s4 : false
```

String'ler değiştirilemez olduğu için Güvenlik ile ilgili konularda da varsayılan olan korumacı bir özelliğe sahiptir. Ayrıca, String değişkenler Immutable (Değiştirilemez) olduklarından dolayı Çok Kanallı (MultiThread) programlamada Thread-Safe özelliğe sahiptirler. String Pool, String Literal ve String new arasındaki fark size mülakatlarda sorulabilir.

Not: String veri tiplerinde verinin karakter uzunluğunu bulmak için "length()" metodundan faydalanılır. Örnek:

```java
String s1 = "Hello";
int lengthOfs1 = s1.length();
```

Not: String ifadeleri birbiriyle birleştirmek için "+" operatörü veya "concat" metodu kullanılır. Örnek:

```java
String namePrefix = "My name is ";
String greetimgMessage = namePrefix.concat("Zara");
```

### Formatlı String İfadeler Oluşturmak

Java'da "String.format" metoduyla formatlı veriler oluşturabilirsiniz. "format" metodu String sınıfının static fonksiyonudur. Nesne üretmeksizin direkt sınıf ismiyle çağırabilirsiniz.

Örnek:

```java
int speed = 50;
String departureCityName = "Akhisar";
String arrivalCityName = "İstanbul";
String fullText = String.format("Aracın ortalama hızı: %d kilometredir." +
                   "Araç %s şehrinden kalkıp %s şehrine varacaktır.", speed, departureCityName, arrivalCityName);
System.out.println(fullText);
```



Yukarıdaki örnekte bir metin oluşturulmaya çalışılıyor. Metin içerisinde tanım sayıları ifade eden %d ve String veri tipini ifade eden %s alanları vardır. Bu alanlar dinamiktir. Gelen değerleri cümle içinde gösterilmesini sağlarlar.

### String Metodları ve Özellikleri

```java
            String s = "Strings are immutable";
            
            // s isimli String değişkendeki ifadenin 8. indeksindeki karakteri alır.
            // Burada dikkat edilmesi gereken şey indeksler sıfırdan başlar. O yüzden 9. karakteri okuyoruz.
            char result = s.charAt(8);
        
                    -----------------------------------------------------------
        
            String str1 = "Strings are immutable";
            String str2 = "Strings ARE immutable";
            
            // s1 ve s2 değişkenleri içinde yer alan değerleri büyük küçük harf duyarlılığı olmaksızın kıyaslar.
            int result = str1.compareToIgnoreCase(str2);
            System.out.println(result);
        
                    -----------------------------------------------------------
        
            String str = new String("This is really not immutable!!");
            
            // String ifadenin sonu verilen ifadeyle bitiyor mu kontrol eder. true veya false döner.
            // Cümlenin sonu "immutable!!" ile bitiyor mu kontrol ediyoruz. true döner.
            boolean retVal = str.endsWith( "not immutable!!" );
            System.out.println("Returned Value = " + retVal );
        
                    -----------------------------------------------------------
        
        
            String str1 = new String("This is really not immutable!!");
            String str2 = new String("This is really not immutable!!");
            // equals metodu iki String değişkenin aynı değere sahip olup olmadığını kıyaslar.
            // == operatörü ile iki String'leri kıyaslasaydık, hafıza adreslerini kıyaslamış olacaktır.
            // O da false dönecekti.
            boolean retVal = str1.equals( str2 );
            System.out.println("Returned Value = " + retVal );
        
                    -----------------------------------------------------------
        
            String str = new String("Welcome to kodluyoruz.org");
            String subStr1 = new String("Tutorials");
            // indexOf metodu verilen ifadenin cümlede nerede hangi indeksten itibaren başladığını belirtir.
            // Eğer ifadeyi cümle içinde bulamazsa -1 döner.
            System.out.println("Found Index :" + str.indexOf( subStr1 ));
        
                    -----------------------------------------------------------
        
            String str = new String("Welcome to kodluyoruz.com");
            // replace metoduyla bir cümle içindeki istediğimiz ifadeyi bir başka ifade ile değiştirebiliriz.
            // Örneğin: Welcome ifadesini Merhaba ile değiştiriyoruz. 
            // Değişiklik sonucunda değişmiş halini yeni bir String olarak döner
            str = str.replace("Welcome", "Merhaba");
            str = str.replace("to", "");
            System.out.println(str);
        
                    -----------------------------------------------------------
        
            String str = new String("Welcome-to-kodluyoruz.org");
            // split fonksiyonu cümleyi ayırmak için bir karakter alır.
            // Sonra o karaktere göre cümleyi parçalara böler.
            // bu örnekte - işaretiyle ayırma işlemi uygulanmıştır.
            String[] items = str.split("-");
            System.out.println("Return Value :" );    
        
                    -----------------------------------------------------------
        
            String str = new String("Welcome to kodluyoruz.com");
            // startsWith metoduyla cümle belirtilen ifadeyle başlıyor mu diye kontrol edilebilir.
            System.out.println(str.startsWith("Welcome") );
        
                    -----------------------------------------------------------
        
        
        
            String str = new String("Welcome to kodluyoruz.com");
            // substring fonksiyonu verilen başlangıç indeksinden itibaren verilen bitiş indeksine kadar olan bölümü kırpar ve yeni bir string olarak döndürür.
            String subStringPart = str.substring(10, 15);

```

```java
        // Char Array içindeki değerler, String objesi oluşturduktan sonra içeri değer olarak verilirse
        // String bir ifadeye dönüşür

        char data[] = {'a', 'b', 'c'};

        String myFirstString = new String(data);

        // String içindeki değerleri char tipine dönüştürdükten sonra char tipinde kullanılabilir.
        for (char c: myFirstString.toCharArray()) {
            System.out.println(c);
        }

                -----------------------------------------------------------

        // String içindeki değeri değiştirmek için replace() metodu kullanılabilir.
        // buradan gelen değer yeni bir String olarak kullanılabilir.
        String secondString = myFirstString.replace('a','z');

        for (char c: secondString.toCharArray()) {
            System.out.println(c);
        }

        System.out.println(secondString);
        System.out.println(myFirstString);

                -----------------------------------------------------------


        // İki farklı String değerinin içeriklerinin eşit olma durumuna göre true veya false döner.
        String one = "Kodluyoruz.";
        String two = "Kodluyoruz.";

        boolean result = one.contentEquals(two);
        System.out.println(result);

                -----------------------------------------------------------

        // Parametre olarak (data) verdiğimiz char[] değeri String bir ifade olarak döner.
        String s = String.copyValueOf(data);
        System.out.println(s);

                -----------------------------------------------------------
                
        // Eğer String değeri içinde belirli bir index değeri arıyorsak contains() metodu kullanılabilir.
        if(myFirstString.contains("z")){
            System.out.println("Evet var");
        }else {
            System.out.println("Hayır yok");
        }

                -----------------------------------------------------------

        // Sting değerinin hangi ifadeyle bittiğini sorgulamak için endsWith() metodu kullanılabilir.
        String test = "Kodluyoruz.";
        boolean b = test.endsWith(".") ? true : false;
        System.out.println(b);

```

```java
        // concat() metodu String değerinin sonuna içeriye girilen String değerini ekler.
        String myString = "Selam Dünya, Merhaba.";
        String resultStr = myString.concat("Dünya");
        System.out.println(resultStr);

                -----------------------------------------------------------

        // join() metodu ile String değerinin başına ve sonuna değerler eklenebilir.
        String a = String.join(myString, "ilk ","son");
        System.out.println(a);

                -----------------------------------------------------------

        // içeriye girilen String değerinin hangi index içinde olduğunu dönen metod => lastInedxOf()
        // Belirli bir index aralığı içinde de arama yapılabilir.
        int value = a.lastIndexOf("s");
        int secondValue = a.lastIndexOf("n",8);
        System.out.println(value);
        System.out.println(secondValue);

                -----------------------------------------------------------

        String myStringValue = "Selam Dünya, Merhaba.";
        String myStringValue2 = "Selam Dünya, Merhaba.";
        String secondResultStr = "Selam Dünya, Merhabalar.";

        // matches() metodu String değerlerinin eşit olma durumuna göre true veya false döner.
        boolean v1 = myStringValue.matches(myStringValue2);
        boolean v2 = myStringValue.matches(secondResultStr);
        System.out.println("Değerler = "+v1+" : "+v2);

                -----------------------------------------------------------

        // String değerinin belirli bir bölümünü çekmek için substring() metodu kullanılır.
        // 0'dan başlar girilen index değerini dahil etmez.
        String newStr = myStringValue.substring(6);
        System.out.println(newStr);

                -----------------------------------------------------------

        // 19 dahil değil 6 dahil
        String newStr2 = myStringValue.substring(6, 19);
        System.out.println(newStr2);

        String newString = "Selam Dünya, Merhaba ba.";

                -----------------------------------------------------------

        //String eğer içinde girilen ifadeyi barındıyorsa "kelime olarak" true döner.
        boolean tr = newString.contains("Dünya");
        System.out.println(tr);

                -----------------------------------------------------------

        // Eğer ilk girilen kelime string içinde varsa ikinci girilen kelime ile yer değiştirir string döner.
        String deneme = newString.replaceFirst("Dünya", "World");
        System.out.println(deneme);

                -----------------------------------------------------------

        // İlk girilen değer içeride varsa o değerlerin yerine ikinci girilen değer geçer.
        String deneme2 = newString.replaceAll("ba","World");
        System.out.println(deneme2);

```

### StringBuilder Sınıfının Kullanımı

Java'da performanslı String birleştirme işlemleri için "StringBuilder" sınıfı kullanılabilir. "+" operatörü ve "concat" fonksiyonuna göre daha performanslı bir yöntemdir.

Örnek:

```java
        StringBuilder builder = new StringBuilder();

        builder.append("İlk cümle");
        
        builder.append("İkinci cümle");
        
        builder.append("Üçüncü cümle");
        
        System.out.println(builder.toString());
```

"append" metoduyla String ifadeler eklenir. Ardından, "toString" metoduyla birleştirilmiş tüm String ifade alınır.

### StringBuilder Sınıfının Diğer Metodları

```java
        StringBuilder stringBuilder = new StringBuilder();

        stringBuilder.append("Kodluyoruz Harika !!! ");
        stringBuilder.append(10);
        stringBuilder.append('#');
        System.out.println(stringBuilder.toString());


        // insert metodunu kullanarak istenilen index'e yeni değer eklenebilir.
        stringBuilder.insert(stringBuilder.length()-1, " yeni değer ");
        System.out.println(stringBuilder.toString());

        -----------------------------------------------------------

        StringBuilder secondStringBuilder = new StringBuilder();

        secondStringBuilder.append("Kodluyoruz Mükemmel tttt");

        // İçerideki tüm değerleri olduğu gibi tersine çevirir.
        secondStringBuilder.reverse();
        System.out.println(secondStringBuilder.toString());

        -----------------------------------------------------------

        // stringBuilder değeri uzunluğu length() metoduyla bulunabilir.
        int length = secondStringBuilder.length();
        System.out.println(length);

        -----------------------------------------------------------

        // capacity() metoduyla da uzunluk bulunabilir.
        System.out.println(secondStringBuilder.capacity());

        -----------------------------------------------------------

        // İstediğiniz index aralığındaki değerleri değiştirmek için replace() metodu kullanılabilir.
        secondStringBuilder.replace(0,4,"Test");
        System.out.println(secondStringBuilder.toString());

        -----------------------------------------------------------

        // Belirlediğimiz index aralığındaki değerleri siler.
        secondStringBuilder.delete(0,5);
        System.out.println(secondStringBuilder.toString());

        -----------------------------------------------------------

        // Parametre olarak gönderilen index değerini int tipinde alır ve girilen index değerini siler.
        // Son index değerindeki char değerini sildik
        secondStringBuilder.deleteCharAt(secondStringBuilder.length()-1);
        System.out.println(secondStringBuilder.toString());

```

### Sorular

```
1.      Aşağıdaki veri tiplerini doğru şekilde tanımlayınız.
    
            myNumb = 123456373;
            myNumb = 7;
            myNumb = 8.98f;
            myNumb = 123.20;
            myString = "Kodluyoruza Hoşgeldin";
            
2.      Aşağıdaki değerleri istenilen değerlere dönüştürün.
    
            double myDouble = 9.78;
            int myInt = myDouble;
            *****************************
            int myInt = 25;
            double myDouble = myInt;
            
3.      Aşağıdaki değerlerin küçük olanını ve büyük olanın değerlerini yazdırın.
        (Math kullanarak)
           
            int x = 5;
            int y = 10;
            
4.      İki tane minimum 10 karakterli String değer tanımlayın ve 
        bu değerlerden 5. indexten sonrasını ekrana yazdırın.        
                
5.      Soyadınız ve adınızı içeren bir StringBuilder tanımlayın tersine çevrilmiş şekilde ekrana yazdırın.
    
6.      İki tane String oluşturun ve 
        bu değerlerin içinde "a" harfi geçiyor mu kontrol edin.
```

### Cevaplar

```java
1.      long, int, float, double, String
        
        ------------------------------------------

2.      double myDouble = 9.78;
        int myInt =(int)myDouble;
        System.out.println(myInt);
        ***********************************
        int myInt = 25;
        double myDouble = (double) myInt;
        System.out.println(myDouble);

        ------------------------------------------
        
3.      int x = 5;
        int y = 10;
        System.out.println(Math.min(x,y));
        System.out.println(Math.max(x,y));

        ------------------------------------------
        
4.      String str1 = "Kodluyoruz.";
        String str2 = "Kod  yazmak çok eğlenceli.";

        System.out.println(str1.substring(5));
        System.out.println(str2.substring(5));

        ------------------------------------------

5.      StringBuilder adSoyad = new StringBuilder();

        adSoyad.append("soyad ad");
        adSoyad.reverse();
        System.out.println(adSoyad.toString());

        ------------------------------------------

6.      String str1 = "Kodluyoruz Mükemmel";
        String str2 = "Kodluyoruz Harika";

        System.out.println(str1.contains("a"));
        System.out.println(str2.contains("a"));
```

### Kaynaklar

* [Oracle JavaSE Docs - String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

* [W3Schools JavaSE - DataTypes](https://www.w3schools.com/java/java_data_types.asp)

* [JavaPoint JavaSE - Math](https://www.javatpoint.com/java-math)
