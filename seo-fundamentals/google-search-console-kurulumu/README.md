# Google Search Console Kurulumu

Bir sitenin Google'daki durumunu görmek istiyorsan Google Search Console (GSC) olmazsa olmaz. SEO araçları arasında ücretli, üçüncü taraf platformlar çok; ama GSC Google'ın kendi sunduğu, doğrudan Google indeksinden gelen veriyi içeren ücretsiz bir araç. Başka hiçbir platform sana bu veriyi bu kadar yakından gösteremez.

## Google Search Console Ne İşe Yarar?

GSC, siteni Google'ın nasıl gördüğüne dair bir pencere açıyor. Genel hatlarıyla üç şey yapıyor:

**Performance verisi:** Sitenden Google Search'e kaç tıklama gelmiş, hangi sorgularda çıkıyorsun, ortalama sıran nerede, kaç kez görünmüşsün — bunların hepsini görebiliyorsun. Bu veri başka yerden gelmiyor; Ahrefs veya Semrush da bu veriyi GSC'den çekiyor.

**Coverage ve indexing:** Hangi sayfaların indekslendiğini, hangilerinin indekslenmediğini ve neden indekslenmediğini görüyorsun. "Sayfam neden Google'da çıkmıyor?" sorusunun cevabı çoğunlukla burada.

**Core Web Vitals (CWV):** Sayfalarının gerçek kullanıcı verilerine dayalı yükleme hızı, etkileşim ve görsel stabilite skorlarını takip edebiliyorsun. CWV artık Google'ın sıralama faktörlerinden biri.

Bunların yanı sıra sitemap gönderme, URL inceleme ve bazı teknik sorunları tespit etme gibi işlevleri de var. Bir hesap oluşturduktan sonra bu araçların her biri sana farklı sorular sormanı sağlıyor.

## Hesap Oluşturma

