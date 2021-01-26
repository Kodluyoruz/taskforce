# Java Uygulama Geliştirme Altyapıları

1. **Java SE (Java Standard Edition)**: Java programlama diliyle birlikte genel amaçlı, temel düzeyde programlama yapabilmeyi sağlayan platformdur. Java ile ilgili tüm temel kütüphaneleri ve dil özelliklerini içerir. Nesneye dayalı programlama yapabilmek için gerekli olan özellikleri sağlar.

1. **Java EE (Java Enterprise Edition)**: Java SE&#39;yi kapsamaktadır Ayrıca, Java ile daha çok web ve kurumsal düzeyde programlama yapabilmeyi sağlar. Servlet, Java Server Page, Web Service&#39;leri, Enterprise Java Bean (EJB) (orta katman yazılım geliştirme altyapısı), JPA (Java Persistence API) (Veritabanı ile etkileşim katmanı)

1. **Java ME (Java Micro Edition)**: Java ile gömülü sistem uygulamaları geliştirmeyi sağlar. Özellikle mobil cihazlarda geliştirme yapmaya imkan verir.

1. **JavaFX** : Java masaüstü uygulamaları geliştirmeyi sağlayan yeni nesil altyapıdır. Öncesinde masaüstü programları geliştirmek için Swing altyapısı tercih edilirdi. Swing&#39;in yerini alması için geliştirilmiştir.

# Java Geliştirme Ortamının Kurulumu

Java ile yazılmış olan uygulamaları çalıştırabilmek için bilgisayarınıza **Java Runtime Environment (JRE)** kurmanız gerekmektedir. JRE uygulamaları çalıştırmak için yeterlidir. Fakat, Java ile yazılım geliştirmeyi amaçlıyorsanız. **Java Development Kit&#39;i (JDK)** kurmanız gerekmektedir. JDK bünyesinde JRE&#39;yi de içermektedir. Ayrıca Java ile geliştirme yapabilmeniz için gerekli kütüphaneleri ve altyapıyı sağlamaktadır. Bu konuya ileride daha derinlemesine bir şekilde ele alacağız. Eğitim boyunca JDK 8 versiyonunu kullanacağız. Şimdi Windows, Mac OS ve Linux ortamları için JDK kurulumundan bahsedelim.

## Windows İşletim Sisteminde JDK 8 Kurulumu

Aşağıdaki linkten Oracle sitesi üzerinden JDK indirme işlemini başlatabilirsiniz.

[https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)

![JDK 8 Kurulumu](C:/GitHub/taskforce/java-101/hafta-1/figures/JDK-8-Kurulumu.png) 

Yukarıda da görüleceği üzere işlemci tipinize göre x86 (32 Bit) / x64 (64 Bit) seçebilirsiniz. Tıklayıp sözleşmeyi kabul edip indirebilirsiniz. İndirilen .exe uzantılı dosyaya çift tıklayarak kurulumu başlatabilirsiniz.

![JDK Kurulumu 2 ](C:/GitHub/taskforce/java-101/hafta-1/figures/jdk-kurulumu-2.jpg)



&quot;Next&quot; seçeneği ile kuruluma devam edilir.

![JDK Kurulumu 3 ](figures/jdk-kurulumu-3.jpg)

Yukarıdaki gibi varsayılan ayarlar bırakılır ve &quot;Next&quot; ile kuruluma devam edilir.

![JDK Kurulumu 4 ](figures/jdk-kurulumu-4.jpg)

Yukarıda Java&#39;nın kurulacağı dosya yolu belirtilmiştir. &quot;Change&quot; butonuna tıklayarak dilediğiniz dosya yolu verebilirsiniz. &quot;Next&quot; ile kuruluma devam edilir.

![JDK Kurulumu 5 ](figures/jdk-kurulumu-5.jpg)

JDK 8 kurulumu böylece tamamlanmış olur. Java&#39;nın sisteme doğru bir şekilde kurulduğunu kontrol için &quot;Windows > cmd&quot; yoluyla Komut İstemcisi açılır.

```terminal
>>java -version
```

![JDK Kurulumu 6](figures/jdk-kurulumu-6.jpg)

Komut satırı üzerinden versiyon sorgulaması yaptığınızda yukarıdaki fotoğrafta da görüldüğü gibi eğer Java başarılı bir şekilde yüklendiyse size kısa bilgiler verecektir.



### PATH ve JAVA\_HOME Tanımlamalarının Yapılması

Ortam değişkenleri (Environment Variables) oluşturularak işletim sistemi düzeyinde global tanımlamalar yapılabilmektedir. Java uygulamaları da işletim sistemi tarafından çalıştırılmaya başlandığında JAVA\_HOME ortam değişkenine ihtiyaç duyarlar. Varsayılan olarak işletim sisteminde tanımlı olan ortam değişkenini kullanmaya çalışırlar. Böylece, tüm Java uygulamalarını hatasız bir şekilde çalıştırma şansını yakalarız.



### JAVA\_HOME Ortam Değişkeni Tanımlanması

