# Donanım Gereksinimleri ve Model Seçimi

Yerel LLM çalıştırmanın performansı büyük ölçüde donanıma bağlıdır. Aynı model, farklı makinelerde dakikalar ile saniyeler arasında değişen hızlarda çalışabilir. Bu farkı yaratan şey çoğunlukla tek bir faktördür: modelin GPU'ya sığıp sığmadığı.

## GPU Mimarileri ve Destek Durumu

Ollama ve LM Studio gibi araçlar farklı GPU mimarilerini destekler:

- **Apple Silicon (Metal):** M1, M2, M3 ve M4 çipli Mac bilgisayarlar için Apple'ın Metal framework'ü kullanılır. Ollama ve LM Studio bu platformda oldukça olgunlaşmıştır; kurulum sonrası ek bir ayar gerekmez.
- **NVIDIA (CUDA):** Windows ve Linux üzerinde en yaygın GPU seçeneğidir. CUDA desteği en olgun ve en iyi optimize edilmiş yoldur. GeForce ve Workstation serisi kartlar desteklenir.
- **AMD (ROCm):** Linux ve Windows üzerinde desteklenir; CUDA kadar olgun değildir. Linux'ta RDNA 1 ve üzeri kartlar, Windows'ta RDNA 2+ (RX 6000 ve 7000 serisi) ROCm ile çalışır. Bazı modeller veya araçlar ek konfigürasyon gerektirebilir.
- **CPU-only fallback:** Desteklenmeyen donanımlarda veya model GPU belleğine sığmadığında inference CPU üzerinde gerçekleşir. Çalışır, ama çok daha yavaştır.

## VRAM vs. RAM: Temel Fark

Bu konuda en çok karışıklığa yol açan konu VRAM ile RAM arasındaki farktır.

**VRAM (Video RAM):** GPU'nun kendi belleğidir. Model buraya tamamen yüklenirse inference GPU üzerinde koşar ve çok hızlıdır. Örneğin 8 GB VRAM'e sahip bir NVIDIA kartına Q4_K_M quantization'da 7B bir model (~4 GB) rahatça sığar.

**RAM (Sistem Belleği):** Model VRAM'e sığmazsa kısmen veya tamamen sistem RAM'ine ve CPU'ya taşınır. Bu duruma genellikle "CPU offloading" denir. Model çalışmaya devam eder ama token üretim hızı GPU'ya kıyasla 5–10 kat yavaşlayabilir.

Ollama, modeli otomatik olarak VRAM'e yüklemeye çalışır; sığmazsa kalan katmanları RAM'e aktarır. `ollama ps` komutuyla yüklü modelleri ve GPU/CPU kullanım oranını görebilirsin.

## Apple Silicon: Unified Memory Avantajı

Apple Silicon'un en büyük avantajı unified memory mimarisidir. Geleneksel mimarilerde GPU'nun ayrı VRAM'i, CPU'nun ayrı RAM'i vardır. Apple M serisi çiplerde ise bellek hem CPU hem de GPU tarafından paylaşılır.

Bu durum pratikte şu anlama gelir: 16 GB birleşik belleğe sahip bir M2 Mac, 13B parametreli bir modeli Q4_K_M ile rahatça çalıştırabilir. NVIDIA'da aynı modeli çalıştırmak için ya 16 GB VRAM'li bir kart (oldukça pahalı) ya da CPU offloading gerekir.

| Apple Silicon | Bellek | Önerilen Model Boyutu |
|---|---|---|
| M1 / M2 8 GB | 8 GB unified | 7B Q4_K_M |
| M1 / M2 16 GB | 16 GB unified | 13B Q4_K_M |
| M2 Pro / M3 Pro 32 GB | 32 GB unified | 34B Q4_K_M |
| M2 Max / M3 Max 64 GB | 64 GB unified | 70B Q4_K_M |

## NVIDIA: VRAM Kısıtı

