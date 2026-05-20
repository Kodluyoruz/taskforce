# Try Ve Catch Kullanımı

**try...catch** ifadesini basitçe ifade edersek; herhangi bir iş yaparken bir hatayla karşılaşılma durumunun ele alınması anlamına gelmektedir. 

**try** anahtar kelimesi kodları çalışma zamanında test etmek için kullanılırken, **catch** anahtar kelimesi ise çalışma zamanında hata çıkması durumunda bu hataları yakalamak için kullanılır.

Basit bir try catch bloğu şu şekildedir.

```javascript
try {
  //Çalıştırılacak kodlar
}catch(hata) {
  //Hata yakalandığında çalışacak kodlar
}finally {
  //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
}
```

catch bloğunda yazılmış olan **hata** değişkeni oluşacak istisyanı taşıyacak olan değişken adıdır. Buraya herhangi bir isim verilebilir fakat yaygın olarak `exception`ın ilk harfi olan `e, err` gibi ifadelerle isimlendirilir. Bizde örneklerimizde bu yaygın isimlendirmelerden `err` yi kullanacağız.

Basit bir örnekle daha iyi anlamaya çalışalım.

```javascript
try {
  hello();
}catch (err) {
  console.error(err);
  // beklenen çıktı: ReferenceError: hello is not defined
  // hata mesajları tarayıcıya göre değişiklik gösterecektir
}
```

Örnekteki kod bloğunda `hello()` diye bir fonksiyon çalıştırılmak isteniyor ama böyle bir fonksiyon olmadığı için catch bloğu içerisine düşüyor ve cath bloğuna düştükten sonra `console.error()` fonksiyonu ile konsolda hata gösteriliyor.

## Throw İle İstisnalar Oluşturma

Normalde kod çalışırken bir hata oluştuğunda, JavaScript durur ve bir hata mesajı oluşturur. Bu duruma JavaScript bir istisna atar (bir hata atar) olarak adlandırılır.

`JavaScript aslında iki özelliğe sahip bir Error nesnesi oluşturacaktır: isim ve mesaj.`

**throw** ifadeside bize özel hatalarımızı oluşturmanıza olanak tanır. Teknik olarak **throw** ile bir istisna (hata) atılabilir.

```javascript
throw "Çok büyük";    // Çok büyük hatası at, oluştur
throw 500;            // 500 numarası hatasını at, oluştur
```

Sonuç olarak **throw** ile birlikte **try...catch** ifadesini kullanırsak, program akışını kontrol edebilir ve özel hata mesajları oluşturabiliriz.

Basit bir örnekle daha iyi anlamaya çalışalım.

```html
<input type="text" id="dogumTarihi" />
<button onclick="valid()">Gönder</button>
```

Yukarıdaki gibi ‘dogumTarihi’ adında bir input nesnesi oluşturalım ve butona tıkladığımızda eğer ‘dogumTarihi’ adındaki input nesnemize birşey girilmediyse throw ifadesiyle kolay bir şekilde exception oluşturabiliriz.


```javascript
function valid(){
    try {
        if (document.querySelector("#dogumTarihi").value == "") {
            throw 'Doğum tarihini boş geçemezsiniz';
        };
    }catch(err) {
        alert(err);
    }
}
```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

**Ek olarak yine aşağıdan codepen'de hazırlanmış diğer örneklere bakabilirsiniz.**


## Kaynaklar

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

- https://javascript.info/try-catch

- https://www.w3schools.com/js/js_errors.asp

- https://medium.com/javascript-in-plain-english/handling-javascript-errors-with-try-catch-and-finally-bea4c38be17e