JAVA\_HOME ortam değişkeni tanımlanırken JDK&#39;nin kurulu olduğu dosya dizinini vermeliyiz. JRE ve JDK&#39;nın dosya dizinleri birbirinden farklıdır.

Windows arama çubuğuna **&quot;Gelişmiş Sistem Ayarları&quot;** veya İngilizcesi ile **&quot;Advanced System Settings&quot;** yazarak erişebilirsiniz. Açılan pencerede &quot;Gelişmiş&quot; (Advanced) tabına gelerek Ortam Değişkenleri&#39;ni (Environment Variables) güncelleyebilirsiniz.

![](figures/jdk-kurulumu-7.jpg)

Ardından, **&quot;Sistem Değişkenleri&quot; (System Variables)** altında yer alan &quot;Yeni&quot; (New) butonuna tıklayarak JAVA\_HOME değişkenini, JDK dosya dizinini vererek tanımlayabilirsiniz.

![JDK Kurulumu 8](figures/jdk-kurulumu-8.jpg)

### PATH Tanımının Güncellenmesi

PATH değişkenleri çalıştırabilir yazılım uygulamalarının dosya yolunu işletim sistemine belirtmek için kullanılır. Örneğin: yazılacak olan Java kodlarının derlenebilmesi için &quot;javac&quot; ismindeki yazılım modülüne ihtiyaç olacaktır. JDK kurulumu ile bu uygulama sisteminize yüklenmiş olur. &quot;javac&quot; yazılım modülünü her çalıştırmak istediğinizde tam dosya yolunu da yazmak zorunda kalırsınız.

Örneğin:

```terminal
>>C:\ProgramFiles\Java\jdk-13.0.1\bin\javac ExampleSourceCode.java
```


Yukarıda da görüldüğü gibi **&quot;ExampleSourceCode.java&quot;** isimli örnek Java uygulamamızı derlemek istediğimizde tam ve kesin bir biçimde dosya yolunu vermek gerekmektedir. PATH tanımlamaları ile bu yükten kurtuluruz. &quot;javac&quot; ile derleme yapmak istediğimizde sadece aşağıdaki gibi bir komut çalıştırmak yeterli olacaktır.


```terminal
>> javac ExampleSourceCode.java
```


Yine **&quot;Sistem Değişkenleri&quot; (System Variables)** içinde yer alan &quot;Path&quot; isimli öğeyi seçilir ve &quot;Güncelle&quot; (Edit) seçeneğine tıklanır. Gelen ekranda &quot;Yeni&quot; (New) butonuna tıklayarak yeni PATH tanımı eklenir. Bu PATH tanımında bir önceki bölümde tanımladığımız &quot;JAVA\_HOME&quot; ortam değişkeni kullanılabilir. JAVA\_HOME zaten JDK&#39;nin kurulu olduğu dosya dizinini verir. **&quot;%JAVA\_HOME\bin%&quot;** şeklinde sonuna &quot;\bin&quot; gelecek şekilde ekleme yapılarak, Java işletim sisteminin PATH tanımına eklenmiş olur.

![JDK Kurulumu 9](figures/jdk-kurulumu-9.jpg)

## Linux İşletim Sisteminde JDK 8 Kurulumu

Linux işletim sistemi **Özgür Yazılım Lisansı**&#39;na sahiptir. Bu nedenle Linux&#39;u esas alan birden fazla Linux türevleri (dağıtımları) ortaya çıkmıştır. Ubuntu İşletim Sistemi üzerinde JDK 8 kurulumu açıklanacaktır.

Ubuntu&#39;da yeni bir Terminal açılır. Ve işlemler komut istemcisinden yürütülür. Linux dağıtımlarında yazılım kurulumları, güncellemeleri ve birçok işlem Terminal (Komut İstemcisi) üzerinden halledilir.

```terminal
sudo apt update
sudo apt install openjdk-8-jdk
```

Yukarıdaki komutlarla birlikte Ubuntu&#39;ya JDK 8 kurulumu tamamlanmış olur. Ubuntu üzerinde yazılım kurulumu için &quot;sudo apt install <yazılımın ismi>&quot; şeklinde komut çalıştırılır.

```terminal
java -version
```

Komutu ile Java&#39;nın başarılı şekilde yüklendiği kontrol edilir.

**Ek Bilgi:** İşletim sisteminizde birden fazla JDK versiyonu yüklü ise &quot;sudo update-alternatives --config java&quot; komut ile kontrol edebilirsiniz. Varsayılan JDK versiyonunu da değiştirebilirsiniz.

### JAVA\_HOME Ortam Değişkeni Tanımlanması

Ubuntu&#39;ta ortam değişkenleri &quot;environment&quot; isimli bir dosyada tutulur. Bu dosyayı güncelleyerek JAVA\_HOME tanımlanabilir.

```terminal
sudo vim /etc/environment
```

Yukarıdaki komut ile bir Yazı (Text) Editör yardımıyla dosya açılır ve aşağıdaki satır en sona eklenir. Buradaki örnekte &quot; **vim**&quot; adlı yazı editör aracını tercih ettik. &quot; **nano**&quot; gibi araçlar da tercih edilebilir.

