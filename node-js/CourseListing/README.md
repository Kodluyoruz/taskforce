Kursları Listelemek
======

SmartEdu projesinde nasıl kurs oluşturabileceğimizi konuştuk, şimdi ise oluşturduğumuz kursları sıralayalım. Öncelikli olarak yapmamız gereken ilgili `controller`
fonksiyonunu oluşturmak. Bu şekilde ilgili verileri sıralamak için genelde kullanılan isim `getAll<model_adi>` şeklindedir. Bizim uygulamamızda tüm kursları
sıralamak için fonksiyon ismi olarak  `getAllCourses` ismini kullanacağız.
```javascript
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).render('courses', {
      courses,
      page_name: 'courses',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
```

Sonrasında ise bu ilgili controller fonksiyonunun bulunması için gerekli yönlendirmeyi yapalım.
```javascript
router.route('/').get(courseController.getAllCourses);
```

Bu şekilde aslında teorik olarak kursların sıralamasını tamamlamış olduk. Sadece yapmamız gereken kursları listelemek istediğimiz template dosyasını 
belirlemek. İlgili template dosyasının içerisinde `for` döngüsü yardımıyla ilgili verileri template içerisinde render edebiliriz.

```
--- for döngüsü
<% for (let i=0; i< courses.length; i++) { %>
HTML içerik
<% } %>
```

Son olarak değişken verileri yazdırmak istersek
```
<%= courses[i].name %>
<%= courses[i].description %>
```

#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/7f44e70dd947c8a9c3a7d292932a010ac41fd694)
