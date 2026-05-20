# Uzun Bağlam ile Çalışma

## Uzun Bağlam Nedir?

Uzun bağlam, binlerce token içeren prompt'ları ifade eder: çok sayfalık belgeler, uzun konuşma geçmişleri, aynı anda birden fazla dosya, büyük veri tabloları. Modern modeller 100.000 token'ı aşan bağlamları işleyebilir — bu yaklaşık 75.000 İngilizce kelime veya 200-250 sayfalık bir belge anlamına gelir.

Ama bir modelin bağlamı "işleyebilmesi" ile o bağlamı eşit dikkatle okuması arasında fark var. Uzun bağlamda her token eşit ağırlık taşımaz. Bazı pozisyonlar daha iyi hatırlanır, bazı pozisyonlar kaymaya meyillidir. Bunu anlamak, uzun bağlamı etkili kullanmanın temelidir.

---

## Temel Kural: Sorguyu Sona Koy

Araştırmalar ve pratik deneyim tutarlı biçimde aynı şeyi gösteriyor: modeller context window'un başına ve sonuna daha fazla dikkat ediyor. Ortada kalan içerik, özellikle çok uzun prompt'larda, daha az dikkat görüyor.

Bu gerçeğin pratik sonucu basit ama önemli: soruyu en başa değil, en sona koy.

```text
Verimsiz (sorgu başta):
"Bu raporda hangi riskler belirtilmiş?

[5000 kelimelik rapor metni]"
```

Bu düzende soru, context window'un ortasında ya da sonuna yakın bir yerde kalıyor — "lost in the middle" etkisinin en çok hissedildiği alan.

```text
Verimli (sorgu sonda):
"[5000 kelimelik rapor metni]

Yukarıdaki raporda belirtilen finansal riskler nelerdir? Her riski rapordan doğrudan alıntı yaparak destekle."
```

İkinci versiyonda soru context window'un en sonunda yer alıyor. Transformer modelleri tüm bağlamı aynı anda işler; sıralı okuma yapmaz. Ancak araştırmalar, bağlam penceresinin başı ve sonunun ortaya kıyasla daha güvenilir biçimde temsil edildiğini gösteriyor. Sorguyu sona koymak, cevap üretilirken sorunun dikkat etkisinin en güçlü olduğu konumda bulunmasını sağlar.

---

## Alıntı Yaptır

Uzun bir belgeden bilgi çıkarırken modelin tahmin değil bulma yapmasını istiyorsun. İki yaklaşım arasındaki fark: tahmin, modelin kendi bilgisinden bir cevap üretmesi; bulma, modelin belgede gerçekten var olan bir yere bakması.

Alıntı talep etmek modeli belge içinde arama yapmaya zorlar:

```text
"Önce konuyla ilgili pasajları doğrudan alıntıla, sonra yorumla."
```

Bu talimattan sonra model şöyle bir şey üretir:

> Alıntı: "Q3 döneminde hammadde maliyetleri %18 artış göstermiş ve bu artış brüt kar marjını 4.2 puan aşağı çekmiştir."
>
> Yorum: Şirket bu dönemde maliyet artışını fiyatlara yansıtamamış, bu da kârlılığı doğrudan etkilemiş.

Alıntı olmadan model aynı konuda doğru görünen ama belgede tam olarak yazmayan şeyler söyleyebilir. Alıntı zorunlu kıldığında bu "halüsinasyon" riski önemli ölçüde düşer.

---

## Belgeleri Net Ayır

Birden fazla belge aynı prompt'tadaysa model hangi bilginin nereden geldiğini ayırt etmek zorundadır. Belgeler düz metin olarak art arda yapıştırılmışsa bu ayrım zorlaşır.

Basit başlık kullanımı:

```text
=== BELGE 1: Q3 Satış Raporu (Ekim 2024) ===
[belge içeriği]

=== BELGE 2: Q2 Satış Raporu (Temmuz 2024) ===
[belge içeriği]

=== SORU ===
Bu iki dönem arasında en büyük büyüme hangi ürün kategorisinde gerçekleşmiş?
```

Ya da XML ile:

```text
<belge id="Q3-raporu">
[belge içeriği]
</belge>

<belge id="Q2-raporu">
[belge içeriği]
</belge>
```

İkinci yöntemde ayrıca modelden cevabında belge referansı vermesini isteyebilirsin: "Cevabında hangi belgeden bilgi aldığını belirt." Bu hem doğrulamayı kolaylaştırır hem de çok belgeli sorgularda hangi kaynağın kullanıldığını görmeni sağlar.

---

