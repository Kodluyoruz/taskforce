# React Hooks

### React'te class component kullanımındaki problemler?

React'in sunmuş olduğu component model sayesinde, arayüz yapımı için adeta biçilmiş kaftan olduğunu biliyoruz. Peki React’te ve diğer kütüphanelerde yer alan class bazlı component sistemindeki problemler nelerdir?

#### State’li işlerin, class component’leri arasındaki kullanımının zor olması

React, tekrar kullanılabilecek bir fonksiyonun/davranışın, başka bir bileşene bağlanması için bir yöntem sunmuyor. Bunun yerine render props ve high order components (HOC) ile bu probleme bir çözüm sağlanmaya çalışılıyor. Fakat bu geliştirim şablonları kullanıldığında, ilgili component’in tekrar yapılandırılması gerekiyor. Bu durum, yazılımcı için külfetli oluyor ve kodun da okunabilirliğini azaltıyor. Eğer siz de Chrome eklentisi olan [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) ile uygulamanızı incelediyseniz, kendinizi iç içe katmanlardan oluşan wrapper cehenneminde bulmuş olabilirsiniz.


![React-wrapper-cehennemi](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/hooks/figures/React-wrapper-cehennemi.jpg)

Ryu’nun hadouken atmış hali gibi görünen Wrapper yığını debug işlemlerini de güçleştiriyor. Bu problem temelinde, React’ın stateful işlerin aktarılması için daha iyi bir yaklaşım sunması gerektiğine işaret ediyor.

#### Karmaşık class component’lerinin okunabilirliğinin zor olması

React uygulamalarında yazılan basit componentler, zaman içerisinde büyüyerek yönetilemez bir kod yığını ve yan etkilerle dolu bir hale gelir. Her bir component’in lifecycle metodu genellikle kendisi ile ilişkisiz kodlar ile karışmış bir durum alır. 

**Örneğin:** `componentDidMount()` ve `componentDidUpdate()` metodlarında api çağrımı işlemleri gerçekleştirilebiliyor. Ancak aynı `componentDidMount()` metodu ilgili event listener’ların oluşturulması ve `componentDidUpdate()`’de bu listener’ların silinmesi gibi veri ile ilişkisiz işlemleri de içerebilir. Bu durumda birbiriyle ilişkili kodlar birbirinden ayrı metodlara (`didMount()` ve `didUpdate()`’e) konur. Fakat bunun aksine ilişkisiz kodlar (veri çekme ve event listener işlemleri) ise aynı metod içerisinde yer alır hale gelir. Bu durumda beklenmedik hatalar ve tutarsızlıklar oluşabilir.

Stateful işlemler bütün component’te yer aldığı için bu tarz component’leri daha küçük component’lere bölmek de çoğu zaman imkansız hale gelir. Bu nedenle geliştiriciler, ayrı bir state yönetim kütüphanesi (Redux, MobX) kullanımına giderek bu durumu çözmeye çalışırlar. Fakat bu durumda da bileşenler arası soyutlama oldukça artar ve kodu anlamak için dosyalar arasında git-gel yapmayı gerektiren zorlu bir durum oluşur.


![Drake-meme-useEffect](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/hooks/figures/Drake-meme-useEffect.jpg)

Hook’lar sayesinde `componentDidMount()` ve `componentDidUpdate()` yerine `useEffect()` fonksiyonu kullanılır.


Bunu çözmek için hook’lar bir bileşeni birbirleri ile ilişkili daha küçük fonksiyonlara bölmeyi sağlar. Effect hook’ta buna değineceğiz.

#### React’te class kullanımının hem insanlar hem de bilgisayarlar için kafa karıştırıcı olması

React’i öğrenme aşamasında farketmişsinizdir. JavaScript’teki `this` keyword’ünün kullanımı bizim alışkın olduğumuz Java, C# gibi dillere göre farklılık göstermektedir.


