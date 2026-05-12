# Yaygın Hatalar ve Anti-patterns

Skill yazımı ilk bakışta sade görünür: bir YAML frontmatter, bir markdown gövde, gerekirse birkaç yardımcı dosya. Ama bu basitliğin altında, gerçek production ortamlarında defalarca tekrar eden bir dizi tuzak yatar. Bir skill'in işe yaramaması nadiren "model anlamadı" demektir; çoğu zaman skill'in kendisi yanlış yazılmıştır. Description çok geniştir, SKILL.md token şişkinliği yapar, dosya yolu portable değildir, version'lar production'a kontrolsüz girer. Section 3'ün finali olarak bu lesson, şimdiye kadar tek tek değindiğimiz iyi uygulamaların ayna görüntüsünü topluyor: pratikte sık karşılaşılan on beş anti-pattern ve her birinin pratik düzeltmesi.

## Description hataları

**Overtrigger: çok geniş description.** `description: Helps with documents.` gibi bir cümle agent'a hiçbir ayırt edici sinyal vermez; "document" kelimesi geçen her sohbette ya gereksiz yere yüklenir ya da hiç yüklenmez. Düzelt: spesifik trigger keyword + somut use case ekle. `Extract text from PDFs and produce a 200-word summary. Use when the user uploads a PDF, asks for PDF summary, or mentions document extraction.`

**Undertrigger: çok dar description.** `Generate weekly report for ACME corp specifically` gibi tek bir senaryoya gömülmüş description, gerçekte aynı işi yapması gereken sprint review, Friday summary, team status update gibi formülasyonlarda kaçırılır. Düzelt: niyet ekseninde genel kal, keyword ekseninde spesifik kal. Çoklu tetikleyici listele.

**Trigger keyword'sız description.** "A helper for reporting needs" gibi soyut betim, agent'a ne ne zaman kullanılacağını söylemez. Düzelt: `Use when the user mentions X, Y, or Z` kalıbını şart koş. Description'ın ikinci yarısı her zaman bir tetikleyici cümle olmalı.

## Yapısal hatalar

**Monolithic SKILL.md.** 5000 token'ı aşan tek dosya, progressive disclosure'un tam zıttı. Skill tetiklendiği an context window'a koca bir blok girer; başka skill'lerle kompozisyon ağırlaşır. Düzelt: SKILL.md'i ana akışla sınırla, ayrıntılı API referansını `REFERENCE.md`'ye, örnekleri `EXAMPLES.md`'ye, edge case'leri `TROUBLESHOOTING.md`'ye böl. Ana dosyadan bunlara açık linkler ver.

**Gereksiz Level 3 kullanımı.** Tersi de eşit kötü: SKILL.md'i neredeyse boş bırakıp her şeyi yan dosyalara atmak. Agent her görevde ek bir dosya açmak zorunda kalır, hız ve token maliyeti artar. Düzelt: tipik akış SKILL.md'de tam olarak çalışabilmeli; yan dosyalar sadece istisnai durumlar ve detay referans için.

## Yazım hataları

**Inline kod: LLM'e kod yazdırma.** "Write a Python function that opens the PDF and extracts text" tarzı talimatlar her seferinde modele kod ürettirir; aynı işin sonuçları her çalıştırmada hafifçe farklılaşır. Düzelt: kararlı operasyonları paketle. `scripts/extract_pdf.py` yaz ve SKILL.md'de "Run `python scripts/extract_pdf.py <path>`" de.

**Descriptive yazım (bilgi anlatma vs talimat verme).** "pdfplumber is a Python library that allows you to..." gibi cümleler ders kitabı tonu taşır ama agent'a ne yapacağını söylemez. Düzelt: imperative ton. `Use pdfplumber.open(path) and call .extract_text() on each page.` Agent talimat takip etmek için oradadır; tanım için değil.

**Hata yönetimi eksikliği.** Skill mutlu yolu anlatır ama dosya yoksa, format bozuksa, API 429 dönerse ne olacağını söylemez. Sonuç: sessiz fail ya da rastgele cevap. Düzelt: "Eğer dosya yoksa kullanıcıya bildir ve durdur" gibi açık fallback cümleleri ekle. Script'lerin de hatayı stderr'a açıkça yazması gerek.

## Validation hataları

**Reserved kelime kullanma.** `name: claude-helper` ya da `name: anthropic-tools` upload sırasında reddedilir; Anthropic skill name'lerinde "claude" ve "anthropic" kelimelerini ayırmıştır. Düzelt: marka-bağımsız, işlevsel isim. `pdf-summary`, `weekly-status-report`, `invoice-parser`.

