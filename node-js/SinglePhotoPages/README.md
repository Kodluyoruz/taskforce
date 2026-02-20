Tekil Fotoğraf Sayfaları
======

Geçen çalışmamızda veri tabanından Photo bilgilerini alıp anasayfamızda listeliyoruz. Bu çalışmamızda bu Photo bilgilerini her birinin kendine
özel sayfalarını oluşturacağız.

Öncelikle tekil sayfalarımızını template'i olan photo.ejs dosyasını oluşturacağız. Burada sormamız gereken soru şu, biz her tekil Photo bilgisini
diğerlerinden nasıl ayıracağız? Bunun için MongoDB'nin her Photo bilgisi için otomatik olarak oluşturduğu **_id** özelliğinden faydalanacağız. Peki bu
_id leri nasıl yakalayacağız? Bunun için index.ejs de diğer Photo alanları gibi yakalanabilir.
```
<%= photos[i]._id %>
```
ve bunu link olarak kullanacağız. Bunun için `/photos/photos[i]._id` yazıyoruz index.ejs template içerisine. Sıra bunu _id yi ilgili yönlendirme
"route" aşamasında yakalayacağız. Bunun için request nesnesine ait "params" ı kullanacağız. Aşağıda ilgili _id yi yakalayıp consol ' a yazdıralım.
```javascript
app.get("/photos/:id", (req, res) => {
  console.log(req.params.id);
});
```

Artık anasayfadaki linklerin üzerlerine geldiğimizde id leri görebiliriz. Şimdi bu id bilgisinden faydalanarak içgili Photo yu yakalayalım ve photo.ejs 
ye gönderelim.
```javascript
app.get('/photos/:id', async (req, res) => {
  const photo = await Photo.findById(req.params.id)
  res.render('photo', {
    photo
  })
});
```

Photo.ejs template dosyasına gönderdiğimiz ilgili photo versine ait bilgileri aşağıdaki şekilde gösterebiliriz.
```
<%= photo.title %>
<%= photo.description %>
```

Bu şekilde de ilgili photo sayfasına verileri yerleştirmiş olduk.
