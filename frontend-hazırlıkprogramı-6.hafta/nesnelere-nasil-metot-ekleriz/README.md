# Nesnelere Nasıl Metot Ekleriz?

#### Metot Nedir?

Javascript'in referans veri tiplerinden biri olan ve Türkçede "nesne" anlamına gelen `object` key-value (anahtar-değer) yapı mantığına sahip bir veri tipidir. Yani bir nesne oluştururken bu nesnemiz için bir veya birden fazla property (özellik) tanımlanabilir ve key-value mantığındaki gibi nesnemizin sahip olduğu özellikler için değerler verilmelidir. Özelliklerin sahip olduğu değerler farklı veri tiplerinde olabileceği gibi bir fonksiyonu da işaret edebilir. Bir özellik eğer bir fonksiyonu işaret ediyorsa bu özelliğe ***metot*** denir.

Bir nesneye metot 2 şekilde eklenebilir. Bunlardan biri yukarda bahsedildiği üzere nesneye property olarak eklemek, bir diğeri ise prototype (prototip) fonksiyonu üzerinden eklemektir.

#### Metotu Özellik Olarak Eklemek

Metot, bir nesnenin oluşturulduğu sırada özellik olarak eklenip tanımlanabileceği gibi, önceden tanımlanmış bir nesneye sonradan da eklenebilir. Öncelikle ilk durumu ele alıp aşağıdaki örneği ona göre inceleyelim.

Örneğin; "**person**" adında bir nesne oluşturalım ve bu nesnemiz "**name**", "**surname**","**age**","**city**" özelliklerine ve bu kişinin bana tüm bilgilerini gösterecek bir "**introduce**" metoduna sahip olsun.  

```javascript
var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	city: 'Istanbul',
	introduce: function () {
		console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
	},
};
```

Yukarıdaki gibi, metot tanımlanırken `function()` anahtar kelimesi kullanılarak yapılabileceği gibi EcmaScript6'nın ***arrow function*** yönteminin söz diziminden yararlanarak yapmak da mümkündür. Fakat burada dikkat edilmesi gereken noktalardan biri arrow functionlar `this` erişimine sahip değildir. Yani aşağıdaki gibi bir kullanımda `introduce` fonksiyonu çalıştırıldığında çıktıda özellikler *undefined* (tanımlanmamış) olarak gözükecektir.

```javascript
var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	introduce: () => {
		return `My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`;
	},
};
console.log(person.introduce());
```

Bir metodun *arrow function* söz dizimi kullanılarak yapılmak istendiği bir durumda özelliklere nesnenin ismiyle erişilebilir. Buna göre yukarda *arrow function* kullanarak oluşturduğumuz metot içerisinde özelliklere erişim şu şekilde olacaktır; 

