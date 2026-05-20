# Sitemap ve robots.txt

Bir sitenin arama motorlarıyla ilişkisini yönetmek istiyorsan iki araç her zaman yanında olacak: sitemap ve robots.txt. İsimleri sık duyulur, bazen birbirine karıştırılır. Ama aslında birbirinin tersi gibi çalışıyorlar — biri Googlebot'a neyi taraması gerektiğini söylüyor, diğeri neyi taramasın istediğini.

## Sitemap Nedir?

Sitemap, sitendeki URL'lerin listesini içeren bir dosyadır. Google'a "şu URL'ler var, bunları tara" demek gibi. Özellikle şu durumlarda işe yarıyor:

- Site yeni yayımlandı ve dışarıdan gelen backlink henüz yok
- Sitede çok sayıda sayfa var ve bazıları iç linklerle ulaşılması zor
- Bazı sayfalar yeni eklendi veya güncellendi ve hızlıca Googlebot'a bildirilmek isteniyor

Sitemap olmadan da Googlebot siteyi tarar — linkleri takip ederek sayfaları bulur. Ama sitemap bu süreci hızlandırıyor ve Googlebot'un gözden kaçırabileceği sayfaları gündeme getiriyor.

## XML Sitemap Formatı

Sitemapler genellikle XML formatında oluyor. Yapısı standart:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/blog/seo-nedir/</loc>
    <lastmod>2026-03-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

Her `<url>` bloğu bir sayfayı temsil ediyor. `<loc>` zorunlu alan — sayfanın tam URL'i. `<lastmod>` son değiştirilme tarihi. `<changefreq>` ne sıklıkla güncellendiğine dair ipucu; `<priority>` ise sitendeki göreli önem sırası.

Küçük bir not: `changefreq` ve `priority` alanlarını Google tamamen görmezden geliyor; kendi tarama kararlarını bu alanlara bakmaksızın kendi mantığıyla veriyor. `lastmod` ise farklı — doğru tutulursa Google'ın güncel içeriği öncelikle tarama olasılığı artıyor.

## Sitemap Nereye Konulur?

Sitemap dosyası genellikle sitenin kök dizinine yerleştirilir: `example.com/sitemap.xml`. Birden fazla sitemap varsa (çok büyük siteler için yaygın) bir sitemap indeks dosyası oluşturulur ve bu dosya diğer sitemaplara işaret eder.

WordPress kullanıyorsan Yoast SEO veya Rank Math otomatik olarak sitemap oluşturuyor. Next.js, Nuxt, Hugo gibi framework'lerde de yerleşik sitemap üretim desteği var. Statik bir siteyse elle oluşturmak ya da bir araç kullanmak gerekiyor.

## Sitemapı Google Search Console'a Gönderme

Sitemap oluşturduktan sonra GSC'ye bildirmek hızlanmayı sağlıyor. GSC panelinde sol menüden "Sitemaps" bölümüne git. "Add a new sitemap" kutusuna sitemap URL'ini yaz — genellikle `sitemap.xml` — ve gönder.

GSC sitemanı düzenli aralıklarla kontrol ediyor ve durumu sana bildiriyor: kaç URL gönderilmiş, kaçı gerçekten indekslenmiş, herhangi bir hata var mı. Gönderilen URL sayısı ile indekslenen URL sayısı arasındaki fark büyükse, o sayfaların neden indekslenmediğini araştırmak gerekiyor.

## robots.txt Nedir?

robots.txt, sitenin kök dizininde bulunan ve botlara hangi alanlara girebileceklerini, hangilerine giremeyeceklerini söyleyen bir metin dosyasıdır. `example.com/robots.txt` adresinden herkes erişebilir.

Googlebot sayfayı ziyaret etmeden önce siteye uğrar ve robots.txt'i kontrol eder. Orada yasaklı bir alan varsa o alana girmez. Bu kadar basit bir mekanizma.

Bir örnek:

```
# Tüm botlar için geçerli kurallar
User-agent: *
Disallow: /admin/
Disallow: /cart/
Disallow: /checkout/
Allow: /

# Sitemap konumu
Sitemap: https://example.com/sitemap.xml
```

`User-agent: *` tüm botlar için geçerli olduğunu söylüyor. `Disallow: /admin/` Googlebot'un admin paneline girmesini engelliyor. `Allow: /` geri kalanına izin var. Son satırdaki `Sitemap` direktifi ise Googlebot'a sitemap dosyasının nerede olduğunu gösteriyor — kullanışlı bir pratik.

## robots.txt'in Konumu Neden Önemli?

robots.txt her zaman domain kökünde olmak zorunda: `example.com/robots.txt`. Alt dizine koyarsan (`example.com/blog/robots.txt`) Googlebot bunu tanımıyor. Dosya adı da tam olarak `robots.txt` olmalı, büyük harfle değil.

Eğer sitende robots.txt yoksa Googlebot her şeyi tarayabileceğini varsayıyor. Yani dosya yoksa sorun yok; ama varsa doğru yapılandırılmış olmalı.

