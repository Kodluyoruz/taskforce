### Dizi Fonksiyonları 4

#### current();
Bir dizideki geçerli öğeyi döndür
#### end();
Bir dizinin dahili işaretçisini son elemanına ayarlar
#### next();
Bir dizinin dahili işaretçisini ilerletir
#### prev();
Dahili dizi işaretçisini geri alır.

```
<?php
$araç = array('tabanvay', 'bisiklet', 'otomobil', 'uçak');
$kip = current($araç); // $kip = 'tabanvay';
$kip = next($araç);    // $kip = 'bisiklet';
$kip = current($araç); // $kip = 'bisiklet';
$kip = next($araç);    // $kip = 'otomobil';
$kip = prev($araç);    // $kip = 'bisiklet';
$kip = end($araç);     // $kip = 'uçak';
$kip = current($araç); // $kip = 'uçak';

$arr = array();
var_dump(current($arr)); // bool(false)

$arr = array(array());
var_dump(current($arr)); // array(0) { }
?>
```

#### reset();
Bir dizinin dahili göstericisini ilk elemana konumlar.
#### extract();
Bir dizideki değişkenleri simge tablosuna dahil eder

```
<?php

/* Dizinin wddx_deserialize tarafından döndürülen
   bir dizi olduğunu varsayalım */

$boyut = "büyük";
$dizi = array("renk"  => "mavi",
              "boyut" => "orta",
              "şekil" => "küre");
extract($dizi, EXTR_PREFIX_SAME, "wddx");

echo "$renk, $boyut, $şekil, $wddx_boyut\n";

?>

// Çıktısı: mavi, büyük, küre, orta

```

#### asort();
Bir dizinin değerlerini anahtarlarıyla ilişkilerini bozmadan küçükten büyüğe doğru sıralar.
```
<?php
$fruits = array("d" => "lemon", "a" => "orange", "b" => "banana", "c" => "apple");
asort($fruits);
foreach ($fruits as $key => $val) {
    echo "$key = $val\n";
}
?>
```
#### arsort();
Bir dizinin değerlerini anahtarlarıyla ilişkilerini bozmadan büyükten küçüğe doğru sıralar.
```
<?php
$fruits = array("d" => "lemon", "a" => "orange", "b" => "banana", "c" => "apple");
arsort($fruits);
foreach ($fruits as $key => $val) {
    echo "$key = $val\n";
}
?>
```
####ksort();
Bir diziyi anahtarlarına göre küçükten büyüğe doğru sıralar.
```
<?php
$fruits = array("d"=>"lemon", "a"=>"orange", "b"=>"banana", "c"=>"apple");
ksort($fruits);
foreach ($fruits as $key => $val) {
    echo "$key = $val\n";
}
?>
```
#### krsort();
Bir diziyi anahtarlarına göre büyükten küçüğe doğru sıralar.
```
<?php
$fruits = array("d"=>"lemon", "a"=>"orange", "b"=>"banana", "c"=>"apple");
krsort($fruits);
foreach ($fruits as $key => $val) {
    echo "$key = $val\n";
}
?>
```
