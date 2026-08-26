# Agent Skills Açık Standardı

Anthropic'in tanımladığı `SKILL.md` formatı sadece Claude'a mı özel? Hayır. `agentskills.io` adresinde yayınlanan açık bir standart var ve bu standart, skill bundle'ının nasıl paketleneceğini, hangi frontmatter alanlarının zorunlu olduğunu, `name` ile `description` field'larının hangi kurallara uyacağını tek bir spec'te topluyor. Anthropic, OpenAI, Cursor, GitHub Copilot, Goose, Letta gibi onlarca runtime aynı formatı okuyor. Bu derste spec'in kendisine bakıyoruz: skill'in dosya iskeleti nedir, alan kuralları nelerdir, validation nasıl çalışır.

## SKILL.md'nin zorunlu iskeleti

agentskills.io spec'ine göre bir skill, içinde `SKILL.md` dosyası bulunan bir klasördür. O klasörün adı ile frontmatter'daki `name` alanı birebir eşleşmek zorundadır. Diğer her şey — `scripts/`, `references/`, `assets/`, ek dökümanlar — opsiyoneldir.

`SKILL.md` dosyasının yapısı iki parçadan oluşur:

1. **YAML frontmatter (zorunlu):** En az `name` ve `description` field'larını içerir.
2. **Markdown body (zorunlu):** Agent'ın skill'i aktive ettiğinde okuyacağı instructions.

Minimal geçerli bir örnek:

```yaml
---
name: monthly-report
description: Generate a monthly project status report from JIRA and GitHub data. Use when the user asks for monthly summary, sprint retrospective, or project status update.
---

# Monthly Report

JIRA'dan kapanmış ticket'ları çek, GitHub'dan merge edilmiş PR'ları topla, sonra Markdown raporu üret...
```

Frontmatter'da `name` ve `description` dışında `license`, `compatibility`, `metadata` ve `allowed-tools` gibi opsiyonel field'lar da tanımlıdır. Bunlar runtime tarafında farklı davranır ama spec onları görmezden gelmez.

## name alanı: kurallar ve örnekler

`name` hem skill'in dosya sistemi kimliği hem de model için kısa bir referans. Spec şu kuralları zorlar:

- 1–64 karakter.
- Sadece lowercase ASCII harfler, rakamlar ve tire.
- Tire ile başlayamaz veya bitemez.
- Ardışık iki tire içeremez.
- XML tag içeremez.
- Parent klasör adı ile aynı olmalı.

Anthropic'in Claude SDK dökümanı buna ek iki reserved kelimeyi yasaklar: `anthropic` ve `claude`. Yani `claude-helper` validasyondan geçmez.

Geçerli ve geçersiz örnekler:

```yaml
name: pdf-processing      # geçerli
name: monthly-report      # geçerli
name: PDF-Processing      # YANLIŞ — uppercase
name: -pdf                # YANLIŞ — tire ile başlıyor
name: pdf--processing     # YANLIŞ — ardışık tire
name: claude-helper       # YANLIŞ — reserved kelime
```

## description alanı: kurallar ve tetikleyici rolü

`description` spec'in en kritik field'ı. Model startup'ta sadece bu metni görür ve kullanıcı bir görev getirdiğinde skill'i tetikleyip tetiklemeyeceğine bu metne bakarak karar verir. Yani description, skill'in "router"ıdır.

Spec kuralları:

- Non-empty.
- Max 1024 karakter.
- XML tag içeremez.

Bunlar mekanik. Asıl önemli olan içerik formülü: **what + when to use.** Hem skill'in ne yaptığını hem de hangi kullanıcı isteğinde devreye girmesi gerektiğini barındırmalı. Spesifik anahtar kelimeler agent'ın "bu istek bu skill'e uyuyor mu?" kararını kolaylaştırır.

İyi örnek:

```yaml
description: Extracts text and tables from PDF files, fills PDF forms, and merges multiple PDFs. Use when working with PDF documents or when the user mentions PDFs, forms, or document extraction.
```

Kötü örnek:

```yaml
description: Helps with PDFs.
```

İkincisi spec'i ihlal etmez — validation'dan geçer. Ama model bu metinle skill'i güvenle tetikleyemez.

