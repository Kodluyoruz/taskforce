### Tek Boyutlu Diziler(Array)

Diziler PHP'de değerleri anahtarlarla ilişkilendiren bir veri türüdür.


Array'leri iki şekilde tanımlayabiliriz.
```
    $a = array('elma','armut')
```
veya
```
    $a = ['elma','armut']
```
şeklinde tanımlanabilir.

Dizileri *print_r(dizi)* veya *var_dump(dizi)* şeklinde ekrana yazdırabiliriz.

```
    $a = ['elma','armut'];
    
    print_r($a);
    
    //İfadenin çıktısı
    Array ( [0] => elma [1] => armut )
```

Örnekte de görüldüğü üzere dizilerin anahtarları belirtilmediğinde 0'dan başlayarak sırasıyla anahtar değerleri otomatik atanır.

Biz de bu anahtar değerleri kendimiz belirleyebiliriz.

```
    $a = ['m1'=>'elma','m2'=>'armut'];

    print_r($a);
    
    //İfadenin çıktısı
    Array ( [m1] => elma [m2] => armut )
```

Bir dizinin belirli bir değerini kullanmak için o değerin anahtarı ile işlem yaparız.

```
    $kisi = [
        'isim' => 'Şahin',
        'soyisim' => 'ERSEVER',
        'dogumtarihi' => '10.01.1993'
    ];

    print_r($kisi);
    
    //İfadenin çıktısı
    
    Array(
        [isim] => Şahin
        [soyisim] => ERSEVER
        [dogumtarihi] => 10.01.1993
    )
    
    echo "Merhaba benim adım " . $kisi['isim'] . " " . $kisi['soyisim'] . "  Doğum tarihim " . $kisi['dogumtarihi'];
    
    //İfadenin çıktısı
    Merhaba benim adım Şahin ERSEVER  Doğum tarihim 10.01.1993
```

```
    $hayvanlar = array('kedi', 'köpek', 'tavşan');

    echo $hayvanlar[0]; // "kedi" Çıktısını verir.
    echo $hayvanlar[1]; // "köpek" Çıktısını verir.
    echo $hayvanlar[2]; // "tavşan" Çıktısını verir.
```


