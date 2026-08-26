# Embedding Nedir?

Vektör aramanın çalışması için önce metnin sayıya dönüşmesi gerekiyor. Bu dönüşümü yapan şey embedding modelleri. Bu derste embedding'in ne olduğunu — hem sezgisel hem teknik düzeyde — açıklıyorum.

## Kelimeden Vektöre: Kısa Tarih

Bilgisayarların metni anlamlandırma serüveni 1990'larda başlıyor. İlk yaklaşım one-hot encoding (tek sıcak kodlama): her kelimeye bir indeks verilir, o indeks 1, geri kalan her şey 0. Sözlükte 10.000 kelime varsa her kelime 10.000 boyutlu bir vektörle temsil ediliyor — ve bu vektörün 9.999 elemanı sıfır. Hem devasa hem de anlamsız: "araba" ve "otomobil" aynı sözlükte birbirinden tamamen bağımsız iki nokta. İki kelimenin anlamca yakın olduğunu vektörlerden anlayamazsın.

2013'te Google'dan Tomas Mikolov ve ekibi word2vec'i yayımladı. word2vec, büyük metin üzerinde eğitilmiş sığ bir sinir ağıyla her kelimeye yoğun (dense) bir vektör atıyor — genellikle 100-300 boyut, sıfırlar değil gerçek sayılar. Bu vektörlerin ilginç bir özelliği vardı: benzer bağlamlarda geçen kelimelerin vektörleri uzayda birbirine yakın konumlarda oturuyordu. "kedi" ve "köpek" birbirine yakın, "kedi" ve "banka" birbirinden uzak.

2018 sonrasında transformer tabanlı modeller sahneye çıktı — BERT, GPT ve türevleri. Bu modeller kelimeleri bağlamından bağımsız değil, cümledeki kullanımına göre kodluyor. "Oturdu" kelimesi "toplantıya oturdu" ile "bankın üstüne oturdu" cümlelerinde farklı vektörler alıyor. Bağlam artık işin içinde.

## Semantik Anlam Nasıl Kodlanıyor?

word2vec'in getirdiği en çarpıcı özellik vektör aritmetiğinin anlam aritmetiğiyle örtüşmesiydi:

```
kral - erkek + kadın ≈ kraliçe
Paris - Fransa + İtalya ≈ Roma
```

Bu tesadüf değil. Model kelimeleri büyük bir metin koleksiyonundan öğrenirken "kral" ve "kraliçe"nin benzer bağlamlarda ama cinsiyete dair farklı sinyallerle geçtiğini fark ediyor. Vektör uzayında bu fark, "erkek" ile "kadın" arasındaki farka paralel bir yönde konumlanıyor.

Somut anlamı şu: iki vektör arasındaki mesafe, iki kavram arasındaki anlamsal uzaklığın yaklaşık bir ölçüsü. Birbirine yakın anlamlı kelimeler uzayda da birbirine yakın. "Hızlı" ve "çabuk" neredeyse aynı noktada; "hızlı" ve "ağır" birbirinden uzakta.

Bu özellik RAG'ı mümkün kılan şey. Kullanıcı "vergi indirimi nasıl hesaplanır?" diye sorduğunda, vektör araması bu soruyu vektöre çevirip belgeler arasında anlamca en yakın parçaları buluyor — "vergi indirimi" kelimesini birebir içermeseler bile.

## Cümle Embedding vs Token Embedding

word2vec ve erken transformerlar kelime düzeyinde çalışıyordu. RAG için ihtiyacımız olan şey farklı: bir pasajın tamamını — birkaç cümle ya da birkaç paragraf — tek bir vektörde özetleyebilmek.

Bunu yapmanın iki yaygın yolu var.

**[CLS] token yaklaşımı:** BERT gibi modeller cümlenin başına özel bir `[CLS]` token ekliyor. Modelin bu token için ürettiği vektör, tüm cümlenin temsili olarak kullanılıyor. Model eğitilirken `[CLS]` vektörü bütün bağlamı özetleyecek biçimde optimize ediliyor.