![Java-vs-JavaScript-classes](https://raw.githubusercontent.com/Kodluyoruz/taskforce/react/react-js/hooks/figures/Java-vs-JavaScript-classes.jpg)

JavaScript’te class gibi görünen yapılar aslında temelinde prototype ile çalışırlar.

`handleClick` gibi custom olarak oluşturulan event’lerin çalışabilmesi için `this `ile bind etmek gereklidir.

```javascript
constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

```

İlgili component’i, Babel’ın [syntax proposal’ı](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) olmadan yazmak component’in gereksiz bind fonksiyonlarıyla dolup taşmasına neden oluyor. Gelişticiler props, state ve top-down veri akışını oldukça iyi çözümlerken, iş class’a gelince kafada halen soru işaretleri kalmaya devam ediyor. React’te class component’leri ile fonksiyonel component’lerin ayrımının yapılması ve nerede hangi component tipinin kullanılması gerektiği, deneyimli React geliştiricileri arasında bile anlaşmazlıklara yol açıyor. Ayrıca JavaScript’te class kullanımı mevcut geliştirim araçları üzerinde bazı sorunların oluşmasına da yol açıyor. 

**Örneğin:** JavaScript sınıflarının minify edilmesi tam anlamıyla iyi bir şekilde gerçekleştirilemiyor. Bunun yanında class kullanımı, tarayıcı üzerinde hot reloading işlemini kararsız ve güvenilmez hale getiriyor. Bu nedenle kodun optimize bir seyirde ilerleyebilmesi için yeni bir API’ye ihtiyaç var.

Bu gibi problemlerin çözümü için hook’lar, class kullanmaksızın fonksiyonlar yardımıyla React’ın özelliklerinden yararlanmayı sağlar. Component’ler konsept olarak fonksiyonel kullanıma daha olduklarından dolayı, hook’lar sayesinde React’ın pratikliğinden ödün vermeksizin uygulama geliştirilebilir.



## Hooks Nedir?

Hooks özelliği bir herhangi bir class yazmadan fonksiyonlar yardımıyla React’teki state ve lifecycle özelliklerinin kullanılmasını sağlar. Hook’lar class’lar içerisinde çalışmadığı için fonksiyon component’ı içerisinde yer almalıdırlar. React içerisinde halihazırda yer alan temel hook’lar olarak state hook ve effect hook’u örnek verebiliriz.

#### State Hook

Aşağıdaki örnekte bir buton bulunmakta ve butona tıklandığında ekrandaki değer bir arttırılmaktadır:
Dilerseniz aşağıdaki örneğin demosuna [buradan](https://codesandbox.io/s/y0786l97xx) erişebilirsiniz.

```javascript
import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";

function Sayac() {

  // useState hook'u ile "adet" adındaki state değişkeninin 
  // adediAta() fonksiyonuna bağlanması

  const [adet, adediAta] = useState(0);

  return (
    <div>
      <p>{adet} kere tıkladınız.</p>
      <button onClick={() => adediAta(adet + 1)}>Tıkla</button>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Sayac/>, rootElement);
```

`useState()` fonksiyonu aslında bir state hook. Bu hook’u, fonksiyon component’i içerisinde çağırıp içerisine istediğimiz state değişkenlerini atayabiliyoruz. Butona tıklanıp tekrar render edilme esnasında React bu state’i koruyor. `useState` iki değer return ediyor:

1. **Atanan mevcut değer.** Bu mevcut değeri yani `0` değerini alıp adet değişkenine atamış oluyoruz.
2. **Değeri değiştirme fonksiyonu.** Bu fonksiyon ile yani `adediAta()` fonksiyonuyla state’in ilgili değeri değiştirilebilir. Değiştirme fonksiyonu class component’larında kullanılan `this.setState` fonksiyonu gibi çalışır. Tek fark, `this.setState`fonksiyonunda state eski state ile birleştirilir, değiştirme fonksiyonunda ise birleştirme yerine değiştirme (replace) işlemi uygulanır.

`useState`‘in aldığı argüman başlangıç state’ini belirler. Yukarıdaki örnekteki `0` değerini, sayacın ilk başlangıç değeri olan `0`’ın atanması için kullandık. Burada dikkat edecek olursak, `this.state`‘te yapılan obje atamalarına ek olarak state’e herhangi bir primitive değer ataması da gerçekleştirebiliyoruz.

##### Çoklu state değişkenlerinin tanımlanması

Tek bir component içerisinde birden fazla State Hook kullanılabilir:

```javascript
function CokluStateOrnegi() {
  // Birden fazla state değişkeninin atanması
  const [yas, yasAta] = useState(42);
  const [meyve, meyveAta] = useState('muz');
  const [blog, blogAta] = useState([{ baslik: 'Hooks nedir?' }]);
  // ...
}
```

**Not:** Köşeli parantezlerle kullanılan atama işlemine [array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) adı verilir ve bu sayede useState fonsiyonundan dönen array’in değerleri, köşeli parantez içerisinde yer alan değişkenlere atanır.

#### Effect Hook

React ile geliştirim yaptıysanız; sunucudan veri çekme, event abonelikleri, ve DOM’un manuel olarak değiştirilmesi gibi işlemleri gerçekleştirmiş olabilirsiniz. Bu tarz işlemlere [side effects](https://en.wikipedia.org/wiki/Side_effect_(computer_science)#:~:text=In%20computer%20science%2C%20an%20operation,the%20invoker%20of%20the%20operation.) (yan etkili) işlemler adı verilir. Çünkü bu tarz yan etkiye sahip işlemler rendering esnasında tamamlanıp bitmezler ve diğer component’lere etki edebilirler.

`useEffect` fonksiyonu olarak tanımlanan Effect Hook, herhangi bir fonksiyon component’ine bu tarz yan etkili işlemleri yapabilme yeteneği kazandırır. React class’larındaki `componentDidMount`, `componentDidUpdate`, ve `componentWillUnmount` metodları ile aynı görevi yürütür ve bu metodları tek bir fonksiyon çatısı altında gerçekleştirir.

Aşağıdaki örnek component’te React’ın ilgili DOM’u güncelledikten sonra document title’ın değiştirilmesi sağlanır: Dilerseniz aşağıdaki örneğin demosuna [buradan](https://codesandbox.io/s/3v8961v921) erişebilirsiniz.

```javascript
import { useState, useEffect } from 'react';
import React from "react";
import ReactDOM from "react-dom";

function EffectHookOrnegi() {
  const [adet, adediAta] = useState(0);

  // componentDidMount ve componentDidUpdate'e benzer:
  useEffect(() => {
    // Browser API kullanılarak title'ın değiştirilmesi
    document.title = `${adet} kere tıkladınız.`;
  });

  return (
    <div>
      <p>{adet} kere tıkladınız</p>
      <button onClick={() => adediAta(adet + 1)}>
        Tıkla
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<EffectHookOrnegi />, rootElement);
```

`useEffect` fonksiyonunu çağırdığınızda React’e “DOM ile ilgili işlemleri tamamladıktan sonra bu fonksiyonu çalıştır.” demiş oluyorsunuz. Effect’ler component içerisinde oluşturulur. Bu sayede component’in state’ine ve props özelliklerine erişim sağlayabilirler. React varsayılan olarak ilk render da dahil olmak üzere her render işleminden sonra effect fonksiyonunu çalıştırır.

Ayrıca Effect’ler, bir fonksiyon return ederek ilgili işlemin temizlenmesini sağlayabilirler. Aşağıdaki örnekteki component, effect kullanarak arkadaşın online durumuna abone olabiliyor, ve abonelikten çıkarak işlemi temizleyebiliyor:

```javascript
import { useState, useEffect } from 'react';

function ArkadasDurumu(props) {
  const [onlineMi, onlineDurumuAta] = useState(null);

  function handleDurumuDegistir(durum) {
    onlineDurumuAta(durum.onlineMi);
  }

  useEffect(() => {
    ChatAPI.arkadasDurumunaAboneOl(props.arkadas.id, handleDurumuDegistir);

    return () => {
      ChatAPI.arkadasDurumuAboneligindenCik(props.arkadas.id, handleDurumuDegistir);
    };
  });

  if (onlineMi === null) {
    return 'Yükleniyor...';
  }
  return onlineMi ? 'Online' : 'Offline';
}
```

Bu örnekte, component *unmount* olduğu anda React, ChatAPI aboneliğinden çıkmış olacaktır. Ayrıca her render işleminden sonra effect metodu çalışacağı için, herhangi bir render işlemi gerçekleşirse yine abonelikten çıkma işlemini gerçekleştirecektir. Bunu engellemek için, sadece `props.arkadas.id` özelliği değiştiği durumda abonelikten çıkmayı sağlayacak şekilde `useEffect` metodu değiştirilebilir:

```javascript
useEffect(() => {
  ChatAPI.arkadasDurumunaAboneOl(props.arkadas.id, handleDurumuDegistir);
  return () => {
    ChatAPI.arkadasDurumuAboneligindenCik(props.arkadas.id, handleDurumuDegistir);
  };
}, [props.arkadas.id]); // props.arkadas.id değiştiğinde abonelikten çıkma gerçekleşecek
```

`useState`‘te olduğu gibi bir component içerisinde birden fazla effect kullanılabilir:

```javascript
function ArkadasDurumuVeSayac(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${adet} kere tıkladınız.`;
  });

  const [onlineMi, onlineDurumuAta] = useState(null);
  useEffect(() => {
    ChatAPI.arkadasDurumunaAboneOl(props.arkadas.id, handleDurumuDegistir);
    return () => {
      ChatAPI.arkadasDurumuAboneligindenCik(props.arkadas.id, handleDurumuDegistir);
    };
  }, [props.arkadas.id]);

  function handleDurumuDegistir(durum) {
    onlineDurumuAta(durum.onlineMi);
  }
  // ...

```

Effect Hook’ları sayesinde, yan etkiye sahip işlemler (aboneliğe girme/çıkma işlemleri) class’taki ayrık lifecycle metodların aksine, ilişkili effect fonksiyonlarında organize edilirler. Bu sayede ilgili birimlerin yönetimi kolaylaşır.

### Hook kullanımında dikkat edilmesi gereken hususlar

Hook’lar temelinde JavaScript fonksiyonudurlar. Fakat state ve lifecycle ile ilgili kısımlara da müdahale edebildikleri için aşağıdaki iki husus göz önüne alınarak kullanılmalıdır:

1. Hook’lar component’in **top-level** kısmından çağrılmalıdırlar. Yani döngüler, if cümlecikleri veya iç içe fonksiyonlar içerisinde kullanılmamalıdırlar.
2. Hook’lar React’ın **fonksiyonel component**‘leri içerisinden çağrılmalıdırlar. Sıradan herhangi bir fonksiyon içerisinden çağrılmamalıdırlar.

## Kendi hook’unuzu tasarlayın

React class component’lerinde componentler arası mantıksal işlemlerin alışverişi, high order components (HOC) ve render props ile sağlanıyor. Fakat daha önce de anlattığımız gibi bu iki yöntemin dezavantajları bulunuyor. Bunun yerine özel hook tasarlayarak, render ağacına daha fazla component eklemeden çözüm üretebiliriz.

Önceki örnekteki `ArkadasDurumu` component’inde `useState` ve `useEffect` hook’larını kullanılarak arkadaşın online durum bilgisine abone olunabildiğini göstermiştik. Şimdi bu abonelik mantığını başka bir component’te tekrar kullanacağımızı düşünelim.

Öncelikle abonelik mantığını çıkarıp, `useArkadasDurumu` adında özel bir hook oluşturup içine ekleyelim.

```javascript
import { useState, useEffect } from 'react';

function useArkadasDurumu(arkadasId) {
  const [onlineMi, onlineDurumuAta] = useState(null);

  function handleDurumuDegistir(durum) {
    onlineDurumuAta(durum.onlineMi);
  }

  useEffect(() => {
    ChatAPI.arkadasDurumunaAboneOl(arkadasId, handleDurumuDegistir);

    return () => {
      ChatAPI.arkadasDurumuAboneligindenCik(arkadasId, handleDurumuDegistir);
    };
  });

  return onlineMi;
}
```

`useArkadasDurumu` hook’una `arkadasId`‘yi parametre olarak ekledik ve online olma durumunun (`onlineMi`) return edilmesini sağladık.

Artık özel hook’umuzu diğer component’lerde kullanabiliriz:

```javascript
function ArkadasDurumu(props) {
  const onlineMi = useArkadasDurumu(props.arkadas.id);

  if (onlineMi === null) {
    return 'Yükleniyor...';
  }
  return onlineMi ? 'Online' : 'Offline';
}
```

 

```javascript
function ArkadasListItem(props) {
  const onlineMi = useArkadasDurumu(props.arkadas.id);

  return (
    <li style={{ color: onlineMi ? 'yesil' : 'gri' }}>
      {props.arkadas.adi}
    </li>
  );
}
```

Bu component’lerin state’leri tamamen birbirinden ayrı halde bulunuyor. Hook’lar state’in kendisin aktarılması yerine, state ile ilişkili mantıksal işlemin tekrar kullanılabilmesine olanak sağlıyor. Oluşturduğumuz hook’a yapılan her çağrı tamamen izole bir state’te tutulduğu için, tek bir component içerisinde bile iki defa aynı hook çağrılabilir.

Custom hook’lar bir özellikten ziyade, anlaşma deseni sunarlar. Eğer bir fonksiyon “`use`” ile başlıyorsa ve diğer hook metodları çağırıyorsa, o fonksiyona custom hook diyebiliriz. `use`‘lu isimlendirme deseni sayesinde "linter eklentisi" hataların tespit edilmesini sağlamış olur.

Form işleme, animasyon, deklaratif abonelik işlemleri, setInterval gibi zamanlayıcılar ve diğer birçok işlem için özel hook’lar oluşturulabilir.

### React’te tanımlı diğer hook’lar

React’te tanımlı olarak gelen ama daha az kullanılan hook’lar da mevcuttur. Bunlardan biri de `useContext` olup React context’ine abone olmayı sağlar.

```javascript
function Example() {
  const locale = useContext(LocaleContext);
  const theme = useContext(ThemeContext);
  // ...
} 
```

Bir diğer hook ise `useReducer` olup, karmaşık component’lerin state’inin reducer ile yönetilmesini sağlar:

```javascript
function Todos() {
  const [todos, dispatch] = useReducer(todosReducer);
  // ...
```

