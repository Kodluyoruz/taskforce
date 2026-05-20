# Prompt Optimizasyonu ve Test Etme

## Optimizasyon Neden Gerekli?

İlk yazdığın prompt nadiren en iyisidir. Bu bir beceri eksikliği değil — prompt yazmak, doğası gereği iteratif bir süreç. Modelin nasıl davranacağını önceden tam olarak tahmin edemezsin; deneyin ve gözlemin yerini tutan yok.

"Çalışan bir prompt" ile "iyi çalışan bir prompt" arasındaki fark sistematik test ve iterasyonla kapanır. Biri tutarlı sonuç verir, özelleşmiş girdilerde dağılmaz, farklı kullanıcılarda aynı kaliteyi korur. Diğeri bazen işe yarar, bazen yaramaz.

Prompt optimizasyonu süreci ne kadar sistematik olursa değişkenleri o kadar iyi izole edebilirsin — ve ne değiştirdiğinde ne iyileştiğini gerçekten anlayabilirsin.

---

## Optimizasyon Döngüsü

Temel döngü şu adımlardan oluşuyor:

1. Mevcut prompt'u al
2. Temsili girdilerle test et
3. Sonuçları kaydet
4. Hangi değişkenin sorunu yarattığına dair hipotez kur
5. **Yalnızca bir şey değiştir**
6. Aynı girdilerle tekrar test et
7. Sonuçları karşılaştır

Bu döngüde en önemli adım beşinci: **yalnızca bir şey değiştir.** Birden fazla şeyi aynı anda değiştirirsen hangi değişikliğin fark yarattığını bilemezsin. Rol, format ve uzunluğu aynı anda değiştirdin ve çıktı iyileştiyse — hangi değişiklik işe yaradı? Rol mu? Format mı? Uzunluk mu? Üçü birden mi? Bilmiyorsun.

Küçük, izole değişiklikler daha yavaş görünür ama çok daha fazla bilgi verir.

---

## A/B Karşılaştırma

Optimizasyonun temel tekniği iki prompt varyantını aynı girdilerle karşılaştırmaktır. A varyantı mevcut prompt, B varyantı değişiklik içeren prompt. Aynı 5-10 girdi her iki versiyonla çalıştırılır, sonuçlar yan yana değerlendirilir.

```text
Test görevi: Özet kalitesi

Varyant A:
"Bu metni özetle."

Varyant B:
"Bu metni 3 maddelik bir liste olarak özetle. Her madde maksimum 20 kelime olsun ve bir eylem veya karar içersin."

Başarı kriteri:
- Madde sayısı = 3 ✓/✗
- Her madde ≤ 20 kelime ✓/✗
- Eylem veya karar içeriyor ✓/✗
```

Bu örnekte B varyantı daha spesifik. Ama "daha spesifik prompt her zaman daha iyi" varsayımıyla hareket etmek yerine, gerçekten test ediyorsun. Belki B varyantı bazı girdilerde yapay ve mekanik sonuçlar üretiyor. Test bunu gösterir.

Başarı kriterlerini önceden yazmak zorunlu. Çıktıyı gördükten sonra kriterler şekillendirirsen bilinçsizce tercih ettiğin versiyona yönelik kriterler tasarlarsın — bu değerlendirmeyi geçersiz kılar.

---

## Hangi Değişken Ne Değiştirir?

Her prompt değişkeni farklı bir boyutu etkiler. Bunları anlamak hangi değişkeni ne zaman denemesi gerektiğini gösterir:

**Rol eklemek:**
Model daha uzman, daha spesifik ve o role özgü terminolojiyle cevap verir. Bir yazılım mimarı rolü, genel bir asistan rolünden çok daha teknik bir dil üretir.

**Format belirtmek:**
Çıktının yapısını tutarlı hâle getirir. Madde listesi, tablo, JSON, belirli uzunluk kısıtlamaları — bunlar çıktının formunu kilitler.

**CoT eklemek:**
Çıkarım kalitesini artırır, cevabı uzatır. Matematik, mantık, analiz görevlerinde doğruluk yükselir. Basit sorgularda yalnızca gereksiz token ekler.

**Uzunluk kısıtı:**
"Maksimum 3 cümle" veya "50 kelimeyi geçme" kısıtlamaları modeli odaklanmaya zorlar. Gereksiz doldurma ve tekrar azalır.

**Örnek eklemek:**
Stil, ton ve format tutarlılığını artırır. Özellikle öznel veya stilistik görevlerde güçlü.

**Kısıtlama eklemek:**
Modelin ne yapmaması gerektiğini söylemek. "Fikir üretme, yalnızca mevcut seçenekleri değerlendir." "Teknik jargon kullanma." Negatif kısıtlamalar modelin varsayılan davranışından sapan şeyler için gerekli.

---

