### While Döngüsü
while döngüsü PHP'de yer alan en basit döngü türüdür.
Önceden belirlenmiş koşul bozulana kadar döngü devam eder.
```
while (ifade){
    deyim
}
```
şeklinde veya

```
while (ifade):
    deyimler
    ...
endwhile;
```
While deyiminin anlamı basittir. while deyimindeki ifade true olduğu müddetçe etki alanındaki deyimleri PHP tekrar tekrar çalıştırır.

```
$i = 1;
while ($i <= 10) {
    echo $i++;  /* yazdırılan değer $i
                    değerinin artıştan önceki
                    değeridir (sonda-arttırım) */
}
```

Tek komut içeren döngülerde paranteze gerek kalmaz.

```
$i = 4;
while( ++$i < 10 ) echo $i;

//Ekran çıktısı
56789
```

### do-while

do-while döngüsü, while döngüsüne çok benzer; farkı, doğrulama ifadesinin her yinelemenin başında değil sonunda değerlendiriliyor olmasıdır.

```
$i = 0;
do {
    echo $i;
} while ($i > 0);
```
