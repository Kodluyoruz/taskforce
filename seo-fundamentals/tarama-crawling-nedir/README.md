# Tarama (Crawling) Nedir?

Bir sayfanın Google'da görünmesi için önce Google'ın o sayfayı bulması gerekiyor. Bu bulma işlemine crawling deniyor — Türkçesiyle tarama. Google'ın web'i nasıl keşfettiğini anlamadan, "Neden Google'da görünmüyorum?" sorusuna cevap vermek mümkün değil.

## Googlebot Nedir?

Googlebot, Google'ın web'i gezmek için kullandığı yazılım robotudur. Bot, spider ya da web crawler da deniyor. Görevi basit: İnternetteki sayfaları ziyaret etmek, içeriklerini okumak ve Google'ın büyük indeksine aktarmak.

Googlebot web'i nasıl geziyor? Bir sayfayı ziyaret ediyor, o sayfadaki linkleri takip ediyor, o linklerden ulaştığı yeni sayfaları ziyaret ediyor, oradaki linkleri de takip ediyor — ve bu böyle devam ediyor. Web'in yapısı zaten bu linklerin birbirini referans göstermesi üzerine kurulu. Googlebot bu yapıyı harmanlayıcı gibi geziyor.

Ama Googlebot sıradan bir tarayıcı değil. Sayfayı hem ham HTML olarak hem de JavaScript'i çalıştırıp render edilmiş haliyle inceleyebiliyor. Bu iki aşama ayrı gerçekleşiyor ve JavaScript rendering meselesi ciddi bir teknik SEO konusu — buna birazdan değineceğiz.

Googlebot çeşitli versiyonlara ayrılmış durumda. Masaüstü ve mobil Googlebot ayrı; bu ayrım önemli çünkü Google, "mobile-first indexing" politikasıyla artık öncelikle sitenin mobil versiyonunu değerlendiriyor.

## Crawl Budget: Büyük Siteler İçin Asıl Mesele

Her site için Googlebot'un o siteyi ne sıklıkla ve ne kadar kapsamlı taradığı, bir ölçüde sınırlı. Bu sınıra crawl budget (tarama bütçesi) deniyor.

Küçük siteler için crawl budget genellikle sorun değil. 20-30 sayfalık bir site, Googlebot tarafından kolayca ve sık sık taranabilir.

Ama onbinlerce sayfası olan bir e-ticaret sitesi ya da büyük bir haber portalı için durum farklı. Googlebot her ziyarette tüm sayfaları tarayamaz. Bu yüzden hangi sayfaların öncelikli taranacağı, yani crawl budget'ın nasıl kullanıldığı önemli hale geliyor.

Crawl budget'ı kötü kullanan durumlar şunlar: çok sayıda benzer URL (filtre parametreleri, arama sayfaları), silinmiş ama linkleri hâlâ devam eden sayfalar (404'ler), ve düşük kaliteli ya da içeriksiz çok sayıda sayfa. Tüm bunlar Googlebot'un değerli sayfalar yerine "çöp" sayfaları taramak için zaman harcamasına neden olabilir.

## Googlebot Bir URL'i Nasıl Keşfeder?

Googlebot URL'lere üç temel yoldan ulaşıyor:

### 1. Linkler Üzerinden

En yaygın yol bu. Googlebot zaten bildiği bir sayfayı ziyaret eder ve o sayfadaki linkleri takip ederek yeni URL'lere ulaşır. Bu yüzden backlink (başka sitelerden gelen bağlantı) almak hem ranking açısından hem de sitenin taranması açısından önemli. Yeni bir sayfa yayımladığında, diğer sayfalardan o sayfaya iç link verirsen Googlebot o sayfayı çok daha hızlı bulur.

### 2. Sitemap Üzerinden

Sitemap, sitendeki URL'lerin listesini içeren bir XML dosyasıdır. Googlebot'a "bak, bu sayfaları tara" demek gibi. Özellikle yeni siteler veya çok sayıda sayfası olan siteler için sitemap, Google'ın sayfaları keşfetmesini hızlandırıyor. Sitemap'ini Google Search Console'a gönderebilirsin; böylece Googlebot bu listeyi düzenli olarak kontrol eder.

Sitemap mutlak bir garanti değil — Googlebot sitemap'te gördüğü her URL'i taramak zorunda değil. Ama doğru düzenlenmiş bir sitemap, tarama sürecini önemli ölçüde kolaylaştırıyor.

