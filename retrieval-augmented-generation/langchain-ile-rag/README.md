# LangChain ile RAG

Vanilla Python ile RAG'ı anladık. Şimdi LangChain ile aynı sistemi nasıl daha az kodla, daha modüler şekilde kurabileceğimi gösteriyorum.

## LangChain RAG Bileşenleri

LangChain'in gücü soyutlamaları net tutmasından geliyor. Her bileşenin tek bir sorumluluğu var ve birbirinin yerine geçebiliyor:

**`DocumentLoader` (belge yükleyici):** Dosya sistemi, web, PDF, veritabanı — nereden gelirse gelsin belgeleri standart bir formata dönüştürür. `TextLoader`, `PyPDFLoader`, `WebBaseLoader` gibi onlarca hazır implementasyonu var.

**`TextSplitter` (metin bölücü):** Chunking mantığını kapsar. `RecursiveCharacterTextSplitter` varsayılan tercih; paragraf, cümle ve kelime sınırlarına saygı göstererek böler. Önceki derste gördüğümüz sorunların çoğunu bu çözer.

**`VectorStore` (vektör depolama):** Chroma, Pinecone, Weaviate, FAISS — hepsi aynı interface üzerinden kullanılır. Birini diğeriyle değiştirmek tek satır değişiklik.

**`Retriever` (çekici):** `VectorStore`'u sorgulama arayüzüne dönüştürür. `as_retriever()` ile bir satırda elde edilir; daha karmaşık retrieval stratejileri için ayrı sınıflar var.

**`Chain` (zincir):** Adımları birbirine bağlar. LangChain Expression Language (LCEL) bu bağlamayı boru hattı sözdizimi (`|`) ile ifade etmeni sağlar.

## LCEL ile Tam RAG Chain

Vanilla Python'daki tüm adımları çok daha az kodla yazıyorum:

```python
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_chroma import Chroma
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough

# Yükle ve böl
loader = TextLoader("belge.txt", encoding="utf-8")
docs = loader.load()
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunklar = splitter.split_documents(docs)

# İndeksle
vectorstore = Chroma.from_documents(chunklar, OpenAIEmbeddings())
retriever = vectorstore.as_retriever(search_kwargs={"k": 3})

# Chain kur
prompt = ChatPromptTemplate.from_template(
    "Bağlam:\n{context}\n\nSoru: {question}\n\nYalnızca bağlamı kullan."
)
llm = ChatOpenAI(model="gpt-4o-mini")

chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | llm
)

print(chain.invoke("RAG nedir?").content)
```

`chunk_overlap=50` dikkat et — bir önceki derste bu parametreyi atlamıştım. Chunk sınırlarında bağlamın kopmaması için örtüşme bırakmak iyi pratik. `RunnablePassthrough()` kullanıcı sorusunu değiştirmeden prompt'a iletir. LCEL'de her `|` bir adımın çıktısını bir sonrakine bağlar; bu senkron veya asenkron çalışabilir, streaming destekler.

## Retriever Tipleri

LangChain'in güzelliği şu: retriever interface'ini değiştirirsen chain'in geri kalanına dokunmana gerek yok.

**`VectorStoreRetriever`:** Standart cosine benzerlik araması. `vectorstore.as_retriever()` bunu döndürür. Hızlı ve çoğu durum için yeterli.

**`MultiQueryRetriever`:** Tek bir soruyu otomatik olarak birden fazla sorgu varyantına genişletir, her biri için ayrı arama yapar ve sonuçları birleştirir. Kullanıcı sorgusu belirsiz veya kısa olduğunda geri çağırma (recall) oranını artırır.

```python
from langchain.retrievers import MultiQueryRetriever

multi_retriever = MultiQueryRetriever.from_llm(
    retriever=vectorstore.as_retriever(),
    llm=llm
)
```

**`ContextualCompressionRetriever`:** Alınan chunk'ları LLM'e özetletir veya soruyla ilgisiz kısımlarını çıkarır. Bağlam penceresini verimli kullanmak için iyi; ama her chunk için ek LLM çağrısı yapar, maliyeti artar.

Hepsini aynı `chain` tanımında kullanabilirsin — `retriever` değişkenini güncelliyorsun, başka hiçbir şeye dokunmuyorsun.

## LangChain'in Artı ve Eksileri

Soyutlamalar her zaman bir tradeoff (ödünleşme) içerir. LangChain'i kullanırken neyi kazandığımı ve neyi feda ettiğimi açıkça bilmek istiyorum.

**Artılar:**

Çok az boilerplate yazıyorum. Vanilla Python'da elli satır olan kod burada on beş satıra iniyor. Embedding model veya vektör DB değiştirmek tek satır. Geniş ekosistem: yüzlerce `DocumentLoader`, onlarca `VectorStore`, topluluk katkıları aktif.

LCEL'in streaming desteği kutudan çıkıyor — chain'i `.stream()` ile çağırırsan token token çıktı alırsın, `.ainvoke()` ile async çalışır.

**Eksiler:**

Soyutlama katmanı debug'ı zorlaştırır. Bir şey yanlış gittiğinde "retriever mi sorunlu, prompt mu, chain binding mı?" sorusu cevaplanması zor olabilir. Hata mesajları bazen soyutlamanın derinliklerinden gelen stack trace'lerle belirsizleşir.

Versiyon uyumsuzlukları tarihsel olarak sorun oldu: `langchain`, `langchain-community`, `langchain-core` paketleri birbirinden ayrıldı ve eski kod bozulabildi. `pip install langchain` artık temel paketi kuruyor ama loader'lar ve vector store'lar ayrı paketlerde.

LangSmith (LangChain'in trace (iz) aracı) bu debug sorununu önemli ölçüde hafifletir. Her chain çağrısı için tam trace, token sayısı, gecikme — hepsini görebilirsin. Ciddiye aldığın bir projede LangSmith entegrasyonu eklemeyi öneririm.

LangChain'i gördük. RAG'a özelleşmiş LlamaIndex nasıl farklılaşıyor?
