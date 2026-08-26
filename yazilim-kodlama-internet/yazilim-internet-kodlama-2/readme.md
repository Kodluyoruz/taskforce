Günlük hayatımızda bilgisayarımızda, telefonumuzda, televizyonumuzda bile sürekli kullandığımız belirli uygulamalar, web sayfaları var. Bunlar nasıl yapılıyor sorusuna cevap buluyoruz bu dersimizde. Elbette burada teknik bir konu yok. Fakat buradaki bilgiler sizin kariyerinizi inşa ederken oldukça bilinçli bir şekilde yol almanızı sağlayacak bilgiler.

# Frontend ve Backend'e Giriş

Konu web tasarımı olduğunda, **frontend** ve **backend** en sık sözü geçen terimler arasında yer alır. Bu iki terim, aslında "görülen ve etkileşime geçilen katman ve "görülmeyen arkaplan" olarak da anlaşılır bir halde ifade edilebilir.

Bu iki terim genelde sektörün dışından olanlarda kafa karışıklığı yaratıyor gibi görünse de aslında aralarındaki farkı açıklamak nispeten kolay. Bunu en basit tabirle açıklamak gerekirse; 

* frontend, bir web sitesine girdiğinizde etkileşime girdiğiniz arayüzün tasarımının geliştirmesine; 
* backend, bu web sitesinin perde arkasında yer alan, işin server kısmı ve taban yazılımını geliştirme işine verilen adlardır. 

Bu yazımızda sizlere **"frontend"** kavramını daha detaylı açıklayacağız.

![frontend1](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/frontend-nedir/figures/frontend1.png)



## Frontend Nedir?

Frontend, web'in görüp etkileşime girebildiğiniz kısımlarına verilen addır. Frontend genellikle web tasarımı ve web'in ön yüzünün geliştirilmesini kapsar.

Son dönemlerde tasarım ve tasarımın kodlanması süreçleri ise neredeyse tamamen ayrılmıştır. Yine de web tasarımı dendiğinde; Adobe XD, Photoshop ve Sketch gibi tasarım programlarını kullanabilen, aynı zamanda da HTML, CSS, JavaScript ve yeni nesil framework'ler(react.js, vue.js) ile kod yazabilen tasarımcılardan bahsedilir. 

Bir web sitesini kullanırken gördüğünüz her şey; *HTML, CSS ve JavaScript*'in, kullandığınız web tarayıcı tarafından kontrol edilmesidir. Bunun içinde de fontlar, açılır menüler, geçişler, sliderlar, iletişim formları vb. tasarımsal işler yer alır.

![frontend2](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/frontend-nedir/figures/frontend2.png)

Frontend'de yer alan bu öğelere eklenen bilgilerin depolanabilmesi, yani kısaca **frontend**'in hayata geçebilmesi için gereken alt yapı ve teknolojiyi sağlayan ise **backend**'dir.

## Kaynaklar

* https://www.horato.com/tr/post/frontend-ve-backend-nedir-nasil-calisir-63


# Backend Nedir?

*Backend genellikle bir sunucu, bir uygulama ve bir veri tabanından oluşur.* 

Bir havayolu veya otobüs firmasının web sitesine girerek bilet aldığınızda **frontend** ile etkileşime girmiş olursunuz. Siz bilgilerinizi web sitesine girdiğinizde, uygulama bu bilgiyi alır ve bir sunucu üzerinde kurulmuş olan veri tabanına depolar. **Backend** işleyişini basit bir şekilde anlatabilmek için şöyle örnekleyebiliriz: Siz (uygulama), bir bilgiyi bilgisayarınızda (sunucu) bulunan bir Excel (veri tabanı) dosyasına kaydediyorsunuz.

![backend1](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/backend-nedir/figures/backend1.png)

Örnek olarak kayıtlı olduğunuz bir web sitesine giriş yapmak istiyorsunuz, ilk olarak bu **Giriş Yap** isteği sunucuya iletilir daha sonra ise sunucunun veri tabanında *kullanıcı adınız* ile *şifrenizin* uyuşup uyuşmadığına bakılır ve ona göre bir cevap gelir. Siz giriş yapma isteği gönderdiğinizde bunu veri tabanında arayan, bulan ve nasıl bir cevap verileceğini belirleyen şey **backend**’tir. 

