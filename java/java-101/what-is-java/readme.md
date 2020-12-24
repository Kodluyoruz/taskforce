# Java Nedir?

## Java Nedir?

Java platform bağımsız, Nesneye Dayalı Programlama&#39;yı (Object Oriented Programming) tamamıyla destekleyen bir yazılım geliştirme dilidir. Java ile geliştirilen bir yazılım uygulaması Java Virtual Machine (Java Sanal Makinesi) yüklü olan herhangi bir bilgisayarda veya cihazda sorunsuz çalışabilir. Java aynı zamanda geliştirme platformunun kendisidir. Yazılım geliştirebilmeye imkan tanıyan ve geliştirilen bu yazılımın çalıştırılmasını sağlayan altyapıya verilen isimdir. Java bir programlama dili olmasının yanı sıra sağladığı bu imkanlarla birlikte platforma da ismini vermiştir. JDK, JRE bahsettiğimiz platformun kendisidir.

Java hızlı, güvenli ve güvenilir özelliklere sahiptir. Masaüstü uygulamalarından, web tabanlı uygulamalara, mobil uygulama geliştirmeden gömülü sistem uygulamalarına kadar çok geniş bir çerçevede kullanılmaktadır. Özel sektörde kurumsal firmalarda, akademik alanlarda bilimsel çalışmalarda da sıkça tercih edilmektedir. **Bir kez yaz ve her yerde çalıştır Java&#39;nın en önemli sloganıdır.** WORA (Write Once, Run Anywhere).

### Java&#39;nın Özellikleri

- **Java platform bağımsız bir dildir.** Bu özelliğine yukarıda kısaca değinmiştik. Java&#39;yı platform bağımsız kılan özelliği yazılan kaynak kodlar derlendikten sonra ara bir dil olan byte code&#39;a çevrilmesidir. Ara dile çevrilen bu kod parçaları Java Virtual Machine vasıtasıyla yorumlanır ve çalıştırılır.
- **Java Nesneye Dayalı programlamaya tamamıyla uygun bir dildir.** Java&#39;da her şey nesnelerden ibarettir.
- **Java öğrenmesi basit bir dildir.** Gramer (Syntax) olarak C/C++ tabanlı bir yaklaşıma sahiptir. Java&#39;da pointers(işaretçiler), operator overloading(operatör aşırı yüklemesi), hafıza yönetimi gibi karmaşık olabilecek ve programcının sıkça hata yapabileceği yöntemler, mekanizmalar programcının sorumluluğundan alınıp dilin bünyesine yerleştirilmiştir. Böylece, programcının yapabileceği hatalara karşın bir soyutlama sağlanmıştır. Garbage Collection (Çöp Toplayıcısı) mekanizması ile kullanılmayan nesnelerin hafızadan temizlenmesi işi Java tarafından üstlenilmiştir.
- **Java kararlı bir programlama dilidir.** Java ile yazılan uygulamalar sorunsuz derlendiyse sonsuza dek her platformda çalışabilirler. Güçlü bir hafıza yönetim mekanizması vardır. Hata yakalama sistemi ile kararlılığı arttırır.
- **Java, Multi-Thread (Çok Kanallı) programlamayı varsayılan olarak destekler.** Çok kanallı programlama yapabilmek için dilin bünyesinde gerekli altyapı ve imkanlar mevcuttur. Çok kanallı programlama ile geliştirmiş olduğunuz yazılım aynı anda network üzerinden bir dosya indirme işlemi yaparken, bir yanda da veritabanına çeşitli kayıtların yazılabilmesini sağlayabilir. Bu sizlerin bilgisayarınızda müzik dinlerken aynı anda bir Microsoft Word programını kullanabilmeniz gibi bir durumdur. Özetle eş zamanlı işlemleri programlayabilmenize imkan tanır.
- **Dağıtık sistemler ve Web programlama yapabilmenize imkan tanır.** Java ile network (ağlar) üzerinde çalışabilecek dağıtık sistemler programlayabiliriz. TCP/IP, HTTP ve Socket gibi alt yapılar ile bunları gerçekleştirebiliriz. Remote Method Invocation (RMI) ve REST tabanlı servis özellikleri sayesinde dağıtık bir şekilde haberleşme imkanı sağlamaktadır. Servlet, Java Server Page gibi alt yapılar ile Web programlama da yapılabilmektedir.
- **Gömülü sistemlerde programlama imkanı sağlar.** JavaME platformu ile gömülü sistemlerde Java ile geliştirmeler yapabilirsiniz.

## Java Tarihçesi

Java’yı iyi bir şekilde anlamak için, geçmişini, oluşturulmasının amaçlarını ve motivasyonunu bilmek gerekir. Diğer başarılı programlama dillerinde de olduğu gibi, Java kendinden önce gelen dillerin başarısız özelliklerini azaltmış veya tamamen yok etmiş, iyi özelliklerini ise bünyesinde toplamış ve geliştirmiştir.

Java, doğrudan C++ ile bağlantılıdır. C++ ise C’nin devamıdır. Java, karakteristik özelliklerinin birçoğunu bu iki dilden almıştır. C’nin sözdizimi (syntax), C++’ın ise nesne yönelimli programlama (object oriented programming- OOP) kavramları Java’ya miras kalmıştır. Bunun yanı sıra, Java, bu dillerdeki karmaşıklığı ortadan kaldırmış, eksik özelliklerini ise tamamlamıştır.

