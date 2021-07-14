# Dizin Yapısı
* Giriş
* Kök Dizin
    * [`app`Dizini](#app-dizini)
    * [`boostrap`Dizini](#bootstrap-dizini)
    * [`config`Dizini](#config-dizini)
    * [`database`Dizini](#database-dizini)
    * [`public`Dizini](#public-dizini)
    * [`resources`Dizini](#resoruces-dizini)
    * [`storage`Dizini](#storage-dizini)
    * [`tests`Dizini](#tests-dizini)
    * [`vendor`Dizini](#vendor-dizini)
* `app` Dizini
  * [`Console` Dizini](#)
  * `Events` Dizini
  * `Exceptions` Dizini
  * `Http` Dizini
  * `Jobs` Dizini
  * `Listeners` Dizini
  * `Mail` Dizini
  * `Models` Dizini
  * `Notifications` Dizini
  * `Policies` Dizini
  * `Providers` Dizini
  * `Rules` Dizini

# Giriş
Laravelin varsayılan yapısı büyük ve yeni başlayanlar için oldukça karmaşık gelebelir. Bu durum gözünüzü korkutmasın hepsinin amacı var. 
Yani bütün dizin/dosyalarla sürekli çalışmak gibi bir durumunuz yok.

# App Dizini
`app` dizini, uygulamanın çekirdek kodlarını içeren dizindir. İlerleyen yerler de detaylı bir şekilde açıklanacaktır.

# Bootstrap Dizini
`bootstrap` dizini, bootstrap'in Türkçesi önyükleme demek. Önyükleme dizini framework'ü yükleyen `app.php` dosyasını bulundurur. `app.php` rota, hizmetler ve önbellek dosyalarını yükler. Genellikle bu dizinde değişiklik vb yapmanız istenmez.

# Config Dizini
`config` dizini, uygulama yapılandırmalarını burada tutar. Yani uygulamada bir yapılandırma gerekiyorsa burdan yapılır başka bir yerden yaptırmanızı istemez.

# Database Dizini
`database` dizini, seed, migration ve factory dizinlerini bulundurur. Ayrıca burayı sqlite deposu olarak kullanabilirsiniz. 

# Public Dizini
`public` dizini, isteklerin ilk gelidiği `index.php` dosyasını bulundurur. Bu dizin içerisinde herkese açık dosyalar tutulur. Örn : javascript dosyaları, css dosyaları vb.

# Resoruces Dizini
`resources` dizini, MVC'nin V'si diyebiliriz. Burda şablonlar, derlenmemiş css ve javascript dosyalarını barındırır. Bu dizin dışarıya açık değildir ve açılması kesinlikle önerilmez ! Bu dizin içinde ayrıca dil dosyaları bulunur. Yani çoklu dil kullanmak isteyebilirsiniz o yapılandırmaları burdan kolayca yapabilirsiniz.

# Routes Dizini
`routes` dizini, uygulama için tanımlanacak rotaları içerir yani gereken sayfa yönlendirmelerini burdan yapılır. `Routes` dizini içerisinde gelen hazırda; `web.php`, `api.php`, `console.php` ve `channels.php` bulunmakta.

`web.php` dosyası, `RouteServiceProvider` tarafından yüklenir. `web` ara katman yazılım grubuna yerleştirilidiği yolları içerir. Uygulamada Restfull api sunmuyorsa muhtemelen sadece `web.php` dosyasını kullanırsınız.

`api.php` dosyası, `RouteServiceProvider` tarafından yüklenir. `api` ara katman yazılım grubuna yerleştirilidiği yolları içerir. Adından da anlaşılacağı gibi bu dosya normal istekleri kabul etmez yani `token` olmadan ve belirtilen ara katman yazılımları kullanılıyorsa istek atılamaz.

`console.php` dosyası, `app/Console/Kernel.php` tarafından yüklenir. Bu dosya HTTP isteklerine kapalıdır. Komut satırından tanımlayacağınız işlemleri yapar. Örn 
```phpt 
  Artisan::command('hello', function () {
          echo "Hello World";
  });
```
```shell
  php artisan hello 
```
> Hello World

`channels.php` dosyası, uygulamanın etkinlik ve yayın kanallarının desteklediği tüm rotaları tanımlamanıza olanak verir.

# Storage Dizini
`storage` dizini, logları, derlenmiş blade(laravel blade motorunu kullanıyor.) şablonları, session(oturum)ları, dosya önbellekleri framework tarafından oluşturulan diğer önbellekleri tutar.
Bu dizin, `app`, `framework` ve `log` dizinlerine ayrılmıştır. `app` dizini uygulama tarafından oluşturulan dosyaları içerir ve bu dizinde siz de dosya depolayabilirsiniz. `framework` dizini, framework tarafından oluşturulan önbellek dosylarını bulundurur. `logs` dizini,  uygulamanın loglarını içerir.
`storage/app/public` dizini, kullanıcılar tarafından yüklenen fotoğraflar vb. dosyaları tutması için kullanılabilir fakat direkt erişiminiz yok bunun için `public/storage` adında dizin'e sembolik bağlantı vermeniz gerekiyor. Bunu da `php artisan storage:link` komutu ile yapabilmeniz mümkün.

# Tests Dizini
`tests` dizini, otomatik testlerinizi içerir. Her test sınıfnın sonuna `Test` eklenmelidir.

# Vendor Dizini
`vendor` dizini, composer bağımlılıklarını içerir. Bu dizinde hiçbir şekilde değişiklik yapmamanız gerekir. Hatta hiç yapmayın. composer ile bir paket kurduğunuzda veya güncelleme yaptığınızda yaptığınız değişiklikler silinir.

## App Dizini İçindekiler
Uygulamanın çoğu bu dizin altında bulunur. Bu dizin composer otomatik yükleme standartına göre yapılmışıtr.
[PSR-4 otomatik yükleme standartı](https://www.php-fig.org/psr/psr-4/)

`App` dizini, CLI, HTTP ve Servis sağlayıcıları gibi diğer dizinleri de içerir. Bazı dizinler `artisan make` komutu çalışmadan oluşturlmaz örnek `Mail` dizini `php artisan make:mail Test` diye yazarsanız `Mail` dizinin oluştuğunu göreceksiniz.  

## Console Dizini
`Console` dizini, kendiniz tanımlamak istediğiniz artisan komutlarını içerir. Yeni bir komut tanımlamak için `php artisan make:command test` diye çalıştırırsanız `Commands` dizininde `test.php` adında, komut tanımlamanız için bir dosya oluşacaktır.

## Exceptions Dizini
`Exceptions` dizini, hataların ilendiği ve kaydedildiği yerdir. Burdan hataları özelleştirebilirsiniz.

## Http Dizini
`Http` dizini, uygulamanın ara katman yazılımları, form istekleri ve controller'i bulundurur. 

## Models Dizini
`Models` dizini, uygulamanın model dosyalarını barındırır. Model dosyaları veritabanı tablolarıyla eşleşir yani her model dosyası bir tabloyla eşleşir. 

## Providers Dizini
`Providers` dizini, uygulamanın ilk çalışan yeridir önemi çoktur.