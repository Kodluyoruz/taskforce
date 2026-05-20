Request Body Nasıl Çalışır?
======

Artık uygulamamıza dinamik özellikler verme zamanı geldi. İlk işlev olarak ne yapmak isteriz? Uygulamamızın Add Photo sayfasından yükleyeceğimiz fotoğraf
bilgisini bir şekilde ana sayfamıza taşımak isteriz. Bunu yaparken "add photo" sayfamızda kullanacağız metot `POST` ve action='/photos' olacak.

Burada "add photo" sayfadan gelen post metodunu yakalamamız için ilgili yönlendirmeyi yakalayıp, consolda request nesnesinden gelen body bilgisini
yakalayalım.

```javascript
app.post('/photos', (req, res) => {
  console.log(req.body);
  res.redirect('/')
});
```
add photo sayfasından bilgileri gönderdiğimizde consol da `undefined` sonucunu görüyoruz. Bunun nedeni body ile saklanan verinin yakalanamıyor olması.
Bu body bilgisini yakalamak için 2 adet middleware fonksiyonunu kullanmamız gerekir.
```javascript
app.use(express.urlencoded({extended:true}))
app.use(express.json())
```
bunun sonucunda bilgileri tekrar gönderdiğimizde consolda body bilgisini bir nesne halinde yakalarız. Ayrıca `res.redirect('/')` nedeniyle ana sayfaya
yönlendirildi.
`{ title: 'Photo Title 1', description: 'Photo description 1' }`

## Daha Fazlası İçin
- [Express Json](https://expressjs.com/en/4x/api.html#express.json)
- [Express Urlencoded](https://expressjs.com/en/4x/api.html#express.urlencoded)
