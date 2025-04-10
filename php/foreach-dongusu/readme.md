### Foreach Döngüsü

foreach yapısı diziler üzerinde yineleme yapmayı kolaylaştırmaktadır.

foreach yalnızca diziler ve nesneler için kullanılabilir; farklı veri türünde veya ilklendirilmemiş bir değişken ile
kullanmak istediğinizde hata verir.

İki sözdizimi mevcuttur:

```
foreach ($dizi as $değer){
    //Döngü
}

foreach ($dizi as $anahtar => $değer){
    //Döngü
}
```

```
$isimler = [
    'isim1' =>'Şahin',
    'isim2' =>'Fatma',
    'isim3' =>'Mustafa',
    'isim4' =>'Sabah'
];
```

isimler adında bir değişkenimiz olsun ve foreach döngüsü ile bu dizinin elemanlarını tek tek ele alalım.

```
foreach ($isimler as $deger){
    echo $deger.'<br>';
}

//Ekran çıktısı
Şahin
Fatma
Mustafa
Sabah

```
yukarıda isimler dizisinde ki tüm elemanları tek tek dönerek ekrana değerleri yazdırdık.

```
foreach ($isimler as $anahtar => $deger){
    echo $anahtar.' - '. $deger.'<br>';
}

//Ekran çıktısı
isim1 - Şahin
isim2 - Fatma
isim3 - Mustafa
isim4 - Sabah
```
bu örnekte ise elemanları tek tek dönerken aynı zamanda anahtar değerlerini de alarak ekrana yazdırdık.
Anahtar değerleri aldığımızda bunları anahtarları döngü içinde kullanarakta isimler dizisinin değerlerine ulaşabilirdik.

```
foreach ($isimler as $anahtar => $deger){
    echo $anahtar.' - '. $isimler[$anahtar].'<br>';
}

//Ekran çıktısı
isim1 - Şahin
isim2 - Fatma
isim3 - Mustafa
isim4 - Sabah
```
