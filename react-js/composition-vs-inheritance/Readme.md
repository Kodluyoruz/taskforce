# Composition vs Inheritance

React güçlü bir composition modeline sahiptir. Bu yüzden **reusability** (yeniden kullanılabilirlik) konusunda inheritance yerine composition modelinin kullanılması [öneriliyor](https://tr.reactjs.org/docs/composition-vs-inheritance.html). Öncelikle **inheritance ve composition** kavramlarının ne olduğuna bakalım. Daha sonra React'ta nasıl uygulandığını inceleyelim.



## Inheritance

Inheritance, Object Oriented Programming (Nesne Tabanlı Programlama)'da bir class'ın başka bir class'tan property ve metotlarını miras olarak almasıdır. React içerisinde bu konsepti bir child component'in parent component'ten property'lerini alması şeklinde görüyoruz. 

Bu konsepti anlamaya çalışırken genel bir örnek olması açısından `Araba` adlı class'ın `Araç` adlı başka bir class'tan türetildiğini düşünebiliriz. Yani Araç burada parent olurken, Araba daha spesifik bir class olduğu için child oluyor ve Araç class'ındaki property ve metotları kalıtım yoluyla alıyor. Bu konsepte göre araba ve araç arasında IS-A ilişkisi vardır. Yani Araba bir Araçtır.

```javascript
class Arac {
  constructor (isim, tip) {
    this.isim = isim;
    this.tip = tip;
  }
  
  calistir() {
    console.log("Motor çalıştırıldı");
  }
}

class Araba extends Arac {
   constructor (isim) {
    super(isim, "araba");
  }

  arabayiCalistir() {
    super.calistir();
  }
}
```



##  Composition

Composition da OOP (Nesne Tabanlı Programlama)'da kullanılan bir konsepttir. Parent class'tan property'leri ve metotları miras almak yerine, bir class içerisinde başka bir class'taki davranışları (behavior) temsil edecek instance'lar oluşturmaktır. Böylelikle bu instance sayesinde başka bir class'taki davranışlara erişim sağlayabiliriz. Bu konsepte göre class'lar arasında HAS-A ilişkisi vardır. Örneklendirmek gerekirse, Araba bir motora sahiptir. Eğer obje özelinde konuşursak, bir obje oluştururken bu objenin istenilen diğer objeleri de içinde barındırmasıdır. Composition daha flexible bir yapı sunar çünkü [loose coupling](https://en.wikipedia.org/wiki/Loose_coupling) prensibini esas alır. 

```javascript
const motor = function () {
   return {
     motor: () => { console.log("Araba motoru"); }
   }
}

const araba = () => {
   return Object.assign( {}, motor() );
}
```

**Not:** Obje kopyalamak için ES6 ile gelen Object.assign() metodu kullanılmıştır.



## React'ta Composition ve Inheritance

Bu 2 konsept de birden çok component'in bir arada kullanılmasını sağlamak amacıyla kullanılır. Bu sayede component'lerin yeniden kullanılabilirliğine katkı sağlanmış olur. 2 konseptin birbirleri üzerinde bir üstünlük durumu söz konusu değil ancak React dökümantasyonunda da belirtildiği üzere, inheritance yerine composition kullanılması tavsiye edilmektedir çünkü React component tabanlıdır.

### Inheritance

[Component'ler](../components) konu başlığında Class component'lerin oluşturulmasından bahsederken React.Component'i extend ederek oluşturulduklarından bahsetmiştik. Bu şekilde var olan bir class'ı türeterek, parent class'ın property ve metotlarına sahip olurlar. Burada React.Component *superclass* ya da *base class* olarak adlandırılırken, oluşturduğumuz yeni class ise *subclass* ya da *derived class* olarak adlandırılır. 

```javascript
class Arac extends React.Component {
   constructor(props) {
    super(props);
  }
}

class Kamyonet extends Arac {
   constructor(props) {
    super(props);
  }
}
```

Burada `Arac` class'ı React.Component'ten miras alırken, `Kamyonet` class'ı da `Arac` class'ından miras alıyor.

### Composition

```javascript
const Button = props => {
  return <button>{props.text}</button>
}

const SubmitButton = () => {
  return <Button text="Submit" />
}

const LoginButton = () => {
  return <Button text="Login" />
}
```

Bu örnekte, genel bir `Button` component'i oluşturduk. Sonrasında onun daha özelleştirilmiş versiyonlarını (`SubmitButton` ve `LoginButton`) `Button` component'i üzerinden oluşturmuş olduk.



```javascript
const Heading = props => {
    return (
      <div>
      	<h1>{props.message}</h1>
      </div>
    )
}

const Page1 = () => {
    return (
      <div>
       <Heading message={"Page1 için başlık"} />
      </div>
    )
}
```

Bu örnekte `Heading` adlı bir component oluşturduk ve `<h1>` etiketi içerisinde gelen message prop'unun gösterilmesini istedik. `Page1component`'inde `Heading` component'ini kullanacağız. Prop olarak `message` string'ini gönderiyoruz ve `Heading` component'inin render olmasını sağlıyoruz. 

  

## Kaynaklar

- https://tr.reactjs.org/docs/composition-vs-inheritance.html

- https://programmingwithmosh.com/react/react-composition-vs-inheritance/

- https://flaviocopes.com/react-composition/

- https://codelikethis.com/lessons/react/composition-vs-inheritance

- https://kriss.io/composition-vs-inheritance-in-react-comparison-and-contrast