Backend kodlayanlara, Backend Developer denir. Backend Developer’ların kullandığı bazı yaygın dil, framework ve teknolojilerden bir kısmı;

- Java
  - Spring
- .NET
- Python
  - Django
- JavaScript
  - Node.js
- PHP
  - Laravel
- SQL
  - MySQL
  - MSSQL
  - OracleSQL

![backend2](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/backend-nedir/figures/backend2.png)

## Kaynaklar

* https://www.horato.com/tr/post/frontend-ve-backend-nedir-nasil-calisir-63
* https://medium.com/royto/frontend-ve-backend-nedir-a5041ec17f1b

# Frontend & Backend Karşılaştırması 

**Back-End ile Front-End** geliştirimi arasındaki farkı belirlemek için uygun bir benzetme bir sahne oyunudur. Back-End, ışıkları ve ses tahtasını çalıştıran perdelerin arkasındaki mürettebat ise, Front-End, setin ve aktörlerin de içinde bulunduğu seyircinin gördüğü şeydir.

![backend-vs-frontend1](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/frontend-vs-backend/figures/backend-vs-frontend1.png)

![frontend-vs-backend2](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/frontend-vs-backend/figures/frontend-vs-backend2.jpg)

![frontend-vs-backend3](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/frontend-vs-backend/figures/frontend-vs-backend3.png)

**Frontend** kısmında *HTML, CSS ve JavaScript* gibi araçların kullanıldığından bahsetmiştik. Gelin ilk öncelikle bu kavramlarını insan vücudundaki kısımlara benzetelim.

HTML insan biyolojisinde iskeletimizi temsil eder. Bir web sayfası oluşturmak istiyorsanız ilk olarak bir iskelet yapısı kodlamalısınız. CSS bir sitenin gözümüze güzel gözükmesini sağlayan bir stil aracıdır. CSS’in insan vücudunda ki yeri derimiz, kaşımız, gözümüz ve hatta göz rengimizdir. Yani CSS, iskeletimizin üzerini örterek güzel gözükmemizi sağlar. JavaScript ise insan vücuduna fonksiyon kazandıran yapıdır yani duyu organlarımız buna en güzel örnektir. Mesela gözümüz dışarıyla uyumlu olmamızı sağlayan bir duyu organıdır. Dışarıdan veriyi alır beyne iletir. Yukarıda söylediklerimizin tamamı frontend’in, insan vücuduna uyarlandığında ortaya çıkan tablodur.

Peki, backend bunun neresinde diye soracak olursanız: Backend ise beynimizdir. Birisiyle karşılaştığınızda ilk olarak o kişi gözlerinizle görürüz daha sonra görme verisi beynimize aktarılır. O kişiyi tanıyıp tanımadığınıza karar veren yapı yani beynimiz de backend’tir.

![frontend-vs-backend4](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/frontend-vs-backend/figures/frontend-vs-backend4.jpg)

Son olarak, Web tasarımı (frontend) ve web geliştirme (backend), ancak bir araya geldiklerinde bir web sitesi oluşabilir, ancak her ikisi de birbirinden farklı işler yapar. Hem frontend hem de backend'i tek başına yapabilen nadir yazılımcılar da **"Full-Stack Developer"** olarak adlandırılır.

Tekrar kısaca özetlemek gerekirse de bir web sitesini sıfırdan oluşturabilmek için **frontend** ve **backend**'in bir arada olması gerekir; biri olmadan diğeri, tek başına web sitesi oluşturamaz.

![fullstack](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/frontend-vs-backend/figures/fullstack.png)

## Kaynaklar

* https://www.horato.com/tr/post/frontend-ve-backend-nedir-nasil-calisir-63
* https://medium.com/royto/frontend-ve-backend-nedir-a5041ec17f1b
* https://webmaster.kitchen/front-end-vs-back-end/

# Algoritma

## Algoritma Nedir?

