# Skills, Prompts, Tools ve MCP Farkı

Skill, prompt, tool, MCP, RAG — aynı paragrafta görününce kafa karıştırıcı. Hepsi modelin davranışını şekillendiriyor, hepsi context'i zenginleştiriyor, ama hiçbiri ötekinin yerini tutmuyor. Bu derste beşini yan yana koyup ne işe yaradıklarını, hangi yaşam süresine sahip olduklarını, hangi probleme cevap verdiklerini açıyorum. Sonunda elinde net bir karar tablosu olacak. Bir uyarı: bunlar rakip değil, katman. Üretim sistemlerinde sık sık üçü dördü birlikte çalışır.

## Prompt

Prompt, modelin tek bir sohbette nasıl davranacağını anlatan metindir. İki yerde durur: **system prompt** modele rolünü ve genel kuralları söyler; **user message** o anlık isteği taşır. Sohbet kapandığında prompt da gider — kalıcı bir kayıt yok.

Prompt'un işi anlık talimat vermek. "Cevapları kısa tut", "Türkçe yaz", "JSON döndür" gibi her şey prompt'a yazılır. Üzerine ne katman koyarsan koy, sonunda modele giden şey büyük bir metin bloğudur.

```python
# Prompt — tek sohbete özel talimat
system = "Sen kısa, doğrudan cevap veren bir teknik asistansın. Cevapları üç cümleyi geçmeyecek şekilde tut."
response = client.messages.create(
    model="claude-sonnet-4-7",
    system=system,
    messages=[{"role": "user", "content": "MCP nedir?"}],
)
```

Sınırı net: prompt ölçeklenmek için tasarlanmamış. Aynı talimatı 50 farklı sohbette tekrar yapıştırıyorsan, bir katman yukarıya çıkma zamanı gelmiştir.

## Tool / function calling

Tool — OpenAI dünyasında **function calling** — modelin dış bir fonksiyonu çağırmasını sağlayan yapılandırılmış mekanizmadır. Sen agent çerçevende `get_weather`, `query_db`, `send_email` gibi fonksiyonlar yazarsın; modele her birinin adını, açıklamasını ve argüman şemasını JSON ile bildirirsin. Model "şu anda `get_weather` fonksiyonunu `city=Istanbul` argümanıyla çağır" diye yapılandırılmış çıktı üretir; çağırmayı agent çerçevesi yapar, sonucu modele geri verir.

Tool tanımı her istekle birlikte modele gönderilir — runtime'da değişebilen bir liste. Tek istek seviyesinde yaşar.

```python
# Tool / function calling — modelin dış fonksiyon çağırması
tools = [
    {
        "name": "get_weather",
        "description": "Belirli bir şehir için anlık hava durumunu döndürür.",
        "input_schema": {
            "type": "object",
            "properties": {"city": {"type": "string"}},
            "required": ["city"],
        },
    }
]
response = client.messages.create(
    model="claude-sonnet-4-7",
    tools=tools,
    messages=[{"role": "user", "content": "İstanbul'da hava nasıl?"}],
)
```

Tool, agent dünyasının iskeletidir. Agent döngüsünün her adımında bir tool çağrılır, sonucu modele döner, model sıradaki tool'a karar verir. Bunlar olmazsa elinde sadece bir sohbet botu kalır.

## MCP

**Model Context Protocol (MCP)**, Anthropic'in Kasım 2024'te duyurduğu açık standart. Tool'ların **nasıl çağrıldığını** standartlaştırır. Bir MCP server bir veritabanı, dosya sistemi, Slack hesabı ya da kurum içi API olabilir; server "şu fonksiyonlarım var, şu argümanları alır" diye JSON-RPC üzerinden konuşur. MCP client (Claude Desktop, Cursor, Claude Code, ChatGPT) bu server'a bağlanır ve içindeki fonksiyonları kendi agent'ına tool olarak gösterir.

Çözdüğü problem N×M entegrasyonu. MCP'siz bir dünyada GitHub için her agent ayrı entegrasyon kodu yazardı. MCP'yle GitHub bir kez MCP server yazıyor; tüm uyumlu agent'lar aynı server'ı kullanıyor.

MCP tool değildir; tool'ları taşıyan **protokol**. Server uptime boyunca yaşar, cross-app çalışır.

```json
// Bir MCP server'ın sunduğu tool, otomatik olarak agent'ın tool listesine düşer
{
  "name": "github.create_issue",
  "description": "Belirtilen repo'da yeni issue açar.",
  "input_schema": { "type": "object", "properties": { "...": {} } }
}
```

## RAG (kısa)

**Retrieval-Augmented Generation (RAG)** bir mimari desen. Bir veri kaynağından (genelde vector DB) sorguya en yakın parçaları çek, bu parçaları prompt'a iliştir, modele öyle sor. Model böylece eğitim verisinde olmayan, güncel ya da kuruma özel bilgiye dayalı cevap verebilir.

RAG ne prompt ne tool ne MCP — bunlardan biri veya birkaçıyla kurulan bir desen. Tipik akış: kullanıcı sorar → embedding modeli sorguyu vektöre çevirir → vector DB'de similarity search yapılır → en alakalı 5-10 chunk prompt'a yapışır → model cevap üretir.

