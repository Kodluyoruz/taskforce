Özel (Custom) Middleware
======

Artık **Middleware** kavramına aşinayız. Özetle istek - cevap (request - response) döngüsü bir ara yazılımlar(middleware) bütünüdür. Bazı durumlarda projemize özel kendi ara 
yazılımlarımızı oluşturmak isteriz.

Burada ilk sorunumuz nedir? Biz bazı sayfaların örneğin **dashboard** sayfasına ait olan adrese yalnızca giriş yapan kullanıcılarımızın ulaşmasını isteriz. Bununla 
ilgili ara yazılımı yazalım.

```javascript
module.exports = (req, res, next) => {
  User.findById(req.session.userID, (err, user) => {
    if (err || !user) return res.redirect('/login');
    next();
  });
};
```

Artık dashboard sayfasına ulaşmak için kullanıcının giriş yapıp yapmadığını kontrol edebiliriz. 

```javascript
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage);
```

Bir başka sorunumuz nedir? Biz kullanıcı olarak giriş yaptık. Giriş yapan bir kullanıcının tekrar kayıt veya giriş sayfasına ulaşmasının anlamı yok değil mi? Hemen
ilgili ara yazılımı oluşturalım.

```javascript
module.exports = (req, res, next) => {
  if (req.session.userID) {
    return res.redirect('/');
  }
  next();
};
```
Artık zaten giriş yapmıl bir kullanıcı giriş sayfası veya kayıt sayfası linkine ulaşmaya çalışılırsa anasayfaya yönlenecek.

```javascript
router.route('/register').get(redirectMiddleware, pageController.getRegisterPage);
router.route('/login').get(redirectMiddleware, pageController.getLoginPage);
```

#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/9da4efa36afeddb3fa641b5bc09f3ce26ab22c7a)
