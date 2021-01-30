# Component'ler

**Not:** Bu yazıda component, element, class, functional, props, state gibi terimler React ekosistemindeki anahtar sözcükler oldukları için çeviri yapılmamıştır. 

Component'ler bir kullanıcı arayüzü (UI - User Interface) oluştururken kullanılan birbirinden bağımsız, izole ve **tekrar kullanılabilir** parçalardır. Yani bir arayüz ekranını düşündüğümüzde, bu ekranı oluşturan yapı taşlarına birer component diyebiliriz. Component'lerin de kendi içlerinde ne kadar ufak parçalara bölünebileceği yani sub-componentlere sahip olabileceği tamamen tasarım ilkelerine bağlı bir durumdur. Bu şekilde hem kolay organize edilebilir hem de data ve state (ilerleyen bölümlerde değineceğiz) değişimlerinde mantıksal bir akış oluşturmaya olanak sağlayan bir yapı elde edilmiş olur. 

**Not:** Bu noktada component hiyerarşisinin daha iyi anlaşılabilmesi için React dökümantasyonunda yer verilen [React'te düşünmek](https://tr.reactjs.org/docs/thinking-in-react.html) konu başlığındaki Adım 1'e göz atabilirsiniz.

## Functional ve Class Component'ler

React'te temel olarak 2 tip component yapısı var. Bunlardan ilki ve component oluşturmanın en basit yolu olan JavaScript fonksiyonlarıdır. Adından da anlaşılacağı üzere bu component'ler **functional component** olarak geçer. Diğer yöntem ise fonksiyon yerine bir ES6 class'ı kullanarak component oluşturmaktır. Bu component'lere ise class component'ler denir.

**Not:** ECMAScript 2015 (ES6) ile tanıtılan JavaScript class'ları, aslında halihazırdaki prototype temelli kalıtımın, sözdizim (syntax) olarak daha kolaylaştırılmış halidir. Class sözdizimi yeni bir nesne tabanlı Javascript modeli sunmamaktadır. 

## 1. Functional Component'ler

JavaScript fonksiyonu yazarak oluşturulan component tipleridir. Bu tip componentler yalnızca girdi (input) olarak "**props**" alırlar ve JSX return ederler. Functional component'ler state objesi tutmazlar. 

**Not:** Functional component'lerin state tutamama durumu React 16.8 ile birlikte gelen React Hook'lar ile değişti. İlerleyen konularda buna değineceğiz ancak şimdilik bu şekilde devam edelim. 

**React Props:** Propslar, React component'lerine aktarılan argümanlardır. Component'ler hakkında data tutarlar. Birer HTML attribute'u gibi aktarılırlar. 

**React State:** State bir built-in React objesidir ve component hakkında data tutar. State objesindeki değişimler yeniden render'a (re-render) sebep olur. 

**Not:** Props ve state kavramlarını sonraki bölümlerde daha detaylı inceleyeceğiz. 

Girdi olarak props alan ve bir react element'i (JSX) döndüren basit bir functional component örneği:

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```



## 2. Class Component'ler

Class component'ler ES6 ile gelen "class" anahtar sözcüğüyle oluşturulan componentlerdir. Class component'ler functional component'lere benzerler ancak ilave olarak onları daha kompleks yapılar haline getirecek özelliklere sahiptirler. Class componentler state tutabilirler yani bir logic implement ederler (mantıksal bir akış vardır) ve lifecycle metotları kullanabilirler.

Class component'ler React.Component'ten miras alırlar yani var olan bir class'ı türetirler. ([Kalıtım - Inheritance](https://tr.reactjs.org/docs/composition-vs-inheritance.html#so-what-about-inheritance))

```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

Hem functional component ile hem de class component yapısıyla yazdığımız bu iki component React'in bakış açısından birbirine eşittir.

## Bir Component'in Render Edilmesi

JSX konu başlığı altında React element olarak yalnızca DOM elementlerini ele almıştık.  

```javascript
const element = <div />;
```

Ancak elementler, kullanıcı tanımlı component'ler de olabilirler:

```javascript
const element = <Welcome name="Sinan" />;
```

React, kullanıcı tanımlı bir component gördüğü zaman, JSX özelliklerini ve alt elemanlarını (HTML'den tanıdık olduğumuz attribute/property olarak düşünebiliriz) bu componente tek bir obje olarak aktarır. Bu objeye “**props**” adı verilir.

Örneğin aşağıdaki kod, sayfada “Merhaba, Sinan” mesajını görüntüler:

```javascript
function Welcome(props) {  
  return <h1>Merhaba, {props.name}</h1>;
}

const element = <Welcome name="Sinan" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Burada Welcome isimli bir component oluşturuyoruz. Bu component props adıyla bütün attribute'ları tutan bir obje alıyor ve `<h1>` etiketli bir DOM elemeneti return ediyor. `<Welcome name="Sinan" />` içerisinde kullandığımız bütün attribute'lara props üzerinden ulaşabiliriz. Böylelikle Welcome component'i içerisinde props.name diyerek name adındaki attribute ile gelen değeri render edebiliyoruz.

Adım adım bakalım: 

1. `<Welcome name="Sinan" />`elementi ile birlikte `ReactDOM.render()` fonksiyonunu çağırıyoruz.
2. Devamında React, `{name: 'Sinan'}` prop’u ile `Welcome` componentini çağırıyor. 
3. `Welcome` component'imiz, sonuç olarak geriye bir `<h1>Merhaba, Sinan</h1>` elementi return ediyor. Burada *props* argümanının bir obje olduğunu unutmayalım. "Sinan" string'ine, Welcome component'i içinde `props.name` olarak erişiyoruz.
4. React DOM, `<h1>Merhaba, Sinan</h1>` ile eşleşmek için, DOM’u arka planda efektif bir şekilde güncelliyor.

**Not:** React, kullanıcı tanımlı component'lerin büyük harfle başlamasını tavsiye ediyor. Bu yüzden `Welcome` component ismi ilk harf büyük olarak tanımlanmıştır. Daha detaylı bilgi için React dökümantasyonundaki [ilgili başlığa](https://tr.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized) bakabilirsiniz.

## Component'lerden Kompozisyon Oluşturulması (Composing Components)

Component'ler, çıktılarında diğer component'leri gösterebilir. Bu sayede aynı component'in farklı durumlarda tekrar kullanılması mümkün hale gelir. DOM elementlerini düşündüğümüzde butonlar, formlar, diyaloglar React uygulamalarında yeniden kullanılabilir component'ler olarak ifade edilebilirler.

**Örnek** olarak yukarıda oluşturduğumuz `Welcome` component'ini birden fazla kullanan `App` adında bir component olsun. Bu durumda `App` bir parent (container) component, `Welcome` ise child component olur.

```javascript
function Welcome(props) {
  return <h1>Merhaba, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sinan" />
      <Welcome name="Tolga" />
      <Welcome name="Ozan" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Burada name attribute farklı değerler alarak `Welcome` component'inin birden fazla kullanımına olanak sağladığını görüyoruz. 

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/ZEpEMPg)

## Component'lerin Çıkarılması (Extracting) - Parçalanması

Büyük componentleri daha sade ve yönetilebilir olması için daha küçük componentlere bölebiliriz. 

```javascript
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/QWKWVPz)

Burada `Comment` adında bir component görüyoruz ve bu component props objesi alıyor. *props* objesi içerisinde `author` adlı bir obje, `text` adında bir string ve `date` adında tarih formatı tutuyor.  Bu component'in bir sosyal medya sitesinde yorum kutucuğunun görüntülenmesini sağladığını düşünelim.

Görüldüğü üzere bu component üzerinde değişiklik yapılması zor sayılabilecek iç içe bir yapıda. Bundan daha önemlisi içerisinde bulundurduğu DOM elementlerinin tekrar kullanılabilirliği yok. Örneğin profil detay sayfasında avatar ve yazar adını göstermek istediğimizde bu component içerisinde kullandığımız kod parçalarını tekrar etmek zorundayız. Bunun yerine `Avatar` adlı bir component oluşturabilir ve bu component'i istediğimiz her yerde tekrar tekrar kullanabilir hale getirebiliriz.

### Avatar Component'ini Çıkaralım

```javascript
function Avatar(props) {
  return (
    <img 
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
```

`Avatar` componentinin `Comment` componenti içerisinde render edildiğini bilmesine gerek yok. Bu componenti farklı yerlerde kullanacağımız için yukarıda olduğu gibi `props.author` yerine daha genel bir isim olan `props.user` diyoruz. 

**Not:** Prop'ları isimlendirirken ilgili component'in hangi component içerisinde kullanıldığını ele almak yerine bağımsız düşünerek genel isimlendirmeler yapmalıyız.

**Not:** Yeni bir component oluştururken bunu var olan JavaScript dosyasında değil de ayrı bir dosya açarak yapmak önerilmektedir. Bu şekilde modüler bir mimariye ulaşmak mümkün hale gelir. 

Bu değişiklikle birlikte `Comment` component'inin son hali şu şekilde olmalıdır:

```javascript
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```

### UserInfo Component'i

Şimdi `Avatar` component'ini de içerisinde barındıracak şekilde kullanıcı adıyla birlikte render edecek bir bileşen oluşturalım.

```javascript
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
```

`Comment` component'inin son hali:

```javascript
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
```



`Avatar` ve `UserInfo` component'lerinin çıkarılmasından sonra: [CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/xxExyOR)

**Not:** CodePen üzerinde bütün component'ler aynı dosya içerisinde oluşturulmuştur ancak yukarıda bahsettiğimiz üzere her bir component'in ayrı bir dosyada tutulması tavsiye edilmektedir. Yani oluşturulan bu component'ler Avatar.js ve UserInfo.js adlı iki farklı dosyada yer alacaktır.

Component'lerin çıkarılması en başta angarya bir işlem gibi görünebilir. Fakat büyük çaplı uygulamalarda, tekrar kullanılabilir component'ler içeren bir **component paletine** sahip olmak oldukça faydalı hale gelecektir. Component çıkarmanın genel mantığı aşağıdaki gibidir:

- Eğer kullanıcı arayüzündeki (UI) bir eleman (`Button`, `Panel`, `Avatar`) uygulama içerisinde birçok defa kullanılıyorsa,
- Eğer bir component (`App`, `FeedStory`, `Comment`) oldukça karmaşık hale geldiyse,

Bu component, bölünerek içerisinden daha küçük component'ler çıkarmak için iyi bir adaydır diyebiliriz. 



## Kaynaklar

- https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Classes
- https://tr.reactjs.org/docs/components-and-props.html
- https://www.reactenlightenment.com/basic-react-components/6.1.html

- https://medium.com/wesionary-team/types-of-react-components-you-should-know-251cceacd8ac




