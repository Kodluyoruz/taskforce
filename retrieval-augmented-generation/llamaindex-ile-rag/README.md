# LlamaIndex ile RAG

LangChain genel amaçlı bir LLM framework'ü. LlamaIndex ise RAG için özelleşmiş tasarlanmış. Bu derste LlamaIndex'in temel soyutlamalarını ve basit bir RAG pipeline'ını gösteriyorum.

## LlamaIndex'in Farkı

LlamaIndex'te her şey Node merkezli çalışır. Bu LangChain'den temel bir ayrım — LangChain belgeler ve zincirler üzerine inşa edilirken LlamaIndex veriyi Node'lara dönüştürür ve bu Node'lar arasındaki ilişkileri metadata ile taşır.

Dört temel soyutlama var:

**`Document` (belge):** Ham veri ve kaynağı. Bir PDF, bir web sayfası, bir veritabanı satırı — henüz işlenmemiş ham form.

**`Node` (düğüm):** Chunk'lanmış ve metadata eklenmiş belge parçası. İçinde kaynak belgeye referans, önceki/sonraki node bağlantıları, embedding ve özel metadata alanları bulunuyor. Parent-child ilişkileri node seviyesinde kurulabiliyor — küçük chunk'lar büyük chunk'lara bağlanabiliyor, bu küçüğü retrieve et büyüğü LLM'e gönder stratejisine kapı açıyor.

**`Index` (indeks):** Node'ların vektör DB soyutlaması. `VectorStoreIndex` en yaygın tip; ama `ListIndex`, `TreeIndex`, `KnowledgeGraphIndex` gibi alternatifler de var. Her biri farklı query stratejisine uygun.

**`QueryEngine` (sorgu motoru):** Sorgu arayüzü. Index'i `as_query_engine()` ile sorgu motoruna dönüştürürsün; girdi soru, çıktı cevap ve kaynak node'lar.

## Basit Pipeline

LangChain örneğiyle birebir karşılaştırılabilir bir pipeline kuruyorum:

```python
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader, Settings
from llama_index.llms.openai import OpenAI
from llama_index.embeddings.openai import OpenAIEmbedding

Settings.llm = OpenAI(model="gpt-4o-mini")
Settings.embed_model = OpenAIEmbedding(model="text-embedding-3-small")

belgeler = SimpleDirectoryReader("./belgeler/").load_data()
index = VectorStoreIndex.from_documents(belgeler)
query_engine = index.as_query_engine(similarity_top_k=3)

yanit = query_engine.query("RAG nedir?")
print(yanit.response)
print("\nKaynaklar:")
for node in yanit.source_nodes:
    print(f"  - Skor: {node.score:.3f} | {node.text[:80]}...")
```

`Settings` global konfigürasyon nesnesi — LLM ve embedding modelini bir kez ayarlıyorum, tüm index ve query engine'lar bunu kullanıyor. `SimpleDirectoryReader` bir dizindeki tüm desteklenen dosyaları yükler: TXT, PDF, DOCX, Markdown. Tek dosya için path doğrudan da verilebilir.

Dikkat çekici nokta: `yanit.source_nodes`. LlamaIndex her yanıtla birlikte hangi node'lardan faydalandığını, her birinin benzerlik skorunu ve metnini döndürüyor. Bu kutudan çıkan kaynak atıfı (citation) — LangChain'de bunu ayrıca yapılandırmak gerekiyor.

## Node Parsers ve Chunking

LlamaIndex'te chunking stratejisi `NodeParser` sınıfları üzerinden kontrol ediliyor:

**`SentenceSplitter` (cümle bölücü):** Cümle sınırlarına saygı gösteren bölme. `chunk_size` token cinsinden, `chunk_overlap` token cinsinden. Karakter değil token bazlı olması önemli; LLM context limitlerini daha doğru hesaplıyor.

**`SemanticSplitterNodeParser` (semantik bölücü):** Anlamsal kopuşlara göre böler. İki ardışık cümle arasındaki embedding benzerliği belirli eşiğin altına düşünce yeni chunk başlatır. Sabit boyutlu chunk'lardan daha anlamlı bölmeler üretiyor ama her cümle çifti için embedding hesapladığından indeksleme maliyeti artıyor.

```python
from llama_index.core.node_parser import SentenceSplitter

splitter = SentenceSplitter(chunk_size=512, chunk_overlap=50)
index = VectorStoreIndex.from_documents(belgeler, transformations=[splitter])
```

`Settings.text_splitter` üzerinden global da ayarlanabilir; ya da index oluştururken `transformations` parametresiyle geçilir. Her iki yol da çalışır — ikincisi daha açık.

## LangChain vs LlamaIndex

| Kriter | LangChain | LlamaIndex |
|--------|-----------|------------|
| Odak | Genel LLM framework | RAG-first |
| Node/Document modeli | Basit | Gelişmiş (parent-child, metadata) |
| Index tipleri | Sınırlı | Zengin (list, tree, graph) |
| Öğrenme eğrisi | Orta | Orta-Yüksek |
| Ekosistem genişliği | Çok geniş | Dar ama derin |

LlamaIndex'in "Orta-Yüksek" eğrisi gereksiz değil. Node parser, index tipi, query engine konfigürasyonu, retriever modu — özelleştirme noktaları çok ve bunların birbirleriyle etkileşimini anlamak zaman alıyor. Ama bu derinlik, karmaşık RAG gereksinimlerinde meyvesini veriyor.

## Hangisini Seç?

İki framework'ü birbirinin rakibi olarak değil, farklı güçlü noktalara sahip araçlar olarak düşünüyorum.

**LangChain tercih et:**

Agent'larla (otonom görev yapan LLM) birlikte çalışıyorsan LangChain'in ekosistemi çok daha olgun. Tool çağrıları, multi-agent orchestration (çoklu ajan düzenleme), memory yönetimi — LangChain bu konularda derin entegrasyona sahip. Genel LLM işleri yapıyorsan ve RAG sisteminin yalnızca bir parça olduğu durumlarda tek bir framework'te kalmak mantıklı.

**LlamaIndex tercih et:**

RAG ağır bir uygulamadaysan — birden fazla belge koleksiyonu, karmaşık chunking stratejileri, kaynak atıfı zorunluysa, parent-child node ilişkileri gerekiyorsa — LlamaIndex seni daha az kod yazarak daha ileri götürür. Özellikle `KnowledgeGraphIndex` veya `RouterQueryEngine` (farklı soru tiplerine farklı index'leri yönlendirme) gibi gelişmiş özellikler gerektiğinde LlamaIndex'in bu alana özel tasarımı fark yaratıyor.

İki framework aynı projede bir arada kullanılabilir; LlamaIndex retrieval yapar, LangChain orchestration sağlar. Bu nadir değil, özellikle büyük projelerde.

Pipeline kurulumunu bitirdik. Şimdi en önemli soru: bu sistem ne kadar iyi çalışıyor?
