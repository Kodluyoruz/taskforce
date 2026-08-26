# JAVA&#39;NIN TARİHÇESİ

Java&#39;yı iyi bir şekilde anlamak için, geçmişini, oluşturulmasının amaçlarını ve motivasyonunu bilmek gerekir. Diğer başarılı programlama dillerinde de olduğugibi,Javakendindenöncegelendillerinbaşarısızözellikleriniazaltmış veya tamamen yok etmiş, iyi özelliklerini ise bünyesinde toplamış ve geliştirmiştir.

Java, doğrudan C++ ile bağlantılıdır. C++ ise C&#39;nin devamıdır. Java, karakteristik özelliklerinin birçoğunu bu iki dilden almıştır. C&#39;nin sözdizimi (_syntax_), C++&#39;ın ise nesne yönelimli programlama (_object oriented programming-__OOP_)kavramlarıJava&#39;yamiraskalmıştır.Bununyanısıra,Java, bu dillerdeki karmaşıklığı ortadan kaldırmış, eksik özelliklerini ise tamamlamıştır.

## Modern Programlamanın Doğuşu: C

Bugünkü teknolojinin geldiği noktada sanırım en büyük paylardan biri de C programlama diline aittir. C&#39;nin ortaya çıkışı yazılım dünyasını derinden etkilemiştir.

C&#39;nin başarısının sırrı, kendisinden önce iyi tasarlanmış ve verimli bir sistem programlama dilinin olmayışıydı. C bu boşluğu başarılı bir şekilde doldurmuştu. C&#39;den önce, programlama dilleri belirli bir amaç için geliştirilirdi. Genel bir sistem tasarlamak üzere üretilmiş başarılı bir programlamadiliyoktu.Örneğin, **FORTRAN** bilimselçalışmalardakullanmak üzere geliştirilmiş çok başarılı bir dildi, fakat bir sistem tasarlayamazdınız. **BASIC** öğrenmesikolaybirdildi,fakattasarımındabazıeksiklervardıvegüçlü bir dildeğildi.

1970&#39;lerde C&#39;nin geliştirilmesi, birçokları tarafından modern bilgisayar programcılığının başlangıcı olarak kabul edilir. Kendisinden önceki dillerin sorunlu yönlerini çözmüş ve ortaya güçlü, verimli ve iyi tasarlanmış bir dil çıkarmıştı. C o kadar başarılı olmuştur ki, kendisinden sonraki birçok programlama diline ilham vermiştir. Ayrıca bugün bile hâlâ aktif olarak kullanılmaktadır. Örneğin, hepimizin bilgisayarlarında kullandığı işletim sistemlerinin büyük bir kısmı hâlâ C dili ile yazılır.

## Bir Sonraki Adım: C++

1970&#39;lerdeve1980&#39;lerinbaşlarında,Cençokkullanılanprogramlamadilioldu. Buna rağmen, C&#39;nin de kendi içinde, gelişen teknolojilerin ve programcıların ihtiyaçlarını karşılamayan bazı eksikleri vardı. Nesne yönelimli programlama (OOP) metodolojisi, o yıllarda hızla benimsenmiş ve programcılar tarafından aranır olmuştu. C bundan yoksundu. Diğer yandan, sistem programlama için mükemmel bir dil olmasına rağmen, bunu sağlayabilmek için sunduğu özelliklerinfazlalığı,dilinkarmaşıklığınınartmasınanedenoluyordu.

Bugibisorunlarıçözmekiçin,1979yılındayenibirdilgeliştirildi.1983yılında bu dilin adına C++ dendi. C&#39;nin ne kadar geliştirildiğini anlatabilmek için bir yerineiki+konulmuştu.C++,C&#39;ninbütünözelliklerinesahipti;aynızamanda OOP metodolojisine göre oluşturulmuştu. Başarısının sırrı da burada yatıyordu.1980&#39;lerdeve1990&#39;larınbaşında,C++artıkC&#39;ninyerinialmışveen çok kullanılan dil olmuştu. Diğer yandan, sahne Java&#39;nın çıkışına hazırlanıyordu.

## Java&#39;ya neden ihtiyaç duyuldu?

Java, C++&#39;tan hayli etkilenmiş, diğer yandan C ve C++&#39;ın bazı özelliklerini barındırmayan bir dildi. Ortaya çıkışından bugüne kadar Java en başarılı programlama dillerinden biri olmuştur. Günümüzde dünyada en çok kullanılan 3 programlama dilinden biridir. Peki, zaten başarılı olmuş iki tane dil varken, Java&#39;nın geliştirilmesine neden ihtiyaç duyulmuştur? Bunu cevaplayabilmek için önce bilgisayarların nasıl çalıştığına bakmamız gerekiyor.

## Bilgisayarlar nasıl çalışır?

Basitçe tarif etmek gerekirse bilgisayar, birçok karmaşık elektronik devreden oluşan bir sistemdir. Amerikalı matematikçi John von Neumann, 1945 yılında bilgisayarları kavramsal olarak tarif etmiştir. Bu tarife göre, bir bilgisayar sistemi 3 temel parçadan oluşur:

- Merkezi işlemci birimi(CPU)
- Bellek(RAM)
- Girdi/Çıktı birimleri (Sabit disk, ekran, klavye, farevs.)

Kodların ve verilerin tutulması için bir bellek gereklidir. Bellekte tutulan bu kodlar işlemci tarafından çalıştırılır. Girdi/Çıktı birimleri ise zorunlu olmamakla birlikte, bilgisayarın ek iş yapmasına olanak sağlar.

Bu tarif bugün bile geçerlidir. Bu yüzdendir ki, bu tarife uyan cihazlara (bilgisayarlar, telefonlar, tabletler vs.) &quot;_Von Neumann makinesi&quot;_ denir.

Bilgisayar elektronik bir devredir. Her işlem elektrik kullanarak gerçekleştirilir. Bilgisayarda yaptığımız işlemleri fiziksel olarak gerçekleştiren donanım ise CPU&#39;dur. CPU&#39;ların çalışma mantığı ise basitçe şöyledir: CPU üreticileri(Intel,AMDvs.),CPU&#39;larıbellibirkomutkümesine(_instruction__set_) yanıt verecek şekilde üretirler. Bu komut kümesi önceden belirlenmiş, sınırlı sayıda komutu içerir. Aslında bu küme CPU&#39;nun dilini oluşturur. CPU&#39;nun anladığı bu dile makine dili (_assembly language_) denir. Bilgisayar üzerinde çalıştırılan her program, makine diline dönüştürülmek zorundadır. Fakat makine dili, öğrenmesi ve kullanması oldukça zor bir dildir. Bunun yerine insanlarınkolaycaöğrenipkullanabileceği,metintabanlıdillergeliştirilmiştir. Yinedebudillerdeyazılankodlarındanihayetmakinedilinedönüştürülmesi gerekir. Bunun için derleyiciler (_compiler_) geliştirilmiştir. Yeni bir programlamadiligeliştirilirken,aynızamandaderleyicisideyazılır.Derleyici, kodladığınız programı makine diline dönüştürür ve CPU tarafından çalıştırılmaya hazır halegetirir.

C veya C++ ile bir program yazdığınızda, o programın farklı platformlarda çalışmasıiçinfarklıderleyicilerlederlemenizgerekiyordu.Örneğin,Windows işletim sisteminde çalışması için başka bir derleyici, Linux için başka bir derleyici kullanmak zorundaydınız. Bu durum programcılar için bir yük oluşturuyordu. Java&#39;nın geliştirilmesindeki en büyük amaç bu yükü ortadan kaldırmaktı. Java, ilk olarak **platform bağımsız** bir dil olmak hedefiyle yola çıkmıştı.

## Java&#39;nın ortaya çıkışı

1991&#39;de Sun Microsystems şirketi tarafından geliştirilmeye başlayan Java&#39;nın çalışan ilk sürümünü üretmek 18 ay aldı. İlk olarak &quot;Oak&quot; denilse de 1995 yılında ismi Java olarak değiştirildi.

Java, yukarıda da belirttiğimiz gibi platform bağımsız bir dil olmak amacıyla üretilmişti.Buamaç, **WORA** (_Write __Once,__ Run __Anywhere-__ Bir __kere__ yaz,__her yerde çalıştır_) sloganıyla belirtilmiştir. Bu dilin tek bir derleyicisi vardır ve yazdığınız kod bütün platformlarda aynı şekildeçalışır.

## C# etkisi

Java&#39;nın ortaya çıkışı birçok programcıyı etkilemiştir. Microsoft, 1990&#39;ların sonundaC#dilinigeliştirmiştir.C#doğrudanJava&#39;danetkilenenbirdildir.İki dil arasındaki benzerlikler o kadar fazladır ki, bu dillerden birini öğrenen diğerini de öğrenmiş gibiolur.

## Anahtar kelimeler

Java&#39;yı geliştiren ekip, Java&#39;nın sahip olduğu özellikleri bazı anahtar kelimelerle belirtmiştir. Bu kelimelere kısaca göz atalım:

- **Simple (basit):** Java, programcıların kolayca öğrenmesi ve verimli bir şekilde kodlayabilmesi amacıyla tasarlanmıştır. C ve C++ dillerinden etkilense de bu dillerdeki bazı zorluklar Java için söz konusu değildir. Bu dilleri bilen kişiler için Java&#39;yı öğrenmek ve kullanmak zor olmayacaktır.
- **Object-oriented (nesne yönelimli):** Java, nesne yönelimli bir programlama dilidir. Nesne yönelimli programlama daha sonra ayrıntıylaaçıklanacaktır.
- **Robust (güçlü):** Java, güçlü ve stabil bir dildir. Güçlü hata yönetim mekanizması sayesinde hataları tespit etmek, tekrar etmek ve çözmek kolaydır.Javaileyazılankodlarhemderlemeaşamasında(_compile__time_) hem de çalışma aşamasında (_runtime_) sıkı bir şekilde kontrol edildiği için istisnai durumlara nadiren rastlanır. Üstelik daha önce de belirttiğimiz gibi platform bağımsız olması, yazdığınız kodun farklı platformlarda stabil bir şekilde çalışmasınısağlar.
- **Multithreaded (çok kanallı):** Java, gelişen teknolojileri destekleyen bir dildir. İşlemci mimarisinin gelişmesi ve çok kanallı uygulamaların yaygınlaşması nedeniyle, Java dili doğrudan çok kanallı programlamayı destekleyecek şekilde geliştirilmiştir. Java&#39;nın kullanması kolay

senkronizasyon yöntemleri sayesinde çok kanallı uygulamalar geliştirmek oldukçakolaydır.

- **Distributed (dağıtık):** Java, dağıtık sistemler geliştirmeyi destekleyenbir

dildir.

# JAVA İLE İLK PROGRAM

Intellij IDEA programını açalım. Karşımıza aşağıdaki ekran çıkacaktır:

![](RackMultipart20201124-4-tyjch_html_833672efb05dba99.jpg)

&quot;Create New Project&quot; butonuna tıklayalım.

![](RackMultipart20201124-4-tyjch_html_81a43614eba9a045.png)

Soldaki bölümden &quot;Java&quot;yı ve Project SDK olarak 11&#39;i seçelim. &quot;Next&quot; butonuna tıklayalım.

![](RackMultipart20201124-4-tyjch_html_834297bbd367dd24.png)

Bu ekranda hiçbir şey yapmadan &quot;Next&quot; butonuna basarak devam edelim.

![](RackMultipart20201124-4-tyjch_html_28fb47e0b24ee6e1.png)

&quot;Project name&quot; ile belirtilen bölüme &quot;first-java-app&quot; yazalım ve &quot;Finish&quot; butonuna tıklayalım. Karşımıza şu şekilde bir ekran çıkacaktır:

![](RackMultipart20201124-4-tyjch_html_1a0d1e54b0f2d969.jpg)

