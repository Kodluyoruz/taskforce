# Domain-spesifik Skill Tasarım Örnekleri

Bir önceki derste pre-built skill'lerin neyi hazır verdiğini, neyi vermediğini konuştuk. Sonuç netti: ofis formatları için kütüphane bilgisini Anthropic taşıyor; ama bir hukuk firmasının sözleşme standardını, bir finans ekibinin hesap planını, bir DevOps takımının postmortem ritüelini kimse senin yerine bilemez. Bu derste beş farklı sektör için **tipik bir şirketin gerçekten yazacağı** skill örneklerini tek tek açacağım: hukuk, finans, DevOps, eğitim ve pazarlama. Her örnek için skill'in amacını, klasör yapısını, kritik dosyaları ve hangi prompt'larla tetiklenmesi gerektiğini somutlaştıracağım. Sonra bütün domain'lerde tekrar eden ortak tasarım prensiplerini çıkartacağım.

## 1. Hukuk: `contract-clause-review`

Bir hukuk ekibinin en sık tekrarlanan işi sözleşme okumak. Standart maddeleri tek tek kontrol etmek, eksik bölümleri görmek, riskli ifadeleri yakalamak. Bunun her seferinde aynı dikkatle yapılması gerekiyor; insan dikkati ise saatin üçüncüsünde dağılıyor. İdeal skill konusu.

- **SKILL.md:** Sözleşme geldiğinde adım adım gözden geçirme rehberi. `jurisdiction`, `termination`, `liability`, `IP`, `confidentiality` bölümlerine ayrı ayrı bakılması gerektiğini, hangi sırayla okunduğunu söyler.
- **`scripts/parse_contract.py`:** PDF ya da DOCX'ten metin çıkarmak ve clause segmenting yapmak için deterministik bir parser. LLM'e bütün PDF'i atmak yerine yapılandırılmış bir clause listesi veriyor.
- **`REFERENCE.md`:** Şirketin standard clause kütüphanesi. "Bizim termination clause'umuz şu hükümleri içermeli" gibi sabit gerçekler.
- **`resources/risk_keywords.json`:** "unlimited liability", "exclusive jurisdiction", "perpetual license" gibi flag'lanması gereken ifadelerin listesi.
- **Discovery prompt:** "Bu sözleşmeyi gözden geçir", "review contract", "draft'ı standartla karşılaştır".

## 2. Finans: `monthly-pnl-report`

Ay sonu kapanışı her finans ekibinin tekrar eden çilesi. Veri aynı yerden geliyor, kategoriler aynı şekilde haritalanıyor, rapor formatı her ay aynı. Klasik bir vertical skill adayı.

- **SKILL.md:** Pipeline net: veri kaynağına (QuickBooks API ya da CSV export) bağlan → hesap kategorilerini normalize et → P&L tablosu üret → geçen ay ve geçen yıl ile karşılaştır → kısa bir narrative yaz.
- **`scripts/fetch_pnl.py`:** QuickBooks ya da SAP gibi muhasebe kaynaklarından ay sonu verilerini çeken API client; CSV fallback'i de var.
- **`templates/pnl_report.md`:** Şirketin standard P&L rapor şablonu. Başlık sırası, hangi tablonun nerede oturduğu, hangi grafiğin hangi başlıkla geldiği sabit.
- **`resources/account_codes.csv`:** Hesap kodları sözlüğü. "5100 = Personnel" gibi eşlemeleri model halüsine etmesin diye Level 3'te bekliyor.
- **Discovery prompt:** "Bu ayın gelir-gider raporunu üret", "PnL kapanışı yap", "Q1 P&L çıkar".

## 3. DevOps: `incident-postmortem`

Bir incident'tan sonra postmortem yazmak hem önemli hem can sıkıcı bir iş. Timeline'ı log'lardan toplamak, etki alanını ölçmek, root cause'u dürüstçe yazmak, action item'ları paylaştırmak — hepsi şablona uyarsa daha hızlı ve daha tutarlı oluyor.

- **SKILL.md:** Postmortem'in beş ana bölümü (summary, timeline, impact, root cause, action items) ve her bölümde sorulacak yönlendirici sorular. "Detection latency neydi?", "Hangi alarm tetiklendi?", "Kullanıcı tarafında etki ne zaman bitti?" gibi.
- **`scripts/timeline_from_logs.py`:** Datadog/CloudWatch/PagerDuty data'sından kronolojik bir timeline çıkartan script. Dakika seviyesinde olay sırasını model tahmin etmiyor; deterministik şekilde basılıyor.
- **`templates/postmortem.md`:** Şirket standardı postmortem şablonu — başlık seviyesi, action item tablosu, severity etiketleri.
- **`REFERENCE.md`:** "Blameless postmortem" kuralları, severity tanımları, escalation matrix.
- **Discovery prompt:** "Dünkü incident için postmortem hazırla", "SEV-2 raporu yaz".

## 4. Eğitim: `rubric-based-grading`

Bir öğretim asistanının haftada elli ödev okuduğu bir dünyada, ön puanlamayı ve feedback taslağını skill'in çıkarması büyük zaman kazandırıyor — son onay tabii ki insan editöründe.

