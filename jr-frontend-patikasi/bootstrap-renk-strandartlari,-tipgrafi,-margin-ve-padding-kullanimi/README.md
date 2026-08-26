# Renk Standartları, Tipografi, Margin ve Padding Kullanımı

## Bootstrap Renk Standartları
Bootstrap temamızı, bileşenlerimizi daha iyi stillendirebilmemiz adına *kapsamlı* bir renk sistemine sahip. Renk standartları deyince aklımıza belirli renk kullanımları gelebilir fakat direkt renk ataması yapmak yerine Bootstrap **anlamlı** renk kümelerini içeriyor. Günümüzde Bootstrap kullanılmayan projelerde dahi standart olarak bu yaklaşımı görebiliyoruz.

Herhangi bir web sitesini ziyaret ettiğinizde en ön plana çıkan renk, site içerisindeki önemli vurgularda ve kullanıcıyı harekete geçirebilecek dinamikliğin olduğu yerlerde, ana renk olarak görürüz. Ana rengin yanına ek olarak kullanıcıya daha iyi UI/UX tecrübesi sunabilmek için kullanıcıyı site içerisinde yönlendirirken belirli renk seçimleri yaparız. Bootstrap renk standartlarında da bu yapıyı görmek mümkün.

Bootstrap tarafından üretilmiş renk şemaları ve örnek kullamı şu şekilde;
1. **Primary**: tema ana rengi
2. **Secondary**: temada kullanılacak ikincil renk.
3. **Success**: örnek olarak kullanıcıların bütün gereksinimleri sağladıkları bir formu doldurduktan sonra yeşil renk tonlarını içeren bir mesaj gösterirken kullanabileceğimiz sınıf.
4. **Danger**: Success için verdiğimiz örneğin tersi bir durumda kırmızı renk tonlarını içeren bir feedback için kullabileceğimiz sınıf.
5. **Warning**: Kullacıların dikkatini çekmek amaçlı kullanılan renk şema sınıfı.
6. **Info**: Kullacıların dikkatini çekmek amaçlı kullanılan renk şema sınıfı.
7. **Light**: Tema içinde yazılar ve arkaplan renklendirmesi için kullabileceğimiz renk şema sınıfı.
8. **Dark**: Tema içinde yazılar ve arkaplan renklendirmesi için kullabileceğimiz renk şema sınıfı.

```html
  <!--
    Primary, Secondary, Success, Danger, Warning, Info, Light, Dark
  -->
  <p class="text-primary">.text-primary</p>
  <p class="text-secondary">.text-secondary</p>
  <p class="text-success">.text-success</p>
  <p class="text-danger">.text-danger</p>
  <p class="text-warning bg-dark">.text-warning</p>
  <p class="text-info bg-dark">.text-info</p>
  <p class="text-light bg-dark">.text-light</p>
  <p class="text-dark">.text-dark</p>
  <p class="text-body">.text-body</p>
  <p class="text-muted">.text-muted</p>
  <p class="text-white bg-dark">.text-white</p>
  <p class="text-black-50">.text-black-50</p>
  <p class="text-white-50 bg-dark">.text-white-50</p>
```

```html
  <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
  <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
  <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
  <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
  <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
  <div class="p-3 mb-2 bg-info text-dark">.bg-info</div>
  <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
  <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
  <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
```

