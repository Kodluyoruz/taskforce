Admin Alanı ve Kullanıcı Silmek
======
Bu çalışmamızda admin alanı oluşturacağız ve bu admin alanı üzerinden kullanıcıları nasıl sileceğimizi belirteceğiz. Öncelikle admin alanını öğrenci - öğretmen 
alanlarında olduğu gibi yine **dashboard** template sayfasını kullanacağız.
```
<% if(user.role==='admin' ) { %>
----
```
Kullanıcıları sıralamak için tablo yapısını kullanacağız. Bu tablo yapısı içerisine kullanıcı bilgilerini yerleştiriyoruz.

```
<table class="table">
  <thead>
    <tr>
    <th scope="col">ID#</th>
    <th scope="col">Email</th>
    <th scope="col">Role</th>
    <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
<% for (let i=0; i< users.length; i++) { %>
    <tr>
    <th scope="row"><%=users[i]._id %></th>
    <td><%=users[i].email %></td>
    <td><%=users[i].role %></td>
    <td><a href="/users/<%= users[i]._id %>?_method=DELETE" 
      onclick="return confirm('ARE YOU SURE')"
      class="btn btn-danger rounded-0 text-white"><span>DELETE</span></a></td>
    </tr>
<% } %>
  </tbody>
 </table>
```

Şimdi ilgili kullanıcı silme fonksiyonunu yazalım.
```javascript
exports.deleteUser = async (req, res) => {
  try {    

    await User.findByIdAndRemove(req.params.id)
    await Course.deleteMany({user:req.params.id})

    res.status(200).redirect('/users/dashboard');

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
```
`userRoute.js` dosyası içerisindeki yönlendirme ise aşağıdadır:
```javascript
router.route('/:id').delete(authController.deleteUser);
```
Silme işlemini gerçekleştirecek butonu da aşağıda bulabilirsiniz:
```
<a href="/users/<%= users[i]._id %>?_method=DELETE" onclick="return confirm('ARE YOU SURE')" class="btn btn-danger rounded-0 text-white"><span>DELETE</span></a>
```
#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/0b8df5a8d25e6608fd18b4252c0b7654e7415adf)
