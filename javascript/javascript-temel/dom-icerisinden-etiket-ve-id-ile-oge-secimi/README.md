# DOM içerisinden Etiket ve ID ile Öğe Seçimi

Bu yazımızda [DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) içerisinden öğeleri seçmek için kullanacağımız metotlardan bahsedeceğiz.Document Object Model'de öğeler birden fazla yöntem ile seçilebilir. Birinci yöntemimiz olan element id'sini kullanarak şeçme metodu ile başlayalım.

## Get Element By ID
> **Elemanı ID'sine göre getirme**

`document` objesinin `getElementById()` metodu ile sayfada bulunan html elementlerinin ID'leri referans alarak seçme işlemi yapabiliyoruz. Örnek olarak;

```js
<div id="unicorn">🦄</div>
```
sayafada bulana bu elementi `getElementById()` methodunu kullanarak seçmeye çalışalım.

```js
const unicorn = document.getElementById('unicorn');
```

ID'ler büyük-küçük harf duyarlıdır. Bu sayede HTML document içinde biriçiklik gösterir ve her zaman geriye bir eleman döndürür. Bir eşleşme bulamazsa da geriye `null` dönüşünü yapar.

> **DİKKAT:** Seçmek istediğiniz elemanın id'sini yazarken eleman isminin başına **`# işaretini`** yazmanıza gerek yoktur. Yazmanız durumunda id'yi seçemeyeceksinizdir. 

```diff
- document.getElementById('#root'); // null
+ document.getElementById('root'); // <div id=​"root">​…​</div>​
```

## Get Elements By Tag Name
> Elemanları Etiket isimlerine göre getirme

`getElementsByTagName()` metodu birden çok element'e ulaşmak amacı ile kullanılır.
Girdi olarak bir **html element'i** alır ve buna uygun bir HTMLCollection döndürür. Örneğin elimizde bu şekilde bir sayfa var;

```html
<p>🐱</p>
<p>🐰</p>
<p>🐯</p>
<p>🐧</p>
```

Bu sayfadaki tüm **p** elemanlarına ulaşmak istersek;

```js
const animals = document.getElementsByTagName('p'); 
// Çıktı:  HTMLCollection(4) [p, p, p, p]
```

yazmanız yeterli olcaktır.

> Ayrıca sayfadaki tüm etiketleri bu şekilde getirebilirsiniz.

```js
document.getElementsByTagName('*')
// Çıktı: HTMLCollection(33) [html, head, meta, link#.....
```

## QuerySelector Metotu
Üçüncü bir yol olarak QuerySelector kullanabiliriz. Bu metot verilen css seçicisiyle eşleşen ilk değeri bize döner. Eğer eşleşen bir element bulunmazsa null geri döner.Tüm eşleşen elementleri döndürmek için QuerySelectorAll kullanmalıyız.

`var el = document.querySelector("#firstid");` 
Bu şekilde id kullanarak erişim sağlayabiliriz.


### Alıştırmalar
*  Adınızı ve soyadınızı belirtilen p etiketlerine DOM ile erişerek yazdırınız.  
[CodePen'de Dene](https://codepen.io/bedirhanargn/pen/LYRQLpa)

*  Girilen birinci ve ikinci sayıya DOM ile erişerek toplam sonucunu result alıtndaki p etiketine yazdırınız.  
[CodePen'de Dene](https://codepen.io/bedirhanargn/pen/xxEpRpJ)  

*  Verilen tabloya bir satır ekleyiniz.  
[CodePen'de dene](https://codepen.io/bedirhanargn/pen/qBaxMZO)


