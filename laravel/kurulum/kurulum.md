# Kurulum
* [Composer İle Kurulum](#composer-ile-kurulum)
* [Yapılandırma](#yapilandirma)

## Composer İle Kurulum
Composerin bilgisayarınızda kurulu olması gerekiyor detaylı bilgi için [bknz](https://getcomposer.org)
Laravel bağımlılıklarını composer ile yönetiyor bu nedenle composeri azda olsa kullanımına bakmanızı tavsiye ederim oldukça faydasını göreceksiniz.

### Şimdi kuruluma geçelim

Komut satırına 
```bash
composer create-project laravel/laravel ornek-uygulama
```
yazarak kurulumu başlatabilirsiniz hızlı bir şekilde gereken paketleri kuracaktır. `ornek-uygulama` adını kendinize göre değiştirebilirsiniz.

ardından 
```bash 
cd ornek-uygulama
php artisan serve 
```
diyerek uygulamayı başlatabilirsiniz varsayılan olarak `http://localhost:8000` burdan erişim sağlayabilirsiniz ayrıca hostu veya portu değiştirmek isterseniz
```bash
    php artisan serve --host=192.168.159.196 --port=1234
``` 
Bu tamamen size kalmış.

## Yapılandırma
Laravel kurulumdan sonra pek fazla yapılandırmaya ihtiyacı yoktur. Kutudan çıkar çıkmaz kullanıma hazır bir şekilde tasarlanmıştır ama yinede `config/app.php`den local(yerel)'i veya timezone(zaman dilimini) yapılandırabilirsiniz.

Diğer yapılandırmalar kök dizindeki `.env` dosyasında tutulmaktadır dosyayı açıp bakarasanız uygulama için önemli yapılandırmaların hepsini orda bulabilirsiniz. 

Şimdilik işimize yarayacak birkaç `.env` anahtarın bilgisini vermek istiyorum

```env
    APP_NAME=ornek-uygulama # Uygulamamızın adıdır bunu istediğinizle değiştirebilirsiniz.
    APP_ENV=local # uygulamanın ortamını belirtmeniz içindir *development, local, product*
    APP_KEY=base64:... # Uygulamanızın şifreler bu çok önemlidir.
    APP_DEBUG=true # Eğer geliştirmedeyseniz ve hataları görmek istiyorsanız bunu ture yapın eğer hataları gizlemek istiyorsanız bunu false yapın hataları tamamen kapatır son kullanıcıya http hataları döndürür. bunu denemelisiniz.
    APP_URL=http://localhost:8000 # uygulamanın varsayılan url'i bunu kendiniz değiştirmelisiniz

    DB_CONNECTION=mysql # kullanacağınız veritabanı sunucusu laravel şuanda 4 veritabanını destekler bunlar; mysql, postgresql, sqlite ve sql server
    DB_HOST=127.0.0.1 # veritabanı bağlantı adresi bunlar genelde eğer veritabanı yereldeyse bu şekilde bırakılır ama uzak veritabanıysa buraya sunucu ip adresi verilir.
    DB_PORT=3306 # her veritabanı sunucusu portu
    DB_DATABASE= # veritabanı adı
    DB_USERNAME= # veritabanı kullanıcı adı
    DB_PASSWORD= # veritabanı kullanıcısının parolası
```
`.env` dosyasına 3. taraf kullanıcılarının ulaşmaması gerekir bunu ilerleyen zamanlarda ele almaya çalışacağım şimdi uygulamamıza merhaba diyelim :)).

[Yaşam Döngüsü](../yasam-dongusu/yasam_dongusu.md)