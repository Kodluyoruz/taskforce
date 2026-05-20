# Veri Türleri

Bir ifadenin değerinin ve türünün ne olduğuna bakmak için var_dump() işlevini kullanabilirsiniz.
Hata ayıklama amacıyla bir değişkenin türünü öğrenmek için gettype() işlevini kullanın.

- String "Şahin Ersever" 'Test' '3' "2"
- Integer 100 255
- Float(Double) 2.5
- Boolean(true, false)
- Array(Dizi) ['a','b'], array(1,2)
- Object(Nesne)
- NULL

```
$a_bool = TRUE;   // boolean türünde
$a_str  = "Şahin ERSEVER";  // string türünde
$a_str2 = 'Patika';  // string türünde
$an_int = 27;     // integer  türünde

echo gettype($a_bool); // boolean basar
echo gettype($a_str);  // string basar
```

