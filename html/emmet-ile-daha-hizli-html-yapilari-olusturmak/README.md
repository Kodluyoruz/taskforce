# Emmet ile Daha Hızlı HTML Yapıları Oluşturmak
  Emmet web geliştiricilerinin sıklıkla zamandan tasarruf etmek ve daha hızlı kod yazmak için kullandığı bir eklentidir. Emmet’in temel mantığı, yazılımcıya kodlama yaparken zaman kazandırmasıdır. Örneğin hepimiz bir html dosyasının iskeletini biliriz:
```html
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

  Emmet sayesinde çok daha hızlı bir biçinde ```!``` + Tab kullanarak bu yapıyı oluşturabilirsiniz. Bunu tek tek yazmaktansa iki tuşa basarak yapmak çok güzel değil mi?
<br/>
<br/>
![alt değeri](https://miro.medium.com/max/865/0*tILY4GYjBvpFo5Zx.gif)
<br/>
  Anlayacağınız üzere emmet bazı kısa yollarla basit bir biçimde Html ve Css kodu yazmamıza yardımcı olur. Aynı kodu tekrar tekrar yazmanızı engellerken üretkenliğinizi de arttırmış olur. Emmet neredeyse tüm text editörlerinde mevcuttur, bu yüzden onu yüklemenize gerek yoktur. Ama herhangi bir nedenden ide’nizde mevcut değilse [bu sayfadan](https://emmet.io/download/) yükleyebilirsiniz.

## Emmet’deki Kısa Yollara Gelecek Olursak...
- Emmette kullandığımız bazı kısa yollar var, şimdi bunları örnekleriyle tek tek inceleyelim.
  ```>``` ifadesini kullanarak kardeş element oluşturuyoruz. Örneğin şekildeki, gibi ```ul``` tagı içerisinde ```li``` tagı oluşturmak istiyorsunuz. Bunun için yapmanız gereken tek şey ```ul>li``` yazarak Tab’a basmak. 

```html
<ul>
  <li></li> 
</ul>
```


- Bu işlemi yaptıktan sonra ul tagına eklemek istediğimiz bir kardeş eleman kalmayınca ise ```^``` ifadesini kullanarak ```ul``` tagı dışına çıkıp yeni taglar oluşturabiliriz.
  Örneğin ```ul``` tagı içinde ```li``` tagı oluşturduktan sonra ```ul``` tagı dışında bir ```p``` tagı eklemek istiyorum. Bunun için ```ul>li^p``` yazarak taba basabilirim.


```html
<ul>
  <li></li> 
</ul>
<p><p/>
```

- Peki ya bu ```ul``` tagı içerisine birden fazla ```li``` oluşturmak istiyorsam, ne yapmalıyım?
  Bunun için ```*``` ifadesini kullanırız. ```ul>li*3``` yaparak ```ul``` tagı içerisinde üç adet ```li``` tagı oluşturabilirsiniz.

```html
<ul>
  <li></li> 
  <li></li> 
  <li></li> 
</ul>
```

- Bunu yerine benzer biçimde kardeş eleman-tag eklemek için ```+``` ifadesi de kullanılabilirdi: ```ul>li+li+li``` .
- Tag eklerken onlara class özelliği vermek için de ```.``` ifadesini kullanırız. Örneğin ```ul.class1>li.class2``` denip Tab’a basıldığında: 

```html
<ul class="class1">
    <li class="class2"></li>
</ul>
```
  Bu şekilde bir kod oluşur. Aynı şekilde ```ul.class1>li.class2*3``` denerek bir yerine üç adet class2 sınıfından ```li``` tagı oluşturulabilirdi.

- Bir id özelliği eklemek için ise ```#``` ifadesini kullanırız. Yeni bir örnekle id özelliği eklemeyi görelim. ```ul#id1>li#id2``` diyerek aşağıda gördüğünüz kodu oluşturabiliriz. 

```html
<ul id="id1">
    <li id="id2"></li>
</ul>
```

- Burada ```+``` ve ```*``` ifadesinin farkını da daha kolay anlayabiliriz.
  Örneğin ```ul``` tagının içine aynı id’ye sahip 3 adet li eklemek istiyorsam ```*``` ifadesi kullanılabilir. Fakat amacım farklı id’lere sahip üç adet ```li``` tagı oluşturmaksa ```ul>li#id1+li#id2+li#id3``` yapılır.
- **Peki otomatik artış sağlayan değerleri tek tek yazmak amacımız zaman tasarrufu iken ne kadar mantıklı?** 

  Emmet bunun için de bir kısa yola sahip :```$``` ifadesi. Yani yukarda görmüş olduğunuz ```ul>li#id1+li#id2+li#id3``` şeklinde yazdığımız kod bloğunu çok daha basit bir biçimde ```ul>li#idNo$*3``` diyerek yazabiliriz. Böylece otomatik olarak idNo1, idNo2 ve idNo3 idlerine sahip üç adet ```li``` tagımız olur.
  
