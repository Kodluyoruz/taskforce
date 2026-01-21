Neden Promise?
======

Bir fonksiyon tamamlandığında, ilgili geri dönüş için callback fonksiyon bize güzel bir çözüm sunuyor. Ancak bizim amaçlarımızdan birisi neydi? Birbirleriyle ilişkili 
işlemlerin birbirine bağlı olarak çalışması, şimdi callback fonksiyon ile biz sonuçları beklemek durumunda kalıyoruz. Şöyle bir yapımız olsaydı biz işlemsonuçlarını 
beklerken bir **söz - promise -** verelim. İstediğimiz sonucu aldığımızda devam edelim, bir hata ile karşılaştığımızda başka bir işlem yapalım. İşte burada 
**Promise** yapısı devreye girer.

## Promise Nedir?
Promise bir işlemin sonucunu temsil eden bir Javascript nesnesidir. Promise nesnesi **Resolve** ve **Reject** adında iki tane parametre alır ve olumlu durumlarda Resolve ile
belirtilen işlemlerin, olumsuz durumlarda da Reject ile belirtilen işlemlerin yapılacağına dair güvence verir. Promise yapısı olumlu sonuçları .then(), olumsuz sonuçları da
.catch() ile karşılar. 

```javascript
const promise1 = new Promise((resolve, reject) => {
  //reject('BAĞLANTI HATASI');
  resolve("VERILER ALINDI");
});

promise1
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });

//ÇIKTI
//VERILER ALINDI
```

Olumsuz sonuç durumunda reject - catch ile yakalanır ancak örneklerde de göründüğü gibi Promise resolve ya da reject duruma göre çalışır ve cabını daha sonra değiştiremez.

```javascript
....
  reject('BAĞLANTI HATASI');
.....

//ÇIKTI
//BAĞLANTI HATASI
```

## Kitap Listeleme Örneği

Şimdi geçen bölümde konuştuğumuz kitap listeleme örneğinde dönelim. Ne yapmıştık, `listBooks` fonksiyonunu `addBook` fonksiyonuna bir callbak ile yerleştirmiştik.
Burada callback fonsiyonu yerine bir **söz-promise** vereceğiz.

```
const addBook = (newBook) => {

    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook); // --> Resolve olumlu sonuç 
        reject('BIR HATA OLUSTU'); // --> Reject olumsuz sonuç
    })

    return promise1;
};
```

Olumlu sonuça göre kodun tamamını aşağıda bulabilirsiniz.

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
    //reject('BIR HATA OLUSTU');
  });

  return promise1;
};

addBook({ name: "Kitap 4", author: "Yazar 4" })
  .then(() => {
    console.log("YENI LISTE");
    listBooks();
  })
  .catch((error) => {
    console.log(error);
  });

listBooks();
```

## Daha Fazlası İçin
- [Arin Yazılım PROMISE...](https://www.youtube.com/watch?v=42OlFQyL1jg)
- [Geeks For Geeks Promises](https://www.geeksforgeeks.org/javascript-promises/#:~:text=Promises%20are%20used%20to%20handle,hell%20leading%20to%20unmanageable%20code.&text=Multiple%20callback%20functions%20would%20create%20callback%20hell%20that%20leads%20to%20unmanageable%20code.)
- [Why do we need Promises](https://javascript.plainenglish.io/javascript-why-do-we-use-promises-8f45cdd45c71)



