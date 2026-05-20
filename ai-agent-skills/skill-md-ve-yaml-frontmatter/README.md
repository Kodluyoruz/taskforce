# SKILL.md ve YAML Frontmatter

Bir skill'in kimliği `SKILL.md` dosyasıdır. Runtime bir skill'i keşfederken, yüklerken, "şu an bu görev için uygun mu?" diye karar verirken hep aynı dosyaya bakar. Klasörde başka kaç dosya olursa olsun — `REFERENCE.md`, `scripts/`, `assets/` — agent'ın ilk gördüğü, manifest dediğimiz bu tek dosyadır. Section 1'de "skill nedir, ne işe yarar, hangi sorunu çözer" sorularını gezdik. Bu lesson ile yeni bir yere giriyoruz: skill'in **iç anatomisi**. `SKILL.md`'nin fiziksel yapısını parça parça açacağım — iki kısma ayrıldığını, YAML frontmatter'ın hangi kurallara bağlı olduğunu, hangi alanların zorunlu olduğunu ve parser hata verdiğinde nelere bakman gerektiğini.

## İki kısım: frontmatter + body

`SKILL.md` her zaman iki bölümden oluşur. Üstte **YAML frontmatter**, altta **markdown body**. Frontmatter, agent'ın skill hakkındaki bilgisini taşıyan structured veriyi içerir: ismi, ne işe yaradığı, opsiyonel olarak lisansı ve uyumluluk bilgileri. Body ise modelin skill tetiklendiğinde okuyacağı serbest formatlı talimatları içerir. Adım adım workflow, örnekler, edge case açıklamaları, başka dosyalara yapılan referanslar — hepsi body'ye gider.

Bu ayrım rastgele değil. Frontmatter ile body'nin yüklenme zamanı bile farklı. Agent başladığında tüm skill'lerin sadece frontmatter'ı sürekli context'te durur (yaklaşık 100 token). Body ise ancak skill o görev için uygun bulunduğunda okunur. Yani frontmatter "vitrin", body "raf arkası". Vitrin küçük ve net olmalı; raf arkası ise işin asıl detayını barındırır.

## YAML frontmatter formatı

YAML frontmatter şu kalıba uyar:

- Dosyanın **ilk satırı** üç tire olmalı: `---`
- Sonrasında `key: value` satırları gelir
- Bloğun sonunda yine üç tire ile kapanır: `---`
- Kapanış satırından sonra markdown body başlar

İçeriği parse eden taraf bu kalıbı arar. Açılış `---`'i yoksa veya kapanış unutulmuşsa frontmatter geçersiz sayılır ve skill yüklenmez.

Minimal geçerli bir `SKILL.md` örneği:

```markdown
---
name: weekly-report
description: Generate a weekly status report from JIRA tickets and GitHub PRs. Use when the user asks for weekly summary, sprint review, or team status update.
---

# Weekly Report

Verileri toplamak için sırasıyla şu adımları izle:

1. Son 7 günün JIRA ticket'larını çek.
2. Merge olmuş PR'ları listele.
3. Konulara göre grupla ve özet yaz.
```

Burada görmen gereken: frontmatter sadece iki alan içeriyor (`name`, `description`); body ise standart markdown. Skill'in çalışması için bu kadarı yeterli.

### String değerler tırnaksız yazılabilir

YAML, tek satıra sığan stringleri tırnaksız kabul eder. Spec sana `description: PDF dosyalarını işle.` yazma izni verir; `description: "PDF dosyalarını işle."` da geçerlidir. Ama bir uyarı var: değer **`:`**, **`#`**, **`>`**, **`|`** veya başında **`-`** içeriyorsa tırnak gerekli olabilir. YAML parser sembolleri özel bir anlamla okur ve karışıklığa düşer. Şüphedeysen tırnak kullan; özellikle URL, dosya yolu, kod parçası içeren değerlerde.

### Uzun değerler için multi-line bloklar

Description bazen 600-800 karaktere uzar. YAML, uzun bir stringi birden fazla satıra yaymak için iki blok scalar operatörü sunar:

- `>-`: folded scalar. Satır kırılması boşluğa dönüşür. Tek paragraf bir metin yazmak için.
- `|`: literal scalar. Satır kırılması olduğu gibi korunur. ASCII tablo, kod örneği gibi içeriklerde işe yarar.

Örnek:

```yaml
---
name: contract-review
description: >-
  Inceleme listesinden geçirerek ticari sözleşmelerdeki riskli maddeleri
  işaretle ve şirketin standart şablonuyla karşılaştır. Use when reviewing
  contracts, NDAs, MSAs or when the user uploads a legal document.
---
```

Folded scalar sayesinde description'ı görsel olarak kısa satırlara bölebilirsin; parser bunları tek bir mantıksal stringe çevirir.

## Markdown body

Frontmatter kapanış `---`'ından sonra başlayan kısım sıradan GFM markdown'dır. Format zorunluluğu yok: H1 ile başlamak gerekli değil, hatta hiç heading kullanmadan da yazabilirsin. Yaygın pratik, dosyaya bir H1 ile skill'in başlığını koymak ve sonra H2'lerle adımları, örnekleri, edge case'leri ayırmak. Body içinde kod blokları, listeler, tablolar, başka dosyalara linkler kullanabilirsin.

