# Structured Data ve Schema.org

Google bir sayfayı taradığında HTML'i okur ve içeriği anlamlandırmaya çalışır. Ama bazı bilgiler için tahmin yapmak zorunda kalır: bu bir makale mi, bir ürün mü, bir etkinlik mi? Yazarı kim? Fiyatı ne? Structured data bu belirsizliği ortadan kaldırmak için var — sayfanın içeriğini makine okuyabilir, standart bir formatta tanımlıyor.

## Structured Data Nedir?

Structured data, HTML içeriğinin ne anlama geldiğini arama motorlarına açıklayan ek bir bilgi katmanıdır. Normal HTML sayfanın görünümünü yönetir; structured data ise içeriğin anlamını, türünü ve ilişkilerini kodlar.

Bir restoran sayfası düşün. HTML'de "Her gün 12:00–22:00 arası açığız" yazıyor. İnsan bunu okuyunca ne anlama geldiğini anlıyor. Ama Googlebot bu cümlenin çalışma saati olduğunu nereden bilecek? Structured data tam bu boşluğu kapatıyor: `openingHours: "Mo-Su 12:00-22:00"` şeklinde kodlanmış veri, Google'ın yoruma gerek duymadan doğrudan anlayabileceği formatta.

## Schema.org: Ortak Dil

Schema.org, Google, Microsoft, Yahoo ve Yandex'in 2011'de ortaklaşa oluşturduğu bir kelime dağarcığı (vocabulary). Structured data yazmak için bu kelime dağarcığını kullanıyorsun: Article, Product, Person, FAQ, Event, LocalBusiness ve daha yüzlerce tür tanımlı.

Bu ortak standart sayesinde aynı structured data farklı arama motorları tarafından anlaşılabiliyor. Farklı platformların farklı kurallar kullanması yerine hepsi aynı dili konuşuyor.

## JSON-LD: Neden Önerilir?

Structured data yazmanın üç yolu var: JSON-LD, Microdata ve RDFa. Google'ın önerisi ve yaygın kullanılan format JSON-LD.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SEO Temelleri Rehberi",
  "author": {
    "@type": "Person",
    "name": "Yazar Adı"
  },
  "datePublished": "2026-01-01",
  "description": "SEO'yu sıfırdan öğrenmek için kapsamlı rehber."
}
</script>
```

JSON-LD'nin diğer formatlara göre avantajı şu: mevcut HTML'ye dokunmadan `<script>` etiketi içine yazılıyor. HTML yapını kirletmiyor, var olan bir elementi düzenlemen gerekmiyor. Geliştirmesi, debug etmesi ve güncellenmesi çok daha kolay.

Microdata ve RDFa ise HTML elementlerinin içine özellikler olarak yazılıyor. Bu yaklaşım HTML'yi karmaşıklaştırıyor ve bakımı zorlaştırıyor. Google her üç formatı da anlıyor, ama JSON-LD'yi açıkça tercih ettiğini belirtiyor.

JSON-LD bloğunu `<head>` veya `<body>` içine koyabilirsin — teknik olarak fark etmiyor. Çoğu geliştirici düzenin daha kolay tutmak için `<head>` içine yerleştiriyor.

## Rich Result Nedir?

Structured data'nın en somut faydası rich result olarak görünüyor. Normal bir arama sonucu başlık, URL ve description'dan oluşuyor. Rich result bunların ötesine geçiyor:

- Bir ürün sayfası için yıldızlı değerlendirme ve fiyat
- Bir tarif sayfası için pişirme süresi ve kalori bilgisi
- Bir etkinlik için tarih, saat ve konum

Bu öğeler sayfanın SERP'te daha fazla alan kaplamasını sağlıyor. Kullanıcı tıklamadan önce daha fazla bilgi görüyor ve bu güven artırıyor. Sonuç: tıklanma oranı (CTR) yükseliyor.

Google'ın kendi verilerine göre bu etki ölçülebilir boyutta. Rotten Tomatoes, structured data uygulamasının ardından rich result'a giren sayfalar için %25 daha yüksek CTR bildirdi. Food Network ise şema markup eklenmiş sayfaların ziyaret sayısının %35 arttığını raporladı. Structured data uygulamak doğrudan sıralama garantisi vermiyor, ama sıraladığın pozisyonda daha fazla tıklanma sağlıyor.

## FAQ Schema: Tarihsel Bir Not

FAQPage schema'sı, bir dönem Google'ın SERP'te soru-cevap formatında rich result göstermesini sağlıyordu. Mayıs 2026 itibarıyla Google bu özelliği kaldırdı — FAQPage markup'ı artık arama sonuçlarında görsel bir rich result üretmiyor.

FAQPage JSON-LD'yi siteye eklemek teknik olarak hâlâ mümkün ve içeriğin semantik yapısını belgelemek açısından değerli olabilir. Ama Google Search'te bu markup karşılığında SERP'te özel bir görünüm bekleme.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "SEO ne kadar sürede sonuç verir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yeni bir site için ilk organik trafik 3-6 ay içinde görünmeye başlayabilir."
      }
    }
  ]
}
</script>
```

