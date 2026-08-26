# Skills Ekosistemi Haritası

Skills tek bir şirketin tek bir ürününe ait değil. Anthropic'in çıkardığı format açık standarda dönüştü, OpenAI Responses API'sinde tutundu, üçüncü parti framework'ler aynı paketleri okuyor. Skill öğrenirken bir runtime değil bir ürün ailesi öğreniyorsun. Bu lesson o ailenin haritasını çıkarır: hangi platform neyi destekler, nerede `skill_id` verirsin, nerede zip yüklersin, hangi durumlar arası **senkronizasyon yoktur**.

## Anthropic ekosistemi

Skills Anthropic'in çıkardığı ve şu an dört yüzeyde paralel yaşayan bir format:

**Claude API.** En esnek yüzey. Bir skill'i `container` parametresinde `skill_id` ile çağırırsın; pre-built (`pdf`, `xlsx`, `pptx`, `docx`) ve `/v1/skills` üzerinden yüklediğin custom skill'ler aynı şekilde çalışır. Üç beta header şart: `code-execution-2025-08-25`, `skills-2025-10-02`, `files-api-2025-04-14`. Custom skill'ler workspace-wide paylaşılır.

**Claude Code.** Filesystem-based. Skill'leri `~/.claude/skills/` (kişisel) ya da `.claude/skills/` (proje bazlı) klasörüne bırakırsın, başlangıçta taranır. Upload yok, API call yok. Claude Code Plugins üzerinden başkasının paketini plugin marketplace'ten ekleyebilirsin; açık kaynak ekosistemin geliştiği nokta burası.

**claude.ai.** Settings > Features menüsünden zip yüklersin; Pro, Max, Team, Enterprise planlarında çalışır. Pre-built skill'ler arka planda zaten aktif. Önemli kısıtlama: yüklediğin custom skill kullanıcıya özeldir — admin merkezi dağıtım yapamaz.

**`anthropics/skills` GitHub repo'su.** Pre-built source-available implementasyonlar ve Apache 2.0 örnekler aynı yerde. Dört kategori: Creative & Design, Development & Technical, Enterprise & Communication, Document Skills. `claude-api` skill'i özel: Claude'a kendi API'sinin güncel referansını ve 8 dilde SDK dokümanını verir, Claude Code ile birlikte gelir.

## OpenAI ekosistemi

OpenAI tarafında Skills, Responses API'sinin `shell` tool'una bağlıdır — ayrı bir endpoint değil, shell environment'ının içine takılan bir uzantı.

**Hosted shell.** `environment.type` = `container_auto` ise skill'ler `skill_reference` ile mount edilir; versiyon verebilirsin (`version: 2` veya `"latest"`). Skill'in önceden upload edilmiş olması gerekir.

**Local shell.** `environment.type` = `local` ise format değişir: `skill_reference` çalışmaz, her skill için `name`, `description`, `path` verirsin. Dosyalar senin makinende.

**Curated skills.** OpenAI'ın first-party skill'leri. `openai-spreadsheets` en bilinen örnek; `skill_id` ile referansla çalışır, upload gerekmez.

**Inline skills.** Önceden upload etmek istemediğinde zip'i base64 encode edip request içinde `skills` dizisine yapıştırırsın. Prototip için pratik.

İki tarafın referans kalıbı yan yana:

```python
# Anthropic — Claude API
response = client.messages.create(
    model="claude-opus-4-7",
    container={"skill_ids": ["pdf"]},
    messages=[...],
)
```

```python
# OpenAI — Responses API (hosted shell)
response = client.responses.create(
    model="gpt-5.5",
    tools=[{
        "type": "shell",
        "environment": {
            "type": "container_auto",
            "skills": [
                {"type": "skill_reference", "skill_id": "openai-spreadsheets"}
            ],
        },
    }],
    input="...",
)
```

Aynı kavram, farklı kalıp. İki tarafta da `SKILL.md` aynı spec'e uyar; değişen sadece runtime'a tanıtma şekli.

## Açık standart: agentskills.io

