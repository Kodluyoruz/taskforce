### Switch-Case Kullanımı

switch deyimi, aynı ifade içersinde yer alan bir dizi IF deyimine benzer.
Birçok durumda, aynı değişkeni (ya da ifadeyi) birden çok değerle karşılaştırmak ve her karşılaştırmanın sonucunu ayrı bir kod parçası çalıştırmamıza olanak sağlar.

```
    switch ($degisken) {
    case koşul1:
        echo "koşul 1 sağlandı";
        break;
    case koşul2:
        echo "koşul 2 sağlandı";
        break;
    default:
        echo "koşul 1 ve koşul 2 sağlanmadı";
    }
```

Aynı koşulu hem if deyimi ile hem de switch deyimi ile örnekleyebiliriz.

```
    if ($i == 0) {
        echo "i eşittir 0";
    } elseif ($i == 1) {
        echo "i eşittir 1";
    } elseif ($i == 2) {
        echo "i eşittir 2";
    }
    
    switch ($i) {
    case 0:
        echo "i eşittir 0";
        break;
    case 1:
        echo "i eşittir 1";
        break;
    case 2:
        echo "i eşittir 2";
        break;
    }
```
