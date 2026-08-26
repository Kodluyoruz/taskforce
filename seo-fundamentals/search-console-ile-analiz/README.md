# Search Console ile Trafik Analizi

Google Search Console (GSC), sitenin Google'daki performansını doğrudan Google'ın kendi verisinden izlemeni sağlayan ücretsiz bir araç. Ahrefs, Semrush gibi üçüncü taraf platformlar ise kendi bağımsız tarama altyapılarını kullanıyor; GSC verisi değil, kendi crawl veritabanlarına dayanıyorlar. GSC'nin farkı, verinin doğrudan Google'ın arama sisteminden gelmesi. Bu bölümde Performance ve Indexing raporlarını nasıl okuyacağını, yaygın hataların ne anlama geldiğini ve gerçek bir optimizasyon senaryosunu ele alacağız.

## Performance Raporu: Temel Metrikler

GSC'yi açıp sol menüden "Search results" (Arama sonuçları) sekmesine gelince dört ana metrik karşılıyor seni: impressions, clicks, CTR ve ortalama pozisyon.

### Impressions (Gösterim)

Bir kullanıcı Google'da arama yaptığında sayfan sonuç listesinde göründüğünde bir impression sayılıyor. Sayfanın mutlaka görünür alana girmesi şart değil — kullanıcı aşağı kaydırmadan önce 10. sıradan sonra çıkan bir sayfan da impression alabilir. Impression sayısı yüksekse sayfanın Google'da var olduğunu, o keyword için indekslenip sıralamalara girdiğini gösteriyor. Ama tek başına bir anlam ifade etmez; asıl önemli olan bu gösterimlerin kaç tanesinin tıklamaya dönüştüğü.

### Clicks (Tıklama)

Kullanıcının arama sonuçlarında sayfana tıklayıp sitenize gelmesidir. Bu metrik doğrudan trafik anlamına gelir. Bir keyword'den impression alıyor ama tıklama almıyorsan, başlığın veya meta description'ın yeterince ilgi çekmediği anlamına gelebilir. Ya da sorgu ticari değil, informasyonel — kullanıcı doğrudan SERP'ten cevabını alıp tıklama yapmadan ayrılıyor olabilir.

### CTR (Click-Through Rate)

CTR, tıklamaların gösterimlere oranıdır: `tıklama / gösterim × 100`. Bir sayfan 1000 kez göründü ve 50 tıklama aldıysa CTR %5 demek. Sektöre, arama türüne ve pozisyona göre ortalamalar değişir. Birinci sırada çıkan bir sonuç genellikle %30'un üzerinde CTR alırken, 10. sırada bu oran %1-2'ye düşer. CTR optimizasyonu için başlık ve meta description'ı geliştirmek doğrudan etkili bir yoldur.

### Ortalama Pozisyon

Sayfanın arama sonuçlarında ortalama olarak kaçıncı sırada çıktığını gösterir. Ancak bu metriği yorumlarken dikkatli olmak gerekiyor: "ortalama pozisyon 3.5" demek sayfanın her zaman 3-4. sırada çıktığı anlamına gelmiyor. Bazı sorgularda 1. sırada, bazılarında 8. sırada çıkıyor olabilir; bunların ortalaması 3.5 veriyor. Bu yüzden ortalama pozisyona keyword bazında bakman çok daha bilgilendirici.

## Filtreler: Veriyi Dilimle

Performance raporu tek başına yüzlerce keyword ve URL içerir. Filtreleri kullanmadan bu veri gürültüye dönüşür.

Rapor üzerinde "Filtre Ekle" butonuna tıklayarak şu boyutları filtreleyebilirsin:

**Ülke filtresi:** Trafiğin hangi ülkeden geldiğini görmek için. Türkiye odaklı bir içerik yapıyorsan Türkiye filtresiyle veriyi görmek, uluslararası trafiğin karıştırmasını önler.

**Cihaz filtresi:** Masaüstü, mobil ve tablet olarak ayrılıyor. Mobilden gelen trafik masaüstü trafiğinden farklı keyword'lerde ve farklı pozisyonlarda çıkabilir. Core Web Vitals değerlendirmesi mobil-öncelikli olduğundan mobil performansını ayrıca takip etmek değerli.

**Arama türü filtresi:** Web, görsel (image), video ve haberler (news) olarak ayrılır. Varsayılan görünüm web arama sonuçlarını gösterir. Eğer görsel SEO yapıyorsan "Görsel" filtresine bakman lazım; standart web trafiği raporuna görsel arama tıklamaları dahil değil.

**Tarih aralığı:** Son 7 gün, 28 gün, 3 ay, 12 ay veya özel tarih aralığı seçebilirsin. Dönemsel karşılaştırmalar (yılın aynı haftası gibi) için özel tarih aralığı çok işe yarar. Algoritma güncellemesinden önce ve sonrasını karşılaştırmak istiyorsan bu filtre hayat kurtarır.

## "Hangi Keyword'den Ne Kadar Trafik Geliyor?"

Bu soruyu yanıtlamak GSC'nin en temel kullanım senaryolarından biri. Performance raporunda "Queries" (Sorgular) sekmesinde her keyword'ün kaç tıklama, kaç gösterim, ne kadar CTR ve hangi ortalama pozisyonda olduğunu görebilirsin.

