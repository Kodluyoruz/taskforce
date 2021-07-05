Fotoğraf Silmek
======
Eveeeettt, şimdiye kadar fotoğrafları yükledik, sıraladık ve güncelledik. Şimdi ise burada istediğimiz fotoğrafı nasıl sileceğimiz konusuna. Geçen 
çalışmamıza benzer bir şekilde burada **DELETE** request yapacağız ancak yine tarayıcılar tarafından DELETE request desteklenmeyeceği için bu kez
POST requesti DELETE request olarak simüle edeceğiz.


Silme işlemini yaparken herhangi bir forma gerek olmadığı için bunu **DELETE PHOTO** butonuna link olarak ekleyeceğiz.

```
a href="/photos/<%= photo._id %>?_method=DELETE"
```

Bir fotoğrafı sildiğimizde ek olarak bu fotoğrafı fiziksel olarak da ilgili fotoğrafı silmek isteriz. Bunun için yine Node.js çekirdek modülü olan **fs**
modülünden faydalanacağız. İlgili DELETE requeste ait olan yönlendirmeyi aşağıda bulabilirsiniz.

```javascript
app.delete('/photos/:id', async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  let deletedImage = __dirname + '/public' + photo.image;
  fs.unlinkSync(deletedImage);
  await Photo.findByIdAndRemove(req.params.id);
  res.redirect('/');
});
```

İlgili fotoğrafı silmek için bir onaylama **popup** açmak istersek, aşağıdaki güncellemeyi yaparız.
```
<a href="/photos/<%= photo._id %>?_method=DELETE" class="btn btn-danger p-0 tm-btn-animate tm-btn-download tm-icon-download"
onclick="return confirm('ARE YOU SURE?')"><span>Delete Photo</span></a>
```
