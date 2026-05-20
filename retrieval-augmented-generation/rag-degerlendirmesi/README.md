# RAG Değerlendirmesi

RAG sistemi kuruldu. Ama nasıl iyi çalıştığını nasıl ölçeceğiz? Bu derste retrieval ve generation kalitesini değerlendirmek için kullanılan metrikleri ve RAGAS framework'ünü açıklıyorum.

## Neden Değerlendirme Zor?

RAG sistemlerinde iki ayrı bileşen var ve her biri bağımsız olarak başarısız olabilir. Retrieval (belge getirme) kötüyse LLM elindeki bağlamla doğru cevap üretemez — ne kadar güçlü bir model olursa olsun. Generation (cevap üretme) kötüyse bu kez retrieval iyi olsa bile model yanıltıcı veya alakasız bir cevap üretir. Hangisinin başarısız olduğunu ayırt etmek, düzeltme için kritik.

Bir başka zorluk: "doğru cevap" kavramı çoğu zaman özneldir. "RAG nedir?" sorusuna iki farklı uzmanın verdiği cevap farklı kelimeler taşısa da ikisi de doğru olabilir. Otomatik metrikler bu nüansı yakalamakta zorlanır. Bu yüzden hem otomatik metrikler hem de insan değerlendirmesi gerekebilir.

## Retrieval Metrikleri

Retrieval kalitesini ölçmek için üç temel metrik kullanılıyor:

**Precision@k:** Getirilen k chunk içinde gerçekten alakalı olanların oranı. k=5 için 3 alakalı chunk varsa Precision@5 = 0.6. Yüksek precision az gürültü demek — LLM'e gereksiz bilgi gitmez.

**Recall@k:** Koleksiyondaki tüm alakalı chunk'ların kaçının getirildiğini ölçüyor. Koleksiyonda 10 alakalı chunk varsa ve sistem bunların 7'sini getiriyorsa Recall@10 = 0.7. Yüksek recall az atlama demek — model cevap için gereken bilgiyi kaçırmaz.

**MRR (Mean Reciprocal Rank):** İlk alakalı sonucun sıra pozisyonuna bakıyor. İlk sıradaki chunk alakalıysa MRR = 1.0; ikinci sıradaysa MRR = 0.5; üçüncüdeyse MRR = 0.33. RAG sistemlerinde LLM genellikle ilk chunk'lara daha fazla dikkat ettiğinden MRR önemli bir gösterge.

Precision ve recall arasında doğal bir gerilim var. k'yı artırınca recall genellikle yükselir ama precision düşer — daha fazla chunk getirince alakasız olanlar da dahil olur.

## Generation Metrikleri

Retrieval iyi çalışıyor olsa bile modelin ürettiği cevabı ayrıca değerlendirmek gerekiyor:

**Faithfulness (Sadakat):** Üretilen cevap yalnızca verilen bağlamdan mı türüyor? Yoksa model kendi eğitim verisinden "uyduruyor" mu? Faithfulness = 1.0 cevabın tamamen bağlama dayandığı anlamına geliyor. Bu metrik hallucination'ı (model uydurması) doğrudan ölçüyor.

**Answer Relevance (Cevap Alakası):** Üretilen cevap soruyu gerçekten yanıtlıyor mu? Bağlama sadık ama soruyla alakasız bir cevap mümkün — bu metrik onu yakalıyor.

**Context Recall:** LLM'in doğru cevap vermek için ihtiyaç duyduğu bilginin ne kadarının getirilen context içinde yer aldığını ölçüyor. Referans (ground truth) cevabı baz alıyor; bu yüzden golden dataset gerektiriyor.

- **Context Precision (Bağlam Hassasiyeti)**: Getirilen chunk'ların ne kadarı cevap için gerçekten gerekli? Yüksek precision = az gürültü, LLM yalnızca alakalı bilgiyle besleniyor.

## RAGAS ile Değerlendirme

RAGAS (Retrieval Augmented Generation Assessment), bu metrikleri LLM destekli otomatik değerlendirmeyle hesaplayan bir framework. Her metrik için ayrı ayrı LLM çağrısı yaparak puanlama üretiyor — insan müdahalesi olmadan.

```python
from ragas import evaluate, EvaluationDataset
from ragas.metrics import Faithfulness, AnswerRelevancy, ContextRecall, ContextPrecision

# RAGAS v0.2+ API — büyük harfli sınıflar kullanılıyor
ornekler = [
    {
        "user_input": "RAG nedir?",
        "response": "RAG, vektör aramasıyla bağlam getirip LLM'e veren bir tekniktir.",
        "retrieved_contexts": ["RAG retrieval-augmented generation anlamına gelir..."],
        "reference": "RAG, LLM'e dış bilgi ekleyen bir yaklaşımdır."
    },
    {
        "user_input": "Chunking neden gerekli?",
        "response": "Büyük dokümanlar tek vektöre sığmaz; chunking ile parçalanır.",
        "retrieved_contexts": ["Chunking, dokümanı belirli boyutlarda parçalara bölme işlemidir..."],
        "reference": "Chunking token limiti ve anlam bütünlüğü için gereklidir."
    }
]

dataset = EvaluationDataset.from_list(ornekler)
sonuclar = evaluate(
    dataset,
    metrics=[Faithfulness(), AnswerRelevancy(), ContextRecall(), ContextPrecision()]
)
print(sonuclar)
```

`evaluate` fonksiyonu her satır için üç metriği hesaplıyor ve özet bir skor döndürüyor. Sonuçlar 0 ile 1 arasında — yüksek değer iyi performans. Hangi soruların düşük faithfulness aldığını görmek için `sonuclar.to_pandas()` ile ayrıntılı inceleme yapılabilir.

RAGAS'ın bir kısıtı var: değerlendirme metriğini hesaplamak için kendisi de bir LLM kullanıyor. Bu ek maliyet ve latency demek. Küçük test setlerinde sorun değil ama büyük dataset'lerde maliyeti hesaba katmak gerekiyor.

## Golden Dataset Hazırlamak

Otomatik metrikler için zemin gerçeği (ground truth) gerekiyor — buna golden dataset diyoruz. Her örnek üç bileşenden oluşuyor: soru, doğru cevap ve bu cevabı destekleyen kaynak chunk'lar.

Golden dataset hazırlamanın birkaç yolu var. Alan uzmanları soru-cevap çiftleri yazabilir. Mevcut dokümanlardan LLM ile otomatik soru üretip sonra insan filtresi eklenebilir. Kullanıcı geri bildirimi — "bu cevap yardımcı olmadı" gibi işaretlemeler — zaman içinde kaynak olabilir.

Ne kadar örnek lazım: 50-100 örnek başlangıç için yeterli. Önemli olan kapsama — domain'in farklı konularından, farklı zorluk seviyelerinden örnekler olmalı. Zaman içinde yeni konular ve edge case'ler ekleyerek büyütmek gerekiyor. Tek seferlik değil, yaşayan bir dataset.

Sistemin ne kadar iyi çalıştığını ölçmeyi öğrendik. Production'a almak için ne gerekiyor?