Windows ve Linux'ta NVIDIA kartlarla çalışırken VRAM en kritik kısıttır. Aşağıdaki tablo yaygın VRAM kapasiteleri için rehber niteliğindedir:

| VRAM | Örnek Kart | Önerilen Model |
|---|---|---|
| 6 GB | RTX 2060, 4060 | 7B Q4_K_M (dikkatli; bazı modeller taşabilir) |
| 8 GB | RTX 3070, 4060 Ti | 7B Q4_K_M rahat |
| 12 GB | RTX 3080 12GB, 4070 | 13B Q4_K_M |
| 16 GB | RTX 4080, A4000 | 13B Q5_K_M veya Q8_0 |
| 24 GB | RTX 3090, 4090, A5000 | 34B Q4_K_M |
| 48 GB+ | A6000, RTX 6000 | 70B Q4_K_M |

## AMD ROCm

AMD GPU'larda ROCm framework'ü kullanılır. Linux üzerinde RDNA 1 ve üzeri (RX 5000 serisi dahil) kartlarda çalışır. Ollama ROCm'u destekler ancak kurulum CUDA'ya kıyasla biraz daha fazla adım içerebilir. Windows'ta RDNA 2 ve üzeri kartlar (RX 6000 ve 7000 serisi) ROCm v6.1 ile destekleniyor; giriş seviyesi kartlar için Linux tercih edilmeli.

## Model Seçim Kriterleri

Donanım kısıtlarını belirledikten sonra hangi modeli seçeceğin görevin türüne bağlıdır:

**Görev türü:**
- **Kod:** CodeLlama, DeepSeek Coder, Qwen2.5-Coder serisi iyi tercihlerdir.
- **Genel sohbet ve asistan:** Llama 3, Mistral, Gemma 2 dengeli seçeneklerdir.
- **Çok adımlı akıl yürütme:** DeepSeek-R1, Qwen QwQ gibi "thinking" modelleri daha iyi sonuç verir.
- **Multimodal (görsel + metin):** LLaVA, Llama 3.2 Vision, Qwen2.5-VL bu görev için tasarlanmıştır.

**Türkçe dil desteği:**
Tüm modeller Türkçe'de eşit performans göstermez. Testler, Qwen2.5 ve Llama 3 serisi modellerinin Türkçe'de görece iyi sonuçlar verdiğini ortaya koyuyor. Gemma ise Türkçe'de daha kısıtlı kalabiliyor. Türkçe görev yapacaksan modeli kendi kullanım senaryonla test etmen en doğru yoldur.

**Hız vs. kalite dengesi:**
Daha büyük model her zaman daha iyi sonuç vermez; ama küçük model her zaman daha hızlıdır. Gerçek zamanlı etkileşim için 3B–7B modeller genellikle yeterlidir; derin analiz veya uzun belge işleme için 13B–34B daha iyi iş çıkarır.

## Başlangıç İçin Önerilen Modeller

```bash
# Hızlı ve hafif; düşük donanımda iyi çalışır
ollama pull llama3.2:3b

# Dengeli; Türkçe desteği iyi, çoğu görev için yeterli
ollama pull qwen2.5:7b

# Çok adımlı akıl yürütme ve analiz görevleri için
ollama pull deepseek-r1:8b
```

| Model | Boyut | Güçlü Yönler | Minimum RAM |
|---|---|---|---|
| `llama3.2:3b` | 3B | Hız, genel sohbet | 4 GB |
| `qwen2.5:7b` | 7B | Türkçe, kod, genel | 6 GB |
| `deepseek-r1:8b` | 8B | Akıl yürütme, analiz | 8 GB |
| `qwen2.5-coder:7b` | 7B | Kod tamamlama, debug | 6 GB |
| `llama3.1:8b` | 8B | Genel amaç, araç çağrısı | 8 GB |

Yeni başlıyorsan `llama3.2:3b` ile indir, çalıştır ve sisteminin nasıl tepki verdiğini gör. Sonra görevine ve donanımına göre daha büyük modellere geçebilirsin.
