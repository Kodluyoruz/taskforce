Smartedu Projesi Deployment
======
Heroku ortamına yükleme işlemine başlamadan önce öncelikle Atlas Cloud tarafında veritabanını oluşturuyoruz. İlgili kullanıcı adımızı ve şifreyi kullanarak
MongoDB bağlantımızı güncelliyoruz.

App.js dosyamızda port numarasını güncelliyoruz.
```javascript
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
```

Package. json dosyamızı nodemon ile değil node ile çalıştırmamız gerekir.
```
"start": "node app.js"
```

Heroku tarafında kullanmamız gereken komutlar:
```
$ heroku login
```
Yeni bir Git repository oluşturmak için:
```
$ cd my-project/
$ git init
$ heroku git:remote -a testo-testox
```
Deploy komutları:
```
$ git add .
$ git commit -am "make it better"
$ git push heroku main // Biz burada main branchı göndereceğiz.
```
#### [https://smartedu-app.herokuapp.com/](https://smartedu-app.herokuapp.com/)
