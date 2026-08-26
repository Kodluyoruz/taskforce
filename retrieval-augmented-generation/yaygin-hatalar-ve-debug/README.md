# Yaygın Hatalar ve Debug

RAG sistemleri belirli kalıplarda başarısız olur. Bu derste en sık karşılaşılan hataları ve debug yöntemlerini paylaşıyorum.

## "Cevap Bağlamda Var Ama Model Bulamadı"

Bu hatanın kaynağı retrieval — model değil. Dokümanda kesinlikle cevap var, manuel aradığında görüyorsun, ama sistem soruya cevap veremiyor.

Olası sebepler:

**Chunk çok büyük:** 2000 token'lık bir chunk içinde sorguyla alakalı paragraf birkaç yüz token alıyor ama geri kalan bin token alakasız içerik. Vektör bu büyük chunk'ın ortalama embedding'i olduğundan sorguyla benzerliği düşüyor.

**Embedding modeli domain'e uymuyor:** Genel amaçlı bir embedding modeli teknik jargonu veya alan spesifik terimleri yeterince iyi temsil etmeyebiliyor. "İnflamasyon" kelimesi tıpta ve ekonomide farklı anlama geliyor; genel model bunu her iki bağlamda da aynı şekilde temsil edebilir.

Debug için retrieval'ı izole test etmek gerekiyor:

```python
# Retrieval'ı izole test et
sonuclar = koleksiyon.query(
    query_texts=["test sorusu"],
    n_results=5,
    include=["documents", "distances"]
)
for doc, dist in zip(sonuclar["documents"][0], sonuclar["distances"][0]):
    print(f"Skor: {dist:.3f} | {doc[:100]}")
# Düşük skor (Chroma'da yüksek mesafe) → retrieval başarısız
```

ChromaDB mesafe olarak döndürüyor — yüksek mesafe düşük benzerlik demek. Beklediğin chunk'ın listede 10. sırada veya hiç olmadığını görürsen sorun retrieval'da. Chunk boyutunu küçült, embedding modelini değiştir, test et.

## "Model Bağlam Dışından Cevap Üretiyor" (Hallucination)

LLM, getirilen chunk'ların hiçbirinde olmayan bilgiyi cevaba dahil ediyor. Bu RAG sistemlerinin en tehlikeli hata modu — cevap güvenilir görünüyor ama gerçek değil.

Temel sebep: system prompt'taki "yalnızca bağlamı kullan" direktifi yetersiz veya eksik. Modeller bu direktifi her zaman tam olarak uygulamıyor, özellikle bağlamda boşluklar varsa kendi eğitim verisinden dolduruyor.

RAGAS faithfulness skoru bu hatayı ölçüyor. Eğer skor 0.7'nin altındaysa model ciddi oranda bağlam dışı üretim yapıyor demek.

Çözüm için daha kısıtlayıcı bir prompt:

```
Yalnızca aşağıdaki bağlamı kullanarak soruyu yanıtla.
Bağlamda cevap yoksa "Bu bilgi bağlamda mevcut değil." de.
Tahminde bulunma.

Bağlam:
{bagLam}

Soru: {soru}
```

"Bilmiyorum" deseni zorunlu kılmak önemli. Model cevap üretemeyeceğini kabul etmeli — bu hallucination'dan çok daha iyi bir davranış.

## "Alakasız Chunk'lar Geliyor"

Sorgu "Python liste comprehension nasıl çalışır?" ama gelen chunk'lar Python kurulumu, genel programlama kavramları veya başka konular hakkında.

İki ana sebep:

**Embedding modeli domain'e uymuyor:** Genel amaçlı modeller teknik veya alana özgü konularda vektör uzayında yanlış komşuluklar oluşturabilir. Çözüm: domain'e özgü fine-tuned embedding modeli veya retrieval sonuçlarına reranker (yeniden sıralayıcı) eklemek.

**Chunk boyutu çok büyük:** 1500 token'lık chunk içinde konular karışıyor. Bir dokümanın giriş paragrafı "Python nedir?" diye başlayıp sonra liste comprehension anlatıyorsa, chunk'ın vektörü her iki konuyu da taşıyor ama "comprehension" sorgusunda net olarak ayrışmıyor. Chunk boyutunu 256-512 token'a indirmek ve overlap eklemek çoğu zaman yeterli.

Retrieval sonuçlarını aynı izole test scriptinde manuel inceleyerek hangi sebep olduğunu görmek mümkün.

## "Yavaş Retrieval"

Koleksiyon büyüyünce retrieval süresi uzuyor veya embedding üretimi darboğaz oluyor.

Olası sebepler:

**HNSW index eksik veya yanlış ayarlı:** ChromaDB ve diğer vektör DB'ler approximate nearest neighbor (yaklaşık en yakın komşu) araması için HNSW kullanıyor. Bu index yoksa veya yanlış parametrelerle kurulduysa brute-force arama yapılıyor — O(n) maliyet.

**Top-k çok yüksek:** `n_results=50` yerine `n_results=5` kullanmak arama süresini ciddi oranda düşürür. LLM context'ine zaten 3-5 chunk yeterli — 50 getirmenin faydası yok.

**Embedding üretimi darboğaz:** Sorgu başına API çağrısı yapılıyorsa ağ latency'si biriyor. Batch embedding veya yerel model kullanmak bu sorunu çözüyor.

Debug için her adımı ayrı ayrı ölçmek gerekiyor:

```python
import time

t0 = time.time()
vektor = embed(soru)
t1 = time.time()
sonuclar = koleksiyon.query(query_embeddings=[vektor], n_results=5)
t2 = time.time()

print(f"Embedding: {(t1-t0)*1000:.0f}ms")
print(f"Retrieval: {(t2-t1)*1000:.0f}ms")
```

Hangi adımın pahalı olduğunu görmeden optimizasyon yapılamaz. Embedding 500ms alıyorsa yerel modele geç; retrieval 400ms alıyorsa index ayarlarına bak.

## Debug Checklist

Herhangi bir RAG hatasıyla karşılaştığında şu sırayla ilerliyorum:

1. Retrieval'ı izole test et: sorgulama skoru makul mu? Beklediğin chunk ilk 3'te var mı?
2. Bağlamı manuel kontrol et: LLM'e verilen chunk'lar soruyla gerçekten ilgili mi?
3. Faithfulness skoru ölç: model bağlamdan mı üretiyor yoksa uyduruyor mu?
4. Latency ölç: darboğaz embedding'de mi, retrieval'da mı, LLM'de mi?
5. Chunk boyutu ve overlap'i ayarla, yukarıdaki adımları tekrar et.

Bu sıra önemli: retrieval düzeltilmeden generation sorunlarına bakmanın anlamı yok. Temel bileşen çalışıyorsa üst katmana geç.

Yaygın tuzakları öğrendik. Son bölümde RAG'ı daha güçlü kılan ileri teknikler var.
