# DOM içerisinden Etiket ve ID ile Öğe Seçimi
Bu yazımızda DOM (Document Object Model) içerisinden öğeleri seçmek için kullanacağımız metotlardan bahsedeceğim.Document Object Model'de öğeler birden fazla yöntem ile seçilebilir. Birinci yöntemimiz olan id ile seçme işlemine başlayalım.

## getElementById Metotu
Bu metotta seçmek istediğimiz elemente ait id ile o elementi seçebiliyoruz. Eğer o element var ise bize o elementi geri döndürüyor.
`var myEl=document.getElementById('#idAdı')`  
ile bu metotu kullanabiliriz.Sonrasında bize dönen elemenı manipüle edebilirsiniz.


## getElementsByTagName Metotu
Bu metot verilen tag adı ile eşleşen tüm etiketleri bir dizi olarak getirir.Bize bir NodeList nesnesi döner. NodeList nesnesi bir düğüm koleksiyonunu temsil eder. Düğümlere dizin numaraları ile erişilebilir. Dizin 0'dan başlar.  
Bize geri dönen NodeList nesnesinin length özelliğiyle kaç tane öge olduğunu tespit edebilir ve bir döngü yardımıyla bu öğelere erişim sağlayabiliriz.  

`var elements = document.getElementsByTagName("P");
 var i;
 for (i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "red";
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

*  Girilen birinci ve ikinci sayıya DOM ile erişerek toplam sonucunu result alıtndaki p etiketine yazdırınız  
[CodePen'de Dene](https://codepen.io/bedirhanargn/pen/xxEpRpJ)


