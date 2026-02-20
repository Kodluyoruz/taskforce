# React Router

Modern Web Uygulamaları diğer bir deyişle Single Page Application'lar (SPA), tarayıcı içerisinde çalışan ve kullanımları sırasında sayfa yenilenmesini gerektirmeyen uygulamalardır. Single Page Application'lar markup ve data'yı bağımsız bir şekilde elde edip tarayıcıda render eder. SPA'lar ile geleneksel web uygulamaları (Multi-Page Applications -MPA) arasındaki en büyük fark sayfa arasındaki geçiş (routing - yönlendirme) noktasında ortaya çıkar. Geleneksel web uygulamarında bu, bir server (sunucu) ile etkileşim sonucu gerçekleşirken SPA'larda bu geçişler client (istemci) tarafında yani bir web tarayıcısında gerçekleşir. Klasik bir web uygulamasında kullanıcı farklı bir sayfaya geçmek istediğinde, server'a istek atıp sonucunda statik bir sayfanın kendisine dönmesini bekler. SPA'lar klasik bir masaüstü uygulaması gibi çalıştıkları için, bu geçiş aynı uygulama içindeki farklı bir view'ın görüntülenmesine eşdeğerdir. 

![MPA-vs-SPA](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/router/figures/mpa-vs-spa.jpeg)

Bu figürde sol tarafta geleneksel bir web uygulamasının (Multi Page Application - MPA) yaşam döngüsünü görüyoruz. Her istek (request) sonrası server'dan dönen cevap (response) sonucunda sayfa yeniden yükleniyor (page reload). Sağ tarafta ise bir SPA uygulamasının yaşam döngüsünü görüyoruz. İlk istek sonrasında web sayfası elde ediliyor ve sonraki isteklerde yalnızca ilgili data 

SPA'larda, tarayıcının varsayılan davranışı (farklı bir sayfaya gidildiğinde sayfayı yenilemek) engellenir, kullanıcı sayfalar arasında gezinirken tamamen yeniden yüklenen bir sayfaya gitmez. Ortada bir uygulama vardır ve bu uygulamanın mevcut sayfası, web server'dan gelen yeni data'larla birlikte dinamik olarak yeniden yazılır. Buna *client-side routing* denir. 

React'te bunu sağlamak için React Router kullanılır. React Router'ın temel olarak yaptığı şey, belirli component'lerin (esasında her bir component bir sayfaya denk gelir) URL'deki route'a göre render edilmesini sağlamaktır. React, arayüzdeki parçalar için nasıl component yapısını kullanıyorsa, React Router'da da sayfalar arası geçişler component yapısıyla sağlanır. Kullanıcı uygulama içerisindeki bir link'e (bağlantı) tıkladığında, uygulama içerisindeki farklı bir component görüntülenir. React Router kullanılarak bu component'lerin hangi durumlarda render edileceği belirlenir. Örneğin "/" route'u için anasayfa (home) component'inin görüntülenmesi belirtilirken "/hakkinda" route'u için hakkında component'inin görüntülenmesi belirtilir. 

## Kurulum 

