# Değerlendirme Zihniyeti

Prompt yazmak kolaydır. İyi prompt yazmak ise başka bir şeydir. Bu iki şey arasındaki fark çoğu zaman teknik bilgiden değil, zihniyetten kaynaklanır. Pek çok kişi bir prompt yazar, sonucu beğenmez, biraz değiştirir, yine beğenmez ve en sonunda "AI bu konuda iyi değil" der. Oysa gerçek sorun farklıdır: ne istediği net değildi, başarılı sonucun nasıl görüneceğini bilmiyordu, ne değiştirdiğini ve neden değiştirdiğini takip etmiyordu.

Değerlendirme zihniyeti, prompt mühendisliğini rastgele denemelerden sistematik bir sürece dönüştüren şeydir.

## Neden Değerlendirme Şart?

Ölçemediğini geliştiremezsin. Bu cümle iş dünyasında çok kullanılan bir klişeye dönüştü, ama prompt mühendisliğinde tam anlamıyla doğru.

Eğer "başarılı bir sonuç" için net bir tanımın yoksa, hangi değişikliğin işe yarayıp yaramadığını bilemezsin. Her prompt denemesi bir tahmin oyununa dönüşür. Bazen iyi sonuç alırsın, ama neden iyi olduğunu anlamazsın — dolayısıyla bunu tekrarlayamazsın. Bazen kötü sonuç alırsın, ama neden kötü olduğunu anlamadığın için düzeltemezsin.

Değerlendirme zihniyetinin temeli şu: **Prompt yazmadan önce "iyi sonuç nasıl görünür?" sorusunu cevapla.**

Bu soruyu cevaplamak zor görünebilir, ama aslında değil. Sadece biraz daha fazla dikkat gerektiriyor.

## Başarı Kriteri Nasıl Tanımlanır?

Başarı kriteri, modelin çıktısını değerlendirmek için kullandığın ölçüttür. İyi bir başarı kriteri spesifik ve kontrol edilebilir olmalı. Yani iki farklı kişi aynı çıktıya bakıp aynı sonuca ulaşabilmeli: "Bu kriteri karşılıyor mu, karşılamıyor mu?"

Şunu gör:

```text
Kötü başarı kriteri: "Model iyi bir cevap versin."

İyi başarı kriteri: "Model, 3 maddeden oluşan bir liste döndürsün. Her madde eylem fiiliyle başlasın, 15 kelimeyi geçmesin ve verilen ürün özelliğiyle doğrudan ilgili olsun."
```

İlk kriter öznel — "iyi" ne demek? İkinci kriter ise kontrol edilebilir. Çıktıyı alıp şu soruları sorabilirsin: 3 madde var mı? Her madde eylem fiiliyle mi başlıyor? 15 kelimenin altında mı? Ürün özelliğiyle ilgili mi? Her soruya evet/hayır yanıtı verebilirsin.

Başarı kriterini tanımlarken şu soruları kendine sor:

- **Format**: Çıktı ne formda olmalı? (Liste, paragraf, tablo, JSON?)
- **Uzunluk**: Ne kadar uzun ya da kısa?
- **İçerik**: Hangi bilgiler mutlaka olmalı? Hangileri olmamalı?
- **Ton**: Resmi mi, samimi mi? Teknik mi, anlaşılır mı?
- **Doğruluk**: Spesifik bir bilgiyi içermeli mi? Bunu nasıl kontrol edersin?

Her göreve hepsini uygulamak zorunda değilsin. Ama en az ikisini net olarak tanımladığında, değerlendirme süreci çok daha kolay hale gelir.

## Hipotez Kur → Test Et → Kaydet → Rafine Et

Prompt mühendisliğini en verimli hale getiren çalışma döngüsü şudur: Hipotez kur, test et, kaydet, rafine et.

**Hipotez kur:** Bir değişikliğin sonucu neden iyileştireceğini düşün. "Format belirtmediğim için model çok uzun cevap veriyor. Maksimum uzunluk eklersem daha odaklı bir sonuç alırım" gibi.

**Test et:** Değişikliği yap ve sonucu gör.

**Kaydet:** Neyi değiştirdiğini, önceki sonucun ne olduğunu, yeni sonucun ne olduğunu ve ikisi arasındaki farkı yaz. Bu adım çoğu kişinin atladığı adımdır — ama kaydettiklerin zamanla sana en değerli verilerden biri olur.

**Rafine et:** Kayıtlarına bakarak bir sonraki hipotezini kur.

