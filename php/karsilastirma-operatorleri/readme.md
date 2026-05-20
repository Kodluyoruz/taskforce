# Karşılaştırma Operatörleri

Bu operatörlerde matematiksel olarak yaptıklarını programlama alanında da yaparlar. Operatörlerimiz;

| #     	            | Örnek  	    | Çıktı 	    |
|-------------	        |-----------	|------------	|
| Eşittir     	        | $a == $b  	| false/true 	|
| Tam Eşittir 	        | $a === $b 	| true/false 	|
| Eşit değildir	        | $a != $b      | true/false 	|
| Farklıdır	            | $a !== $b     | true/false 	|
| Küçüktür	            | $a < $b       | true/false 	|
| Büyüktür	            | $a > $b       | true/false 	|
| Küçük veya eşittir    | $a <= $b      | true/false 	|
| Büyük veya eşittir 	| $a >= $b      | true/false 	|
| Mekik	           	    | $a <=> $b     | 1,0,-1     	|


```
$a = 3;
$b = 4;

echo $a == $b; // Sonuç: false
echo $a === $b; // Sonuç: false
echo $a != $b; // Sonuç: true
echo $a !== $b; // Sonuç: true
echo $a < $b; // Sonuç: true
echo $a > $b; // Sonuç: false
echo $a <= $b; // Sonuç: true
echo $a >= $b; // Sonuç: false
echo $a <=> $b; // Sonuç: -1

```

