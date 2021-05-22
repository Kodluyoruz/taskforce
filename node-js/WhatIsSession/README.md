Session Nedir?
======

Session kavramı Türkçeye oturum olarak çevrilir ve kişiye özel içerik oluşturmak için kullanıcı bilgilerinin sunucu tarafında saklanmasını sağlayan araçlardır. Node.js
tarafında ```express-session``` paketini kullanacağız. Bu paketi indirmek için:
```
npm i express-session
```
Sonrasında "session"ı çağırıp ilgili middleware fonksiyonunu yazacağız.

```javascript
const session = require('express-session');
----
app.use(
  session({
    secret: 'my_keyboard_cat', // Buradaki texti değiştireceğiz.
    resave: false,
    saveUninitialized: true,
  })
);
```

Peki oturumu açan kullanıcıyı nasıl belirleyeceğiz, giriş işlemi sırasında kullanıcı ID'sini session alanında **userID** değişkenini oluşturup ona atayacağız.
```
req.session.userID = user._id;
```
Kullanıcıyı yakaladıktan sonra gerisi kolay bundan sonra projemizde yapacağımız herhangi bir işlemin o anda hangi kullanıcıyla ilşkili olduğunu anlayabileceğiz.
Bunu pratikte nasıl kullanabiliriz? Örneğin kullanıcılar için giriş yaptıktan sonra "giriş" linkini görmelerine gerek yoktur. Aynı şekilde sadece giriş yapan
kullanıcıların "dashboard" linkini görmelerini isteriz. Bunun için globalde **userIN** değişkeni oluşturacağız.

```javascript
global.userIN = null;
----
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});
```
Artık _navigation.ejs dosyasında bu global değişkene göre if koşulları oluşturabiliriz.

```
<% if(!userIN) { %> 

<ul class="nav navbar-nav navbar-right">
     <li><a class="hover-btn-new log <%= page_name ==='login' && 'orange' %> mr-2" href="/login"><span><i class="fa fa-sign-in" aria-hidden="true"></i></span></a></li>
			<li><a class="hover-btn-new log <%= page_name ==='register' && 'orange' %>" href="/register"><span><i class="fa fa-user-plus" aria-hidden="true"></i></span></a></li>
 </ul>

<% } %>

<% if(userIN) { %> 

<ul class="nav navbar-nav navbar-right">
		<li><a class="hover-btn-new log mr-2" href="/users/logout"><span><i class="fa fa-sign-out" aria-hidden="true"></i></span></a></li>
</ul>
	
<% } %>
```

## Daha Fazlası İçin
- [Express Session](https://www.npmjs.com/package/express-session)
