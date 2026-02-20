Template Engine Kavramı
======

Statik dosyalarımızı kullanmaya başladık ve bir önceki çalışmamızda index.html sayfasına ulaştık. Sayfa içeriğini de görebiliyoruz ancak burada şöyle bir
sorunumuz var buradaki içeriklerimiz statik yani değişmez içerikler ancak biz sayfamızın dinamik bir şekilde çalışmasını yani içeriğinde değişiklikler yapmayı isteriz.
İşte burada template engine -şablon motoru- kavramı devreye girer.

### Template Engine Nedir?

Yukarıda belirtiğimiz gibi dinamik olan değişen bir içeriği sabit .html sayfasında gösteremeyiz. Template engine bize bu değişen içeriğin html kodu içerisinde 
dosya uzantısı değiştirilerek kullanmamızı sağlar. Template engineler sayesinde bir static dosyaları ve değieşn dinamik içeriği birlikte kullanabiliriz. Farklı
template engineler kullanılabiliriz, biz bu çalışmamızda **EJS** template engine yapısını kullanacağız.

### EJS Template Engine

EJS, Embedded Java Script kelimelerinden oluşur ve bize saf Javascript kodlarıkullanmamıza imkan verirken aynı zamanda çalışmamıza ait değişen içerikleri de
kullanabiliriz.

```
npm i ejs
```
komutuyla ejs modülünü indirebiliriz. Ejs modülünü çağıralım ve uygulamamıza template engine olarak "ejs" kullanacağımızı belirtelim.

```
const ejs = require('ejs');
-----
//Template Engine
app.set("view engine", "ejs");
```

EJS modülü template dosyaları görebilmek için varsayılan olarak `views` klasörünün içerisindeki .ejs uzantılı dosyalara bakar. Bu ne denle temp dosyamızın 
ismini views olarak değiştiriyoruz. Videws klasörü içerisindeki tüm .html uzantılarını .ejs olarak değiştiriyoruz. Uygulamamızdaki .get metodunu
düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.

```javascript
app.get("/", (req, res) => {
  res.render('index');
});
```

`http://localhost:3000/` adresine tarayıcımızdan istek gönderdiğimizde index sayfamızı başarılı bir şekilde görebileceğiz. Yalnız burada tüm .ejs dosyalarını
incelediğimizde bazı ortak bölümlerin bulunduğunu görebiliriz. Bu ortak alanları views/partials klasörünün içerisine yerleştireceğiz. Burada yapmamız gereken 
`_header.ejs`, `_footer.ejs`, `_navigation.ejs`  dosyalarını oluşturarak ortak kod bölümlerini buraya yapıştıralım.


index template dosyasının yanında diğer template dosyalarımızı da düzenleyelim. About ve Add New Post sayfaları için gerekli yönlendirmeleri yapalım.

```
----
app.get("/about", (req, res) => {
  res.render('about');
});

app.get("/add_post", (req, res) => {
  res.render('add_post');
});
```

sonra _navigation.ejs de linkleri güncelleyelim.

```
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/add_post">Add New Post</a>
          </li>

```

son olarak add.ejs syafamızı video içeriğimize göre güncelleyelim.
