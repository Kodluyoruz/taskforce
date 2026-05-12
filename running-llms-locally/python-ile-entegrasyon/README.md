# Python ile Yerel LLM Entegrasyonu

Yerel olarak çalışan bir LLM'e Python'dan bağlanmak için iki ana yol var: `ollama` Python kütüphanesi ve `openai` kütüphanesi. Her ikisi de çalışır, ama farklı durumlar için uygundur.

## ollama vs openai Kütüphanesi

`ollama` kütüphanesi, Ollama'nın native Python sarmalayıcısıdır. Model listeleme, embedding alma, çok turlu chat gibi Ollama'ya özgü özelliklere tam erişim sağlar. Yalnızca Ollama kullanan bir projede bunu tercih et.

`openai` kütüphanesini ise şu durumda kullan: mevcut bir OpenAI entegrasyonu var ve sadece backend'i yerel modele taşımak istiyorsun. `base_url` parametresini `http://localhost:11434/v1` olarak ayarlamak yeterli; kodun geri kalanına dokunmana gerek yok.

```python
# openai kütüphanesi ile Ollama uyumluluk modu
from openai import OpenAI

istemci = OpenAI(
    base_url="http://localhost:11434/v1",
    api_key="ollama",  # zorunlu ama değer önemli değil
)

yanit = istemci.chat.completions.create(
    model="llama3.2",
    messages=[{"role": "user", "content": "Python nedir?"}],
)
print(yanit.choices[0].message.content)
```

## Kurulum

```bash
pip install ollama
```

Ollama servisinin arka planda çalışıyor olması gerekiyor. Yüklü değilse `ollama serve` komutuyla başlatabilirsin.

## Temel Kullanım

`ollama.chat()` çok turlu konuşmalar için, `ollama.generate()` tek seferlik metin üretimi için kullanılır. Fark önemli: `generate()` mesaj geçmişi tutmaz, sadece tek bir prompt alır.

```python
import ollama

# Tek sorgu — chat endpoint
yanit = ollama.chat(
    model="llama3.2",
    messages=[{"role": "user", "content": "Python list comprehension nedir?"}]
)
print(yanit["message"]["content"])

# generate() — sistem promptu veya ham metin üretimi için
yanit = ollama.generate(
    model="llama3.2",
    prompt="Python'da decorator kavramını açıkla:"
)
print(yanit["response"])

# Embedding al
sonuc = ollama.embed(
    model="nomic-embed-text",
    input="Bu metin vektöre dönüştürülecek"
)
print(f"Boyut: {len(sonuc['embeddings'][0])}")
```

## Streaming ile Gerçek Zamanlı Çıktı

`stream=True` ile model, yanıtı token token gönderir. Uzun yanıtlarda kullanıcı bekleme süresini azaltır; konsola anlık yazdırmak için idealdir.

```python
import ollama

def stream_sor(prompt: str, model: str = "llama3.2"):
    akis = ollama.chat(
        model=model,
        messages=[{"role": "user", "content": prompt}],
        stream=True
    )
    for parca in akis:
        # end="" ve flush=True ile karakter karakter yazdır
        print(parca["message"]["content"], end="", flush=True)
    print()  # satır sonu
```

## Async Kullanım

FastAPI veya asyncio tabanlı bir uygulama yazıyorsan `ollama.AsyncClient` kullan. Senkron `ollama.chat()` çağrısı async bir event loop içinde thread'i bloklar.

```python
import asyncio
import ollama

async def async_sor(prompt: str) -> str:
    istemci = ollama.AsyncClient()
    yanit = await istemci.chat(
        model="llama3.2",
        messages=[{"role": "user", "content": prompt}]
    )
    return yanit["message"]["content"]

async def async_stream(prompt: str):
    istemci = ollama.AsyncClient()
    akis = await istemci.chat(
        model="llama3.2",
        messages=[{"role": "user", "content": prompt}],
        stream=True
    )
    async for parca in akis:
        print(parca["message"]["content"], end="", flush=True)
    print()

asyncio.run(async_sor("Asyncio nedir?"))
```

## Konuşma Geçmişi Yönetimi

`ollama.chat()` state tutmaz; her çağrıda mesaj listesini sen gönderirsin. Çok turlu bir konuşma için `messages` listesini manuel olarak büyütmen gerekir.

```python
import ollama

mesajlar = [
    {"role": "system", "content": "Sen yardımcı bir Python asistanısın. Kısa ve net cevaplar ver."}
]

def ekle_ve_sor(girdi: str) -> str:
    mesajlar.append({"role": "user", "content": girdi})
    yanit = ollama.chat(model="llama3.2", messages=mesajlar)
    asistan_yaniti = yanit["message"]["content"]
    # asistan yanıtını da geçmişe ekle
    mesajlar.append({"role": "assistant", "content": asistan_yaniti})
    return asistan_yaniti
```

Geçmiş büyüdükçe model context penceresi dolmaya başlar. Uzun oturumlar için eski mesajları kırpabilir ya da özetleyebilirsin.

## Tam Örnek: Interaktif CLI Chat

```python
import ollama

# Basit tek sorgu
def sor(prompt: str, model: str = "llama3.2") -> str:
    yanit = ollama.chat(
        model=model,
        messages=[{"role": "user", "content": prompt}]
    )
    return yanit["message"]["content"]

# Streaming ile gerçek zamanlı çıktı
def stream_sor(prompt: str, model: str = "llama3.2"):
    akis = ollama.chat(
        model=model,
        messages=[{"role": "user", "content": prompt}],
        stream=True
    )
    for parca in akis:
        print(parca["message"]["content"], end="", flush=True)
    print()

# Konuşma geçmişiyle çok turlu chat
def interaktif_chat(model: str = "llama3.2"):
    mesajlar = []
    while True:
        girdi = input("Sen: ")
        if girdi.lower() in ("çıkış", "quit", "exit"):
            break
        mesajlar.append({"role": "user", "content": girdi})
        yanit = ollama.chat(model=model, messages=mesajlar)
        asistan_yaniti = yanit["message"]["content"]
        mesajlar.append({"role": "assistant", "content": asistan_yaniti})
        print(f"Model: {asistan_yaniti}\n")

if __name__ == "__main__":
    interaktif_chat()
```

Çalıştırmadan önce istediğin modelin yüklü olduğunu `ollama list` komutuyla kontrol et. `llama3.2` yoksa `ollama pull llama3.2` ile indirebilirsin.

`model` parametresini değiştirerek farklı modeller deneyebilirsin. `mistral`, `gemma3`, `phi4-mini` hepsi aynı API arayüzüyle çalışır; kod değişmez.
