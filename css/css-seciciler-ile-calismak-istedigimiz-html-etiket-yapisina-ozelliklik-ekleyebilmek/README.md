# CSS Seçiciler ile Çalışmak, İstediğimiz HTML Etiket Yapısına Özellik Ekleyebilmek

CSS seçiciler, HTML taglarına ulaşarak biçim atamaları yapmamızı sağlar. CSS işlemleri, HTML tagı içinde `style` attribute kullanarak yani inline, `<head>` arasında `<style>` tagı kullanarak yani internal ya da dosya uzantısı .css olan bir dosya oluşturup bu dosyayı `<head>` arasına ekleyerek yani external şekilde kullanabiliriz.

## Inline
```html 
<h1 style="color:orange;">Turuncu renkli başlık</h1>
```

## Internal
```html 
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

## External
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
```

`styles.css` dosyası:

```css
h1{
  color:orange;
}
```

Kısaca CSS kodlarımızı nasıl yazabileceğimizi öğrendikten sonra şimdi CSS seçicileri kullanarak nasıl HTML taglarına erişebiliyoruz onlara bakalım.

## Seçiciler

### Genel seçici `*`
Bu seçiciyi kullanarak tüm etiketlere CSS uygula demiş oluyoruz.
```css
*{
  margin:0;
  padding:0;
}
div *{
  color:orange;
}
```

İlk kullanımda tüm elementlerin margin ve padding değerlerini sıfırlamış olduk. İkinci kullanımda `div *` diyerek tüm div elementleri içindeki elementlerin yazı rengine erişmiş olduk.

### Element Seçiciler (Element Selectors)
Bu seçiciler ile doğrudan HTML etiket isimlerini kullanarak CSS uygulayabiliriz.
```css
div{
  background-color: orange;
}
```
Tüm div etiketleri etkilenir.


### Sınıf Seçiciler (Class Selectors)
Bu seçiciler ile sınıf atadığımız etiketlere CSS uygulayabiliriz. Sınıf ismine erişmek için sınıf isminin başına nokta `.` ekliyoruz.

```css
.turuncu{
  background-color: #FFA500;
}
p.mavi{
  color:blue;
}
```

```html
 <p class="turuncu">Arka plan rengim turuncu</p>
 <div class="turuncu">Arka plan rengim turuncu</div>

```

Burada ikinci kullanımda `p.mavi` sınıf ismi mavi olan p elementlerine erişmiş olduk. 

### Id Seçiciler (Id Selectors)
Bu seçiciler ile id atadığımız elementlere CSS uygulayabiliriz. Id' ler tek bir elemente ait olmalıdırlar. Id özelliğine erişmek `id`' nin başına `#` ekliyoruz.
```css
#mavi{
  background-color: #0000FF;
}
#lila{
  color: #c8a2c8;
}
```

```html
 <p id="mavi">Arka plan rengim turuncu</p>
 <div id="lila">yazı rengim lila</div>
```

### Özellik Seçiciler (Attribute Selectors)
Bu seçiciler ile özelliğini belirttiğimiz elementlere CSS uygulayabiliriz. Özelliğin içi boş olsada element bundan etkilenecektir. Özelliklere erişmek için yapmamız gereken tek şey köşeli parantezler içinde özelliğin ismini `[attribute]` şeklinde yazıyoruz.

```css
[name]{
  color: orange;
}
```

```html
<button name="">gönder</button>
<ul>
      <li name="html">HTML</li>
      <li name="css">CSS</li>
</ul>
```
Bu şekilde name attribute alan tüm elementler etkilenir. 

```css
.btn[disabled] {
  color: orchid;
}
```

```html
<button class="btn" disabled="disabled">Submit</button>
```

Burada sınıfı `.btn` ve niteliği(attribute) `[disabled]` olan butona CSS uyguladık.

```css
div[title="deneme"] {
  background-color: orange;
}
```

```html
<div title="Deneme">Lorem, ipsum dolor.</div>
<div title="deneme">Lorem, ipsum dolor.</div>
<div name="denemefalan">Lorem, ipsum.</div>
```

Burada tam eşleşen özelliğe CSS uyguladık. Büyük-küçük harf duyarlılığı vardır.

```css
div[title~="isim"] {
  color: orange;
}
```

```html
<div title="isim">Lorem, ipsum dolor.</div>
<div title="isimler">Lorem, ipsum dolor.</div>
<div title="isim ve şehirler">Lorem, ipsum dolor.</div>
```
Burada `~=` ifadesi ile `title` özelliği "isim" içeren divlere eriştik.

```css
a[href ^= "https"] {
  color: palegreen;
}
```

```html
<a href="https://www.google.com/">google</a>
<a href="https://github.com/">github</a>
<a href="http://github.com/">github</a>
```

Burada `^=` ifadesi ile `href` özelliği "https" ile başlayan a etiketlerine eriştik.

```css
a[href *= "http"] {
  color: palegreen;
}
```
```html
<a href="https://www.google.com/">google</a>
<a href="https://github.com/">github</a>
<a href="http://github.com/">github</a>
```
Burada `*=` ifadesi ile `href` özelliği "http" içeren a etiketlerine eriştik.

```css
div[class$="test"] {
  background: yellow;
}
```

```html
<div class="bir_test">Lorem, ipsum dolor.</div>
<div class="iki-test">Lorem, ipsum dolor.</div>
<div class="uc test">Lorem, ipsum dolor.</div>
<div class="dorttest">Lorem, ipsum dolor.</div>
```
Burada `$=` ifadesi ile `class` özelliği sonunda "test" içeren divlere eriştik.

