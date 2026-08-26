# Chunking Stratejileri

Chunking'in neden gerekli olduğunu biliyoruz. Şimdi nasıl böleceğimize geliyoruz. Dört ana strateji var ve her birinin güçlü olduğu farklı senaryolar mevcut.

## Fixed-size (Sabit Boyut)

En basit yaklaşım: metni belirli bir karakter veya token sayısına ulaşınca kes. Algoritmanın doküman yapısı hakkında hiçbir ön bilgiye ihtiyacı yok.

Avantajları açık: implementasyonu birkaç satır kod, çalışma zamanı son derece hızlı, herhangi bir bağımlılık gerektirmiyor. Büyük hacimli ve yapısal olarak uniform verilerle — günlük logları, sensör çıktıları, tablo verileri — çalışırken bu sadelik değerli.

Dezavantajı da açık: metin bir cümlenin ortasında kesilebilir. "Kefalet şartı, sözleşmenin 14. maddesinde belirtilen koşullar çerçevesinde —" diye başlayan bir chunk orada bitebilir. Bir sonraki chunk "— geçerliliğini yitirir." diye başlar. Her iki parça da bağlamından kopuk hale gelir.

Ne zaman kullanılır: prototip aşamasında hızlı deney yapmak için, veri uniform yapıdaysa ve anlam bütünlüğü çok kritik değilse.

## Recursive Character Splitting

LangChain'in varsayılan text splitter'ının kullandığı yaklaşım. Sabit boyuttan bir adım akıllı: önce doğal sınırları dener, sığmazsa bir alt sınıra geçer.

Algoritma şu sırayla dener: önce `\n\n` (paragraf sonu), paragraf sınırında bölünemiyorsa `\n` (satır sonu), o da işe yaramazsa boşluk karakteri, son çare olarak karakter düzeyinde keser.

Bu hiyerarşi sayesinde mümkün olan en anlamlı doğal sınırda bölünür. Paragraf kalabiliyorsa paragraf bütün kalır. Cümle kalabiliyorsa cümle bölünmez. Yalnızca token limiti zorunlu kılıyorsa daha küçük sınırlara iner.

Başlangıç projeler için en iyi genel amaçlı seçenek budur. Ek bağımlılık gerektirmez, hızlıdır ve çoğu doküman tipinde makul sonuçlar verir.

## Sentence Splitting (Cümle Bölme)

NLTK veya spaCy gibi doğal dil işleme (NLP) kütüphaneleri kullanarak metnin cümle sınırlarını tespit eder ve bu sınırlarda böler.

Anlam bütünlüğü açısından recursive splitting'den belirgin biçimde daha iyi. Her chunk tam bir veya birkaç cümle içerir; cümle ortasında kesilme olmaz. Akademik makaleler, yasal belgeler, teknik raporlar gibi cümle yapısının özenle kurulduğu içeriklerde bu önemli.

Dezavantajı hız. NLTK veya spaCy'nin dil modelini yüklemesi ve her cümleyi parse etmesi zaman alır. Milyonlarca dokümanı indexlemek gibi yüksek hacimli senaryolarda bu gecikme gözle görülür hale gelir.

Ne zaman kullanılır: içerik kalitesinin öncelik taşıdığı, hacmin nispeten düşük tutulduğu akademik veya kurumsal belge sistemlerinde.

## Semantic Chunking

En gelişmiş strateji. Sabit karaktere veya cümle sınırına değil, anlama göre böler.

Çalışma mantığı: her cümleyi embedding modeline verip vektörünü çıkarır. Anlamca birbirine yakın ardışık cümleler — yani vektör uzayında birbirlerine yakın olanlar — aynı chunk'ta birleştirilir. İki cümle arasındaki anlam mesafesi bir eşiği aşarsa orada bölünür.

Sonuç: her chunk tek bir fikri veya konuyu kapsıyor. "Garanti koşulları" ile "ödeme takvimi" aynı chunk'ta birleşmez çünkü anlam olarak birbirinden uzaktır.

LlamaIndex'te `SemanticSplitterNodeParser` ile doğrudan kullanılabilir. Kalite açısından dört strateji içinde en iyisi. Ama bunun bedeli var: her cümle için embedding hesaplanması gerektiğinden hem en yavaş hem de en pahalı strateji bu.

Ne zaman kullanılır: retrieval kalitesinin her şeyin önünde tutulduğu, bütçenin ve işlem süresinin tolerans gösterdiği üretim sistemlerinde.

## Kod Karşılaştırması

```python
# Fixed-size — vanilla Python
def fixed_chunks(text: str, size: int = 500) -> list[str]:
    return [text[i:i+size] for i in range(0, len(text), size)]

# Recursive — LangChain
from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
    separators=["\n\n", "\n", " ", ""]
)
chunks = splitter.split_text(document)
```

Fixed-size implementasyonu doküman yapısı hakkında hiçbir şey bilmiyor; sadece sayıyor ve kesiyor. Recursive implementasyonu ise separator listesini sırayla deniyor ve her adımda biraz daha granüler bir sınıra iniyor.

## Karşılaştırma Tablosu

| Strateji | Kalite | Hız | Kullanım Senaryosu |
|----------|--------|-----|-------------------|
| Fixed-size | Düşük | Çok hızlı | Uniform veri, prototip |
| Recursive | Orta-İyi | Hızlı | Genel amaçlı başlangıç |
| Sentence | İyi | Orta | Raporlar, akademik |
| Semantic | En iyi | Yavaş | Kalite kritik, bütçe var |

Stratejiyi seçtik. Peki chunk boyutunu nasıl belirleyeceğiz?
