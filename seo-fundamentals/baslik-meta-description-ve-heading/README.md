# Başlık, Meta Description ve Heading Yapısı

Bir kullanıcı Google'da arama yaptığında, sayfana tıklamadan önce üç şeyi görür: başlığı, URL'yi ve kısa açıklamayı. Bu üç unsur, sayfanın vitrindir. Aynı zamanda, sayfanın içini arama motoruna anlatmanın en doğrudan yoludur. `<title>`, `<meta description>` ve heading etiketleri — bunları doğru yazmak, SEO'nun temel uygulama becerisidir.

## `<title>` Etiketi

`<title>` etiketi, SERP'teki mavi tıklanabilir bağlantının kaynağıdır. Bu, sayfanın başlığının arama sonuçlarında göründüğü yerdir ve on-page SEO'nun en güçlü tek sinyalidir.

Google, `<title>` etiketine büyük ağırlık verir çünkü bir sayfanın ne hakkında olduğunu en özlü şekilde özetleyen yer burasıdır. Arama motorları bu etiketi tarar; ne bulurlarsa, sayfayı o konuyla ilişkilendirmeye başlarlar.

```html
<!-- Kötü: belirsiz, keyword yok -->
<title>Anasayfa</title>

<!-- İyi: açıklayıcı, keyword doğal, ~60 karakter -->
<title>SEO Temelleri Rehberi – Başlangıç İçin Kapsamlı Kılavuz</title>
```

İyi bir `<title>` yazmak için birkaç pratik kural:

**Uzunluk:** Google, `<title>` için resmi bir karakter sınırı belirlemiyor — sonuç piksel genişliğine göre kesiyor. Topluluk gözlemlerine göre 50-60 karakter arasındaki başlıklar genellikle masaüstünde tam olarak görünüyor; ama bu Google'ın yayımladığı bir kural değil, yaygın bir pratik kılavuz.

**Keyword kullanımı:** Hedef keyword'ün başlıkta yer alması gerekir, tercihen başa yakın. Ama doğal bir dil için zorla başa yerleştirmeye gerek yok. "SEO Temelleri Rehberi" doğal okunurken keyword de içinde.

**Her sayfa için benzersiz:** Sitedeki her sayfanın kendine özgü bir `<title>` etiketi olmalı. Aynı başlığı birden fazla sayfada kullanmak, Google'ın bu sayfaları birbirinden ayırt etmesini güçleştirir.

**Marka adı:** Büyük sitelerde başlık sonuna "– Marka Adı" eklemek yaygındır. Bu, SERP'te markanı gösterir ama 60 karakter sınırını zorlarsa marka adını çıkarmak daha mantıklı olabilir.

Bir uyarı: Google bazen kendi belirlediği bir başlığı `<title>` yerine kullanabilir. Bu genellikle başlığın içerikle uyumsuz olduğunda ya da çok anahtar kelime doldurulduğunda gerçekleşir. Google'ın orijinal başlığını kullanmasını istiyorsan, başlığın doğru, açıklayıcı ve yapay olmadığından emin ol.

## `<meta name="description">` Etiketi

Meta description, SERP'te başlığın altında görünen gri metin parçasıdır. Kullanıcıya "sayfamda ne var" sorusuna kısa bir yanıt verir.

```html
<meta name="description" content="SEO'ya sıfırdan başlamak mı istiyorsun? Bu rehberde tarama, indeksleme, içerik ve teknik SEO konularını öğreneceksin.">
```

Açıkça söyleyelim: meta description, doğrudan sıralamayı etkilemez. Google bu etiketi bir ranking sinyali olarak değerlendirmez. O zaman neden önemli?

Çünkü CTR'ı etkiler. Kullanıcı arama sonuçlarına baktığında, tıklamaya karar verirken açıklamayı da okuyor. İyi yazılmış bir meta description, kullanıcıyı sayfaya tıklamaya teşvik eder. CTR'ın artması, organik trafik artışı demektir. Organik trafik artışı ise SEO'ya dolaylı olarak katkı sağlar.

İyi bir meta description nasıl yazılır?

**Uzunluk:** Google, meta description için de resmi bir karakter sınırı belirlemiyor. Topluluk gözlemlerine göre 150-160 karakter civarında kalan açıklamalar SERP'te genellikle tam görünüyor; bunun ötesi kesilebiliyor.

**Net bir fayda vaat et:** "Bu sayfayı okursan ne öğreneceksin?" sorusunu yanıtla. Kullanıcı için değeri hemen net olmalı.

**Keyword'ü dahil et:** Google, arama sorgusundaki keyword'ü meta description'da bulursa **kalın** olarak gösterir. Bu görsel vurgu, tıklama oranını artırabilir.

