Kurs ve Öğrenci İlişkisi II
======

Geçen çalışmamızda öğrenci kullanıcısının kendisini nasıl kurslara kayıt ettirebileceği üzerine konuşmuştuk, şimdi ise sırada öğrenci kullanıcımızın kaydolduğu 
kursu nasıl bırakacağı üzerine konuşacağız. Bunun için ilgili `releaseCourse` fonksiyonu aşağıdadır.
```javascript
exports.releaseCourse = async (req, res) => {
  try {    
    const user = await User.findById(req.session.userID);
    await user.courses.pull({_id:req.body.course_id});
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
`courses` alanı arraydi ve bir array içerisinden array elemenini kaldırmak için `pull` metodunu kullanıyoruz. İlgili yönlendirmeyi de aşağıda görebilirsiniz.
```javascript
router.route('/release').post(courseController.releaseCourse);
```
Aynen `enroll` fonksiyonunda olduğu gibi `release` fonksiyonunda da ilgili kursu **ID** yardımıyla yakalayacağız, form içerisinde.

```
<form method="POST" action="/courses/release">
  <input type="hidden" name="course_id" value="<%= user.courses[i]._id %>">
  <button class="btn btn-lg btn-danger text-white"><span>RELEASE</span></button>
</form>
```
#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/97d4e6129a55e0f85cc8744d05ba3d7fb34fb61e)
