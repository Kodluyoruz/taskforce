# LM Studio REST API Kullanımı

LM Studio sadece grafik arayüzüyle değil, bir HTTP sunucusu olarak da çalışabilir. Bu sunucu üzerinden Python, JavaScript ya da herhangi bir dil ile yerel modellerine istek atabilirsin. İnternet bağlantısı gerekmez, API anahtarı ücretli değil ve veriler makinenden çıkmaz.

## Sunucuyu Başlatma

Developer sekmesine geç (yoksa önce Developer Mode'u etkinleştir). Ekranın üst kısmında "Start Server" düğmesini görürsün. Tıkladığında sunucu `localhost:1234` adresinde dinlemeye başlar. Port numarasını aynı ekrandan değiştirebilirsin.

Sunucu çalışırken o sekmedeki log penceresinden gelen istekleri ve hataları gerçek zamanlı izleyebilirsin. "Stop Server" ile durdurabilirsin.

## Endpoint Türleri

LM Studio üç farklı API arayüzü sunuyor:

| Endpoint Grubu | Base URL | Notlar |
|---|---|---|
| Native API | `http://localhost:1234/api/v1/` | Önerilen, stateful sohbet, MCP desteği |
| OpenAI compat | `http://localhost:1234/v1/` | Mevcut OpenAI kodlarıyla uyumlu |
| Anthropic compat | `http://localhost:1234` | Anthropic SDK formatında istekler (ör. `/v1/messages` endpoint'i) |

**Native API** LM Studio'ya özgü ve en özellikli seçenek. Stateful sohbet desteği sayesinde conversation geçmişini sunucu tarafında tutabiliyor. MCP entegrasyonu da yalnızca bu endpoint üzerinden çalışıyor.

**OpenAI compat endpoint**, mevcut kodlarını değiştirmeden LM Studio'ya yönlendirmeni sağlıyor. `base_url` parametresini değiştirmek yeterli; geri kalan her şey aynı.

## OpenAI Kütüphanesiyle Kullanım

`openai` Python kütüphanesi kuruluysa, tek bir parametre değişikliğiyle LM Studio'ya bağlanabilirsin:

```python
from openai import OpenAI

# LM Studio sunucusuna bağlan
client = OpenAI(
    base_url="http://localhost:1234/v1/",
    api_key="lm-studio",  # zorunlu alan ama değeri önemsiz
)

yanit = client.chat.completions.create(
    model="llama-3.2-3b-instruct",  # LM Studio'da yüklü modelin ID'si
    messages=[{"role": "user", "content": "Merhaba!"}],
    temperature=0.7
)
print(yanit.choices[0].message.content)
```

`api_key` alanını OpenAI zorunlu tuttuğu için boş bırakamazsın ama LM Studio bu değeri doğrulamaz — herhangi bir string geçerli. `model` parametresine My Models sekmesindeki model ID'sini yazman gerekiyor; ID genellikle dosya adından türetilir.

Kütüphane kurulu değilse: `pip install openai`

## Native API ile curl Örneği

Native endpoint'i curl ile test etmek için:

```bash
# LM Studio native API ile chat (streaming kapalı)
curl http://localhost:1234/api/v1/chat \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama-3.2-3b-instruct",
    "input": "Merhaba!",
    "stream": false
  }'
```

Varsayılan olarak streaming kapalıdır; yanıt tek bir JSON objesi olarak döner. Streaming isteniyorsa `"stream": true` eklemek yeterlidir; yanıt Server-Sent Events (SSE) akışı olarak gelir. Çok turlu sohbet ve mesaj geçmişi için OpenAI compat endpoint'i (`/v1/chat/completions` + `messages` dizisi) kullanmak daha uygun bir yaklaşımdır.

## Streaming ile Token Akışı

Her iki endpoint'te de streaming varsayılan olarak kapalıdır. `stream=True` parametresini açıkça belirtmen gerekiyor:

```python
# Streaming yanıt — token gelirken ekrana yaz
akis = client.chat.completions.create(
    model="llama-3.2-3b-instruct",
    messages=[{"role": "user", "content": "Kısa bir Python fonksiyonu yaz."}],
    temperature=0.3,
    stream=True,  # streaming aç
)

for parca in akis:
    icerik = parca.choices[0].delta.content
    if icerik:
        print(icerik, end="", flush=True)  # her token gelince yaz
print()  # satır sonu
```

## Context Length Ayarı

Her istek için context length ayrı ayrı belirlenebilir. Bu özellik uzun belgelerle çalışırken işe yarar; her istek için farklı bir pencere açman gerekebilir:

```python
# Uzun belge için büyük context penceresi
yanit = client.chat.completions.create(
    model="llama-3.2-3b-instruct",
    messages=[
        {"role": "system", "content": "Sen bir belge özetleyicisisin."},
        {"role": "user", "content": uzun_belge_metni}
    ],
    max_tokens=512,   # yanıt için maksimum token
)
```

Context window boyutunu LM Studio'nun parametre panelinden ya da model yükleme ayarlarından da yapılandırabilirsin.

## Model Yönetimi API ile

Hangi modellerin yüklü olduğunu ve o an aktif modeli API üzerinden de sorgulayabilirsin:

```bash
# Yüklü modelleri listele
curl http://localhost:1234/api/v1/models

# Belirli bir modeli yükle
curl -X POST http://localhost:1234/api/v1/models/load \
  -H "Content-Type: application/json" \
  -d '{"model": "llama-3.2-3b-instruct"}'

# Yüklü modeli bellekten boşalt
curl -X POST http://localhost:1234/api/v1/models/unload \
  -H "Content-Type: application/json" \
  -d '{"model": "llama-3.2-3b-instruct"}'
```

`GET /api/v1/models` isteği yüklü modellerin ID'lerini, boyutlarını ve o an aktif olanını döndürür. `POST /api/v1/models/load` ile (model ID'si request body'de `model` alanı olarak gönderilir) programatik olarak model değiştirebilirsin — bu özellikle birden fazla modeli sırayla test ettiğinde veya otomatik bir pipeline kurduğunda kullanışlı. İşin bittiğinde `POST /api/v1/models/unload` ile modeli RAM'den temizleyebilirsin.

## Hata Senaryoları

Sunucu çalışmıyorsa `Connection refused` hatası alırsın — Developer sekmesinden sunucunun aktif olduğunu kontrol et. Model henüz yüklenmemişse ilk istek birkaç saniye bekleyebilir; log penceresinden yükleme durumunu izleyebilirsin. Model ID'si yanlışsa `404` veya modelin bulunamadığına dair bir hata döner — My Models sekmesinden doğru ID'yi kopyala.
