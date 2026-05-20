# Fonksiyon Tanımlama ve Kullanma

Fonksiyonlar kısaca bir veya daha fazla komutun içinde yer aldığı yapılardır.

PHP'de fonksiyonları, yerleşik ve kullanıcı tanımlı olmak üzere ikiye ayırabiliriz:

**Yerleşik fonksiyonlar:** PHP'de önceden tanımlanmış olarak kullanıma hazır fonksiyonlardır.

**Kullanıcı tanımlı fonksiyonlar:** Geliştirici tarafından oluşturularak kullanılan fonksiyonlardır.

Fonksiyon isimleri *bir harf ya da alt çizgi* ile başlar.

```
function fonksiyon_adı()
{
   komut...;
}
```

Fonksiyonları isimleri yardımı ile çağırıp çalıştabiliriz.

```
    fonksiyon_adı();
```
Fonskiyonlar "return" komutu ile geriye değer döndürür.
```
function selamla()
{
   return "Selam, nasılsın?";
}

$donen_deger = selamla(); 

echo $donen_deger;

// Ekran Çıktısı
Selam, nasılsın?
```
## Fonksiyonlara parametre ekleme
Fonksiyonlar dışarıdan veri içerisine vereceğimiz parametreler ile alabilir.
```
function fonksiyon_adı($parametre)
{
   echo $parametre;
}
```
## Parametrelere varsayılan değer atama
Parametrelere varsayılan değerler atayarak değer girilmediği durumları ele alabiliriz.
```

function topla($sayi1, $sayi2 = 30) {
   return  $sayi1 + $sayi2;
}
echo topla(10, 20);
echo topla(10);

// Ekran Çıktısı
30
40
```




