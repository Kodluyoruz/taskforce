# PHP Basics İçerikler

## Php Nedir ve Nasıl Çalışır?

1. Aşağıdakilerden hangisi yanlıştır?
   - PHP bir betik dilidir.
   - PHP betikleri interpreter tarafından doğrudan okunur.
   - Formdan veri alabilir.
   - IIS üzerinde kullanılamaz. (DOĞRU)

2. Aşağıdakilerden hangisi PHP betiklerinin kullanıldığı alanlardandır?
   - Sunucu taraflı programlama.
   - Komut satırı uygulamaları.
   - Masaüstü uygulamaların yazımı.
   - Bu şıkların tümü. (DOĞRU)

## Php Etiketleri, Yazım Kuralları ve Açıklama Satırları

1. Aşağıdaki kullanımlardan hangisi yanlıştır.
   - ``<?= "Merhaba dünya" `` (DOĞRU)
   - ``<?= "Merhaba dünya" ?>``
   - ``<?php echo "Merhaba dünya" ?>``
   - ``<?php echo "Merhaba dünya"; ``

2. Aşağıdaki açıklama satırı kullanımlardan hangisi yanlıştır.
   - ``<?php /*echo "Merhaba dünya" ?>`` (DOĞRU)
   - ``<?php #echo "Merhaba dünya" ?>``
   - ``<?php ////echo "Merhaba dünya" ?>``
   - ``<?php //echo "Merhaba dünya" ?>``

## Değişkenler ve Veri Türleri

1. Aşağıdakilerden hangisinde verilen ifaderlerin veri tiplerini sırasıyla doğru olarak belirtmiştir?

   ```php
    I : "true"
    II: 2.3
    II: -2
    IV: "Seni kendime sakladım"
    ```
   - String - Double/Float - Integer - String (DOĞRU)
   - Boolean - Integer - Integer - String
   - Boolean - Integer - String - String
   - Boolean - Integer - Integer - NULL
   - Boolean - Double/Float - Integer - NULL

2. Aşağıdaki değişkenlerden hangisi yanlış olarak tanımlanmıştır?
   - ``<?php $2şer = '2-4-6-8-10' ?>`` (DOĞRU)
   - ``<?php $php = 'aşk' ?>``
   - ``<?php $SAĞLIK = 'Spor' ?>``
   - ``<?php $_meyve = 'muz' ?>``
   - ``<?php $maaş = 19000.1 ?>``



3. Aşağoda verilen PHP betiğinde hangisi işlem hatalıdr?
   ```php
     <?php
           define('URL', 'patika.dev');
           $url = URL;
           $işlem = 'Adres eşitliği';
           $işlem = 'Yeni adres' 
     ?>  
   ```
   - Bir yanlışlık yapılmamıştır. (DOĞRU)
   - ``define() tanımı hatalıdır.``
   - ``<?php ?>`` PHP etiketleri hatalı tanımlanmıştır.
   - ``$işlem`` değişkeni hatalı tanımlanmıştır.
   - ``$işlem = 'Yeni adres'`` komutu ``;`` ile sonlandırılmamıştır.

## Operatörler

1. Aşağıdakilerden hangisi yanlıştır?
   - ``x`` çarpma işlemi yapmamızı sağlayan operatördür. (DOĞRU)
   - ``+`` toplama işlemi yapmamızı sağlayan operatördür.
   - ``-`` çıkarma işlemi yapmamızı sağlayan operatördür.
   - ``/`` bölme işlemi yapmamızı sağlayan operatördür.
   - ``%`` mod alma işlemi yapmamızı sağlayan operatördür.


2. Aşağıdaki kodun çıktısı hangisidir?
```php
<?php 

    $a = 3;
    $b = 2;

    echo (($a < $b) && ($a != $b)) || $a !== $b;
?>

```
- 1 (True) (DOĞRU)
- 0 (False)
- Null
- Program hata verir.




## Koşullu İfadeler

1. Aşağıdaki kodun çıktısı hangisidir?
```php
<?php
    $a = 6;
    $b = 7;
    
    if ($a % 2 == 2) {
        echo "1. işlem çalıştı.";
    } elseif ($a < (2 + 1)) {
        echo "2. işlem çalıştı.";
    } elseif ($a != $b) {
        echo "3. işlem çalıştı.";
    } elseif ($a++ < $b) {
        echo "4. işlem çalıştı.";
    } else {
        echo "Hiç biri çalışmadı.";
    }
?>
```
- ``3. işlem çalıştı.`` (DOĞRU)
- ``1. işlem çalıştı.``
- ``2. işlem çalıştı.``
- ``4. işlem çalıştı.``
- ``Hiç biri çalışmadı.``

## Diziler

1. ``array("Elma","Armut","Erik");`` ifadesi aşağıdaki tanımlardan hangisine denktir.
   - `` array(Elma, Armut, Erik); ``
   - `` array(["Elma", "Armut", "Erik"]); ``
   - `` [Elma, Armut, Erik]; ``
   - `` ["Elma","Armut","Erik"]; ``
   - `` array([Elma, Armut, Erik]); ``


2. Aşağıdaki kodun çıktısı hangisidir?
```php
<?php
$kisiler = [
    [
        'id' => 1,
        'isim' => 'Şahin'
    ],
    [
        'id' => 2,
        'isim' => 'Fatma'
    ],
    [
        'id' => 3,
        'isim' => 'Burak'
    ],
    [
        'id' => 4,
        'isim' => 'Eslem'
    ],
    [
        'id' => 5,
        'isim' => 'Sabah'
    ]
];

foreach ($kisiler as $value) {
    if ($value['id'] < 6 && $value['id'] > 2) echo $value['isim'] . "<br/>";
}
?>
```
- BurakEslemSabah (DOĞRU)
- FatmaBurakEslem
- ŞahinFatmaBurak
- SabahEslemBurak


## Fonksiyonlar

1. Aşağıdaki ifadelerden hangisi yanlıştır.
   - Anonim fonksiyonlar parametre alamazlar. (DOĞRU)
   - Fonksiyonlar isimli veya anonim olarak tanımlanabilir.
   - Fonksiyon parametrelerine ön tanımlı değerler atanabilir.
   - Anonim fonksiyonlar tanımlanırken noktalı virgün ile biter.

2. Aşağıdaki kodun çıktısı nedir?
````php 
<?php
function f($sayi)
{
    $sayi2 = 2;
    $total = 1;
    for ($i = 1; $i <= $sayi; $sayi--) {
        $total *= $sayi;
    }
    return $total;
}

echo f(3) * f(2);
````
- 12 (DOĞRU)
- 6
- 14
- 8
- 0


## Dizi Fonksiyonları

1. Aşağıdaki ifadelerden hangisi yanlıştır.
   - print_r() Bir değişkenin veya dizinin gösterimini ekrana basar.
   - explode() Bir dizgeyi bir ayraca göre bölüp bir dizi haline getirir
   - count() Bir dizideki eleman sayısını veya bir nesnedeki şeylerin sayısını döndürür.
   - is_array() Verilen değerin dizinin içerisinde olup olmadığını söyler. (DOĞRU)

2. Aşağıdaki ifadelerden hangisi yanlıştır.
   - in_array(); Bir dizide bir değerin varlığını araştırır.
   - array_shift(); Dizini başlangıcından bir eleman çıkarır.
   - array_pop(); Dizinin sonundaki elemanı diziden çıkartır.
   - array_slice(); Bir dizinin elemanlarını yeniden sıralar. (DOĞRU)

3. Aşağıdaki ifadelerden hangisi yanlıştır.
   - array_slice(); Bir dizinin belli bir bölümünü döndürür
   - array_sum(); Bir dizideki değerlerin toplamını hesaplar.
   - array_product(); Bir dizideki değerlerin çarpımını bulur.
   - array_unique(); Diziden tek olan değerleri siler. (DOĞRU)

4. Aşağıdaki ifadelerden hangisi yanlıştır.
   - array_unique(); Diziden yinelenen değerleri siler.
   - array_values(); Bir dizinin tüm değerlerini döndürür.
   - array_push(); Belli sayıda elemanı dizinin sonuna ekler.
   - array_unshift(); Bir dizinin sonuna bir veya daha fazla eleman ekler. (DOĞRU)

5. Aşağıdaki ifadelerden hangisi yanlıştır.
   - array_unshift(); Bir dizinin başlangıcına bir veya daha fazla eleman ekler.
   - array_keys(); Bir dizideki tüm anahtarları veya bir anahtar altkümesini döndürür.
   - array_combine() Anahtarlar için bir dizi, değerler için ise başka bir dizi kullanarak bir ilişkisel dizi oluşturur.
   - array_count_values() Bir dizideki eleman sayısını verir. (DOĞRU)
   

## Form İşlemleri

1. Aşağıdaki ifadelerden hangisi yanlıştır.
   - POST istekleri tarayıcının adres çubuğunda gözükmez.
   - GET değerleri $_REQUEST ile alınabilir.
   - COOKIE ve SESSION değerleri $_REQUEST ile alınabilir. (DOĞRU)
   - GET istekleri tarayıcının adres çubuğunda gözükür.


## Dosya ve Dizin İşlemleri

1. Aşağıdaki ifadelerden hangisi yanlıştır.
   - r : Read işlemi. Dosyanın sadece içeriğinin okunması gerektiğini belirtir.
   - r+ : Dosyanın içeriğinin he okunabilmesi hem de yazılabilmesinin gerektiğini belirtir.
   - w+ : Dosyaya hem yazma işleminin yapılabilmesi hem de dosya içeriğinin okunabilmesinin gerektiğini belirtir. Dosyanın içeriği silinir ve baştan veri yazma işlemi gerçekleştirilir. Dosya belirtilen adreste yok ise yeniden oluşturulur.
   - x : Dosyanın oluşturulması sağlanır ve oluşturulan dosyanın içerisine veri yazmak için açılması gerektiğini belirtir. Aynı isimde bir dosya belirtilen adreste var ise fopen fonksiyonundan ‘false’ değeri döner.
   - c : Dosyanın bellir bir satırının sileneceğini söyler.(DOĞRU)

2. ``file_exists()`` fonksiyonu için yapılan tanımlardan hangisi yanlıştır.
   - Dosyaların var olup olmadığını söyler.
   - Dizinlerin var olup olmadığını söyler.
   - Hazır tanımlı bir fonksiyondur.
   - .php uzantılı dosyaları kontrol etmez. (DOĞRU)

## Tarih ve Zaman İşlemleri

1. Aşağıdaki ifadelerden hangisi yanlıştır.
   - ``getdate();`` Tarih/zaman bilgisi getirir.
   - ``time();`` Unix Zaman Başlangıcından (1 Ocak 1970 00:00:00 GMT) itibaren geçen zamanı saniye cinsinden döndürür.
   - ``new DateTime('+ 1 month'); echo  $date->format('Y-m-d H:i:s');`` şuana 1 ay ekler. 
   - ``date_default_timezone_set('Europe/Istanbul');`` İstanbul'da saatin kaç olduğunu (H:i:s) formatında söyler. (DOĞRU)

## Nesne Yönelimli Programlama

1. Aşağıdaki bir class özelliğine tanımlamalarla ile ilgili ifadelerden hangisi yanlıştır?
   - public sınıf içerisinden erişilebilir.
   - private sınıf içerisinden erişilebilir.
   - private miras alınabilir. (DOĞRO)
   - protected dışarıdan erişilemez.
   - protected miras alınabilir.

2. Aşağıdakilerden hangisinde kurucu method doğru olarak tanımlanmıştır?
   - ``public function __construct(){}`` (DOĞRU)
   - ``public function _construct(){}``
   - ``public function $_construct(){}``
   - ``public function __destruct(){}``
   - ``public function _destruct(){}``
   

3. Aşağıdakilerden hangisi interface sınıflar için geçerli değildir?
   - Sabitler içerebilir.
   - Soyut methodlar içerir.
   - public tanımı yapılabilir.
   - Aynı sınıf sadece bir tane interface kullanabilir. (DOĞRU)


## Mysql

1. Aşağıdaki tanımlardan hangisi yanlıştır?
   - MySQL bir ilişkisel veri tabanı yönetim sistemidir.
   - SQL bir sorgu dilidir.
   - ``SHOW DATABASES;`` komutu veritabanına ait tabloları getirir. (DOĞRU)
   - Mysql'de ``#`` ile açıklama satırı yazılabilir.

2. Aşağıdakilerden hangisi sayısal bir veri tipidir?
   - DECİMAL (DOĞRU)
   - SET
   - ENUM
   - VARCHAR
   - CHAR

3. Aşağıdaki SQL komutu işlemlerin hangisini yapmamıştır?
```sql 
   USE new_db;
   CREATE TABLE users (
       id INT(11)
   );
   ALTER TABLE users ADD COLUMN(
    isim VARCHAR(50),
    soyisim DECIMAL(10,2)
   );
   ALTER TABLE users ADD COLUMN soyisim VARCHAR(50) AFTER isim;
```
   - Bir database oluşturmuştur. (DOĞRU)
   - users tablosuna yeni sütun eklemiştir.
   - bir sütun sonrasına başka bir sütun eklemiştir.
   - bir tablo oluşturmuştur.

## PDO 

1. Aşağıdaki PDO methodlarından hangisi daha güvenlidir?
   - query
   - exec
   - prepare (DOĞRU)

2. Aşağıdaki işlem ne ne yapılmak istenmiştir?
````php 
   $sql = "SELECT a.id,a.title, b.date, b.image FROM a 
        LEFT JOIN b ptc on a.id = b.id_id";

   $query = $db->query($sql);

   if ( $query->rowCount() ){
       print_r($query->fetchAll(PDO::FETCH_ASSOC));
   }
````

- a tablosu ile b tablosu arasında gruplama yapılmıştır. (Doğru)
- a tablosundan id ve title istenmiştir.
- b tablosundan date ve image istenmiştir.
- a tablosunun title değeri yok ise b tablosnun değerleri getirilmez.


## MVC 

1. Kullanıcıların form üzerinden gönderdiği verileri alır ve işler tanımı aşağıdakilerden hangisi için yapılmıştır?
   - Model
   - View
   - Controller (DOĞRU)
   - Composer

## Veri Değişim Formatları


1. Aşağıdaki ifadelerden hangisi yanlıştır?
   - JSON veri depolama ve veri alışverişi için kullanılan bir formattır.
   - JSON .json uzantılı dosyalarda tutulabilir.
   - Sadece 1 anahtar değer çifti saklayabilir.
   - Anahtar ve değer ``:`` ile ayrılır

2. Aşağıdaki fonksiyonlardan hangisi bir JSON verisini ARRAY'e çevirir?
   - json_decode();
   - json_encode();
   - json_convert()
   - json_to_array();
   - arr_json();

## Düzenli İfadeler

1. Aşağıdaki ifadelerden hangisi yanlıştır?
   - ``.``Herhangi bir tek karakter ile eşleştirilebilir.
   - ``$``Eşlendigi ifadenin sonunu belirtir.
   - ``^``Eşlendigi ifadenin başını belirtir.
   - ``*``Herhangi bir tek karakter ile eşleştirilebilir.
   - ``[]``İfadeleri gruplar. (DOĞRU)

2. Aşağıdaki ifadelerden hangisi yanlıştır?
   - ``\d`` Tüm sayılarla eşleşir
   - ``\D`` Tüm sayı olmayan karaterlerle eşleşir.
   - ``\s`` Tüm boşluklarla eşleşir.
   - ``\S`` Tüm boşluk olmayan karekterlerle eşleşir.
   - ``\w`` Sadece boşluk sayılarla eşleşir. (DOĞRU)

## Hata Yönetimi


1. Aşağıdakilerden hangisi hata bastırma operatörüdür?
   - ``#`` 
   - ``&`` 
   - ``@``  (DOĞRU)
   - ``$_E`` 
   - `` \ `` 

2. Aşağıdaki fonksiyonlardan hangisi bize son hatayı döndürür?
   - register_shutdown_function()
   - error_get_last() (DOĞRU)
   - error_reporting()
   - ini_set()
   - call_error()

## Güvenlik

1. Kullanıcıdan POST veya GET ile gelen bir verirnin XSS açığı oluşturmaması için hangi fonksiyonu kullanabiliriz?
   - htmlspecialchars() (DOĞRU)
   - trim()
   - clear_request()
   - safe_request()
   - xss_safe()

## CURL

1. Aşağıdaki işlemlerden hangisi curl işlemini başlatır?
   - curl_start();
   - curl_init(); (DOĞRU)
   - create_curl()
   - curl_execute();

2. CURL işleminde dönen değeri değişkene aktarmak için hangi özelliği kullanmamız gerekir?
   - CURLOPT_URL
   - CURLOPT_RETURNTRANSFER (DOĞRU)
   - CURL_CONST
   - CURL_FIELDS

   
# htaccess

1. Aşağıdaki işlemlerden hangisi .htaccess ile yapılabilir?
   - Dosya ve dizinlere erişimi engelleme.
   - IP kontrolü yaparak izinleri kısıtlama.
   - URL yapısını değiştirme.
   - Açılış sayfasını ayarlarlama.
   - Tümü yapılabilir. (DOĞRU)


## HTML ve PHP

Aşağıdaki bilgilerden hangisi yanlıştır?

- .html uzantılı dosyalarda PHP kodu yazılabilir. (DOĞRU)
- .php uzantılı dosyalarda HTML kodu yazılabilir.
- Php ile ` <?php echo "<strong></storng>"  ?> ` gibi ile html içeren ifadeler yazılabilir.
- Bir php dosyasının tamamı HTML içerebilir.

## Oturum ve Çerez Yönetimi

Aşağıdaki ifadelerden hangisi bir oturum başlatır?

- `session_start()` (DOĞRU)
- `start_session()`
- `session_run()`
- `session()`

Aşağıdaki ifadelerden hangisi bir oturuma bir değer ekler?

- `$_SESSION['foo'] = 'bar' ` (DOĞRU)
- `$_['SESSION] = 'Test'`
- `$SESSION = 'Test'`
- `$SESSION['foo'] = 'bar' `

Aşağıdaki ifadelerden hangisi yanlıştır?

- COOKIE server tarafında tutulur. (DOĞRU)
- COOKIE clientın bilgisayarında tutulur.
- COOKIE değerleri client tarafından silinebilir.
- COOKIE değerleri süre ile sınırlanabilir.

## CURL

Aşağıdaki ifadelerden hangisi bir curl oturumu başlatır?

- `curl_init()` (DOĞRU)
- `init_curl()`
- `curl_start()`
- `curl()`


cURL işlemlerinde hedef yapılan isteğin sonucunu değişkene aktarmak için hangi özellik eklenmelidir?

- `curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);` (DOĞRU)
- `curl_setopt($ch, CURLOPT_RETURN, false);`
- `curl_setopt($ch, RETURNTRANSFER, true);`
- `curl_setopt($ch, RETURNTRANSFER, false);`

## JS ve PHP

Aşağıdaki ifadelerden hangisi yanlıştır?

- .js uzantılı dosyalarda PHP kodları yazılabilir. (DOĞRU)
- .php uzantılı dosyalarda JS kodları yazmak mümkündür.
- HTML içerisinde JS ile tanımlanan değişkenler PHP ile doldurulabilir.
- JS ve JS Frameworkleri için PHP bir backend alternatifi olabilir.