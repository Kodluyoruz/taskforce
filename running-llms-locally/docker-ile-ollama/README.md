# Docker ile Ollama

## Neden Docker?

Masaüstünde Ollama'yı binary olarak kurmak kolaydır ama production ortamlarında ve takım çalışmalarında bu yeterli olmaz. Docker kullanmak için birkaç somut sebep:

- **Sunucu dağıtımı:** Headless bir Linux sunucusuna Ollama kurmak ve API'yi açmak, Docker ile standart bir iş haline geliyor.
- **İzolasyon:** Sistem geneline kurulum yapmak yerine container içinde sınırlı tutarsın.
- **Tekrar üretilebilirlik:** `docker-compose.yml` dosyasını ekibe paylaşırsan herkes aynı ortamı ayağa kaldırıyor.
- **CI/CD:** Otomatik test pipeline'larında model sunucusunu bir servis olarak başlatabilirsin.

## CPU-Only Container

GPU olmayan bir makinede ya da test ortamında kullanmak istiyorsan en basit komut:

```bash
# CPU-only
docker run -d \
  -v ollama:/root/.ollama \
  -p 11434:11434 \
  --name ollama \
  ollama/ollama
```

`-v ollama:/root/.ollama` Docker volume oluşturarak model dosyalarını container silinse bile saklar. Container'ı yeniden oluşturduğunda modelleri yeniden indirmene gerek kalmaz.

## NVIDIA GPU Desteği

NVIDIA GPU kullanmak için önce **NVIDIA Container Toolkit** kurulu olması gerekiyor:

```bash
# Ubuntu/Debian için NVIDIA Container Toolkit kurulumu
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg
curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
  sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
  sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
sudo apt-get update && sudo apt-get install -y nvidia-container-toolkit
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
```

Toolkit kurulduktan sonra `--gpus=all` bayrağını eklemen yeterli:

```bash
# NVIDIA GPU
docker run -d \
  --gpus=all \
  -v ollama:/root/.ollama \
  -p 11434:11434 \
  --name ollama \
  ollama/ollama
```

`nvidia-smi` komutuyla GPU'nun container tarafından görüldüğünü doğrulayabilirsin:

```bash
docker exec ollama nvidia-smi
```

## AMD GPU Desteği (ROCm)

AMD GPU için ayrı bir image var: `ollama/ollama:rocm`. Ayrıca `/dev/kfd` ve `/dev/dri` aygıtlarını container'a mount etmen gerekiyor:

```bash
# AMD GPU (ROCm)
docker run -d \
  --device /dev/kfd \
  --device /dev/dri \
  -v ollama:/root/.ollama \
  -p 11434:11434 \
  --name ollama \
  ollama/ollama:rocm
```

ROCm desteklenen AMD GPU listesi için Ollama dokümantasyonunu kontrol et; tüm AMD kartlar ROCm ile çalışmıyor.

## Container İçinde Model Yönetimi

Container başlatıldıktan sonra `docker exec` ile model komutlarını çalıştırırsın:

```bash
# Container içinde model indir ve çalıştır
docker exec -it ollama ollama pull llama3.2
docker exec -it ollama ollama run llama3.2

# Yüklü modelleri listele
docker exec ollama ollama list

# Model kaldır
docker exec ollama ollama rm llama3.2
```

API'ye host makineden doğrudan erişebilirsin çünkü port 11434 dışarıya açıldı:

```bash
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Merhaba!",
  "stream": false
}'
```

## docker-compose.yml ile Tanımlama

Tek seferlik `docker run` komutları yerine `docker-compose.yml` kullanmak ortamı versiyon kontrolüne alır ve yönetimi önemli ölçüde kolaylaştırır:

```yaml
# docker-compose.yml
services:
  ollama:
    image: ollama/ollama
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]

volumes:
  ollama_data:
```

Başlatmak için:

```bash
docker compose up -d
```

GPU olmayan bir makinede çalıştıracaksan `deploy.resources` bloğunu kaldır; aksi halde compose hata verir.

## Birden Fazla Servisle Kullanım

Gerçek bir uygulama genellikle Ollama'nın yanında başka servisler de içerir. Compose ile bunları birlikte tanımlayabilirsin:

```yaml
services:
  ollama:
    image: ollama/ollama
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama
    healthcheck:
      # Servisin hazır olup olmadığını kontrol et
      test: ["CMD", "curl", "-f", "http://localhost:11434"]
      interval: 10s
      timeout: 5s
      retries: 5

  uygulama:
    build: .
    ports:
      - "3000:3000"
    environment:
      - OLLAMA_BASE_URL=http://ollama:11434
    depends_on:
      ollama:
        condition: service_healthy  # Ollama hazır olana kadar bekle

volumes:
  ollama_data:
```

`depends_on` + `healthcheck` kombinasyonu, uygulama container'ının Ollama gerçekten hazır olmadan önce istek atmaya çalışmasını önler.

## Ortam Değişkenleri

Ollama'nın davranışını ortam değişkenleriyle özelleştirebilirsin:

```yaml
services:
  ollama:
    image: ollama/ollama
    environment:
      - OLLAMA_HOST=0.0.0.0:11434      # Tüm arayüzlerden dinle
      - OLLAMA_MODELS=/root/.ollama    # Model dizini
      - OLLAMA_NUM_PARALLEL=2          # Eşzamanlı istek sayısı
      - OLLAMA_MAX_LOADED_MODELS=2     # Bellekte tutulacak model sayısı
    ports:
      - "11434:11434"
    volumes:
      - ollama_data:/root/.ollama

volumes:
  ollama_data:
```

`OLLAMA_NUM_PARALLEL` ve `OLLAMA_MAX_LOADED_MODELS` yüksek trafikli senaryolarda performans ve bellek kullanımını dengelemenin temel araçları.
