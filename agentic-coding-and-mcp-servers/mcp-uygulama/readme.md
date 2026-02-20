# Modül 3: Pratik Uygulama - Kendi MCP Sunucunuzu Yazın

Bu modülde, teorik bilgileri pratiğe dökecek ve Python kullanarak basit bir MCP sunucusu geliştireceğiz. Bu sunucu, yerel bir hava durumu servisi gibi davranacak ve Claude Desktop uygulamasına bağlanacaktır.

## Gereksinimler

- Python 3.10 veya üzeri
- `uv` veya `pip` (Paket yöneticisi)
- Claude Desktop Uygulaması (Bilgisayarınızda kurulu olmalı)

## Adım 1: Proje Kurulumu

Öncelikle yeni bir proje klasörü oluşturalım ve sanal ortamımızı hazırlayalım.

```bash
# Klasör oluşturma
mkdir weather-mcp
cd weather-mcp

# Sanal ortam oluşturma (Windows için: python -m venv .venv)
python3 -m venv .venv
source .venv/bin/activate

# MCP kütüphanesini yükleme
pip install mcp
```

## Adım 2: MCP Sunucusunu Kodlama

`server.py` adında bir dosya oluşturun ve aşağıdaki kodları yapıştırın. Bu örnekte, MCP'nin yüksek seviyeli `FastMCP` sınıfını kullanacağız.

```python
from mcp.server.fastmcp import FastMCP

# Sunucumuzu isimlendiriyoruz
mcp = FastMCP("Weather Service")

# Basit bir hava durumu veritabanı (Simülasyon)
WEATHER_DATA = {
    "istanbul": "Güneşli, 25°C",
    "ankara": "Parçalı Bulutlu, 20°C",
    "izmir": "Açık, 28°C",
    "london": "Yağmurlu, 15°C"
}

@mcp.tool()
def get_weather(city: str) -> str:
    """
    Belirtilen şehir için hava durumu bilgisini getirir.

    Args:
        city: Hava durumu istenen şehir adı (örn: istanbul, ankara)
    """
    # Şehir adını küçük harfe çevirip veritabanında arayalım
    city_key = city.lower().strip()
    return WEATHER_DATA.get(city_key, "Bu şehir için veri bulunamadı.")

if __name__ == "__main__":
    # Sunucuyu stdio modunda çalıştır
    mcp.run()
```

### Kodun Analizi

1.  `FastMCP("Weather Service")`: Hızlıca bir MCP sunucusu oluşturur.
2.  `@mcp.tool()`: Bu dekoratör, altındaki fonksiyonu AI'ın kullanabileceği bir "Araç" (Tool) olarak işaretler.
3.  `get_weather`: Fonksiyonun adı, parametreleri (`city: str`) ve docstring'i ("Belirtilen şehir için...") AI tarafından okunur. AI, bu bilgileri kullanarak fonksiyonu ne zaman ve nasıl çağıracağını anlar.

## Adım 3: Claude Desktop ile Entegrasyon

Oluşturduğumuz sunucuyu Claude Desktop'a tanıtmak için konfigürasyon dosyasını düzenlememiz gerekiyor.

1.  Konfigürasyon dosyasını bulun:

    - **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
    - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

2.  Dosyayı bir metin editörüyle açın ve sunucunuzu ekleyin. (Python yolunu kendi sisteminize göre güncelleyin!)

```json
{
  "mcpServers": {
    "weather-service": {
      "command": "/path/to/your/weather-mcp/.venv/bin/python",
      "args": ["/path/to/your/weather-mcp/server.py"]
    }
  }
}
```

_Not: `/path/to/your/...` kısımlarını projenizin tam dosya yolu ile değiştirmeyi unutmayın. `pwd` komutu ile tam yolu öğrenebilirsiniz._

## Adım 4: Test Etme

1.  Claude Desktop uygulamasını tamamen kapatıp yeniden açın.
2.  Sağ üst köşedeki "fiş" simgesine (veya entegrasyonlar menüsüne) tıklayın. "weather-service"in yeşil ışık yaktığını (bağlı olduğunu) görmelisiniz.
3.  Claude'a şu soruyu sorun:
    > "İstanbul ve Ankara'da hava nasıl?"

### Neler Olacak?

1.  Claude, sorunuzu analiz edecek ve hava durumunu öğrenmesi gerektiğini anlayacak.
2.  Sizin tanımladığınız `get_weather` aracını (tool) kullanmaya karar verecek.
3.  Arka planda MCP sunucunuza iki kez istek gönderecek: biri "istanbul", diğeri "ankara" için.
4.  Python kodunuz çalışacak ve sonuçları (`Güneşli, 25°C` vb.) Claude'a geri döndürecek.
5.  Claude, bu ham veriyi alıp size doğal bir dille cevap verecek: _"İstanbul'da hava güneşli ve 25 derece, Ankara'da ise parçalı bulutlu ve 20 derece."_

## Tebrikler! 🎉

İlk MCP sunucunuzu başarıyla geliştirdiniz ve bir yapay zeka modeline "yeni bir yetenek" kazandırdınız. Artık bu mantığı kullanarak veritabanlarına bağlanan, dosya okuyan veya API istekleri atan çok daha karmaşık sunucular geliştirebilirsiniz.
