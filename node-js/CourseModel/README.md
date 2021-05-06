Kurs Modeli
======

Bu çalışmamızda SmartEdu projemize ait ilk modeli oluşturacağız. Oluşturduğumuz modeller yardımıyla veritabanımızda "document" larımızı oluşturacağız. Modeller de ilgili
`Schema` yapısını kendisine şablon olarak alacak. Model dosyasını oluşturmak için ODM aracımınz olan mongoose paketini indirelim.

```
npm i mongoose
```

Veritabanı bağlantısını kuralım:
```javascript
mongoose.connect('mongodb://localhost/smartedu-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=> {
  console.log('DB Connected Successfully')
});
```

Şimdi kurs model dosyamızı oluşturabiliriz.
```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
```

Bu oluşturduğumuz modeli baz alarak, yeni kurs oluşturma fonksiyonunun olduğu `course.controller.js` dosyasını oluşturalım. 

```javascript
const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body);

  try {
    res.status(201).json({
      status: 'success',
      course,
    });
  } catch {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

```

İlgili kurs oluşturma sayfamız hazır olmadığı için burada çıktı olarak şimdilik bir `JSON` cevabı alacağız. Sırada ise bu controller fonksiyonunu çalıştıracak
yönlendirmeyi yapmak için oluşturacağımız `courseRoute.js` var.

```javascript
const express = require('express')
const courseController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courseController.createCourse); // http://localhost:3000/courses

module.exports = router;
```

`app.js` dosyasında bu route ile ilgili yönlendirme ise:
```javascript
app.use('/courses', courseRoute);
```
#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/9d1eeb9e0d89e6391b2f7a5d078578c52a8b5be4)

## Daha Fazlası İçin
- [Mongoose](https://mongoosejs.com/)
