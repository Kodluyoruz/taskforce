# Google'a Nasıl Girilir?

Bir site yayımladın ve Google'da görünmek istiyorsun. "Google'a nasıl kayıt olacağım?" diye arama yapanların sayısı az değil. Ama yanıt basit: kayıt olman gerekmiyor. Google herhangi bir ödeme veya kayıt gerektirmiyor. Arama sonuçları ücretli değil — zaten ücretli olsaydı herkes arama motoru başka biri olur, Google olmazdı.

Peki site kendiliğinden Google'a giriyor mu?

## Kendiliğinden Giriyor mu?

Evet, ama zaman alıyor. Google'ın Googlebot adlı tarayıcı robotu sürekli web'i geziyor. Dışarıdan siteye bir link gelirse (başka bir siteden, sosyal medyadan, bir forumdan), Googlebot o linki takip edip seni bulabiliyor. Bu süreç tamamen otomatik ve ücretsiz.

Problem şu: yeni bir site için bu süreç aylar sürebilir. Dışarıdan link yoksa Googlebot siteyi hiç bulamayabilir. Büyük bir sitenin içinden de link gelmiyorsa beklemek gerekiyor.

Bu yüzden "kendiliğinden giriyor mu?" sorusunun tam cevabı şu: Teknik olarak evet, ama bunu hızlandırmak hem mümkün hem de önerilen.

## GSC ile Hızlandırma: URL İnceleme Aracı

Google Search Console kurulduktan sonra URL Inspection (URL İnceleme) aracını kullan. Sol üstteki arama çubuğuna istediğin URL'i yapıştır ve "Enter"a bas.

GSC sana o URL'in durumunu gösteriyor: Google o sayfayı biliyor mu, en son ne zaman taradı, herhangi bir sorun var mı?

Eğer sayfa henüz indekslenmemişse "İndekslemeyi İste" (Request Indexing) butonuna tıklayabilirsin. Bu Google'a "bu sayfayı tara ve indeksle" mesajı gönderiyor. Garantili bir "hemen indeksle" komutu değil — işlem genellikle birkaç günden birkaç haftaya kadar sürebilir.

Yeni bir sayfa yayımladığında, özellikle önemli bir içerik veya ürün sayfasıysa, bu adımı alışkanlık haline getirmek süreci önemli ölçüde kısaltıyor.

## Dış Link Şart mı?

Hayır, zorunlu değil. Ama yardımcı oluyor.

Google bir siteyi ilk kez bulmak için dışarıdan gelen bir linke ihtiyaç duymuyor — GSC aracılığıyla sitemap gönderdiğinde Googlebot doğrudan siteyi kontrol edebiliyor. Ama dışarıdan gelen bir link varsa iki avantaj oluyor: Googlebot seni o link üzerinden de buluyor ve o linkin gücü arama sıralamalarına katkı yapıyor (backlink etkisi).

Yeni bir siteyi hızlıca Google'a tanıtmak istiyorsan en etkili yol: GSC kur, sitemap gönder, URL İnceleme aracıyla ana sayfayı ve önemli sayfaları gönder. Dış link ise ilerleyen süreçte sıralamayı etkileyen ayrı bir konu.

## Adım Adım Süreç: Yeni Bir Site İçin

Yeni bir siteyi sıfırdan Google'a tanıtmak için izlenmesi gereken yol şu:

1. **Siteyi yayımla.** Geliştirme ortamında değil, gerçek domain üzerinde canlıya al.
2. **Google Search Console kur.** Domain property oluştur ve doğrulamayı tamamla.
3. **Sitemap gönder.** GSC'deki Sitemaps bölümüne sitemap URL'ini ekle.
4. **URL Inspection ile önemli sayfaları gönder.** Ana sayfa, en değerli içerik sayfaları, kategori sayfaları.
5. **İlk görünmeyi bekle ve takip et.** GSC'nin Coverage raporunu günlük değil, haftalık kontrol et.

Bu sürecin tamamı birkaç saat sürebiliyor. Ama sayfaların Google'da görünmesi için veri birikimi gereken Performance raporunun dolması birkaç haftayı bulabiliyor.

## Google Business Profile: Yerel İşletmeler İçin Ayrı Bir Adım

Fiziksel bir işletmen varsa — kafe, muhasebe ofisi, dişçi, mağaza — Google arama sonuçlarında görünmenin iki katmanı var: normal arama sonuçları ve yerel arama/Maps sonuçları.

Google Business Profile (eski adıyla Google My Business), Maps'te ve yerel arama sonuçlarında görünmeni sağlıyor. "Yakınımdaki kafe" veya "Kadıköy muhasebeci" gibi aramalarda harita üzerinde görünmek için Business Profile şart.

Bunun için [business.google.com](https://business.google.com) adresine git, işletmeni ekle, adres ve telefon bilgilerini doldur ve doğrulama adımını tamamla. Bu, normal web sitesi SEO'sundan bağımsız bir süreç — ikisi birbirini tamamlıyor ama biri diğerinin yerine geçmiyor.

## Yaygın Yanılgılar

"Google'a para ödemek gerekiyor" diye düşünenler var — bu tamamen yanlış. Google Arama sonuçları (organik sonuçlar) ücretli değil. Google Ads ile reklam verebilirsin ve aramada üstte çıkarsın, ama bu ayrı bir ürün. Organik sıralama para kabul etmiyor.

"Google'a site göndermek için bir form doldurmak gerekiyor" yanılgısı da yaygın. Yıllar önce böyle bir form vardı, ama artık kullanımda değil. Tek yapman gereken GSC üzerinden URL veya sitemap göndermek.

Son bir nokta: indekslenmiş olmak, üst sırada çıkmak anlamına gelmiyor. Sitenin Google'da göründüğü ama arama sonuçlarının onuncu sayfasında olduğu durumlar çok yaygın. İndeksleme başlangıç; sıralama ayrı bir hikaye.

## Kendin Dene: site: Operatörü

Google'ın indekslediği sayfaları görmek için çok pratik bir yol var. Google'a şunu yaz:

```
site:example.com
```

`example.com` yerine kendi domain adını koy. Google o domain altında indekslediği tüm sayfaları listeler. Kaç sayfanın göründüğüne bak, beklemediğin bir sayfa var mı gözlemle, önemli bir sayfa eksik mi kontrol et.

Bu operatörü özellikle bir siteyi devraldığında veya teknik SEO denetimi yaparken ilk çalıştırman gereken komut olarak düşün. Beş saniyede sitenin Google'daki genel durumuna dair fikir veriyor.

Kendi siteni gör. Hemen bir arama aç ve `site:` ile domaini yaz. Kaç sayfa çıktı?
