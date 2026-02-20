Flash Bildirimleri
======

Bu çalışmamızda Smartedu projemizdeki flash bildirimleri üzerine konuşacağız. Flash bildirimler ne işe yarayacak? Projemizde herhangi bir şekilde bir değişiklik
yaptığımızda, yeni bir kurs oluşturduğumuzda veya mail gönderimi gibi işlemler sonucunda kullanıcıya geri bildirimde bulunmak isteriz. Bunun için `connect-flash`
paketini indireceğiz.
```
const flash = require('connect-flash');
```
Şimdi ise iki tane ara yazılım yazacağız. Öncelikle connect-flash paketini kullanacağız. Diğer ara yazılım ise ilgili template içerisinde bu mesajları kullanmamızı 
sağlayacak olan `flashMessages` değişkenini oluşturacağız.

```javascript
app.use(flash());
app.use((req, res, next)=> {
  res.locals.flashMessages = req.flash();
  next();
})
```
Email gönderimi ile ilgili oluşturmak istediğim bildirim mesajları:
```
req.flash("success", "We Received your message succesfully");
----
req.flash("error", `Something happened!`);
```
Son olarak ise bu gönderdiğimiz mesajları ilgili template dosyasında yakalayalım.

```
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

```
#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/4e7716abf9342c3a26f25d07f1e4ca541b6c73b9)
