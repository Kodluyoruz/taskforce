## create-react-app

1. create-react-app ile bir React uygulaması oluşturduktan sonra uygulamayı hangi komut ile geliştirme ortamında başlatırız?

  x- npm start
     npm run build
     npm run 
     npm run test

2. create-react-app ile oluşturulan bir React uygulamasının başlangıç noktası hangi dosyadır? 

     app.js
  x- index.js
     document.js
     root.js


## jsx

1. Hangisi geçerli bir react element'idir?

     <navbar>
     <navbar />
  x- <Navbar /> 
     <Navbar>
   
2. Bir JSX ifadesi yazarken css class'ı verilmek istendiğinde hangi keyword kullanılır?

     class  
     ClassName
     Classname
  x- className
    
    
## rendering-elements

1. index.html içerisinde bütün react uygulamasının render olduğu div element'inin id'si nedir?

     center  
     app
     node
  x- root
    

2. React'ın element'leri verimli bir şekilde güncellemesine katkı sağlayan hangisidir?

     Shadow DOM  
  x- Virtual DOM
     React DOM
     HTML DOM


## components

1. State objesi tutmayan component yapısı hangisidir?

   x- Functional Component
      Class Component

2. Kullanıcı tanımlı bir component'in  aldığı bütün özelliklerin (attribute) tutulduğu objeye ne ad verilir?

     state 
  x- props
     children
     attribute
    

## props-and-state

1. State güncellerken kullanılan fonksiyon hangisidir?

     changeState 
  x- setState
     getState
     state
  
2. Props read-only yapılardır, hiçbir şekilde mutate edilemezler

   x- Doğru  Yanlış

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

   x- Doğru 
      Yanlış


## conditional-rendering



## component-lifecycle

1. Data fetch yapılırken hangi lifecycle metot kullanılır?

     componentDidUpdate 
  x- componentDidMount
     componentWillUnmount
     shouldComponentUpdate
   

2. React'ın her props vee state değişiminde varsayılan bir şekilde component'i re-render etmesinin önüne hangi lifecycle metot ile geçilebilir?

     componentDidUpdate 
     componentDidMount
     componentWillUnmount
  x- shouldComponentUpdate



## fragments

1. <React.Fragment></React.Fragment> yerine kullanılabilecek kısa syntax nedir?

     </>.....</> 
  x- <>.....</>
     <>.....<>
     </>....<>
   

2. React Fragment kullanmanın sebebi nedir?

   Birden fazla React element'ini `<div>` gibi ekstra bir tag (etiket) kullanmadan return edebilmeyi sağlamak.



## list-and-keys

1. Map ile listeleme yaparken özgün bir key kullanmak neden önemlidir?

   Liste elemanlarını ayırt edebilmek için özgün bir key önemlidir.

2. Key olarak array index'ini neden iyi bir yöntem değildir?

   Array index'leri herhangi bir ekleme-çıkarma durumunda değişiklik göstereceği için React'ın diff algoritması hangi elemanın değiştirildiğini/çıkarıldığını bilemez. 



## composition-vs-inheritance

1. Bir class component oluşturulurken hangisi extend edilir?

     React.useState  
     React.Class
     React.Fragment
  x- React.Component

2. React'te inheritance mı composition mı tercih edilir?

 x- Composition  
    Inheritance



## basic-hooks

1. useState hook'unu kullanırken, state'i değiştirmeye yarayan fonksiyonun ismi adlandırma kuralı olarak neyle başlar?

     get 
  x- set
     put
     change

2. componentDidMount, componentDidUpdate ve componentWillMount lifecycle metodlarının yerine kullanılabilecek hook hangisidir?

     useMemo 
     useState
  x- useEffect
     useContext
   



## hooks

1. API'dan veri çekme gibi "side effect" olarak bilinen işlemlerin gerçekleştirildiği hook hangisidir?

     useMemo 
     useState
  x- useEffect
     useContext

2. useState'in aldığı argüman ne işe yarar?

  x- State'in başlangıç değerini belirler.
     State'in tipini belirler.
     set fonksiyonu tetikler.
     Alabileceği değer aralığını ifade eder.
    



## context 

1. Context.Provider içerisinde diğer component'ler tarafından erişilmesini istediğimiz değerleri yazdığımız props'un adı nedir?

     key
  x- value
     id
     props  


2. Provider’ın value kısmına yazmış olduğumuz bir değere erişmek için Context’in hangi componentini çağırmamız gerekir?
 
    x- Consumer
       Context
       Provider
       Store



## refs

1. Ref özelliğini fonksiyon bileşenleri üzerinde kullanabiliriz.

      Doğru  
   x- Yanlış
     
2. Eğer functional component'lerinizde için ref kullanmak istiyorsanız  ........ kullanabilirsiniz.

 x- forwardRef 
    props
    ref
    context



## render props



## higher order components

1. Higher Order Component'lerin amacı nedir ?

 x- Yeniden kullanılabilirliği (reusability) sağlamaktır.
    var olan component'i değiştirir,

2. Higher Order Component'ler Pure fonksiyonlardır, herhangi bir side effect'leri yoktur. Yalnızca kendi argümanlarına bağlı olarak yeni bir component return ederler.

   x- Doğru  
      Yanlış



## api calls

1. Axios bir kütüphane değildir.

    Doğru  
 x- Yanlış

2. 





## portals

1. React tarafından sağlanan createPortal() fonksiyonu iki arguman alır, bu iki arguman nelerdir?

 x- child , container
    Provider,child
    child,ref
    Provider,Consumer


2. 





## error boundaries

1. Error boundary'ler 3 durumda hataları yakalar, hangisi bunlar birisi değildir?

    render
    lifecycle metodlar
    constructor
 x- Event handler

2. Error boundary'ler yalnızca kullanıldıkları component'in altındaki component ağacında meydana gelen hataları yakalarlar.

 x- Doğru  
    Yanlış



## routers

1. Route matching component'leri nelerdir?

    Switch,Link
    Redirect,Link
    Link,Route
 x- Switch, Route

2. Herhangi bir durumda yönlendirmenin zorunlu olarak yapılması isteniyorsa hangi component kullanılır?

    Switch
 x- Redirect
    Link
    Route
