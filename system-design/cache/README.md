# Cache: Hızlı Veri Erişiminin Temeli

Bir web uygulamasında kullanıcı bir sayfayı her açtığında sistemin veritabanına gidip aynı sorguyu çalıştırması, tüm hesaplamaları yeniden yapması ve sonucu tekrar oluşturması gerekiyor mu? Teoride evet, pratikteyse bu yaklaşım hem yavaş hem de gereksiz yük oluşturur. Cache, sık erişilen verileri daha hızlı bir katmanda saklayarak bu tekrarlı ve pahalı işlemleri ortadan kaldıran bir mekanizmadır.

Temel fikir şudur: bir veriyi ilk kez üretmek ya da veritabanından çekmek zaman alır. Ama aynı veri tekrar tekrar istenecekse, onu hızlı erişilebilir bir yerde tutmak mantıklıdır. Disk okuma işlemleri milisaniyeler içinde gerçekleşirken RAM üzerindeki bellek erişimi nanosaniyeler mertebesinde gerçekleşir; bu fark pratikte yüzlerce kat hız avantajı anlamına gelir.

## Nasıl Çalışır

Cache'in temel dinamiği iki kavram üzerine kuruludur: **cache hit** ve **cache miss**.

**Cache hit:** İstenilen veri cache'de mevcuttur ve doğrudan oradan döndürülür. Veritabanına gitmeye gerek kalmaz; yanıt çok hızlı gelir.

**Cache miss:** İstenilen veri cache'de yoktur. Sistem veritabanından veriyi çeker, cache'e yazar ve ardından kullanıcıya döndürür. İlk istek biraz daha yavaş olur ama sonraki istekler cache hit sayesinde hızlı gelir.

### Yazma Stratejileri

Veriyi cache'e yazarken üç temel strateji kullanılır:

**Write-through:** Veri hem cache'e hem de veritabanına aynı anda yazılır. Tutarlılık güçlüdür ama her yazma işlemi iki katman gerektirdiğinden yazma gecikmesi artar.

**Write-back (write-behind):** Veri önce cache'e yazılır, veritabanına yazma işlemi sonradan (asenkron olarak) gerçekleştirilir. Yazma hızı artar ama sistem çökerse henüz diske yazılmamış veri kaybolabilir.

**Write-around:** Veri doğrudan veritabanına yazılır, cache atlanır. Seyrek okunan veriler için cache'i gereksiz yere doldurmamak adına tercih edilir.

### TTL ve Eviction Politikaları

Cache sonsuz boyutta değildir. **TTL (Time-to-Live)**, bir cache kaydının ne kadar süre geçerli sayılacağını belirler. TTL dolduğunda kayıt otomatik silinir ve bir sonraki istekte veritabanından taze veri çekilir.

Cache dolduğunda hangi kayıtların silineceğini ise **eviction politikası** belirler:

- **LRU (Least Recently Used):** En uzun süredir erişilmeyen kayıt silinir. En yaygın kullanılan politikadır.
- **LFU (Least Frequently Used):** En az erişilen kayıt silinir. Erişim sıklığına göre karar verir.
- **FIFO (First In First Out):** İlk eklenen kayıt ilk silinir. Basit ama zaman zaman verimsizdir. (Bu genel bir bilgisayar bilimi kavramıdır; Redis gibi araçlarda doğrudan FIFO politikası bulunmaz.)

### Cache-Aside Pattern

En yaygın kullanılan cache tasarım kalıbı olan **cache-aside** (lazy loading olarak da bilinir) şu şekilde çalışır:

```python
def get_user(user_id):
    user = cache.get(user_id)
    if user is None:
        user = db.query(user_id)
        cache.set(user_id, user, ttl=3600)
    return user
```

Uygulama önce cache'e bakar. Veri yoksa veritabanından çeker ve cache'e yazar. Veri varsa doğrudan döndürür. Bu yaklaşımda cache yalnızca gerçekten istenen verilerle dolar; gereksiz önbellekleme yapılmaz.

## Cache Katmanları

Bir istek sunucuya ulaşmadan önce birden fazla cache katmanından geçebilir:

