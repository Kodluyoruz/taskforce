# Zero-Shot Prompting

## Zero-Shot Nedir?

Zero-shot prompting, modele hiç örnek vermeden yalnızca talimat yazarak bir görev yaptırma yöntemidir. Modelden belirli bir şeyi yapmasını istiyorsun ama nasıl yapılacağına dair somut bir örnek sunmuyorsun. Model, eğitimi sırasında gördüğü milyarlarca token'dan edindiği bilgiye ve kalıplara dayanarak seni anlamaya ve isteğini yerine getirmeye çalışıyor.

Günlük hayatta yaptığın prompting'in büyük çoğunluğu zaten zero-shot. "Şunu İngilizceye çevir", "Bu metni özetle", "Bana bir e-posta taslağı yaz" gibi istekler hiçbir örnek içermez ve genellikle gayet iyi sonuç verir.

Zero-shot'taki "zero" (sıfır) örnek sayısını ifade ediyor. İki örnek verirsen few-shot olur. Hiç vermezsen zero-shot. Kavram bu kadar basit.

---

## Ne Zaman Yeterli?

Zero-shot, modelin eğitimi sırasında çok sık karşılaşmış olduğu, genel ve iyi tanımlanmış görevlerde son derece iyi çalışır. Bu tür görevlerde modelin ne yapması gerektiği talimatın kendisinden zaten anlaşılır, ayrıca örneğe gerek kalmaz.

**Çeviri:**
```text
Bu metni İngilizceye çevir: "Merhaba, nasılsın?"
```

**Özetleme:**
```text
Aşağıdaki paragrafın ana argümanını tek cümleyle özetle.
```

**Sınıflandırma (genel):**
```text
Bu tweet'in duygu tonu nedir? Pozitif, negatif ya da nötr olarak etiketle.
```

**Soru-cevap:**
```text
TCP/IP protokolünün katmanlarını kısaca açıkla.
```

Bu örneklerin ortak özelliği şu: görev tanımı açık, format beklentisi standart ve modelin bu tür içerikleri eğitim verisinde binlerce kez görmüş olması yüksek ihtimal. Bu koşullar sağlandığında zero-shot gayet sağlam sonuç verir.

---

## Ne Zaman Yetersiz Kalır?

Zero-shot'un sınırlarına takıldığında bunu genellikle tutarsız çıktılardan anlarsın. Model seni anladığını düşünür ama tam olarak istediğin sonucu üretmez. Bunun birkaç nedeni olabilir:

**Şirkete/projeye özgü formatlar:** Model senin iç süreçlerini, kategorilerini veya terminolojini bilmiyor.

```text
"Bu müşteri yorumunu şirkete özgü 5 kategoriden birine ata: Teslimat, Ürün Kalitesi, Fiyat, Müşteri Hizmetleri, Diğer."
→ Model bu kategori yapısını bilmiyor. Ne anlama geldiğini tahmin edebilir ama tam oturması için bir örnek gösterilmesi gerekir.
```

**Nadir veya niş görevler:** Eğitim verisinde az yer alan görev türleri. Model tahminde bulunur ama güvenle değil.

**Çok spesifik kalite çıtası:** "İyi bir özet yaz" ile "Her bölüm için bir madde, şirket içi jargon kullanmadan, yönetim kuruluna sunacakmışsın gibi yaz" arasında büyük fark var. İkinci talebi zero-shot ile tam kursayabilirsin ama stil tutarlılığı için örnek çok daha güçlü sinyal verir.

**Yapısal belirsizlik:** Çıktının tam formatı tartışmalıysa — örneğin tablo mu, liste mi, paragraf mı istediğin belirsizse — model bir şey seçer ama bu senin istediğin olmayabilir.

---

## Zero-Shot'u Güçlendirme

Örneksiz kalman seni zayıf prompt yazmaya mahkum etmez. Zero-shot'u önemli ölçüde iyileştirebilirsin — yine de örnek eklemiyorsun, ama talimatı daha net yazıyorsun.

**Zayıf zero-shot:**
```text
"Bu e-postayı analiz et."
```

Model ne yapacak? Duygu tonu mu söyleyecek? Ana talebi mi çıkaracak? Biçimsel mi gayriresmi mi diye sınıflandıracak? Bunların hepsi "analiz" kelimesinin altında yatabilir.

**Güçlü zero-shot:**
```text
"Bu e-postayı oku ve şu 3 soruyu yanıtla: (1) Gönderenin ana talebi ne? (2) Aciliyet durumu var mı? (3) Hangi departmanın yanıt vermesi gerekiyor? Her soru için tek cümle yaz."
```

Bu hâlâ zero-shot. Hiç örnek yok. Ama talimat çok daha spesifik olduğu için modelin yorumlama alanı daralıyor ve istediğin çıktı çok daha kolay geliyor.

**Diğer güçlendirme teknikleri:**

*Rol ekle:*
```text
"Kıdemli bir UX yazarı olarak bu button label'ını değerlendir ve alternatif öner."
```

*Format belirt:*
```text
"Yanıtı maddeler hâlinde ver, her madde bir eylem önerisi olsun."
```

*Chain-of-thought tetikle:*
```text
"Bu problemi adım adım düşün, sonra cevabını ver."
```

Bu üçü de zero-shot kalıyor — hiç örnek yok. Sadece talimatı daha akıllıca yazıyorsun.

---

## Formatı Talimatla Zorunlu Kıl

Zero-shot'ta format tutarlılığı sağlamanın yolu net kısıtlamalar koymaktır. Model serbest bırakılırsa ne üretirse üretir. Serbest bırakmak istemiyorsan söylemek sana düşüyor.

```text
"3 maddelik bir liste olarak cevapla. Her madde maksimum 15 kelime olsun."
```

```text
"Yalnızca evet ya da hayır ile yanıtla, başka açıklama ekleme."
```

```text
"Cevabını şu yapıda ver: Problem: [...] Çözüm: [...] Sonuç: [...]"
```

Bu tür kısıtlamalar çıktının tahmin edilebilirliğini ciddi ölçüde artırır ve zero-shot'u çok daha kullanışlı hale getirir.

---

## Zero-Shot vs Few-Shot

Zero-shot yeterli olduğunda few-shot eklemeye gerek yok — örnekler token tüketir, prompt uzar ve çoğu zaman gereksiz yere karmaşıklaştırır. Zero-shot'u tercih etmek için temel kriter şu: modelin tutarlı biçimde doğru formatta ve doğru tonda üretip üretmediğini test et.

Üretiyorsa zero-shot kal. Üretemiyorsa veya sonuçlar örnekten örneğe değişiyorsa, birkaç örnek ekleyerek few-shot'a geç.

Few-shot prompting bir sonraki konuda ayrıntılı ele alınıyor. Burada bilmen gereken tek şey şu: zero-shot ve few-shot birbirinin rakibi değil, aynı araç kutusundaki farklı boyuttaki anahtar gibi. Küçük iş için küçük anahtarı kullanırsın.

---

## Özet

Zero-shot, modele örnek göstermeden doğrudan talimatla iş yaptırma yöntemidir. En basit, en hızlı ve token açısından en verimli prompting biçimidir. Genel, iyi tanımlanmış görevlerde mükemmel çalışır. Yetersiz kaldığında bunu tutarsız çıktılardan anlarsın — bu noktada ya talimatı netleştirirsin ya da few-shot'a geçersin.

Zero-shot'un kalitesini artırmak için rol, format ve CoT tetikleyicileri ekleyebilirsin. Bunlar yine zero-shot'tur, sadece daha iyi yazılmış bir zero-shot.
