Model ve Dinamik İçerik
======
Geçen çalışmamızda "add photo" sayfamızdan göndericeğimiz verileri nasıl yakalayacağımızı konuştuk. Peki aslında ne yapmak isteriz? Gelen photo bilgilerini
yakalayıp oluşturacağımız model ile veritabanına bir döküman olarak yazdırıp sonrasında bu verileri uygun yerde listelemek isteriz.


İlk yapmamız gereken ihtiyacımız olan modeli oluşturmak. models/Photo.js dosyası oluşturalım. Photo.js:
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;
```
sonrasında `app.js` dosyasına bu modelimizi çağıralım.
```
const Photo = require('./models/Photo');
```
POST metodu ile gelen veriyi model dosyamız ile yakalayıp veritabanına gönderelim.
```javascript
app.post('/photos', async (req, res) => { // async - await yapısı kullanacğız.
  await Photo.create(req.body)            // body bilgisini Photo modeli sayesinde veritabanında dökümana dönüştürüyoruz.
  res.redirect('/')
});
```

Yukarıdaki yöntemi kullanarak veritabanımızda yeni photo bilgileri oluşturabiliriz. Bu verileri projemizde anasayfamızda sıralamak istiyoruz. Bunun için
ise aşağıdaki kodu yazmamız gerekiyor.
```javascript
app.get('/', async (req, res) => {
  const photos = await Photo.find({})
  res.render('index', {
    photos
  });
```

Photo bilgilerini anasayfaya '/' yardımıyla gönderiyoruz. Peki ilgili index template'in bu verileri alması için gerekli düzenlemeleri yapmamız gerekiyor.
Aşağıdaki koları index.ejs dosyasının içerisine yerleştirmemiz gerekiyor.

```
<% for (let i =0; i < photos.length; i++) { %>
<%= photos[i].title %>
<%= photos[i].description %>
<% } %>
```
