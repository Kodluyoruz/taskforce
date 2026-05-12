# Üçüncü Parti Framework'lerle Skills

Skills başlangıçta Anthropic'in Claude ürünlerinde olgunlaşan bir desen olarak çıktı, sonra OpenAI Responses API'ye girdi ve Ekim 2025'te agentskills.io açık standardı yayınlandığında ekosistem büyük bir ivme kazandı. Mayıs 2026 itibarıyla agentskills.io'da 30'dan fazla platform listelenmiş: Cursor, VS Code + GitHub Copilot, Gemini CLI, Junie, Amp, OpenHands, Goose, Letta, Roo Code, OpenAI Codex, Databricks, Snowflake ve daha fazlası aynı `SKILL.md` formatını native olarak okuyor. Bu araçlarda skill kullanmak için genellikle doğru klasöre `SKILL.md`'yi bırakmak ya da `npx skills add <owner/repo>` komutunu çalıştırmak yeterli.

Bu derste ise farklı bir senaryoya bakıyoruz: kendi agent pipeline'ın için LangChain, LlamaIndex, AutoGen, CrewAI gibi vendor-agnostic framework kullanıyorsan aynı skill paketini bu runtime'lara nasıl yedirirsin? Bu framework'lerin çoğunda henüz native bir skill loader yok; işi `wrapper` koduyla kendin kuruyorsun. Ama `SKILL.md` açık ve okunabilir olduğundan bu adapter'ı yazmak 50–100 satırlık Python kodu meselesi.

## Genel durum: açık standart, dağınık runtime

agentskills.io spec'i bir paketin nasıl görüneceğini sabitliyor: bir klasör, bir `SKILL.md`, opsiyonel `scripts/` ve `resources/`. Bu paketi bir agent'ın eline nasıl tutuşturacağın ise runtime kararı. Anthropic API'de `container.skills`, Responses API'de `tools[].environment.skills` var; Cursor, VS Code gibi araçlarda `.skills/` klasörü doğrudan taranıyor. Vendor-agnostic framework'lerde ise standart bir alan yok; her biri kendi tool sistemine yamalı bir adapter getiriyor. Aşağıdaki dört framework, bu kategorinin en çok kullanılan örnekleri.

## LangChain

LangChain, 2025 sonunda `langchain-anthropic` ve `langchain-openai` paketlerine native bir skill loader yerleştirdi. Çağrı yüzeyi tek satır: `load_skill("./csv-summary")` bir `Tool` döndürüyor, sen de bu tool'u agent'ın `tools=[]` listesine ekliyorsun. Loader, `SKILL.md`'nin frontmatter'ından `name` ve `description` çekiyor, body'yi tool'un `description`'ına ya da `system` prompt'una iliştiriyor. `scripts/` klasörü `BashTool` aracılığıyla çağrılabilir hale geliyor.

Native loader'ın olmadığı eski sürümlerde manuel yol şu: `SKILL.md` gövdesini agent'ın system prompt'una inject et, `scripts/` içindeki dosyaları LangChain'in mevcut `Tool` sınıflarına bağla. LangChain Expression Language (LCEL) ile bir Runnable zinciri içinde de aynı kalıp çalışıyor — skill'i context'in başına koyup retrieval veya başka bir tool ile birleştirebilirsin.

## LlamaIndex

LlamaIndex'in en güçlü yönü retrieval; agentic pattern'ları da bu eksen üzerine kuruyor. 2025 ortasından itibaren docs'ta görünen `agent.from_skill_directory()` yardımcısı, bir klasördeki birden fazla `SKILL.md`'yi tek seferde yükleyip her birini ayrı bir tool olarak tanıtıyor. LlamaIndex'in agentic patterns sayfasında verilen örneklerin çoğu Skills + RAG bileşimini gösteriyor: skill prosedürel bilgi taşıyor ("Q4 raporu şu adımlarla yazılır"), RAG ise veri retrieval'ı yapıyor ("Q4'ün ham satış verisi şudur"). Bu ikisi rakip değil, tamamlayıcı katmanlar — `SKILL.md` model'e "ne yapacağını", retrieval ise "neyle yapacağını" söylüyor.

## AutoGen (Microsoft)

AutoGen multi-agent senaryolarına odaklanmış bir framework. Burada Skills'in doğal yeri her agent'a farklı bir skill seti tutuşturmak: planlayıcı agent'a `project-plan` skill'i, kodlayıcı agent'a `code-review-checklist` skill'i, raportör agent'a `weekly-report` skill'i gibi. AutoGen'in `system_message` alanı tek bir string istediğinden, topluluk repo'larında `SKILL.md`'yi parse edip `system_message`'a iliştiren wrapper'lar yaygın. `microsoft/autogen` repo'sundaki `samples/` klasöründe basit bir skill loader örneği var; aynı kalıp `AssistantAgent` ve `UserProxyAgent` ikilisi için de geçerli. Multi-agent akışlarında bir agent'ın `SKILL.md`'sini handoff sırasında diğerine geçirmek de mümkün — skill burada bir tür "uzmanlık belgesi" gibi davranıyor.

