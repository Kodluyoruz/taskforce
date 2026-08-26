# Metadata ve Filtreleme

Chunk'ları doğru boyutta böldük. Ama arama sırasında "yalnızca 2024 yılından belgeler" veya "sadece hukuk departmanı" gibi kısıtlamalar nasıl uygulayacaksın? Yanıt: metadata.

## Metadata Nedir?

Metadata, chunk'ın içeriğinin dışında kalan ama o chunk hakkında bilgi veren ek veridir. Chunk metni "GDPR uyumluluk rehberi bölüm 3..." ise, metadata bu chunk'ın hangi dosyadan geldiğini, hangi sayfada yer aldığını, kimin yazdığını, hangi departmana ait olduğunu, hangi yıl oluşturulduğunu tutar.

Pratik örnekler: kaynak dosya adı, sayfa numarası, bölüm başlığı, oluşturma tarihi, yazar adı, kategori etiketi, departman kodu, belge versiyonu, dil kodu, gizlilik seviyesi.

Her chunk vektörüyle birlikte saklanır. Vektör uzayında benzerlik araması yapılırken metadata sorguya ek kısıtlar ekler. Vektör "bu soruya anlam olarak en yakın chunk'ları bul" sorusunu yanıtlar; metadata "ama yalnızca bu koşulları karşılayanlar arasından" kısmını ekler.

## Neden Önemli?

Semantik arama güçlü ama tek başına yeterli olmadığı senaryolar var.

Bir şirketin RAG sistemi birden fazla departmanın belgelerini barındırıyor olabilir — hukuk, finans, İK, ürün geliştirme. Kullanıcı "sözleşme fesih prosedürü nedir?" diye sorduğunda sistem tüm departmanların belgelerinden sonuç döndürür. Ama bu kullanıcı yalnızca hukuk departmanının belgelerine erişim yetkisine sahip. Metadata filtrelemesi bu erişim kontrolünü mümkün kılar.

Zamana duyarlı içeriklerde de metadata kritik. "2024 yılı bütçe rakamları nedir?" sorusu için 2021 veya 2022 rakamlarının retrieve edilmesi yanlış yanıtlara yol açar. `yil: 2024` filtresiyle arama yalnızca ilgili dönemin belgelerinde yapılır.

Semantik benzerlik de bazen yanlış yönlendirebilir. Farklı yıllara ait iki rapor benzer kelimeler kullanıyor olabilir — anlam olarak yakın görünürler. Ama içerik olarak çok farklı gerçeklikleri yansıtıyorlar. Metadata filtresi bu yanılsamayı kırar.

## Chroma'da Metadata Örneği

```python
import chromadb

client = chromadb.PersistentClient(path="./chroma_db")
collection = client.get_or_create_collection("belgeler")

# Metadata ile ekle
collection.add(
    documents=["GDPR uyumluluk rehberi bölüm 3..."],
    metadatas=[{
        "kaynak": "gdpr-rehber.pdf",
        "sayfa": 12,
        "bolum": "Veri İşleme",
        "yil": 2024,
        "departman": "hukuk"
    }],
    ids=["gdpr-003"]
)

# Filtrelenmiş arama
results = collection.query(
    query_texts=["veri silme hakkı nedir?"],
    where={"departman": "hukuk", "yil": 2024},
    n_results=5
)
print(results["documents"])
```

`where` parametresi Chroma'nın metadata filtreleme arayüzü. Semantik arama sorguyla paralel çalışır: vektör benzerliği ve metadata koşulunun ikisi de sağlayan chunk'lar sonuç listesine girer. Koşullardan birini sağlamayan chunk ne kadar anlam olarak yakın olursa olsun elenir.

Aynı mantık Pinecone ve Weaviate gibi diğer vektör veritabanlarında da çalışır, sözdizimi biraz farklı olsa da temel kavram aynıdır.

## Metadata Tasarım İlkeleri

Metadata şemasını oluştururken birkaç pratik kuralı aklında tutmak gerekiyor.

Düz değerler kullan. Metadata değerleri string, int veya bool olmalı. İç içe geçmiş (nested) sözlükler veya listeler çoğu vektör veritabanında desteklenmez ya da sınırlı destek görür. `{"yazar": {"ad": "Ali", "departman": "hukuk"}}` yerine `{"yazar_ad": "Ali", "yazar_departman": "hukuk"}` kullan.

Filtrelenecek alanları önceden planla. Bir chunk'a eklediğin her metadata alanı hem depolama hem de sorgulama maliyeti getiriyor. "Bu alanla gerçekten filtreleme yapacak mıyım?" sorusunu her alan için sor. Gereksiz alanları şemaya ekleme.

Metadata şemasını sabit tut. Bu en kritik kural. Şemayı sonradan değiştirmek — yeni alan eklemek, mevcut alanı yeniden adlandırmak — tüm koleksiyonun yeniden indekslenmesini gerektirir. Milyonlarca chunk içeren bir sistemde bu saatler sürebilir ve ciddi operasyonel yük getirir. Baştan doğru tasarla.

## Parent-Child Chunking

Standart chunking'de retrieval ve LLM bağlamı için aynı chunk kullanılır. Parent-child (ebeveyn-çocuk) yaklaşımı bu ikisini ayırır.

Küçük child chunk'larla arama yaparsın — daha hassas semantik eşleşme elde edersin. Ama retrieve edilen chunk LLM'e gönderilmez; bunun yerine child chunk'ın bağlı olduğu büyük parent chunk LLM'e verilir. LLM zengin bağlamla çalışır, arama hassasiyetiyle ödün vermek zorunda kalmaz.

Somut bir örnek: 128 tokenlik child chunk'larla arama yapıyorsun. Kullanıcının sorusuna en yakın child chunk'ı buluyorsun. Sonra bu chunk'ın parent'ını — 512 tokenlik büyük bloğu — metadata üzerinden sorguluyorsun ve LLM'e bunu gönderiyorsun.

Bu ilişkiyi kurmak için child chunk'lara `parent_id` gibi bir metadata alanı eklenir. LlamaIndex'te `NodeWithScore` yapısı ve parent-child referans sistemi bu örüntüyü doğrudan destekler. Chroma veya Pinecone ile de aynı mantığı `parent_id` metadata alanı üzerinden implement edebilirsin.

İndeksleme bölümünü tamamladık. Artık aramaya geçiyoruz: benzerlik hesaplamaları ve gelişmiş retrieval yöntemleri.
