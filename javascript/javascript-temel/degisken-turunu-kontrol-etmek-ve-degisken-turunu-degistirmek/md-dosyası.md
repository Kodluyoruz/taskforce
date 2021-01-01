# Değişken Türünü Kontrol Etmek

Çalıştığımız veriler her zaman kodumuz için uygun olmayabilir.Verilerin kontorlünü sağlayıp ona uygun kod yazabiliriz veya istediğimiz türe dönüştürerek ilerleyebiliriz.

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
Bir başka şekilde  isInteger( ),isFinite( ) veya isNaN( ) kullanarak da kontrol sağlayabiliriz. 
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


# Değişken Türünü Değiştirmek (Type Coercion)

Type Coercion; bir değişkenin türünü, başka bir değişkene dönüştürmeye yarayan yöntemdir. Türkçesi mahalle baskısı olarak karışınıza çıkabilecek olan type coercionın iki tipi vardır. Bunlar explicit ve implicit. Explicit için metotlarla yapılan dönüşüm denilebilir. Implicit için ise operatörlerle veya JavaScriptin kendi yaptığı dönüşümler diyebiliriz

**Explicit Coercion**
``` javascript
String(123) // “123”
ParseInt(“123”) // 12
``` 
**Implicit Coercion**
``` javascript
If(3<5) // true
console.log(‘ ’+123) // “123”
12/”6” // 2

```
Bu dönüşümler nasıl yapılıyor onlara bakalım.

# String Dönüşümü


Eğer bir değeri açık bir şekilde String’e dönüştürmek istiyorsak String(),fonksiyonunu kullanırız. Binary(ikili) + operatörü bir string ifadeye uygulandığında implicit coercion tetiklenir.Örneklerle bunu daha iyi anlayalım.
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
 # Boolean Dönüşümü
Eğer bir değeri açık bir şekilde(explicit) boolean ‘a dönüştürmek istiyorsak Boolean() fonksiyonu kullanılır.
Implicit coercion ise mantıksal operatörlerinin kullanıldığı, mantıksal işlemlerin yapıldığı alanlarda tetiklenir.(|| && !)
``` javascript
Boolean(2) // explicit
var a=!!2 //explicit
if (2) { ... } // implicit due to logical context
!!2 // implicit due to logical operator
2 || 'hello' // implicit due to logical operator
``` 
Boolean tiplerle uğraşırken truthy,falsy değerler işin içine girerler. Kısaca açıklayacak olursak javascriptin kendi doğası gereği true veya false dönen değerler mevcuttur.Bunlar;
``` javascript
Boolean('') // false
Boolean(0) // false 
Boolean(-0) // false
Boolean(NaN) // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(false) // false
``` 
Yukarıdaki listede olmayan herhangi bir değer, trueya dönüştürülür. Fonksiyon, Dizi(Array),Tarih (Date), kullanıcı tanımlı tip(user-defined-type) vb Symboller gerçek değerlidir(truthy value). Hatta boş nesneler (objectler) ve diziler (arrayler)gerçek değerlidir(truthy value).
``` javascript
Boolean({}) // true
Boolean([]) // true
Boolean(Symbol()) // true
!!Symbol() // true
Boolean(function() {}) // true
```

**Önemli NOT :** Mantıksal operatörlerden || ve && , dönüşüm işlemini internally (dahili olarak) yapar. Ama gerçekte  ifadenin (operand) değerini döndürür, değer boolean tipinde olmasa bile.Örneklerle daha iyi anlayalım.

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
#Numeric Dönüşümü
Explicit coercion yapılmak istenildiğinde Number(), fonksiyonu uygulayın, tıpkı Boolean() ve String() de yaptığımız gibi.
Implicit coercion biraz kafa karıştırıcı olabilir, çünkü birden fazla durum implicit coercionı tetikler:

**1.** Karşılaştırma Operatörleri (>, <, <=,>=)

**2.** Aritmetik Operatörler( - + * / % ).  Not: Binary(İkili) + operatörü bir string ifadeye uygulandığında; numeric dönüşümü tektiklemez.

**3.** Unary(tekli) + operatör

**4.** Loose equality  operatörü == (!= de dahil) . NOT : == operatörünün her iki tarafında bulunan ifade string ise numeric dönüşümü tetiklenmez.(“123” == ”123” numeric bir karşılaştırma değildir.)
``` javascript
Number('123')   // explicit
+'123'          // implicit unary +
123 != '456'    // implicit loose equality
4 > '5'         // implicit karşılaştırma
```
Aşağıda primitif değerlerin number dönüşümleri mevcuttur
``` javascript
Number(null)                   // 0
Number(undefined)              // NaN
Number(true)                   // 1
Number(false)                  // 0
Number(" 12 ")                 // 12
Number("-12.34")               // -12.34
Number("\n")                   // 0
Number(" 12s ")                // NaN
Number(123)                    // 123
``` 
String bir tipi number tipine dönüştürürken; Js engine, ilk olarak başta ve sonda bulunan boşlukları ve \n, \t karakterlerini kaldırır(trim). Eğer trim edilen değer sayısal bir değer değilse NaN değerini döner. Eğer string boş ise 0 değerini döner.
Null ve undefined ise daha farklı bir şekilde işlem görür. null 0 olurken, undefined ise NaN olur.
Symbollere implicit ve explicit olarak number tip dönüşümü uygulanamaz. Ayrıca symbol üzerine numeric dönüşümü uygulanırsa NaN yerine TypeError hatası fırlatılır.
``` javascript
Number(Symbol('my symbol'))    // TypeError is thrown
+Symbol('123')                 // TypeError is thrown
``` 
***Aklınızdan çıkmaması gereken iki temel kural var.***  Bunlar:

