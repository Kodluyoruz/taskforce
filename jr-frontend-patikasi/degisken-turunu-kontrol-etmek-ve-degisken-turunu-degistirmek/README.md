# Değişken Türünü Kontrol Etmek

Çalıştığımız veriler her zaman kodumuz için uygun olmayabilir. Verilerin kontrolünü sağlayıp ona uygun kod yazabiliriz veya istediğimiz türe dönüştürerek ilerleyebiliriz.

Bu kontrolleri yaparken sıkça typeof kullanılır.
``` javascript
console.log(typeof 42);
// beklenen output: "number"

console.log(typeof 'kodluyoruz');
//beklenen output: "string"

console.log(typeof true);
// beklenen output: "boolean"

console.log(typeof Variable);
// beklenen output: "undefined"
```

Bir başka şekilde  `isInteger( )`,`isFinite( )` veya `isNaN( )` kullanarak da kontrol sağlayabiliriz. 

``` javascript
//isInteger( ) yöntemi, sayıların tam sayı olup olmadığını belirler.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(0.5) //false
//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
Number.isFinite(0) //true
Number.isFinite('123') //false
Number.isFinite('Hello') //false
Number.isFinite(-Infinity) //false
Number.isFinite(0 / 0) //false
// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler.

Number.isNaN(123) //false
Number.isNaN(0) //false
Number.isNaN('123') //false
Number.isNaN('Hello') //false
Number.isNaN('') //false
Number.isNaN(true) //false
Number.isNaN(undefined) //false
Number.isNaN('NaN') //false
Number.isNaN(NaN) //true
```
Bu şekilde kontrolleri sağlanan değerler true veya false dönerler.


## Değişken Türünü Değiştirmek (Type Coercion)

Type Coercion; bir değişkenin türünü, başka bir değişkene dönüştürmeye yarayan yöntemdir. Türkçesi mahalle baskısı olarak karışınıza çıkabilecek olan type coercionın iki tipi vardır. Bunlar explicit ve implicit. Explicit için metotlarla yapılan dönüşüm denilebilir. Implicit için ise operatörlerle veya JavaScriptin kendi yaptığı dönüşümler diyebiliriz

**Explicit Coercion**
``` javascript
String(123) // “123”
parseInt(“123”) // 123
```

**Implicit Coercion**
``` javascript
If(3<5) // true
console.log(‘ ’+123) // “123”
12/”6” // 2
```
Bu dönüşümler nasıl yapılıyor onlara bakalım.

## String Dönüşümü

Eğer bir değeri açık bir şekilde String’e dönüştürmek istiyorsak String(),fonksiyonunu kullanırız. Binary (ikili) + operatörü bir string ifadeye uygulandığında implicit coercion tetiklenir. Örneklerle bunu daha iyi anlayalım.
``` javascript
String(123) // “123” explicit
123 + '' // “123”    implicit
```
Tahmin edebileceğiniz üzere her primitif değer stringe dönüştürülebilir.
``` javascript
String(123) // “123”
String(-12.3) // “-12.3”
String(null) // “null”
String(undefined) // “undefined”
String(true) // “true”
String(false) // “false”
```

Symbol’de durum biraz farklıdır, çünkü dönüşüm sadece explicit bir şekilde yapılabilir, implicit bir şekilde yapılamaz.
``` javascript
String(Symbol('my symbol')) // 'Symbol(my symbol)'
'' + Symbol('my symbol') // TypeError is thrown


```
## Boolean Dönüşümü
Eğer bir değeri açık bir şekilde (explicit) boolean'a dönüştürmek istiyorsak `Boolean()` fonksiyonu kullanılır.
Implicit coercion ise mantıksal operatörlerinin kullanıldığı, mantıksal işlemlerin yapıldığı alanlarda tetiklenir. (|| && !)