**Mean pooling (ortalama havuzlama):** Cümledeki tüm token vektörlerini alıp boyut boyut ortalamasını hesaplıyorsun. Basit ama genellikle çok etkili — özellikle Sentence Transformers gibi modellerde bu yaklaşım [CLS]'den daha iyi sonuç veriyor.

RAG bağlamında pasaj düzeyinde embedding kritik. Tek bir kelimeyi aramıyoruz; bir soru ile bir paragraf arasındaki anlamsal benzerliği ölçüyoruz. İyi bir cümle embedding modeli, "şirketimizin tatil politikası" sorusunu, içinde "tatil" kelimesi geçmese de ilgili İK dökümanı paragrafıyla eşleştirebiliyor.

## Boyutlar ve Tradeoff'lar

Bir embedding vektörünün boyutu, taşıyabileceği bilgi kapasitesini belirliyor. Daha fazla boyut daha fazla anlamsal nüans kodlayabiliyor — ama bedeli var.

Pratik karşılaştırma:

| Boyut | Örnek Model | Avantaj | Dezavantaj |
|-------|------------|---------|------------|
| 384 | all-MiniLM-L6-v2 | Çok hızlı, az bellek | Kapasitesi sınırlı |
| 768 | BERT-base, paraphrase-mpnet | Denge noktası | — |
| 1536 | text-embedding-3-small | Güçlü kalite | API maliyeti |
| 3072 | text-embedding-3-large | En yüksek kalite | Yüksek maliyet, yavaş |

Pratikte 768-1536 boyut, kurumsal RAG uygulamalarının büyük çoğunluğu için yeterli. Boyutu artırmak her zaman orantılı bir kalite artışı getirmiyor; bir noktadan sonra getiri azalıyor, maliyet artmaya devam ediyor.

Boyut aynı zamanda vektör veritabanındaki depolama alanını ve sorgu süresini doğrudan etkiliyor. 1 milyon belge parçası için 1536 boyutlu vektörler yaklaşık 6 GB yer tutuyor; 3072 boyutla bu 12 GB'a çıkıyor. Küçük projede önemsiz, büyük ölçekte ciddi bir kalem.

## Kod Örneği

OpenAI'nin embedding API'si ile bir metni vektöre dönüştürmek birkaç satır:

```python
from openai import OpenAI

client = OpenAI()

def embed(text: str) -> list[float]:
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=text
    )
    return response.data[0].embedding

vektor = embed("RAG nedir?")
print(f"Boyut: {len(vektor)}")  # 1536
print(f"İlk 5 değer: {vektor[:5]}")
```

`text-embedding-3-small` 1536 boyutlu vektör döndürüyor. Birden fazla metni tek seferde göndermek de mümkün — `input` parametresi string listesi kabul ediyor. Toplu işlemde API çağrı maliyeti düşüyor:

```python
metinler = [
    "RAG nedir?",
    "Vektör veritabanları nasıl çalışır?",
    "Embedding modeli nasıl seçilir?"
]

response = client.embeddings.create(
    model="text-embedding-3-small",
    input=metinler
)

vektorler = [item.embedding for item in response.data]
print(f"Üretilen vektör sayısı: {len(vektorler)}")  # 3
print(f"Her birinin boyutu: {len(vektorler[0])}")   # 1536
```

İki vektör arasındaki benzerliği ölçmek için cosine similarity (kosinüs benzerliği) kullanılıyor. NumPy ile hesaplamak kolay:

```python
import numpy as np

def cosine_similarity(a: list[float], b: list[float]) -> float:
    a, b = np.array(a), np.array(b)
    return float(np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b)))

v1 = embed("Kredi kartı faizi nasıl hesaplanır?")
v2 = embed("Kart borcunun faiz oranı nedir?")
v3 = embed("Python'da liste nasıl sıralanır?")

print(cosine_similarity(v1, v2))  # ~0.92 — benzer sorular
print(cosine_similarity(v1, v3))  # ~0.41 — alakasız sorular
```

Embedding'in ne olduğunu anladık. Peki hangi modeli kullanmalıyız? Artık embedding nedir biliyorsun. Sırada hangi modeli seçeceğimizi konuşacağız.
