# Modül 2: Model Context Protocol (MCP)

Yapay zeka asistanlarının (Claude, ChatGPT vb.) en büyük kısıtlamalarından biri, kendi "fanusları" içinde yaşamalarıdır. Sizin yerel dosyalarınıza, şirketinizin veritabanına veya Slack mesajlarınıza doğrudan erişemezler. **Model Context Protocol (MCP)**, bu duvarları yıkan ve AI modellerini dış dünyaya bağlayan açık bir standarttır.

## 1. MCP Nedir?

**Model Context Protocol (MCP)**, Anthropic tarafından geliştirilen ve 2024 yılı sonlarında açık kaynak olarak sunulan bir protokoldür. Temel amacı, AI asistanları (istemciler) ile veri kaynakları ve araçlar (sunucular) arasında standart bir arayüz sağlamaktır.

### Çözülen Sorun: "Silo Problemi"

Eskiden, bir AI asistanını Google Drive'a bağlamak için özel bir entegrasyon, Slack'e bağlamak için başka bir entegrasyon, PostgreSQL'e bağlamak için bambaşka bir entegrasyon yazmak gerekirdi. Her yeni araç ve her yeni AI modeli için bu bağlantıların (M x N) yeniden kurulması gerekiyordu.

MCP ile bu durum değişti. Artık bir veri kaynağı (örn. Google Drive) için **tek bir MCP Sunucusu** yazılır ve bu sunucu, MCP destekleyen **tüm** AI asistanları (Claude, Cursor, Zed vb.) tarafından kullanılabilir.

> **Benzetme:** MCP, yapay zeka uygulamaları için bir **USB-C** kablosu gibidir. Nasıl ki USB-C sayesinde her cihazı her bilgisayara bağlayabiliyorsak, MCP sayesinde de her veriyi her AI modeline bağlayabiliriz.

## 2. Çekirdek Mimari

MCP mimarisi üç ana bileşenden oluşur:

### A. MCP Host (Ev Sahibi Uygulama)

Kullanıcının etkileşime girdiği ana uygulamadır.

- **Örnekler:** Claude Desktop App, Cursor IDE, Zed Editor.
- **Görevi:** Kullanıcıdan gelen isteği alır, gerekli MCP sunucularını başlatır ve aradaki iletişimi yönetir.

### B. MCP Client (İstemci)

Host uygulamanın içinde çalışan ve protokolü konuşan katmandır. Sunucularla bağlantıyı kurar ve veri alışverişini sağlar.

### C. MCP Server (Sunucu)

Veriyi veya aracı sağlayan köprüdür.

- **Örnekler:** Google Drive MCP Server, Postgres MCP Server, Filesystem MCP Server.
- **Görevi:** AI'ın anlayabileceği formatta veriyi sunmak veya AI'ın isteği üzerine belirli eylemleri (örn. veritabanı sorgusu) gerçekleştirmek.

## 3. Temel Yetenekler (Capabilities)

Bir MCP sunucusu, AI asistanına üç tür yetenek sunabilir:

### 1. Resources (Kaynaklar)

Dosya benzeri verilerdir. AI bunları "okuyabilir".

- **Örnek:** Veritabanı şeması, log dosyaları, API dokümantasyonu.
- **Kullanım:** Kullanıcı "Veritabanındaki tabloları listele" dediğinde, AI bu kaynağı okur.

### 2. Prompts (İstemler)

Sunucu tarafından önceden tanımlanmış hazır şablonlardır.

- **Örnek:** "Hata Raporu Oluştur", "Kod İncelemesi Yap".
- **Kullanım:** Kullanıcı tek tıkla karmaşık bir görevi başlatabilir.

### 3. Tools (Araçlar)

AI'ın çağırabileceği fonksiyonlardır. AI bunları kullanarak eyleme geçebilir.

- **Örnek:** `execute_sql_query` (SQL çalıştır), `send_slack_message` (Mesaj gönder), `fetch_weather` (Hava durumunu getir).
- **Kullanım:** Kullanıcı "Kullanıcı tablosundaki son 5 kaydı getir" dediğinde, AI `execute_sql_query` aracını uygun parametrelerle çağırır.

## 4. Nasıl Çalışır? (Teknik Bakış)

MCP, **JSON-RPC 2.0** protokolü üzerine kuruludur. İletişim genellikle iki yöntemle (Transport) sağlanır:

1.  **Stdio (Standart Girdi/Çıktı):** En yaygın yöntemdir. Host uygulama, MCP sunucusunu bir alt süreç (subprocess) olarak başlatır ve `stdin`/`stdout` üzerinden haberleşir. Bu, yerel makinede çalışan araçlar için idealdir.
2.  **SSE (Server-Sent Events):** HTTP üzerinden uzak sunucularla iletişim kurmak için kullanılır.

## Sonuç

MCP, yapay zeka ekosisteminde parçalanmışlığı önleyen ve birlikte çalışabilirliği (interoperability) sağlayan kritik bir standarttır. Geliştiriciler için anlamı şudur: **Bir kez yaz, her yerde kullan.**

Bir sonraki modülde, ellerimizi kirletecek ve Python kullanarak kendi MCP sunucumuzu yazacağız.
