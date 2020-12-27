# React Ref's

Ref'ler, React tarafından sağlanan, DOM elemanlarına ve kendi yarattığınız React elemanlarına ulaşmak için kullanılan bir fonksiyondur. Render edilen objenin referansıdır.
Ref'ler React geliştiricileri için bir imdat çıkışıdır.Çoğu zaman Ref'lerin kullanımından kaçınmak gerekse de, bir componente metot eklerken veya DOM ile işlemler yaparken kullanışlı olabilir.

## Ref'ler Ne Zaman Kullanılmalıdır 

Ref'leri kulllanmak için bir kaç iyi senaryo vardır:

1. Focus olayını, metin seçmeyi veya yeniden ortam oynatmayı yönetmek
2. Animasyonları tetiklemek
3. Üçüncü parti DOM kütüphanelerini entegre etmek
4. Aynı zamanda geri çağırmalarda(callbacks) kullanılabilir


## Ref'ler Ne Zaman Kullanılmamalı

1. Bildirimsel (declarative) olarak halledilebilecek durumlar için ref’leri kullanmaktan kaçının. Örneğin, bir *Dialog* bileşeni için *open()* ve *close()* metodlarını kullanmak yerine, *isOpen* prop’unu *Dialog*‘a atayabilirsiniz.

2. Eğer çok fazla Ref kullandıysanız bu da bir problemdir


## Ref'ler Nasıl Oluşturulur

Ref’ler, React.createRef() kullanılarak oluşturulur ve React elemanlarına ref özelliğini kullanarak eklenir. Ref’ler genellikle bir bileşen oluşturulduğunda, bir nesnenin özelliğine atanır. Böylelikle refler bileşen boyunca referans alınabilir.

```javascript

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();  //Ref'i oluşturma
    }
    render() {
        return <div ref={this.myRef} />;
    }
}

```

## Ref'lere Erişim

Bir ref, render içerisinde bir elemena aktarıldığında, o düğüme bağlı bir referans, ref’in current özelliğinde erişilebilir hale gelir.

```javascript

const node = this.myRef.current;

```

Ref’in değeri, düğüm türüne bağlı olarak değişir.

1. *ref* özelliği bir HTML elemanında kullanıldığında, constructorda *React.createRef()* ile oluşturulan ref, esas DOM elemanını kendisinin *current* özelliği olarak alır.

2. *ref* özelliği özel bir sınıf bileşeninde kullanıldığında, ref nesnesi bileşenin yerleştirilmiş nesnesini *current* olarak alır.

3. Ref özelliğini fonksiyon bileşenleri üzerinde kullanamazsınız, çünkü fonksiyon bileşenlerinin nesneleri(instances) olmaz.

Aşağıda göreceğiniz örnekler bunu daha iyi açıklamaktadır.

## DOM Elemanına Ref Ekleme

Bu kod bir DOM düğümüne referans saklamak için ref kullanır:

```javascript

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // textInput DOM elemanını tutmak için bir ref oluştur
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // DOM API kullanarak direkt text input'a odaklanır
    // Not: DOM düğümüne erişmek için current kullanırız
    this.textInput.current.focus();
  }

  render() {
    // React'a constructor içerisinde oluşturduğumuz 'textInput'u 
    // <input> ref ile ilişkilendirmek istediğimizi belirtiriz
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

```

Bileşen oluşturulduğunda, React `current` özelliğini DOM elemanı ile atayacak ve bileşen çıkarıldığında `null`a atayacak. `ref` güncellemeleri `componentDidMount` veya `componentDidUpdate` yaşam döngüsü metodlarından önce gerçekleşir.



## Sınıf Bileşenine Ref Ekleme

Yukarıdaki `CustomTextInputun`un, eklendikten hemen sonra tıklandığı senaryosunu simüle etmek istediğimizde,  özel input’a erişmek ve `focusTextInput` metodunu manuel olarak çağırmak için ref kullanabiliriz.

```javascript

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput ref={this.textInput} />
    );
  }
}

```

Yukarıdaki kod sadece `CustomTextInput` sınıf olarak tanımlandıysa çalışır:

```javascript

class CustomTextInput extends React.Component {
  // ...
}

```

## Refler ve Fonksiyon Bileşenleri
Varsayılan olarak ref değişkenlerini fonksiyon değişkenleri içinde kullanmazsınız, çünkü fonksiyon bileşenlerinin nesneleri olmaz:

```javascript

function MyFunctionComponent() {
  return <input />;
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  render() {
    // This will *not* work!
    return (
      <MyFunctionComponent ref={this.textInput} />
    );
  }
}

```

Eğer insanların fonksiyon bileşenleriniz için ref kullanmalarına izin vermek istiyorsanız, `forwardRef` (muhtemelen `useImperativeHandle` ile birlikte) kullanabilir, veya bileşeninizi bir sınıfa çevirebilirsiniz.

