# Embedding Modelleri

Her embedding modeli aynı kalitede çalışmıyor. Model seçimi retrieval kalitesini doğrudan etkiliyor. Bu derste en yaygın modelleri karşılaştırıyorum — hangisini ne zaman kullanacağını net bir şekilde gösteriyorum.

## OpenAI Modelleri

OpenAI'nin `text-embedding-3` serisi 2024 başında yayımlandı ve önceki `ada-002`'nin yerini aldı. İki model var:

**text-embedding-3-small:** 1536 boyutlu vektör üretiyor. Fiyatı 1 milyon token için 0.02 USD — serinin en ekonomik seçeneği. Kalitesi MTEB (Massive Text Embedding Benchmark) sıralamalarında açık kaynak alternatiflerin büyük çoğunluğunun üzerinde. Prototipten küçük-orta ölçeğe kadar güçlü bir varsayılan.

**text-embedding-3-large:** 3072 boyutlu vektör üretiyor. Fiyatı 1 milyon token için 0.13 USD — `small`ın yaklaşık 6 katı. MTEB'de `small`ın belirgin üzerinde, özellikle çok dilli ve uzmanlık gerektiren alanlarda. Kalite önceliğin, maliyet ikincil planındaysa bu model.

MTEB nedir? Hugging Face'in yönettiği, 50'nin üzerinde görev ve onlarca dili kapsayan standart bir kıyaslama seti. Embedding modellerini tutarlı biçimde değerlendirmenin bugünkü standardı. Bir model "MTEB'de güçlü" diyorsam, geniş bir görev ve dil yelpazesinde ölçülmüş bir performanstan söz ediyorum.

```python
from openai import OpenAI

client = OpenAI()

# Ekonomik seçenek
kucuk_vektor = client.embeddings.create(
    model="text-embedding-3-small",
    input="Vergi beyannamesi nasıl doldurulur?"
).data[0].embedding

# Kalite öncelikli seçenek
buyuk_vektor = client.embeddings.create(
    model="text-embedding-3-large",
    input="Vergi beyannamesi nasıl doldurulur?"
).data[0].embedding

print(len(kucuk_vektor))  # 1536
print(len(buyuk_vektor))  # 3072
```

## Sentence Transformers (Açık Kaynak)

Sentence Transformers, Hugging Face üzerinde barındırılan açık kaynak embedding modellerinin ekosistemi. Kurulumu `pip install sentence-transformers`, sonrası lokal çalışıyor — ne API çağrısı var ne de ağ bağımlılığı. Gizli veriyi dışarı göndermek istemiyorsan bu ekosistem en önemli alternatifindir.

**all-MiniLM-L6-v2:** 384 boyut, son derece hızlı, son derece hafif. Bellek ayak izi küçük, bir dizüstü bilgisayarda bile rahat çalışıyor. İngilizce ağırlıklı. Geliştirme ortamında hızlıca denemek, CI/CD'de otomatik test çalıştırmak ya da hız kritik bağlamlarda üretim için iyi bir seçenek.

**multilingual-e5-large:** 1024 boyut, Türkçe dahil çok dilli destek. intfloat tarafından geliştirilen (Microsoft Research dahil araştırmacıların katkısıyla) E5 (EmbEddings from bidirEctional Encoder rEpresentations) serisinin büyük modeli. MTEB çok dilli sıralamasında güçlü. Türkçe belge deposu üzerinde çalışıyorsan ve lokal kalmak istiyorsan bu model güçlü bir tercih.

```python
from sentence_transformers import SentenceTransformer

# Hafif, hızlı — İngilizce
model_kucuk = SentenceTransformer("all-MiniLM-L6-v2")

# Çok dilli, Türkçe dahil
model_cok_dilli = SentenceTransformer("intfloat/multilingual-e5-large")

cumle = "RAG sistemi belgeleri nasıl indeksler?"
vektor = model_cok_dilli.encode(cumle)
print(f"Boyut: {len(vektor)}")  # 1024
```

