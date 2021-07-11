<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

# Mail
> kaynak [Larvel Mail](https://laravel.com/docs/7.x/mail)

* ### [Giriş](#giriş-1) 
  * ##### [Konfigürasyon](#konfigürasyon-1)
  * ##### [Sürücü Önkoşulları](#sürücü-önkoşulları-1)
* ### [Mail Oluşturma](#mail-oluşturma-1)
* ### [Mail Yazma](#mail-yazma-1)
    * ##### [Göndereni Yapılandırma](#göndereni-Yapılandırma-1)
    * ##### [Görünümü Yapılandırma](#görünümü-yapılandırma-1)
    * ##### [Düz Metin E-postaları](#düz-metin-e-postaları-1)
    * ##### [Veriyi gör](#veriyi-gör-1)
    * ##### [Ekler](#ekler-1)
    * ##### [Satır İçi Ekler](#ekler-2)
* ### [Mail Gönderme](#mail-gönderme-1)
    * ##### [Kuyruk (queue) Postası](#kuyruk-postsası-1)

### [Giriş](#giriş-1) 
Laravel, popüler [SwiftMailer](https://swiftmailer.symfony.com/docs/introduction.html) kütüphanesi üzerinden [SMTP](https://tr.wikipedia.org/wiki/SMTP), Mailgun, Postmark, Amazon SES ve sendmail sürücülerine sahip temiz ve basit bir API sağlayarak, seçtiğiniz yerel veya bulut tabanlı bir hizmet aracılığıyla hızlı bir şekilde posta göndermeye başlamanıza olanak tanır.

#### [Konfigürasyon](#konfigürasyon-1) 
Laravelin e-posta yapılandırma dosyası config/mail.php dosyasında bulunur.

###### varsayılan mail ayarları
> config/mail.php
Dosyasında ayarlar varsayılan olarak eklenmiştir. Kullandığınız mail servisine göre düzenleme yapmalısınız. 
```php
'mailers' => [
        // ...
    ]
```
içinden kullandığınız protokole göre düzenlenmesi gerekir varsayılan olarak _smtp_ geliyor.

> Desteklenen protokoller
* smtp 
* sendmail 
* mailgun 
* ses 
* postmark 
* log 
* array

Ana dizinde bulunan _.env_ dosyası içinden kendinize göre ayarlayabilirsiniz

```environment
    MAIL_MAILER=smtp
    MAIL_HOST=smtp.mailtrap.io
    MAIL_PORT=2525
    MAIL_USERNAME=null
    MAIL_PASSWORD=null
    MAIL_ENCRYPTION=null
    MAIL_FROM_ADDRESS=null
    MAIL_FROM_NAME="${APP_NAME}"
```
* MAIL_MAILER
    * Mail protokolünü belirtiyoruz
* MAIL_HOST
    * Kullandığımız mail servisinin hostu. Eğer gmail kullanacaksanız _smtp.gmail.com_ olarak değiştirin 
* MAIL_PORT
    * Mail portu smtp'de 587 veya 493
* MAIL_USERNAME
    * e-posta adresiniz
* MAIL_PASSWORD
    * e-posta adresinizin parolası
* MAIL_ENCRYPTION
    * ssl veya tls 
* MAIL_FROM_ADDRESS
    * e-posta adresiniz gönderildiğinde gösterilecek adres
* MAIL_FROM_NAME
    * e-posta adresiniz gönderildiğinde gösterilecek isim

##### [Sürücü Önkoşulları](#sürücü-önkoşulları-1)
Mailgun ve Postmark gibi API tabanlı sürücüler genellikle SMTP sunucularından daha basit ve daha hızlıdır. Mümkünse, bu sürücülerden birini kullanmalısınız. Tüm API sürücüleri, Composer paket yöneticisi aracılığıyla kurulabilen [Guzzle HTTP](http://docs.guzzlephp.org/en/stable/) kütüphanesini gerektirir.

```php 
    composer require guzzlehttp/guzzle
```
#### Mailgun Sürücüsü
Mailgun sürücüsünü kullanmak için önce [Guzzle](http://docs.guzzlephp.org/en/stable/)'ı yükleyin, ardından ```config/mail.php``` yapılandırma dosyanızdaki varsayılan seçeneği mailgun olarak ayarlayın. Ardından, ```config/services.php``` yapılandırma dosyanızın aşağıdaki seçenekleri içerdiğini doğrulayın:

```php 
'mailgun' => [
    'domain' => env('MAILGUN_DOMAIN'),
    'secret' => env('MAILGUN_SECRET'),
    'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],
```
Bu şekilde olup _.env_ dosyanızda düzenlemeleri size verildiği gibi doldurun
```environment
    MAIL_MAILER=mailgun
    MAIL_HOST=smtp.mailgun.org
    MAIL_PORT=587
    MAIL_FROM_ADDRESS=ornek_eposta@domain.com
    MAILGUN_DOMAIN=subdomain.domain.com
    MAILGUN_SECRET=mailgun-api-key
```
* MAIL_MAILER=mailgun
    * Mail protokolünü belirtiyoruz.
* MAIL_HOST=smtp.mailgun.org
    * Kullandığımız mail servisinin hostu.
* MAIL_FROM_ADDRESS=ornek_eposta@domain.com
    * mailgun'de başvuru yaptığınız e-posta adresiniz
* MAILGUN_DOMAIN=subdomain.domain.com
    *   mailgun subdomain kullanmanızı tavsiye ediyor [mailgun döküman](https://documentation.mailgun.com/en/latest/)
* MAILGUN_SECRET=mailgun-api-key
    * mailgun tarafından size sunulan api-secret-key (anahtarı)
    Mailgun konfigürasyonu bu kadar.
#### Postmark Sürücüsü 
    Postmark henüz test edilmediği için eklenmedi ilerleyen zamanlarda güncellenecektir.

#### Amazon SES Sürücüsü 
    Amazon SES henüz test edilmediği için eklenmedi ilerleyen zamanlarda güncellenecektir.

### [Mail Oluşturma](#mail-oluşturma-1)
Laravel'de kullandığınız servis tarafından her türlü e-posta gönderilebilir. Laravel posta gönderme sınıfları ```app/Mail``` dizininde bulunur.
Posta gönderme sınıfı oluşturmak için aşşağıdaki komutunu çalıştırıyoruz.
```php
    php artisan make:mail YeniGonderi
```
> Ben örnek için ```YeniGonderi``` diye isimlendirdim.

### [Mail Yazma](#mail-yazma-1)
E-posta gönderme işlemleri, yapılandırma derleme gibi işlemler  ```build()``` fonksiyonu'nda yapılır.
```php
   /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('view.name');
    }
```
> [Basit bir örnek](/mail_ornek.md) 

### [Göndereni Yapılandırma](#göndereni-Yapılandırma-1)
Öncelikle e-posta kimin tarafından gönderileceğini yapılandıralım. Göndereni yapılandırmanın iki yolu vardır.

##### 1. Yolu
```build``` fonksiyonu, ```Mailable``` sınıfına ait olan ```from``` fonksiyonu. Fonksiyon 2 parametre alır 1. si zorunlu ```$address``` 2. parametre ```$name``` varsayılan ```null``` 

```php 
/**
 * Build the message.
 *
 * @return $this
 */
public function build()
{
    return $this->from('example@example.com',)
                ->view('emails.orders.shipped');
}
```

##### 2. Yolu
Eğer sadece 1 tane e-posta adresi kullanacaksanız 2. yol önerilir bu tüm ```Mailable``` sınıflarında kullanılır yani siz yeni bir ```Mailable``` oluşturdunuz orda göndereni belirtmenize gerek yoktur. 
###### Yapılandırma 
```config/mail.php``` dosyasını açıp
```php
    'from' => [
        'address' => env('MAIL_FROM_ADDRESS', 'ornek@ornek.com'),
        'name' => env('MAIL_FROM_NAME', 'ornek'),
    ],
```
veya ```.env``` dosyasındanda düzenleyebilirsiniz.

```environment
MAIL_FROM_ADDRESS=ornek@ornek.com
MAIL_FROM_NAME="ornek isim"
```
Bunlara ek olarak ```config/mail.php``` "yanıt adresi" de belirleyebilirsiniz 
```php 
    'reply_to' => ['address' => 'ornek@ornek.com', 'name'    => 'isim'
    ],
```
#### [Görünümü Yapılandırma](#görünümü-yapılandırma-1)
```Mailable``` sınıfında ```build``` fonksiyonu içinde e-postanın içeriğini işlerken hangi şablonun kullanılması gerektiğini belirtmek için ```view``` fonksiyonunu kullanabilirsiniz. Burda istediğiniz gibi stil tasarım yapabilirsiniz bunda özgürsünüz.
```php
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('email.mail_sayfasi');
    }
```
#### [Düz Metin E-postaları](#düz-metin-e-postaları-1)
E-postanızda düz metinde gönderebilirsiniz. Bunu da 
```php
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->text('email.duz_yazi_sayfasi');
    }
```
#### [Veriyi gör](#veriyi-gör-1)
Bu bölümde e-posta gönderirken şablona nasıl gönderilir onu gösterecem.
```public``` 
olarak tanımlanan veriler ```build``` fonksiyonunda işlenmesine gerek yoktur onlar direkt şablonda kullanılabilir.
```php
<?php
    namespace App\Mail;

    use App\Gonderi;
    use Illuminate\Bus\Queueable;
    use Illuminate\Contracts\Queue\ShouldQueue;
    use Illuminate\Mail\Mailable;
    use Illuminate\Queue\SerializesModels;

    class YeniGonderi extends Mailable
    {
        use Queueable, SerializesModels;



        public $gonderi;

        /**
        *  Yeni bir mesaj oluşturmak
        *  @param App\Gonderi $gonderi
        *  @return void
        */

        public function __construct(Gonderi $gonderi)
        {
            $this->gonderi = $gonderi;
        }

        /**
        *  Mesaj derleme
        *  @return $this
        */
        public function build()
        {
            return $this
                    ->view('mail.yeni_gonderi');
        }
    }
```
```$gonderi```, halka açık(public) olduğu için şablona otomatik olarak gider herhangi birşey yapmanıza gerek yok.
```php
    <div style="margin:20px">
        <h5 style="text-align:center">
            {{ $gonderi->baslik }}
        </h5>
        <p style="padding:8px">
            {{ $gonderi->icerik }}
        </p>
    </div>
```
##### with fonksiyonuyla veri göndermek
```with``` yöntemiyle, ```korumalı(protected), özel(private)``` olan veriler gönderilir.

```php
    <?php

    namespace App\Mail;

    use App\Gonderi;
    use Illuminate\Bus\Queueable;
    use Illuminate\Contracts\Queue\ShouldQueue;
    use Illuminate\Mail\Mailable;
    use Illuminate\Queue\SerializesModels;

    class YeniGonderi extends Mailable
    {
        use Queueable, SerializesModels;



        protected $gonderi;

        /**
        *  Yeni bir mesaj oluşturmak
        *  @param App\Gonderi $gonderi
        *  @return void
        */

        public function __construct(Gonderi $gonderi)
        {
            $this->gonderi = $gonderi;
        }

        /**
        *  Mesaj derleme
        *  @return $this
        */
        public function build()
        {
            return $this->view('mail.yeni_gonderi')
                        ->with([
                            "baslik" => $this->gonderi->baslik,
                            "icerik" => $this->gonderi->icerik
                        ]);
        }
    }
```
```php
    <div style="margin:20px">
        <h5 style="text-align:center">
            {{ $baslik }}
        </h5>
        <p style="padding:8px">
            {{ $icerik }}
        </p>
    </div>
```
#### [Ekler](#ekler-1)
E-postaya ek eklemek için ```Mailable``` sınıfının ```attach``` fonksiyonu kullanılır. ```attach``` fonksiyonu 2 parametre alır ```$file, array $options = []``` 1. parametre dosya yolu (zorunlu), 2. parametreyi bir sonraki bölümde ele alacağım. 
```php

    /**
     *  Mesaj derleme
     *  @return $this
     */
    public function build()
    {
        return $this->view('mail.yeni_gonderi')
                    ->attach( public_path("ekler") ."/ornek.jpg");
    }
```
>Ben kendim özel olarak dizin belirttim. 
Bir dosya gönderirken dosya adı ve MIME tipi belirtebilirsiniz. Bu 2. parametredir. 
```php 
    /**
     *  Mesaj derleme
     *  @return $this
     */
    public function build()
    {
        return $this->view('mail.yeni_gonderi')
                    ->attach( public_path("ekler") ."/ornek.jpg", [
                        "as" => "deneme.jpg",
                        "mime" => "image/jpg"
                    ]);
    }
}
```
### [Satır İçi Ekler](#ekler-2)
E-postalarınıza satır içi resimler yerleştirmek genellikle zahmetlidir; ancak Laravel, e-postalarınıza resim eklemek ve uygun CID'yi almak için uygun bir yol sağlar. Satır içi bir görüntüyü ekleme için, e-posta şablonunuzdaki ```$message``` değişkenindeki embed yöntemini kullanın. Laravel, ```$message``` değişkenini otomatik olarak tüm e-posta şablonlarınız için kullanılabilir hale getirir, böylece manuel olarak geçirme konusunda endişelenmenize gerek kalmaz:
```php
    <body>
        Fotoğraf burda
        <img src="{{$message->embed($resimDizini)}}">
    </body>
```
<img src="../fotograflar/warning.png" style="margin:20px;" width="100px" height="100px"/> ```$message``` değişkeni otomatik olarak tanımlı kendiniz tanımlamanıza gerek yoktur.

### [Mail Gönderme](#mail-gönderme-1)
Bir mesaj göndermek için ```Mail``` sınıfının ```to``` fonksiyonunu kullanın, ```send``` fonksiyonu bir sınıf kabul eder. 
```php
<?php

namespace App\Http\Controllers;

use App\Mail\YeniGonderi;
use Gonderi;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class GonderiController extends Controller
{
    public function index(Request $request,$gonderi_id)
    {
        $gonderi = Gonderi::findOrFail($gonderi_id);

        // işlemler

        Mail::to($request->user()->mail)->send(new YeniGonderi($gonderi));
    }
}
```
#### [Kuyruk (queue) Postası](#kuyruk-postsası-1)
E-posta gönderme işlemleri çok uzayabildiğinden, dolayı çoğu geliştirici e-postaları arkaplanda sıraya almayı tercih eder. Laravel'de [kuyruk(queue)](https://laravel.com/docs/7.x/queues) API'sini kullanarak bunu kolaylaştırır. E-posta alıcılarını ve mesajı belirledikten sonra Mail cephesinde kuyruk cephesi belirlenir.
```php
Mail::to($request->user()->mail)
    ->queue(new OrderShipped($gonderi));
```

# Devamı için yukarda belirttiğim kaynağa göz atın