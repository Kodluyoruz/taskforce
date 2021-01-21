## create-react-app

1. create-react-app ile bir React uygulaması oluşturduktan sonra uygulamayı hangi komut ile geliştirme ortamında başlatırız?

   - npm start 
   - npm run build
   - npm run 
   - npm run test
2. create-react-app ile oluşturulan bir React uygulamasının başlangıç noktası hangi dosyadır? 
   - app.js
   - index.js (x)
   - document.js
   - root.js


## jsx

1. Hangisi geçerli bir react element'idir?
   - <navbar>
   - <navbar />
   - <Navbar /> (x)
   - <Navbar>

2. Bir JSX ifadesi yazarken css class'ı verilmek istendiğinde hangi keyword kullanılır?
   - class
   - ClassName
   - Classname
   - className (x)




## rendering-elements

1. index.html içerisinde bütün react uygulamasının render olduğu div element'inin id'si nedir?

     - center  
     - app
     - node
  - root (x)


2. React'ın element'leri verimli bir şekilde güncellemesine katkı sağlayan hangisidir?

     - Shadow DOM  
  - Virtual DOM (x)
     - React DOM
     - HTML DOM


## components

1. State objesi tutmayan component yapısı hangisidir?

   -    Functional Component (x)
   -    Class Component
2. Kullanıcı tanımlı bir component'in  aldığı bütün özelliklerin (attribute) tutulduğu objeye ne ad verilir?

     - state 
  - props (x)
     - children
     - attribute


## props-and-state

1. State güncellerken kullanılan fonksiyon hangisidir?

     - changeState 
  - setState (x)
     - getState
     - state
2. Props read-only yapılardır, hiçbir şekilde mutate edilemezler

   - Doğru (x)
   - Yanlış

## props-children

1. Hangisi doğru bir kullanımdır?

   - <Photo children="Kodluyoruz" />
   - <Photo>Kodluyoruz</Photo> (x)


2. props.children bir ya da birden fazla element içerebilir.

   - Doğru (x)
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
   
   (x)

2. Event Handler'a bir parametre gönderirken, event objesi manuel olarak gönderilmek zorundadır.

   -    Doğru (x)
   -    Yanlış


## conditional-rendering

1. React Element'leri tutan değişkenler oluşturarak koşula göre render edilmesi sağlanabilir.
   - Doğru (x)
   - Yanlış
2. Bir koşula bağlı olmadıkları halde component'leri koşul ifadelerinin içerisinde barındırmak performans açısından maliyetli bir işlem değildir.
   - Doğru 
   - Yanlış (x)

## component-lifecycle

1. Data fetch yapılırken hangi lifecycle metot kullanılır?

     - componentDidUpdate 
  - componentDidMount (x)
     - componentWillUnmount
     - shouldComponentUpdate


2. React'ın her props vee state değişiminde varsayılan bir şekilde component'i re-render etmesinin önüne hangi lifecycle metot ile geçilebilir?

     - componentDidUpdate 
     - componentDidMount
     - componentWillUnmount
  - shouldComponentUpdate (x)



## fragments

1. <React.Fragment></React.Fragment> yerine kullanılabilecek kısa syntax nedir?

     - </>.....</> 
  - <>.....</> (x)
     - <>.....<>
     - </>....<>


2. React Fragment kullanmanın sebebi birden fazla React element'ini `<div>` gibi ekstra bir tag (etiket) kullanmadan return edebilmeyi sağlamaktır.
   - Doğru (x)
   - Yanlış



## list-and-keys

1. Map ile listeleme yaparken özgün bir key kullanmak liste elemanlarını ayırt edebilmeyi sağlar.
   - Doğru (x)
   - Yanlış
2. Key olarak array index'ini kullanmanın performans açısından bir zararı yoktur. 

   - Doğru
   - Yanlış (x)



## composition-vs-inheritance

1. Bir class component oluşturulurken hangisi extend edilir?

     - React.useState  
     - React.Class
     - React.Fragment
  - React.Component (x)

2. React'te inheritance mı composition mı tercih edilir?

     -  Composition  
     -  Inheritance (x)



## basic-hooks

1. useState hook'unu kullanırken, state'i değiştirmeye yarayan fonksiyonun ismi adlandırma kuralı olarak neyle başlar?

     - get 
  - set (x)
     - put
     - change

2. componentDidMount, componentDidUpdate ve componentWillMount lifecycle metodlarının yerine kullanılabilecek hook hangisidir?

     - useMemo 
     - useState
  - useEffect (x)
     - useContext




## hooks

1. API'dan veri çekme gibi "side effect" olarak bilinen işlemlerin gerçekleştirildiği hook hangisidir?

     - useMemo 
     - useState
  - useEffect (x)
     - useContext

2. useState'in aldığı argüman ne işe yarar?

- State'in başlangıç değerini belirler. (x)
- State'in tipini belirler.
- set fonksiyonu tetikler.
- Alabileceği değer aralığını ifade eder.
      



## context 

1. Context.Provider içerisinde diğer component'ler tarafından erişilmesini istediğimiz değerleri yazdığımız props'un adı nedir?

     - key
  - value (x)
     - id
     - props  


2. Provider’ın value kısmına yazmış olduğumuz bir değere erişmek için Context’in hangi componentini çağırmamız gerekir?

    -    Consumer (x)
    -    Context
    -    Provider
    -    Store



## refs

1. Ref özelliğini fonksiyon bileşenleri üzerinde kullanabiliriz.

      - Doğru  
   - Yanlış (x)
   
2. Eğer functional component'lerinizde için ref kullanmak istiyorsanız  ........ kullanabilirsiniz.

- ​    forwardRef  (x)
- ​    props
- ​    ref
- ​    context



## render-props

1. Render prop ile React component'leri arasında kod paylaşımı yapmak mümkündür.
   - Doğru (x)
   - Yanlış
2. 

## higher-order-components

1. Higher Order Component'lerin amacı nedir ?

- Yeniden kullanılabilirliği (reusability) sağlamaktır. (x)
      var olan component'i değiştirir,

2. Higher Order Component'ler Pure fonksiyonlardır, herhangi bir side effect'leri yoktur. Yalnızca kendi argümanlarına bağlı olarak yeni bir component return ederler.

   - Doğru  (x)
   - Yanlış



## api calls

1. Axios bir kütüphane değildir.

    - Doğru  
- Yanlış (x)

2. 





## portals

1. React tarafından sağlanan createPortal() fonksiyonu iki arguman alır, bu iki arguman nelerdir?

- child , container (x)
- Provider,child
- child,ref
- Provider,Consumer


2. 





## error boundaries

Error boundary'ler 3 durumda hataları yakalar, hangisi bunlar birisi değildir?

- render
- lifecycle metodlar
- constructor
- Event handler (x)

Error boundary'ler yalnızca kullanıldıkları component'in altındaki component ağacında meydana gelen hataları yakalarlar.

- ​    Doğru  (x)
- ​    Yanlış

## routers

1. Route matching component'leri nelerdir?

    - Switch, Link
    - Redirect, Link
    - Link, Route
- Switch, Route (x)
2. Herhangi bir durumda yönlendirmenin zorunlu olarak yapılması isteniyorsa hangi component kullanılır?

    - Switch
- Redirect (x)
    - Link
    - Route
