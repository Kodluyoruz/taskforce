# Modelfile ile Özel Model Oluşturma

Ollama ile hazır modelleri çalıştırmak yeterli gelmeyebilir. Belki modelin her zaman Türkçe yanıt vermesini istiyorsun, belki bağlam penceresi boyutunu artırmak ya da yaratıcılık seviyesini sabitlemek istiyorsun. Modelfile tam olarak bunun için var: bir base model üzerine davranış, persona ve parametre katmanı eklemeyi sağlayan bir blueprint dosyası.

## Modelfile Nedir?

Modelfile, bir Docker Dockerfile'ına çok benzer bir yapıya sahip. Bir base model alırsın, üstüne talimatlar yazarsın ve yeni bir model adıyla kaydedersin. Oluşturulan model tıpkı `ollama pull` ile indirilen modeller gibi `ollama run` ile çalışır; farkı sadece senin belirlediğin parametreler ve sistem prompt'uyla önceden yapılandırılmış olmasıdır.

## Temel Talimatlar

### `FROM` — Base Model

Her Modelfile'ın zorunlu başlangıç noktası. Hangi modeli temel alacağını belirtir:

```dockerfile
FROM llama3.2
```

Tag belirtebilirsin:

```dockerfile
FROM qwen2.5:7b-instruct
```

### `SYSTEM` — Kalıcı System Prompt

Modele her konuşmanın başında gönderilecek sistem mesajını tanımlar. Bu sayede modele kalıcı bir persona, kısıt veya görev atayabilirsin:

```dockerfile
SYSTEM """
Sen bir kıdemli backend geliştiricisisin. Sorulara kısa ve net yanıtlar ver.
Kod örneklerinde hata yönetimini göz ardı etme.
"""
```

Üçlü tırnak (`"""`) çok satırlı prompt yazmak için kullanılır. Tek satırlık mesajlar için düz tırnak da çalışır.

### `PARAMETER` — Model Parametreleri

Modelin davranışını sayısal olarak ayarlarsın. En çok kullanılan parametreler:

| Parametre | Ne Yapar | Varsayılan |
|---|---|---|
| `temperature` | Yaratıcılık seviyesi. 0 = deterministic, yüksek değer = daha yaratıcı | 0.8 |
| `num_ctx` | Context window boyutu (token cinsinden) | 2048 |
| `top_p` | Nucleus sampling; 1.0 = devre dışı | 0.9 |
| `stop` | Bu string gelince üretimi durdur | — |

```dockerfile
PARAMETER temperature 0.7
PARAMETER num_ctx 4096
PARAMETER top_p 0.9
PARAMETER stop "<|eot_id|>"
```

`num_ctx` özellikle uzun belgelerle çalışırken önemli. Varsayılan değer **2048** token'dır; büyük bir değer ayarlarsan daha uzun konuşmaları bellekte tutabilirsin ama RAM tüketimi de artar.

### `TEMPLATE` — Prompt Şablonu

Çoğu durumda `FROM` ve `SYSTEM` yeterli. `TEMPLATE` talimatı yalnızca modelin beklediği prompt formatını elle tanımlamak gerektiğinde kullanılır — örneğin özelleştirilmiş GGUF dosyalarıyla çalışıyorsan ya da modelin chat template'ini değiştirmek istiyorsan. Standart Ollama modellerinde bunu atlamanı öneririm; yanlış bir template, modelin hiç yanıt vermemesine ya da anlamsız çıktı üretmesine yol açabilir.

## Tam Çalışan Örnek

Türkçe kod asistanı için bir Modelfile:

```dockerfile
FROM llama3.2

SYSTEM """
Sen bir Türkçe kod asistanısın. Her zaman Türkçe yanıt ver.
Kod örneklerini daima açıklamalı ve çalışır halde sun.
"""

PARAMETER temperature 0.7
PARAMETER num_ctx 4096
```

Bu dosyayı `Modelfile` adıyla kaydet (uzantısız). Ardından modeli oluştur:

```bash
# Modeli oluştur
ollama create turk-coder -f ./Modelfile
```

Çıktı şöyle görünür:

```
transferring model data
using existing layer sha256:966de95ca8a6...
creating new layer sha256:4c2db4d3e77f...
writing manifest
success
```

`ollama ls` çalıştırdığında `turk-coder:latest` artık listede görünecek.

## Modeli Test Etme

```bash
# Test et
ollama run turk-coder "Bana basit bir REST API yaz"
```

Model sana Türkçe, açıklamalı bir yanıt döndürmeli. System prompt davranışı kalıcı olduğu için her seferinde yeniden belirtmene gerek yok.

## Modelfile'ı İnceleme

Herhangi bir modelin (hem kendi oluşturduklarının hem de `ollama pull` ile indirdiklerinin) Modelfile'ını görmek için:

```bash
# Modelfile'ı incele
ollama show --modelfile turk-coder
```

Bu komut Modelfile içeriğini terminale basar. Bir modelin hangi parametrelerle yapılandırıldığını anlamak ya da mevcut bir Modelfile'ı başlangıç noktası olarak kullanmak istediğinde işe yarar:

```bash
# Başka bir modelin Modelfile'ını kendi modelinin temeli olarak kullan
ollama show --modelfile llama3.2 > Modelfile
# Dosyayı düzenle ve yeni model oluştur
ollama create my-custom-llama -f ./Modelfile
```

`--modelfile` dışında `ollama show` farklı çıktılar da destekler:

```bash
# Parametreleri göster
ollama show --parameters turk-coder

# Modelfile içeriğini göster
ollama show --modelfile turk-coder
```

## Modelfile ile Neler Yapılabilir?

Birkaç pratik kullanım senaryosu:

- **Dil kısıtı:** Modeli her zaman belirli bir dilde yanıt vermek üzere yapılandır
- **Rol tanımlama:** "Sen bir SQL uzmanısın, yalnızca SQL ile ilgili sorulara yanıt ver" gibi odaklı asistanlar yarat
- **Context boyutu:** Büyük dosya veya konuşmalarla çalışmak için `num_ctx` değerini artır
- **Deterministik çıktı:** `temperature 0` ile her seferinde aynı yanıtı al — test ve CI süreçleri için faydalı
- **Model yeniden adlandırma:** `ollama cp` ile bir modelin kopyasını alıp Modelfile ile farklılaştırabilirsin
