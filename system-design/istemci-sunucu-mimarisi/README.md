# İstemci-Sunucu Mimarisi

İnternette yaptığın her şey — bir web sayfası açmak, mobil uygulamanda akış başlatmak, mesaj göndermek — temelde iki taraf arasında geçen bir konuşmaya dayanır: biri istemci (client), diğeri sunucu (server). Bu iki taraf arasındaki ilişki ve iletişim biçimi, modern internetin en temel mimarisidir.

Client, istekleri başlatan taraftır. Tarayıcın, telefonu, ya da bir masaüstü uygulaması — bunların hepsi birer client'tır. Server ise bu istekleri dinleyen, işleyen ve yanıt döndüren taraftır. İki taraf da aynı fiziksel makinede çalışıyor olabilir, ya da aralarında binlerce kilometre bulunuyor olabilir; protokol aynıdır.

Bu model o kadar yaygınlaştı ki bugün "internet nasıl çalışır?" sorusunu yanıtlamak, büyük ölçüde client-server mimarisini açıklamakla eşdeğer.

## Nasıl Çalışır

Tarayıcıya bir URL yazdığında arka planda birkaç adım sırayla gerçekleşir. Bunları tek tek inceleyelim.

**1. DNS Çözümlemesi**

`github.com` gibi bir domain adı, bilgisayarların anladığı bir IP adresine çevrilmek zorundadır. Bu işlemi DNS (Domain Name System) yapar. Tarayıcın önce kendi cache'ine bakar; yoksa internet servis sağlayıcının DNS sunucusuna sorar. Sonuçta `github.com` için bir IP adresi döner, örneğin `140.82.121.4`.

**2. TCP Bağlantısı**

IP adresini öğrenen tarayıcı, sunucuya bir TCP bağlantısı kurar. TCP, iki tarafın önce el sıkışmasını (three-way handshake) gerektirir: SYN → SYN-ACK → ACK. Bu adım verinin güvenilir biçimde iletilmesini sağlar. HTTPS kullanılıyorsa bunun üstüne bir de TLS el sıkışması eklenir.

**3. HTTP İsteği**

Bağlantı kurulunca tarayıcı bir HTTP isteği gönderir. Bu istek şuna benzer:

```http
GET /index.html HTTP/1.1
Host: github.com
Accept: text/html
```

HTTP metodları, isteğin amacını tanımlar:

- `GET` — Bir kaynağı oku (bir sayfayı getir, veri çek)
- `POST` — Yeni bir veri oluştur (form gönder, yeni kayıt ekle)
- `PUT` — Mevcut kaynağı tamamen değiştirir (idempotent; PATCH ise kısmi güncelleme için kullanılır)
- `DELETE` — Bir kaynağı sil

**4. Sunucunun İsteği İşlemesi**

Server, gelen isteği alır. Hangi endpoint'in çağrıldığına, hangi metodun kullanıldığına bakar. Gerekirse veritabanına gider, bir servis çağırır ya da dosya sisteminden okur. Sonuçta bir yanıt hazırlar.

**5. HTTP Yanıtı**

Server, hazırladığı yanıtı client'a döndürür. Yanıt bir durum kodu (status code) ile başlar:

- `200 OK` — İstek başarılı, yanıt geliyor
- `201 Created` — Kaynak başarıyla oluşturuldu
- `301 Moved Permanently` — Kaynak kalıcı olarak taşındı
- `400 Bad Request` — İstek hatalı biçimlendirilmiş
- `401 Unauthorized` — Kimlik doğrulaması gerekiyor
- `403 Forbidden` — Erişim yok
- `404 Not Found` — Kaynak bulunamadı
- `500 Internal Server Error` — Sunucu tarafında bir hata oluştu

Yanıtın gövdesinde HTML, JSON, resim ya da başka bir içerik bulunabilir.

**6. Tarayıcının Yanıtı İşlemesi**

Tarayıcı, dönen HTML'yi parse eder; CSS ve JavaScript için ek istekler gönderir; sayfayı ekrana çizer (render). Kullanıcı sayfada bir şey görmeye başlar.

Basit bir pseudo-code ile bir web server'ın bu döngüyü nasıl işlediğini gösterelim:

