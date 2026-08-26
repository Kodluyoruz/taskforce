Kurs - Öğretmen İlişkisi
======

Bu çalışmamızda öğretmen rolüne sahip kullanıcıyla oluşturduğu kurs ilişkisini oluşturacağız. Bunun için ilgili kursta `user` alanı oluşturacağız. Bu alanın referans yani
ilişkili olduğu model iser **User** modelimiz.

```
  user: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
```
Bu şekilde kurs ile onu oluşturan kullanıcı arasında bir ilişki kurabildik. Artık yeni bir kurs oluşturulurken sadece kurs bilgilerini değil o kursu oluşturan 
kullanıcıyı da kullanabiliriz. O halde o kursu oluşturan kullanıcıyı nasıl bulacağız? Tabii ki sessionda bulunan **userID** ile.
```javascript
    const course = await Course.create({
      name: req.body.name,
      description: req.body.name,
      category: req.body.category,
      user: req.session.userID
    });
```

Artık Kurs modelinin içerisinde bulunan kullanıcı bilgisine **populate** ile ulaşabiliriz.
```
const course = await Course.findOne({slug: req.params.slug}).populate('user')
```
İlgili template dosyasında kursu oluşturan kullanıcının örneğin isim bilgisine ulaşabiliriz.
```
<h3 class="author_name"><a href="#"><%= course.user.name %></a></h3>
```

#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/94ed14f927e86aacda797a1f9affe0cb534f4e29)
