## .htaccess

#### Klasör Erişimleri
- Yetkilendirme ve Kimlik Doğrulama
- URL Yönlendirme (Rewriting URL)
- Dosya ve Dizinlere Erişimi Engelleme
- Dizin Listeleme
- Özel Hata Mesajları
- MIME/Dosya Türlerinin Belirlenmesi
- Önbellek Kontrolü

TÜM ERİŞİMİ KISITLAMAK
```apacheconf
deny from all //Tüm erişimi kısıtlar
```
Tek IP ADRESİNE İZİN VERMEK
```apacheconf
deny from all
allow from 178.62.246.245 // IP adresine izin verir.
```
Tek bir dosyaya erişim kontrolü.
```apacheconf
<Files a.php>
Order allow,deny
Deny from all
</Files>
```
##### Sef Link 

```apacheconf
RewriteEngine On

RewriteRule ^b-sayfasi/$ b.php [L,QSA]
```

![img.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/htaccess/figures/img.png)

```apacheconf
RewriteEngine On

RewriteRule ^bparam/([a-zA-Z0-9_-]+)/?(([0-9]+)/?)?$ b.php?username=$1&id=$2 [L,QSA]

```

![img_1.png](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/php/htaccess/figures/img_1.png)


#### Özel Hata Sayfası

```apacheconf
ErrorDocument 404 hata.html
```

#### Varsayılan Açılış Sayfası

````apacheconf
DirectoryIndex hosgeldiniz.html
````
