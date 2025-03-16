## JDK, JRE ve JVM Kavramları

## 1. Java Virtual Machine (JVM)

JVM aslında soyut bir kavramı ifade eder. JVM fiziksel olarak ortada var olan bir yapı değildir. Doğruyu söylemek gerekirse, Java Byte kodunun bilgisayarın en temel komutlarına nasıl dönüştürüleceğini, bu süreç içinde nelerin yapılması gerektiğini kurallar ile taslak olarak ifade eder. Aslında bir sistemin dokümantasyonu gibidir.

JVM, Java Byte koda dönüştürülebilen her yazılım geliştirme dilini çalıştırabilme yeteneğine sahiptir. Örneğin: Scala dilinde yazılmış bir kaynak kod Java Byte dönüştürülebildiği için JVM tarafından Java dilinde yazılmış bir kod parçası gibi işletilebilir.

**JVM esas olarak aşağıdakileri yerine getirir:**

- Kodu yükler, Classloader vasıtasıyla bu işi yapar.
- Hafıza yönetimiyle ilgili olayları yönetir. Heap/Stack, Class hafıza bölgeleri gibi alanların koordinasyonunu sağlar.
- Ara kodu kontrolden geçirip onaylar. Ara kod içinde sorun olabilecek kodları arar.
- Ara kodu alıp bilgisayarın anlayacağı temel komutlara dönüştürür ve programın çalışmasını sağlar.

### 1.1 Java Virtual Machine Mimarisi

JVM&#39;in Java Byte kodunu alıp işleyip bilgisayarın temel komutlarına dönüştürerek çalıştıran bir sistem olduğunu öğrenmiştik. Her işletim sistemi tipi için bir JVM implemantasyonu vardır. Windows, Mac OS ve Linux gibi işletim sistemleri için JVM&#39;in çalışan halleri mevcuttur. Bu nedenle platform bağımsız bir özelliğe sahiptir. Windows işletim sistemi üzerinde geliştirilmiş bir Java uygulamaları Java Byte&#39;a çevirilir. Ardından, oluşan Java Byte kodu Linux işletim sistemi üzerinde bir JVM vasıtasıyla çalıştırılabilir.

![](figures/jvm_1.png)

​																						[1]

Yukarıda JVM&#39;in kabaca mimarisini özetlemiş oluyoruz.

Classloader ile derlenmiş Java kodları, ki bunlar Java Byte&#39;larıdır, JVM vasıtasıyla yüklenir. Ardından Classloader, JVM Hafıza bölgesine bu kodlar aktarılır.

JVM&#39;in kendine ayırdığı hafıza bölgesi belli alanlardan oluşur. Class Area denilen kısım yüklenen sınıflarla ilgili yapıları depolar. Metoda ait kod bloğunu, kurucu metodu ve metoda ait verileri saklar.

Heap hafıza alanı ise Java&#39;da sınıflardan oluşturulan nesneleri depolar. &quot;new&quot; anahtar kelimesiyle bir nesne yaratıyorsak bu Heap hafızada saklanır. Her metod çağrımında Stack hafıza bölgesinde bir alan oluşturulur. Metod çağrımı tamamlandığında ise metod çağrımına ayrılan bu alan geri iade edilir.

![](figures/jvm_2.png)
																						[2]

![](figures/jvm_3.png)
																						[3]



## 2. Java Runtime Environment (JRE)

JRE, Java ile yazılmış uygulamaların çalıştırılabilmesini sağlayan gerekli araçları ve kütüphaneleri barındırır. Aslında, Java için uygulama çalıştırma ortamı sağlar. JRE içinde halihazırda yazılım modülleri bulunur. Aynı zaman JVM spesifikasyonuna ait bir JVM implemantasyonu da barındırır. JVM&#39;in fiziksel hali bünyesinde yer alır.

JRE, JVM&#39;in fiziksel olarak ortaya çıkmış halidir diyebiliriz.

![](figures/jdk_1.png)

## 3. Java Development Environment (JDK)

JDK ise biz yazılımcıların Java programlama diliyle uygulamalar geliştirmesini sağlayan tüm altyapıyı sağlar. Bu alt yapı içinde JRE&#39;yi de içinde bulundurur. Buna ek olarak geliştirme yapabilmek için gerekli olan yazılım modüllerini ve kütüphaneleri de JDK içinde yer almaktadır.

**JDK üç tipte olabilir:**

1. Standard Edition Java Platform (Java SE)

2. Enterprise Edition Java Platform (Java EE)

3. Micro Edition Java Platform (Java ME)

![](figures/jdk_2.png)

## Kaynakça

- jvm mimarisi [1,2,3](https://medium.com/@cemthecebi/jvm-java-virtual-machine-nedir-4e2080d98f49)
