# Ollama Kurulum ve İlk Model Çalıştırma

Ollama, yerel LLM çalıştırmanın en kolay yollarından biri. Tek bir kurulum adımıyla modelleri indirip çalıştırabilir, API üzerinden sorgulayabilirsin. Arka planda bir REST API sunucusu olarak çalışır ve `localhost:11434` üzerinden hem kendi CLI komutlarına hem de dışarıdan gelen HTTP isteklerine yanıt verir. Bu yazıda Ollama'yı kurmayı ve ilk modelini nasıl çalıştıracağını göreceksin.

## Kurulum

### macOS

İki seçeneğin var. Homebrew kullanıyorsan:

```bash
brew install ollama
```

Homebrew yoksa ya da GUI tercih ediyorsan ollama.com/download adresinden macOS installer'ı indirip çalıştırabilirsin.

### Windows

ollama.com/download sayfasındaki Windows installer'ı indirip çalıştır. Kurulum sihirbazı gerekli her şeyi ayarlıyor. Kurulum tamamlandığında Ollama sistem tepsisine (system tray) bir ikon olarak eklenir ve servis arka planda çalışmaya başlar.

### Linux

Tek satırlık kurulum scripti:

```bash
# Linux kurulum
curl -fsSL https://ollama.com/install.sh | sh
```

Script, Ollama binary'sini `/usr/bin/ollama` altına kopyalar ve bir systemd servis dosyası oluşturur.

## Daemon Nasıl Çalışır?

Ollama bir arka plan servisi (daemon) olarak çalışır. macOS ve Windows'ta kurulum sonrası bu servis otomatik başlar; sistem boot'ta da otomatik çalışır. Yani ekstra bir şey yapman gerekmez.

Linux'ta ise servis varsayılan olarak otomatik başlamayabilir. Ollama'yı bir kez manuel başlatmak için:

```bash
ollama serve
```

Bu komutu çalıştırdığında Ollama `http://localhost:11434` adresinde API sunmaya başlar. Terminali açık tutmak zorunda kalmak istemiyorsan servisi etkinleştirebilirsin:

```bash
sudo systemctl enable --now ollama
```

## Model İndirme

Ollama, modelleri `pull` komutuyla indirir. Llama 3.2'yi indirmek için:

```bash
# Model indir
ollama pull llama3.2
```

Çalıştırdığında terminalde şuna benzer bir çıktı görürsün:

```
pulling manifest
pulling 966de95ca8a6... 100% ▕████████████████▏ 2.0 GB
pulling 9c17b8d4d0c5... 100% ▕████████████████▏ 7.0 KB
pulling a346cbf48e0f... 100% ▕████████████████▏ 5.0 KB
verifying sha256 digest
writing manifest
success
```

Model indirme süresi bağlantı hızına ve model boyutuna göre değişir. Llama 3.2'nin varsayılan versiyonu (3B parametre) yaklaşık 2 GB. İndirme tamamlandıktan sonra model macOS ve Windows'ta `~/.ollama/models` dizinine kaydedilir. Linux'ta kurulum yöntemine göre iki farklı konum geçerlidir: resmi kurulum scriptiyle systemd servisi olarak kurulduğunda `/usr/share/ollama/.ollama/models`, kullanıcı olarak çalıştırıldığında ise `~/.ollama/models`. Tekrar indirmene gerek kalmaz. Bir sonraki `ollama pull` çağrısında model zaten mevcutsa Ollama sadece manifest kontrolü yapar ve hızla tamamlanır.

## İnteraktif Chat Başlatma

Model indirildikten sonra tek bir komutla sohbet başlatabilirsin:

```bash
# İnteraktif chat başlat
ollama run llama3.2
```

Terminal modele bağlanır ve şöyle bir prompt belirir:

```
>>> 
```

Buraya istediğin soruyu yazıp Enter'a basabilirsin. Model yanıt ürettikçe terminal'e token token yazar.

### Multi-turn Konuşma

İnteraktif modun en kullanışlı özelliği konuşma geçmişini takip etmesi. Yani önceki mesajları referans alarak devam edebilirsin:

```
>>> Python'da fibonacci fonksiyonu yaz
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

>>> Bunu iteratif versiyona çevirir misin?
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

Her yanıt önceki bağlamı biliyor. Sohbeti bitirmek için `/bye` yazabilir ya da `Ctrl+D` tuş kombinasyonunu kullanabilirsin. İnteraktif modda `/set parameter temperature 0.2` gibi slash komutlarıyla parametreleri anlık olarak değiştirebilirsin — bu ayarlar sadece o session boyunca geçerli kalır.

## One-Shot Kullanım

Her seferinde interaktif moda girmek zorunda değilsin. Tek bir soruyu doğrudan komut satırından gönderebilirsin:

```bash
# One-shot sorgu
ollama run llama3.2 "Python'da fibonacci dizisi yaz"
```

Modeli argüman olarak soru geçince yanıtı terminale yazdırır ve çıkar. Bu özellik shell script'leri içinde, CI pipeline'larında veya başka bir komutun çıktısını işlemek istediğinde oldukça işe yarar:

```bash
# Bir dosyanın içeriğini modele gönder
cat hata_logu.txt | ollama run llama3.2 "Bu hata logunu analiz et ve olası nedenleri sırala"
```

## Model Kütüphanesi

Ollama'nın desteklediği modelleri ollama.com/library adresinde görebilirsin. Llama, Qwen, Mistral, Gemma, Phi, DeepSeek gibi popüler açık kaynak modellerin birçok versiyonu burada listelenmiş. Her modelin sayfasında hangi tag'lerin (boyut ve quantization seçenekleri) mevcut olduğunu, kaç parametreli olduğunu ve hangi görevler için uygun olduğunu görebilirsin.

Model seçerken donanımına dikkat et: büyük modeller daha kaliteli çıktı üretir ama daha fazla RAM ve disk alanı ister. Başlangıç için 3B–8B parametre arası modeller çoğu laptop'ta rahat çalışır. Belirli bir göreve odaklı modeller de bulunuyor — `codellama` veya `qwen2.5-coder` gibi kod üretimi için fine-tune edilmiş modeller, genel amaçlı modellerden daha iyi kod çıktısı üretebilir. Hangi modeli indirmen gerektiğinden emin değilsen kütüphane sayfasındaki "Tools" veya "Code" etiketleriyle filtreleyerek başlayabilirsin.
