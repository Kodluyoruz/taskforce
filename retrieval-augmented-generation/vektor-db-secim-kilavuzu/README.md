# Vektör DB Seçim Kılavuzu

Dört farklı araç var. Pratikte hangisini kullanacağına nasıl karar vereceksin? Bu derste karar kriterlerini ve pratik tavsiyeleri paylaşıyorum.

## Karar Ağacı

Seçimi karmaşıklaştırmak yerine birkaç temel soruya indirgiyorum. Bu ağacı takip et:

```
Ölçek küçük mü? (< 100k vektör)
├─ Evet → Geliştirme mi?
│         ├─ Evet → Chroma (disk persistans, basit API)
│         └─ Hayır → Chroma veya Pinecone (Starter)
└─ Hayır → Altyapı yönetmek istiyor musun?
            ├─ Evet → Weaviate (self-hosted)
            └─ Hayır → Pinecone (serverless)
```

FAISS bu ağaçta nerede? Araştırma ortamı veya özel performans optimizasyonu yapıyorsan. Üretim uygulaması geliştiriyorsan FAISS ile başlamak genellikle işleri zorlaştırıyor — persistans ve metadata yönetimini sıfırdan inşa etmen gerekiyor.

## Lokal vs Yönetilen

Vektör DB seçimindeki en temel ayrım bu. İkisinin de somut tradeoff'ları var.

**Lokal (FAISS, Chroma lokal mod):**
- Veri gizliliği tam — vektörler dışarı çıkmıyor
- DevOps yükü sende — yedekleme, güncelleme, ölçekleme
- Başlangıç maliyeti sıfır, büyük ölçekte altyapı maliyeti var
- Küçük ekiplerde operasyonel yük yoğun hissedilebilir

**Yönetilen (Pinecone, Weaviate Cloud):**
- Operasyonel yük yok — sağlayıcı hallediyor
- Maliyet kullanıma göre değişiyor, tahmin edilebilir
- Büyük ölçeklerde lokal kurulumdan genellikle daha ucuz
- Veri sağlayıcı sunucularında — gizlilik gereksinimi varsa dikkat

Karar genellikle tek bir faktöre bağlı: "Veri dışarı çıkabilir mi?" Cevap hayırsa lokal kalmak zorundasın. Cevap evetse yönetilen seçeneği değerlendirmeye değer — özellikle küçük ekip, büyük ölçek kombinasyonunda.

## Metadata Filtreleme Kapasitesi

Basit bir RAG sistemi şöyle çalışıyor: sorgu vektörüne en yakın k belgeyi getir. Ama gerçek sistemler genellikle daha kısıtlı sorgular istiyor: "Yalnızca hukuk departmanının 2024'te yüklediği belgelerden ara."

Bu "vektör araması + metadata filtresi" kombinasyonu. Araçların bu konudaki kapasitesi çok farklı:

| Araç | Metadata Filtreleme |
|------|---------------------|
| FAISS | Yok — harici çözüm gerekir |
| Chroma | Basit — eşitlik ve aralık filtreleri |
| Pinecone | Güçlü — karmaşık mantıksal sorgular |
| Weaviate | Çok güçlü — GraphQL ile ilişkisel sorgular |

FAISS ile metadata filtrelemek istiyorsan vektör ID'lerini ayrı bir veritabanında saklamak ve iki sorguyu birleştirmek zorundasın. Chroma ile basit filtreleme yeterli çoğu durumda:

```python
# Chroma: basit metadata filtresi
results = collection.query(
    query_texts=["kira sözleşmesi feshi"],
    n_results=5,
    where={"departman": "hukuk", "yil": 2024}
)
```

Pinecone ile daha karmaşık sorgular mümkün:

```python
# Pinecone: mantıksal filtreleme
results = index.query(
    vector=sorgu_vektoru,
    top_k=5,
    filter={
        "$and": [
            {"departman": {"$eq": "hukuk"}},
            {"yil": {"$gte": 2023}},
            {"gizlilik_seviyesi": {"$ne": "cok-gizli"}}
        ]
    }
)
```

Kullanım senaryonu metadata filtresi gerektiriyorsa bunu seçim aşamasında netleştir. Sonradan FAISS'ten Pinecone'a geçmek tüm indeksleme pipeline'ını yeniden yazmak anlamına gelebilir.

## Migration Kolaylığı

