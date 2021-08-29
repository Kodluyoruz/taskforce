### Çok Boyutlu Diziler

Dizileri tanımlarken değerleri anahtarlarla ilişkilendiren bir veri türüdür demiştik; bazı durumlarda bir dizi içerisinde bir anahtara karşılık başka bir diziyi barındırabilir, haliyle bu dizi de başka bir diziyi...

Gelin ne demek istediğimizi adım adım örneklendirelim.

```
$hayvan_gruplari = [
    'Sürüngen Hayvanlar',
    'Uçabilen Hayvanlar'
];
print_r($hayvan_gruplari);
//Ekrana Çıktısı
Array
(
    [0] => Sürüngen Hayvanlar
    [1] => Uçabilen Hayvanlar
)
```


```
$surungen_hayvanlar = ['Yılan','Kertenkele'];
$ucabilen_hayvanlar = ['Kartal','Güvercin','Şahin'];

print_r($hayvan_gruplari);
print_r($hayvan_gruplari);

//Ekrana Çıktısı
Array
(
    [0] => Yılan
    [1] => Kertenkele
)
Array
(
    [0] => Kartal
    [1] => Güvercin
    [2] => Şahin
)
```
yukarıdaki şekilde tek boyutlu dizileri tanımlayabiliyorduk. Şimdi $hayvan_gruplari içerisinde her gruba bir kaç hayvan örneği verelim.
```
$hayvan_gruplari = [
    'surungen_hayvanlar' => ['Yılan','Kertenkele'],
    'ucabilen_hayvanlar' => ['Kartal','Güvercin','Şahin']
];
print_r($hayvan_gruplari);
//Ekrana Çıktısı
Array
(
    [surungen_hayvanlar] => Array
        (
            [0] => Yılan
            [1] => Kertenkele
        )

    [ucabilen_hayvanlar] => Array
        (
            [0] => Kartal
            [1] => Güvercin
            [2] => Şahin
        )

)
```
Dizimize bir boyut daha kazandırıyoruz.
```
$hayvan_gruplari = [
    'surungen_hayvanlar' => [
        'Yılan',
        'Kertenkele' => [
            'keler', 'bukalemun', 'geko', 'agama'
        ]
    ],
    'ucabilen_hayvanlar' => ['Kartal','Güvercin','Şahin']
];

print_r($hayvan_gruplari);

//Ekrana Çıktısı
Array
(
    [surungen_hayvanlar] => Array
        (
            [0] => Yılan
            [Kertenkele] => Array
                (
                    [0] => keler
                    [1] => bukalemun
                    [2] => geko
                    [3] => agama
                )

        )

    [ucabilen_hayvanlar] => Array
        (
            [0] => Kartal
            [1] => Güvercin
            [2] => Şahin
        )

)
```

Peki spesifik bir dizi elemanını ekrana yazdırmak istersek nasıl yapıyoruz?

İşte örnek:
```
$hayvan_gruplari = [
    'surungen_hayvanlar' => [
        'Yılan',
        'Kertenkele' => [
            'keler', 'bukalemun', 'geko', 'agama'
        ]
    ],
    'ucabilen_hayvanlar' => ['Kartal','Güvercin','Şahin']
];

echo $hayvan_gruplari['surungen_hayvanlar']['Kertenkele'][1];

// Ekran Çıktısı
bukalemun
```