## CrewAI

CrewAI son bir yılda production deployment'larda öne çıkan bir framework. "Crew + Role + Task" üçlüsü üzerine kurulu; her `Role`'ün kendi tool seti ve kendi davranış profili var. Skills bu modele iyi oturuyor: bir role tanımına `SKILL.md` ekleyince model "ben şu rolün uzmanıyım" mesajını alıyor, scripts ise role'ün araç çantasına giriyor. CrewAI'nin kendi `SKILL.md` yükleyicisi henüz native değil ama topluluk repo'larında (`crewai-skills-adapter` gibi paketler) hazır wrapper'lar dolaşıyor. Spec uyumu yaygınlaştıkça bu yamaların upstream'e taşınması muhtemel.

## Custom wrapper yazma

Framework'ün native desteği yoksa kendi wrapper'ını yazmak basit. Üç adımlık bir reçete yeterli: `SKILL.md`'yi parse et (frontmatter + body), body'yi agent'ın system prompt'una inject et, `scripts/` içindeki dosyaları subprocess ile çağrılabilir hale getir. 50-100 satırlık Python kodu çoğu framework için işi bitiriyor. Aşağıdaki örnek LangChain için ama mantık her framework'te aynı:

```python
from langchain.agents import AgentExecutor, create_react_agent
from langchain_anthropic import ChatAnthropic
from langchain.tools import Tool
import subprocess
from pathlib import Path

def load_skill_as_tool(skill_dir: Path) -> Tool:
    """SKILL.md + scripts/ klasörünü LangChain Tool'una çevir."""
    skill_md = (skill_dir / "SKILL.md").read_text()

    def run(query: str) -> str:
        result = subprocess.run(
            ["python", str(skill_dir / "scripts" / "main.py"), query],
            capture_output=True, text=True,
        )
        return result.stdout

    # Gerçek implementasyonda frontmatter'dan name/description okunur.
    return Tool(
        name="weekly-report",
        description="Generate weekly report from raw metrics.",
        func=run,
    )

agent_tool = load_skill_as_tool(Path("./skills/weekly-report"))
llm = ChatAnthropic(model="claude-sonnet-4-6")
agent = create_react_agent(llm, [agent_tool], prompt=...)
executor = AgentExecutor(agent=agent, tools=[agent_tool])
result = executor.invoke({"input": "Bu haftanın raporunu hazırla"})
```

Bu iskelet AutoGen'de `register_function`, CrewAI'de `Tool` sınıfı, LlamaIndex'te `FunctionTool` ile birebir aynı şekilde kuruluyor. Tek değişen, framework'ün tool kaydını nasıl beklediği.

## Hangi framework ne zaman?

Seçim çoğu zaman provider ve mimari karmaşıklığıyla belirleniyor:

- Tek kaynak Anthropic Claude → Anthropic Agent SDK + Claude API. Skill desteği native, runtime tek elden.
- Tek kaynak OpenAI → OpenAI Agents SDK + Responses API. Shell tool + `skill_reference` kombinasyonu zaten yerleşik.
- Çoklu provider veya vendor-agnostic katman → LangChain veya LlamaIndex. Aynı kodla Claude, GPT, Gemini ve open-weight modeller arasında geçiş yapabilmek için.
- Multi-agent karmaşık iş akışı → AutoGen veya CrewAI. Birden fazla `role`'ün koordinasyonu, handoff'lar, paralel görevler için.
- Tam kontrol istiyorsan → custom wrapper. Spec açık olduğu için framework bağımlılığı olmadan da iyi çalışıyor.

Pratikte ekiplerin büyük kısmı hibrit gidiyor: production agent'ı LangChain üzerinde tutuyor ama Claude'a özgü gelişmiş özellikler (computer use, extended thinking) için doğrudan Anthropic SDK'ya iniyor.

## Topluluk durumu

Skills'in açık standart olması, hem native desteğin hem framework adaptörlerinin hızlı çoğalmasını sağladı. Mayıs 2026 itibarıyla agentskills.io'da 30'dan fazla platform listeleniyor; büyük framework'lerin çoğunda spec uyumlu wrapper'lar ya upstream'e, ya ayrı paket olarak yayınlanmış durumda.

Keşif ve dağıtım için [skills.sh](https://skills.sh/) (Vercel) öne çıkan marketplace. `npx skills add <owner/repo>` komutu bir skill'i otomatik olarak agent'ının beklediği klasöre yerleştiriyor; 91.000+ kurulumla aktif bir ekosistem.

## Sırada ne var?

Aynı skill paketinin farklı framework'lerin runtime'ında nasıl yaşadığını gördük. Native loader'lar olsun, custom wrapper'lar olsun, hepsinin altında aynı agentskills.io paket yapısı var. Bir sonraki derste bu paketin kendisine yakından bakıyoruz: skill nasıl zip'lenir, hangi limitler içinde yüklenebilir, multipart ile zip arasında ne fark var, hosted katalog yüklemelerinde versiyon ve dosya boyutu sınırları nereye düşer. **Skill paketleme, yükleme ve limitler** dersinde tek tek açıyoruz.
