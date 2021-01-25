# Error Boundaries (Hata Sınırları)

JavaScript'te hata yönetimi (error handling) try-catch ile yapılır. Try bloğuyla sarmalanan kodda bir hata veya istisna olması durumunda catch bloğu çalıştırılır ve bu hata yakalanır. 

```javascript
try {
  butonuGöster();
} catch (error) {
  // ...
}
```

Bu **imperative** kod React'te beklenildiği gibi çalışmaz çünkü React component'leri **declarative**'dir. 

```javascript
<Button />
```

## React v16 Öncesi 

Component'lerdeki herhangi bir JavaScript hatası kullanıcı arayüzünün (UI) tamamen bozulmasına yol açmamalıdır. React v15 ve öncesinde bir component içerisindeki JavaScript hatası component'in kendini component ağacından tamamen unmount etmesiyle ve dolayısıyla component ağacındaki sonraki render'larda hatalar dizisi ([emit](https://github.com/facebook/react/issues/4026) [cryptic](https://github.com/facebook/react/issues/6895) [errors)](https://github.com/facebook/react/issues/8579) verilmesine yol açıyordu. Böyle bir durumda kullanıcı tamamen boş bir ekranla karşılaşır. En basit haliyle, kasıtlı olarak hata fırlatılmış bir örneği [buradan](https://codepen.io/Kodluyoruz/pen/eYdGBzr?editors=1111) inceleyebilirsiniz.

```javascript
TypeError: Cannot read property 'getHostNode' of null ?
  at getHostNode(~/react/lib/ReactReconciler.js:64:0)
  at getHostNode(~/react/lib/ReactCompositeComponent.js:383:0) ?
  at getHostNode(~/react/lib/ReactReconciler.js:64:0)
  at getHostNode(~/react/lib/ReactChildReconciler.js:114:0)?
  at updateChildren(~/react/lib/ReactMultiChild.js:215:0)
  at _reconcilerUpdateChildren(~/react/lib/ReactMultiChild.js:314:0)
  at _updateChildren(~/react/lib/ReactMultiChild.js:301:0)
  at updateChildren(~/react/lib/ReactDOMComponent.js:942:0)
  at _updateDOMChildren(~/react/lib/ReactDOMComponent.js:760:0) ?
  at updateComponent(~/react/lib/ReactDOMComponent.js:718:0)
  at receiveComponent(~/react/lib/ReactReconciler.js:126:0)
  at receiveComponent(~/react/lib/ReactCompositeComponent.js:751:0) ?
  at _updateRenderedComponent(~/react/lib/ReactCompositeComponent.js:721:0)
  at _performComponentUpdate(~/react/lib/ReactCompositeComponent.js:642:0)
  at updateComponent(~/react/lib/ReactCompositeComponent.js:544:0)
  at receiveComponent(~/react/lib/ReactReconciler.js:126:0) ?
  at receiveComponent(~/react/lib/ReactCompositeComponent.js:751:0)
  at _updateRenderedComponent(~/react/lib/ReactCompositeComponent.js:721:0)
  at _performComponentUpdate(~/react/lib/ReactCompositeComponent.js:642:0)
```

React v16 öncesinde,  anlaşılması güç olan cryptic hata mesajlarına bir örnek [^1]

## React v16 Sonrası - Error Boundaries

React 16. versiyon ile tanıtılan "**error boundary**" konsepti ile bu duruma çözüm getirildi. Error boundary'ler, JavaScript hatalarını yakalayarak bunları log'layan ve alternatif bir UI gösterilmesini sağlayan component'lerdir. Tam olarak yeni bir component ya da library değildirler. Daha çok hataların ele alınmasını sağlayan bir strateji olarak düşünülebilir. Error boundary'ler aşağıdaki 3 durumda hataları yakalar:

-  render
- lifecycle metodlar
- constructor

Error boundary'ler aşağıdaki durumlar için hata yakalamazlar:

