Kullanıcı Rolleri (User Roles)
======

Smartedu projemizde kullanıcılarımızın farklı rolleri yani görevleri olacak. Bazı kullanıcılarımız öğrenci olarak derslere kayıt olabilecek, bazı kullanıcılarımız 
öğretmen rolleri ile yeni dersler oluşturabilecek. Bu rolleri yine özel ara yazılımları ile oluşturacağız. İlgili ara yazılım ```roleMiddleware.js```
```javascript
module.exports = (roles) => {
    return (req, res, next) => {
        const userRole = req.body.role;
        if(roles.includes(userRole)) {
            next();
        } else {
            return res.status(401).send('YOU CANT DO IT');
        }
    }
}
```
Kullanıcı modelimizde `role` isminde yeni bir alan oluşturuyoruz ve olmasını istediğimiz rolleri yazıyoruz. Varsayılan rol ile `student` olacak.
```
  role:{
    type: String,
    enum:["student", "teacher", "admin"],
    default: "student"
  }
```

Bu rollerden `student` ve `teacher` rollerini kullanıcı kayıt esnasında seçebilir.
```
<div class="offset-1 col-lg-10 col-md-10 col-sm-10">
  <select class="form-control" name="role">
    <option>student</option>
    <option>teacher</option>
  </select>
</div>
```
Şimdi ise örneğin yeni bir kurs oluşturmak için `createCourse` fonksiyonunun çalışması için öncesinde istediğimiz kullanıcı rolüne bu işlemi
yapabilmek için gerekli yetkiyi verebiliriz.

```
router.route('/').post(roleMiddleware(["teacher", "admin"]), courseController.createCourse);
```

#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/b34822ba44cd28e94282a6f0b08087918be9fa7b)
