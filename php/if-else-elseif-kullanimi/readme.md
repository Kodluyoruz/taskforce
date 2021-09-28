### IF-ELSE-ELSEIF Kullanımı

IF-ELSE koşullu ifadesi, PHP dahil olmak üzere birçok programlama dilindeki en önemli yapı taşlarından biridir.

IF bir kod bölümünün belirli bir koşula bağlı olarak çalışmasını sağlar; ELSE ise koşul sağlanmadığında çalışacak kısımdır.

```
    if($a >= $b){
        // Koşul true ise çalışacak kısım.
    }else{
        // Koşul true değil ise çalışacak kısım.
    }
```
Koşula bağlı çalışacak kod parçasında tek komut çalışacaksa süslü parantez kullanmanız gerekmez.

```
    if($a > $b) echo "a büyüktür b";
    else echo "a büyük değildir b";
```
veya 
```
    if($a > $b) 
        echo "a büyüktür b";
    else 
        echo "a büyük değildir b";
```
elseif deyimi ise koşullu ifademizde birden fazla koşula bağlı olarak farklı kod bölümleri çalıştırmamızı sağlar.

```
    if($a == 1) 
        echo "a eşittir 1e";
    elseif($a == 2) 
        echo "a eşittir 2ye";
    elseif($a == 3) 
        echo "a eşittir 3e";
    else 
        echo "a eşittir değildir 1e 2ye ve 3e";
```

### Ternary Operatör Kullanımı
Php ternary operatörü if-else yapısının kısa kulanımıdır diyebiliriz türkçe olarak çevriside üçlü operatör manasındadır.
```
    (koşul) ? true ise : true değilse    
```

Örnek:
```
    ($a < 5) ? echo "a küçüktür 5" : echo "a küçük değildir 5"  
    
    // İfade uzun yazıldığında ağaşıda ki ifadeye karşılık gelir.
    if($a < 5) 
        echo "a küçüktür 5"
    else 
        echo "a küçük değildir 5"
```

### IF Farklı Sözdizimi
IF Bloklarını alternatif olarak aşağıda ki gibi de kullanabilirsiniz.
```
    if($a == 1): 
            echo "a eşittir 1e";
    endif;
```