## "Orta Kaybolma" Problemi

"Lost in the middle" araştırmalarda adı konulmuş bir olgudur. Çok uzun context window'larda modelin ortada kalan bilgiyi atlama veya yanlış hatırlama olasılığı artar. Başlangıç ve son pozisyonlar daha güvenilir hatırlanır, orta pozisyonlar daha kayıp verir.

Bu olguyla başa çıkmanın birkaç yolu var:

**En önemli bilgiyi başa ve sona koy.** Bu kural kritik talimatlar ve kısıtlamalar için geçerlidir — soru için kural farklıdır. Talimat tekrarı ile soru konumu çelişmez: kritik bir kısıtlamayı hem başa hem sona yazabilir, belgeleri ortaya, soruyu en sona koyabilirsin. Özellikle kaçırılmamasını istediğin bir talimat veya kısıtlama varsa, bunu context window'un hem başına hem de sonuna yerleştirmeyi düşün.

**Yapısal işaretleyici kullan.** XML etiketleri modelin farklı bölümleri konumsal olarak değil yapısal olarak bulmasını sağlar. "Talimat bölümü nerede?" sorusu, etiketsiz uzun bir prompt'ta konum ile yanıtlanırken, etiketli prompt'ta etiket ile yanıtlanır.

**Doğrudan referans iste.** "7. maddede yazana göre..." gibi modelin belirli bir bölüme bakmasını zorunlu kılan sorular, genel "raporda ne yazıyor?" sorularından daha güvenilir.

---

## Context Window'u Verimli Kullan

"Context window büyük, o zaman her şeyi koyarım" düşüncesi hem maliyetli hem de sonuç açısından zayıf. Token sayısı arttıkça hem işlem süresi hem de maliyet artıyor. Üstelik gereksiz içerik "gürültü" yaratıyor — model asıl ilgili bölüme odaklanmak yerine alakasız içerikle de başa çıkmak zorunda kalıyor.

Pratik yaklaşım: tüm belgeyi koyacaksan önceden filtrele. Belgenin yalnızca ilgili bölümleri gerekiyorsa sadece o bölümleri ekle. Bir hukuk sözleşmesinin tamamını prompt'a koymak yerine ilgili maddeleri belirleyip yalnızca onları eklemek hem daha hızlı hem daha ucuz hem de çoğunlukla daha iyi sonuç veriyor.

Büyük bir belgeyle çalışıyorsan ve tüm belge gerekiyorsa şu yapıyı kullan:

```text
[Tam belge içeriği — yalnızca ilgili bölümler alınmışsa da olabilir]

---

Yukarıdaki belgeyi inceleyerek şu soruları yanıtla:
1. [Soru 1]
2. [Soru 2]
3. [Soru 3]

Her soru için, cevabı destekleyen belge bölümünü alıntıla.
```

Bu yapı üç prensibi birleştiriyor: belge önce, soru sonda; alıntı zorunluluğu; birden fazla soruyu tek seferde sorma.

---

## Konuşma Geçmişiyle Çalışmak

Uzun bağlam yalnızca belgeler için değil — uzun konuşma geçmişleri de context window'u doldurabilir. Birçok konuşma turunda, context window'un çok büyük kısmı eski konuşma geçmişinden oluşur.

Bu durumda şu pratikleri uygulamak faydalıdır:

**Özet tut.** Uzun konuşmalarda modelden periyodik olarak "şimdiye kadar konuşulanları 5 maddede özetle" demesi ve bu özeti konuşmanın başına koyması istenilebilir. Tüm geçmişi taşımak yerine özet daha az token kaplar.

**İlgisiz geçmişi temizle.** Konuşmanın yönü değiştiyse, eski turnlar artık bağlamsal değer taşımıyorsa, onları context'ten çıkarmak gürültüyü azaltır.

**Bağlamı sistematik ekle.** "Yukarıda konuştuğumuz X'i göz önünde bulundur" demek yerine, modele X'i doğrudan tekrar vermek daha güvenilir. Model "yukarıda" araması yapmak zorunda kalmaz.

---

## Özet

Uzun bağlamla çalışmak "her şeyi koy, model halleder" yaklaşımıyla değil, dikkatli yapılandırmayla işe yarar. Sorguyu sona koy, belgeleri net ayır, alıntı talep et, kritik bilgiyi ortaya gömmekten kaçın ve context window'u yalnızca gerçekten gerekli içerikle doldur. Bu prensipler uygulandığında uzun bağlam güçlü bir araç hâline gelir; uygulanmadığında ise maliyet artar ve kalite düşer.
