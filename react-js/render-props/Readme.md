## ReactJS - Render Props

React’te render props kullanmak, kodu verimli bir şekilde yeniden kullanmak için bir tekniktir bu yöntem ile componentler arasında kod paylaşımı yapmış oluruz. React’in kendi dökümantasyonuna göre “ render prop’lu bir bileşen, prop olarak bir React elemanı döndüren bir fonksiyon alır ve kendi render mantığını yürütmek yerine bu fonksiyonu çağırır.” Bunu daha net alamk için gelin biraz arıntılarıyla inceleyelim. 



```Javascript
<DataProvider render={ data => (<h1> Hello! {data.target} </h1> )} />
```
## The Render Props Pattern 

Render fonksiyonu ile çalışırken React öğesi döndüren bir bileşene render fonksiyonu iletirsiniz. Bu render işlevi başka bir bileşen tarafından tanımlanır ve alıcı bileşen, render işlevi araçılığıyla iletileni paylaşır. Böylelikle component prop olarak gelen değer sayesinde neyi render edeceğini öğrenmiş olur.


##### Örneğin:  
```Javascript
class BaseComponent extends Component {  
    render() { 
        return <Fragment>{this.props.render()} </Fragment> 
    }  
};
```

Uygulamamızın kendisinin en üstte olduğu bir hediye kutusu olduğunu hayal edin. Kutu, oluşturduğumuz bileşense ve onu açarsak, render () tarafından çağrıldıktan sonra bileşenin çalışması için gereken props, state, functions ve methods ları ortaya çıkaracağız. 


![Box](https://i2.wp.com/css-tricks.com/wp-content/uploads/2018/11/render-props-01.jpg?resize=768%2C384&ssl=1)

### Örnek: Basit Sayaç Yapımı

Burada gösterilen basit sayaç örneğinde `count` değeri, `increment` ve `decrement` fonksiyonları ile arttırılıyor ve azaltılıyor. Başlangıç değerimizi `count:0` olarak tanımladık. 


1.Kapsayıcı Component ( Wrapper )

İlk olarak count adlı değişkenin başlangıç değerini, kullanılacak fonksiyonları ve kapsayıcı bileşenimizi tanımlayarak başlayalım.



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
Kapsayıcı bileşende kullancağımız fonksiyonlar ve etkilenecek olan state değerini belirleriz. Bu örnek için incelememiz gerekirse sayıyı artırmak için kullanacağımız inreament ve azaltmak için kullanacağımız decreament methodlarını tanımladık. Tabi ki bu methodların etki edeceği değerimiz olan count ın başlangıç değerini 0 olarak tanımladık. Butonlara tıklanarak kazanılan aksiyonlar state değerimizi artıracak ya da azalltacak.
Burada return() methodunun bulunduğu kısma bakacak olursak this.render.props() kullandığımızı göreceksiniz. Bu yöntem ile kapsayıcı componentimiz olan Wrapper componentinden tanımlamış olduğumuz function ve state öğelerini iletiyoruz. Böylece Wrapper componenti tarafından kapsanan her component, Wrapper componentimizin sağladığı değer ve methodlara erişebilir. 


2.App

Şimdi bu kapsayıcımızı App componentimiz içerisinde kullanalım.

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
Yukarıda da gördüğünüz gibi en dışta kalan Wrapper componentimiz render methodu içerisinde daha önceden tanımladığımız increment , decrement ve count parametrelerini alarak, butonlara verilen onClick fonksiyonu ile tanımladığımız methodları kullanabilmemize olanak sağlıor. Aynı zamanda tanımladığımız count değerine de erişebiliyoruz. Burada children prop children function olarak kullanılmış oluyor.


***_Hazırladğımız uygulmanın son hali aşağıdaki gibidir_***






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



