[Daha fazla bilgi için...](https://getbootstrap.com/docs/5.0/customize/color/ 'Bootstrap Docs - Color')

## Tipografi
Bir web sitesini ziyaret ettiğinizde karşınıza harfler ve semboller olmadan bir yapı ortaya çıksa ne kadar anlamlı olurdu? Tipografi sadece internet değil hemen hemen bütün iletişim kanallarında başrol oynayan harf ve semboller kullanılarak yapılan bir sanattır.

### Başlıklar
Web sitesinin içeriğinde, önem derecesine göre attığımız başlıkları `<h1>` den `<h6>` ya kadar sınıflandırabiliriz. Bootstrap hepsini destekler. En az bir `<h1>` tagı olması SEO açısından da önemlidir. HTML içerisinde ise başlıkları bu şekilde atabiliriz.

```html
  <h1>h1 heading</h1>
  <h2>h2 heading</h2>
  <h3>h3 heading</h3>
  <h4>h4 heading</h4>
  <h5>h5 heading</h5>
  <h6>h6 heading</h6>
```

Eğer başlık etiketlerinden farklı bir HTML etiketinde, paragraph etiketi gibi(`<p>`), başlıklardan birinin font stillerini kullanmak isterseniz `.h1` den `.h6` ya kadar class lar Bootstrap de mevcut. 

**Örneğin:**
```html
<p class="h1">content</p>
```
Yukarıda `p` etiketi içerisinde yazdıklarımız şekil olarak `h1` class'ının biçimini aldı.


### Paragraf
Web sitesinde bir içeriğe dikkat çekmek, daha belirgin kılmak için Bootstrap içerisinde var olan utility classlardan `.lead` classını kullanabiliriz.

**Örnek kullanım:**
```html
<p class="lead">Önemli bir paragraf</p>
```

Paragrafın font stillendirmesi daha okunabilir ve standart paragrafa göre yazı boyutu daha büyük olacaktır.

### Inline HTML

> The Internet is for everyone.

HTML kodlarımızda bazen vurgulamak istediğimiz kelimeleri ve ya bir yazıyı inline elementler ile belirtebiliriz. ~~Üstünü çizmek istersek~~, **kalın** ve/ya _italic_ yapmak istersek gibi. Bunu yapmanın bir kaç yolu var tabii ki. Inline elementler kullanarak `<strong></strong>` gibi veya inline element kullanmadan bir stillendirme vererek de bu sonucu elde edebiliriz.

```html
<p><mark>Highlight</mark></p>
<p><u>Altı çizili</u></p>
<p><strong>Kalın</strong></p>
<p><em>italic</em></p>
<p><small></small></p>
```

Diğer bir çözüm Bootstrap tarafından bize sağlanan classları HTML etiketine atamak. 
Yani `.mark .small .text-decoration-underline` gibi class'ları etiket içerisinde kullanmak.

**Örneğin:**
```html
<p class="mark">Highlight</p>
<p class="text-decoration-underline">Altı çizili</p>
<p class="small">Küçük</p>
```

Bir kelime bütününü veya cümleyi gerçekten **vurgulamak**, _italic_ kullanmak, ~~üstünü çizmek~~ şeklinde kullanıp o yapıya bir anlam yükleyecek isek tercihen HTML taglarini kullanmak önemlidir. Bu şekilde Ekran okuyuculara bu anlamı belirtmiş olur ve en önemlisi engeli olan ve interneti kullanan bireylere de bu mesajı vermiş oluruz.

### Listeler
Bootstrap, en çok kullandığımız elementlerden biri olan listeler içinde utility classlara sahip.

```html
 <ul class="list-unstyled">
    ..........
    ..........
  </ul>
 <ul class="list-inline">
    <li class="list-inline-item">
      Lorem Ipsum
    </li>
    ..........
    ..........
  </ul>
```

Yukarıdaki kodu açıklayacak olursak:

- `list-unstyle` classı , varsayılan olarak gelen liste stillendirmesini ve `margin-left` özeliğini kaldırır.
- `list-inline` ve `list-inline-item` classlarının birlikte kullanımı ile, liste stillendirilmesi kaldırılır ve `<li>` taglerinin tek bir satırda, aralarında margin verilmiş şekilde görüntülenmesini sağlar.

### Genel Ayarlar
Son olarak Bootstrap'in tipografi için gelen varsayılan ayarlarına bakalım.

- Bootstrap font ailesi olarak kullandığımız cihazların font tipini seçer.
- Temelde yazı boyutu olarak browserların default değerlerini alır(Genel olarak 16px). Kullanıcı browserının default yazı boyutunu ihtiyaç halinde değiştirebilir.
- Bootstrap'in tipografik özeliklerini kullanmak için `<body>` tagine $font-family-base, $font-size-base ve \$line-height-base niteliklerini uygulamanız gerekmektedir.
- \$font-size-base'i değiştirmek isterseniz, değeri `rem` birimi olarak verilmesi önerilir.

[Daha fazla bilgi için...](https://getbootstrap.com/docs/5.0/content/typography/ 'Bootstrap Docs - Typography')

## Margin ve Padding Kullanımı
Bootstrap, margin ve padding kullanımı için basit ve geniş classlara sahip. Kullanıma geçmeden önce classların gösterimi için kullanılan harflerin ne anlama geldiğini ve Bootstrap'in kullandığı default boşluk değerlerine bakalım.

- `m-`: ile başlayan classlar **margini** temsil eder.
- `p-` ile başlayan classlar **paddingi** temsil eder.

### Yönler
- `t`: margin-top ve/ya padding-top için,
- `b`: margin-bottom ve/ya padding-bottom için,
- `s`: soldan sağa, margin-left ve/ya padding-left, sağdan sola margin-right ve/ya padding-right için,
- `e`: soldan sağa, margin-right ve/ya padding-right, sağdan sola margin-left ve/ya padding-left için,
- `x`: margin ve paddingi x-ekseni doğrultusunda vermek için,
- `y`: margin ve paddingi y-ekseni doğrultusunda vermek için,
- Bu harfleri kullanmayı "m" ve/ya "p" yi yalnız kullandığımızda her 4 taraf için de aynı değeri veririz.

### Boşluk büyüklüğü
- `0`:margin ve/ya padding sıfırlar.
- `1`: varsayılan olarak, margin ve/ya padding değerinde 0.25 çarpanını kullanır.
- `2`: varsayılan olarak, margin ve/ya padding değerinde 0.5 çarpanını kullanır.
- `3`: varsayılan olarak, margin ve/ya padding değerinde 1 çarpanını kullanır.
- `4`: varsayılan olarak, margin ve/ya padding değerinde 1.5 çarpanını kullanır.
- `5`: varsayılan olarak, margin ve/ya padding değerinde 3 çarpanını kullanır.
- `auto`: margin ve/ya padding değerine `auto` ataması yapar.

**Örnek kullanım:**
```html
<div class="mt-4">
	Lorem ipsum
</div>
```
Yukarıdaki örnekte `margin-top`yerine geçen class kullanılmıştır ve kutumuzun üst kısmına `4` büyüklüğünde pay bırakmıştır.

### Yatayda Ortalama
Yukarıdakilere ek olarak yatayda bir elementi tam olarak merkeze alabilmek için Bootstrap `.mx-auto` classını içerir. Bu classın işlevini yerine getirebilmesi için elementin genişliğinin verilmiş olması gerekir.

```html
  <div class="mx-auto" style="width: 200px;">
    Yatayda ortalanmış element
  </div>
```
**Uyarı:** Bu kullanım için bir genişlik ataması yapmazsak doğru çalışmayacaktır!

[Daha fazla bilgi için...](https://getbootstrap.com/docs/5.0/utilities/spacing/ 'Bootstrap Docs - Spacing')

## Kaynaklar
- [Pratik Pratik Pratik](https://getbootstrap.com/docs/5.0/examples/ 'Bootstrap Docs - Examples')
