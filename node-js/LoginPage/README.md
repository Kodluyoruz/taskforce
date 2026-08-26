Giriş Sayfası ve Giriş İşlemi
======
SmartEdu projemizde kayıt sayfasını oluşturduktan sonra sıra giriş sayfasını oluşturmakta. İlk olarak her zamanki gibi `controller` fonksiyonunu yazalım.

```javascript
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    await User.findOne({ email }, (err, user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, same) => {
          if (same) {
            // USER SESSION
            res.status(200).send('YOU ARE LOGGED IN');
          }
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

```

İlgili yönlendirme kodunu yazalım `userRoute.js` dosyası içerisinde:
```
router.route('/login').post(authController.loginUser);
```
`login.ejs` dosyasındaki formunuzun action adresi ile bu yönlendirmenin birbiriyle örtüşmesi gerekir.
```
<form method="POST" action="users/login">
```
#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/c324d2d57165d40d597c82f1957ab58df374af14)
