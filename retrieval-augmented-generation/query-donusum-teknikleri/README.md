# Query Dönüşüm Teknikleri

Bazen sorun retrieval algoritmasında değil, sorguda. Kullanıcı sorusu yetersiz formüle edilmişse en iyi retrieval sistemi bile başarısız olabilir. Bu derste sorguyu dönüştürerek retrieval kalitesini artıran teknikleri inceliyorum.

## Problem: Kötü Formüle Edilmiş Sorgu

Retrieval sistemine gelen sorgular her zaman net ve spesifik olmaz. Birkaç gerçekçi örnek:

"bunu nasıl yapabilirim?" — Neyi? Hangi bağlamda? Önceki mesajdan gelen referans embedding aramasına taşınmaz.

"GDPR ve KVKK farkı nedir" — Kısaltmalar. Embedding modeli bu kısaltmaları biliyor olabilir ama koleksiyondaki belgeler "Genel Veri Koruma Tüzüğü" ya da "General Data Protection Regulation" ile yazılmışsa eşleşme zayıf olur.

"şirkette veri nasıl silinir?" — Çok genel. Koleksiyonda veri silmeyle ilgili onlarca chunk olabilir ama hangisi bu sorunun bağlamıyla örtüşüyor?

"bütün bilgileri ver" — Yapısal olarak retrieval için işlevsiz. Embedding bu soruyu koleksiyondaki hiçbir şeye anlamlı biçimde yakın bulamaz.

Bu soruların hiçbirinde retrieval algoritması veya embedding modeli suçlanamaz. Sorun girdi kalitesinde. Query dönüşüm teknikleri bu girdileri daha iyi bir forma çevirerek retrieval'ı güçlendirir.

## HyDE (Hypothetical Document Embedding)

HyDE ters bir mantıkla çalışır: soruyu değil, sorunun cevabını embed et.

Mantığın arkasındaki sezgi şu: bir sorunun vektörü ile o soruyu yanıtlayan bir dokümanın vektörü arasında anlam boşluğu olabilir. Ama bir cevap paragrafı ile koleksiyondaki gerçek cevap paragrafı arasında vektör mesafesi çok daha küçük olur.

Uygulama adımları:

1. LLM'den soruya varsayımsal, kısa ve olgusal bir cevap paragrafı üretmesini iste. Bu cevap yanlış olabilir; önemli değil.
2. Bu varsayımsal cevabı embed et.
3. Üretilen vektörü koleksiyona karşı çalıştır.

```python
def hyde_search(question: str, llm, embed_fn, collection) -> list[str]:
    # 1. Varsayımsal cevap üret
    varsayimsal = llm.complete(
        f"Şu soruya kısa, olgusal bir paragraf yaz: {question}"
    )

    # 2. Varsayımsal cevabı embed et
    sorgu_vektoru = embed_fn(varsayimsal)

    # 3. Bu vektörle ara
    results = collection.query(
        query_embeddings=[sorgu_vektoru],
        n_results=5
    )
    return results["documents"][0]
```

HyDE özellikle teknik veya spesifik sorularda işe yarar. "Bir transformer modelinde attention mekanizması nasıl çalışır?" sorusunu sorgu olarak aramak ile bu sorunun olası bir cevabını aramak arasında kayda değer bir kalite farkı oluşabilir. Akademik literatür, teknik dokümantasyon ve uzmanlık gerektiren alanlarda HyDE değer katar.

Dezavantaj: ekstra bir LLM çağrısı gerektirir. LLM varsayımsal cevabı üretirken yanlış bilgi üretirse bu yanlış vektör yanlış chunk'ları çekebilir — çok nadir ama mümkün bir senaryo.

## Step-Back Prompting

Bazı soruların iyi cevaplanabilmesi için önce arka plan bilgisine ihtiyaç vardır. Step-back prompting soruyu daha genel, kavramsal bir forma yükseltir; önce bu genel soruyu yanıtlayan içeriği getirir.

Örnekler:

"Python'da lambda neden yavaş?" → "Python çalışma zamanı ve fonksiyon çağrıları nasıl çalışır?"

"Bu sözleşmedeki kefalet maddesi geçerli mi?" → "Türk hukukunda kefalet sözleşmelerinin geçerlilik koşulları nelerdir?"

"Bu ilacı böbrek hastası verebilir miyiz?" → "Böbrek yetmezliğinde ilaç metabolizması nasıl etkilenir?"

Step-back sorusu ile koleksiyondan arka plan bilgisi getirilir, ardından asıl soru bu arka plan bağlamıyla birlikte LLM'e sunulur. Böylece LLM hem genel kavramsal çerçeveye hem de spesifik soruya sahip olarak yanıt üretir.

Bu teknik anlatımsal bağlam gerektiren sorularda güçlüdür. "Neden" veya "nasıl" ile başlayan sorular genellikle step-back'ten faydalanır çünkü bu sorular açıklama gerektirir ve açıklamalar bağlama dayanır.

## Multi-Query

Aynı soruyu tek bir formülasyonla aramak, koleksiyondaki alakalı chunk'ların bir kısmını gözden kaçırabilir. Bir chunk "veri yedekleme politikası" başlığıyla yazılmışsa, kullanıcı "backup nasıl yapılır" diye sorduğunda embedding mesafesi yeterince yakın olmayabilir.

Multi-query bu sorunu soruyu 3-5 farklı şekilde yeniden yazarak aşar. Her formülasyon ayrı bir arama çalıştırır; sonuçlar birleştirilerek tekrarlar elenir.

```python
def multi_query_search(question: str, llm, collection) -> list[str]:
    prompt = f"""Şu soruyu 3 farklı şekilde yeniden yaz:
Soru: {question}
Her soruyu yeni satırda ver, numara kullanma."""

    alternatifler = llm.complete(prompt).strip().split("\n")
    tum_sonuclar = set()

    for alt_soru in alternatifler:
        results = collection.query(
            query_texts=[alt_soru],
            n_results=3
        )
        tum_sonuclar.update(results["documents"][0])

    return list(tum_sonuclar)
```

`set()` kullanımı otomatik tekilleştirme sağlar; aynı chunk birden fazla formülasyonla bulunsa bile sonuç listesinde bir kez yer alır.

Multi-query koleksiyonda benzer konuların farklı terminoloji veya bakış açısıyla yazılmış olduğu durumlarda özellikle etkilidir. Teknik belgeler hem Türkçe hem İngilizce terimler içeriyorsa, farklı formülasyonlar her iki grubu da yakalayabilir.

## Ne Zaman Hangisi?

| Teknik | Ne zaman? | Maliyet |
|--------|-----------|---------|
| HyDE | Teknik/spesifik soru, embedding yetersiz | +1 LLM çağrısı |
| Step-back | Geniş bağlam gereken konular | +1 LLM çağrısı |
| Multi-query | Farklı kelime kullanımı olası | +3-5 LLM çağrısı |

Bu teknikleri birlikte de kullanabilirsin; örneğin multi-query ile üretilen alternatif sorguların her birine HyDE uygulamak teorik olarak mümkün. Ama her LLM çağrısı maliyet ve latency ekler; tradeoff'u değerlendirip sistemi buna göre tasarlıyorum.

Retrieval araç kutumuz doldu. Şimdi bunları bir araya getirip çalışan bir sistem kuralım.
