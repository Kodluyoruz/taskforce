# Genel Tutucu(Container), Satır Blokları(Row) ve Kolon(Col) Yapısı

**Container, row ve column** yapısı aslında Bootstrap kullanım mantığının temellerini oluşturuyor diyebiliriz. Bu yapıyı anlamak Bootstrap ile çalışmayı çok çok kolaylaştıracaktır. Öncelikle `container` ile başlayalım.

## `container`
Containerı(konteynır) isminden de biraz anlaşılacağı gibi, içine web sayfamızda bulunması gereken yazıları, resimleri, videoları veya herhangi bir içeriği koyduğumuz kapsayıcı bir çerçeve, kutu gibi düşünebiliriz. Biz içeriklerimizi bu container içerisine koyuyoruz ve bir tarayıcıdan web sayfamız görüntülendiğinde container kendisini ekranın tam ortasına gelecek şekilde ayarlıyor. Görsel bir örnek üzerinden ilerlemek daha açıklayıcı olacaktır. Örnek olarak aşağıda [kodluyoruz](https://www.kodluyoruz.org/)'dan aldığım bir ekran görüntüsünü inceleyebiliriz.

Becerilerini geliştir, Mezunlar Kulübü'ne Katıl ve  Şirketlerle Buluş kısımlarını kapsayan ancak bize gözükmeyen bir çerçeve olduğunu düşünelim. Bu çerçeve ile sayfayı görüntülediğim ekran arasında sağ taraftan ve sol taraftan eşit miktarda boşluklar var gördüğünüz gibi, yani container ortalanmış.

![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-genel-tutucucontainer%2C-satir-bloklarirow-ve-koloncol-yapisi/figures/kodluyoruz-container.png)

Kırmızı renk ile göstererek bu containeri gözümüzde canlandırmamızı kolaylaştırmaya çalıştım.

![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-genel-tutucucontainer%2C-satir-bloklarirow-ve-koloncol-yapisi/figures/kodluyoruz-container-red.png)

İşte sayfamızın içeriklerini böyle belirli ölçülerde containerlar içerisine koyuyoruz ve ayrıca containerlara vereceğimiz class isimlerine göre onlara farklı özellikler katıyoruz. Örneğin containerlar boyutlarını değiştirip responsive bir tasarım yapmamıza yardımcı oluyorlar. Yani biz bir sayfayı cep telefonu, tablet veya laptop ile görüntülediğimizde cihazların ekran boyutları farklı olacağı için, containerımızda kendisini bu ekran boyutuna göre yeniden ölçeklendiriyor, ortalıyor veya düzenliyor. Tüm sayfayı tek bir container içerisine koyup düzenleyebileceğimiz gibi, birden fazla container veya iç içe containerde kullanılabiliyor gerektiği durumlarda.

Aşağıdaki tabloyu [bootstrap](https://getbootstrap.com/docs/4.4/layout/overview/)'in official sayfasından bulabilirsiniz.

![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-genel-tutucucontainer%2C-satir-bloklarirow-ve-koloncol-yapisi/figures/container-sizes.png)

En soldaki sütunda container class isimlerini görüyoruz, mesela `.container` veya  `.container-md` gibi. Classların kullanımını örnek ile göstermek gerekirse;
`<div class="container-md"></div>` şeklinde bir HTML dosyası içerisinde kullanabiliriz. HTML dosyası içerisinde class isimleri tanımlarken başındaki "."(nokta) yı kaldırmamız gerekli. Peki bu tablo bize neyi anlatıyor? `.container-md` classını kullanarak bu tabloyu açıklamaya çalışacağım. `.container-md` classına sahip bir container;

* **extra small** bir cihazda, yani **576px'den küçük** olan bir cihazda, ekran boyutunun **100%**'ünü kaplamaktadır.
* **small** bir cihazda, yani **576px'den büyük veya eşit** olan bir cihazda, ekran boyutunun **100%**'ünü kaplamaktadır.
* **medium** bir cihazda, yani **768px'den büyük veya eşit** olan bir cihazda, bu containerın genişliği **720px** olacaktır.
* **large** bir cihazda, yani **992px'den büyük veya eşit** olan bir cihazda, bu containerın genişliği **960px** olacaktır.
* **X-large** bir cihazda, yani **1200px'den büyük veya eşit** olan bir cihazda, bu containerın genişliği **1140px** olacaktır.
* **XX-large** bir cihazda, yani **1400px'den büyük veya eşit** olan bir cihazda, bu containerın genişliği **1320px** olacaktır.

_boyutlar umarım kafa karışıklığına yol açmamıştır, örneğin small bir cihaz small boyutundan medium boyutuna kadar olan aralığı ifade ediyor._

Containerlarımız bu tablodaki verilen boyutlara göre kendilerini ortalayacak, etrafındaki boşlukları ayarlayacak ve değişen ekran boyutlarına tepki verecektir.
Genel olarak containerların kullanımı bu şekilde diyebiliriz.

## Row ve Column Yapısı
Row(satır), column(sütun) sistemi Bootstrap'in grid system(ızgara sistemi) denilen düzenini oluşturuyor. Grid system ile bir web sayfası 12 adet sütuna bölünmüş ve sayfanın içeriği bu sütunların boyutlarına göre düzenlenmiş diyebiliriz. Genel olarak göstermek gerekirse aşağıdaki resim örnek bir sayfanın 12 adet sütuna bölündüğünde hangi içeriğin hangi sütunlar boyutunda olacağını, aralarındaki boşlukları göstermektedir.

![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-genel-tutucucontainer%2C-satir-bloklarirow-ve-koloncol-yapisi/figures/overall-grid.png)

İçeriklerimizin genişliğini sütun yapısına göre belirliyoruz demiştik. Yani sayfamızda paylaşmak istediğimiz bir yazı, 12 sütunun 3 tanesini kapsayacak genişlikte olsun, kalan 9 sütun ise bir resim için ayrılmış olsun. Peki içeriklerin uzunluğunu neye göre belirliyoruz? İşte burada da satırları kullanıyoruz. Sayfamızı yukardan aşağıya satırlara bölüyoruz ve her satırın içerisinde ayrı ayrı sütun sayısı, boyutu belirleyebiliyoruz. Bu şekilde satırları ve sütunları bir container içerisinde kullandığımızda grid system uygulamış oluyoruz. Kafa karıştırıcı gibi gözükebilir ancak aşağıdaki resmi incelediğimizde her şey çok net anlaşılacaktır.

![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-genel-tutucucontainer%2C-satir-bloklarirow-ve-koloncol-yapisi/figures/grid-details.png)

- İlk Satır Birbirine Eşit Boyutta 12 Adet Sütundan
- İkinci Satır Birbirine Eşit Boyutta 3 Adet Sütundan
- Üçüncü Satır 2 Farklı Boyutta Sütundan
- Dördüncü Satır 2 Eşit Boyutta Sütundan
- Beşinci Satır İse Tek Bir Sütundan Oluşmaktadır.

Görüldüğü gibi 12 adet sütun yapısını istediğimiz biçimde birleştirerek, ayırarak satırlar ile birlikte kullanarak tasarımımızı yapabiliriz.

Son olarak ise grid yapısını oluşturmak için nasıl bir kod yapısı kullanmamız gerektiğini basit bir örnek ile anlamaya çalışalım.

![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-genel-tutucucontainer%2C-satir-bloklarirow-ve-koloncol-yapisi/figures/sample-grid.png)

Bu resimde gördüğümüz 2 satırdan oluşan grid yapısını aşağıdaki kod ile oluşturabiliriz.
```html
<div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
```
`div` HTML taglerine `class="row"` veya `class="col"` sınıfları vererek bu tagların ne amaçla kullanılacağını belirttik. Ayrıca dikkat ederseniz bu grid bir `class="container"` içerisinde bulunmakta.

Row ve column yapısının kullanımı ve mantığı genel hatlarıyla bu şekilde diyebiliriz.

## Kaynaklar:
- https://www.kodluyoruz.org/
- https://getbootstrap.com/docs/4.4/layout/overview/
- https://960.gs/
- https://www.w3schools.com/bootstrap/bootstrap_grid_system.asp
- https://getbootstrap.com/docs/4.0/layout/grid/
