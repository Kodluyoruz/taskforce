# Sayfa Hızı ve Core Web Vitals

"Hızlı site iyi SEO" fikri uzun süredir vardı ama somutlaşması zaman aldı. 2021'de Google, Page Experience güncellemesiyle sayfa hızını resmi bir sıralama faktörü haline getirdi ve ölçüm sistemini de netleştirdi: Core Web Vitals. Artık hızın iyileşip iyileşmediğini tahmin etmek zorunda değilsin — sayısal eşikler var, araçlar var, raporlar var.

## Neden Hız Sıralama Faktörü?

Kullanıcı davranışını düşün: bir sayfa 4-5 saniyede açılıyorsa büyük ihtimalle geri tuşuna basıyorsun. Bounce rate yükseliyor, sitede geçirilen süre düşüyor. Google bu sinyalleri okuyor ve yavaş yüklenen bir sayfayı iyi bir sonuç olarak göstermeye devam etmiyor.

Page Experience güncellemesi bunu resmi hale getirdi. Hız tek başına içerik kalitesinin önüne geçmiyor — aynı kalitede iki sayfa varsa hızlı olan avantajlı. Ama gerçekten iyi içerik varsa yavaş bir site sıralamada tamamen kaybolmuyor. Bunu şöyle anla: hız artık bir eşik. O eşiğin altında kalmak seni cezalandırıyor, üstünde olmak ise rekabette avantaj sağlıyor.

## Core Web Vitals Nedir?

Core Web Vitals, Google'ın kullanıcı deneyimini ölçmek için belirlediği üç temel metrik. 2026 itibarıyla bunlar LCP, INP ve CLS.

### LCP — Largest Contentful Paint

Sayfadaki en büyük içerik öğesinin ekranda görünmesi için geçen süre. Bu öğe genellikle bir hero görseli, büyük bir başlık metni veya video thumbnail'i oluyor.

**İyi: ≤ 2.5 saniye**
İyileştirme gerekiyor: 2.5s – 4.0s arası
Kötü: > 4.0 saniye

LCP neden önemli? Kullanıcı sayfayı açtığında ilk gördüğü şey bu öğe. 2.5 saniyeyi geçiyorsa kullanıcı sayfanın "yüklenmediğini" hissediyor, halbuki arkada diğer öğeler yüklenmeye devam ediyor olabilir.

Yaygın LCP sorunları: optimize edilmemiş büyük görsel dosyaları, render-blocking kaynaklar, yavaş sunucu yanıt süreleri.

### INP — Interaction to Next Paint

Kullanıcı sayfayla etkileşime girdiğinde — bir butona tıklama, form doldurma, menü açma — sayfanın ne kadar sürede tepki verdiği. INP, 2024'te FID'nin (First Input Delay) yerini aldı. FID yalnızca ilk etkileşimi ölçerken INP sayfada gerçekleşen tüm etkileşimlerin en kötüsünü baz alıyor, bu yüzden çok daha kapsamlı.

**İyi: ≤ 200 milisaniye**
İyileştirme gerekiyor: 200ms – 500ms arası
Kötü: > 500 milisaniye

INP genellikle JavaScript ağır çalışan sayfalarda sorun oluyor. Özellikle ana iş parçacığını (main thread) uzun süre meşgul eden scriptler, kullanıcının tıklamasına verilen tepkiyi geciktiriyor.

### CLS — Cumulative Layout Shift

Sayfa yüklenirken öğelerin ekranda ne kadar kaydığının ölçüsü. Metni okurken sayfaya yüklenen bir reklam birdenbire içeriği aşağı itiyorsa — işte bu bir layout shift. CLS bu tür kaymaların birikimli toplamını ölçüyor.

**İyi: ≤ 0.1**
İyileştirme gerekiyor: 0.1 – 0.25 arası
Kötü: > 0.25

CLS yaygın bir sorun — özellikle mobil cihazlarda. Yaygın sebepler: boyutu belirtilmemiş görseller, geç yüklenen reklamlar, web font'larının gecikmeli yüklenmesi. Kullanıcı yanlışlıkla farklı bir şeye tıklıyor, içerik atlamalar yapıyor. Bu deneyim çok sinir bozucu.

## 75th Percentile Ölçümü

Core Web Vitals metrikleri için "iyi" eşiğini geçmek beklentilerin dışında tanımlanıyor. Google bu metrikleri sayfanın tüm ziyaretlerinin ortalamasına göre değerlendirmiyor — 75. yüzdelik dilimi baz alıyor.

Yani: sayfana gelen trafiğin %75'i o eşiği geçebilmeli. En iyi %25'ine bakılmıyor; en kötü %25'in "iyi" sayılması gerekiyor.

Bu neden önemli? Bir sayfanın bazı ziyaretleri çok hızlı, bazıları çok yavaş olabilir. Yavaş mobil bağlantılar, eski cihazlar, coğrafi uzaklık fark yaratıyor. Ortalamanın iyi görünmesi, gerçek kullanıcı deneyiminin iyi olduğu anlamına gelmiyor. 75th percentile ölçümü bu gerçekçilik farkını kapatıyor.

## Ölçüm Araçları

### PageSpeed Insights

