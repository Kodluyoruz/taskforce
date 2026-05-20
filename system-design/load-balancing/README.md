# Load Balancing

Uygulamanı tek bir sunucuda çalıştırıyorsun. Başlangıçta bu gayet iyi. Ama kullanıcı sayısı arttıkça sunucun zorlanmaya başlar: CPU yüzde yüze yaklaşır, bellek dolar, yanıt süreleri uzar. En kötü senaryoda sunucu tamamen çöker ve tüm kullanıcılar hizmet alamaz. Burada iki seçeneğin var: mevcut sunucuyu güçlendirmek (vertical scaling) ya da birden fazla sunucu kurup trafiği aralarında dağıtmak (horizontal scaling). Load balancing, ikinci yaklaşımın olmazsa olmaz bileşenidir.

**Load balancer**, gelen istekleri alıp arka plandaki birden fazla sunucuya dağıtan bir ara katmandır. İstemci sadece load balancer'ın adresini bilir; hangi sunucuya bağlandığını bilmez. Bu hem performans hem de dayanıklılık sağlar — bir sunucu çökerse, load balancer trafiği otomatik olarak diğerlerine yönlendirir.

## Nasıl Çalışır

### Dağıtım Algoritmaları

Load balancer, gelen her isteği hangi sunucuya göndereceğine bir algoritmayla karar verir. Yaygın algoritmalar şunlardır:

**Round Robin:** İstekler sunucular arasında sırayla dağıtılır. İlk istek 1. sunucuya, ikincisi 2. sunucuya, üçüncüsü 3. sunucuya, dördüncüsü tekrar 1. sunucuya gider. Basit ve tahmin edilebilir, ancak her isteğin eşit maliyette olduğunu varsayar.

**Weighted Round Robin:** Sunucular farklı kapasitelerde olabilir. 8 çekirdekli sunucuya 4 çekirdekli sunucuya göre iki kat fazla istek gönderilmesi mantıklıdır. Weighted Round Robin, her sunucuya bir ağırlık atayarak bunu sağlar.

**Least Connections:** Yeni istek, o anda en az aktif bağlantısı olan sunucuya gönderilir. Uzun süren işlemler (büyük dosya yükleme, veritabanı sorguları) varsa Round Robin yetersiz kalabilir — bu durumda Least Connections daha dengeli bir dağılım sağlar.

**IP Hash:** İstemcinin IP adresi hash'lenir ve her zaman aynı sunucuya yönlendirilir. Bu, **session affinity** (yapışkan oturum) gerektiren uygulamalar için kullanışlıdır: kullanıcı, oturumu boyunca hep aynı sunucuya bağlanır. Ancak bir sunucu devre dışı kalırsa, o sunucuya atanmış tüm kullanıcıların oturumları kesilir.

### Health Check

Load balancer, arka plandaki sunucuların sağlığını sürekli kontrol eder. Belirli aralıklarla her sunucuya küçük bir istek gönderir — sunucu yanıt vermezse ya da hata dönerse, load balancer o sunucuya yeni istek yönlendirmeyi durdurur. Sunucu tekrar sağlıklı hale gelince otomatik olarak trafiğe dahil edilir. Bu mekanizma sayesinde insan müdahalesi gerekmeden sistemin ayakta kalması sağlanır.

## L4 vs L7 Load Balancer

Load balancer'lar OSI modelinin farklı katmanlarında çalışabilir. Pratikte en çok karşılaşılan iki tür şunlardır:

### L4 Load Balancer (Transport Layer)

IP adresi ve port numarasına bakarak karar verir. HTTP içeriğini görmez, sadece ağ paketlerini yönlendirir. Bu nedenle çok hızlıdır ve işlem maliyeti düşüktür.

Kullanım alanı: yüksek hacimli TCP/UDP trafiği, veritabanı bağlantıları, oyun sunucuları gibi HTTP dışı protokoller.

### L7 Load Balancer (Application Layer)