- Event handler
- Asenkron kod (örneğin setTimeout)
- Server side rendering (SSR)
- Error boundary'nin kendi içinde fırlatılan hatalar

**Not:** Error boundary'ler yalnızca kullanıldıkları component'in altındaki component ağacında meydana gelen hataları yakalarlar.

## Error Boundary Component'i Oluşturma

Error boundary bir component, belirli lifecycle metotlara sahip olması gerekir. Bu lifecycle metotların fonksiyon olarak karşılıkları olmadığı için functional bir component'in normal yollarla error boundary olabilmesi mümkün değildir. 

**Not:** `React.memo()` API'ı kullanılarak functional component'lerin error boundary component'ler haline getirilmesi sağlanabilir.    

Bir component'in error boundary olabilmesi için bu 2 metottan en az birine sahip olması gerekir:

- `static getDerivedStateFromError()`: Bu lifecycle metot, bir hata ile karşılaşılması durumunda state'in güncellenebilmesi, yani son bir `render()` için bir şans tanır. Böylece bir hata fırlatıldıktan sonra alternatif UI render edilebilir. 
- `componentDidCatch(error, errorInfo)`: Hata ile ilgili bilgilerin log'lanmasını sağlayan lifecycle metottur. Örneğin [Crashlytics](https://firebase.google.com/products/crashlytics/) gibi bir tool'a hata bilgilerini log'lamak için, side-effect'leri tetikleyen bu lifecycle metot kullanılır. error ve errorInfo olmak üzere 2 tane parametre alır.

```javascript
class MyErrorBoundary extends React.Component {
  state = {
    error: null
  }

  static getDerivedStateFromError(error) {
  // Alternatif UI'ın render edilebilmesi için state güncellenir
  return { error: error };
}

  componentDidCatch(error, info) {
  // Hatayla ilgili bilgiler bir raporlama servisine kaydedilir
  logErrorToMyService(error, info);
}

  render() {
    if (this.state.error) {
      // Oluşturulmuş herhangi bir alternatif UI render edilir
      return <p>Something broke</p>;
    }
    return this.props.children;
  }
};
```



## Örnek

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    // Alternatif UI'ın render edilebilmesi için state güncellenir
    return { error: error.toString() };
  }

  componentDidCatch(error, errorInfo) {
    // Hatayla ilgili bilgiler bir raporlama servisine kaydedilir
    // this.logErrorToMyService();
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Hata Yakalandı!</h2>
          <p>{this.state.error}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const CounterWithError = () => {
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };
  if (counter === 5) {
    // Error verilmesi sağlanır.
    throw new Error("Uygulama hata verdi!");
  }

  return (
    <div>
      <h1>{counter}</h1>
      <hr />
      <button onClick={handleClick}>+</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <CounterWithError />
      </ErrorBoundary>
    </div>
  );
};
```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/WNGZozX?editors=1111).

Burada CounterWithError adlı component içerisinde kasıtlı olarak bir hata fırlatılıyor. Bu hatanın sağlıklı bir şekilde yakalanması ve alternatif bir component (burada basitçe birer `<h2>` ve `<p>` element'i render edildi ) render edilebilmesi için ErrorBoundary component'ini oluşturduk. Hataları yakalayabilmek için CounterWithError component'i ErrorBoundary component'i ile sarmaladık. Bu component  `static getDerivedStateFromError(error)` lifecycle metodu sayesinde bir hata yakalanması durumunda state'i güncelleyerek alternatif component'in kullanıcıya gösterilmesini sağlıyor. 

## Kaynaklar

- https://blog.bitsrc.io/understanding-error-boundaries-in-react-e58f15ae1f38#:~:text=Error%20boundaries%20are%20React%20components,or%20logging%20the%20exact%20error.

- https://www.digitalocean.com/community/tutorials/react-error-boundaries

- https://tr.reactjs.org/docs/error-boundaries.html

- https://medium.com/swlh/understanding-reacts-error-boundaries-c15db8229d97