```html
 <ul>
  <li id="idNo1"></li>
  <li id="idNo2"></li>
  <li id="idNo3"></li>
</ul>
```

- Sırada oluşturulan tagların içine text yazılması var:
  Textlerimizi ```{}``` ifadesinin içine yazmamız yeterli: ```p{Emmet ile tag içine text yazma}```
<br/>

```html
<p>Emmet ile tag içine text yazma</p>
```
- Bir diğer emmet kısa yolunu ise kodumuzda içerik olmadığı zamanlarda kullandığımız anlamsız yazıları yani “lorem ipsum”ları oluşturmak için kullanıyoruz.
Örneğin bir paragraf oluşturacaksınız ve bu paragrafın henüz bi içeriği yok fakat boş durmasındansa oraya meti geleceğini belirtmek istiyorsunuz. Anlamsız harfler veya zaman gerektiren rastgele cümleler oluşturmak yerine bu kısayolu kullanabilirsiniz : ```p>lorem``` . Taba bastığınızda aşağıdaki gibi bir çıktı alacaksınız.

```html
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Facere dolore sint ea? Molestiae ratione ullam, illo commodi ipsum soluta mollitia itaque,maiores maxime natus reiciendis architecto. Quaerat culpa beatae dicta.</p>
```
- Bu kadar uzun bir lorem yazısı istemiyorsanız yapmanız gereken tek şey ```lorem``` yazdıktan sonra yanına kaç kelimeli bir lorem oluşturmak istediğinizi eklemek. Örneğin 5 kelimeli bir lorem yazısı istiyorsunuz. Bunun için ```p>lorem5``` yazmanız yeterli.

```html
<p>Lorem ipsum dolor sit amet.</p>
```
- Son olarak Emmet’in bir özelliğinden bahsedeceğim. 
```li.className``` yazıp Tab’a bastığımızda ne oluşmasını bekleriz? Evet ```className``` class’ına ait bir ```li``` tagı oluşmasını. peki herhangi bir tag koymaksızın sadece ```.className``` yazdıktan sonra Tab’a basarsak ne olur?

```html
<div class="className"></div>
```
  Gördüğünüz gibi bir ```div``` oluşturdu. Emmet’e bir tag vermeksizin ```.``` veya ```#``` ifadelerini kullandığımızda bunun ```div``` tagı olduğunu biliyor.
- Ama biz bunu ul tagı içinde denersek tepkisi ne olur? Hadi deneyelim: 


```html
<ul>
  <li class="className"></li>
</ul>
```
Gördüğünüz gibi ```ul>.className``` yazıp Tab’a bastığımızda ise bunun ```li``` elementi olduğunu algılıyor. 

## Emmet ile alakalı bir kaç soru 
#### ```ul``` tagı altında ```item1 ,item2, item3, item4``` classlarına sahip 4 adet ```li``` tagı oluşturmak istersek aşağıdakilerden hangisini yapmalıyız?
- A) ```ul>li#item*4```
- B) ```ul>li.item$*4```
- C) ```ul>li*4```
- D) ```.li.item*4```

#### ```div``` tagı altında ```item``` idsine sahip 10 kelimelik loremleri içeren 6 adet  ```p``` tagı oluşturmak istersek aşağıdakilerden hangisini yapmalıyız?
- A) ```div>p#item$.lorem10```
- B) ```p.item*6.lorem```
- C) ```div>p#item*6>lorem10```
- D) ```.item.p>lorem1```
 
 ##### Cevapları en alttaki kısımda bulabilirsiniz, ya da isterseniz yazıp taba bakarak çıktıları kendiniz görebilirsiniz :innocent:

### Umarım bu yazı sizin için faydalı olmuştur. Yararlandığım, kendim de çalışırken bakındığım birkaç kaynak bırakıyorum alt kısma. Ayrıca Emmet’in kendi sitesindeki cheat sheete  [buradan](https://docs.emmet.io/cheat-sheet/)  ulaşabilirsiniz. Bu konuda bol bol egzersiz yapmayı unutmayın lütfen, emin olun emmet kullanımı çalışma hızınızı arttıracak ve sizi gereksiz çabadan kurtaracaktır. Kendinize iyi bakın :blush:

<br/>
<br/>

[Why I love pressing tab, featuring Emmet](https://medium.com/doctolib/why-i-love-pressing-tab-featuring-emmet-578aa4e77858)

<br/>

[Speed up your HTML workflow with Emmet](https://medium.com/swlh/speed-up-your-html-workflow-with-emmet-f5c887854c63)
<br/>
### Cevap 1: B , Cevap 2: C 
