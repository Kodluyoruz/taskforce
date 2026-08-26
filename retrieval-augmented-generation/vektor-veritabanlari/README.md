# Vektör Veritabanları

Embedding ürettik. Bu vektörleri bir yere yazmamız ve sonra hızla sorgulamamız gerekiyor. Normal bir veritabanı bu iş için neden yetmiyor ve hangi araçlar var — bu derste bunlara bakıyorum.

## Neden Normal DB Yetmez?

Bir PostgreSQL tablosunda `WHERE topic = 'RAG'` yazarak ilgili satırları bulabilirsin. Bu tam eşleşme araması — verimli, indeksli, ölçekli çalışır. Ama "RAG sistemlerinin belge indeksleme mekanizması hakkında ne var?" gibi bir soruyu SQL ile cevaplayamazsın. "RAG" kelimesini içermeyen ama tam olarak o konuyu anlatan bir paragraf SQL araması için görünmez.

Vektör araması bu boşluğu kapatıyor: sorguyu vektöre çevirip veritabanındaki tüm vektörler arasında geometrik yakınlığı arıyor. Sorun şu: kaba kuvvetle her vektörü her sorguyla karşılaştırmak — buna exact search (tam arama) deniyor — milyon vektör için çok yavaş.

Vektör veritabanlarının çözdüğü problem burada başlıyor. HNSW (Hierarchical Navigable Small World) gibi approximate nearest neighbor (yaklaşık en yakın komşu) index yapıları, %99 doğrulukta sonuçları çok daha hızlı veriyor. Bir kütüphanedeki her kitabı tek tek okumak yerine konu indeksini kullanan kütüphaneci gibi — hep aynı raftaki gruba bakıyor.

## FAISS

FAISS (Facebook AI Similarity Search), Meta'nın 2017'de açık kaynak olarak yayımladığı vektör arama kütüphanesi. Bir veritabanı değil, bir kütüphane — kalıcı depolama yoktur, vektörler varsayılan olarak bellekte yaşar. Uygulaman kapandığında index gider; kaydetmek istersen dosyaya kendin yazman gerekiyor.

Bu sınırlama aynı zamanda gücü: tamamen bellekte çalıştığı için son derece hızlı. Milyarlarca vektörü destekleyen GPU-optimize versiyonları var. Araştırma ortamlarında, embedding kalite testlerinde ve özel performans gerektiren sistemlerde standart seçenek.

```python
import faiss
import numpy as np

boyut = 1536
index = faiss.IndexFlatL2(boyut)

# Vektörleri ekle
vektorler = np.random.rand(100, boyut).astype('float32')
index.add(vektorler)

# Sorgula
sorgu = np.random.rand(1, boyut).astype('float32')
mesafeler, indeksler = index.search(sorgu, k=5)
print(indeksler)  # en yakın 5 vektörün indeksi
```

`IndexFlatL2` tam arama — doğruluktan ödün vermiyor ama büyük koleksiyonlarda yavaş. Ölçek büyüyünce daha hızlı yaklaşık algoritmaya geçmek gerekiyor:

```python
# Büyük ölçek için HNSW index
index_hnsw = faiss.IndexHNSWFlat(boyut, 32)  # 32: bağlantı sayısı
index_hnsw.add(vektorler)

mesafeler, indeksler = index_hnsw.search(sorgu, k=5)
```

Index'i dosyaya kaydetmek ve geri yüklemek de basit:

```python
faiss.write_index(index, "belgeler.index")
index_yuklu = faiss.read_index("belgeler.index")
```

## Chroma

Chroma, Python ekosisteminde yerel geliştirme için tasarlanmış açık kaynak vektör veritabanı. FAISS'in aksine disk persistansı varsayılan olarak var — uygulamayı kapatıp açsan vektörler duruyor. Metadata desteği de geliyor: her vektöre ek alanlar (kaynak, tarih, departman) ekleyebiliyorsun ve bunlara göre filtreleyebiliyorsun.

