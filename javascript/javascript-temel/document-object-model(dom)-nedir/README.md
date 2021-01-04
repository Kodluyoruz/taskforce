# Document Object Model(DOM) Nedir?



**W3C(World Wide Web Consortium)**'e göre **Document Object Model**, programların ve komut dosyalarının bir belgenin içeriğine, yapısına ve stiline dinamik olarak erişmesine ve güncellemesine izin veren bir platform ve dilden bağımsız bir arayüzdür.

Bir HTML belgesini iç içe geçmiş kutular olarak hayal edebilirsiniz. **<body>** ve **</body>** gibi çevreleyen etiketler, sırayla başka etiketler veya metinler içeren diğer etiketleri kapsar. 

Tarayıcının belgeyi temsil etmek için kullandığı veri yapısı bu şekli izler. Her kutu için, hangi HTML etiketini temsil ettiği ve hangi kutuları ve metni içerdiği gibi şeyleri bulmak için etkileşime girebileceğimiz bir nesne vardır. Bu temsil, **Document Object Model** veya kısaca **DOM** olarak adlandırılır.

**DOM**’da **HTML** ile hazırladığınız sayfa, **_document_**; bu document'in içine yerleştirdiğiniz her türlü öğe ise **_element_** olarak adlandırılır. **DOM** da nesnelerin birer **_element_** olarak kullanılabilmesi için hiyerarşik bir düzen izlenerek çağrılmaları gerekir. HTML’deki her bir elamanın birbiri ile hiyearşik bir yapı oluşturması ile oluşur. **DOM** bir ağaç dizini gibi bütün dokümanları birbirine bağlar.

![DOM Tree](./figures/dom-tree.png)

<!doctype html>
<html>
  <head>
    <title>My home page</title>
  </head>
  <body>
    <h1>My home page</h1>
    <p>Hello, I am Baran and this is my home page.</p>
    <p>Click to review my resume
      <a href="http://balin.me/cv.pdf">balin.me</a>.</p>
  </body>
</html>

_Bu sayfa aşağıdaki yapıya sahiptir:_

![HTML boxes](./figures/html-boxes.jpg)

HTML ağacı olarak:_

![HTML document as a tree](./figures/html-tree.jpg)



**Dosya oluşturmak, elementleri ve içeriklerini silme/ekleme gibi fonsiyonları vardır.**

<html>
   <head>
       <titte>Form</titte>
       <script type="text/javascript">
           document.formAdi.isim.value = 'Baran Balin';
           document.getElementbyId('yas').value = '25';
       </script>
   </head>
   <body>
       <form name="formAdi" method="post" action="">
           <input type="text" name="isim">
           <input type="text" id="yas">
       </form>
   </body>
</html>

**HTML** içerisine yerleştirilmiş öğeleri çağırmak için, içinde bulunduğu diğer öğelerin çağrılması bir yöntem iken, bir öğeye bir **id** vererek bu **id** üzerinden çağırmak da bir başka yöntemdir.

**JavaScript** kodumuzun ilk satırında metin kutusunun değeri **hiyerarşik olarak çağrılmış ve değiştirilmiştir.** İkinci satırda ise hiyerarşik yapı daha az önemsenerek **JavaScript** içindeki **DOM**’un temellerinden olan **getElementById** metodu kullanılmıştır.

Sonuç olarak eğer client-side olarak HTML’e daha fazla hükmetmek istiyorsanız, kullandığınız dil ne olursa olsun kesinlikle **DOM** un erişim yöntemlerini çok iyi biliyor olmanız gerekir.

Örneğin;

<!DOCTYPE html>
<html>
<body>
  <p>Yeni bir pencere açmak ve biraz içerik eklemek için düğmeye tıklayın.</p>

<button onclick="myFunction()">Tıkla</button>

<script>
function myFunction() {
    var w = window.open();
    w.document.open();
    w.document.write("<h1>Hello World!</h1>");
    w.document.close();
}
</script>

</body>
</html>

[CodePen'de açmak için tıkla](https://codepen.io/baranbalin/pen/JjRLwvY)



## Kaynaklar:

-  https://eloquentjavascript.net/14_dom.html
- https://www.guru99.com/how-to-use-dom-and-events-in-javascript.html
- https://dom.spec.whatwg.org/#DOMTS
- https://www.w3schools.com/js/js_htmldom.asp
