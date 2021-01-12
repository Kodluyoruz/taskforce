# En Çok Kullanılan HTML Etiketleri Nelerdir
Yazıya başlamadan önce **HTML** dilinde bir etiket nasıl oluşturulur bunu göstermek istiyorum. Etiketler küçüktür ve büyüktür işaretlerinin arasına yazılarak başlar (_örn._ ```<etiket>```) içeriği yazdıktan sonra etiketi kapatmanız gerekir. Etiketi kapatmak için küçüktür, slash, etiket, büyüktür şeklinde yazılmalı (_örn._ ```</etiket>```) Bütün bir örnek yapmak gerekirse (_örn._ ```<etiket>``` İçerik Yazılacak Alan ```</etiket>```)

NOT: Bazı etiketler kapanmaya ihtiyaç duymazlar (_örn._ ```<br>```, ```<hr>```, ```<meta>``` vs.)

<br>

## HTML Etiketi
HTML etiketi, dosya içeriğinin HTML dilinde yazıldığını tarayıcımıza bildirir. Bu etiket, kendi altında mutlaka ```<HEAD>``` ve ```<BODY>``` etiketlerini barındırmalıdır. Eğer bir HTML dökümanı oluşturmak isterseniz ilk yapacağınız iş bir ```<html>``` etiketi oluşturmaktır. Ardından HTML etiketi altına ```<HEAD>``` ve ```<BODY>``` etiketlerini yazmalısınız.

```
<html>
  <HEAD></HEAD> 
  <BODY></BODY>
</html>
```
<br>

## HEAD Etiketi
```<head>``` etiketi, site ziyaretçileri tarafından görülmesi gerekmeyen kodları içerir. Bu etiket altına yazılan kodlar genellikle arama motorları ve örümcekler (Crawler veya Spider diye geçer) içindir. Head etiketi altında bütün etiketleri kullanabilmeniz mümkün değil. Kullanabileceğiniz etiketler;
- ```<title>``` (Bu etiketi kullanmak şarttır)
- ```<meta>```
- ```<style>```
- ```<script>```
- ```<noscript>```
- ```<link>```
- ```<base>```

```
<html>
  <HEAD>
    <title> Sekmede Görülecek İsim </title>
    <meta name="Keywords" content="HTML,Kodluyoruz">
  </HEAD> 
  
  <BODY></BODY>
  
</html>
```
<br>

## BODY Etiketi
Web sayfamızda görmek istediğimiz bütün içerikleri ```<body>``` etiketi altına yazıyoruz. Anlatacağım diğer etiketleri ```<body>``` etiketi içerisine yazıcaz.

```
<html>
  <HEAD>
    <title> Sekmede Görülecek İsim </title>
    <meta name="Keywords" content="HTML,Kodluyoruz">
  </HEAD> 
  
  <BODY>
    Site İçeriği
  </BODY>
</html>
```
<br>

## NOT
Şu ana kadar oluşturduğumuz yapıyı idelerde kısayollar ile hızlıca oluşturabiliyoruz. Ben Visual Studio Code (VSC) kullanıyorum. VSC üzerinde **"! + Enter"** yazarak aşşağıdaki yapıyı hızlıca oluşturabilirsiniz.

<br>

```<!DOCTYPE html>```: Dökümanımızın **HTML** dilinde olduğunu tarayıcımıza bildiren talimattır. <br />
```<html lang="en">```:  Site içeriğinin dilini belirten etiket, **"en"** yerine **"tr"** yazabilirsiniz. <br/>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
<br>

## H Etiketleri
**H** etiketleri başlık etiketleridir. Büyükten küçüğe sırasıyla ```<h1>``` ```<h2>``` ```<h3>``` ```<h4>``` ```<h5>``` ```<h6>``` şeklindedir. <br />
NOT: HTML otomatik olarak **Başlık** etiketlerinin öncesine ve sonrasına satır atlatır.

# h1 Etiketi
## h2 Etiketi
### h3 Etiketi
#### h4 Etiketi
##### h5 Etiketi
###### h6 Etiketi

<br>

## P Etiketi
```<p>``` etiketi paragraf etiketidir. Sayfa içerisinde oluşturacağımız metinleri ```<p>``` etiketi ile oluştururuz. Aşşağıdaki örnekte hem başlık etiketi hemde paragrafa etiketini kullandım. <br />
NOT: HTML otomatik olarak **Paragraf** etiketinin öncesine ve sonrasına satır atlatır.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Kodluyoruz</h2>
    <p>HTML Etiketleri</p>
</body>
</html>
```
<br>

## BR Etiketi
```<br>``` etiketi satır atlatma etiketidir ve kapatmaya ihtiyaç duymayan etiketlerden biridir. Atlatmak istediğiniz satır sayısı kadar ```<br>``` etiketi kullanabilirsiniz. <br />
NOT: BR etiketinin farklı kullanımlarını görebilirsiniz. _örn._(```<br>```,```<br/>```,```<br />```) Hepsi aynı işlevi yerine getirir.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Kodluyoruz</h2> <br>
    <p>HTML <br> Etiketleri</p>
</body>
</html>
```
<br>