1991 yılında Sun Microsystems&#39;de (Şu an bu firma Oracle tarafından satın alınmıştır.) çalışan James Gosling&#39;e ve arkadaşlarına birçok cihazda ve bilgisayarda platform bağımsız şekilde çalışabilecek bir dil ortaya çıkarmaları için görev verildi. Onlar da C++ dilini inceledikten sonra, yeni bir dil ortaya çıkarıp bu hedefi gerçekleştirmeye karar verdiler. Ofislerinin önündeki ağaçtan esinlenerek bu dile Meşe anlamına gelen &quot;Oak&quot; adını verdiler. Ardından, 1 yıl kadar sonra geliştirilen tüm teknolojiler Java 1.0 adı altında toplanıldı. Bu teknoloji Star7 isimli bir el bilgisayarı ve Time Warner şirketi için ise bir televizyon decoder cihazı geliştirme projelerinde kullanıldı. (Java logosundaki Duke karakteri bu sistemlerde yardımcı sihirbazlığı yapan modülün simgesiydi ) Fakat, projelerde istenilen başarı sağlanamadı. Ardından, proje sonucu geliştirilen Java dili kullanılmama durumuna gelme tehlikesiyle karşı karşıya kaldı.

1990&#39;lı yılların başında yaygınlaşmaya başlayan bir teknoloji olan World Wide Web üzerine yoğunlaşmaya başladılar ve dil üzerindeki çalışmalarını bu teknoloji üzerine kurgulamaya başladılar. 23 Mayıs 1995 yılında da Java resmi olarak duyuruldu. Artık, internet tarayıcılarında Java tabanlı uygulamaların çalışması devri başlamıştı. Java&#39;nın 2. sürümü ile birlikte sadece tarayıcılarda çalışan uygulamalar yazmaya imkan veren bir yapıdan, temel nesneye dayalı kurumsal bir programlama diline doğru dönüşmeye başladı. Dilin daha kolay kullanımını sağlayan özellikler ise Java 5 ile geldi. Java 6 ve Java 7 ile dilin olgunlaşması ve kurumsal projelerde sıkça kullanılır hale gelmesi sağlandı. Java 8 ile dile Stream API, Lambda Expressions (Lambda Tanımlamaları) gibi çok önemli yenilikler getirildi.

Java Versiyon Tarihçesi(**Detay:** [https://en.wikipedia.org/wiki/Java\_version\_history](https://en.wikipedia.org/wiki/Java_version_history))

- JDK Alpha ve Beta (1995)
- JDK 1.0 (23 Ocak 1996)
- JDK 1.1 (19 Şubat 1997)
- J2SE 1.2 (8 Aralık 1998)
- J2SE 1.3 (8 Mayıs 2000)
- J2SE 1.4 (6 Şubat 2002)
- J2SE 5.0 (30 Eylül 2004)
- Java SE 6 (11 Aralık 2006)
- Java SE 7 (28 Temmuz 2011)
- Java SE 8 (18 Mart 2014)
- Java SE 9 (21 Eylül 2017)
- Java SE 10 (20 Mart 2018)
- Java SE 11 (25 Eylül 2018)
- Java SE 12 (19 Mart 2019)
- Java SE 13 (17 Eylül 2019)
- Java SE 14 (17 Mart 2020)
- Java SE 15 (15 Eylül 2020)

## C# Etkisi

Java’nın ortaya çıkışı birçok programcıyı etkilemiştir. Microsoft, 1990’ların sonunda C# dilini geliştirmiştir. C# doğrudan Java’dan etkilenen bir dildir. İki dil arasındaki benzerlikler o kadar fazladır ki, bu dillerden birini öğrenen neredeyse diğerini de öğrenmiş gibi olur.

## Anahtar Kelimeler

Java’yı geliştiren ekip, Java’nın sahip olduğu özellikleri bazı anahtar kelimelerle belirtmiştir. Bu kelimelere kısaca göz atalım:

- **Simple (basit)**: Java, programcıların kolayca öğrenmesi ve verimli bir şekilde kodlayabilmesi amacıyla tasarlanmıştır. C ve C++ dillerinden etkilense de bu dillerdeki bazı zorluklar Java için söz konusu değildir. Bu dilleri bilen kişiler için Java’yı öğrenmek ve kullanmak zor olmayacaktır.
- **Object-Oriented (nesne yönelimli):** Java, nesne yönelimli bir programlama dilidir. Nesne yönelimli programlama daha sonra ayrıntıyla açıklanacaktır.
- **Robust (güçlü):** Java, güçlü ve stabil bir dildir. Güçlü hata yönetim mekanizması sayesinde hataları tespit etmek, tekrar etmek ve çözmek kolaydır. Java ile yazılan kodlar hem derleme aşamasında (compile time) hem de çalışma aşamasında (runtime) sıkı bir şekilde kontrol edildiği için istisnai durumlara nadiren rastlanır. Üstelik daha önce de belirttiğimiz gibi platform bağımsız olması, yazdığınız kodun farklı platformlarda stabil bir şekilde çalışmasını sağlar.
- **Multithreaded (çok kanallı):** Java, gelişen teknolojileri destekleyen bir dildir. İşlemci mimarisinin gelişmesi ve çok kanallı uygulamaların yaygınlaşması nedeniyle, Java dili doğrudan çok kanallı programlamayı destekleyecek şekilde geliştirilmiştir. Java’nın kullanması kolay senkronizasyon yöntemleri sayesinde çok kanallı uygulamalar geliştirmek oldukça kolaydır.
- **Distributed (dağıtık):** Java, dağıtık sistemler geliştirmeyi destekleyen bir dildir. 
