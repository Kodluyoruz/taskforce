# Boolean Veri Türü İle Çalışmak
Bazı ifadeleri sadece iki ihtimale göre değerlendirmek Javascript programlarımızı yazarken oldukça işimize yarar. Bu alternatifler "evet veya hayır", " var ya da yok","1 veya 0", "evet veya hayır" gibi değerler olabilir. Bu tür iki alternatiften bahsettiğimiz veri tipine Boolean veri tipi diyoruz.

Boolean veri tipleri sadece iki değerden birini ifade eder. Bunlar `true` ya da `false` 'dur.

## Boolean() fonksiyonu

```javascript
Boolean(10>9);
//true
```

`Boolean()` fonksiyonu bize sadece iki farklı değer dönebilir. Bunlar ya `true` ya da  `false`'dur. 

Yukarıda `Boolean()` fonksiyonun içinde bir olasılığı karşılaştırdık. Bu olasılık 10 sayısının 9 sayısından büyük olup olmadığıdır. Bu soruda alabileceğimiz iki farklı cevap var. Bunlar doğru veya yanlış yani `true`veya`false` ifadeleridir. 10 sayısı 9 sayısından büyük olduğu için buradan `true` çıktısını alıyoruz.

**İçinde değer barındıran tüm ifadeler `true`'dur.**

```javascript
const b1 = Boolean(100);
const b2 = Boolean(3.14);
const b3 = Boolean(-15);
const b4 = Boolean("Hello");
const b5 = Boolean('false');
const b6 = Boolean(1 + 7 + 3.14);
```

Yukarıdaki tüm ifadelerin çıktısını `true` olarak görürüz.

İçinde değer barındırmayan tüm ifadeler `false` 'dur.

```javascript
const c1 = Boolean(undefined);
const c2 = Boolean(null);
const c3 = Boolean("");
const c4 = Boolean(false);
const c5 = Boolean(NaN);
const c6 = Boolean(0);
const c6 = Boolean(-0);
```

Yukarıdaki tüm ifadeler bize `false` çıktısını verir. Buradan anlayacağımız üzere 0 ve -0 hariç tüm sayılar bize `true` olarak döner. 

Mantıktan matematiğe, bilgisayar bilimine kadar birçok alanda kullanılan Boolean veri türü, İngiliz matematikçi George Boole’un adından türemiştir. Boolean, sayısal olarak 0 veya 1 şeklinde ifade edilir ki aslında 0 veya 1 dediğimiz şey ise doğru – yanlış yani programlama dillerinde de true – false olarak geçen parametrelerden ibarettir. Aynı zamanda bilgisayar hafızasında sadece 1 bit uzunluğunda yer tutar. 
## Boolean Veri Türü JavaScriptte Neyi İfade Eder?
JavaScriptte boolean veri türü, primitive yani ilkel veri tiplerinden bir tanesidir. Mantık olarak diğer dillerle tamamen aynıdır. Haziran 1997’de ECMAScript’in 1.versiyonuyla standartlaşmış olarak karşımıza çıkmıştır. If-Else, switch, while gibi koşullu ifadelerle birlikte oldukça sık bir şekilde kullanılır. Boolean veri türü Mozilla Firefox, Google Chrome, Safari, Opera ve Internet Explorer tarafından desteklenmektedir.

Boolean'ın kullanımına dair örneği incelemek ve Codepen'de denemek için aşağıdaki codepen 'i kullanabilirsiniz.

Bu kod örneğine baktığımızda var değişkeniyle tanımlanan myBoolean’ı true olarak belirtip console’a yazdırdığımızda en başta da boolean’ın sadece iki değer alacağından söz ettiğimiz üzere true olarak dönecektir. Aynı şekilde 1.satırda tanımlanan myBoolean’ın değerini false olarak güncellediğimizde de console’da çıktı olarak false’u görecektik. Peki bu console’a yazdırdığımız değerin tipini merak ettik mi acaba? Boolean olduğunu söyledik ancak her zaman tanımladığımız ve console’a yazdırdığımız bir değerin tipini bu kadar net bir şekilde bilemeyiz. İşte bu konuda devreye “typeof” kavramı giriyor. Typeof’dan kısaca bahsetmek gerekirse, değişkenle tanımladığımız bir değerin hangi veri tipini bize döndürdüğünü öğrenmemizi sağlayan kavramdır diyebiliriz typeof için. Kod penceresinde 3.satırda bunun örneğini açıkça görebilmek mümkündür. Bu durumda boolean olarak belirtilen bir değerin tipinin tabii ki boolean olduğunu söyleyebiliriz. 

## Boolean ile İlgili Örnekler  

 **Örnek 1:**
 ```javascript
    var x = 1;
    console.log(Boolean(x)); // returns true

 ```

 **Örnek 2:**
 ```javascript
    var y = 0;
    console.log(Boolean(y)); // returns false

 ```

 **Örnek 3**
 ```javascript
    var z = "0";
    console.log(Boolean(z)); // returns true
 ```

Örnek 2 ile Örnek 3 arasındaki farka değinecek olursak aslında burada 0 normal şartlarda false döndürmeliydi. Ancak Örnek-3'teki kullanımına baktığımızda tırnak içerisinde yani string bir ifade olarak görüyoruz. 0, string olarak yer aldığından dolayı console'da true ifadesini görürüz.


**Alıştırmalar:**

Aşağıda boolean olarak tanımlanmış değerlerin doğruluğunu Codepen aracılığı ile deneyin.

```javascript
console.log(Boolean(1n));
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));
```

## Kaynaklar
- https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Boolean
- https://www.w3schools.com/js/js_booleans.asp

* [W3Schools](https://www.w3schools.com)