Vektör DB seçimi kilitleyici olmamalı. Pratikte bir araçla başlayıp sonra değiştirme ihtiyacı doğuyor — başlangıçta Chroma ile geliştirip üretimde Pinecone'a geçmek yaygın bir yol.

Bu geçişi kolaylaştırmanın yolu soyutlama (abstraction). Vektör DB'ye doğrudan bağlanmak yerine kendi `VectorStore` arayüzünü yaz, altındaki implementasyonu değiştirilebilir tut:

```python
from abc import ABC, abstractmethod

class VectorStore(ABC):
    @abstractmethod
    def ekle(self, id: str, vektor: list[float], metadata: dict) -> None:
        pass

    @abstractmethod
    def sorgula(self, vektor: list[float], k: int) -> list[dict]:
        pass

class ChromaVectorStore(VectorStore):
    def __init__(self, yol: str):
        import chromadb
        self.client = chromadb.PersistentClient(path=yol)
        self.koleksiyon = self.client.get_or_create_collection("belgeler")

    def ekle(self, id, vektor, metadata):
        self.koleksiyon.add(embeddings=[vektor], ids=[id], metadatas=[metadata])

    def sorgula(self, vektor, k):
        sonuclar = self.koleksiyon.query(query_embeddings=[vektor], n_results=k)
        return sonuclar["metadatas"][0]

class PineconeVectorStore(VectorStore):
    def __init__(self, index_adi: str):
        from pinecone import Pinecone
        pc = Pinecone(api_key="PINECONE_API_KEY")
        self.index = pc.Index(index_adi)

    def ekle(self, id, vektor, metadata):
        self.index.upsert(vectors=[{"id": id, "values": vektor, "metadata": metadata}])

    def sorgula(self, vektor, k):
        sonuclar = self.index.query(vector=vektor, top_k=k, include_metadata=True)
        return [m.metadata for m in sonuclar.matches]
```

Şimdi RAG pipeline'ın her yerinde `VectorStore` tipiyle çalışıyor. Chroma'dan Pinecone'a geçmek bir satır değişiklik:

```python
# Geliştirme
store = ChromaVectorStore("./chroma_db")

# Üretim
store = PineconeVectorStore("belgeler-production")
```

LangChain ve LlamaIndex bu soyutlamayı zaten yapıyor. Kendi framework'ünü yazıyorsan aynı kalıbı uygulamak sonradan çok zaman kazandırıyor.

## Pratik Tavsiye

Yıllarca RAG sistemi kurmuş biri olarak şunu söyleyebilirim: araç seçimi çoğu zaman ikincil. Retrieval kalitesini belirleyen faktörler — chunk (parça) stratejisi, embedding modeli seçimi, reranking (yeniden sıralama) — vektör DB'den çok daha fazla etki yapıyor.

Bununla birlikte, bir çerçeve öneriyorum:

**Başlangıç:** Chroma ile başla. Lokal çalışır, disk persistansı var, Python API'si temiz. İndeksleme ve sorgulama mantığını Chroma üzerinde geliştir ve test et. 100k vektörün altında kalmak için bir nedene ihtiyacın yok — Chroma bu ölçekte rahat çalışır.

**Ölçek noktası:** Proje 100k vektörü geçiyorsa, ekip büyüyorsa ya da SLA (servis seviyesi anlaşması) gereksinimleri netleşiyorsa Pinecone veya self-hosted Weaviate'e geç. Bu geçişi planla — yukarıdaki soyutlama kalıbını baştan uygulamak geçişi kolaylaştırır.

**FAISS için:** Araştırma yapıyorsan, özel GPU optimizasyonu gerekiyorsa ya da başka bir kütüphaneyle (FAISS'in üstüne inşa edilmiş) çalışıyorsan kullan. Üretim RAG'ında başlangıç noktası olarak tavsiye etmiyorum.

**Türkçe içerik için not:** Türkçe metin içeren sistemlerde metadata filtreleme daha kritik olabiliyor — içerik dili, belge tipi, kullanıcı segmenti gibi filtreler retrieval kalitesini belirgin artırıyor. Bu durumda Pinecone veya Weaviate ile başlamayı düşün.

Altyapıyı kurduk. Şimdi en kritik kararlardan birine geliyoruz: dokümanları nasıl böleceğiz? Artık vektör DB seçim mantığını biliyorsun. Sırada chunk stratejisi var.
