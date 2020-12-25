# Java Gün ve Zaman İşlemleri (Date &amp; Time)

Java 7 ve öncesinde Date ile ilgili işlemlere yardımcı olan sınıflar &quot;java.util&quot; paketi altındadır. Özellikle, Date sınıfı tarih ve zamanı ifade eden nesneler oluşturulmasını sağlar.

Date sınıfının iki tane kurucu metodu vardır.

````java
Date now = new Date();

Date userDefinedDate = new Date(102938102222);

````

Yukarıdaki boş kurucuyu çağırıp bir Date nesnesi oluşturursanız şimdiki zamanı size verecektir.

İçine milisaniye cinsinden değer alan diğer kurucu ile nesne oluşturursanız. Bu durumda sizin belirtmiş olduğunuz zamanı işaret edecektir. 1 Ocak 1970 tarihinden günümüze kadar tarihleri mili saniye cinsinde belirtebiliriz.

&quot;boolean after(Date date)&quot; fonksiyonu kendisine gönderilen zaman bilgisi ile mevcuttaki zaman bilgisi kendisinden sonraki bir tarih ise true döndürür.

````java
Date c = new Date(209830121131L);
boolean result =c.after(new Date());
````

&quot;boolean before(Date date)&quot; fonksiyonu after gibi çalışır. Verilen zaman bilgisi mevcut zaman bilgisinden önce ise true döndürür.

&quot;int compareTo(Date date)&quot; fonksiyonu ile iki zaman bilgisi kıyaslanır. Eğer birbirine eşitse sıfır döner. Eğer, gönderilen zaman bilgisi mevcuttaki zaman bilgisinden sonra ise pozitif değer döndürür. Eğer, gönderilen zaman bilgisi önce ise negatif döndürür.

&quot;long getTime()&quot; fonksiyonu ile Date sınıfına ait nesneden tuttuğu zaman bilgisi milisaniye cinsinden alınır.

&quot;void setTime(long time)&quot; fonksiyonu ile istediğimiz zaman bilgisini set edebiliriz. Fonksiyona gönderilecek değer milisaniye cinsinden olmalıdır.

`````java
// Date nesnesi oluştur
Date date = new Date();

// Zaman ve tarih bilgisini toString metoduyla göster.
System.out.println(date.toString());
`````

Çıktı:

````
Thu Mar 05 22:16:09 EET 2020
````

## Java&#39;da Tarih Zaman Bilgisinin Formatlanması

Java&#39;da tarih ve zaman bilgisini formatlanması ve yazıdan Date tipinde bir nesne dönüştürülmesi işini &quot;SimpleDateFormat&quot; sınıfı yapmaktadır.

```java
SimpleDateFormat formatter = new SimpleDateFormat ("yyyy.MM.dd");
System.out.println("Current Date: " + formatter.format(date));
```

Çıktı:

````java
Current Date: 2020.03.05
````

Elimizde &quot;2020-02-10&quot; şeklinde yıl-ay-gün şeklinde String tipinde bir veri olsun. Bunu Date tipinde bir nesneye çevirmek için &quot;SimpleDateFormat&quot; sınıfına ait &quot;parse&quot; metodunu kullanmamız gerekecektir.

````java
SimpleDateFormat formatter = new SimpleDateFormat ("yyyy-MM-dd");
String dateAstext = "2020-02-10";
Date parsedDate = formatter.parse(dateAstext);
System.out.println("Parsed Date: " + parsedDate.toString());
````

## Java8 Tarih/Zaman (Date/Time) API

Java 8 ile birlikte tarih ve zaman bilgisini işleyen yapılar ve sınıflar değiştirildi. Daha esnek ve kullanımı kolay fonksiyonlar ve sınıflar haline dönüştü.

İlgili tüm sınıflar &quot;java.time&quot; paketi altında toplandı.

Java8&#39;in yeni Date/Time kütüphanesi aşağıdaki özelliklere sahiptir.

- Thread Safety özelliğini varsayılan olarak sağlar. Yani multi thread yazılımlar geliştirirken Date ve Time ilgili nesneler için ekstra önlemler almanıza gerek kalmaz. Veri tutarlılığını garanti eder.
- Kullanımı çok basittir.
- Dünya üzerindeki zaman farkı hesaplamaları için yazılımcının ekstra çözümler üretmesine gerek bırakmadan kendisi bu sorunu çözer.

## LocalDate Sınıfı ile Örnekler

````java
LocalDate localDate = LocalDate.now();
System.out.println(localDate.toString());
````

Yukarıdaki gibi LocalDate sınıfından bir nesne ile günümüz tarihini kolayca alıp ekrana yazdırabilirsiniz.

````java
LocalDate currentDate = LocalDate.of(2020, 03,12);
System.out.println(currentDate.toString());
````

Yukarıdaki örnekte de yıl, ay ve gün bilgilerini &quot;int&quot; tipinde ayrı ayrı geçerek belirli bir tarih atayabilirsiniz.

````java
LocalDate definedDate = LocalDate.parse("2015-02-20");
System.out.println(definedDate.toString());
````

Yukarıdaki örnekte de String tipindeki tarih bilgisini parse ederek, LocalDate tipinde bir nesneye çevirip ekrana yazdırıyoruz.

````java
LocalDate tomorrow = LocalDate.now().plusDays(1);
````

Yukarıdaki örnekte mevcut tarih üzerine 1 gün ekleme yapılmıştır. Görüldüğü gibi bu işlem tek satırda basitçe yapılabilmektedir.

````java
LocalDate previousMonthSameDay = LocalDate.now().minus(1, ChronoUnit.MONTHS);
````

&quot;minus&quot; fonksiyonu ile 1 ay önceki bugünkü tarihi alabiliriz. ChronoUnit.MONTHS aylık bir çıkarma yapılacağını belirtiyor. Gün, Ay, Yıl gibi değerler seçersek o miktarda bir çıkarma işlemi uygulayacaktır.

`````java
DayOfWeek sunday = LocalDate.parse("2016-06-12").getDayOfWeek();
System.out.println(sunday);
`````

Haftanın gününü basitçe &quot;getDayOfWeek&quot; metoduyla alabiliriz.

````java
boolean leapYear = LocalDate.now().isLeapYear();
````

Yeni Date/Time kütüphanesi artık yıl olup olmadığını da kolayca söylüyor. 

### LocalTime Sınıfı ile Örnekler

LocalTime sınıfı ise daha saat bazında zamansal işlemler içindir.

`````java
LocalTime now = LocalTime.now();

System.out.println(now);
`````

Şimdiki zamanı saat bazında alabilirsiniz.

Çıktı: 22:54:12.997

````java
LocalTime sixThirty = LocalTime.parse(&quot;06:30&quot;);
````

String şeklindeki saat bilgisini parse metoduyla LocalTime nesnesine çevirebiliriz.

````java
// 1 saat eklemek. 7:30 olacaktır.

LocalTime sevenThirty = LocalTime.parse(&quot;06:30&quot;).plus(1, ChronoUnit.HOURS);

// saat bilgisini almak. 6 cevabı gelecektir.

int six = LocalTime.parse(&quot;06:30&quot;).getHour();
````

