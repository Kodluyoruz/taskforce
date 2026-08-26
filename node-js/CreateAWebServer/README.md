Bir Web Sunucusu Oluşturmak
======

Bir web uygulamasının en önemli parçalarından biri web sunucularıdır. Node.js ile bir web sunucusu oluşturmanın çeşitli yolları vardır ve biz burada başlangıç olarak 
Node.js çekirdek modülü olan "http" modülünü kullanacağız. server.js dosyası oluşturup önce bu modülü çağıralım.

```javascript
const http = require('http');
```

http modülü ile bir web sunucusu oluşturmak için createServer metodunu kullanacağız. createServer metodu, callback fonksiyon parametreleri olarak request ve response 
nesnelerini alır. Tanıdık geldi mi? Evet, öncesinde konuştuğumuz request - response döngüsünün elemanları. Doğal olarak biz bir web sunucusu oluşturuyorsak bu 
sunucumuz üzerinde isteklerde bulunmak ve bunlara gerekli cevapları almak isteriz.

```javascript
----
const server = http.createServer((req, res)=> {
  console.log('Bir istek gönderildi.');  // burada isteğimizin gönderildiğini simüle ediyoruz.
});
```

Eeee hala bir hareket yok, neden. Biz kendi bilgisayarızımı sunucuya çevirdik ancak iletişim kapısını yani portu belirtmedik değil mi? 
Portu belirtip ilgili portu dinlemeye başlayalım.

```javascript
const port = 3000;
server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
```
şimdi ise `node server` diyerek uygulamamızı başlatalım. Tarayıcımıza `http://localhost:3000/` yazdığımızda, tarayıcımızın çalışmaya başladığını
ancak bir geri dönüş olmadığını farkederiz. Burada sorun şudur, sunucumuzu çalıştırdık, isteğimizi gönderdik ama bu isteğimize verilen bir cevap yok!
createServer metodunu şu şekilde düzenlersek req - res döngüsünü tamamlamış oluruz.

```javascript
----
const server = http.createServer((req, res)=> {
  console.log('Bir istek gönderildi.');  // burada isteğimizin gönderildiğini simüle ediyoruz.
  res.write('MERHABA');                  // tarayıcıda MERHABA çıktısını göreceğiz.
  res.end();
});
```
Ancak burada şöyle bir sorunumuz var. Biz `http://localhost:3000/` isteği içinde `http://localhost:3000/test`, `http://localhost:3000/1234` gibi 
farklı istekler için de hep aynı cevabı alırız. Bu da doğal çünkü hep aynı cevabı gönderiyoruz :)

Peki bunu nasıl çözeriz? Eğer biz bir şekilde url adresindeki değişimleri yakalayabilirsek, bu değişimlere farklı cevaplar gönderebiliriz. Bunu
request nesnesinin url özelliğini kullanarak yapabiliriz.


`const url = req.url;` url deki değişimleri yakaladık ve url isimli bir değişkene atadık. Şimdi ise yapmamız gerek if koşulları yazarak farklı
urllere yazılacak cevabı belirleyebiliriz. Konumuzun son hali aşağıdaki gibidir.

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>INDEX SAYFASI</h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>ABOUT SAYFASI</h1>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>CONTACT SAYFASI</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 SAYFA BULUNAMADI</h1>");
  }

  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});

```

## Daha Fazlası İçin
- [NODE.js HTTP Modülü](https://nodejs.org/dist/latest-v14.x/docs/api/http.html)
