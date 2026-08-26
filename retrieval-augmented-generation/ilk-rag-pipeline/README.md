# İlk RAG Pipeline'ı

Tüm parçaları öğrendik: embedding, vektör DB, chunking, retrieval. Şimdi bunları bir araya getiriyorum. Bu derste, herhangi bir framework kullanmadan, sıfırdan çalışan bir RAG sistemi kuruyorum.

## Ne Kuracağız?

Bir metin dosyasını indeksleyip doğal dil sorguyla sorgulayan minimal bir sistem. İki bağımlılık var: `openai` (embedding ve chat completion için) ve `chromadb` (vektör depolama için). Bu gerçek bir production sistemi değil — disk persistansı yok, hata yönetimi minimal. Ama tam da bu yüzden öğretici: her adımı açıkta görebilirsin, sihirli bir soyutlamanın arkasında gizlenmiş değil.

Sistemin işleyişi şu sırayı izliyor:

1. Metin dosyasını oku ve chunk'lara böl
2. Her chunk için embedding üret
3. Embedding'leri Chroma'ya yaz
4. Sorgu gelince: sorguyu da embed et, en yakın chunk'ları bul, LLM'e bağlam olarak ver

## Adım 1: Doküman Yükleme ve Chunking

Basit bir karakter bazlı chunking fonksiyonuyla başlıyorum. Daha önce chunking stratejilerini incelemiştik; burada bilinçli olarak en sade yöntemi kullanıyorum — amaç pipeline'ın iskeletini net görmek.

```python
def yukle_ve_parcala(dosya_yolu: str, chunk_boyutu: int = 500) -> list[str]:
    with open(dosya_yolu, encoding="utf-8") as f:
        metin = f.read()
    return [metin[i:i+chunk_boyutu] for i in range(0, len(metin), chunk_boyutu)]
```

`chunk_boyutu=500` karakter bazlı bir değer. Kelime ortasından kesilebilir — production'da bu kabul edilemez ama şu an pipeline akışını görmek önceliğimiz. `RecursiveCharacterTextSplitter` gibi araçlar bu sorunu çözer; bunu bir sonraki derste göreceğiz.

## Adım 2: Embedding Üretme ve İndeksleme

Embedding üretmek için OpenAI'ın `text-embedding-3-small` modelini kullanıyorum. Chroma'nın bellek içi istemcisiyle bir koleksiyon açıyorum ve chunk'ları toplu olarak ekliyorum.

```python
import chromadb
from openai import OpenAI

openai_client = OpenAI()
db = chromadb.Client()
koleksiyon = db.create_collection("belgeler")

def embed(metin: str) -> list[float]:
    return openai_client.embeddings.create(
        model="text-embedding-3-small",
        input=metin
    ).data[0].embedding

chunklar = yukle_ve_parcala("belge.txt")
koleksiyon.add(
    documents=chunklar,
    embeddings=[embed(c) for c in chunklar],
    ids=[f"chunk-{i}" for i in range(len(chunklar))]
)
print(f"{len(chunklar)} chunk indekslendi.")
```

`chromadb.Client()` bellek içi çalışır; program kapanınca her şey gider. Gerçek kullanımda `chromadb.PersistentClient(path="./chroma_db")` ile diske yazarsın. Her chunk'ı ayrı ayrı embed ettiğim için OpenAI'a `len(chunklar)` kadar API çağrısı yapıyorum — batch API ile bu maliyet düşürülebilir ama şimdilik sadeliği tercih ediyorum.

## Adım 3: Sorgulama

Sorgu fonksiyonu üç şey yapıyor: sorguyu embed et, en yakın chunk'ları bul, LLM'e ver.

```python
def sor(soru: str) -> str:
    # Retrieve
    sonuclar = koleksiyon.query(
        query_embeddings=[embed(soru)],
        n_results=3
    )
    baglam = "\n\n".join(sonuclar["documents"][0])

    # Augment + Generate
    yanit = openai_client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": f"Yalnızca bu bağlamı kullan:\n\n{baglam}\n\nBağlamda olmayan bilgileri uydurmak yerine 'Bu konuda elimde bilgi yok' de."
            },
            {"role": "user", "content": soru}
        ]
    )
    return yanit.choices[0].message.content

print(sor("RAG nedir?"))
```

`n_results=3` ile en yakın üç chunk'ı alıyorum. Bunları `\n\n` ile birleştirip sistem mesajına yerleştiriyorum. Sistem mesajındaki kısıtlama kritik: LLM'e "bağlamda olmayan şeyleri uydurma" diyorum. Bu olmadan model eğitim verilerine dayalı bilgileri sızdırabilir ve sisteme güveni zedeler.

## Bu Sistemin Eksiklikleri

Kasıtlı olarak basit tuttuğum bu pipeline'ın gerçek dünyada yetersiz kalacağı noktaları listelemeliyim:

**Disk persistansı yok.** `chromadb.Client()` bellekte çalışır. Program her kapandığında indeks sıfırlanır. Ölçeklenebilir bir sistemde vektör DB'nin kalıcı depolamaya ihtiyacı var.

**Hata yönetimi yok.** OpenAI API'si zaman aşımına uğrasa, ağ kesilse veya rate limit gelirse kod çöker. Retry mantığı, fallback stratejisi gerekli.

**Tek embedding modeli hardcoded.** `text-embedding-3-small` değiştirmek istersen kodu düzenlemelisin. Framework'ler bu bağımlılığı konfigürasyona taşır.

**Batch indeksleme yok.** Chunk başına ayrı API çağrısı yapmak hem yavaş hem maliyetli. OpenAI'ın batch endpoint'i veya embedding'leri toplu alma yöntemleri var.

**Skor filtreleme yok.** `n_results=3` her zaman üç sonuç döndürür; bunların alaka düzeyi ne olursa olsun. Düşük skorlu chunk'lar bağlamı kirletir.

Bunları framework'ler çözer — ama ne çözdüklerini anlamak için önce bu sorunları kendin yaşaman gerekiyor. Bu yüzden sıfırdan başladık.

Sıfırdan çalışan bir sistem kurduk. LangChain ile nasıl daha hızlı ve temiz yaparız?