- **SKILL.md:** "Önce rubric'i oku, sonra submission'ı oku, her kriteri ayrı ayrı puanla, sonra feedback yaz" iş akışı. Net bir sıralama.
- **`resources/rubric.json`:** Ders ve ödev bazlı rubric tanımları. Her kriter için kelime karşılığı (excellent / good / needs work), puan aralığı, örnek beklenen davranış.
- **`templates/feedback.md`:** Öğrenciye verilecek feedback'in formatı — önce güçlü yönler, sonra geliştirme alanları, sonunda somut bir öneri.
- **`scripts/plagiarism_check.py`:** Opsiyonel; submission'ı bilinen kaynaklarla karşılaştırıyor.
- **Discovery prompt:** "Bu submission'a not ver", "grade assignment", "rubric'e göre değerlendir".

## 5. Pazarlama: `seo-meta-generator`

Pazarlama ekibinin her blog post ya da ürün sayfası için title, description, keyword listesi, Open Graph tag'leri üretmesi gerekiyor. Kurallar sabit (60 karakter title, 155 karakter description, sayfa başına unique); ama her seferinde elle yazmak hata kapısı.

- **SKILL.md:** SEO kurallarının kısa özeti, hangi sırayla üretileceği, hangi format string'ler için zorunlu (`og:title`, `og:description`, `twitter:card`...).
- **`REFERENCE.md`:** Brand voice rehberi, izin verilen ton, yasak ifadeler, keyword stratejisi (primary / secondary keyword ayrımı).
- **`resources/competitor_keywords.csv`:** Opsiyonel rakip analizi datası. Skill, generated keyword listesini bu dataya karşı sağlık kontrolünden geçiriyor.
- **Discovery prompt:** "Bu makale için SEO meta üret", "OG tag'leri çıkar", "product page için meta yaz".

## Ortak tasarım prensipleri

Beş örneği yan yana koyunca birkaç desen kendini tekrar ediyor.

1. **Discovery'yi domain'in kelime dağarcığıyla güçlendir.** `review contract`, `pnl`, `postmortem`, `grade submission`, `SEO meta` — kullanıcının zaten kullandığı kelimeler description'a girer. Model boğuk akademik bir tarifle değil, ekibin günlük diliyle tetiklenmeli.
2. **Şirket-spesifik bilgiyi Level 3'e taşı.** Brand voice, hesap kodları, internal compliance kuralları SKILL.md'ye doldurulmuyor; ayrı dosyalarda bekliyor, sadece gerektiğinde okunuyor. Token budget'ı zorlayan değil, kullanıma hazır bekleyen bir kütüphane.
3. **Compliance ve regülasyon-spesifik kuralları her zaman flag'la.** Hukuk için jurisdiction farkları, finans için audit trail zorunluluğu, sağlık olsaydı HIPAA, kişisel veri olsaydı KVKK / GDPR. Skill bu kuralları "biliyor"sa, ekip kafasında her seferinde taşımak zorunda kalmıyor.
4. **Hassas alanda sessiz fail yasak.** Veri eksikse, clause anlamı belirsizse, rubric kriterinin karşılığı yoksa skill kullanıcıya net bir soru sormalı. SKILL.md'ye "eğer X belirsizse, devam etme; kullanıcıya şu soruyu sor" tarzı kuralları açıkça yazmak gerekiyor.
5. **Versiyonlama bir lüks değil.** Şirket politikası değişince (yeni clause eklendi, hesap planı yeniden düzenlendi, brand voice güncellendi) skill'i de güncellemek gerekiyor. Workflow'a "skill review" adımını oturtmayanlarda kısa sürede stale skill problemi başlıyor.

## Kısa bir SKILL.md örneği

`contract-clause-review` skill'inin SKILL.md'sinin başlangıcı tipik olarak şöyle görünüyor:

```yaml
---
name: contract-clause-review
description: Review contracts for standard clauses (jurisdiction, termination, liability, IP, confidentiality), flag risky language, and produce a structured review report. Use when the user uploads a contract, asks for legal review, or wants to compare a draft against company standards.
---

# Contract Clause Review

Bir sözleşme metni geldiğinde sırasıyla:

1. `scripts/parse_contract.py <path>` ile metni çıkar ve clause segmenting yap.
2. `REFERENCE.md`'deki standard clause listesine karşı eksikleri tespit et.
3. `resources/risk_keywords.json` ile riskli ifadeleri tara.
4. `templates/review_report.md` şablonuyla rapor üret.

## Riskli ifade örneği

"unlimited liability", "exclusive jurisdiction in <X>", "perpetual license" gibi ifadelere her durumda dikkat et; bulduğunda raporun "Flags" bölümüne taşı.

## Belirsizlik kuralı

Eğer parser bir bölümü ayıramazsa ya da clause anlamı tartışmalıysa rapora "Needs human review" notu düş; tahmin yürütme.

Detay için `REFERENCE.md`'ye bak.
```

Bu kısa örnek bile beş prensibin hepsini içeriyor: domain'in kelimeleriyle dolu bir description, Level 3'e taşınmış şirket bilgisi, riskli ifadeler için açık flag listesi, belirsizlik için sessiz fail yasağı ve gelecekte güncellenebilecek dosya tabanlı bir yapı.

## Sırada ne var?

Beş farklı sektörden gerçek skill örnekleriyle alana özgü tasarımın nasıl göründüğünü oturttuk. Açık olmayan bir şey kaldı: bir kez bu skill'leri kurduğunda hangisinin gerçekten işe yaradığını nasıl bileceksin? Hangisi sık tetikleniyor, hangisi hiç çalışmıyor, hangi adımda hata veriyor, hangisi insan müdahalesi olmadan tek başına bitiriyor? Bir sonraki derste skill'leri ölçmenin yollarına, takip edilmesi gereken metriklere ve canlıdaki skill performansını değerlendirme yöntemlerine giriyoruz.
