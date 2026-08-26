# Graph RAG

Vektör arama anlamsal benzerliği bulur ama varlıklar arasındaki ilişkileri göremez. Bu derste bilgi grafikleri ile vektör aramayı birleştiren Graph RAG'ı inceliyorum.

## Vektör Aramanın Körü: İlişkiler

Şu soruyu bir düşün: "Ahmet Yılmaz ile doğrudan veya dolaylı olarak çalışan herkes kimdir?"

Vektör arama bu soruyu yanıtlayamaz. Embedding modeli "Ahmet Yılmaz" ve "çalışan" kelimelerinin anlamsal uzayını iyi biliyor ama "A → B → C" biçimindeki ilişki zincirlerini göremiyor. Vektörler anlamsal benzerliği yakalar — bir cümlenin başka bir cümleye ne kadar benzediğini ölçer. Ama "Ahmet Yılmaz'ın yöneticisi Fatma Kaya, Fatma Kaya'nın ekibinde ise Mert Demir var" gibi bilgileri iki farklı doküman parçasında zincir şeklinde takip etmek vektör aramanın tasarım kapsamı dışında.

Sonuç: anlamsal benzerlik sorgularında vektör arama çok başarılı; ilişki tabanlı ve çok atlamalı (multi-hop) sorgularda başarısız.

## Bilgi Grafiği (Knowledge Graph)

Bilgi grafiği varlıkları (entity) ve aralarındaki ilişkileri (relation) yapısal olarak saklar. Temel birim triple (üçlü): `(özne, ilişki, nesne)`.

Somut örnekler:
- `(Ahmet Yılmaz, çalışıyor, Patika)`
- `(Patika, kuruldu, Türkiye)`
- `(Fatma Kaya, yönetiyor, Ahmet Yılmaz)`
- `(Mert Demir, raporluyor, Fatma Kaya)`

Bu triple'ları depoladığımda "Ahmet Yılmaz ile dolaylı bağlantısı olanlar" sorgusunu graph traversal (graf gezintisi) ile yanıtlayabiliyorum: Ahmet → Fatma → Mert. Kaç atlama gerekiyorsa o kadar gidiyorum.

Graph DB'ler (Neo4j, NetworkX) bu yapıyı sakladığı için ilişki sorgularını hem hızlı hem de doğru yapabiliyor.

## Microsoft GraphRAG Yaklaşımı

Microsoft'un GraphRAG projesi bu fikri büyük ölçekte hayata geçiriyor. Pipeline şu adımlardan oluşuyor:

Dokümanları oku → LLM ile entity (varlık) ve relation (ilişki) çıkar → Grafiği yaz → Toplulukları (community) tespit et ve özetle → Community özetleri üzerinden arama yap.

"Community" kavramı önemli. Birbirine sıkı bağlı entity kümesi bir community oluşturuyor — örneğin bir şirketteki bir ekip, bir bilimsel alandaki araştırmacı grubu. GraphRAG bu toplulukları önceden özetliyor; sorgu geldiğinde doğrudan bu özetleri kullanarak hem hız kazanıyor hem de geniş kapsam sağlıyor.

İki sorgu modu var: **lokal sorgu** (tek varlık etrafında dar bir alan) ve **global sorgu** (tüm grafı etkileyen, geniş kapsamlı soruları yanıtlamak için tüm community özetlerini kullanan). Bu ayrım kullanım senaryosuna göre doğru modu seçmeni sağlıyor.

## Graph RAG Akışı

Bütünü şöyle özetliyorum:

```
Dokümanlar
    │
    ▼ LLM ile entity ve relation extraction
Bilgi Grafiği (Neo4j veya NetworkX)
    │
    ├─► Graph Traversal (ilişki bazlı arama)
    │
    ├─► Vektör Arama (semantik)
    │
    └─► Birleşik Sonuç → LLM → Yanıt
```

Vektör aramayla graf traversal'ı birlikte kullanmak kritik. Anlamsal benzerliğin güçlü olduğu yerde vektör arama devreye giriyor; ilişki zinciri gereken yerde graf gezintisi. İkisinin çıktısı birleşip LLM'e veriliyor.

## Ne Zaman Graph RAG?

Her senaryo için Graph RAG uygun değil. Şu durumlarda güçlü:

**Büyük, birbiriyle bağlantılı varlık setleri**: Kurumsal ilişki ağları (kim kime raporluyor, hangi ekip hangi projede), bilimsel literatür (yazar-makale-kavram ilişkileri), hukuki belgeler (madde, karar ve taraf bağlantıları).

**Multi-hop sorular**: "X kararını etkileyen tüm içtihatlar ve bu içtihatların dayandığı yasalar nelerdir?" sorusu birden fazla atlama gerektiriyor. Graf olmadan bu soruyu yanıtlamak ya çok sayıda ayrı vektör araması yapmayı ya da cevabı eksik bırakmayı gerektiriyor.

**Uyarı**: Graf oluşturma aşaması pahalı. Her belge parçasından entity ve relation çıkarmak için LLM çağrısı gerekiyor. Büyük bir corpus'ta bu işlem ciddi maliyet ve zaman anlamına geliyor. Ayrıca entity extraction kalitesi grafın doğruluğunu doğrudan etkiliyor; LLM'in çıkardığı varlıklar ve ilişkiler ne kadar tutarlıysa graftan elde edilen cevaplar o kadar güvenilir oluyor.

Graph RAG güçlü ama maliyetli. Son dersimizde Skills, RAG ve MCP'yi birlikte nasıl kullanırsın?
