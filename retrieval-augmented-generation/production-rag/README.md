# Production RAG

Geliştirme ortamında çalışan RAG sistemi production'a hazır değil. Latency, maliyet, güvenilirlik ve gözlemlenebilirlik gibi konular var. Bu derste production RAG'ın temel bileşenlerini açıklıyorum.

## Latency Bütçesi

Kullanıcı bir soru sorduğunda RAG sisteminde sırayla şu adımlar çalışıyor: sorgu embedding'e dönüştürülüyor, vektör veritabanında arama yapılıyor, bulunan chunk'lar LLM'e gönderiliyor ve cevap üretiliyor.

Tipik değerler şöyle:

- **Embedding üretimi:** 30-80ms — OpenAI veya yerel model fark yaratıyor
- **Vektör arama:** 10-50ms — koleksiyon boyutuna ve index tipine göre değişiyor
- **LLM çağrısı:** 500ms-3s — model büyüklüğüne, context uzunluğuna ve streaming kullanımına göre

Toplam hedef kullanıcı deneyimi için genellikle 3 saniyenin altı. Darboğaz neredeyse her zaman LLM çağrısı — embedding ve retrieval toplamı bile LLM'in yanına yaklaşamıyor. Bu yüzden latency iyileştirme çalışmaları genellikle LLM tarafında yapılıyor: daha küçük model, daha kısa context, streaming response.

## Önbellekleme (Caching)

Aynı veya benzer sorular tekrar geldiğinde hesaplamayı tekrarlamamak gerekiyor. İki farklı cache katmanı var:

**Embedding cache:** Aynı sorgu metni → mevcut vektörü kullan. Basit bir sözlük veya Redis ile uygulanabilir. Hash key olarak sorgunun MD5'i kullanılabilir.

**Semantic cache (anlamsal önbellek):** Anlamca benzer ama birebir aynı olmayan sorgular için. "Python nedir?" ve "Python programlama dili nedir?" aynı soruyu soruyor. GPTCache gibi kütüphaneler yeni sorgunun embedding'ini hesaplar, önbellekteki sorgularla benzerlik karşılaştırması yapar ve eşik üstünde bir sonuç varsa mevcut cevabı döndürür.

```python
import hashlib

embedding_cache: dict[str, list[float]] = {}

def embed_with_cache(metin: str) -> list[float]:
    anahtar = hashlib.md5(metin.encode()).hexdigest()
    if anahtar not in embedding_cache:
        embedding_cache[anahtar] = embed(metin)
    return embedding_cache[anahtar]
```

Bu örnek process içi cache — uygulama yeniden başlayınca sıfırlanır. Production'da Redis gibi dış bir cache servisi tercih edilir; birden fazla instance arasında paylaşılır ve TTL (time-to-live) konfigürasyonu yapılabilir.

## İndeksleme Pipeline'ı

Dokümanlar bir kez indekslenip unutulmuyor. Gerçek sistemlerde içerik sürekli değişiyor: yeni dokümanlar ekleniyor, eskiler güncelleniyor veya kaldırılıyor.

**Batch indeksleme:** İlk kurulumda veya büyük güncellemelerde tüm dokümanlar toplu işlenir. Pahalı ama kontrol edilmesi kolay.

**Artımlı güncelleme:** Yeni bir doküman geldiğinde yalnızca o doküman işlenip indekse eklenir. Mevcut indeksi yıkmadan yapılabilir. Chunk'ların kaynak dokümanla ilişkilendirilmesi — metadata'da `source` alanı — bu yüzden kritik.

**Silme:** Eski bir doküman kaldırıldığında onun chunk'ları da silinmeli. Vektör DB'lerin metadata filtreli silme API'leri bu iş için kullanılıyor.

Tetikleme mekanizması için iki yaygın seçenek var: webhook (kaynak sistem doküman değiştiğinde pipeline'ı tetikler) veya cron job (belirli aralıklarla değişiklikleri kontrol eder). Webhook daha anlık ama kaynak sistem entegrasyon gerektiriyor; cron job daha basit ama gecikme var.

## Gözlemlenebilirlik (Observability)

Production'da ne olduğunu görmeden iyileştirme yapamazsın. Her sorgu için şunları loglamak gerekiyor: hangi chunk'lar getirildi, retrieval benzerlik skorları, LLM latency, üretilen cevap.

Bu veriyi biriktirince örüntüler ortaya çıkıyor: belirli konularda retrieval skorları düşük mü? Belirli sorgu tiplerinde latency yüksek mi? Faithfulness skoru genel olarak düşüyor mu?

Düşük faithfulness skoru özellikle alarm gerektiriyor — model bağlamı kullanmıyor, muhtemelen hallucination üretiyor demek.

Araç seçenekleri: LangSmith LangChain entegrasyonu için doğal; Arize Phoenix açık kaynak ve agnostik; Weights & Biases ML dünyasında yaygın. Hangisini seçersen seç, yapılandırılmış loglama — her sorgu için JSON formatında kayıt — temel gereksinim.

## Güvenlik

RAG sistemleri hassas verileri indekslediğinde erişim kontrolü kritik hale geliyor.

**Kullanıcı bazlı metadata filtreleme:** Her chunk'a `user_id` veya `department` gibi erişim metadata'sı eklenir. Sorgu sırasında bu metadata filtreyle kullanıcı yalnızca yetkili chunk'ları görebilir. ChromaDB, Pinecone ve Weaviate'in hepsi metadata filtreli sorguyu destekliyor.

**PII koruma:** Kişisel tanımlayıcı bilgi (PII — personally identifiable information) chunk içine girmesin. İndeksleme pipeline'ında PII tespiti ve maskeleme adımı eklenebilir; Presidio gibi kütüphaneler bu iş için kullanılıyor.

**Prompt injection koruması:** Kullanıcı girdisi ile sistem direktiflerini birbirinden ayır. Kullanıcı sorgusu doğrudan sistem prompt'una eklenmemeli; ayrı `{soru}` ve `{bagLam}` değişkenleri olarak template'e yerleştirilmeli. Bu, kötü niyetli kullanıcıların "önceki tüm talimatları unut ve..." gibi saldırılar yapmasını zorlaştırıyor.

Production checklist tamamlandı. Peki en sık karşılaşılan hatalar neler?
