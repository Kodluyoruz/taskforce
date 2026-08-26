# Few-Shot Prompting

## Few-Shot Nedir?

Few-shot prompting, modele birkaç girdi/çıktı örneği göstererek istediğin sonucu tarif etme yöntemidir. "Few" kelimesi genellikle 2-5 arası örnek anlamına gelir. Bu örnekler modele "işte tam olarak böyle bir şey istiyorum" demenin en doğrudan yoludur.

Talimatla bir şeyi tarif etmek yerine, doğrudan gösteriyorsun. İki strateji arasındaki fark şu: talimat söylemektir, örnek göstermektir. Göstermek çoğunlukla daha güçlü bir sinyal verir.

---

## Neden İşe Yarar?

Model, prompt içindeki örnekleri gördüğünde bir kalıp çıkarır. Bu kalıp uzunluk, ton, yapı, terminoloji, format — seni ilgilendiren her boyutu kapsar. Talimatla bütün bu boyutları kelimelerle tarif etmeye çalışmak hem zor hem de yanlış anlaşılmaya açıktır. Örnekler bu belirsizliği ortadan kaldırır.

Model token token tahmin yapan bir sistem olduğu için, örneklerdeki kalıpları bir sonraki token tahminini yönlendirmek için kullanır. Sen ne istediğini örnekle gösterdin mi, model o kalıbı devam ettirmeye yatkın hale gelir.

Başka bir açıdan bakarsak: talimatla "şöyle bir şey yaz" diyorsun, örnekle ise "tam bunun gibi bir şey yaz" diyorsun. Kesinlik açısından aralarında büyük fark var.

---

## Tam Bir Few-Shot Örneği (Günlük Hayat)

Bir e-ticaret sitesi için ürün sloganları üretmen gerekiyor. Sadece "kısa ve akılda kalıcı sloganlar yaz" deseydin model genel bir şeyler üretirdi. Ama istediğin stil çok spesifik. O zaman örnekle gösteriyorsun:

```text
Şirketteki ürünlerimiz için kısa, akılda kalıcı sloganlar üret.

Ürün: Kahve makinesi
Slogan: "Her yudumda sabahın enerjisi."

Ürün: Akıllı saat
Slogan: "Bileğindeki zaman, her an seninle."

Ürün: Kablosuz kulaklık
Slogan:
```

Modele yazdığın son "Ürün: Kablosuz kulaklık / Slogan:" satırı, örneklerdeki kalıbı devam ettirmesini söylüyor. Şimdi model biliyordur: slogan Türkçe olacak, tırnak içinde yazılacak, kısa ve lirik bir ton taşıyacak, ürünün duygusal faydası vurgulanacak. Bunların hiçbirini talimatla tek tek belirtmek zorunda kalmadın.

---

## Teknik Örnek

Aynı mantık daha teknik görevler için de geçerli. Hata mesajlarını son kullanıcıya uygun dile çevirmek iyi bir örnek:

```text
Hata mesajlarını kullanıcı dostu dile çevir.

Teknik: "Error 403: Forbidden"
Kullanıcı dostu: "Bu sayfaya erişim izniniz yok. Giriş yaparak tekrar deneyin."

Teknik: "Connection timeout after 30s"
Kullanıcı dostu: "Sunucuya bağlanılamadı. İnternet bağlantınızı kontrol edip tekrar deneyin."

Teknik: "NullPointerException at UserService.java:142"
Kullanıcı dostu:
```

Bu örneklerden model şunları çıkarıyor: teknik jargon kullanılmayacak, cevap iki kısımdan oluşacak (ne oldu + ne yapılmalı), ton sakin ve yönlendirici olacak, kısa tutulacak. Bunları ayrıca yazmadın — gösterdin.

---

## Sınıflandırma Örneği

Few-shot, özellikle şirkete özgü kategoriler veya etiket sistemleri için güçlüdür. Modele kategori adlarını listelemek yerine, hangi girdinin hangi kategoriye girdiğini örnekle göstermek çok daha güvenilir sonuç verir.

```text
Müşteri şikayetlerini aşağıdaki kategorilerden birine ata.

Şikayet: "Kargo 5 gün geç geldi, kutu hasar görmüştü."
Kategori: Teslimat

Şikayet: "Ürün açıklamasında yazandan farklı bir renk geldi."
Kategori: Ürün Kalitesi

Şikayet: "İade talebimi 3 kez ilettim, hiç geri dönüş almadım."
Kategori: Müşteri Hizmetleri

Şikayet: "Aynı ürün başka sitede çok daha ucuz."
Kategori: Fiyat

Şikayet: "Sepete ekliyorum ama ödeme sayfasına geçemiyor."
Kategori:
```

