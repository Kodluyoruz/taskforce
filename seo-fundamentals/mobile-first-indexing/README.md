# Mobile-First Indexing

Google bir sayfayı değerlendirdiğinde hangi versiyona bakıyor — masaüstü mu, mobil mi? 2019'dan bu yana cevap nettir: mobil. Mobile-first indexing, Google'ın sayfayı önce mobil gözle değerlendirdiği, indekslediği ve sıraladığı anlamına geliyor.

## Mobile-First Indexing Nedir?

Adından da anlaşılıyor: Google, sayfanı ilk olarak mobil kullanıcı gibi ziyaret ediyor. Mobilde içerik ne kadar erişilebilir, ne kadar hızlı yükleniyor, ne kadar okunabilir — bunlar sıralamanın temelini oluşturuyor.

Önceki yaklaşımda Googlebot önce masaüstü versiyonu tarardı. Mobil cihaz kullanımı arttıkça bu model gerçeklikten koptu. Google, kullanıcıların büyük çoğunluğunun mobil cihazdan arama yaptığı bir dünyada masaüstü öncelikli değerlendirmenin anlam taşımadığına karar verdi.

## Tarihsel Süreç

Mobile-first indexing 2017'de küçük bir deney olarak başladı. 2019'dan itibaren yeni siteler için varsayılan hale getirildi. Eski sitelerin geçişi daha uzun sürdü ve Google bu geçişi aşamalı olarak tamamladı.

Bu ne anlama geliyor? Bugün herhangi bir siteyi Google'a kayıt ettirdiğinde mobile-first indexing varsayılan olarak etkin. Masaüstü öncelikli olan bir eski dönem artık yok.

## Türkiye'deki Tablo

Türkiye'de internet kullanımı mobil cihaz ağırlıklı. TÜİK ve Statista verilerine göre Türkiye'de internet kullanıcılarının büyük çoğunluğu web'e akıllı telefondan erişiyor. Bu sayı masaüstü kullanımının çok önünde.

Bu bağlamda mobile-first indexing soyut bir teknik detay değil. Türkiye'deki kullanıcılar sayfanı büyük ihtimalle telefondan görüyor. Sitenin mobil deneyimi kötüyse hem gerçek ziyaretçileri kaybediyorsun hem de Google seni bu gerçekliğe göre değerlendiriyor.

## Responsive Design ve viewport Meta Tag

Mobil uyumluluğun temel taşı responsive design — sayfanın farklı ekran boyutlarına göre kendini uyarlaması. Bunun olabilmesi için ilk koşul viewport meta tag:

