# Skills'in Tarihçesi ve Evrimi

Agent Skills bir gecede ortaya çıkmadı. Son üç yıl boyunca aynı problem etrafında dönen denemelerin damıtılmış halidir: bir LLM'i belirli bir göreve nasıl özelleştirip, bu özelleştirmeyi başkasının elinden çıkarabileceği bir paket haline getirirsin? OpenAI 2023'te plugin'lerle denedi, sonra function calling'le, sonra Custom GPTs'le. Anthropic 2024'te MCP ile farklı açıdan yaklaştı. 2025 sonunda Skills bu hikâyenin bugünkü duruşu. Bu derste zinciri kronolojik gezip her durakta hangi problemin çözüldüğünü, hangi yeni problemin doğduğunu açıyorum.

## 2022 sonu: düz prompt çağı

ChatGPT Kasım 2022'de yayınlandığında etkileşim modeli yalındı: kullanıcı mesaj yazar, model cevap döner. Bilgisi eğitim verisinde kalmıştı; dış dünyaya dokunamıyordu. "Özelleştirme" demek, uzun bir prompt yazıp her sohbette üstüne yapıştırmaktı. Marka rehberi, şirket terminolojisi, takım şablonları — elle yapıştırmak ölçeklenmiyordu. Sonraki birkaç yılın hikâyesi bu sıkıntıya verilen art arda cevaplar.

## Mart 2023: ChatGPT Plugins

İlk büyük deneme 23 Mart 2023'te geldi. OpenAI ChatGPT Plugins'i tanıttı; Expedia, Wolfram, Zapier, OpenTable, Slack gibi 11 ortakla başladı. Model artık ChatGPT içinden dış servislere bağlanabiliyordu; rezervasyon için OpenTable, hesaplama için Wolfram. Modüler "yetenek" fikrinin ilk somut hali buydu.

Plugins üç sorunla geldi:

- **Discovery zayıftı.** Kullanıcı hangi plugin'i ne zaman açacağını kendisi seçiyordu; model çoğu zaman yanlış olanı çağırıyordu.
- **Yetenekler ChatGPT'ye kilitliydi.** Plugin tek bir platforma yazılırdı, taşıma yoktu.
- **Güvenlik modeli olgun değildi.** Plugin'lerin neye dokunabileceği, prompt injection'a nasıl direneceği belirsizdi.

Plugins programı 2024'te kapatıldı. Ama fikrin DNA'sı kaldı: model, dışarıdaki bir yeteneği seçip çağırabilmeli.

## Haziran 2023: function calling ve tool use

13 Haziran 2023'te OpenAI, GPT-4 ve GPT-3.5-turbo için `functions` parametresini yayınladı. Geliştirici modele "şu fonksiyonlarım var" diye bir liste veriyor; model hangisini, hangi argümanlarla çağıracağını yapılandırılmış JSON olarak döndürüyordu. Anthropic aynı kalıbı sonra `tool use` ile kendi API'sine ekledi.

Standardize edilen şey küçük ama temeldi: model tool'u doğrudan çalıştırmıyor; sadece "şunu çağır" diyor, asıl çalıştırmayı agent çerçevesi yapıyor. Bugün her agent framework'ünün kalbinde duran kalıp budur.

```python
# 2023: function calling — modelin "şu tool'u çağır" demesi
tools = [
    {
        "name": "get_weather",
        "description": "Get the current weather for a city.",
        "parameters": {
            "type": "object",
            "properties": {"city": {"type": "string"}},
            "required": ["city"],
        },
    }
]
response = client.messages.create(
    model="claude-sonnet-4-5",
    tools=tools,
    messages=[{"role": "user", "content": "Berlin hava durumu nasıl?"}],
)
```

Plugins "yetenekleri kim seçecek" sorununu tam çözememişti; function calling bir adım attı: model artık bir araç kataloğunu okuyup hangisinin uygun olduğunu kendisi söyleyebiliyordu. Skills'in mantığı — agent'a paket gösteriyorsun, gerektiğinde kendisi çağırıyor — burada filizleniyor.

## Kasım 2023: Custom GPTs

6 Kasım 2023'teki ilk OpenAI DevDay'inde Custom GPTs tanıtıldı. Skills'in en yakın akrabası budur. Bir GPT yazarken üç şey veriyordun:

- **Instructions:** modelin nasıl davranacağını anlatan uzun bir prompt.
- **Actions:** dış API'ye bağlanan OpenAPI şemaları (Plugins'in halefi).
- **Knowledge files:** yüklenebilen referans dosyaları.

