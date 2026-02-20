# Higher Order Component'ler

Higher Order Component'ler (HOC), argüman olarak bir veya daha fazla component alan ve output olarak yeni bir component return eden component'lerdir. Bu component'lerin amacı **yeniden kullanılabilirliği (reusability)** sağlamaktır. Component'lerin doğasında olan yeniden kullanılabilirliği bir üst seviyeye taşır. Genelde HOC'lerin kullanım amacı; ortak bir fonksiyonelliği component'ler arasında paylaşmak, var olan component'lere ek fonksiyonellikler eklemektir. React'teki Higher Order Component'ler, JavaScript'teki **higher order fonksiyon**lardan ilham almıştır. HOC'i daha iyi anlamak için JavaScript'teki higher order fonksiyonları kısaca inceleyelim.

## Higher Order Fonksiyonlar

JavaScript'te higher-order fonksiyonlar, argüman olarak bir (veya daha fazla) fonksiyon alırlar ve başka bir fonksiyon return ederler. Aksiyonlar üzerinde soyutlama ([Abstraction over actions, not just values](https://eloquentjavascript.net/05_higher_order.html)) yapılmasını sağlamaktadır. Basitçe ifade etmek gerekirse argüman olarak gelen fonksiyona bazı ek özellikler katarak daha az ve anlaşılır kod yazılmasını sağlarlar. Sadece bir fonksiyonelliği sağlayan küçük fonksiyonlarlar yazılarak, kompleks bir fonksiyon yazılması gerektiğinde bu küçük fonksiyonlardan faydalanılır. Bu sayede bug oluşumu aza indirgenmiş ve okunması kolay bir kod elde edilmiş olur. İhtiyaca göre higher-order fonksiyonlar oluşturulabileceği gibi JavaScript'te bazı built-in higher-order fonksiyonlar vardır. Bunlara örnek olarak `forEach()`, `map()`, `filter()` ve `reduce()` verilebilir. 

**Not:** JavaScript'te fonksiyonlara tıpkı diğer değişken tipleri gibi (string, object, number) davranılır. Fonksiyonlar parametre olarak gönderilebilir, değişkenlere atanabilir. JavaScript'te fonksiyonların [First-Class Functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function) olarak bilinmesinin nedeni budur.

## Higher Order Component Nedir?

Bir component bir veya daha fazla component'i argüman olarak alır ve yeni bir (upgraded) component return eder. Bu görevi gören component'e higher order component denir. Tıpkı higher order fonksiyonlar gibi çalışırlar. Bir component'e belirli davranış ve özellikleri katmak için kullanılırlar. 

Higher order component'ler:

- Yeni bir component oluştururlar, var olan component'i değiştirmezler (mutation yoktur).
- Pure fonksiyonlardır, herhangi bir side effect'leri yoktur. Yalnızca kendi argümanlarına bağlı olarak yeni bir component return ederler.

### Higher Order Component Yapısı

```javascript

// WrappedComponent'i argüman olarak alır
const higherOrderComponent = (WrappedComponent) => (props) => {
// Başka bir component return eder
  return class HOC extends React.Component {
    render() {
      return <WrappedComponent {...props} />;
    }
  }
};

```

Burada `higherOrderComponent` `WrappedComponent`'i argüman olarak alır ve yeni bir component return eder. Bu kod parçası yalnızca HOC'in yapısını göstermektedir. Burada argüman olarak alınan component üzerinde herhangi bir değişiklik yapılmadı.



## Örnek -1 

Argüman olarak aldığı component içerisindeki props.children'ı tersine çeviren basit bir HOC örneği.  

```javascript
const withReverse = (WrappedComponent) => (props) => {
  return (
    <WrappedComponent {...props}>
      {props.children.split("").reverse().join("")}
    </WrappedComponent>
  );
};
```

```javascript
const Name = (props) => <span>{props.children}</span>;

const App = () => {
  const ReversedName = withReverse(Name);
  return <ReversedName>Merhaba</ReversedName>;
};

ReactDOM.render(<App />, document.getElementById("root"));

```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/BaLZqKZ?editors=1011).

Bu örnekte, Name isimli component yalnızca props.children'ı bir `<span>` etiketi içerisinde göstermekle görevli. Yazmış olduğumuz `withReverse` adlı higher order component'e Name component'ini argüman olarak verdiğimizde, `withReverse` HOC'inden return edilecek ekstra özellikli yeni bir component'e sahip olacağız. Bu component'e `ReversedName` ismini verdik. Sonuç olarak, ReversedName açılış-kapanış etiketleri arasına yazdığımız string ifade tersine çevrilerek render edilecek.

**Not:** Higher order component'lere with ile başlayan isimler verilir. Bu genel bir adlandırma kuralıdır. (naming convention) 



## Örnek -2

```javascript
const App = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);

  const toggleAuth = () => {
    setLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <button onClick={toggleAuth}>
        {isLoggedIn ? "Çıkış Yap" : "Giriş Yap"}
      </button>
      <AuthenticatedMainPage isLoggedIn={isLoggedIn} />
    </div>
  );
};

const withAuthentication = (WrappedComponent) => (props) => {
  if(props.isLoggedIn) {
    return <WrappedComponent {...props} />
  }
  return <p>Lütfen Giriş Yapınız.</p>
}

const MainPage = () => {
  return <h1>Hoşgeldiniz - Anasayfa</h1>
}

const AuthenticatedMainPage = withAuthentication(MainPage);
```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/YzGQRjj?editors=1011).

Bu örnekte authentication kontrolünü sağladığımız `withAuthentication` adlı bir HOC var. Yalnızca giriş yapmış kullanıcılara gösterilecek component'leri (sayfaları) bu HOC ile sarmalayarak doğrulama işlemini yapıyoruz. Bu örnekte `MainPage` component'i yalnızca giriş yapmış olan kullanıcılara gösterileceği için bu component'i `withAuthentication` ile sarmalıyoruz ve `AuthenticatedMainPage` adlı değişkene atayarak ana component'imiz olan `App` component'inde render ediyoruz. `withAutentication` sayesinde state'te tutulan `isLoggedIn` boolean değeri eğer false ise "Lütfen Giriş Yapınız." ifadesi, eğer true ise "Hoşgeldiniz - Anasayfa" ifadesini gösterecek şekilde koşullu render işlemini yapıyoruz. 



## Kaynaklar

- https://tr.reactjs.org/docs/higher-order-components.html

- https://www.smashingmagazine.com/2020/06/higher-order-components-react/

- https://soorajchandran.medium.com/introduction-to-higher-order-components-hoc-in-react-383c9343a3aa

- https://eloquentjavascript.net/05_higher_order.html
