Arama (Search) Alanı
======
Bu çalışmamızda Smartedu projemizin `search` (arama) alanını oluşturacağız.

Kullanacağımız yöntem ise şu daha öncesinde kategori ile oluşturduğumuz filtrelemeyi `query` den gelen "search" parametresiyle de birleştireceğiz. Önce query
parametresini göndereceğimiz formu oluşturalım.
```
<form method="GET" id="site-searchform" action="/courses">
  <div>
    <input class="input-text form-control" name="search" id="search-k" placeholder="Search..." type="text">
    <button id="searchsubmit" value="Search" type="submit"></button>
  </div>
</form>
```
Şimdi oluşturduğumuz filtreyi query parametresiyle geliştirelim.
```
    const query = req.query.search;

    if(query) {
      filter = {name:query}
    }

    if(!query && !categorySlug) {
      filter.name = "",
      filter.category = null
    }

    const courses = await Course.find({
      $or:[
        {name: { $regex: '.*' + filter.name + '.*', $options: 'i'}},
        {category: filter.category}
      ]
    }).sort('-createdAt').populate('user');
```

Kategorileri de sıralamak için:
```
<% for (let i=0; i< categories.length; i++) { %>
  <li><a href="/courses?categories=<%= categories[i].slug %>"><%= categories[i].name %></a></li>
<% } %>	
```
#### [Proje GitHub](https://github.com/ArinSoftware/SmarteduProject)
#### [Çalışma Özel GitHub](https://github.com/ArinSoftware/SmarteduProject/commit/a99d283b194b6780428b8240c49f947f5cabbc34)
