Kayıt ve Kullanıcı Doğrulama
======
Smartedu projemizin şu an en önemli eksiği kayıt ve kullanıcı işlemleri sırasında herhangi bir kontrol yapmaması. Kayıt yapılan şifre uygun mu, kullanıcı email adresi 
doğru mu şeklinde farklı senaryolar için gerekli kontroller yapmamız gereklidir. Bunun için `express-validator` paketini kullanacağız.

Kayıt işlemini yaptığımız yönlendirmede kontrolleri yapalım. `userRoute.js` dosyası içerisinde
```
router.route('/signup').post(
    [
        body('name').not().isEmpty().withMessage('Please Enter Your Name'),


        body('email').isEmail().withMessage('Please Enter Valid Email')
        .custom((userEmail)=> {
            return User.findOne({email:userEmail}).then(user => {
                if (user) {
                    return Promise.reject('Email is already exists!')
                }
            })
        }),

        body('password').not().isEmpty().withMessage('Please Enter A Password'),
    ],

    authController.createUser); // http://localhost:3000/users/signup
```
Yukarıda dikkat ettiyseniz biz sadece kontrolleri yapıyoruz. Bu kontroller sonucunda oluşan hataları ise ilgili controller fonksiyonunda yakalayacağız.
```
    const errors = validationResult(req);
    console.log(errors);
    console.log(errors.array()[0].msg);

    for (let i = 0; i <errors.array().length; i++) {
      req.flash("error", `${errors.array()[i].msg}`);
    }

    res.status(400).redirect('/register');
```
Son olarak yapılması gereken ise bu hataları ilgili template dosyasında yakalamak.
```
<div class="offset-1 col-lg-10 col-md-10 col-sm-10">
    <% if (flashMessages) { %>

        <% if (flashMessages.success) { %>
            <div class="alert alert-success">
                <%= flashMessages.success %>
            </div>

        <% } else if (flashMessages.error) { %>
            <div class="alert alert-danger">
                <%= flashMessages.error %>
            </div>
        <% } %>

    <% } %>
</div>
```

#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/6d325b395c8d96bb9d25b90ea362f5a7397f89e9)
