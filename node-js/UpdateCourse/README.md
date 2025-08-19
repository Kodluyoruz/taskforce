Kurs Güncellemek
======
Bu çalışmamızda Smartedu projesindeki kursları nasıl güncelleyeceğimiz üzerine konuşacağız. Burada da silme işleminde olduğu gibi yine `method-override` metodunu
kullanacağız.

Öncelikle ilgili fonksiyonları yazalım.
```javascript
exports.updateCourse = async (req, res) => {
  try {    

    const course = await Course.findOne({slug:req.params.slug});
    course.name = req.body.name;
    course.description = req.body.description;
    course.category = req.body.category;

    course.save();

    res.status(200).redirect('/users/dashboard');

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
```
Bu güncelleme fonksiyonunun yönlendirmesi de aşağıdadır.
```javascript
router.route('/:slug').put(courseController.updateCourse);
```
Güncelleme işleminde önemli olan nota ise, güncelleme modelini yakalamak için güncelenmek istenen kursun ID bilgisinden faydalanacağız. Butonda kullandığımız
kurs ID ile modal tarafında kullanacağımız kurs ID birbirleriyle eşleşmelidir.

```
<button class="btn btn-primary rounded-0 text-white" data-toggle="modal" data-target="#updateCourse<%= courses[i]._id %>"><span>UPDATE</span></button>
-----
<div class="modal fade" id="updateCourse<%= courses[i]._id %>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
```

Diğer kodları aşağıdaki GitHUB linklerinden inceleyebilirsiniz.

#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/b1d2a650014837b4cbdf31bff5f9d52a57dd312e)
