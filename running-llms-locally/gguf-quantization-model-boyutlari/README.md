# GGUF, Quantization ve Model Boyutları

Yerel LLM çalıştırmanın önündeki en büyük engel donanım kısıtlarıdır. 70B parametreli bir modeli full precision'da çalıştırmak 140 GB bellek ister. Bunun yerine modeli sıkıştırmak, yani quantize etmek, aynı modeli çok daha az bellekle çalıştırmana olanak tanır. GGUF format ve quantization seviyeleri bu soruna pratik bir çözüm sunar.

## GGUF Format Nedir?

GGUF, llama.cpp projesi tarafından geliştirilmiş, yerel model dağıtımı için tasarlanmış bir dosya formatıdır. Önceki GGML formatının yerini almıştır ve bugün yerel inference ekosisteminin fiili standardı haline gelmiştir.

GGUF'un öne çıkan özellikleri:

- **Tek dosya:** Model ağırlıkları, tokenizer, metadata ve konfigürasyon hepsi tek bir `.gguf` dosyasında bulunur. Dizin yapısı veya ek dosya gerekmez.
- **Cross-platform:** macOS (Metal), Linux ve Windows üzerinde çalışır. Donanım fark etmeksizin aynı dosya kullanılabilir.
- **CPU ve GPU optimizasyonu:** llama.cpp üzerine inşa edildiği için hem CPU-only hem de GPU (CUDA, Metal, ROCm) inference'ı destekler.
- **Geniş araç desteği:** Ollama, LM Studio, text-generation-webui ve benzeri araçların tamamı GGUF'u destekler.

Hugging Face'de bir model sayfasına girdiğinde `*-GGUF` ile biten repository'ler görürsen, bu dosyalar doğrudan indirip çalıştırabileceğin yerel model dosyalarıdır.

## Quantization Nedir?

Bir sinir ağı modeli eğitilirken ağırlıklar genellikle float32 veya bfloat16 formatında saklanır. Her ağırlık 4 byte yer kaplar. 7 milyar parametreli bir model bu halde yaklaşık 28 GB yer tutar ve benzer miktarda RAM gerektirir.

Quantization, bu ağırlıkları daha düşük bit genişliğine dönüştürme işlemidir:

- **float32 → float16:** Boyutu yarıya indirir, kalite kaybı minimumdur.
- **float32 → Q8:** 8-bit integer; bellek kullanımı ~%75 azalır, kalite kaybı ihmal edilebilir düzeyde.
- **float32 → Q4:** 4-bit integer; bellek kullanımı ~%87.5 azalır, küçük bir kalite kaybı oluşur.
- **float32 → Q2:** 2-bit; bellek çok küçülür ama kalite belirgin biçimde düşer.

Temel fikir şu: model ağırlıklarının tamamı maksimum precision'a ihtiyaç duymaz. Büyük çoğunluğu daha düşük hassasiyetle temsil edilebilir ve model hâlâ işlevsel kalır. Trade-off doğrusal değildir; Q4 ile Q8 arasındaki kalite farkı, Q2 ile Q4 arasındaki farktan çok daha azdır.

## Quantization Seviyeleri Tablosu

| Seviye | Bit | 7B Model RAM | Kalite Notu |
|---|---|---|---|
| **F16** | 16-bit float | ~14 GB | Neredeyse kayıpsız; GPU inference için idealdir |
| **Q8_0** | 8-bit | ~7 GB | Çok az kalite kaybı; F16'ya çok yakın |
| **Q5_K_M** | 5-bit | ~5 GB | İyi kalite-boyut dengesi; tavsiye edilen bir orta yol |
| **Q4_K_M** | 4-bit | ~4.1 GB | En yaygın kullanılan; kalite-boyut dengesi çok iyi |
| **Q3_K_M** | 3-bit | ~3.3 GB | Belirgin kalite kaybı başlar; dikkatli kullan |
| **Q2_K** | 2-bit | ~2.9 GB | Ciddi kalite düşüşü; yalnızca çok kısıtlı donanımda |

`_K` son eki "K-quant" yöntemini ifade eder; model içindeki farklı katmanlara farklı quantization seviyeleri uygular ve böylece aynı bit genişliğinde daha iyi kalite elde eder. `_M` (medium) ve `_S` (small) ise bu yöntemin varyantlarıdır.

Genel öneri: **Q4_K_M** çoğu kullanım senaryosu için kalite ve boyut arasında en iyi dengeyi sunar.

## Parametre Boyutları ve RAM Gereksinimleri

Model "boyutu" denildiğinde kastedilen şey parametre sayısıdır. Parametre sayısı ne kadar yüksekse, model o kadar yeteneklidir — ama o kadar fazla bellek de ister.

Aşağıdaki tablo Q4_K_M quantization'da yaklaşık RAM gereksinimlerini gösterir:

| Parametre | Örnek Modeller | Q4_K_M Model Ağırlık Boyutu |
|---|---|---|
| **1B** | Llama 3.2 1B | ~0.8 GB |
| **3B** | Llama 3.2 3B, Phi-3 Mini | ~2 GB |
| **7B / 8B** | Llama 3.1 8B, Mistral 7B, Qwen2.5 7B | ~4–5 GB |
| **13B** | Llama 2 13B, Mistral Nemo 12B | ~8 GB |
| **34B** | CodeLlama 34B, Qwen2.5 32B | ~20 GB |
| **70B** | Llama 3.1 70B, Qwen2.5 72B | ~40 GB |

Bu değerler yalnızca model ağırlıklarının boyutudur. KV cache ve işletim sistemi için ek bellek gerekir — pratikte bu değerlerin 2–3 GB üzerinde boş RAM'e ihtiyaç duyarsın.

## Model Nasıl İndirilir?

**Ollama ile:** En kolay yol budur. Ollama, GGUF dosyasını otomatik olarak indirir ve yönetir:

```bash
# 7B model indir ve çalıştır (Ollama quantization'ı otomatik seçer)
ollama pull qwen2.5:7b

# Belirli bir quantization seviyesi isteniyorsa
ollama pull qwen2.5:7b-instruct-q4_k_m
```

**Hugging Face'den manuel:** Model sayfasında `*-GGUF` repository'sine gidip istediğin quantization seviyesine ait `.gguf` dosyasını indirirsin. Bu dosyayı daha sonra LM Studio veya llama.cpp ile doğrudan kullanabilirsin.

## Donanıma Göre Pratik Öneriler

| Mevcut RAM | Önerilen Model | Quantization |
|---|---|---|
| 8 GB | 7B (örn. Llama 3.1 8B, Mistral 7B) | Q4_K_M |
| 16 GB | 13B (örn. Mistral Nemo 12B) | Q4_K_M |
| 32 GB | 34B (örn. CodeLlama 34B, Qwen2.5 32B) | Q4_K_M |
| 64 GB+ | 70B (örn. Llama 3.1 70B) | Q4_K_M |

Bu tablo RAM için geçerlidir. Eğer VRAM'i olan bir GPU'n varsa, modelin GPU'ya sığıp sığmadığına ayrıca bakman gerekir; sığarsa inference çok daha hızlı çalışır.

Başlangıç için **Q4_K_M seviyesinde 7B bir model** makul bir donanımda hem hızlı hem de yeterince kaliteli çalışır. Daha iyi sonuç istiyorsan Q5_K_M veya Q8_0'a geçebilirsin; donanım yeterli değilse 3B modele inebilirsin.
