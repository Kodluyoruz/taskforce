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
## CSS selectors (CSS seçicileri)
### Genel seçici *
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


### Element Seçiciler (Element Selectors)
Bu seçiciler ile doğrudan HTML etiket isimlerini kullanarak CSS uygulayabiliriz.
```
div{
  background-color: orange;
}
```
Tüm div etiketleri etkilenir.


### Sınıf Seçiciler (Class Selectors)
Bu tür seçiciler ile sınıf atadğımız etiketlere CSS uygulayabiliriz. Sınıf ismine erişmek için sınıf isminin başına nokta ``.`` ekliyoruz.
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
 ### Id Seçiciler (Id Selectors)
 Bu tür seçiciler ile id atadığımız elementlere CSS uygulayabiliriz. Id' ler tek bir elemente ait olmalıdırlar. Id özelliğine erişmek id' nin başına ``#`` ekliyoruz.
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
 ### Özellik Seçiciler (Attribute Selectors)
 Bu tür seçiciler ile özelliğini belirttiğimiz elementlere CSS uygulayabiliriz. Özelliğin içi boş olsada element bundan etkilenecektir. Özelliklere erişmek için yapmamız gereken tek şey köşeli parantezler içinde özelliğin ismini  ``[attribute]`` şeklinde yazıyoruz.
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
 

 
 
 
 
 
 
 
