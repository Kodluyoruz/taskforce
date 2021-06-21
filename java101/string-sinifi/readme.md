# String Sınıfı ve Metotları

Java'da String sınıfları char türünden verilerden oluşmuş bir kümedir yani karakterlerden oluşur. Java işlerimizi kolaylaştırmak ve String ifadelerle işlem yapmak için String sınıfını sunar.

## Java String Sınıfı Metotları

| Metot                 | Açıklama                                                     | Veri Dönüş Tipi |
| --------------------- | ------------------------------------------------------------ | --------------- |
| charAt()              | Belirtilen indisteki (konum) karakteri verir                 | char            |
| codePointAt()         | Belirtilen indisteki karakterin Unicode'unu verir            | int             |
| codePointBefore()     | Belirtilen indisteki önceki karakterin Unicode'unu verir     | int             |
| codePointCount()      | Bu dizenin belirtilen metin aralığındaki Unicode'u döndürür  | int             |
| compareTo()           | İki dizeyi sözlükbilimsel olarak karşılaştırır               | int             |
| compareToIgnoreCase() | Büyük / küçük harf farklılıklarını göz ardı ederek iki dizgeyi sözlükbilimsel olarak karşılaştırır | int             |
| concat()              | Başka bir String'in sonuna bir karakter ekler                | String          |
| contains()            | Bir dizenin bir dizi karakter içerip içermediğini kontrol eder | boolean         |
| contentEquals()       | Bir dizenin belirtilen CharSequence veya StringBuffer ile aynı karakter dizisini içerip içermediğini kontrol eder | boolean         |
| copyValueOf()         | Karakter dizisinin karakterlerini temsil eden bir Dizi döndürür | String          |
| endsWith()            | Bir dizenin belirtilen karakter (ler) ile bitip bitmediğini kontrol eder | boolean         |
| equals()              | İki dizgiyi karşılaştırır. Dizeler eşitse doğru, değilse yanlış döndürür | boolean         |
| equalsIgnoreCase()    | Büyük / küçük harfe ilişkin hususları göz ardı ederek iki dizeyi karşılaştırır | boolean         |
| format()              | Belirtilen yerel ayarı, biçim dizesini ve bağımsız değişkenleri kullanarak biçimlendirilmiş bir dize döndürür | String          |
| getBytes()            | Bu dizeyi adlandırılmış karakter kümesini kullanarak bir bayt dizisine kodlar, sonucu yeni bir bayt dizisinde saklar | byte[]          |
| getChars()            | Karakterleri bir dizeden bir karakter dizisine kopyalar      | void            |
| hashCode()            | Bir dizenin karma kodunu verir                               | int             |
| indexOf()             | Bir dizede belirtilen karakterlerin ilk bulunan oluşumunun konumunu verir | int             |
| intern()              | Aramayı belirtilen dizinde başlatarak, belirtilen karakterin ilk oluşumunun bu dizge içindeki dizini döndürür | String          |
| isEmpty()             | Bir dizenin boş olup olmadığını kontrol eder                 | boolean         |
| lastIndexOf()         | Bir dizede belirtilen karakterlerin son bulunan oluşumunun konumunu verir | int             |
| length()              | Belirtilen bir dizenin uzunluğunu verir                      | int             |
| matches()             | Normal bir ifadeye karşı bir eşleşme için bir dize arar ve eşleşmeleri döndürür | boolean         |
| offsetByCodePoints()  | CodePointOffset kod noktaları tarafından verilen dizinden uzak olan bu Dize içindeki dizini döndürür | int             |
| regionMatches()       | İki dizi bölgesinin eşit olup olmadığını test eder           | boolean         |
| replace()             | Belirli bir değer için bir dize arar ve belirtilen değerlerin değiştirildiği yeni bir dize döndürür | String          |
| replaceFirst()        | Verilen normal ifadeyle eşleşen bir alt dizenin ilk oluşumunu verilen değiştirmeyle değiştirir | String          |
| replaceAll()          | Verilen normal ifadeyle eşleşen bu dizenin her bir alt dizesini verilen değiştirmeyle değiştirir | String          |
| split()               | Bir dizeyi bir alt dizeye böler                              | String[]        |
| startsWith()          | Bir dizenin belirtilen karakterlerle başlayıp başlamadığını kontrol eder | boolean         |
| subSequence()         | Bu dizinin bir alt dizisi olan yeni bir karakter dizisi verir | CharSequence    |
| substring()           | Karakterleri bir dizeden, belirtilen bir başlangıç konumundan başlayarak ve belirtilen karakter sayısıyla ayıklar | String          |
| toCharArray()         | Bu dizeyi yeni bir karakter dizisine dönüştürür              | char[]          |
| toLowerCase()         | Bir dizeyi küçük harflere dönüştürür                         | String          |
| toString()            | Bir String nesnesinin değerini verir                         | String          |
| toUpperCase()         | Bir dizeyi büyük harflere dönüştürür                         | String          |
| trim()                | Bir dizenin her iki ucundaki boşluğu kaldırır                | String          |
| valueOf()             | Bir String nesnesinin ilkel değerini verir                   | String          |