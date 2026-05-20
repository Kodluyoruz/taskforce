# JSX

## JSX Nedir?

JSX (JavaScript XML) JavaScript için bir syntax uzantısıdır. XML/HTML benzeri bir syntax kullanarak JavaScript kodu yazmamıza olanak sağlar. JSX, JavaScript'e dayanarak oluşturulmuştur ancak direkt olarak web tarayıcılarında çalışmaz. Bu kod, önişlemciler (preprocessors) tarafından standart JavaScript koduna çevrilir ve böylece JavaScript engine tarafından anlaşılabilir hale gelir. Bu bağlamda bu görevi üstlenen [Babel](https://babeljs.io/docs/en/) adlı transpilerdır.

**Not:** JSX, ES6, ES7 ve TypeScript [Babel](https://babeljs.io/docs/en/) aracılığıyla tarayıcılarda uyumlu bir şekilde çalışabilecek standart JavaScript'e çevrilir.

Basitçe ifade etmek gerekirse, JSX kullanmak HTML elemanlarını aynı JavaScript dosyası içerisinde yazmamıza olanak sağlar. Böylece JavaScript'i tüm gücüyle kullanmamız mümkün hale gelir. 



## Neden JSX?

HTML ve JavaScript kodlarının ayrı dosyalarda tutularak teknolojilerin birbirinden yapay bir şekilde ayrılması yerine React, hem HTML hem de JavaScript kodu barındıran ve birbirine gevşek bir şekilde bağlı olan componentler sayesinde ilgili [*işlerin* ayrılmasını](https://en.wikipedia.org/wiki/Separation_of_concerns) sağlar. 

React, JSX kullanımını [zorunlu tutmaz](https://tr.reactjs.org/docs/react-without-jsx.html). Fakat birçok geliştirici, JavaScript kodu içerisinde arayüz ile ilgili çalışırken JSX’in kullanılmasının, görsel anlamda yardımcı olduğunu düşünüyor. Ayrıca JSX, React için daha anlaşılır hata ve uyarı mesajlarının görüntülenmesini sağlıyor.



## JSX Olmadan React

JSX, React’i kullanmak için bir gereksinim değildir. Her JSX elementi sadece `React.createElement(component, props, ...children)`‘i çağırmak için [syntactic sugar](https://tr.reactjs.org/docs/jsx-in-depth.html)'dır. Yani, JSX ile yapabileceğiniz her şeyi düz JavaScript ile yapabilirsiniz.

Örneğin, JSX ile yazılmış bir kod parçası:

```javascript
const element = (
  <h1 className="selamlama">
    Merhaba, dünya!
  </h1>
);
```

JSX kullanmayan bu koda derlenebilir:

```javascript
const element = React.createElement(
  'h1',
  {className: 'selamlama'},
  'Merhaba, dünya!'
);
```

Derleme sonucunda aslında yapılan şey bir nesne oluşturmaktır:

```javascript
// Not: bu yapı basitleştirilmiştir
const element = {
  type: 'h1',
  props: {
    className: 'selamlama',
    children: 'Merhaba, dünya!'
  }
};
```

Bu nesnelere “React elementleri” adı verilir. Bunu, ekranda görmek istediğiniz kullanıcı arayüzünün kodlar ile tasvir edilmesi gibi düşünebilirsiniz. React, bu nesneleri okuyarak DOM’u oluşturur ve arayüzü günceller.

JSX'i React.createElement() fonksiyonunu çağırmanın kısa yolu olarak düşünebiliriz. JSX kodları Babel derleyicisi tarafından React.createElement() fonksiyon çağrılarına dönüştürülür.

JSX’in JavaScript’e nasıl dönüştürüldüğüne dair daha fazla örnek görmek isterseniz, [çevrimiçi Babel derleyicisi](https://babeljs.io/repl/#?presets=react&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA)ni deneyebilirsiniz.

## JSX Kullanımı

### JSX Değişkenleri ve İfadeleri

JSX yazarken değişkenleri, fonksiyonları ve herhangi bir JavaScript ifadesini süslü parantezler içerisinde yazabiliriz.  

Aşağıdaki örnekte ilk satırda `name` değişkenini tanımlıyoruz. Ardından bu değişkeni **süslü parantezler** ile sarmalayarak JSX kodu içerisinde kullanıyoruz:

```javascript
const name = 'Dünya';
const element = <h1>Merhaba, {name}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

JSX’te süslü parantezler arasına dilediğiniz herhangi bir [JavaScript ifadesini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) yazabilirsiniz. Örneğin, `2 + 2`, `message.first`, veya `formatMessage(message)` gibi JavaScript ifadelerini kullanabilirsiniz.

### DOM'a JSX Render Etmek

DOM: Document Object Model

DOM'u, HTML ile JavaScript arasında iletişim kurulabilmesini sağlayan bir arabirim olarak düşünebiliriz. Daha fazla bilgi için [bu bağlantıyı](https://www.mediaclick.com.tr/tr/blog/dom-nedir) kullanabilirsiniz. 

`ReactDOM.render()` fonksiyonu JSX ifadelerini DOM'a render etmek için kullanılır. Yani Babel JSX kodunu JavaScript'e dönüştürdükten sonra bu fonksiyon sayesinde HTML elemanları DOM'a render edilir.

Aşağıdaki örnekte, bir JavaScript fonksiyonun çağrısının sonucu JSX içerisine gömülmektedir. Yani `formatMessage(message)`, `<h1>` elemanının içerisine konulmaktadır.

```javascript
function formatMessage(message) {
  return message.first + ' ' + message.second;
}

const message = {
  first: 'Merhaba',
  second: 'Dünya'
};

const element = (
  <h1>
    {formatMessage(message)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Okunabilirliği arttırmak için JSX kodunu birkaç satır halinde yazdık. Buradaki gibi, JSX kodunu birçok satır halinde yazarken, kodun parantezler ile sarmalanması önerilir. Bu sayede [otomatik olarak noktalı virgül eklenmesi](https://stackoverflow.com/q/2846283) ile oluşan birçok hatanın önüne geçebilirsiniz.



### JSX de bir JavaScript İfadesidir

Oluşan derlemenin ardından JSX ifadeleri, sıradan JavaScript fonksiyon çağrılarına dönüşür ve bu fonksiyonlar JavaScript nesnelerini işleyecek şekilde çalışırlar. Bu sayede `if` ifadelerini ve `for` döngülerini JSX içerisinde kullanabilir, değişkenlere atama yapabilir, fonksiyona parametre olarak geçebilir ve fonksiyondan geri döndürebilirsiniz:

```javascript
function printMessage(message) {
  if (message) {
    return <h1>{formatMessage(message)}!</h1>;  
  }
  return <h1>Mesaj yok!</h1>;
}
```



### JSX ile Inline CSS Kullanımı 

Normalde CSS'i ayrı dosyalarda tutarken inline style CSS syntax'ını JSX kodu ile kombinleme seçeneği sunmakta ([JS-içinde-CSS](https://tr.reactjs.org/docs/faq-styling.html#what-is-css-in-js)). Inline CSS kullanmak için JSX içerisinde style attribute'u yazmamız gerekiyor. Bu style attribute bir JavaScript objesi veya obje referansı alır ve içinde camel-cased stilinde CSS propertyleri içerir.

```javascript
var styles = {
  color:'red',
  backgroundColor:'black',
  fontWeight:'bold'
};

var element = <div style={styles}>test</div>;

ReactDOM.render(element, document.getElementById('app1'));
```

**Not:** Style niteliği kolaylık sağlaması açısından zaman zaman kullanılsa da bu kullanım yerine className kullanılması tavsiye edilmektedir. Bu şekilde harici CSS dosyalarında belirtilen class’ları kullanabilirsiniz. `style`‘ın kullanım amacı genellikle React’te dinamik hesaplanan stillerin ekrana yansıtma anında ekleyebilmektir.

Stillendirme ile ilgili daha detaylı bilgi için [bu bağlantıyı](https://tr.reactjs.org/docs/dom-elements.html#style) kullanabilirsiniz.



### JSX ile Attribute Belirlemek

Bir HTML element'i için string ifadelerini çift tırnak içerisinde atayabilirsiniz:

```javascript
const element = <div tabIndex="0"></div>;
```

Ayrıca bir JavaScript ifadesini, element'in özelliği olarak tanımlamak için süslü parantezler ile sarmalayabilirsiniz. Bir başka değişle element özelliğini bir değişken olarak verebiliriz:

```javascript
const element = <img src={user.avatarUrl}></img>;
```

Bir JavaScript ifadesini, herhangi bir attribute içerisine yazarken çift tırnak kullanmayınız. **String için çift tırnak, JavaScript ifadeleri için süslü parantezler kullanmalısınız.** Aynı özellik için hem çift tırnak hem de süslü parantez **kullanmayınız**.

**Uyarı:**

JSX ifadeleri, HTML’den ziyade JavaScript’e daha yakındırlar. Bu nedenle React DOM, özellik isimlendirme için HTML’deki gibi bir isimlendirme yerine `camelCase` isimlendirme standardını kullanmaktadır. 

**Örneğin** JSX içerisinde `class` özelliği [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className), ve `tabindex` özelliği de [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex) olarak yazılmalıdır.

Bunun sebebi "class" anahtar sözcüğünün JavaScript içerisinde halihazırda bulunmasıdır. JSX bir JavaScript uzantısı olduğu için JSX kodu yazarken "class" anahtar sözcüğünü kullanamıyoruz. Bunun yerine className kullanıyoruz.

> Visual Studio Code veya benzeri gelişmiş bir editör kullanıyorsanız. Bu hataları ve doğru yazım şekillerini size önerecektir. Hızlı bir google aramasıyla da bunlara ulaşabilirsiniz.
>

### JSX ile Child Belirlemek

Eğer bir HTML etiketinin içeriği boşsa yani, XML’deki gibi `/>` kullanarak etiketi kapatabilirsiniz:

```javascript
const element = <img src={user.avatarUrl} />;
```

JSX etiketleri içerisinde alt elemanlar (child) da içerebilir:

```javascript
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

**Not:** JSX return ederken tek bir element'in return edilmesine dikkat edilmelidir. Yani birden fazla child'i olan bir JSX return edilebilir ancak bu child elementleri sarmalayan bir top-level (kapsayıcı) element olmalıdır. 

Bu örnekte `<h1>` ve `<h2>` element'lerini sarmayalan bir `<div>` olmasaydı 2 element ard arda bir şekilde açıkta kalmış olacaktı ve bir hatayla karşılaşacaktık. 

**Not:** Bazı durumlarda kapsayıcı tag olarak bir `<div>` yerine [fragment'ler](https://tr.reactjs.org/docs/fragments.html) kullanılabilir.

```javascript
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
```

Fragment'leri tanımlamak için kısa syntax olarak boş tag'ler de kullanabiliriz.

```javascript
const element = (
  <>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </>
);
```

Bu şekilde finalde oluşan markup'a etki etmeyecek bir şekilde JSX'in tek bir element return etme kuralına uyulmuş oldu.  Bunun için ayrıca [fragment'ler](https://tr.reactjs.org/docs/fragments.html) de kullanılabilir.

## **Notlar**

- `<foo-bar />` geçerli bir JSX kodu iken `<foo-bar>` değildir çünkü açılan etiketler kapatılmak zorundadır. *(`<foo-bar></foo-bar>` Şeklinde içerisine child alacak şekilde de kullanılabilir.*)

- JSX'in bir JavaScript syntax uzantısı olduğunu unutmamalıyız. 

- class attribute className olarak, for attribute htmlFor olarak yazılmak zorundadır.

- style attribute bir obje alır ve property isimleri camel-cased (örneğin marginBottom) şekilde olmalıdır. 


[Derinlemesine JSX](https://tr.reactjs.org/docs/jsx-in-depth.html) için React resmi dökümanından daha detaylı bilgiye ulaşabilirsiniz.

## Kaynaklar 

- https://tr.reactjs.org/docs/introducing-jsx.html

- https://tr.reactjs.org/docs/react-without-jsx.html

- https://tr.reactjs.org/docs/dom-elements.html#style

- https://www.reactenlightenment.com/react-jsx.html



