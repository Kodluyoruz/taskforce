# Reranking

İlk aşama retrieval hızlı ama kaba. Bu derste iki aşamalı retrieval mimarisini ve reranking'in retrieval kalitesini nasıl artırdığını açıklıyorum.

## Problem: İlk Aşama Yeterince Hassas Değil

Embedding araması hız için tasarlanmıştır. Sorgu vektörünü hesaplar, koleksiyona karşı çalıştırır ve milyonlarca chunk içinden en yakın olanları saniyeler içinde getirir. Bu hız bir bedelle gelir.

Embedding araması sorgu ve dokümanı birbirinden bağımsız değerlendirir: önce sorguyu embed eder, sonra dokümanları embed eder, sonra vektörleri karşılaştırır. İki vektörün birbirine ne kadar yakın olduğuna bakar. Ama bu yakınlık her zaman "bu doküman bu soruyu en iyi cevaplayan mı?" sorusuna yanıt vermez.

Sonuç: top-20 getiriyorsun ama sıralama kusurlu olabiliyor. 3. sıradaki chunk soruyu tam ve kapsamlı yanıtlarken, 1. sıradaki chunk yüzeysel bir terim benzerliği nedeniyle üstte çıkabiliyor. LLM'e ilk chunk'lar beslendiğinde ya da kısa bir context window kullanıldığında bu sıralama hatası cevap kalitesini doğrudan düşürür.

## Bi-encoder vs Cross-encoder

Retrieval sistemlerinde iki farklı mimari yaklaşım var; aralarındaki farkı anlamak reranking'in neden işe yaradığını açıklıyor.

**Bi-encoder:** Sorgu ve dokümanı ayrı ayrı, birbirinden habersiz şekilde embed eder. Ardından iki vektör arasındaki benzerliği hesaplar. Bu yaklaşım ölçeklenebilirdir: tüm dokümanları önceden embed edip saklayabilirsin, sorgu geldiğinde sadece sorguyu embed edersin ve saklanan vektörlerle karşılaştırırsın. Milyonlarca dokümana ölçeklenir. Dezavantaj: sorgu-doküman ilişkisini birlikte modelleyemez.

**Cross-encoder:** Sorgu ve dokümanı birlikte, tek bir girdi olarak modele verir. Model bu çifti bütün olarak değerlendirir ve bir alaka skoru üretir. Çok daha hassas çünkü model "bu doküman tam olarak bu soruyu cevaplıyor mu?" diye düşünebiliyor. Dezavantaj: her sorgu-doküman çifti için ayrı model çalıştırman gerekir. 1 milyon doküman için 1 milyon ayrı inference — pratikte imkansız.

Reranking bu iki yaklaşımı birleştirir ve her birinin güçlü yanını kullanır: bi-encoder ile hızlı aday listesi getir, cross-encoder ile bu listeyi sırala.

## İki Aşamalı Pipeline

İki aşamalı mimarinin mantığı şu: cross-encoder'ı tüm koleksiyona değil, zaten filtrelenmiş küçük bir aday kümesine uygula.

**1. Aşama — Aday Getirme:** Embedding araması ile top-100 chunk getir. Hızlı ve ucuz. Bu 100 chunk içinde büyük ihtimalle doğru cevabı veren chunk'lar var; belki sıralama yanlış ama içerik orada.

**2. Aşama — Yeniden Sıralama:** Cross-encoder ile bu 100 chunk'ı değerlendir ve en alakalı top-5'i seç. Cross-encoder sadece 100 çifti değerlendiriyor; bu makul bir yük. Çıkan top-5 çok daha yüksek kalitede sıralanmış oluyor.

LLM'e sadece bu son top-5 (ya da top-3) gönderilir. Hem token maliyeti düşer hem de cevap kalitesi artar çünkü LLM daha isabetli içerikle çalışır.

## Cohere Rerank Örneği

Cohere'in `rerank-multilingual-v3.0` modeli Türkçe dahil 100'den fazla dili destekler; Türkçe RAG sistemleri için doğrudan kullanılabilir.

> **SDK notu:** Bu örnek Cohere SDK v1 kullanıyor (`cohere.Client`). SDK v5+ kuranlar `cohere.ClientV2("API_KEY")` kullanmalı; `co.rerank()` çağrısı aynı kalır.

```python
import cohere

co = cohere.Client("API_KEY")

adaylar = ["chunk 1 metni...", "chunk 2 metni...", "chunk 3 metni..."]

results = co.rerank(
    query="GDPR kapsamında veri silme süreci nedir?",
    documents=adaylar,
    top_n=3,
    model="rerank-multilingual-v3.0"
)

for r in results.results:
    print(f"Skor: {r.relevance_score:.3f} | {adaylar[r.index][:80]}")
```

`relevance_score` 0-1 arasında bir değer döner; 1'e yakın değerler yüksek alaka anlamına gelir. `r.index` ise sonucun orijinal `adaylar` listesindeki konumunu verir; böylece hem skoru hem de tam metni kolayca alabilirsin.

Cohere'e alternatif olarak `cross-encoder/ms-marco-MiniLM-L-6-v2` gibi HuggingFace modellerini yerel olarak çalıştırmak da mümkün; bu seçenek API maliyetini sıfırlar ama donanım gereksinimini artırır.

> **Not:** Bu model yalnızca İngilizce MARCO veri setiyle eğitilmiştir. Türkçe corpus için `cross-encoder/mmarco-mMiniLMv2-L12-H384-v1` gibi çok dilli bir cross-encoder daha iyi sonuç verir.

## Maliyet-Kalite Tradeoff

Reranking'in kaçınılmaz bedeli: ekstra latency (gecikme). Cross-encoder 100 çifti değerlendirirken genellikle 100-500 ms ek süre ekler. Bu süre uygulama tipine göre kabul edilebilir ya da sorunlu olabilir.

Ne zaman reranking değer taşır?

Cevap kalitesinin kritik olduğu durumlarda. Bir sağlık danışma sistemi, hukuki analiz aracı veya finansal rapor oluşturucusu yanlış bilgi götürürse ciddi sonuçları var. Bu sistemlerde 300 ms gecikme önemsiz kalır.

Kullanıcının toleransı yüksekse. Bir araştırma asistanında kullanıcı zaten belge okuyor, düşünüyor, not alıyor; yarım saniye ek bekleme fark yaratmaz.

Ne zaman reranking atlanabilir?

Düşük latency kritikse. Gerçek zamanlı sohbet arayüzlerinde her ek millisaniye kullanıcı deneyimini etkiler; burada 1. aşama kalitesini artırmak (daha iyi chunking, daha iyi embedding modeli) daha verimli bir yatırım olabilir.

Küçük koleksiyonlarda. Beş bin chunk'tan oluşan bir koleksiyonda bi-encoder araması zaten yeterince hassas çalışıyorsa reranking overkill olur.

Sonuçları iyileştirdik. Bir de sorgunun kendisini dönüştürerek retrieval'ı güçlendirebiliriz.
