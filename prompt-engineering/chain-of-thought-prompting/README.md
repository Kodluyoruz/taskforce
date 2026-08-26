# Chain-of-Thought Prompting

## CoT Nedir?

Chain-of-thought prompting, modeli nihai cevabı vermeden önce ara adımları açıklayarak düşünmeye yönlendirme tekniğidir. Model yalnızca sonucu tahmin etmek yerine, sonuca götüren akıl yürütme zincirini adım adım üretir. Bu süreç hem modelin doğruluk oranını artırır hem de seni sonuca nasıl ulaşıldığını görmeye olanak tanır.

"Chain-of-thought" kelime kelime çevrildiğinde "düşünce zinciri" anlamına geliyor. Fikir şu: tek seferde doğrudan cevabı tahmin etmek yerine, cevaba giden adımları üretmek — ve her adımın bir sonraki adımı kısıtlamasına izin vermek.

---

## Neden İşe Yarar?

LLM'ler token token çalışır. Her token, önceki tokenlara bakılarak tahmin edilir. Bu mimari basit görevler için sorun yaratmaz — "Türkiye'nin başkenti nerededir?" sorusuna doğrudan doğru cevap üretmek mümkün. Ama çok adımlı bir matematik probleminde ya da karmaşık bir mantık sorusunda durum farklı.

Doğrudan cevap vermeye çalışırken model, aslında ara adımlar olmadan final token'ı tahmin etmeye çalışıyor. Bu tahmin sıklıkla yanlış çıkıyor. Oysa ara adımları ürettiğinde her adım bir sonraki token tahminini kısıtlıyor. "Önce A'yı hesapla, sonra B'yi bul" yapısı, modelin B'yi bulmak için A'nın sonucuna bakmasına izin veriyor.

Başka bir açıdan bakarsak: düşüncenin yavaşlaması doğruluk sağlıyor. Çabuk tahmin yerine uzun bir akıl yürütme zinciri, hataların birikip büyümesini engelliyor.

---

## Matematikçi Analojisi

Karmaşık bir denklemi zihinsel hesapla çözmeye çalışan biri ile aynı denklemi kağıda adım adım yazan biri arasındaki farkı düşün. Kağıda yazan matematikçi her adımı not ederken bir önceki adımın sonucuna bakıyor. Hata yaptığında bunu erken fark edebiliyor. Zihinden çalışan ise tüm ara adımları "tutuyor" ve bir yerde hata olduğunda bunu en sonda anlıyor — bazen de hiç anlamıyor.

CoT, modelin "kağıda yazması" gibi çalışıyor. Üretilen her ara adım hem bir sonraki adımı kısıtlıyor hem de akıl yürütmenin görünür olmasını sağlıyor.

---

## Zero-Shot CoT

En basit CoT tekniği: prompt'un sonuna "Adım adım düşün." eklemek. Bu kadar. Tek bir cümle, çoğunlukla kayda değer bir iyileşme sağlıyor.

```text
CoT olmadan:
"Bir şirket 120 çalışana sahip. %25'i uzaktan çalışıyor. Ofiste çalışan sayısı kaçtır?"
```

Bu soru için model doğrudan bir sayı üretmeye çalışır. Basit bir hesap gibi görünse de model bazen %25'in ne anlama geldiğini ya da sorulan şeyin tam olarak ne olduğunu yanlış yorumlayabilir.

```text
CoT ile:
"Bir şirket 120 çalışana sahip. %25'i uzaktan çalışıyor. Ofiste çalışan sayısını bulmak için adım adım düşün, sonra cevabı ver."
```

CoT ile model şöyle çalışır:
- Toplam çalışan: 120
- Uzaktan çalışan: 120 × 0.25 = 30
- Ofiste çalışan: 120 - 30 = 90
- Cevap: 90

Her adım görünür. Hatalı bir hesap yapılırsa nerede yapıldığını görebilirsin ve düzeltebilirsin.

"Adım adım düşün" yerine şu varyasyonlar da işe yarar:
- "Önce akıl yürütmeni göster, sonra cevabı ver."
- "Her adımı ayrı satıra yaz."
- "Çözüm sürecini açıkla."

---

## Few-Shot CoT

