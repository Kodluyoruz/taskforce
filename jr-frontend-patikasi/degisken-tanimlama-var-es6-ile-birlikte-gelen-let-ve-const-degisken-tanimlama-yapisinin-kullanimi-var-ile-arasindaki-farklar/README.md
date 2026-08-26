# Değişken Tanımlama: var, ES6 ile Birlikte Gelen let ve const Değişken Tanımlama Yapısının Kullanımı, var ile Arasındaki Farklar

Değişkenler en basit tabirle değerleri hafızada tutmak için kullanılan yapılardır. Bir tanımlayıcı ile tanımlanır. Tanımlayıcı öncesi `var`, `let` veya `const` deklerasyonlarından biri kullanılarak deklare edilir. Değişken isimlendirmede dikkat etmemiz gerekenler şunlardır.

- Değişken isimleri harf, `_` veya `$` işareti ile başlayabilir. Fakat ES5 (ECMAScript 5) birlikte gelen özellikle UNICODE kodları kullanılırken kaçış karakteri olarak kullanılan `\` işareti ilk karakter olarak kullanılabilir.

```javascript
var formaNumarasi;  let $tcKimlikNo ; var \u0061; //Değişken isimlendirme örnekleri.
```
- İlk harften sonra değişken isimlerinde rakamlar da kullanılabilir. `$` ve ` _` dışında başka noktalama işaretleri kullanılamaz

```javascript
let kullanici1;    const oyuncu_2; //Değişken isimlendirme örnekleri.
```

- Rezerve edilen kelimeler kullanılamaz (var, if, while, function..) Rezerve edilen kelimelerin listesini  [buradan](https://www.w3schools.com/js/js_reserved.asp) inceleyebilirsiniz.

- JavaScript büyük-küçük harf duyarlıdır (case sensitive).

```javascript
let name;
let Name;  //değişkenleri, farklı değişkenlerdir.
```
- Değişken ismindeki harfler arasında boşluk kullanılamaz.

```javascript
let user name ; // Bu kullanım yasaktır. Boşluk kullanılması gerekilen durumlarda 
//let userName veya let user_name olarak tanımlanabilir. 
```
> İsimlendirme kurallarının dışında, isimlendirme yazım çeşitleri hakkında bilgi almak için [https://devopedia.org/naming-conventions](https://devopedia.org/naming-conventions) adresini inceleyebilirsiniz.

## Değişkene Değer Atama ve Veri Türleri

Değişkenlere değer atama `=` operatörü ile yapılır.

```javascript
var okulNumarasi = 12;
```

Şeklinde bir değişken tanımladığımızda `okulNumarasi` değişkenine sayısal bir değer olan 12 değeri atanır.

```javascript
var okulNumarasi;
okulNumarasi = 12;
```

Yukarıda kod parçasında görüldüğü gibi ilk olarak değişken tanımlaması yapılıp, değer ataması daha sonra yapılabilir. Değişkenler değer atanmadığı takdirde `undefined` değerini alırlar.

```javascript
let okulNumarasi = 32, isim = ‘Ali’;
```

Yukarıdaki kod parçasında olduğu gibi tek bir satırda, deklarasyonları aynı fakat farklı tanımlayıcılar ile tanımlamış değişkenler tek bir satırda tanımlanabilir ve değer atanabilir.

JavaScript loosely typed bir programlama dilidir. Yani bir değişkeni tanımlarken değişkenin türünü (sayısal, metinsel, boolean) belirtmemize gerek yoktur. 


```javascript
let okulNumarasi = 12
```

Yazdığımız zaman 12 değerinin sayısal bir değer olduğunu anlar.
Bir değişkene aşağıdaki veri tiplerini atayabiliriz.

- Boolean = Mantıksal ifadedir. `true` veya `false` değeri atanabilir

```javascript
var isEnable = true;
```


- Number = Sayısal ifadedir. 2^53 -1 değerine kadar sayısal değerler atanabilir.

```javascript
const PI = 3.14
```


- BigInt = 2^53-1 değerinden büyük değerleri atayabilir.

```javascript
let bigIntSayi = 9007199254740991
```

- String = Metinsel ifadelerdir. Metinsel ifade tanımlanırken ifade `“ ”` veya `‘ ’` işaretleri arasına yazılır.

```javascript
let isim = ‘osman’ //veya 
let isim = “osman”
```

- Null = Boş değerinin karşılığıdır.

- undefined = Tanımsız değerinin karşılığıdır.

- Symbol = ECMAScript 2015 ile kullanıma girmiştir. `Symbol()` fonksiyonu çağırılarak bir Symbol değeri tanımlanabilir.

```javascript
let Sym1 = Symbol("Sym");
```


- Object = Yukarıda ki 7 veri türü de primitive tiplidir. Objelerde ( nesne, dizi ) gibi referans tipler de değişkenlere atanabilir.

```javascript
let sayilar = [1,2,3,4]
const kisiler = {
name: ‘Ahmet’,
yas: 12}
```

## var
Global scope veya function scope ta deklarasyon sağlayamaya yarayan keyword dur. Scope özelliklerini daha sonra örneklerle açıklayacağız.  `var` ile tanımlanan değişkenlerin özellikleri şunlardır.
- Değişken değerleri değiştirilebilir.

```javascript
var selamla = “Merhaba”;
selamla = “Merhaba insanlik”;
console.log(selamla);    
//Çıktı  -- Merhaba insanlik;
```

- Aynı isimle tekrardan tanımlanabilirler.

```javascript
var okulNumarasi =  414;
var okulNumarasi =  245;
```

- `var` ile tanımlanan değişkenler global scope veya function scope tur. Global scope da tanımlanan değişkenlere her yerden ulaşılabilir. Function içerisinde tanımlanan değişkenlere  ise tanımlı olduğu fonksiyonda ulaşılabilir. Bu konuyu örneklerle açıklayalım.

```javascript
var degisken = "globalde var ile tanimlanan degisken"
if(true){
  degisken = "var ile tanimlanan degiskenlere blocklardan erisilebilir";
}
console.log(degisken)
 /// var ile tanimlanan degiskenlere blocklardan erisilebilir
