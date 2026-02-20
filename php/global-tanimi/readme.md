# Global Tanımı

Fonksiyonların içerisinde tanımladığın değişkenler dışarıya gönderilmez ve aynı şekilde dışarıda tanımladığın bir değişken fonksiyon içinde görülmez.

```
function isim() {
   $isim = 'Şahin';
}
deneme();
echo $isim;
```
Bu kodu çalıştırdığımızda PHP yalnızca isim adında bir değişken olmadığı için hata verir.

```
$isim = 'Şahin';
function isim() {
   global $isim;
   return $isim;
}
echo deneme();
// Ekran çıktısı 
Şahin
```

global komutuyla dışarıda ki bir değişkeni fonksiyon içerisinde tanımlayıp kullanabiliriz.  
    
