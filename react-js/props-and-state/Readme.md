# State ve Props

**Başlamadan Not:** Önceki yazıda **class component**'lerden bahsederken functional component'lere göre ek özelliklerinin olduğundan <u>bahsetmiştik</u>. Bu ek özelliklerden biri **state** diğeri de **lifecycle metodlardır.** State kavramının detaylarına girmeden önce state'in yalnızca class component'ler tarafından yönetilebileceğini unutmayalım.  

**Not:** State kavramından bahsederken React Hook'lar olmadan önce yani state'in yalnızca class component'ler ile kullanımından bahsedeceğiz. React Hook'lar ayrı bir konu başlığında ele alınacaktır.

## React State

React state, component hakkında data tutan bir objedir. Peki component hakkında data ne olabilir? Örneğin bir kullanıcının giriş yapıp yapmadığı bilgisini tutan bir boolean değer ya da ekrana basılacak post'ları tutan bir array, state objesi içerisinde tutulacak property'lere örnek olarak verilebilir. 

State objesi güncellenebilir bir yapıdadır ve sadece o component tarafından kontrol edilebilir. State'in güncellenmesine sebep olan şey bir system event (tıklama - on click) ya da kullanıcı etkileşimi olabilir. State'te herhangi bir değişiklik olduğunda, o state'i tutan component yeniden render olur. React'in bu değişikliği algılaması için state üzerinde değişiklik yaparken `setState()` adında özel bir fonksiyon kullanılır. Bu sayede React, state'in mutasyona uğradığını anlar ve component'in yeniden render olmasını sağlar.

### State Kullanımı

Class component'lerin [React.Component](https://tr.reactjs.org/docs/react-component.html)'i extend ederek oluşturulduğundan bahsetmiştik. 

```javascript
class Cat extends React.Component
```

Class yapısı kullandığımız için burada bir constructor'a ihtiyacımız var. **Constructor** sayesinde bu component'i yapılandırıyoruz, yani ilk kullanıma hazır hale getirmek için tanımlamaları yapıyoruz. State objesi bu constructor metodu içerisinde tanımlanır.

**Not:** ES6+ ile birlikte state'i constructor dışında yani bir class property gibi tanımlayabiliyoruz. 

```javascript
class Cat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Pamuk",
      color: "beyaz",
      age: 2
    };
  }
  
  changeAge = () => {
    this.setState({age: 3})
  }
  
  render() {
    return (
      <div>
        <h1>Kedinin ismi {this.state.name}</h1>
        <p>Kedinin rengi {this.state.color} ve yaşı {this.state.age}</p>
        <button
          type="button"
          onClick={this.changeAge}
          >Yaşı değiştir
        </button>
      </div>
    );
  }
}
```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/MWjYyBa)

**Not:** Burada bir extends söz konusu olduğu için `super()` metodu ile extend ettiğimiz class'taki tanımlamalar gerçekleştirilir. Props, `super()` metoduna argüman olarak gelir. Yazının ilerleyen bölümünde prop'lara değineceğiz. Ayrıca bu component bir class olduğu için property'lere erişirken **this** anahtar sözcüğünü kullanıyoruz.

Yukarıdaki örnekte `Cat` adında bir class component oluşturduk. Constructor içerisinde state objemizi tanımladık ve property'lerin ilk değerini verdik. State içerisinde `name` ve `color` adında 2 string property ve bir de `age` adlı number tipinde değer tutacak property'miz var. `render()` metodu içerisinde DOM'a render edilecek elementler'i yazdık. State objesine ulaşmak için element'ler içerisinde süslü parantez `{}` kullandık çünkü **JavaScript** kodu yazıyoruz. Ayrıca burada `onClick` event'i olan bir buton görüyoruz. `onClick` event'ine, butona tıklandığında hangi fonksiyonu çağıracağını söylüyoruz.  

### State'in Güncellenmesi