Boş description ise doğrudan invalid:

```yaml
---
name: report
description:
---
```

## Manifest dosyası ve case-insensitive matching

Spec'in pratik kısıtlarından biri manifest dosyasının nasıl bulunacağı. OpenAI'ın Skills dökümanı bunu net özetler:

- `SKILL.md` dosya adı **case-insensitive** eşleşir. `SKILL.md`, `skill.md`, `Skill.md` üçü de geçerli.
- Bir bundle'da **tam olarak bir** `SKILL.md` olmalı. İki tane varsa runtime hata verir.

macOS case-insensitive dosya sistemi kullanır; Linux çoğunlukla case-sensitive. Spec, ikisinde de aynı sonucu garanti eder.

Body kısmında format kısıdı yok. Step-by-step instructions, örnekler, edge case'ler — ne istersen. Tek pratik tavsiye: dosyayı 500 satır altında tut, uzun referans materyali `references/` klasörüne çıkar.

## Validation

agentskills.io spec'i sadece bir döküman değil; bir validation referans noktası. OpenAI'ın Skills dökümanı açıkça der: *"Skill front matter validation follows the agent skills specification."* Yani runtime, bundle'ı kabul edip etmemeye bu spec'e bakarak karar verir.

Spec, doğrulama için `skills-ref` adında resmi bir CLI sağlar:

```bash
skills-ref validate ./my-skill
```

Bu komut frontmatter'ın geçerli olduğunu, naming kurallarının ihlal edilmediğini ve `name` ile parent klasör adının eşleştiğini kontrol eder. Yüklemeden önce lokalde çalıştırmak en güvenli yol.

Runtime'lar buna ek kendi limitlerini koyabilir. Örneğin OpenAI: zip max 50 MB, version başına max 500 dosya, tek dosya max 25 MB.

## Anthropic ve OpenAI uyumu

OpenAI'ın resmi dökümanındaki bir cümle çok dikkat çekicidir: *"Skills are compatible with the open Agent Skills standard."* Anthropic ise standardı bizzat 2025'te yayınlayıp açık kaynak topluluğa devretti. İki büyük model sağlayıcı aynı `SKILL.md` formatı üzerinden konuşuyor. Gemini CLI, OpenCode, Cursor, GitHub Copilot, VS Code, Goose, Letta, Codex, Databricks, Roo Code, Laravel Boost ve daha fazlası aynı formatı kabul eder.

Pratik sonuç: bir kez yazdığın `SKILL.md`'yi farklı runtime'larda yeniden paketlemeden kullanabilirsin. Değişen tek şey **nasıl mount edildiği** — Claude'da klasöre koyarsın, OpenAI'da zip yüklersin, Cursor'da `.skills/` altına atarsın. Format aynı.

## Standart neden önemli?

Skill'in açık bir spec'i olmasının üç pratik sonucu var:

1. **Vendor lock-in'den kaçınma:** Bugün Claude için yazdığın skill, yarın OpenAI'a geçtiğinde çöpe gitmez.
2. **Topluluk paylaşımı:** `anthropics/skills` reposu ya da agentskills.io client showcase'i, farklı şirketlerin skill'leri tek formatla paylaşmasına izin verir.
3. **Tooling ekosistemi:** Linter, validator, registry tek spec'e göre yazılır. Her runtime için ayrı tool zinciri kurmaya gerek yok.

Standart açık kaynak ve evrim sürüyor — `allowed-tools` deneysel olarak duruyor, validation kuralları zamanla gelişiyor.

Keşif ve dağıtım için [skills.sh](https://skills.sh/) (Vercel) üzerinde topluluk skill'leri browsable bir marketplace'te toplanıyor. Bir skill yüklemek için `npx skills add <owner/repo>` komutu yeterli; agent'ın beklediği klasöre otomatik kopyalanır.

## Sırada: ekosistem haritası

Standart bir tarafı, onu kimin uyguladığı başka bir tarafı. Bir sonraki derste Anthropic, OpenAI ve üçüncü parti framework'lerin Skills ekosistemindeki yerlerini haritalandırıyoruz: hangi runtime hangi opsiyonel field'ı destekliyor, hangi platform skill'i nasıl mount ediyor, ekosistem nereye doğru evriliyor.
