# Skills vs MCP: Detaylı Karşılaştırma

Lesson 4'te Skills, Prompts, Tools ve MCP'yi yan yana koyup farklarını yüzeyden tarıdık. Şimdi konunun en sık karıştırılan ikilisinin — **Skill** ve **MCP** — altına inme zamanı. İkisi de "agent'a yetenek katar" diye anlatılır, ikisi de açık standart, ikisi de cross-tool çalışmayı vaat ediyor. Buna rağmen iki tamamen farklı problemi çözüyorlar: biri agent'ın dış dünyaya nasıl bağlanacağını, öteki belirli bir görevi nasıl yapacağını tarif ediyor. Bu derste mimari farkı, kullanım sınırlarını, maliyet profilini ve hibrit kurguyu sırayla açıyorum.

## MCP nedir? (hızlı özet)

**Model Context Protocol (MCP)**, Anthropic'in Kasım 2024'te duyurduğu açık bir protokol. Tek cümleyle: agent'ın dış sistemlere konuşma şeklini standartlaştırır. Bir MCP server, dışarıdaki bir kaynağa — veritabanı, dosya sistemi, internal API, Slack, GitHub — yapılandırılmış erişim sağlayan ayrı bir süreçtir. Client (agent çerçevesi) bu server'a **JSON-RPC** üzerinden bağlanır.

Bir MCP server üç tip kaynak sunar:

- **Tools.** Çağrılabilir aksiyonlar. `create_issue`, `run_sql`, `send_message` gibi. Agent bunları function call ile tetikler.
- **Resources.** Okunabilir veri kaynakları. Bir dosya, bir tablo, bir doküman.
- **Prompts.** Server'ın önerdiği şablon prompt'lar; client UI'ında "hızlı eylem" olarak görünür.

MCP'nin çözdüğü problem N×M entegrasyonu: M tane agent, N tane sistem varsa MCP olmasa N×M ayrı entegrasyon kodu gerekirdi. Şimdi her sistem bir MCP server yazıyor, tüm uyumlu client'lar otomatik kullanıyor.

## Skill nedir? (hızlı özet)

**Agent Skill**, Anthropic'in Ekim 2025'te duyurduğu modüler instruction format. Bir skill, içinde `SKILL.md` (YAML frontmatter + markdown gövde) ve opsiyonel olarak script, referans dosyaları, alt klasörler bulunan **filesystem'de duran bir bundle**. Zip ya da klasör olarak dağıtılır, git'le versiyonlanır.

Agent runtime'a yüklendiğinde önce sadece frontmatter'daki `name` ve `description` sistem prompt'una düşer. Description bir göreve uyduğunda agent kendisi `SKILL.md`'yi okur ve içindeki adımları izler. Bu **progressive disclosure** deseni context'i sıfır şişirir — onlarca skill yüklü olabilir, hepsinin metadata maliyeti birkaç yüz token.

## Temel mimari farkı

Tek cümlede:

- **MCP:** Dış sistemlere erişim **protokolü**. "Agent başka bir programa nasıl bağlanır?" sorusuna cevap.
- **Skill:** Prosedürel bilgi **paketi**. "Agent belirli bir görevi nasıl yapar?" sorusuna cevap.

MCP **runtime bağlantı** kurar; ayrı bir süreç çalışır, ağ üzerinden konuşur, state tutabilir. Skill **dosya** olarak durur; agent dosyayı okur, içindeki talimatları izler, kendi context'inde işler.

Bir benzetme: MCP, mutfağa giden boruları döşer (elektrik, su, gaz). Skill ise yemek tarifidir (önce şunu, sonra şunu, son olarak şunu yap). İkisi de mutfak işler ama farklı katmandalar.

## Detaylı karşılaştırma tablosu

```
| Özellik          | MCP                              | Skill                            |
| ---------------- | -------------------------------- | -------------------------------- |
| Amaç             | Dış sistemlere erişim            | Prosedürel bilgi + iş akışı      |
| Çalışma şekli    | Ayrı server süreci, RPC          | Filesystem'de bundle             |
| Veri akışı       | Real-time sorgu/yanıt            | SKILL.md yüklendiğinde context'e |
| Versiyonlama     | Server release ile               | Bundle version_number ile        |
| Kapsam           | Cross-tool (Claude/Cursor/...)   | Cross-tool (agentskills.io ile)  |
| Tipik kullanım   | DB sorgusu, API call, file read  | Workflow, prosedür, talimat      |
| Discovery        | Server tools/resources listesi   | Skill description metadata       |
| Maliyet (tokens) | Tool call başına schema yükü     | Metadata sabit + tetiklenince    |
| State            | Server-side mümkün               | Stateless (her tetiklenme yeni)  |
| Çalışma yeri     | Ayrı süreç (genelde uzak)        | Agent'ın filesystem'inde         |
```

MCP **canlı bağlantı** ve **güncel veri** getirir; bedelini istek başına schema ve transport ile öder. Skill **sıfır network**, **deterministik prosedür** sunar; bedelini "tetiklenince dosya okuma" ile öder.

## Ne zaman hangisi?

Pratik karar listesi:

- "Dış sistemden veri çekmem lazım" → **MCP**
- "Belirli bir prosedürü her seferinde aynı şekilde uygulatmam lazım" → **Skill**
- "Şirket içi bilgi tabanına agent'tan erişmem lazım" → **MCP**
- "Style guide / brand voice şirket çapında uygulanmalı" → **Skill**
- "Slack'e mesaj gönderme yeteneği lazım" → **MCP**
- "Haftalık rapor formatı standartlaşmalı" → **Skill**
- "Postgres'e ad-hoc sorgu atan agent" → **MCP**
- "Müşteri şikayetlerine cevap yazma akışı" → **Skill**
- "Salesforce kayıtlarını çek + Slack'e at" → **MCP** (bağlantı) + **Skill** (akış)

