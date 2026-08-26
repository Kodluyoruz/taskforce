# Ollama CLI Referansı

Ollama'nın tüm temel komutlarını ve seçeneklerini burada bulabilirsin. Sık kullandığın komutları ezberleyeceğin zamanla gelecek; bu sayfa ise aklında kalmayan ayrıntılara bakmak için hızlı bir referans olarak işe yarar.

## Temel Komutlar

| Komut | Açıklama | Örnek |
|---|---|---|
| `ollama pull <model>` | Model indir | `ollama pull qwen2.5:7b` |
| `ollama run <model>` | İnteraktif chat | `ollama run llama3.2` |
| `ollama ls` | İndirilen modelleri listele | `ollama ls` |
| `ollama ps` | Çalışan modelleri göster | `ollama ps` |
| `ollama rm <model>` | Modeli sil | `ollama rm llama3.2` |
| `ollama cp <src> <dst>` | Model kopyala/yeniden adlandır | `ollama cp llama3.2 my-llama` |
| `ollama show <model>` | Model detayları (Modelfile, params) | `ollama show llama3.2` |
| `ollama push <model>` | Ollama registry'e yükle | `ollama push myuser/mymodel` |
| `ollama stop <model>` | Modeli RAM'den boşalt | `ollama stop llama3.2` |
| `ollama serve` | Sunucuyu manuel başlat | `ollama serve` |

### Örnek Kullanımlar

```bash
# Mevcut modelleri listele
ollama ls
# NAME                    ID              SIZE      MODIFIED
# llama3.2:latest         a80c4f17acd5    2.0 GB    2 hours ago
# qwen2.5:7b              845dbda0ea48    4.7 GB    3 days ago

# Çalışan modelleri göster (belleğe yüklenmiş)
ollama ps
# NAME            ID              SIZE      PROCESSOR    UNTIL
# llama3.2:latest a80c4f17acd5    3.5 GB    100% GPU     4 minutes from now

# Bir modeli sil (disk alanı boşaltmak için)
ollama rm llama3.2

# Modeli kopyalayıp yeni bir isim ver
ollama cp llama3.2 my-llama

# Model bilgilerini görüntüle
ollama show llama3.2
```

## Model Tag Sözdizimi

Ollama'da her model `model:tag` formatında gösterilir. Tag belirtmezsen `latest` tag'i kullanılır; bu genellikle en yaygın, orta boyutlu versiyona işaret eder.

```bash
# Varsayılan (latest) tag
ollama pull llama3.2

# Belirli boyut versiyonu
ollama pull llama3.2:1b

# Belirli quantization seviyesi
ollama pull qwen2.5:7b-instruct-q4_k_m
```

Tag yapısı şöyle okunur: `qwen2.5:7b-instruct-q4_k_m`

- `qwen2.5` — model adı
- `7b` — parametre sayısı (7 milyar)
- `instruct` — fine-tune türü (instruct, chat, code vb.)
- `q4_k_m` — quantization türü ve seviyesi

Küçük modeller (`1b`, `3b`) daha az RAM tüketir ve hızlı yanıt verir; büyük modeller (`70b`, `72b`) daha kaliteli çıktı üretir ama güçlü donanım gerektirir. Quantization ne kadar agresifse (`q2` vs `q8`) dosya boyutu o kadar küçük, model kalitesi o kadar düşük olur.

## İnteraktif Modda Slash Komutları

`ollama run <model>` ile interaktif moda girdiğinde `/` ile başlayan özel komutları kullanabilirsin:

```
# Yaratıcılığı düşür (deterministic çıktı için)
/set parameter temperature 0.1

# System prompt'u dinamik olarak değiştir
/set system "Sen bir Python uzmanısın. Sadece Python kodu yaz."

# Mevcut model bilgilerini göster
/show info

# Konuşma geçmişini temizle (model sıfırlanır)
/clear

# İnteraktif moddan çık
/bye
```

`/set` komutu ile değiştirdiğin parametreler sadece o session için geçerlidir. Model kapatılınca sıfırlanır. Kalıcı değişiklik için Modelfile kullanman gerekir.

## `--think` Flag — Thinking Modeller

DeepSeek-R1 ve Qwen3 gibi "thinking" modeller, yanıt üretmeden önce adım adım düşünme süreci yürütür. Bu süreci terminalde görmek için `--think` flag'ini kullanabilirsin:

```bash
# Thinking modunu aktif et
ollama run deepseek-r1:8b --think

# Qwen3 ile de çalışır
ollama run qwen3:8b --think
```

`--think` etkin olduğunda model önce `<think>...</think>` bloğu içinde iç muhakemesini yazar, ardından asıl yanıtı üretir. Karmaşık matematik, mantık ve kodlama problemlerinde bu mod daha doğru sonuçlar verir; basit sorularda ise gereksiz yere uzun yanıtlar üretir.

## `OLLAMA_HOST` — Port ve Adres Değiştirme

Ollama varsayılan olarak `127.0.0.1:11434` adresinde çalışır. Farklı bir port ya da harici bağlantılara açmak istiyorsan `OLLAMA_HOST` ortam değişkenini kullanabilirsin:

```bash
# Farklı port kullan
OLLAMA_HOST=0.0.0.0:11435 ollama serve

# Sadece port değiştir, localhost'ta kal
OLLAMA_HOST=127.0.0.1:12000 ollama serve
```

`0.0.0.0` adresi, Ollama'yı tüm ağ arayüzlerine açar. Bunu yerel ağdaki başka bir makineden erişim sağlamak istediğinde kullanabilirsin — örneğin aynı Wi-Fi ağındaki bir telefon veya başka bir bilgisayardan. Güvenlik açısından, bu ayarı güvendiğin bir ağ dışında açık bırakmamaya dikkat et.

`OLLAMA_HOST` değişkenini kalıcı olarak ayarlamak için shell konfigürasyon dosyana ekleyebilirsin:

```bash
# ~/.zshrc veya ~/.bashrc dosyasına ekle
export OLLAMA_HOST=0.0.0.0:11434
```