```css
a[href*="https"][href$="com"] {
        color: orange;
}
```

```html
<a href="https://www.google.com/"> Google</a>
<a href="https://reactjs.org/">React.js</a>
<a href="https://css-tricks.com/">Css Tricks</a>
```
Burada `https` ile başlayan ve sonunda `com` olan `a` etiketlerine eriştik.

Artık ana hatlarıyla öğrendiğimiz CSS seçicilere daha yakından bakabiliriz.


### Grup Seçiciler (Group Selectors)
Çoğunlukla etiketlere verilen CSS özellikleri benzer veya ortak olabilir. Bu gibi durumlarda seçicileri gruplayarak daha temiz CSS dosyaları oluşturabiliriz.

```css
h1,h2,h3{
  color:orange;
}
```
Tüm `h1`, `h2`, `h3` etiketlerine erişmiş olduk.

```css
p.turuncu{
  color:orange;
}
```

```css
<p class="turuncu">turuncu yazı</p>
<p>normal yazı</p>
```
Burada sınıf ismi `.turuncu` olan `p` etiketlerine ulaştık.


### Çocuk seçiciler (Child Selectors)
Artık etiketleri birbiriyle olan hiyerarşik durumuna göre seçerek CSS özelliklerini belirleyeceğiz. Child selector, kendisi ve kendisini sarmalayan bir üst etiketle olan ilişkiyi gösterir ve  `>` işareti ile ifade edilir.

```css
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
```html
<p>
  <span>child element</span>
</p>
```

Parent etiketi yani bir üst kapsayıcısı `p` olan `span` etiketine ulaştık.

```html
<p>
  <span>Burası turuncu renkte <b>mavi renkte yazılacak</b></span>
</p>
```

```html
<p>
  <span>Burası turuncu renkte <b>mavi renkte yazılacak</b></span>
</p>
```

```html
<div>
  <ul>
    <li id="first">bir</li>
    <li>iki</li>
  </ul>
</div>
```

#### Torun-Soy Seçiciler (Descentad Selectors)
Bir kapsayıcı yani parent element altındaki tüm etiketlere ulaşmak için kullanılır. Her ulaşılacak etiket arasına boşluk konulur.

```css
div p{
  background-color:blue;
}
```

Burada div içinde olan tüm p etiketlerine ulaşırız.

```html
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

#### Genel Kardeş Seçiciler (General Sibling Selectors)
Aynı parent etikete sahip olan ve birbiri ardına gelen etiketleri seçmek için kullanılır. `AltGr+ü` Kambinasyonuyla oluşan `~` işareti ile gösterilir. 

```css
ul ~ p{
  color:orange;
}
```

```html
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
Burada dikkat edilmesi gereken iki nokta var. Birincisi `<p>` etiketi `<ul>` etiketinden sonra gelmeli (arada başka etiketler olabilir) ve ikiside aynı düzeyde yani aynı parent etiketine sahip olmalılar.

#### Bitişik Kardeş Seçiciler (Adjacent Sibling Selector)
Genel kardeş seçiciden tek farkı belirtilen etiketler bitişik arka arkaya gelmeliler. `+` işareti ile gösterilir.

```css
ul + p{
  color:green;
}
```

```html
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
Sahte sınıflar kullanarak HTML etiketlerine CSS uygulayabiliriz. Kullanımları `selector:pseudo class{}`şeklindedir.

#### `:link`
Daha önce tarayıcıda açılmamış linke CSS uygular.
**Not:** Etkisini görmek için tarayıcıya geçmişi temizlemek gerekebilir.

```css
a#google:link {
  color: red;
}
```

```html
<a id="google" href="https://www.google.com/">Google</a>
```

#### `:hover`
Seçici ile işaretlenen etiketin üzerine mouse ile gelindiğinde CSS uygalanır ve mouse üzerinde değilken etki kaybolur.

```css
a.test:hover {
  color: red;
}
```

```html
<a class="test" href="https://www.github.com/">Github</a>
```

#### `:active`
Mouse ile tıklandığında CSS uygulanır. Tıklama kaldırıldığında etki kaybolur.

```css
a:active {
  position: relative;
  top: 5px;
}
```

```html
<a href="#">Submit</a>
```
#### `:first-child`
İlk child etikete CSS uygulanır.

```css
ul > li:first-child {
  color: orange;
}
```

```html
<ul>
<li>lorem</li>
  <li>lorem</li>
  <li>lorem</li>
  <li>lorem</li>
</ul>
```
#### `:last-child`
Son child etikete CSS uygular.

#### `::first-letter`
Blok seviyesinde bir etiketteki ilk harfe CSS uygular. `<span>` blok seviyesinde bir etiket olmadığından bu pseudo class uygulanamaz.
```css
p::first-letter {
  font-size: 20px;
  color: orange;
}
```

```html
<p>Lorem ipsum dolor sit.</p>
```
#### `::first-line`
Blok seviyesinde bir etiketin ilk satırına CSS uygular.

#### `::before`
Belirtilen etiketin önüne CSS uygular.

```css
p::before {
  content: "selam";
  color: orange;
}
```

```html
<p>Lorem ipsum dolor sit.</p>
```
#### `::after`
Belirtilen etiketin sonuna CSS uygular. Kullanımı `::before` ile aynıdır.

## Kaynaklar
 - https://www.w3schools.com/cssref/css_selectors.asp
 - https://css-tricks.com/almanac/selectors/
