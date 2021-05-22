Kurs ve Öğrenci İlişkisi
======

Smartedu projemizde bulunan kurslar ile öğrenciler arasında da ilişki bulunmasını isteriz. Öğrenci kullanıcıların kendilerini bir kursa kaydedebilmesini ve bu kayıt
işlemini istediğinde sonlandırmasını da isteyebiliriz.

Bu işlemler için öncelikli olarak yapmamız gereken **USER** modeli içerisinde `courses` şeklinde bir alan oluşturacağız ve bu alanın referansı yani ilişkili olduğu mode ile
**Course** modeli.
```
  courses:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Course'
  }]
```

Yukarıda da gördüğünüz üzere `courses` alanı bir array ve öğrenci her yeni kursa kaydolduğunda bu arrayimize yeni bir kurs bilgisi eklenecek. Bu işlemi yapacak `enroll`
fonksiyonunu aşağıda görebilirsiniz.
```javascript
exports.enrollCourse = async (req, res) => {
  try {

    const user = await User.findById(req.session.userID);
    await user.courses.push({_id:req.body.course_id});
    await user.save();

    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
```
Sonrasında `courseRoute.js` dosyasında ilgili yönlendirmeyi yapalım:
```javascript
router.route('/enroll').post(courseController.enrollCourse);
```

Enroll işlemini yaptığımızda bizim ihtiyacımız olan kurs bilgisini ilgili butona tıkladığımızda göndereceğiz. Bu butonu bir form alanında tanımlayacağız.
`course.ejs` dosyası içerisine aşağıdaki formu ekleyeceğiz.
```
<form method="POST" action="/courses/enroll">
  <input type="hidden" name="course_id" value="<%= course._id %>">
  <button class="btn btn-lg btn-warning text-white"><span>ENROLL</span></button>
</form>
```

#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/880375f290bc5f8bdccc614c538fcb4800a93f44)