**1.** Null veya undefined tipine == uygulanırken numeric dönüşüm olmaz. null sadece null ve undefined eşittir, ve başka bir şeye eşit değildir.

``` javascript
null == 0               // false, null is not converted to 0
null == null            // true
undefined == undefined  // true
null == undefined       // true
``` 
**2.** NaN hiçbir şeye eşit değildir. Kendisine bile:
``` javascript
if (value !== value) { console.log("we're dealing with NaN here") }
``` 

#Nesneler (Objects) için Type Coercion
Şimdiye kadar primitif değerler için type coercion hakkında bilgi sahibi olduk. Nesneler ve motor karşılaşmaları(engine encounters) ifadesi söz konusu olduğunda, örneğin [1] + [2,3], ilk önce nesnenin primitif bir değere dönüştürülmesi gerekiyor. Bu da daha sonra son değere dönüştürülür. Ve halen ve yalnız üç tür tip dönüşümü söz konusudur: numeric, string ve boolean
Boolean dönüşümü en kolayıdır. primitif olmayan herhangi bir değer her zaman true olarak zorlanır(coerced). Nesnenin(object) veya dizinin(array) dolu yada boş olması önemli değildir.
Nesneler; hem numeric hem de string dönüşümden sorumlu olan   [ [ToPrimitive] ] metodu ile dahili(internal) olarak primitife dönüştürülür.
[ [ToPrimitive] ] metodunun sözde uygulaması şu şekildedir:
[ [ToPrimitive] ] metoduna bir değer(input) ve isteğe bağlı olan dönüşüm için tercih edilen tip geçirilir: Number veya String. preferredType isteğe bağlıdır.
Hem numeric hem de string dönüşüm için, giriş nesnesinin(input object) valueOf ve toString metodlarından faydalanılır. Bu iki metod Object.prototype da tanımlanmıştır. Bu sayede türetilmiş tüm tiplerde kullanılır. Örneğin Tarih (Date), Dizi (Array) vb




Genel olarak algoritma aşağıdaki gibidir:

**Primitif tipler için:**
**1.** Eğer değer(input) primitif ise herhangi bir işlem yapma, dön.
**2.** input.toString() metodunu çağır(Call). Eğer sonuç primitif ise dön
**3.** input.valueOf()metodunu çağır(Call). Eğer sonuç primitif ise dön
**4.** Ne input.toString() ne deinput.valueOf() primitif sonuç vermiyorsa; TypeError fırlat

**Referans tipler için:**
**1.** input.toString() metodunu çağır(Call). Eğer sonuç primitif ise dön
**2.** input.valueOf()metodunu çağır(Call). Eğer sonuç primitif ise dön
**3.** Ne input.toString() ne deinput.valueOf() primitif sonuç vermiyorsa; TypeError fırlat


**NOT:** == operatörünün (loose equality- zayıf eşitlik) farklı iki tipteki a ve b değişkenleri için pratikte nasıl farklı davrandığını,[JavaScript Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/) ’de gösteren matristen görebilirsiniz. 

**ÖRNEKLER**
**1-**
``` javascript
console.log(true+false) 
//true + false
// 1 + false
//1+ 0
Sonuç= 1
``` 
**2-**
``` javascript
console.log(12 / “6”)
// 12 / 6
Sonuç=2
``` 
**3-**
``` javascript
console.log([1,2,3]>null)
// > karşılaştırma operatörü olduğundan numaric coercion yapacaktır 
//[1,2,3].toString=”1,2,3”
//”1,2,3” > null
// Number(“1,2,3”)=NaN 
//NaN kendine dahil hiçkimseye eşit olmadığından!!
//NaN>null
Sonuç=false
```
**4-**
``` javascript
console.log(“number” + 15 + 3) 
//"number15" + 3 
// "number153"
```
**5-**
```javascript
console.log(['x','y'] == 'x,y')
// == operatörü array için numeric coercion yapacaktır
//['x','y'].toString()= "x,y" döner
// "x,y"=="x,y"
Sonuç=true

```       
     
**ALIŞTIRMALAR**

**1-** console.log(“foo” +  +“bar”)
**2-** console.log(‘true’ == true)
**3-** console.log(null==””)  
**4-** console.log(0 || “ 0” && {})
**5-** console.log([“a”] > null)
**6-**  [Codepen'de deneyin](https://codepen.io/cosmicwayfarer/pen/wvzpPxp)


**Kaynakça**
https://www.w3schools.com/jsref/jsref_isnan_number.asp
https://www.w3schools.com/jsref/jsref_isinteger.asp
https://www.sitepoint.com/javascript-truthy-falsy/
https://www.w3schools.com/jsref/jsref_isfinite_number.asp
https://dorey.github.io/JavaScript-Equality-Table/
https://thrkardak.medium.com/%C3%A7eviri-javascriptte-mahalle-bask%C4%B1s%C4%B1-type-coercion-2d2093db3fb4



