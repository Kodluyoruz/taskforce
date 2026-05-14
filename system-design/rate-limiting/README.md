# Rate Limiting

Bir API yayınladığında, kaçınılmaz olarak kötüye kullanımla karşılaşırsın. Bir bot dakikada binlerce istek gönderebilir, hatalı yazılmış bir client sonsuz döngüye girebilir, ya da bir rakip servisi kasıtlı olarak meşgul etmeye çalışabilir. Rate limiting, bu tehditlere karşı en temel koruma mekanizmasıdır: belirli bir zaman diliminde bir kaynaktan gelebilecek istek sayısını sınırlar. Sadece güvenlik değil, aynı zamanda kaynak adalet dağılımı ve servis kalitesini koruma aracıdır.

## Algoritmalar

Rate limiting'i hayata geçirmenin birden fazla yolu var. Her algoritmanın farklı avantajları ve dezavantajları vardır; seçim, sistemin ihtiyacına göre değişir.

### Token Bucket

En yaygın kullanılan algoritmadır. Kavramsal olarak içinde token bulunan bir kova düşün:

- Kova belirli bir kapasiteye sahiptir (örneğin 100 token)
- Her zaman diliminde (örneğin saniyede) kovaya sabit sayıda token eklenir
- Her gelen istek bir token harcar
- Token varsa istek geçer; token yoksa istek reddedilir

```
tokens = min(capacity, tokens + refill_rate * elapsed_time)
if tokens >= 1:
    tokens -= 1
    allow request
else:
    reject request (429)
```

Token bucket'ın en güzel özelliği **burst** izni vermesidir. Uzun süre istek yapmayan bir kullanıcı token biriktirip kısa sürede yoğun istek gönderebilir. Stripe ve Twitter bu algoritmayı tercih eder.

### Leaky Bucket

Token bucket'ın tersi gibi düşünebilirsin. İstekler kovaya girer, kova ise sabit bir hızda "sızar" (işlenir).

- İstekler kuyruğa (kovaya) eklenir
- Sabit bir işleme hızıyla kuyruktan çekilir
- Kuyruk doluysa yeni gelen istek reddedilir

Bu yaklaşım **çıktı hızını** düzenler. Ani trafiği yumuşatır ve downstream servislere sabit bir yük gönderir. Ancak token bucket'taki gibi burst izni yoktur; her koşulda sabit bir hız uygulanır.

### Fixed Window Counter

En basit algoritmadır. Zamanı sabit pencereler (örneğin her dakika) halinde böler ve her pencerede izin verilen istek sayısını sayarsın:

- 00:00–01:00 arası 100 istek izni
- 01:00'de sayaç sıfırlanır, yeni pencere başlar

Sorun: pencere sınırlarında **burst** oluşabilir. Kullanıcı 00:59'da 100 istek, 01:00'de tekrar 100 istek gönderebilir — iki saniyelik bir aralıkta 200 istek geçer. Bu, özellikle düşük limitlerde ciddi bir zafiyet yaratır.

### Sliding Window Log

Her istek için bir timestamp kaydedilir. Yeni bir istek geldiğinde, pencere boyutu kadar geriye gidilerek geçerli istek sayısı hesaplanır.

- Çok hassastır, burst sorununu tamamen çözer
- Ancak her istek için timestamp saklamak **bellek** kullanımı açısından maliyetlidir
- Yüksek trafikli sistemlerde kullanışı sınırlıdır

### Sliding Window Counter

Fixed Window Counter ile Sliding Window Log'un hibrididir. Mevcut pencere sayacını önceki penceredeki ağırlıklı sayaçla birleştirerek yaklaşık ama düşük bellekli bir hesaplama yapar.

Cloudflare bu algoritmayı büyük ölçekte kullanmaktadır. Bellekten taviz vermeden Fixed Window'un burst sorununu büyük ölçüde giderir.

## Gerçek Dünya Kullanımı

### Büyük API'lerdeki Limitler

| Servis | Limit |
|---|---|
| Twitter/X API (standart) | 15 dakikada 300 istek |
| Stripe API | Saniyede 100 istek |
| GitHub API (authenticated) | Saatte 5.000 istek |
| GitHub API (unauthenticated) | Saatte 60 istek |

Bu limitler genellikle API key veya kullanıcı bazında uygulanır. Stripe'ın yaklaşımı özellikle ilginçtir: basit bir istek hız sınırının yanı sıra eş zamanlı istek sayısını da sınırlar — böylece uzun süren bir istek diğerlerini bloke etmez.

### Redis ile Distributed Rate Limiting

Tek sunuculu sistemlerde rate limiting basittir. Ama birden fazla API server çalışıyorsa, her sunucunun kendi sayacını tutması tutarsızlığa yol açar. Çözüm: merkezi bir store kullanmak.

**Redis** bu iş için ideal bir araçtır:

- `INCR` komutuyla atomik sayaç artışı
- `EXPIRE` ile TTL (time-to-live) ayarı
- `SETNX` ile pencere başlangıç kontrolü

```
INCR user:123:requests
EXPIRE user:123:requests 60  # 60 saniye TTL
```

Redis'in `MULTI/EXEC` ile transaction desteği veya Lua script'leri, race condition'ı önler. Tüm API sunucuları aynı Redis instance'a bakar, böylece limit her sunucuda tutarlı şekilde uygulanır.

## Ne Zaman Kullanılır

### Kullanman Gereken Durumlar

**Public API'lerde her zaman.** Dış dünyaya açık her endpoint için rate limiting zorunlu olmalıdır. Limit ne kadar yüksek ayarlansa da, hiç limit olmamasından iyidir.

- Kötüye kullanım ve DDoS saldırılarına karşı koruma
- Tüm kullanıcılara adil kaynak dağılımı
- Ani trafik artışlarında backend servislerini koruma

### Doğru HTTP Response

Rate limit aşıldığında standart response **429 Too Many Requests** olmalıdır. Buna ek olarak şu header'ları eklersen kullanıcı ne zaman tekrar deneyeceğini bilir:

```
HTTP/1.1 429 Too Many Requests
Retry-After: 30
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1715000000
```

`Retry-After` header'ı özellikle önemlidir — istemciyi kaç saniye beklemesi gerektiği konusunda bilgilendirir ve gereksiz yeniden denemelerin önüne geçer.

### Rate Limiting Nerede Yapılır?

**API Gateway seviyesinde:** Nginx, AWS API Gateway, Kong gibi araçlar istek uygulama koduna ulaşmadan önce rate limit uygular. Bu yaklaşım en verimli yöntemdir çünkü uygulama kodu hiç çalışmaz.

**Uygulama katmanında:** Daha ince taneli kontrol gerektiğinde (kullanıcı tipi, abonelik planı, endpoint bazında farklı limitler) uygulama içinde middleware ile uygulanır.

**Her ikisi birden:** En sağlam yaklaşım. Gateway genel saldırıları ve bot trafiğini eler; uygulama katmanı ise iş mantığına özel limitleri uygular. Savunma derinliği (defense in depth) prensibi gereği, tek bir katmana güvenmemek her zaman daha güvenlidir.
