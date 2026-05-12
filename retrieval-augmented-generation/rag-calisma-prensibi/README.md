# RAG Nasıl Çalışır?

RAG'ın ne yaptığını artık biliyoruz. Şimdi içine girme zamanı: bir kullanıcı sorusu sisteme girdiğinde tam olarak ne oluyor? Bu derste üç adımı — Retrieve, Augment, Generate — sırasıyla açıklıyorum ve sonunda tam akışı hem diyagramla hem de kod örneğiyle somutlaştırıyorum.

## Retrieve (Getir)

Her şey kullanıcının sorusuyla başlıyor. Ama sistem bu soruyu doğrudan LLM'e atmıyor. Önce soruyu arama sorgusuna dönüştürmesi gerekiyor.

Buradaki temel kavram: metni sayıya çevirmek. Kullanıcının sorusu bir embedding modeline (gömme modeli) gönderiliyor. Bu model soruyu yüz ya da binlerce boyutlu bir vektöre dönüştürüyor — anlamı sayısal koordinatlara çeviren bir işlem. "Şirketimizin iade politikası nedir?" sorusu bu modelden geçince artık bir sayı dizisi.

Aynı şey belge deposundaki her parça (chunk) için de önceden yapılmış. Tüm belgeler önceden bu vektörlere dönüştürülmüş ve bir vektör veritabanına (vector database) eklenmiş.

Şimdi sisteme iş düşüyor: soru vektörü ile belge vektörleri arasındaki benzerliği hesaplayıp en yakın olanları bulmak. Buna en yakın komşu araması deniyor. Sonuç olarak top-k chunk — mesela 3 ya da 5 en alakalı metin parçası — geliyor.

Bu adım iyi çalışmazsa tüm sistem çöker. Yanlış chunk gelirse model yanlış bağlamdan cevap üretir. Retrieval kalitesi RAG sisteminin kalitesini doğrudan belirler.

## Augment (Zenginleştir)

Retrieve adımı elinde birkaç metin parçası bıraktı. Şimdi bunları modelin okuyacağı prompt'a eklemek gerekiyor.

Bu adım görünürde basit ama birkaç önemli kararı içeriyor. En yaygın yapı şu:

```
Sistem mesajı:
Sen bir müşteri destek asistanısın. Aşağıdaki bağlamı kullanarak soruyu yanıtla.
Bağlamda olmayan bilgileri uydurmak yerine "Bu konuda elimde bilgi yok" de.

Bağlam:
[chunk 1]
[chunk 2]
[chunk 3]

Kullanıcı sorusu:
[kullanıcının sorusu]
```

Burada ince ama kritik bir yönerge var: "Bağlamda olmayan bilgileri uydurmak yerine 'Bu konuda elimde bilgi yok' de." Bu satır hallucination riskini önemli ölçüde düşürür. Model artık sadece elindeki bağlamla kısıtlıdır.

Chunk'ların sırası da önemli. Araştırmalar en alakalı parçanın prompt'un başına ya da sonuna konulmasının ortaya koymaktan daha iyi sonuç verdiğini gösteriyor — "lost in the middle" (ortada kaybolma) problemi yüzünden. (Bu fenomene "ortada kaybolma" — Lost in the Middle — deniyor.)

## Generate (Üret)

Artık modele zenginleştirilmiş bir prompt gönderildi. Model bu bağlamı okur ve yanıt üretir.

Kritik fark şu: model artık yalnızca eğitim verisinden değil, az önce getirilen gerçek belgelerden besleniyor. Eğer soru iade politikasıyla ilgiliyse ve retrieval adımı doğru chunk'ı getirdiyse, model bu chunk'taki bilgiyi kullanarak yanıt üretiyor.

İdeal bir RAG sisteminde model yanıtın kaynağını da belirtebilir. "Politika belgesi, madde 4.2'ye göre..." gibi. Bu denetlenebilirlik açısından büyük avantaj — kullanıcı kaynağa gidip doğrulayabilir.

## Akış Diyagramı

Üç adımın tam akışını aşağıda görebilirsin:

```
Kullanıcı sorusu
      │
      ▼
[Embedding Modeli] ──► soru vektörü
      │
      ▼
[Vektör DB] ──► top-k chunk
      │
      ▼
[Prompt Builder] ──► "Bağlam: {chunk}\nSoru: {soru}"
      │
      ▼
[LLM] ──► Yanıt
```

Soldan sağa değil, yukarıdan aşağı okuduğunda her adımın bir öncekinin çıktısını aldığını görürsün. Embedding modeli soruyu sayıya çevirir. Vektör DB bu sayıyı kullanarak en yakın belge parçalarını bulur. Prompt Builder bu parçaları ve orijinal soruyu birleştirip yapılandırılmış bir prompt oluşturur. LLM bu prompt'tan yanıt üretir.

## Minimal Kod Örneği

Soyutlama koda dökülünce akış daha somut görünüyor. Gerçek API çağrıları yapmak yerine, yapıyı anlaman için pseudo-code:

```python
# Bu pseudo-code; gerçek API çağrısı kullandığın kütüphaneye göre değişir
# 1. Retrieve — soruyu vektöre çevirip en yakın chunk'ları bul
soru_vektoru = embed_model.encode(kullanici_sorusu)
yakin_chunklar = vektor_db.query(soru_vektoru, top_k=3)

# 2. Augment — chunk'ları ve soruyu birleştirerek prompt oluştur
baglam = "\n\n".join(yakin_chunklar)
prompt = f"Bağlam:\n{baglam}\n\nSoru: {kullanici_sorusu}"

# 3. Generate — LLM'den yanıt al
yanit = llm.complete(prompt)
print(yanit)
```

20 satırdan az kod. Gerçek bir üretim sistemi bunun üzerine hata yönetimi, chunk boyutu optimizasyonu, reranking, caching ve izleme katmanları ekler. Ama temel yapı bu kadar net.

Dikkat et: `embed_model.encode()` ve `vektor_db.query()` gerçekte farklı kütüphaneler kullanıyor olacak — OpenAI Embeddings, Sentence Transformers, Cohere gibi embedding modelleri; Pinecone, Weaviate, Chroma, pgvector gibi vektör veritabanları. Ama bu iki satırdaki soyutlama değişmiyor.

Akışı anladık. Temelde her şey vektörlere dayanıyor. Peki vektör arama nasıl çalışıyor?
