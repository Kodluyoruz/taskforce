# Ollama REST API Temelleri

Ollama, modelleri yerel makinende çalıştırırken aynı zamanda sana standart bir HTTP API sunuyor. Bu API sayesinde herhangi bir programlama dili ya da araçla Ollama'yı kullanabilirsin — ollamaya özel bir SDK indirmene gerek yok.

## API Nerede Çalışıyor?

Ollama başlatıldığında varsayılan olarak `http://localhost:11434` adresini dinler. Bu adresi tarayıcıda açarsan "Ollama is running" yanıtını görürsün. Tüm API endpoint'leri bu base URL üzerinden erişilebilir.

Port değiştirmek istersen Ollama'yı başlatmadan önce `OLLAMA_HOST` ortam değişkenini ayarlaman yeterli:

```bash
OLLAMA_HOST=0.0.0.0:8080 ollama serve
```

## İki Temel Endpoint

Ollama REST API'sinde sıklıkla kullandığın iki endpoint var:

- **`/api/generate`** — tek seferlik text completion. Bir prompt gönderirsin, model yanıt üretir ve biter.
- **`/api/chat`** — çok turlu sohbet. Önceki mesajları `messages` dizisinde taşıyarak konuşma geçmişini korursun.

Çoğu durumda `/api/chat` daha kullanışlıdır çünkü system prompt ve önceki konuşmayı kolayca iletebilirsin. `/api/generate` ise daha basit, tek seferlik görevler için tercih edilebilir.

## Streaming Davranışı

Her iki endpoint de varsayılan olarak **streaming** modunda çalışır: model token ürettikçe her token ayrı bir JSON satırı olarak yanıta eklenir. Bu, kullanıcı arayüzlerinde karakterlerin tek tek yazılıyormuş gibi görünmesini sağlar.

Streaming istersen `"stream": true` göndermen gerekiyor (ya da alanı hiç ekleme, zaten true geliyor). Her satır şöyle görünür:

```json
{"model":"llama3.2","created_at":"...","response":"P","done":false}
{"model":"llama3.2","created_at":"...","response":"ython","done":false}
{"model":"llama3.2","created_at":"...","response":" bir","done":false}
{"model":"llama3.2","created_at":"...","response":"","done":true}
```

`"done": true` gördüğünde stream bitmiştir. Son satırda `total_duration`, `eval_count` gibi istatistik alanları da gelir.

Eğer tüm yanıtı tek seferde almak istiyorsan `"stream": false` gönder. Bu durumda Ollama işlemi tamamlayıp tek bir JSON yanıtı döndürür.

## `/api/generate` Yapısı

Request body'deki zorunlu alan sadece `model` ve `prompt`. `stream` opsiyoneldir.

```bash
# /api/generate - stream kapalı
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Python nedir?",
  "stream": false
}'
```

Yanıtta `response` alanı modelin ürettiği metni tutar:

```json
{
  "model": "llama3.2",
  "response": "Python, yüksek seviyeli, dinamik tipli bir programlama dilidir...",
  "done": true,
  "total_duration": 4823000000,
  "eval_count": 142
}
```

İstek gövdesine `system` alanı ekleyerek sistem promptu da geçebilirsin:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "system": "Kısa ve öz yanıtlar ver.",
  "prompt": "Recursion nedir?",
  "stream": false
}'
```

## `/api/chat` Yapısı

`/api/chat` endpoint'i `messages` dizisi alır. Her mesaj `role` (user, assistant, system) ve `content` alanlarını içerir. Konuşma geçmişini sen tutuyorsun; her istekte tüm geçmişi gönderiyorsun.

```bash
# /api/chat - stream kapalı
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    {"role": "user", "content": "Merhaba!"}
  ],
  "stream": false
}'
```

Yanıtta `message` objesi içinde `role` ve `content` alanları gelir:

```json
{
  "model": "llama3.2",
  "message": {
    "role": "assistant",
    "content": "Merhaba! Sana nasıl yardımcı olabilirim?"
  },
  "done": true
}
```

Konuşmayı sürdürmek için önceki mesajları diziye eklemeye devam edersin:

```bash
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "messages": [
    {"role": "user", "content": "Merhaba!"},
    {"role": "assistant", "content": "Merhaba! Sana nasıl yardımcı olabilirim?"},
    {"role": "user", "content": "Python öğrenmek istiyorum, nereden başlayayım?"}
  ],
  "stream": false
}'
```

## Python ile Raw HTTP İstekleri

Ollama'ya istek atmak için `requests` kütüphanesi yeterli — herhangi bir Ollama-spesifik SDK gerekmez:

```python
import requests

# /api/generate kullanımı
def generate(prompt: str, model: str = "llama3.2") -> str:
    yanit = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": prompt,
            "stream": False  # Tek seferde tüm yanıtı al
        }
    )
    yanit.raise_for_status()
    return yanit.json()["response"]

# Chat endpoint kullanımı
yanit = requests.post("http://localhost:11434/api/chat", json={
    "model": "llama3.2",
    "messages": [{"role": "user", "content": "Python list comprehension nedir?"}],
    "stream": False
})
print(yanit.json()["message"]["content"])
```

Streaming yanıtları satır satır işlemek istersen `stream=True` kullan — HTTP bağlantısını açık tutar ve her satırı geldikçe okursun:

```python
import requests, json

# Streaming yanıtı satır satır oku
with requests.post(
    "http://localhost:11434/api/chat",
    json={
        "model": "llama3.2",
        "messages": [{"role": "user", "content": "Kısa bir hikaye yaz."}],
        "stream": True  # Streaming aktif
    },
    stream=True
) as r:
    for satir in r.iter_lines():
        if satir:
            veri = json.loads(satir)
            print(veri["message"]["content"], end="", flush=True)
            if veri.get("done"):
                print()  # Son satırda yeni satır ekle
                break
```

## options Alanı

Her iki endpoint de `options` objesi kabul eder. Buraya sıcaklık, top_p, seed gibi parametreler girebilirsin:

```python
import requests

yanit = requests.post("http://localhost:11434/api/generate", json={
    "model": "llama3.2",
    "prompt": "Bir yazılım mimarisi öner.",
    "stream": False,
    "options": {
        "temperature": 0.7,   # Yaratıcılık seviyesi (0-2)
        "top_p": 0.9,         # Nucleus sampling
        "seed": 42            # Tekrarlanabilir sonuç için
    }
})
print(yanit.json()["response"])
```

REST API'yi doğrudan kullanmak, Ollama'yı herhangi bir dil veya ortama entegre etmenin en taşınabilir yolu. Shell script, Go, Rust veya başka bir dilde yazılmış bir uygulama da aynı endpoint'leri kullanarak modellere erişebilir.