```javascript
var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	introduce: () => {
		return `My name is ${person1.name} ${person1.surname}, I'm ${person1.age} yo.`;
	},
};
```

Şimdi de önceden oluşturulmuş bir nesneye nasıl metot ekleyebiliriz ona bakalım. Aslında burada metodun sahip olabileceği yapı değişmiyor yani `function()` anahtar kelimesi veya *arrow function* söz dizimi kullanılarak oluşturulabilir. Yukardaki örnek üzerinden devam edecek olursak **person** nesnemize **myCity** adında yeni bir metot ekleyelim ve bize kişinin yaşadığı şehri göstersin.

```javascript
person.myCity = function () {
	console.log(`I live in ${this.city}`);
};
person.myCity();
```

Yukardaki örnekte de görüldüğü gibi nesneye yeni bir metot eklemek istendiğinde *nesneİsmi*.*eklenecekMetotİsmi* = ` function()` şeklinde yapılabilir. Veya istendiği takdirde daha öncede bahsettiğimiz gibi *arrow function* ile yapmak da mümkündür.

## Prototype Konusu ve Prototype Yöntemi
Buraya kadar obje tanımlamayı ve objelere fonksiyon eklemeyi öğrendik. Ancak öğrendiğimiz yöntemde key-value yani anahtar değer yöntemini kullanmıştık. 

Ancak nesneye yönelik programlama konseptlerinde objelerin ve sınıfların çok daha detaylı kullanım alanları mevcuttur. Bu noktada da objeye fonksiyon ekleme konusunda karşımıza özel bir kullanım geliyor. Bu kullanımdan önce netleştirmemiz gereken bazı konular var.

Öncelikle javascriptte çoğu tanımın bir obje olduğunu bilmemiz gerekiyor. Evet biraz garip gelebilir ama fonksiyonlar da dahil olmak üzere çok tanımlama bir objedir. Bu obje tabanlı yapısı sayesinde fonksiyonları, başka fonksiyonlara parametere olarak verebilir ayrıca bir fonksiyon da döndürebiliriz.

Bu noktada fonksiyonların ne olduğunu ve nasıl çalıştığını anlamamız gerekiyor. Dile ait bu detayları öğrenebilirsek sonra farklı kullanımlardan rahatça faydalanabiliriz. 

Fonksiyonlar javascript dilinde, Function sınıfının birer objeleridir. Nasıl yani? Evet fonksiyon diye diye bağrımıza bastığımız yapılar da aslında bir sınıfın objeleridir. Hatta bu sınıfın detaylarına ve özelliklerine [buradan](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Function) ulaşabilirsiniz. Ama durun daha bitmedi. Üstelik bu sınıfın bir kurucusu(constructor) ve diğer bütün objeler gibi inherit ettiği bir prototype bile var. Hatta bu prototype yardımıyla fonksiyonun adına bile ulaşabiliriz. Örnek : 

```jsx
const fonksiyonAdi = () => {console.log("Merhaba Kodluyoruz")}
console.log(fonksiyonAdi.name);
// "fonksiyonAdi"
```

Yukarıdaki örnekte basit bir fonksiyon tanımladık ve bu fonksiyonun adını "." operatörüyle eriştik. console.log(fonksiyonAdi.name) kodunu çalıştırdıktan sonra "Merhaba Kodluyoruz" çıktısının gelmediğine dikkat edin. Burada fonksiyonu execute etmedik. Yalnızca bu objenin bir özelliğine eriştik. 

Öyleyse javascriptte fonksiyonların da birer obje olduğunu öğrendik. Peki daha önce öğrendiğimiz şekilde bu js fonksiyonlarına birer yeni özellik ekleyebilir miyiz?

Peki konumuz objeler ve objelere fonksiyon eklenmesi değil miydi? Fonksiyonların özellikleriyle objelerin ne ilgisi var Firdevs hanım? Bu noktada da obje oluşturmanın yeni bir yöntemini öğreneceğiz.

```jsx
function Insan(isim,yas) {
  this.isim = isim;
  this.yas = yas;
}
```

Haydaa ! Bu ne şimdi? Evet javascriptin sürprizlerle dolu olduğu doğrudur. Hanımlar beyler yukarıda gördüğünüz yapının adı JavaScript Object Constructor. Daha önce bir değişken yardımıyla obje tanımlamıştık. Class keywordünü kullanarak da bir sınıf tanımlayabiliyorduk. Yukarıdaki yapı ise fonksiyon kullanarak bir sınıf tanımlamamıza imkan sağlayan yapılardır. Bu şekilde bir obje mutable(mutasyona uğrayabilir daha az havalı haliyle özellikleri değiştirilebilir) bir Sınıf tanımlamış oluyoruz. Sınıf ile obje arasındaki farkı nesneye yönelik programala konusunda daha detaylı öğrenebilirsiniz ancak burada bir obje şablonu oluşturduğumuzu söyleyebiliriz. Artık "new" anahtar kelimesi ile bu şablonda bir obje oluşturabiliriz.

```jsx
const ali = new Insan("ali",21);
console.log(ali.yas);
// 21
```

Böylece artık "ali" isminde bir objemiz hazırlanmış oldu. Peki bu fonksiyon yöntemini kullanarak bir obje hazırladığımızı düşünelim. Bu objeye sonradan ekstra bir fonksyion eklemek istersek? Kafanız karışmasın fonksiyon kurucu yardımıyla hazırladığımız bir sınıf var ve bu Sınıfı kullanarak "new" anahtar kelimesiyle bir obje oluşturduk. Ancak zaman değişti ve artık bu sınıfta kullanmak üzere fazladan bir fonksiyon tanımlamak istiyoruz. Bu fonksiyonu/özelliği öyle bir şekilde eklemeliyiz ki olmayan bir fonksiyon/özellik eklemek istiyoruz. Objelere özellik eklemek konusunda bir problemimiz yok çünkü bunun mutable olduğunu biliyoruz .

```jsx
ali.yeniOzellik = "Sonradan eklenmiş bir özellik";
console.log(ali.yeniOzellik);
// "Sonradan eklenmiş bir özellik"
```

Peki sınıflarda bu durum nasıl oluyor? Sınıf olarak belirlediğimiz şablona tanımı değiştirmeden nasıl fonksiyon veya özellik ekleyebiliriz? 

İşte bu durumla karşılaştığımızda da prototype özelliği karşımıza çıkar. Peki prototype nedir? 

Prototype, sınıflara javascript tarafından otomatik olarak eklenen bir objedir. Eklenmek burada çok doğru bir tabir değil. Aslında bütün objeler tarafından miras alınan bir özelliktir.  Bu özelliği de "proto" keyi ile ekler. Bu prototype alanı içinde hem o objeyi kurduğumuz Sınıfın kurucu fonksiyonuna hem de proto objesine erişebiliriz. Bu prototype özelliğini kullanarak hem sınıfa hem objeye ihtiyacımız olan fonksiyonu ekleyebiliriz. Bu kısımların detayları javascriptte nesneye yönelik programlama konusuna ait olduğu için kapsamı genişletmeden birkaç örnek vererek konuyu tamamlayalım : 

Sınıfa Prototype yardımıyla fonksiyon eklemek :

```jsx
// Sınıfa prototype yardımıyla fonksiyon eklemek
Insan.prototype.yeniFonksiyon = () => {console.log("Merhaba Kodluyoruz")}
const ayse = new Insan("ayşe",22);
ayse.yeniFonksiyon();
// Output : "Merhaba Kodluyoruz"
```

Objeye prototype yardımıyla fonksiyon eklemek : 

```jsx
ayse.__proto__.enYeniFonksiyon = () => {console.log("Tekrar Merhaba Kodluyoruz!")}
ayse.enYeniFonksiyon();
// Output : "Tekrar Merhaba Kodluyoruz!"
```

Bu tarz bir kullanıma özellikle büyük projelerde ihtiyacımız olabilir. Prototype özelliğini kullanarak da objelere ve sınıflara sonradan fonksiyonlar hatta farklı özellikler ekleyebiliriz.

### Kaynaklar

- [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Javascript Object Methods](https://www.w3schools.com/js/js_object_methods.asp)

- [How to Add Methods to an Object in JavaScript](https://www.dummies.com/web-design-development/javascript/how-to-add-methods-to-an-object-in-javascript-for-html5-and-css3-programming/)

- [Arrow Functions](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Javascript: Adding Methods to Objects](https://ncoughlin.com/posts/javascript-adding-methods-to-objects/)

- [https://www.w3schools.com/js/js_object_constructors.asp](https://www.w3schools.com/js/js_object_constructors.asp)

- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)

- [https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Functions](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Functions)

- [https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Function](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Function)

- [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

- [https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b](https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b)

- [https://medium.com/@enescetinkaya162/javascript-constructor-ve-prototype-nedir-3d043535f250](https://medium.com/@enescetinkaya162/javascript-constructor-ve-prototype-nedir-3d043535f250)
