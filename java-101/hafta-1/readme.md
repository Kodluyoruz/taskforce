# Bölüm -1
=======

# Konu Başlıkları



## [ Java nedir?](01-java-nedir/)
## [Java Tarihçesi](02-java-tarihçesi/)
## [Java ile Uygulama Geliştirme Yapabileceğiniz Alanlar](03-uygulama-geliştirilecek-alanlar)

## [Java Uygulama Geliştirme Altyapıları](04-uygulama-geliştirme-altyapıları/)

## [Java ile İlk Uygulama](05-java-ile-ilk-uygulama/)

## [JDK, JRE ve JVM Kavramları](06-jdk-jre-jvm-kavramlari/)

## [Java Virtual Machine Mimarisi](07-java-virtual-machine-mimarisi/)

## [Java Programlama Dili'nin Genel Özellikleri](08-java-dilinin-özellikleri/)

## [Java Sınıf ve Nesne Kavramları (Class & Objects)](09-sınıf-ve-nesne-kavramları/)

## [Değişkenler (Variables)](10-değişkenler/)

## [Veri Tipleri (Data Types)](11-veri-tipleri/)

## [Java Temel Operatörler (Basic Operators)](12-temel-operatörler/)

## [Karar Mekanizmaları (if - else)](13-karar-mekanizmaları/)

## [Döngü Mekanizmaları (Loops)](14-döngü-mekanizmaları/)

## [Dizi (Array)](15-dizi-array/)

## [Matris İşlemleri (Matrices)](16-matrice/)

## [Gün ve Zaman İşlemleri (Date & Time)](17-gün-zaman/)











# Java Nedir? 

Java platform bağımsız, Nesneye Dayalı Programlama&#39;yı (Object Oriented Programming) tamamıyla destekleyen bir yazılım geliştirme dilidir. Java ile geliştirilen bir yazılım uygulaması Java Virtual Machine (Java Sanal Makinesi) yüklü olan herhangi bir bilgisayarda veya cihazda sorunsuz çalışabilir. Java aynı zamanda geliştirme platformunun kendisidir. Yazılım geliştirebilmeye imkan tanıyan ve geliştirilen bu yazılımın çalıştırılmasını sağlayan altyapıya verilen isimdir. Java bir programlama dili olmasının yanı sıra sağladığı bu imkanlarla birlikte platforma da ismini vermiştir. JDK, JRE bahsettiğimiz platformun kendisidir.

Java hızlı, güvenli ve güvenilir özelliklere sahiptir. Masaüstü uygulamalarından, web tabanlı uygulamalara, mobil uygulama geliştirmeden gömülü sistem uygulamalarına kadar çok geniş bir çerçevede kullanılmaktadır. Özel sektörde kurumsal firmalarda, akademik alanlarda bilimsel çalışmalarda da sıkça tercih edilmektedir. **Bir kez yaz ve her yerde çalıştır Java&#39;nın en önemli sloganıdır.**

## Java&#39;nın Özellikleri

- **Java platform bağımsız bir dildir.** Bu özelliğine yukarıda kısaca değinmiştik. Java&#39;yı platform bağımsız kılan özelliği yazılan kaynak kodlar derlendikten sonra ara bir dil olan byte code&#39;a çevrilmesidir. Ara dile çevrilen bu kod parçaları Java Virtual Machine vasıtasıyla yorumlanır ve çalıştırılır.
- **Java Nesneye Dayalı programlamaya tamamıyla uygun bir dildir.** Java&#39;da her şey nesnelerden ibarettir.
- **Java öğrenmesi basit bir dildir.** Gramer (Syntax) olarak C/C++ tabanlı bir yaklaşıma sahiptir. Java&#39;da pointers(işaretçiler), operator overloading(operatör aşırı yüklemesi), hafıza yönetimi gibi karmaşık olabilecek ve programcının sıkça hata yapabileceği yöntemler, mekanizmalar programcının sorumluluğundan alınıp dilin bünyesine yerleştirilmiştir. Böylece, programcının yapabileceği hatalara karşın bir soyutlama sağlanmıştır. Garbage Collection (Çöp Toplayıcısı) mekanizması ile kullanılmayan nesnelerin hafızadan temizlenmesi işi Java tarafından üstlenilmiştir.
- **Java kararlı bir programlama dilidir.** Java ile yazılan uygulamalar sorunsuz derlendiyse sonsuza dek her platformda çalışabilirler. Güçlü bir hafıza yönetim mekanizması vardır. Hata yakalama sistemi ile kararlılığı arttırır.
- **Java, Multi-Thread (Çok Kanallı) programlamayı varsayılan olarak destekler.** Çok kanallı programlama yapabilmek için dilin bünyesinde gerekli altyapı ve imkanlar mevcuttur. Çok kanallı programlama ile geliştirmiş olduğunuz yazılım aynı anda network üzerinden bir dosya indirme işlemi yaparken, bir yanda da veritabanına çeşitli kayıtların yazılabilmesini sağlayabilir. Bu sizlerin bilgisayarınızda müzik dinlerken aynı anda bir Microsoft Word programını kullanabilmeniz gibi bir durumdur. Özetle eş zamanlı işlemleri programlayabilmenize imkan tanır.
- **Dağıtık sistemler ve Web programlama yapabilmenize imkan tanır.** Java ile network (ağlar) üzerinde çalışabilecek dağıtık sistemler programlayabiliriz. TCP/IP, HTTP ve Socket gibi alt yapılar ile bunları gerçekleştirebiliriz. Remote Method Invocation (RMI) ve REST tabanlı servis özellikleri sayesinde dağıtık bir şekilde haberleşme imkanı sağlamaktadır. Servlet, Java Server Page gibi alt yapılar ile Web programlama da yapılabilmektedir.
- **Gömülü sistemlerde programlama imkanı sağlar.** JavaME platformu ile gömülü sistemlerde Java ile geliştirmeler yapabilirsiniz.

## Java Tarihçesi

1991 yılında Sun Microsystems&#39;de (Şu an bu firma Oracle tarafından satın alınmıştır.) çalışan James Gosling&#39;e ve arkadaşlarına birçok cihazda ve bilgisayarda platform bağımsız şekilde çalışabilecek bir dil ortaya çıkarmaları için görev verildi. Onlar da C++ dilini inceledikten sonra, yeni bir dil ortaya çıkarıp bu hedefi gerçekleştirmeye karar verdiler. Ofislerinin önündeki ağaçtan esinlenerek bu dile Meşe anlamına gelen &quot;Oak&quot; adını verdiler. Ardından, 1 yıl kadar sonra geliştirilen tüm teknolojiler Java 1.0 adı altında toplanıldı. Bu teknoloji Star7 isimli bir el bilgisayarı ve Time Warner şirketi için ise bir televizyon decoder cihazı geliştirme projelerinde kullanıldı. (Java logosundaki Duke karakteri bu sistemlerde yardımcı sihirbazlığı yapan modülün simgesiydi ) Fakat, projelerde istenilen başarı sağlanamadı. Ardından, proje sonucu geliştirilen Java dili kullanılmama durumuna gelme tehlikesiyle karşı karşıya kaldı.

1990&#39;lı yılların başında yaygınlaşmaya başlayan bir teknoloji olan World Wide Web üzerine yoğunlaşmaya başladılar ve dil üzerindeki çalışmalarını bu teknoloji üzerine kurgulamaya başladılar. 23 Mayıs 1995 yılında da Java resmi olarak duyuruldu. Artık, internet tarayıcılarında Java tabanlı uygulamaların çalışması devri başlamıştı. Java&#39;nın 2. sürümü ile birlikte sadece tarayıcılarda çalışan uygulamalar yazmaya imkan veren bir yapıdan, temel nesneye dayalı kurumsal bir programlama diline doğru dönüşmeye başladı. Dilin daha kolay kullanımını sağlayan özellikler ise Java 5 ile geldi. Java 6 ve Java 7 ile dilin olgunlaşması ve kurumsal projelerde sıkça kullanılır hale gelmesi sağlandı. Java 8 ile dile Stream API, Lambda Expressions (Lambda Tanımlamaları) gibi çok önemli yenilikler getirildi.

