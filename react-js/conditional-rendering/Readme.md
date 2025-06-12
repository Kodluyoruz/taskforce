# Bir Koşula Göre Render Etme

Arayüzde belirli bazı koşullara göre farklı element'ler veya component'ler render etme ihtiyacı duyarız. Bazen de belirli component ya da element'leri gizlemek isteriz. Koşullu render etmeye örnek verilebilecek bazı senaryolar şunlar olabilir:

- Bir element'in gizlenip saklanmak istenmesi
- Bir işlevi toggle etme (Açılıp kapanır hale getirme)
- Authetication ve authorization (Doğrulama ve yetkilendirme)

Koşula göre farklı component'ler ve element'ler render etmenin birden fazla yolu var.

## 1. If...else Koşul İfadeleri 

Bir boolean değere göre belirli bir component'in render edilmesini bir örnekle inceleyelim.

Kullanıcının giriş yapıp yapmaması durumuna göre render edilecek 2 tane component'imiz var.

```javascript
function UserGreeting(props) {
  return <h1>Hoş geldiniz!</h1>;
}

function GuestGreeting(props) {
  return <h1>Lütfen kayıt olun</h1>;
}
```

 `Greeting` adlı component içerisinde koşula göre yani boolean değere göre bu 2 component'den birini render edeceğiz.

```javascript
function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

`Greeting` component'ine `isLoggedIn` prop'u aktarılıyor. `Greeting` component'i de aldığı bu prop'a göre `true` ise `UserGreeting`, `false` ise `GuestGreeting` component'i render edilecek.

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/XWjbpoV)

Burada gönderilen `isLoggedIn` adlı prop'u değiştirerek yani `true` yaparak ekrana basılan çıktının nasıl değiştiriğini görebilirsiniz. 

**Not:** Her ne kadar JSX yazarken süslü parantezler içerisinde JavaScript ifadeleri yazabilsek bile if...else koşul ifadeleri **JSX içerisinde çalışmaz.** Bunun sebebi JSX'in bir syntax uzantısı olmasıdır. JSX'in sonuç olarak React.creeateElement() fonksiyonunu çağırmak için bir [syntactic sugar](https://tr.reactjs.org/docs/jsx-in-depth.html) olduğunu unutmayalım.

## 2. Element'leri Tutan Değişkenler

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

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/PoGqpZZ)

## 3. Ternary Operatör 

Ternary operator genellikle if...else ifadesi için kısa bir alternatif olarak kullanılır. Koşulu belirttikten sonra soru işareti konulur, eğer koşul truthy bir değer ise soru işaretinden sonra belirtilen ilk ifade, eğer falsy ise iki noktadan sonraki ifade çalıştırılır.

```javascript
function Greeting(props) {
  return props.isLoggedIn ? <h1>Hoş geldiniz!</h1> : <h1>Lütfen kayıt olun</h1>;
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/rNMVyWK)



## 4. Mantıksal && Operatörü

Bu operatör koşul doğruysa ifade olarak verilen kısmı çalıştırır fakat yanlışsa ifadeyi göz ardı eder. 

**Not:** Koşul falsy bir değer olduktan sonra verilen ifade çalışmayacaktır ancak yine de falsy değer render edilecektir. Örneğin aşağıdaki durumda 0 render edilecektir.

```javascript
function Ornek(props) {
  const count = 0;
  return (
    <div>
      { count && <h1>Count value: {count}</h1> }
    </div>
  );
}
```



## Component'in veya Element'in Render Edilmesini Engellemek 

Eğer component'in veya element'in render edilmesini istemiyorsak yani gizlemek istiyorsak "null" değerini return edebiliriz.

```javascript
function Greeting(props) {
  if(!props.isLoggedIn) {
      return null;
    }
  let greeeting;
  if (props.isLoggedIn) {
    greeting = <h1>Hoş geldiniz!</h1>;
  } else {
    greeting = <h1>Lütfen kayıt olun</h1>;
  }
  return greeting;
}

ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);
```

Bu örnekte `Greeting` component'ine `isLoggedIn` prop'unu göndermiyoruz. Bu durumda `Greeting` component'i direkt olarak `null` return edecektir. Böylece ekrana hiçbir component veya element render edilmeyecektir. 



## Performans 