Bu örnek FAQPage markup'ının yapısını gösteriyor; ancak yukarıda belirtildiği gibi Google artık bu türden rich result üretmiyor.

## Popüler Schema Türleri

Schema.org'daki yüzlerce tür arasında SEO açısından en çok kullanılanlar:

**Article** — Blog yazıları, haber içerikleri, rehber sayfaları için. Yazar, yayın tarihi, başlık ve açıklama tanımlanabiliyor.

**Product** — E-ticaret sayfaları için. Fiyat, stok durumu, değerlendirme puanı gibi bilgileri içeriyor. Bu bilgiler Google Shopping sonuçlarında ve organic SERP'te rich result olarak görünebiliyor.

**FAQPage** — Sık sorulan sorular sayfaları için bir schema türü. Google, Mayıs 2026'da FAQPage rich result özelliğini kaldırdı; bu nedenle artık arama sonuçlarında özel bir görünüm üretmiyor.

**BreadcrumbList** — Site hiyerarşisini tanımlamak için. Google SERP'te URL yerine `/Ana Sayfa > Kategori > Sayfa` formatında bir breadcrumb gösteriyor. Bu hem daha okunabilir hem de kullanıcıya sitenin yapısını aktarıyor.

**LocalBusiness** — Yerel işletmeler için. Adres, telefon, çalışma saatleri, harita koordinatları. Google Maps ve yerel arama sonuçlarıyla entegre çalışıyor.

**Event** — Konser, konferans, webinar gibi etkinlikler için. Tarih, saat, konum ve bilet bilgisi Google Events arama özelliğinde görünebiliyor.

## Google Rich Results Test ile Doğrulama

Structured data yazdıktan sonra doğrulama yapmak gerekiyor. Google'ın [Rich Results Test](https://search.google.com/test/rich-results) aracı bunun için:

1. Sayfanın URL'ini veya HTML kodunu gir
2. Araç sayfadaki tüm structured data'yı buluyor
3. Rich result'a uygun olup olmadığını kontrol ediyor
4. Hataları ve uyarıları listeliyor

Sık karşılaşılan hatalar: zorunlu alanların eksik olması, değerlerin yanlış formatta yazılması (`datePublished` için ISO 8601 formatı gerekiyor: `2026-01-01`), veya sayfadaki gerçek içerikle örtüşmeyen veriler.

Bu son nokta önemli: Google structured data'da yazan bilginin sayfanın görünür içeriğiyle uyumlu olmasını bekliyor. Örneğin şema'da 5 yıldız yazıyorsa ama sayfada değerlendirme görünmüyorsa bu bir ihlal sayılıyor ve manuel ceza alabiliyorsun.

## Google Search Console'da Structured Data Takibi

GSC'de "Enhancements" bölümünde uyguladığın her schema türü için ayrı bir rapor görünüyor. Bu rapor kaç URL'in rich result'a uygun olduğunu, kaçında hata olduğunu gösteriyor. Siteye structured data ekledikten sonra bu raporu düzenli kontrol etmek yeni hataları erken yakalamak için işe yarıyor.

## Structured Data Bir Sıralama Faktörü mü?

Google, structured data'nın doğrudan sıralama faktörü olmadığını söylüyor. Sayfana Article şeması eklemek seni üst sıralara taşımıyor. Ama CTR'yi artırarak dolaylı olarak performansı etkiliyor: daha fazla tıklanma, daha fazla trafik, daha uzun site süresi — bunlar arama motorlarının sayfanın kalitesine dair değerlendirdiği sinyaller.

Öte yandan bazı özellikler için structured data zorunlu. Google'ın Product veya Event gibi rich result'ları gösterebilmesi için o sayfada ilgili schema markup'ın olması şart. Yani structured data olmadan bu özelliklerden hiçbirini elde edemiyorsun.

Structured data'yı bir garanti değil, bir fırsat olarak düşün. Sayfana yazdığın içeriği Googlebot'un daha net anlamasını sağlıyorsun ve buna karşılık SERP'te daha zengin bir görünüm kazanabiliyorsun.
