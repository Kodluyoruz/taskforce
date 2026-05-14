# URL Yapısı ve Canonicalization

URL, kullanıcının tarayıcı çubuğunda gördüğü şeyden fazlası. Hem insanlara hem Googlebot'a sayfanın ne hakkında olduğuna dair sinyal veriyor. İyi yapılandırılmış bir URL okunması kolay, tahmin edilebilir ve arama motorlarının anlayabileceği kadar açıklayıcı olmalı.

## SEO Dostu URL Nasıl Görünür?

İki URL karşılaştırması meselenin özünü gösteriyor:

```
# Kötü: anlamsız, uzun, parametreli
https://example.com/p?id=1234&cat=7&ref=homepage

# İyi: açıklayıcı, kısa
https://example.com/blog/seo-nedir/
```

İkinci URL'de içeriğin ne hakkında olduğunu anında görüyorsun. Hem kullanıcı bunu paylaşmak istediğinde anlam taşıyor, hem de Googlebot o URL'deki kelimeleri sayfanın konusuna dair sinyal olarak değerlendiriyor.

SEO dostu URL için birkaç temel kural:

**Kısa ve anlamlı tut.** Gereksiz kelimeler ekleme. `https://example.com/blog/yazimiz/seo-nedir-seo-hakkinda-her-sey/` yerine `https://example.com/blog/seo-nedir/` daha iyi.

**kebab-case kullan.** Kelimeler arasına tire (-) koy, alt çizgi (_) değil. Google alt çizgiyi kelime ayırıcı olarak değerlendirmiyor; `seo_nedir` Google için tek kelime, `seo-nedir` iki kelime.

**Küçük harf kullan.** `example.com/Blog/SEO-Nedir` ve `example.com/blog/seo-nedir` teknik olarak farklı URL'ler sayılabilir. Küçük harf tutarlılığı duplicate content sorunlarını önlüyor.

**Tarih ve sayı ekleme, gerekmiyorsa.** `/2024/03/15/seo-nedir/` gibi tarih içeren URL'ler içerik güncellendiğinde problemli hale geliyor — URL değişmeden içeriği güncel tutamazsın ya da URL'i değiştirince eski linkler kırılıyor.

## Canonical Tag: Duplicate Content Sorununa Çözüm

Bir sayfanın birden fazla URL üzerinden erişilebilir olması düşündüğünden daha sık karşılaşılan bir durum. Şu senaryoyu düşün:

- `example.com/urun` — ürün sayfası
- `example.com/urun?renk=mavi` — filtrelenmiş görünüm, aynı içerik
- `www.example.com/urun` — www versiyonu, aynı içerik
- `http://example.com/urun` — HTTP versiyonu, aynı içerik

Dört farklı URL, aynı içerik. Google hangi URL'i asıl sayacak? Emin olamazsan link gücü dağılıyor, sıralama bölünüyor. İşte canonical tag bu sorunu çözmek için var.

```html
<!-- Sayfanın <head> bölümüne ekle -->
<link rel="canonical" href="https://example.com/urun/">
```

Bu etiketi her versiyona koyduğunda Google'a "bunların hepsi aynı sayfanın versiyonları, asıl URL şu" diyorsun. Google bu sinyali değerlendiriyor ve link gücünü canonical olarak işaretlediğin URL'de topluyor.

Canonical tag zorunlu bir direktif değil, bir ipucu. Google her zaman onu takip etmeyebilir — örneğin canonical olarak gösterdiğin URL robots.txt'te engellenmiş ya da içerik gerçekten farklıysa Google kendi kararını verebilir. Ama doğru uygulandığında büyük çoğunlukla çalışıyor.

## Trailing Slash Tutarlılığı

`example.com/urun` ile `example.com/urun/` arasındaki o son `/` küçük görünüyor ama teknik olarak iki farklı URL. Hangisini seçersen seç, tutarlı ol ve diğerini canonical tag veya redirect ile birincisine yönlendir.