HTTP header'larına, URL path'ine, cookie'lere hatta request body'e bakarak karar verir. İçeriği anladığı için çok daha akıllı yönlendirmeler yapabilir:

```
/api/*        → API sunucuları (uygulama backend'i)
/images/*     → Statik dosya sunucuları
/admin/*      → Yönetim paneli sunucuları
```

Belirli bir kullanıcı cookie'sine sahip olanları A/B test sunucusuna, mobil User-Agent gönderilenler farklı bir backend'e yönlendirmek de L7 seviyesinde mümkündür. İşlem maliyeti L4'ten yüksektir ama kazandırdığı esneklik genellikle buna değer.

## Gerçek Dünya Kullanımı

**Nginx ve HAProxy** açık kaynaklı dünyada en yaygın kullanılan load balancer'lardır. Nginx aynı zamanda web sunucusu ve reverse proxy olarak da çalışabilir. HAProxy, çok yüksek bağlantı sayılarında bile düşük gecikme ile yüksek performans sunar. Her ikisi de L7 load balancing destekler.

**AWS Elastic Load Balancing (ELB)** ailesi üç farklı ürün sunar:
- **ALB (Application Load Balancer):** L7, HTTP/HTTPS, URL tabanlı routing, WebSocket desteği.
- **NLB (Network Load Balancer):** L4, ultra düşük gecikme, TCP/UDP trafiği için.
- **CLB (Classic Load Balancer):** Eski nesil, yeni projelerde tercih edilmez.

**Google Cloud Load Balancing**, global anycast IP adresi ile dünya genelinde tek bir IP üzerinden trafik dağıtabilir; kullanıcıyı otomatik olarak en yakın sağlıklı backend'e yönlendirir.

## Ne Zaman Kullanılır / Kullanılmaz

### Ne Zaman Kullanılır

Birden fazla uygulama sunucusu çalıştırıyorsan (horizontal scaling), load balancer olmadan düzgün bir dağıtım yapamazsın. Bu yapıyı kurmaya karar verdiğin andan itibaren load balancer zorunlu bir bileşen haline gelir.

Ayrıca zero-downtime deployment yapmak istiyorsan load balancer şart: yeni sürümü deploy ederken önce bir grup sunucudan trafiği çek, güncelle, geri al; sonra diğerlerini güncelle. Load balancer olmadan bu geçişi kesintisiz yapamazsın.

### Single Point of Failure Sorunu

Load balancer'ın kendisi de bir arıza noktası olabilir. Eğer tek bir load balancer çalışıyorsa ve bu düşerse, tüm sisteme erişim kesilir. Bunu önlemek için **active-passive** ya da **active-active** iki load balancer kurulur:

- **Active-passive:** Birincil load balancer çalışır, ikincisi hazır bekler. Birincil düşünce ikincisi otomatik devralır (failover).
- **Active-active:** İkisi de aynı anda trafik alır. Hem yüksek erişilebilirlik hem de ekstra kapasite sağlar.

Büyük bulut sağlayıcıların yönetilen load balancer hizmetleri (AWS ALB gibi) bu yedekliliği zaten kendi içinde sağlar — bunu ayrıca yönetmen gerekmez.

### Ne Zaman Kullanılmaz ya da Dikkat Edilir

Tek bir sunucuda çalışan küçük bir uygulama için load balancer gereksiz karmaşıklık ekler. Ayrıca load balancer da bir gecikme (latency) kaynağıdır — her istek bir ek hop geçer. Bu genellikle milisaniye mertebesindedir ve önemsizdir, ama gecikmeye son derece duyarlı sistemlerde L4 load balancer tercih edilmeli ya da mimari yeniden değerlendirilmelidir.

Session verilerini sunucu belleğinde tutuyorsan, farklı istekler farklı sunuculara gittiğinde oturum bilgisi kaybolur. Bunu çözmenin iki yolu var: IP hash ile kullanıcıyı aynı sunucuya kilitleyin (esnekliği azaltır) ya da oturum verilerini Redis gibi merkezi bir store'a taşıyın (önerilen yaklaşım).
