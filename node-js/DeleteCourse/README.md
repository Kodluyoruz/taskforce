Kurs Silmek
======
Bu çalışmamızda Smatedu projemizde bir kursu nasıl sileceğiz, onun üzerine konuşacağız. Bunun için PCAT projesinde de yapmış olduğumuz üzere `method-override`
paketini kullanacağız. Öncelikle bu paketi indirelim.
```
npm i method-override
```
sonrasında ilgili ara yazılımı (middleware) ekleyeceğiz.
```javascript
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);
```
Sırada ise bu silme işlemini yapacağımız fonksiyonu yazalım.
```javascript
exports.deleteCourse = async (req, res) => {
  try {    

    const course = await Course.findOneAndRemove({slug:req.params.slug})

    req.flash("error", `${course.name} has been removed successfully`);

    res.status(200).redirect('/users/dashboard');

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
```

`courseRoute.js` dosyasında ilgili yönlendirmeyi yapacağız.
```javascript
router.route('/:slug').delete(courseController.deleteCourse);
```
İlgili template dosyasında bu silme işleminin gerçekleştirecek butonu yerleştiriyoruz. Aynı zamanda burada silme işlemi için onay da isteyeceğiz.
```
<div class="clearfix">
  <ul style="list-style-type: none;">
    <li style="float: left;"><button class="btn btn-primary rounded-0 text-white"><span>UPDATE</span></button></li>
    <li style="float: right;"><a href="/courses/<%= courses[i].slug %>?_method=DELETE" 
      onclick="return confirm('ARE YOU SURE')"
      class="btn btn-danger rounded-0 text-white"><span>DELETE</span></a></li>
  </ul>
</div>
```
#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/cd14bb4e7a83faaddee3e2731ef8444e77b77210)
