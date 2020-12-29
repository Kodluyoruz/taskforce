# Örnek

Eğer konuyu anlatmak isterseniz bu kısımda markdown kullanarak: kod örnekleri ve görsellerle birlikte açıklayabilirsiniz.



Örnek olması için oluşturulan içeriklere [buradan](https://github.com/Kodluyoruz/taskforce/tree/react/frontend-developer-roadmap-102a-(frameworks-react)) bakabilirsiniz.



Resim eklemek isterseniz `figures` isimli bir klasör oluşturup içerisine resimleri yükleyebilirsiniz.

![JavaScript Logo](figures/javascript-logo.png)



## Alıştırmalar

Örnek her bir alıştırmayı `h3`şeklinde ekleyin.

### Element'leri Tutan Değişkenler

Değişkenlere element atayabiliyoruz. Bu sayede koşula göre değişkene istenilen element'i atarız ve JSX içinde bu değişken'i render ederiz.

```javascript
function Greeting(props) {
  let greeeting;
  if (props.isLoggedIn) {
    greeting = <h1>Hoş geldiniz!</h1>;
  } else {
    greeting = <h1>Lütfen kayıt olun</h1>;
  }
  return greeting;
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

[Codepe'de deneyin](https://codepen.io/Kodluyoruz/pen/PoGqpZZ)

## Sorular

* [Soru 1 gövdesi. Buraya sorunuzu yazabilirsiniz.]
  * Şık 1
  * Şık 2 (Doğru)
  * Şık 3
  * Şık 4
* [Soru 2 gövdesi. Buraya sorunuzu yazabilirsiniz.]
  * Şık 1
  * Şık 2
  * Şık 3
  * Şık 4 (Doğru)
