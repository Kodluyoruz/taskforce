### String Fonksiyonları

#### strlen($metin)
Verilen metnin karakter sayısını yani uzunluğunu verir.

#### explode($ayirici,$metin)
Verilen metni belirtilen ayırıcı karaktere göre parçalar ve bir dizi olarak gönderir.

#### implode($ayirici,$dizi)
Bu fonksiyon explode() fonksiyonunun aksine bir dizideki değerleri belirtilen ayırıcıyla birleştirerek biraraya getirir.

#### str_split($metin,$sayi)
Verilen metni verilen sayı kadar karakter gruplarına bölerek bir diziye dönüştürür. Eğer sayı belirtilmezse, metni harf harf bölerek bir diziye atar.

#### ltrim($metin), rtrim($metin), trim($metin)
Verilen metnin sırasıyla solundaki(left-ltrim), sağındaki(right-rtrim) ve her iki tarafındaki(trim) gereksiz boşlukları temizler.

#### substr($metin,$baslangic,$uzunluk)
Bir metnin belirtilen başlangıç konumundan itibaren istenilen uzunluktaki bir parçasını gönderir.

#### strtolower($metin), strtoupper($metin)
Verilen metni sırasıyla küçük harfe ve büyükharfe dönüştürür.

#### mb_strtolower() ve mb_strtoupper()
Verilen metni sırasıyla küçük harfe ve büyükharfe dönüştürür. Türkçe karakter sorunu yaratmaz.

#### ucfirst($metin), ucwords($metin)
Bu iki fonksiyon sırasıyla verilen metnin ilk karakterini (ucfirst) ve metindeki her kelimenin ilk karakterini(ucwords) büyük harfe dönüştürür.

#### str_replace($kaynak,$hedef,$metin)
Verilen metindeki kaynak karakterlerin yerine hedef karakterileri koyarak değiştirme yapar. Bu fonksiyon küçük/büyük harf duyarlıdır.

#### nl2br($metin)
String ifadelerde kullanılan ve alt satıra geçmeyi sağlayan ``\n`` yerine kaynak kodda ``<br>`` yazmak için kullanılır.

#### md5($metin), sha1($metin)
Sırasıyla aldığı metne karşılık gelen karmaşık md5 ve sha1 kodlarını verir. 

#### strstr()
Bir dizgede belirtilen karekterden sonrasını döndürür.
```
$email  = 'name@example.com';
$domain = strstr($email, '@');
echo $domain; // @example.com basar
```
