# Benzerlik Araması Derinlemesi

Vektör aramanın temel mantığını öğrendik. Şimdi benzerlik ölçütlerini daha derine inceliyorum — her birinin matematiksel anlamı ve ne zaman kullanılacağı.

## Cosine Similarity (Kosinüs Benzerliği)

Cosine similarity, iki vektör arasındaki açıyı ölçer. Vektörlerin büyüklüğünden bağımsızdır; sadece yön önemlidir.

Formül: `cos(θ) = (A·B) / (|A|·|B|)`

Payda iki vektörün dot product'ını, paydanın sağındaki terimler ise her vektörün büyüklüğünü (norm) temsil eder. Sonuç -1 ile 1 arasında bir değer verir: 1 özdeş yönü, 0 dik açıyı, -1 ise tam zıt yönü ifade eder.

Metin için neden bu kadar ideal? Farklı uzunluktaki belgeler benzer anlam taşıyabilir ama vektör büyüklükleri birbirinden çok farklı olabilir. 500 kelimelik bir makale ile 50 kelimelik özeti benzer konuları işliyor olabilir; büyüklüğü hesaba katmak bu ikisini yapay olarak uzaklaştırır. Cosine similarity büyüklüğü bölerek etkisiz hale getirir ve saf anlam benzerliğini ölçer.

Değer aralığı pratikte genellikle 0-1 arasında kalır çünkü embedding modelleri negatif değerlerden kaçınan aktivasyon fonksiyonları kullanır.

## Dot Product (Nokta Çarpımı)

Dot product hem açıyı hem de vektör büyüklüğünü hesaba katar. Formül cosine'den daha basit: `A·B = Σ(aᵢ × bᵢ)` — iki vektörün karşılıklı elemanlarını çarp ve topla.

Normalize edilmiş vektörlerde (büyüklüğü 1 olan vektörler) dot product, cosine similarity'ye matematiksel olarak eşdeğerdir çünkü paydadaki `|A|·|B|` terimi 1×1=1 olur ve düşer.

Hesaplama açısından daha hızlı: bölme işlemi yok, iki norm hesabı yok. Bu, büyük ölçekli sistemlerde önemli bir fark yaratır. Milyonlarca vektör üzerinde çalışırken her operasyondaki küçük tasarruf toplamda ciddi bir hız kazancına dönüşür.

Ne zaman tercih edilmeli? Kullandığın embedding modelinin normalize vektörler ürettiğini biliyorsan dot product'ı güvenle kullanabilirsin. OpenAI'nin `text-embedding-3-*` modelleri ve Cohere'in embedding modelleri normalize çıktı üretir. Model dokümantasyonunu okuyarak bunu doğruluyorum.

## Euclidean Distance (Öklid Uzaklığı)

Öklid uzaklığı iki nokta arasındaki düz çizgi mesafesini ölçer. Formül: `d(A,B) = √Σ(aᵢ - bᵢ)²`. Bir benzerlik skoru değil, uzaklık ölçüsüdür — değer ne kadar küçükse vektörler o kadar yakın demektir.

Bu yöntem düşük boyutlu uzaylarda sezgisel ve tutarlı çalışır. Ancak metni temsil etmek için kullandığımız embedding uzayları 768, 1024 ya da 1536 boyutludur. Bu boyutlarda "curse of dimensionality" (boyutluluk laneti) denen bir fenomen devreye girer: rastgele seçilmiş vektörler arasındaki uzaklıklar birbirine yaklaşmaya başlar. Yani 1536 boyutlu uzayda tüm vektörler neredeyse aynı uzaklıkta görünür, ayrım gücü ciddi ölçüde düşer.

Metin için cosine similarity'nin tercih sebebi tam da bu. Cosine büyüklükten bağımsız çalıştığı için yüksek boyutluluktan daha az etkilenir. Öklid uzaklığını resim embedding'leri veya düşük boyutlu latent uzaylar gibi senaryolarda görmek daha yaygındır.

## Top-k ve Eşik (Threshold)

Benzerlik ölçütü seçildikten sonra şu soru gelir: kaç sonuç almak gerekir?

Küçük k değerleri (3-5) hız sağlar ama bazı alakalı chunk'ların gözden kaçmasına yol açar. Büyük k değerleri (20-50) kapsamlı bir aday kümesi oluşturur ama hem vektör veritabanı hem de LLM katmanına daha fazla yük bindirir — LLM'e gönderilen her ekstra chunk token maliyeti demektir.

k'yı statik tutmak yerine skor eşiği (threshold) ile dinamik filtreleme yapabilirsin. Chromadb mesafe döndürür; düşük mesafe daha iyi eşleşme anlamına gelir. Şu örnekte 0.8'in üzerindeki mesafeye sahip sonuçları eleyiyorum:

```python
results = collection.query(
    query_embeddings=[sorgu_vektoru],
    n_results=10
)

# Skor eşiği uygula (Chroma mesafe döndürür, düşük = daha iyi)
MIN_SCORE = 0.8
filtrelenmis = [
    (doc, dist)
    for doc, dist in zip(results["documents"][0], results["distances"][0])
    if dist < MIN_SCORE
]
```

Eşik değeri koleksiyona ve embedding modeline göre değişir; bunu deneyerek kalibere ediyorum. İlk kurulumda birkaç temsili sorguyu farklı eşiklerle test edip hangi değerin kaliteli sonuç getirdiğini gözlemlemek iyi bir başlangıç noktası.

## ANN: Approximate Nearest Neighbor

Milyonlarca vektör içinde tam en yakın komşuyu aramak (brute force) O(n) karmaşıklığına sahiptir: her sorgu için tüm koleksiyonu taramak gerekir. On milyonluk bir koleksiyonda bu saniyeler mertebesinde gecikmeye yol açar; production sistemlerde kabul edilemez.

ANN (Approximate Nearest Neighbor) algoritmaları kesin sonuç yerine yüksek olasılıklı doğru sonucu O(log n) karmaşıklığıyla verir. İki yaygın yaklaşım:

**HNSW (Hierarchical Navigable Small World):** Graff tabanlı bir yapı. Vektörler farklı "katmanlarda" birbirine bağlanır; arama üst katmanlardan başlayıp giderek daha ince detaya iner. Sorgulama hızlıdır ve yüksek geri çağırma (recall) oranı sağlar. Chroma ve Weaviate varsayılan olarak HNSW kullanır.

**IVF (Inverted File Index):** Uzayı cluster'lara böler; sorgu geldiğinde önce hangi cluster'a yakın olduğu belirlenir, arama sadece o cluster içinde yapılır. Bellek verimliliği açısından avantajlıdır.

Pinecone ve Weaviate bu index yapılarını otomatik yönetir; kullanıcı parametre vermeden kullanabilir. Faiss gibi kütüphanelerle kendi sisteminizi kuruyorsanız index tipini ve parametrelerini (nlist, nprobe) kendiniz ayarlamanız gerekir.

Tek bir arama yöntemi her zaman yetmez. Hybrid search ile hem anlamsal hem anahtar kelime aramasını birleştirelim.