```html
<!-- Viewport meta tag — mobile-first için zorunlu -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Bu tag tarayıcıya "sayfanın genişliğini cihazın ekran genişliğine göre ayarla, zoom olmadan göster" talimatı veriyor. Bu tag olmadan mobil tarayıcı sayfayı masaüstü genişliğinde render edip küçültüyor — içerik okunaksız, linkler tıklanamaz hale geliyor.

Responsive design CSS ile hayata geçiyor. `@media` sorguları (media queries) farklı ekran genişlikleri için farklı stiller tanımlamanı sağlıyor. Modern CSS framework'leri — Bootstrap, Tailwind — responsive tasarımı kutudan çıkar çıkmaz destekliyor.

Google'ın tercihi responsive design, ama dinamik servis (aynı URL, farklı HTML) veya ayrı mobil alt alan adı (m.example.com) da çalışıyor. Ama responsive en az karmaşık yaklaşım ve bakımı en kolay.

## Yaygın Mobil Sorunlar

### Küçük Dokunma Hedefleri

Mobil kullanıcı parmağıyla tıklıyor, fare imleci yok. Küçük linkler ve butonlar parmakla hedef almayı zorlaştırıyor; kullanıcı yanlış öğeye dokunuyor.

Google'ın önerisi: dokunma hedeflerinin (tap target) en az 48×48 piksel olması. Bu değerin altında kalan linkler ve butonlar GSC Mobile Usability raporunda uyarı olarak çıkıyor.

Pratikte: navigasyon linkleri, form elemanları, CTA butonları yeterli büyüklükte olmalı. Tıklanabilir iki öğe arasında da yeterli boşluk bırakmak gerekiyor; iç içe geçmiş küçük linkler parmakla seçimi neredeyse imkânsız hale getiriyor.

### Yazı Boyutu Çok Küçük

Mobilde okunabilir minimum yazı boyutu 16px. Daha küçük yazılar kullanıcıyı zoom yapmaya zorluyor — bu hem kötü deneyim hem de GSC'nin işaretlediği bir sorun.

CSS'te `font-size: 16px` temel metin için güvenli başlangıç noktası. Başlıkların, paragrafların ve form etiketlerinin mobilde okunaklı olduğunu kontrol et.

### Viewport Ayarsız Sayfalar

`viewport` meta tag'ı olmayan sayfalar mobilde doğru görünmüyor. Google Googlebot'unun bu sayfaları ziyaret ettiğinde okunaksız bir deneyimle karşılaşıyor. Bu hem teknik hem içerik kalitesi açısından olumsuz değerlendirilen bir durum.

### Mobilde Farklı İçerik

Mobile-first indexing'in en sık yanlış anlaşılan boyutu bu. Eğer sitenin masaüstü versiyonu geniş içerik sunuyor ama mobil versiyonu bazı bölümleri saklıyorsa — "mobil kullanıcı için sadece özet gösterelim" mantığıyla — Google yalnızca mobil versiyondaki içeriği görüyor. Masaüstünde gizlenen içerik indekslenmiyor.

Bu özellikle üç durumda sorun çıkarıyor:

- Mobil sürümde tab veya accordion ile gizlenen içerik
- JavaScript ile koşullu olarak gösterilen bölümler
- Ayrı mobil alt alan adı (m.example.com) masaüstüne göre daha az içerik sunuyorsa

Çözüm: mobil ve masaüstü aynı içeriğe sahip olmalı. Akordeon ile gizlenen içerik Google tarafından indekslenebiliyor — sorun, içeriğin mobil HTML'de hiç bulunmaması.

## Google Search Console: Mobile Usability Raporu

GSC'nin "Mobile Usability" raporu mobil sorunları tespit etmenin en hızlı yolu. Sol menüden "Experience > Mobile Usability" bölümüne git.

Rapor şu hataları listeliyor:

- **Viewport not set** — `viewport` meta tag eksik
- **Text too small to read** — yazı boyutu 12px'in altında
- **Clickable elements too close together** — dokunma hedefleri birbirine çok yakın
- **Content wider than screen** — içerik sayfadan taşıyor

Her hata için hangi URL'lerin etkilendiğini gösteriyor. Tek tek sayfa düzeltmek yerine sitegenelinde aynı şablondan kaynaklanan hatayı bulmak daha verimli — raporda aynı hata için çok sayıda URL varsa büyük ihtimalle şablon seviyesinde bir sorun var.

## "Masaüstünde İyi, Mobilde Kötü" Senaryosu

Bu senaryo düşündüğünden daha yaygın. Tasarım masaüstünde yapılıp mobil test atlanıyor, ya da mobil görünüm "yeterince iyi" sayılıp üzerinde durulmuyor.

Bu senaryoyu tespit etmek için birkaç yol:

**Chrome DevTools:** F12 tuşuna bas, araç çubuğundaki cihaz simgesine (Ctrl+Shift+M) tıkla. Farklı cihaz boyutlarını simüle edebiliyorsun. Bu hızlı bir görsel kontrol sağlıyor.

**Google'ın Mobile-Friendly Test aracı:** [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly) adresine sayfanın URL'ini gir. Google Googlebot'un gördüğü versiyonu simüle ediyor ve sorunları raporluyor.

**GSC URL İnceleme:** GSC'de herhangi bir URL'i inspect edebilirsin. "Test Live URL" seçeneği Googlebot'un o sayfayı nasıl gördüğünü gösteriyor — hem masaüstü hem mobil ekran görüntüsü sunuyor.

## Kendi Siteni Test Et

En hızlı yöntem: telefonunu al, kendi siteni mobil tarayıcıda aç. Her sayfayı scroll et, linklere tıkla, formlara gir. Kullanıcının yaşadığını sen de yaşarsın.

Şunlara dikkat et:

- Yazıları zoom yapmadan okuyabiliyor musun?
- Linklere parmakla rahatça tıklayabiliyor musun?
- Sayfa içerik yüklendikçe zıplıyor mu? (CLS sorunu)
- Navigasyon menüsü mobilde kullanılabilir mi?

Kendi siteni test etmek için özel bir araç gerekmez. Asıl kullanıcı deneyimini telefonunda yaşamak sana araçların göstermediği şeyleri de gösteriyor.

Mobile-first indexing bir teknik gereksinim olarak düşünülebilir, ama özünde şunu söylüyor: Türkiye'deki kullanıcıların büyük çoğunluğu siteye telefondan geliyor. Onlara iyi bir deneyim sunmak hem Google'ın beklentisi hem de ziyaretçilerin hakkı.
