Linkleri Güncelleme
======

Projemizde linklerin ilgili sayfaya göre aktif olmasını istiyoruz. Bunun için ilgili template dosyasın o bilgiyi `page_name ` olarak gönderiyoruz. İlgili
page_name'e ait olan değer her sayfaya göre değişiyor. Örneğin index sayfası için:
```javascript
app.get('/', (req, res) => {
  res.status(200).render('index', {
      page_name: "index"
  });
});
```
about sayfası için:
```javascript
app.get('/about', (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
});
```
`page_name` ilgili template dosyasına gönderildi. Bunları "ejs" template motoru ile yakalamak için bir değişken şeklinde düşünebiliriz.
```
<%= ----- %>
```
Aşağıdaki örneğimizde page_name 'in aldığı değerin ne olduğuna göre active classı ilgili linke ekleniyor. 
```
<li class="nav-item <%= page_name ==='index' && 'active' %>"><a class="nav-link" href="/">Home</a></li>
<li class="nav-item <%= page_name ==='about' && 'active' %>"><a class="nav-link" href="/about">About Us</a></li>
```

#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/3b8e0ea5fc5125d5cebd84f543ae4ac96f25e410)
