# İnput İçerisinden Değer Almak

Bu yazımızda input içerisinden değer almayı inceleyeceğiz. Öncelikle input oluşturmak ile başlayalım.

## Input Oluşturma
Dinamik olarak input oluşturmak için;
````
var myInput=document.createElement("input");
````

İnputumuzu oluşturduktan sonra gerekli olan özellik eklemelerini yapıyoruz.
````
myInput.setAttribute("id", "inputumuz");
myInput.setAttribute("type","text");
myInput.setAttribute("value","Buraya Yazın");
````
Böylece input ve özellikleri oluşturuldu.Şimdi HTML içine bu inputu yerleştiriyoruz.

1.adım

Body içine bir div oluşturalım.(Daha sonra inputu buraya atayacağız.)
````
var myDiv = document.createElement("div"); 
   şeklinde yapabiliriz.
````
2.adım

appendChild fonksiyonu ile inputu bu div'e ekleyelim.
````
myDiv.appendChild(myInput);
````

## Input değerini alma


Artık inputumuz oluştu ve değerini alabiliriz.
````
var inputDeğer = document.getElementById("inputumuz").value;
````




Değeri alert olarak ekranda göstermek için;
```` 
window.alert(inputDeğer)  // Değerimiz burada yazacak
````

 ## Alıştırma
 Bir input oluşturup yanına ekleyeceğimiz buton ile butona tıkladığımızda değerimiz alt satırda alalım.

 [Alıştırmayı Denemek İçin Tıklayın](https://codepen.io/tugayturk/pen/wvzyoVG)

