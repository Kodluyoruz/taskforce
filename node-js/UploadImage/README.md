Görsel Yüklemek
======
Şimdiye kadar fotoğraların yalnızca ismini va açıklamalarını gönderdik, bu çalışma da ise fotoğrafın kendisini nasıl göndereceğimiz üzerine konuşacağız. Bunun
için `express-fileupload` modülünü kullanacağız. Bu modülü indirelim.
```
npm i express-fileupload
```
Görseli göndermek için formumuzda ilgili input alanının, name="image" ve type="file" olduğuna dikkat ediniz. Ayrıca görsel göndermemiz için
`encType="multipart/form-data"` eklememiz gerekir. Bundan sonra express-fileupload modülün de yardımıyla bundan sonra `req.files.image` nesnesi
yardımıyla gönderilen görsel özelliklerine ulaşabiliriz. **express-fileupload** modülünü kullanmak için aşağıdaki işlemleri yapacağız.
```javascript
const fileUpload = require('express-fileupload'); // modülü kullanıma alıyoruz.
app.use(fileUpload());                            // middleware olarak kaydediyoruz.
```

### Görsel Yükleme Aşamaları
- Biz görselleri uploads isimli bir klasöre yükleyeceğiz, öncelikle bu klasörün olup olmadığını kontrol edeceğiz.
```javascript
  const uploadDir = 'public/uploads';

  if (!fs.existsSync(uploadDir)) { // Bunun için const fs = require('fs'); almamız gerekir.
    fs.mkdirSync(uploadDir);
  }
```
- Sonra bu görselimizin kendisini ve yüklenmek istenen dosya yolunu yakalayalım.
```javascript
  let uploadeImage = req.files.image;
  let uploadPath = __dirname + '/public/uploads/' + uploadeImage.name;
```
- Son olarak da bu bilgileri görsele ait diğer bilgiler ile birlikte veritabanına yazdıralım.

```javascript
  uploadeImage.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadeImage.name,
    });
```

ilgili yönlendirmenin son hali aşağıdadır:
```javascript
app.post('/photos', async (req, res) => {
  await Photo.create(req.body)
  res.redirect('/')
});

  const uploadDir = 'public/uploads';

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadeImage = req.files.image;
  let uploadPath = __dirname + '/public/uploads/' + uploadeImage.name;

  uploadeImage.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: '/uploads/' + uploadeImage.name,
    });
    res.redirect('/');
  });
});
```
