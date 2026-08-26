# Swift Yazım Standartları

Swift, diğer programlama dillerinde olduğu gibi yazılı olmayan bazı kurallara sahiptir. Bu kurallara uyup uymamak programcının insiyatifine bırakılmıştır. Fakat belirli bir standartın yakalanması için bu kurallara uymakta fayda vardır. 

Swift'de birden çok kelimeden oluşan isimlendirmeler, <b> Camel Case </b> adını verilen bir yöntem ile birbirinden ayrılır. Bu sayede isimlendirmenin kolayca okunması sağlanır.

```
let somePropery: Double = 0.0 // Camel Case tıpkı bir deve hörgücü gibi inişli çıkışlı bir yapıya sahiptir. İlk kelimenin baş harfi küçük, diğer kelimelerin baş harfleri büyük yazılır.

let some_property: Float = 0.0 // Diğer bir yazım şekli ise Snake Case'dir. Snake Case'de kelimeler alt tire işareti ile ayrılır.

let some-property: Bool = true // Bir diğer yazım şekli Kebab Case'dir. Kebab Case kelimeleri tire işareti ile ayırır. Kelimeler kebap gibi şişe geçirilmiş gözüktüğü için bu isimlendirme yapılmıştır.

class SomeClass { } // İlk kelimenin harfinin de büyük yazıldığı yazım şekline Pascal Case denir. Class ve Struct tanımlarında sıklıkla kullanılır.
```

Pek çok dildekine benzer olarak kod blokları girintili yazılır. Xcode varsayılan olarak 4 boşluk girintilemeyi kullanır.

```
class SomeClass {
    func someMethod() {
        let someConstant: String = ""
    }
}
```

Özellikler her zaman private erişim düzeyinde ve sabit olarak tanımlanmasında fayda vardır. Derleyi gerekli noktalarda erişim sorunu yaşar veya özelliğin değerinin değiştiğini algılarsa, sizi erişim düzeyi veya sabit/değişken çevrimi ile ilgili uyarır. Metodlar private olarak tanımlanmalı gerekli olduğunda erişim seviyesi değiştirilmelidir.

```
class SomeClass {
    private let someProperty: Bool = false
}
```

Class tanımlarını final ön eki ile yapmanız durumunda derleyici bu sınıftan başka bir sınıf türemeyeceğini bildiğinden kontrol yapması gerekmez ve derleme süresi kısalır. Eğer bir alt sınıf oluşturulacaksa final ön eki kaldırılmalıdır.

```
final class SomeClass {
    // Bu sınıftan başka bir sınıf türeyemez.
}
```

Özellik ve metod isimleri küçük harfle başlar ve birden çok kelimeden oluşan isimlendirmeler Camel Case ile ayrılır.

```
let someProperty: Int = 0

func someMethod() { }
```

Özellikler varlığın üst kısmında, metodlar ise alt kısmında tanımlanır.

```
class SomeClass {
    // Özellikler sınıfın üst kısmında tanımlanır.
    // .
    // .
    // Metodlar sınıfın alt kısmında tanımlanır.
}
```

Satır sonlarına noktalı virgül koyabilirsiniz fakat koymamanız tavsiye edilir. Bu yazım şekli C türevi dillerden gelen bir kuraldır. C türevi diller noktalı virgül ile satır sonunun geldiğini anlar fakat Swift buna ihtiyaç duymaz.

```
private let pi: Double = 3.14; // Noktalı virgül gereksizdir ve konması tavsiye edilmez.
```

Eğer metodunuzda çok fazla parametre varsa, kodu daha okunabilir yapmak için parametreleri ayıran virgüllerden sonra enter tuşuna basarak alt satıa geçmeniz yeterli olacaktır. Bu şekilde parametreler alt alta dizilirse Swift girintilemeyi otomatik olarak yapacaktır.

```
func someMethod(someIntegerParameter: Int,
                someDoubleParameter: Double,
                someStringParameter: String) {
                
                // Metod içeriği buraya gelecek.
}
```

Süslü parantez ile kod bloğu tanımlarken, bloğun başlangıç noktası olan açık süslü parantez, kod bloğunun sahip olduğu varlıkla aynı satırda yer alırken kapama süslü parantezi alt satırda yer alır.

```
func someMethod() {
    // Süslü parantez konumları bu şekilde olmalı.
}

func someOtherMethod() 
{
    // Süslü parantezlerin bu şekilde yerleşimi tavsiye edilmemektedir.
}
```

Eğer bir kod bloğu dönüş tipine sahipse ve bu kod bloğu içinde değer tek satırda dönecekse return anahtar kelimesinin kullanılmasına gerek yoktur.

```
var someComputedProperty: Bool {
    // Bu kod bloğu tek satırdan oluştuğu için döndürülecek değerin başına return yazmamıza gerek yoktur.
    true
}

func someMethod() -> Int {
    // Aynı şekilde bu kod bloğu da tek satırdan oluştuğu için, döndürülecek değerin başına return yazmamıza gerek yoktur.
    7
}
```

Eğer birden çok boolean koşulu aynı anda kontrol etmek istiyorsanız, bu koşulları virgül ile birbirinden ayırabilirsiniz.

```
var someVariable = 50
if someVariable > 50, someVariable < 60 {
    print("Değer 50 ile 60 aralığındadır.")
}
```

Birtakım dizi elemanı tanımlarken veya metod parametresi tanımı yaparken virgülden sonra boşluk bırakmanız yeterlidir.

```
let someArray = [0, 2, 3, 5, 7, 11, 13, 17]

func someMethod(firstParameter: Int, secondParameter: Int) { 
    // ...
}
```

Tip tanımı yaparken iki nokta sonrasında boşluk bırakmanız yeterlidir.

```
var someProperty: Double?
```

Swift özelliklerin tiplerini derleme zamanında belirlese de, tip belirtimini manuel yaparak derleme süresini azaltabilirsiniz. Aşağıdaki iki özellikde tamsayı tipindedir.

```
var someProperty: Int = 5
var someOtherProperty = 5
```
