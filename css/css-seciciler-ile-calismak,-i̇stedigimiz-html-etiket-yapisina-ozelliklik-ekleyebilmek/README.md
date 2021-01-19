# CSS Seçiciler ile Çalışmak, İstediğimiz HTML Etiket Yapısına Özelliklik Ekleyebilmek

Merhaba arkadaşlar,  
CSS seçiciler, HTML taglarına ulaşarak biçim atamaları yapmamızı sağlar. CSS işlemleri, HTML tagı içinde ``style`` attribute kullanarak yani inline, ``<head>`` arasında ``<style>`` tagı kullanarak yani internal ya da dosya uzantısı .css olan bir dosya oluşturup bu dosyayı ``<head>`` arasına ekleyerek yani external şekilde kullanabiliriz.  

### Inline
``` 
<h1 style="color:orange;">Turuncu renkli başlık</h1>
```
### Internal
``` 
<head>
  <style>
    h1{
    color: orange;
    }
  </style>
</head>
<body>

<h1>Turuncu renkli başlık</h1>

</body>
```
### External
```
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
```
styles.css dosyası:
```
h1{
  color:orange;
}
```
Kısaca CSS kodlarımızı nasıl yazabileceğimizi öğrendikten sonra şimdi CSS seçicileri kullanarak nasıl HTML taglarına erişebiliyoruz onlara bakalım.
# CSS selectors (CSS seçicileri)
## Genel seçici *
Bu seçiciyi kullanarak tüm etiketlere CSS uygula demiş oluyoruz.
```
*{
  margin:0;
  padding:0;
}
div *{
  color:orange;
}
```
İlk kullanımda tüm elementlerin margin ve padding değerlerini sıfırlamış olduk.İkinci kullanımda ``div *`` diyerek tüm div elementleri içindeki elementlerin yazı rengine erişmiş olduk.


## Element Seçiciler (Element Selectors)
Bu seçiciler ile doğrudan HTML etiket isimlerini kullanarak CSS uygulayabiliriz.
```
div{
  background-color: orange;
}
```
Tüm div etiketleri etkilenir.


## Sınıf Seçiciler (Class Selectors)
Bu seçiciler ile sınıf atadığımız etiketlere CSS uygulayabiliriz. Sınıf ismine erişmek için sınıf isminin başına nokta ``.`` ekliyoruz.
 ```
.turuncu{
  background-color: #FFA500;
}
p.mavi{
  color:blue;
}

 ```
 ```
 <p class="turuncu">Arka plan rengim turuncu</p>
 <div class="turuncu">Arka plan rengim turuncu</div>

 ```
Burada İkinci kullanımda ``p.mavi`` sınıf ismi mavi olan p elementlerine erişmiş olduk. Üçüncü kullanımda ``.large .mavi`` sınıfı large olan bir elementin içinde sınıfı mavi olan elemente eriştik.
 ## Id Seçiciler (Id Selectors)
 Bu seçiciler ile id atadığımız elementlere CSS uygulayabiliriz. Id' ler tek bir elemente ait olmalıdırlar. Id özelliğine erişmek id' nin başına ``#`` ekliyoruz.
 ```
#mavi{
  background-color: #0000FF;
}
#lila{
  color: #c8a2c8;
}

 ```
 ```
 <p id="mavi">Arka plan rengim turuncu</p>
 <div id="lila">yazı rengim lila</div>
 ```
 ## Özellik Seçiciler (Attribute Selectors)
 Bu seçiciler ile özelliğini belirttiğimiz elementlere CSS uygulayabiliriz. Özelliğin içi boş olsada element bundan etkilenecektir. Özelliklere erişmek için yapmamız gereken tek şey köşeli parantezler içinde özelliğin ismini  ``[attribute]`` şeklinde yazıyoruz.
  ```
[name]{
  color: orange;
}
 ```
```
<button name="">gönder</button>
<ul>
      <li name="html">HTML</li>
      <li name="css">CSS</li>
</ul>
```
Bu şekilde name attribute alan tüm elementler etkilenir.  
```
.btn[disabled] {
  color: orchid;
}
```
```
<button class="btn" disabled="disabled">Submit</button>
```
Burada sınıfı ``.btn`` ve niteliği(attribute) ``[disabled]`` olan butona CSS uyguladık.

```
div[title="deneme"] {
  background-color: orange;
}
```
```
<div title="Deneme">Lorem, ipsum dolor.</div>
<div title="deneme">Lorem, ipsum dolor.</div>
<div name="denemefalan">Lorem, ipsum.</div>
```
Burada tam eşleşen özelliğe CSS uyguladık. Büyük-küçük harf duyarlılığı vardır.