```terminal
JAVA_HOME="/usr/lib/jvm/java-8-openjdk-amd64"
```



## Mac OS Sistemde JDK 8 Kurulumu

Mac OS üzerinde JDK 8 kurulumu için Oracle websitesinden &quot;.**dmg**&quot; uzantılı dosyayı indirerek işe başlarız. Aşağıdaki linkten indirme işlemini yapabilirsiniz.

[https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html#license-lightbox](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html#license-lightbox)

İndirilen dosyaya çift tıklayarak kurulumu başlatabilirsiniz.

![JDK Kurulumu 10](figures/jdk-kurulumu-10.jpg)

Mac OS üzerinde komut istemcisi üzerinden işleri halletmek verimli ve entegrasyon esnekliği açısından faydalı denilebilir. Mac OS için &quot; **iTerm**&quot; Terminali tavsiye edebilirim. &quot; **iTerm**&quot; terminal kurulu olduğunu varsayarak veya var olan Terminali açarak Java kurulumunun başarılı bir şekilde yapılıp yapılmadığı kontrol edilmelidir.

```terminal
java -version
```

![JDK Kurulumu 11](figures/jdk-kurulumu-11.jpg)

Ardından, Windows ve Ubuntu işletim sistemlerinde yaptığımız gibi Mac OS işletim sisteminin PATH ortam değişkenini, JAVA\_HOME ortam değişkenini belirtmeliyiz.

Komut istemcisinden aşağıdaki komut ile **bash\_profile** dosyası güncellenir.

```terminal
vim ~/.bash\_profile
```

&quot;vim&quot; ile açtığımız dosyaya aşağıdaki satırları ekliyoruz.

```terminal
export 
JAVA\_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0\_231.jdk/Contents/Home"
```

Yukarıdaki ifade ile **JAVA\_HOME** ortam değişkenini işletim sistemi düzeyinde tanımladık.

```terminal
export PATH="$PATH:$JAVA\_HOME/bin"
```

Yukarıdaki ifade ile Windows işletim sistemindeki gibi **PATH** ortam değişkenine Java tanımını ekliyoruz.

## Eclipse IDE Kurulumu ve Mimarisi

Eclipse IDE, Java projeleri geliştirmenizi sağlayan bir geliştirici aracıdır. 2001 yılında IBM Kanada&#39;da hayatına başlamıştır. 2004 yılında kurulan Eclipse Vakfı (Foundation) ile ivme kazanarak Java geliştirme dünyasında en çok tercih edilen geliştirme ortamlarından biri haline geldi. Bizler de eğitim sürecinde Eclipse geliştirme aracını kullanacağız. Eclipse, Eclipse Public License (EPL) isimli açık kaynak kod lisansına sahiptir. Ücretsiz bir dağıtımdır. Oldukça fazla plug-in desteğine sahiptir. Eclipse&#39;in sahip olduğu arayüz (Standard Widget Toolkit) SWT isimli teknoloji ile geliştirilmiştir. Eclipse plug-in&#39;lere dayalı bir mimariye sahiptir.

Not: IDE, bütünleşik geliştirme ortamı anlamına gelmektedir.

### Eclipse Mimarisi

Eclipse temel bir platform üzerinde, tüm yeni işlevleri ve özellikleri bu temel alt yapı üzerine eklenen eklentiler (plug-in) ile sağlanmaktadır. Böylece modüler bir mimariye sahiptir. Eclipse modülerliğini sağlamakta olan altyapı OSGi standartlarındaki &quot;Equinox&quot; yazılım altyapısıdır.

![Eclipse Mimarisi](figures/jdk-kurulumu-12.jpg)

Yukarıdaki mimaride de görüleceği üzere Eclipse Platform adı altında ana bir altyapıdan oluşur. SWT, JFace gibi teknolojiler bu çekirdek yapı içinde yer alır. Platform Runtime katmanı ise OSGi ile var olan Equinox altyapısını sağlar. Equinox ile eklentiler sisteme entegre edilip çalıştırılabilir. Bu da eklenti tabanlı modüler bir mimarinin önünü açar.

Java Development Tooling bizlere kod düzenleme araçları, Java projeleri oluşturmak için gerekli araçları sağlar. Bu eklenti Eclipse çekirdek yapı içinde yer alan önemli bir eklentidir. &quot;New Tool&quot; isminde belirtilen modüller mimariye entegre edilebilen yazılım eklentileridir.

### Eclipse Kurulumu

Aşağıdaki indirme linkinden dilediğiniz bir versiyonu, dilediğiniz işletim sistemi için indirebilirsiniz. Eclipse kurulumu çok basittir. İndirdiğiniz sıkıştırılmış dosya içinden çalıştırılabilir dosyalar çıkacaktır. Direkt çift tıklama ile Eclipse&#39;i çalıştırabilirsiniz.

İndirme linki: [https://www.eclipse.org/downloads/packages/](https://www.eclipse.org/downloads/packages/)

![Eclipse Kurulumu](figures/jdk-kurulumu-13.jpg)