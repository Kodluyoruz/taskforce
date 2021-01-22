# DOM içerisinden Etiket ve ID ile Öğe Seçimi

Bu yazımızda [DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) içerisinden öğeleri seçmek için kullanacağımız metotlardan bahsedeceğiz.Document Object Model'de öğeler birden fazla yöntem ile seçilebilir. Birinci yöntemimiz olan element id'sini kullanarak şeçme metodu ile başlayalım.

## getElementById

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

## getElementsByTagName Metotu
Bu metot verilen tag adı ile eşleşen tüm etiketleri bir dizi olarak getirir.Bize bir NodeList nesnesi döner. NodeList nesnesi bir düğüm koleksiyonunu temsil eder. Düğümlere dizin numaraları ile erişilebilir. Dizin 0'dan başlar.  
Bize geri dönen NodeList nesnesinin length özelliğiyle kaç tane öge olduğunu tespit edebilir ve bir döngü yardımıyla bu öğelere erişim sağlayabiliriz.  

` var elements = document.getElementsByTagName("P");  
  var i;  
  for(i=0;i<elements.length;i++={  
     elements[i].style.backgroundColor="red";  
  }`  

Bu kod bloğunda getElementsByTagNeame metotu ile Html sayfamızdaki p etiketine sahip elemanları elde ettik. Sonrasında bir döngü yardımıyla bu elemanlara eriştik. Bu elemanların  
arka plan renklerini kırmızı renk yaptık.

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


