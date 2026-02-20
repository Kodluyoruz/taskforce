MVC Düzenlemesi
======

Projemizi incelediğimizde tüm yönlendirmelerimizi ve bu yönlendirmelere karşılık yapılan işlemlerin tamamını app.js dosyası içerisinde yapıyoruz. Açıkcası 
bizim projemizde şimdiye kadar bir sorun çıkmış değil. Ancak özellikle büyük ölçekli projelerin yönetimi ve hata yakalaması açısında kodu işlevsel 
açıdan farklı dosyalara bölmek işimizi kolaylaştırır. Burada biz MVC yapısını kullanacağız.

## MVC Nedir?
MVC - Model View Controller - uygulama kodunu Model, View ve Controller olmak üzere birbirine bağlı üç öğeye ayrılmasını içeren bir yazılım mimari yapısıdır.
- ### Model
Uygulamanın veri yapısını ve veri tabanı ile ilişkisini tanımlar. Schema "şablon" yapısı sayesinde veri özellikleri belirlenir.
- ### View
Uygulamanın son kullanıcılara görünen bölümünü temsil eder. Son kullanıcıya gösterilecek veri özelleştirilebilir.
- ### Controller
Son kullanıcıdan gelen isteklerin uygun View'e yönlendirilmesi kontrol edilir. İstek, cevap işleyicisi olarak da tanımlanır.

controllers/photoController.js dosyası oluşturup, app.js içerisindeki tüm yönlendirmeleri bu dosyaya taşıyalım. Yapılan tüm işlemlere özel fonksiyon 
isimleri tanımlanarak oluşturulan photoController.js dosyasının son hali aşağıdaki gibidi

```javascript
const Photo = require('../models/Photo');
const fs = require('fs');

exports.getAllPhotos = async (req, res) => {
  const photos = await Photo.find({}).sort('-dateCreated');
  res.render('index', {
    photos,
  });
};

exports.getPhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render('photo', {
    photo,
  });
};

exports.createPhoto = async (req, res) => {
  const uploadDir = 'public/uploads';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadeImage = req.files.image;
  let uploadPath = __dirname + '/../public/uploads/' + uploadeImage.name;

  uploadeImage.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadeImage.name,
    });
    res.redirect('/');
  });
};

exports.updatePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  photo.title = req.body.title;
  photo.description = req.body.description;
  photo.save();

  res.redirect(`/photos/${req.params.id}`);
};

exports.deletePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  let deletedImage = __dirname + '/../public' + photo.image;
  fs.unlinkSync(deletedImage);
  await Photo.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
```

sonrasında bu oluşturulan fonksiyonlar app.js dosyasına çağırılır.
```javascript
const photoController = require('./controllers/photoControllers');
----
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);
```

Aynı işlemleri uygulamamızın sayfaları için de uygulayalım.
```javascript
const Photo = require('../models/Photo');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add');
};

exports.getEditPage = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', {
    photo,
  });
};
```
pageController.js içerisinde fonksiyonları app.js içerisinde çağıralım.

```javascript
const pageController = require('./controllers/pageController');
------
app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);
```

Son olarak pageContro
