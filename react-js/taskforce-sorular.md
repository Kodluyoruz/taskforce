## create-react-app

1. create-react-app ile bir React uygulaması oluşturduktan sonra uygulamayı hangi komut ile geliştirme ortamında başlatırız?

   npm start, npm run build, npm test

2. create-react-app ile oluşturulan bir React uygulamasının başlangıç noktası hangi dosyadır?

   app.js, index.js

## jsx

1. Hangisi geçerli bir react element'i değildir?

   <Navbar>, <Navbar />, <Navbar></Navbar>

2. Bir JSX ifadesi yazarken css class'ı verilmek istendiğinde hangi keyword kullanılır?

   class, className, 

## rendering-elements

1. index.html içerisinde bütün react uygulamasının render olduğu div element'inin id'si nedir?

   root, center, node

2. React'ın element'leri verimli bir şekilde güncellemesine katkı sağlayan hangisidir?

   Virtual DOM, React DOM

## components

1. State objesi tutmayan component yapısı hangisidir?

   Functional component'ler, class component'ler

2. Kullanıcı tanımlı bir component'in  aldığı bütün özelliklerin (attribute) tutulduğu objeye ne ad verilir?

   props, state, attribute

## props-and-state

1. State güncellerken kullanılan fonksiyon hangisidir?

   setState, changeState

2. Props read-only yapılardır, hiçbir şekilde mutate edilemezler

   Doğru, Yanlış

## props-children

1. Hangisi doğru bir kullanımdır?

   ```
    <Photo>
           Kodluyoruz
     </Photo>
   ```

   <Photo children="Kodluyoruz" />


2. 



## event-handling

1. Hangisi doğru bir kullanımdır?

   ```
    <a href="#" onclick={handleClick}>
       	Tıkla
       </a>
   ```

```
 <a href="#" onClick={handleClick}>
    	Tıkla
    </a>
```

2. Event Handler'a bir parametre gönderirken, event objesi manuel olarak gönderilmek zorundadır.

   Doğru, Yanlış





## conditional-rendering



## component-lifecycle

1. Data fetch yapılırken hangi lifecycle metot kullanılır?

   componentDidMount

2. React'ın her props vee state değişiminde varsayılan bir şekilde component'i re-render etmesinin önüne hangi lifecycle metot ile geçilebilir?

   shouldComponentUpdate



## fragments

1. <React.Fragment></React.Fragment> yerine kullanılabilecek kısa syntax nedir?

   <>...</>

2. React Fragment kullanmanın sebebi nedir?

   Birden fazla React element'ini `<div>` gibi ekstra bir tag (etiket) kullanmadan return edebilmeyi sağlamak.



## list-and-keys

1. Map ile listeleme yaparken özgün bir key kullanmak neden önemlidir?

   Liste elemanlarını ayırt edebilmek için özgün bir key önemlidir.

2. Key olarak array index'ini neden iyi bir yöntem değildir?

   Array index'leri herhangi bir ekleme-çıkarma durumunda değişiklik göstereceği için React'ın diff algoritması hangi elemanın değiştirildiğini/çıkarıldığını bilemez. 



## composition-vs-inheritance

1. Bir class component oluşturulurken hangisi extend edilir?

   React.Component

2. React'te inheritance mı composition mı tercih edilir?

   Composition



## basic-hooks

1. useState hook'unu kullanırken, state'i değiştirmeye yarayan fonksiyonun ismi adlandırma kuralı olarak neyle başlar?

   set ile başlar. Örneğin setCount

2. componentDidMount, componentDidUpdate ve componentWillMount lifecycle metodlarının yerine kullanılabilecek hook hangisidir?

   useEffect



## hooks

1. API'dan veri çekme gibi "side effect" olarak bilinen işlemlerin gerçekleştirildiği hook hangisidir?

   useEffect

2. useState'in aldığı argüman ne işe yarar?

   State'in başlangıç değerini belirler.









