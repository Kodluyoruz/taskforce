# OpenAI-Uyumlu API Kullanımı

Ollama, kendi `/api/generate` ve `/api/chat` endpoint'lerinin yanı sıra OpenAI API formatını da destekler. Bu, halihazırda OpenAI kütüphanesiyle yazılmış kodu birkaç satır değişiklikle Ollama'ya yönlendirebileceğin anlamına geliyor.

## Neden OpenAI-Uyumlu API?

Pek çok araç ve kütüphane OpenAI API formatını standart kabul ediyor: LangChain, LlamaIndex, AutoGen, ve daha onlarcası. Ollama'nın OpenAI uyumlu endpoint'lerini kullanmak, bu ekosistemi yerel modellerle kullanabilmeni sağlıyor. Ayrıca hem bulut tabanlı modelleri hem de yerel modelleri desteklemek istediğinde sadece `base_url` değiştirerek geçiş yapabilirsin.

## Endpoint Adresleri

OpenAI uyumlu endpoint'ler `http://localhost:11434/v1/` prefix'i altında çalışır:

| Endpoint | Açıklama |
|---|---|
| `/v1/chat/completions` | Chat tamamlama (GPT-4 formatıyla aynı) |
| `/v1/completions` | Metin tamamlama |
| `/v1/embeddings` | Embedding vektörleri |
| `/v1/models` | Yüklü modelleri listele |
| `/v1/responses` | OpenAI Responses API (deneysel; stateful sohbet ve `previous_response_id` desteklenmiyor) |

## API Key Meselesi

OpenAI kütüphanesi bir `api_key` değeri zorunlu tutar. Ollama bu değeri doğrulamaz; herhangi bir string gönderebilirsin. Genellikle `"ollama"` ya da `"local"` yazılır, ama neye set ettiğinin hiçbir önemi yok.

## Python ile Kullanım

Mevcut bir OpenAI projeni Ollama'ya taşımanın tek farkı `base_url` ve `api_key` parametreleri:

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:11434/v1/",
    api_key="ollama",  # Zorunlu alan ama değeri önemsiz
)

yanit = client.chat.completions.create(
    model="llama3.2",
    messages=[{"role": "user", "content": "Bana quicksort algoritmasını açıkla"}]
)
print(yanit.choices[0].message.content)
```

Streaming, system prompt, temperature gibi her şey aynı şekilde çalışıyor:

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:11434/v1/",
    api_key="ollama",
)

# System prompt ve streaming ile kullanım
stream = client.chat.completions.create(
    model="llama3.2",
    messages=[
        {"role": "system", "content": "Sen deneyimli bir Python geliştiricisisin."},
        {"role": "user", "content": "Async/await ne zaman kullanmalıyım?"}
    ],
    stream=True,  # Token token al
    temperature=0.7,
)

for parca in stream:
    if parca.choices[0].delta.content:
        print(parca.choices[0].delta.content, end="", flush=True)
print()
```

## JavaScript ile Kullanım

Node.js projelerinde de `baseURL` ve `apiKey` parametrelerini ayarlamak yeterli:

```javascript
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "http://localhost:11434/v1/",
  apiKey: "ollama",
});

const yanit = await client.chat.completions.create({
  model: "llama3.2",
  messages: [{ role: "user", content: "Merhaba!" }],
});
console.log(yanit.choices[0].message.content);
```

TypeScript'te tam tip desteğiyle çalışır; `ChatCompletionMessageParam` gibi OpenAI tipleri olduğu gibi geçerlidir.

## Mevcut Kodu Taşımak

Diyelim ki şu anki kodun şöyle:

```python
from openai import OpenAI

# Mevcut OpenAI kodu
client = OpenAI(api_key="sk-...")

yanit = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Merhaba!"}]
)
```

Bunu Ollama'ya taşımak için sadece iki şeyi değiştiriyorsun:

```python
from openai import OpenAI

# Ollama'ya yönlendirilmiş versiyon
client = OpenAI(
    base_url="http://localhost:11434/v1/",  # base_url eklendi
    api_key="ollama",                        # api_key değişti
)

yanit = client.chat.completions.create(
    model="llama3.2",  # Model adı değişti
    messages=[{"role": "user", "content": "Merhaba!"}]
)
```

Geri kalan tüm kod aynı kalıyor.

## Model Aliasing

OpenAI modellerinin adlarını beklediği bir kütüphane kullanıyorsan (ör. `gpt-3.5-turbo` hard-code edilmiş), `ollama cp` komutuyla bir model takma adı oluşturabilirsin:

```bash
# llama3.2'yi gpt-3.5-turbo adıyla kopyala
ollama cp llama3.2 gpt-3.5-turbo

# Artık model adı olarak gpt-3.5-turbo kullanabilirsin
```

Bu sayede kütüphane içindeki model adını değiştirmene gerek kalmaz.

## Embeddings

Embedding endpoint'i de aynı format üzerinden çalışır:

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:11434/v1/",
    api_key="ollama",
)

sonuc = client.embeddings.create(
    model="nomic-embed-text",  # Ollama'da yüklü bir embedding modeli
    input="Python programlama dili"
)
vektor = sonuc.data[0].embedding
print(f"Vektör boyutu: {len(vektor)}")
```

## Çoklu Modeli Bir Arada Kullanmak

OpenAI uyumlu interface'i kullanmanın bir avantajı daha var: aynı client kodunu birden fazla sağlayıcıyla çalışacak şekilde yazabilirsin. `base_url` ve `api_key` parametrelerini bir config'den okuyarak geliştirme ortamında yerel model, production'da OpenAI ya da başka bir sağlayıcı kullanabilirsin:

```python
import os
from openai import OpenAI

# Ortam değişkenine göre sağlayıcı seç
if os.getenv("USE_LOCAL") == "true":
    client = OpenAI(
        base_url="http://localhost:11434/v1/",
        api_key="ollama",
    )
    model = "llama3.2"
else:
    client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])
    model = "gpt-4o"

# Geri kalan kod her iki sağlayıcıyla da aynı çalışır
yanit = client.chat.completions.create(
    model=model,
    messages=[{"role": "user", "content": "Kendini kısaca tanıt."}]
)
print(yanit.choices[0].message.content)
```

Bu pattern, geliştirme ve test süreçlerini ücretsiz yerel modelle yürütüp yalnızca production'da ücretli API'ye geçmeni sağlıyor.

## Desteklenmeyen Özellikler

OpenAI API'sinin tüm özellikleri Ollama'da mevcut değil. Bunların başında `assistants`, `files`, `fine-tuning` endpoint'leri geliyor. `/v1/images/generations` — deneysel (experimental) destek var; diğer DALL-E özellikleri desteklenmiyor. Eğer tam DALL-E desteğine ihtiyaç duyarsan Ollama yerine gerçek OpenAI API'sini kullanman gerekiyor.

`/v1/models` endpoint'i de çalışıyor; yüklü Ollama modellerini döndürüyor. Böylece mevcut modelleri programatik olarak sorgulayabilirsin:

```python
from openai import OpenAI

client = OpenAI(base_url="http://localhost:11434/v1/", api_key="ollama")

# Yüklü modelleri listele
modeller = client.models.list()
for model in modeller.data:
    print(model.id)
```

`chat/completions` ve `embeddings` için gereken her şey Ollama'da sorunsuz çalışıyor.