Burada önemli olan nokta `setState()` metodunun kullanımıdır. State objesi üzerinde değişiklik yapacağımız zaman bu metodu kullanıyoruz. Hiçbir şekilde state'i direkt olarak değiştirmiyoruz aksi halde yapılan değişiklikler component'in yeniden render olmasını tetiklemeyecektir.

**YANLIŞ KULLANIM**

```javascript
changeAge = () => {this.state.age = 3}
```

ya da 

```javascript
changeAge = () => {this.state = {age: 3}}
```

### setState() Metodu

`setState` metodu bir obje alır ve bu objenin içindeki property'leri ve halihazırda bulundurduğu property'leri birleştirir. Yani  örnek üzerinden konuşacak olursak, biz sadece `age` property'sini güncellemek istiyoruz bu yüzden sadece onun yeni değerini belirtmek yeterlidir. `name` ve `color` property'lerini tekrar yazmak zorunda değiliz. Butona tıklandığında `changeAge` fonksiyonu çağrılacak ve `setState` sayesinde `age` property'si 3 olarak DOM üzerinde güncellenecek.

`setState` metodu ile bilmemiz gereken bir diğer şey **asenkron** olarak çalışması. Yani `setState` ile bir değişiklik yaptıktan hemen sonraki kod satırında state'in güncellenmiş olduğundan emin olamayız. Basit bir counter örneği üzerinden bu durumu inceleyelim. 

```javascript
class App extends React.Component {
  state = { 
    count: 0 
  }

  artir = () => {
    this.setState({ count: this.state.count + 1 })
  }

  azalt = () => {
    this.setState({ count: this.state.count - 1 })
  }
  
  render() {
    return (
      <div>
        <div>
          {this.state.count}
        </div>
        <button onClick={this.artir}>Artır</button>
        <button onClick={this.azalt}>Azalt</button>
      </div>
    )
  }
}
```

[Snippet source](https://css-tricks.com/understanding-react-setstate/)

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/KKgwMmN)

Burada basitçe `Artır` butonuna tıklandığında, state içerisindeki `count`'u 1 artırıyoruz. Şu ana kadar bir sorun yok ancak eğer `artir` fonksiyonunun içinde birden fazla `setState` çağırıyor olsaydık, sonraki `setState` çağrılarında state'in güncel halde olup olmadığını bilmiyor olacaktık.

**Fonksiyonları şu şekilde güncelleyelim:**

```javascript
artir = () => {
  this.setState({ count: this.state.count + 1 })
  this.setState({ count: this.state.count + 1 })
  this.setState({ count: this.state.count + 1 })
}

azalt = () => {
  this.setState({ count: this.state.count - 1 })
  this.setState({ count: this.state.count - 1 })
  this.setState({ count: this.state.count - 1 })
}
```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/bGwNeRV)

Artır veya Azalt butonuna basıldığında 3 artıracak ya da 3 azaltacak şekilde fonksiyonlarımızı düzenlememize rağmen `count` yine 1'er artıp azalıyor. `setState` asenkron bir şekilde çalıştığı için ard arda çağrılmaları durumunda `count` istediğimiz güncel halinde olmadığı için istediğimiz sonuca ulaşamıyoruz. İstediğimiz sonuca ulaşabilmek için `setState`'e bir obje vermek yerine bir fonksiyon vermemiz gerekiyor. Bu fonksiyonun aldığı `prevState` argümanı aracılığıyla önceki state'e ulaşabileceğiz. `setState` bir fonksiyon aldığında güncellemeleri sıraya koyar böylece önceki state'in güncellediğinden emin olabiliriz.



```javascript
artir = () => {
  this.setState((prevState) => ({ count: prevState.count + 1 }))
  this.setState((prevState) => ({ count: prevState.count + 1 }))
  this.setState((prevState) => ({ count: prevState.count + 1 }))
}
azalt = () => {
  this.setState((prevState) => ({ count: prevState.count - 1 }))
  this.setState((prevState) => ({ count: prevState.count - 1 }))
  this.setState((prevState) => ({ count: prevState.count - 1 }))
}
```



