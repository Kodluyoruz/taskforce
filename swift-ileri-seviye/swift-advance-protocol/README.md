# Protokoller

Protokol, bir varlığın sahip olmasını beklediğimiz özellik ve metodların taslağıdır. Eğer varlık protokol tarafından beklenen özellik ve metodları karşılıyorsa, bu protokol ile <b> uygun(conform) </b> denir. Protokolleri Class, Struct veya Enum yapısı ile kullanabiliriz.

Protokoller ile bir varlıktan asgari beklediğimiz özellik ve metodları belirtebiliriz. Buna ek olarak protokolleri sağlayan varlıkların hepsine istediğimiz özellikleri <b> Extension </b> yapısı ile ekleyebiliriz.

### Protokol Sözdizimi 

Protokolleri tanımlarken Class, Struct veya Enum ile benzer bir yolu izleriz.

```
protocol SomeProtocol {
    // Protokol tanımları buraya gelecek
}
```

Eğer bir varlığın, tanımladığımız protokolü sağlamasını istiyorsak aşağıdaki şekilde bunu belirtmemiz gerekiyor.

```
struct SomeStructure: FirstProtocol, AnotherProtocol {
    // Structure tanımları buraya gelecek
}

class SomeClass: SomeSuperclass, FirstProtocol, AnotherProtocol {
    // class tanımları buraya gelecek
}
```

Yukarıda görüldüğü gibi bir varlık birden çok protokolü sağlayabilir.

### Protokolde Özellik Tanımı

Protokoller ile birtakım özellik ve metod gerekliliklerini belirleyebileceğimizden bahsetmiştik. Şimdi bunları nasıl protokol içinde tanımlayabileceğimizi inceleyelim.

```
protocol SomeProtocol {
    var mustBeSettable: Int { get set }
    var doesNotNeedToBeSettable: String { get }
}
```

Yukarıdaki örnekte iki farklı özellik tanımı yapılmıştır. Değişken tanımına çok benzemekle birlikte sonda süslü parantezler içinde değişkenin <b>Atanabilir(Settable)</b> veya <b>Alınabilir(Gettable)</b> olma durumları belirtilmektedir. Swift ile bir değişkenden sadece değer alınabilir şekilde tanımlama yapabiliriz. Bu değişkenlere değer ataması yapamaz sadece değer alabilirsiniz. Swift içinde bu tür değişkenlere <b>Hesaplanmış Özellik(Calculated Property)</b> denmektedir. 

Protokol bir takım özelliklerin taslağı olduğu için özelliklere değer ataması yapamayız, fakat özelliğin sonuna <b>{ get }</b> yazarak özelliğin sadece alınabilir olduğunu veya <b>{ get set }</b> yazarak hem alınabilir hem atanabilir olduğunu belirtmemiz gerekmektedir. Yukarıdaki örnekte mustBeSettable özelliği alınabilir ve atanabilir olarak tanımlıyken, doesNotNeedToBeSettable özelliği sadece alınabilir bir özellik olarak tanımlanmıştır.

Aşağıda, SomeProtocol protokolünü sağlayan Struct yapısını görebilirsiniz.

```
struct SomeStruct: SomeProtocol {
    var mustBeSettable: Int = 0
    
    var doesNotNeedToBeSettable: String {
        return "You can only get value from this property."
    }
}

let someStruct = SomeStruct()

print(someStruct.doesNotNeedToBeSettable)
// Çıktı: You can only get value from this property.
```

### Protokolde Metod Tanımı

Protokol içinde, protokolü sağlayacak varlıkların sahip olması gereken metod tanımlarını da yapabiliriz. Bu metodların gövdesi yoktur ve sadece metodun adı, parametreleri ve geri dönüş tipini içerebilir. Aşağıda protokol içinde yapılmış bir metod tanımını görebilirsiniz.

```
protocol MathProtocol {
    func sum(firstNumber: Int, secondNumber: Int) -> Int
}
```

Şimdi yukarıdaki protokolü sağlayan bir Class tanımı yapalım.

```
class SomeClass: MathProtocol {
    func sum(firstNumber: Int, secondNumber: Int) -> Int {
        return firstNumber + secondNumber
    }
}
```
