# Component Yaşam Döngüleri (Lifecycle)

**Not:** Daha önceki bölümlerde, React 16.8 versiyonundan önce (React Hook'lar tanıtılmadan önce) yalnızca class component'lerin state objesi tutabildiğinden ve component lifecycle metotlara sahip olabildiğinden bahsetmiştik. React 16.8'den itibaren React Hook'lar tanıtıldı ve böylece artık functional component'ler state objesine ve lifecycle metotlara sahip olabilir hale geldi. Class yerine bir function'dan bahsettiğimiz için bu yazıda bahsedeceğimiz **mounting** ve **unmounting** logic'i yoktur çünkü artık function scope'undan bahsediyoruz. Lifecycle metotların yerini hook denen bazı özel fonksiyonlar almıştır. Bu yazıda React Hook'lar olmadan, yalnızca class component'lerin bu yaşam döngüsü metotlarına sahip olabildiği baz alınarak anlatılacaktır. React Hook'lar ayrı bir bölümde ele alınacaktır.

React'te her component'in bir yaşam döngüsü vardır. Bu yaşam döngüsü, bir component'in 3 ana aşamada görüntülenmesi ve kontrol edilmesi süreci olarak düşünülebilir. Built-in yaşam döngüsü metotları kullanılarak bu yaşam döngüsünde farklı zaman dilimlerine atıf yapılabilir ve component kontrol altına alınır. 3 aşama şunlardır:

1. **Mounting**
2. **Updating**
3. **Unmounting**

## 1. Mounting

Component'in DOM'a eklenmesidir. Bu aşamada React tarafından sunulan 4 tane built-in metot vardır. Bunlar sırasıyla:

1. `constructor()`
2. `static getDerivedStateFromProps(props, state)`
3. `render()`
4. `componentDidMount()`

**render()** metodunun bulunması zorunludur ve her zaman çağrılır. Diğerleri ise isteğe bağlı olarak kullanılabilecek lifecycle metotlardır.

### constructor()
Component'in ilk oluşturulması sırasında çağrılan metottur, dolayısıyla lifecycle metotları arasından ilk sırada çağrılandır. <u>State ve props</u> konusunda bahsettiğimiz üzere, **state objesinin tanımlandığı yerdir.** Argüman olarak props alır ve constructor içerisinde ilk satır olarak super(props) ifadesiyle başlanır. Bu sayede parent class'ın constructor metodu çağrılır.

```javascript
constructor(props) {
    super(props);
    this.state = {favoriteColor: "mavi"};
  }
```

### static getDerivedStateFromProps()

Component oluşturulduktan sonra ve render metodundan hemen önce çağrılır. Yani her yeniden render olma durumunda da çağrılmaktadır. Props'ta gerçekleşen bir değişiklik sonucu component'in state'i güncellemesini sağlamak için kullanılır. Argüman olarak props ve state alır. Bu metot, state'in güncellenmesi için bir nesne return eder. Eğer `null` return ediliyorsa güncelleme gerçekleştirilmemiş olur. Nadiren kullanılan bir lifecycle metottur. Static bir metot olduğu için içerisinde *this* keyword'üne ve başka bir class metoduna erişim yoktur.

```javascript
getDerivedStateFromProps(props, state) {
  return { favoriteColor: props.favCol };
}
```

[React dökümanı](https://tr.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)

### render()

DOM'a HTML çıkarmak için kullanılır. Her component için kullanılması zorunludur.

```javascript
class Example extends React.Component {
  render() {
    return (
      <h1>Example component'i için başlık</h1>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
```

### componentDidMount()

Component DOM'a render edildikten hemen sonra çağrılır. En sık kullanılan lifecycle metotlardan biridir. Herhangi bir DOM manipülasyonu veya API endpoint'ten data fetching işlemi bu metod içerisinde gerçekleştirili. Çünkü component'in DOM'a render edildiğinden emin olduğumuz yer burasıdır.

```javascript
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoriteColor: "mavi"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoriteColor: "kırmızı"})
    }, 1000)
  }
  render() {
    return (
      <h1>Favori rengim: {this.state.favoriteColor}</h1>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/NWRrqEv)

Bu örnekte component ilk oluşturulduğunda state içerisinde `favoriteColor` adlı bir property tanımlıyoruz. Bunu yaparken constructor metodunu kullanıyoruz. Daha sonra render metodu çağrılıyor ve ekrana *My favoritee color is blue* bastırılıyor. Sonrasında render içerisindeki `<h1>` tag'inin DOM'a render olduğundan emin oluyoruz ve **componentDidMount** lifecycle metodu çağrılıyor. Bu metod içerisinde bir `setTimeout` var ve 2 saniye sonra state içerisindeki favoriteColor property'sini "red" olarak güncelliyor. 

## 2. Updating

Component'in güncellenmesi aşamasında `render()` metodu haricinde React tarafından sunulan 4 adet lifecycle metot vardır. Çağrılma sıralarına göre bunlar:

1. `static getDerivedStateFromProps(props, state)`
2. `shouldComponentUpdate(nextProps, nextState)`
3. `render()`
4. `getSnapshotBeforeUpdate(prevProps, prevState)`
5. `componentDidUpdate(prevProps, prevState, snapshot)`

### static getDerivedStateFromProps(props, state)

Metodundan yukarıda **mounting** kısmında component render olmadan önce çağrıldığından bahsetmiştik. Bu metot ayrıca component her re-render olduğunda yani her güncellemede de çağrıldığı için hem **mounting** hem de **updating** aşamalarında bulunur. Burada dikkat edilmesi gereken nokta, bu metot props üzerinde bir değişiklik olmasa bile çağrılmış olabilir. Bunun sebebi parent component'lerden birinin güncellenmiş olması olabilir çünkü parent component'e bağlı olarak child component'lerde yeniden render olacaktır. Bu yüzden bu metodun çağrılması bu şekilde de mümkündür. 

### shouldComponentUpdate(nextProps, nextState)

Metodu bir **boolean** return eder ve bunun sonucuna göre component'in yeniden render olup olmayacağı belirlenir. Varsayılan değeri `true` return edilir. Performans optimizasyonu için kullanılır. Varsayılan olarak React her props ve state değişiminde component'in render olmasını sağlar ancak bazı durumlarda bunun önüne geçilmek isteniyorsa yani bir component'in boşuna render edilmesi engellenmek isteniyorsa bu lifecycle metot kullanılır. 

```javascript
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "mavi" };
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({ favoriteColor: "kırmızı" });
  };
  render() {
    return (
      <div>
        <h1>Favori rengim: {this.state.favoriteColor}</h1>
        <button type="button" onClick={this.changeColor}>
          Rengi Değiştir
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));