Bir sorunu çözmek veya belirlenmiş bir amaca ulaşmak için tasarlanan yola, takip edilen işlem basamaklarına **algoritma** denir. Algoritmalar açıkça belirtilmiş bir başlangıcı ve sonu olan işlemler kümesidir. 

Amaca ulaşmak için işlenecek çözüm yolları ve sıralamaları belirlenir ve algoritma bu sırayı takip ederek en mantıklı çözüme ulaşır. 

## Algoritma Neden Gereklidir?

**Algoritma geliştirmek** bize günlük hayatımızda, **programlama ve matematikte** birçok kolaylık sağlamaktadır. Çoğumuz, iş hayatımızda ve normal yaşantımızda algoritmayı birçok yerde kullanmaktayız. Algoritma kullanımı, hayatımızda belirli bir **düzen** oluşturmak açısından gerekli bir **yoldur**.

![algortima-örnek](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/algoritma/figures/algortima-%C3%B6rnek.jpg)

## Kaynaklar
- https://tr.wikipedia.org/wiki/Algoritma
- https://maker.robotistan.com/algoritma/
- https://shiftdelete.net/algoritma-nedir

# Pseudocode (Sözde Kod)

## Pseudocode (Sözde Kod) Nedir?

**Pseudocode (Sözde Kod)**, [bilgisayar bilimleri](https://tr.wikipedia.org/wiki/Bilgisayar_bilimleri) alanında [algoritmalar](https://tr.wikipedia.org/wiki/Algoritma) ve [programlar](https://tr.wikipedia.org/wiki/Program) oluşturulurken ve aktarılırken kullanılan, günlük konuşma diline benzer ve belli bir programlama dilinin detaylarından uzak anlatımlardır. 

Programın yapısının ve çalışma mantığının yüksek seviyeli bir biçimde, gerektiği yerde doğrudan [doğal dil](https://tr.wikipedia.org/wiki/Doğal_dil) cümleleriyle, ama yine de bir program yapısı ve akışı içinde anlatılmasıdır. Böylelikle sözde kodu okuyan ya da yazan birisi, programlama dillerinin [söz dizim](https://tr.wikipedia.org/wiki/Sözdizim) detaylarına dikkat etmek zorunda kalmadan, programın ve algoritmanın çalışma mantığını düşünebilir.

![img](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/pseudocode/figures/s%C3%B6zdekod1.jpg)

## Pseudocode Neden Kullanılır?

* Pseudocode (Sözde Kod)’ a ihtiyaç duyulmasının temel nedeni programlama dillerini bilmeyen sıradan bir insanın ve her türden yazılımcının programlardaki algoritma mantığını anlamasını sağlamaktır.

* Sözde kodun kullanılmasının bir diğer amacı programın yapımcısına veya programın kullanıcılarına kullanılan programlama dilinden bağımsız olarak, o programın çözüm, çalışma mantığının sunulmasının sağlanmasıdır.

## Pseudocode Özellikleri

* İsminde her ne kadar "Code (Kod)" geçiyor olsa da kod niteliği taşımaz.

* Kod niteliği taşımadıkları için; herhangi bir derleyici tarafından derlenemezler.

* Üzerlerinde hata ayıklaması ([debugging](https://searchsoftwarequality.techtarget.com/definition/debugging)) yapılamaz. Sade ve kolaylıkla anlaşılabilir olmalıdır.

* Söz dizim (syntax) kurallarına dikkat etmek zorunda olunmadığı için algoritma özelliği göstermezler.

![img](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/pseudocode/figures/s%C3%B6zdekod3.jpg) 

Şekil 1: Pseudocode ve algoritma farkı.

**Örnek**

![örnek](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/pseudocode/figures/%C3%B6rnek.png)

## Kaynaklar
- https://en.wikipedia.org/wiki/Pseudocode
- https://tr.wikipedia.org/wiki/Sözde_Kod
- https://technogezgin.com/pseudocode-nedir-sozde-kod/
- https://medium.com/@edisdev/algoritma-ve-pseudo-kodu-nedir-38ad7d09a73e

# **Kendinizi Güncel Tutmak İçin Kullanabileceğiniz Platformlar**

Buraya kadar geldik. Peki kendimizi nasıl sürekli güncel tutacağız? Şimdi sizlere bir yazılımcının mutlaka bilmesi gereken platformları listeliyoruz. 

## 1) Stack Overflow

Stack Overflow programlama ve kodlama ile ilgili spesifik sorularınızı sorabileceğiniz veya başkalarının sorduğu sorulara cevap verebileceğiniz bir platform. Kurulduğu günden bu yana milyonlarca kullanıcı tarafından milyonlarca soruya cevap verildiği için yeni soru oluşturmadan önce cevaplananlara göz atmakta fayda var. Platforma [buradaki](https://stackoverflow.com/) bağlantıdan ulaşabilirsiniz.  

![stack-overflow](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/platformlar%C4%B1n-%C3%B6nemi/figures/stack-overflow.png)

## 2) HackerRank

Bu sitenin genel kuruluş amacı aslında yazılımcı çalıştırmak isteyen firmalara yazılımcı istihdamı sağlamak. Firmalar bu site içerisinde yazılımcıların mülakatlarını yapıp bilgi seviyelerini ölçebiliyor ve profillerini inceleyip onlara iş teklifi sunabiliyor. Türkiye’de henüz bu amaçla kullanılmasa da mülakatlarda göreceğiniz test caselerde bu platformdan sorulara denk gelebilirsiniz. Peki bu sitede neler yapabiliyorsunuz? Kendinizi geliştirmek istediğiniz bir programlama dilinde veya yapay zeka, veri tabanı, SQL programlama, matematik gibi birçok alanda pratik yapabiliyorsunuz. Eğitim kamplarına katılabiliyor ve ilerleme kaydettikçe rozet/sertifika kazanabiliyorsunuz. Yazdığınız çözümün daha kısa yolu varsa bununla ilgili geri bildirim alabiliyor ve buna göre kodunuzu düzenleyebiliyorsunuz. Başkalarının yazdığı kodları görebiliyor, diğer yazılımcılarla toplu halde veya birebir iletişime geçebiliyorsunuz. Tüm güzellikleriyle HackerRank bir yazılımcının üye olunmazsa olmaz diyeceğimiz platformlardan. Platforma [buradaki](https://www.hackerrank.com/) bağlantıdan ulaşabilirsiniz.  

![hackerrank](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/platformlar%C4%B1n-%C3%B6nemi/figures/hackerrank.png)

## 3) Codility

Codility de HackerRank’e benzer şekilde şirketlerin programcı işe alım süreçlerini hızlandırmaya yönelik kurulmuş bir site. Bu servisi kullanan şirketler, programcı işe almak istedikleri zaman platform üzerinde bir challenge oluşturup adaylara ilgili linki yolluyorlar. Adaylar da ilgili platforma girip, verilen süre zarfında ilgili soruları çözüyor.Platform her ne kadar şirketler için kurulmuş olsa da bireysel olarak kendini test etmek isteyen kişiler ücretsiz bir şekilde kayıt olup, yararlanabiliyorlar. Programcılar için dersler kategorisi altında algoritma yeteneğinizi geliştirmeye yönelik pek çok soru bulunuyor. Testlerin hemen altında bulunan yorumlar kısmından da takıldığınız yerlerle ilgili sorular sorabiliyor ve cevaplar alabiliyorsunuz. Codility challengelarının algoritma konusunda oldukça zihin açıcı olduğunu düşünüyor ve bakmadan geçmeyiniz diyoruz. Platforma [buradaki](https://www.codility.com/) bağlantıdan ulaşabilirsiniz. 

![codility](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/platformlar%C4%B1n-%C3%B6nemi/figures/codility.png)

##  4) Project Euler

Project Euler sitesi oldukça zorlu matematik ve problemlerinden oluşuyor. Zihninize farklı düşünmeyi öğretmek ve problem çözme yeteneğinizi geliştirmek istiyorsanız Project Euler iyi bir seçenek olacaktır. Kendiniz denedikten sonra internette bu sorular üzerine kafa patlatmış kişilerin videolarını izleyip farklı çözüm yöntemlerini de görebilirsiniz. Platforma [buradaki](https://projecteuler.net/) bağlantıdan ulaşabilirsiniz.  

![project-euler](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/platformlar%C4%B1n-%C3%B6nemi/figures/project-euler.png)

## 5) Github

GitHub, proje yönetim ve versiyon kontrol sistemi olmakla birlikte, ayrıca geliştiriciler için yapılmış bir sosyal ağ platformu. Tüm dünyadan başka insanlarla işbirliği içinde çalışmanıza, projelerinizi planlamanıza ve izlemenize olanak sağlıyor. Yaptığınız projelerin kodlarını buraya ekledikten sonra github linkinizi özgeçmişinize eklemeyi unutmayın diyoruz. Platforma [buradaki](https://github.com/) bağlantıdan ulaşabilirsiniz.  

![github](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/platformlar%C4%B1n-%C3%B6nemi/figures/github.png)

Kodlama yeteneğinizi geliştirmek için aşağıdaki siteleri de tavsiye ediyoruz.

## 6) CodeWars

Platforma [buradaki](https://www.codewars.com/) bağlantıdan ulaşabilirsiniz.  

![codewars](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/platformlar%C4%B1n-%C3%B6nemi/figures/codewars.png)

## 7) LeetCode

Platforma [buradaki](https://leetcode.com/) bağlantıdan ulaşabilirsiniz.  

![leetcode](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/platformlar%C4%B1n-%C3%B6nemi/figures/leetcode.png)

## 8) edabit

Platforma [buradaki](https://edabit.com/) bağlantıdan ulaşabilirsiniz.  

![edabit](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/platformlar%C4%B1n-%C3%B6nemi/figures/edabit.png)

## 9) repl.it

Platforma [buradaki](https://repl.it/) bağlantıdan ulaşabilirsiniz.  

![replit](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/platformlar%C4%B1n-%C3%B6nemi/figures/replit.png)

## 10) CodePen

Platforma [buradaki](https://codepen.io/) bağlantıdan ulaşabilirsiniz.  

![codepen](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/platformlar%C4%B1n-%C3%B6nemi/figures/codepen.png)

## 11) Exercism.io

Platforma [buradaki](https://exercism.io/) bağlantıdan ulaşabilirsiniz.  

![exercism](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/platformlar%C4%B1n-%C3%B6nemi/figures/exercism.png)

# Google Arama
## Google Arama Nasıl Çalışır?

Google arama motorunda klasik bir arama yaptığınızda, bunlara karşılık gelebilecek binlerce web sayfası bulabilirsiniz. Google bunları belli bir tekniğe göre bulur ve sıralar. Bunu bilirseniz aradıklarınızı çok daha rahat bir şekilde bulabilirsiniz.

**Bunu sıralamayı şu şekilde yapar:**

- Arama sayfasına yazdığınız kelimeyi, anlamına karşılık gelen kavramları, dilini ve bu kelimeyi aratan insanların ortak amacına göre bir algoritma çizer.

- Sorguladığınız kavram ile eşleşen web sayfalarını arar. Alakalı bir sayfa bulduğuna dair en temel sinyal ise arama sırasında kullandığınız anahtar kelimeleri içermesidir. Aranan kelimenin hangi sayfada sıklıkla kullanıldığını belirler. 

  **Örneğin:** ana başlıkta, alt başlıkta ya da metnin içinde kullanılıyor olabilir. Alaka düzeyinin artması için yoğunluğu yüksek sayfaları sıralamada yukarı taşır. *Bu durumda anahtar kelimeyi başlık ve alt başlıkta geçirmek üst sıralara çıkmanızı kolaylaştırır.*

- Sonuçları sunmaya bir adım kala web sayfalarındaki bilgilerin bir araya geliş şeklini değerlendirir. Yani sayfada tek bir konuya mı odaklanılmış yoksa birden çok konu tek seferde mi işlenmiş, buna bakılır. Olabildiğince kapsamlı ve geniş bilgiler içeren web sitelerinin bizlere daha çok yardımcı olacağı varsayımıyla hareket eder.

- Bulunduğunuz konumu, geçmiş aramalarınızı, arama için yaptığınız ayarları, geçmişte sık sık kullandığınız web sitelerini de dikkate alarak karşınıza bir sonuç sayfası çıkarır.



## Google Arama Nasıl Etkili Kullanılır?

Google ile gelişmiş filtreleme ve arama özelliklerini kullanabilirsiniz. **Google** her ne kadar gelişmiş filtreleme seçenekleri sunsa da kullanıcıların da atması gereken bir takım adımlar var. Bu adımlar sonuçların daha doğru ve daha net olmasını garantiliyor.

**Gelin şimdi atılması gereken adımları inceleyelim.**

1. **Mümkün olduğunca basite indirgeyin.**

Yapacağınız aramayı ne kadar komplike hale getirirseniz sonuçlar da bir o kadar karmaşık olacaktır. 

Bu yüzden aramanızı mümkün olduğunca **basit** tutun. Bu tavsiyeyi uygulayabilmek için aramak istediğiniz konu hakkında bir veya iki kelime seçin ve bu şekilde aratın. Bu aramadan çıkan sonuçlar yetersiz gelirse birkaç adet daha konuyla alakalı kelime yazarak arama yapabilirsiniz.

**Arama:** Türkiye’nin yüzölçümü kaç kilometrekaredir?

**Örnek arama:** Türkiye yüzölçümü

![g1](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/google/figures/g1.jpg)

2. **Kelimelerin dizilimine dikkat edin.**

Arama yaparken doğru kelimeleri seçmek kadar bu kelimelerin nasıl dizildiği de çok önemli. Google’da çıkacak **sonuçlar** tamamen yazdığınız kelimelerle alakalı olacağından anahtar kelimeleri mümkün olduğunca nokta atışı yapacak şekilde seçmek gerekiyor.

Google’da ünlü bir cümle veya özlü söz aratacağınız zaman anahtar kelimelerin sırasına mümkün olduğunca dikkat etmek gerekiyor.

**Arama:** Az düşünürse insan konuşur

**Örnek arama:** İnsan ne kadar az düşünürse, o kadar çok konuşur

Her ikisinde de sonuçlar çıkıyor fakat ikinci adımdaki mantığı uygularsanız daha karmaşık sonuçlar için daha etkili bir arama metodu uygulamış olursunuz.

3. **Gereksiz kelimeleri ve işaretleri atlayın**

Google yapılan aramalardaki eksikleri ve hataları düzeltebilecek kapasiteye sahip. Bu özelliği sayesinde Google anahtar kelime olarak belirtilenler arasından gereksiz olarak algıladıklarını zaten göz ardı edecektir. Bu yüzden o kelimeleri girmekle vakit harcamayın ve direkt olarak sonuç odaklı çalışın.

![g2](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/google/figures/g2.png)

**Not:** Google’da arama yaparken aşağıdaki maddelere dikkat etmeseniz de olur;

- Heceleme

- Büyük ve küçük harf

- Noktalama işaretleri

- Özel karakterler (parantez, artı, eksi vb.)

4. **Dosya tipleriyle arama yapın**

Özel bir **dosya türüne** ait bilgi için Google’da arama yaptığınızda "internetin zararları word" gibi arama kalıplarıyla istediğiniz sonuçlara ulaşamayabilirsiniz. Bunun için bir arama yöntemine sahip olan Google’da, aramak istediğiniz bilginin önüne `filetype:` ekini ve sonuna da **dosya türünü** getirmenizle beraber sadece o dosya türüne ait sonuçlar ekranınıza listelenecek. Bu akıllıca kullanıldığında gereksiz pek çok sayfayı elemenizi sağlar.

**Örnek arama:**  internetin zararları filetype:doc

![google10_1](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/google/figures/google10_1.png)

5. **Bir kısmını unuttuğunuz cümleleri arama**

Gün içerisinde bir söz veya şarkı sözü duyduğunuzda ancak bunun sadece belli kısımlarını anlayabildiğinizde ve tamamına ulaşmak istediğinizde Google’ın bu arama yöntemi fazlasıyla yardımcı oluyor. Böyle bir durumla karşılaştığınızda ise yapmanız gereken tek şey, **cümlenin bilmediğiniz kısmına** Google’da arama yaparken **"\* \*" ifadesini** eklemek. Ayrıca bu özelliği bir hata aldığınızda sizin cihazınıza özel alanları belirtmek için de kullanabilirsiniz.

![google9_1](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/google/figures/google9_1.jpeg)

6. **Birden fazla kelime ile arama yapma**

Birden fazla kelime ile arama yaptığınızda ve her kelimenin aramanın içinde geçmesini istiyorsanız çift tırnak kullanabilirsiniz. Aksi halde google bu kelimelerden bir kısmını eleyerek size sonuçlar gösterebilir.

**Örnek arama**: “kodluyoruz hakkında”

![google-hakkında](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/google/figures/google-hakk%C4%B1nda.png)

7. **Bir site içerisinde arama yapma**

Bir web sitesi içinde arama yapmak istiyorsanız `site:` özelliğini kullananabilirsiniz. Çoğu durumda sitelerin kendi arama özelliklerinden daha iyi çalışır.

**Örnek arama**: cs50x site:kodluyoruz.org

![googlesite](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/google/figures/googlesite.png)

8. **Sosyal aramalar**

Sosyal medya kanalları üzerinde aradığınız sonuçlar için yapacağınız aramalarda bazı noktalara dikkat etmeniz gerekiyor.

- **#[kelime]**

Hashtag (#) sembolünü kullanarak yapacağınız aramalarla Google+, Twitter ve diğer **sosyal** **medya** platformlarında yer alan hashtag’lere ait sonuçları listeleyebilirsiniz.

![g3](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/google/figures/g3.png)

- **@[kişi-ismi]**

Sosyal medya kanalları üzerinde yapacağınız kişi aramaları için kişi isminden önce "@" sembolünü kullanmanız gerekmekte.

![g4](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/google/figures/g4.png)

9. **Gün doğumu ve gün batımı sonuçları**

Google’ı dünya üzerindeki herhangi bir şehrin veya bölgenin gün doğumu ve gün batımı saatlerini öğrenmek için kullanabilirsiniz.

Bunu yapabilmek için;  *Gün doğumu/gün batımı, şehir ismi*

![g5](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/google/figures/g5.png)

10 **Eş anlamlı kelime ile arama yapma**.

Google’da herhangi bir anahtar kelimeyi eş anlamlı alternatifleriyle aratma şansına sahipsiniz.

`~` sembolünden sonra yazacağını herhangi bir kelime eş anlamlı alternatifleriyle aratılacak. Bu sembolü yapmak için;  Windows ve Linux için `Alt Gr + Ü`, MacOS için `option + Ü`  *(ardından kelimeyi yazın)*

![g6](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/google/figures/g6.jpg)

11. **Limitler arası arama yapma.**

Google’da belirli limitler arasında arama yapabilirsiniz. Bu limitler fiyat aralığı, tarih veya ölçü birimi olabilir.

**Örnek arama:** *3000..4000 TL Android telefon*

![g7](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/basics-for-everyone/google/figures/g7.png)

Elbette bu örneğe benzer şekilde birçok farklı arama gerçekleştirebilirsiniz.


**Google**’da arama yaparken bu adımları izleyerek daha **hedef** **odaklı** aramalar yapabilir ve arama yaparken harcayacağınız vakti hatırı sayılır ölçüde kısaltabilirsiniz. Bahsini ettiğimiz teknikleri tek tek uygulayabileceğiniz gibi birkaç tanesini **kombine** edip arama yapmak da mümkün.

Eğer siz de Google’ı aktif bir şekilde kullanıyorsanız arama sonuçlarınızı daha efektif hale getirmek için yukarıdaki önerileri uygulayabilirsiniz.

## Kaynaklar

- https://tr.wikipedia.org/wiki/Google
- https://en.wikipedia.org/wiki/Google
- https://www.crmmedya.com/google-nedir/
- https://www.vargonen.com/blog/arama-motoru-nedir/
- https://about.google/intl/ALL_tr/products/
- https://www.tamindir.com/blog/googlei-daha-etkili-kullanmak-icin-ipuclari_15804/
- https://www.webtekno.com/google-arama-yontemleri-h95625.html


