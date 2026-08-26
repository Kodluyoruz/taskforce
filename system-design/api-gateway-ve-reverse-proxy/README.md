# API Gateway ve Reverse Proxy

Bir web uygulaması büyüdükçe arka planda birden fazla servis ortaya çıkmaya başlar: kullanıcı işlemleri için ayrı bir servis, ödeme için ayrı, bildirimler için ayrı. Her servis kendi portunda çalışıyor, kendi kimlik doğrulamasını yapıyor, kendi loglarını tutuyor. İstemcinin — mobil uygulama ya da tarayıcı — bu karmaşıklığı bilmesi gerekmez ve bilmemelidir. İstemci tek bir adrese gitmeli; gerisini sistem halletmeli.

Bu ihtiyaç iki kavramı doğurur: **reverse proxy** ve **API gateway**. İkisi de istemci ile arka plan arasına giren ara katmanlardır; ama sorumlulukları ve kullanım alanları farklıdır.

## Reverse Proxy Nedir

### Tanım ve Temel Görev

**Reverse proxy**, istemcilerden gelen istekleri alıp arka plandaki bir ya da birden fazla sunucuya ileten, yanıtları istemciye kendi adından döndüren bir sunucudur.

"Reverse" kelimesi, forward proxy'den ayrışmak için kullanılır:
- **Forward proxy:** İstemci tarafında çalışır. İstemci, isteği proxy üzerinden gönderir; hedef sunucu gerçek istemciyi görmez. VPN ve kurumsal ağ filtreleme bu modele örnek verilebilir.
- **Reverse proxy:** Sunucu tarafında çalışır. İstemci, isteği proxy'e gönderir; arka plandaki sunucuları görmez. İstemci için proxy'nin kendisi "sunucu"dur.

### Ne Yapar?

**SSL Termination:** HTTPS bağlantısı reverse proxy'de sonlanır. Arka plandaki sunucular şifrelenmemiş HTTP üzerinden konuşabilir. Sertifika yönetimi tek noktada yapılır, her serviste ayrı ayrı yapılandırılmaz.

**Load Balancing:** Arka planda birden fazla sunucu varsa, gelen istekleri dağıtır. Nginx bu işi son derece verimli yapar.

**Caching:** Sık istenen yanıtları önbelleğe alır. Aynı statik sayfa ya da içerik için defalarca arka sunucuya gitmek yerine önbellekten döner.

**Gzip Sıkıştırma:** Yanıtları istemciye göndermeden önce sıkıştırır. Bant genişliği kullanımını ve yükleme süresini azaltır.

**Güvenlik:** Arka plandaki sunucuların IP adresleri ve yapısı dışarıya görünmez. Reverse proxy tek erişim noktasıdır; DDoS önleme, IP engelleme ve rate limiting burada uygulanabilir.

Basit bir Nginx reverse proxy yapılandırması şöyle görünür:

