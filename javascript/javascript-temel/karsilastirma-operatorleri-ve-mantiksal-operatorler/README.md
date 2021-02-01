# Karşılaştırma Operatörleri ve Mantıksal Operatörler

## Karşılaştırma Operatörleri 

Karşılaştırma operatörleri, değişkenler veya değerler arasındaki eşitlik ve farkı bulmak için kullanılır. Bu iki değerin karşılaştırmasını yaparak true (doğru) veya false (yanlış) sonucu verir.

Operatör | Açıklaması
-- | --
a == b  | a ve b eşit mi?
a === b | a ve b değerleri ve değer türleri eşit mi?
a != b  | a ve b değerleri eşit değil mi?
a !== b | a ve b değerleri veya değer türleri eşit mi?
a > b   | a değeri b değerinden büyük mü?
a < b   | a değeri b değerinden küçük mü?
a >= b  | a değeri b değerinden büyük veya eşit mi?
a <= b  | a değeri b değerinden küçük veya eşit mi?
?       | kısaltılmış koşul operatörü

##### == Eşitse
```
var a = 10;
var b = "10";
console.log(a==b)  "Ekranda çıkan sonuç = true"
```
a ve b değeri birbirine eşit olduğu için sonuç **true** olacaktır.

##### === Hem değeri hem de türü eşitse

```
var a = 10;
var b = "10";
console.log(a===b)  "Ekranda çıkan sonuç = false"
```
a ve b değeri arasında üç tane eşittir olmasından ötürü burada hem değerin hem de türün eşit olup olmadığı kontrol edilecektir. a ve b değişkenin değeri aynı olmasına karşın türleri farklı olduğu için sonuç **false** olacaktır.

##### != Eşit değilse
```
var a = 10;
var b = "10";
console.log(a!=b)   "Ekranda çıkan sonuç = false"
console.log(a!==b)  "Ekranda çıkan sonuç = true"

var c= "kodluyoruz"
var d= "javascript"
console.log(c!=d)  "Ekranda çıkan sonuç = true"
```
a ve b değişkenimiz birbirine eşit değil ise sonucumuz true dönecektir. İlk logumuzda a'nın değeri ile b'nin değeri aynı olduğu için çıkan sonucumuz **false** olacaktır. İkinci logumuzda ise değerleri aynı olmasına karşın tür kontrolünün yapılıyor olmasından olmasından dolayı değerler eşit olmayacaktır ve **true** sonucumuz çıkacaktır. Üçüncü eşit değilse karşılaştırma operatöründe ise iki string ifade karşılaştırılmıştır ve içerdeki iki değer birbirinden farklı olduğu için **true** sonucu dönecektir.

#####  < Küçükse

```
var a = 10;
var b = 10;
console.log(a<b)  "Ekranda çıkan sonuç = false"
```

a'nın b'den küçük olması durumunda sonucumuz true olacaktır. Fakat yukarıdaki örnekte a değişkeni b'den küçük değildir ve sonucumuz **false** dönecektir.

#####  <= Küçük veya eşitse

```
var a = 10;
var b = 10;
console.log(a<=b)  "Ekranda çıkan sonuç = true"
```

a'nın b'den küçük olması veya eşit olması durumunda durumunda sonucumuz true olacaktır. a değişkeninin değeri ile b değişkeninin değeri eşit olmasından dolayu sonucumuz **true** dönecektir.

#####  > Büyükse ve >= Büyük veya eşitse

```
var a = 20;
var b = 10;
console.log(a>b)  "Ekranda çıkan sonuç = true"

var c = 20;
var d = 20;
console.log(c>=d)  "Ekranda çıkan sonuç = true"

```
a değerimiz b değerimizden büyük olması durumunda true dönecektir. a ve b değişkenleri kıyaslandığında a'nın daha büyük olmasından dolayı **true** sonucunu aldık.

c değerimizin d'den büyük veya eşit olması durumunda true, olmaması durumunda ise false sonucu çıkacaktır. a değerimiz b ye eşit olduğu için sonucumuz **true** olmuştur. 

## Mantıksal Operatörler

JavaScript mantıksal operatörleri kullanarak karşılaştırma işlemini birden fazla koşula göre yapabiliriz. Birden fazla koşulu karşılaştırıp operatörün işlevine göre true (doğru) veya false (yanlış) sonucunu verir. 

##### && ve 

```
var a = 10;
var b = "kodluyoruz";
console.log(a>11 && b=="kodluyoruz")  "Ekranda çıkan sonuç = false"
```
a ve b değişkenimiz loglanırken iki tane koşul yazılmıştır. Birincisi a'nın 11'den büyük olması ve b'nin kodluyoruz'a eşit olması ifadesidir. &&(ve) mantıksal operatörümüz içeride bulunan iki koşulunda sağlanması durumda true sonucunu verecektir. Örneğimize baktığımızda b kodluyoruza eşit olmasına karşın a değerimiz 11'den büyük değildir ve sonucumuz **false** dönecektir.

##### && veya
```
var a = 10;
var b = "kodluyoruz";
console.log(a>11 || b=="kodluyoruz")  "Ekranda çıkan sonuç = true"
```
a ve b değişkenimiz loglanırken iki tane koşul yazılmıştır. Birincisi a'nın 11'den büyük olması ve b'nin kodluyoruz'a eşit olması ifadesidir. ||(veya) mantıksal operatörümüz içeride bulunan iki koşulundan birini sağlanması durumda true sonucunu verecektir. Örneğimize baktığımızda a değerinin 11'den büyük olmamasına rağmen b değeri kodluyoruza eşit olduğu için sonucumuz **true** dönecektir.

