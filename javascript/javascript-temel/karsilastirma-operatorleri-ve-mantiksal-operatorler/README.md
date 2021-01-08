# Karşılaştırma Operatörleri ve Mantıksal Operatörler# KARŞILAŞTIRMA OPERATÖRLERİ VE MANTIKSAL OPERATÖRLER



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
console.log(2 && 5 && 0 && 7) // 0 (&& operatörü bulduğu ilk falsy değeri yazdırır, falsy değer bulamazsa son değeri döner.)
console.log(2 ||5 || 0 || 7) // 2 (|| operatörü bulduğu ilk truthy değeri yazdırır, truthy değer bulamazsa son değeri döner.)
```



! (değil) operatörü önüne geldiği değişkenin değeri true ise false, false ise true döndürür.

Örn:

```javascript
!true // false
!2 // false
!!2 // true (!2 false dönüyor ise !!2 de true döner.)
```



Konuyu pekiştirmek adına aşağıdaki alıştırmaları yapabilirsiniz:

- [alıştırma 1](https://codepen.io/b-ra-irin/pen/bGwjgJd?editors=0011)
- [alıştırma 2](https://codepen.io/pen/?editors=0011)