Sütun başlıklarına tıklayarak sıralama yapabilirsin. Tıklamaya göre sıralayınca en çok trafik getiren keyword'lerini görürsün. Bu listede zaman zaman beklenmedik sorgular çıkabilir — sitenin hedeflemediğin ama Google'ın seni o konuyla ilişkilendirdiği keyword'ler. Bunlar hem içerik fırsatı hem de yanlış yönlendirme olduğunda düzeltilmesi gereken sinyaller.

Bir URL'nin hangi keyword'lerden trafik aldığını görmek istiyorsan "Sayfalar" sekmesine geç, ilgili URL'yi tıkla, ardından "Sorgular" sekmesine dön. Bu işlem otomatik olarak o URL için filtre uygular ve o sayfaya özgü keyword listesini getirir.

## Indexing Raporu: Hangi Sayfalar İndekslendi?

Sol menüden "Indexing" → "Pages" (Sayfalar) bölümüne gelince sitendeki sayfaların indekslenme durumunu görebilirsin. Bu rapor iki ana grubu gösterir:

**İndekslenmiş sayfalar:** Google'ın başarıyla indekslediği ve arama sonuçlarında gösterebileceği sayfalar. Sayısının ne kadar stabil kaldığını takip etmek önemlidir. Ani düşüş çoğunlukla bir teknik sorunun işaretçisidir.

**İndekslenmemiş sayfalar:** Google'ın çeşitli nedenlerle indekslemediği sayfalar. Bu grubun neden önemli olduğu şu sorudan geliyor: indekslenmemiş sayfa, Google arama sonuçlarında görünemeyen sayfa demek.

## Sık Görülen GSC Hataları

İndekslenmemiş sayfalar arasında gezerken birkaç hata türüyle karşılaşırsın.

**Submitted URL not found (404):** Sitemapında veya başka bir yerden GSC'ye gönderdiğin bir URL artık mevcut değil. Sunucu "bu sayfa yok" diyor. Bu, silinmiş ya da URL'si değiştirilmiş sayfalar için olur. Çözüm: ya o URL'yi yeniden oluştur ya da 301 redirect (yönlendirme) koy.

**Redirect error:** Google bir URL'yi takip ederken yönlendirme zincirinde bir sorunla karşılaştı. Redirect döngüsü (A → B → A), çok fazla art arda yönlendirme (A → B → C → D → ...) veya yönlendirme hedefinin kendisinin hata vermesi bu gruba girer. Yönlendirme zincirini temizlemek ve doğrudan hedefe gönderen tek bir 301 ayarlamak çözüm olur.

**Soft 404:** Sunucu teknik olarak 200 (başarılı) yanıt kodu döndürüyor ama sayfa içeriği aslında bir hata sayfasına benziyor. "Ürün bulunamadı", "Sonuç yok" gibi içeriklere sahip sayfalar Google tarafından soft 404 olarak işaretlenebilir. Bu sayfaların ya gerçek içerikle doldurulması ya da 404/410 döndürmesi gerekir.

Bu hataların hepsini panelden "Validate Fix" butonu ile doğrulatabilirsin. Google'a "bu sorunu çözdüm, yeniden kontrol et" sinyali göndermiş olursun.

## Pratik Senaryo: Düşük Asılı Meyve Stratejisi

SEO optimizasyonunda en hızlı sonuç almanın yollarından biri, zaten pozisyon 8-15 arasında çıkan sayfaları bulmak ve bunları geliştirmektir. Bu sayfalara "low-hanging fruit" (düşük asılı meyve) deniyor — çünkü zaten oradasın, küçük bir iyileştirme seni ilk sayfanın üst kısmına taşıyabilir.

GSC'de bunu nasıl yaparsın?

1. Performance raporunu aç.
2. Sorgular sekmesinde ortalama pozisyona göre sırala.
3. Pozisyon 8-15 arasında olan keyword'leri filtrele (5'in üzerinde impression almış olanlar daha güvenilir veri sunar).
4. Bu keyword'lerin hangi sayfalara denk geldiğini gör.
5. O sayfalardaki içeriği gözden geçir: başlık yeteri kadar güçlü mü, içerik o keyword'ün arama niyetiyle tam olarak örtüşüyor mu, iç link desteği yeterli mi?

Sayfa 2'ye düşen bir keyword'ü sayfa 1'e çıkarmak, sıfırdan yeni bir sayfa oluşturmaktan genellikle çok daha az çaba ister. Bu yüzden bu strateji özellikle kaynakları kısıtlı ekipler için değerli.

## Kendin Dene: İlk Analiz Egzersizi

GSC hesabın açıksa şu adımları uygula:

1. Search results → Queries sekmesine git.
2. "Tıklama" sütununa göre azalan sırayla sırala.
3. En üstteki 5 keyword'ü not al: bunlar sana en çok trafik getirenler.
4. Şimdi sütunu "Gösterim"e çevir. En çok görünen ama tıklama almayan keyword'leri belirle.
5. Bu iki liste arasındaki fark sana neyi söylüyor?

Çok gösterim, az tıklama alan keyword'ler CTR optimizasyonu fırsatı taşır. Başlık veya meta description'ı daha ilgi çekici yapmak, rakiplerin başlıklarını inceleyip farklılaşmak bu fırsatı değerlendirmenin ilk adımı.

GSC ham veri sunar; onu anlayıp harekete geçmek sana kalıyor.