##### ! değil

```
var a = 10;
var b = "kodluyoruz";
console.log(!(a>11 || b="kodluyoruz"))  "Ekranda çıkan sonuç = false"
```
! (değil) mantıksal operatörümüz çalışma mantığı çıkan sonucumuzun tam tersini vermesidir. Yukarıda verdiğimiz örnek ! operatörü olmadan true sonucu döndürücektir fakat ! operatörümüz çıkan true sonucu terse çevirdiği için sonuç **false** dönecektir.

### Kaynakça

Kodluyoruz Frontend End 101 Video Eğitimi - Hakan Yalçınkaya

https://www.yusufsezer.com.tr/javascript-operatorler/

https://www.btdersleri.com/ders/JavaScript-Kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rma-ve-Mant%C4%B1ksal-Operat%C3%B6rler
=======
# KARŞILAŞTIRMA OPERATÖRLERİ VE MANTIKSAL OPERATÖRLER



#### KARŞILAŞTIRMA OPERATÖRLERİ

```
Operatör | Tanım
==       | Eşitse
===      | Hem değeri hem de tipi eşitse
!=       | Eşit değilse
!==      | Değeri ya da tipi eşit değilse
<        | Küçükse
>        | Büyükse
<=       | Küçük ya da eşitse
>=       | Büyük ya da eşitse
```

Çoğunu temel matematik dersinden tanıdığımız bu operatörler, JavaScript'te karşılaştırma yapmak amacıyla kullanılır.  Ancak   ==   ve  ===  için durum biraz farklı işliyor.  ==  operatörü karşılaştırılan değişkenlerin değerine bakarken  ===  operatörü hem değerlerine hem de tiplerine bakar.  

Örn:

``` javascript
let a = "13";
let b = 13;
console.log(a == b); // true (iki değişkenin değeri de 13.)
console.log(a === b); // false (a değişkeni string iken b değişkeni number. Bu nedenle false.)

if (a != b) // false (değişkenlerin değerleri eşit olduğundan false döner.)
if (a !== b) //true (değişkenlerin değerleri eşit ancak tipleri eşit olmadığından true döner.)

let c = 1234;
let d = 123;
console.log(a > b); // true 

let e = 2, f = 'hello';

console.log(e !== 2); // false
console.log(e !== '2'); // true
console.log(f !== 'Hello'); // true 

```



#### MANTIKSAL OPERATÖRLER

```
Operatör | Tanım
&&       | Ve
||       | Ya da
!        | Değil
```

Mantıksal operatörler genelde *boolean* değerlerin karşılaştırılmasında kullanılır ve bu durumlarda sonuç olarak *boolean* tipinde bir değer döner. Karşılaştırılan değerler *boolean* değilse dönen sonuç bu tipte olmayacaktır.



##### TRUTHY FALSY DEĞERLER

Boolean olmamasına rağmen false kabul edilen değerlere *falsy* değerler denir.  Bu değerler dışında kalanlara ise *truthy* değerler denir.

- undefined

- null

- 0

- "" (boş string)

- NaN  değerleri *falsy* değerlerdir.

  

```javascript
         || 
Değişken 1 | Değişken 2 | Sonuç
true       | true       | true  
true       | false      | true
false      | true       | true
false      | false      | false
```

|| operatörünün *true* dönmesi için değişkenlerden birinin *true* olması yeterlidir.



```javascript
         &&
Değişken 1 | Değişken 2 | Sonuç
true       | true       | true
true       | false      | false
false      | true       | false
false      | false      | false
```

&& operatörünün *true* dönmesi için tüm değişkenlerin *true* olması gerekir.

Örn:

```javascript
console.log(2 && 5 && 0 && 7) // 0 (&& operatörü bulduğu ilk falsy değeri yazdırır.)
console.log(2 ||5 || 0 || 7) // 2 (|| operatörü bulduğu ilk truthy değeri yazdırır.)

const a = true, b = false, c = 4;

console.log(a || b); // true
console.log(b || b); // false
console.log((c>2) || (c<2)); // true
```



Alttaki kod parçaları ne dönebilir? (Cevap sayfa sonunda)

```javascript
console.log(2 && 5 && 9 && 7)
console.log(null ||NaN || 0 || undefined)
```

a)  7 - undefined

b) 2 - null

c) false 



! (değil) operatörü önüne geldiği değişkenin değeri true ise false, false ise true döndürür.

Örn:

```javascript
!true // false
!2 // false
```



Konuyu pekiştirmek adına aşağıdaki alıştırmaları yapabilirsiniz:

- [alıştırma 1](https://codepen.io/b-ra-irin/pen/bGwjgJd?editors=0011)
- [alıştırma 2](https://codepen.io/b-ra-irin/pen/YzGjLVb?editors=0010) 






```javascript
console.log(2 && 5 && 9 && 7) // 7 (&& operatörü falsy değer bulamazsa okuduğu son değeri döner.)
console.log(null ||NaN || 0 || undefined) // undefined (|| operatörü truthy değer bulamazsa okuduğu son değeri döner.)
```
