# Döngüler #

Swift dilinde for ve while olmak üzere iki temel döngü türü bulunmaktadır. While anahtar kelimesi sonrasında yazdığımız koşul doğru olduğu sürece döngü çalışır. Koşul sağlanmadığında döngü sonlanır.

```swift
while 1 < 2 {
    print("Bu döngü sonsuza dek çalışır.")
}
```

Yukarıdaki örnekte görüleceği üzere, koşulu her zaman sağlanacağı için döngü sonsuza dek çalışır. Sonsuz döngüler programın hayat döngüsü dışında çoğunlukla istemediğimiz bir durumdur. Bu nedenle koşulu bir değere bağlamak ve bu değeri döngü bloğu içinde güncellemek gerekir ki koşul bir süre sonra sağlanmasın ve sonlansın.

```swift
var  kisiSayisi = 0
while kisiSayisi < 100 {
    print("Toplam \(kisiSayisi) kişi oyuna katıldı.")
    kisiSayisi += 5 
}
```

For döngüsünde aralık operatörü kullanılarak belirli bir aralık tanımı yapılır ve bu aralıkta  çalışması sağlanır.

```swift
for i in 0...10 {
    print(i)
} 
```

Yukarıdaki döngü 0-10 kapalı aralığında i değerini birer birer arttırarak çalışır. i değeri 0-10 aralığının dışına çıktığında döngü durur. Bu aralıkta 10 değeri de döngüye dahildir. Eğer 10 değerini döngüye dahil etmek istemezsek aşağıdaki gibi aralık operatöründe ufak bir değişiklik yapmamız gerekir.

```swift
for i in 0..<10 {
    print("\(i) değeri 10'dan küçüktür.")
}
``` 

For döngüsü ile dizi elemanlarını kolaylıkla gezebiliriz. Döngüde aralık belirtmek yerine dizi değerimizi döngüye verirsek, döngü dizi içinde yer alan eleman sayısı kadar çalışır ve her döngüde bir sonraki dizi elemanı i değeri yerine döner.

```swift
let hayvanlar = ["kedi", "kuş", "köpek", "aslan", "fil", "zebra"]
for hayvan in hayvanlar {
    print(hayvan)
}
```

Yukarıdaki örnekte dizi içinde yer alan değerler alt alta yazdırılır. Eğer değerlerin soluna index bilgisini de eklemek istersek enumerated dizi metodunu kullanmamız gerekir.

```swift
let programlamaDilleri = ["C", "C++", "Python", "Basic", "Delphi", "Go"]
for (index, programlamaDili) in programlamaDilleri.enumerated() {
    print("\(index) - \(programlamaDili)")
}
```

Yukarıdaki örnekte değerler dizi içinde aldığı index ile bilgisi ile listelenir. enumerated metodu iki farklı değer döndüğü için bu değerleri karşılayacak sayıda parametreyi in anahtar kelimesi öncesinde belirtmem gerekir.
