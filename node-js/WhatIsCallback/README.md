Callback Nedir?
======

Node.js'in asenkron yapısı üzerine konuştuğumuzda belirttiğimiz 2 temel konu vardı. Node.js uzun süren işlemlerin tamamlanmasını beklemeden diğer işlere devam etmek ister.
Bunun haricinde ise uzun süren işlemler tamamlandığında, bu uzun süren işlemlere bağımlı olan diğer işlemlere devam etmek ister. Buradaki sorumuz ise şu: Bu devam işlemler, 
uzun süren işlemin tamamlandığını nasıl bilecek? İşte burada **callback** devreye girer.

## Callback Fonksiyon
Callback fonksiyonu başka bir fonksiyon içerisinde argüman olarak kullanılabilen fonksiyon anlamına gelmektedir. Tabii bu şekilde anlamlandırma çok zor, hemen bir örnek yapalım.

```javascript
function writeName(name, callback) { // writeName fonksiyonu argüman olrak bir callback fonksiyonu alıyor
  callback(name); 
}

function writer(word) { // writer fonksiyonu 
  console.log(word);
}

writeName("Ahmet", writer); // writeName fonksiyonu çalıştırılırken writer fonksiyonu callback işlevi görüyor
```

Örneğimizde writer "yazıcı" fonksiyonumuz sadece bir iş yapar, aldığı parametreyi yazdırmak. writeName fonksiyonu içinde yapmak istediğimiz iş ise ismimizi yazdırmak, 
writeName fonksiyonu oluşturmak için bize bir isim ve yazıcı gerek, eee madem hazırda yazıcı fonksiyonumuz var onu kullanabiliriz! İşte bu örneğimizde
`writeName("Ahmet", writer)` çalıştırırken parametre olarak isim ve **callback** işlevi gören writer fonksiyonunu alıyoruz.

> Burada şunu da belirtelim. writer fonksiyonu **callback** -çağrılan foksiyon- işlevi görürken writeName fonksiyonu başka bir fonksiyonu argüman olarak aldığı için
> **higher order function** -yüksek seviyeli fonksiyon- olarak isimlendirilir. 

Şimdi daha geniş bir örnek üzerine konuşalım. Senaryomuz şu: Elimizde kitaplarımız var ve bu kitap bilgilerimizi listelemek istiyoruz. İşimiz kolay değil mi? Hemen
kodumuzu yazalım.

```javascript
const books = [
  { name: "Kitap 1", author: "Yazar 1" },
  { name: "Kitap 2", author: "Yazar 2" },
  { name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

listBooks();

//Çıktımız
//Kitap 1
//Kitap 2
//Kitap 3
```

Tamadır, işimizi başarılı bir şekilde tamamladık. Ancak ileride kitap listemize yeni kitaplar eklemeye karar verdik ve uygulamamıza aşağıdaki konu ekledik.

```javascript
// Yukarıdaki kodun devamı....
const addBook = (newBook) => {
    books.push(newBook)
}

addBook({ name: "Kitap 4", author: "Yazar 4" })

//Çıktımız
//Kitap 1
//Kitap 2
//Kitap 3
```
Ancak programımızı çalıştırdığımızda çıktımızın değişmediğini görürüz. Acaba addBook fonkaiyonumuzda mı bir hata var, hayır! Şimdi aynı kodu `listBooks();`
satırı sona gelecek şekilde tekrar çalıştıralım.

```
//Çıktımız
//Kitap 1
//Kitap 2
//Kitap 3
//Kitap 4

```
görmüş olduğunuz gibi istediğimiz sonucu aldık. Yalnız burada şu sorunumuz var biz her zaman `listBooks();` komutunun daima kodun sonunda olmasında emin olamayız. 
Burada başka bir yöntem bulmamız gerekir. Evet callback! Biz her yeni kitap eklediğimizde listemizi güncellersek istediğimiz sonucu elde edebiliriz. Bunun için
`listBooks` fonksiyonunu `addBook` fonksiyonu içerinde callback şeklinde kullanacağız.

```javascript
const books = [
  { name: "Kitap 1", author: "Yazar 1" },
  { name: "Kitap 2", author: "Yazar 2" },
  { name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.name);
  });
};

const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};

addBook({ name: "Kitap 4", author: "Yazar 4" }, listBooks);

//Çıktımız
//Kitap 1
//Kitap 2
//Kitap 3
//Kitap 4
```
Görmüş olduğunuz gibi her yeni kitap eklediğimizde otomatik olarak kitap listemizi güncellemiş olduk.

## Daha Fazlası İçin
- [Arin Yazılım Senkron - Asenkron JS, Call Stack, Thread, Callback](https://www.youtube.com/watch?v=_kdRtcy43ik)