Burada `setState`'e verdiğimiz fonksiyona gelen `prevState` argümanı sayesinde bir önceki güncellenmiş state'e ulaşıp onun üzerinden yeni değeri return ediyoruz.  

### setState Callback Fonksiyon Alabilir

`setState` ilk argümanı obje olarak, 2. argümanı da callback fonksiyon olarak alabilir. **Callback fonksiyon state güncellendikten sonra çalışacaktır.** Bu şekilde state güncellendikten sonra yapılmasını istediğimiz şeyleri callback fonksiyon içerisinde belirtebiliriz.

```javascript
this.setState({ property: value}, callback)
```

```javascript
artir = () => {
  this.setState({ count: this.state.count + 1 }, () => console.log(this.state.count))
}
```

Bu şekilde `setState` ile güncellenen `count` properety'sinin güncellendiğinden emin olabiliriz. Yani console'a basılan `count` değerinin güncel halde olduğunu söyleyebiliriz. 

### İç İçe Objelerden Oluşan State 

`setState` ile iç içe bir state objesini güncellerken dikkatli olmalıyız çünkü yalnızca ilk seviyede olan yani en dıştaki proprety'leri kontrol edebiliriz. Bir örnek üzerinden bu durumu inceleyelim. State'imiz şu şekilde olsun:

```javascript
this.state = {
  name: "",
  hobbies: {
    dancing: false,
    painting: false
  }
}
```

State'imizde isim ve hobileri tutuyoruz. Burada `name` bir string iken, `hobbies` bir obje. Yani state içerisinde iç içe obje durumu söz konusu. 

Eğer ismi değiştirmek istersen bunda sorun yok çünkü ilk seviyede olan bir property'i değiştirmek istiyoruz. 

```javascript
this.setState({
  name: "Sinan"
});
```

Ancak `hobbies` objesi üzerinde bir güncelleme yapmak istediğimizde hedef property dışındaki property'lerin yani önceki data'nın da referansını geçmek zorundayız.

```javascript
this.setState({
   hobbies: { dancing: true }
});
```

Bu şekilde güncelleme yapmaya çalışırsak eski data'yı kaybederiz. Yani `painting` adlı property silinmiş olur. 

Bu şekilde iç içe objelerde çalışırken, state'imizi **mutate etmemek** (istenmeyen bir şekilde değiştirmemek) için [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) ya da [Object.assign](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) metodunu kullanabiliriz.

```javascript
this.setState({
   hobbies: {
     ...this.state.hobbies, 
     dancing: true
  }
});
```

Burada bahsedilebilecek bir diğer problem ise `setState`'e direkt obje vererek kullandığımızda önceki data'ya doğru referans verip vermediğini bilemiyor oluşumuz. Bahsettiğimiz üzere `setState` asenkron çalışır, bu sebeple state'in güncel versiyonda olup olmadığından emin olmalıyız. Bunu da çözmek için `setState`'e `prevState`'i argüman alan fonksiyon geçebiliriz.

```javascript
this.setState((prevState) => {
  return {
    hobbies: {
      ...prevState.hobbies, 
      dancing: true
    }
  }
});
```

Bu yöntemle en güvenli şekilde state'imizi güncellemiş oluruz.

**State'in Güncellenmesi - Özet** 

- State her zaman `setState` metodu ile güncellenmeli
- `setState` bir obje ya da önceki state'i (`prevState`) argüman olarak alan bir fonksiyon alabilir
- State'in birden fazla kez güncellenmesi gereken durumlarda ve state'in güncel halde olduğundan emin olmak için `setState`'e fonksiyon geçilmeli



## React Props  

React props, "properties" kelimesinin kısaltılmasıdır. Aynı state'te olduğu gibi component hakkında data depoladığımız yerdir fakat props yalnızca okunabilen (read-only, hiçbir şekilde mutate edilemezler yani değiştirilemezler) objelerdir. 

