# MCP Sunucusu Geliştirme İpuçları ve En İyi Pratikler

Kendi MCP sunucunuzu geliştirirken dikkat etmeniz gereken güvenlik, performans ve hata yönetimi konularını bu bölümde ele alıyoruz.

## 1. Güvenlik Önlemleri

MCP sunucuları, AI modellerine yerel dosyalarınıza veya veritabanlarınıza erişim izni verir. Bu nedenle güvenlik en önemli önceliktir.

- **Salt Okunur (Read-Only) Erişim:** Mümkünse sunucularınızı varsayılan olarak salt okunur modda tasarlayın. Yazma işlemleri (DELETE, UPDATE) için ekstra onay mekanizmaları veya ayrı araçlar kullanın.
- **Hassas Verileri Filtreleme:** API anahtarları, şifreler veya kişisel verileri (PII) AI modeline göndermeden önce filtreleyin.
- **Yol Doğrulama (Path Validation):** Dosya sistemi erişimi veren sunucularda, kullanıcının izin verilen klasörlerin dışına çıkmasını (`../` saldırıları) engelleyin.

## 2. Hata Yönetimi (Error Handling)

AI modelleri, araçlardan dönen hata mesajlarını okuyarak kendilerini düzeltebilirler. Bu yüzden hataları gizlemek yerine açıklayıcı bir şekilde döndürmek önemlidir.

- **Açıklayıcı Hata Mesajları:** "Hata oluştu" yerine "Dosya bulunamadı: /data/config.json" gibi spesifik mesajlar döndürün.
- **Graceful Degradation:** Bir araç çalışmazsa sunucunun tamamen çökmesi yerine, o aracın geçici olarak kullanılamadığı bilgisini döndürün.

## 3. Loglama ve Debugging

MCP sunucuları genellikle arka planda çalıştığı için hata ayıklamak zor olabilir.

- **Stdio Kullanımı:** `print()` fonksiyonunu debug için kullanmayın, çünkü bu MCP protokolünü (JSON-RPC) bozar. Bunun yerine `logging` kütüphanesini kullanarak `stderr`'e yazın.
  ```python
  import sys
  print("Debug mesajı", file=sys.stderr)
  ```
- **MCP Inspector:** Anthropic tarafından sağlanan "MCP Inspector" aracını kullanarak sunucunuz ile istemci arasındaki JSON mesajlarını görsel olarak inceleyebilirsiniz.

## 4. Performans İpuçları

- **Büyük Veri Setleri:** AI modelinin bağlam penceresi (context window) sınırlıdır. Veritabanından binlerce satır çekmek yerine, sayfalama (pagination) veya özetleme (summarization) yapın.
- **Asenkron Çalışma:** Uzun süren işlemler (örn. büyük bir dosya indirme) için asenkron fonksiyonlar (`async def`) kullanın, böylece arayüz donmaz.

## 5. Dokümantasyon (Docstrings)

AI modelinin aracınızı doğru kullanabilmesi için en önemli şey, fonksiyonlarınızın üzerindeki açıklama satırlarıdır (docstrings).

- **Ne Yapar?:** Fonksiyonun amacını net bir şekilde belirtin.
- **Parametreler:** Her parametrenin ne işe yaradığını ve beklenen formatı (örn. "YYYY-MM-DD formatında tarih") yazın.
- **Örnekler:** Docstring içinde örnek kullanım senaryoları vermek modelin başarısını artırır.