Bahsettiğimiz üzere bir component'in belirli bir koşula göre render edilmesini kontrol etmenin birçok yolu var. React Virtual DOM sayesinde component ağacında en üstten aşağı doğru tarama yaparak herhangi bir değişiklik olup olmadığını kontrol eder ve gerek varsa ilgili DOM'u günceller. DOM'un güncellenmesi ve virtual DOM'da karşılaştırma yapılırken kullanılan diffing algoritması ilgili daha detaylı bilgiye [React dökümantasyonundan](https://tr.reactjs.org/docs/reconciliation.html) ulaşabilirsiniz. Burada bahsetmek istediğimiz performans konusu bir koşula göre render işlemi yaparken bu işlemin ne kadar maliyetli olması ile alakalı.  

### Birçok if/else ve return ifadesi  

```javascript
render() {
  if(this.state.showHeader) {
    return (
      <div>
        <Header />
        <Photo />
        <Comments />
    	</div>
    )
  }
  return (
    <div>
      <Photo />
      <Comments />
    </div>
  )
}
```

Burada state içerisinde `showHeader` adlı bir boolean değerimiz var. Bu değere göre `Header` component'i render edilecek ya da edilmeyecek. Onun dışında `Photo` ve `Comments` component'leri aynı şekilde kalmakta. Bu render metodu her çalıştığında `showHeader`'in truthy ya da falsy bir değer olduğu kontrol edilecek daha sonra React'ın diffing algoritması sayesinde değişen bir DOM node'u var mı ona bakılacak. Bu şekilde bir render metoduna sahipsek bütün component'ler bir koşula bağlı olmasalar bile yeniden render edilecekler. Yani React tarafından buradaki bütün component ağacı değişmiş gibi davranılacak. 

Bu örneği göz önüne aldığımızda, `Photo` ve `Comments` component'leri her halükarda render edilecekler. Burada bir koşula bağlı olarak render edilecek şey `Header` component'idir. Yani bu 2 component'in bir koşula bağlı olarak render edilmesi performans açısından kayıp anlamına geliyor.

**Not:** Bu örnekte bu 2 component'in her render metodu çağrıldığında yeniden render edilmeleri o kadar maliyetli bir işlem olarak görülmeyebilir. Ancak konu animasyon ve video gibi data açısından daha ağır element'lerin render edilmesine geldiğinde performans konusundaki fark ortaya çıkacaktır.

Yukarıdaki performans açısından problemli render metodumuzun basitleştirilmiş haldeki virtual DOM yapısına bakalım.

![rendering-with-multiple-if](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/conditional-rendering/figures/rendering-with-multiple-if.png)

`showHeader` değişkeninin `true` olarak geldiğini ve component'lerin render edildiğini düşünelim. Sonrasında bir kullanıcı etkileşimi olduğunu ve `showHeader`'ın değiştiğini varsayalım. Yani sadece `Photo` ve `Comments` component'lerimiz rendeer olacak. Bu durumda React, virtual DOM'da diffing algoritması ile karşılaştırma yaptığında bütün component ağacının değiştirilmesi gerektiğini düşünecek çünkü component'lerin pozisyonları değişmiş oldu. 

![multiple-if-second-call](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/conditional-rendering/figures/multiple-if-second-call.png)

`showHeader` `true` olduğunda `Header` component ilk sırada olacak ama `false` olduğu durumda `Photo` `component`'i onun yerini alarak 1. sıraya geçecek. React, karşılaştırma yaptığında bu pozisyonların farklı olduğunu gördüğünde bütün DOM yeniden render edilmiş olacak. 

Sonuç olarak bu render metoduna bakıldığında React'ın optimize etmeye çalıştığı şeyin önüne geçildiğini görüyoruz. Şimdi kod üzerinde biraz değişiklik yapalım.

```javascript
render() {
  return (
    <div>
      {this.state.showHeader && <Header />}
      <Photo />
      <Comments />
    </div>
  )
}
```

Bu sayede `showHeader` `false` olduğunda onun pozisyonunu `null` değer tutacak. Component ağacının basitleştirilmiş haldeki görünümü şu şekilde olacak:

![component-tree-with-null](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/conditional-rendering/figures/component-tree-with-null.png)

Aynı şekilde `showHeader` falsy bir değere döndüğünde yani bir güncelleme olduğunda `null` pozisyon yerine artık `Header` component'i alacak. `Photo` ve `Comments` component'lerinin pozisyonları sabit kaldığı için o tarafta herhangi bir güncelleme yapılma ihtiyacı duyulmayacak.

![with-null-second-call](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/conditional-rendering/figures/with-null-second-call.png)



**Bir diğer yaklaşım olarak değişken kullanılan şu örneği verebiliriz:**

```javascript
render() {
  let header = null;
  if(this.state.showHeader) {
    header = <Header />
  }
  return (
    <div>
      {header}
      <Photo />
      <Comments />
    </div>
  )
}
```

 Bu şekilde birçok if/else ifadesine ihtiyaç duymadan, daha doğru yaklaşımlarla koşul ifadelerine göre render işlemlerini gerçekleştirebiliriz.  





## Kaynaklar

- https://tr.reactjs.org/docs/conditional-rendering.html

- https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications

- https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/

- https://medium.com/@cowi4030/optimizing-conditional-rendering-in-react-3fee6b197a20