**Java Versiyon Tarihçesi** *(Detay: [https://en.wikipedia.org/wiki/Java\_version\_history](https://en.wikipedia.org/wiki/Java_version_history))*

* JDK Alpha ve Beta (1995)
* JDK 1.0 (23 Ocak 1996)
* JDK 1.1 (19 Şubat 1997)
* J2SE 1.2 (8 Aralık 1998)
* J2SE 1.3 (8 Mayıs 2000)
* J2SE 1.4 (6 Şubat 2002)
* J2SE 5.0 (30 Eylül 2004)
* Java SE 6 (11 Aralık 2006)
* Java SE 7 (28 Temmuz 2011)
* Java SE 8 (18 Mart 2014)
* Java SE 9 (21 Eylül 2017)
* Java SE 10 (20 Mart 2018)
* Java SE 11 (25 Eylül 2018)
* Java SE 12 (19 Mart 2019)
* Java SE 13 (17 Eylül 2019)
* Java SE 14 (17 Mart 2020)
* Java SE 15 (15 Eylül 2020)

## Java ile Uygulama Geliştirme Yapabileceğiniz Alanlar

Yeryüzünde Java dili geliştirilen yazılımların sayısı gün geçtikçe artmaktadır. Yaklaşık 3 milyar cihazda Java kullanıldığı tahmin edilmektedir. Aynı zamanda Java dili ile birbirinden farklı platformda, farklı amaçlar için çalışan uygulamalar yazabilirsiniz.

- Web uygulamaları geliştirebilirsiniz.
- Masaüstü uygulamaları geliştirebilirsiniz. (Eclipse IDE gibi)
- Kurumsal uygulamalar geliştirebilirsiniz. ([www.sahibinden.com](http://www.sahibinden.com/) gibi)
- Mobil uygulamalar geliştirebilirsiniz. (Android ve Java2ME tabanlı uygulamalar gibi)
- Gömülü sistem uygulamaları geliştirebilirsiniz. (Java2ME Embedded altyapısı ile)
- Robotik projelerde kullanabilirsiniz.
- Oyun programlamada kullanabilirsiniz. (Android ile oyun geliştirme gibi)

## Java Uygulama Geliştirme Altyapıları

1. **Java SE (Java Standard Edition)**: Java programlama diliyle birlikte genel amaçlı, temel düzeyde programlama yapabilmeyi sağlayan platformdur. Java ile ilgili tüm temel kütüphaneleri ve dil özelliklerini içerir. Nesneye dayalı programlama yapabilmek için gerekli olan özellikleri sağlar.

1. **Java EE (Java Enterprise Edition)**: Java SE&#39;yi kapsamaktadır Ayrıca, Java ile daha çok web ve kurumsal düzeyde programlama yapabilmeyi sağlar. Servlet, Java Server Page, Web Service&#39;leri, Enterprise Java Bean (EJB) (orta katman yazılım geliştirme altyapısı), JPA (Java Persistence API) (Veritabanı ile etkileşim katmanı)

1. **Java ME (Java Micro Edition)**: Java ile gömülü sistem uygulamaları geliştirmeyi sağlar. Özellikle mobil cihazlarda geliştirme yapmaya imkan verir.

1. **JavaFX** : Java masaüstü uygulamaları geliştirmeyi sağlayan yeni nesil altyapıdır. Öncesinde masaüstü programları geliştirmek için Swing altyapısı tercih edilirdi. Swing&#39;in yerini alması için geliştirilmiştir.

## Java Geliştirme Ortamının Kurulumu

Java ile yazılmış olan uygulamaları çalıştırabilmek için bilgisayarınıza **Java Runtime Environment (JRE)** kurmanız gerekmektedir. JRE uygulamaları çalıştırmak için yeterlidir. Fakat, Java ile yazılım geliştirmeyi amaçlıyorsanız. **Java Development Kit&#39;i (JDK)** kurmanız gerekmektedir. JDK bünyesinde JRE&#39;yi de içermektedir. Ayrıca Java ile geliştirme yapabilmeniz için gerekli kütüphaneleri ve altyapıyı sağlamaktadır. Bu konuya ileride daha derinlemesine bir şekilde ele alacağız. Eğitim boyunca JDK 8 versiyonunu kullanacağız. Şimdi Windows, Mac OS ve Linux ortamları için JDK kurulumundan bahsedelim.

1. Windows İşletim Sisteminde JDK 8 Kurulumu

Aşağıdaki linkten Oracle sitesi üzerinden JDK indirme işlemini başlatabilirsiniz.

[https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)

![JDK 8 Kurulumu](figures/JDK-8-Kurulumu.png) 

Yukarıda da görüleceği üzere işlemci tipinize göre x86 (32 Bit) / x64 (64 Bit) seçebilirsiniz. Tıklayıp sözleşmeyi kabul edip indirebilirsiniz. İndirilen .exe uzantılı dosyaya çift tıklayarak kurulumu başlatabilirsiniz.

![JDK Kurulumu 2 ](figures/jdk-kurulumu-2.jpg)



&quot;Next&quot; seçeneği ile kuruluma devam edilir.

![JDK Kurulumu 3 ](figures/jdk-kurulumu-3.jpg)

Yukarıdaki gibi varsayılan ayarlar bırakılır ve &quot;Next&quot; ile kuruluma devam edilir.

![JDK Kurulumu 4 ](figures/jdk-kurulumu-4.jpg)

Yukarıda Java&#39;nın kurulacağı dosya yolu belirtilmiştir. &quot;Change&quot; butonuna tıklayarak dilediğiniz dosya yolu verebilirsiniz. &quot;Next&quot; ile kuruluma devam edilir.

![JDK Kurulumu 5 ](figures/jdk-kurulumu-5.jpg)

JDK 8 kurulumu böylece tamamlanmış olur. Java&#39;nın sisteme doğru bir şekilde kurulduğunu kontrol için &quot;Windows \&gt; cmd&quot; yoluyla Komut İstemcisi açılır.

java -version

![](RackMultipart20201119-4-xnzld6_html_126910fcb8d943db.png)=> Bu ve aşağıdaki resimler patlak.

Komut satırı üzerinden versiyon sorgulaması yaptığınızda yukarıdaki fotoğrafta da görüldüğü gibi eğer Java başarılı bir şekilde yüklendiyse size kısa bilgiler verecektir.

PATH ve JAVA\_HOME Tanımlamalarının Yapılması => Bu ve bunun gibi içerikler başlık mı? Başlıksa `derecesine göre h1,h2,h3.. diye yapalım. (yani #, ##, ###)`

Ortam değişkenleri (Environment Variables) oluşturularak işletim sistemi düzeyinde global tanımlamalar yapılabilmektedir. Java uygulamaları da işletim sistemi tarafından çalıştırılmaya başlandığında JAVA\_HOME ortam değişkenine ihtiyaç duyarlar. Varsayılan olarak işletim sisteminde tanımlı olan ortam değişkenini kullanmaya çalışırlar. Böylece, tüm Java uygulamalarını hatasız bir şekilde çalıştırma şansını yakalarız.

JAVA\_HOME Ortam Değişkeni Tanımlanması

JAVA\_HOME ortam değişkeni tanımlanırken JDK&#39;nin kurulu olduğu dosya dizinini vermeliyiz. JRE ve JDK&#39;nın dosya dizinleri birbirinden farklıdır.

Windows arama çubuğuna **&quot;Gelişmiş Sistem Ayarları&quot;** veya İngilizcesi ile **&quot;Advanced System Settings&quot;** yazarak erişebilirsiniz. Açılan pencerede &quot;Gelişmiş&quot; (Advanced) tabına gelerek Ortam Değişkenleri&#39;ni (Environment Variables) güncelleyebilirsiniz.

![](RackMultipart20201119-4-xnzld6_html_35e4f9435adc5d91.jpg)

Ardından, **&quot;Sistem Değişkenleri&quot; (System Variables)** altında yer alan &quot;Yeni&quot; (New) butonuna tıklayarak JAVA\_HOME değişkenini, JDK dosya dizinini vererek tanımlayabilirsiniz.

![](RackMultipart20201119-4-xnzld6_html_5eb1f61cba311b7b.jpg)

PATH Tanımının Güncellenmesi

PATH değişkenleri çalıştırabilir yazılım uygulamalarının dosya yolunu işletim sistemine belirtmek için kullanılır. Örneğin: yazılacak olan Java kodlarının derlenebilmesi için &quot;javac&quot; ismindeki yazılım modülüne ihtiyaç olacaktır. JDK kurulumu ile bu uygulama sisteminize yüklenmiş olur. &quot;javac&quot; yazılım modülünü her çalıştırmak istediğinizde tam dosya yolunu da yazmak zorunda kalırsınız.

Örneğin:

\&gt;\&gt; C:\ProgramFiles\Java\jdk-13.0.1\bin\javac ExampleSourceCode.java

Yukarıda da görüldüğü gibi **&quot;ExampleSourceCode.java&quot;** isimli örnek Java uygulamamızı derlemek istediğimizde tam ve kesin bir biçimde dosya yolunu vermek gerekmektedir. PATH tanımlamaları ile bu yükten kurtuluruz. &quot;javac&quot; ile derleme yapmak istediğimizde sadece aşağıdaki gibi bir komut çalıştırmak yeterli olacaktır.

\&gt;\&gt; javac ExampleSourceCode.java

Yine **&quot;Sistem Değişkenleri&quot; (System Variables)** içinde yer alan &quot;Path&quot; isimli öğeyi seçilir ve &quot;Güncelle&quot; (Edit) seçeneğine tıklanır. Gelen ekranda &quot;Yeni&quot; (New) butonuna tıklayarak yeni PATH tanımı eklenir. Bu PATH tanımında bir önceki bölümde tanımladığımız &quot;JAVA\_HOME&quot; ortam değişkeni kullanılabilir. JAVA\_HOME zaten JDK&#39;nin kurulu olduğu dosya dizinini verir. **&quot;%JAVA\_HOME\bin%&quot;** şeklinde sonuna &quot;\bin&quot; gelecek şekilde ekleme yapılarak, Java işletim sisteminin PATH tanımına eklenmiş olur.

![](RackMultipart20201119-4-xnzld6_html_819742651de52a6c.jpg)

2. Linux İşletim Sisteminde JDK 8 Kurulumu

Linux işletim sistemi **Özgür Yazılım Lisansı**&#39;na sahiptir. Bu nedenle Linux&#39;u esas alan birden fazla Linux türevleri (dağıtımları) ortaya çıkmıştır. Ubuntu İşletim Sistemi üzerinde JDK 8 kurulumu açıklanacaktır.

Ubuntu&#39;da yeni bir Terminal açılır. Ve işlemler komut istemcisinden yürütülür. Linux dağıtımlarında yazılım kurulumları, güncellemeleri ve birçok işlem Terminal (Komut İstemcisi) üzerinden halledilir.

\&gt;\&gt; sudo apt update
\&gt;\&gt; sudo apt install openjdk-8-jdk => Bu kodları kod içerisine almalısın mesela bu terminal komutu olduğu için aşağıdaki gibi yazmalısın.


```Terminal
sudo apt update
sudo apt install openjdk-8-jdk
```

Yukarıdaki komutlarla birlikte Ubuntu&#39;ya JDK 8 kurulumu tamamlanmış olur. Ubuntu üzerinde yazılım kurulumu için &quot;sudo apt install \&lt;yazılımın ismi\&gt;&quot; şeklinde komut çalıştırılır.

\&gt;\&gt; java -version

Komutu ile Java&#39;nın başarılı şekilde yüklendiği kontrol edilir.

**Ek Bilgi:** İşletim sisteminizde birden fazla JDK versiyonu yüklü ise &quot;sudo update-alternatives --config java&quot; komut ile kontrol edebilirsiniz. Varsayılan JDK versiyonunu da değiştirebilirsiniz.

JAVA\_HOME Ortam Değişkeni Tanımlanması

Ubuntu&#39;ta ortam değişkenleri &quot;environment&quot; isimli bir dosyada tutulur. Bu dosyayı güncelleyerek JAVA\_HOME tanımlanabilir.

\&gt;\&gt; sudo vim /etc/environment

Yukarıdaki komut ile bir Yazı (Text) Editör yardımıyla dosya açılır ve aşağıdaki satır en sona eklenir. Buradaki örnekte &quot; **vim**&quot; adlı yazı editör aracını tercih ettik. &quot; **nano**&quot; gibi araçlar da tercih edilebilir.

JAVA\_HOME=&quot;/usr/lib/jvm/java-8-openjdk-amd64&quot;

3. Mac OS Sistemde JDK 8 Kurulumu

Mac OS üzerinde JDK 8 kurulumu için Oracle websitesinden &quot;. **dmg**&quot; uzantılı dosyayı indirerek işe başlarız. Aşağıdaki linkten indirme işlemini yapabilirsiniz.

[https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html#license-lightbox](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html#license-lightbox)

İndirilen dosyaya çift tıklayarak kurulumu başlatabilirsiniz.

![](RackMultipart20201119-4-xnzld6_html_b5e623f26f8459cb.png)

Mac OS üzerinde komut istemcisi üzerinden işleri halletmek verimli ve entegrasyon esnekliği açısından faydalı denilebilir. Mac OS için &quot; **iTerm**&quot; Terminali tavsiye edebilirim. &quot; **iTerm**&quot; terminal kurulu olduğunu varsayarak veya var olan Terminali açarak Java kurulumunun başarılı bir şekilde yapılıp yapılmadığı kontrol edilmelidir.

\&gt;\&gt; java -version

![](RackMultipart20201119-4-xnzld6_html_31f575cc1ea1aa9a.png)

Ardından, Windows ve Ubuntu işletim sistemlerinde yaptığımız gibi Mac OS işletim sisteminin PATH ortam değişkenini, JAVA\_HOME ortam değişkenini belirtmeliyiz.

Komut istemcisinden aşağıdaki komut ile **bash\_profile** dosyası güncellenir.

\&gt;\&gt; vim ~/.bash\_profile

&quot;vim&quot; ile açtığımız dosyaya aşağıdaki satırları ekliyoruz.

export JAVA\_HOME=&quot;/Library/Java/JavaVirtualMachines/jdk1.8.0\_231.jdk/Contents/Home&quot;

Yukarıdaki ifade ile **JAVA\_HOME** ortam değişkenini işletim sistemi düzeyinde tanımladık.

export PATH=&quot;$PATH:$JAVA\_HOME/bin&quot;

Yukarıdaki ifade ile Windows işletim sistemindeki gibi **PATH** ortam değişkenine Java tanımını ekliyoruz.

4. Eclipse IDE Kurulumu ve Mimarisi

Eclipse IDE, Java projeleri geliştirmenizi sağlayan bir geliştirici aracıdır. 2001 yılında IBM Kanada&#39;da hayatına başlamıştır. 2004 yılında kurulan Eclipse Vakfı (Foundation) ile ivme kazanarak Java geliştirme dünyasında en çok tercih edilen geliştirme ortamlarından biri haline geldi. Bizler de eğitim sürecinde Eclipse geliştirme aracını kullanacağız. Eclipse, Eclipse Public License (EPL) isimli açık kaynak kod lisansına sahiptir. Ücretsiz bir dağıtımdır. Oldukça fazla plug-in desteğine sahiptir. Eclipse&#39;in sahip olduğu arayüz (Standard Widget Toolkit) SWT isimli teknoloji ile geliştirilmiştir. Eclipse plug-in&#39;lere dayalı bir mimariye sahiptir.

Not: IDE, bütünleşik geliştirme ortamı anlamına gelmektedir.

Eclipse Mimarisi

Eclipse temel bir platform üzerinde, tüm yeni işlevleri ve özellikleri bu temel alt yapı üzerine eklenen eklentiler (plug-in) ile sağlanmaktadır. Böylece modüler bir mimariye sahiptir. Eclipse modülerliğini sağlamakta olan altyapı OSGi standartlarındaki &quot;Equinox&quot; yazılım altyapısıdır.

![](RackMultipart20201119-4-xnzld6_html_da7ff62724032f39.png)

Yukarıdaki mimaride de görüleceği üzere Eclipse Platform adı altında ana bir altyapıdan oluşur. SWT, JFace gibi teknolojiler bu çekirdek yapı içinde yer alır. Platform Runtime katmanı ise OSGi ile var olan Equinox altyapısını sağlar. Equinox ile eklentiler sisteme entegre edilip çalıştırılabilir. Bu da eklenti tabanlı modüler bir mimarinin önünü açar.

Java Development Tooling bizlere kod düzenleme araçları, Java projeleri oluşturmak için gerekli araçları sağlar. Bu eklenti Eclipse çekirdek yapı içinde yer alan önemli bir eklentidir. &quot;New Tool&quot; isminde belirtilen modüller mimariye entegre edilebilen yazılım eklentileridir.

Eclipse Kurulumu

Aşağıdaki indirme linkinden dilediğiniz bir versiyonu, dilediğiniz işletim sistemi için indirebilirsiniz. Eclipse kurulumu çok basittir. İndirdiğiniz sıkıştırılmış dosya içinden çalıştırılabilir dosyalar çıkacaktır. Direkt çift tıklama ile Eclipse&#39;i çalıştırabilirsiniz.

İndirme linki: [https://www.eclipse.org/downloads/packages/](https://www.eclipse.org/downloads/packages/)

![](RackMultipart20201119-4-xnzld6_html_a648e9dfd56f1be3.png)

## Java ile İlk Uygulama

Eclipse IDE&#39;yi indirmiş olmamıza rağmen, herhangi bir IDE olmadan da yazılan Java kodları derlenip, çalıştırılabilmektedir. Bunun için bir yazı editörü ve Java&#39;nin sisteminizde yüklü olması yeterlidir. İlk örneğimizi bu yolla oluşturup, Java altyapısının kodu derleme, byte code&#39;a (ara koda) dönüştürme ve sonrasında JVM vasıtasıyla yorumlayıp çalıştırılabilmesinden bahsedeceğiz. Ayrıca, yazdığımız basit Java programı hakkında kısa bilgiler vereceğiz.

Önce bir yazı editörü açıp içine aşağıdaki kodları yazıyoruz. => Aşağıdaki kodlar java etiketiyle kod içerisine alınmalı. Bunun gibi diğer bağımsız kodları da etikete alalım.

**class**** MyFirstProgram**{

**public**** static**voidmain(String args[]){

System.out.println(&quot;Hello Java! | Merhaba Java!&quot;);

}

}

Dosya &quot; **.java**&quot; olarak kaydedilir. Java&#39;da kaynak kod dosyaları &quot;.java&quot; uzantılıdır. Ardından, Java kaynak kodumuzu derlemek (Compile) için JDK içinde yer alan &quot;javac&quot; isimli yazılımdan faydalanırız. Derleme işlemi sonrasında byte code&#39;a çevrilmiş &quot; **.class**&quot; uzantılı bir dosya üretilecektir.

![](RackMultipart20201119-4-xnzld6_html_ca90a05c1c048c89.png)

![](RackMultipart20201119-4-xnzld6_html_662a1e82a946fa57.png)

byte code&#39;a çevirme işleminden sonra, yazdığımız uygulamayı çalıştırmak istersek artık &quot;MyFirstProgram.class&quot; dosyasını kullanacağız. Java Virtual Machine (JVM), **ClassLoader** vasıtasıyla bu Class dosyasını yükleyecek, ardından byte code&#39;u kontrolden geçirecek ve makine koduna çevirip çalıştırılmasını sağlayacak.

![](RackMultipart20201119-4-xnzld6_html_2c351f5ac0ef75c0.png)

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

## JDK, JRE ve JVM Kavramları

1.Java Virtual Machine (JVM)

JVM aslında soyut bir kavramı ifade eder. JVM fiziksel olarak ortada var olan bir yapı değildir. Doğruyu söylemek gerekirse, Java Byte kodunun bilgisayarın en temel komutlarına nasıl dönüştürüleceğini, bu süreç içinde nelerin yapılması gerektiğini kurallar ile taslak olarak ifade eder. Aslında bir sistemin dokümantasyonu gibidir.

JVM, Java Byte koda dönüştürülebilen her yazılım geliştirme dilini çalıştırabilme yeteneğine sahiptir. Örneğin: Scala dilinde yazılmış bir kaynak kod Java Byte dönüştürülebildiği için JVM tarafından Java dilinde yazılmış bir kod parçası gibi işletilebilir.

JVM esas olarak aşağıdakileri yerine getirir:

- Kodu yükler, Classloader vasıtasıyla bu işi yapar.
- Hafıza yönetimiyle ilgili olayları yönetir. Heap/Stack, Class hafıza bölgeleri gibi alanların koordinasyonunu sağlar.
- Ara kodu kontrolden geçirip onaylar. Ara kod içinde sorun olabilecek kodları arar.
- Ara kodu alıp bilgisayarın anlayacağı temel komutlara dönüştürür ve programın çalışmasını sağlar.

2.Java Runtime Environment (JRE)

JRE, Java ile yazılmış uygulamaların çalıştırılabilmesini sağlayan gerekli araçları ve kütüphaneleri barındırır. Aslında, Java için uygulama çalıştırma ortamı sağlar. JRE içinde halihazırda yazılım modülleri bulunur. Aynı zaman JVM spesifikasyonuna ait bir JVM implemantasyonu da barındırır. JVM&#39;in fiziksel hali bünyesinde yer alır.

JRE, JVM&#39;in fiziksel olarak ortaya çıkmış halidir diyebiliriz.

![](RackMultipart20201119-4-xnzld6_html_8c714c208475b20d.png)

3.Java Development Environment (JDK)

JDK ise biz yazılımcıların Java programlama diliyle uygulamalar geliştirmesini sağlayan tüm altyapıyı sağlar. Bu alt yapı içinde JRE&#39;yi de içinde bulundurur. Buna ek olarak geliştirme yapabilmek için gerekli olan yazılım modüllerini ve kütüphaneleri de JDK içinde yer almaktadır.

JDK üç tipte olabilir:

Standard Edition Java Platform (Java SE)

Enterprise Edition Java Platform (Java EE)

Micro Edition Java Platform (Java ME)

![](RackMultipart20201119-4-xnzld6_html_89f5e195765b31ad.png)

## Java Virtual Machine Mimarisi

JVM&#39;in Java Byte kodunu alıp işleyip bilgisayarın temel komutlarına dönüştürerek çalıştıran bir sistem olduğunu öğrenmiştik. Her işletim sistemi tipi için bir JVM implemantasyonu vardır. Windows, Mac OS ve Linux gibi işletim sistemleri için JVM&#39;in çalışan halleri mevcuttur. Bu nedenle platform bağımsız bir özelliğe sahiptir. Windows işletim sistemi üzerinde geliştirilmiş bir Java uygulamaları Java Byte&#39;a çevirilir. Ardından, oluşan Java Byte kodu Linux işletim sistemi üzerinde bir JVM vasıtasıyla çalıştırılabilir.

![](RackMultipart20201119-4-xnzld6_html_29463a6ea5043fed.png)

Yukarıda JVM&#39;in kabaca mimarisini özetlemiş oluyoruz.

Classloader ile derlenmiş Java kodları, ki bunlar Java Byte&#39;larıdır, JVM vasıtasıyla yüklenir. Ardından Classloader, JVM Hafıza bölgesine bu kodlar aktarılır.

JVM&#39;in kendine ayırdığı hafıza bölgesi belli alanlardan oluşur. Class Area denilen kısım yüklenen sınıflarla ilgili yapıları depolar. Metoda ait kod bloğunu, kurucu metodu ve metoda ait verileri saklar.

Heap hafıza alanı ise Java&#39;da sınıflardan oluşturulan nesneleri depolar. &quot;new&quot; anahtar kelimesiyle bir nesne yaratıyorsak bu Heap hafızada saklanır. Her metod çağrımında Stack hafıza bölgesinde bir alan oluşturulur. Metod çağrımı tamamlandığında ise metod çağrımına ayrılan bu alan geri iade edilir.

![](RackMultipart20201119-4-xnzld6_html_f0daa9ad9245b768.png)

![](RackMultipart20201119-4-xnzld6_html_45484533d95db355.png)

## Java Programlama Dili&#39;nin Genel Özellikleri

Java, dünyada web, mobil ve daha birçok alanda yaygın şekilde kullanılan bir programlama dilidir. Özellikle, kurumsal düzeyde büyük yazılım projeleri gerçekleştirmek için çok uygundur. Java ile **Özgür Yazılım Lisansı**&#39;na versiyonları kullanabilirsiniz. **OpenJDK** buna en güzel örnektir. Ayrıca, Java diliyle yazılım dünyasında ticari ve özgür yazılım lisansına sahip çok fazla geliştirme aracı mevcuttur. Java&#39;yı güçlü kılan da arkasında bu büyük topluluklardır.

Java dilinde Sınıf (Class) kavramı en önemli özelliktir. Java&#39;da her şeyi Sınıf şeklinde tanımlamanız gerekmektedir. Sınıflar bir nesneyi tanımlayan şablonlardır. Örneğin: Kahve Makinesi gerçek hayatta bir nesneyi ifade eder. Yazılım dünyasında bu gerçek hayat nesnesini tasarlarken, &quot;KahveMakinesi&quot; isminde bir şablon tasarlarız. Bu şablon gerçek hayatta var olan nesneye ait tüm özellikleri bünyesinde barındırır. Bu nesneyi ele aldığımızda renk, uzunluk, genişlik, ağırlık gibi nitelikleri vardır. Bu özellikler tasarladığımız &quot;KahveMakinesi&quot; isimli sınıfta birer değişkeni ifade eder. Suyu ısıtma, kahveyi karıştırma, kahveyi pişirme gibi eylemler ise fonksiyonları ifade eder. Gerçek hayat nesnesine ait bu eylemler &quot;KahveMakinesi&quot; isimli sınıfta birer fonksiyon olarak tanımlanır. Böylece, yazılım dünyasında kahve makinesini modellemiş oluruz. Bu modelden veya şablondan üretilenlere de nesne denilmektedir. &quot;KahveMakinesi&quot; isimli sınıftan bir fabrikada üretiliyormuş gibi onlarca nesne oluşturulabilir. Her üretilen yazılımsal açıdan farklı bir nesneyi ifade eder.

**Sınıf:** Gerçek hayatta yer alan bir nesnenin yazılım dünyasındaki model halidir.

**Nesne:** Tasarlanan bu modelden üretilenlere de nesne denilmektedir.

**Metot (Fonksiyon):** Fonksiyonlar eylemleri işaret eder. Örneğin: Printer isimli bir sınıfa ait &quot;print&quot; isimli eylem yazılım dünyasında bir metodu ifade eder. Metotlar belli parametreler alarak veya almadan belli bir üreten veya üretmeyen kod parçalarıdır.

**Değişken:** Değişkenler nesnenin niteliklerini işaret ederler. Örneğin: Printer isimli sınıfa ait &quot;color&quot; isimli nitelik bir değişkeni ifade eder. Eğer rengi beyazsa beyaz bir değer alır.

Java dilinde de sınıflar tasarlanır, bu sınıflardan nesneler üretilir. Bu nesneler birbirine bağımlılıklar kurarlar ve böylece birbiriyle iletişim kurarak bir yazılımı meydana getirirler. Lego parçalarıyla büyük bir uçak yapmak gibi 

1. Dilin Temel Kuralları

- Java dilinde sınıf, metot, değişken gibi isimlendirme yapabildiğiniz her şey büyük küçük harf duyarlılığına sahiptir. Yani, Java&#39;da &quot;invoicePrice&quot; ile &quot;InvoicePrice&quot; birbirinden farklı değişkenlerdir.
- Sınıf isimlendirmesi yapılırken hep ilk harf büyük olacak şekilde bir tanımlama yapılır. Dilde böyle bir kısıtlama olmasa da okunabilirlik için bu genel kabul görmüş bir yaklaşımdır. Örneğin: &quot;class **Printer**&quot; gibi.
- Metot (Fonksiyon) isimlerinin ilk harfi küçük ile başlayacak şekilde, Camel (Deve) Case stilinde bir tanımlama yapılır. Örneğin: &quot;void **printInvoice** ()&quot; gibi.
- Java&#39;da sınıfa ait kaynak kodlar &quot;.java&quot; uzantılı dosyaların içine yazılır. Bu dosya ismi sınıf ismi ile aynı olmalıdır. Örneğin: &quot;Printer.java&quot; ise sınıf tanımı &quot;class Printer&quot; şeklinde olmalıdır.
- Java&#39;da bir programın çalışması için bir başlangıç metoduna ihtiyaç duyar. &quot;public static void main(String args[])&quot; metod başlangıç metodur.

2.Java&#39;da Tanımlayıcı İsimlendirme Kuralları (Identifier)

Yazılım geliştiricinin sınıf, metot ve değişken gibi yapılar için yaptığı isimlendirmelere tanımlayıcı denilmektedir. Örneğin: oluşturulan sınıfa &quot;CustomerService&quot; isminin verilmesi gibi. Java dilinde isimlendirme yapılırken dikkat edilmesi gereken belli başlı hususlar vardır. Bunları aşağıda listelenmiştir.

- Java&#39;da isimlendirme yaparken ilk karakter harf, $ işareti ve \_ (alt çizgi) ile başlayabilir. Rakam ve sayı isimlendirmenin başında yer alamaz. İlk karakteri belirtilen şekilde kurallara uygun verirseniz geri kalanında dilediğiniz gibi isimlendirmeye devam edebilirsiniz.
- Java diline özel ayrılmış anahtar kelimeler vardır. Bunları da değişken ismi olarak kullanamazsınız. Örneğin: class, int, for, while gibi anahtar sözcükler tek başlarına bir tanımlayıcı olarak kullanılamazlar.
- Java&#39;da yaptığınız isimlendirme büyük küçük harf duyarlılığına sahiptir. &quot;maxAge&quot; ile &quot;MAXAGE&quot; iki ayrı tanımlayıcıyı ifade etmektedir.

3.Java&#39;da Düzenleyiciler (Modifiers)

Java&#39;da tanımladığınız sınıflara, metotlara, değişkenlere başka kod bloklarından erişimi düzenleyen anahtar kelimelere düzenleyiciler (modifier) denilmektedir. Bu belirteçler ikiye ayrılmaktadır.

- Erişim Belirteçleri: **default, public, private, protected** gibi anahtar kelimeler ile ifade edilir. Bu belirteçler yazılan sınıfın, metotun kendi kapsamı dışında bir noktadan erişimini yönetir. Örneğin: &quot;public&quot; anahtar sözcüğü ile erişime açılır. &quot;private&quot; ile dışarıdan erişime kapatılır.
- Erişim Dışındaki Belirteçler: **final, abstract, strictfp** gibi anahtar kelimeleri ifade edilir. Bu sözcükler erişim ile ilgili değildir. Örneğin: &quot;final&quot; sözcüğü sınıfın, metotudun veya değişkenin davranışını etkiler.

4.Java&#39;da Değişkenler (Variables)

Java&#39;da bir veri parçasını, ki bu sayı, yazı alanı veya kompleks veri olabilir, hafızada tutmaya yarayan yapılardır. Örneğin: &quot; **int year = 2019;**&quot; gibi tanımlama yaptığımızda hafıza bir alan bu değer için ayrılır. 2019 verisi hafıza bu adrese yazılır. Değişken, hafıza adresini işaret eder. Aslında, hafıza adresinin kendisini belirtir.

Değişkenler üç tiptedir:

- Yerel Değişkenler
- Sınıf Değişkenleri (Statik olanlar)
- Nesne Değişkenleri (Statik olmayanlar)

5.Java&#39;da Diziler (Arrays)

Dizi kavramı liste halinde veriler tutmaya yarayan veri yapısıdır. Örneğin: 12 aya ait şirket bilançosu dizi şeklinde tutulabilecek bir veridir. Java&#39;da diziler oluşturulduğunda Heap Hafıza&#39;da tutulurlar. Dizi konusu ileride detaylıca işlenecektir.

6.Java&#39;da Enum Yapılar (Enum)

Java&#39;da belirli seçenekleri önceden tanımlanabilen yapılar şeklinde kodlayabilirsiniz. Örneğin: mağazanın müşteri iki tipte ise bunları ENTERPRISE, INDIVIDUAL şeklinde iki tanımlı değerle ifade edebilirsiniz. Böylece, koddaki okunabilirliği arttırabilirsiniz. Müşteri tiplerini 1 ve 2 gibi sayılarla ifade etseydik, kodun başkası tarafından okunabilirliği azalırdı.

7.Java&#39;da Anahtar Sözcükler (Keywords)

Aşağıdaki anahtar sözcükler Java dilinde ayrılmış kelimelerdir. Bu kelimeleri tek başlarına isimlendirmede kullanamazsınız. Örneğin: &quot; **int class = 5;**&quot; şeklinde bir tanımlama yapamayız. Çünkü, class ayrılmış bir anahtar sözcüktür.

![](RackMultipart20201119-4-xnzld6_html_3a8980747c051110.png)

8.Java&#39;da Yorum Alanları (Comments)

Java dilinde kodların arasına açıklayıcı metinler eklenebilir. Kod parçasının ne iş yaptığını anlatan veya bilgi veren yorumlar eklenebilir. Bu yorumlar derleyici tarafından dikkate alınmaz. Tek satırlık veya çok satırlı yorumlar ekleyebilirsiniz.

**public**** class ****MyFirstJavaProgram** {

_/\* This is my first java program._

_\* This will print &#39;Hello World&#39; as the output_

_\* This is an example of multi-line comments._

_\*/_

**public**** static**voidmain(String []args){

_// This is an example of single line comment_

_/\* This is also an example of single line comment. \*/_

System.out.println(&quot;Hello World&quot;);

}}

Java&#39;da kod yazarken kodlar arasında dilediğiniz kadar boşluk bırakabilirsiniz.

9.Java&#39;da Katılım (Inheritance)

Java, nesneye dayalı programlamayı destekleyen bir dil olduğu için katılım mekanizmasına sahiptir. Katılım ile bir sınıf üst sınıfından ortak özellikleri miras yoluyla kendine alabilir. Bu konu ileride detaylıca açıklanacaktır.

10.Java&#39;da Ara yüzler (Interfaces)

Nesneye dayalı programlamanın en önemli kavramlarından biri de ara yüz tanımıdır. Arayüz tanımlarıyla çok biçimliliği ( **Polymorphism** ) desteklenir. Ara yüz (Interface) kontrat gibi değerlendirilebilir. Örneğin: aracın frenleme sistemi, elektrik sistemi tüm araçlarda bulunması gereken özelliklerdir. Fakat, bunların çalışma biçimi araçtan araca farklılıklar gösterebilir. İşte bu özellik kümesi bir aracın ara yüzü olarak tanımlanabilir. Böylece, yeni bir araç tanımlamak isteyen herkes bu kontrata uygun bir yapı kurmalıdır.

## Java Sınıf ve Nesne Kavramları

Java, önceden de belirttiğimiz gibi Nesneye Dayalı Programlama yöntemini tamamıyla destekleyen bir programlama dilidir. Java bu nedenle aşağıdaki konseptleri destekler ve uygulanmasına olanak tanır. Bu özellikler ileriki konularda tek tek ele alınacaktır.

- Çok Biçimlilik (Polymorphism)
- Kalıtım (Inheritance)
- Kapsülleme (Encapsulation)
- Soyutlama (Abstraction)
- Sınıflar (Classes)
- Nesneler (Objects)
- Metot (Method)
- Mesaj Yoluyla Değer Geçmek (Message Passing)

Java&#39;da Nesneler (Objects)

Gerçek hayata döndüğümüzde etrafımızda yüzlerce nesne görürüz. Aslında, her nesnenin var olan bir durumu ve davranışı vardır.

Örneğin: bir köpeği ele aldığımızda rengi, ismi, cinsi köpeğe ait durumu ifade eder. Havlaması, koşmak, acıkması ise onun davranışlarını ifade eder.

Aynı şekilde köpeği modelleyen bir nesneyi yazılım dünyasında oluşturduğumuzda renk, isim, cins gibi durumu ifade eden bilgiler değişkenler ile tanımlanır. Ve bu veriler değişkenlerde saklanır. Koşmak, havlamak, acıkmak gibi davranışlar ise yazılım dünyasında metotlar (fonksiyonlar) ile tanımlanır. Metotlar nesneler arası iletişim ve etkileşim için yol sunarlar. Örneğin: bir nesne başka bir nesnenin davranışını o nesnenin metodunu çağırarak etkileşime geçer.

Java&#39;da Sınıflar (Classes)

Yukarıdaki örneğimizde bir köpeğin yazılım dünyasında nesneler vasıtasıyla bir modelinin olabileceğinden bahsetmiştik. Nesne modelin var olan fiziksel halidir. İşte bu noktada sınıflar bir nesnenin modellenmesi için oluşturulan taslağın kendisidir. Sınıflar bir nesneye ait taslaktır diyebiliriz. Nesne ise o taslaktan üretilmiş bir fiziksel kopyadır. Sınıflardan üretilen yazılımsal nesnelerde bilgisayar hafızasında fiziksel var olan yapılardır.

**public**** class ****Dog** {

String breed;

int age;

String color;

voidbarking(){

}

voidhungry(){

}

voidsleeping(){

}

}

Yukarıda örnek bir sınıf tanımı vardır. Java&#39;da sınıflar aşağıdaki yapıda tanımlanır.

**public**** class **\&lt;** SINIF\_İSMİ**\&gt;

{

_// Kod bloğu_

_// Bu alan sınıfın kapsamını belirler. Bu iki süslü parantez dışında kalan kod bloğu sınıfın dışıdır._

}

Süslü parantezler o sınıfa ait kod bloğunu temsil eder. Java&#39;da her süslü parantez açıp kapatmak bir kod bloğu oluşturur. İç içe açılan her kod bloğu alt kümeler gibi birbirini kapsar. Kapsayan blok içindeki tüm alt kod bloklarına erişim hakkına sahipken, alt kapsamdaki bir kod bloğu direkt olarak bir üst kapsam bloğuna erişemez. Bunu iç içe kümeler gibi düşünebiliriz.

![](RackMultipart20201119-4-xnzld6_html_486e29573da791da.gif) ![](RackMultipart20201119-4-xnzld6_html_6ceafb3ef9f8c0da.gif) ![](RackMultipart20201119-4-xnzld6_html_6ceafb3ef9f8c0da.gif) ![](RackMultipart20201119-4-xnzld6_html_9b0461cfca7104cc.gif) ![](RackMultipart20201119-4-xnzld6_html_22fe022d4152f50d.gif) ![](RackMultipart20201119-4-xnzld6_html_3c0c75d1f95598f1.gif) ![](RackMultipart20201119-4-xnzld6_html_523e7998ca19df87.gif) ![](RackMultipart20201119-4-xnzld6_html_3c0c75d1f95598f1.gif)

Sınıf Kapsamı (Mavi Alan)

Metot2 Kapsamı (Gri Alan)

Metot Alt Kapsamı

Metot1 Kapsamı (Gri Alan)

Değişken Tipleri:

- Yerel Değişken: Bu değişkenler metot veya bir kod kapsamı içinde tanımlanmış olan değişkenlerdir. Tanımlandıkları metodun veya kod bloğunun işi bitince otomatik olarak hafızadan silinirler. Yaşam ömürleri kod kapsamının ömrü kadardır.
- Nesne Değişkenleri: Sınıf tanımı yaparken köpek örneğinde olduğu gibi renk, boy, isim gibi nitelikleri değişkenler vasıtasıyla tanımlarız. Sınıf içinde bunları değişken olarak tanımlarız. Ardından sınıftan üretilen her nesne bu değişkenlere sahiptir. İşte bunlara nesne değişkenleri denilmektedir.
- Sınıf Değişkenleri: Sınıf tanımı yapılırken bir değişken **static** anahtar sözcüğüyle tanımlanıyorsa bu sınıf tipi bir değişkendir. Değişkene değer atamak için bir nesne oluşturmanıza gerek yoktur. Sınıf ismi ve nokta operatörü kullanarak erişilir. Global kapsama sahip değişkenlerdir.

Java&#39;da Sınıf Kurucuları (Constructors)

Sınıf içinde kurucu metotlar tanımlanabilir. Kurucu metotlar bir nesne oluşturulurken yapılması gerekenlerin tanımlandığı metotlardır. Nesne oluşturma aşamasında bu özel metotlar çağrılır. Her sınıfın mutlaka bir kurucu metodu olur. Eğer, siz kod yazarken kurucu metot tanımlamadıysanız Java derleyicisi boş bir taneyi otomatik olarak tanımlayacaktır.

Kurucu metotların ismi sınıf ismiyle aynı olmak zorundadır. Farklı parametreler alan birden fazla kurucu metot tanımlayabilirsiniz.

**public**** class ****Puppy** {

**public** Puppy(){

_// parametresiz bir kurucu metot._

}

**public** Puppy(String name){

_// name isminde bir değişkenle tanımlanmış bir kurucu metot._

}

}

Yukarıdaki örnekte Puppy isminde bir sınıfa ait iki tane kurucu metot görülmektedir. Java&#39;da bir sınıftan yeni bir nesne üretmek istediğinizde &quot;new&quot; anahtar kelimesini kullanmanız gerekmektedir.

Puppy p = **new** Puppy(&quot;Pamuk&quot;);

Yukarıdaki şekildeki gibi Puppy sınıfına ait bir nesne oluşturmak istediğinizde dikkat ederseniz nesne oluştururken &quot;Pamuk&quot; şeklinde bir isim bilgisi geçtik. Bu nedenle nesne oluşturma işlemi sırasında **public** Puppy(String name) isimli kurucu metot çağrılır ve çalıştırılır.

Puppy p = **new** Puppy();

Yukarıdaki şekildeki gibi parametresiz bir nesne oluşturmuş olsaydık. **public** Puppy() isimli kurucu metot çağrılır ve çalıştırılırdı.

Java&#39;da Paketler (Packages)

Java&#39;da sınıfları (classes) ve arayüzleri (interfaces) bir araya toplamak için paket kavramı vardır. Birbiriyle mantıksal ilişkiye sahip sınıflar bir paket altına hiyerarşik bir şekilde toplanır. Sizler de kendi Java uygulamalarınızı geliştirirken yeni paketler oluşturup birbiriyle alakalı sınıfları bir araya toplayabilirsiniz.

**import**** java.io.\***;

Yukarıdaki Java paketinde giriş/çıkış işlemleriyle ilgili sınıflar **java.io** isimli bir paket altına toplanmıştır. Sondaki \* işareti ise **java.io** paketi altındaki tüm sınıfları projeye dahil et anlamına gelmektedir.

## Java Değişkenler

Değişkenler içinde veri barındıran ve bilgisayarın geçici hafızasında (RAM) fiziksel olan yer kaplayan yapılardır. Değişkenlere değer (veri) ataması yapılabilir. Java&#39;da değişkenleri veri tipleri vardır. Bu tipler Java&#39;da varsayılan olarak tanımlı gelen tipler de olabilir yahut yazılımcıların kendi tanımladığı tipler de olabilir.

\&lt;veri tipi\&gt;\&lt;değişken ismi\&gt;= veri (değer)

Değişken tanımlaması yapıldığında aslında bilgisayar hafızasında bir yeri ayırmış oluyoruz. Bu alan o değişkenin veri tipinin boyutu kadar bir alanı ifade eder. Örneğin: 2 Byte&#39;lık bir veri tipine sahipsek ve bu tipte bir değişken tanımlıyorsak. Her değişken için hafızadan 2 Byte&#39;lık yer ayrılacaktır.

![](RackMultipart20201119-4-xnzld6_html_559b3eb1f714c61c.gif)

int a = 10;

![](RackMultipart20201119-4-xnzld6_html_559b3eb1f714c61c.gif) ![](RackMultipart20201119-4-xnzld6_html_559b3eb1f714c61c.gif) ![](RackMultipart20201119-4-xnzld6_html_559b3eb1f714c61c.gif) ![](RackMultipart20201119-4-xnzld6_html_cd5d771f0c3096f7.gif) ![](RackMultipart20201119-4-xnzld6_html_6a6259ef8e1a22f7.gif) ![](RackMultipart20201119-4-xnzld6_html_c78afce153a61a46.gif) ![](RackMultipart20201119-4-xnzld6_html_7fae69e074ba9e7.gif)

int d = 100;

int c = 8;

int b = 5;

| 10 |
 |
| --- | --- |
| 5 |
 |
|
 | 8 |
|
 |
 |
|
 | 100 |

**int** tipinde, yani sayı tipinde tanımlanmış **a,b,c,d** isimli değişkenlerin her biri hafızada bir alanı kaplarlar.

Değişken tanımlama örnekleri:

int a, b, c;_// 3 tane değişken virgüller ile ayrılarak tek satırda tanımlanabilir._

int a =10, b =10;_// Birden fazla değişken aynı satırda ilk değerleri atanarak tanımlanabilir._

byte b =22;_// Tek değişkene ilk değer ataması yapılarak_

double pi =3.14159;_// Tek değişkene ilk değer ataması yapılarak_

char a =&#39;a&#39;;_// Tek değişkene ilk değer ataması yapılarak_

**public**** class ****ConnectionPool**

{_// Sınıf kapsamının başlangıcı_

int connectionMaximumLimit =50;_// Nesne değişkenidir._

**static** int currentActiveConnectionCount =10;_//static değişkendir. Sınıf değişkenidir._

**public** voidacquireConnection()

{_// metot (fonksiyon) kapsamının başlangıcı_

int processId =90;_// Yerel değişkendir._

_// Diğer kodlar ..._

}_// metot (fonksiyon) kapsamının sonu_

}_// Sınıf kapsamının sonu_

Yukarıdaki örnekte veritabanına bağlantı kurabilmek için bir havuz oluşturduğumuzu hayal edelim. Bu havuzaa belli bir sayıda kullanıcı bağlanıp bir bağlantıyı alıp kullanıp, tekrar sisteme iade ettiğini düşünelim. Bu senaryoda &quot;ConnectionPool&quot; isminde bir sınıf tanımlamak gerekecektir. Bu sınıf havuz nesnesinin taslağıdır. Kapsamı süslü parantezlerle başlayıp bittiği alan kadardır. Bu kısım kod üzerinde açıklama satırlarıyla belirtilmiştir. &quot;ConnectionPool&quot; sınıfı içindeki &quot;connectionMaximumLimit&quot; isimli değişken nesne değişkenidir. Bu sınıftan üretilen her nesnenin kendine ait &quot;connectionMaximumLimit&quot; bir değişkeni olacaktır. &quot;static&quot; olarak isimlendirilen &quot;currentActiveConnectionCount&quot; değişkeni ise sınıf değişkendir. Yani herhangi bir nesne üretmeksizin sınıf üzerinden global olarak erişilebilir.

Yani,

ConnectionPool.currentActiveConnectionCount=1000;

Yukarıdaki şekildeki gibi nesne olmadan sınıf tanımı üzerinden erişilebilir.

&quot;acquireConnection&quot; metodu ise havuzdan bağlantı alıp ilgili prosese atamayı sağlayan fonksiyondur. Bu fonksiyon içinde tanımlı olan tüm değişkenler yerel değişkendir. Çünkü, metodun kapsamı içinde tanımlanmıştır. Metodun kapsamı da süslü parantezler arasında kalan alandır. Yorum satırı olarak belirtilmiştir. Metot çalışıp işini bitirince bu yerel değişkenlerde ömürlerini tamamlarlar ve bilgisayar hafızasından silinirler.

**public**** class ****VariableDemo** {

**public**** static**voidmain(String[] args){

int firstParameter =10;

int secondParameter =20;

int summation = firstParameter + secondParameter;

System.out.println(summation);

}

}

Yukarıdaki örnekte de iki adet değişken tanımlanıp &quot;+&quot; toplama operatörüyle toplanıp sonuç &quot; **summation**&quot; isimli başka bir değişkene atanmıştır. Ardından, &quot; **println**&quot; fonksiyonuyla konsol ekranına sonuç yazdırılmıştır.

Yerel Değişken

**public**** class ****Test** {

**public** voidpopAge(){

int age =0;

age = age +7;

System.out.println(&quot;Puppy age is : &quot;+ age);

}

**public**** static**voidmain(String args[]){

Test test = **new** Test();

test.popAge();

}

}

Yukarıdaki örnekte &quot; **popAge**&quot; metodu içindeki &quot; **age**&quot; isimli değişken yerel tanımlıdır. Dikkat edilecek olunursa Test sınıfından bir nesne oluşturup &quot; **popAge**&quot; metodu çağrılmıştır. Sonuçta ekrana 7 değerini basacaktır. Yerel değişkenlere ilk değer ataması yapılmalıdır. &quot;age&quot; isimli değişkene sıfır değeri ilk değer olarak verilmiştir.

Not: Nesne değişkenlerinin varsayılan değerleri otomatik atanır. Eğer değişken sınıf (referans) tipinde bir değişkense varsayılan değeri &quot; **null**&quot; olacaktır.

Not: Sınıf değişkenleri daha çok sabit değerleri tanımlamada kullanılır.

**public**** static ****final** double PI =3.14;

## Java Veri Tipleri

Değişkenler, verileri hafızada belli bir alan içinde tutmaya, saklamaya yararlar. Her değişken tanımı yapılırken bir veri tipi belirtilir. Veri tipine göre de değişken tanımlandığı esnada hafızada ne kadar yer kaplayacağı belli olur.

Java&#39;da iki tip değişken grubu vardır:

- İlkel Veri Tipleri (Primitive Data Types)
- Nesne Veri Tipi (Object Data Types)

![](RackMultipart20201119-4-xnzld6_html_5a7bffb03473383e.png)

İlkel Veri Tipleri

Java&#39;da dille birlikte tanımlı olarak gelen 8 adet ilkel veri tipi vardır.

- boolean
- int
- char
- byte
- short
- long
- float
- double

| **Veri Tipi** | **Varsayılan Değeri** | **Veri Boyutu** |
| --- | --- | --- |
| boolean | false | 1 bit |
| char | &#39;\u0000&#39; | 2 byte |
| byte | 0 | 1 byte |
| short | 0 | 2 byte |
| int | 0 | 4 byte |
| long | 0L | 8 byte |
| float | 0.0f | 4 byte |
| double | 0.0d | 8 byte |

&quot; **boolean&quot; Veri Tipi**

Bu veri tipinde sadece iki değer tutabiliriz. &quot;true&quot; veya &quot;false&quot; şeklinde iki değere sahiptir. Hafızada 1 Bit büyüklüğünde yer kaplar.

Örnek Tanımlama:

boolean printerEnabled = **false** ;

&quot; **byte&quot; Veri Tipi**

-128 ile 127 arasında değer alabilen sayısal bir tam sayı tipidir. Varsayılan değeri sıfırdır. Özellikle, hafızada az yer kaplaması nedeniyle kullanılabilir. Eğer, &quot;int&quot; tipine gerek duymuyorsanız, &quot;byte&quot; kullanmak faydalı olacaktır.

Örnek Tanımlama:

byte humanAge =32;

&quot; **short&quot; Veri Tipi**

16 Bit&#39;lik (yani 2 Byte) veri büyüklüğüne sahip tam sayı veri tipidir. -32,768 ile 32,767 arasında değer alabilir. Varsayılan değeri sıfırdır. Yine &quot;int&quot; veri tipine ihtiyaç duymadığınız zaman &quot;short&quot; tipte değişkenler oluşturarak hafızadan kazanç sağlayabilirsiniz.

Örnek Tanımlama: short m2OfRegion =11991;

&quot; **int&quot; Veri Tipi**

32 Bit&#39;lik (yani 4 Byte) veri büyüklüğüne sahip tam sayı veri tipidir. - 2,147,483,648 ile 2,147,483,647 arasında değer alabilir. Varsayılan değeri sıfırdır. &quot;int&quot; tipinde değişken tanımlarken gerçekten o kadar büyüklüğe sahip bir veri tutacak mıyız, iyi kontrol etmek gerekir. Örneğin: insan yaşı bilgisini &quot;int&quot; veri tipinde tutmak hafızada fazladan alan kaplamak demek olacaktır. Zaten insan yaşı &quot;int&quot; değerinden çok küçüktür. Bunun için &quot;byte&quot; tipinde bir değişken tanımlamak hafızayı etkin kullanmayı sağlayacaktır.

Örnek Tanımlama:

int bookCountInWorld =1199221;

&quot; **long&quot; Veri Tipi**

64 Bit&#39;lik (yani 8 Byte) veri büyüklüğüne sahip tam sayı değeridir. Tam sayı veri tipleri içinde en büyük değer aralığına sahip veri tipidir. Çok büyük basamaklı sayıları tutabilmek için idealdir. Hafızada önemli bir yer kaplar. Kullanırken dikkatli olmak gerekir.

-9,223,372,036,854,775,808 ile 9,223,372,036,854,775,807 arasında değer alabilir.

Örnek Tanımlama:

long galaxyCountInSpace =51992212222;

&quot; **float&quot; Veri Tipi**

32 Bit&#39;lik (yani 4 Byte) veri büyüklüğüne sahip ondalıklı sayı değeridir. Sayı aralığına bir limit getirilmemiştir. Hafızayı etkin kullanmak adına &quot;double&quot; veri tipi yerine tercih edilebilir. Çünkü, &quot;double&quot; veri tipi &quot;float&quot; &#39;dan daha büyük bir yer kaplamaktadır. Varsayılan değeri 0.0F şeklindedir. Float tipindeki değişkenlere atanan verilerin sonunda &quot;f&quot; son eki vardır. Değişkene atanan değerin &quot;float&quot; tipinde olduğunu belirtir.

Örnek Tanımlama:

float freezeRatio =3.23f;

&quot; **double&quot; Veri Tipi**

64 Bit&#39;lik (yani 8 Byte) veri büyüklüğüne sahip ondalıklı sayı değeridir. Sayı aralığına bir limit getirilmemiştir. Boyutu büyük olduğu için tanımlama yapılırken gerçekten &quot;float&quot; veri tipinin yetersiz olduğu durumlarda kullanılmalıdır. Varsayılan değeri 0.0d şeklindedir. Atanan verinin sonuna &quot;d&quot; son eki koyularak &quot;double&quot; tipte bir veri olduğu belirtilebilir. Fakat, &quot;d&quot; son ekinin koyulmadığı durumlarda ondalıklı sayı verisi varsayılan olarak &quot;double&quot; olarak kabul edilir. Konulması zorunlu değildir.

Örnek Tanımlama: double freezeRatio =3.2322;

&quot; **char&quot; Veri Tipi**

16 Bit&#39;lik (yani 2 Byte) büyüklüğüne sahip karakter verilerini tutar. Unicode tipinde karakter verilerini saklar. &#39;\u0000&#39; (0) ile &#39;\uffff&#39; (65535) aralığında değer alır.

Örnek Tanımlama:

char letter =&#39;A&#39;;

char letter =&#39;B&#39;;

char letter =&#39;C&#39;;

Unicode Karakter Sistemi

Bilgisayar dünyasında karakterler sayısal ifadeler ile temsil edilir. Aslında, her harfin veya sembolün bir sayısal karşılığı vardır. Dünyadaki çoğu dile ait karakterleri tanımlayan sisteme Unicode Karakter Sistemi denir.

Unicode sistemi dışında kullanılan diğer karakter sistemleri:

- **ASCII** (American Standard Code for Information Interchange)
- **ISO 8859-1** (Batı Dilleri için)
- **KOI-8** (Rusça için)
- **GB18030** ve **BIG-5** (Çince ve diğer diller için)

Unicode sistemi ile tüm dillere ait karakterler 2 Byte şeklinde tanımlandığı için uluslararası bir standarda sahiptir. Bu nedenle Java tarafından tercih edilmiştir. Diğer karakter sistemlerinden birbirine dönüşüm yapmak sorunlu ve maliyetli bir iştir.

| **Notasyon** | **Temsil Eden Karakter** |
| --- | --- |
| \n | Yeni satır (0x0a) |
| \r | Satırbaşı (0x0d) |
| \b | Geri tuşu (0x08) |
| \s | Boşluk (0x20) |
| \t | Bir tab Boşluk |
| \&quot; | Çift Tırnak Kaçış Karakteri |
| \&#39; | Tek Tırnak KaçışKarakteri |
| \\ | Ters slash karakteri |
| \uxxxx | Hexadecimal UNICODE Karakteri (xxxx) |

## Java Temel Operatörler (Basic Operators)

Java dilinde operatörler ile birçok işlemi yapabilmenize olanak tanır. Örneğin: matematiksel operatörlerle birlikte aritmetik işlemler yapabilmenizi, ilişkisel operatörlerle verileri kıyaslayabilmeyi, atama operatörleri ile değişkenlerin değerlerini değiştirmeye fırsat verir.

Java&#39;da operatörler aşağıdaki gibi listelenebilir:

- Aritmetiksel Operatörler
- İlişkisel ve Eşitlik Operatörler
- Bitsel (Bit Düzeyinde) Operatörler
- Mantıksal Operatörler
- Atama Operatörleri

Aritmetik Operatörleri

Matematiksel işlemler yapabilmeyi sağlayan operatörlerdir.

int A =10;

int B =20;

şeklinde değişkenlerimiz olduğunu varsayıp matematiksel operatörleri açıklayalım.

| **Operatör** | **Açıklama** | **Örnek** |
| --- | --- | --- |
| + (Toplama) | İki değerin toplanıp tek bir değere dönüştürülmesini sağlar. Sayısal değerler yanında yazı tipindeki değerlerde kullanıldığında iki ifadeyi tek bir cümle haline getirmektedir. | A + B = 30&quot;Güzel&quot; + &quot;Kitap&quot; = &quot;GüzelKitap&quot; |
| - (Çıkarma) | İki değerin çıkarılmasını sağlar. | A - B = -10 |
| \* (Çarpma) | İki değeri çarpmaya yarar. | A \* B = 200 |
| / (Bölme) | Payı paydaya bölmeye yarar. | B / A = 2 |
| % (Mod Alma) | Mod alma işlemini sağlar. | B % A = 0 |
| ++ (Bir artırım) | Bir artırmayı sağlar. | B++ 21 olacaktır. |
| -- (Bir azaltım) | Bir azaltmayı sağlar. | B-- 19 olacaktır. |

Örnek:

**public**** class ****Test** {

**public**** static**voidmain(String args[]){

int a =10;

int b =20;

int c =25;

int d =25;

System.out.println(&quot;a + b = &quot;+(a + b));

System.out.println(&quot;a - b = &quot;+(a - b));

System.out.println(&quot;a \* b = &quot;+(a \* b));

System.out.println(&quot;b / a = &quot;+(b / a));

System.out.println(&quot;b % a = &quot;+(b % a));

System.out.println(&quot;c % a = &quot;+(c % a));

System.out.println(&quot;a++ = &quot;+(a++));

System.out.println(&quot;b-- = &quot;+(a--));

System.out.println(&quot;d++ = &quot;+(d++));

System.out.println(&quot;++d = &quot;+(++d));

}

}

İlişkisel ve Eşitlik Operatörleri

Değişkenlere ait verilerin eşitliğini, büyük-küçük olma durumlarının kıyaslanabildiği operatörlerdir.

int A =10;

int B =20;

şeklinde değişkenlerimiz olduğunu varsayıp matematiksel operatörleri açıklayalım.

| **Operatör** | **Açıklama** | **Örnek** |
| --- | --- | --- |
| == (eşitlik) | İki değişkenin değerlerini birbiriyle kıyaslayıp, eğer eşitse true döndürür. Değilse false değer döndürür. | (A == B) false |
| != (eşit değil) | İki değişkenin değerini kıyaslar ve eşit değilse true, eşitse false döndürür. | (A != B) true |
| \&gt; (büyüktür) | \&gt; operatörünün solundaki değer, sağındaki değerden büyükse true döndürür. Değilse false döner. | (A \&gt; B) false |
| \&lt; (küçüktür) | \&lt; operatörünün solundaki değer, sağındaki değerden küçükse false döndürür. Değilse true döner. | (A \&lt; B)true |
| \&gt;= (büyük eşit) | \&gt;= operatörünün solundaki değer, sağındaki değerden büyük veya eşitse true döndürür. Değilse false döner. | (A \&gt;= B) false |
| \&lt;= (küçük eşit) | \&lt;= operatörünün solundaki değer, sağındaki değerden küçük ve eşitse false döndürür. Değilse true döner. | (A \&lt;= B) true |

Örnek:

**public**** class ****Test** {

**public**** static**voidmain(String args[]){

int a =10;

int b =20;

System.out.println(&quot;a == b = &quot;+(a == b));

System.out.println(&quot;a != b = &quot;+(a != b));

System.out.println(&quot;a \&gt; b = &quot;+(a \&gt; b));

System.out.println(&quot;a \&lt; b = &quot;+(a \&lt; b));

System.out.println(&quot;b \&gt;= a = &quot;+(b \&gt;= a));

System.out.println(&quot;b \&lt;= a = &quot;+(b \&lt;= a));

}

}

Bitsel Operatörler

Java&#39;da bitsel operatörler bit düzeyinde işlemler yapabilmeyi sağlar. Bit düzeyinde VE (AND), VEYA (OR) ve DEĞİL (NOT) gibi işlemler yapabilmeyi sağlar. Ayrıca, bit düzeyinde sağa veya sola kaydırma işlemleri yapılabilir. Bitsel operatörler long, int, short, byte, char gibi veri tiplerine uygulanabilir.

| **Operatör** | **Açıklama** | **Örnek** |
| --- | --- | --- |
| &amp; (ve) | Bit düzeyinde tek tek VE işlemini uygular. 1 &amp; 0 ise 0 olur. 1 &amp; 1 ise 1 olur. 0 &amp; 0 ise 0 olur. | (A &amp; B) |
| | (veya) | Bit düzeyinde tek tek VEYA işlemini uygular. 1 | 0 ise 1 olur. 1 | 1 ise 1 olur. 0 | 0 ise 0 olur. | (A | B) |
| ^ (XOR) | Bit düzeyinde tek tek XOR işlemi uygular. 1 ^ 0 ise 1 olur. 1 ^ 1 ise 0 olur. 0 ^ 0 ise 0 olur. | (A ^ B) |
| ~ (tersini alma) | Bit düzeyinde her bitin tersi alınır. DEĞİL işlemi uygulanır. 1100 ise 0011 olur. | (~A) |
| \&lt;\&lt; (sola kaydırma) | \&lt;\&lt; operatörü ile bitsel olarak sola doğru belirlenen miktarda kayma yapılır. Boş kalanları sıfır ile doldurur. Örn: A\&lt;\&lt;2 yapılırsa, 0011 1100  1111 0000 | (A \&lt;\&lt; 2) |
| \&gt;\&gt; (sağa kaydırma) | \&gt;\&gt; operatörü ile bitsel olarak sağa kaydırma işlemi yapılır. Boş kalan alanlar sıfır ile doldurulmaz. Örn: A\&gt;\&gt;2 yapılırsa, 0011 1100  1111 | (A \&gt;\&gt; 2) |
| \&gt;\&gt;\&gt; (sıfırlı sağa kaydırma) | \&gt;\&gt; operatörü ile bitsel olarak sağa kaydırma işlemi yapılır. Boş kalan alanlar sıfır ile doldurulur. Örn: A\&gt;\&gt;\&gt;2 yapılırsa, 0011 1100  0000 1111 | (A\&gt;\&gt;\&gt;2) |

Örnek:

**public**** class ****Test** {

**public**** static**voidmain(String args[]){

int a =60;_/\* 60 = 0011 1100 \*/_

int b =13;_/\* 13 = 0000 1101 \*/_

int c =0;

c = a &amp; b;_/\* 12 = 0000 1100 \*/_

System.out.println(&quot;a &amp; b = &quot;+ c );

c = a | b;_/\* 61 = 0011 1101 \*/_

System.out.println(&quot;a | b = &quot;+ c );

c = a ^ b;_/\* 49 = 0011 0001 \*/_

System.out.println(&quot;a ^ b = &quot;+ c );

c =~a;_/\*-61 = 1100 0011 \*/_

System.out.println(&quot;~a = &quot;+ c );

c = a \&lt;\&lt;2;_/\* 240 = 1111 0000 \*/_

System.out.println(&quot;a \&lt;\&lt; 2 = &quot;+ c );

c = a \&gt;\&gt;2;_/\* 15 = 1111 \*/_

System.out.println(&quot;a \&gt;\&gt; 2 = &quot;+ c );

c = a \&gt;\&gt;\&gt;2;_/\* 15 = 0000 1111 \*/_

System.out.println(&quot;a \&gt;\&gt;\&gt; 2 = &quot;+ c );

}

}

Mantıksal Operatörler

true / false döndüren ifadeler veya boolean tipinde değerler tutan değişkenler üzerinde uygulanabilir.

| **Operator** | **Description** | **Example** |
| --- | --- | --- |
| &amp;&amp; (mantıksalve) | Eğer A ve B değeri true ise true olur. | (A &amp;&amp; B) false |
| || (mantıksalveya) | Eğer A veya B değerinden biri true ise true olur. | (A || B) true |
| ! (mantıksaldeğil) | () parantez içinde yer alan ifade true ise değilini alıp false yapar. Eğer ifade false ise true yapar. | !(A &amp;&amp; B) true |

Örnek:

**public**** class ****Test** {

**public**** static**voidmain(String args[]){

boolean a = **true** ;

boolean b = **false** ;

System.out.println(&quot;a &amp;&amp; b = &quot;+(a&amp;&amp;b));

System.out.println(&quot;a || b = &quot;+(a||b));

System.out.println(&quot;!(a &amp;&amp; b) = &quot;+!(a &amp;&amp; b));}}

Soru İşareti Operatörü

? işareti operatörü ile Java&#39;da mantıksal kıyaslama yapılabilir. ? ifadesi Java&#39;daki &quot;if-else&quot; yapısı yerine kullanılabilir. Tek satırda bunu yapabilmemizi sağlar.

**public**** class ****Test** {

**public**** static**voidmain(String args[]){

int a, b;

a =10;

b =(a ==1)?20:30;

System.out.println(&quot;Value of b is : &quot;+ b );

b =(a ==10)?20:30;

System.out.println(&quot;Value of b is : &quot;+ b );

}

}

&quot;instanceof&quot; Operatörü

Nesne tipinde değişkenler için kullanılabilir. İlkel veri tipleri için bu operatör kullanılamaz. &quot;instanceof&quot; operatörü ile değişkenin barındırdığı veri aradığımız tipe sahip mi değil mi anlamamızı sağlar.

Örnek:

**public**** class ****Test** {

**public**** static**voidmain(String args[]){

String name =&quot;James&quot;;

boolean result = name **instanceof** String;

System.out.println( result );

}

}

## Karar Mekanizmaları (if-else)

Koşula göre program içinde farklı işlemleri yerine getirmek gerekebilir. Bu tarz durumları Java&#39;da kodlayabilmek için if-else, switch-case gibi yapılar bulunmaktadır. Örneğin: &quot;yaşı 50&#39;den küçük olanların personel kayıtlarını getir&quot; gibi bir ifadede yaşı 50&#39;den küçük olanları tespit etmek için karar mekanizmaları kullanılır. Eğer koşul sağlanmıyorsa başka bir kod bloğu işletilir.

![](RackMultipart20201119-4-xnzld6_html_4b7af2ea5bb3c912.png)

Yukarıdaki ifadenin yazılımsal olarak Java&#39;da karşılığı aşağıdaki gibidir.

**if** (age \&lt;50){

_// personel kayıtlarını getir_

}

Koşulun gerçekleşip gerçekleşmediği &quot;if&quot; cümlesi içindeki ifadeye bağlıdır. Eğer mantıksal ifade true ise &quot;if&quot; kod bloğu çalıştırılır. Tabi ifadenin false döndüğü durumda da programın bir şeyler yapmasını isteyebiliriz. Bu durumda ise &quot;else&quot;ifadesi kullanılır. Aşağıdaki gibi bir örnekle açıklayabiliriz.

Eğer, faiz oranı %70&#39;den büyükse &quot;Kurumsal Müşteri&quot; tipinde kredi ver, değilse &quot;Standart Müşteri&quot; tipinde kredi ver şeklinde bir karar mekanizması aşağıdaki gibi tasarlanabilir.

**if** (creditRatio \&gt;0.7){

System.out.println(&quot;Kurumsal müşteri tipinde kredi&quot;);

}

**else** {

System.out.println(&quot;Standart müşteri tipinde kredi&quot;);

}

Koşullar birden fazla olabilir ve hiçbir koşula uymuyorsa en sonunda varsayılan bir duruma girilir ve o kod bloğunu çalıştırmak gerekir. Bu tarz durumlarda ise &quot;if - else if - else&quot; gibi yapılar kullanılır.

Örneğin tuz oranı %80 ve üzerinde ise &quot;yüksek derecede tuzlu&quot;, %80 ile %50 arasında ise &quot;orta derecede tuzlu&quot;, bunların dışında bir durumda ise &quot;düşük derecede tuzlu&quot; şeklinde ekrana bilgiler yazan bir program yazmak istediğimizde if-else if-else yapısını kullanabiliriz.

float saltRatio =0.9f;

**if** (saltRatio \&gt;=0.8){

System.out.println(&quot;yüksek derecede tuzlu&quot;);

}

**else** if(0.5\&lt; saltRatio &amp;&amp; saltRatio \&lt;0.8){

System.out.println(&quot;orta derecede tuzlu&quot;);

}

**else** {

System.out.println(&quot;düşük derecede tuzlu&quot;);

}

&quot;if-else&quot; yapılarını iç içe de kullanma şansına sahibiz.

Örneğin: 18 yaşından küçük olanlar kan bağışı yapamazlar, fakat, 18 yaşına eşit ve büyük olan bir kişi eğer kilosu 48&#39;den büyükse kan verebilir, kilosu 48&#39;den küçükse kan veremez gibi basit bir kuralı Java&#39;da kodlayalım.

int age=25;

int weight=48;

**if** (age\&gt;=18){

**if** (weight\&gt;=48){

System.out.println(&quot;Kan verebilirsiniz&quot;);

}

**else** {

System.out.println(&quot;Kan veremezsiniz&quot;);

}

}

**else** {

System.out.println(&quot;Kan verebilmek için yaşınız 18&#39;den büyük olmalıdır.&quot;);

}

Java&#39;da &quot;switch-case&quot; Yapıları

Programlama yaparken birden fazla koşula sahip durumlarla karşılaşabiliriz. Örneğin: eğer 1&#39;e basarsanız &quot;vize işlemleri&quot;, eğer 2&#39;ye basarsanız &quot;kredi kartı işlemleri&quot;, eğer 3&#39;e basarsanız &quot;ev kredisi işlemleri&quot;, eğer 4&#39;e basarsanız &quot;müşteri temsilcisine bağlanmak&quot;, sıfıra basarsanız &quot;diğer işlemler menüsüne gitmek&quot; gibi çoklu koşullara göre programlama yapmak gerekebilir. Bunu çözmek için &quot;if-else if&quot; yapılarını ya da &quot;switch-case&quot; yapısını kullanırız.

Not: &quot;switch-case&quot; yapısında eğer her case&#39;in sonuna &quot;break&quot; ifadesi koymazsak ise aradığı koşulu bulana kadar tüm case&#39;lere girip o kod bloklarını çalıştıracaktır.

Scanner scanner = **new** Scanner(System.in);

int operationChoice = scanner.nextInt();

System.out.println(&quot;0-Diğer işlemler&quot;);

System.out.println(&quot;1-Vize işlemler&quot;);

System.out.println(&quot;2-Kredi kartı işlemler&quot;);

System.out.println(&quot;3-Ev kredisi işlemler&quot;);

System.out.println(&quot;4-Müşteri temsilcisi işlemler&quot;);

System.out.println(&quot;Your choice is : &quot;+ operationChoice);

**switch** (operationChoice){

**case** 0:

System.out.println(&quot;Diğer işlemler menüsü&quot;);

**break** ;

**case** 1:

System.out.println(&quot;Vize işlemleri&quot;);

**break** ;

**case** 2:

System.out.println(&quot;Kredi kartı işlemleri&quot;);

**break** ;

**case** 3:

System.out.println(&quot;Ev kredisi işlemleri&quot;);

**break** ;

**case** 4:

System.out.println(&quot;Müşteri temsilcisi işlemleri&quot;);

**break** ;

**default** :

System.out.println(&quot;Lütfen geçerli bir işlem tipi seçiniz&quot;);

}

## Java&#39;da Döngü Mekanizmaları

Döngüler bilgisayara tekrarlı işleri yaptırabilmek için gereklidir. Örneğin, 1000&#39;e kadar olan tüm tek sayıları bulmak tekrarlı bir işlemdir. Müşteri şifresini tekrar tekrar girmeye çalışmakta tekrarlı bir işlemdir.

Döngüler 4 ana bileşenden oluşur:

- Döngünün iterasyon sayısını tutacak değişkene ilk değer atanır.
- Döngünün sonlandırılması veya devam etmesi için bir koşul cümlesi belirtilir.
- Döngünün her iterasyonda ne kadar artıp ne kadar azalacağı belirtilir.

&quot;for&quot; Döngüsü

Bu döngü tipinde iterasyon sayısı belli bir miktardadır. Döngünün maksimum kaç kez işletileceği önceden bellidir.

**for** ( initialization; condition; incr/decr){

_//statement or code to be executed_

}

**for** (int i=-100; i \&lt;1000; i++){

_// tek sayıları bul_

**if** (i %2==-1|| i %2==1){

System.out.println(&quot;Tek sayı: &quot;+ i);

}

}

Döngüler iç içe tanımlanabilir. Bunlara nested loops denir. Örneğin: çarpım tablosunu ekrana yazdırmak için iç içe 2 tane döngü tanımlamak gerekir.

**for** (int i =1; i \&lt;=9; i++){

**for** (int j =1; j \&lt;=9; j++){

int result = i \* j;

String formattedOutput = String.format(&quot;(%d x %d)=%d&quot;,i,j,result);

System.out.println(formattedOutput);

}

}

&quot;while&quot; Döngüsü

&quot;for&quot; döngüsüne benzerdir. &quot;while&quot; döngüsü genellikle işlemin kaç kez tekrar edeceği bilinmediği durumda kullanılır. Örneğin: müşterinin hesabına giriş şifresini kaç kez yanlış gireceğini bilemeyiz. Bu nedenle bu tarz durumlarda &quot;while&quot; döngüsü tercih edilir.

Scanner scanner = **new** Scanner(System.in);

String customerPassword =&quot;12345&quot;;

boolean passwordSuccessfull = **false** ;

**while** (!passwordSuccessfull){

System.out.println(&quot;Hesap şifrenizi giriniz:&quot;);

String typedPassword = scanner.next();

**if** (customerPassword.contentEquals(typedPassword)){

passwordSuccessfull = **true** ;

System.out.println(&quot;Sisteme başarılı giriş yaptınız!&quot;);

}

}

&quot;do-while&quot; Döngüsü

&quot;while&quot; döngüsünün çok benzeridir. Bu döngüde koşul en sonda yer aldığı için en az bir kez tur çalıştırılır.

int i =1;

**do** {

System.out.println(&quot;Sadece bir kez çalıştım :) &quot;);

i++;

} **while** (i==1);

&quot;break&quot; ve &quot;continue&quot; Komutu ile Döngüyü Kontrol Etmek

İşletilen bir döngüyü bir koşul sonucu sonlandırmak için &quot;break&quot; komutu kullanılır. &quot;continue&quot; kelimesi ile döngünün devam etmesi sağlanır. Aşağıdaki örnekte döngü içinde ilk 50 değeri continue ile atlayacağız. Dizinin ortasına geldiğimizde ise break komutuyla döngüyü kıracağız.

**for** (int i=1; i \&lt;=100; i++){

**if** (i \&lt;50){

System.out.println(&quot;Daha yarısına gelmedim!&quot;);

**continue** ;

}

**if** (i ==50){

System.out.println(&quot;Dizinin ortasındayım!&quot;);

**break** ;}}

Java Sayı ve Yazı İşlemleri (Numbers &amp; Strings)

Java&#39;da ilkel (Primitive) veri tiplerinden bahsetmiştik. Bu veri tiplerinin bir de referans özellikte olanları da vardır. Bunlar sınıf tabanlı veri tipleri diyoruz. Örneğin: tamsayı olan ve ilkel bir veri tipi olan &quot;int&quot; tipinin bir de &quot;Integer&quot; şeklinde bir sınıf ile temsil edildiği veri tiplerine referans veri tipi diyoruz.

Bunun yanında matematiksel işlemlere yardımcı olmak ve matematiksek fonksiyonları hazır kullanmak için Java&#39;da Math isminde bir hazır tanımlanmış sınıf vardır. Aşağıdaki örnekler kodların içinde gerekli açıklamalar verilmiştir.

Örnek:

_// Veri dönüşümü_

Long personelId = **new** Long(100);

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

_// Kıyaslama metodu ===\&gt; compareTo_

Long personelId = **new** Long(100);

System.out.println(personelId.compareTo(50L));

System.out.println(personelId.compareTo(100L));

System.out.println(personelId.compareTo(150L));

_// değerlerin eşitliğini karşılaştırma metodu ===\&gt; equals_

Long personelId = **new** Long(100);

System.out.println(personelId.equals(50L));

System.out.println(personelId.equals(100L));

_// String değerlerden sayılara dönüşüm metodu ===\&gt; valueOf_

long number1 = Long.valueOf(&quot;100&quot;);

int number2 = Integer.valueOf(&quot;5&quot;);

short number3 = Short.valueOf(&quot;1&quot;);

_// String değerlerden sayılara dönüşüm metodu ===\&gt; parseX_

long number1 = Long.parseLong(&quot;100&quot;);

int number2 = Integer.parseInt(&quot;5&quot;);

short number3 = Short.parseShort(&quot;1&quot;);

_// mutlak değer alma fonksiyonu ===\&gt; abs_

Integer a =-8;

double d =-100;

float f =-90;

System.out.println(Math.abs(a));

System.out.println(Math.abs(d));

System.out.println(Math.abs(f));

_// ceil metodu ile yukarı yuvarlama, floor ile ise aşağı yönlü yuvarlama yapılır._

double d =100.675;

float f =90.15f;

System.out.println(Math.ceil(d));

System.out.println(Math.ceil(f));

System.out.println(Math.floor(d));

System.out.println(Math.floor(f));

_// rint metodu ile ondalıklı kısım 0.5&#39;den büyükse yukarı doğru_

_// eğer 0.5&#39;e eşit ve küçük ise aşağı doğru yuvarlama yapar. rint fonksiyonu sonuç olarak sadece int tipinde değer verir._

double d =100.675;

double e =100.500;

double f =100.200;

System.out.println(Math.rint(d));

System.out.println(Math.rint(e));

System.out.println(Math.rint(f));

_// rint metodu ile ondalıklı kısım 0.5&#39;e eşit ve büyükse yukarı doğru_

_// eğer 0.5&#39;den küçük ise aşağı doğru yuvarlama yapar._

_// round fonksiyonu long veya int döndürür._

double d =100.675;

double e =100.500;

float f =100;

float g =90f;

System.out.println(Math.round(d));

System.out.println(Math.round(e));

System.out.println(Math.round(f));

System.out.println(Math.round(g));

_// max verilen iki değerden en büyüğünü döndürür._

_// min verilen iki değerden en küçüğünü döndürür._

System.out.println(Math.min(12.123,12.456));

System.out.println(Math.max(12.123,12.456));

_// e tabanında log alma fonksiyonudur._

double x =2.76;

System.out.printf(&quot;log(%.3f) is %.3f%n&quot;, x, Math.log(x));

_// üs alma fonksiyonudur. 2 üzeri 3 gibi._

double x =2;

double y =3;

System.out.printf(&quot;pow(%f, %f) is %f&quot;, x, y, Math.pow(x, y));

_// karekök alma fonksiyonudur._

double x =4;

System.out.printf(&quot;sqrt(%.3f) is %.3f%n&quot;, x, Math.sqrt(x));

_// 0-1 arasında rastgele sayı üretme fonksiyonudur._

System.out.println(Math.random());

Java&#39;da String İşlemleri

Java&#39;da varsayılan dil içerisinde gelen String işleme kütüphaneleri mevcuttur. String sınıfı içinde yer alan statik fonksiyonlarda yazılımcılara yardımcı olmaktadır.

String veri tipi Java&#39;da ilkel (primitive) bir veri tipi değildir. Bu nedenle &quot;new&quot; anahtar sözcüğü kullanılarak nesne şeklinde oluşturulabilir.

Java&#39;da String veri tipinde bir değişken tanımı aşağıdaki gibi yapılabilir. Buna Literal tanımlama diyoruz. Sıklıkla kullanılan bir tanımlama biçimidir. Değişkene direkt olarak veriyi &quot;=&quot; operatörüyle atama yapıyoruz.

String greeting =&quot;Hello world!&quot;;

Literal tanımlama dışında &quot;new&quot; anahtar sözcüğüyle bir nesne olarak oluşturabilirsiniz. Bu yöntemle Heap hafıza bölgesinde bir alan kaplamış olursunuz. Literal tanımlama ile Heap hafızadan kazanç sağlanır.

Örnek:

String helloString = **new** String(&quot;Merhaba Dunya!&quot;);

String tipinde tanımlanan değişkenler veya nesneler değiştirilemez duruma sahiptir. Buna Immutable Object denir. String içindeki değeri değiştirmek isterseniz. Yeni bir değişken veya nesne tanımlama yapmak gerekecektir.

String veri tipi niçin Immurable (Değiştirilemez) tasarlandı diye düşünebilirsiniz. Bunun birden fazla sebebi vardır. Öncelikle, yazılım geliştirilirken String veri tipi çok sık kullanılır.

String tipinde sürekli nesne üretilmesi Heap hafıza bölgesini çok kötü kullanmaya ve performans problemlerine yol açar. Bu nedenle Literal tanımlarla ve özel String Pool (Havuz) ile birlikte performans kazancı hedeflenmiştir. String&#39;ler için Java&#39;da özel bir hafıza bölgesi vardır. Bu bölgede bir String havuzu vardır. Gerçekten bu havuz içinde belli miktarda tanımlı String nesneleri bulunur. Bu nesneler Heap hafızada belli bir bölgeyi kaplarlar. Fakat, sınırlı sayıdadırlar. Aşağıda, Literal tanımlama ile &quot;new&quot; ile String oluşturma arasındaki fark gösterilmektedir. İki tane Literal tanımlı s1 ve s2 isminde değişkenimiz olduğunu düşünelim.

String s1 =&quot;Hello World&quot;;

String s2 =&quot;Hello World&quot;;

s1 == s2

![](RackMultipart20201119-4-xnzld6_html_65cf483949557af3.png)

Yukarıdaki örnekte bizler iki tane s1 ve s2 tipinde iki tane Literal tanımlı değişkenler oluşturduk. Aslında, bu iki değişken aynı değere sahip oldukları içim String Pool&#39;dan (Havuzdan) önceden oluşturulmuş bir nesneyi işaret ederek iki tane ayrı hafıza bölgesini doldurmaktan kurtuldular ve hafıza kazancı sağladılar. Yukarıdaki şekilde de bu durum izah edilmektedir. S3 değişkeni s1 ve s2 ile aynı değere sahip olsa da &quot;new&quot; ile yeni bir nesne olarak oluşturulduğu için hafızada başka bir bölgede oluşturulur.

Örnek:

String s1 =&quot;Hello&quot;;

String s2 =&quot;Hello&quot;;

String s3 =&quot;Merhaba&quot;;

String s4 = **new** String(&quot;Merhaba&quot;);

System.out.println(&quot;s1 == s2 : &quot;+(s1 == s2));

System.out.println(&quot;s2 == s3 : &quot;+(s2 == s3));

System.out.println(&quot;s3 == s4 : &quot;+(s3 == s4));

Yukarıdaki örnekte de bu durum geliştirilmiştir. s1 ve s2 değişkenleri aynı değere sahip Literal tanımlı String değişkenleri oldukları için aynı hafıza bölgesini işaret ederler. s3 değişkeni Literal tanımlı olmasına rağmen başka bir değere sahip olduğu için String Pool&#39;dan (Havuzdan) başka bir nesneyi alıp onu işaret etmektedir. s4 değişkeni ise &quot;new&quot; ile oluşturulduğu için Heap hafızadan bambaşka bir alanı almıştır. Yukarıdaki programın çıktısı aşağıdaki gibidir. &quot;==&quot; operatörü String&#39;lerde hafıza adresi kıyaslaması yapar. s1 ile s2 aynı hafıza adresini gösterir. s2 ve s3 Literal tanımlı olsalar da havuzdaki farklı nesneleri işaret ettikleri için adresleri eşit değildir. s3 ve s4 aynı değerlere sahip olsa da biri Literal tanımlıdır ve havuzdaki bir nesneyi işaret eder. Diğeri ise &quot;new&quot; ile tanımlandığı için Heap hafızada başka bir adresi işaret eder.

s1 == s2 : **true**

s2 == s3 : **false**

s3 == s4 : **false**

String&#39;ler değiştirilemez olduğu için Güvenlik ile ilgili konularda da varsayılan olan korumacı bir özelliğe sahiptir. Ayrıca, String değişkenler Immutable (Değiştirilemez) olduklarından dolayı Çok Kanallı (MultiThread) programlamada Thread-Safe özelliğe sahiptirler. String Pool, String Literal ve String new arasındaki fark size mülakatlarda sorulabilir.

Not: String veri tiplerinde verinin karakter uzunluğunu bulmak için &quot;length()&quot; metodundan faydalanılır. Örnek:

String s1 =&quot;Hello&quot;;

int lengthOfs1 = s1.length();

Not: String ifadeleri birbiriyle birleştirmek için &quot;+&quot; operatörü veya &quot;concat&quot; metodu kullanılır. Örnek:

String namePrefix =&quot;My name is &quot;;

String greetimgMessage = namePrefix.concat(&quot;Zara&quot;);

Formatlı String İfadeler Oluşturmak

Java&#39;da &quot;String.format&quot; metoduyla formatlı veriler oluşturabilirsiniz. &quot;format&quot; metodu String sınıfının static fonksiyonudur. Nesne üretmeksizin direkt sınıf ismiyle çağırabilirsiniz.

Örnek:

int speed =50;

String departureCityName =&quot;Akhisar&quot;;

String arrivalCityName =&quot;İstanbul&quot;;

String fullText = String.format(&quot;Aracın ortalama hızı: %d kilometredir.&quot;+

&quot;Araç %s şehrinden kalkıp %s şehrine varacaktır.&quot;, speed, departureCityName, arrivalCityName);

System.out.println(fullText);

Yukarıdaki örnekte bir metin oluşturulmaya çalışılıyor. Metin içerisinde tanım sayıları ifade eden %d ve String veri tipini ifade eden %s alanları vardır. Bu alanlar dinamiktir. Gelen değerleri cümle içinde gösterilmesini sağlarlar.

String s =&quot;Strings are immutable&quot;;

_// s isimli String değişkendeki ifadenin 8. indeksindeki karakteri alır._

_// Burada dikkat edilmesi gereken şey indeksler sıfırdan başlar. O yüzden 9. karakteri okuyoruz._

char result = s.charAt(8);

-----------------------------------------------------------

String str1 =&quot;Strings are immutable&quot;;

String str2 =&quot;Strings ARE immutable&quot;;

_// s1 ve s2 değişkenleri içinde yer alan değerleri büyük küçük harf duyarlılığı olmaksızın kıyaslar._

int result = str1.compareToIgnoreCase(str2);

System.out.println(result);

-----------------------------------------------------------

String str = **new** String(&quot;This is really not immutable!!&quot;);

_// String ifadenin sonu verilen ifadeyle bitiyor mu kontrol eder. true veya false döner._

_// Cümlenin sonu &quot;immutable!!&quot; ile bitiyor mu kontrol ediyoruz. true döner._

boolean retVal = str.endsWith(&quot;not immutable!!&quot;);

System.out.println(&quot;Returned Value = &quot;+ retVal );

-----------------------------------------------------------

String str1 = **new** String(&quot;This is really not immutable!!&quot;);

String str2 = **new** String(&quot;This is really not immutable!!&quot;);

_// equals metodu iki String değişkenin aynı değere sahip olup olmadığını kıyaslar._

_// == operatörü ile iki String&#39;leri kıyaslasaydık, hafıza adreslerini kıyaslamış olacaktır. O da false dönecekti._

boolean retVal = str1.equals( str2 );

System.out.println(&quot;Returned Value = &quot;+ retVal );

-----------------------------------------------------------

String str = **new** String(&quot;Welcome to kodluyoruz.org&quot;);

String subStr1 = **new** String(&quot;Tutorials&quot;);

_// indexOf metodu verilen ifadenin cümlede nerede hangi indeksten itibaren başladığını belirtir._

_// Eğer ifadeyi cümle içinde bulamazsa -1 döner._

System.out.println(&quot;Found Index :&quot;+ str.indexOf( subStr1 ));

-----------------------------------------------------------

String str = **new** String(&quot;Welcome to kodluyoruz.com&quot;);

_// replace metoduyla bir cümle içindeki istediğimiz ifadeyi bir başka ifade ile değiştirebiliriz._

_// Örneğin: Welcome ifadesini Merhaba ile değiştiriyoruz. Değişiklik sonucunda değişmiş halini yeni bir String olarak döner_

str = str.replace(&quot;Welcome&quot;,&quot;Merhaba&quot;);

str = str.replace(&quot;to&quot;,&quot;&quot;);

System.out.println(str);

-----------------------------------------------------------

String str = **new** String(&quot;Welcome-to-kodluyoruz.org&quot;);

_// split fonksiyonu cümleyi ayırmak için bir karakter alır. Sonra o karaktere göre cümleyi parçalara böler._

_// bu örnekte - işaretiyle ayırma işlemi uygulanmıştır._

String[] items = str.split(&quot;-&quot;);

System.out.println(&quot;Return Value :&quot;);

-----------------------------------------------------------

String str = **new** String(&quot;Welcome to kodluyoruz.com&quot;);

_// startsWith metoduyla cümle belirtilen ifadeyle başlıyor mu diye kontrol edilebilir._

System.out.println(str.startsWith(&quot;Welcome&quot;));

-----------------------------------------------------------

String str = **new** String(&quot;Welcome to kodluyoruz.com&quot;);

_// substring fonksiyonu verilen başlangıç indeksinden itibaren verilen bitiş indeksine kadar olan bölümü kırpar ve yeni bir string olarak döndürür._

String subStringPart = str.substring(10,15);

StringBuilder Sınıfının Kullanımı

Java&#39;da performanslı String birleştirme işlemleri için &quot;StringBuilder&quot; sınıfı kullanılabilir. &quot;+&quot; operatörü ve &quot;concat&quot; fonksiyonuna göre daha performanslı bir yöntemdir.

Örnek:

StringBuilder builder = **new** StringBuilder();

builder.append(&quot;İlk cümle&quot;);

builder.append(&quot;İkinci cümle&quot;);

builder.append(&quot;Üçüncü cümle&quot;);

System.out.println(builder.toString());

&quot;append&quot; metoduyla String ifadeler eklenir. Ardından, &quot;toString&quot; metoduyla birleştirilmiş tüm String ifade alınır.

## Java&#39;da Dizi (Array)

Dizi (Array) kavramı programlama dillerinde bir veri tipini ifade eder. Bu veri tipi liste halindeki ardışık verileri bir arada tutan yapıya denilir. Bu ardışık yapıya ait elemanlara indeks yoluyla erişim sağlanabilir. Diziler sabit boyutludur. Örneğin: 10 elemanlık dizi. Dizilerde aynı tipten veri tutulur. Örneğin: tüm elemanları &quot;int&quot; olan bir dizi.

Dizi&#39;nin hafızada bir başlangıç adresi olur ve ardışık olan diğer elemanlar sırayla hafızaya yerleştirilir. Dizi&#39;ler &quot;new&quot; anahtar sözcüğüyle oluşturulur. Böylece, Heap Hafıza bölgesinde yer kaplarlar.

double[] myList;_// tercih edilen yol_

veya

double myList[];_// başka türlü tanımlama biçimi_

Diziler veri tipi ve [] parantezler ile belirtilir. Yukarıda iki farklı tanımı görülmektedir. Hafızadan yer alıp diziye alan ayırabilmek için &quot;new&quot; anahtar kelimesi kullanılır.

double[] myList = **new** double[10];

Yukarıda maksimum 10 eleman alabilen &quot;double&quot; veri tipinde olan bir dizi oluşturulmuştur.

![](RackMultipart20201119-4-xnzld6_html_10360b4ced92483c.png)

Yukarıda &quot;myList&quot; isminde bir dizi tanımlamıştık. Tanımlanan dizi hafıza yukarıdaki şekildeki gibi tutulur. &quot;myList&quot; değişkeni dizinin başlangıç adresini tutar. Dizilerde ardışık bir sıra olduğu için ilk elemandan sonra gelen elemanların hafıza adresleri de birer birer artar. Dizi blok halinde yer kaplar. Diziye erişmek için indeks numarası kullanılır. Örneğin: &quot;myList[0]&quot; demek dizinin 1. Elemanını verecektir. Java&#39;da dizilerin indeksleri sıfırdan başlar. Örneğin: &quot;myList[5]&quot;, yani 5 nolu indeksteki dizi elemanını ver dediğimizde aslında dizinin 6. Elemanına erişmiş oluruz.

Örnekler:

_// Java&#39;da diziye ilk değerler süslü parantezler arasında verilir._

double[] myList ={1.9,2.9,3.4,3.5};

_// tüm dizi elemanlarını arada boşuk bırakarak sırayla ekrana yazdırır._

**for** (int i =0; i \&lt; myList.length; i++)

{

System.out.println(myList[i]+&quot; &quot;);

}

Yukarıdaki örnekte myList isimli diziye ilk değerleri hemen verilmiştir. Süslü parantezler arasında kalan değerler dizi elemanlarıdır.

Ardından, bir &quot;for&quot; döngüsü ile dizi elemanları ekrana yazdırılır.

Dizileri fonksiyonlara parametre olarak göndermek

Tanımladığınız dizileri fonksiyonlara parametre olarak gönderebilirsiniz.

Örneğin elimizde static bir fonksiyon olsun. Bu fonksiyona int tipinde verileri olan bir diziyi girdi (input) olarak vermek istersek aşağıdaki gibi olur.

**public**** static**voidprintArray(int[] array)

{

**for** (int i =0; i \&lt; array.length; i++)

{

System.out.print(array[i]+&quot; &quot;);

}

}

printArray ( int[] array ) kırmızı olarak işaretlediğimiz yer diziyi yerel değişken olarak fonksiyona gönderdiğimiz noktadır. Java&#39;da tüm değişkenler &quot;Pass by Value&quot; yöntemiyle geçilir. Bu şu demektir. Sizin tanımladığınız değişkenin, nesnenin veya dizinin birebir kopyası oluşturulur. Bu kopya değer fonksiyona yerel değişken olarak gider. Bu Java mülakatlarında size sorulabilecek bir detaydır.

Dizileri fonksiyonlardan geri döndürmek

Fonksiyonlar belli bir işi yapıp sonucunda değer dönebilen veya dönmeyen kod bloklarıdır. Fonksiyonlar için altın kural, her fonksiyonun tek bir işi olmalıdır. Örneğin: dizi ortalaması alma işi yapan bir fonksiyon dizileri ekrana yazdırma işini yapmamalıdır. Veya dizilerin ortalamasını alma işi ile dizileri toplama işlemi aynı fonksiyon içinde olmamalıdır. Her biri ayrı fonksiyonlar olmalıdır.

**public**** static**int[]reverse(int[] list)

{

int[] result = **new** int[list.length];

**for** (int i =0, j = result.length-1; i \&lt; list.length; i++, j--)

{

result[j]= list[i];

}

**return** result;

}

Yukarıda dizinin tersine çevrilmiş halini döndüren bir fonksiyon vardır. public static int[] reverse(…) kırmızı ile işaretlenen alan dizi döndüreceğimizi ve bu dizinin veri tipini söylüyoruz. Burada veri tipimiz &quot;int&quot; 

## Java&#39;da Matris İşlemleri (Matrice)

Java&#39;da matrisler varsayılan bir veri tipi olarak bulunmazlar. Dizilerin 2 boyutlu halleri şeklinde tanımlanırlar. Matris satır ve sütun şeklinde tablo verisi formatındaki verileri tutmak için kullanılır. Diziler liste halinde veriler için uygunken, matrisler tablo şeklindeki veriler için uygundur.

Örnek:

3x2 &#39;lik bir matris olduğunu düşünelim.

![](RackMultipart20201119-4-xnzld6_html_9f2eac208ade025f.png)

2x4 &#39;lük başka bir ise aşağıdaki gibi olacaktır.

![](RackMultipart20201119-4-xnzld6_html_f0bc4b115ab58a77.png)

Bu iki matrisin çarpımıyla ise C isminde 3x4 &#39;lük bir matris oluşacaktır. Buradaki çarpma yöntemi A&#39;nın satırını komple al, B&#39;nin sütunu komple al ve birbiriyle çarp sonucu C matrise yaz. Kabaca yöntem bu şekilde, bu yöntemin matematiksel izahı ise aşağıdaki gibidir.

![](RackMultipart20201119-4-xnzld6_html_43690b6b93c9d78f.png)

C matrisi sonuç matrisidir.

Formül:

![](RackMultipart20201119-4-xnzld6_html_7e8ff35fdbc62679.png)

Yukarıdaki A ve B matrisinin Java&#39;da tanımlanması aşağıdaki gibidir.

double[][] A ={

**new** double[]{1d,5d},

**new** double[]{2d,3d},

**new** double[]{1d,7d}

};

double[][] B ={

**new** double[]{1d,2d,3d,7d},

**new** double[]{5d,2d,8d,1d}

};

Dizilerden tek farkı [] parantez yanına bir tane [] açıyoruz. Zaten her [] ifadesi yeni bir boyut anlamına geliyor. &quot;**double[][][] ucBoyutlu;**&quot; şeklinde bir ifadeyle 3 boyutlu veri saklayan bir veri yapısı oluşturmuş oluyoruz.

**public** double[][]multiplyMatrices(double[][] firstMatrix,double[][] secondMatrix){

_// firstMatrix.length ile ilk matrisin satır sayısını buluyoruz. örneğimizde 3 olarak gelecektir._

_// secondMatrix[0].length ile ikinci matrisin sütun sayısını buluyoruz. örneğimizde 4 olarak gelecektir._

_// C matrisi olacak olan matrisi tanımlıyoruz._

double[][] result = **new** double[firstMatrix.length][secondMatrix[0].length];

_// matrislerde çarpma, toplama gibi işlemleri yapabilmek için iç içe 3 tane döngüye ihtiyaç duyarız._

**for** (int row =0; row \&lt; result.length; row++){

**for** (int col =0; col \&lt; result[row].length; col++){

result[row][col]= multiplyMatricesCell(firstMatrix, secondMatrix, row, col);

}

}

**return** result;

}

doublemultiplyMatricesCell(double[][] firstMatrix,double[][] secondMatrix,int row,int col){

_// A matrisinin satırı ile B matrisinin sütunu çarpma işlemi._

_/\*_

_\* row = 3, col = 4 olarak gelecektir._

_\* i = 0 ise_

_\* firstMatrix[3][0] \* secondMatrix[0][4]_

_\* i = 1 ise_

_\* firstMatrix[3][1] \* secondMatrix[1][4]_

_\* i = 2 ise_

_\* firstMatrix[3][2] \* secondMatrix[2][4]_

_\* şeklinde i değişerek satır ve sütun çarpılır._

_\*/_

double cell =0;

**for** (int i =0; i \&lt; secondMatrix.length; i++){

cell += firstMatrix[row][i]\* secondMatrix[i][col];

}

**return** cell;

}

Yukarıdaki &quot;multiplyMatrices&quot; fonksiyonu iki tane matrisi girdi olarak alır. Fonksiyon matrislerin çarpım sonucunu matris olarak döndürür.

&quot;multiplyMatrices&quot; fonksiyonu içinde bir başka fonksiyon daha çağrılmıştır. &quot;multiplyMatricesCell&quot; bu fonksiyon ise iki matrisin satır ve sütununu çarpıp sonucu double tipte bir değer döndürür.

## Java Gün ve Zaman İşlemleri (Date &amp; Time)

Java 7 ve öncesinde Date ile ilgili işlemlere yardımcı olan sınıflar &quot;java.util&quot; paketi altındadır. Özellikle, Date sınıfı tarih ve zamanı ifade eden nesneler oluşturulmasını sağlar.

Date sınıfının iki tane kurucu metodu vardır.

Date now = **new** Date();

Date userDefinedDate = **new** Date(102938102222);

Yukarıdaki boş kurucuyu çağırıp bir Date nesnesi oluşturursanız şimdiki zamanı size verecektir.

İçine milisaniye cinsinden değer alan diğer kurucu ile nesne oluşturursanız. Bu durumda sizin belirtmiş olduğunuz zamanı işaret edecektir. 1 Ocak 1970 tarihinden günümüze kadar tarihleri mili saniye cinsinde belirtebiliriz.

&quot;boolean after(Date date)&quot; fonksiyonu kendisine gönderilen zaman bilgisi ile mevcuttaki zaman bilgisi kendisinden sonraki bir tarih ise true döndürür.

Date c = **new** Date(209830121131L);

boolean result =c.after( **new** Date());

&quot;boolean before(Date date)&quot; fonksiyonu after gibi çalışır. Verilen zaman bilgisi mevcut zaman bilgisinden önce ise true döndürür.

&quot;int compareTo(Date date)&quot; fonksiyonu ile iki zaman bilgisi kıyaslanır. Eğer birbirine eşitse sıfır döner. Eğer, gönderilen zaman bilgisi mevcuttaki zaman bilgisinden sonra ise pozitif değer döndürür. Eğer, gönderilen zaman bilgisi önce ise negatif döndürür.

&quot;long getTime()&quot; fonksiyonu ile Date sınıfına ait nesneden tuttuğu zaman bilgisi milisaniye cinsinden alınır.

&quot;void setTime(long time)&quot; fonksiyonu ile istediğimiz zaman bilgisini set edebiliriz. Fonksiyona gönderilecek değer milisaniye cinsinden olmalıdır.

_// Date nesnesi oluştur_

Date date = **new** Date();

_// Zaman ve tarih bilgisini toString metoduyla göster._

System.out.println(date.toString());

Çıktı:

Thu Mar 0522:16:09 EET 2020

Java&#39;da Tarih Zaman Bilgisinin Formatlanması

Java&#39;da tarih ve zaman bilgisini formatlanması ve yazıdan Date tipinde bir nesne dönüştürülmesi işini &quot;SimpleDateFormat&quot; sınıfı yapmaktadır.

SimpleDateFormat formatter = **new** SimpleDateFormat (&quot;yyyy.MM.dd&quot;);

System.out.println(&quot;Current Date: &quot;+ formatter.format(date));

Çıktı:

Current Date:2020.03.05

Elimizde &quot;2020-02-10&quot; şeklinde yıl-ay-gün şeklinde String tipinde bir veri olsun. Bunu Date tipinde bir nesneye çevirmek için &quot;SimpleDateFormat&quot; sınıfına ait &quot;parse&quot; metodunu kullanmamız gerekecektir.

SimpleDateFormat formatter = **new** SimpleDateFormat (&quot;yyyy-MM-dd&quot;);

String dateAstext =&quot;2020-02-10&quot;;

Date parsedDate = formatter.parse(dateAstext);

System.out.println(&quot;Parsed Date: &quot;+ parsedDate.toString());

Java8 Tarih/Zaman (Date/Time) API

Java 8 ile birlikte tarih ve zaman bilgisini işleyen yapılar ve sınıflar değiştirildi. Daha esnek ve kullanımı kolay fonksiyonlar ve sınıflar haline dönüştü.

İlgili tüm sınıflar &quot;java.time&quot; paketi altında toplandı.

Java8&#39;in yeni Date/Time kütüphanesi aşağıdaki özelliklere sahiptir.

- Thread Safety özelliğini varsayılan olarak sağlar. Yani multi thread yazılımlar geliştirirken Date ve Time ilgili nesneler için ekstra önlemler almanıza gerek kalmaz. Veri tutarlılığını garanti eder.
- Kullanımı çok basittir.
- Dünya üzerindeki zaman farkı hesaplamaları için yazılımcının ekstra çözümler üretmesine gerek bırakmadan kendisi bu sorunu çözer.

LocalDate Sınıfı ile Örnekler

LocalDate localDate = LocalDate.now();

System.out.println(localDate.toString());

Yukarıdaki gibi LocalDate sınıfından bir nesne ile günümüz tarihini kolayca alıp ekrana yazdırabilirsiniz.

LocalDate currentDate = LocalDate.of(2020,03,12);

System.out.println(currentDate.toString());

Yukarıdaki örnekte de yıl, ay ve gün bilgilerini &quot;int&quot; tipinde ayrı ayrı geçerek belirli bir tarih atayabilirsiniz.

LocalDate definedDate = LocalDate.parse(&quot;2015-02-20&quot;);

System.out.println(definedDate.toString());

Yukarıdaki örnekte de String tipindeki tarih bilgisini parse ederek, LocalDate tipinde bir nesneye çevirip ekrana yazdırıyoruz.

LocalDate tomorrow = LocalDate.now().plusDays(1);

Yukarıdaki örnekte mevcut tarih üzerine 1 gün ekleme yapılmıştır. Görüldüğü gibi bu işlem tek satırda basitçe yapılabilmektedir.

LocalDate previousMonthSameDay = LocalDate.now().minus(1, ChronoUnit.MONTHS);

&quot;minus&quot; fonksiyonu ile 1 ay önceki bugünkü tarihi alabiliriz. ChronoUnit.MONTHS aylık bir çıkarma yapılacağını belirtiyor. Gün, Ay, Yıl gibi değerler seçersek o miktarda bir çıkarma işlemi uygulayacaktır.

DayOfWeek sunday = LocalDate.parse(&quot;2016-06-12&quot;).getDayOfWeek();

System.out.println(sunday);

Haftanın gününü basitçe &quot;getDayOfWeek&quot; metoduyla alabiliriz.

boolean leapYear = LocalDate.now().isLeapYear();

Yeni Date/Time kütüphanesi artık yıl olup olmadığını da kolayca söylüyor. 

LocalTime Sınıfı ile Örnekler

LocalTime sınıfı ise daha saat bazında zamansal işlemler içindir.

LocalTime now = LocalTime.now();

System.out.println(now);

Şimdiki zamanı saat bazında alabilirsiniz.

Çıktı: 22:54:12.997

LocalTime sixThirty = LocalTime.parse(&quot;06:30&quot;);

String şeklindeki saat bilgisini parse metoduyla LocalTime nesnesine çevirebiliriz.

_// 1 saat eklemek. 7:30 olacaktır._

LocalTime sevenThirty = LocalTime.parse(&quot;06:30&quot;).plus(1, ChronoUnit.HOURS);

_// saat bilgisini almak. 6 cevabı gelecektir._

int six = LocalTime.parse(&quot;06:30&quot;).getHour();

## Kaynakça
* xxx