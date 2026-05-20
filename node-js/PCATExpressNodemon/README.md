PCAT Express Nodemon Kurulumu
======

Artık projemize başlıyoruz. Öncelikle `npm i express --save` ile express modülünü indirelim. --save flagı kullanmak zorunlu değildir. Express i bu şekilde indirmek
ile aslında söylediğimiz şu: Uygulamamızın çalışması için express modülüne bağımlıdır yani express, Node.js uygulamamız açısında bir `dependency` dir.


Package.json dosyasını incelediğimizde prettier modülünü bir `devDependency` dir, yani biz bu modülü sadece kendi geliştirmemiz için kullanıyoruz, bu modüller
olmasa da uygulamamız çalışır.

### Nodemon

Şimdiye kadar uygulamamızda yaptığımız değişikliklerin aktif hale gelmesi için sunucumuzu durdurup tekrar çalıştırmamız gerekirdi. Bunu engellemek yani sunucuyu 
tekrar çalıştırmadan değişikliklerin algılanması için nodemon modülünü indireceğiz.

```
npm install --save-dev nodemon
```
burada --save-dev flagı yardımıyla nodemon modülünün bir `devDependency` olduğunu belirtiyoruz. İndirme işlemi tamamlandıktan sonra package.json dosyasında
yeni bir script oluşturacağız.
```
"start": "nodemon app.js"
```
sonrasında `npm start` komutuyla uygulamamızı başlatabiliriz.

Kodumuzun son hali aşağıdadır.

```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => {

  const photo = {
    id: 1,
    name: "Photo Name",
    description: "Photo description"
  }
  res.send(photo)
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
```

sonrasında ise `git push` komutu ile kodlarımızı uzak repoya gönderebiliriz.

## Daha Fazlası İçin
- [Nodemon NPM](https://www.npmjs.com/package/nodemon)
- [Express Resmi Sitesi](https://expressjs.com/)
