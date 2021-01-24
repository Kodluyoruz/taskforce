# Portal'lar

Bir React uygulamasının render olabilmesi için tek bir DOM element'ine ihtiyaç olduğundan [Element'lerin Render Edilmesi](rendering-elements/) konu başlığında bahsetmiştik. 

```javascript
<div id="root"></div>
```

Genellikle React ile yazılan uygulamalar, sadece bir adet root (kök) DOM node (düğümü) içerirler. Bütün uygulama bu `root` id'li `<div>` içerisine render edilir (mounting). 

React Portal, bu root DOM node dışında bir DOM node'una child component'ler render etmeyi sağlar. Örneğin, tüm React uygulaması root id'li `div` içerisinde render oluyorsa, React Portal ile render edilecek child element'ler bu DOM hiyerarşisinin dışında yeni bir DOM element'i içerisinde render olur. Bu işlem React tarafından sağlanan `createPortal()` fonksiyonu ile gerçekleştirilir. 

```javascript
ReactDOM.createPortal(child, container);
```

Burada ilk argüman olan child herhangi tipte bir React child olabilir, örneğin bir element ya da fragment olabilir. İkinci argüman ise bu React child'ın render edileceği `container` (kapsayıcı) DOM element'idir. 

## Hangi Durumlarda Kullanılır?

React dökümantasyonunda, React Portal'ın tipik kullanım durumu olarak parent component ve child component'in pozisyonundan dolayı child element'in düzgün bir şekilde görüntülenememesinden bahsediliyor. 

![Tooltip-overflow](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/react-portals/figures/Tooltip-overflow.png)

Örneğin burada düzgün bir şekilde görüntülenemeyen bir tooltip var. Kırmızı border ile gösterilen parent component `overflow: hidden` CSS property'sine sahip. Bunun kaldırılması bir çözüm olabilir ancak bu çözüm kırılgan bir çözüm sayılır çünkü bazı durumlarda bu problemin tekrarlaması çok muhtemel.  

Örneğin bir görüntüyü kırpmak için `overflow: hidden`'ın eklenmesi durumunda aynı problem devam edecektir. 

![Tooltip-image-crop](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/react-portals/figures/Tooltip-image-crop.png)

Eğer parent component'in CSS'i `overflow: hidden` ya da `z-index` içeriyorsa ve child element'in görsel olarak bu container içerisinden çıkması isteniyorsa, React Portal bu duruma çözüm olabilir. Bu kullanımı gerektiren durumlara örnek olarak `modal diyalog kutuları`, `dropdown`, `tooltips`, `hovercards` ve `loaders` verilebilir. 

## Örnek

```javascript
const Modal = (props) => {
  if (!props.isOpen) return null;
  return (
    <div className="modal">
      <h2>{props.content}</h2>
      <button onClick={props.onClose}>Kapat</button>
    </div>
  );
};

const PortalModal = (props) => {
  const portalRoot = document.getElementById("portal-root");
  if (!props.isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal">
      <h2>{props.content}</h2>
      <button onClick={props.onClose}>Kapat</button>
    </div>,
    portalRoot
  );
};
```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/jOMLPoX?editors=1111).

Bu örnekte biri normal biri de `createPortal()` ile render edilmiş 2 adet modal diyalog component'i var. Modal component'i root node içerisinde render edilirken `PortalModal` component'i `portal-root` node'u içerisinde render ediliyor. 

```javascript
<div id="root"></div>
<div id="portal-root"></div>
```

`PortalModal` component'i içerisinde portal-root id'li div'i `getElementById` fonksiyonuyla bularak, render işleminin o `<div>` içerisinde yapılmasını `createPortal()` ile sağlıyoruz. 

Burada daha anlaşılabilir olması için `root` id'li `div` içerisine render ettiğimiz `div`'e kırmızı bir border verdik. Böylece root içerisinde render olacak modal, bu kırmızı border içerisinde yer alacak. 

![Modal](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/react-portals/figures/Portal-Modal.png)



Portal Modal ise bu root id'li div dışında portal-root id'li bir `div` içerisinde render edileceği için bu kırmızı border'ın dışında görüntülenecek.

![Portal-Modal](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/react-portals/figures/Portal-Modal.png)



## Notlar

React Portal kullanırken göz önünde bulundurulması gereken şeyler:

- Portal'lar ile node'un konumundan bağımsız olarak **event bubbling** beklendiği gibi çalışır.
- Portal'lar ile child element'ler render ederken React lifecycle üzerinde kontrol sahibidir.
- Portal'lar yalnızca HTML DOM yapısını etkiler, React component tree üzerinde bir etkisi yoktur.
- Portal'ların mount olabilmesi için ayrı bir HTML DOM element'inin oluşturulması gerekir.

## Kaynaklar

- https://tr.reactjs.org/docs/portals.html

- https://blog.logrocket.com/learn-react-portals-by-example/

- https://blog.bitsrc.io/understanding-react-portals-ab79827732c7