RAG'i büyük, sorgulanabilir bir bilgi tabanın olduğunda düşün: ürün dokümantasyonu, hukuki metinler, ticket geçmişi. Skill prosedürü taşır; RAG ise olguyu getirir.

## Skill

**Skill**, filesystem'de duran modüler bir yetenek paketidir. Bir klasör içinde `SKILL.md` (YAML frontmatter + markdown gövde) ve opsiyonel olarak ek markdown dosyaları, executable script'ler, referans verileri bulunur. Agent açıldığında sadece YAML frontmatter sistem prompt'una düşer; onlarca skill aynı anda var olsa bile context şişmez. Description bir göreve uyduğunda agent kendisi `SKILL.md`'yi bash ile okur. Buna **progressive disclosure** deniyor.

```yaml
# Skill — SKILL.md frontmatter
---
name: weekly-report
description: Generate weekly status report from JIRA tickets. Use when user asks for weekly summary or sprint review.
---
```

Skill'in farkı taşınabilirlik ve yeniden kullanım. Aynı klasör Claude Code'da, Claude API'sinde, Claude.ai'da çalışır; agentskills.io açık standardından sonra Cursor, GitHub, OpenAI Responses API gibi ortamlarda da aynı format okunuyor. Skill git'le versiyonlanır, code review'dan geçer. Yetenek artık platforma değil, repo'na ait.

## Hangisini ne zaman kullanmalı?

Karar matrisi:

```
| Katman           | Yaşam süresi      | Kapsam              | Ne için uygundur                                  |
| ---------------- | ----------------- | ------------------- | ------------------------------------------------- |
| Prompt           | Tek sohbet        | O istek             | Anlık talimat, ton ayarı, tek seferlik kural      |
| Tool / function  | Tek istek         | Tek model çağrısı   | Modelin dış fonksiyon çağırması (API, DB, script) |
| MCP              | Server uptime     | Cross-app           | Standart protokolle dış kaynaklara erişim         |
| RAG              | Index uptime      | Sorgulanabilir veri | Büyük veri tabanından dinamik bilgi getirme       |
| Skill            | Filesystem'de var | Re-use, cross-tool  | Tekrar eden prosedürel bilgi + opsiyonel script   |
```

Hızlı karar kılavuzu:

- "Bu sohbete özel davranış istiyorum" → **prompt**
- "Model bir API'yi/hesabı/web aramayı çağırabilsin" → **tool / function calling**
- "GitHub'a, Slack'e, Postgres'e standart şekilde bağlanıp aynı entegrasyonu farklı agent'lardan da kullanmak istiyorum" → **MCP**
- "Büyük bir doküman/bilgi tabanından sorguya göre alakalı parçaları getirmek istiyorum" → **RAG**
- "Tekrar eden bir prosedür var; agent bunu nasıl yapacağını bilsin, gerekirse bir script de çalıştırsın, başka projeler ve agent'lar da aynı paketi kullansın" → **skill**

## Birbirini tamamlayan katmanlar

Bunlar rakip değil, üst üste binen katmanlar. Sık görülen kombinasyonlar:

- **Skill + MCP.** En klasik ikili. MCP, Claude'u Salesforce'a, GitHub'a, veritabanına bağlar — tool'ları sağlar. Skill, bu tool'ları **nasıl** kullanacağını anlatır: "Müşteri raporu istendiğinde önce Salesforce'tan son 30 günü çek, sonra şu şablona göre özetle." MCP verbleri verir; skill playbook'u.
- **Skill + RAG.** Skill prosedürü tutar ("benchmark raporu yazarken şu beş başlığı kullan"); RAG faktüel bilgiyi getirir. Skill'in `SKILL.md`'si "şu sorguyu vector DB'de ara, sonuçları şöyle yorumla" demeye çevrilebilir.
- **Prompt + tool.** En klasik agent kurgusu. System prompt rolü çizer; tool listesi modele neyi çağırabileceğini söyler.
- **Hepsi birden.** Üretim agent'ında system prompt'un kurum rolünü çizmesi, tool listesinin MCP server'dan beslenmesi, agent'ın yarım düzine skill'le donatılması ve karmaşık sorularda RAG ile şirket dokümanlarından alıntı çekmesi normaldir.

Token ekonomisi notu: bir MCP server 90+ tool gösterirse schema'lar her istekte 50K+ token yiyebilir. Skill sadece description (≈100 token) yükler, gerisi on-demand. Uzun prosedürel bilgi skill'e, geniş tool kataloğu MCP'ye yakışır. Ocak 2026'da eklenen MCP Tool Search iki tarafı yaklaştırdı: MCP tool'ları da artık on-demand yüklenebiliyor.

## Sırada ne var?

Skill'in farkını yakaladığına göre artık ekosistemin ortak diline bakabiliriz. Ekim 2025'te Anthropic'in duyurduğu format, Aralık 2025'te `agentskills.io` üzerinden açık standarda taşındı; Microsoft, OpenAI, GitHub, Cursor, Figma, Notion aynı SKILL.md şemasını benimsedi. Bir sonraki derste bu açık standardın ne söz verdiğini ve nasıl yönetildiğini açıyorum.