```
Aşağıda codepen ile deneyimleyebilirsiniz!

Kod parçasında görüldüğü gibi globalde tanımladığımız `degisken` isimli değişkene her yerden erişebiliriz.

```javascript
function scope(){
  var functionScopeDegisken = "Bu degisken function scope da tanimlidir";
  if(true){
    var blocktaTanimliDegisken = "Bu degisken blockta tanimlidir"
		functionScopeDegisken = "Function scope da ki tanımlı degiskenlere o fonksiyonun blocklarından erişilebilir."
  }
  console.log(blockdaTanimliDegisken);
}
scope();
console.log(functionScopeDegisken);
console.log(blocktaTanimliDegisken);
// -- Çıktı -- 
//"Bu degisken blockta tanimlidir"
//"ReferenceError: functionScopeDegisken is not defined
//"ReferenceError: blockdaTanimliDegisken is not defined
```

Aşağıda codepen ile deneyimleyebilirsiniz!

Yukarıdaki kod parçasını incelediğimizde  `functionScopeDegisken` isimli değişken function scope da tanımlanmıştır. Function scope da ki değişkenlere tanımlı oldukları fonksiyonun blocklarından erişilebilir. Function scope da tanımlı değişkenlere fonksiyon dışında erişilmeye çalışıldığı zaman `ReferenceError` hatasını verir. Bunun sebebi function scope da tanımlı olmasıdır.

`blocktaTanimliDegisken` isimli değişken block içerisinde tanımla olsa bile, bulunduğu fonksiyonda tanımlı olduğu için tanımlı olduğu fonksiyonun her yerinden ulaşılabilir, fakat fonksiyon dışından erişilemez.


`var` ile tanımlanan değişkenlerin block scope olmamasından dolayı karşımıza bazı sorunlar çıkabilir. 

**Örneğin:**

```javascript
var  weLove= "Kodluyoruz";
if(2>1) {
	var weLove = "Bootcamp";
	console.log(weLove)
}
console.log(weLove)  
// Çıktı -- Bootcamp
```

Aşağıda codepen ile deneyimleyebilirsiniz!

`weLove` değişkeninin if bloğunun içine girdikten sonra `Bootcamp` ile değişmesini ve blok içerisinde `Bootcamp` değeri ile işlem yapmak istiyoruz, fakat var ile tanımlanan değişkenin block scope olmamasından dolayı globalde tanımladığımız değişken değeri de değişiyor. Bu istenmeyen sonuçlar elde etmemize neden olabilir.


2015 yılında ES6 çıkmasıyla beraber değişken tanımlamak için `let` ve `const` keywordleri de kullanılmaya başlanmıştır.

## let
Değişkenleri block scope ta tanımlayan deklarasyondur. `let` ile tanımlanan değişkenlerin özellikleri şunlardır.
- Değişken değerleri değiştirilebilir.

```javascript
let selamla = “Merhaba”;
selamla = “Merhaba insanlik”;
console.log(selamla);    
//Çıktı  -- Merhaba insanlik;
```

- Aynı isimle tekrardan aynı blokta tanımlanamaz. Farklı blocklarda aynı isimle tanımlanabilir.

```javascript
let okulNumarasi =  414;
if(true){
 let okulNumarasi =  245;
 console.log("Ilk blockta ki deger: "+okulNumarasi);
  if(true){
     let okulNumarasi = 312;
    console.log("Ikinci blockta ki deger: "+okulNumarasi);
     }
}
 console.log("Global scopeta ki deger: "+okulNumarasi);