```nginx
server {
    listen 443 ssl;
    server_name api.ornek.com;

    ssl_certificate /etc/ssl/certs/ornek.crt;
    ssl_certificate_key /etc/ssl/private/ornek.key;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Bu yapılandırmada Nginx, HTTPS isteklerini alıp yerel ağda `3000` portunda çalışan uygulama sunucusuna iletir. SSL burada sonlanır; arka sunucu HTTP konuşur.

## API Gateway Nedir

API gateway, reverse proxy'nin genişletilmiş bir versiyonudur — ancak sadece trafik yönlendirmekle kalmaz, API'lere özgü bir dizi işlevi merkezi olarak üstlenir.

### Reverse Proxy'den Farkı

Reverse proxy genel amaçlıdır: HTTP trafiğini yönlendirir, sıkıştırır, önbelleğe alır. API gateway ise API ekosistemi için özelleşmiştir. Şu işlevleri merkezi bir yerde toplar:

**Authentication / Authorization:** Her microservice kendi kimlik doğrulamasını yapmak yerine, gateway bu işi üstlenir. JWT token doğrulama, OAuth akışları, API key kontrolü gateway katmanında çözülür. Arka servisler kimliği doğrulanmış istekler alır.

**Rate Limiting:** Bir istemcinin dakikada kaç istek yapabileceğini kontrol eder. Hem kötüye kullanımı hem de aşırı yükü önler.

**Request Routing:** URL path'ine, header'a ya da başka kriterlere göre isteği doğru servise yönlendirir. Microservices mimarisinde her servisin ayrı port ve adreste çalıştığını düşün — gateway hepsini tek bir dış adres arkasında gizler.

**Logging ve Monitoring:** Tüm API trafiği tek noktadan geçer; bu yüzden merkezi loglama ve izleme için ideal bir konumdadır. Her isteğin kim tarafından yapıldığı, ne kadar sürdüğü, hangi yanıtın döndüğü buradan takip edilebilir.

**Request / Response Transformation:** İstemcinin gönderdiği veriyi arka servise uymayan bir formattan dönüştürebilir ya da yanıtı istemciye göndermeden yeniden şekillendirebilir. Eski ve yeni API versiyonları arasında köprü kurulabilir.

### Microservices'te Neden Kritiktir

Tek bir monolitik uygulama yerine onlarca küçük servisin çalıştığı bir mimaride istemci tarafı bir kaos yaşanabilir: hangi servise nasıl erişileceği, hangi servis hangi token'ı bekliyor, rate limiting nerede yapılıyor? API gateway bu soruları ortadan kaldırır — istemci sadece tek bir endpoint bilir, gateway gerisini çözer.

```
İstemci → API Gateway → /users/*    → User Service
                      → /orders/*   → Order Service
                      → /payments/* → Payment Service
                      → /products/* → Product Service
```

## Gerçek Dünya Kullanımı

**Netflix**, büyük ölçekli microservices geçişinde Zuul'u (şimdi kısmen Spring Cloud Gateway) API gateway olarak kullanmıştır. Milyonlarca günlük istek bu gateway üzerinden geçer; authentication, rate limiting ve routing burada yönetilir.

**AWS API Gateway**, serverless mimarilerle sıkça birlikte kullanılır. Lambda fonksiyonlarını HTTP endpoint'lerine bağlamak için yaygın bir yapıdır: istek API Gateway'e gelir, Lambda tetiklenir, yanıt döner. Tam yönetilen bir hizmet olduğundan altyapı bakımı gerektirmez.

**Kong**, açık kaynaklı bir API gateway'dir. Nginx üzerine inşa edilmiştir ve plugin sistemiyle genişletilebilir. Authentication, rate limiting, logging gibi özellikler plugin olarak eklenir. Hem on-premise hem de bulut ortamlarında kullanılır.

## Ne Zaman Kullanılır / Kullanılmaz

### Basit Senaryo: Reverse Proxy Yeterlidir

Tek bir backend servisinde ya da birkaç basit servisin olduğu bir uygulamada API gateway gereksiz karmaşıklık ekler. Nginx ya da Caddy ile kurulan bir reverse proxy, SSL termination, temel routing ve load balancing için fazlasıyla yeterlidir. Her şeyi gateway üzerinden yönetmek zorunda değilsin.

### Karmaşık Senaryo: API Gateway Değer Katar

Birden fazla microservice, farklı authentication gereksinimleri, rate limiting ihtiyacı ve merkezi logging istiyorsan API gateway bu sorunları tek noktada çözer. Microservices mimarisine geçildiğinde API gateway neredeyse kaçınılmaz hale gelir.

### Dikkat Edilmesi Gerekenler

**Bottleneck riski:** Tüm trafik API gateway'den geçtiğinden, yanlış yapılandırılmış ya da yetersiz kaynak ayrılmış bir gateway tüm sistemi yavaşlatır. Gateway'in kendisi horizontal olarak ölçeklenmeli ve performansı izlenmelidir.

**Single point of failure:** Load balancer'da olduğu gibi, API gateway da yedekli çalıştırılmalıdır. Büyük sağlayıcıların yönetilen çözümleri (AWS API Gateway gibi) bu yedekliliği kendi içinde sağlar.

**Service Mesh ile farkı:** İleri düzeyde microservices mimarilerinde **service mesh** (örn. Istio, Linkerd) kavramı gündeme gelir. API gateway, dış istemcilerden gelen trafiği yönetirken (north-south trafik); service mesh, servisler arası iç iletişimi yönetir (east-west trafik). İkisi birbirinin alternatifi değil, tamamlayıcısıdır. Başlangıç için bu ayrımı bilmek yeterli; service mesh, sistemin olgunlaştığı dönemde değerlendirilen bir katmandır.
