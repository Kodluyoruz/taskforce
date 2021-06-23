Kategori Listelemek
======

Bu çalışmamızda SmartEdu projemize ait kategorileri oluşturacağız ve bu kategorilere ait kursları listeleyeceğiz. İlk yapmamız gereken Category modelimizi
oluşturmak. Category.js

```
const mongoose = require('mongoose');
const slugify = require('slugify');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  slug: {
    type:String,
    unique: true
  }
});

CategorySchema.pre('validate', function(next){
  this.slug = slugify(this.name, {
    lower:true,
    strict:true
  })
  next();
})

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
```

Kategorileri oluşturmak için ise sırada ilgili `controller` dosyasının içerisinde `createCategory` fonksiyonunu oluşturacağız.
```
const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).json({
      status: 'success',
      category,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
```
Burada kritik nokta ise kurs ve kategory arasındaki bağlantıyı kurmak. Bunun için Course modelinde `category` isminde yeni bir alan oluşturacağız. Bu alan
bize o kursun ait olduğu kategori bilgisine ulaşmamızı sağlar.
```
  category: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Category'
  }
```

Şimdi kursları sıralamak için gerekli kategori filtresini oluşturalım. Bu filtreyi oluşturmak için gerekli olan parametreyi ise `?categories=<category_slug>`
olarak alacağız.
```
    const categorySlug = req.query.categories;
    const category = await Category.findOne({slug:categorySlug})

    let filter = {};
    if(categorySlug) {
      filter = {category:category._id}
    }
    const courses = await Course.find(filter);
```

İlgili `courses` template içerisinde kategorileri aşağıdaki şekilde sıralayabiliriz.

```
<% for (let i=0; i< categories.length; i++) { %>
<li><a href="/courses?categories=<%= categories[i].slug %>"><%= categories[i].name %></a></li>
<% } %>	
```
#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/0ef81dce49b75a35ea73e148b557af11cca124f0)

## Daha Fazlası İçin
- [Mongoose ObjectIDs](https://mongoosejs.com/docs/schematypes.html#objectids)
