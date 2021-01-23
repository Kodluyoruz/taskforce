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

### Sorular

**Soru1: **Aşağıdakilerden hangisi bir kitap nesnesinin kitap bilgilerini ekrana yazdırmak için kullanılabilecek metottur? 

A)

```javascript
	...
	kitapTanit: () => `${this.kitapIsmi} kitabının yazarı ${this.kitapYazari}.`,
};
console.log(kitap.kitapTanit());
```

B)

```javascript
	...
	kitapTanit: function () {
		return `${this.kitapIsmi} kitabının yazarı ${this.kitapYazari}.`;
	},
};
kitap.kitapTanit();
```

C)

```javascript
	...
	kitapTanit: () => `${kitap.kitapIsmi} kitabının yazarı ${kitap.kitapYazari}.`,
};
console.log(kitap.kitapTanit())
```

D)

```javascript
	...
	kitapTanit: () => {
		return `${kitapIsmi} kitabının yazarı ${kitapYazari}.`
	},
};
console.log(kitap.kitapTanit());
```

<details><summary>Cevap</summary>Doğru cevap C şıkkıdır.</details>



**Soru2: **

```javascript
var birey = {
	isim: 'Ali',
	soyisim: 'Veli',
	dogumYili: 1989,
	merhabaDe: (age) => `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
};
birey.yasHesapla = function () {
	return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla()));

```

Yukarıda verilen kodun çıktısı ne olacaktır?

A) *Undefined* hatası verecektir.

B) "Merhaba, ben Ali Veli, 32 yaşındayım"

C) "Merhaba, ben Ali Veli, undefined yaşındayım"

D) Hiçbir çıktı olmayacaktır.

<details><summary>Cevap</summary>Doğru cevap B şıkkıdır.</details>



### Kaynakça

- [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Javascript Object Methods](https://www.w3schools.com/js/js_object_methods.asp)

- [How to Add Methods to an Object in JavaScript](https://www.dummies.com/web-design-development/javascript/how-to-add-methods-to-an-object-in-javascript-for-html5-and-css3-programming/)

- [Arrow Functions](https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Javascript: Adding Methods to Objects](https://ncoughlin.com/posts/javascript-adding-methods-to-objects/)