## A Etiketi
```<a>``` etiketinin en önemli özelliği href özelliğidir. Bu etiket ile sayfaları linkleyebiliriz. Etiket içerisine yazılan içerik sayfa üzerinde gösterilecek içeriktir. href içine yazılan ise tıklandığında gideceği URL'dir.


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="https://www.kodluyoruz.org">Kodluyoruz</a>
</body>
</html>
```

<br>

## UL - OL - Li Etiketi
```<ul>``` ve ```<ol>``` etiketleri liste oluşturma etiketleridir. Listeyi oluşturduktan sonra içeriğini oluşturmak için ```<li>``` etiketini kullanıyoruz. <br>
```<ul>``` = **"unordered list"** sırasız liste anlamına geliyor. <br>
```<ol>``` = **"ordered list"** sıralı liste anlamına geliyor.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
    
    <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ol>
    
</body>
</html>
```
<br>

## HR Etiketi
```<hr>``` etiketi ekrana yatay bir çizgi çizer. Bu etiket kapanmaya ihtiyaç duymaz.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>
    
    <hr>
    
    <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ol>
    
</body>
</html>
```
<br>

## STRONG ve B Etiketi
```<strong>``` etiketi bir metinin arama motorlarına önemli olduğunu bildirmek için kullanılır. Kullanıldığı zaman metini kalın yapar. Eğer sadece metini kalınlaştırmak isterseniz ```<b>``` etiketini kullanabilirsiniz.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2><strong> Kodluyoruz </strong></h2>
    <p><b> HTML </b> Etiketleri </p>
</body>
</html>
```
<br>

## Script Etiketi
```<script>``` etiketi JavaScript kodlarını HTML içerisine yazabilmemizi sağlar.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        document.write("Kodluyoruz")
    </script>
</body>
</html>
```

<br>

## Button Etiketi
```<button>``` etiketini buton oluşturmak için kullanırız. Buton üzerine yazmak istediğiniz içeriği etiketin içine yazmanız yeterlidir.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button> Buton </button>
</body>
</html>
```

<br>

## img Etiketi
Resim eklemek için ```<img>``` etiketini kullanıyoruz. <br>
```<img src=”resim.jpg” alt=”açıklama yazısı” />``` **src=""** kısmına eklemek istediğimiz görselin yolunu yani kaynağını yazmalıyız. Eğer görselimiz ve HTML dosyamız aynı klasörde ise görselin adını ve uzantısını yazmamız yeterlidir. **alt=""** kısmına görselin açıklamasını yazıyoruz fakat isterseniz boş bırakabilirsiniz. Bu etiket kapanmaya ihtiyaç duymaz.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src=”görseller/kodluyoruz.jpg” alt=”Kodluyoruz Bootcamp” />
</body>
</html>
```

<br>

## iframe Etiketi
Belge içinde belge gösterebilmemizi sağlayan etikettir. Genelde başka bir sitedeki belgeyi kendi sayfamızda göstermek için kullanırız. _örn:_ Youtube'dan bir videoyu sayfamızda göstermek istersek ```<iframe>``` kodlarını sayfamıza eklememiz yeterli.(video üzerinde sağ tıklayıp yerleştirme kodunu kopyala diyerek iframe kodunu kopyalayabiliriz.)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <iframe width="1519" height="581" src="https://www.youtube.com/embed/BHPYQHnD_QA" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
</body>
</html>
```
<br>

## Yorum Satırı
HTML dilinde yorum satırı ```<!--``` ile başlar ```-->``` ile biter.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Örnek Yorum Satırı -->
    
    <!-- 
        2. Örnek Yorum Satırı 
    -->   
</body>
</html>
```
<br>

## Sorular

1- Youtube üzerinden yayınlanan bir videoyu sitemizde gösterebilmek için hangi etiketi kullanmalıyız?   <br><br>
  A) ```<head>``` etiketi       <br>
  B) ```<script>``` etiketi     <br>
  C) ```<br>``` etiketi         <br>
  D) ```<iframe>``` etiketi     <br>
  
  <br>
  
2- ```<script>``` etiketi aşağıdakilerden hangisi için kullanılır?   <br><br>
  A) Satır atlatabiliriz                  <br>
  B) JavaScript kodlarını yazabiliriz     <br>
  C) Liste oluşturabiliriz                <br>
  D) Resim ekleyebiliriz                  <br>
  
  
 <br>
 
 ## Cevaplar
 1- D   <br>
 2- B
 
 <br>
 
 ## Kaynak
 [w3schools](https://www.w3schools.com/tags/default.asp)