### 3. Google Search Console ile Manuel Gönderim

Google Search Console'daki URL Inspection (URL İnceleme) aracıyla belirli bir URL'i Googlebot'a manuel olarak gönderebilirsin. Bu özellikle şu durumlarda işe yarıyor: yeni yayımladığın önemli bir sayfa var ve organik keşfedilmesini beklemeden hızlıca taranmasını istiyorsun. Ya da bir sayfayı güncelledin ve Google'ın güncel versiyonu görmesini istiyorsun.

Bu araç "hemen indeksle" komutu değil, "lütfen bu URL'e bak" isteği. Google yine de kendi takvimine göre hareket eder, ama genellikle bu işlem birkaç saat ile birkaç gün içinde sonuç verir.

## Crawl Engellerine Genel Bakış

Googlebot bir sayfayı bulmaya çalışırken çeşitli engellerle karşılaşabilir. Bunların bir kısmı kasıtlı (sen koydun), bir kısmı teknik sorunlardan kaynaklanıyor.

### robots.txt

robots.txt, sitenin kök dizininde bulunan ve Googlebot'a hangi sayfaları taramasına izin verildiğini, hangilerini taramasının istenilmediğini söyleyen bir metin dosyasıdır.

```
User-agent: *
Disallow: /admin/
Disallow: /private/
Allow: /
```

Bu yapılandırma şunu söylüyor: Tüm botlar (`User-agent: *`) için `/admin/` ve `/private/` dizinlerine giriş yasak (`Disallow`), geri kalan her şeye izin var (`Allow: /`). Admin panelini ya da dahili araçlarını Googlebot'tan gizlemek istiyorsan bu yöntem kullanılıyor.

Önemli bir uyarı: robots.txt ile engellenen bir sayfa indekslenmez diye bir kural yok. Googlebot o sayfayı taramaz ama başka sitelerden o URL'e link geliyorsa Google yine de o URL'in varlığını biliyor olabilir — sadece içeriğini görmüyor.

### Login Duvarı

Eğer bir sayfayı görmek için kullanıcı adı ve şifre gerekiyorsa, Googlebot da o sayfayı göremez. Bu kadar basit. Üyelik gerektiren içerikler, ödeme duvarı arkasındaki makaleler — bunlar doğal olarak taranmıyor ve indekslenmiyor.

### JavaScript Rendering Sorunları

Googlebot sayfaları iki aşamada işliyor: önce ham HTML'yi okuyor, sonra JavaScript'i çalıştırıp render edilmiş içeriği görüyor. İkinci aşama hem daha geç gerçekleşiyor hem de daha fazla kaynak tüketiyor.

Eğer bir sayfanın tüm içeriği JavaScript ile yükleniyor ve Googlebot o JavaScript'i düzgün çalıştıramazsa, Google o içeriği göremez. Modern JavaScript framework'leriyle geliştirilen siteler için bu önemli bir SEO riski. Ayrıntılarına ilerleyen konularda gireceğiz, ama şimdilik şunu bil: Sayfanın görünür olmasını istiyorsan HTML içinde de ulaşılabilir olması gerekiyor.

## Gerçek Senaryo: "Sayfam Yayında Ama Google'da Görünmüyor"

Bu, SEO dünyasında sıkça karşılaşılan bir durum. Sayfayı yayımladın, ama Google'da aradığında hiç çıkmıyor. Ne olabilir?

İlk şüphe: crawl sorunu. Google o sayfayı hiç görmemiş olabilir. Bunun birkaç olası nedeni var:

- Sayfaya hiç iç link verilmemiş, sitemap'te de yok — Googlebot onu bulamıyor
- robots.txt o dizini engellemiş, farkında bile değilsin
- Sayfa çok yeni, Googlebot henüz uğramamış
- JavaScript ile yüklenen içerik, Googlebot tarafından görülemiyor

Bu senaryoda yapman gereken ilk şey: Google Search Console'u aç, URL Inspection aracına o URL'i yapıştır, ve "Google bu URL'i biliyor mu, en son ne zaman taradı?" sorularını sor. Bu araç sana crawl geçmişini, herhangi bir engel var mı bunu, ve indeks durumunu gösteriyor.

Crawling'i anladığında, sıradaki adım: Googlebot bir sayfayı gördükten sonra ne yapıyor? Yani indexing (indeksleme) süreci nasıl işliyor.
