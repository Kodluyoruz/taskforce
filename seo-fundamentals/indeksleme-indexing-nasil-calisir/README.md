# İndeksleme (Indexing) Nasıl Çalışır?

Googlebot bir sayfayı taradı. Peki bu, o sayfanın arama sonuçlarında görüneceği anlamına mı geliyor? Hayır. Tarama sadece başlangıç. Bundan sonra gelen adım — indexing, yani indeksleme — asıl işin yapıldığı yerdir.

## Tarama ile İndeksleme Arasındaki Fark

Bu iki kavramı karıştırmak çok kolay, ama fark önemli.

Tarama (crawling): Googlebot o sayfaya gitti ve içeriğini indirdi. "Bulduk" aşaması.

İndeksleme (indexing): Google o sayfanın içeriğini analiz etti, anladı, sınıflandırdı ve kendi veri tabanına kaydetti. "Anladık ve kaydettik" aşaması.

Bir sayfa taranabilir ama indekslenmeyebilir. Googlebot sayfana geldi, içeriğini okudu — ama Google o sayfanın arama sonuçlarında gösterilmeye değer olduğuna karar vermedi ya da sayfada teknik bir engel buldu. Sonuç: sayfa tarandı, ama indekslenmedi.

Tersine, bir sayfa hiç taranmadan da indekslenmiş olabilir mi? Pratikte hayır — tarama olmadan içeriği indekslemek mümkün değil. Ama Google bazen bir URL'in varlığını başka linkler üzerinden bilip, o URL'i tam olarak taramadan da kısmi bilgi sahibi olabilir.

Özetle: Her indekslenmiş sayfa taranmıştır; ama her taranan sayfa indekslenmemiştir.

## Google Sayfayı Nasıl İşler?

Googlebot bir sayfayı taradıktan sonra Google'ın işleme hattı başlıyor. Bu süreçte birkaç adım var:

### HTML Parse

Google önce sayfanın ham HTML kodunu okuyor. Başlık etiketleri, meta açıklama, H1-H2-H3 yapısı, paragraf metinleri, alt metin, iç linkler — bunların hepsi bu aşamada çıkarılıyor. Google sayfanın ne hakkında olduğunu, anahtar kelimelerin bağlamını ve sayfanın yapısını burada anlamaya başlıyor.

### JavaScript Rendering

Modern web sitelerinde içeriğin büyük bir kısmı JavaScript ile yükleniyor. Google bu JavaScript'i de çalıştırmaya çalışıyor — ama bu, ham HTML'yi okumaktan çok daha kaynak yoğun bir işlem. Bu yüzden Google, JavaScript rendering'i çoğunlukla crawling'den biraz sonra, ayrı bir adımda gerçekleştiriyor.

Sonuç olarak, JavaScript ile oluşturulan içeriklerin indekslenmesi bazen ham HTML içeriklerinden daha uzun sürebiliyor. Eğer sitenin temel içeriği yalnızca JavaScript çalıştıktan sonra görünür hale geliyorsa, Google o içeriği geç görebilir ya da hiç göremeyebilir.

### Canonicalization

Web'de aynı içeriğin birden fazla URL'de bulunması alışıldık bir durum. Örneğin:

- `https://example.com/urun`
- `https://example.com/urun?ref=homepage`
- `https://www.example.com/urun`

Bunların hepsi aynı içeriği gösteriyor olabilir. Google, bu URL'lerin hangisini "canonical" (tercih edilen, asıl) URL olarak değerlendireceğine karar vermek zorunda. Bu kararı verirken canonical etiketine, sitenin dahili link yapısına ve hangi URL'in daha güçlü sinyallere sahip olduğuna bakıyor.

Eğer sen canonical URL'i açıkça belirtmezsen, Google kendi başına bir karar veriyor — ve bu karar senin istediğin olmayabilir.

## İndeksleme Garanti Değil

Bir sayfanın taranması, o sayfanın indeksleneceğini garanti etmiyor. Google, kalitesiz veya sorunlu bulduğu sayfaları indeksinden çıkarabilir ya da hiç almayabilir.

Google'ın indekslemeyebileceği durumların başında şunlar geliyor:

**Teknik engeller:** `noindex` meta etiketi sayfada varsa, Google o sayfayı indeksine almıyor. Bu, yazılım geliştirme ortamlarında ya da test sayfalarında kullanmak için tasarlanmış ama canlı ortama da yanlışlıkla geçmiş olabiliyor.

