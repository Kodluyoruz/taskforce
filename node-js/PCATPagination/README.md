Pagination (Sayfalama)
======

Uygulamamızın yavaş yavaş sonuna geliyoruz. Ama bir sorunumuz var, uygulamamıza yüklediğimiz tüm fotoğraflar anasayfada sıralanıyor. Fotoğraf sayımız arttığında 
sayfamızın aşağıya doğru uzadığını göreceğiz. Bunun önüne geçmek için farklı çözümler var biz bu çalışmamızda Pagination kavramı üzerine konuşacağız.
Sayfalama özelliğine geçmeden önce **req.query** özelliği üzerine konuşmamız gerekir.

### req.query 
req.query özelliği ile ilgili yönlendirmede bulunan sorgu parametrelerini yakalamamızı sağlar. URL de `?user=test&pass=1234` sorgusu yapıldığında req.query
özelliği bize sorgu parametlerini ve değerlerini gösteren bir **key - value** objesi döner.
```
{ user: 'test', pass: '1234' }
```
Bu özellik sayesinde biz ne yapabiliriz? Eğer hangi sayfada olduğumuzu bir şekilde query ile yakaladığımızda biz sayfa içeriğimizi de o anda bulunan sayfaya 
göre belirleyebiliriz. Her sayfada bulunan içerik sayısını da belirledikten sonra her sayfaya hangi içeriğin düşeceğini belirleyebiliriz. Bu arada
toplam fotoğraf sayımızı her sayfada bulunmasını istediğimiz fotoğraf sayısına bölersek toplam sayfa sayımız da ortaya çıkar. Nasıl karışık geldi değil mi?:)))

Şimdi hemen ilgili kodumuzu yazalım ve ve yanlarına açıklamalarımızı koyalım.
```javascript
  const page = req.query.page || 1;                        // Başlangıç sayfamız veya ilk sayfamız.
  const photosPerPage = 3;                                 // Her sayfada bulunan fotoğraf sayısı
  const totalPhotos = await Photo.find().countDocuments(); // Toplam fotoğraf sayısı

  const photos = await Photo.find({})                      // Fotoğrafları alıyoruz  
  .sort('-dateCreated')                                    // Fotoğrafları sıralıyoruz
  .skip((page-1) * photosPerPage)                          // Her sayfanın kendi fotoğrafları
  .limit(photosPerPage)                                    // Her sayfada olmasını istediğimi F. sayısını sınırlıyoruz.
 ```
 
 index.js sayfasındaki pagination kodu ise aşağıdadır.
 
 ```
<div>
  <% if (pages > 0) { %>
    <ul class="nav tm-paging-links">
      <% for (i=1; i <=pages; i++) { %>
        <%   if (i == current) { %>
          <li class="nav-item active"><a href="/?page=<%= i %>" class="nav-link tm-paging-link"><%= i %></a></li>
        <% } else if (i < pages) { %>
          <li class="nav-item"><a href="/?page=<%= i %>" class="nav-link tm-paging-link"><%= i %></a></li>
        <%  } else { %>
          <li class="nav-item"><a href="/?page=<%= i %>" class="nav-link tm-paging-link">></a></li>
        <%  } %>
      <%  } %>
    </ul>
  <% } %>
</div>
 ```
 
