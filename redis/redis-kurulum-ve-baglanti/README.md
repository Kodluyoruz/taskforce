# Redis Kurulum ve Bağlantı

Redis'i çalıştırmanın birkaç yolu var: doğrudan işletim sistemine kurmak, Docker ile çalıştırmak veya cloud üzerinde managed bir instance kullanmak. Geliştirme ortamı için en pratik yol Docker'dır — kurulum tek satır, temizlik tek komut.

## Docker ile Redis Kurulumu (Önerilen)

Docker kuruluysa bu kadar:

```bash
docker run -d --name redis-dev -p 6379:6379 redis:7-alpine
```

Bu komut:
- `redis:7-alpine` image'ını indirir (küçük boyutlu Alpine tabanlı)
- `redis-dev` adıyla arka planda çalıştırır
- Host'un `6379` portunu container'ın `6379` portuna bağlar

Çalıştığını doğrulamak için:

```bash
docker exec -it redis-dev redis-cli ping
# PONG çıktısı görürsen Redis hazır
```

Durdurmak ve tekrar başlatmak:

```bash
docker stop redis-dev
docker start redis-dev
```

Tamamen silmek:

```bash
docker rm -f redis-dev
```

## macOS — Homebrew ile Kurulum

```bash
brew install redis

# Servisi başlat (login'de otomatik başlamasın istiyorsan)
redis-server

# Arka planda servis olarak başlat
brew services start redis

# Durumu kontrol et
brew services info redis
```

## Ubuntu / Debian — APT ile Kurulum

```bash
sudo apt update
sudo apt install -y redis-server

# Servisi başlat
sudo systemctl start redis-server

# Her açılışta otomatik başlasın
sudo systemctl enable redis-server

# Durumu kontrol et
sudo systemctl status redis-server
```

Yapılandırma dosyası `/etc/redis/redis.conf` konumunda. Varsayılan port 6379, bind adresi 127.0.0.1 (sadece localhost).

## Windows — WSL Üzerinden

Windows'ta Redis'i doğrudan çalıştırmak desteklenmiyor. WSL 2 (Windows Subsystem for Linux) kullanman gerekiyor.

```bash
# WSL Ubuntu'da
sudo apt update && sudo apt install -y redis-server
sudo service redis-server start
redis-cli ping
```

Ya da Docker Desktop'la birlikte yukarıdaki Docker komutunu direkt PowerShell'de çalıştırabilirsin.

## Redis Sürümünü Doğrulama

```bash
redis-server --version
# Redis server v=7.x.x ...
```

## Node.js'te Redis'e Bağlanma

Node.js için iki popüler Redis client kütüphanesi var: `ioredis` ve resmi `redis` paketi. Bu eğitimde `ioredis` kullanacağız — daha olgun, promise tabanlı API'si var ve cluster/sentinel desteği güçlü.

```bash
npm install ioredis
```

### Temel Bağlantı

```javascript
const Redis = require("ioredis");

// Varsayılan: localhost:6379
const redis = new Redis();

// Ya da açık belirt
const redis = new Redis({
  host: "127.0.0.1",
  port: 6379,
});

// Bağlantıyı test et
async function test() {
  const pong = await redis.ping();
  console.log(pong); // PONG
}

test();
```

### Bağlantı Olayları

```javascript
const Redis = require("ioredis");
const redis = new Redis();

redis.on("connect", () => {
  console.log("Redis'e bağlandı");
});

redis.on("error", (err) => {
  console.error("Redis bağlantı hatası:", err);
});

redis.on("close", () => {
  console.log("Redis bağlantısı kapandı");
});
```

### Ortam Değişkeniyle Bağlantı

Production'da bağlantı bilgilerini kod içine gömmemek için `.env` kullan:

```bash
# .env
REDIS_URL=redis://localhost:6379
```

```javascript
const Redis = require("ioredis");

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");
```

### Python'da Redis'e Bağlanma

Python için `redis-py` kullan:

```bash
pip install redis
```

```python
import redis

# Senkron bağlantı
r = redis.Redis(host='localhost', port=6379, decode_responses=True)
print(r.ping())  # True
```

`decode_responses=True` parametresi, Redis'ten dönen binary verileri otomatik olarak string'e çevirir. Aksi halde `b'PONG'` gibi bytes alırsın.

## Docker Compose ile Geliştirme Ortamı

Eğer uygulamanı da Docker'da çalıştırıyorsan, `docker-compose.yml` ile Redis'i servise ekle:

```yaml
version: "3.8"

services:
  app:
    build: .
    environment:
      - REDIS_URL=redis://redis:6379
    depends_on:
      - redis

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      # Veriyi container silinse de koru
      - redis_data:/data
    command: redis-server --appendonly yes

volumes:
  redis_data:
```

`appendonly yes` ile AOF persistence aktif oluyor — container yeniden başlatıldığında veriler kaybolmuyor.

## Bağlantıyı Test Et

Kurulum tamamlandıktan sonra basit bir test yaz:

```javascript
const Redis = require("ioredis");
const redis = new Redis();

async function baglantıTest() {
  try {
    // PING komutu
    const pong = await redis.ping();
    console.log("Ping sonucu:", pong); // PONG

    // Basit SET/GET
    await redis.set("test_key", "merhaba redis");
    const deger = await redis.get("test_key");
    console.log("Okunan değer:", deger); // merhaba redis

    // Temizlik
    await redis.del("test_key");
    console.log("Bağlantı başarılı, Redis hazır!");
  } catch (err) {
    console.error("Bağlantı hatası:", err);
  } finally {
    redis.disconnect();
  }
}

baglantıTest();
```

Bu kodu çalıştırdığında şunu görmelisin:

```
Ping sonucu: PONG
Okunan değer: merhaba redis
Bağlantı başarılı, Redis hazır!
```

## Yaygın Bağlantı Hataları

**`ECONNREFUSED 127.0.0.1:6379`**
Redis çalışmıyor. `redis-server` veya `docker start redis-dev` ile başlat.

**`NOAUTH Authentication required`**
Redis bir şifre gerektiriyor ama sen şifresiz bağlanmaya çalışıyorsun. `new Redis({ password: 'sifreni_buraya' })` ekle.

**`connect ETIMEDOUT`**
Uzaktaki bir Redis sunucusuna bağlanıyorsun ve timeout oluyor. Güvenlik duvarı (firewall) 6379 portunu kapatıyor olabilir.

## Özet

Redis'i çalıştırmanın en hızlı yolu Docker: tek komutla ayağa kalkar, geliştirme bitince tek komutla durur. Node.js için `ioredis`, Python için `redis-py` standart client kütüphaneleri. Bağlantıyı her zaman `PING` ile doğrula.

Bir sonraki derste Redis CLI'ı kullanarak komutları doğrudan terminalde deneyelim.
