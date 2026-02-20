Kayıt Sayfası ve Bcrypt Paketi
======

SmartEdu projemizin kayıt sayfasını oluşturacağız. Kullanıcı modelimizi oluşturmak ile başlayalım.
```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
      type:String,
      required: true
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
```
User modelimizi oluşturduktan sonra kullanıcıyı oluşturacak olan ilgili `controller` fonksiyonunu yazalım.
```javascript
const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
```

Burada dikkat edilmesi gereken nokta, aslında tüm modellerimiz için yaptığımız **CRUD** işlemlerinin tamamı aynıdır. Bu controller fonksiyonunu
adresleyecek olan ilgili route dosyası aşağıdaki gibi olacak.
```
router.route('/signup').post(authController.createUser);
```
`app.js` içerisinde de kayıt işlemini `users/signup` adreslenmiş oldu. Bu adresin kayıt formunda `action` ile aynı olması gerekir.

### Bcrypt Paketi
Kullanıcıları oluşturduktan sonra veritabanımızda ilgili dökümanı incelediğimizde şifre bilgilerinin açık ve ulaşılabilir durumda olduklarını
görüyoruz. Bu durum ciddi bir güvenlik açığı oluşturur, bu nedenle User modeli içerisinde şifrelerimizi veritabanına kaydetmeden önce şifreleyeceğiz.
Önce paketi indirelim.

```
npm i bcrypt
```

Sonra modelimizde password alanını şifreleyip "hash" e çeviriyoruz ve veritabanımına şifrelenmiş şekilde kaydediyoruz.
```
UserSchema.pre('save', function (next){
    const user = this;
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash;
        next();
    })
})
```
#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/1ed4bde776a276a45501e29eb83190dbbb8da5f6)

## Daha Fazlası İçin
- [BCRYPT Paketi](https://www.npmjs.com/package/bcrypt/)
