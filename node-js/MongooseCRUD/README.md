Mongoose Nedir?
======

Biz Node.js http çekirdek modülü sayesinde kendi web sunucumuzu yazabiliriz, ancak bizim açımızdan yönlendirmeleri (routes) daha kolay yapabilmek ve başka 
avantajları sayesinde express modülünü kullandık. Aynı şekilde biz veritabanımızda oluşturmak istediğimiz dökümanları mongoDB ile oluşturabiliyoruz.


Bir nesne veri modelleme (ODM) kütüphanesi olarak mongoose, **Schema** yapısı sayesinde türetilen nesneleri mongoDB içerisindeki dökümanlara dönüştürür.
Burada belirtilen Schema, projemizde kullanacağımız verilere ait bir şablon yapısıdır. Birazdan örneğimizde daha anlaşılır duruma gelicek.

Öncelikle `mongoose` modelini indirelim.

```
npm i mongoose
```
Uygulamamızda kullanmadan önce `test.js` dosyasının içerisinde kullanacağız. mongoose modülünü ve ve mongoose modülüne ait Schema class ını çağıralım.
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
```
Veritabanına bağlanmak için connect metdonu kullanacağız. Veritabanı adı `pcat-test-db`. Sonrasında hata almamak için `useNewUrlParser` ve 
`useUnifiedTopology` parametrelerini ekleyeceğim.
```
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```
Sırada bahsettiğimiz Schema yapısı var. Biz uygulamamızda Photo verisini kullanacağız ve bu verimize ait olan isim ve tanım özelliği olmasını istiyoruz.

```
const PhotoSchema = new Schema({
  title: String,
  description: String,
})
```
Bu şablonu kullanarak şimdi model metodu sayesinde Schema ve 'Photo' stringini kullanarak yeni bir model oluşturalım.

```
const Photo = mongoose.model('Photo', PhotoSchema);
```

Sıra geldi modelimiz sayesinde ilk dökümanımızı oluşturmaya.

```
Photo.create({
  title: 'Photo Title 1',
  description: 'Photo description 1 lorem ipsum',
});
```

`node test` komutunu kullanarak, dökümanın oluştuğunu görebiliriz.

Diğer CRUD komutları aşağıdadır:

```javascript
//read a photo
Photo.find({}, (err, data) => {
  console.log(data);
});

//update photo
const id = '6079f04e5916c524d4bdcb74';
Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo Title 111 updated',
    description: 'Photo description 111 updated',
  },
  {
      new: true
  },
  (err, data) => {
    console.log(data);
  }
);

//delete a photo
const id = '6079f1ce8c0f602c98964346';

Photo.findByIdAndDelete(id, (err, data) => {
  console.log('Photo is removed..');
});
```

## Daha Fazlası İçin
- [Mongoose Dökümantasyon](https://mongoosejs.com/docs/guide.html)
- [Why Do We Need Mongoose](https://stackoverflow.com/questions/18531696/why-do-we-need-what-advantages-to-use-mongoose)