[pagespeed.web.dev](https://pagespeed.web.dev) adresinde bir URL girerek LCP, INP ve CLS değerlerini görebiliyorsun. İki veri kaynağı sunuyor:

- **Field Data (Saha Verisi):** Gerçek kullanıcıların o sayfayı ziyaret ederken ölçülen verisi. Chrome'un gerçek kullanım istatistiklerinden geliyor (CrUX verisi). Bu veri 28 günlük süreçte toplanıyor.
- **Lab Data:** Kontrollü test ortamında simüle edilen yükleme. Hızlı geri bildirim için iyi ama gerçek kullanıcı deneyimini tam yansıtmayabiliyor.

Saha verisine öncelik ver. Bir sayfada yaptığın iyileştirmenin etkisini lab verisi hemen gösteriyor olsa da CrUX verisi güncellenmesi haftalar alabiliyor.

### GSC Core Web Vitals Raporu

Google Search Console'da "Core Web Vitals" raporunda sitenin tüm URL'lerini ölçtürüp hangi sayfaların "zayıf" veya "iyileştirme gerekiyor" kategorisinde olduğunu görebiliyorsun. Bu rapor toplu görünüm için çok işlevli — yüzlerce sayfanı tek tek PageSpeed'de test etmek yerine hangi sayfaların öncelikli bakım istediğini buradan anlayabiliyorsun.

## Hız Sorunları ve Çözümleri

### Optimize Edilmemiş Görseller

Sayfadaki en büyük yavaşlama kaynağı çoğunlukla görseller. JPEG veya PNG formatında yüklenen büyük görseller hem bant genişliği tüketiyor hem de LCP süresini uzatıyor.

Çözüm: WebP formatına geç. WebP, JPEG'e kıyasla ortalama %25-35 daha küçük dosya boyutu sunuyor, görsel kalitesinden kayıp olmadan. Modern tarayıcıların tamamı WebP'yi destekliyor.

Ayrıca lazy loading kullan — ekranda henüz görünmeyen görsellerin yüklenmesini ertele:

```html
<!-- Resimlere lazy loading ekle -->
<img src="buyuk-gorsel.jpg" alt="Açıklama" loading="lazy" width="800" height="600">

<!-- JavaScript'i defer ile yükle -->
<script src="analytics.js" defer></script>
```

`loading="lazy"` özelliği görsel henüz viewport'a girmeden yüklenmesini erteliyor. Uzun sayfalarda bu çok sayıda görselin başlangıçta yüklenmesini önleyerek ilk yükleme süresini kısaltıyor.

`width` ve `height` özelliklerini her zaman belirt. Görselin boyutu önceden bilindiğinde tarayıcı sayfanın düzenini görseli beklemeden çiziyor — CLS sorunlarını önlemenin en pratik yolu bu.

### Render-Blocking Kaynaklar

`<script>` etiketleri varsayılan olarak render-blocking: tarayıcı scripti indirip çalıştırana kadar sayfanın geri kalanını render etmiyor. Büyük JS dosyaları bu nedenle LCP'yi geciktiriyor.

`defer` özelliği scripti sayfanın HTML'i parse edildikten sonra yükleyip çalıştırıyor — render bloklanmıyor. `async` ise scripti eş zamanlı indirip hazır olduğunda çalıştırıyor; sıra bağımsız scriptler için uygun.

Analytics, chat widget, reklam scriptleri — bunların hepsine `defer` veya `async` eklenmesi gerekiyor. Bu değişiklik LCP üzerinde hissedilir etki yaratıyor.

### Sunucu Yanıt Süresi ve CDN

Sunucunun ilk bayta kadar geçen yanıt süresi (TTFB — Time to First Byte) tüm metriklerin altında yatan temel. Sunucu yavaş yanıt veriyorsa hangi frontend optimizasyonunu yapsan LCP eşiğini geçmek zorlaşıyor.

CDN (Content Delivery Network) kullanımı bu sorunu çözüyor. CDN, statik dosyaları (görseller, CSS, JS) dünyanın farklı noktalarındaki sunuculara dağıtıyor. Türkiye'deki kullanıcı Almanya'daki sunucu yerine en yakın CDN nodesından içeriği alıyor — mesafe kısalıyor, gecikme düşüyor.

Cloudflare, AWS CloudFront, Vercel Edge Network gibi CDN seçenekleri küçük siteler için ücretsiz veya düşük maliyetli başlangıç planları sunuyor.

## Adım Adım Nereden Başlamalı?

Önce mevcut durumu öğren: PageSpeed Insights'ta sayfanın Core Web Vitals değerlerine bak. Hangi metrik eşiği geçemiyor? Orada odaklan.

LCP yüksekse — büyük görselleri WebP'ye çevir, render-blocking scriptleri `defer`'a al, sunucu yanıt süresini kontrol et.

CLS yüksekse — görsellerde `width` ve `height` eksik mi? Geç yüklenen reklamlar veya fontlar var mı?

INP yüksekse — sayfadaki JavaScript'i incele. Ana thread'i uzun süre bloke eden işlemler var mı? Gereksiz third-party scriptler?

Core Web Vitals bir kez düzeltince bitmiyor. Yeni özellikler, yeni scriptler, yeni görseller eklenince metrikler bozulabilir. GSC raporunu periyodik olarak kontrol etmek bunu önlemenin en az zahmetli yolu.
