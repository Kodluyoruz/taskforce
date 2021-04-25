Heroku Deployment
======

Artık çalışmamızı tamamladık, şimdi ise en zevkli bölüm olarak çalışmamızı web ortamına yükleyelim. Aşağıdaki aşamaları teker teker belirteceğim.

- ### Atlas Cloud
Atlas Cloud, mongoDB geliştiriceleri tarafından geliştirilen bir veritabanı bulut hizmetidir, `https://account.mongodb.com/account/login?nds=true` 
adresinden giriş yapıyoruz.

Atlas Cloud ortamında yeni bir proje ve veritabanımızı oluşturacağımız yeni bir `Cluster` oluşturalım.

- ### Heroku Platform
Heroku uygulamamıza barınma servisi sağlayacak bir bulut platformudur. Heroku ortamında yeni bir uygulama oluşturalım. Sonrasında ise bazı 
**heroku** komutlarını kullanmak için HEROKU CLI programını indirelim.

- Cluster oluşturulduktan sonra tüm IP lerden ulaşım hakkı sağlıyoruz. Veritabanı kullanıcısı ve şifreyi oluşturuyoruz ve sonrasında uygulamamızdan 
veritabanına ulamak için gerekli `string`i kopyalayalım.

- mongoose.connect('mongodb den alınan string') metodu içerisine ilgili stringi yerleştiriyoruz
- uygulamamızda port değiken değerini değiştirelim. `const port = process.env.PORT || 5000`
- package.json  dosyasında çalışma scripti olarak `"start":"node app.js"` oluşturalım.
- heroku ortamına gönderim için aşağıdaki koları yazacağız.
```
heroku login

cd my-project/
git init
heroku git:remote -a uygulama_adı

$ git add .
$ git commit -am "make it better"
$ git push heroku master // Eğer daha öncesinde oluşturduysak -git push heroku main- yazmalıyız.
```

Ve uygulamamızı başarılı bir şekilde herko ortamına yüklemiş olduk. Aşağıdaki adresten ulaşabilirsiniz.
- [PCAT Projesi](https://pcat-application.herokuapp.com/)

Not: Görsellerin görünmeme nedeni ücretsiz servisi kullanmamızdan dolayıdır.