**Kullanım amacı component'ler arası data paylaşımı yapmaktır.** Bir component diğer component'e props geçerek data aktarır. Props, fonksiyon argümanlarına çok benzer. Argümanlar sayesinde nasıl bir fonksiyona data aktarabiliyorsak, props da bir component'ten diğerine data aktarmak için kullanılır.  

Bir component'ten diğer bir component'e props aktarımı uni-directional flow yani tek yönlü bir akış şeklinde gerçekleşir. Bu akış parent component'ten child component'e doğrudur. Props, read-only bir yapı olduğu için parent'tan props aracılığıyla gelen data hiçbir şekilde child component tarafından değiştirilmemelidir. 



### Props Kullanımı  

Props tıpkı bir HTML tag'inin içine attribute verilmesi gibi istenilen component'e bizim tarafımızdan tanımlanan attribute'lardır. Örneğin `<a>` tag'i `href`, `target`, `title` gibi attribute'lar alabiliyor. Biz de oluşturduğumuz component'e istediğimiz attribute'ları aktaracağız. Bu attribute'lar string, array, obje, fonksiyon hatta başka bir component olabilir.

**Öncelikle bir parent ve bir child component oluşturalım.**

```javascript
class Parent extends React.Component {  
  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Child />
      </div>
    );
  }
}
```



```javascript
const Child = () => {  
  return <p>Child Component</p>; 
};
```



Parent component'ten child component'e props geçelim. Child component'i yukarıda direkt `<Child />` olarak ifade etmiştik. Şimdi istediğimiz attribute'ları verelim.

`<ChildComponent attribute1={value} attribute2={value}/>` Bu şekilde arada virgül olmadan istediğimiz kadar attribute aktarabiliriz. Uygulamalı şekilde görelim:

```javascript
class Parent extends React.Component {  
  render() {
    return (
      <div>
        <h1>
          Parent Component
        </h1>
        <Child text={"Merhaba Dünya!"} />
      </div>
    );
  }
}
```

Parent component'ten child'a text adında bir props geçtik. Şimdi bu attribute'u child component'te nasıl alıp kullanabileceğimizi görelim. 

```javascript
const Child = (props) => {  
  return <p>{props.text}</p>; 
};
```

Child component'i argüman olarak props alıyor, ve props parent'tan gönderilen bütün attribute'ları içeriyor. Yani argüman olarak gelen props bir objedir. İçerisindeki değere props.text diyerek ulaşabiliriz.    

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/bGwNqmv)



### Props Özet 

- Props, properties'in kısaltmasıdır ve React'te özel bir keyword'dür.
- Props, parent component'ten child component'e bir fonksiyon argümanı gibi aktarılır.
- Sadece tek yönlü aktarılır. (Parent'tan child'a)
- Props immutable'dır yani değiştirilemezler yalnızca okunurlar.



## Component'lerin Farklı İsimlendirilmeleri

Component'lerden bahsederken React'te temel olarak 2 component (class ve functional) yapısı olduğundan bahsetmiştik. Class ve functional component'ler bu isimlerden hariç yerine göre farklı isimler de alabiliyorlar. Class component'ler, functional component'lere ilave olarak state kontrol edebildikleri için stateful ya da container component'ler olarak da isimlendirilirler. Functional component'ler ise state üzerinde herhangi bir manipülasyon yapmadan, yalnızca props alarak DOM'a bir şeyler render etme görevi üstlendikleri için stateless, dumb ya da presentational component isimlerini alırlar.  





## Kaynaklar

- https://css-tricks.com/understanding-react-setstate/

- https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0

- https://medium.com/kodcular/reactjs-state-nedir-class-componentlerinde-nas%C4%B1l-kullan%C4%B1l%C4%B1r-68694a9e0173

- https://linguinecode.com/post/master-react-state-and-props

- https://www.w3schools.com/react/react_state.asp