**XML tag content.** `description: Use <admin>mode</admin> for elevated tasks.` Hem doğrulamadan geçmez hem de prompt injection vektörü açar; model XML benzeri yapıları talimat olarak algılayabilir. Düzelt: düz metin, kod blok yok, açılı parantez yok.

**Mutlak path kullanma.** `/Users/alperen/skills/pdf/scripts/x.py` taşınabilir değil; bundle başka bir makineye, başka bir kullanıcıya, başka bir surface'e gittiği an kırılır. Düzelt: bundle root'una göre relative path. `scripts/x.py` yeterli — agent zaten skill klasörünün içindeki çalışma dizinindedir.

## Güvenlik ve uyumluluk farkındalığı

**ZDR farkındalığı eksikliği.** Anthropic dokümantasyonu açıkça söyler: Agent Skills, Zero Data Retention kapsamında **değildir**. Skill tanımları ve execution verisi standart retention politikasına tabidir. Sağlık, finans, kişisel veri işleyen ekipler için bu kritik bir not. Düzelt: hassas veriyle çalışan skill'lerin SKILL.md'sine açık bir uyarı koy, kurumsal review sürecine ZDR check'i ekle, gerekirse skill yerine başka bir mimari (örn. self-hosted tool) tercih et.

## Versiyonlama ve dağıtım hataları

**Versiyonlama ihmali.** Production agent'ında `skill_reference.version: "latest"` kullanmak, her upload'u anında prod'a sokar; test edilmemiş bir bundle herkesi etkiler. Düzelt: production'da explicit integer pin (`version: 7`) ya da en azından `default_version` üzerinden ilerle. `latest` sadece dev ve canary için.

**Cross-platform sync varsayımı.** Claude.ai'a yüklediğin skill Claude API'da yoktur; Claude API'a yüklediğin Claude.ai'da görünmez; Claude Code skill'leri ikisinden de bağımsızdır. "Bir yere koydum, her yerde var" varsayımı ekiplerin sıkça düştüğü tuzak. Düzelt: her surface için ayrı upload pipeline'ı kur; tek bir kaynak repo'dan üç hedefe dağıtım yap.

## Test etmeme

Bir skill'i yazıp doğrudan production agent'ına bağlamak, en pahalı anti-pattern'lerden biridir. Description'ın gerçekten doğru anda tetiklenip tetiklenmediği, yan dosyaların doğru okunup okunmadığı, script'lerin runtime kısıtları altında çalışıp çalışmadığı sadece kullanımda anlaşılır. Düzelt: local test (Claude Code ile dosya sistemi üzerinden) → workspace test (yeni version'ı non-default olarak yayımla) → canary deploy (küçük bir traffic dilimi) → tam rollout. Her aşamada description trigger oranı ve task completion metriklerini kaydet. Test edilmemiş bir skill, agent ekosistemine eklenmiş kontrolsüz bir değişkendir; ekibin geri kalanı ne zaman tetikleneceğini, ne kadar token tüketeceğini, hangi durumda sessizce fail edeceğini bilmez.

## İyi vs kötü description çifti

İki versiyonu yan yana koyarsan fark anında görünür hale gelir:

```yaml
# KÖTÜ
---
name: claude-doc-helper
description: Helps with documents.
---
```

```yaml
# İYİ
---
name: pdf-summary
description: Extract text from PDFs and produce a 200-word summary. Use when the user uploads a PDF, asks for PDF summary, or mentions document extraction.
---
```

Kötü versiyonda hem reserved kelime ("claude") hem trigger eksikliği hem de aşırı genel betim var; tek satırda üç anti-pattern aynı anda. İyi versiyon işlevsel isim, somut output ("200-word summary"), açık tetikleyici listesi ve keyword'lerle (PDF, summary, document extraction) çalışır. Anti-pattern'leri tanımanın en hızlı yolu çiftlerle pratik yapmak: kötü description'ı al, hangi kuralı bozduğunu söyle, düzeltilmiş versiyonu yaz.

## Sırada ne var?

Bu lesson Section 3'ü kapatıyor. Buraya kadar bir skill'in nasıl tasarlandığını, yazıldığını, paketlendiğini, test edildiğini ve nasıl bozulduğunu konuştuk. Ama bir skill ancak çalıştığı platform kadar iyidir; aynı bundle Claude Code'da, Claude API'da, Claude.ai'da ve OpenAI Responses API'da farklı runtime kısıtları, farklı upload akışları, farklı yetki modelleriyle karşılaşır. Section 4 tam olarak bu platform-spesifik detayları açıyor. Bir sonraki ders ilk durak: **Claude Code ile Skills** — filesystem tabanlı yapının pratikte nasıl kurulduğu, kişisel ve proje skill'lerinin nereye konduğu, Claude Code plugin sistemiyle nasıl paylaşıldığı.
