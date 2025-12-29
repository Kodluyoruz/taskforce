# CSS INDEX

## [CSS Nedir?](css-nedir/)
### Sorular
1. Aşağıdakilerden hangisi CSS için söylenemez?
	- Açılımı Cascading Style Sheets'tir.
	- HTML elemanlarının nasıl görüntüleneceğini tanımlar.
	- .css uzantılı dosyalarda saklanırlar.
	- Css dosyalarında Javascript kodları saklanabilir.(doğru)
2. Aşağıdakilerden hangisi metnin rengini belirler?
	- color (doğru)
	- text-align
	- text-transform
	- word-spacing
3. "kodluyoruz.css" adlı bir css dosyasını html sayfasına dahil etmek için en uygun seçenek aşağıdakilerden hangisidir?
	- `<head> <link rel="stylesheet" type="text/css" href="kodluyoruz.css"> </head>` (doğru)
	- `<body> <link rel="stylesheet" type="text/css" href="kodluyoruz.css"> </body>`
	- `<head> <link rel="stylesheet" type="text/css" href="kodluyoruz"> </head>`
	- `<head> <link type="text/css" href="kodluyoruz.css"> </head>`

### Video
1. https://www.youtube.com/watch?v=ZhVPut2OTeY
	- Bu videoda; CSS'in bir stil şablonu olduğunu, CSS ile birlikte neler yapabileceğimizi ve CSS'in bir HTML sayfasını nasıl etkilediğini anlattık.

## [CSS - Inline CSS Nasıl Kullanılır](css-inline-css-nasil-kullanilir/)
- [İçerik Eksik]
### Sorular
1. Yok

### Videolar
1. https://www.youtube.com/watch?v=hU4CHUW_0EU
	- Bu videoda; CSS kurallarının neler olduğunu, style oluştururken nelere dikkat edilmesi gerektiğini, Inline CSS özelliğini ve özellik değeri vererek style oluşturmayı anlattık.

## [Inline(Etikete Özel), Internal(Aynı Dosyada) ve External(CSS Dosyasında) CSS Kullanımı](inlineetikete-ozel,-internalayni-dosyada-ve-externalcss-dosyasinda-css-kullanimi/)

### Sorular
1. Internal yöntemi kullanırken yazdığımız CSS kodlarını hangi element içine yazmamız gerekir?
	- `<body>`
	- `<script>`
	- `<head>` (Doğru)
	- `<footer>`
2. Aşağıda verilen kod hangi CSS yöntemi ile kullanılmıştır?
```html
<!DOCTYPE html>
<html>
<head>
<title>This is a title.</title>
</head>
<body>
<h1 style="color:blue; font-size:50px;"> This is a heading. </h1>
<p> This is my space. </p>
</body>
</html>
```
	- Internal
	- Inline (Doğru)
	- Float
	- External

### Video
1. https://www.youtube.com/watch?v=hU4CHUW_0EU
	- Bu videoda; CSS kurallarının neler olduğunu, style oluştururken nelere dikkat edilmesi gerektiğini, Inline CSS özelliğini ve özellik değeri vererek style oluşturmayı anlattık. 

## [Açıklama Satırları ile Çalışmak ve Genel Font Özellikleri](aciklama-satirlari-ile-calismak-ve-genel-font-ozellikleri/)
- [İçerik Eksik]
### Sorular
1. Yok

### Videolar
1. https://www.youtube.com/watch?v=LYMK0VARbiY
	- Bu videoda; CSS de açıklama satırı eklemeyi, açıklama satırı eklerken kullanılan klavye kısayollarını ve açıklama satırlarının neden kullanıldığını; yazı özelliklerini, boyutunu, yazının rengini ve arkaplanın nasıl belirlendiğini anlattık. Ayrıca yazı fontunu belirlemek için dış kaynaklardan nasıl yararlanabileceğinizi de gösterdik.

## [CSS ile Class ve ID Kullanımı](css-ile-class-ve-id-kullanimi/)

### Sorular
1. Aşağıdakilerden hangisi doğru bir kullanımdır?
	- `title#{color:blue;}`
	- `title#{color:blue;}`
	- `.title{color:green;}` (Doğru)
	- `title{color:pink;}`
2. Aşağıdaki ifadelerden hangisi yanlıştır?
	- Bir html elementi birden fazla class'a sahip olabilir.
	- Bir html elementi sadece bir id'ye sahip olabilir.
	- Bir class birden fazla html elementinde kullanılabilir.
	- Bir id birden fazla html elementinde kullanılabilir. (Doğru)