Lokal çalışmanın bir avantajı daha var: latency (gecikme). Her embedding üretiminde API'ye gidip gelme yok — özellikle toplu indeksleme sırasında bu fark ciddi oluyor.

## Cohere Embed

Cohere'in `embed-multilingual-v3.0` modeli çok dilli embedding alanında güçlü bir rakip. 100'den fazla dil, 1024 boyutlu vektörler. Cohere bu modeli özellikle semantik arama ve RAG için optimize ettiğini belirtiyor.

`embed-multilingual-v3.0`'ın öne çıktığı alan: İngilizce dışı diller. Türkçe, Arapça, Çince, Japonca gibi dillerde MTEB çok dilli sıralamasında tutarlı biçimde üstte görünüyor. Ayrıca Cohere'in modeli hem arama (search) hem de sınıflandırma (classification) gibi farklı görevler için ayrı `input_type` parametresi sunuyor — sorguyu ve belgeleri ayrı modlarda kodlayabiliyorsun.

```python
import cohere

co = cohere.Client("COHERE_API_KEY")

response = co.embed(
    texts=["Türkçe RAG sistemi nasıl kurulur?"],
    model="embed-multilingual-v3.0",
    input_type="search_document"  # belge indekslerken
)

sorgular = co.embed(
    texts=["RAG kurulumu"],
    model="embed-multilingual-v3.0",
    input_type="search_query"  # sorgu sırasında
)

print(len(response.embeddings[0]))  # 1024
```

Bu `input_type` ayrımı önemli: arama görevlerinde sorgu ve belgeyi aynı uzayda ama farklı rollerle kodlamak retrieval doğruluğunu artırıyor.

## Karşılaştırma Tablosu

| Model | Boyut | Tür | Türkçe | Ne zaman? |
|-------|-------|-----|--------|-----------|
| text-embedding-3-small | 1536 | API | İyi | Hızlı prototip, düşük maliyet |
| text-embedding-3-large | 3072 | API | Çok iyi | Kalite öncelik, İngilizce ağırlıklı |
| all-MiniLM-L6-v2 | 384 | Açık kaynak | Orta | Lokal, hız öncelik, İngilizce |
| multilingual-e5-large | 1024 | Açık kaynak | Çok iyi | Lokal, Türkçe yoğun proje |
| embed-multilingual-v3.0 | 1024 | API | Çok iyi | Çok dilli SaaS, Türkçe dahil |

## Seçim Kriterleri

Model seçimini daraltmak için üç soruyu sırayla soruyorum.

**1. Veri gizliliği önemli mi?** Müşteri sözleşmeleri, tıbbi kayıtlar, finansal veriler — bunları dış API'ye göndermek istemiyorsan lokal model şart. `multilingual-e5-large` veya `all-MiniLM-L6-v2` ile başla.

**2. Türkçe içerik yoğun mu?** Türkçe belgelerle çalışıyorsan `text-embedding-3-small`'ın Türkçe performansı genellikle yeterli, ama daha iyisini istiyorsan `multilingual-e5-large` veya `embed-multilingual-v3.0`'a bak. İngilizce ağırlıklıysa `text-embedding-3-small` çoğu durumda yeterli.

**3. Prototip mi, üretim mu?** Yeni bir RAG sistemi kuruyorsan küçük modelle başla, retrieval kalitesini ölç, sonra büyüt. Büyük bir modele geçmeden önce şu soruyu sor: "Mevcut modelin nerede başarısız olduğunu biliniyor mu?" Cevap "hayır"sa büyük modele geçmek erken optimizasyon. Önce ölç, sonra karar ver.

Modeli seçtik. Ürettiğimiz vektörleri nerede saklayacağız? Artık embedding modellerini biliyorsun. Sırada vektör veritabanları var.
