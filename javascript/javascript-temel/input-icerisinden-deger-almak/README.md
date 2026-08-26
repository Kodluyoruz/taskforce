# Input İçerisinden Değer Almak

Bu yazımızda input içerisinden değer almayı inceleyeceğiz. Öncelikle input oluşturmak ile başlayalım.

## Input Oluşturma
Dinamik olarak input oluşturmak için;
````javascript
var myInput=document.createElement("input");
````

İnputumuzu oluşturduktan sonra gerekli olan özellik eklemelerini yapıyoruz.
````javascript
myInput.setAttribute("id", "inputumuz");
myInput.setAttribute("type","text");
myInput.setAttribute("value","Buraya Yazın");
````
Böylece input ve özellikleri oluşturuldu. Şimdi HTML içine bu input'u yerleştiriyoruz.

1.adım

Body içine bir div oluşturalım.(Daha sonra input'u buraya atayacağız.)
````javascript
var myDiv = document.createElement("div"); 
   
````
şeklinde yapabiliriz.

2.adım

appendChild fonksiyonu ile input'u bu div'e ekleyelim.
````javascript
myDiv.appendChild(myInput);
````

## Input Değerini Alma


Artık input'umuz oluştu ve değerini alabiliriz.
````javascript
var inputDeger = document.getElementById("inputumuz").value;
````


Değeri alert olarak ekranda göstermek için;
```` javascript
window.alert(inputDeger)  // Değerimiz burada yazacak
````

 ## Alıştırmalar

1. Bir input oluşturup yanına ekleyeceğimiz buton ile butona tıkladığımızda değerimiz alt satırda alalım.

 ````html
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" id="myInput" value="Buraya yazınız.">
    <button onclick="myFunction()">Tıklayınız</button>
    <p id="myP"></p>

</body>
</html>
 ````

````javascript
 function myFunction(){
        var x = document.getElementById("myInput").value;
  document.getElementById("myP").innerHTML = ("Değerimiz:" + " " + x );
      }
````

**Aşağıda codepen ile deneyimleyebilirsiniz.**

2. Bir validation form oluşturup e-mail, yaş ve isim bilgilerini standartlara uygun şekilde alalım.


```` Html
 <!DOCTYPE html>
<html>

<head>
	<script type="text/javascript" src="scripts.js">
	</script>
	<link rel="stylesheet" href="styles.css">
</head>

<body>

	<form action="/learn/action_page.php" onsubmit="return sampleFunction()">
		Name (max 15 characters): <input type="text" id="fname" size="15" name="fname"><br>
 Age (from 1 to 100): <input type="text" id="age" size="3" name="age"><br>
 E-mail: <input type="text" id="email" size="25" name="mail"><br><br>
 <input type="submit" value="Submit"> 
</form>



</body>
</html>
````

````javaScript
function sampleFunction() {
  var at = document.getElementById("email").value.indexOf("@");
  var age = document.getElementById("age").value;
  var fname = document.getElementById("fname").value;
  submitOK = "true";

  if (fname.length > 10) {
    alert("The name may have no more than 10 characters");
    submitOK = "false";
  }

  if (isNaN(age) || age < 1 || age > 100) {
    alert("The age must be a number between 1 and 100");
    submitOK = "false";
  }

  if (at == -1) {
    alert("Not a valid e-mail!");
    submitOK = "false";
  }

  if (submitOK == "false") {
    return false;
  }
}
````

[2.Alıştırmayı Denemek için Tıklayın](https://www.bitdegree.org/learn/best-code-editor/javascript-input-example-2)

 ## Kaynaklar 
- https://www.w3schools.com/  

- https://www.bitdegree.org/learn/best-code-editor/javascript-input-example-2