## Regresyon Testi

Bir prompt'u belirli bir girdi için düzelttinde diğer girdilerde bozma ihtimalini göz önünde bulundur. Bu "regresyon" durumunu test etmek için düzeltilmiş prompt'u yalnızca sorunlu girdiyle değil, 3-5 farklı girdiyle test et.

Pratik senaryo: "Müşteri tekliflerini özetleyen bir prompt, çok uzun teklifler için yanlış sonuç veriyor" diyorsun ve uzunluk bağlamında bir kısıt ekliyorsun. Bu kısıt uzun teklifleri düzeltiyor ama kısa tekliflerde modeli çok kısa özet yazmaya itiyor. Şimdi bir şey düzeldi ama başka bir şey bozuldu.

Regresyon testi bunu görünür kılar. Test seti olmadan bunu fark edemezsin.

---

## Pratik Test Seti

Karmaşık bir araç gerekmez. Basit bir tablo veya metin dosyası yeterli:

```text
Test Seti: Müşteri E-postası Özet Prompt'u

| Girdi                    | Beklenen                   | Sonuç (V1)  | Sonuç (V2)  |
|--------------------------|----------------------------|-------------|-------------|
| Şikayet e-postası (uzun) | Ana sorun + aciliyet       | GEÇER       | GEÇER       |
| Teşekkür e-postası       | Olumlu içerik + eylem yok  | BAŞARISIZ   | GEÇER       |
| Belirsiz e-posta         | "Açıklama gerekiyor" notu  | BAŞARISIZ   | GEÇER       |
| Teknik destek talebi     | Sorun + öncelik seviyesi   | GEÇER       | GEÇER       |
```

Bu tablo olmadan "prompt iyi mi kötü mü?" sorusunu sezgiyle yanıtlamak zorundasın. Tablo olduğunda hangi girdilerde geçildiğini, hangilerinde başarısız olduğunu, versiyonlar arası değişimi görebiliyorsun.

Mükemmel bir test seti bulmak için uzun süre bekleme. 5 temsili girdiyle başla, sorun çıktıkça ekle. Zamanla test setin prompt kaliteni objektif biçimde ölçen bir araç hâline gelir.

---

## "Az ama Net Değişiklik" İlkesi

Bir şey iyi çalışmadığında bütün prompt'u yeniden yazmak cazip gelir. Ama bu cazibeye kapılmamak gerekiyor.

Bütün prompt'u yeniden yazdığında iki problem yaşarsın: birincisi, işe yarayan kısımları da değiştirmiş olabilirsin. İkincisi, ne değiştiğini ve neden işe yaradığını ya da yaramadığını bilemiyorsun.

Küçük, hedeflenmiş değişiklikler daha yavaş görünür ama çok daha fazla şey öğretir. "Rol ekledim ve doğruluk arttı" gibi net bir gözlem, beş şeyi aynı anda değiştirip "bir şey iyileşti" demekten çok daha değerli.

Pratik kural: prompt'ta neyin sorunu yarattığına dair hipotez kur, **yalnızca o şeyi değiştir**, test et. Yanlış hipotezsen en azından o değişkenin fark yaratmadığını öğrenmiş olursun — bu da değerli bilgi.

---

## Otomatik Değerlendirme

Prompt'ları ölçekli biçimde test ediyorsan manuel karşılaştırma zaman alır. Bu noktada "LLM-as-judge" yaklaşımı kullanılabilir: başka bir LLM çıktıları değerlendirmek için kullanılır.

```text
Şu özeti değerlendir: [özet metni]

Değerlendirme kriterleri:
1. Ana talep doğru aktarılmış mı? (0/1)
2. Uzunluk 3 maddeyi geçiyor mu? (0/1)
3. Eylem içeriyor mu? (0/1)

Her kriter için 0 veya 1 yaz ve gerekçeyi tek cümleyle açıkla.
```

Bu yaklaşım mükemmel değil — değerlendirici model de hata yapabilir. Ama büyük miktarda çıktıyı sınıflandırmak için hızlı ve kullanışlı bir yol sağlar. Sonuçların bir kısmını manuel kontrol ederek değerlendirici modelin ne kadar güvenilir olduğunu kalibre edebilirsin.

---

## Özet

Prompt optimizasyonu, ilk taslaktan iyi çalışan bir prompt'a giden sistematik bir süreçtir. Temel prensipler: bir seferde bir değişken, önceden tanımlanmış başarı kriterleri, farklı girdilerle regresyon testi ve küçük-hedefli değişiklikler. Karmaşık araçlara gerek yok — beş temsili girdi ve basit bir karşılaştırma tablosu başlangıç için fazlasıyla yeterli. Sistematik olduğunda hem daha iyi prompt'lar yazarsın hem de prompt'lardan ne öğrendiğini fark etmeye başlarsın.
