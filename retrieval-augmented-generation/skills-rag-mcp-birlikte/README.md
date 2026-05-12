# Skills, RAG ve MCP Birlikte

Bu kursun son dersi. RAG'ı başından sonuna öğrendik. Şimdi RAG'ı diğer iki önemli katmanla — Agent Skills ve MCP — nasıl birlikte kullanacağını anlatıyorum.

## Üç Katman, Üç Farklı İş

Önce her katmanın ne yaptığını net olarak ayırt ediyorum:

**Skills**: Agent'ın nasıl davranacağını, hangi iş akışını izleyeceğini, hangi üslubu kullanacağını belirler. Talimatları taşır. "Müşteriye her zaman şu formatta yanıt ver", "önce şunu kontrol et, sonra şunu yap", "şu durumda şöyle davran" gibi kural ve prosedürlerin yaşadığı yer burası.

**RAG**: Büyük bilgi tabanından dinamik olarak alakalı bilgi getirir. Bilgiyi taşır. Binlerce sayfalık doküman arşivini embedding'e dönüştürüp sorgu anında en alakalı parçaları çekme işini RAG yapıyor.

**MCP (Model Context Protocol)**: Dış sistemlere — Slack, GitHub, Jira, Postgres — standart protokolle bağlanır. Bağlantıyı taşır. Gerçek zamanlı, canlı veriye erişim için kapıyı açan katman bu.

## Neden Birlikte?

Her katmanın tek başına eksik kaldığı nokta var.

Skills tek başına: agent nasıl davranacağını bilir ama şirketin 50.000 sayfalık teknik dokümantasyonuna erişemez. Kuralları var, bilgisi yok.

RAG tek başına: bilgiyi getirebilir ama agent hangi iş akışını izleyeceğini, sonucu nasıl formatlayacağını, hangi durumda ne yapacağını bilmez. Bilgisi var, kuralı yok.

MCP tek başına: Jira'daki açık ticket'ları çekebilir, GitHub'daki son commit'leri getirebilir ama bu verileri nasıl yorumlayacağını, hangi bağlamla birleştireceğini, kullanıcıya nasıl sunacağını bilmez. Bağlantısı var, ne yapacağı yok.

Üçü birlikte: tam kapsamlı bir agent sistemi. Skills agent'a ne yapacağını söylüyor, RAG statik bilgi tabanını getiriyor, MCP canlı dış sisteme bağlanıyor. Bu üç katman birbirini tamamlıyor.

## Örnek Mimari: Şirket Asistanı

Somut bir örnek üzerinden gösteriyorum. Bir şirket iç asistanı düşün:

```
Kullanıcı sorusu
      │
      ▼
Agent
├── Skills: Şirket tonu, iş akışı kuralları, raporlama şablonu
│
├── RAG: Şirket politikaları, teknik dokümantasyon, FAQ
│        (500k sayfa → semantik arama → alakalı 5 chunk)
│
└── MCP: Jira (güncel ticket'lar), Slack (son mesajlar), Google Drive
│
      ▼
Birleşik yanıt
```

Kod düzeyinde şöyle görünür: bir LangChain chain içinde retriever (RAG) ve bir MCP tool aynı agent'a bağlanır:

```python
from langchain_openai import ChatOpenAI
from langchain.agents import AgentExecutor, create_tool_calling_agent
from langchain_core.prompts import ChatPromptTemplate
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

# RAG — bilgi katmanı
vectorstore = Chroma(persist_directory="./sirket_db", embedding_function=OpenAIEmbeddings())
rag_tool = vectorstore.as_retriever(search_kwargs={"k": 3}).as_tool(
    name="sirket_belgelerinde_ara",
    description="Şirket politikaları ve teknik dokümantasyondan bilgi getirir."
)

# MCP — bağlantı katmanı (örnek: Jira)
# mcp_tool = MCPClient("jira-server").as_tool(...)  # gerçek MCP entegrasyonu

llm = ChatOpenAI(model="gpt-4o-mini")
prompt = ChatPromptTemplate.from_messages([
    ("system", "Sen bir şirket asistanısın. Belgeleri ve sistemleri kullan."),
    ("human", "{input}"),
    ("placeholder", "{agent_scratchpad}"),
])

agent = create_tool_calling_agent(llm, [rag_tool], prompt)
agent_executor = AgentExecutor(agent=agent, tools=[rag_tool])
yanit = agent_executor.invoke({"input": "İzin politikamız nedir?"})
print(yanit["output"])
```

Kullanıcı "Bu özelliğin geliştirme süreci nasıl ilerliyor ve ilgili teknik belge var mı?" diye soruyor. Skills agent'a şirketin raporlama formatını ve iletişim tonunu söylüyor. RAG teknik dokümantasyon arşivinden ilgili belgeyi getiriyor. MCP Jira'dan o özelliğe ait açık ticket'ların güncel durumunu çekiyor. Agent üçünü birleştirerek tutarlı ve eksiksiz bir yanıt üretiyor.

## Seçim Kılavuzu

| İhtiyaç | Katman |
|---------|--------|
| Agent'ın üslubu ve iş akışı | Skills |
| 50k sayfalık PDF arşivi | RAG |
| Jira'dan güncel ticket | MCP |
| Gerçek zamanlı API verisi | MCP |
| Şirket yazım standardı | Skills |
| Sık güncellenen bilgi tabanı | RAG |

Karar verirken şu soruları soruyorum: Bu bilgi zaman içinde değişiyor mu ve saatlik güncelleme mi gerektiriyor? Cevap evetse MCP. Büyük ama görece statik bir doküman arşivi mi? RAG. Agent'ın davranış biçimini ve kural setini mi tanımlıyorum? Skills.

## Başlangıç Önerisi

Her üç katmanı aynı anda kurmaya çalışma.

Tek katmanla başla. Çoğu senaryo için önce RAG + Skills yeterli. Şirketteki doküman arşivini RAG'a aktar, agent'ın davranış kurallarını Skills olarak tanımla. Bu ikili kombinasyon kurumsal ihtiyaçların büyük çoğunluğunu karşılıyor.

MCP'yi yalnızca gerçek zamanlı dış sistem erişimi kesin olarak gerektiğinde ekle. "Jira'daki anlık verilere bakılsın" gibi net bir gereksinim yoksa MCP karmaşıklık katıyor ama değer katmıyor.

Karmaşıklığı kademe kademe artır. Önce çalışan basit sistemi kur, ölç, eksikliği gözlemle, sonra bir katman ekle. Baştan her üçünü birden entegre etmeye çalışmak hata ayıklamayı çok zorlaştırıyor — bir şey yanlış gittiğinde sorunun hangi katmanda olduğunu bulmak güçleşiyor.

RAG eğitiminin sonuna geldin. Temellerden production sistemine, klasik pipeline'dan Agentic ve Graph RAG'a kadar eksiksiz bir yolculuk yaptık. Artık gerçek bir RAG sistemi kurabilirsin.