```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/MWjewqG?editors=1010)

Bu örnekte buton ile state değişimi olsa da `shouldComponentUpdate` lifecycle metodu kullanılarak component'in render edilmesinin önüne geçiliyor. Örnek üzerinde `shouldComponentUpdate`'in return ettiği değeri `true` yaparak bu durumu değiştirebilirsiniz.

### getSnapshotBeforeUpdate(prevProps, prevState)

Metodu bir component'in güncellenmeden önceki son props ve state değerini yakalamak için kullanılır. Bu metodun kullanılmasına örnek olarak mouse yada scroll pozisyonunun yakalanmak istenmesi verilebilir. Bu metot ya `null` return eder ya da yakalanan değeri return ederek bu değerin otomatik olarak `componentDidUpdate` lifecycle metoduna parametre olarak gönderilmesini sağlar. **Eğer bu metot kullanıldıysa `componentDidUpdate()` metodunun da kullanılması gerekir, aksi takdirde React hata verecektir.**

### componentDidUpdate(prevProps, prevState, snapshot)

Component DOM üzerinde bir güncellemeye uğradığında çalışır. 

```javascript
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "mavi", showMessage: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "kırmızı" });
    }, 2000);
  }

  componentDidUpdate() {
    if (this.state.showMessage != true) {
      this.setState({
        showMessage: true
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Favori rengim: {this.state.favoriteColor}</h1>
        {this.state.showMessage && (
          <h2>
            Renk güncellendi. Artık favori rengim: {this.state.favoriteColor}
          </h2>
        )}
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));

```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/dypXoEP?editors=1010)

Burada component ilk render olduktan sonra state üzerinde favori renk mavi olarak ekrana bastırılıyor. Ardından `componentDidMount` lifecycle metodu çağrılıyor ve 2 saniye sonra state içerisindeki renk property'si kırmızı olarak değişiyor. Bu değişimde `componentDidUpdate` fonksiyonunu tetiklediği için ilk render'da ekrana basılmayan `<h2>` tag'i içerisindeki mesaj ekrana basılıyor. Burada dikkat edilmesi gereken durum `componentDidUpdate` içerisinde bir koşula bağlı `setState` metodunun çağrılması. Eğer bir koşul olmadan state üzerinde değişiklik yapsaydık sonsuz bir döngü içerisine girecekti yani her re-render'da `setState` çağrılacaktı. Bu durumda eğer `showMessage` değeri `true` ise herhangi bir işlem yapmıyoruz böylelikle sonsuz döngüye girmesini engelliyoruz.

## 3. Unmounting

Unmounting, component lifecycle'da son aşama olarak component'in DOM'dan kaldırılmasıdır. Bu aşamada `componentWillUnmount()` adında yalnızca bir adet built-in metot vardır. 

### componentWillUnmount()

Component'in DOM'dan kaldırılması esnasında çağrılır. Genellikle `componentDidMount()` metodunda başlatılan/tanımlanan time interval, network request ya da subscription'ların kaldırılması amacıyla kullanılır. 



## SON

Burada lifecycle metotlarının bahsettiğimiz 3 ana aşamada hangi sıralamayla çağırıldıklarını bir şema üstünde görebilirsiniz.

![lifecycle-metotlar](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/component-lifecycle/figures/lifecycle-metotlar.png)

Şemayı etkileşimli şekilde görmek için [tıklayınız](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/). Ayrıca site üzerindeki kutucuğa tıklayarak daha az kullanılan lifecycle metotlarını da görebilirsiniz.





## Kaynaklar

- https://tr.reactjs.org/docs/react-component.html

- https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html

- https://www.w3schools.com/react/react_lifecycle.asp

- https://medium.com/better-programming/the-react-component-lifecycle-c9302202a69f

- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