3. Aşağıdaki kodun çıktısı nedir?
```html
 <p class="main-text intro"> Birinci paragraf</p>
 <p class="main-text"> İkinci paragraf</p>
 <p id="outro"> Üçüncü paragraf</p>
```
```css
 .main-text {
 font-style: italic;
 }
 
 .intro {
 color:red;
 }
 
 #outro {
 color:green;
 }
```
  - ![A Şıkkı](https://raw.githubusercontent.com/Kodluyoruz/taskforce/css/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_8.jpg)
  - ![B Şıkkı](https://raw.githubusercontent.com/Kodluyoruz/taskforce/css/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_7.jpg) (D)
  - ![C Şıkkı](https://raw.githubusercontent.com/Kodluyoruz/taskforce/css/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_9.jpg)
  - ![D Şıkkı](https://raw.githubusercontent.com/Kodluyoruz/taskforce/css/css/css-ile-class-ve-id-kullanimi/assets/Screenshot_10.jpg)

### Videolar
1. https://www.youtube.com/watch?v=BvaZdSDImeY
	- Bu videoda HTML etiketlerinde belirttiğimiz Class ve ID yapılarına nasıl CSS özellikleri verilebileceğini ve bazı Emmet özelliklerini anlattık.

## [CSS Seçiciler ile Çalışmak, İstediğimiz HTML Etiket Yapısına Özelliklik Ekleyebilmek](css-seciciler-ile-calismak,-i̇stedigimiz-html-etiket-yapisina-ozelliklik-ekleyebilmek/)

### Sorular

1. Aşağıdaki kod bloğunda hangi satıra CSS uygulanmıştır ?
```css
.container > p.intro + ul > li:first-child {
color: orange;
}
```
```html
 <div class="container">
 <h2>Kodluyoruz</h2>
 <p class="intro">Lorem ipsum dolor sit amet.</p>
 <ul class="list">
 <li>HTML</li>
 <li>CSS</li>
 <li>Javascript</li>
 </ul>
 </div>
 <p class="intro">Lorem, ipsum.</p>
 <div class="container">
 <h2>Kodluyoruz</h2>
 <p>Lorem ipsum dolor sit.</p>
 <ul class="list">
 <li>Bootstrap</li>
 <li>React</li>
 <li>Angular</li>
</ul>
 </div>
```
	- `<p class="intro">Lorem ipsum dolor sit amet.</p>`
	- `<li>Bootstrap</li>`
	- `<li>HTML</li>` (Doğru)
	- `<li>CSS</li>`
2. Aşağıdaki kod bloğuna göre, bitişik kardeş etiketi p etiketi olan ve parentinin sınıf özelliği container olan h2 etiketine nasıl erişilir ?
```css
.container > p.intro + ul > li:first-child {
color: orange;
}
```
```html
 <div class="container">
 <h2>Kodluyoruz</h2>
 <p class="intro">Lorem ipsum dolor sit amet.</p>
 <ul class="list">
 <li>HTML</li>
 <li>CSS</li>
 <li>Javascript</li>
 </ul>
 </div>
 <p class="intro">Lorem, ipsum.</p>
 <div class="container">
 <h2>Kodluyoruz</h2>
 <p>Lorem ipsum dolor sit.</p>
 <ul class="list">
 <li>Bootstrap</li>
 <li>React</li>
 <li>Angular</li>
</ul>
 </div>
```
	- `p.intro +h2`
	- `.container h2`
	- `.container + h2`
	- `p + .container h2` (D)
3. `a[href$="org"]:hover` ile ifade edilmek istenen nedir?
	- a etiketi href özelliğinde başında "org" olan etiketin üzerine gelindiğinde
	- a etiketi üzerine gelindiğinde
	- href özelliği olan a etiketlerini
	- a etiketi href özelliği içinde sonunda org olan etiketin üzerine gelindiğinde (Doğru)

### Video
1. https://www.youtube.com/watch?v=iScCq-8OWSE
	- Bu videoda; CSS seçicileri ile HTML sayfasında bulunan herhangi bir elementi veya birden fazla elementi seçerek elementin özelliklerinin değiştirilmesini anlattık. Bununla birlikte bir başlığı seçip başlığın büyüklüğünü ve rengini değiştirme veya li etiketinin first-child(ilk eleman)/last-child(son eleman) gibi yapılarının seçilerek değiştirilmesi üzerine egzersizler gerçekleştirdik.

## [CSS Kutu Özellikleri(Margin, Padding, Width, Height) Kullanımı](css-kutu-ozelliklerimargin,-padding,-width,-height-kullanimi/)

### Sorular
1. Hangisi içeriğin aşağısında boşluk bırakır?
	- bottom-padding: 20px;
	- padding: 0 20px 0 0;
	- padding-bottom: 20px; (Doğru)
	- padding: 20px;
2. Hangisi kutu modeline ait bir kavram değildir?
	- margin
	- align (Doğru)
	- padding
	- border

### Videolar
1. https://www.youtube.com/watch?v=NLZpTcHyoGU
	- Bu videoda; CSS ile birlikte bloklar oluşturmayı, blokların içine başlıklar ve paragraflar eklemeyi, blokların birbirine olan uzaklığını marjin ile ayarlamayı, blokların dışı ve içeriği arasındaki boşluğu padding ile ayarlamayı, blokları yanyana getirme ve bloklara şekil vermeyi anlattık. 

## [CSS Flexbox ile Çalışmak](css-flexbox/)

### Sorular
1. Bir elementi flex container yapmak için hangi CSS özelliği kullanılır?
	- display: block;
	- display: inline;
	- display: flex; (Doğru)
	- display: grid;
2. Flex öğelerinin ana eksen boyunca hizalanmasını sağlayan özellik hangisidir?
	- align-items
	- justify-content (Doğru)
	- flex-direction
	- align-content
3. Flex öğelerinin dikey olarak (yukarıdan aşağıya) dizilmesi için hangi değer kullanılır?
	- flex-direction: row;
	- flex-direction: column; (Doğru)
	- flex-direction: wrap;
	- flex-direction: vertical;
4. Flex öğelerinin birden fazla satıra yerleşmesini sağlayan özellik hangisidir?
	- flex-wrap: wrap; (Doğru)
	- flex-direction: wrap;
	- flex-flow: wrap;
	- display: wrap;
5. Bir flex öğesinin diğerlerinden daha fazla büyümesini sağlamak için hangi özellik kullanılır?
	- flex-size
	- flex-grow (Doğru)
	- flex-expand
	- flex-basis
6. Flex container'daki öğeleri hem yatay hem dikey olarak ortalamak için hangi özellikler birlikte kullanılır?
	- justify-content: center; ve align-items: center; (Doğru)
	- text-align: center; ve vertical-align: middle;
	- margin: auto; ve padding: auto;
	- flex-center: true;

### Videolar
1. CSS Flexbox ile modern ve responsive layout'lar oluşturmayı, flex container ve flex item özelliklerini, justify-content ve align-items ile hizalama yapmayı öğrendik. Ayrıca pratik örneklerle navigation bar, card layout ve responsive grid yapılarını inceledik.

## [CSS Grid ile Çalışmak](css-grid/)

### Sorular
1. Bir elementi grid container yapmak için hangi CSS özelliği kullanılır?
	- display: block;
	- display: flex;
	- display: grid; (Doğru)
	- display: table;
2. Grid container'da sütun sayısını belirlemek için hangi özellik kullanılır?
	- grid-rows
	- grid-template-columns (Doğru)
	- grid-columns
	- column-count
3. Grid öğeleri arasındaki boşluğu ayarlamak için hangi özellik kullanılır?
	- grid-space
	- margin
	- gap (Doğru)
	- padding
4. Bir grid öğesinin 2 sütun kaplaması için hangi özellik kullanılır?
	- grid-column: span 2; (Doğru)
	- grid-width: 2;
	- column-span: 2;
	- grid-size: 2;
5. Grid satır yüksekliklerini belirlemek için hangi özellik kullanılır?
	- grid-height
	- row-template
	- grid-template-rows (Doğru)
	- grid-rows
6. Grid öğelerini yatay olarak hizalamak için hangi özellik kullanılır?
	- align-items
	- justify-items (Doğru)
	- text-align
	- horizontal-align

### Videolar
1. CSS Grid ile modern ve güçlü layout'lar oluşturmayı, grid container ve grid item özelliklerini, grid-template-columns ve grid-template-rows ile yapı oluşturmayı öğrendik. Ayrıca pratik örneklerle responsive grid layout, card gallery ve dashboard yapılarını inceledik.

## [CSS Transitions - Geçişler ile Animasyonlar](css-transitions/)

### Sorular
1. CSS Transitions kullanmanın temel amacı nedir?
	- Sayfayı daha hızlı yüklemek
	- Kullanıcı etkileşimlerine yumuşak görsel geri bildirim vermek (Doğru)
	- JavaScript kodunu azaltmak
	- HTML yapısını basitleştirmek
2. Bir transition'ın ne kadar süreceğini belirleyen özellik hangisidir?
	- transition-speed
	- transition-duration (Doğru)
	- transition-time
	- transition-length
3. Aşağıdaki timing function'lardan hangisi yavaş başlar, hızlanır ve yavaş biter?
	- linear
	- ease (Doğru)
	- ease-in
	- ease-out
4. Transition kısa yolu (shorthand) için doğru sıralama hangisidir?
	- duration property timing-function delay
	- property duration timing-function delay (Doğru)
	- property timing-function duration delay
	- timing-function property duration delay
5. Aşağıdaki özelliklerden hangisi transition yapamaz?
	- opacity
	- transform
	- display (Doğru)
	- background-color
6. Performans açısından en iyi transition özellikleri hangileridir?
	- width ve height
	- margin ve padding
	- transform ve opacity (Doğru)
	- top ve left
7. Transition'ın başlamadan önce beklemesini sağlayan özellik hangisidir?
	- transition-wait
	- transition-delay (Doğru)
	- transition-pause
	- transition-timeout
8. Hareket hassasiyeti olan kullanıcılar için hangi media query kullanılır?
	- @media (motion: reduced)
	- @media (prefers-reduced-motion) (Doğru)
	- @media (no-animation)
	- @media (accessibility: motion)
9. Bir butonun hover ve normal durumu için farklı transition süreleri tanımlanabilir mi?
	- Hayır, sadece bir transition tanımlanabilir
	- Evet, her durum için ayrı transition tanımlanabilir (Doğru)
	- Sadece JavaScript ile mümkün
	- Sadece animation ile mümkün
10. Optimal transition süresi genellikle ne kadardır?
	- 50-100ms
	- 150-500ms (Doğru)
	- 1-2 saniye
	- 3-5 saniye

### Videolar
1. CSS Transitions ile kullanıcı etkileşimlerine yumuşak görsel geri bildirimler vermeyi, transition-property, transition-duration, transition-timing-function ve transition-delay özelliklerini öğrendik. Pratik örneklerle buton hover efektleri, kart animasyonları, form input odaklanma efektleri ve performans optimizasyonlarını inceledik. Ayrıca erişilebilirlik için prefers-reduced-motion kullanımını ve en iyi pratikleri öğrendik.

## [CSS Animations (@keyframes) - İleri Seviye Animasyonlar](css-animations/)

### Sorular
1. CSS Animations ile CSS Transitions arasındaki temel fark nedir?
	- Animations daha hızlıdır
	- Animations otomatik başlayabilir ve çok adımlı olabilir (Doğru)
	- Transitions daha karmaşıktır
	- Aralarında fark yoktur
2. @keyframes kuralında animasyon adımlarını belirtmek için ne kullanılır?
	- Sadece from ve to
	- Sadece yüzde değerleri
	- Hem from/to hem de yüzde değerleri kullanılabilir (Doğru)
	- Sadece pixel değerleri
3. Bir animasyonun sonsuz döngüde çalışması için hangi değer kullanılır?
	- animation-iteration-count: infinite (Doğru)
	- animation-iteration-count: loop
	- animation-repeat: forever
	- animation-duration: infinite
4. Animasyonun ileri-geri-ileri şeklinde çalışması için hangi özellik kullanılır?
	- animation-direction: reverse
	- animation-direction: alternate (Doğru)
	- animation-direction: both
	- animation-iteration-count: 2
5. Animasyon bittiğinde son frame'deki stillerin korunması için hangi değer kullanılır?
	- animation-fill-mode: none
	- animation-fill-mode: forwards (Doğru)
	- animation-fill-mode: backwards
	- animation-fill-mode: stay
6. Loading spinner animasyonları için genellikle hangi timing function kullanılır?
	- ease
	- ease-in-out
	- linear (Doğru)
	- ease-out
7. Bir animasyonu duraklatmak için hangi özellik kullanılır?
	- animation-pause: true
	- animation-stop
	- animation-play-state: paused (Doğru)
	- animation-running: false
8. CSS Variables ile animasyonları özelleştirmenin avantajı nedir?
	- Daha hızlı çalışır
	- Tek bir @keyframes tanımı ile birden fazla varyasyon oluşturulabilir (Doğru)
	- Daha az kod yazılır
	- Tarayıcı desteği daha iyidir
9. from anahtar kelimesi aslında hangi yüzde değerinin kısayoludur?
	- 0% (Doğru)
	- 10%
	- 50%
	- 100%
10. Performans açısından animasyon için en iyi özellikler hangileridir?
	- width ve height
	- margin ve padding
	- transform ve opacity (Doğru)
	- left ve top
11. Çok adımlı bir animasyonda timing function nasıl uygulanır?
	- Tüm animasyon için bir kez
	- Her adım için ayrı ayrı (Doğru)
	- Sadece ilk ve son adım için
	- Hiç uygulanmaz
12. animation-delay için negatif değer kullanmanın etkisi nedir?
	- Animasyon çalışmaz
	- Animasyon ortasından başlar (Doğru)
	- Animasyon ters yönde başlar
	- Hata verir

### Videolar
1. CSS Animations (@keyframes) ile karmaşık ve çok adımlı animasyonlar oluşturmayı, animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction ve animation-fill-mode özelliklerini öğrendik. Pratik örneklerle loading spinner, zıplayan top, pulse efekti, slide-in animasyonları, typing efekti ve shake animasyonlarını inceledik. Ayrıca fill modes'un detaylı açıklamasını, CSS Variables ile dinamik animasyonlar oluşturmayı, performans optimizasyonlarını ve erişilebilirlik için prefers-reduced-motion kullanımını öğrendik.

## [CSS Media Queries - Responsive Tasarım Temelleri](css-media-queries/)

### Sorular
1. Responsive web tasarımının temel amacı nedir?
	- Sayfayı daha hızlı yüklemek
	- İçeriğin farklı cihazlarda optimize görünmesini sağlamak (Doğru)
	- JavaScript kullanımını azaltmak
	- Daha az CSS yazmak
2. Viewport meta tag'inde width=device-width ne anlama gelir?
	- Sayfanın genişliğini 100px yapar
	- Sayfanın genişliğini cihazın ekran genişliğine eşitler (Doğru)
	- Sayfanın genişliğini sabitler
	- Sayfayı tam ekran yapar
3. Mobile-first yaklaşımında hangi media query kullanılır?
	- max-width
	- min-width (Doğru)
	- width
	- device-width
4. Aşağıdaki media type'lardan hangisi yazdırma için kullanılır?
	- screen
	- print (Doğru)
	- paper
	- document
5. Ekran yönelimini kontrol etmek için hangi media feature kullanılır?
	- direction
	- orientation (Doğru)
	- rotation
	- screen-mode
6. Dokunmatik cihazlar için hangi pointer değeri kullanılır?
	- fine
	- coarse (Doğru)
	- touch
	- mobile
7. Koyu tema tercihini tespit etmek için hangi media query kullanılır?
	- prefers-dark-mode
	- prefers-color-scheme: dark (Doğru)
	- dark-mode
	- color-theme: dark
8. Media query'lerde VE mantığı için hangi operatör kullanılır?
	- &&
	- and (Doğru)
	- +
	- &
9. Yaygın tablet breakpoint'i genellikle kaç pikseldir?
	- 480px
	- 768px (Doğru)
	- 1024px
	- 1200px
10. Aşağıdaki media query sözdizimlerinden hangisi doğrudur?
	- @media screen and (min-width: 768px) { } (Doğru)
	- @media (screen: min-width: 768px) { }
	- @media min-width: 768px { }
	- media screen (min-width: 768px) { }
11. Hover yapılabilen cihazları tespit etmek için hangi media feature kullanılır?
	- can-hover
	- hover (Doğru)
	- pointer-hover
	- mouse
12. Breakpoint seçerken en iyi yaklaşım nedir?
	- Popüler cihaz boyutlarına göre seçmek
	- İçeriğin ne zaman bozulduğuna göre seçmek (Doğru)
	- Her 100px'de bir breakpoint eklemek
	- Sadece 768px ve 1024px kullanmak

### Videolar
1. CSS Media Queries ile responsive web tasarımı yapmayı, viewport meta tag kullanımını, media types (screen, print, all), media features (width, height, orientation, hover, pointer, prefers-color-scheme, prefers-reduced-motion) ve mantıksal operatörleri (and, or, not) öğrendik. Pratik örneklerle responsive navigation, grid layout, typography, images, sidebar layout, dark mode ve print styles oluşturmayı inceledik. Ayrıca mobile-first yaklaşımı, breakpoint seçimi, modern CSS alternatifleri (CSS Grid auto-responsive, Flexbox, Container Queries) ve DevTools ile test etmeyi öğrendik.

## [CSS Variables (Custom Properties) - Modern CSS Özelliği](css-variables/)

### Sorular
1. CSS değişkenlerini tanımlamak için hangi önek kullanılır?
	- $
	- @
	- -- (Doğru)
	- _
2. Bir CSS değişkenini kullanmak için hangi fonksiyon kullanılır?
	- use()
	- get()
	- var() (Doğru)
	- val()
3. Değişkenlerin tüm sayfada geçerli olması için hangi seçici içinde tanımlanmalıdır?
	- body
	- html
	- *
	- :root (Doğru)
4. CSS değişkenleri ile SASS değişkenleri arasındaki en önemli fark nedir?
	- SASS değişkenleri daha hızlıdır
	- CSS değişkenleri tarayıcıda dinamik olarak değiştirilebilir (Doğru)
	- CSS değişkenleri sadece renkler için kullanılır
	- Aralarında fark yoktur
5. Bir değişken tanımlanmamışsa yedek değer kullanmak için doğru sözdizimi hangisidir?
	- var(--color, red) (Doğru)
	- var(--color || red)
	- var(--color) or red
	- if(--color, red)
6. JavaScript ile bir CSS değişkenini güncellemek için hangi metod kullanılır?
	- element.style.variable = value
	- element.style.setProperty('--name', value) (Doğru)
	- element.css('--name', value)
	- element.setVariable('--name', value)
7. CSS değişkenleri miras (inheritance) alır mı?
	- Hayır, her element için yeniden tanımlanmalıdır
	- Evet, ebeveyn elementten çocuklara geçer (Doğru)
	- Sadece :root içindekiler miras alınır
	- Sadece renkler miras alınır
8. CSS değişkenleri media queries içinde değiştirilebilir mi?
	- Hayır, sabittir
	- Evet, responsive tasarım için kullanılabilir (Doğru)
	- Sadece JavaScript ile değiştirilebilir
	- Sadece SASS ile değiştirilebilir
9. @property kuralının temel amacı nedir?
	- Değişkenleri gizlemek
	- Değişkenlere tip ve varsayılan değer atamak (Doğru)
	- Değişkenleri silmek
	- Değişkenleri global yapmak
10. CSS değişkenleri hangi değerleri alabilir?
	- Sadece renkler
	- Sadece sayılar
	- Herhangi bir geçerli CSS değeri (Doğru)
	- Sadece metinler

### Videolar
1. CSS Variables (Custom Properties) ile modern ve dinamik stiller oluşturmayı, değişken tanımlama (--name) ve kullanma (var()) sözdizimini, kapsam (scope) ve miras (inheritance) mantığını öğrendik. Pratik örneklerle tema yönetimi (dark/light mode), responsive değerler, JavaScript ile etkileşim, calc() ve HSL fonksiyonları ile kullanımını inceledik. Ayrıca fallback değerleri, @property kuralı ile tip kontrolü ve SASS değişkenleri ile karşılaştırmasını öğrendik.

## [CSS Units (Birimler) - px, em, rem, %, vw, vh](css-units/)

### Sorular
1. Aşağıdakilerden hangisi mutlak (absolute) bir birimdir?
	- em
	- rem
	- px (Doğru)
	- vw
2. `rem` birimi neye göre hesaplanır?
	- Ebeveyn elementin font boyutuna göre
	- Kök elementin (html) font boyutuna göre (Doğru)
	- Ekran genişliğine göre
	- Kendi font boyutuna göre
3. `em` birimi `font-size` özelliğinde kullanıldığında neye göre hesaplanır?
	- Kendi font boyutuna göre
	- Ebeveyn elementin font boyutuna göre (Doğru)
	- Kök elementin font boyutuna göre
	- Ekran yüksekliğine göre
4. 100vw neyi ifade eder?
	- Ekran yüksekliğinin %100'ü
	- Ekran genişliğinin %100'ü (Doğru)
	- Ebeveyn elementin genişliğinin %100'ü
	- Yazı boyutunun %100'ü
5. Metin paragraflarının genişliğini sınırlamak ve okunabilirliği artırmak için en uygun birim hangisidir?
	- px
	- vh
	- ch (Doğru)
	- cm
6. Mobil tarayıcılarda adres çubuğu sorununu çözmek için hangi birim kullanılır?
	- vh
	- px
	- dvh (Doğru)
	- %
7. Responsive tipografi ve erişilebilirlik için genellikle hangi birim önerilir?
	- px
	- rem (Doğru)
	- pt
	- cm
8. `vmin` birimi nasıl çalışır?
	- vw ve vh arasından büyük olanı alır
	- vw ve vh arasından küçük olanı alır (Doğru)
	- vw ve vh ortalamasını alır
	- Sadece mobilde çalışır
9. Kenarlık (border) kalınlığı için genellikle hangi birim tercih edilir?
	- %
	- rem
	- px (Doğru)
	- vw
10. `1.5em` ne anlama gelir?
	- Referans değerin 1.5 katı (Doğru)
	- 1.5 piksel
	- Ekranın %1.5'i
	- 15 piksel

### Videolar
1. CSS Birimlerini (Units) detaylıca inceledik. Mutlak birimler (px, cm) ve göreceli birimler (%, em, rem, ch) arasındaki farkları, viewport birimlerini (vw, vh, vmin, vmax) ve modern viewport birimlerini (dvh, svh, lvh) öğrendik. Hangi birimin nerede kullanılması gerektiğini (fontlar için rem, layout için %, border için px vb.) pratik örneklerle pekiştirdik.

## [CSS Specificity (Özgüllük) - CSS Öncelik Kuralları](css-specificity/)

### Sorular
1. CSS Specificity (Özgüllük) ne anlama gelir?
	- CSS dosyasının boyutu
	- Aynı elemente birden fazla kural uygulandığında hangisinin geçerli olacağını belirleyen öncelik sistemi (Doğru)
	- CSS kodunun hızı
	- Tarayıcı uyumluluğu
2. Aşağıdaki seçicilerden hangisi en yüksek specificity'ye sahiptir?
	- Element seçici (p)
	- Class seçici (.text)
	- ID seçici (#header) (Doğru)
	- Universal seçici (*)
3. Inline style'ın specificity değeri nedir?
	- 0,0,0,1
	- 0,0,1,0
	- 0,1,0,0
	- 1,0,0,0 (Doğru)
4. `.container p` seçicisinin specificity değeri nedir?
	- 0,0,0,1
	- 0,0,1,1 (Doğru)
	- 0,1,0,1
	- 0,0,2,0
5. `#header .nav a:hover` seçicisinin specificity hesaplaması nasıl yapılır?
	- 0,1,2,1 (1 ID, 1 class + 1 pseudo-class, 1 element) (Doğru)
	- 0,1,1,2
	- 0,2,1,1
	- 1,1,2,1
6. !important kullanımı hakkında hangisi doğrudur?
	- Her zaman kullanılmalıdır
	- Tüm specificity kurallarını geçersiz kılar (Doğru)
	- Sadece ID seçicilerde çalışır
	- Performansı artırır
7. Aşağıdaki en iyi pratiklerden hangisi yanlıştır?
	- Class kullanmayı tercih edin
	- Düşük specificity tutun
	- Mümkün olduğunca !important kullanın (Doğru)
	- BEM metodolojisi kullanın
8. Pseudo-class seçicilerin (:hover, :focus) specificity değeri nedir?
	- 0,0,0,1
	- 0,0,1,0 (Doğru)
	- 0,1,0,0
	- 1,0,0,0
9. Universal selector (*) specificity değeri nedir?
	- 0,0,0,0 (Doğru)
	- 0,0,0,1
	- 0,0,1,0
	- 1,0,0,0
10. Aşağıdaki seçicilerden hangisi daha özgüldür (specific)?
	- div p
	- .container p (Doğru)
	- p
	- *
11. ID seçici yerine class kullanmanın avantajı nedir?
	- Daha hızlıdır
	- Override etmek daha kolaydır (Doğru)
	- Daha az kod yazılır
	- Tarayıcı desteği daha iyidir
12. BEM metodolojisinin amacı nedir?
	- CSS'i hızlandırmak
	- Tutarlı isimlendirme ve düşük specificity sağlamak (Doğru)
	- Dosya boyutunu küçültmek
	- JavaScript ile entegrasyonu kolaylaştırmak

### Videolar
1. CSS Specificity (Özgüllük) kavramını detaylıca öğrendik. Specificity hiyerarşisini (inline style, ID, class, element), specificity hesaplama yöntemini (a,b,c,d formatı), !important kuralını ve neden kullanılmaması gerektiğini inceledik. Pratik örneklerle stil çakışmalarını çözmeyi, en iyi pratikleri (class kullanımı, düşük specificity, BEM metodolojisi) ve yaygın hataları (inline style override, !important savaşları) öğrendik.

## [CSS Combinators (Birleştiriciler) - İleri Seviye Seçici Teknikleri](css-combinators/)

### Sorular
1. Hangi combinator bir elementin sadece **doğrudan** çocuklarını seçer?
	- Boşluk (Descendant)
	- `>` (Child) (Doğru)
	- `+` (Adjacent Sibling)
	- `~` (General Sibling)
2. `div p` seçicisi aşağıdakilerden hangisini seçer?
	- Sadece div'in içindeki ilk p'yi
	- Sadece div'in doğrudan çocuklarını
	- div'in içindeki tüm p etiketlerini (torunlar dahil) (Doğru)
	- div'den hemen sonra gelen p'yi
3. Bitişik kardeş seçici (Adjacent Sibling Selector) için hangi sembol kullanılır?
	- `>`
	- `~`
	- `+` (Doğru)
	- `-`
4. `h1 ~ p` seçicisi neyi ifade eder?
	- h1'in içindeki tüm p'leri
	- h1'den hemen sonra gelen ilk p'yi
	- h1'den sonra gelen ve aynı ebeveyne sahip tüm p kardeşleri (Doğru)
	- h1'den hemen önceki p'yi
5. `ul > li` seçicisi ile `ul li` seçicisi arasındaki fark nedir?
	- Fark yoktur
	- `ul > li` sadece doğrudan çocukları, `ul li` ise tüm alt li'leri seçer (Doğru)
	- `ul li` sadece doğrudan çocukları, `ul > li` ise tüm alt li'leri seçer
	- `ul > li` daha yavaştır
6. Form tasarımında label'dan hemen sonra gelen input'u seçmek için hangi combinator idealdir?
	- `label input`
	- `label > input`
	- `label ~ input`
	- `label + input` (Doğru)
7. "Lobotomized Owl" seçicisi olarak bilinen `* + *` ne işe yarar?
	- Tüm elementleri seçer
	- Sadece ilk elementi seçer
	- Akıştaki elementler arasına (ilk hariç) stil uygular (Doğru)
	- Sadece text elementlerini seçer
8. Descendant selector (boşluk) hangi ilişki türünü temsil eder?
	- Kardeş
	- Ebeveyn-Çocuk (Doğru)
	- Komşu
	- Hiçbiri
9. Aşağıdaki seçicilerden hangisi bir elementin hem `.box` hem de `.featured` class'ına sahip olmasını gerektirir?
	- `.box .featured`
	- `.box > .featured`
	- `.box.featured` (Doğru)
	- `.box + .featured`
10. Bir elementin **hemen** ardından gelen kardeşi seçmek için hangi combinator kullanılır?
	- General Sibling (`~`)
	- Child (`>`)
	- Adjacent Sibling (`+`) (Doğru)
	- Descendant (Boşluk)

### Videolar
1. CSS Combinators (Birleştiriciler) konusunu detaylıca inceledik. Dört temel combinator türünü (Descendant, Child, Adjacent Sibling, General Sibling) ve aralarındaki farkları öğrendik. Pratik örneklerle menü tasarımı, form düzeni ve içerik akışı gibi senaryolarda doğru combinator kullanımını pekiştirdik. Ayrıca "Lobotomized Owl" tekniği gibi ileri seviye kullanımları da gördük.

## [CSS Pseudo-classes & Pseudo-elements - Sözde Sınıflar ve Elementler](css-pseudo-classes/)

### Sorular
1. Pseudo-class (`:`) ile Pseudo-element (`::`) arasındaki temel fark nedir?
	- Hiçbir fark yoktur
	- Pseudo-class elementin durumunu/konumunu belirtir, Pseudo-element ise sanal bir parça seçer (Doğru)
	- Pseudo-class sanal parça seçer, Pseudo-element durum belirtir
	- Pseudo-class sadece linklerde kullanılır
2. Bir elementin üzerine fare ile gelindiğinde stil değiştirmek için hangisi kullanılır?
	- `:active`
	- `:focus`
	- `:hover` (Doğru)
	- `::after`
3. Formun içindeki herhangi bir eleman odaklandığında ebeveyn formu stilize etmek için hangi pseudo-class kullanılır?
	- `:focus`
	- `:focus-within` (Doğru)
	- `:active`
	- `:checked`
4. Bir listenin sadece **çift** sıradaki elemanlarını seçmek için hangisi kullanılır?
	- `:nth-child(odd)`
	- `:nth-child(2)`
	- `:nth-child(even)` (Doğru)
	- `:first-child`
5. `input:not(.required)` seçicisi neyi ifade eder?
	- `.required` sınıfına sahip olan tüm inputları
	- `.required` sınıfına sahip OLMAYAN tüm inputları (Doğru)
	- Sadece zorunlu alanları
	- Sadece boş inputları
6. Bir elementin içeriğinin **sonuna** ikon veya metin eklemek için hangisi kullanılır?
	- `::before`
	- `::after` (Doğru)
	- `:last-child`
	- `::first-letter`
7. `input[type="checkbox"]:checked + label` seçicisi ne yapar?
	- Seçili checkbox'ı gizler
	- Tüm labelları seçer
	- Seçili checkbox'tan hemen sonra gelen label'ı seçer (Doğru)
	- Checkbox'ın içindeki metni değiştirir
8. `::placeholder` pseudo-elementi ne işe yarar?
	- Inputun değerini değiştirir
	- Input içindeki yer tutucu metnin stilini değiştirir (Doğru)
	- Inputu gizler
	- Input odaklandığında çalışır
9. Kullanıcı bir metni seçtiğinde (mavi arka plan) rengini değiştirmek için hangisi kullanılır?
	- `:active`
	- `:selected`
	- `::selection` (Doğru)
	- `:checked`
10. `li:first-child` neyi seçer?
	- Listenin son elemanını
	- Listenin ilk elemanını (Doğru)
	- Listenin tüm elemanlarını
	- İlk harfi

### Videolar
1. CSS Pseudo-classes ve Pseudo-elements konularını derinlemesine öğrendik. Kullanıcı aksiyonları (:hover, :focus), yapısal seçimler (:nth-child, :first-child), form durumları (:checked, :disabled) ve sanal elementler (::before, ::after) arasındaki farkları ve kullanım alanlarını inceledik. Ayrıca bu seçicileri Combinator'lar ile birleştirerek hamburger menü, tooltip ve animasyonlu form label'ları gibi gelişmiş örnekler yaptık.

## [CSS Özet Çalışması ve Kendimi CSS Konusunda Nasıl Geliştirebilirim](css-ozet-calismasi-ve-kendimi-css-konusunda-nasil-gelistirebilirim/)

### Sorular
1. CSS (Cascading Style Sheet) ile aşağıdakilerden hangisi yapılamaz ?
	- Bir sayfanın yeniden yüklenmesi (Doğru)
	- Bir yazının fontunun Arial yapılması
	- Bir link alt çizgisinin kaldırılması
	- Bir link’in üzerine gelindiğinde link’in renginin değiştirilmesi
2. Class selector ile id selector arasındaki en önemli fark aşağıdakilerden hangisidir?
	- Class selector’ler yanlızca inline elementler için geçerlidir. id ise block level için geçerlidir.
	- Class selector’ler yanlızca block level elementler için kullanılır. id ise inline elementler için kullanılır
	- Class’lar sadece renk ve border özellikleri için kullanılır. id her style için kullanılabilir.
	- Class selectorler istenildiği kadar kullanılabilir. id selector’ler yanlızca bir kere kullanılabilir. (Doğru)

### Videolar
1. https://www.youtube.com/watch?v=65TGMAWaqgA
	- Bu videoda; CSS'de kendimizi nasıl geliştirebileceğimizi ve herhangi bir sorunla karşılaştığımızda nasıl çözüm üretebileceğimizi anlattık. Gradient ve Shodow oluşturma ile ilgili de küçük bir egzersiz yaptık.
