# Tool Calling

## Tool Calling Nedir?

LLM'ler metin üretir; ancak hesap yapamaz, internete erişemez, veritabanı sorgulayamaz. Tool calling bu sınırı aşmak için kullanılan bir pattern: modele fonksiyonların tanımını gönderirsin, model yanıtında bu fonksiyonların hangisini hangi argümanlarla çağırmak istediğini belirtir. Sen o fonksiyonu çalıştırırsın ve sonucu tekrar modele gönderirsin.

Yani akış şöyle işliyor:

1. Kullanıcı mesajını + mevcut fonksiyonların listesini modele gönder
2. Model yanıtta tool call içeriyorsa → fonksiyonu çalıştır, sonucu `tool` role'üyle mesaj dizisine ekle
3. Güncellenmiş mesaj dizisini tekrar modele gönder
4. Model artık fonksiyon sonucunu biliyor ve kullanıcıya yanıt üretiyor

## Hangi Modeller Destekliyor?

Her model tool calling desteklemiyor. Ollama'da destekleyen bazıları:

- `llama3.1`, `llama3.2`, `llama3.3`
- `qwen2.5`, `qwen2.5-coder`
- `mistral-nemo`
- `firefunction-v2`

Model seçerken mutlaka modelin Ollama sayfasında "Tools" etiketini kontrol et.

## Tek Tool Çağrısı

Python SDK, fonksiyon tanımını otomatik olarak JSON schema'ya çevirir. Docstring ve type hint'ler modelin fonksiyonu anlaması için önemli:

```python
import ollama

def hava_durumu_getir(sehir: str) -> str:
    """Şehrin güncel hava durumunu döndürür."""
    # Gerçek uygulamada bir weather API çağrısı yapılır
    return f"{sehir}: 22°C, güneşli"

# Tek tool çağrısı
yanit = ollama.chat(
    model="llama3.1",
    messages=[{"role": "user", "content": "İstanbul'un hava durumu nedir?"}],
    tools=[hava_durumu_getir],
)

if yanit.message.tool_calls:
    for cagri in yanit.message.tool_calls:
        if cagri.function.name == "hava_durumu_getir":
            sonuc = hava_durumu_getir(**cagri.function.arguments)
            print(f"Tool sonucu: {sonuc}")
```

`cagri.function.arguments` bir dict olarak gelir; `**` ile direkt fonksiyona açabilirsin.

## Paralel Tool Çağrısı

Model aynı anda birden fazla tool çağırabilir. Destekleyen modellerde bu davranış otomatik olarak gerçekleşiyor:

```python
import ollama

def hava_durumu_getir(sehir: str) -> str:
    """Şehrin güncel hava durumunu döndürür."""
    hava_veritabani = {
        "Istanbul": "22°C, güneşli",
        "Ankara": "15°C, bulutlu",
        "Izmir": "28°C, açık"
    }
    return hava_veritabani.get(sehir, f"{sehir}: veri yok")

mesajlar = [
    {"role": "user", "content": "İstanbul ve Ankara'nın hava durumunu öğren."}
]

yanit = ollama.chat(
    model="llama3.1",
    messages=mesajlar,
    tools=[hava_durumu_getir],
)

# Model iki ayrı tool çağrısı dönebilir
if yanit.message.tool_calls:
    mesajlar.append(yanit.message)  # Asistan mesajını geçmişe ekle
    for cagri in yanit.message.tool_calls:
        sonuc = hava_durumu_getir(**cagri.function.arguments)
        # Her tool sonucunu mesaj olarak ekle
        mesajlar.append({
            "role": "tool",
            "content": sonuc,
            "tool_name": cagri.function.name
        })

    # Tüm tool sonuçlarını modele gönder
    final = ollama.chat(model="llama3.1", messages=mesajlar)
    print(final.message.content)
```

## Agent Döngüsü

Gerçek agent senaryolarında model ihtiyaç duydukça tool çağırmaya devam eder. Döngü, model artık tool çağırmadığında, yani `tool_calls` boş döndüğünde sona erer:

```python
mesajlar = [{"role": "user", "content": "İstanbul ve Ankara'nın hava durumunu karşılaştır"}]

while True:
    yanit = ollama.chat(model="llama3.1", messages=mesajlar, tools=[hava_durumu_getir])
    mesajlar.append(yanit.message)

    if not yanit.message.tool_calls:
        # Model artık tool çağırmıyor, final yanıt hazır
        print(yanit.message.content)
        break

    for cagri in yanit.message.tool_calls:
        sonuc = hava_durumu_getir(**cagri.function.arguments)
        mesajlar.append({"role": "tool", "content": sonuc, "tool_name": cagri.function.name})
```

Bu döngü patterninin birkaç önemli noktası var:

- `mesajlar.append(yanit.message)` ile modelin asistan yanıtını geçmişe ekliyorsun — bunu atlamamak gerekiyor, model hangi tool'ları çağırdığını hatırlamalı.
- `"role": "tool"` ile tool sonucunu modele bildiriyorsun.
- `tool_name` alanına fonksiyon adını veriyorsun; model birden fazla tool varken hangisinin sonucu olduğunu bu sayede anlıyor.

## Birden Fazla Tool Tanımlamak

Uygulamana birden fazla fonksiyon ekleyebilirsin. Model hangisini çağıracağına kullanıcının sorusuna göre karar verir:

```python
import ollama
import datetime

def hava_durumu_getir(sehir: str) -> str:
    """Şehrin güncel hava durumunu döndürür."""
    return f"{sehir}: 22°C, güneşli"

def saat_getir(sehir: str) -> str:
    """Şehirdeki güncel saati döndürür."""
    # Gerçek uygulamada timezone dönüşümü yapılır
    return f"{sehir}: {datetime.datetime.now().strftime('%H:%M')}"

def doviz_kuru(kaynak: str, hedef: str) -> str:
    """İki para birimi arasındaki döviz kurunu döndürür."""
    # Gerçek uygulamada bir finans API'si çağrılır
    return f"1 {kaynak} = 2.5 {hedef}"

mesajlar = [
    {"role": "user", "content": "İstanbul'da saat kaç ve dolar/TL kuru ne?"}
]

while True:
    yanit = ollama.chat(
        model="llama3.1",
        messages=mesajlar,
        tools=[hava_durumu_getir, saat_getir, doviz_kuru]  # Tüm tool'lar
    )
    mesajlar.append(yanit.message)

    if not yanit.message.tool_calls:
        print(yanit.message.content)
        break

    # Tool ismine göre doğru fonksiyonu çağır
    tool_haritasi = {
        "hava_durumu_getir": hava_durumu_getir,
        "saat_getir": saat_getir,
        "doviz_kuru": doviz_kuru,
    }

    for cagri in yanit.message.tool_calls:
        fonksiyon = tool_haritasi.get(cagri.function.name)
        if fonksiyon:
            sonuc = fonksiyon(**cagri.function.arguments)
            mesajlar.append({
                "role": "tool",
                "content": sonuc,
                "tool_name": cagri.function.name
            })
```

Tool calling, LLM'leri gerçekten faydalı uygulamalara dönüştürmenin temel taşı. Veritabanı sorgulaması, dosya okuma/yazma, harici API çağrısı — bunların hepsi bu pattern üzerine inşa edilebilir.
