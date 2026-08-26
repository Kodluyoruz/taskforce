Fotoğraf Bilgilerini Güncellemek
======

Bu bölümde yüklediğimiz fotoğraflara ait bilgileri nasıl güncelleyeceğimiz üzerine konuşacağız. Senaryomuz şu şekilde **Update Details**
butonuna tıklandığında bir **GET** reguest sonucunda edit sayfası açılacak bu sayfada bulunan formda formlara ait olan önceki bilgiler bulunacak,
bilgilerde bir değişiklik yaptığımızda sonrasında **POST** request yardımıyla güncellenmiş bilgilerle tekil fotoğraf sayfasına yöneleceğiz.


Update butonuna tıkladığımız zaman açılacak edit.ejs template'i add.ejs den faydalanarak oluşturacağız. Güncellenek Fotoğraf bilgisine ait olan
_id yi de photo.ejs deki Update Details linkine `href="/photos/edit/<%= post._id %>"` de yakalıyoruz. İlgili yönlendirme de aşağıdaki gibi olacaktır.

```javascript
app.get('/photos/edit/:id', async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render('edit', {
    photo,
  });
});
```

Edit template sayfasına ulaştığımızda ise ilgili photo bilgisinin hali hazırda görünmesini istiyoruz. Bunun için form alanlarındaki value değerlerini
görmemiz gerekir. Bunun için aşağıdaki kodları yazacağız edit template içerisindeki ilgili form alanlarına.
```
<%= photo.title %>
<%= photo.description %>
```
Böylelikle "GET" request aşaması tamamlanmış oldu. Şimdi ise yapmamız gereken değişen bu bilgileri "POST" request ile göndemek ancak değişen 
bilgileri göndermek için biz http **PUT** request kullanacağız. Tarayıcılar bu PUT requesti desteklemedikleri için yapacağımız PUT requesti
tarayıcının anlayacağı POST request şeklinde simüle edeceğiz. Bunun için ise `method-override` modülünü kullanacağız.
```
npm i method-override
```
Bu metodu çağıracağız ve middleware olarak kayıt edeceğiz.
```
const methodOverride = require('method-override');
-----
app.use(methodOverride('_method'));
```
edit template içerisindeki formumuzda POST requesti PUT requeste dönüştürmek için aşağıdaki düzenlemeyi yapacağız.

```
form method="POST" action="/photos/<%= photo._id %>?_method=PUT"
```

Şimdi app.js içerisindeki bu PUT request yönlendirmesini yapacağız.

```javascript
app.put('/photos/:id', async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  photo.title = req.body.title
  photo.description = req.body.description
  photo.save()

  res.redirect(`/photos/${req.params.id}`)
});
```