**Canonical sorunları:** Google, tercih ettiği canonical URL'yi indeksliyor. Eğer senin asıl sayfan canonical olarak başka bir URL'e işaret ediyorsa, asıl sayfan indekslenmiyor, o başka URL indekleniyor.

**İnce içerik (thin content):** Birkaç cümleden oluşan, kullanıcıya gerçek değer sunmayan sayfalar, Google tarafından indekslemeye değer bulunmayabilir. Google, kalitesiz içeriği indekslemek istemez — bu hem kullanıcı deneyimini hem de arama sonuçlarının güvenilirliğini etkiler.

**Duplicate content:** Başka sayfalardaki içeriklerin neredeyse birebir kopyası olan sayfalar da benzer sorunla karşılaşabilir.

**Erişim sorunları:** Sayfa crawl edilirken sunucu hatası (5xx) döndürüyorsa, Google o sayfayı işleyemiyor.

## Google Search Console ile İndeks Durumu Nasıl Kontrol Edilir?

Bir sayfanın indekslenip indekslenmediğini öğrenmek için en doğrudan araç Google Search Console'daki URL Inspection aracı.

Aracı açıp incelemek istediğin URL'i arama çubuğuna yapıştırıyorsun. Google sana şunları gösteriyor:

- Bu URL Google'ın indeksinde var mı?
- En son ne zaman tarandı?
- Canonical URL olarak hangi URL seçildi?
- Sayfanın mobil uyumluluğuyla ilgili bir sorun var mı?
- Herhangi bir indeksleme engeli tespit edildi mi?

"URL Google'da mevcut" mesajı görürsen, sayfa indekslenmiş demek. "URL Google'da mevcut değil" mesajıyla birlikte bir neden gösteriyorsa, o neden seni doğruca soruna yönlendiriyor.

Ayrıca "Canlı URL'yi Test Et" özelliğiyle, Googlebot'un o anda sayfanı nasıl gördüğünü de test edebilirsin. Bu özellikle JavaScript içeriklerinin görünüp görünmediğini anlamak için değerli.

## Yaygın İndeksleme Sorunları

### noindex Etiketi

```html
<!-- Bu sayfanın indekslenmesini engeller -->
<meta name="robots" content="noindex, nofollow">

<!-- Bu sayfanın indekslenmesine izin verir (varsayılan) -->
<meta name="robots" content="index, follow">
```

`noindex` etiketi, Google'a "bu sayfayı indeksleme" diye açık bir talimat veriyor. Bu etiketi kasıtlı kullanmak bazen mantıklı — örneğin teşekkür sayfaları, dahili arama sonuçları ya da staging ortamı sayfaları için. Ama canlı sitedeki önemli bir sayfada yanlışlıkla `noindex` varsa, o sayfa Google'da hiç görünmüyor.

Bu durum sanılandan çok daha sık karşılaşılan bir sorun. Geliştirici ortamda `noindex` eklenmiş, canlıya geçişte kaldırılmayı unutulmuş. Yeni bir site yayımladıysan ve sayfalarin Google'da görünmüyorsa, ilk kontrol etmen gereken yerlerden biri bu etiket.

### Canonical Sorunları

Bir sayfanın canonical etiketi başka bir URL'e işaret ediyorsa, Google indekslemede o başka URL'i tercih eder. Eğer bu yönlendirme yanlışsa — örneğin A sayfası B'yi canonical olarak gösteriyor ama aslında A'nın indekslenmesini istiyorsun — A hiç arama sonuçlarında çıkmıyor.

### İnce İçerik (Thin Content)

Bir sayfanın indekslenmesi için yalnızca teknik engelin olmaması yetmiyor; içeriğin de Google'ın kalite eşiğini geçmesi gerekiyor. Çok kısa, yüzeysel ya da boilerplate metin içeren sayfalar Google tarafından düşük değerli olarak değerlendirilebilir. Bu sayfalar taranıp sonra indekslenmeyebilir ya da indekslense bile çok alt sıralarda kalır.

Tarama ve indeksleme aşamalarını anladıktan sonra, sıradaki soru şu: Peki Google bir sayfayı indeksine aldığında, arama sonuçlarında nereye koyuyor? Bu, sıralama algoritmalarının konusu.