Başlamak için [search.google.com/search-console/about](https://search.google.com/search-console/about) adresine git ve Google hesabınla giriş yap. GSC tamamen ücretsiz.

Giriş yaptıktan sonra senden bir "mülk" (property) eklemen isteniyor. Mülk, takip etmek istediğin bir site ya da URL grubu anlamına geliyor.

## Mülk Türleri: Domain Property mi, URL-Prefix Property mi?

İki seçeneğin var ve aralarındaki fark önemli.

**Domain property**, tüm alt alan adlarını ve protokolleri tek bir mülkte toplar. `example.com` için bir Domain property oluşturursan `www.example.com`, `blog.example.com`, `m.example.com` ve hem HTTP hem HTTPS versiyonları otomatik olarak bu mülke dahil oluyor. Doğrulama için DNS kaydı eklemen gerekiyor.

**URL-prefix property** daha dar kapsamlı. Sadece girdiğin URL'in altındaki sayfaları kapsıyor. `https://www.example.com/` girersen yalnızca o URL ve altındaki sayfalar dahil oluyor. `http://` versiyonu ayrı sayılıyor, alt alan adları ayrı.

Genellikle Domain property daha kullanışlı çünkü tüm veriyi tek yerden görüyorsun. Ama DNS erişimin yoksa (örneğin başkasının hostingini kullanıyorsan) URL-prefix property'ye geçebilirsin.

## Doğrulama Yöntemleri

GSC'ye bir mülk ekleyince Google sana o sitenin gerçekten senin olduğunu kanıtlamanı istiyor. Bunun için dört farklı yöntem sunuluyor.

**1. HTML meta tag (en yaygın yöntem)**

Sitenin `<head>` bölümüne Google'ın sana verdiği bir meta tag ekleyip yayına alıyorsun. Ardından GSC'de "Doğrula" butonuna tıklıyorsun.

```html
<!-- <head> içine ekle -->
<meta name="google-site-verification" content="BURAYA_GSC_KODUNU_YAZ">
```

Bu yöntem en yaygını çünkü herhangi bir CMS'de veya statik sitede kolayca uygulanabiliyor. WordPress kullanıyorsan Yoast SEO veya Rank Math eklentileri bu kodu alan sağlıyor — kod yok sen ekliyorsun.

**2. HTML dosyası yükleme**

Google sana özel bir `.html` dosyası veriyor, bunu sitenin kök dizinine koyuyorsun. `example.com/google-abc123.html` adresinden erişilebilir olunca doğrulama tamamlanıyor.

**3. DNS kaydı**

Domain property doğrulaması için tercih edilen yöntem. Domain kayıt şirketinin panelinden bir TXT kaydı ekliyorsun. DNS değişikliklerinin yayılması 24 saate kadar sürebiliyor, ama bu yöntem en sağlam çünkü sitenin içeriğine bağlı değil.

**4. Google Analytics veya Google Tag Manager**

Sitende zaten Analytics veya Tag Manager kuruluysa ve aynı Google hesabını kullanıyorsan GSC otomatik olarak bunu algılayıp doğrulama seçeneği sunuyor. Ekstra adım gerektirmiyor.

## Doğrulama Sonrası Ne Yapmalı?

Doğrulamayı tamamladıktan sonra GSC'nin dolması için beklemek gerekiyor. Performance raporu için gerçek veri genellikle 24-48 saat içinde gelmeye başlıyor, ama bazı raporlar için birkaç gün sabır gerekebilir. Veriler anlık değil; dün olan bir tıklama bugün görünüyor.

Bu bekleme süresinde boş durmak yerine yapabileceğin birkaç şey var.

İlk olarak sitemap gönder. Sol menüde "Sitemaps" bölümünü aç ve site haritanın URL'ini gir. Sitemap yoksa oluşturman gerekiyor (bunu ayrı bir konuda ele alıyoruz).

İkinci olarak URL Inspection aracını kullan. Sol üstteki arama çubuğuna sitenin herhangi bir URL'ini yapıştır. GSC sana o URL'in indekslenip indekslenmediğini, Googlebot'un onu en son ne zaman gördüğünü ve herhangi bir sorun var mı bunu gösteriyor. Yeni bir sayfa yayımladıysan "İndekslemeyi İste" butonuyla Google'a o sayfayı daha hızlı işaret edebilirsin.

## GSC Panelinde Neler Var?

Hesap kurulduktan sonra karşılaşacağın ana bölümler şunlar:

**Performance:** Tıklama, gösterim, tıklama oranı (CTR) ve ortalama sıralama verileri. Hangi sorgularda çıkıyorsun, hangi sayfalar en çok trafik alıyor, hangi ülkelerden ziyaretçi geliyor — bunların hepsini burada filtreleyebilirsin.

**URL Inspection:** Tek bir URL hakkında detaylı bilgi. İndeks durumu, son tarama tarihi, canonical URL, AMP ve yapısal veri durumu.

**Indexing / Coverage:** Hangi sayfalar indekslenmiş, hangilerinde hata var? "Excluded" (hariç tutulan), "Error" ve "Valid" kategorileri var. Bir sayfa neden indekslenmemiş, bunu burada görüyorsun.

**Sitemaps:** Sitemap gönderme ve durum takibi.

**Core Web Vitals:** Sayfalarının gerçek kullanıcı verisine dayalı CWV skorları. URL bazında "Poor", "Needs improvement" ve "Good" kategorileri.

CWV'nin ayrıntıları ayrı bir konuda; şimdilik bu bölümün varlığını bil yeter.

## Kendin Dene

GSC kurulumu on dakikadan az süren bir işlem. Şimdi [search.google.com/search-console/about](https://search.google.com/search-console/about) adresine git, sitenle giriş yap ve bir mülk oluştur. HTML meta tag yöntemiyle doğrulamayı tamamla, ardından URL Inspection aracıyla ana sayfanı kontrol et. Veri gelmeye başlayınca hangi sorgularda çıktığını görmek sürpriz olabilir.