Skills'in hızlı yayılmasının ana sebebi Anthropic'in formatı kapalı tutmaması. `agentskills.io` adresinde toplanan **Agent Skills standardı** hem Anthropic hem OpenAI tarafından uyumlu kabul edilir. `SKILL.md` yapısını, YAML frontmatter alanlarını (`name`, `description`, opsiyonel `version`, `license`, `allowed-tools`) ve klasör konvansiyonlarını tanımlar. Sonuç pratik: doğru yazılmış bir `SKILL.md` Claude API'da, Claude Code'da, claude.ai'da ve Responses API'sinin hem hosted hem local shell modunda aynı şekilde çalışır. Sadece runtime'a kayıt etme şeklin değişir.

## Üçüncü parti agent'lar ve framework'ler

agentskills.io açık standartta listelenen platformlar, 2026 başı itibarıyla 30'u aşmış durumda. Hepsi aynı `SKILL.md` formatını okuyor; değişen sadece skill'in nasıl mount edildiği.

**Native skill desteği olan coding agent'lar:** Cursor (`.skills/`), VS Code + GitHub Copilot, Gemini CLI, Junie (JetBrains), Amp, OpenHands, Goose, Letta, Roo Code, OpenAI Codex, Databricks Genie Code, Laravel Boost, Snowflake Cortex Code ve daha fazlası. Bu agent'larda skill kullanmak için genellikle projenin `.skills/` klasörüne veya belirtilen dizine `SKILL.md` ile birlikte bırakman yeterli.

**Adapter gerektiren framework'ler:** LangChain, LlamaIndex, AutoGen (Microsoft), CrewAI gibi vendor-agnostic framework'ler Skills standardını native olarak yüklemiyor; ama `SKILL.md` açık ve okunabilir olduğundan 50–100 satırlık bir wrapper ile aynı paket her framework'e takılabiliyor.

Ortak nokta: doğru yazılmış bir `SKILL.md`'yi native agent'lara ya da adapter kodu üzerinden framework'lere taşımak mümkün.

## skills.sh — keşif ve dağıtım

