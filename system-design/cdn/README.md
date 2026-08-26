# CDN (Content Delivery Network)

İstanbul'dan bir web sitesine giriyorsun. Sitenin sunucusu San Francisco'da. İsteğin okyanusu geçip gitmesi ve yanıtın geri dönmesi birkaç yüz milisaniye alabilir. Sayfada büyük görseller, JavaScript dosyaları ve videolar varsa bu gecikme katlanarak hissedilir. Kullanıcı tabanın dünya geneline yayılmışsa, tek bir sunucudan herkese iyi bir deneyim sunmak giderek zorlaşır.

CDN (Content Delivery Network), bu sorunu coğrafi dağılımla çözer: içeriği dünyanın farklı noktalarındaki **edge server**'larda önbelleğe alır ve her kullanıcıya en yakın lokasyondan sunar. Sonuç: daha düşük gecikme, daha hızlı yükleme, daha az yük.

## Nasıl Çalışır

### Edge Server'lar ve Önbellekleme

CDN sağlayıcıları dünya genelinde onlarca, büyük oyuncular yüzlerce lokasyonda **Point of Presence (PoP)** bulundurmaktadır. Her PoP birden fazla edge server'dan oluşur. İstanbul'daki bir kullanıcının isteği, San Francisco'daki origin sunucusuna gitmek yerine en yakın edge server'a — örneğin Frankfurt'taki bir PoP'a — yönlendirilir.

Edge server o içeriği daha önce önbelleklemiş mi?

- **Evet (Cache Hit):** İçerik doğrudan edge'den döner. Origin sunucusuna istek gitmez. Hem hızlı hem de origin'e yük bindirmez.
- **Hayır (Cache Miss):** Edge server, origin'den içeriği çeker, önbelleğe alır ve kullanıcıya gönderir. Bir sonraki istekte artık cache hit olur.

### Push CDN vs Pull CDN

İçeriğin edge server'lara nasıl ulaşacağına göre iki yaklaşım vardır:

**Pull CDN:** İçerik, ilk kez istendiğinde edge server tarafından origin'den çekilir. Yapılandırması basittir — origin sunucuna dosyaları yüklemeye devam edersin, CDN gerisini halleder. Dezavantajı: ilk istek her lokasyonda yavaş olur (cold start), çünkü henüz cache yoktur.

**Push CDN:** İçerikleri sen CDN'e yüklersin. Edge server'lar, kullanıcı istemeden önce içeriğe sahip olur. Büyük dosyalar veya sık değişmeyen içerikler için idealdir. Yönetimi daha zahmetlidir — ne zaman yükleyeceğini, ne zaman kaldıracağını sen takip etmelisin.

Çoğu modern CDN kullanımı pull modeliyle başlar. Push, özellikle video dağıtımı veya yazılım sürüm yönetimi gibi durumlarda tercih edilir.

### Cache-Control ve TTL

HTTP `Cache-Control` header'ı, bir içeriğin edge server'larda ne kadar süre saklanacağını belirler:

```
Cache-Control: max-age=86400
```

Bu örnek, içeriğin 86400 saniye (1 gün) boyunca geçerli olduğunu söyler. Süre dolduğunda edge server içeriği yeniden origin'den çeker.

İçerikleri güncellemek istediğinde iki yol vardır:
1. Dosya adını değiştir (`app.v2.js` gibi versiyonlama) — eski cache geçerliliğini korur, yeni dosya otomatik çekilir.
2. CDN sağlayıcısının **cache invalidation** (önbellek temizleme) API'sini kullanarak içeriği zorla sil.

## Gerçek Dünya Kullanımı

### Netflix

Netflix, bir filmi yayınlamadan önce o içeriği dünyanın dört bir yanındaki edge server'larına kopyalar — push model. Kullanıcı izlemeye başladığında video, origin sunucusundan değil en yakın edge'den gelir. Milyonlarca eş zamanlı izleyiciyle origin'in çökmesini bu sayede önler. Netflix, kısmen kendi CDN altyapısını (Open Connect) işletir.

### Cloudflare

Cloudflare hem CDN hem de güvenlik katmanı sunar. Domain'ini Cloudflare'e yönlendirdiğinde, tüm trafik Cloudflare'in ağından geçer. Statik içerik edge'lerde önbelleğe alınır; aynı zamanda DDoS saldırıları, bot trafiği ve kötü amaçlı istekler Cloudflare tarafından filtrelenir. Küçük ve orta ölçekli projeler için ücretsiz katmanı dahi ciddi bir performans ve koruma sağlar.

### AWS CloudFront + S3

AWS'de yaygın bir pattern şudur: statik dosyaları (görseller, CSS, JavaScript, video) S3 bucket'ına yükler, önüne CloudFront dağıtımı kurarsın. Kullanıcılar dosyaları S3'ten değil CloudFront'un edge lokasyonlarından alır. Bu yaklaşım hem gecikmeyi düşürür hem de S3 bant genişliği maliyetlerini azaltır.

## Ne Zaman Kullanılır / Kullanılmaz

### Ne Zaman Kullanılır

CDN'den en çok fayda gören senaryolar şunlardır:

- **Statik içerikler:** Görseller, CSS, JavaScript dosyaları, fontlar. Bunlar sık değişmez ve CDN önbelleğinde rahatlıkla tutulabilir.
- **Global kullanıcı tabanı:** Kullanıcıların coğrafi olarak dağıldığı uygulamalarda gecikme farkı dramatik olabilir. CDN bu farkı büyük ölçüde kapatır.
- **Video streaming:** Büyük dosyaların CDN'den sunulması hem kullanıcı deneyimini iyileştirir hem de origin'e yükü azaltır.
- **Trafik tırmanmalarına karşı koruma:** Viral bir içerik ya da büyük bir kampanya sonucunda ani trafik artışında CDN, origin'i bu yükten korur.

### Ne Zaman Dikkat Gerekir

**Sık değişen içerik:** Her dakika güncellenen bir dashboard ya da gerçek zamanlı veri gösterimi CDN'e uygun değildir. Cache invalidation her güncellemede maliyetlidir ve yönetimi karmaşıklaşır. Bu tür içerikleri origin'den doğrudan sunmak daha mantıklıdır.

**Kişisel ve hassas veriler:** Kullanıcıya özel sayfalar (hesap bilgileri, fatura geçmişi), oturum bazlı içerikler CDN önbelleğine girmemelidir. Yanlış yapılandırılmış bir CDN, bir kullanıcının gördüğü sayfayı başkasına gösterebilir. `Cache-Control: private` ya da `no-store` header'larını bu tür yanıtlara eklemeyi unutma.

**API istekleri:** Dinamik API yanıtları genellikle CDN'e alınmaz. Ancak nadiren değişen veya public olan API yanıtları (örneğin ülke listesi, kategori ağacı) için CDN caching değerlendirilebilir — bu durumda TTL ayarına dikkat et.

**Cache invalidation karmaşıklığı:** Phil Karlton'ın meşhur sözü bunu iyi özetler: "Bilgisayar biliminde sadece iki zor şey var: cache invalidation ve isimlendirme." CDN'e bir içerik koyduğunda, onu doğru zamanda ve doğru şekilde geçersiz kılmak sorumluluktur. Özellikle push CDN kullanıyorsan bu süreci dikkatli tasarla.
