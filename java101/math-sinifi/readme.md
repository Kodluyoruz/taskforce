# Math Sınıfı ve Metotları

Java bazı durumları bizim için önceden yazdığı sınıflar ile bizlerin işini kolaylaştırmıştır. Bunlardan birtanesi de Math sınıfıdır. Adında da anlaşılacağı gibi Java'da Math sınıfı matematiksel fonksiyonlar sunmaktadır. Java Math sınıfı, sayılar üzerinde matematiksel işlemler gerçekleştirmenize izin veren birçok metoda sahiptir.

Math sınıfının kullanımı şu şekildedir;

```
Math.MethodAdi(Parametreler)
```

## Math Sınıfı Metotları

| Metot               | Açıklaması                                                   | Veri Dönüş Tipi          |
| ------------------- | ------------------------------------------------------------ | ------------------------ |
| abs(x)              | X'in mutlak değerini verir                                   | double\|float\|int\|long |
| acos(x)             | X'in arkkosinüsünü radyan cinsinden verir                    | double                   |
| asin(x)             | X'in arksinüsünü radyan cinsinden verir                      | double                   |
| atan(x)             | X'in arkini radyan cinsinden verir                           | double                   |
| atan2(y,x)          | Dikdörtgen koordinatların (x, y) kutupsal koordinatlara (r, teta) dönüştürülmesinden teta açısını verir. | double                   |
| cbrt(x)             | X'in küp kökünü verir                                        | double                   |
| ceil(x)             | En yakın tam sayıya yuvarlanmış x değerini verir             | double                   |
| copySign(x, y)      | İkinci kayan nokta y'nin işaretiyle birlikte ilk kayan nokta x'i verir | double                   |
| cos(x)              | X'in kosinüsünü verir (x radyan cinsindendir)                | double                   |
| cosh(x)             | Çift değerin hiperbolik kosinüsünü verir                     | double                   |
| exp(x)              | e üzeri x değerini verir                                     | double                   |
| expm1(x)            | e üzeri x 'in tersini verir                                  | double                   |
| floor(x)            | En yakın tam sayıya yuvarlanmış x değerini verir             | double                   |
| getExponent(x)      | X'te kullanılan yansız üssü verir                            | int                      |
| IEEEremainder(x, y) | IEEE 754 standardında belirtildiği gibi x ve y üzerindeki kalan işlemi hesaplar | double                   |
| log(x)              | X'in doğal logaritmasını (e tabanında) verir                 | double                   |
| log10(x)            | X'in 10 tabanındaki logaritmasını verir                      | double                   |
| log1p(x)            | X ve 1 toplamının doğal logaritmasını (e tabanında) verir    | double                   |
| max(x, y)           | En yüksek değere sahip sayıyı verir                          | double\|float\|int\|long |
| min(x, y)           | En düşük değere sahip sayıyı verir                           | double\|float\|int\|long |
| nextAfter(x, y)     | X'in y yönünde bitişiğinde değen nokta sayısını verir        | double\|float            |
| nextUp(x)           | Pozitif sonsuzluk yönünde x'e bitişik kayan nokta değerini verir | double\|float            |
| pow(x, y)           | X'in değerini y'nin üssüne döndürür                          | double                   |
| random()            | 0 ile 1 arasında rastgele bir sayı verir                     | double                   |
| round(x)            | En yakın tam sayıya yuvarlanmış x değerini verir             | int                      |
| rint()              | X'e en yakın ve matematiksel tam sayıya eşit olan çift değeri verir | double                   |
| signum(x)           | X'in işaretini verir                                         | double                   |
| sin(x)              | X'in sinüsünü verir (x radyan cinsindendir)                  | double                   |
| sinh(x)             | Çift değerin hiperbolik sinüsünü verir                       | double                   |
| sqrt(x)             | X'in karekökünü verir                                        | double                   |
| tan(x)              | Bir açının tanjantını verir                                  | double                   |
| tanh(x)             | Çift değerin hiperbolik tanjantını verir                     | double                   |
| toDegrees(x)        | Radyan cinsinden ölçülen bir açıyı yakl. derece cinsinden ölçülen eşdeğer açı | double                   |
| toRadians(x)        | Derece cinsinden ölçülen bir açıyı yakl. radyan cinsinden ölçülen açı | double                   |
| ulp(x)              | X'in en az duyarlıklı (ulp) biriminin boyutunu verir         | double\|float            |