**Harekete geçirici ol:** "Öğren", "keşfet", "başla" gibi eylem yönlendiren kelimeler, okuyucuyu tıklamaya itebilir.

**Her sayfa için benzersiz:** `<title>` gibi, meta description da sayfadan sayfaya farklılaşmalı.

Google bazen meta description yerine sayfa içeriğinden kendi seçtiği bir metni gösterebilir, özellikle kullanıcının arama sorgusuyla daha alakalı bir metin bulduğunda. Bu bir sorun değil — Google'ın amacı kullanıcıya en iyi önizlemeyi sunmak.

## Heading Hiyerarşisi

Heading etiketleri — H1, H2, H3 ve devamı — sayfanın iskeletini oluşturur. Hem kullanıcı hem de arama motorları için içeriğin yapısını ortaya koyarlar.

**H1:** Sayfada yalnızca bir tane H1 olmalı ve bu, sayfanın ana başlığı olmalı. Neden bir tane? Çünkü H1, o sayfanın en üst düzey konusunu tanımlar. İki farklı H1 olması, sayfanın iki farklı şey anlatmaya çalıştığı izlenimi verir.

**H2:** Ana bölüm başlıklarıdır. Sayfanın büyük alt konularını H2 ile işaretle.

**H3:** H2 altındaki alt başlıklardır. Bir bölümün içinde alt başlıklar gerekiyorsa H3 kullan.

Örnek bir blog yazısının heading yapısı şöyle görünebilir:

```
H1: Ev Ofisi Kurmak İçin Eksiksiz Rehber

  H2: Doğru Masa ve Sandalye Seçimi
    H3: Ergonomik Sandalye Kriterleri
    H3: Masa Yüksekliği Nasıl Ayarlanır

  H2: Aydınlatma ve Ekran Düzeni
    H3: Doğal Işık Kullanımı
    H3: Monitör Yerleşimi

  H2: Üretkenliği Artıran Araçlar ve Aksesuarlar
```

Bu yapı, hem kullanıcının sayfada gezinmesini kolaylaştırır hem de Google'ın içeriğin organizasyonunu anlamasına yardımcı olur.

### Yaygın Heading Hataları

**Her heading'e keyword doldurmak:** "SEO nedir – SEO rehberi – SEO başlangıç" gibi heading'ler yaz. Bu, spam sinyali gönderir ve okunabilirliği ciddi ölçüde düşürür. Keyword'ler heading'lere doğal bir şekilde girdiğinde değer taşır; zorla yerleştirildiğinde tersine etki yapar.

**Hiyerarşiyi atlamak:** H1'den H3'e atlamak, H2'yi kullanmadan H3 yazmak, görsel bir etki için H2 yerine H3 tercih etmek — bunlar hem semantik yapıyı bozar hem de ekran okuyucular gibi erişilebilirlik araçlarının sayfayı doğru yorumlamasını engeller.

**Görsel boyut için heading kullanmak:** "Bu metin büyük görünsün diye H2 yapayım" mantığıyla heading kullanmak yanlış. Heading'ler anlamsal işaretleyicilerdir; görsel boyut için CSS kullan.

## Open Graph Meta Etiketleri

`<title>` ve meta description SERP için çalışırken, Open Graph etiketleri sosyal medya paylaşımları için devreye girer.

Bir sayfa URL'sini Facebook, LinkedIn ya da WhatsApp'ta paylaşıldığında, önizleme kutucuğu nasıl görünür? Hangi başlık, açıklama ve görsel çıkar? Bunu Open Graph etiketleri belirler.

```html
<meta property="og:title" content="SEO Temelleri Rehberi – Başlangıç İçin Kapsamlı Kılavuz">
<meta property="og:description" content="SEO'ya sıfırdan başlamak mı istiyorsun? Tarama, indeksleme, içerik ve teknik SEO'yu öğren.">
<meta property="og:image" content="https://example.com/seo-rehberi-kapak.jpg">
<meta property="og:url" content="https://example.com/seo-rehberi">
```

Open Graph etiketleri arama sıralamasını doğrudan etkilemez ama sosyal medyadan gelen trafik için iş yapar. Paylaşılan bir sayfanın çekici bir önizlemesi varsa, tıklanma ihtimali artar. Bu da dolaylı olarak sayfana daha fazla ziyaretçi çeker.

Twitter (X) kendi benzer etiketi olan Twitter Cards'ı kullanır, ama çoğu platform Open Graph etiketlerini de okur. Bu yüzden en azından temel Open Graph etiketlerini her sayfaya eklemek iyi bir alışkanlıktır.