## Yaygın Bir Yanılgı: robots.txt Sayfayı Gizlemez

Bu noktayı iyice anlamak gerekiyor çünkü yanlış anlaşılınca ciddi sorunlara yol açabiliyor.

robots.txt ile bir sayfayı taramadan engelleyebilirsin — Googlebot o dizine girmez, içeriği okuyamaz. Ama bu sayfanın indekslenmeyeceği anlamına gelmiyor.

Şöyle düşün: Googlebot `/admin/` dizinine girmez. Ama başka bir siteden `example.com/admin/login` adresine bir link varsa, Google o URL'in varlığını biliyor. Sadece içeriğini görmüyor. Hatta o URL SERP'te görünebilir bile — hiçbir snippet gösterilmez, sadece "Bu sayfa hakkında bilgi bulunmamaktadır" mesajı çıkar, ama URL kayıt altındadır.

Bir sayfanın Google'ın arama sonuçlarında görünmemesini istiyorsan, yani gerçekten gizlemek istiyorsan, doğru araç `noindex` meta etiketidir:

```html
<meta name="robots" content="noindex">
```

Googlebot bu etiketi görmek için sayfayı taraması gerekiyor. Sayfanın `<head>` bölümüne koyduğunda Googlebot sayfayı tarayabilir, noindex etiketini okur ve sayfayı indekslemez — böylece SERP'te asla görünmez.

**Dikkat:** Eğer robots.txt ile bir sayfayı bloklarsanız (taramayı engellerse) ve aynı anda noindex da koyarsanız bir çelişki oluşur. Googlebot sayfaya giremeyeceği için noindex etiketini göremez. Yani robots.txt + noindex kombinasyonu işe yaramaz.

**Kural:** Sayfayı arama sonuçlarından gizlemek istiyorsan → `noindex` kullan (crawlinge izin ver). Google'ın içeriği tamamen okumasını istemiyorsan → `robots.txt` kullan (ama URL yine de sonuçlarda görünebilir). Ticari sır içeren sayfa, test ortamı, üye girişi gerektiren içerik — bunlar için `noindex` tercih et. robots.txt taramayı engeller, noindex indekslemeyi. Bunlar farklı şeyler.

## Sitemap Türleri

Büyük siteler için tek bir sitemap dosyası yeterli olmayabilir. Google bir sitemapın 50.000 URL'den fazlasını içeremeyeceğini ve 50 MB'ı geçemeyeceğini söylüyor. Bu sınıra ulaştığında sitemap indeksi kullanılıyor: ana bir sitemap dosyası, diğer sitemlara link veriyor.

Ayrıca özelleşmiş sitemap türleri de var. Görsel içerik için Image Sitemap, video içerik için Video Sitemap, haber siteleri için News Sitemap. Bu özel formatlar, Google'a o medya türlerini daha iyi anlatmak için ek bilgi veriyor. Küçük bir içerik sitesi için bunlar gerekmeyebilir; ama e-ticaret veya medya platformlarında fark yaratabilir.

## robots.txt Yanlış Yapılandırılınca Ne Olur?

Bu soruyu sormak gerekiyor çünkü robots.txt hataları bazen felaket sonuçlar doğuruyor. Çok yaygın bir senaryo: geliştirici test ortamında tüm taramayı engelleyen bir robots.txt koyuyor (`Disallow: /`), sonra canlıya geçerken bu dosyayı değiştirmeyi unutuyor. Birkaç hafta sonra sitedeki tüm sayfalar Google'dan kayboluyor.

Google Search Console bu tür sorunları fark etmeni kolaylaştırıyor; Coverage raporunda birdenbire çok sayıda URL "Excluded" kategorisine düşerse robots.txt birinci şüpheli.

Test ortamı için her zaman ayrı bir alan adı veya şifre koruması kullan, canlı siteyle aynı robots.txt yapılandırmasını paylaşma.

## Sitemap ile robots.txt: Birbirini Tamamlayan Araçlar

İkisi farklı sorulara cevap veriyor:

- Sitemap: "Googlebot'a hangi sayfaları taramasını önereyim?"
- robots.txt: "Googlebot hangi alanlara girmesin?"

Birbirinin yerine geçmiyorlar. Birlikte, doğru yapılandırıldığında Googlebot'un siteyle ilişkisini çok daha verimli hale getiriyorlar. Sitemap'te bir URL'i önerip robots.txt'te aynı dizini engellersen çelişki yaratırsın — Googlebot o URL'i taramaya çalışmaz ama sana bir uyarı gösterebilir. GSC'nin Sitemaps raporu bu tür çelişkileri yakalamak için iyi bir başlangıç noktası.

Sitemap ve robots.txt'i doğru kurduktan sonra, Googlebot'un siteyi nasıl taradığını ve indekslediğini GSC üzerinden takip etmeye başlayabilirsin.
