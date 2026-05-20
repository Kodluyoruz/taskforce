# Anonim Fonksiyonlar

Anonim fonksiyonlar, isimsiz fonksiyonlardır.

```
function ($parametre1, $parametre2){

}
```
şeklinde tanımlanır.

Anonim fonksiyonlar normal fonksiyonlara benzer, çünkü çağrıldığında çalıştırılan kod bloğunu içerirler. Ayrıca argümanları kabul edebilir ve değerleri döndürürler. Anonim fonksiyonları değişkene atayarak kullanılır.

```
$topla= function ($num1, $num2){
    return $num1 + $num2;
};

echo $topla(1,2);

// Sonuç 3;

```

### Anonim fonksiyon ile normal fonksiyon tanımı arasında iki önemli fark bulunuyor:

- Anonim fonksiyonlar isimsizdir.
- Anonim fonksiyonlar tanımlanırken noktalı virgün ile biter.

### Anonim fonksiyonlarla örnek olarak şunları yapabilirsiniz.

- Bir izide birçok farklı Anonim fonksiyon saklayabilirsiniz.
- Bir fonksiyona parametre olarak aktarabilirsiniz.

```
$islem['topla'] = function ($num1, $num2) {
    echo $num1 + $num2.'<br>';
};
$islem['cikar'] = function ($num1, $num2) {
    echo $num1 - $num2.'<br>';
};
$islem['bol'] = function ($num1, $num2) {
    echo $num1 / $num2.'<br>';
};
$islem['carp'] = function ($num1, $num2) {
    echo $num1 * $num2.'<br>';
};

$islem['topla'](10,5);
$islem['cikar'](10,5);
$islem['bol'](10,5);
$islem['carp'](10,5);


function hesapla($n1, $n2, $islem){
    $islem['topla']($n1,$n2);
    $islem['cikar']($n1,$n2);
    $islem['bol']($n1,$n2);
    $islem['carp']($n1,$n2);
}

hesapla(10,5, $islem);

$number = [[1,2],[2,3],[3,4],[4,5]];

array_map(function ($e){
    global $islem;
    echo $e[0].'+'.$e[1].' =';
    $islem['topla']($e[0],$e[1]);
    echo '<br>';
}, $number);
```
Ekran Çıktısı:
```
15
5
2
50
15
5
2
50

1+2 =3
2+3 =5
3+4 =7
4+5 =9
```
