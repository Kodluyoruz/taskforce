# React Events (Olay Yönetimi)

Event, HTML element'leri üzerinde gerçekleşen olaylardır. Bir event'in gerçekleşmesine tarayıcı veya kullanıcı neden olabilir. Bunlara örnek olarak bir web sayfasının yüklenmesinin tamamlanması, bir input alanının değiştirilmesi veya bir butonun tıklanması verilebilir. Genellikle bir event'in gerçekleşmesi sonucu bir şeyler yapılmak istenebilir. Bu yapılması istenen şeyleri ilgili event'in yakalanması durumunda yerine getirmek istiyorsak bunu event handler ile gerçekleştiririz. Event handler'lar HTML element'lerine attribute olarak verilirler.

```javascript
<element event='JavaScript kodu'>
```

**Not:** JavaScript kodu tek veya çift tırnak içerisinde yazılabilir. Eğer event handler bir fonksiyon olarak belirtilecekse o da bir string ifade olarak yazılır.

```javascript
<button onclick="saatiGoster()">Saat kaç?</button>
```

Burada `saatiGoster()` bir fonksiyondur.

## React'te Event'ler

[DOM eventleri](https://www.w3.org/TR/DOM-Level-3-Events/) senkron(sıralı) ve asenkron (eş zamanlı) olmak üzere iki şekilde işlenir. Sıralı işlerde  first-in-first-out modelinde yani geliş sırasına göre takip edilirler. React'te `event handling` (olay yönetimi), DOM element'lerindeki olay yönetimine oldukça benzerdir. Sadece, bazı küçük syntax farklılıkları vardır:

- Event listener isimleri **lowercase** yerine **camelCase**'dir.

- Event handler olarak **string** yerine **fonksiyon** verilir ve süslü parantez içinde yazılır. (Yukarıdaki yazım şekli ile aşağıda React'ta kullanımı arasındaki farka dikkat!)

### Örnek

```javascript
<button onClick={saatiGoster}>Saat kaç?</button>
```



Bir diğer farklılık ise varsayılan davranışların engellenme biçimidir. Örneğin `<a>` tag'iyle verilen linkin yeni bir sayfa olarak açılmasını engellemek için düz bir HTML kodunda `false return edilir. React'te ise bunun için `preventDefault` kullanılır.

```javascript
<a href="#" onclick="console.log('Link tıklandı.'); return false">
  Tıkla
</a>
```

React'te aynı görevi gören kod parçası:

```javascript
ActionLink = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log('Link tıklandı.');
    console.log(e.type); // click
  }
    return (
      <a href="#" onClick={handleClick}>
        Tıkla
      </a>
    );
  }

```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/OJRmbrB?editors=1111).

`ActionLink` adlı functional component içerisinde `handleClick` adlı bir fonksiyon var. Bu fonksiyon `onClick event`'ine handler olarak verilmiş ve `preventDefault` ile fonksiyonun render sırasında otomatik olarak çağrılmasını ve yeni bir sayfaya yönlendirilmeyi engelliyor.     

Görüldüğü üzere `handleClick` `e` adlı bir argüman alıyor. Bu argüman event tetiklendiğinde handler'a otomatik olarak aktarılır ve farklı API'ylara sahip olabilir. React'te bu `e`'ye sentetik olay denir ([SyntheticEvent](https://tr.reactjs.org/docs/events.html)). Otomatik olarak aktarılan bu event objesinin tipini `e.type` ile görebiliriz. Bu durumda "click" olacaktır.  

**Not:** `preventDefault()` gibi işlemler için önceliğini gözetmek adına event argümanının ilk sırada yer alması fonksiyon akışını kontrol etmeyi kolaylaştıracaktır. 

### Örnek

```javascript
<img
  src="children.jpeg"
  onMouseMove={handleMouse} {/* e.screenX */}
/>

<input
  onChange={handleInput}  {/* e.target.value */}
  value={inputText}
/>
```

Bir  `<img>` element'indeki `onMouseMove` event'i için aktarılan `e` argümanı ile  `<input>` element'indeki `onChange` event'i için aktarılan `e` argümanları farklıdır. 

## Event Handler'a Parametre Göndermek

Bazı durumlarda event handler'a parametre göndermemiz gerekir. Bu duruma örnek olarak bir döngü içerisinde render edilen butonlara `id` parametresi göndermek verilebilir.

**Bir Örnekle açıklayalım:**

Gönderilmek istenen parametre ya da parametreler dışında event objesini de göndermek istiyorsak ve aşağıda olduğu gibi bir **arrow function** kullanıyorsak, `event` objesini manuel olarak göndermek zorundayız. `Bind` metodu ile event objesi otomatik olarak gönderilir. 

**Not:** Render içerisinde `bind` metodu ya da `arrow function` kullanmak, element'in her render edilişinde yeni bir fonksiyon oluşturulmasına sebep olacağı için performans kayıplarına sebep olabilir. Bu yüzden tavsiye [edilmemektedir](https://tr.reactjs.org/docs/faq-functions.html).

```javascript
<button onClick={(e) => deleteRow(id, e)}>Satırı Sil</button>

```

Bu örnekte ilk parametre olarak `id`'yi yazıktan sonra ikinci parametre olarak `event` objesini gönderiyoruz. 

**Not:** Eğer bir class component içerisinde işlem yapıyorsak ve [arrow function](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) kullanmıyorsak, [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) ile "[this](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Operat%C3%B6rler/this)" context'ini tanımlamalıyız. 



```javascript
class BindExample extends React.Component {
  handler = (str, e) => {
    console.log(str);
    console.log(e.type);
    /*
    'str' event handler'da "Deneme" olarak gönderilen string ifade, 
    'e' React event objesidir.
    */
  }
  render() {
    return (
      <button onClick={this.handler.bind(this, "Deneme")}>Tıkla</button>
    );
  }
}
```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/gOwWgvN?editors=1011).

Bu örnekte bir class component içerisinde `bind` metodu kullanarak `this` ile context'i tanımlıyoruz. `Bind` metodunda ilk argüman **"this"** olmak zorundadır. Görüldüğü üzere event objesini göndermediğimiz halde handler içerisinde ulaşabiliyoruz çünkü [closure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) içerisinde olduğu için otomatik olarak aktarılmıştır.



## Kaynaklar

- https://tr.reactjs.org/docs/handling-events.html

- https://www.w3schools.com/react/react_events.asp

- https://medium.com/javascript-in-plain-english/event-handlers-in-react-810571b3d2cf