```
div[title~="isim"] {
  color: orange;
}
```
```
<div title="isim">Lorem, ipsum dolor.</div>
<div title="isimler">Lorem, ipsum dolor.</div>
<div title="isim ve şehirler">Lorem, ipsum dolor.</div>
```
Burada ``~=`` ifadesi ile ``title`` özelliği "isim" içeren divlere eriştik.

```
a[href ^= "https"] {
  color: palegreen;
}
```
```
<a href="https://www.google.com/">google</a>
<a href="https://github.com/">github</a>
<a href="http://github.com/">github</a>
```
Burada ``^=`` ifadesi ile ``href`` özelliği "https" ile başlayan a etiketlerine eriştik.
```
a[href *= "http"] {
  color: palegreen;
}
```
```
<a href="https://www.google.com/">google</a>
<a href="https://github.com/">github</a>
<a href="http://github.com/">github</a>
```
Burada ``*=`` ifadesi ile ``href`` özelliği "http" içeren a etiketlerine eriştik.

```
div[class$="test"] {
  background: yellow;
}
```
```
<div class="bir_test">Lorem, ipsum dolor.</div>
<div class="iki-test">Lorem, ipsum dolor.</div>
<div class="uc test">Lorem, ipsum dolor.</div>
<div class="dorttest">Lorem, ipsum dolor.</div>
```
Burada ``$=`` ifadesi ile ``class`` özelliği sonunda "test" içeren divlere eriştik.

```
a[href*="https"][href$="com"] {
        color: orange;
}
```
```
<a href="https://www.google.com/"></a>
<a href="https://reactjs.org/"></a>
<a href="https://css-tricks.com/"></a>
```
Burada **https** ile başlayan ve sonunda **com** olan a etiketlerine eriştik.

Artık ana hatlarıyla öğrendiğimiz CSS seçicilere daha yakından bakabiliriz.


## Grup Seçiciler (Group Selectors)
Çoğunlukla etiketlere verilen CSS özellikleri benzer veya ortak olabilir. Bu gibi durumlarda seçicileri gruplayarak daha temiz CSS dosyaları oluşturabiliriz.
```
h1,h2,h3{
  color:orange;
}
```
Tüm h1,h2,h3 etiketlerine erişmiş olduk.
```
p.turuncu{
  color:orange;
}
```
```
<p class="turuncu">turuncu yazı</p>
<p>normal yazı</p>
```
Burada sınıf ismi ``.turuncu`` olan p etiketlerine ulaştık.


## Çocuk seçiciler (Child Selectors)
Artık etiketleri birbiriyle olan hiyerarşik durumuna göre seçerek CSS özelliklerini belirleyeceğiz. Child selector, kendisi ve kendisini sarmalayan bir üst etiketle olan ilişkiyi gösterir ve  ``>`` işareti ile ifade edilir.

```
p > span{
  color:orange;
}
p > span >b{
  color:blue;
}
div > ul >li#first{
  color:red;
}
```
```
<p>
  <span>child element</span>
</p>
```
Parent etiketi yani bir üst kapsayıcısı p olan span etiketine ulaştık.
```
<p>
  <span>Burası turuncu renkte <b>mavi renkte yazılacak</b></span>
</p>
```
```
<p>
  <span>Burası turuncu renkte <b>mavi renkte yazılacak</b></span>
</p>
```
```
<div>
  <ul>
    <li id="first">bir</li>
    <li>iki</li>
  </ul>
</div>
```
### Torun-Soy Seçiciler (Descentad Selectors)
Bir kapsayıcı yani parent element altındaki tüm etiketlere ulaşmak için kullanılır. Her ulaşılacak etiket arasına boşluk konulur.
```
div p{
  background-color:blue;
}
```
Burada div içinde olan tüm p etiketlerine ulaşırız.
```
<div>
  <p>Bu p etiketi arka planı mavi renk</p>
  <ul>
    <li>
      <p>Bu p etiketi arka planı mavi renk</p>
    </li>
  </ul>
  <p>Bu p etiketi arka planı mavi renk</p>
</div>
```
### Genel Kardeş Seçiciler (General Sibling Selectors)
Aynı parent etikete sahip olan ve birbiri ardına gelen etiketleri seçmek için kullanılır.``AltGr+ü`` Kambinasyonuyla oluşan ``~`` işareti ile gösterilir. 
```
ul ~ p{
  color:orange;
}
```
```
<div>
  <p>Lorem, ipsum.</p>
  <ul>
    <li>
      <p>Lorem, ipsum dolor.</p>
    </li>
  </ul>
  <h3>Lorem, ipsum dolor.</h3>
  <p>Bu p etiketi turuncu renkte</p>
</div>
```
Burada dikkat edilmesi gereken iki nokta var. Birincisi `<p>` etiketi ``<ul>`` etiketinden sonra gelmeli (arada başka etiketler olabilir) ve ikiside aynı düzeyde yania ayni parent etiketine sahip olmalılar.

