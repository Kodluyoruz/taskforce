# Semantic(Anlamlandırılmış) HTML Etiketleri Kullanımı

Semantik, anlam veya  anlamlandırma anlamı ifadesi taşımaktadır. O halde semantik elementler herhangi bir anlamı olan etiketler ifadesi taşımaktadır. Semantik olarak anlamlandırılmış bir element hem tarayıcıya hem geliştiriciye ne anlama geldiğini açık bir şekilde belirtir. `<div>` ve `<span>` gibi elementler semantik olmayan elementlerdir ve mevcut içeriğin hakkında bilgi vermezler. `<form>`, `<table>` ve `<img>` gibi elementler semantik elementlerdir ve içeriği açıkça belirtirler.

## `header` Elementi
`header` elementi bir doküman veya bir `<section>` için bir başlık olduğunu belirtir. İçinde barındırdığı içeriği **kapsayıcı** olmalıdır. Bir dokümanda birden fazla kullanılabilir.

Aşağıdaki örnek, bir `<article>` için bir başlık içermektedir.

```html
<header> 
    <h1>Kodluyoruz Akademi Nedir?</h1>
</header>
<p>Her bireyin, özellikle kadınların, yükselen teknoloji sektöründe başarılı olması için eşit haklara sahip olması gerektiğine inanıyoruz.
Bu yüzden, Kodluyoruz Akademi gençlere dünya çapında kaliteli ve ücretsiz içerik, kaynak ve bootcamp sağlıyor!</p> 
```

## `nav` Elementi
`nav` elementi navigasyon bağlantıları büyük sayfalar için ortaya çıkarılmıştır. Fakat, sayfadaki tüm linkler bu element içinde olmak zorunda **değildir**.

```html
<nav> Bootcamp CS50X Kodluyoruz Jr. Şirketler Hakkımızda </nav>
```

## `<section>` Elementi
Section elementi bir doküman içinde olan sadece bir kısmı belirtir.

```html
<section>
<h1>CS50xKodluyoruz Challenge Başlıyor!</h1>
<p>CS50xKodluyoruz ödevlerine devam etmekte zorlanıyor musun? Bitirmek istediğin halde nasıl ilerleyeceğini bilmiyor musun?
O zaman CS50xKodluyoruz Challenge tam sana göre! Challenge ekibiyle hedefimiz: 4. haftaya kadar bütün ödevleri tamamlamak olacak!</p>
</section>
<section>
<h1>CS50x Nedir?</h1>
<p>CS50x (Computer Science 50), Harvard Üniversitesi Profesörü David J. Malan tarafından verilen efsanevi bilgisayar bilimlerine giriş kursu.
Her yıl milyonlarca kişi tarafından alınan bu kursu Türkçe’ye çevirsek ve Türkiye’nin her yerinden gençlere ulaştırsak nasıl olur?
Üstelik online ve ücretsiz olarak? Üstelik çalışma gruplarında her yaştan gencin beraber öğrenmesini destekleyerek?</p>
</section>
```

## `figure` Elementi
İçeriğinde resim, gösterim, diyagram, kod listeleri vs. gibi nesnelerin olduğunu belirtir. Ana akış ile ilgili olsa da, konumu ana akıştan tamamen bağımsızdır. Çıkarılırsa dokümanın akışını **engellemez**.

```html
<p>CS50x Kodluyoruz için hemen kayıt ol, dersleri anında almaya başla. Dersler tamamen online ve ücretsiz! Üstelik CS50x Kodluyoruz herkese göre.
İster hiç bilgisayar dersi almamış olun, ister kendinizi ilerletmek isteyin: Bu ders, sağlam bir algoritma temeli isteyen herkes için!</p>

<figure>
	<img src="https://cdn.sanity.io/images/9kdepi1d/production/1a22b9fada2411b7369592fd852613637834e866-5520x3680.jpg?auto=format" />
</figure>
```

## `figcaption` Elementi
`<figcaption>` etiketi, `<figure>` elementinin belirttiği resme başlık koymaya yarar.

```html
<figcaption>
	<p>A duck.</p>
	<p><small>Photograph courtesy of News.</small></p>
</figcaption>
```

## `aside` Elementi

`<aside>` elementi içerdiğinden farklı olarak daha başka bazı içerikleri tanımlar. İçeriği, üst içerik hakkında olmalıdır.

## `article` Elementi
`<article>` elementi bir makale elementidir. Bir makale web sayfasının geri kalanından bağımsız olarak dağıtılabilmelidir.

Genelde bu elementin kullanabildiği yerler forum mesajları, blog gönderileri, haber metinleri, yorumlar gibi makale içeren metinlerdir.

## `footer` Elementi
`<footer>` elementi bir doküman ya da kısım için alt bilgilerini belirtir. Bir`<footer>` genelde dokümanın yazarını, telif haklarını, kullanım gizliği, iletisim vs. gibi bilgileri içerir ve bir dokümanda bir kereden fazla kullanılabilir.