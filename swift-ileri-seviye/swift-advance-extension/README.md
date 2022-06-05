# Extension

Extension, var olan Class, Struct, Enum veya Protocol yapısına yeni özellikler veya metodlar eklemek için kullanıyoruz. Bu sayede kaynağına erişimin kısıtlı olduğu varlıklara kolayca yeni özellikler ve metodlar ekleyebilirsiniz. Extension yapısı Objective-C'de yer alan Categories yapısına benziyor. Categories'den farklı olarak Swift Extension yapısı bir isim almıyor.

Extension ile yapabileceğiniz eklemeler aşağıdaki gibidir.

* Özellik eklemek
* Metod eklemek
* Başlatıcı(Initializer) eklemek
* Tanımlı bir protokolü sağlayacak şekilde eklemeler yapmak

### Extension Sözdizimi

Extension ile var olan bir varlığa ekleme yapmak istiyorsak, extension anahtar kelimesinden sonra ekleme yapmak istediğimiz varlığın adını yazmamız ve devamında açtığımız süslü parantezler içine eklemek istediğimiz tanımları yapmamız yeterli olacaktır.

```
extension SomeType {
    // Yeni özellik veya metodlar buraya gelecek.
}
```

Hali hazırda var olan bir varlığın, bir protokolü sağlamasını istiyorsak, varlığın adından sonra iki nokta koyup devamında sağlamasını istediğimiz protokol(ler) belirtilmelidir. Protokolün beklediği özellik ve metod tanımları extension bloğu içinde yapılabilir.

```
extension SomeType: SomeProtocol, AnotherProtocol {
    // Protokolün beklediği özellik ve metod tanımları buraya eklenebilir.
}
```

### Hesaplanmış Özellikler

Extension bloğu içinde, varlığın kendi bloğunda olduğu gibi özgürce özellik tanımlaması yapamıyoruz. <b> Hesaplanmış Özellikler(Computed Properties) </b> adı verilen, geriye ne döndüreceği önceden bilinen özelliklerdir. Aşağıda Double veri tipi için, uzunluk bilgisi döndüren hesaplanmış özellikler tanımlanmıştır.

```
extension Double {
    var km: Double { return self * 1_000.0 }
    var m: Double { return self }
    var cm: Double { return self / 100.0 }
    var mm: Double { return self / 1_000.0 }
    var ft: Double { return self / 3.28084 }
}
let oneInch = 25.4.mm
print("Bir inç \(oneInch) metredir.")
// Çıktı: "Bir inç 0.0254 metredir."
let threeFeet = 3.ft
print("Üç feet \(threeFeet) metredir.")
// Çıktı: "Üç feet 0.914399970739201 metredir."
``` 
