## create-react-app

1. create-react-app ile bir React uygulaması oluşturduktan sonra uygulamayı hangi komut ile geliştirme ortamında başlatırız?

   - npm start X
   - npm run build
   - npm run 
   - npm run test
2. create-react-app ile oluşturulan bir React uygulamasının başlangıç noktası hangi dosyadır? 
   - app.js
   - index.js X
   - document.js
   - root.js


## jsx

1. Hangisi geçerli bir react element'idir?
   - `<navbar>`
   - `<navbar />`
   - `<Navbar />` X
   - `<Navbar>`

2. Bir JSX ifadesi yazarken css class'ı verilmek istendiğinde hangi keyword kullanılır?
   - class
   - ClassName
   - Classname
   - className X




## rendering-elements

1. index.html içerisinde bütün react uygulamasının render olduğu div element'inin id'si nedir?

     - center  
     - app
     - node
     - root X

2. React'ın element'leri verimli bir şekilde güncellemesine katkı sağlayan hangisidir?

     - Shadow DOM  
     - Virtual DOM X
     - React DOM
     - HTML DOM

## components

1. State objesi tutmayan component yapısı hangisidir? (Hook'lar olmadan)

   -    Functional Component X
   -    Class Component
2. Kullanıcı tanımlı bir component'in kendisine aktarıldığı ve bütün özelliklerin (attribute) tutulduğu objeye ne ad verilir?

     - state 
     - props X
     - children
     - attribute

## props-and-state

1. State güncellerken kullanılan fonksiyon hangisidir?

     - changeState 
  - setState X
     - getState
     - state
2. Props read-only yapılardır, hiçbir şekilde mutate edilemezler

   - Doğru X
   - Yanlış

## props-children

1. Hangisi doğru bir kullanımdır?

   - `<Photo children="Kodluyoruz" />`
   - `<Photo>Kodluyoruz</Photo>` X


2. props.children bir ya da birden fazla element içerebilir.

   - Doğru X
   - Yanlış



## event-handling

1. Hangisi doğru bir kullanımdır?

   
   
   ```javascript
    <a href="#" onclick={handleClick}>
       Tıkla
    </a> 
   ```
   
   ```javascript
    <a href="#" onClick={handleClick}>
       Tıkla
    </a>
   ```
   
   X

2. Event Handler'a bir parametre gönderirken, event objesi manuel olarak gönderilmek zorundadır.

   -    Doğru X
   -    Yanlış


## conditional-rendering

1. React Element'leri değişkenlere atanarak koşula göre render edilmesi sağlanabilir.
   - Doğru X
   - Yanlış
2. Bir koşula bağlı olmadıkları halde component'leri koşul ifadelerinin içerisinde barındırmak performans açısından maliyetli bir işlem değildir.
   - Doğru 
   - Yanlış X

## component-lifecycle

1. Data fetch yapılırken hangi lifecycle metot kullanılır?

     - componentDidUpdate 
  - componentDidMount X
     - componentWillUnmount
     - shouldComponentUpdate


2. React'ın her props vee state değişiminde varsayılan bir şekilde component'i re-render etmesinin önüne hangi lifecycle metot ile geçilebilir?

     - componentDidUpdate 
     - componentDidMount
     - componentWillUnmount
  - shouldComponentUpdate X



## fragments

1. <React.Fragment></React.Fragment> yerine kullanılabilecek kısa syntax nedir?

     - </>.....</> 
  - <>.....</> X
     - <>.....<>
     - </>....<>


2. React Fragment kullanmanın sebebi birden fazla React element'ini `<div>` gibi ekstra bir tag (etiket) kullanmadan return edebilmeyi sağlamaktır.
   - Doğru X
   - Yanlış



## list-and-keys

1. Map ile listeleme yaparken özgün bir key kullanmak liste elemanlarını ayırt edebilmeyi sağlar.
   - Doğru X
   - Yanlış
2. Key olarak array index'ini kullanmanın performans açısından bir zararı yoktur. 

   - Doğru
   - Yanlış X



## composition-vs-inheritance

1. Bir class component oluşturulurken hangisi extend edilir?

     - React.useState  
     - React.Class
     - React.Fragment
  - React.Component X

2. React'te inheritance mı composition mı tercih edilir?

     -  Composition X
     -  Inheritance 



## basic-hooks

1. useState hook'unu kullanırken, state'i değiştirmeye yarayan fonksiyonun ismi adlandırma kuralı olarak neyle başlar?

     - get 
  - set X
     - put
     - change

2. componentDidMount, componentDidUpdate ve componentWillMount lifecycle metodlarının yerine kullanılabilecek hook hangisidir?

     - useMemo 
     - useState
  - useEffect X
     - useContext




## hooks

1. API'dan veri çekme gibi "side effect" olarak bilinen işlemlerin gerçekleştirildiği hook hangisidir?

     - useMemo 
     - useState
  - useEffect X
     - useContext

2. useState'in aldığı argüman ne işe yarar?

- State'in başlangıç değerini belirler. X
- State'in tipini belirler.
- set fonksiyonu tetikler.
- Alabileceği değer aralığını ifade eder.
      



## context-api

1. Context.Provider içerisinde diğer component'ler tarafından erişilmesini istediğimiz değerleri yazdığımız props'un adı nedir?

     - key
  - value X
     - id
     - props  


2. Provider’ın value kısmına yazmış olduğumuz bir değere erişmek için Context’in hangi componentini çağırmamız gerekir?

    -    Consumer X
    -    Context
    -    Provider
    -    Store



## refs

1. Ref özelliğini functional component'ler üzerinde kullanabiliriz.

      - Doğru  
   - Yanlış X
   
2. Eğer functional component'lerinizde için ref kullanmak istiyorsanız  ........ kullanabilirsiniz.

- ​    forwardRef  X
- ​    props
- ​    ref
- ​    context



## render-props

1. Render prop'un amacı React component'leri arasında kod paylaşımı yapmak değildir.
   - Doğru 
   - Yanlış X
2. Render prop ile yeniden kullanılabilir component'ler oluşturmak mümkündür. 
   - Doğru X
   - Yanlış

## higher-order-components

1. Higher Order Component'lerin var olan component'i değiştirirler.
   - Doğru
   - Yanlış X

2. Higher Order Component'ler Pure fonksiyonlardır, herhangi bir side effect'leri yoktur. Yalnızca kendi argümanlarına bağlı olarak yeni bir component return ederler.

   - Doğru  X
   - Yanlış



## api calls

1. Axios bir kütüphane değildir.

    - Doğru  
- Yanlış X
2. Fetch ile herhangi bir kütüphaneye gerek kalmadan API isteği atılabilir.
    - Doğru X
    - Yanlış





## portals

1. Portal'ların kullanılabilmesi için root `<div>` harici bir HTML DOM element'ine ihtiyaç vardır.
   - Doğru X
   - Yanlış


2. Portal'lar ile child element'ler render edilirken, React bu element'lerin lifecycle'ları üzerinde kontrole sahip değildir.

   - Doğru
   - Yanlış X   



## error boundaries

1. Error boundary'ler 3 durumda hataları yakalar, hangisi bunlardan biri değildir?
   - render
   - lifecycle metotlar
   - constructor
   - Event Handler X

2. Error boundary'ler yalnızca kullanıldıkları component'in altındaki component ağacında meydana gelen hataları yakalarlar.

   - Doğru  X

   - Yanlış

     

## router

1. Route matching component'leri nelerdir?

    - Switch, Link
    - Redirect, Link
    - Link, Route
- Switch, Route X
2. Herhangi bir durumda yönlendirmenin zorunlu olarak yapılması isteniyorsa hangi component kullanılır?

    - Switch
- Redirect X
    - Link
    - Route
