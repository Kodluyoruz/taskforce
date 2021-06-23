# CSS Nedir?

## CSS

CSS'de arka plan renklerini değiştirmekten ve nesnelerin neden olması gerektiği gibi hizalanmadığını merak etmekten daha fazlası vardır. Ancak JavaScript frameworkleri ve kütüphaneleri gibi diğer araçlara zaman ayırdığımız için, CSS genellikle gözden kaçan ve arka planda kalan görsel bir iletişim aracıdır. Genellikle temel çalışma yeterliliğine sahip CSS'yi alırız ve acil hedeflerimize ulaşır ulaşmaz daha derine inmeden bırakırız. Sonuç olarak uygulama genelinde yapı, mimari ve uyum gibi şeyleri göz ardı etme eğilimindeyiz. Biz bu yazımızda CSS hakkında bilmemiz gerekenleri ele alacağız ve şimdi en baştan başlayalım.

## CSS(Cascading Style Sheets) Nedir?
CSS (Basamaklanmış Stil Katmanları), web sayfasını şekillendirmek için kullanılan bir kodlama türüdür. CSS kullanarak web sayfasının görünümünü ve düzenini değiştirebiliriz. Bir web sitesinin görünümünün masaüstü bilgisayarlar, tabletler ve mobil cihazlar gibi farklı ekranlarda nasıl değiştiğini de tanımlayabiliriz. CSS, *C++ veya JavaScript* gibi bir programlama dili **değildir**. Bunun nedeni, CSS'nin amacının web tarayıcıları için biçimlendirmeye(HTML'ye) stil vermek olmasıdır. HTML yalnızca içeriği "işaretleyen" bir dildir - yani, belgeye belirli bir görsel ve yapısal biçimlendirme verir.

Hem HTML hem de CSS doğaları gereği bildirimseldir. Bu, yalnızca bir şeyleri açıkladığı ve herhangi bir işlem yapmadığı anlamına gelir. Tarayıcılar CSS'yi görüntüleme için yorumlarken, bunu doğrusal bir şekilde yapar. Bunun nedeni, CSS'nin dosyayı yukarıdan aşağıya okuyan tarayıcıya talimatlar vermesidir. Bir kural belirlendiğinde ve daha sonra dizin aşağıya doğru değiştirildiğinde, tarayıcı ekranda görüntülenecek nihai sonuç olarak en son değerlendirmeyi alır. CSS'deki C'nin ifade ettiği şey budur. CSS'nin kaskad etkisi, tarayıcıyı, kuralın fiziksel olarak ne zaman gerçekleştiğine bağlı olarak, kuralları art arda ve geçersiz kılacak şekilde görüntüleyecek şekilde ayarlar. Cascade(kaskad), öğe için birden çok CSS bildirimi ve birden çok stil sayfasının bir kombinasyonu olduğunda, belirli bir öğe için uygulanan stiller arasındaki çakışmayı çözme anlamına gelir. Sonuç olarak, CSS göründüğü kadar kolay değildir. Anlamadan kullanmaya çalışırsanız web geliştirmede zorluk yaşarsınız. Bu nedenle, CSS öğrenmek bir programlama dili öğrenmek kadar önemlidir.

## CSS Syntax
İlk CSS kodumuzu yazalım. Örneğin, `h1` etiketinin rengini değiştirmek istiyorum.

```html
<h1>I'm a Header</h1>
```

![header](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/css/css-nedir/figures/header.png)

Öncelikle, CSS'ye HTML öğesini nasıl bulacağını söylememiz gerekir. Bunu `selector` denen bir özellik ile yapabiliriz. CSS'de bir selector, HTML öğelerini etiket adı, sınıf adı, kimliği ve çok daha fazlasına göre bulmak için kullanılır. 

O zaman şimdi HTML öğesi için bir selector tanımlayalım ve ardından selector parantezleri arasında her biri noktalı virgülle biten CSS kurallarını bildirelim.

```css
h1 { color: red;  }
```

![header-color](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/css/css-nedir/figures/header-color.png)

Böylelikle, tanımlı selector'e (`h1`) bağlı olarak, CSS artık yeni kuralların nereye uygulanacağını anlayabilir.

Bunların yanısıra css kodlarımızı .css uzantılı bir dosya içerisinde tutar ve bu dosyayı HTML sayfası içerisine basit bir kodla çağırabiliriz. Örneğin Css dosyamızın adı **"hello.css"** olsun ve bu dosyayı Html sayfaya eklemek için HTML içine yazmamız gereken kod şu şekildedir.

```html
<head> <link rel=”stylesheet” type=”text/css” href=”hello.css” /> </head>
```

Bir CSS selector tanımlamanın birçok farklı yolu vardır, aşağıda selector türlerinin bazı örneklerini görebilirsiniz:
- **Class Selector:** HTML öğelerini sınıf özelliklerine göre bulur.
- **Id Selector:** Öğeleri belirli kimliğine göre bulur.
- **Element Selector:** Öğeleri etiket adlarına göre bulur.

CSS teknik olarak kolaydır. Anlaşılması gereken sınırlı sayıda kural vardır. Bununla birlikte, CSS'yi zorlaştıran potansiyel kural kombinasyonudur. Görsel gereksinimler daha karmaşık hale geldikçe, CSS kurallarınızın sürdürülebilirliğini kontrol altında tutmak için yaratıcı ancak yapılandırılmış çözümlere ihtiyaç vardır.

Tasarım yönleri pazarlamaya ve UX tasarımcısına bırakılabilirken, front-end geliştiricilerin tasarımın nasıl çalıştığını anlamaları da iyidir. Tasarımcıların tümü geliştirici değildir ve bazen tarayıcıların ve piksel rehberliğinin daha ince gereksinimlerini anlamayanlarla karşılaşıyoruz. Dijital tasarımcıların stil sayfalarının inceliklerini ve potansiyel karmaşıklığını öğrenmesi gerektiği kadar, tasarım dilinde de konuşabilmelisiniz.

**Yukarıda anlatılanları aşağıda codepen içerisinde deneyimleyebilirsiniz!**

## Kaynaklar
- https://levelup.gitconnected.com/what-is-css-specificity-and-how-it-works-833bb0b3d3a
- https://blog.isimtescil.net/css-nedir/
- https://medium.com/swlh/css-for-beginners-what-is-css-and-how-to-use-it-in-web-development-5985afe53096
- https://medium.com/madhash/what-exactly-is-css-d21d17f1031f
- https://www.vargonen.com/blog/css-nedir-css-kodlari-nelerdir/
- https://weebakademi.com/html-sayfaya-css-ekleme.aspx