Bir DOM elemanını veya sınıf bileşenini işaret ettiğiniz sürece fonksiyon bileşeni içerisinde ref kullanabilirsiniz:

```javascript

function CustomTextInput(props) {
  // textInput must be declared here so the ref can refer to it
  const textInput = useRef(null);
  
  function handleClick() {
    textInput.current.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}

```

## DOM Ref’lerini Üst Bileşenlerde Açığa Çıkarma

Nadiren, bir child bileşenin DOM düğümüne parent bileşenden erişmek isteyebilirsiniz. Bu genelde önerilmez, çünkü bu olay bileşenin kapsüllenmesini(encapsulation) bozar. Ancak bazen odağı tetiklemek veya bir child DOM düğümünün boyutunu veya konumunu hesaplamak için faydalı olabilir. 

Alt bileşene ref ekleyebilirsiniz. Ancak bu ideal bir çözüm değildir. DOM düğümünden ziyade sadece bir tane bileşen nesnesi alırsınız. Ek olarak bu, fonksiyon bileşenleri ile çalışmaz.

Eğer mümkünse, DOM düğümlerini açığa çıkarmamanızı tavsiye ediyoruz. Fakat bu bazen faydalı bir kaçış yolu olabilir. Bu yaklaşımın, child bileşene bazı kodlar eklemenizi gerektirdiğini unutmayın. Eğer child bileşen üzerinde hiç bir kontrolünüz yoksa, son çareniz `findDOMNode()` kullanmaktır, ama bu `StrictMode` içerisinde kullanımdan kaldırılmıştır.


## Callback Refs

React ayrıca, `callback refs` adı verilen refleri ayarlamanın başka bir yolunu da destekler. Bu, ref’ler ayarlandıklarında veya ayarlanmadıkları zamanlarda daha fazla kontrole sahip olmalarını sağlar.

`createRef()` tarafından oluşturulan bir refi atamak yerine, bir fonksiyon atarız. Fonksiyon, React bileşeninin nesnesini veya HTML DOM elemanını bir argüman olarak alır, böylelikle bileşenin nesnesi başka bir yerde saklanabilir ve erişilebilir.

Aşağıdaki örnekte yaygın bir kullanım uygulanmıştır. ref callback’i kullanarak bir nesnenin özelliğinde DOM düğümüne bir referans kaydedilir.

```javascript

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      
      // DOM API kullanark text input'a odaklanın
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // Eklendikten sonra otomatik olarak odaklanma
    this.focusTextInput();
  }

  render() {
    // Nesne alanında bulunan metin girdisi elemanına bir referans
    // tutmak için `ref` callback'i kullanın. (örneğin, this.textInput)
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

```

React, bileşen eklendiğinde DOM elemanı ile beraber `ref` callback’ini çağırır ve bileşen çıkarıldığında da `null` ile çağırır. Ref’lerin, `componentDidMount` veya `componentDidUpdate` tetiklenmeden önce güncel oldukları garanti edilir.

`React.createRef()` ile oluşturulan nesne ref’leri gibi, Callback ref’lerini de bileşenler arasında aktarabilirsiniz.

```javascript

function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

class Parent extends React.Component {
  render() {
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    );
  }
}

```

Yukarıdaki örnekte, `Parent` , ref callback’ini `inputRef` prop’u olarak `CustomTextInput`una aktarır ve `CustomTextInput`u aynı fonksiyonu özel bir ref özelliği olarak `<input>`a aktarır. Sonuç olarak, `Parent`taki `this.inputElement`i, `CustomTextInput`taki `<input>` elemanına karşılık gelen DOM düğümüne set edilir.

## Callback Ref'lerine Dair Uyarılar

Eğer ref callback bir satıriçi fonksiyon olarak tanımlanmışsa, güncelleme anında iki kez çağırılacaktır. İlk olarak null ile, sonrasında DOM elemanı yeniden çağrılır. Bunun sebebi, fonksiyonun bir nesnesi her render’da oluşturulur. Bu yüzden React eski ref’i kaldırır ve yenisini ekler. Bunu önlemek için ref callback’ini sınıfa bağlı bir metod olarak tanımlayabilirsiniz. Ancak bu, birçok durumda önemli değildir.




## Kaynaklar

[^1]: https://www.geeksforgeeks.org/reactjs-refs/

[^2]: https://tr.reactjs.org/docs/refs-and-the-dom.html

https://rossbulat.medium.com/how-to-use-react-refs-4541a7501663

https://blog.logrocket.com/a-guide-to-react-refs/

https://css-tricks.com/working-with-refs-in-react/

https://www.javatpoint.com/react-refs