# Agentic RAG

Klasik RAG sabit bir pipeline: kullanıcı sorar, sistem bir kez arar, LLM yanıt üretir. Ama bazı sorular tek turda çözülemiyor. Bu derste agent'ların kendi başına arama kararı aldığı Agentic RAG'ı açıklıyorum.

## Klasik RAG'ın Sınırı

Klasik RAG pipeline'ı şöyle çalışır: kullanıcı soruyu yazar, sistem bir kez vektör araması yapar, ilgili chunk'ları toplar, LLM bu chunk'larla cevap üretir. Tek tur. Sabit. Öngörülebilir.

Bu mimari basit sorular için yeterli. Ama "Hangi ürün grubumuzun 2023'te en çok büyüdüğünü ve bu büyümenin nedenini anlat" gibi bir soru birden fazla bilgi kaynağı gerektiriyor: önce satış rakamlarına bakman, sonra büyümenin en yüksek olduğu kategoriyi bulman, ardından o kategorinin büyüme dinamiklerini açıklayan ayrı bir dokümanı araştırman gerekiyor.

Statik pipeline bunu göremez. Tek bir sorgu üretir, tek bir arama yapar, elimdeki chunk'larla ne kadar cevap verebildiyse o kadar verir. Soru karmaşıklaştıkça cevap kalitesi düşer çünkü mimari bunun için tasarlanmamış.

## Agentic RAG Nedir?

Agentic RAG'da RAG bir araç (tool) olarak tanımlanır; LLM bu aracı ne zaman ve nasıl kullanacağına kendisi karar verir.

Farkı şu: klasik RAG'da pipeline araması zorunlu ve sabit adım sayısıyla yapılır. Agentic RAG'da agent aramanın gerekip gerekmediğini değerlendirir, gerekiyorsa hangi sorguyla yapacağını belirler, sonucu okuyup yeterli mi diye kontrol eder, yetersizse farklı bir sorguyla tekrar arar.

Bu esneklik iki şeyi mümkün kılıyor. Birincisi, birden fazla tur araması — agent ilk aramada bulduğu bilgiyi işleyip ikinci bir sorgu oluşturabilir. İkincisi, dinamik karar verme — bazı sorular için hiç arama yapmaya gerek olmayabilir, agent bunu da anlayabilir.

## ReAct Pattern

Agentic RAG'ın temelinde ReAct pattern yatıyor. Reason (Düşün) → Act (Hareket Et) → Observe (Gözlemle) döngüsü. Her turda agent şu adımları izliyor:

1. **Düşün**: "Bu soruyu cevaplamak için önce hangi bilgiye ihtiyacım var?"
2. **Hareket et**: RAG tool'unu uygun sorguyla çağır.
3. **Gözlemle**: Dönen chunk'ları oku ve değerlendir.
4. **Tekrar düşün**: "Yeterli bilgiye ulaştım mı? Başka bir şey aramam gerekiyor mu?"

Bu döngü cevap üretmeye hazır hissedene kadar devam ediyor. RAG bu döngünün içinde bir araçtır — döngüyü tetikleyen veya yönlendiren değil, çağrıldığında bilgi getiren bileşen.

Döngüde maksimum tur sayısı belirlemek önemli. Sonsuz döngüye girmemek için genellikle 5-10 tur sınırı koyuluyor.

## RAG Araç Olarak Tanımlama

Claude API ile RAG'ı tool olarak nasıl tanımladığını gösteriyorum:

```python
# Claude API ile RAG tool tanımı
rag_tool = {
    "name": "belgede_ara",
    "description": (
        "Şirket belgelerinde semantik arama yapar. "
        "Belirli bir konuyu araştırırken, güncel bilgiye ihtiyaç duyulduğunda kullan."
    ),
    "input_schema": {
        "type": "object",
        "properties": {
            "sorgu": {
                "type": "string",
                "description": "Aranacak konu veya soru"
            }
        },
        "required": ["sorgu"]
    }
}
# Agent hangi sorguyu yapacağına ve kaç kez yapacağına kendisi karar verir
```

Tool'un `description` alanı kritik. Agent hangi koşulda bu tool'u çağıracağına bu açıklamayı okuyarak karar veriyor. "Şirket belgelerinde" ve "güncel bilgiye ihtiyaç duyulduğunda" ifadeleri agent'a net sinyal veriyor.

Tool çağrısı geldiğinde backend'de gerçek RAG pipeline'ını çalıştırıyorum: sorguyu embed et, vektör DB'de ara, top-k chunk'ları döndür. Agent bu chunk'ları alıp döngüye devam ediyor.

## Self-RAG ve CRAG

Agentic RAG'ın üzerine inşa edilen iki önemli teknikten bahsediyorum.

**Self-RAG**: Model her retrieval adımında "bu bilgi yeterli mi?" diye değerlendirir. Getirilen chunk'lar soruyu yanıtlamak için yeterli değilse model yeniden sorgu üretir ve tekrar arar. Kalite değerlendirmesi LLM'in kendisi tarafından yapılıyor; ayrı bir değerlendirici modele gerek yok.

**CRAG (Corrective RAG)**: Getirilen chunk'ların kalitesini bir skor mekanizmasıyla ölçer. Skor düşükse — yani chunk'lar soruyla gerçekten alakalı değilse — sistem otomatik olarak web aramasına geçer. Vektör DB'deki bilginin yetersiz kaldığı durumlarda harici kaynaklara devrilmek mantıklı bir strateji.

Her iki yaklaşım da cevap kalitesini artırıyor ama ekstra LLM çağrısı gerektiriyor. Latency ve maliyet artıyor; bu dengeyi kullanım senaryosuna göre değerlendirmek gerekiyor.

Agent'lar RAG'ı araç olarak kullanmayı öğrendi. Peki dokümanlar arasındaki ilişkileri nasıl modelleriz?