Bu örnekler olmadan "Teslimat, Ürün Kalitesi, Fiyat, Müşteri Hizmetleri, Diğer kategorilerinden birine ata" talimatı genellikle çalışır — ama sınır durumlar karışır. Hangi şikayet türünün hangi kategoriyi tetiklediğini örnekle göstermek belirsiz girdilerde çok daha tutarlı sonuç verir.

---

## Örnek Kalitesi Kritik

Az sayıda örnek verdiğinde bu örnekler çok şey taşıyor. Kötü örnek kötü kalıp öğretir. Birkaç temel kural:

**Çeşitlilik:** Üç neredeyse özdeş örnek verirsen model yalnızca o dar kalıbı öğrenir. Örneklerin beklediğin girdilerin farklı uçlarını temsil etmesi gerekiyor. Olumlu/olumsuz, uzun/kısa, basit/karmaşık — görevin gerektirdiği çeşitlilik kadar çeşit sun.

**Sınır durumları:** Modelin zorlanacağı, uç durumları örneklerde göster. Standart durumlar zaten çalışıyor — sınır durumlar için özellikle örnek seçmek değerli.

**Doğruluk:** Örneklerindeki çıktılar yanlışsa model yanlışı öğrenir. Örnekler kontrol etmeden atıştırmak, "oh buradan kalıp çıkar" diye düşünmek riskli. Her çıktı örneğini gözden geçir.

**Tutarlılık:** Örnekler arasında format tutarsızlığı olursa model kafası karışır. Birinde tırnak içinde yazdıysan hepsinde tırnak içinde yaz, birinde büyük harfle başlattıysan hepsinde başlat.

---

## Kaç Örnek?

Çoğu görev için 2-5 örnek yeterli. 5'ten fazla örnek nadiren anlamlı bir iyileşme sağlar ve token maliyetini gereksiz artırır.

İstisnalar var: çok özelleşmiş bir kalıp öğretmeye çalışıyorsan ve bu kalıbın birçok boyutu varsa, 7-8 örneğe çıkabilirsin. Ama bu gerçekten nadir bir durum. Genel kural şu: 3 örnekle başla, sonuç tutarsızsa birer birer ekle.

Çok az örnek (1 örnek) bazen zero-shot'tan bile kötü sonuç verebilir — model tek örneği genelleştirmeye değil taklit etmeye çalışabilir. İki örnek daha güvenli bir başlangıç noktası.

---

## Zero-Shot vs Few-Shot — Ne Zaman Hangisi?

**Zero-shot yeterli:**
- Görev genel ve iyi tanımlanmışsa
- Model tutarlı biçimde beklediğin formatta üretiyorsa
- Her defasında birkaç farklı girdiyi test ettiğinde sonuçlar tutarlıysa

Zero-shot yeterliyken few-shot'a geçmek token israfı. Örnekler yer kaplıyor, prompt uzuyor, maliyet artıyor — hiçbir kazanım olmadan.

**Few-shot gerekli:**
- Çıktı formatı veya tonu çok spesifikse ve kelimelerle tarif etmesi güçse
- Zero-shot denedinde sonuçlar girişten girişe değişiyorsa
- Modelin senin şirket/proje diline girmesini istiyorsan

Bu durumda 2-3 iyi örnekle başla. Çoğunlukla bu yeterli oluyor. Hâlâ tutarsız sonuçlar varsa örnekleri çeşitlendir ya da sayıyı artır.

---

## Pratik Alışkanlık

Bir prompt üzerinde çalışırken şu sırayı dene: önce zero-shot yaz ve test et. Tatmin edici sonuç veriyorsa orada dur. Vermiyorsa bir veya iki örnek ekle. Hâlâ iyi değilse örnekleri düzelt ya da çeşitlendir. Bu adımları atlamadan direkt 5 örnekle başlamak yerine, ihtiyaç miktarı kadar örnek eklemek hem daha verimli hem de ne işe yaradığını daha iyi anlamana yardımcı oluyor.

Few-shot prompting güçlü ama sihir değil. Kalitesi tamamen örneklerinin kalitesine bağlı.