Bu döngü bilimsel metoda benziyor — çünkü öyle. Prompt mühendisliği, bir LLM üzerinde deney yapmaktır. Deneyi sistematik yapanlar, rastgele denemelerle hayal kırıklığına uğrayanlar yerine ilerleme kaydeder.

Uygulamada bu şuna benzer: Bir Notion sayfası, bir Google Sheet veya sadece bir metin dosyası aç. Her prompt denemeni, yaptığın değişikliği ve sonucu kaydet. Bir hafta sonra hangi değişikliklerin işe yaradığını göreceksin. Bu veri, sezginden daha güvenilirdir.

## Aynı Problemi Farklı Prompt'larla Dene

Tek bir prompt'la istediğin sonucu alamadığında, o prompt'u biraz değiştirme eğiliminde olmak doğal. Ama daha verimli bir yaklaşım, aynı görevi en az üç farklı yaklaşımla denemektir.

Neden üç? Çünkü iki prompt karşılaştırdığında hangisinin daha iyi olduğunu görebilirsin, ama *neden* daha iyi olduğunu anlamak zordur. Üç veya daha fazla karşılaştırma yaptığında, örüntüler ortaya çıkmaya başlar.

Örneğin "bir ürünü tanıt" görevi için şu üç prompt'u dene:

```text
Varyant A (görev tanımı ağırlıklı, rol yok):
"Bu ürünü kısaca tanıt: akıllı su şişesi, 500ml, uygulama bağlantısı var."

Varyant B (güçlü rol, kısa talimat):
"Sen bir pazarlama uzmanısın. Bu ürün için tek cümlelik satış sloganı yaz: akıllı su şişesi, 500ml, uygulama bağlantısı var."

Varyant C (bağlam ağırlıklı, detaylı talimat):
"Ürün: Akıllı su şişesi, 500ml, mobil uygulama ile günlük su tüketimini takip ediyor. Hedef kitle: 25-35 yaş, sağlık odaklı, teknolojiye yatkın. 2 cümlelik ürün tanıtımı yaz. Özellik değil, fayda odaklı ol."
```

Bu üçünden hangisi daha iyi sonuç verdi? Neden? Bu soruların cevabı sana görev için hangi bileşenin belirleyici olduğunu öğretir.

Bu örnekte Varyant C genellikle en tutarlı sonuçları verir — hem hedef kitleyi hem çıktı formatını açıkça tanımladığı için model yorumlama alanı dar kalıyor. Ama bu senin deney sonucun olacak: farklı bir model, farklı bir sektör ya da farklı bir içerik türüyle çalışıyorsan sıralama değişebilir. Önemli olan üçünü de gerçekten denemek ve hangisinin senin kullanım durumuna daha iyi uyduğunu gözlemlemektir.

Zamanla şunu fark edersin: Bazı görev türleri için rol bileşeni kritik, bazıları için bağlam, bazıları için örnek vermek. Bu örüntüleri anlamak, gelecekteki prompt'ları çok daha hızlı kurgulamana izin verir.

## "Sihir Değil, Sistem" Mesajı

Prompt mühendisliği hakkında yaygın bir yanlış anlama var: doğru "sihirli kelimeleri" bulursan model her şeyi yapacak. Bu sebeple bazı insanlar "ChatGPT'yi manipüle eden prompt'lar" veya "AI'ı açan gizli komutlar" gibi içeriklere ilgi duyuyor.

Bu yaklaşım temelden yanlış.

Prompt mühendisliği, sihirli kelimeler bulmak değil. Belirli bir görev için modelin ne tür bilgiye ihtiyaç duyduğunu sistematik olarak anlamak ve bunu net bir şekilde sağlamak.

Aynı prompt farklı görevlerde farklı sonuçlar verir. Bir görevde işe yarayan format başka bir görevde anlamsız kalır. Bu yüzden "en iyi prompt" diye evrensel bir şablon yok. Var olan şey: belirli bir görev için belirli bir modelde belirli bileşenlerin işe yaradığına dair sistematik bir anlayış.

Değerlendirme zihniyetini benimsediğinde şu şeyleri yapabilirsin:

- Hangi değişikliğin fark yarattığını söyleyebilirsin.
- Neden fark yarattığını açıklayabilirsin.
- Benzer görevler için bu bilgiyi transfer edebilirsin.
- Sıfırdan başlamak yerine birikimli olarak ilerliyorsun.

Bu zihniyetin pratikte maliyeti düşük, faydası yüksek. Yapman gereken şey: her prompt denemesini bilinçli yapmak, sonucu değerlendirmek ve öğrendiğini bir yere kaydetmek. Bu kadar.