### Bitişik Kardeş Seçiciler (Adjacent Sibling Selector)
Genel kardeş seçiciden tek farkı belirtilen etiketler bitişik arka arkaya gelmeliler.``+`` işareti ile gösterilir.
```
ul + p{
  color:green;
}
```
```
<div>
  <p>Lorem, ipsum.</p>
  <ul>
    <li>
      <p>Lorem, ipsum.</p>
    </li>
  </ul>
  <p>Bu p etiketinin yazı rengi yeşil</p>
</div>
```
### Sahte Sınıf Seçiciler (Pseudo classes)
Sahte sınıflar kullanarak HTML etiketlerine CSS uygulayabiliriz. Kullanımları **selector:pseudo class{}** şeklindedir.

### :link
Daha önce tarayıcıda açılmamış linke CSS uygular.
**NOT:** Etkisini görmek için tarayıcıya geçmişi temizlemek gerekebilir.
```
a#google:link {
  color: red;
}
```
```
<a id="google" href="https://www.google.com/">Google</a>
```
 
 ### :hover
 Seçici ile işaretlenen etiketin üzerine mouse ile gelindiğinde CSS uygalanır ve mouse üzerinde değilken etki kaybolur.
```
a.test:hover {
  color: red;
}
```
```
<a class="test" href="https://www.github.com/">Github</a>
``` 
### :active
Mouse ile tıklandığında CSS uygulanır.Tıklama kaldırıldığında etki kaybolur.
```
a:active {
  position: relative;
  top: 5px;
}
```
```
<a href="#">Submit</a>
```
### :first-child
İlk child etikete CSS uygulanır.
```
ul > li:first-child {
  color: orange;
}
```
```
<ul>
<li>lorem</li>
  <li>lorem</li>
  <li>lorem</li>
  <li>lorem</li>
</ul>
```
### :last-child
Son child etikete CSS uygular.
### ::first-letter
Blok seviyesinde bir etiketteki ilk harfe CSS uygular. ``<span>`` blok seviyesinde bir etiket olmadığından bu pseudo class uygulanamaz.
```
p::first-letter {
  font-size: 20px;
  color: orange;
}
```
```
<p>Lorem ipsum dolor sit.</p>
```
### ::first-line
Blok seviyesinde bir etiketin ilk satırına CSS uygular.
### ::before
Belirtilen etiketin önüne CSS uygular.
```
p::before {
  content: "selam";
  color: orange;
}
```
```
<p>Lorem ipsum dolor sit.</p>
```
### ::after
Belirtilen etiketin sonuna CSS uygular.Kullanımı ``::before`` ile aynıdır.

## Sorular

* [Aşağıdaki kod bloğunda hangi satıra CSS uygulanmıştır ?]
```
.container > p.intro + ul > li:first-child {
        color: orange;
}
```
```
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
  * ``<p class="intro">Lorem ipsum dolor sit amet.</p>``
  * ``<li>Bootstrap</li>`` 
  * ``<li>HTML</li>``(Doğru)
  * ``<li>CSS</li>``
* [Üstteki kod bloğuna göre, bitişik kardeş etiketi p etiketi olan ve parentinin sınıf özelliği container olan h2 etiketine nasıl erişilir ?]
  * ``p.intro +h2``
  * ``.container h2``
  * ``.container + h2``
  * ``p + .container h2`` (Doğru)
* ``a[href$="org"]:hover`` ile ifade edilmek istenen nedir?
  * a etiketi href özelliğinde başında "org" olan etiketin üzerine gelindiğinde
  * a etiketi üzerine gelindiğinde
  * href özelliği olan a etiketlerini
  * a etiketi href özelliği içinde sonunda org olan etiketin üzerine gelindiğinde (Doğru)
 
 
 ### Kaynaklar
 * https://www.w3schools.com/cssref/css_selectors.asp
 * https://css-tricks.com/almanac/selectors/
 
 

 
 
 
