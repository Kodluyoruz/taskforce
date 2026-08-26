## Render Props

React’te render props kullanmak, kodu verimli bir şekilde yeniden kullanmak için bir tekniktir bu yöntem ile component'ler arasında kod paylaşımı yapmış oluruz. React’in kendi dökümantasyonuna göre “render prop’lu bir bileşen, prop olarak bir React elemanı döndüren bir fonksiyon alır ve kendi render mantığını yürütmek yerine bu fonksiyonu çağırır.” Bunu daha net anlamak için gelin biraz ayrıntılarıyla inceleyelim. 



```Javascript
<DataProvider render={ data => (<h1> Hello! {data.target} </h1> )} />
```
## Render Props Pattern 

Render fonksiyonu ile çalışırken React element'i döndüren bir component'e render fonksiyonu iletirsiniz. Bu render işlevi başka bir component tarafından tanımlanır ve alıcı component, render işlevi araçılığıyla iletileni paylaşır. Böylelikle component prop olarak gelen değer sayesinde neyi render edeceğini öğrenmiş olur.


##### Örneğin:  
```Javascript
class BaseComponent extends Component {  
  render() { 
    return <Fragment>{this.props.render()} </Fragment> 
  }  
};
```

Uygulamamızın kendisinin en üstte bir hediye kutusu olduğunu hayal edin. Kutu, oluşturduğumuz component ise ve onu açarsak, render() tarafından çağrıldıktan sonra bileşenin çalışması için gereken props, state, fonksiyon ve metotları ortaya çıkaracağız. 


![render-props](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/render-props/figures/render-props.jpeg)

### Örnek: Basit Sayaç Yapımı

Burada gösterilen basit sayaç örneğinde `count` değeri, `increment` ve `decrement` fonksiyonları ile arttırılıyor ve azaltılıyor. Başlangıç değerimizi `count:0` olarak tanımladık. 

### 1. Kapsayıcı Component ( Wrapper )

İlk olarak count adlı değişkenin başlangıç değerini, kullanılacak fonksiyonları ve kapsayıcı component'imizi tanımlayarak başlayalım.

```Javascript
class Wrapper extends Component {
  state = {
    count: 0
  };

  // Sayıyı arttır
  increment = () => {
    const { count } = this.state;
    return this.setState({ count: count + 1 });
  };

  // Sayıyı azalt
  decrement = () => {
    const { count } = this.state;
    return this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        {this.props.render({
          increment: this.increment,
          decrement: this.decrement,
          count: count
        })}
      </div>
    );
  }
}
```
Kapsayıcı bileşende kullancağımız fonksiyonlar ve etkilenecek olan state değerini belirleriz. Bu örnek için incelememiz gerekirse, sayıyı artırmak için kullanacağımız inrement ve azaltmak için kullanacağımız decrement metotlarını tanımladık. Tabii ki bu metotların etki edeceği değerimiz olan count'ın başlangıç değerini 0 olarak tanımladık. Butonlara tıklanarak kazanılan aksiyonlar state değerimizi artıracak ya da azalltacak.
Burada return() metodunun bulunduğu kısma bakacak olursak this.render.props() kullandığımızı göreceksiniz. Bu yöntem ile kapsayıcı component'imiz olan Wrapper component'inden tanımlamış olduğumuz fonksiyon ve state öğelerini iletiyoruz. Böylece Wrapper component'i tarafından kapsanan her component, Wrapper component'imizin sağladığı değer ve metotlara erişebilir. 

### 2. App

Şimdi bu kapsayıcımızı App component'imiz içerisinde kullanalım.

```Javascript
class App extends React.Component {
  render() {
    return (
      <Wrapper
        render={({ increment, decrement, count }) => (
          <div>
            <div>
              <h3>Render Props Counter</h3>
            </div>
            <div>
              <p>{count}</p>
              <button onClick={() => increment()}>Increment</button>
              <button onClick={() => decrement()}>Decrement</button>
            </div>
          </div>
        )}
      />
    );
  }
}
```
Yukarıda da gördüğünüz gibi en dışta kalan Wrapper component'imiz render metodu içerisinde daha önceden tanımladığımız increment, decrement ve count parametrelerini alarak, butonlara verilen onClick fonksiyonu ile tanımladığımız metodları kullanabilmemize olanak sağlıyor. Aynı zamanda tanımladığımız count değerine de erişebiliyoruz. Burada children prop children function olarak kullanılmış oluyor.

***_Hazırladığımız uygulamanın son hali aşağıdaki gibidir_***


```JavaScript
class Wrapper extends React.Component {
  state = {
    count: 0
  };

  // Increase count
  increment = () => {
    const { count } = this.state;
    return this.setState({ count: count + 1 });
  };

  // Decrease count
  decrement = () => {
    const { count } = this.state;
    return this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        {this.props.render({
          increment: this.increment,
          decrement: this.decrement,
          count: count
        })}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Wrapper
        render={({ increment, decrement, count }) => (
          <div>
            <div>
              <h3>Render Props Counter</h3>
            </div>
            <div>
              <p>{count}</p>
              <button onClick={() => increment()}>Increment</button>
              <button onClick={() => decrement()}>Decrement</button>
            </div>
          </div>
        )}
      />
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
```

[CodePen'de deneyin.](https://codepen.io/Kodluyoruz/pen/WNGWdKJ)



## Kaynaklar

- https://reactjs.org/docs/render-props.html
- https://css-tricks.com/understanding-react-render-props-and-hoc/