[react-router-dom](https://www.npmjs.com/package/react-router-dom) kütüphanesini npm ya da yarn gibi bir paket yöneticisi aracılığıyla kurabiliriz.

```javascript
// npm ile kurulum yapmak için
npm install react-router-dom

// yarn ile kurulum yapmak için
yarn add react-router-dom
```

**Not:** React Router'ın temel fonksiyonelliğini sağlayan paket [react-router](https://www.npmjs.com/package/react-router)'dır. `react-router-dom` indirildiğinde, `react-router` bağımlılık olarak indirilir. Direkt olarak indirmeye gerek yoktur.

## Basic Routing - Temel Component'ler

React Router component tabanlı bir yaklaşım ile routing yaptığı için her route'u ve bu route'a karşılık gelecek component'leri oluşturmalıyız. 

react-router-dom kütüphanesinden import etmemiz gereken 3 ana component var. Bunları açıklayalım:

```javascript
import {
  BrowserRouter,
  Route,
  Link
} from "react-router-dom";
```

### 1. Routers

Her React Router kullanan uygulamanın merkezinde `BrowserRouter` component'i olmalıdır. Yani root component olarak Router'ın render edildiğinden emin olmalıyız. Bunu sağlamak için uygulamanın temel component'i olan App.js'i (bütün uygulama için container olan `<App>` component'i) bu `<BrowserRouter>` component'i ile sarmalarız. 

```javascript
function App() {
  return <h1>Hello React Router</h1>;
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

```

react-router-dom'un sağladığı 2 farklı router component'i vardır:  `<BrowserRouter>` ve `<HashRouter>`. Bunlar arasındaki temel fark URL'yi saklama ve web server'ıyla iletişim kurma şeklidir.

**Not:** `<BrowserRouter>`, router'ın geçmişini saklamak için HTML5 historyAPI'ını kullanırken, `<HashRouter>` URL'ın hash (#) kısmını kullanır (window.location.hash).

```javascript
// <BrowserRouter>
http://example.com/about
  
// <HashRouter>
http://example.com/#/about
```

https://reactrouter.com/web/guides/primary-components/routers

### 2. Route Matchers

2 adet route matching component'i vardır: `Switch` ve `Route`. <Route> component'inin "path" prop'una eşleşmesi beklenen URL verilir ve <Switch> component'inin içerisine yazılır.

`<Route>` component'i, URL ve render etmek istenilen component arasındaki mapping görevini üstlenir. Örneğin kullanıcı "/about" sayfasına gitmek istediğinde bu route'a karşılık gelecek component `<Route>`  ile belirlenir.

**Not:** URL eşleşmesi sonucunda render edilecek component `<Route>` component'inin açılış-kapanış etiketleri arasına yazılabileceği gibi, "component" prop'unda da belirtilebilir.

```javascript
<Route path='/' component={Home} />
```

 `<Switch>`, child `<Route>` element'leri içerisinde istenilen route'ı arayarak render edilmesini sağlar. Aranılan route ile eşleşen component'i bulduğunda render eder ve geri kalan `<Route>` component'lerini görmezden gelir. Eğer eşleşen herhangi bir `<Route>` bulunamazsa, `<Switch>` null render eder. Burada `<Route>` sıralaması önemlidir. Daha spesifik olan `<Route>`'lar, daha genel olanlardan öne koyulmalıdır.

```javascript
import { Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        {/* Eğer şu anki URL /about ise bu route render edilir ve geri kalanlar görmezden gelinir */}
        <Route path="/about" component={About} />

        // Route'ların sıralaması önemlidir. Daha spesifik olanlar daha genel olanlardan önce gelmelidir. 	
        <Route path="/contact/:id" component={Contact} />

       	<Route path="/contact" component={AllContacts} />

        {/* Eğer önceki <Route>'lardan hiçbiri render edilmediyse bu <Route> fallback route olarak davranır 
        
         Önemli: Bütün URL'ler "/" ile başladığı için "/" path'i başlara yazılırsa istenmeyen bir şekilde her 				durumda geçerli URL ile eşleşir, bu yüzden en sona koyulur. 
        */}
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}
```



**Not:** `<Route path="/">`'ı en sona koymak yerine `exact` keyword'ü de kullanılabilir. Böylece yalnızca URL tamamen eşleştiğinde render olur.

```javascript
<Route exact path="/">
```



### 3. Navigation

React Router'ın sağladığı diğer bir component `<Link>`'tir. Uygulama içerisinde bir link verilmek istediğinde kullanılır. Arka planda bir anchor (`<a>`) render edilir. `<NavLink>` ise özel bir `<Link>` component'idir. Geçerli URL ile eşleştiği zaman stil olarak kendisine verilen css class'ı "aktif" olur. Böylece diğer link'lerden farklı bir stile sahip olur.

```javascript
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
   return (
    <div>
    	<Link to="/">Home</Link>
			// <a href="/">Home</a>
			<Link to="/contact">Contacts</Link>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
   </div>
  );
}

// URL /about olduğunda render olacak element (active class'ı ile birlikte): 
// <a href="/about" className="active">About</a>

// URL farklı bir şey olduğunda:
// <a href="/about">About</a>
```



## Redirect

Herhangi bir durumda yönlendirmenin zorunlu olarak yapılması isteniyorsa `<Redirect>` component'i kullanılır. `<Redirect>` component'i "to" prop'una verilen path'e gider.

```javascript
<Redirect to="/kayitol" />
```

Örneğin, kullanıcı henüz kayıt olmadan ya da giriş yapmadan, yalnızca giriş yapmış kullanıcıların görebileceği bir sayfaya gitmek isterse bu şekilde kayıt ol sayfasına yönlendirilebilir.  

## Error Component'i

Geçerli olmayan, uygulamada var olan URL'ler ile eşleşmeyen bir URL girildiğinde render edilmek istenen component yine `<Route>` component'iyle belirtilir ancak bu durumda path prop'unu almaz. Standart bir hata mesajı göstermeye yarayan default bir component render edilir. 

```javascript
<Route component={Error} />
```



## Örnek

Bu örnekte router'ın temel olarak nasıl çalıştığını görebiliriz. Temel olarak Home, Contacts ve About sayfalarımız var. Yukarıda navigation başlığında gördüğümüz üzere, sayfanın en üstüne yerleştirdiğimiz bir Navbar component'i ile bu sayfalar arasında geçiş yapabileceğimiz link'leri render ediyoruz. 

Contacts route'unda AllContact component'ini render ederek contacts.js dosyasındaki bütün isimlerin görüntülenmesini sağlıyoruz. 

contacts.js içerisinde objelerden oluşan bir array barındırıyor. Bu array'i  aşağıda görülen `contacts`  değişkeniyle import ediyoruz. 

Bu array içerisindeki her bir obje bir kişiyi temsil ediyor. Bu objeler içindeki id property'si ile her bir kişi için dinamik birer URL'e yönlendirme yapıyoruz. Bu yönlendirmeyi `<Link>` component'i ile yapıyoruz. `to` property'sine bir path vererek kişinin isim ve soyismine tıklandığında yeni bir sayfaya gitmesini sağlıyoruz.

```javascript
import contacts from "../contacts";

const AllContacts = () => {
  return (
    <div>
      <h2>Contacts</h2>
      {contacts.map((contact) => {
        return (
          <div>
            <Link to={`/contact/${contact.id}`}>
              {contact.name} {contact.lastname}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
```

Contact component'inde ise bahsettiğimiz her bir dinamik URL için detay gösteriyoruz. Burada prop olarak alınan `match` bize Router tarafından sağlanan bir objedir. `<Route path>`'in URL ile nasıl eşleştiği konusunda bilgi sağlar.

Örneğin Cindy Erickson isimli kişiye tıklandığında match objesi aşağıdaki gibidir. Cindy Erickson adlı kişinin id'si 1 olduğu için url burada "/contact/1" olmuştur. 

![match-prop](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/router/figures/match.png)

Bu id'ye `match.params.id` şeklinde ulaşabiliriz.

![match-details](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/router/figures/match-details.png)

```javascript
const Contact = ({ match }) => {
  const contact = contacts.find((contact) => contact.id == match.params.id);
  return (
    <div>
      <h2>Contacts</h2>
      <div>
        <p>{`${contact.name} is ${contact.age} years old.`}</p>
      </div>
    </div>
  );
};
```

Yukarıda gördüğümüz üzere, Contact component'inde match objesinden gelen id'nin hangi kişiye karşılık geldiğini bularak render ediyoruz.

Yukarıdaki projenin repository'sine [buradan](https://github.com/Kodluyoruz/react-router-example) ulaşabilirsiniz.



## Kaynaklar

- https://scand.com/company/blog/single-page-application-vs-multi-page-application/

- https://reactrouter.com/web/guides/primary-components
