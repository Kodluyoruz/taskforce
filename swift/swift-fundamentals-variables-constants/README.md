# Değişken ve Sabitler #

Sabit tanımlamak için let, değişken tanımlamak için var anahtar kelimelerini kullanacağız. Sabitin tipini derleme sırasında bilmemize gerek yoktur, ancak ilk değer atamasını yapmamız gerekiyor. Sabitleri uygulamanın yaşam döngüsünde değişmeyecek değerleri saklamak için kullanıyoruz. Örneğin pi değerini projemizde sabit olarak tanımlayabiliriz. Çünkü pi değeri her koşulda 3.14 olacaktır. Değişkenler ise adından anlaşılacağı üzere değişken değeri hafızada saklamamızı sağlayan yapılardır.

```
var degisken = 15
degisken = 25
let pi = 3.14
```

Bir sabit veya değişken, atamak istediğimiz değerle aynı türde olmalıdır. Bir sabit veya değişken tanımlarken eğer ilk değer atamasını yapıyorsak tip tanımı yapmamız çoğu durumda gerekmez. Swift, derleme sırasında atanan değere göre değişkenin tipine karar verir. Yukarıdaki örnekte pi adındaki sabite ondalıklı bir sayı ataması yaptığımız için Swift bu değerin tipini Float olarak belirler. 

Atadığımız değer, değişken veya sabit tipi için yeterli bilgi sağlamıyorsa (veya bir ilk değer ataması yapmadıysak), isimden sonra iki nokta üst üste koyarak tip belirtebiliriz.

```
var gKuvvet = 9.8
let pi: Double = 3.14
```

Yukarıdaki örnekte gKuvvet sabiti Float tipine sahipken pi sabiti Double tipindedir.

Tip dönüşümü yapmak için diğer dillerden alışılageldik şekilde Tip(Değer) şeklinde açıkça belirtme yapmamız gerekir. Değerler hiçbir zaman arkaplanda tip değiştirmez. Swift oldukça güçlü bir tip denetimine sahiptir.

```
let mesaj = "Benim yaşım "
let yas = 26
let mesajVeYas = mesaj + String(yas)
```

Yukarıda yas adındaki sabitimiz aldığı değer nedeniyle, Swift tarafından Int tipi olarak dikkate alınacaktır. Fakat son satırda String bir değer ile birleştirme işlemini gerçekleştirmek için yas sabiti String tipine dönüştürülmüştür.

Yukarıdaki örnekte String değerin sonuna bir ekleme yapmıştık ama String değerlerin herhangi bir yerine değişken veya sabitleri gömmek için çok daha basit bir yol bulunuyor. String içerisine \(deger) şeklinde de değerlerimizi ekleyebiliriz.

```
let kedi = 3
let kopek = 5
let kediBilgisi = "\(kedi) tane kedim var."
let toplamBilgi = "\(kedi + kopek) kedi ve köpeğim var."
```

Dizi ve sözlük oluşturmak için temelde köşeli parantezleri kullanıyoruz. Dizi içinde tutulacak değer tipini köşeli parantezler arasına yazmamız tanımlama için yeterlidir. Eğer dizi tanımı sırasında değer ataması da yapıyorsanız tip atamanıza gerek yoktur. Sözlük için diziye ek olarak anahtar tanımını da bu köşeli parantez içinde yapmamız gerekiyor. Anahtar ve değerler iki nokta üst üste ile bir birinden ayrılıyor. Diziden değer almak için yine köşeli parantezler arasına, almak istediğimiz değerin index değerini yazmamız yeterlidir. Sözlükte ise index yerine anahtar ile değerleri alırız. 

```
var alisverisListesi: [String] = []
alisverisListesi = ["yoğurt", "makarna", "domates"]
alisverisListesi[1] = "pirinç"

var sabitler: [String: Int] = [:]
var sabitler = ["pi": 3.14,
                "gKuvveti": 9.8]
sabitler["basınç"] = 760
```

Dizi sonuna eleman eklemek için append metodunu kullanacağız.

```
alisverisListesi.append("salatalık")
print(alisverisListesi)
```