``` javascript
Boolean(2) // explicit
var a=!!2 //explicit
if (2) { ... } // implicit due to logical context
!!2 // implicit due to logical operator
2 || 'hello' // implicit due to logical operator
```
Boolean tiplerle uğraşırken truthy, falsy değerler işin içine girerler. Kısaca açıklayacak olursak javascriptin kendi doğası gereği true veya false dönen değerler mevcuttur. Bunlar;
``` javascript
Boolean('') // false
Boolean(0) // false 
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false
```
Yukarıdaki listede olmayan herhangi bir değer, trueya dönüştürülür. Fonksiyon, Dizi (Array),Tarih (Date), kullanıcı tanımlı tip (user-defined-type) vb Symboller gerçek değerlidir(truthy value). Hatta boş nesneler (objectler) ve diziler (arrayler) gerçek değerlidir (truthy value).
``` javascript
Boolean({}) // true
Boolean([]) // true
Boolean(Symbol()) // true
!!Symbol() // true
Boolean(function() {}) // true
```

**Önemli NOT:** Mantıksal operatörlerden `||` ve `&&`, dönüşüm işlemini internally (dahili olarak) yapar. Ama gerçekte ifadenin (operand) değerini döndürür, değer boolean tipinde olmasa bile. Örneklerle daha iyi anlayalım.

``` javascript
// veya “||” operatörü ilk bulduğu true değeri döner
var a= 2 || s || 4 || 5; // 2
// eğer true dönecek değer bulamazsa en son buluğu false değeri döndürür
var b=0 || ”” || false || -0 || 0 // 0
var c= 0 ||  “”  ||  “ 123 ” || 4 ; // ”123” dolu string true dönecektir
// ve ”&&” operatörü ilk bulduğu false değeri döner.
var d=2 && 3 && 0 && 5 && 7; // 0
// eğer false dönecek değer bulamazsa en son buluğu true değeri döndürür
var e= 2 && 3 && 5 && 7 // 7
```

## Nesneler (Objects) için Type Coercion
Şimdiye kadar primitif değerler için type coercion hakkında bilgi sahibi olduk. Nesneler için bu durum biraz daha farklı. JavaScript'te nesneler referans tipler olduğundan üzerinde işlem yapabilmek zordur. İşlem yapabilmek için elimizde primitif değerler olması gerekir. Bu durumda referans tipler primitif tiplere zorlanır. 
Nesneler için en kolay tip dönüşümü booleandır. Primitif olmayan herhangi bir değer örneğin içi dolu veya boş bir nesne (object), dizi (array) fark etmez her zaman true olarak zorlanır. (coerced)

```javascript
console.log(Boolean({})) // true
console.log(Boolean([])) // true
console.log(Boolean([1,2,3])) // true
console.log(Boolean({13:234})) //true
```
Nesnelerde de matematiksel veya mantıksal işlemler yapmak mümkündür. İlk paragrafta belirttiğim gibi bu işlemi ancak primitif bir değere dönüştürerek yapabiliriz. Bu dönüşüm için, giriş nesnesinin (input object) valueOf ve toString metotlarından faydalanılır. Bu iki metot Object.prototype da tanımlanmıştır. Bu sayede türetilmiş tüm tiplerde kullanılır. Örneğin Tarih (Date), Dizi (Array) gibi. İlk olarak nesneler toString() e girer ve çıkan değer primitifse o değeri döner. Primitif değilse valueOf() içine girer. valueOf()'tan çıkan sonuç primitifse o değeri döner değilse error fırlatır. 

```javascript
console.log([1]+[1,2,3])
```
- İşlem yapabilmek için  [ 1 ] ve [ 1,2,3 ] öncelikli olarak primitif türe zorlanır
- [ 1 ].toString(); // sonuç "1" verir
-  [ 1,2,3 ].toString() // sonuç "1,2,3" verir
Bu durumda iki string ifadenin toplanmasından çıkan sonuç
"1" +"1,2,3"

**"11,1,2,3"** olacaktır.

Genel olarak algoritma aşağıdaki gibidir:

**Primitif tipler için:**

1. Eğer değer(input) primitif ise herhangi bir işlem yapma, dön.
2. input.toString() metodunu çağır(Call). Eğer sonuç primitif ise dön.
3. input.valueOf() metodunu çağır(Call). Eğer sonuç primitif ise dön.
4. Ne input.toString() ne de input.valueOf() primitif sonuç vermiyorsa; TypeError fırlat.

**Referans tipler için:**

1. input.toString() metodunu çağır(Call). Eğer sonuç primitif ise dön.
2. input.valueOf()metodunu çağır(Call). Eğer sonuç primitif ise dön.
3. Ne input.toString() ne deinput.valueOf() primitif sonuç vermiyorsa; TypeError fırlat.

