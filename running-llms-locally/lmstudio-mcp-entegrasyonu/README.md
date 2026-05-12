# LM Studio MCP Entegrasyonu

LLM'lerin doğal dil anlama becerisini gerçek dünya araçlarına bağlamak için standart bir protokol gerekiyor. MCP (Model Context Protocol) tam da bu boşluğu dolduruyor: modelin dosya okuyabilmesini, veritabanı sorgulayabilmesini, web araması yapabilmesini ya da herhangi bir harici servisi çağırabilmesini sağlayan açık bir standart.

## MCP Nedir?

MCP, Anthropic tarafından geliştirilen ve daha sonra açık standart haline gelen bir protokol. Temel fikir şu: her araç sağlayıcı kendi MCP server'ını yazıyor, LLM uygulamaları ise bu server'larla standart bir protokol üzerinden konuşuyor. Böylece her araç için ayrı entegrasyon yazmak yerine tek bir protokol öğrenmek yeterli.

MCP mimarisi üç parçadan oluşuyor:

- **Host**: LLM uygulaması (bu durumda LM Studio)
- **Client**: Host içindeki MCP istemcisi
- **Server**: Araçları sağlayan process (filesystem, veritabanı, web scraper vb.)

LM Studio v0.3.17 itibarıyla bir MCP host olarak çalışabiliyor. Yani sohbet sırasında model, bağlı MCP server'larının sunduğu araçları çağırabilir.

## MCP Server Ekleme

LM Studio'da MCP server eklemek için arayüzdeki Program sekmesini kullan. Bu sekme sağ kenar çubuğunda bulunur.

Adımlar:

1. Sağ panelde **Program** sekmesine tıkla
2. "Install" veya "Add MCP Server" seçeneğini seç
3. Açılan editörde `mcp.json` dosyasını düzenle
4. Değişiklikleri kaydet ve LM Studio'yu yeniden başlat

`mcp.json` dosyasını doğrudan metin editörüyle de açabilirsin. Dosya şu konumda yer alır:

- macOS ve Linux: `~/.lmstudio/mcp.json`
- Windows: `%USERPROFILE%/.lmstudio/mcp.json`

## mcp.json Yapısı

Dosya bir JSON nesnesi; kök seviyesindeki `mcpServers` anahtarı altında her server ayrı bir nesne olarak tanımlanır:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/kullanici/projeler"
      ]
    }
  }
}
```

Her server tanımında:

- **`command`**: Çalıştırılacak program (`npx`, `node`, `python`, `uvx` vb.)
- **`args`**: Komuta geçilecek argümanlar, dizi formatında
- **`env`** (isteğe bağlı): Sunucuya özel ortam değişkenleri

`env` alanı özellikle API anahtarı gerektiren server'larda kullanılır:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_xxxxxxxxxxxx"
      }
    }
  }
}
```

## Filesystem Server Örneği

En yaygın başlangıç noktası `@modelcontextprotocol/server-filesystem`. Bu server modelin belirttiğin dizindeki dosyaları okumasına ve yazmasına olanak tanır.

Kurulum için Node.js 18+ gerekiyor. Server'ı çalıştırmak için ayrıca bir şey kurman gerekmiyor — `npx -y` ilk çalıştırmada paketi otomatik indirir.

`mcp.json` dosyasına ekledikten sonra LM Studio'yu yeniden başlat. Yeniden açtığında sohbet arayüzünde model artık "filesystem" server'ından gelen araçlara erişebilir. Modele "projeler klasöründeki dosyaları listele" ya da "config.json dosyasını oku" dediğinde model bu araçları çağırır.

## Güvenlik Uyarıları

MCP server'ları dikkatli kullanılması gereken bir özellik. Birkaç önemli nokta:

**Güvenilmeyen kaynaklardan server yükleme.** Bir MCP server local process olarak çalıştığı için makinendeki dosyalara, ağa ve sistem kaynaklarına erişebilir. Yalnızca kaynağını bildiğin ve güvendiğin server'ları ekle. Rastgele GitHub repo'larından bulduğun `mcp.json` örneklerini direkt kopyalama.

**Yetki kapsamı.** Filesystem server'a verdiğin dizin yolunu sınırla. Tüm ev dizinini (`~`) vermek yerine sadece ilgili proje klasörünü ver. Model bir dosyayı okurken ya da yazarken hangi dizine eriştiğini fark etmeyebilirsin.

**Ağ erişimi.** Bazı server'lar internet bağlantısı kurar. Bunları sandbox ortamında ya da izole bir ağda test etmek daha güvenli.

**Kod çalıştırma.** Araç çağrıları gerçek komutlar çalıştırabilir. "Şu dosyayı sil" ya da "şu scripti çalıştır" gibi talimatlar model tarafından MCP araçları aracılığıyla gerçekleştirilebilir.

## Küçük Modeller İçin Token Tüketimi

Claude veya ChatGPT için optimize edilmiş bazı MCP server'ları araç tanımlarını çok ayrıntılı belgeliyor. Bu tanımlar her sohbet başında context'e ekleniyor ve küçük yerel modellerde toplam context'in önemli bir bölümünü tüketebilir.

7B veya daha küçük bir model kullanıyorsan, bağlı MCP server'larının araç sayısını az tut. Onlarca araç sunan bir server yerine sadece ihtiyacın olan araçları içeren minimal bir server tercih et. Context length'in büyük kısmı araç tanımlarına giderse model yanıt üretmek için yeterli alan bulamayabilir.

## Sonraki Adım

`mcp.json` dosyasını kaydedip LM Studio'yu yeniden başlattıktan sonra Chat sekmesine geçip model ile konuşmaya başlayabilirsin. Model, bağlı server'ların araçlarını otomatik olarak kullanır — ayrıca bir şey yapman gerekmez. Araç çağrılarını sohbet arayüzünde ayrı bir blok olarak görürsün; bu blokta hangi aracın hangi parametrelerle çağrıldığı ve dönen sonuç gösterilir.
