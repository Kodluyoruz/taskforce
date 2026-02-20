# Hata yakalama temelleri
Go, hataların işlenmesini geliştiriciye bırakıyor. Diğer dillerin aksine, Go her hatanın tek tek ele alınmasını ister. Go’nun iki farklı hata işleme mekanizması vardır:

* fonksiyonlar geriye türü error olan bir sonuç döndürür

* panic deyimi ile çalışma zamanı (run-time) istisnası fırlatılır (önerilmez)

Go, geriye çok sayıda sonuç döndürme yeteneğine sahip olduğu için, programlarda oluşan hatalar error arayüzünden türetilmiş bir sonuçla bildirilir.

```go
type error interface {
    Error() string
} 
```
  Go hata işleme için try/catch mekanizmasına sahip değildir. Bunun yerine fonksiyonlardan döndürülen error sonucu kontrol edilir.
  Aslında bu özellik diğer dillerdeki çözümlere göre hem daha pratik hem de daha temizdir.