[skills.sh](https://skills.sh/) Vercel tarafından geliştirilen ve agentskills.io standardını kullanan açık bir skill marketplace'i. Yüksek kaliteli, topluluk tarafından doğrulanmış skill'leri tek komutla yüklemeni sağlıyor:

```bash
npx skills add <owner/repo>
```

Örnek kurulum:

```bash
# Vercel'in frontend-design skill'ini ekle
npx skills add vercel-labs/agent-skills
```

Komut çalıştığında skill senin agent'ının beklediği klasöre (Claude Code'da `.claude/skills/`, Cursor'da `.skills/`, vb.) kopyalanır. Telemetry kurulum sayısını toplar; kapatmak için `DISABLE_TELEMETRY=1` environment variable'ı tanımla.

Mayıs 2026 itibarıyla 91.000+ toplam kurulum, 1,4M kurulumla "find-skills" ve 394K kurulumla "frontend-design" başı çeken skill'ler arasında. Skill'leri trending (24 saat), hot ve official kategorilerinde filtreleyebilirsin. Kendi skill'ini yayınlamak için `github.com/skillsdotsh` üzerinden PR aç.

## Topluluk

skills.sh ve agentskills.io'nun yanı sıra GitHub'da bireysel ve şirket koleksiyonları büyüyor. Anthropic'in `github.com/anthropics/skills` reposu pre-built skill'lerin kaynak kodunu barındırırken, topluluk repo'ları legal, finance, data engineering, DevOps gibi alanlarda domain-specific skill'ler paylaşıyor. Bir skill'i ortamına taşımak çoğu zaman `npx skills add` ya da `git clone` ve klasörü doğru yere kopyalamak.

## Cross-surface uyarısı: skill'ler arası sync yoktur

Hatırlanması gereken en önemli kural: **Custom skill'ler ürünler arası otomatik senkronize edilmez.**

- claude.ai'a yüklediğin zip Claude API'da görünmez.
- Claude API'da `/v1/skills` üzerinden yüklediğin skill claude.ai'da görünmez.
- Claude Code'daki filesystem klasörü ikisinden de bağımsızdır.
- OpenAI Responses API'ye upload ettiğin skill Anthropic tarafında yoktur, tersi de geçerli.

Bir skill'i birden fazla yüzeyde çalıştırmak istiyorsan her birine ayrı yüklersin. Aynı `SKILL.md`'dir; sadece deployment kanalı tekrarlanır. Pratik çözüm: tek kaynaktan dört yüzeye push eden bir CI/CD pipeline.

## Harita

```
                    Agent Skills Ekosistemi (Mayıs 2026)

  ┌────────────────────┐    ┌────────────────────┐    ┌──────────────────┐
  │   ANTHROPIC        │    │      OPENAI        │    │  AÇIK STANDART   │
  │                    │    │                    │    │                  │
  │ • Claude API       │    │ • Responses API    │    │ agentskills.io   │
  │   (skill_id)       │    │   - shell tool     │    │                  │
  │ • Claude Code      │    │   - container_auto │◀──▶│ Anthropic +      │
  │   (filesystem)     │    │   - local shell    │    │ OpenAI uyumlu    │
  │ • claude.ai        │    │ • Curated skills   │    │                  │
  │   (zip upload)     │    │   - openai-        │    │ 30+ platform     │
  │ • Pre-built:       │    │     spreadsheets   │    │ uyumlu           │
  │   pptx, xlsx,      │    │ • Inline skills    │    │                  │
  │   docx, pdf        │    │   (base64 zip)     │    └──────────────────┘
  └─────────┬──────────┘    └──────────┬─────────┘
            │                          │
            └─────────────┬────────────┘
                          ▼
      ┌───────────────────────────────────────────────────┐
      │  Native Skill Desteği (30+ platform)             │
      │                                                   │
      │  Cursor, VS Code, GitHub Copilot, Gemini CLI,     │
      │  Junie, Amp, OpenHands, Goose, Letta, Roo Code,  │
      │  Codex, Databricks, Snowflake, Laravel Boost...  │
      └─────────────────────┬─────────────────────────────┘
                            │
      ┌─────────────────────▼──────────┐    ┌──────────────────┐
      │  Framework Adapter'ları        │    │  skills.sh       │
      │                                │    │  (Vercel)        │
      │  LangChain / LangGraph         │    │                  │
      │  LlamaIndex                    │    │  Keşif ve        │
      │  AutoGen (Microsoft)           │    │  dağıtım         │
      │  CrewAI                        │    │  marketplace     │
      └────────────────────────────────┘    └──────────────────┘
```

Tabloya dökünce surface'ler arası farklar şöyle özetlenir:

| Surface | Yükleme yöntemi | Paylaşım kapsamı | Pre-built skill'ler |
| --- | --- | --- | --- |
| Claude API | `/v1/skills` + `skill_id` | Workspace-wide | pdf, xlsx, pptx, docx |
| Claude Code | Filesystem (`.claude/skills/`) | Kişisel / proje / plugin | Yok (claude-api dahil) |
| claude.ai | Zip upload (Settings > Features) | Kullanıcıya özel | pdf, xlsx, pptx, docx |
| OpenAI Responses (hosted) | Upload + `skill_reference` | API key seviyesi | openai-spreadsheets vb. |
| OpenAI Responses (local) | Path-based | Local machine | Yok |

## Sırada ne var?

Her surface'in yerini biliyorsun; sıradaki karar "hangi ürünü neden seçeceğim?" sorusu. Sonraki ders gerçek senaryolarda Skills'in ne katkı sağladığını ele alıyor: hukuk ekibinin sözleşme inceleme akışı, veri ekibinin SQL kuralları, destek ekibinin marka tonu — her birinde Skills'in prompt'a, RAG'a ve MCP'ye kıyasla nerede öne çıktığını somut örneklerle gösteriyoruz. Önce neden, sonra nasıl.
