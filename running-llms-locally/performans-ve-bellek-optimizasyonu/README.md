# Performans ve Bellek Optimizasyonu

Yerel LLM çalıştırırken hız ve VRAM kullanımı arasında denge kurmak gerekir. Birkaç ayarla hem token/s hızını artırabilir hem de belleği daha verimli kullanabilirsin.

## Flash Attention

Flash Attention, attention hesaplamalarını standart implementasyona göre daha hızlı ve daha az bellek tüketerek yapar. Özellikle uzun context'lerde fark belirginleşir.

```bash
# Flash Attention aktif et (export veya .env'e ekle)
export OLLAMA_FLASH_ATTENTION=1
```

Bu değişkeni kalıcı hale getirmek istiyorsan shell konfigürasyon dosyasına ekle:

```bash
# ~/.zshrc veya ~/.bashrc dosyasına ekle
echo 'export OLLAMA_FLASH_ATTENTION=1' >> ~/.zshrc
source ~/.zshrc
```

Değişikliğin etkili olması için Ollama servisini yeniden başlatman gerekiyor.

## K/V Cache Quantization

K/V cache, attention hesaplamalarında ara değerlerin tutulduğu bellektir. Uzun context'lerde bu cache önemli miktarda VRAM kaplar. Quantize ederek boyutunu küçültebilirsin:

> **Not:** `OLLAMA_KV_CACHE_TYPE` çalışması için `OLLAMA_FLASH_ATTENTION=1` de etkinleştirilmiş olmalıdır. Bu iki ayar birlikte kullanılır.

```bash
# KV cache quantization için önce Flash Attention etkinleştirilmeli
export OLLAMA_FLASH_ATTENTION=1

# 8-bit quantization — kalite kaybı çok az, VRAM tasarrufu orta
export OLLAMA_KV_CACHE_TYPE=q8_0

# 4-bit quantization — daha fazla VRAM tasarrufu, minimal kalite etkisi
export OLLAMA_KV_CACHE_TYPE=q4_0
```

Hangi değeri seçeceğin GPU belleğine bağlıdır. 8GB VRAM'in varsa `q8_0` iyi bir başlangıçtır; sıkışıyorsan `q4_0` dene.

## keep_alive: Model Bellekte Tutma

Model her yükleme-boşaltma döngüsünde birkaç saniyelik gecikme yaşanır. `keep_alive` parametresi modelin son istekten ne kadar süre sonra RAM'den kaldırılacağını belirler.

- Varsayılan: `5m` (5 dakika)
- `"0"`: isteği tamamlar tamamlamaz hemen boşalt
- `"-1"`: model süresiz bellekte kalsın

```bash
# Model bellekte kalıcı olarak kalsın
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "keep_alive": -1,
  "messages": [{"role": "user", "content": "test"}]
}'

# Modeli hemen RAM'den boşalt
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "keep_alive": 0,
  "messages": [{"role": "user", "content": ""}]
}'
```

Sık kullandığın modeli `-1` ile bellekte tut; RAM kısıtlıysa ve modeli yalnızca arada bir çalıştırıyorsan `0` mantıklıdır.

## OLLAMA_NUM_PARALLEL

Ollama, varsayılan olarak eş zamanlı tek bir isteği işler. Birden fazla kullanıcıya veya servis bileşenine hizmet veren bir deployment'ta bunu artırabilirsin:

```bash
export OLLAMA_NUM_PARALLEL=4
```

Her paralel istek ayrı bir K/V cache yuvası açar; VRAM tüketimi orantılı artar. Bireysel kullanımda bunu değiştirmene gerek yok.

## Context Uzunluğu (num_ctx)

Context penceresi ne kadar büyükse o kadar VRAM harcar. Maksimum context'i her zaman açık bırakmak gereksiz bellek tüketimine yol açar.

```bash
# Sadece 4K context gereken bir görev için
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.2",
  "options": {
    "num_ctx": 4096
  },
  "messages": [{"role": "user", "content": "Merhaba!"}]
}'
```

Bir code assistant için 4K–8K genellikle yeterlidir. RAG pipeline'ı çalıştırıyorsan ve chunk'lar büyükse 16K düşünebilirsin. 128K context açık tutmak için sebep yoksa kullanma.

## Model Seçimi ve Boyutu

Token/s hızı doğrudan model boyutuyla ters orantılıdır. Kullanım amacına göre model seç:

- **Autocomplete (1.5B–3B):** `qwen2.5-coder:1.5b`, `deepseek-coder:1.3b` — her tuş basışında gecikme olmadan çalışmalı
- **Chat ve soru-cevap (7B–8B):** `llama3.2`, `mistral:7b`, `gemma3:4b` — makul hızda, yeterli kalite
- **Karmaşık reasoning (13B+):** `llama3.1:13b`, `qwen2.5:14b` — yavaş ama daha iyi sonuç

## Performans Ölçümü

`--verbose` flag'i her çalıştırmada token/s, prompt değerlendirme süresi ve context doluluk oranı gibi metrikleri gösterir:

```bash
# Performans metrikleriyle çalıştır
ollama run llama3.2 --verbose "Merhaba"
```

Çıktıda şunları görürsün:
- `eval rate`: saniyede üretilen token sayısı (yüksek olması iyi)
- `prompt eval rate`: prompt'un işlenme hızı
- `total duration`: toplam süre

## Özet: Hangi Ayarı Ne Zaman Değiştirmeli

| Durum | Öneri |
|-------|-------|
| Uzun context'lerde yavaşlık | `OLLAMA_FLASH_ATTENTION=1` |
| VRAM yetersizliği | `OLLAMA_KV_CACHE_TYPE=q8_0` veya `q4_0` |
| Her istekte yükleme gecikmesi | `keep_alive: -1` |
| Birden fazla kullanıcı/servis | `OLLAMA_NUM_PARALLEL` artır |
| Autocomplete yavaş | Daha küçük model seç (1.5B–3B) |
| Context boyutu fazla VRAM alıyor | `num_ctx` değerini ihtiyaca göre küçült |

Tüm env değişkenlerini bir arada kullanabilirsin; birbirini engellemezler. Değişiklik yaptıktan sonra `ollama serve`'i yeniden başlatmayı unutma.