Fikir net: bir alana özelleşmiş asistanı paketleyip paylaşabiliyorsun. Skills'in problem tanımı buraya çok yakın. Ama GPTs'in iki yapısal sınırı vardı: yalnızca ChatGPT arayüzünde çalışırdı; API'de ya da başka bir agent'ta aynı paketi açmak mümkün değildi. Ve filesystem'de oturmuyordu — git ile versiyonlamak, code review'dan geçirmek, başka bir çerçeveye taşımak işin doğal akışında değildi. GPT, OpenAI sunucusunda kapalı bir nesneydi.

GPTs Skills'in selefi: aynı problemi çözmeye çalıştı, paket formatını platforma kilitledi.

## Kasım 2024: Model Context Protocol

Kasım 2024'te Anthropic Model Context Protocol'ü (MCP) duyurdu. MCP doğrudan Skills'in selefi değil, kardeşi. Skills "agent'a bir yetenek paketi nasıl verilir"e; MCP ise "agent dış sistemlere (Slack, GitHub, Postgres) nasıl standart protokolle bağlanır"a cevap arıyor. JSON-RPC üzerinde çalışan, Language Server Protocol'den ilham alan bir standart; sonradan OpenAI ve Google da destekledi.

MCP'nin önemi, ekosistemin "her tool için her agent'a ayrı entegrasyon yazmak" derdinden kurtulmasıydı — N×M entegrasyon problemi. Skills bu boşluğu doldurmaz; tamamlar. Skills *talimatları* taşır, MCP *bağlantıları*.

## Ekim 2025: Agent Skills

16 Ekim 2025'te Anthropic Agent Skills'i resmi olarak duyurdu. Yapı, yıllarca biriken derslerin sentezi:

- **Filesystem-based.** Skill, içinde `SKILL.md` olan bir klasördür. Düz dosyalar; git ile versiyonlanır, code review'dan geçer.
- **YAML frontmatter + markdown gövde.** Metadata her zaman yüklü; gövde sadece ihtiyaç olunca okunuyor. Buna **progressive disclosure** deniyor: üç katman — her zaman görünen description, ihtiyaç olunca okunan `SKILL.md`, gerekirse çağrılan ek dosyalar ve script'ler.
- **Platforma kilitli değil.** Aynı klasör Claude Code'da, Claude API'sinde, Claude.ai'da çalışıyor.
- **Pre-built örnekler.** Anthropic `pdf`, `xlsx`, `docx`, `pptx` skill'leriyle başladı.

```markdown
---
name: weather-report
description: Get current weather and produce a short markdown report. Use when the user mentions weather, forecast, or temperature.
---

# Weather Report

Hava durumu raporu üretmek için:

1. Kullanıcının verdiği şehir adını al.
2. `scripts/fetch_weather.py` script'ini çalıştır.
3. Çıktıyı kısa bir markdown blokuna dök.
```

GPTs ile farkı tek cümlede: GPTs ChatGPT içinde kapalı bir paketti; Skills filesystem'de açık, taşınabilir, versiyonlanabilir. Yetenek artık platforma değil, sana ait.

## 2025-2026: açık standart ve sektörel yayılım

Hikâye 2025 sonunda iki adımla hızlandı. 18 Aralık 2025'te Anthropic, Skills'i `agentskills.io` üzerinden açık standarda taşıdı; Microsoft, OpenAI, Atlassian, Figma, Cursor, GitHub, Canva, Stripe, Notion ve Zapier ilk benimseyenler arasında. Şubat 2026'da OpenAI, Responses API'ye `shell` tool'unu ve `skill_reference` mekanizmasını ekledi — aynı SKILL.md formatı GPT-5.5 üzerinde çalışıyor.

İlk defa bir yetenek formatı tek bir sağlayıcının elinde değil. 2023 Plugins'inden 2025 sonu açık standardına geçen yol şunu söylüyor: yetenek paketleme problemine herkesin çözümü gitgide aynı şekle yakınsadı.

## Sırada: skill, prompt, tool, MCP, RAG

Skills'in nereden geldiğini anladığına göre kafanda yan yana duran birkaç kavram olabilir. Prompt'tan farkı ne? Tool'la ilişkisi ne? MCP ne işe yarıyor? RAG yerine Skills mi kullanmalıyım? Bir sonraki derste hepsini tek tabloya oturtacağım — her birinin yeri var, birbirini tamamlıyorlar.
