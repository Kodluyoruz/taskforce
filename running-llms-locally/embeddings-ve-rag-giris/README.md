# Embeddings ve RAG'e Giriş

## Embedding Nedir?

Bir metni embedding modeline gönderdiğinde, model sana geri sayılardan oluşan bir liste döndürür. Bu listeye **vektör** diyoruz. Örneğin "kedi" ve "köpek" kelimeleri anlam olarak birbirine yakın olduğu için bu iki kelimenin vektörleri de matematikte birbirine yakın noktalara karşılık gelir. "Otomobil" ise her ikisinden de uzakta bir noktaya düşer.

Bu yakınlık ölçümüne **kosin benzerliği** diyoruz. İki vektörün dot product'ını uzunluklarının çarpımına bölerek hesaplıyorsun; sonuç -1 ile 1 arasında çıkıyor. 1'e yakın değer = anlamsal olarak benzer, 0'a yakın = alakasız.

Embeddingler tek başına kullanışlı: semantik arama, duplicate içerik tespiti, sınıflandırma, kümeleme. Ama asıl güçleri RAG pipeline'larında ortaya çıkıyor.

## Ollama ile Embedding Üretmek

Ollama'nın `/api/embed` endpoint'i embedding üretmek için kullanılır. `ollama` Python SDK'sı bu endpoint'i `ollama.embed()` fonksiyonuyla sarmalar.

Popüler embedding modelleri:

| Model | Boyut | Açıklama |
|---|---|---|
| `nomic-embed-text` | 768 | Genel amaçlı, dengeli |
| `mxbai-embed-large` | 1024 | Yüksek doğruluk |
| `all-minilm` | 384 | Hızlı, küçük boyut |

Modeli indirmek için:

```bash
ollama pull nomic-embed-text
```

## RAG Nedir?

**RAG (Retrieval-Augmented Generation)**, LLM'e doğrudan bir soruyu sormak yerine şu adımları izlediğin bir pattern:

1. Belge koleksiyonunu embed et, bir "index" oluştur
2. Kullanıcının sorusunu embed et
3. Soru vektörüne en yakın belgeleri bul
4. Bulunan belgeleri LLM'e context olarak gönder
5. LLM bu context'e dayanarak yanıt üretsin

Bu yaklaşımın faydası: modelin eğitim verisinde olmayan, güncel ya da şirkete özgü bilgileri kullanmasını sağlayabilirsin. Model "bilmiyorum" demek yerine sana verdiğin belgelerden yanıt üretiyor.

## Basit RAG Pipeline'ı

Aşağıdaki örnek üç belgeyi embed edip, sorguya en yakın belgeyi bularak LLM'e context olarak gönderiyor:

```python
import ollama
import numpy as np

def kosin_benzerligi(a, b):
    # İki vektör arasındaki kosin benzerliğini hesapla
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Örnek belgeler
belgeler = [
    "Python dinamik tipli bir dildir.",
    "JavaScript tarayıcılarda çalışır.",
    "Rust bellek güvenliği sağlar."
]

# Belgeleri embed et
belge_vektorleri = []
for belge in belgeler:
    sonuc = ollama.embed(model="nomic-embed-text", input=belge)
    belge_vektorleri.append(sonuc["embeddings"][0])

# Sorguyu embed et
sorgu = "Hangi dil web için kullanılır?"
sorgu_vektoru = ollama.embed(model="nomic-embed-text", input=sorgu)["embeddings"][0]

# En yakın belgeyi bul
skorlar = [kosin_benzerligi(sorgu_vektoru, v) for v in belge_vektorleri]
en_alakali = belgeler[np.argmax(skorlar)]
print(f"En alakalı belge: {en_alakali}")

# LLM'e context ile gönder
yanit = ollama.chat(model="llama3.2", messages=[
    {"role": "user", "content": f"Bağlam: {en_alakali}\n\nSoru: {sorgu}"}
])
print(yanit.message.content)
```

Çıktı şöyle görünür:

```text
En alakalı belge: JavaScript tarayıcılarda çalışır.
Web geliştirme için JavaScript en yaygın kullanılan dildir...
```

## Birden Fazla Belge Context Olarak Göndermek

Tek en yakın belge bazen yeterli olmaz. En iyi N belgeyi alıp hepsini context'e eklemek daha sağlam sonuçlar verir:

```python
import ollama
import numpy as np

def kosin_benzerligi(a, b):
    # Kosin benzerliği hesabı
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

def en_yakin_belgeler(sorgu_vektoru, belge_vektorleri, belgeler, n=2):
    # Tüm belgelerin skorunu hesapla ve en yüksek N tanesini döndür
    skorlar = [(kosin_benzerligi(sorgu_vektoru, v), belge)
               for v, belge in zip(belge_vektorleri, belgeler)]
    skorlar.sort(reverse=True)
    return [belge for _, belge in skorlar[:n]]

belgeler = [
    "Python dinamik tipli ve yorumlanan bir dildir.",
    "JavaScript hem frontend hem backend için kullanılabilir.",
    "Node.js JavaScript'i sunucu tarafında çalıştırır.",
    "Rust sistem programlama için tasarlanmıştır.",
    "TypeScript, JavaScript'e statik tip ekler."
]

# Tüm belgeleri embed et
belge_vektorleri = [
    ollama.embed(model="nomic-embed-text", input=b)["embeddings"][0]
    for b in belgeler
]

sorgu = "Sunucu tarafı web geliştirme için hangi seçeneklerim var?"
sorgu_vektoru = ollama.embed(model="nomic-embed-text", input=sorgu)["embeddings"][0]

# En alakalı 2 belgeyi al
secilen_belgeler = en_yakin_belgeler(sorgu_vektoru, belge_vektorleri, belgeler, n=2)
context = "\n".join(secilen_belgeler)

# LLM'e gönder
yanit = ollama.chat(model="llama3.2", messages=[
    {"role": "system", "content": "Yalnızca verilen bağlamı kullanarak yanıt ver."},
    {"role": "user", "content": f"Bağlam:\n{context}\n\nSoru: {sorgu}"}
])
print(yanit.message.content)
```

## Gerçek Projelerde Ne Kullanılır?

Bu örnekte vektörleri bellekte tutuyorsun. Gerçek projelerde belge sayısı binlere, milyonlara çıkabileceği için bir **vektör veritabanı** kullanman gerekiyor. Bunların başında ChromaDB, Qdrant, Weaviate ve pgvector geliyor. Hepsi Ollama ürettiği vektörleri depolayıp hızlı benzerlik araması yapabiliyor.

Temel mantık aynı kalıyor: embed → sakla → sorgulama anında ara → context olarak LLM'e gönder. Vektör veritabanı sadece bu işlemin ölçek ve hız boyutunu hallediyor.
