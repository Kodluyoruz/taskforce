### Tarih Zaman İşlemleri

##### date();
Yerel tarihi/saati biçimlendirir.
```
date_default_timezone_set('Europe/Istanbul');
echo date('Y.m.d H:i:s');
```
##### getdate();
Tarih/zaman bilgisi getirir.

```
<?php
print_r(getdate());

Array
(
    [seconds] => 28
    [minutes] => 38
    [hours] => 17
    [mday] => 31
    [wday] => 2
    [mon] => 8
    [year] => 2021
    [yday] => 242
    [weekday] => Tuesday
[month] => August
[0] => 1630431508
)
```

##### time();
Unix Zaman Başlangıcından (1 Ocak 1970 00:00:00 GMT) itibaren geçen zamanı saniye cinsinden döndürür.


#### strtotime();

```
echo "<br>";
echo strtotime('now'); // time() gibi unix zaman damgasını saniye cinsinden verir.
```
```
echo strtotime('2020-01-01 10:00:00')."<br>"; // Unix Zaman Damgasını Saniye Cinsinden Verir
echo strtotime('2020-01-01 10:00:59')."<br>"; // Unix Zaman Damgasını Saniye Cinsinden Verir
```

```
echo date('Y-m-d')."<br>";
$unix = strtotime('- 3 month', time())."<br>";
echo date('Y-m-d', $unix);
//2021-08-31
//2021-05-31
```

// DateTime Sınıfı

```
<?php

date_default_timezone_set('Europe/Istanbul');

$date = new DateTime();
// $date->setTimezone(new DateTimeZone('Europe/Istanbul'));
echo  $date->format('Y-m-d H:i:s');

echo "<br>";

$date = new DateTime('+ 1 month');
echo  $date->format('Y-m-d H:i:s');
echo "<br>";

$date = new DateTime('+ 1 month');
echo  $date->format('Y-m-d H:i:s')."<br>";
echo  $date->getTimestamp();

echo "<br>";

$date = new DateTime();
$date->setTimestamp(time());
echo $date->format('Y-m-d H:i:s');

$date = new DateTime();


echo  $date->format('Y-F-d H:i:s')."<br>";
echo  $date->modify('+1 day')->format('Y-m-d')."<br>";
echo  $date->modify('+3 day')->format('Y-m-d')."<br>";
echo  $date->modify('+2 day')->format('Y-m-d')."<br>";

echo "<br>---------<br>";


$tarih1= new DateTime('1993-01-10');
$tarih2= new DateTime('1993-08-26');
$diff = $tarih1->diff($tarih2);
echo "<pre>";
print_r($diff);
```