```python
# Basitleştirilmiş bir HTTP server döngüsü
while True:
    istek = baglantiyi_dinle()  # Client'tan gelen istek
    
    if istek.metod == "GET" and istek.yol == "/kullanicilar":
        kullanicilar = veritabani.sorgula("SELECT * FROM users")
        yanit = HTTP_Yanit(durum=200, govde=kullanicilar)
    
    elif istek.metod == "POST" and istek.yol == "/kullanicilar":
        yeni_kullanici = veritabani.ekle(istek.govde)
        yanit = HTTP_Yanit(durum=201, govde=yeni_kullanici)
    
    else:
        yanit = HTTP_Yanit(durum=404, govde="Bulunamadı")
    
    istegi_yanitle(istek, yanit)
```

## Gerçek Dünya Kullanımı

**Web Tarayıcısı → Web Server**

En klasik örnek. Bir URL yazdığında tarayıcı (client) web server'a (server) istek gönderir, server HTML yanıt verir, tarayıcı bunu render eder. Burada client daima başlatan taraftır; server ise pasif biçimde bekleriyor ve gelen isteklere yanıt verir.

**Mobil Uygulama → API Server**

Mobil uygulamalar genellikle HTML döndüren bir server'la değil, JSON döndüren bir API server'la konuşur. Kullanıcı uygulamada bir akışı başlattığında, uygulama (client) bir API endpoint'ine istek atar:

```http
GET /api/v1/videos/trending
Authorization: Bearer eyJhbGci...
```

Server, veritabanından ya da cache'den ilgili veriyi çeker ve JSON olarak döndürür. Uygulama bu veriyi kullanarak kendi arayüzünü çizer.

**Microservices: Her Servis Hem Client Hem Server**

Büyük sistemlerde tek bir monolitik server yerine birbirleriyle konuşan küçük servisler bulunur. Bu mimaride her servis kendi dışındaki servislere istek atarken client, kendi içine gelen istekleri yanıtlarken server rolündedir. Sipariş servisi ödeme servisini çağırır; ödeme servisi bildirim servisini çağırır. Her biri hem client hem server olarak davranır.

## Ne Zaman Kullanılır / Kullanılmaz

**Client-Server Mimarisinin Avantajları**

Merkezi sunucu modeli yönetimi kolaylaştırır. Tüm veriler ve iş mantığı tek bir yerde toplandığından tutarlılık sağlanır, güncelleme ve bakım merkezden yapılabilir. Erişim kontrolü de kolaylaşır: server, kim hangi veriye erişebilir denetimini tek noktada yürütür.

Ayrıca client'ların fazla güçlü olmasına gerek yoktur. Hesaplama ağır işler server tarafında yapılır; thin client (ince istemci) modeli sayesinde düşük donanımlı cihazlar bile sistemi kullanabilir.

**Dezavantajları ve Sınırları**

En büyük risk, merkezi server'ın tek hata noktası (single point of failure) oluşturmasıdır. Server çökerse tüm sistem durur. Bu riski azaltmak için yedek server'lar, load balancer'lar ve failover mekanizmaları gerekir — bu da maliyeti ve karmaşıklığı artırır.

Yüksek trafik dönemlerinde server bir darboğaz haline gelebilir. Binlerce client aynı anda istek gönderdiğinde server bu yükü kaldıramazsa sistem yavaşlar ya da çöker.

**Peer-to-Peer Ne Zaman Tercih Edilir?**

Peer-to-peer (P2P) mimarisinde merkezi bir server yoktur; her katılımcı hem client hem server rolünü üstlenir. BitTorrent, dosya paylaşımı için bu modeli kullanır. Merkezi bir koordinatöre ihtiyaç duymadan, katılımcılar doğrudan birbirleriyle iletişim kurar.

P2P şu durumlarda client-server'a göre avantajlıdır: merkezi koordinasyonun gereksiz ya da istenmeyen olduğu sistemlerde (örneğin sansüre dayanıklı ağlar), içeriğin çok sayıda eşe dağıtılmasının daha verimli olduğu durumlarda (büyük dosya paylaşımı), ya da merkezi altyapı maliyetinin karşılanamayacağı kısa ömürlü projelerde. Ama tutarlı veri yönetimi, kimlik doğrulama ve merkezi iş mantığı gerektiren sistemlerde client-server modeli hâlâ daha uygun seçenektir.
