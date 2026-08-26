# Vektör Arama Temelleri

RAG'ın kalbinde vektör arama var. Retrieval adımının nasıl çalıştığını sezgisel olarak anladık, ama bu derste 'vektör' derken ne kastettiğimizi ve benzerliği nasıl hesapladığımızı açıklıyorum.

## Metin Nasıl Sayıya Dönüşür?

İnsan beyni "köpek" ve "kedi" kelimelerinin birbirine yakın anlamlar taşıdığını sezgisel olarak biliyor. Bilgisayar için bu sezgi yok — sadece karakterler var. Embedding (gömme) modelleri bu boşluğu kapatıyor.

Bir embedding modeli metni alıp yüzlerce ya da binlerce boyutlu bir sayı dizisine — vektöre — dönüştürüyor. Bu dönüşüm rastgele değil; model büyük miktarda metinden eğitilmiş ve anlamca benzer metinlerin birbirine yakın vektörler üretmesini öğrenmiş.

Bunu harita gibi düşün. Türkiye haritasında İstanbul ve Bursa birbirine yakın, İstanbul ve Van birbirinden uzak. Vektör uzayında da benzer şey oluyor: "köpek sever" ve "kedi sever" cümleleri birbirine yakın bir konumda, "matematik öğretmeni" ise çok farklı bir bölgede duruyor.

2 boyutlu bir haritada mesafeyi gözle görebiliyorsun. Embedding modelleri 768, 1536, hatta 3072 boyutlu uzaylarda çalışıyor. Bunu gözle göremiyoruz, ama matematik aynı şekilde çalışıyor.

Önemli nokta: bu vektörleri sen üretmiyorsun. Bir embedding modeli — OpenAI'nin `text-embedding-3-small`'ı, Sentence Transformers, ya da Cohere'in modeli — bunu senin için yapıyor. Senin işin bu vektörleri depolamak ve sorgulamak.

## Benzerlik Ölçütleri

İki vektörün "ne kadar yakın" olduğunu hesaplamak için birkaç farklı yöntem var.

**Euclidean distance (Öklid mesafesi)** — iki nokta arasındaki düz çizgi mesafesi. Geometride en doğal ölçüt bu, ama metin vektörleri için bir sorunu var: vektörün büyüklüğü (uzunluğu) anlam değişikliği yerine metnin uzunluğunu yansıtabiliyor. Uzun bir belge ile kısa bir cümle anlamca benzer olsa bile vektörleri büyüklük farkı nedeniyle uzak görünebilir.

**Cosine similarity (Kosinüs benzerliği)** — metin için tercih edilen ölçüt. Büyüklüğü değil, yönü ölçüyor. İki vektör arasındaki açının kosinüsü: 1 tam benzer, 0 alakasız, -1 zıt anlam. Uzun bir belge ile kısa bir özet anlamca aynı şeyi söylüyorsa, vektörleri farklı büyüklükte olsa bile aynı yönü gösterir — cosine similarity bunu yakalar.

**Dot product (İç çarpım)** — cosine similarity'e benzer ama vektör büyüklüğünü de hesaba katıyor. Bazı sistemlerde vektörler normalize edilmiş geldiğinde (büyüklüğü 1'e eşitlenmiş) dot product ile cosine similarity aynı sonucu veriyor.

Pratikte RAG sistemlerinde neredeyse her zaman cosine similarity ya da normalize edilmiş dot product kullanılıyor. Büyüklüğü değil anlamı ölçmek istiyoruz — açı bunu en iyi yakalıyor.

## En Yakın Komşu Araması

Elinde soru vektörü var, vektör DB'de milyonlarca belge vektörü var. Görevi: en yakın komşuları bulmak.

**Brute force (kaba kuvvet):** Soru vektörünü tüm belge vektörleriyle tek tek karşılaştır, en yakın olanları al. Küçük veri setleri için mükemmel. 10.000 vektörde gayet çalışır.

Ama 1 milyon vektörde her sorgu için 1 milyon karşılaştırma yapıyorsun. Saniyede yüzlerce sorgu geldiyse bu hesaplamalar üst üste yığılıyor. Üretim sistemleri için bu yaklaşım ölçeklenmiyor.

**Approximate Nearest Neighbor — ANN (Yaklaşık En Yakın Komşu):** Kesin cevap yerine yeterince iyi ve çok daha hızlı cevap veren algoritmalar. İki popüler algoritma:

- **HNSW (Hierarchical Navigable Small World):** Vektörleri katmanlı bir grafik yapısına organize ediyor. Arama yapılırken tüm vektörlere değil, akıllıca seçilmiş bir alt kümeye bakıyor. Pinecone, Weaviate ve Chroma bu algoritmayı kullanıyor.
- **IVF (Inverted File Index):** Vektörleri cluster'lara (kümelere) böler. Arama sırasında önce hangi cluster'a bakılacağına karar veriliyor, sonra sadece o cluster içinde arama yapılıyor.

"Yaklaşık" kelimesi rahatsız edici görünebilir. Ama pratikte %95-99 doğruluk oranıyla brute force'un on kat daha hızlı çalışmak çoğu uygulama için çok daha değerli. Bir RAG sisteminde tek bir chunk'ı kaçırmak nadiren kritik sonuçlara yol açıyor.

## Küçük Kod Örneği

Cosine similarity'yi elle hesaplamak fikri somutlaştırıyor:

```python
import numpy as np

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Anlamca benzer iki vektör
v1 = np.array([0.8, 0.2, 0.5])  # "köpek sever"
v2 = np.array([0.7, 0.3, 0.4])  # "kedi sever"
v3 = np.array([-0.5, 0.9, 0.1]) # "matematik öğretmeni"

print(f"v1-v2 benzerlik: {cosine_similarity(v1, v2):.3f}")  # yüksek
print(f"v1-v3 benzerlik: {cosine_similarity(v1, v3):.3f}")  # düşük
```

Bu örnekte vektörler gerçek embedding değil — 3 boyutlu temsiller. Gerçek embedding modellerinde vektörler 768+ boyutlu olur, ama formül aynı. `np.dot(a, b)` iki vektörün iç çarpımı; `np.linalg.norm(a)` bir vektörün büyüklüğü. Payda büyüklükleri normalize ediyor, kalan sadece yön bilgisi.

Bu hesabı gerçek bir üretim sisteminde sen yapmıyorsun — vektör DB senden embedding alıp benzerliği içinde hesaplıyor. Ama arkada ne döndüğünü bilmek retrieval kalitesini değerlendirirken ve debug yaparken kritik.

Vektör aramanın matematiğini anladık. Sırada bu vektörleri kim üretiyor: embedding modelleri.
