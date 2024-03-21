Express ile Web Sunucusu Yazmak
======

Express.js, Node.js üzerine yazılmış bir web çatısıdır. Detaylarını proje yazımlarında göreceğimiz express paketi için şu an bilmemiz gereken, 
express bize node.js ile yazması biraz karmaşık olan işlemleri daha basit bir şekilde oluşturmamızı sağlar. Express paketini indireceğiz, bunu yapmak
için öncelikle package.json dosyasını oluşturalım.
```
npm init
```

express paketini indirmek için ise
```
npm i express
```
komutunu kullanacağız. Sonrasında express modülünü kullanımımıza çağıracağız ve express() fonksiyonunu bir app değişkenine atayacağız. Javascriptte
fonksiyonlar da "first-class" tır, yani fonksiyonu bir değişkene atayabiliriz.

```javascript
const express = require('express')
const app = express()
```

Yönlendirmeler için ise kod akışını zorlaştıran if koşulu yazımına göre değil `app.method(PATH, HANDLER)` yapısını kullanacağız. Burada
- app, express() fonksiyonunun atandığı değişken.
- metot http request metodları, çoğunlukla (get, post) 
- path, sunucu yolu
- HANDLER ise yönlendirme eşleştiğinde çağırılacak fonksiyon.

Yukarıda belirttiğimiz özellikleri kullanarak kodumuzu aşağıdaki gibi güncelleyebiliriz.

```javascript
const express = require('express')

const app = express()
 
app.get('/', (req, res) => {
  res.status(200).send('INDEX SAYFASI')
})

app.get('/about', (req, res) => {
    res.status(200).send('ABOUT SAYFASI')
})

app.get('/contact', (req, res) => {
    res.status(200).send('CONTACT SAYFASI')
})

app.get('*', (req, res) => {
    res.status(404).send('404 SAYFA BULUNAMADI')
})

const port = 3000;

app.listen(port, ()=> {
    console.log(`Sunucu port ${port} da çalışmaya başladı...`)
})
```

Sunucu oluşturmak için başka popüler paketler de vardır. Bunlardan iki tanesini de incelemeniz için aşağıya yazıyorum.
- [koa](https://www.npmjs.com/package/koa)
- [hapi](https://hapi.dev/)

## Daha Fazlası İçin
- [Express Resmi Sitesi](https://expressjs.com/)

