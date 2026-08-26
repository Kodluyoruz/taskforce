Yönlendirme (Routing)
======

Yönlendirme **Routing** genel olarak belirli bir adrese, belirli bir HTTP metodu (GET, POST vs..) ile gelen isteğe ne şekilde cevap verileceğini gösterir.
Aşağıdaki örneğimizde gördüğümüz gibi `root\about` isteğine karşılık olarak `about` template 'in render edilmesi belirtiliyor.
```javascript
app.get('/about', (req, res) => {
    res.status(200).render('about', {
        page_name: "about"
    });
  });
```

PCAT projemizde yönlendirmeleri `app.js` dosyası içerisinde yazmıştık. SmartEdu projemizde ise yönlendirmeleri ayrı bir `routes` klasörü içerisinde ayrı 
yönlendirme dosyaları oluşturacağız. Önce app.js tarafındaki ana yönlendirmelere bakalım.

```
app.use('/', pageRoute);  //
```
Yukarıda da gördüğümüz gibi, şu an için tüm gelen istekler pageRoute'a yönlendiriliyor, sadece bu yönlendirmemiz mevcut. `routes/pageRoute.js` 
dosyasına gittiğimizde ise burada iki adet yönlendirme var. 
```
router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
```
`/` yani  `http://localhost:3000/` adresine karşılık getIndexPage, `/about` yani `http://localhost:3000/about` adresine karşılık getAboutPage fonksiyonu çalıştırılacak. Bu 
fonksiyonların çalıştırılacağı `controllers/pageController.js` dosyasına baktığımızda ise ilgili fonksiyonların bu dosya içerisinde oluşturulduğunu
göreceğiz. İlgili fonksiyonlar aşağıdadır:
```javascript
exports.getIndexPage = (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};
```

#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/496f4597faa696e4944833a224a410cb20f01e41)

## Daha Fazlası İçin
- [Express Routing](https://expressjs.com/en/guide/routing.html)
