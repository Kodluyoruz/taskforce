# Fonsiyona Parametre(params) ve Geridönüş(return) Eklemek


# Fonksiyona Geri Dönüş (return) Eklemek



Fonksiyonlarda return komutunun 2 önemli işlevi vardır.

<ol>
    <li>Fonksiyonun geri dönüş değerini oluşturur.</li>
    <li>Fonksiyonu sonlandırır.</li>
</ol>



Return komutundan sonra  işlem, değişken veya sabit yazılabilir.



````javascript
return false;
return 95;
return cikar(x,y)/7.0 
````



Return ifadesinden sonra döndürülecek değer atlanırsa, undefined döndürülür.

````java
return [[değer]];
````



Return komutu ASI'ne  dahil olduğundan dolayı return ve değeri aynı satırda olmalıdır. Yoksa aşağıdaki senaryo gerçekleşir.

````javascript
return
a*b;
````



ASI tarafından aşağıdaki gibi değiştirilir.

 `````javascript
return;
a*b;
 `````

Ve *return komutundan sonra ulaşılamayan kod* hatasını almamız kaçınılmazdır.



## Örnek

````javascript
function Question(hobby) {
  switch (hobby) {
    case "car":
      return function (name) {
        console.log(name + " do you have a car ?");
      };
      break;

    case "book":
      return function (name) {
        console.log(name + " what is your favorite author?");
      };
      break;

    case "software":
      return function (name, type) {
        console.log(name + " are you interested in " + type + "?");
      };
      break;

    default:
      return function (name) {
        console.log(name + "  how are you ?");
      };
      break;
  }
}

var softwareQuestion = Question("software");
softwareQuestion("Cemre","nodejs");

````



Yukarıdaki kod bloğunun çıktısı aşağıdakilerden hangisidir ?

A) Undefined 

B) What is your favorite author?

C) Cemre are you inretesed in nodejs?



doğru cevap: C 


kaynak:https://www.w3schools.com/js/js_functions.asp