# Elementlerin Render Edilmesi

Elementler, React uygulamalarının en küçük yapı birimidir. 

```javascript
const element = <h1>Merhaba Dünya!</h1>;
```

React elementler'i, Browser DOM elementlerinden farklı olarak basit JavaScript objeleridir.  

**Not:** Component (bileşen) konsepti daha yaygın olarak bilindiği için, anlam bakımından elementler ile karıştırılabilir. Element ve component kavramları farklı şeylerdir. Tanımda belirtildiği üzere elementler, React uygulamalarının dolayısıyla componentlerin en küçük yapı taşlarıdır. Diğer bir deyişle React elementleri, DOM'da render edilecek en küçük birimdir.



## Bir Elementin DOM'a Render Edilmesi

Browser DOM'a bir React element'i render edebilmek için bir root DOM element'ine ihtiyacımız var. Her React projesi  bu root element ile başlar. React bu sayede oluşturulan HTML kodunu nereye render edeceğini bilir. **Root element** geleneksel olarak `"root"` id'li bir `<div>` element'i olur. 

index.html dosyası aşağıdaki gibi root id'li bir `<div>` element'i içeriyor.

```javascript
<div id="root"></div>
```

Buna “root” (kök) node (düğüm) denir; çünkü içerisindeki her şey React DOM tarafından yönetilir.

Genellikle React ile yazılan uygulamalar, sadece bir adet kök DOM düğümü içerirler. Eğer React’i mevcut uygulamanıza entegre ediyorsanız, birbirinden izole olacak şekilde dilediğiniz kadar kök DOM düğümüne sahip olabilirsiniz.

**Örneğin:** *create-react-app* ile oluşturulan bir React uygulamasında bir adet root vardır ve bu root element sayesinde React tarafından bütün update'ler gerçekleştirilir.

Root DOM düğümü içerisinde bir React elementini render etmek istiyorsanız, bu iki parametreyi de [`ReactDOM.render()`](https://tr.reactjs.org/docs/react-dom.html#render) metoduna geçirmeniz gereklidir:

```javascript
const element = <h1>Merhaba Dünya!</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/vYXYKoL)

Sayfada “Merhaba Dünya!” mesajı görüntülenecektir.

## Render Edilmiş Elementin Güncellenmesi

React elementleri [immutable(değişmez)](https://en.wikipedia.org/wiki/Immutable_object)‘dır. Yani bir kez React elementi oluşturduktan sonra, o elementin alt elemanlarını veya özelliklerini değiştiremezsiniz. Bu nedenle element, bütün bir videonun tek bir karesi gibidir: arayüzün belirli bir andaki görüntüsünü temsil eder.

Bu zamana kadar edindiğimiz bilgiler ışığında, kullanıcı arayüzünün güncellenmesi için tek yolun, yeni bir element oluşturup, [`ReactDOM.render()`](https://tr.reactjs.org/docs/react-dom.html#render) metoduna aktarmak olduğunu biliyoruz. [^1] Sonraki bölümlerde component ve state kavramı hakkında bilgi sahibi olarak elementlerin güncellenmesi konusunu daha detaylı şekilde öğrenmiş olacağız. 

Aşağıdaki saat örneğini ele alalım:

```javascript
function tick() {
  const element = (
    <div>
      <h1>Merhaba Dünya!</h1>
      <h2>Saat şu anda {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

[CodePen'de deneyin](https://codepen.io/Kodluyoruz/pen/oNzNLrN)

Bu örnekte `tick` adlı fonksiyon içerisinde bir React element'i tanımlanıyor. Bu element `<h1>` etiketi içerisinde "Merhaba Dünya!" içerikli bir string ve `<h2>` etiketi içerisinde ise şu anki yerel saatin string'e çevrilmiş halini tutuyor. Fonksiyon tanımından sonra gelen kod satırı bu fonksiyonun her saniyede bir çağrılmasını sağlıyor.

[`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval) metodu ile her saniye bitiminde [`ReactDOM.render()`](https://tr.reactjs.org/docs/react-dom.html#render) metodu çağrılıyor. Bu sayede her yeni render ile arayüz güncellenmiş oluyor.

**Not:** Genelde birçok React uygulamasında [`ReactDOM.render()`](https://tr.reactjs.org/docs/react-dom.html#render) yalnızca bir kez çağrılır. Sonraki bölümlerde bu tarz kodların nasıl [state’li component'lere](https://tr.reactjs.org/docs/state-and-lifecycle.html) dönüştürüleceğine değineceğiz.



## React Yalnızca Gerekli Kısımları Günceller

React DOM, ilgili elementi ve elementin alt elemanlarını, bir önceki versiyonlarıyla karşılaştırır. Farkları tespit ettikten sonra yalnızca gerekli olan kısımlarda DOM güncellemesi yapar. DOM ağacında değişmesi gerekmeyen yerler aynı şekilde kalarak gereksiz element render edilmesinin önüne geçilmiş olur. React, virtual DOM sayesinde kullanıcının sayfayla her etkileşiminde sayfayı güncellemek yerine gerekli yerlerde, küçük element'ler üzerinde güncellemeler yaparak Vanilla JavaScript (plain-pure JavaScript) kullanılarak oluşturulmuş sayfalardan daha performanslı çalışır. 

![react-dom-guncellemeleri](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/react-js/rendering-elements/figures/react-dom-guncellemeleri.gif)

Bütün UI ağacını her saniyede bir görüntüleyen bir element oluşturmamıza rağmen, React DOM tarafından **yalnızca içeriği değişen** string ifade güncellenir. [^1]

Bu noktada, [Virtual DOM](https://tr.reactjs.org/docs/faq-internals.html) sayesinde React'in elementleri nasıl verimli bir şekilde render ettiğini açık bir şekilde görebiliriz.



## Not

Bu örnek için render() metodunun birden fazla kez çağrılması amacına hizmet etmiş olabilir ancak bu genelde kullanılan bir yöntem değildir. Bunun yerine sonraki bölümlerde değineceğimiz state objesi tutan class (stateful) component'ler kullanılır.



## Kaynaklar

- https://tr.reactjs.org/docs/rendering-elements.html

- https://www.geeksforgeeks.org/reactjs-rendering-elements/