Çoğu CMS bu tutarlılığı otomatik sağlıyor. Ama özel bir yapı kuruyorsan veya iç linklerini elle yazıyorsan bu detayı gözden kaçırma. GSC'de Coverage raporuna bakınca her ikisinin de ayrı ayrı göründüğünü fark edersen bir sorun var demek.

## HTTPS Zorunluluğu

Google 2014'ten beri HTTPS'i bir sıralama sinyali olarak değerlendiriyor. Bu sinyal küçük bir ağırlık taşısa da arama sonuçlarında HTTPS olan site ile olmayan arasında bir eşitlik durumunda HTTPS lehine karar veriliyor.

Bunun ötesinde, HTTPS olmayan bir site Chrome'da "Güvenli değil" uyarısı veriyor. Bu kullanıcı deneyimini doğrudan etkiliyor; ziyaretçinin geri gitmesi (bounce) yükseliyor.

Mixed content sorunu da var: sitenin HTTPS üzerinden sunulduğu ama bazı görsellerin, scriptlerin veya stil dosyalarının HTTP ile yüklendiği durum. Bu hem güvenlik açığı hem de tarayıcı tarafından uyarı olarak gösteriliyor. HTTPS'e geçince tüm kaynaklarının da HTTPS üzerinden yüklendiğinden emin ol.

## URL'de Türkçe Karakter Kullanımı

URL'de ç, ğ, ı, ş, ü gibi Türkçe karakterler kullanmak teknik olarak mümkün. Ama birkaç nedenden ötürü genellikle ASCII-safe tutmak daha güvenli.

Birincisi, URL'ler paylaşıldığında veya kopyalandığında bu karakterler percent-encoded hale geliyor: `ğ` → `%C4%9F`. Görsel olarak çirkin ve okunması zor bir URL ortaya çıkıyor.

İkincisi, bazı platformlar veya araçlar bu karakterleri farklı yorumlayabiliyor. Redirect'lerde, sitemap'te veya üçüncü taraf araçlarda beklenmedik sorunlar çıkabiliyor.

Pratikte: Türkçe içerik için URL slug'larını ASCII'ye çeviren araç veya CMS ayarı kullan. `seo-nedir` hem daha kısa hem daha güvenli. Kelimelerdeki anlamı kaybetmemek için ğ→g, ç→c, ş→s, ü→u, ö→o dönüşümleri yaygın kabul görüyor.

## Redirect: URL Değişince Ne Olur?

Bazen URL'i değiştirmek kaçınılmaz oluyor — site yeniden yapılandı, içerik kategorisi değişti, slug düzeltildi. Bu durumda eski URL'den yeni URL'e 301 (kalıcı) redirect kurmak gerekiyor.

301 redirect Google'a "bu sayfa kalıcı olarak taşındı" diyor. Google, 301 durumunda hedef URL'yi canonical olarak değerlendiriyor. 302 ise geçici bir taşıma olduğunu belirtiyor; Google bu durumda kaynak URL'yi canonical olarak tutmaya devam edebilir ve indeksi buna göre güncellemeyebilir. Yanlış redirect türü seçmek indeksleme açısından istenmeyen sonuçlara yol açabiliyor.

URL yapısını baştan doğru kurarsanı ilerleyen dönemde değiştirmek zorunda kalmazsın. Değiştirmek zorundaysan da redirect zinciri oluşturmaktan kaç: A → B → C gibi zincirleme yönlendirmeler Googlebot'un link gücünü doğru aktarmasını zorlaştırıyor.

## Hepsini Birden Düşün

URL yapısı, canonical tag ve HTTPS — bunlar ayrı konular gibi görünse de hepsi aynı soruya cevap arıyor: Google hangi URL'i asıl URL olarak görüyor ve o URL'e güveniyor mu? Bu üç konuyu doğru yapılandırdığında, sitenin teknik altyapısı arama motorlarına tutarlı ve temiz bir sinyal gönderiyor. Teknik sorunlar nedeniyle gücünün bir kısmını harcayan pek çok site var; bu adımları geçmeden atlamamak seni o gruba sokmayacak.
