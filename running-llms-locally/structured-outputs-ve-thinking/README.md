# Structured Outputs ve Thinking Modeller

Bu dosya iki ayrı konuyu kapsıyor: modelden yapılandırılmış JSON çıktısı almak ve modeli açık akıl yürütme yapmasına yönlendirmek.

---

## Bölüm 1: Structured Outputs

### Neden JSON Çıktısı?

Modelden elde ettiğin yanıtı bir veritabanına yazmak, başka bir API'ye göndermek ya da uygulama içinde parse etmek istiyorsan serbest metin sorunlu hale geliyor. `json.loads()` çağrısı başarısız olabilir, modelin format tutarsızlıkları programını bozabilir. Structured outputs bu sorunu çözmek için var.

### `"format": "json"` ile Serbest JSON

En basit yöntem: istek gövdesine `format="json"` eklemek. Model artık yalnızca geçerli bir JSON nesnesi döndürür.

```python
import ollama, json

# Serbest JSON
yanit = ollama.chat(
    model="llama3.2",
    messages=[{"role": "user", "content": "İstanbul hakkında JSON döndür: isim, nüfus, ülke"}],
    format="json",
    options={"temperature": 0}  # Deterministik çıktı için sıcaklık sıfırla
)
print(json.loads(yanit.message.content))
```

Çıktı şuna benzer:

```json
{"isim": "İstanbul", "nüfus": 15000000, "ülke": "Türkiye"}
```

`temperature: 0` önemli: çıktının tutarlı olmasını sağlar. Yüksek sıcaklıkta model JSON formatını bozabilir.

### JSON Schema ile Kısıtlı Çıktı

Serbest JSON'da modelin hangi alanları üreteceğini kontrol edemezsin. JSON schema kullanarak hem alan adlarını hem de tiplerini zorunlu kılabilirsin:

```python
import ollama, json

# JSON schema ile kısıtlı çıktı
schema = {
    "type": "object",
    "properties": {
        "city": {"type": "string"},
        "population": {"type": "integer"},
        "country": {"type": "string"}
    },
    "required": ["city", "population", "country"]
}

yanit = ollama.chat(
    model="llama3.2",
    messages=[{"role": "user", "content": "İstanbul hakkında bilgi ver"}],
    format=schema,
    options={"temperature": 0}
)
print(json.loads(yanit.message.content))
```

Schema'ya uymayan bir yanıt gelirse `json.loads()` başarılı olur ama `required` alanlardan biri eksikse uygulamanda bir kontrol yapman gerekir.

### Pydantic ile Schema Üretmek

Schema'yı elle yazmak yerine Pydantic modeli tanımlayıp `.model_json_schema()` ile otomatik üretebilirsin:

```python
import ollama, json
from pydantic import BaseModel

class Sehir(BaseModel):
    # Şehir bilgilerini tutan veri modeli
    isim: str
    nufus: int
    ulke: str
    kurulus_yili: int

# Pydantic modelinden JSON schema üret
schema = Sehir.model_json_schema()

yanit = ollama.chat(
    model="llama3.2",
    messages=[{"role": "user", "content": "Ankara hakkında bilgi ver."}],
    format=schema,
    options={"temperature": 0}
)

# JSON'u parse edip Pydantic modeline yükle
veri = Sehir.model_validate_json(yanit.message.content)
print(f"{veri.isim}, nüfus: {veri.nufus:,}")
```

Bu pattern güvenli: tip kontrolü, alan doğrulaması ve IDE otomatik tamamlama bedavaya geliyor.

### İç İçe Schema

Karmaşık veri yapıları için nested schema destekleniyor:

```python
import ollama, json

# Kişi ve adres içeren iç içe schema
schema = {
    "type": "object",
    "properties": {
        "ad": {"type": "string"},
        "yas": {"type": "integer"},
        "adres": {
            "type": "object",
            "properties": {
                "sehir": {"type": "string"},
                "ulke": {"type": "string"}
            },
            "required": ["sehir", "ulke"]
        }
    },
    "required": ["ad", "yas", "adres"]
}

yanit = ollama.chat(
    model="llama3.2",
    messages=[{"role": "user", "content": "Ankara'da yaşayan 30 yaşında biri için örnek bir profil oluştur."}],
    format=schema,
    options={"temperature": 0}
)
print(json.loads(yanit.message.content))
```

---

## Bölüm 2: Thinking Modeller

### Thinking Nedir?

Standart bir modele "17 * 23 nedir?" diye sorduğunda doğrudan yanıt üretir. Bazen bu hızlı yanıt yanlış olur çünkü model gerçekten "düşünmez" — sadece olasılıksal token üretir.

**Thinking** (ya da "extended thinking") modele yanıt vermeden önce açık bir akıl yürütme süreci yürütme imkanı tanıyor. Model önce bir `<think>` bloğu üretir — bu blokta adım adım hesaplar, alternatifleri karşılaştırır, kendini düzeltir. Ardından bu düşünce sürecine dayanarak final yanıtı üretir.

Sonuç: matematik, mantık, çok adımlı problem çözme ve kod yazımı gibi görevlerde belirgin doğruluk artışı.

### Desteklenen Modeller

| Model | Notlar |
|---|---|
| `deepseek-r1` | 1.5B'dan 671B'a kadar çeşitli boyutlar |
| `qwen3` | 8B, 14B, 30B, 70B seçenekleri |
| `cogito` | Hibrit reasoning modeli |

Bu modelleri Ollama'dan şu şekilde indirebilirsin:

```bash
ollama pull deepseek-r1:8b
ollama pull qwen3:8b
```

### Python ile Thinking Kullanımı

`ollama.chat()` çağrısına `think=True` eklemen yeterli. Yanıtta `message.thinking` alanı akıl yürütme sürecini, `message.content` ise final yanıtı içeriyor:

```python
yanit = ollama.chat(
    model="deepseek-r1:8b",
    messages=[{"role": "user", "content": "17 * 23 nedir? Adım adım çöz."}],
    think=True
)
print("Düşünce süreci:", yanit.message.thinking)
print("Yanıt:", yanit.message.content)
```

Thinking içeriği oldukça uzun olabilir — model bazen yüzlerce token harcıyor. Bu normaldir; uzun thinking çoğunlukla daha doğru sonuçla sonuçlanıyor.

### CLI'dan Thinking Kullanımı

```bash
# CLI'dan thinking modeli çalıştır
ollama run deepseek-r1:8b --think "Bir binary search algoritması yaz"

# Thinking içeriğini gizle ama yine de thinking kullan
ollama run qwen3:8b --think --hidethinking "Bu kodu gözden geçir"
```

`--hidethinking` bayrağı terminale thinking içeriğini yazdırmaz ama model yine de arka planda akıl yürütüyor. Final yanıt kalitesi aynı kalıyor, sadece ekranda görmüyorsun.

### Ne Zaman Thinking Kullanmalısın?

Thinking her görev için gerekli değil. Gecikme ve token maliyeti artıyor; basit sorular için bu overhead gereksiz.

Thinking'in değer kattığı durumlar:

- Çok adımlı matematik veya mantık problemleri
- Algoritma tasarımı ve kod yazımı
- Argümanlı kararlar (neden A yerine B?)
- Çelişkili bilgileri değerlendirme

"Python'u kim yarattı?" gibi sorular için thinking'e gerek yok. Ama "Bu sorting algoritmaları arasında hangisi büyük, neredeyse sıralı veri setleri için daha verimli ve neden?" sorusu için thinking belirgin fark yaratıyor.
