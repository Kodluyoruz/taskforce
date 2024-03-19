# Props Children

Children, React'te özel bir property'dir. `this.props.children` (eğer functional bir component kullanıyorsak `props.children`), bir component'in açılış-kapanış etiketleri arasında bulunan bütün content'i içerir. React tarafından sunulan ve bütün component'lerde mevcut olan props.children daha esnek ve yeniden kullanılabilir component'ler oluşturmaya katkı sağlar. 

[React dökümantasyonunda](https://tr.reactjs.org/docs/composition-vs-inheritance.html#containment), `props.children`'dan özellikle generic "boxes" (genel kutular)'ı temsil eden component'lerin alt elemanlarını (child) bilmelerini gerektirmeyen durumlarda kullanıldığından bahsediliyor. 

### Örnek

```javascript
const Photo = (props) => {
  return (
    <div>
      <img src={props.src}/>
      <div>
        {props.children}
      </div>
    </div>
  )
}
```
![props-children](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/props-children/figures/props-children.jpeg)

`Photo` isimli basit bir functional component, aldığı `src` prop'u yardımıyla ekrana bir image render ediyor. Daha sonraki satırda bir `<div>` içerisinde props.children görüyoruz. `Photo` component'i render edilirken açılış-kapanış tagler'i arasındaki bütün child element'ler `props.children` property'si içerisinde tutulur. 

Eğer `props.children` kullanılmayacaksa `Photo` component'i aşağıdaki gibi self-closing tag ile yazılır.

```javascript
return (
    <div>
      <Photo src={src} />
    </div>
  )
```

Bizim buradaki amacımız `props.children` kullanmak olduğu için `<Photo>...</Photo>` şeklinde kullanacağız. Burada üç nokta ile belirtilen yer yukarıda component'i tanımlarken belirttiğimiz `props.children`'a referans ediyor. 

`Photo` component'ini render ederken, açılış-kanapış tag'lerinin arasına `props.children` olarak aktarılacak content'i belirtiriz.

```javascript
return (
    <div>
      <Photo src={src}>
        Kaynak: kodluyoruz.org - Kodluyoruz Web Sitesi
      </Photo>
    </div>
  )

```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/PoGWwwm)

> **Not:** Bu bir functional component olduğu için, class component'lerde olduğu gibi "this" keyword'ü kullanmıyoruz.

### Örnek

```javascript
const Photo = (props) => {
  return (
    <div>
      <img src={props.src}/>
      <div className="center">
        {props.children}
      </div>
    </div>
  )
}

class Profile extends React.Component {
  constructor(props) {
    super(props);
     this.state = {
      photos: [
        {id: 1, src: 'http://via.placeholder.com/200x100'},
        {id: 2, src: 'http://via.placeholder.com/400x200'},
        {id: 3, src: 'http://via.placeholder.com/200x100'}
      ]
    };
  }
 
  render() {
    return(
      <div className="photos">
        {this.state.photos.map((photo) => {
          return(
            <Photo key={photo.id} src={photo.src}>
              <button>
                {photo.id}
              </button>
            </Photo>
          );
        })}
      </div>
    );
  }
}
```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/ZEpKVXo?editors=1111).

Bu örnekte, `Profile` isimli class component'te state içerisinde bulunan `photos` array'ini `map` fonksiyonu ile dönüyoruz. Map yaparken `Photo` component'ini return ediyoruz. Burada `Photo` component'ini incelediğimizde herhangi bir buton içermediğini görebiliriz. Ancak bu kod çıktısında her fotoğraf altında bir buton render edilecektir. `Photo` component'inin açılış-kapanış tag'leri arasında yazdığımız buton element'i `Photo` component'i içerisinde `props.children` olarak erişilebilir durumdadır. Biz de `props.children`'ı bir `<div>` içerisinde render ettiğimiz için output'ta her fotoğraf için o fotoğrafın `ID`'sini gösteren bir buton render edilir.

## Perde Arkasında Olanlar

[JSX](../jsx) konu başlığında bahsettiğimiz üzere, **JSX** bir **syntactic sugar**'dır yani arka planda `React.createElement()` fonksiyon çağrılarına dönüştürülür. 

`React.createElement(component, props, ...children)` 

`React.createElement` fonksiyonunun yapısını incelediğimizde, son parametre görüldüğü üzere [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) operatörü içerir yani geri kalan bütün argümanları bir array'de toplar. 

```javascript
<div>
    Metin
    <h2>h2 metni</h2>
</div>

// JSX'in pure, nested function call'lara dönüştürülmesi
React.createElement("div", null, 
    React.createElement("Metin", null, null),
    React.createElement("h2", null ,
        React.createElement("h2 metni", null, null)
    )
)
```

Burada ilk `createElement` fonksiyonuna baktığımızda ilk parametre tip, 2. parametre aktarılan `prop`'lar (burada aktarılacak prop olmadığı için null) ve 3. parametre ise bahsettiğimiz üzere tüm `React.createElement()`'lerdir. Bu element'lerin hepsi `children array`'i altında toplanır. Bu örnekte `<div>` parent iken, altındaki diğert tüm `React.createElement`'ler onun **child element**'idir. 

```javascript
function createElement(type, props, ...children) {
    // ...
    if(IS_CLASS(type)) {
        let props = props
        props.children = children
      
      	const instance = new type(props)
    }
    // ...
}
// ...
```

`React.createElement()`

`<div>` element'i oluşturulurken, child'ları `props.children`'da tutulur. Böyle component children ağacına `this.props.children` kullanarak ulaşabilir (class component için "`this`" olduğunu unutmayalım).

`React.Children` API hakkında daha detaylı bilgiye dökümantasyondan [ulaşılabilir](https://tr.reactjs.org/docs/react-api.html#react.children). 



## Kaynaklar

- https://blog.bitsrc.io/understanding-render-props-in-react-1edde5921314

- https://tr.reactjs.org/docs/composition-vs-inheritance.html

- https://tr.reactjs.org/docs/glossary.html

- https://medium.com/javascript-in-plain-english/how-to-use-props-children-in-react-7d6ab5836c9d

- https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891