Geliştirme sırasında hızlıca kurmak, indekslemek ve sorgulamak için ideal. Docker gerektirmiyor, uzak sunucu gerektirmiyor — Python process içinde çalışıyor.

```python
import chromadb

client = chromadb.PersistentClient(path="./chroma_db")
collection = client.get_or_create_collection("belgeler")

collection.add(
    documents=["RAG güçlü bir tekniktir"],
    metadatas=[{"kaynak": "teknik-dokuman", "yil": 2024}],
    ids=["doc-001"]
)

results = collection.query(
    query_texts=["RAG nedir?"],
    n_results=3
)
print(results["documents"])
```

Chroma kendi içinde bir embedding modeli çağırabilir ya da kendin ürettiğin vektörleri doğrudan verebilirsin:

```python
from openai import OpenAI

openai_client = OpenAI()

def embed(text):
    return openai_client.embeddings.create(
        model="text-embedding-3-small",
        input=text
    ).data[0].embedding

# Kendi vektörlerinle çalışmak
collection.add(
    embeddings=[embed("RAG güçlü bir tekniktir")],
    documents=["RAG güçlü bir tekniktir"],
    ids=["doc-002"]
)
```

Küçük-orta ölçek üretim projeleri de Chroma ile yönetilebilir — özellikle ekibin Python ağırlıklı çalıştığı ve operasyonel yük azaltmak istediği durumlarda.

## Pinecone

Pinecone tamamen yönetilen (serverless) bir vektör veritabanı hizmeti. Kendisi çalıştırmana, güncelleme yapmanına, ölçekleme planı yapmana gerek yok — API üzerinden yazıp sorguluyor, gerisini Pinecone hallediyor.

Güçlü olduğu alanlar: büyük ölçek (yüz milyonlarca vektör), metadata filtreleme, gerçek zamanlı indeksleme. Bir indekse vektör eklediğinde milisaniyeler içinde sorgulanabilir hale geliyor — batch işlem bekletmiyor.

```python
from pinecone import Pinecone

pc = Pinecone(api_key="PINECONE_API_KEY")
index = pc.Index("belgeler")

# Vektör ekle
index.upsert(vectors=[
    {
        "id": "doc-001",
        "values": embed("RAG güçlü bir tekniktir"),
        "metadata": {"kaynak": "teknik-dokuman", "departman": "ar-ge"}
    }
])

# Metadata filtresiyle sorgula
results = index.query(
    vector=embed("RAG nedir?"),
    top_k=5,
    filter={"departman": {"$eq": "ar-ge"}}
)
```

Maliyet modeli: depolanan vektör sayısı + sorgu hacmi. Küçük projelerde ücretsiz katman yeterli; ölçek büyüdükçe maliyet hesabını dikkatli yapmak gerekiyor.

## Weaviate

Weaviate hem açık kaynak hem cloud seçeneği olan bir vektör veritabanı. Diğer araçlardan birkaç noktada ayrılıyor.

**GraphQL API:** REST yanında GraphQL ile sorgulama desteği — karmaşık filtreleme ve ilişkili obje sorguları için güçlü.

**Multimodal destek:** Metin embedding'inin yanında görüntü, ses ve video embedding'leri de saklayabiliyor. Çok modlu bir RAG sistemi kuruyorsan doğal seçenek.

**Yerleşik hybrid search:** Vektör araması ile klasik BM25 tam metin aramasını aynı anda çalıştırıp sonuçları birleştiriyor. Bu karma yaklaşım bazı kullanım durumlarında saf vektör aramasından daha iyi sonuç veriyor.

**Modül sistemi:** OpenAI, Cohere, HuggingFace embedding modellerine yerleşik entegrasyon — Weaviate belgeni alıp kendi başına vektöre çeviriyor, sen sadece metni gönderiyorsun.

Büyük kurumsal projeler, çok modlu içerik ve hibrit arama ihtiyacı olan sistemler için güçlü bir tercih.

Seçenekleri gördük. Hangisini seçmeliyiz? Artık araçları biliyorsun. Sırada seçim kılavuzu var.
