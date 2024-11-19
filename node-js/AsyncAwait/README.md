Async Await Yapısı
======

Async - Await yapısı ES8 ile birlikte gelmiştir ve **Promise** yapısının daha anlaşılır bir söz dizimi ile yazılmasıdır. Bir fonksiyon **async** anahtar kelimesi 
ile birlikte tanımlanırsa, fonksiyonun olumlu sonuçlanması sonucunda bir **Promise** döner. Bir async fonksiyon **await** anahtar kelimesi ile birlikte
kullanılırsa ilgili Promise olumlu bir şekilde dönene kadar async fonksiyonunun çalışması bekletilir.

## Async

```javascript
const func = async () => {
    return 10 // Buradaki ifade  return Promise.resolve(10) ile aynıdır. Buradaki 10 Promise yapısındadır.
  }
  
func().then(console.log) // Sonucu yakalamak için .then() yapısı kullanılmaktadır.
```

## Await

```javascript
const func = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Tamamlandı!"), 2000);
  });

  let result = await promise; // Promise dönene kadar sonuç bekleniyor.

  console.log(result); // "Tamamlandı!"
}

func();
```

Yukarıdaki kodu incelediğinizde result, sonucunu almak için Promise cevabının gelmesi bekleniyor. Buradaki setTimeout sonucun 2 saniye beklemesini sağlıyor.


Başka bir örneğimize bakalım. Verileri almak ve sonrasında verileri temizlemek şeklinde bir senaryomuz olsun. Her iki fonksiyonda Promise dönecek
ve verileri temizlemek için öncesinde bu verilerin alındığından emin olmak gerekiyor. Bunlar için **await** anahtar kelimeleri kullanılıyor.

```javascript
function getData(data) {
  return new Promise((resolve, reject) => { // promise dönüyoruz.
    console.log("Veriler alınmaya çalışılıyor..");

    if (data) {
      resolve("Verilen alındı"); 
    } else {
      reject("Veriler alınamadı");
    }
  });
}

function cleanData(receivedData) { // promise dönüyoruz.
  return new Promise((resolve, reject) => {
    console.log("Veriler düzenleniyor..");

    if (receivedData) {
      resolve("Verilen düzenlendi"); 
    } else {
      reject("Veriler düzenlenemedi");
    }
  });
}

async function processData() {
  try {// Hata yakalamak için try - bloğu kullanılıyor.catch 
    const receivedData = await getData(true); // await verilerin tamamıyla alındığından emin oluyor
    console.log(receivedData);
    const cleanedData = await cleanData(false);
    console.log(cleanedData); // await verilerin temizlendiğinden emin oluyor
  } catch (error) {
    console.log(error);
  }
}

processData();

//ÇIKTI
//Veriler alınmaya çalışılıyor..
//Verilen alındı
//Veriler düzenleniyor..
//Veriler düzenlenemedi
```

Buradan kitap listeleme örneğine tekrar geri dönecek olursak `addBook` fonksiyonunun içerisinden bir promise dönüyoruz aynı zamanda `await addBook` await 
anahtar kelimesi sayesinde öncelikle addBook fonksiyonunun çözümlemesini almadan listBooks fonksiyonu çalıştırılmıyor. `try catch` bloku sayesinde 
olabilecek hataları yakalıyoruz.

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

const addBook = (newBook) => {
  const promise1 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
    //reject('BIR HATA OLUSTU');
  });

  return promise1;
};

async function showBooks() {
  try {
    await addBook({ name: "Kitap 4", author: "Yazar 4" });
    listBooks();
  } catch (error) {
    console.log(error);
  }
}

showBooks();
```

## Daha Fazlası İçin
- [MDN Async Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [Javascript Info Async Await](https://javascript.info/async-await)