Solda bulunan &quot;Project&quot; başlıklı pencere projemizdeki dosyaları ve klasör yapısını gösterir. Buradan projemizi inceleyebilir, yeni dosyalar ekleyebilir veya var olan dosyaları silebiliriz.

&quot;src&quot; adındaki klasörün üzerine gelip sağ tıklayalım ve açılan menüden sırasıyla&quot;New&quot;ve&quot;JavaClass&quot;seçenekleriniseçelim.Busayedeprojemizeyeni bir sınıfekleyeceğiz.

![](RackMultipart20201124-4-tyjch_html_3ffee60d54fb719.jpg)

Açılan pencerede bize, sınıfımıza vermek istediğimiz ismi soracaktır.

![](RackMultipart20201124-4-tyjch_html_9f3d02e5285be25.jpg)

Buraya &quot;FirstJavaApp&quot; yazalım ve enter&#39;a basalım. Karşımıza çıkacak ekran şu şekildedir:

![](RackMultipart20201124-4-tyjch_html_60341044fb10c327.jpg)

Sağda bulunan pencere bir metin editörüdür. Burada yeni oluşturduğumuz Java sınıfını görüyoruz. Bu pencereyi kullanarak kodlarımızı istediğimiz gibi düzenleyebiliriz. Şimdi sağdaki pencerede bulunan bütün metni silelim ve aşağıdaki metni kopyalayarak yapıştıralım:

![](RackMultipart20201124-4-tyjch_html_54c2b3149ad25cc.gif)

````java 
/\*\*

- Java ile yazdığımız ilkprogram.
- FirstJavaApp.java isimli dosya buşekildedir.

\*/

class FirstJavaApp

{

public static void main(String[] args)

{

System.out.println(&quot;Hello, World!&quot;);

}

}
````
Sonuçta ekranımız şu şekilde gözükmelidir:

![](RackMultipart20201124-4-tyjch_html_2e4ec58d045d100c.jpg)

Görüldüğü üzere 5. ve 8. satırlarda üçgen şeklinde yeşil butonlar belirdi. Bu butonlardan herhangi birine tıklayalım ve açılan menüden ilk seçeneği seçelim:

![](RackMultipart20201124-4-tyjch_html_db453467a1a5ed91.jpg)

Bu seçenek yazdığımız programı çalıştırmamızı sağlayacaktır. Çalıştırdıktan sonra sonuç şu şekilde olur:

![](RackMultipart20201124-4-tyjch_html_389f06d06bcda84c.jpg)

Görüldüğügibiaşağıdayenibirpencereaçıldıvebupencerede&quot;Hello,World&quot; yazdı. Şimdi programımızı daha ayrıntılıinceleyelim.

## İlk programımızda ne yaptık?

Kodu incelerseniz, ilk satırın /\*\*, 4. satırın ise \*/ karakterlerinden başka bir şey içermediğini görürsünüz. Bunlar Java&#39;da çok satırlı yorumlar yazmak için kullandığımız işaretlerdir. Yorumlar, kaynak kodun içine yazdığınız,

programın çalışmasına hiçbir şekilde etki etmeyen yazılardır. Kodunuzun üzerine yorum satırları yazarak kodunuzu açıklayabilir veya birden fazla programcınınçalıştığıbirprojedediğerprogramcılariçinnotlardüşebilirsiniz. Java derleyicisi, kodunuzu derlerken yazdığınız yorumları görmezden gelecektir. Kısacası, yorumlar yalnızca kodun içerisinde olan ve yalnızca programcı için anlam taşıyanmetinlerdir.

Eğer yazacağınız yorum tek satırdan oluşuyorsa, // ile belirtebilirsiniz. Aşağıdaki örnekte, tek ve çok satırlı yorumlar ayrı ayrı gösterilmiştir:

![](RackMultipart20201124-4-tyjch_html_44e38ab753981cd7.gif)

/\*\*

- Burası
- çoksatırlı
- biryorumdur.

\*/

// Burası tek satırlı bir yorumdur.

// Tek satırlı yorumlarınızı kodunuzla aynı satıra da yazabilirsiniz:

System.out.println(&quot;Hello, World!&quot;); // Bu yorum kodun ardından geliyor

Kodumuzu incelemeye devam edelim. 5. satırda bir Java sınıfının tanımlandığını görüyoruz. Sınıfımızın ismi FirstJavaApp olarak belirlenmiş. Sınıflarla ilgili ayrıntıya daha sonra gireceğiz.

1. ve 11. satırlarda bir metot tanımlamasının yapıldığını görüyoruz. Metotlar, bir iş yapan yapısal bölümlerdir. Burada yazdığımız metot özel bir metottur. Bumetoda **ana**** metot**(_main__method_)denir.Heruygulamanınbirgirişnoktası olması gerekir; uygulama buradan çalışmaya başlar ve devam eder. Ana metotlaruygulamamızdaçalışanilkmetottur.Anametoduntanımıherzaman aynıdır ve yukarıda yazdığımız gibidir. Diğer yandan, başka metotların daha farklı tanımlamaları olabilir. Metotlarla ilgili ayrıntıya daha sonragireceğiz.
2. satırda ise metodun içeriğini görüyoruz. Burada konsola &quot;Hello, World&quot; metnini yazdırıyoruz. &quot;System.out&quot; varsayılan konsolu belirtirken; &quot;println&quot; ise konsola metin yazdırmamızı sağlayan metodun isminibelirtir.

## Karar mekanizmalarına giriş

Şimdi bir örnek daha görelim ve karar mekanizmalarına giriş yapmış olalım. Kodumuzu tamamen silelim ve aşağıdaki metni alıp kopyalayalım:

import java.util.Random;

class FirstJavaApp

