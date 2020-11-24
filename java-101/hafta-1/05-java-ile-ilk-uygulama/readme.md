# Java ile İlk Uygulama

Eclipse IDE&#39;yi indirmiş olmamıza rağmen, herhangi bir IDE olmadan da yazılan Java kodları derlenip, çalıştırılabilmektedir. Bunun için bir yazı editörü ve Java&#39;nin sisteminizde yüklü olması yeterlidir. İlk örneğimizi bu yolla oluşturup, Java altyapısının kodu derleme, byte code&#39;a (ara koda) dönüştürme ve sonrasında JVM vasıtasıyla yorumlayıp çalıştırılabilmesinden bahsedeceğiz. Ayrıca, yazdığımız basit Java programı hakkında kısa bilgiler vereceğiz.

Önce bir yazı editörü açıp içine aşağıdaki kodları yazıyoruz.



```java
class MyFirstProgram{

    public static void main(String args[]){
    	System.out.println("Hello Java! | Merhaba Java!");
    }
}
```



Dosya &quot; **.java**&quot; olarak kaydedilir. Java&#39;da kaynak kod dosyaları &quot;.java&quot; uzantılıdır. Ardından, Java kaynak kodumuzu derlemek (Compile) için JDK içinde yer alan &quot;javac&quot; isimli yazılımdan faydalanırız. Derleme işlemi sonrasında byte code&#39;a çevrilmiş &quot; **.class**&quot; uzantılı bir dosya üretilecektir.

![](figures/hello_world_1.png)

![](figures/hello_world_2.png)

byte code&#39;a çevirme işleminden sonra, yazdığımız uygulamayı çalıştırmak istersek artık &quot;MyFirstProgram.class&quot; dosyasını kullanacağız. Java Virtual Machine (JVM), **ClassLoader** vasıtasıyla bu Class dosyasını yükleyecek, ardından byte code&#39;u kontrolden geçirecek ve makine koduna çevirip çalıştırılmasını sağlayacak.

![](figures/hello_world_3.png)

Derlenmiş olan &quot; **MyFirstProgram.class**&quot; dosyasını JDK içinde var olan &quot; **java**&quot; yazılımı ile çalıştırıyoruz. Kaynak kodun içinde yazdığımız gibi ekrana &quot; **Hello Java! | Merhaba Java!**&quot; ifadesini basmaktadır.

Programdaki kodlara yakından bir bakalım. Bahsettiğimiz kavramlar ileride daha detaylı bir şekilde açıklanacaktır.

&quot; **class**&quot; anahtar sözcüğü ile Java&#39;da bir sınıf tanımı yaparız. Java, Nesneye Dayalı Programlama paradigmasını tamamıyla destekleyen bir dil olduğu için Java&#39;da her şey nesnelerden oluşur. Nesne&#39;leri ise sınıflar vasıtasıyla adeta bir taslak olarak modelleriz. Nesne ise bu taslaktan oluşturulmuş varlığı ifade eder. &quot;class&quot; bir sabun kalıbı ise, kalıptan üretilen her sabun ise o sınıftan üretilmiş nesnelerdir.

&quot; **public**&quot; anahtar sözcüğü Java&#39;da erişim belirteci olarak kullanılır. Aslında, herkes tarafından erişebilmeyi ifade eder. Eğer, &quot;private&quot; olarak tanımlasaydık bu durumda dışarıdan erişilemez olacaktı.

&quot; **static**&quot; anahtar sözcüğü Java&#39;da sınıftan herhangi bir nesne üretmeden ilgili değişkeni veya metodu çağırabilmeyi ifade eder. Örneğin: MyFirstProgram.createMagicObject() şeklinde nesne üretmeden direkt sınıf üzerinden bir çağrım yapabiliyorsak bu static bir metoddur.

Sınıflar içinde değişkenler ve metodlar / fonksiyonlar yer almaktadır. Böylece bir sınıfı şekillendirebiliriz. Değişkenler daha çok nitelikleri ifade ederken, örneğin: arabanın rengi, uzunluğu, genişliği gibi, metodlar / fonksiyonlar ise daha çok eylemleri ifade eder. Örneğin: startComputerMemoryCheck() isminde bir fonksiyon bilgisayar ait hafızayı kontrol etme eylemini ifade eder. Eylemler ve nitelikler gerçek hayattaki nesneleri modellememizde de kullanılır. Bu nedenle nesneye dayalı yazılım paradigması gerçek hayat problemlerinin çözümüne doğal olarak çok uygundur.

&quot; **void**&quot; bir metod değer döndürmeyecekse bu anahtar sözcük kullanılır. Fonksiyonlar bünyelerinde belirli aksiyonları icra ettikten sonra eğer ortaya bir sonuç çıkıyorsa bunu çağrıldıkları yere döndürebilirler. Bunlara değer döndüren fonksiyonlar denir.

&quot; **main**&quot; ana programin fonksiyon ismini ifade eder.

&quot;**String[] args**&quot; Java programı komut istemcisinden çalıştırılırken komut istemcisinden programa ekstra parametreler gönderebilirsiniz. Bu ekstra değerler &quot;args&quot; isimli değişken vasıtasıyla gelir.

&quot;**System.out.println()**&quot; JDK içinde tanımlı statik bir fonksiyondur. Konsol ekranına bir şeyler yazdırmak istenirse kullanılır.