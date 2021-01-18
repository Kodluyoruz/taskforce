## Bootstrap Nedir?
# Bootstrap ile Hızlı ve Responsive Siteler İnşa Edin

![](./figures/bootstrap.png)

Bootstrap dünyanın en popoler, açık kaynak kodlu, ücresiz, farklı cihazlar için responsive tasarıma duyarlı bir CSS (**Framework**) kütüphanesidir.

İçerisinde mevcut olan sayısız tablo, grafik, ikon, carousel, navigasyon gibi pek çok hazır tasarım sayesinde sitenizi kolayca tasarlayabilirsiniz. 

Ayrıca Bootstrap‘in kullandığı Grid (Izgara) sistemi ile  sitenizi istediğiniz bölümde konumlandırabiliyorsunuz. Bu özellik, ekranı dilediğiniz ölçüde bölüp, ayırdığınız bu kısımlara kolayca müdahele etmenizi sağlamaktadır.

Basit bir hazır Bootstrap örneği:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
</head>
<body>

<div class="jumbotron text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this page to see the responsive effect!</p> 
</div>
  
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h2>London</h2>
      <p>London is the most populous city in the United Kingdom,
      with a metropolitan area of over 13 million inhabitants.</p>
    </div>
    <div class="col-sm-4">
      <h2>Paris</h2>
      <p>The Paris area is one of the largest population centers in Europe,
      ith more than 12 million inhabitants.</p>
    </div>
    <div class="col-sm-4">
      <h2>Tokyo</h2>
      <p>Tokyo is the center of the Greater Tokyo Area,
      and the most populous metropolitan area in the world.</p>
    </div>
  </div>
</div>

</body>
</html>

```
![](./figures/website.png)

# Bootstrap öğrenimi için linkler
- [Resmi Bootstrap dökümantasyonu](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Bootstrap bileşenleri -1](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Bootstrap bileşenleri -2](https://www.w3schools.com/whatis/whatis_bootstrap.asp)
- [Hazır Bootstrap temaları ](https://themes.getbootstrap.com/)