**Browser cache:** Tarayıcı, daha önce ziyaret edilen sayfaların statik içeriklerini (resimler, CSS, JS dosyaları) yerel diske kaydeder. Tekrar ziyarette sunucuya sorgu atmadan bu dosyaları kullanır. HTTP başlıkları (Cache-Control, ETag) bu mekanizmayı yönetir.

**CDN (Content Delivery Network) cache:** Statik içerikler, kullanıcıya coğrafi olarak yakın CDN node'larında önbelleklenir. Türkiye'deki bir kullanıcı Amerika'daki sunucuya gitmek yerine yakın bir CDN'den içeriği alır; gecikme dramatik biçimde düşer.

**Application-level cache:** Sunucu tarafında çalışan, genellikle **Redis** veya **Memcached** gibi araçlarla uygulanan katmandır. Veritabanı sorgu sonuçları, hesaplama çıktıları ve kullanıcı oturumları burada saklanır. En fazla kontrol bu katmanda yapılabilir.

**Database query cache:** Veritabanı motorunun kendi içinde sakladığı sorgu sonuçlarıdır. Aynı sorgu tekrar çalıştırıldığında disk okumak yerine bellekten yanıt döner. Ancak günümüzde bu katman pek çok veritabanında varsayılan olarak devre dışı bırakılmıştır çünkü invalidation maliyeti faydayı aşabilir.

## Gerçek Dünya Kullanımı

**Twitter / X:** Timeline verisi, her kullanıcı için özelleşmiş bir akış olduğundan hesaplaması pahalıdır. Twitter, kullanıcı timeline'larını Redis'te önbellekler. Böylece milyonlarca kullanıcının anlık timeline talebi veritabanını ezmeden karşılanabilir.

**Facebook sosyal grafik:** Facebook, kullanıcılar arasındaki arkadaşlık ilişkilerini ve sosyal grafik verilerini kendi geliştirdiği **TAO** sistemiyle önbellekler. Milyarlarca ilişkiyi her seferinde sorgulamak yerine graph'ı RAM üzerinde tutarak düşük gecikmeli erişim sağlar.

**E-ticaret ürün sayfası:** Büyük bir e-ticaret sitesinde ürün detay sayfası; fiyat, stok durumu ve ürün açıklaması gibi kısmi ölçüde değişen veriler içerir. Bu veriler Redis'te önbelleklendiğinde saniyede on binlerce sayfa görüntüleme talebi veritabanını doğrudan vurmadan karşılanabilir. Stok değiştiğinde ilgili cache anahtarı invalidate edilir.

## Ne Zaman Kullanılır / Kullanılmaz

Cache her durumda doğru araç değildir. Sık okunan ama seyrek değişen veriler için cache son derece etkilidir: ülke listesi, konfigürasyon verileri, popüler içerikler bunların başında gelir. Ama bazı senaryolarda cache ciddi sorunlar yaratabilir.

**Stale data riski:** Cache'deki veri güncelliğini yitirmiş olabilir. Özellikle yazma sıklığı yüksek verilerde cache'de görünen değer gerçeği yansıtmayabilir. TTL ayarını doğru yapmak ve güncelleme sonrasında cache'i invalidate etmek kritik önem taşır.

**Cache invalidation zorluğu:** Bilgisayar biliminde en sık dile getirilen zorluklardan biri Phil Karlton'ın şu sözüdür: *"There are only two hard things in computer science: cache invalidation and naming things."* Hangi verinin ne zaman geçersiz hale geldiğini takip etmek, dağıtık sistemlerde son derece karmaşıklaşabilir.

**Thundering herd problemi:** Popüler bir cache kaydının TTL'i dolduğunda, o anda gelen yüzlerce eş zamanlı istek hepsi birden cache miss yaşar ve doğrudan veritabanına gider. Bu ani yük artışı veritabanını zorlayabilir. Çözüm için cache kaydı expire olmadan önce arka planda yenilemek (background refresh) ya da kilitleme mekanizmaları kullanmak gerekir.

Gerçek zamanlı finansal veriler, her kullanıcıya özel anlık bildirimler ve her istekte farklı hesaplanması gereken dinamik içerikler cache için uygun değildir. Cache sisteminize ekler ama aynı zamanda yönetilmesi gereken yeni bir karmaşıklık katmanı da getirir. Bu dengeyi göz önünde bulundurarak karar ver.