Zero-shot CoT güçlü ama bazen daha spesifik bir akıl yürütme kalıbı öğretmek isteyebilirsin. Bu durumda few-shot ile CoT'u birleştiriyorsun: örneklerde yalnızca girdi ve çıktıyı değil, ara adımları da gösteriyorsun.

```text
Soru: Bir mağaza 40 ürün satıyor. Her ürün 25 TL. Toplam gelir nedir?
Çözüm: 40 ürün × 25 TL = 1.000 TL. Toplam gelir 1.000 TL'dir.

Soru: Bir restoran günde 80 müşteri ağırlıyor. Hafta sonları bu sayı %50 artıyor. Hafta sonu kaç müşteri olur?
Çözüm:
```

Model artık yalnızca "ne yapılacak" sorusunun cevabını değil, "nasıl düşünülmesi gerektiği" kalıbını da görüyor. Bu kalıbı devam ettirmeye çalışacak: önce veriyi listele, sonra işlemi yaz, sonra sonucu yaz.

Few-shot CoT'u karmaşık görevlerde kullan: hukuki belge analizi, çok adımlı veri çıkarma, kod inceleme, matematik problemleri. Örneklerdeki akıl yürütme adımları ne kadar iyi tasarlanmışsa model o kalıbı o kadar güvenilir biçimde takip eder.

---

## Öz-Denetim (Self-Check) Tekniği

CoT'un bir uzantısı olarak modelden kendi ürettiği çıktıyı doğrulamasını isteyebilirsin. Model hem çözüm üretiyor hem de ürettiği çözümü kontrol ediyor — bunu açıkça belirtirsen farklı bir bakış açısıyla yaklaşıyor.

```text
"Aşağıdaki Python kodunu incele ve bug'ları listele. Önce kodu satır satır analiz et, sonra bulduklarını listele, son olarak listenin eksiksiz olduğunu kontrol et."
```

Burada üç aşama var: analiz, listeleme, doğrulama. Her aşama bir öncekini kullanıyor. Bu yapı modelin bir adımda üretip geçmesini engelliyor — her aşamayı ayrı yazmak zorunda kalıyor ve bu tutarlılığı artırıyor.

Öz-denetim mükemmel değil — model kendi hatasını gözden kaçırabilir. Ama sistematik biçimde hataları çok azaltıyor.

---

## Ne Zaman Kullanılır?

CoT her görev için gerekli değil. Ne zaman işe yaradığını bilmek ne zaman eklenmesi gerektiğini de gösterir:

**CoT kullan:**
- Matematik ve aritmetik problemleri
- Çok adımlı mantık soruları
- Karmaşık karşılaştırma ve analiz
- Hata ayıklama ve kod inceleme
- Hukuki veya finansal belge yorumlama
- Bir sonucu destekleyen gerekçe üretme

**CoT ekleme:**
- Basit bilgi soruları ("Türkiye'nin nüfusu kaç?")
- Format dönüşümü ("Bu metni Markdown'a çevir")
- Kısa yaratıcı metin üretimi
- Doğrudan sınıflandırma

---

## Ne Zaman Gereksiz?

CoT token tüketir ve çıktıyı uzatır. Bu ikisi de maliyet demek — hem para hem de gecikme açısından. Basit bir bilgi sorusuna CoT eklemek ne doğruluğu ne de kullanılabilirliği artırır. Sadece gereksiz metin üretir.

Pratik kural şu: eğer cevaba ulaşmak için bir insan da "düşünmesi" gerekiyorsa, CoT muhtemelen işe yarar. Cevap refleks gibi biliniyorsa CoT ekleme.

---

## Özet

Chain-of-thought prompting, modelin ara adımları yazarak "düşünmesini" sağlar ve bu sayede özellikle çok adımlı, çıkarım gerektiren görevlerde doğruluk önemli ölçüde artar. Uygulaması son derece basit: "adım adım düşün" ifadesini eklemek çoğunlukla yeterli. Daha spesifik bir akıl yürütme kalıbı öğretmek istiyorsan few-shot örneklerine de akıl yürütme adımlarını dahil edebilirsin. CoT'u her yere ekleme — gerçekten çıkarım gerektiren görevler için sakla.