{

public static void main(String[] args)

{

Random random = new Random(); int number =random.nextInt(11);

System.out.println(&quot;Rastgele bir sayı tuttum: &quot; + number);

if (number \&lt; 5)

{

System.out.println(&quot;Sayı 5&#39;ten küçük.&quot;);

}

}

}

![](RackMultipart20201124-4-tyjch_html_91ccfa2b2dca45c0.gif)

Burada kısaca anlatmak gerekirse, bilgisayardan 0 ile 10 arasında rastgele bir sayı seçmesini istiyoruz, daha sonra bu sayıyı konsola yazdırıyoruz. Buna ek olarak, eğer sayı 5&#39;ten küçükse konsolda bunu belirtiyoruz. Programı arka arkaya birkaç kez çalıştırırsanız şuna benzer sonuçlar alırsınız:

![](RackMultipart20201124-4-tyjch_html_d322adbc5101afc5.gif)
 ![](RackMultipart20201124-4-tyjch_html_d36018cd2784e2a8.gif)

Rastgele bir sayı tuttum: 6

Rastgele bir sayı tuttum: 3

Sayı 5&#39;ten küçük.

Görüldüğügibiilkçalıştırmamızdaçıkansonuçlaikincisindekifarklıdır.Buna **if bloğu** sebep olmaktadır. Java&#39;da belli bir koşula bağlı olarak bir şey yapmak istediğimizde _if bloğunu_ kullanırız. Yukarıdaki örnekte, &quot;Sayı 5&#39;ten küçük.&quot; yazısını yalnızca sayı gerçekten 5&#39;ten küçükse yazdırıyoruz. Eğer sayı 5 veya 5&#39;ten büyükse kodumuz if bloğunagirmez.

Belli bir koşula bağlı olarak iş yapmamızı sağlayan bu tarz ifadelere, **seçim ifadeleri** (_selection statements_) denir. Seçim ifadelerini daha sonra ayrıntılı olarak inceleyeceğiz.

Şimdi başka bir karar mekanizmasına göz atalım. Kodumuzu aşağıdaki gibi değiştirelim:

class FirstJavaApp

{

public static void main(String[] args)

{

System.out.println(&quot;1&#39;den 10&#39;a kadar sayıyorum...&quot;);

for (int i = 1; i \&lt;= 10; i++)

{

System.out.println(i);

}

System.out.println(&quot;Saydım.&quot;);

}

}

![](RackMultipart20201124-4-tyjch_html_c67a0e74035d3ba2.gif)

Bu programı çalıştırdığınızda aşağıdaki çıktıyı alırsınız:

![](RackMultipart20201124-4-tyjch_html_897e414aec531231.gif)

1&#39;den 10&#39;a kadar sayıyorum...

1

2

3

4

5

6

7

8

9

10

Saydım.

Buörneğimizdebilgisayardanbirişlemidefalarcayapmasınıistedik.1&#39;den10&#39;a kadar olan sayıları konsola yazdırdık. Bu şekilde, belli bir kod bloğunu birden fazla kez çalıştırmamızı sağlayan ifadelere **döngü ifadeleri** (_iteration statements_) denir. Biz buradaki örnekte bir _for döngüsü_ kullandık. Döngü ifadelerini ileride ayrıntıylainceleyeceğiz.

# VERİ TÜRLERİ, DEĞİŞKENLER VE SABİTLER

Bu bölümde, bir programlama dilinin en temel taşlarından olan veri türlerini vedeğişkenleriöğreneceğiz.Diğerdillerinçoğundadaolduğugibi,Javabirçok veri türünü destekler. Bu veri türlerini değişken ve dizi oluştururken kullanırız.

Her şeyden önce şunu anlamalıyız ki, Java **tür kesinliği olan** (_strongly typed_) bir dildir. Bunun anlamı, her değişkenin ve her ifadenin bir türü vardır. Bu türler kesin bir şekilde tanımlanmıştır. Ayrıca, yapılan atamaların (_assignment_) hepsi, tür uyumluluğu açısından sıkı bir şekilde kontrol edilir. Tür uyumluluğuna aykırı olan herhangi bir şey kodumuzun derlenmesini engeller. Eğer kodumuzda herhangi bir tür uyumsuzluğu varsa, derleme aşamasından önce düzeltilmelidir.

**İlkel veri türleri (**_ **primitive data types** _**)**

Java&#39;da8farklıilkelveritürütanımlanmıştır.Bunlarailkeldenmesininsebebi, çok sık kullanılan basit türler olmasıdır. Şöyle diyebiliriz: bu veri türlerini kullanmadığınız bir Java programıyazmayacaksınız.

İlkel veri türlerini 4 başlık altında toplayabiliriz:

- **Tamsayı türleri (**_ **integers** _**):** 4 farklı tamsayı türü vardır: **byte** , **short** , **int** ve **long**. Bunları tamsayıları temsil etmek amacıylakullanırız.
- **Ondalıklı sayı türleri (**_ **floating point numbers** _**):** 2 farklı ondalıklı sayı türü vardır: **float** ve **double**.
- **Karakter türü:** 1 adet karakter türü vardır: **char**. Bunu kullanarak karakterleri temsil ederiz: harfler, rakamlar, noktalama işaretlerivs.
- **Mantıksal**** veri ****türü:** 1adetmantıksalveritürüvardır: **boolean**.Butürün yalnızcaikideğerivardır: **true** veya **false**.Butürükullanarakevet/hayır, var/yok, **doğru/yanlış** gibi ifadeleri temsiledebiliriz.

İlkel türler, karmaşık verileri değil, tek bir değeri temsil eder. Java nesne yönelimli bir dil olmasına rağmen, ilkel veri türleri bunun dışındadır. Nesne yönelimli bir dilde ilkel türlerin olmasının sebebi verimliliktir. Eğer ilkel veri türleri olmasaydı, bunun yerine kullanacağımız nesneler verimliliği düşürecekti. Bu türlere çok fazla ihtiyaç duyacağımız için bunlar ilkel olarak dile dahil edilmiştir.

İlkel veri türleri kesin bir şekilde tanımlanmıştır:

- Hafızada kaplayacağı alanın büyüklüğübelirlidir.
- Alabileceği değerler belli bir aralıkla sınırlandırılmıştır. Şimdi ilkel türlerin hepsini ayrı ayrıinceleyelim.

## Tamsayılar(integers)

4 farklı tamsayı türü vardır. Bunların hepsi işaretli (_signed_) türdür, yani hem pozitif (0&#39;dan büyük) hem de negatif (0&#39;dan küçük) değer alabilir. Bazı başka dillerde (örneğin C#) pozitif ve negatif tamsayılar için farklı veri türleri tanımlanmıştır; fakat Java&#39;nın tasarımcıları bunu gereksiz bulmuştur.

### byte

En küçük tamsayı türü byte&#39;tır. 8 bit&#39;ten oluşur ve adından da anlaşılacağı üzerede hafızada **1 byte** alan kaplar. **-128&#39;den 127&#39;ye kadar olan** değerleri tutabilir. Bu türü bir dosyanın içeriğini veya ağ üzerinden gelen bir veriyi okurken sıklıkla kullanırız.

### short

16 bit&#39;ten oluşur ve hafızada **2 byte** alan kaplar. **–32,768&#39;den 32,767&#39;ye kadar**

**olan** değerleri tutabilir. Muhtemelen Java&#39;da en az kullanılan veri türü budur.

### int

32 bit&#39;ten oluşur ve hafızada **4 byte** alan kaplar. **–2,147,483,648&#39;den 2,147,483,647&#39;ye kadar olan** değerleri tutabilir. Muhtemelen Java&#39;da en çok kullanılan veri türü budur. Diğerlerine göre hafızada daha çok yer kapladığından, birçok durumda int yerine byte veya short kullanmanın daha yararlı olacağını düşünebilirsiniz; fakat bu yanlış bir varsayım olur. Birçok durumda,Javaderleyicisibyteveshortdeğerleriint&#39;edönüştürür.Bunedenle, eğer bir tamsayıya ihtiyaç duyuyorsanız, int en iyi terciholacaktır.

### long

64 bit&#39;ten oluşur ve hafızada **8 byte** alan kaplar. int veri türünün yetmediği durumlar için üretilmiştir. Bu veri türünün değer aralığı çok geniştir. Alabileceği değerler **-9,223,372,036,854,775,807 ile 9,223,372,036,854,775,808**

arasındadır.

**Ondalıklı sayı türleri (**_ **floating point numbers** _**)**

Ondalıklı sayı türleri, matematikte reel sayılar olarak tanımlanan ondalıklı değerleritemsileder.2farklıondalıklısayıtürüvardırvearalarındakitekfark hafızada kapladıkları alan ve değeraralığıdır.

### float

32bit&#39;tenoluşurvehafızada **4**** byte **alankaplar.** Tek ****kesinlikli** (_single__precision_)

değerleri temsil eder.

### double

64 bit&#39;ten oluşur ve hafızada **8 byte** alan kaplar. Çift kesinlikli (_double precision_) değerleri temsil eder. Bunun anlamı şudur: virgülden sonra tutabileceği rakam sayısı float türüne göre daha fazladır. Çoğu durumda float ihtiyacınızı karşılayacak olsa da özellikle kesinlik gerektiren matematiksel işlemlerde double daha çok işe yarayacaktır.

## Karakter türü

Karakterleri temsil eden veri türü **char**&#39;dır. Şunu öncelikle belirtmeliyiz ki, Java **Unicode** karaktersetinikullanır.Java&#39;nınyazıldığıdönemdeUnicodeiçin en az 16 bit gerekiyordu. Bu nedenle, char veri türü hafızada **2 byte** alan kaplar. **0&#39;dan 65,536&#39;ya kadar olan** değerleri tutabilir. Negatif karakteryoktur.

Anlamamızgerekenönemlibirnoktavardır.Buveritürününikiyönüvardır. Asılamacıkarakterleritemsiletmektir.Karakterleritemsiletmekiçinevrensel bazıstandartlargeliştirilmiştir.Java&#39;nınUnicodestandardınıkullandığınıdaha önce söylemiştik. Bu yönteme göre her bir karaktere karşılık bir sayı değeri atanır. Bu nedenle diyebiliriz ki, char aynı zamanda sayısal bir veri türüdür. Butürükarakterleritemsiletmekiçinkullanabileceğinizgibi,chardeğişkenler üzerinde matematiksel işlemler de yapabilirsiniz. Hatta daha sonra göreceğimiz gibi, char ve int türleri arasında dönüşüm deyapabilirsiniz.

## Mantıksal veri türü

Java&#39;da mantıksal değerleri temsil etmek amacıyla **boolean** türü vardır. Bu türdeki değişkenlerin iki değeri olabilir: **true** veya **false**. Daha sonra göreceğimizilişkiseloperatörlerindöndürdüğüveritürüboolean&#39;dır.Ayrıcaif ve for gibi karar mekanizmalarında da boolean türüne ihtiyaçduyarız.

Bazı dillerde boolean türler sayısal olarak temsil edilir. Bu tip durumlarda 0 false değerini temsil ederken, diğer bütün sayılar true belirtir. Java&#39;da ise durum böyle değildir. Java&#39;nın geliştiricileri boolean türünü tam olarak

mantıksal bir veri türü olarak tasarlamışlardır. Dolayısıyla boolean ile sayısal türler arasında dönüşüm yapılamaz.

## DEĞİŞKENLER VE SABİTLER (Variables and constants)

Hafızada veri tutmak için değişkenleri kullanırız. Değişkenlerle ilgili 5 önemli kavram vardır:

- **Tür:** Java&#39;nın tür kesinliği olan bir dil olduğunu söylemiştik. Bunun bir sonucu olarak, her değişkenin bir türü vardır. Bu tür değişken tanımlarken belirtilir ve bir daha değiştirilemez. Türünü belirtmeden değişkentanımlayamazsınız.
- **İsim:** Her değişkene bir isim verilir. Bu ismi değişkene değer atamak ve gerekirsebudeğerideğiştirmekiçinkullanırız.Değişkeneverilecekisim tekbirkelimedenoluşmalıdır(boşlukiçermemelidir).Değişkenisimleri harflerden, rakamlardan ve alt çizgi (\_) karakterinden oluşabilir. Değişken isimleri rakam ilebaşlayamaz.
- **Değer:** Değişkenler hafızada değer tutmak için kullanılır. Değişkene tanımlandığı anda bir değer verebileceğiniz gibi, daha sonra da değer atayabilirsiniz. Değişkenin değeri istenilen bir anda değiştirilebilir. Bu değerler değişkenin türüne göre sınırlandırılmıştır. Değişkene vereceğimizdeğertürüyleuyumluolmalıdır.AksihaldeJavaderleyicisi kodumuzun derlenmesine izin vermez. Örneğin, boolean bir değişkene tamsayı değeratayamazsınız.
- **Kapsam (Scope):** Her değişkenin bir kapsamı vardır. Bu kapsam, değişkenin program içerisinde geçerli olduğu alanı belirler. Bir değişkene kapsamı dışındaerişemezsiniz.
- **Yaşam süresi (Lifetime):** Sürekli değişken oluşturursak bir süre sonra bilgisayarın hafızası tükenebilir. Bunun için her programlama dilinde bir **çöp toplama** (_garbage collection_) mekanizması vardır. Java&#39;da her değişkeninbirömrüvardırvegerektiğiandahafızadansilinirler.Yaşam süresi çoğu zaman değişkenin kapsamıylabağlantılıdır.

## Değişkentanımlamak

Java&#39;da bir değişken, sırasıyla önce türü ve sonra ismi belirterek tanımlanır.

**int** number;

// number isminde, int türünde bir değişken tanımlanmış

![](RackMultipart20201124-4-tyjch_html_dc24dbd6fb370bf0.gif)

Aynı satırda birden fazla değişken tanımlayabilirsiniz, fakat türleri aynı olmak zorundadır:

![](RackMultipart20201124-4-tyjch_html_dc24dbd6fb370bf0.gif)

**double** a, b, c;

// double türünde 3 ayrı değişken tanımlanmış

Değişkeni tanımladıktan sonra, atama operatörü (=) kullanarak değişkene bir değer verebilirsiniz:

![](RackMultipart20201124-4-tyjch_html_18926095f23df78e.gif)

Eğerbirdeğişkenehemendeğeratayacaksanız,bunuikisatırdayapmakyerine tek bir satırdahalledebilirsiniz:

![](RackMultipart20201124-4-tyjch_html_400da424fed8e4c3.gif)

**double** pi = 3.14;

Aynı satırda birden fazla değişken tanımlıyorsanız bunlara şu şekilde değer

verebilirsiniz:

![](RackMultipart20201124-4-tyjch_html_a7acb28b12a737e1.gif)

**int** year = 2020, age = 25;

// Aynı satırda 2 farklı değişken tanımlanmış ve ikisine de değer verilmiş

Değişkene verilen değer herhangi bir anda değiştirilebilir:

![](RackMultipart20201124-4-tyjch_html_9e12923086754ae8.gif)

Bir değişkeni tanımladığınız zaman, aynı kapsam içinde aynı isimde başka bir değişken tanımlayamazsınız:

![](RackMultipart20201124-4-tyjch_html_417c39bead256373.gif)

**boolean** a=true; // a isminde bir değişkentanımlanmış

**boolean** a=false; // Bu satır hataya neden olur, a değişkeni zatenvar

Buraya kadar olan örneklerimizde değişkene hep kesin bir değer atadık; fakat Java&#39;da bir metodun sonucunu da değişkene atayabilirsiniz:

**double** result = Math.sqrt(16.0);

// Karekök metodu çağrılıyor ve sonucu bir değişkene atanıyor

// Bu işlem sonucunda result değişkeninin değeri 4.0 olur

![](RackMultipart20201124-4-tyjch_html_12bf40e1c03daae8.gif)

## Değişkenlerin kapsamı ve yaşam süresi

Değişkenlerin kapsamını ve yaşam süresini anlamak için önce **kod bloğu**

(_block_) kavramını incelemeliyiz.

Java&#39;da kodlarımızı satırlar halinde yazarız. Her bir satırın sonuna noktalı virgül işareti konur. Bunu satırın bittiğini belirtmek için yaparız. Birden fazla satırdan oluşan kodlarımızı ise bir blok içine alırız. Bunun için küme parantezleri ( **{** ve **}** ) kullanılır. Her sınıfın ve her metodun kendine ait kod blokları vardır. Bunun yanında, bazı özel kod blokları da bulunur; hatta kendimiz de kod blokları açabiliriz. Aşağıdaki örneği inceleyelim:

![](RackMultipart20201124-4-tyjch_html_3a03dbc4372bfbf2.gif)

class CodeBlocksDemo

{ // sınıfın kod bloğu başlıyor

public static void main(String[] args)

{ // main metodunun kod bloğu başlıyor

int year = 2020; if (year \&gt;= 2000)

{ // if bloğu başlıyor

System.out.println(&quot;Milenyum çağındayız.&quot;);

} // if bloğu bitiyor

for (int i = 0; i \&lt; 10; i++)

{ // for bloğu başlıyor

System.out.println(i);

} // for bloğu bitiyor

{ // kod bloğu başlıyor

System.out.println(&quot;Burası isimsiz bir kod bloğudur.&quot;);

} // kod bloğu bitiyor

} // main metodunun kod bloğu bitiyor

} // sınıfın kod bloğu bitiyor

Kısaca belirtmek gerekirse, bir değişkenin kapsamı tanımlandığı kod bloğuyla sınırlıdır. Bu blok içinde değişkene erişebilirsiniz. Kod bloğunun dışına çıktığınızda ise artık değişkeni kullanamazsınız. Yukarıdaki örnekteki kod bloklarını aynen bırakalım ve aşağıdaki örneği inceleyelim:

![](RackMultipart20201124-4-tyjch_html_5e6a3ee477c5d019.gif)

class CodeBlocksDemo

{

int a = 1;

public static void main(String[] args)

{

// Burada a değişkenine erişimimiz var

int b = 2;

// Burada a ve b değişkenlerine erişimimiz var

if (b \&gt;= 2000)

{

int c = 3;

// Burada a, b ve c değişkenlerine erişimimiz var

}

// c&#39;nin kapsamı bitti, artık erişemeyiz

for (int i = 0; i \&lt; 10; i++)

{

int d = 4;

// Burada a, b ve d değişkenlerine erişimimiz var

}

// d&#39;nin kapsamı bitti, artık erişemeyiz

{

int e = 5;

// Burada a, b ve e değişkenlerine erişimimiz var

}

// e&#39;nin kapsamı bitti, artık erişemeyiz

}

// b&#39;nin kapsamı bitti, burada yalnızca a değişkenine erişebiliriz

}

Yukarıdaki örnekten de anlaşılacağı üzere, bir kod bloğunun içinde tanımlanan değişkene dışarıdaki bir bloktan erişilemez. Diğer yandan, bunun tamtersigeçerlideğildir.Birkodbloğundatanımlanandeğişkeneiçeridekibir bloktan daerişilebilir.

İlkel veri türüne sahip değişkenler kapsam dışına çıkınca otomatik olarak hafızadan da silinirler. Diğer bir deyişle, ilkel veri türüne sahip değişkenlerin yaşam süresi kapsamlarıyla aynıdır. Fakat bu diğer veri türündeki değişkenler için geçerli değildir. İlkel olmayan veri türündeki değişkenler kapsam dışına çıksa da hafızada kalmaya devam edebilir. Bunu daha sonra ayrıntıyla anlatacağımız için şimdilik kısaca geçiyoruz.

## Sabitler (constants)

Değerideğiştirilemeyendeğişkenlere **sabit** (_constant_)denir.Bazen,yazdığımız programlarda bazı değişkenlerin bir kere tanımlanmasını ve daha sonra değerlerinin değiştirilmemesini isteriz. Bu gibi durumlarda sabit tanımlarız. Sabitlerin değişkenlerden iki temel farkıvardır:

- Bir değişkeni sabit yapmak istiyorsanız **final** belirteci ile

tanımlamalısınız.

- Sabitlerin değeri sonradan değiştirilemediği için tanımladığınız anda değeratamalısınız.

![](RackMultipart20201124-4-tyjch_html_21de35bf6d7beef9.gif)

boolean someVariable = false;

// Bir değişken tanımlanmış. Değeri daha sonra değiştirilebilir.

**final** double pi = 3.14;

// Bir sabit tanımlanmış. Değeri daha sonra değiştirilemez.

Sabitlerle ilgili hataya neden olabilecek aşağıdaki örnekleri inceleyelim:

![](RackMultipart20201124-4-tyjch_html_9a8515f6a200bc95.gif)
 ![](RackMultipart20201124-4-tyjch_html_79a40a2b9f0e8032.gif)

## Tür dönüşümleri (typecasting)

Türler arasında kurallara aykırı olmadığı sürece dönüşüm yapılabilir. Tür dönüşümüne, türleri birbirinden farklı değişkenler arasında atama yaparken ihtiyaç duyulur. Örneğin, int türündeki bir değişkenin değerini long türündeki bir değişkene aktarmak istiyorsanız. Tür dönüşümleri ikiye ayrılır.

## Dolaylı tür dönüşümü (Implicit type casting)

İlkel veri türlerini anlatırken, her bir türün kendine ait bir değer aralığı olduğundan söz etmiştik. Eğer değer aralığı düşük bir türden yüksek bir türe dönüşüm yapılıyorsa burada dolaylı tür dönüşümü söz konusudur.

Örneğin,inttüründebirdeğişkeninizvar.Bunundeğerinilongtüründekibir değişkene aktarmak istiyorsunuz. Bildiğiniz gibi, int türünün alabileceği bütündeğerlerlongtürünündeğeraralığındazatentanımlıdır.Dolayısıylabu dönüşümsorunsuzbirşekildegerçekleşecektir.Aşağıdakiörneğiinceleyelim:

![](RackMultipart20201124-4-tyjch_html_699e98bcb483a2cc.gif)

int a = 5; long b = a;

Yukarıdaki örnekte ilk önce int türünde bir değişken tanımlanıyor ve bu değişken üzerinden long türündeki bir değişkene atama yapılıyor. Burada gördüğünüz gibi, atama operatörü (=) kullanarak değişkenin ismini yazmanız yeterlidir.İlkbakıştaburadabirtüruyumsuzluğuvarmışgibigözükebilir,int türünde bir değeri long türüne aktarmaya çalışıyorsunuz. Fakat burada arka planda bir tür dönüşümü yapılmaktadır. Bizim bu dönüşüm için ekstra kod yazmamız gerekmediğinden, bu tarz dönüşümlere **dolaylı tür dönüşümü** denir.

Dolaylı tür dönüşümü yalnızca daha az kapsayıcı bir türden daha çok kapsayıcıbirtüredoğruyapılabilir.Bunedenlebutür dönüşümler **genişleyen dönüşüm** (_widening__conversion_)olarakdaadlandırılır.

## Doğrudan tür dönüşümü (Explicit type casting)

Dolaylıtürdönüşümününaksine,dahakapsayıcıbirtürdendahaazkapsayıcı bir türe doğru yapılan dönüşümlere **doğrudan tür dönüşümü** denir.Doğrudan denmesinin sebebi, yapılacak dönüşümün yönünü belirtmemiz gerektiğindendir.

Bunu gösterebilmek için yukarıdaki örneğin tam tersini inceleyelim:

![](RackMultipart20201124-4-tyjch_html_699e98bcb483a2cc.gif)

long a = 5;

int b = (int) a;

Görüldüğügibi,doğrudantürdönüşümüyaparken,dönüştürülecektürünadı değişkenin adından önce parantez içinde yazılır. Bunu yaparak Java&#39;ya, türü dönüştüreceği yönü belirtmişoluruz.

Doğrudan tür dönüşümleri, **daralan dönüşüm** (_narrowing conversion_) olarak

da adlandırılır.

## Operatörler

Kaynakkodiçerisindebazıözelişlevleriolankarakterlere **operatör** denir.Kod yazarken, bazı basit işlemler yapma ihtiyacı duyarız. Örneğin, tamsayı türündeki iki değişkenin değerlerini toplamak isteriz. Bunu toplama operatörüyle (+) yaparız. Java&#39;da bunun gibi birçok operatör vardır. Şimdi bunları gruplar halindeinceleyelim.

## Aritmetikoperatörler

Sayısal türler üzerinde aritmetik işlemler yapmamızı sağlayan operatörlere aritmetik operatörler denir. Aritmetik operatörleri önce tablo halinde görelim, sonra ayrıntılı inceleyelim:

| **+** | Toplama |
| --- | --- |
| **-** | Çıkarma |
| **\*** | Çarpma |
| **/** | Bölme |
| **%** | Mod alma (Bölümden kalanı bulma) |
| **++** | 1 artırma (_increment_) |
| **+=** | Artırma ve atama |
| **--** | 1 azaltma(_decrement_) |
| **-=** | Azaltma ve atama |
| **\*=** | Çarpma ve atama |
| **/=** | Bölme ve atama |
| **%=** | Mod alma ve atama |

Yukarıda listelenen operatörleri sayısal türler ve char üzerinde kullanabilirsiniz; fakat boolean üzerinde kullanamazsınız.

## Dört işlemoperatörleri

Toplama, çıkarma, çarpma ve bölme operatörleri, sayısal türler üzerinde dört işlem yapmamızı sağlar.

![](RackMultipart20201124-4-tyjch_html_9b920b9fb3b3a82b.gif)

Burada dikkat etmemiz gereken nokta bölme işlemidir. Matematikte hiçbir sayı sıfıra bölünemeyeceğinden, bu tarz işlemler _ArithmeticException_hatası fırlatır.

![](RackMultipart20201124-4-tyjch_html_8299996686487995.gif)

int a = 0;

int b = 7 / a; // Bu satır hataya neden olur: sıfıra bölme

## Mod Alma (%)Operatörü

![](RackMultipart20201124-4-tyjch_html_a264679913335314.gif) Bir bölme işlemindeki kalanı bulmak için % operatörünü kullanırız:

| int | a | = | 10 | % | 2; | // | a&#39;nın | değeri | 0 | olur |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| int | b | = | 10 | % | 3; | // | b&#39;nin | değeri | 1 | olur |
| int | c | = | 10 | % | 4; | // | c&#39;nin | değeri | 2 | olur |
| int | d | = | 10 | % | 6; | // | d&#39;nin | değeri | 4 | olur |

## Bileşik aritmetik operatörler (Compound arithmetic operators)

Bazen bir değişkenin üzerinde bir aritmetik işlem yapmak ve bu işlemin sonucunu yine o değişkene atamak isteriz. Bunu şu şekilde yapmak mümkündür:

![](RackMultipart20201124-4-tyjch_html_9d411368f6df6fa2.gif)

Java bu gibi işlemleri daha kısa kodla yazmak için bileşik aritmetik operatörleri destekler. Bu sayede, yukarıdaki işlemi aşağıdaki şekilde yapabiliriz:

![](RackMultipart20201124-4-tyjch_html_313fc1d0d2fca894.gif)

Yukarıdaki örneği incelersek, += operatörü a değişkeninin değerini 10 ile toplar ve daha sonra sonucu yine a değişkenine atar.

Bileşik operatörleri 1 artırma (++) ve 1 azaltma (--) operatörleri haricindeki bütün aritmetik operatörlerle kullanabilirsiniz. Aşağıdaki örnekleri inceleyelim:

| int a = a += 3; | 6; | //// | a&#39;nın a&#39;nın | değeri değeri | 6&#39;dır9 olur |
| --- | --- | --- | --- | --- | --- |
| int b =b -= 3; | 6; | //// | b&#39;nin b&#39;nin | değeri değeri | 6&#39;dır3 olur |
| int c =c \*= 3; | 6; | //// | c&#39;nin c&#39;nin | değeri değeri | 6&#39;dır18 olur |
| int d =d /= 3; | 6; | //// | d&#39;nin d&#39;nin | değeri değeri | 6&#39;dır2 olur |
| int e =e %= 3; | 7; | //// | e&#39;nin e&#39;nin | değeri değeri | 7&#39;dir1 olur (7&#39;nin 3&#39;le bölümünden kalan 1&#39;dir) |

## 1 artırma ve 1 azaltma operatörleri (Increment and decrement

**operators)**

Çoğuzamanyazdığımızprogramlardabirtamsayınındeğerini1artırmakveya 1 azaltmak isteriz. Bunu şu şekildeyapabiliriz:

![](RackMultipart20201124-4-tyjch_html_df44c1ce8d1fa093.gif)

1 artırma ve 1 azaltma işlemleri çok sık ihtiyaç duyulan işlemlerolduğundan, Java&#39;nın tasarımcıları bunun için özel operatörler geliştirmiştir. Bu operatörleri kullanarak yukarıdaki işlemi daha kısa bir şekilde aşağıdaki gibi yapabiliriz:

![](RackMultipart20201124-4-tyjch_html_1baee38195b28a68.gif)

Bu iki operatörle ilgili özel bir durum vardır. Bu operatörlerinin yönü işlem önceliği bakımından önem arz eder. Bunu açıklayabilmek için aşağıdaki örneği inceleyelim:

int a = 10; System.out.println(a++);

//a&#39;nındeğeriönceeldeedildivekonsolayazdırıldı,sonra1artırıldı,

// yani konsolda 10 yazar; fakat a&#39;nın değeri 11 olmuştur

System.out.println(a);

// Şimdi a&#39;nın değeri konsola yazdırıldığında konsolda 11 görürüz

![](RackMultipart20201124-4-tyjch_html_2ab4cb94189ef975.gif)

1. artırma ve 1 azaltma operatörleri aynı zamanda değer döndüren operatörlerdir. Değişkenden sonra yazıldıklarında, önce değişkenin o anki değerini döndürürler, sonra işlemi gerçekleştirip sonucu değişkene atarlar. Eğer değer döndürme işleminin en son yapılmasını istiyorsanız, bu operatörleri değişkenin önüneyazmalısınız:

![](RackMultipart20201124-4-tyjch_html_478b21e8110b845d.gif)

int a = 10; System.out.println(++a);

// a&#39;nın değeri önce 1 artırıldı, sonra konsola yazdırıldı

// yani konsolda 11 yazar

## Bit seviyesi operatörleri (Bitwise operators)

Bilgisayardaherveribit&#39;lerleifadeedilir.Birbitindeğeri0veya1&#39;denoluşur. Hafızanın en küçük birimi ise byte&#39;tır ve 1 byte 8 bit&#39;ten oluşur. Hafızada tuttuğumuz veriler üzerinde bit seviyesinde işlem yapmamızı sağlayan operatörlere **bit seviyesi operatörleri** denir. Bu operatörleri kısaca aşağıdaki tablodaninceleyelim:

| **~** | Tersini alma |
| --- | --- |
| **&amp;** | Ve işlemi |
| **|** | Veya işlemi |
| **^** | XOR işlemi |
| **\&gt;\&gt;** | 1 bit sağa kaydırma |
| **\&gt;\&gt;\&gt;** | 0 ile doldurarak 1 bit sağa kaydırma |
| **\&lt;\&lt;** | 1 bit sola kaydırma |
| **&amp;=** | Ve işlemi ve atama |
| **|=** | Veya işlemi ve atama |
| **^=** | XOR işlemi ve atama |
| **\&gt;\&gt;=** | 1 bit sağa kaydırma ve atama |
| **\&gt;\&gt;\&gt;=** | 0 ile doldurarak 1 bit sağa kaydırma ve atama |
| **\&lt;\&lt;=** | 1 bit sola kaydırma ve atama |

## Boolean mantıksaloperatörleri

Mantıksal operatörler, boolean değerler üzerinde ve, veya gibi mantıksal işlemler yapmamızı sağlar. Bu operatörleri kısaca aşağıdaki tablodan inceleyelim:

| **&amp;** | Mantıksal ve işlemi |
| --- | --- |
| **|** | Mantıksal veya işlemi |
| **^** | Mantıksal XOR işlemi |
| **&amp;&amp;** | Kısa devre ve işlemi |
| **||** | Kısa devre veya işlemi |
| **!** | Mantıksal tersini alma |
| **&amp;=** | Mantıksal ve işlemi ve atama |
| **|=** | Mantıksal veya işlemi ve atama |
| **^=** | Mantıksal XOR işlemi ve atama |
| **==** | Eşitlik kontrolü |
| **!=** | Eşitsizlik kontrolü |
| **?:** | Üçlü if-then-else |

Bu tabloda listelenen operatörlerin 2 tanesi hariç hepsi **ikili** (_binary_) operatördür, yani iki değişken üzerinde işlem yapar. Tersini alma ( **!** ) **tekli** (_unary_), üçlü if-then-else ( **?:** ) ise **üçlü** (_ternary_) operatördür.

Şimdi ikili operatörlerin işlevlerini kısaca inceleyelim:

- **Ve operatörü:** İki değişkenin değeri de **true** ise sonuç **true** , aksi halde **false** olur.
- **Veya operatörü:** Değişkenlerden birinin değeri **true** ise sonuç **true** , aksi halde **false** olur.
- **XOR operatörü:** Değişkenlerin değeri birbirinden farklı ise sonuç **true** , aksi halde **false** olur.
- **Kısa devre ve operatörü:** Ve operatörü ile aynı işi yapar; fakat ilk değişken **false** ise ikinci ifadeye hiçbakılmaz.
- **Kısa devre veya operatörü:** Veya operatörü ile aynı işi yapar; fakat ilk değişken **true** ise ikinci ifadeye hiçbakılmaz.
- **Eşitlik operatörü:** İki değişken (nesne) birbirine eşitse **true** , aksi halde **false** döndürür.
- **Eşitsizlik operatörü:** İki değişken (nesne) birbirine eşitse **false** , aksi halde **true** döndürür.

Bu operatörlerle ilgili aşağıdaki tabloları inceleyelim:

| **A** | **B** | **A &amp; B** |
| --- | --- | --- |
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

| **A** | **B** | **A | B** |
| --- | --- | --- |
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

| **A** | **B** | **A ^ B** |
| --- | --- | --- |
| true | true | false |
| true | false | true |
| false | true | true |
| false | false | false |

| **A** | **B** | **A == B** |
| --- | --- | --- |
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | true |

| **A** | **B** | **A != B** |
| --- | --- | --- |
| true | true | false |
| true | false | true |
| false | true | true |
| false | false | false |

### Tersini alma (!) operatörü

Değişkenin değeri true ise false, false ise true döndürür.

![](RackMultipart20201124-4-tyjch_html_478b21e8110b845d.gif)

boolean b = true; boolean c = !b;

System.out.println(c); // Konsolafalseyazar System.out.println(!c); // Konsola trueyazar

### Üçlü if-then-elseoperatörü

Üçlü if-then-else operatörü 2 karakterden oluşur ve 3 değer üzerinde işlem yapar. Soru işaretinden önce boolean bir ifade yazılır. Eğer bu ifade **true** ise soru işareti ile iki noktanın arasındaki değeri, aksi halde iki noktadan sonraki değeri döndürür. Bu operatörün yapısı şu şekildedir:

[boolean ifade] **?** [1. değişken] **:** [2. değişken]

Daha iyi anlamak için aşağıdaki örneği inceleyelim:

![](RackMultipart20201124-4-tyjch_html_1504295b415ca982.gif)

### İlişkisel (relational)operatörler

İki değişkenin birbirine göre ilişkisini kontrol eden operatörlere ilişkisel operatörler denir. Bu operatörler aşağıda listelenmiştir:

| **==** | Eşitlik kontrolü |
| --- | --- |
| **!=** | Eşitsizlik kontrolü |
| **\&lt;** | Küçüktür kontrolü |
| **\&gt;** | Büyüktür kontrolü |
| **\&lt;=** | Küçük eşittir kontrolü |
| **\&gt;=** | Büyük eşittir kontrolü |

Bu operatörlerle ilgili aşağıdaki örnekleri inceleyelim:

![](RackMultipart20201124-4-tyjch_html_4ab1626e54c78df.gif)

## Operatör önceliği

Her operatörün bir öncelik sıralaması vardır. Matematikte çarpma ve bölmenin toplama ve çıkarmaya göre daha öncelikli olması gibi, bazı operatörler diğerlerinden daha öncelikli olarak işletilir. Java ifadeleri yazarken bu öncelik sırasına dikkat etmek gerekir. Aşağıdaki tabloda Java operatörlerinin en yüksekten en düşüğe doğru öncelik sıralamasını inceleyebilirsiniz (aynı satırda yazan operatörlerin öncelik sıralaması birbirine eşittir):

| **En yüksek** | ++ (Değişkenden sonrayazılan)
- **--** (Değişkenden sonrayazılan)
 |
| --- | --- |
|
 | ++ (Değişkenden önceyazılan)
- **--** (Değişkenden önceyazılan)
- ~ (Bit seviyesinde tersinialma)
- ! (Mantıksal tersinialma)
+ (Pozitif sayıbelirteci)
- - (Negatif sayıbelirteci)
- Türdönüşümü
 |
|
 |
- \* (Çarpmaişlemi)
- / (Bölmeişlemi)
- % (Modalma)
 |
|
 | + (Toplamaişlemi)
- - (Çıkarmaişlemi)
 |
|
 |
- \&gt;\&gt; (1 bit sağakaydırma)
- \&gt;\&gt;\&gt; (0 ile doldurarak 1 bit sağakaydırma)
- \&lt;\&lt; (1 bit solakaydırma)
 |
|
 |
- \&gt;(Büyüktür)
- \&gt;= (Büyükeşittir)
- \&lt;(Küçüktür)
- \&lt;= (Küçükeşittir)
- instanceof
 |
|
 | == (Eşitlikkontrolü)
- != (Eşitsizlikkontrolü)
 |
|
 | &amp; (Ve işlemi) |
|
 | ^ (XOR işlemi) |
|
 | | (Veya işlemi) |

|
 | &amp;&amp; (Kısa devre ve işlemi) |
| --- | --- |
|
 | || (Kısa devre veya işlemi) |
|
 | ?: (Üçlü if-then-else) |
|
 | -\&gt; (Lambda operatörü) |
| **En düşük** | = (Atamaoperatörü)
- Bileşik atama operatörleri (+=, %=, &amp;=vs.)
 |

### Parantez kullanmak

Parantezkullanarakoperatörönceliğinideğiştirebilirsiniz.Örneğin,şuifadeyi göz önünealalım:

a \&gt;\&gt; b + 3

Toplama operatörünün önceliği sağa kaydırmaya operatörüne göre yüksel olduğu için b&#39;nin değerine 3 eklenir, sonra a&#39;nın bitleri sağa kaydırılır. Eğer sağa kaydırma işleminin toplamadan önce yapılmasını istiyorsanız ifadeyi şu şekilde yeniden yazmalısınız:

(a \&gt;\&gt; b) + 3

İşlem önceliğini değiştirmek için parantez kullanmanın programın performansına olumsuz bir etkisi yoktur. Bu nedenle, gereksiz olsa bile, yazılanifadelerinokunurluğunuartırmakamacıylaparantezkullanabilirsiniz.

# DİZİLER(ARRAYS)

Değişkenler hafızada tek bir değer tutmamızı sağlar. Fakat bazı durumlarda, birden çok veriyi bir arada bulundurmak isteriz. Örneğin, bir sınıfta okuyan 20 öğrenci olsun. Bu 20 öğrenci için hafızada ayrı ayrı 20 tane değişken oluşturmak yerine, tek bir değişken kullanarak 20 öğrencinin koleksiyonunu tutmak isteyebiliriz.

Bugibidurumlardadizilerikullanırız.Dizi,aynıtürdenbirdenfazladeğişkeni tutmamızı sağlayan hafıza birimidir. Kısaca, dizileri aynı türden elemanları gruplamak için kullanırız. Dizi oluşturduktan sonra dizinin içerisindeki elemanlara indeks numarasıyla ulaşır ve değiştiririz. Ayrıca, çokboyutlu

diziler oluşturmak da mümkündür. Tek boyutlu dizi kullanabileceğimizgibi

1. veya 3 boyutlu diziler de oluşturabiliriz. 2 boyutlu dizilere matrisdenir.

## Tek boyutlu diziler

Tekboyutludizilerbasitçe,aynıtürdenelemanlarınlistesinitutanbiryapıdır. Dizi oluşturmak için, önce dizide yer alacak elemanların türü belirtilir,sonra

diziye bir isim verilir ve isimden sonra köşeli parantezler ( **[** ve **]** ) konulur.

![](RackMultipart20201124-4-tyjch_html_ab0ede2a1c3ddb77.gif)

intnumbers[]; // Burada numbers isminde bir dizioluşturuluyor

Köşeli parantezleri değişken isminden sonra koymak yerine, tür isminden sonra da yazabilirsiniz. Örneğin aşağıdaki kodun yukarıdakiyle bir farkı yoktur:

![](RackMultipart20201124-4-tyjch_html_ab0ede2a1c3ddb77.gif)

int[]numbers; // Burada numbers isminde bir dizioluşturuluyor

Diziler **new** deyimiyle oluşturulur. Dizi oluştururken kapasite değeri vermek zorunludur. Kapasite değeri, dizinin kaç eleman barındıracağını belirtir. Aşağıdaki örnekte, 5 adet int değişkeni tutabilecek bir dizi oluşturuluyor:

![](RackMultipart20201124-4-tyjch_html_ab0ede2a1c3ddb77.gif)

int[] numbers = new int[5];

Bu ifade çalıştırıldığında, hafızada 5 adet int değişken için yetecek kadar alan ayrılır. Bu alanı düzenleyebilmek için indeks numaraları kullanırız. **Dizi indeksleri 0&#39;dan başlar** ve kapasitenin 1 eksiğine kadar gider. Örneğin, yukarıdaki dizinin indeksleri 0&#39;dan 4&#39;e kadardır. Şimdi bu dizinin ilk elemanını verelim:

![](RackMultipart20201124-4-tyjch_html_ab0ede2a1c3ddb77.gif)

numbers[0]=10; // Dizinin ilk elemanı 5 olarakayarlandı.

Dizinin diğer elemanlarını şu şekilde verelim:

![](RackMultipart20201124-4-tyjch_html_21de35bf6d7beef9.gif)

numbers[1] = 15;

numbers[2] = 20;

numbers[3] = 25;

numbers[4] = 30;

Bu kodlar çalıştırıldığında dizinin elemanları sırasıyla aşağıdaki gibi olur:

{ 10, 15, 20, 25, 30 }

Aşağıdaki kodu çalıştırdığınızda konsola 25 yazar:

![](RackMultipart20201124-4-tyjch_html_7ff58d8aa43a7027.gif)

System.out.println(numbers[3]);

Dizilerleuğraşırkenindeksnumaralarınaçokdikkatetmelisiniz.Eğerdizinin aralığıdışındabirindekseerişmeyeçalışırsanız, **IndexOutOfBoundsException** hatası meydanagelir.

![](RackMultipart20201124-4-tyjch_html_7ff58d8aa43a7027.gif)

System.out.println(numbers[5]); // Hata!

Yukarıdaki satır hataya neden olur; çünkü _numbers_ dizisinin kapasitesi 5

olmasına rağmen dizinin 6. elemanına erişmeye çalışıyoruz.

Eğer dizinin içindeki elemanlar dizi oluşturulurken belliyse, diziyi oluştururken elemanları küme parantezi içinde ve virgülle birbirinden ayırarak verebiliriz:

![](RackMultipart20201124-4-tyjch_html_8299996686487995.gif)

String[]weekDays= newString[]{ &quot;Pazartesi&quot;, &quot;Salı&quot;, &quot;Çarşamba&quot;, &quot;Perşembe&quot;, &quot;Cuma&quot;, &quot;Cumartesi&quot;, &quot;Pazar&quot;};

Bu şekilde oluşturulan dizilere kapasite vermemize gerek yoktur; çünkü kapasite değeri zaten eleman sayısından bellidir. Yukarıdaki örnekde _weekDays_ dizisinin kapasitesi otomatik olarak 7 olur.

Yukarıdaki gibi dizi oluştururken _new_ deyimini kullanmaya gerek yoktur.

Yani, yukarıdaki kodu aşağıdaki gibi yazabiliriz:

![](RackMultipart20201124-4-tyjch_html_8299996686487995.gif)

String[]weekDays={&quot;Pazartesi&quot;,&quot;Salı&quot;,&quot;Çarşamba&quot;,&quot;Perşembe&quot;,&quot;Cuma&quot;,

&quot;Cumartesi&quot;, &quot;Pazar&quot; };

## Dizinin kapasitesiniöğrenmek

Her dizinin **length** adında bir özelliği bulunur. Bu özelliği kullanarak dizinin kapasitesini öğrenebilirsiniz.

Örneğin, aşağıdaki kodu inceleyelim:

![](RackMultipart20201124-4-tyjch_html_48f1bd068f46a0dc.gif)

## Çok boyutlu diziler

Birdeğişkenindiziolduğunuköşeliparantezlerilebelirtmiştik.Birtaneköşeli paranteztekboyutludizibelirtir.Eğerçokboyutludizioluşturmakistiyorsak, boyut sayısı kadar köşeli parantez belirtmeliyiz. Örneğin aşağıdaki satır 2 boyutlu bir dizi (yani matris)belirtir:

![](RackMultipart20201124-4-tyjch_html_ab0ede2a1c3ddb77.gif)

int matrix[][];

İlk köşeli parantez birinci boyutu (satırları), diğeri ise ikinci boyutu (sütunları) belirtir. Aşağıdaki kodu çalıştırırsak, 3 satırlı ve 4 sütunlu bir matris oluşturur:

![](RackMultipart20201124-4-tyjch_html_ab0ede2a1c3ddb77.gif)

int matrix[][] = new int[3][4];

Bu matrisin bütün elemanlarına ulaşmak için kullanmamız gereken indeks numaralarını aşağıdaki tabloda görebilirsiniz:

| [0][0] | [0][1] | [0][2] | [0][3] |
| --- | --- | --- | --- |
| [1][0] | [1][1] | [1][2] | [1][3] |
| [2][0] | [2][1] | [2][2] | [2][3] |

![](RackMultipart20201124-4-tyjch_html_c5b09d1263f81420.gif)

Şimdi güzel bir örnek yapalım. 3 satırdan ve 4 sütundan oluşan bir matris yaratalım ve bu matrisin elemanlarını sırayla 1&#39;den başlayacak şekilde dolduralım. Aşağıdaki kodu inceleyelim:

int[][] matrix = new int[3][4]; int number = 1;

for (int x = 0; x \&lt; matrix.length; x++)

{

int[] row = matrix[x];

for (int y = 0; y \&lt; row.length; y++)

{

row[y] = number; number++;

}

}

![](RackMultipart20201124-4-tyjch_html_b34a5c82678fa30c.gif)

Şimdi yukarıdaki kodu inceleyelim. İki boyutlu diziyi oluşturduktan sonra önce for döngüsüyle dizinin satırlarını geziyoruz. Daha sonra içerideki for döngüsüyle dizinin sütunlarını dolaşıyoruz. Bu örneği vermemizdeki amaç, matrisinelemanlarınaulaşmakiçiniçiçe2fordöngüsükullanmakgerektiğini göstermektir. Ayrıca dizinin _length_ metodunun faydasını da burada görmüş oluyoruz.

Yukarıdaki kod çalıştığında matrisin elemanları şu şekilde olur:

| 1 | 2 | 3 | 4 |
| --- | --- | --- | --- |
| 5 | 6 | 7 | 8 |
| 9 | 10 | 11 | 12 |

### Sütun kapasiteleri farklı matris oluşturmak

1. boyutlu dizilere matris denir. Başka bir açıdan bakıldığında ise, 2 boyutlu dizileri, dizinin dizisi olarak düşünmek doğru olur. Diziler aynı türden elemanlardan oluşur. int türünde bir dizi olabileceği gibi, dizinin dizisi de olabilir.Matrisleri **dizilerin**** dizisi**(_array __of__ arrays_)olarakdüşünebiliriz.

Yukarıdaki örneklerde matrisin sütun sayısını 4 olarak belirledik. Bu şekilde oluşturulursa matrisin bütün satırları 4 elemanlı olur. Fakat bu zorunlu değildir. Matris oluştururken sütun sayısı belirlemezsek, her bir satırdaki dizilerin kapasitesi farklı olabilir. Örneğinaşağıdaki kodu inceleyelim:

int[][] matrix = new int[3][]; matrix[0] = new int[1]; matrix[1] = new int[2]; matrix[2] = new int[3];

![](RackMultipart20201124-4-tyjch_html_83c0c6e23d757c4a.gif)

Burada önce 3 satırdan oluşan bir matris belirttik, fakat sabit bir sütun sayısı vermedik. Sonra her bir satır için ayrı ayrı sütun sayısı belirledik. Bu kodu çalıştırdığımız zaman aşağıdaki gibi bir matris oluşur:

|
 |
 |
| --- | --- |
|
 |
 |
 |
|
 |
 |
 |
| --- | --- | --- |

Çok boyutlu dizi oluştururken, yalnızca ilk boyutun (en soldaki) kapasitesini belirlemeniz yeterlidir. Diğer boyutların kapasitesini dinamik olarak belirleyebilirsiniz.

# KONTROL MEKANİZMALARI

Programlama dilleri, kodun akış yönünü belirlemek için kontrol mekanizmaları kullanır. Java&#39;da kodlar sırayla satır satır ilerler; fakat bu her zaman böyle olmak zorunda olduğu anlamına gelmez. Kontrol mekanizmalarını kullanarak kodda atlamalar, seçimler, hata ayıklamalar yapabilir veya döngüye girebiliriz.

Kontrol mekanizmalarını genel olarak 3 gruba ayırabiliriz:

- **Seçim ifadeleri:** Belli bir koşula bağlı olarak koda yön vermemizisağlar.
- **Döngü ifadeleri:** Kodun belirli kısımlarını defalarca çalıştırmamızı sağlar.
- **Atlama ifadeleri:** Kodun belirli kısımlarını atlamamızısağlar.

## SEÇİM İFADELERİ

İki adet seçim ifadesi vardır: **if** ve **switch**. Bu ifadeler, sonucunu yalnızca çalışma zamanında bilebileceğimiz bazı koşullara göre program akışını değiştirmemizi sağlar.

## if

if bloklarına daha önce kısaca giriş yapmıştık. Şimdi ayrıntıyla inceleyelim. Yapısı şu şekildedir:

![](RackMultipart20201124-4-tyjch_html_c014d854552c4075.gif)

if ( [koşul] )

{

[ifade1]

}

else

{

[ifade2]

}

Burada belirtilen _koşul_, sonucu boolean olan bir ifadedir. Bu ifade mutlaka parantez içinde yazılmalıdır. Eğer bu boolean koşulumuz **true** ise, if bloğu içindeki kodlar çalışır. Eğer if bloğumuzun hemen ardından bir **else** bloğu geliyorsa, bu bloğun içindeki kodlar yalnızca koşul **false** ise çalışır. else bloğu isteğe bağlıdır, her if ifadesinde else bloğu olmak zorunda değildir.

Eğerbirififadesindeelsebloğuvarsa,koşulabağlıolarakyaifbloğuyadaelse bloğu çalışır. Gördüğünüz gibi, if kontrol mekanizmasını kullanarak kodumuzun belli kısımlarını atlamışoluyoruz.

if veya else bloğu içindeki kodlar tek satırdan oluşuyorsa küme parantezi açmaya gerek yoktur; fakat birden fazla kodlar için mutlaka blok açılmalıdır.

![](RackMultipart20201124-4-tyjch_html_5a107ae0c5eb70eb.gif)

int year = 2020;

if (year \&gt; 0)

{

System.out.println(&quot;Milattan sonra&quot;);

}

Yukarıdaki örnekte if bloğu çalışır ve konsola &quot;Milattan sonra&quot; yazdırılır.

int year = -5;

if (year \&gt; 0)

{

System.out.println(&quot;Milattan sonra&quot;);

}

![](RackMultipart20201124-4-tyjch_html_5a107ae0c5eb70eb.gif)

Bu örnekte ise if bloğunun çalışmadığını görürüz. Kodumuz if bloğunu atlar.

![](RackMultipart20201124-4-tyjch_html_bbd5909e7c0fb466.gif)

int year = -5;

if (year \&gt; 0)

{

System.out.println(&quot;Milattan sonra&quot;);

}

else

{

System.out.println(&quot;Milattan önce&quot;);

}

Yukarıdakiörnekteiseifbloğununatlandığınıveelsebloğununçalıştırıldığını görürüz. Unutmayın: hem if hem else blokları mevcutsa bu bloklardan biri mutlakaçalıştırılır.

## if-else-if merdiveni

Bazı durumlarda birden fazla if kontrolü yapmamız gerekir. Bu gibi

durumlarda **else-if** blokları yardımımıza koşar.

Birden fazla kontrol yapılacaksa sırayla önce if, sonra else-if blokları ve son olarak (eğer varsa) else bloğu yazılır.

Aşağıdaki örneği inceleyelim:

int grade = getStudentGrade();

if (grade \&lt; 50)

{

System.out.println(&quot;Notunuz 1&quot;);

}

else if (grade \&lt; 60)

{

System.out.println(&quot;Notunuz 2&quot;);

}

else if (grade \&lt; 70)

{

System.out.println(&quot;Notunuz 3&quot;);

}

else if (grade \&lt; 85)

{

System.out.println(&quot;Notunuz 4&quot;);

}

else

{

System.out.println(&quot;Notunuz 5&quot;);

}

![](RackMultipart20201124-4-tyjch_html_afbd9b6bc418bb53.gif)

Yukarıdaki kod örneğinde, öğrencinin notu 100 üzerinden elde ediliyor ve 5&#39;lik not sistemine dönüştürülüyor. Bu örnekteki else-if bloklarının kullanımına dikkatinizi çekerim. Birden fazla koşulu if-else-if merdiveni ile kontrol ediyoruz. Burada if bloğunun en önde, else bloğunun en sonra olduğunu da fark etmişsinizdir. Ayrıca, else bloğunun zorunlu değil isteğe bağlı olduğunu da hatırlatalım.

if-else-if merdiveni oluştururken koşulların sıralamasına çok dikkat etmelisiniz.Örneğinyukarıdakikoddabulunan,notun60&#39;tanve70&#39;denküçük olduğunu test eden else-if bloklarının yerini değiştirelim ve aşağıdaki gibi yazalım:

![](RackMultipart20201124-4-tyjch_html_55829deed04cfdfe.gif)

Kodu incelerseniz, notun 60&#39;tan küçük olduğunu test eden else-if bloğunun hiçbir zaman çalışmayacağını görürsünüz. Çünkü kendisinden daha kapsayıcı bir if koşulu daha önce yazılmıştır. 60&#39;tan küçük olan her not 70&#39;ten de küçük olacağı için, 60&#39;tan küçük notlar 3. if bloğuna değil, 2. if bloğuna girer. Bunun sebebi, if bloklarının sırasıyla kontrol ediliyor olmasıdır. Bu nedenle, else-if merdiveni oluştururken if bloklarını, koşul kapsayıcılığı az olandan yüksek olana doğru sıralamalısınız. En kapsayıcı olan else bloğu ise en sona yazılır; çünkü else bloğu listelenenler haricinde diğer bütün koşulları kapsar.

Bu başlığı kapatırken, else ve else-if bloklarının zorunlu olmadığını, isteğe bağlı olduğunu tekrar hatırlatalım.

## switch

switch bloklarının mantığını anlamak için bir örnek kod yazalım. 100&#39;ün 5ile bölümünden kalanı elde edelim ve bu kalanın ne olduğunu konsola yazdıralım:

int remainder = 100 % 5;

if (remainder == 0)

{

System.out.println(&quot;Kalan: 0&quot;);

}

else if (remainder == 1)

{

System.out.println(&quot;Kalan: 1&quot;);

}

else if (remainder == 2)

{

System.out.println(&quot;Kalan: 2&quot;);

}

else if (remainder == 3)

{

System.out.println(&quot;Kalan: 3&quot;);

}

else if (remainder == 4)

{

System.out.println(&quot;Kalan: 4&quot;);

}

![](RackMultipart20201124-4-tyjch_html_afbd9b6bc418bb53.gif)

Gördüğünüz gibi, bir if-else-if merdiveni oluşturduk ve _remainder_ değişkeninin değerine göre konsola metin yazdırdık. Bu tarz durumlarda, bir değişkenindeğerinegöreeşitlikkoşuluarandığında,ifyerine **switch** bloklarını kullanabiliriz. Yukarıdaki kodu aşağıdaki gibiyazabiliriz:

![](RackMultipart20201124-4-tyjch_html_f3f864fdae3ee3ed.gif)

int remainder = 100 % 5;

switch (remainder)

{

case 0:

System.out.println(&quot;Kalan: 0&quot;); break;

case 1:

System.out.println(&quot;Kalan: 1&quot;); break;

case 2:

System.out.println(&quot;Kalan: 2&quot;); break;

case 3:

System.out.println(&quot;Kalan: 3&quot;); break;

case 4:

System.out.println(&quot;Kalan: 4&quot;); break;

}

Bu örnekten switch bloklarının yapısını anlamış oluyoruz. Önce **switch** deyimiyazılır,dahasonradeğeritestedilecekdeğişkenparanteziçindeyazılır ve blok açılır. Test edilecek her bir durum **case** deyimiyle belirtilir. Test edilecek değer yazılır ve ardından iki nokta konulur. Her bir duruma özel kodlar yazıldıktan sonra **break** deyimiyle bu test senaryosunun tamamlandığı belirtilir. switch bloklarıyla sadece **byte, short, int, char** ve **String** türündeki değişkenler test edilebilir. Aynı test birden fazlayazılamaz.

if ifadelerinde, test edilenler haricindeki bütün durumları kapsamak için else bloğu kullanmıştık. switch bloğunda da bunun bir karşılığı vardır. Bütün case&#39;lertestedildiktensonra,diğertestleriçinbirkodyazmakistiyorsak,bunu **default** bloğu içindeyazarız.

![](RackMultipart20201124-4-tyjch_html_1fdc9b9b0d3ed7c9.gif)

int a = 5;

switch (a)

{

case 1:

System.out.println(&quot;a&#39;nın değeri: 1&quot;);

break; case 2:

System.out.println(&quot;a&#39;nın değeri: 2&quot;);

break; case 3:

System.out.println(&quot;a&#39;nın değeri: 3&quot;);

break; default:

System.out.println(&quot;a&#39;nın değeri 3&#39;ten büyüktür&quot;);

break;

}

Yukarıdaki kodda görüldüğü üzere, a&#39;nin değeri için 3 farklı durum test

edilmiştir. Eğer a&#39;nın değeri 1, 2 veya 3&#39;ten farklıysa default kod bloğu çalışır.

default bloğu isteğe bağlıdır ve sadece bir kez yazılabilir. Ayrıca default bloğununbütüncase&#39;lerdensonra,ensonayazılmasıgerektiğinidebelirtelim.

## Neden break deyimini kullanıyoruz?

Switch bloğunun kendine has bir yapısı vardır. Test edilen case&#39;lerden biri testten geçiyorsa kod oradan itibaren çalışmaya devam eder; fakat break

deyimini görmezse, başka bir case&#39;e girse bile çalışmasını sürdürür. Örneğin aşağıdaki kodu inceleyelim:

![](RackMultipart20201124-4-tyjch_html_5af9a2f9f68aac1f.gif)

int a = 1;

switch (a)

{

case 1:

System.out.println(&quot;a&#39;nın değeri: 1&quot;);

case 2:

System.out.println(&quot;a&#39;nın değeri: 2&quot;);

case 3:

System.out.println(&quot;a&#39;nın değeri: 3&quot;);

break; default:

System.out.println(&quot;a&#39;nın değeri 3&#39;ten büyüktür&quot;);

break;

}

Bu kodu çalıştırırsanız konsol çıktısı şöyle olur:

![](RackMultipart20201124-4-tyjch_html_eaf8bbd209144d64.gif)

a&#39;nın değeri: 1

a&#39;nın değeri: 2

a&#39;nın değeri: 3

Gördüğünüz gibi, kod case 1&#39;e girmiş; fakat break deyimini görene kadar çalışmaya devam etmiştir. Bu nedenle, switch blokları yazarken break deyimine çok dikkat etmelisiniz. switch blokları içinde unutulan break deyiminin programın çalışmasına çok büyük etkileri olabilir.

Bazıdurumlarda,switchbloğununesnekyapısındanfaydalanarak,birdenfazla test senaryosu için aynı kod bloğunu kullanabilirsiniz. Aşağıdaki örneği inceleyelim:

int month;

switch (month)

{

case 12:

case 1:

case 2:

System.out.println(&quot;Mevsim: KIŞ&quot;);

break; case 3:

case 4:

case 5:

System.out.println(&quot;Mevsim: İLKBAHAR&quot;);

break; case 6:

case 7:

case 8:

System.out.println(&quot;Mevsim: YAZ&quot;); break;

case 9:

case 10:

case 11:

System.out.println(&quot;Mevsim: SONBAHAR&quot;); break;

}

![](RackMultipart20201124-4-tyjch_html_e3e2673cc790c254.gif)

## DÖNGÜİFADELERİ

1. farklı döngü ifadesi vardır: **for, while** ve **do-while**. Bu ifadeler kodumuzun belirli kısımlarının döngüye girmesini ve birden fazla kez çalışmasını sağlar. Döngüler bir koşula bağlanır ve bu koşul var olduğu sürece aynı kod bloğu çalışmaya devam eder. Koşul artık sağlanmıyorsa döngü sonaerer.

## while döngüsü

Java&#39;nınentemeldöngüsü **while** döngüsüdür.Hattadiyebilirizki,diğerbütün döngü türleri kodumuz derlendiğinde while bloğuna dönüştürülür. while döngüsünün çalışma mantığı basittir: while bloğu içindeki kod, bağlı olduğu koşul sağlandığı sürece çalışır. while bloğunun yapısı şuşekildedir:

**while** ( [koşul] )

{

[döngüye girecek kodlar]

}

![](RackMultipart20201124-4-tyjch_html_14eb461f1ffbda57.gif)

Burada belirtilen _koşul_, **boolean** bir ifadedir. Bu koşul **true** olduğu sürece döngü devam eder. Koşul **false** olursa döngü sonlanır.

Koşul ifadesi parantez içine yazılır. Eğer döngüye girecek kod tek satırdan oluşuyorsa blok açmaya gerek yoktur; fakat birden fazla satırdan oluşuyorsa mutlaka blok açılmalıdır.

![](RackMultipart20201124-4-tyjch_html_b913928ff4ee0314.gif)

System.out.println(&quot;10&#39;dan geriye sayıyorum...&quot;);

int counter = 10;

while (counter \&gt;= 0)

{

System.out.println(counter); counter--;

}

Yukarıdaki kod çalıştırıldığında çıktısı aşağıdaki gibi olur:

![](RackMultipart20201124-4-tyjch_html_da18423931e5ba24.gif)

10&#39;dan geriye sayıyorum...

10

9

8

7

6

5

4

3

2

1

0

Görüldüğü gibi koşul var olduğu sürece kodumuz çalışmış, sonra döngü sona ermiştir.

Döngülerin içeriği olmak zorunda değildir. Bazı durumlarda döngüye girecek kod olmasa bile döngüye girebiliriz. Aşağıdaki örneği inceleyelim:

int left = 100, right = 200; while (++left \&lt; --right);

System.out.println(&quot;100 ile 200&#39;ün ortası: &quot; + left);

![](RackMultipart20201124-4-tyjch_html_c97eb6415870c3cc.gif)

Bu algoritma, 100 ile 200&#39;ün arasında tam ortada bulunan sayıyı bulmamızı sağlar. Kodu çalıştırdığımızda çıktısı şu şekilde olur:

![](RackMultipart20201124-4-tyjch_html_bc634c09a7ad8e17.gif)

100 ile 200&#39;ün ortası: 150

Gördüğünüz üzere, içeriği olmasa bile bazı durumlarda döngüler fayda sağlayabilir.

## do-while döngüsü

Yukarıda gördüğünüz gibi, while döngüsünde koşul döngünün başlangıcında test edilir. Eğer koşul sağlanmıyorsa ( **false** ise) döngüye girilmez. Kısacası, yazdığınız programlarda while döngüsüne hiç girilmediği durumlar da yaşanabilir.

Fakat bazen, döngü koşulu sağlanmasa bile döngüye en az bir kere girilmesini isteyebiliriz.Eğerdöngükoşuludöngününbaşındadeğil,sonundatestedilirse, döngü en az bir kere işletilir. do-while döngüsü bunu sağlar. Bu döngünün while döngüsünden tek farkı, döngü koşulunun döngünün sonunda test edilmesidir.

Bu döngünün yapısı aşağıdaki şekildedir:

![](RackMultipart20201124-4-tyjch_html_14eb461f1ffbda57.gif)

**do**

{

[döngüye girecek kodlar]

} **while** ( [koşul] );

Gördüğünüzgibi,koşuldöngününsonundatestedilir.Budurumda,koşulfalse olsa bile döngü en az bir kere çalıştırılmış olur. Bu şekilde döngü yazmak istediğiniz durumlarla karşılaşacaksınız. Aşağıdaki örneğiinceleyelim:

int year = 2020; do

{

System.out.println(&quot;Döngü işletiliyor..&quot;);

year++;

} while (year \&lt; 2020);

![](RackMultipart20201124-4-tyjch_html_b778897e4481bf6d.gif)

Bu kod çalıştırıldığında çıktısı aşağıdaki gibi olur:

![](RackMultipart20201124-4-tyjch_html_6904dbd97819578a.gif)

Döngü işletiliyor..

Gördüğünüz gibi _year_ değişkeni 2020&#39;den küçük olmamasına rağmen döngü en az bir kere çalıştırılmıştır.

## for döngüsü

Bu döngünün basit örneklerini daha önce görmüştük. Şimdiayrıntılı

inceleyelim.

2 farklı for döngüsü vardır. İlk for döngüsü, Java&#39;nın ilk versiyonundan beri var olan geleneksel tarzdaki for döngüsüdür. Diğeri ise JDK 5 ile eklenen for- each döngüsüdür.

Geleneksel for döngüsünün yapısı şu şekildedir:

![](RackMultipart20201124-4-tyjch_html_1a7b1e62a53db5b0.gif)

for ( [döngü başlangıcı] ; [döngü koşulu] ; [döngü adımı] )

{

[döngüye girecek kodlar]

}

for döngüsü şu şekilde işler: İlk olarak döngüde sayaç işlevi görecek bir değişkenoluşturulur.Budeğişkeninilkdeğeri_[döngü__başlangıcı]_ilebelirtilen kısımda verilir. Bu değişken _[döngü adımı]_ kısmında isteğe göre artırılır veya azaltılır. Döngünün hangi koşulda çalışacağı ise _[döngü koşulu]_ kısmında boolean bir ifadeyle belirtilir. Aşağıdaki örneğiinceleyelim:

![](RackMultipart20201124-4-tyjch_html_1a7b1e62a53db5b0.gif)

for (int i = 1; i \&lt; 10; i++)

{

System.out.println(i);

}

Bu örnekte int türünde _i_ isminde bir döngü sayacı oluşturulur. Bu sayaç, döngünün her adımında _i++_ ifadesiyle 1 artırılır. Bu döngü _i_ sayacının değeri 10&#39;dan küçük olduğu sürece çalışır. Bu döngü çalıştırıldığı zaman çıktısı aşağıdaki gibi olur:

![](RackMultipart20201124-4-tyjch_html_978c79f4c43cda50.gif)

1

2

3

4

5

6

7

8

9

for döngüsünün içindeki 3 kısmın çalıştırılma sırası şu şekildedir:

- İlk olarak _[döngü başlangıcı]_ kısmı çalışır. Bu kısım sadece bir kez çalıştırılır, döngü boyunca bir dahaçalıştırılmaz.
- Dahasonra_[döngü__koşulu]_kısmıçalıştırılır.Eğersonuç **true** isedöngüye girer. Bu kısım her döngünün başında tekrar kontrol edilir. Eğer sonuç **false** ise döngüsonlandırılır.
- Herdöngününsonunda_[döngü__adımı]_kısmıçalıştırılır.Döngüdeenson çalışan kısımburasıdır.

Şunu da belirtmek gerekir ki, _[döngü başlangıcı]_ kısmında oluşturulan değişkenin kapsamı for döngüsüyle sınırlıdır. Bu değişkene for döngüsü dışında ulaşılamaz.

## for döngüsüvaryasyonları

Geleneksel for döngüsünün farklı varyasyonları olabilir. Döngünün içinde 3 farklı kısım olduğundan bahsetmiştik. Bu kısımların hiçbiri zorunlu değildir. Aşağıdaki örnekleri inceleyelim:

![](RackMultipart20201124-4-tyjch_html_dc71b1bccffb8796.gif)

int i = 1;

for ( ; i \&lt; 10; i++)

{

System.out.println(i);

}

Bu örnekte döngü sayacı, for döngüsünden önce oluşturulmuştur. Ayrıca _[döngü başlangıcı]_ kısmının boş bırakıldığına dikkatinizi çekerim. Bu durumda döngü sayacı olarak döngünün dışında oluşturulan bir değişken kullanılır, ilkdeğeri de yine döngüden önce verilmiştir. Şunu da belirtelim ki, for döngüsünü bu örnekte olduğu gibi kullanırsanız, döngü sayacına for döngüsünden sonra da erişebilirsiniz.

![](RackMultipart20201124-4-tyjch_html_b778897e4481bf6d.gif)

int i = 1;

for ( ; i \&lt; 10; )

{

System.out.println(i); i++;

}

Bu örnekte ise hem _[döngü başlangıcı]_ kısmının hem de _[döngü adımı]_ kısmınınboşbırakıldığınıgörüyoruz.Döngüsayacınıparanteziçindeartırmak yerine, döngü kodlarının içindeartırıyoruz.

![](RackMultipart20201124-4-tyjch_html_83c0c6e23d757c4a.gif)

for ( ; ; )

{

// sonsuz döngü

}

Bu örnekte ise bütün kısımların boş bırakıldığını görüyoruz. Bu tarz for döngüleri_sonsuz__döngü_oluşturur.Sonsuzdöngü,hiçbirkoşuldasonaermeyen döngü demektir. Bu döngüde hiçbir koşul test edilmediği için döngü her zaman çalışır. Yani, eğer bu kodu çalıştırırsanız, bilgisayarınız sonsuza kadar bu döngüyüişletecektir.

## break deyimi

Buraya kadar gördüğümüz bütün döngüler belirlediğimiz bir koşula göre kontrol ediliyor ve bu koşul sağlandığı sürece çalışıyordu. Bazı durumlarda, döngü koşulu sağlansa bile başka bir nedenden ötürü döngüyü sonlandırmak isteyebiliriz. Bu tarz durumlarda **break** deyimini kullanırız. Bu deyim, içinde kullanıldığı döngüyü anında sonlandırır. Aşağıdaki örneği inceleyelim:

boolean continueLoop = true;

for (int i = 2; i \&lt;= 100; i += 2)

{

if (!continueLoop)

{

**break** ;

}

System.out.println(i); if (i == 50)

{

continueLoop = false;

}

}

![](RackMultipart20201124-4-tyjch_html_eac8b57a3d55bad5.gif)

Bu örnekte, 2&#39;den 100&#39;e kadar olan çift sayılar konsola yazdırılıyor. Fakat döngü ayrıca boolean bir değişkenle kontrol ediliyor. Döngü sayacı 50&#39;ye ulaştığında bu değişken false olarak ayarlanıyor. Döngünün her adımında ise bu değişken kontrol ediliyor; eğer false ise döngü break deyimiyle sonlandırılıyor. Bu kod çalıştırıldığında, 2&#39;den 50&#39;ye kadar olan çift sayıların konsola yazdırıldığını görürüz. Çünkü 50&#39;ye ulaştıktan sonra break deyimiyle döngü sonlandırılmıştır. Gördüğünüz gibi, aslında döngü koşulusağlanmasına rağmen manuel olarak döngüsonlandırılmıştır.

## continue deyimi

Bazı durumlarda döngünün sadece o adımının sonlanmasını, diğer adımların ise çalışmaya devam etmesini isteriz. Bu gibi durumlarda **continue** deyimini kullanırız. Aşağıdaki örneği inceleyelim:

![](RackMultipart20201124-4-tyjch_html_c4c40de5da1f117d.gif)

for (int i = 0; i \&lt;= 10; i += 2)

{

if (i == 4)

{

**continue** ;

}

System.out.println(i);

}

Buörnekte0&#39;dan10&#39;akadarolançiftsayılarkonsolayazdırılıyor.Fakatdöngü sayacı 4 olduğunda continue deyimi çalıştırılıyor. continue deyimi kullanıldığında döngünün geri kalanı çalıştırılmaz; fakat diğer adımlar çalışmaya devam eder. Bu kod çalıştırıldığında çıktısı aşağıdaki gibiolur:

![](RackMultipart20201124-4-tyjch_html_a78c64ecd3026930.gif)

0

2

6

8

10

Gördüğünüz gibi, continue deyimi çalıştırıldığı için 4 konsola yazılmamış; fakat diğer değerler yazılmıştır.

## for-each döngüsü

Çoğuzamanfordöngüsünü,birdizininveyakoleksiyonuniçindekielemanları gezmek için kullanırız. Aşağıdaki örneğiinceleyelim:

![](RackMultipart20201124-4-tyjch_html_ef65fbdcfa559d9f.gif)

int[] numbers = { 1, 2, 3, 4, 5 };

for (int index = 0; index \&lt; numbers.length; index++)

{

int number = numbers[index]; System.out.println(number);

}

Bu örnekte 5 elemanlı bir dizi oluşturuluyor ve for döngüsü kullanarak bu dizinin elemanları konsola yazdırılıyor. Dizinin hiçbir elemanının atlanmadığına dikkat edelim.

Bu gibi durumlar (bir dizinin veya koleksiyonunun bütün elemanlarını gezmek) için **for-each** döngüsü geliştirilmiştir. Bu döngünün yapısı aşağıdaki gibidir:

![](RackMultipart20201124-4-tyjch_html_e66f76cf46184abb.gif)

for ( [elemanların türü] [değişken ismi] : [dizi veya koleksiyon] )

{

[döngüye girecek kodlar]

}

İlk olarak elemanların türü belirtilir. Bu tür, dizinin veya koleksiyonun

içindeki elemanların türüdür. Daha sonra bir değişken ismi verilir. Bu isim,

döngünün her adımında sıradaki elemanı belirtir. Sonra iki nokta konulur ve ardından dizinin veya koleksiyonun ismi yazılır.

Örneğin, yukarıdaki örneği for-each döngüsüyle aşağıdaki gibi yazabiliriz:

![](RackMultipart20201124-4-tyjch_html_33224f81fd78347f.gif)

int[] numbers = { 1, 2, 3, 4, 5 };

for (int number : numbers)

{

System.out.println(number);

}

Sonucu aynı olmasına rağmen, bu kodun geleneksel for döngüsüne göre daha kısa olduğunu fark etmişsinizdir.

Bu döngüyle ilgili belirtmemiz gereken önemli bir nokta vardır. for-each içinde belirtilen döngü değişkeni **dolaylı olarak sabittir** (_effectively final_). Yani, döngü içinde bu değişkene atama yapamazsınız. Örneğin, aşağıdaki kod hata fırlatır:

![](RackMultipart20201124-4-tyjch_html_e2c0980c5383070f.gif)

int[] numbers = { 1, 2, 3, 4, 5 };

for (int number : numbers)

{

number=10; // Bu satır hataya nedenolur.

// for-each içinde tanımlanan değişkenlere değer atayamazsınız

}
