Laraveli kullanırken nasıl çalıştığını bilmeniz sizin açınızdan çok faydalı. Laravelin belgelerindede söyleneni buraya yazıyorum.. 
> "Gerçek dünyada" herhangi bir aracı kullanırken, o aracın nasıl çalıştığını anlarsanız kendinize daha çok güvenirsiniz. Uygulama geliştirme farklı değil. Geliştirme araçlarınızın nasıl çalıştığını anladığınızda, bunları kullanırken kendinizi daha rahat ve kendinden emin hissedersiniz.

Laravelde ilk çalışan dosya `public/index.php` dosyasıdır. `İndex.php` dosyasında sanılanın aksine kodların çoğunu bulundurmaz sadece uygulamanın ilk başta yüklenmesi gereken ve `composer` ile kurulan paketlerini yükler `vendor/autoload.php` ondan sonra `bootstrap/app.php` dosyasını yükler bu da laravel'in servislerini yükler.

`Bootstrap/app.php`de, Http, Console ve Kernelleri yükler. Şimdilik Http Kernellere bakalım.

`app/Http/kernel.php` => Uygulamanın küresel ara katmanları, rota ara katmanları bulunmakta ve bunları yükler. Ayrıca HTTP Kernel isteklerin'de ara katmandan geçmesini sağlar [bknz Middleware](https://tr.vvikipedla.com/wiki/Middleware). Bunlarla sınırlı değildir HTTP kernel [CSRF](https://tr.vvikipedla.com/wiki/cross-site_request_forgery) korumasını ve Oturumları(session) da kontrol etmektedir.

### Hizmet Sağlayıcıları (Service Provider)
Hizmet sağlayıcıları `config/app.php` dosyasından yüklenir. Laravelin servis sağlayıcıları ve uygulamanın kendi sağlayıcıları `dizi[]` içinde sıralanmıştır. 

Servis sağlayıcılarında `Register` yönteminde önce servis kaydedilir ve `boot` yönteminde yüklenir.

Laravelde sunulan çoğu önemli özellik servis sağlayıcıları tarafından yüklenmektedir. Bunlardan birkaçı: kuyruklama(queue), veritabanı, rotalar gibi bileşenlerdir.

### Route 
Rotalar `RouteServiceProvider.php` servis sağlayıcısında yüklenir. Servis sağlayıcıları kaydedilip yüklendikten sonra isteği önce yönlendirici sonrada rotaya verir. Rotada eğer middleware tanımlıysa middleware'den geçer middlewarede belirtilen şartlara uyarsa rotada belirtilen `Controller` veya `callback` çalıştırlır.  