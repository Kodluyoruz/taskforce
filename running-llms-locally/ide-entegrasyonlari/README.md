# IDE Entegrasyonları

Yerel LLM'leri doğrudan kod editörüne bağlamak mümkün. Aşağıdaki araçların her biri Ollama ile çalışır; cloud API'ye gerek duymadan kod tamamlama, inline düzenleme ve chat elde edersin.

## Continue (VS Code / JetBrains)

Continue, en yaygın kullanılan açık kaynak AI coding assistant'tır. VS Code ve JetBrains IDE'lerinde çalışır, Ollama'yı native olarak destekler.

**Kurulum:**

VS Code'da Extensions panelinden "Continue" ara ve yükle. JetBrains için de aynı adı taşıyan plugin marketplace'ten erişilebilir.

**Yapılandırma:**

Kurulumdan sonra `~/.continue/config.json` dosyasını açıp Ollama provider ekle:

**Not:** Yeni Continue kurulumlarında `~/.continue/config.yaml` (YAML format) önerilir. `config.json` geriye dönük uyumluluk için hâlâ çalışır.

```json
{
  "models": [
    {
      "title": "Llama 3.2 (Yerel)",
      "provider": "ollama",
      "model": "llama3.2",
      "apiBase": "http://localhost:11434"
    }
  ],
  "tabAutocompleteModel": {
    "title": "Autocomplete",
    "provider": "ollama",
    "model": "qwen2.5-coder:1.5b",
    "apiBase": "http://localhost:11434"
  }
}
```

`models` listesine birden fazla model ekleyebilirsin; chat sırasında açılır menüden aralarında geçiş yaparsın.

**Ne yapabilirsin:**

- `Cmd+L` / `Ctrl+L` ile kenar panelde chat aç
- Kodu seçip `Cmd+Shift+L` ile seçili kodu konuşmaya ekle
- `Tab` tuşuyla inline autocomplete önerilerini kabul et
- `Cmd+I` ile inline düzenleme isteği yaz ("bu fonksiyona error handling ekle" gibi)

**Model seçimi hakkında:** Autocomplete için 1.5B–3B boyutunda hızlı bir model seç (`qwen2.5-coder:1.5b` veya `deepseek-coder:1.3b`). Chat için daha büyük ve yetenekli bir model (`llama3.2`, `mistral`, `gemma3:4b`) kullanabilirsin. Küçük model, her tuş basışında gecikme olmadan tamamlama yapabilmeli.

## Cursor

Cursor, VS Code fork'u olduğundan VS Code eklentilerini destekler. Yerel model bağlamak için ayrı bir extension gerekmez; ayarlar ekranından direkt yapılandırılır.

**Ollama bağlantısı:**

1. `Cmd+,` ile Settings'i aç
2. Sol menüden **Models** seç
3. **Add Model** butonuna tıkla
4. Model adı olarak Ollama'da yüklü modelin adını yaz (örneğin `llama3.2`)
5. Base URL alanına `http://localhost:11434/v1` gir

Kaydet ve model seçiciden yeni eklediğin modeli seç. Artık chat panelinde ve `Ctrl+K` inline edit özelliğinde bu model kullanılır.

**Dikkat:** Cursor'ın bazı özellikleri (Composer, shadow workspace) sunucu taraflı çalışır ve yerel modelle tam uyumlu olmayabilir. Temel chat ve `Ctrl+K` düzgün çalışır.

Cursor'da OpenAI API anahtarı alanı varsa boş bırakabilirsin; yerel Ollama endpoint'i için API key doğrulaması yapılmaz.

## Cline (VS Code)

Cline (eski adıyla Claude Dev), VS Code için tam yetenekli bir AI agent extension'ıdır. Dosya okuma/yazma, terminal komutları çalıştırma, tarayıcı kontrolü gibi agentic yetenekleri var.

**Kurulum:**

VS Code Extensions panelinden "Cline" ara ve yükle.

**Yapılandırma:**

1. Sol sidebar'da Cline ikonuna tıkla
2. Açılan panelde dişli ikonuyla **Settings**'e git
3. **API Provider** açılır menüsünden **Ollama** seç
4. Model adını yaz (`llama3.2`, `mistral` vb.)
5. Base URL `http://localhost:11434` olarak otomatik gelir; değiştirme

Artık Cline, dosyalarını okuyup düzenleyebilir, terminal komutları önerebilir ve kodun üzerinde otonom çalışabilir. Her aksiyondan önce onay ister; hangi adımı neden attığını da açıklar.

**Not:** Cline, agentic görevler için güçlü ama büyük context pencereleri kullanır. Küçük modeller (1.5B–3B) çok adımlı bir görevi takip etmekte zorlanabilir; en az 7B bir model önerilir. Kod yazma ağırlıklı işler için `qwen2.5-coder:7b` iyi bir seçimdir.

## GitHub Copilot

GitHub Copilot yalnızca bulut tabanlıdır; yerel model desteği sunmaz. Copilot'u yerel modelle kullanmanın resmi bir yolu yok. Şirket politikası veya veri gizliliği nedeniyle kod cloud'a gönderemiyorsan Continue en yakın açık kaynak alternatiftir; arayüzü ve klavye kısayolları Copilot'a oldukça benzer.

## Hangi Araca Ne Zaman Geçmeli

| Araç | En iyi kullanım alanı | Gereken model boyutu |
|------|----------------------|----------------------|
| Continue | Günlük kod tamamlama + chat | Autocomplete: 1.5B–3B, Chat: 7B+ |
| Cursor | VS Code fork, Ctrl+K inline edit | 7B+ |
| Cline | Agentic görevler, dosya/terminal erişimi | 7B+ (tercihen 13B+) |

## Hızlı Kontrol

Model çalışıyor mu diye denemek için terminale şunu yaz:

```bash
# Yüklü modelleri listele
ollama list

# Hızlı test
ollama run llama3.2 "Merhaba, çalışıyor musun?"
```

IDE extension'ı yapılandırmadan önce Ollama servisinin arka planda aktif olduğundan emin ol. `ollama serve` komutu servisi başlatır; sistem açılışında otomatik başlamasını istiyorsan macOS'ta `launchctl`, Linux'ta `systemctl` kullanabilirsin.
