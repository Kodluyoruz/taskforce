Çıkış İşlemi (Logout)
======

Session kavramı sayesinde kullanıcıya özel nasıl oturum açacağımız üzerine konuştuk. Şimdi ise bu oturumu nasıl kapatacağımızı yani çıkış işlemini nasıl yapacağımız 
üzerine konuşacağız. Bunun için **destroy** metodunu kullanacağız.

```javascript
exports.logoutUser = (req, res) => {
  req.session.destroy(()=> {
    res.redirect('/');
  })
}
```

Bu fonsiyonu çalıştırmak için ilgili yönlendirmeyi de yapalım.
```
router.route('/logout').get(authController.logoutUser);
```

Şimdi ise ilgili çıkış linkini oluşturalım.
```
<li><a class="hover-btn-new log mr-2" href="/users/logout"><span><i class="fa fa-sign-out" aria-hidden="true"></i></span></a></li>
```

Burada şöyle bir sorunumuz var, sunucuyu tekrar başlattığımızda ilgili session yani oturumu kaybediyoruz. Bunun engellemek için **connect-mongo** paketini
indireceğiz. Sonrasında ise bu session bilgisini kaydedeceğimiz veritabanı bağlantısını yazacağız.

```
const MongoStore = require('connect-mongo');
----
store: MongoStore.create({ mongoUrl: 'mongodb://localhost/smartedu-db' }),
```

#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/a8f7a0b8d496a4a72118769d9342f8f79c8238a6)
