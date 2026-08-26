# Hybrid Search

Semantik arama güçlü ama bazı durumlarda yetersiz kalıyor. Bu derste semantik arama ile anahtar kelime aramasını birleştiren hybrid search'ü açıklıyorum.

## Semantik Aramanın Körü

Embedding tabanlı arama anlam benzerliğini yakalar; "araba" ile "otomobil"in aynı şeyi kastettiğini anlar. Ama bazı terimler anlam değil, exact match (tam eşleşme) gerektirir.

Düşün: kullanıcı "ISO 27001 uyumluluk gereksinimleri" diye soruyor. Embedding modeli "ISO 27001" terimini duymuş olabilir ama bu standartın sayısal kimliğini anlam olarak kavrayamaz; benzer sayılarla karıştırabilir veya yeterince uzak bir vektör üretebilir. "GPT-4o" gibi ürün kodları, "CVE-2024-1234" gibi güvenlik açığı kimlikleri, "SKU-8821-B" gibi ürün numaraları — bunların hepsi için embedding modeli yanıltıcı davranabilir.

Bu durum özellikle şu alanlarda öne çıkar: teknik dokümantasyon, hukuki metinler, tıbbi literatür, e-ticaret katalogları. Kullanıcı tam olarak ne aradığını biliyor ve sistemi yanıltacak bir parafraz istemeyebilir.

## BM25: Anahtar Kelime Araması

BM25, TF-IDF'in (Term Frequency – Inverse Document Frequency) geliştirilmiş halidir ve anahtar kelime aramasının standart algoritması olarak onlarca yıldır kullanılmaktadır.

İki temel kavram üzerine kuruludur:

**TF (Term Frequency):** Bir terim bir belgede ne kadar sık geçiyorsa o belgeye o terim için daha yüksek skor verilir. Ama salt sıklık yanıltıcı olabilir; "ve", "ile" gibi bağlaçlar her belgede sık geçer.

**IDF (Inverse Document Frequency):** Nadir terimler daha değerlidir. "Kefalet" terimi koleksiyonun yüzde birinde geçiyorsa, "sözleşme" terimine kıyasla çok daha bilgi taşıyan bir göstergedir. IDF nadir terimlere daha yüksek ağırlık verir.

BM25 bu ikisini dengeler; üstüne belge uzunluğu normalizasyonu ekler: kısa belgeler terimin sık geçmesinden orantısız avantaj kazanmaz.

Elasticsearch ve OpenSearch'ün varsayılan tam metin arama motoru BM25'tir. Vektör veritabanları değildir; tam tersi yönde bir teknoloji. Anlam yok, bağlam yok — ama bir terim oradaysa kesinlikle bulur.

## Hybrid Search = BM25 + Semantic

Her iki yöntemin güçlü yanlarını birleştiren hybrid search (karma arama), aynı sorgu için hem BM25 hem de embedding aramasını çalıştırır ve iki sonuç listesini birleştirir.

Birleştirme naif bir basit birleştirme değil. İki listedeki sıra pozisyonlarını göz önüne alan **RRF (Reciprocal Rank Fusion)** yöntemi standarttır. Her belge için her listedeki sıra pozisyonu kullanılarak bir birleşik skor hesaplanır.

RRF formülü: `skor(d) = Σ 1 / (k + rank(d))`

(Formülde rank 1'den başlar; Python'un sıfır tabanlı `enumerate`'i kullandığımızda `1/(k + rank + 1)` yazıyoruz — bu ikisi aynı sonucu verir.)

Burada `k` genellikle 60 olarak seçilir; bu değer yüksek sıralardaki belgelere verilen ağırlığın düşük sıralardakilere kıyasla ne kadar fazla olacağını ayarlar. Bir belge her iki listede de üst sıralarda görünüyorsa nihai skoru yüksek olur.

## RRF Örneği

```python
def rrf_fusion(
    bm25_results: list[str],
    semantic_results: list[str],
    k: int = 60
) -> list[str]:
    scores: dict[str, float] = {}

    for rank, doc_id in enumerate(bm25_results):  # rank 0'dan başlar
        scores[doc_id] = scores.get(doc_id, 0) + 1 / (k + rank + 1)

    for rank, doc_id in enumerate(semantic_results):  # rank 0'dan başlar
        scores[doc_id] = scores.get(doc_id, 0) + 1 / (k + rank + 1)

    return sorted(scores, key=scores.get, reverse=True)
```

Bu fonksiyon iki listeyi girdi olarak alır — her liste belge kimliklerini içerir ve sıralıdır. Döngü her liste için aynı mantığı uygular: her belgenin sırasına bakılır, formül uygulanır ve skor biriktirilir. Bir belge her iki listede de görünüyorsa her iki döngüde de skor alır ve toplamı artar. Sonunda yüksek skordan düşük skora sıralı bir liste döner.

Weaviate ve Pinecone gibi vektör veritabanları hybrid search'ü yerel olarak destekler; RRF'yi kendin yazman gerekmez. Ancak hangi ağırlığı semantik aramaya, hangisini BM25'e vereceğini kontrol etmek istediğinde manuel uygulama daha esnek olur.

## Ne Zaman Hybrid?

Her sistem için hybrid search gerekmez. Saf semantik arama genellikle yeterlidir; hybrid ekstra karmaşıklık demek.

Hybrid search'ün değer katacağı senaryolar:

**Teknik dokümantasyon:** Ürün kodları (SKU, model numarası), CVE güvenlik açığı numaraları, API endpoint isimleri, kütüphane fonksiyon adları. Bu terimleri sadece embedding'e bırakmak riskli.

**Hukuki metinler:** Madde numaraları ("Madde 14/3"), kanun numaraları ("6698 sayılı Kanun"), mahkeme kararı kimlikleri. Hukukçular exact match bekler; benzer bir madde numarası işe yaramaz.

**Tıbbi literatür:** İlaç isimleri, ICD-10 kodları, LOINC kodları. "aspirin" ile "asetilsalisilik asit" arasındaki bağı embedding yakalar; ama "C09AA05" gibi bir ATC kodu için exact match şarttır.

Genel kurumsal sohbet botu veya müşteri destek sistemi için saf semantik arama genellikle yeterlidir. Kullanıcı soruları doğal dil içerdiğinde embedding bunları iyi işler.

Hybrid search ile daha geniş bir ağ attık. Peki gelen sonuçları nasıl daha iyi sıralayabiliriz?
