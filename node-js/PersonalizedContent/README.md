Kişiye Özel İçerik
======

Bu çalışmamızda projemize giriş yapan kullanıcıya göre sayfa içeriğini nasıl özelleştireceğimiz üzerine konuşacağız. Geçen çalışmamızdan bildiğimiz üzere ilgili
kullanıcıyı nasıl yakalıyorduk? Session'a kaydettiğimiz **userID** yardımıyla.

Burada kişiye özel içeriği oluşturacağımız **dashboard** sayfasını **authController** içerisinde oluşturacağız. Sebebi ise bu sayfanın sadece giriş yapan kullanıcılara 
özel olması. Burası şart değil, benim bakış açım. İlgili ```getDashboardPage``` fonksiyonu:

```javascript
exports.getDashboardPage = async (req, res) => {
  const user = await User.findOne({_id:req.session.userID})
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
    user
  });
}; 
```

```userRoute.js``` dosyası içerisinde ilgili yönlendirmeyi yapalım:
```javascript
router.route('/dashboard').get(authController.getDashboardPage);
```

son olarak ise _navigation.ejs dosyası içerisinde link düzenlemesini yapalım.

```
<li class="nav-item <%= page_name ==='dashboard' && 'active' %>" ><a class="nav-link" href="users/dashboard">Dashboard</a></li>
```

#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/f83792ff153673cd1590bab081b9e9af787151c2)