//--Cikti --
//"Ilk blockta ki deger: 245"
//"Ikinci blockta ki deger: 312"
//"Global scopeta ki deger: 414"
```

Aşağıda codepen ile deneyimleyebilirsiniz!

Yukarıdaki kod parçası aynı zamanda block scope kavramını açıklamamıza da yardımcı olur. `let` ile deklare edilen her değişken bulunduğu blokta tanımlıdır. Başka bir örnek vermek gerekirse

```javascript
function scope(){
  let ilkDegisken = "ilk degisken"
  if(true){
    let ikinciDegisken = "Ikinci degisken"
		console.log(ilkDegisken);
  }
  console.log(ikinciDegisken);
}
scope();
// --Cikti--
// "Ilk Degisken"
// ReferenceError: ikinciDegisken is not defined
```

Aşağıda codepen ile deneyimleyebilirsiniz!

Yukarıdaki kod parçasını incelediğimizde `ilkDegisken` isimli değişkenimiz fonksiyon bloğumuzda tanımlıdır ve alt bloklardan da erişilebilir. `ikinciDegisken` isimli değişkenimiz ise if bloğunun içindedir ve sadece orada tanımlıdır, başka yerlerden erişilemez. `var` ile tanımladığımız değişkenler function scope oluyorlardı. İkisi arasındaki farkı scopelarını açıkladığımız örnekleri inceleyerek gözden geçirebilirsiniz.

## const

Block scope da tanımlı, değeri sonradan değiştirilemez değişkenleri deklare etmek için kullanılan keyword dür.

- `Const` ile tanımlanan değişkenlerin değeri değiştirilemez.

- Değer atamadan tanımlama yapıldıktan sonra değer ataması yapılamaz.

```javascript
const PI ;
PI = 3.14;
// Cıktı --
// SyntaxError: Missing initializer in const declaration
```
- `Const` ile tanımlanan objelerin özellikleri (properties) değiştirilebilir fakat objenin kendisi değiştirilemez. Diziler içinde aynısı geçerlidir. Dizi değerleri değiştirilebilir fakat dizinin kendisi değiştirilemez.

```javascript
const kullanici = {
 isim: "Ahmet",
}
kullanici.isim = "Dila";
console.log(kullanici.isim);

const dizi = [1,2,3];
dizi = [1,2,3,4];

//--Cikti--
// "Dila"
// "TypeError: Assignment to constant variable.
```

Aşağıda codepen ile deneyimleyebilirsiniz!

### Hoisting
Değişkenlerden bahsederken, değişkenleri kullanıp daha sonra tanımlamamızı sağlayan hoisting kavramından da  bahsetmemiz gerekir. JavaScript’te tanımlanan değişkenler yorumlanırken tanımladığınız değişkenler fonksiyon veya ifadenin yukarısına alınarak yorumlanır. Buna hoisting (yukarı alma) denir. Yukarıya alınan değişkenler `var` ile deklare edildiyse atandıkları değer yerine `undefined` değerini alır. `let` veya `const` ile deklare edildi ise `ReferanceError` hatası verir.  `let` ve `const` ile deklare edilen değişkenler bloğun başlangıcından itibaren tanımının yapıldığı yere kadar kadar geçici (temporal dead zone) bölgededir. Hoisting hakkında daha fazla bilgi almak için [bu sayfayı](https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript) inceleyebilirsiniz. 

Örneklerle hoistingi açıklayalım.

```javascript
sayi = 732; // sayi değişkenine tanımlamadan 732 degerını atadık
console.log(sayi);
var sayi; // sayi degiskenini kullandıktan sonra tanımladık.
// Çıktı --  732
```

Yukarıdaki kod parçasının adım adım çalışması,

```javascript
//Adim 1
var sayi= undefined;
//Adim 2
sayi = 732;
//Adim 3
console.log(sayi)
```

şeklindedir. Hoisting kavramını daha iyi anlamak için  [JavaScript görselleştiriciyi](https://ui.dev/javascript-visualizer/)  inceleyebilirsiniz.
Aşağıdaki Codepen aracılığıyla hoisting üzerine daha fazla açıklamalı örnek inceleyebilirsiniz.

## Kaynaklar:
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations)
