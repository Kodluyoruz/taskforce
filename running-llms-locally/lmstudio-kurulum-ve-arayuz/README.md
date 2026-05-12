# LM Studio: Kurulum, Arayüz ve Model Yönetimi

LM Studio, büyük dil modellerini yerel makinende çalıştırmak için en kullanışlı araçlardan biri. Grafik arayüzü sayesinde terminal komutu yazmadan model indirebilir, sohbet edebilir ve bir API sunucusu başlatabilirsin.

## Platform Gereksinimleri

Her platformun farklı gereksinimleri var:

**macOS**
- macOS 14 (Sonoma) ve üzeri
- Apple Silicon (M1, M2, M3, M4 serisi) zorunlu — Intel Mac desteği kaldırıldı
- Minimum 8 GB RAM, 16 GB ve üzeri önerilir

**Windows**
- 64-bit Windows 10/11 (x64 veya ARM64 — Snapdragon X Elite / Qualcomm Snapdragon dahil)
- x64 sistemlerde CPU'da AVX2 desteği gerekli (2013 sonrası üretilen çoğu işlemci karşılar)
- Minimum 16 GB RAM önerilir
- GPU hızlandırma için 4 GB+ VRAM tercih edilir (NVIDIA CUDA veya AMD ROCm)

**Linux**
- Ubuntu 20.04 ve üzeri (x86_64 ve ARM64/aarch64 desteklenir)
- AppImage formatında dağıtılır, ayrıca bir kurulum adımı gerektirmez
- NVIDIA GPU için CUDA 12.x sürücüleri önerilir

## İndirme ve Kurulum

[lmstudio.ai](https://lmstudio.ai) adresine girip platformuna uygun dosyayı indir. macOS'ta `.dmg` dosyasını açıp uygulamayı `Applications` klasörüne sürüklemen yeterli. Windows'ta `.exe` kurulum sihirbazı standart bir kurulum akışı sunuyor. Linux'ta indirilen `.AppImage` dosyasına çalıştırma izni verdikten sonra doğrudan çalıştırabilirsin.

## Ana Arayüz Bölümleri

Uygulama ilk açıldığında sol tarafta dikey bir gezinti çubuğu görürsün. Her sekme farklı bir işlev sunuyor:

| Sekme | Simge | Ne İşe Yarar |
|---|---|---|
| Chat | Sohbet balonu | Model ile doğrudan konuşma |
| Discover | Büyüteç | Model arama ve indirme |
| My Models | Klasör | İndirilen modelleri yönetme |
| Developer | `</>` | Yerel API sunucusunu başlatma |

## Model İndirme: Discover Sekmesi

Discover sekmesine geçtiğinde Hugging Face'teki popüler modeller listelenir. Arama çubuğuna model adını yazarak filtreleyebilirsin (örneğin `llama`, `mistral`, `qwen`).

Bir modele tıkladığında farklı quantization seçenekleri çıkar. Quantization, modelin boyutunu ve bellek kullanımını etkiler:

- **Q2_K / Q3_K** — En küçük boyut, en düşük kalite. Bellek kısıtlıysa tercih edilebilir.
- **Q4_K_M** — Boyut ve kalite arasında iyi bir denge. Çoğu kullanım için önerilir.
- **Q5_K_M / Q6_K** — Daha yüksek kalite, daha fazla VRAM gerektirir.
- **Q8_0** — Neredeyse kayıpsız, büyük VRAM gerektirir.
- **F16 / BF16** — Tam hassasiyet, çok büyük bellek gerektirir.

16 GB RAM'li bir makinede 7B modeller için Q4_K_M iyi bir başlangıç noktası. Download düğmesine tıkladığında model arka planda indirilmeye başlar; ilerlemeyi My Models sekmesinden takip edebilirsin.

## Sohbet Arayüzü

Chat sekmesinde üst kısımda bir model seçici bulunur. Buradan yüklü modellerden birini seçtiğinde LM Studio modeli RAM veya VRAM'a yükler — bu birkaç saniye alabilir, modelin boyutuna göre değişir.

Sistem prompt'u ayarlamak için sohbet penceresinin sağındaki paneli kullan. "System Prompt" alanına modele vermek istediğin genel talimatı yazabilirsin; bu her mesajda arka planda iletilir.

Yeni bir sohbet başlatmak için sol üstteki `+` butonunu kullan. Geçmiş sohbetlere sol panelden ulaşabilirsin.

## Parametre Paneli

Sohbet sırasında sağ taraftaki parametre panelinden modelin davranışını ayarlayabilirsin:

**Temperature** (varsayılan 0.7): Yanıtların ne kadar yaratıcı olacağını belirler. 0'a yakın değerler tutarlı ve tekrarlayan yanıtlar üretir; 1'in üzeri daha çeşitli ama bazen tutarsız sonuçlar verir. Kod üretimi için 0.1–0.3, yaratıcı yazarlık için 0.7–0.9 aralığı iyi çalışır.

**Context Length**: Modelin "belleği" kaç token olacak. Büyük context length daha uzun konuşmaları hatırlatır ama daha fazla RAM kullanır. 2048 token çoğu gündelik kullanım için yeterli; uzun belgeler için 4096 veya 8192 düşünebilirsin.

**Top-P** (nucleus sampling): 0 ile 1 arasında bir değer. Düşük değerler modeli daha yüksek olasılıklı token'larla sınırlar. Temperature ile birlikte çalışır; genellikle ikisinden birini değiştirmek yeterlidir.

## Developer Mode ve User Mode

LM Studio iki farklı modda çalışabiliyor:

**User Mode** (varsayılan): Sade, yeni başlayanlar için sadeleştirilmiş arayüz. Gelişmiş ayarlar gizlenir.

**Developer Mode**: API sunucusu, gelişmiş model yükleme seçenekleri ve daha fazla parametre kontrolü açılır. Sağ tıklayarak dock/taskbar simgesinden veya Settings menüsünden geçiş yapabilirsin.

API üzerinden LM Studio'yu kullanacaksan Developer Mode şart — bu modda Developer sekmesi görünür hale gelir ve orada sunucuyu başlatabilirsin.

## My Models Sekmesi

İndirdiğin tüm modeller burada listelenir. Bir modelin üzerine geldiğinde silme ve yükleme seçenekleri çıkar. Model dosyaları varsayılan olarak şu konumda saklanır:

- macOS: `~/.cache/lm-studio/models`
- Windows: `C:\Users\<kullanici>\.cache\lm-studio\models`
- Linux: `~/.cache/lm-studio/models`

Farklı bir dizin kullanmak istersen Settings → Advanced → Model Directory yolunu değiştirebilirsin.