**NOT:** `==` operatörünün (lose equality- zayıf eşitlik) farklı iki tipteki a ve b değişkenleri için pratikte nasıl farklı davrandığını, [JavaScript Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/) ’de gösteren matristen görebilirsiniz. 

**ÖRNEKLER**

1. 

``` javascript
console.log(true+false) 
```
- "+" operatörü numeric işlem yapar bu durumlardan boolean ifadeler numaric coercion'a uğrar.
- Number(true) + Number(false) dönüşen ifade
- 1+ 0 şeklini alır
**Sonuç** = 1

2. 

``` javascript
console.log(12 / “6”)
```
- "/" operatörü numeric işlem yapacağından
- Başlangıçta number olduğu için "6" ifadesi
- numaric coercion'a uğrar Number("6") ve 6 değerini döner
-  12 / 6 bu şekli alır
**Sonuç**= 2

3. 

``` javascript
console.log([1,2,3]>null)
```
- ">" karşılaştırma operatörü olduğundan numaric coercion yapacaktır.
- [1,2,3] bir array olup refarans tip tutuğundan primitif değere dönüştürülerek işleme alınır
- [1,2,3].toString() kullanıldığında içeri ”1,2,3” değerini döndürür
- ”1,2,3”> null şeklini alır
- ">" karşılaştırma ifadesi olduğundan tekrar numaric coercion tetiklenir
- String ifade numbera zorlanır Number(“1,2,3”)
- Number("1,2,3") ifadesinin sonucu NaN olacağından 
- NaN>null şeklini alır
- ve NaN kendine dahil hiç kimseye eşit olmadığından!!
**Sonuç**= false

4. 

``` javascript
console.log("number" + 15 + 3)
```
- örneğimizin başında string bir ifade bulunduğundan diğer ögeler için de string coercion tetiklenir 
- "number+ "15" + "3" şeklini alır 
**Sonuç**= "number153"

5. 

```javascript
console.log(['x','y'] == 'x,y')
```
- == operatörü array için numeric coercion yapacaktır
- ['x','y'] dizisinin numeric coercion yapabilmesi için primitif tipe dönüştürmek gerekir.
- ['x','y'].toString() metoduyla "x,y" döner
- Son eşitlik "x,y"=="x,y" halini alır 

**Sonuç**= true
## Alıştırmalar
1. console.log(“foo” +  +“bar”)
2. console.log(‘true’ == true)
3. console.log(null==””)  
4. console.log(0 || “ 0” && {})
5. console.log([“a”] > null)
6. Aşağıda yer alan Codepen 'de deneyelim.

## Cevaplar
(Yazının içindeki soruların cevabı)

1. console.log(“foo” + +“bar”)

// +"bar" => Number("bar") => NaN //"foo"+NaN //"foo" +"NaN" //Sonuç= "fooNaN"

2. console.log(‘true’ == true)

//Number('true')=>NaN //NaN == true //NaN == 1 //Sonuç= false

3. console.log(null==””)

// null sadece kendine ve undefined'a eşit olduğundan //Sonuç= false

4. console.log(0 || “ 0” && {})

//(0 || "0") %% {} //(false || true) && {} => dolu string true döndüğünden //(true) && {} => || operatörü ilk bulduğu true değeri, && operatörü ilk bulduğu false değeri döner 

//true && {} => && operatörü false değer bulamazsa son bulduğu değeri döndürür. //Sonuç={}

5. console.log([“a”] > null)

//"a" > null => array toStirng metodunun içine girer //NaN > null => Numeric dönüştürmeye girer //NaN > 0 //Sonuç= false

6. (Codepen'in Cevabı)

`if(isNaN(yas)){ divEl.innerHTML= Sadece Sayı Giriniz; }`

## Kaynaklar
- https://www.w3schools.com/jsref/jsref_isnan_number.asp
- https://www.w3schools.com/jsref/jsref_isinteger.asp
- https://www.sitepoint.com/javascript-truthy-falsy/
- https://www.w3schools.com/jsref/jsref_isfinite_number.asp
- https://dorey.github.io/JavaScript-Equality-Table/
- https://thrkardak.medium.com/%C3%A7eviri-javascriptte-mahalle-bask%C4%B1s%C4%B1-type-coercion-2d2093db3fb4
