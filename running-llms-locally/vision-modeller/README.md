# Vision Modeller

## Multimodal Model Nedir?

Standart dil modelleri yalnızca metin alır ve metin üretir. **Vision modeller** (ya da multimodal modeller) buna ek olarak görsel girdi de işleyebilir: fotoğraf, ekran görüntüsü, diyagram, belge taraması. Gönderdiğin görseli analiz edip soruları yanıtlayabilir, kodları açıklayabilir ya da metni çıkarabilirler.

## Ollama'da Desteklenen Modeller

| Model | Özellik |
|---|---|
| `llava` | İlk popüler açık kaynak vision modeli |
| `llava-llama3` | LLaMA 3 tabanlı geliştirilmiş versiyon |
| `llama3.2-vision` | Meta'nın Llama 3.2 tabanlı, 11B parametre |
| `gemma3` | Google'ın Gemma 3 ailesi, güçlü görsel anlama |
| `qwen2.5vl` | Alibaba Qwen2.5 VL; 3B, 7B, 72B seçenekleri. Grafik, tablo ve belge analizinde güçlü |
| `moondream` | Küçük ve hızlı, edge cihazlar için |
| `llava-phi3` | Microsoft Phi-3 tabanlı, kompakt |

Model boyutları değişiyor. Başlamak için `llava` ya da `moondream` iyi tercihler — `llava` daha yetenekli, `moondream` daha hızlı.

## İndirme ve CLI'dan Kullanma

```bash
# Model indir
ollama pull llava

# İnteraktif modda çalıştır
ollama run llava
```

`ollama run llava` komutu seni interaktif bir sohbet arayüzüne alıyor. Burada görseli şu şekilde gönderebilirsin:

```text
>>> /path/to/image.jpg Bu görseldeki nesneyi tarif et.
```

Ya da dosyayı sürükle-bırak yaparak da ekleyebilirsin (destekleyen terminal emülatörlerinde).

## API'ye Base64 Olarak Göndermek

REST API'de görsel göndermenin yolu base64 encode etmek. Görseli binary olarak okuyup base64 string'e çeviriyorsun ve `images` dizisine ekliyorsun:

```python
import ollama
import base64

# Görseli base64'e çevir ve API'ye gönder
with open("screenshot.png", "rb") as f:
    gorsel_b64 = base64.b64encode(f.read()).decode()

yanit = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "Bu ekran görüntüsündeki kodu açıkla.",
        "images": [gorsel_b64]
    }]
)
print(yanit.message.content)
```

`images` bir dizi çünkü aynı mesajda birden fazla görsel gönderebilirsin.

## Python SDK ile Dosya Path Kullanımı

Ollama Python SDK'sı base64 dönüşümünü otomatik yapabilir; dosya path'ini direkt geçmen yeterli:

```python
# Ollama Python SDK ile dosya path doğrudan geçilebilir
yanit = ollama.chat(
    model="gemma3",
    messages=[{
        "role": "user",
        "content": "Görseldeki metni çıkar.",
        "images": ["./belge.png"]  # SDK path'i otomatik encode eder
    }]
)
print(yanit.message.content)
```

Bu özellik SDK'nın 0.2.0 ve sonrası sürümlerinde çalışıyor. Daha eski bir sürümde hata alırsan base64 yöntemine dön.

## Sık Kullanım Senaryoları

**Kod açıklama:** Bir ekran görüntüsünde gördüğün kodu modele gönderip ne yaptığını sorabilirsin.

**OCR benzeri metin çıkarma:** Fotoğraflanan bir belgeden, tahta yazısından ya da diyagramdan metni çekebilirsin. Tam OCR motorlarının doğruluğuna ulaşamaz ama basit ihtiyaçlar için işe yarıyor.

**UI açıklama:** Bir uygulama ekranını ya da web sayfasını gönderip "bu ekranda ne var?" ya da "erişilebilirlik sorunları var mı?" gibi sorular sorabilirsin.

**Görsel analiz:** Grafikler, tablolar, haritalar hakkında sorular sorabilirsin.

## curl ile Kullanım

REST API'yi doğrudan kullanmak istiyorsan base64 encode adımını shell'de yapabilirsin:

```bash
# Görseli base64'e çevir ve JSON içine göm
GORSEL_B64=$(base64 -i screenshot.png)

curl http://localhost:11434/api/chat -d "{
  \"model\": \"llava\",
  \"messages\": [{
    \"role\": \"user\",
    \"content\": \"Bu görselde ne görüyorsun?\",
    \"images\": [\"${GORSEL_B64}\"]
  }],
  \"stream\": false
}"
```

## Birden Fazla Görsel Göndermek

Aynı mesajda birden fazla görsel karşılaştırmak için `images` dizisine birden fazla öğe ekleyebilirsin:

```python
import ollama, base64

def gorsel_yukle(yol: str) -> str:
    # Dosyadan base64 string üret
    with open(yol, "rb") as f:
        return base64.b64encode(f.read()).decode()

yanit = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "Bu iki görseli karşılaştır ve farklılıkları listele.",
        "images": [
            gorsel_yukle("once.png"),   # İlk görsel
            gorsel_yukle("sonra.png")   # İkinci görsel
        ]
    }]
)
print(yanit.message.content)
```

## Streaming ile Vision

Vision modellerde de streaming çalışıyor. Uzun açıklamalar için token token almak kullanıcı deneyimini iyileştirir:

```python
import ollama, base64

with open("kod_ekrani.png", "rb") as f:
    gorsel_b64 = base64.b64encode(f.read()).decode()

# Streaming ile vision çağrısı
for parca in ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "Bu kod ne yapıyor? Satır satır açıkla.",
        "images": [gorsel_b64]
    }],
    stream=True  # Token token al
):
    print(parca.message.content, end="", flush=True)
print()
```

## Performans Notları

Vision modeller metin modellerine kıyasla çok daha fazla VRAM kullanır. `llava:7b` yaklaşık 4-5 GB, `llava:13b` yaklaşık 8-10 GB VRAM gerektirir. VRAM kısıtın varsa `moondream` (1.4B parametre, ~2 GB) daha makul bir başlangıç noktası.

CPU'da da çalışırlar ama yavaşlar. Görsel analiz görevleri için GPU belleğine sahip bir makine önerilir.

Görsel boyutu da işlem süresini etkiler. Çok büyük görseller (4K gibi) göndermeden önce yeniden boyutlandırmak yanıt süresini belirgin biçimde kısaltabilir. Çoğu vision model için 1024x1024 piksel yeterli; daha yüksek çözünürlük nadiren daha iyi sonuç veriyor.