Body uzun olabilir ama bir tavsiye var: 500 satırı geçirme. Daha uzun içerikler `REFERENCE.md`, `STANDARDS.md` gibi yardımcı dosyalara taşınır ve body'den linklenir. Detay nasıl tasarlanır, hangi kısım body'de hangisi referans dosyaya gider — bunlar ilerideki ders konuları.

## Manifest dosya adı: case-insensitive, tek dosya kuralı

Resmi spec ve runtime davranışı net iki kural koyar:

1. **Dosya adı eşleşmesi case-insensitive.** `SKILL.md`, `skill.md`, `Skill.md`, `SkIlL.md` — hepsi geçerli. Konvansiyon büyük harfli `SKILL.md`'dir ve örneklerin tamamında bu kullanılır, ama runtime hangisini bulursa onu kabul eder.
2. **Bundle başına TEK manifest.** Aynı klasörde hem `SKILL.md` hem `skill.md` bulunamaz. Spec bunu invalid sayar; bazı runtime'lar yükleme aşamasında hata fırlatır, bazıları skill'i hiç keşfetmez.

Pratik sonuç: işin garantili çalışsın istiyorsan dosyayı `SKILL.md` adıyla yaz ve klasörde başka manifest dosyası olmadığından emin ol.

## Validation: tipik hatalar

Frontmatter parse edilemezse skill yüklenmez. Hata mesajları çoğu zaman "invalid frontmatter" gibi soyut bir cümle olur; hangi satırın bozuk olduğunu bulmak sana kalır. En sık görülen sorunlar:

- **Kapanmamış frontmatter:** Açılış `---` var, kapanış unutulmuş. Parser dosyanın geri kalanını YAML sanır ve patlar.
- **Zorunlu alan eksik:** `name` veya `description` yok. Spec her ikisini de **required** sayar.
- **Geçersiz YAML syntax:** Hatalı indent, açıkta kalan `:`, kapanmamış string. Çoğu YAML hatası gözle anlaşılmaz; bir linter (`yamllint`) ya da spec'in kendi `skills-ref validate` aracıyla kontrol etmek hızlı çözer.
- **Yanlış dosya konumu:** Frontmatter mükemmel olabilir ama `SKILL.md` skill klasörünün **root'unda** değilse hiçbir runtime bulamaz.

Validation'ı bilinçli yapmak isteyenler için `agentskills.io` üzerinde yayımlanan `skills-ref` aracı yerel doğrulama yapar; bir tek komutla frontmatter'ın spec'e uygun olup olmadığını söyler.

## YAML için dikkat noktaları

YAML, esnek görünür ama küçük detaylar parse'ı bozar. Skill yazarken üç şeyi hatırlamak yeter:

1. **Tab yasak, sadece space.** YAML spec'i indent için tab kabul etmez. Editörünün tab tuşunu space'e çevirdiğinden emin ol; aksi halde "mapping values are not allowed here" tarzı bir hata alırsın ve sebebini bulmak için 10 dakika kaybedersin.
2. **Indent tutarlı olmalı.** Bir mapping içinde iki space kullandıysan tüm seviyede iki space kullan. Karışık indent (bir yerde 2, başka yerde 4) hata üretir.
3. **Şüphede tırnak kullan.** Özellikle `:` içeren değerlerde — örneğin saat formatı `12:00` ya da URL `https://example.com` — değeri çift tırnak içine almak parser'ı şaşırtmaz.

Yanlış örnekler:

```yaml
# Frontmatter kapanmamış: parser tüm dosyayı YAML sanır.
---
name: report
description: Bir rapor
# eksik kapanış ---
```

```yaml
# Tab içerdiği için geçersiz (görünmüyor ama orada).
---
name:	report
description: Bir rapor
---
```

```yaml
# Description ":" içeriyor ve tırnaksız.
---
name: meeting-notes
description: Toplantı notu hazırla: gündem, kararlar, aksiyonlar.
---
```

İlk iki örnek YAML kurallarını çiğnediği için anında çöker. Üçüncüsünde parser `description`'ın değerini `Toplantı notu hazırla` olarak okur ve sonra "gündem, kararlar, aksiyonlar." kısmını yeni bir key sanmaya çalışır. Çift tırnak içine alındığında problem çözülür.

## Sırada: name ve description alanlarının kuralları

`SKILL.md`'nin iskeleti elinde. Üstte frontmatter, altta body; ortada parser'ın gözettiği YAML kuralları. Bir sonraki ders bu iskeletin içine bakacak: `name` alanı hangi karakterleri kabul eder, neden 64 karakter limiti var, hangi kelimeler reserved sayılıyor; `description` neden skill'in en kritik alanı, "ne zaman kullanılacağını" nasıl yazarsın ki agent doğru anda tetiklesin. Format bittiyse içerik kurallarına geçme zamanı.
