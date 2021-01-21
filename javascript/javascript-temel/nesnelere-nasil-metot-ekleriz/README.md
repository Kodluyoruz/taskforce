# Nesnelere Nasıl Metot Ekleriz?

- JavaScript'te nesnelere metot eklemek için iki farklı yol izleyebiliriz.



## 1.Yöntem 

- Hali hazırda oluşturulmuş bir nesnemiz olsun, bu nesneye metot eklerken izleyeceğimiz yöntem şu şekilde olur:

```javascript
nesne.metotAdi = function() {...}
```

- Eklediğimiz bu yeni metot, yalnızca o nesneye özgüdür ve onda tanımlıdır. Bu yüzden aynı constructor fonksiyonundan oluşmuş farklı bir nesne tarafından kullanılamaz.

- Aşağıdaki örneği inceleyelim:

```javascript
// Constructor yani yeni bir nesne yaratmak için kullandığımız fonksiyon aşağıdaki gibi olsun:
function Ogrenci (ad) {
    this.ad = ad;
}

// Bu fonksiyondan bir nesne oluşturalım:
const ogrenci1 = new Ogrenci("Semih");

// Şimdi bu öğrenci nesnesine bir metot ekleyelim:

ogrenci1.adiniSoyle = function() {
    console.log("Benim adım: " + this.ad); // 
}

// Artık bu nesne üzerinden tanımladığımız fonksiyonu çağırabiliriz:

ogrenci1.adiniSoyle();
// Çıktı olarak "Benim adım: Semih" görmeyi bekleriz.

// Başka bir öğrenci nesnesi oluşturalım ve yukarıda eklediğimiz metodu çağıralım:

const ogrenci2 = new Ogrenci("Doruk");

ogrenci2.adiniSoyle();
// Hata alırız, çünkü bu metot ogrenci2 nesnesi için tanımlı değildir.

```

[CodePen'de deneyin](https://codepen.io/onuraksar/pen/rNMdqXw?editors=0012)



---

## 2.Yöntem

- Bir nesneye metot eklemek için **.prototype** kalıbını da kullanabiliriz.

- Bu yolla,  1.yöntemdeki gibi nesnenin kendisine metot eklemekten ziyade,  **constructor** fonksiyonuna bir metot eklemiş olacağımızdan, eklediğimiz metot o constructor fonksiyonundan meydana gelen bütün nesneler tarafından kullanılabilir olur.

- İzleyeceğimiz yöntem şu şekilde olmalı:

  ```javascript
  ConstructorFonksiyonAdi.prototype.metotAdi = function(){ ... }
  ```

  

- Aşağıdaki örneği inceleyelim:

  ```javascript
  // Yeni bir nesne yaratmak için kullandığımız constructor fonksiyonumuz aşağıdaki gibi olsun.
  const Ogrenci = function(ad){
    this.ad = ad;
  };
  
  // Şimdi bu constructor fonksiyonuna .prototype kullanarak .adiniSoyle adlı bir metot ekleyelim:
  Ogrenci.prototype.adiniSoyle=function(){
    console.log("Benim adım: " + this.ad);
  };
  // Bir nesne oluşturalım ve metotu çağıralım:
  const ogrenci1 = new Ogrenci("Semih");
  ogrenci1.adiniSoyle(); // Çıktı olarak "Benim adım: Semih" bekleriz.
  
  // Başka bir nesne oluşturalım ve aynı metotu çağıralım:
  const ogrenci2 = new Ogrenci("Doruk");
  ogrenci2.adiniSoyle(); // Çıktı olarak "Benim adım: Doruk" bekleriz.
  ```

  [CodePen'de deneyin](https://codepen.io/onuraksar/pen/dypmQPg?editors=0011)

---



### Kaynakça

- [Nesnenin kendisine metot ekleme](https://www.dummies.com/web-design-development/javascript/how-to-add-methods-to-an-object-in-javascript-for-html5-and-css3-programming/)

- [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
