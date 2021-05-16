Kategori Ekleme ve Silme
======
Bu çalışmamızda admin alanı içerisinde kategorileri eklemek ve silmek üzerine konuşacağız. Burada yine tablo yapısını kullanacağız kategorileri sıralamak için.
```
<table class="table">
  <thead>
    <tr>
    <th scope="col">ID#</th>
    <th scope="col">Name</th>
    <th scope="col">Add</th>
    <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
<% for (let i=0; i< categories.length; i++) { %>
    <tr>
    <th scope="row"><%=categories[i]._id %></th>
    <td><%=categories[i].name %></td>
    <td><button class="btn btn-lg btn-warning rounded-0 text-white" href="#"
      data-toggle="modal" data-target="#addCategory"><span>
        ADD</span></button></td>
    <td><a href="/categories/<%= categories[i]._id %>?_method=DELETE" 
      onclick="return confirm('ARE YOU SURE')"
      class="btn btn-danger rounded-0 text-white"><span>DELETE</span></a></td>
    </tr>
<% } %>
  </tbody>
</table>
```
Yukarıda da göreceğiniz üzere kategori silme ve ekleme işlemlerini yapmak için kategori **ID** bilgisine ihtiyacımız var.
Kategori eklemek için:
```javascript
  try {
    const category = await Category.create(req.body);
    res.status(201).redirect('/users/dashboard');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
```
Kategori silmek için:
```javascript
exports.deleteCategory = async (req, res) => {
  try {    

    await Category.findByIdAndRemove(req.params.id)
    res.status(200).redirect('/users/dashboard');

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
```

Template dosyasında yapılan değişiklikleri aşağıdaki GitHUB linkerinde bulabilirsiniz.
#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/92504b45cd44705397ce78eb9511bc64d5d44773)
