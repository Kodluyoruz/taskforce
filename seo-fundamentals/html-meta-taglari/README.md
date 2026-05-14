# HTML Meta Tagları

Bir web sayfasını ziyaret ettiğinde gördüklerin — başlık, görseller, metin — sayfanın sadece bir katmanı. Bir de gözle görülmeyen bir katman var: `<head>` bölümü. Buradaki bilgileri kullanıcı doğrudan görmüyor, ama tarayıcılar ve arama motorları her şeyi buradan okuyor. Meta taglar işte bu katmanın bileşenleri.

## Meta Tag Nedir, Ne İşe Yarar?

Meta taglar HTML sayfasının `<head>` bölümüne yazılır. Sayfanın içeriğini, dilini, nasıl indeksleneceğini ve sosyal medyada nasıl görüneceğini tanımlayan makine okunabilir talimatlar içerirler. Ziyaretçi onları görmez, ama Googlebot, Facebook, Twitter ve diğer sistemler bu bilgilere bakarak sayfayı anlar.

Şöyle düşün: kitabın kapağı ve arka sayfasındaki özet okuyucuya ne içerdiğini söylüyor. Meta taglar da sayfanın Googlebot'a ve diğer sistemlere söylediği özet.

## Temel Meta Tag Yapısı

Modern bir sayfanın `<head>` bölümü şu meta tagları içermeli:

```html
<head>
  <!-- Karakter seti — her zaman olmalı -->
  <meta charset="UTF-8">

  <!-- Mobil uyumluluk için viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Sayfa başlığı (SEO açısından en kritik) -->
  <title>Sayfa Başlığı – Site Adı</title>

  <!-- SERP snippet açıklaması -->
  <meta name="description" content="150-160 karakter arası özet.">

  <!-- Robots direktifi -->
  <meta name="robots" content="index, follow">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://example.com/bu-sayfa/">

  <!-- Open Graph (sosyal medya paylaşımı) -->
  <meta property="og:title" content="Sayfa Başlığı">
  <meta property="og:description" content="Kısa açıklama.">
  <meta property="og:image" content="https://example.com/og-gorsel.jpg">
  <meta property="og:url" content="https://example.com/bu-sayfa/">
</head>
```

Şimdi her birini ayrı ayrı ele alalım.

## charset: Karakter Seti

```html
<meta charset="UTF-8">
```

Bu tag sayfanın karakter kodlamasını tanımlar. UTF-8, Türkçe dahil dünyanın neredeyse tüm dillerindeki karakterleri destekliyor. Bu tag olmadan Türkçe karakterler — ğ, ş, ç, ü, ö, ı — bozuk görünebilir. Neden? Tarayıcı hangi standardı kullanarak metni yorumlayacağını bilemez ve yanlış tahmin ederse anlamsız karakterler gösterir. Her HTML dosyasının en tepesine koymak en iyi pratik.

## viewport: Mobil Uyumluluk

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Bu tag tarayıcıya sayfanın genişliğini ve başlangıç zoom seviyesini söylüyor. `width=device-width` sayfanın genişliğini cihazın ekran genişliğine eşitliyor. `initial-scale=1.0` sayfanın zoom olmadan açılacağını belirtiyor.

Bu tag olmadan mobil cihazlarda sayfa masaüstü genişliğinde render edilir ve küçük bir ekranda sıkıştırılmış görünür. Google mobil-first indexing kullandığı için bu tag artık sadece kullanıcı deneyimi meselesi değil, doğrudan sıralama faktörü.

## title: Sayfa Başlığı

`<title>` teknik olarak bir meta tag değil, ama `<head>` içinde yer alan ve SEO'daki en önemli unsurlardan biri. SERP'te (arama sonuçları sayfasında) mavi tıklanabilir link olarak görünüyor. Tarayıcı sekmesinde de bu başlık yazıyor.

Birkaç pratik kural:

- Google, `<title>` için resmi bir karakter sınırı belirlemiyor; kesme piksel genişliğine göre oluyor. Topluluk gözlemlerine göre 50-60 karakter civarı genellikle masaüstünde tam görünüyor — bu Google'ın yayımladığı bir kural değil, yaygın bir pratik kılavuz.
- Hedef anahtar kelimeyi başlığın başına yakın koy.
- Her sayfanın başlığı özgün olmalı — site genelinde aynı başlığı kullanmak Googlebot'un sayfaları ayırt etmesini zorlaştırıyor.
- Marka adını sonuna eklemeyi düşün: `Anahtar Kelime – Marka Adı` formatı yaygın kullanılıyor.

## meta description: SERP Açıklaması

```html
<meta name="description" content="150-160 karakter arası özet.">
```

Bu tag, arama sonuçlarında başlığın altında görünen gri metin parçasıdır. Doğrudan sıralama faktörü değil — Google bunu içeriği sıralamak için kullanmıyor. Ama tıklanma oranını (CTR) etkiliyor. İyi yazılmış bir description, kullanıcıya sayfada ne bulacağını anlatır ve tıklamaya teşvik eder.

Google, description'ı her zaman kullanmayabilir. Özellikle kullanıcının arama sorgusuna daha uygun bir metin sayfada varsa onu gösterebilir. Bu yüzden description'ı sadece Googlebot için değil, sayfayı tıklayıp tıklamamaya karar veren gerçek insanlar için yaz.

Ideal uzunluk 150-160 karakter. Daha kısa da olabilir, ama çok kısa yazılırsa Google kendi oluşturduğu açıklamayı kullanıyor ve bu her zaman tam istediğin gibi olmayabiliyor.

