# Bootstrap Bileşenlerine(UI Components) Genel Bakış

Bootstrap sizler için önceden tasarlanmış ve hazırlanmış birçok component sunuyor. Bu hazır component'ler ile sitelerinizi kolayca stillendirebilir hızlıca projeler çıkarabilirsiniz. Bu bölümde Bootstrap'ın bizlere sunmuş olduğu component'lere genel bir bakış atacağız. 

**Not:** Bu doküman hazırlanırken Bootstrap 5.0 versiyonu baz alınmıştır. Componet'ler ile güncel dokümana **[burdan](https://getbootstrap.com/docs/5.0/components/accordion/)** ulaşabilirsiniz.

![Untitled](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled.png)

Accordion, Alerts, Badge, Breadcrumb, Buttons, Button group, Card, Carousel, Close button, Collapse, Dropdowns, List group, Modal, Navs & tabs, Navbar, Pagination, Popovers, Progress, Scrollspy, Spinners, Toasts, Tooltips

## Accordion
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/accordion/)

Sizlere açılır kapanır başlıklar yapmanıza olanak tanıyan bir component. Akordiyon müzik aletine benzediği için bu ismi almış. 

Bu component temelde collapse component'i üzerine geliştirilerek yapılmıştır. O component'e de yazının ilereleyen bölümlerinde değineceğiz. 

![Accordion](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Accordion.gif)

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
```
**Not:** Component ile ilgili kodlara en güncel hali ile Bootstrap'in kendi dokümantasyonundan ulaşabilirsiniz.

## Alerts
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/alerts/)

Projenizdeki bildirimleri, uyarıları Bootstrap'in alert'leri ile gösterebilirsiniz. Buradaki resimde alert çeşitlerini görebilirsiniz.

![Untitled 1](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%201.png)

```html
<div class="alert alert-primary" role="alert">
  A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-success" role="alert">
  A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-info" role="alert">
  A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-light" role="alert">
  A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
</div>
```

## Badge
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/badge/)

Bu component'i bildirim sayısını göstermek ya da bir component'in ek bir öğe olarak kullanabilirsiniz.

Yine bu component'in de alert'lerde olduğu gibi renk seçenekleri mevcut.

![Untitled 2](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%202.png)

![Untitled 3](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%203.png)

![Untitled 4](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%204.png)

```html
<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning text-dark">Warning</span>
<span class="badge bg-info text-dark">Info</span>
<span class="badge bg-light text-dark">Light</span>
<span class="badge bg-dark">Dark</span>

```

## Breadcrumb
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/breadcrumb/)

Bu component sayesinde sayfalarınız arasında gezinirken kullanıcının kaybolmadan nerede olduğunu gösterebiliyorsunuz. Hansel ve Gretel masalında olduğu gibi :)

![Untitled 5](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%205.png)


```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
```

## Buttons
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/buttons/)

Bootstrap sizlere kullanabilceğiniz birçok buton çeşidi sunmakta.

![Untitled 7](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%207.png)

![Untitled 6](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%206.png)

```html
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
```


## Button group
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/button-group/)

Bu butonları bu şekilde gruplayıp da kullanabilirsiniz.

![Untitled 8](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%208.png)

![Untitled 9](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%209.png)

![Untitled 10](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%2010.png)

```html
<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
</div>
```

## Cards

İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/card/)

Bootstrap'in kartları, birden çok varyant ve seçeneğe sahip esnek ve genişletilebilir bir içerik konteyneri sağlar.

![Untitled 12](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%2012.png)

![Untitled 11](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%2011.png)

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

## Carousel
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/carousel/)

Resimlerinizi göstermeye yarayan bir galeri component'i.

![coursel](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/coursel.gif)


```html
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>
```

## Close button
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/close-button/)

**Kapatma tuşu**
![Untitled 13](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%2013.png)

```html
<button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
<button type="button" class="btn-close btn-close-white" disabled aria-label="Close"></button>
```

## Collapse
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/collapse/)

Açılır kapanır kartlar.
![collapse](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/collapse.gif)

```html
<p>
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </div>
    </div>
  </div>
</div>
```

## Dropdowns
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/dropdowns/)

Düşen menüler

![dropdown](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/dropdown.gif)

```html
<!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
```

## Navbar
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/navbar/)

Genelde web sitelerinin en üstünü dolduran gezinti bölümünün Bootstrap tarafından özelleştirilmiş ve component haline getirlmiş hali.

![Untitled 14](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%2014.png)

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

## Pagination
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/pagination/)

Sayfada görüntüleceyeğiniz elemanlar yeterince çoğaldığında sayfada yapılan istekleri boyutlandırmak için pagination'ı kullanırız. Bu da Bootstrap'in pagination için hazırlamış olduğu component'leri

![Untitled 15](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%2015.png)

```html
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
```

## Popovers
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/popovers/)

Butonlar üzerinde gösterdiğimiz açılan açıklamalar.

![popovers](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/popovers.gif)

```html
<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
```

## Progress
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/progress/)

İlerleme ifade eden bar'lar.

![Untitled 16](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%2016.png)

```html
<div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
```

## Spinners
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/spinners/)

Yükelenme durumlarını ifade etmek için kullanılan component'ler.

![spinners](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/spinners.gif)

```html
<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
```

## Toasts
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/toasts/)

Tosast component'i daha çok kullanıcıya bir bildirim göstermek için kullanılıyor. 

![Untitled 17](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%2017.png)

```html
<div aria-live="polite" aria-atomic="true" class="position-relative">
  <!-- Position it: -->
  <!-- - `.toast-container` for spacing between toasts -->
  <!-- - `.position-absolute`, `top-0` & `end-0` to position the toasts in the upper right corner -->
  <!-- - `.p-3` to prevent the toasts from sticking to the edge of the container  -->
  <div class="toast-container position-absolute top-0 end-0 p-3">

    <!-- Then put toasts within -->
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        See? Just like this.
      </div>
    </div>

    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded me-2" alt="...">
        <strong class="me-auto">Bootstrap</strong>
        <small class="text-muted">2 seconds ago</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Heads up, toasts will stack automatically
      </div>
    </div>
  </div>
</div>
```

## Tooltips
İlgili döküman sayfasına [**buradan ulaşabilirsiniz**](https://getbootstrap.com/docs/5.0/components/tooltips/)

Elementlerin üzerinde geldiğinizde size ipucu veren component'ler.

![Untitled 18](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/bootstrap/bootstrap-bilesenlerineui-components-genel-bakis/images/Untitled%2018.png)


```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Tooltip on left
</button>
```

Bu yazımızda Bootstrap'in tüm arayüz bileşenlerinden bahsetmeye çalıştık. Daha çok bu bileşenlerin tanıtımı gibi oldu. Bunlardan birine ihtiyacınız var ise Bootstrap'in kendi dökümantasyonuna gidip bu component'leri kendi projelerinize nasıl dahil edeceğinize bakabilirsiniz.

## Kaynaklar
- [https://getbootstrap.com/docs/5.0/](https://getbootstrap.com/docs/5.0/)