Kalıp şu: **veriye/sisteme dokunmak gerekiyorsa MCP, davranışı/sırayı tarif etmek gerekiyorsa Skill.**

## Hibrit kullanım örneği

Bir kurumsal müşteri destek bot'unu düşün:

- **MCP tarafı.** Zendesk MCP server (ticket okuma/yazma), Confluence MCP server (bilgi tabanı arama), Slack MCP server (ekibe eskalasyon mesajı). Üç ayrı server, agent'a otomatik tool olarak düşer.
- **Skill tarafı.** `customer-support-workflow` skill'i. İçinde: ticket sınıflandırma kuralları (`P0/P1/P2` matrisi), cevap şablonları (`templates/refund.md`, `templates/bug-report.md`), eskalasyon yordamı (`escalation.md`), tone of voice rehberi.

Kullanıcı bir ticket'a cevap istediğinde:

1. Skill description tetiklenir, `SKILL.md` context'e gelir.
2. Skill içindeki adımlar agent'ı yönlendirir: "Önce Zendesk'ten ticket detayını çek." Agent **MCP'nin Zendesk tool'unu** çağırır.
3. Skill devam eder: "Bilgi tabanında benzer vakaları ara." Agent **Confluence MCP**'yi sorgular.
4. Skill: "Eğer P0 ise Slack'e eskalasyon mesajı at." Agent **Slack MCP**'yi çağırır.
5. Skill: "Cevap şablonunu doldur ve Zendesk'e yaz." Agent şablonu kullanır ve Zendesk MCP üzerinden cevabı kaydeder.

Skill **playbook'u** tutar; MCP **fiilleri** sağlar. Agent hem ne yapacağını biliyor (skill), hem de yapabilecek araçlara sahip (MCP). Bu kalıbı pratikte her ciddi production agent'ında görürsün: skill prosedürel akışı taşır, MCP veri çekme/yazma fonksiyonlarını verir, prompt rolü çizer.

## Sık karıştırılan noktalar

**"MCP tool ile skill tool aynı şey mi?"** Hayır. MCP tool, bir MCP server'ın expose ettiği function çağrısıdır — JSON-RPC ile dış süreçten gelir. Skill içinden çağrılan "tool" ise agent runtime'ın yerel/builtin tool'larıdır (`bash`, `read`, `write`, `web_search`) ya da bir bash script'in subprocess olarak çalıştırdığı şey. İkisi farklı katmanda yaşar.

**"Skills MCP'nin yerini alacak mı?"** Hayır. Farklı problem çözüyorlar. Anthropic'in Ekim 2025 duyurusunda da bu açıkça belirtildi: skills ve MCP **tamamlayıcı**. Hatta resmî SDK örneklerinin çoğu ikisini birlikte kullanır.

**"MCP daha eski, Skills daha yeni — Skills daha mı iyi?"** Soru yanlış kurulmuş. "Çekiç mi tornavida mı daha iyi?" demek gibi. Sorulması gereken: elindeki vida hangisi?

**"MCP olmadan da skill yazabilir miyim?"** Tabii. Skill agent'ın builtin tool'larıyla (bash, web_search, file_read) kendi başına çalışabilir. MCP, skill'in çağırabileceği ek bir tool kaynağıdır.

**"Skill bir MCP server olabilir mi?"** Doğrudan değil. Bir MCP server'ın `prompts` kaynağı skill benzeri bir şey taşıyabilir ama Anthropic'in tavsiyesi: prosedürel bilgiyi skill, sistem erişimini MCP olarak ayrı tut.

## ASCII mimari diyagramı

```
        ┌──────────────────────────┐
        │           Agent          │
        └────┬─────────────────┬───┘
             │                 │
   "Prosedür"│            "Dış sistem"
             │                 │
             ▼                 ▼
   ┌─────────────────┐  ┌───────────────────┐
   │     SKILL       │  │   MCP SERVER      │
   │                 │  │                   │
   │ SKILL.md        │  │  ┌─────────────┐  │
   │  + scripts/     │  │  │   Tools     │  │
   │  + REFERENCE.md │  │  ├─────────────┤  │
   │                 │  │  │ Resources   │  │
   │ "Şu adımları    │  │  ├─────────────┤  │
   │  şu sırada yap" │  │  │  Prompts    │  │
   │                 │  │  └─────────────┘  │
   │ Filesystem'de   │  │                   │
   │ duruyor         │  │  ↕ JSON-RPC ↕    │
   │                 │  │                   │
   └─────────────────┘  │  ┌─────────────┐  │
                        │  │ DB / API /  │  │
                        │  │ File / Slack│  │
                        │  └─────────────┘  │
                        └───────────────────┘
```

Soldaki Skill agent'ın **ne yapacağını** anlatan dosya kümesi; sağdaki MCP server agent'ın **neye dokunabileceğini** açan canlı süreç. Skill'in talimatları, MCP'nin tool'larını çağırmaya yönlendirebilir — en yaygın hibrit deseni budur.

## Sırada ne var?

Skills ile MCP arasındaki sınırı net çizdiğine göre bir adım öteye geçebiliriz: **bir agent'ta birden çok skill yüklüyse ne olur?** İki skill'in description'ı çakışırsa hangisi tetiklenir, bir skill diğerini çağırabilir mi, conflict resolution nasıl çalışır? Bir sonraki derste skill kompozisyonunu ve çoklu skill çakışma yönetimini açıyorum.