## meta robots: İndeksleme Direktifi

```html
<meta name="robots" content="index, follow">
```

Bu tag Googlebot'a sayfayla ne yapacağını söylüyor. Kullanabileceğin değerler:

- `index` — sayfayı indeksle, arama sonuçlarında göster
- `noindex` — bu sayfayı arama sonuçlarına ekleme
- `follow` — sayfadaki linkleri takip et, bağlantılı sayfalara geç
- `nofollow` — sayfadaki linkleri takip etme
- `noarchive` — önbellek versiyonunu gösterme direktifi (Google 2024'te önbellek özelliğini kaldırdığından artık işlevsiz)
- `nosnippet` — SERP'te description snippet gösterme

Değerleri virgülle birleştirerek kullanabilirsin: `content="noindex, nofollow"`.

Ne zaman kullanılır? Test sayfaları, üye girişi gerektiren içerikler, kopyalanan içerik sayfaları için `noindex` mantıklı. Bir e-ticaret sitesinde filtreleme URL'leri (`?renk=mavi&beden=m`) çoğunlukla `noindex` alır çünkü bunlar benzersiz içerik değil, aynı ürünün farklı görünümleri.

Dikkat: `meta robots` yalnızca bir direktif. Googlebot bu etiketi görmek için sayfayı taraması gerekiyor. robots.txt ile taramayı engellersen Googlebot noindex etiketini okuyamaz. Tarama ile indeksleme ayrı kavramlar.

## canonical: Asıl URL Bildirimi

```html
<link rel="canonical" href="https://example.com/bu-sayfa/">
```

Bu tag teknik olarak meta tag değil bir link elementi, ama `<head>` içinde yer alır ve SEO için vazgeçilmez. Aynı içeriğin birden fazla URL'den erişilebildiği durumlarda hangisinin "asıl" sayfa olduğunu Google'a bildiriyor.

Örneğin bir ürün sayfası şu URL'lerden erişilebilir olabilir:

- `example.com/urun`
- `example.com/urun?ref=homepage`
- `www.example.com/urun`

Üçü de aynı içerik. Canonical tag olmadan Google, link gücünü üç URL arasında dağıtabiliyor. Canonical tag koyduğunda "bunların hepsi bu URL'in versiyonları" diyorsun ve güç tek noktada toplandı.

## Open Graph Tagları: Sosyal Medya Paylaşımı

```html
<meta property="og:title" content="Sayfa Başlığı">
<meta property="og:description" content="Kısa açıklama.">
<meta property="og:image" content="https://example.com/og-gorsel.jpg">
<meta property="og:url" content="https://example.com/bu-sayfa/">
```

Open Graph, Facebook tarafından geliştirilen ama artık LinkedIn, WhatsApp, Telegram ve pek çok platform tarafından kullanılan bir protokol. Sayfanı birileri sosyal medyada paylaştığında hangi görsel, başlık ve açıklamanın görüneceğini bu taglar belirliyor.

`og:image` özellikle önemli. Görselsiz bir paylaşım dikkat çekmez; iyi seçilmiş bir görsel tıklanma oranını ciddi ölçüde artırıyor. Minimum 1200×630 piksel önerilir. Görsel belirtilmezse Facebook ve diğer platformlar sayfadan rastgele bir görsel seçmeye çalışır — bu her zaman istenen sonucu vermiyor.

Open Graph tagları doğrudan arama sıralamasını etkilemiyor. Ama sosyal medyadan gelen trafik zamanla backlink kazanmaya, marka görünürlüğüne ve dolaylı olarak SEO'ya katkı sağlıyor.

## meta keywords: Artık Geçersiz

```html
<!-- Bunu kullanma — Google dikkate almıyor -->
<meta name="keywords" content="seo, meta tag, html">
```

`meta name="keywords"` tag'ı, 1990'ların ortasında arama motorlarının sayfaları kategorize etmesi için kullanılıyordu. Ama webmaster'lar bu alanı alakasız yüksek hacimli anahtar kelimelerle doldurmaya başlayınca spam bir araca dönüştü.

Google, 2009 yılında resmi olarak bu tag'ı artık sıralama sinyali olarak kullanmadığını açıkladı. Bing de benzer bir tutum aldı. Bu tag hala teknik olarak geçerli HTML — yazabilirsin, hata vermez — ama Google açısından hiçbir değer taşımıyor. Rakiplerine hangi anahtar kelimeleri hedeflediğini göstermekten başka bir işe yaramıyor.

## Her Şeyi Birlikte Düşün

Meta taglar tek başına sıralama garantisi vermiyor. Ama doğru yapılandırılmadığında ciddi sorunlara yol açabiliyor: sayfalar yanlışlıkla `noindex` alıyor ve Google'dan kayboluyor, eksik `og:image` sosyal medyadaki paylaşımları çirkinleştiriyor, yanlış charset Türkçe karakterleri bozuyor.

Sayfa başlığını ve meta description'ı güçlü yaz — bunlar kullanıcının tıklama kararını etkileyen tek unsurlar arasında. robots tagını yanlışlıkla `noindex` yazan pek çok site var; bir sayfanın Google'dan kaybolduğunu fark etmeden önce bu etiketi kontrol etmek ilk adım olmalı.

`<head>` bölümü küçük bir alan ama sayfanın arama motorlarıyla ilişkisini büyük ölçüde belirliyor. Burayı düzenli ve tutarlı tutmak, içerik çabanın meyvesini vermesi için temel şart.
