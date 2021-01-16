# Boolean Veri Türü İle Çalışmak
Mantıktan matematiğe, bilgisayar bilimine kadar birçok alanda kullanılan Boolean veri türü, İngiliz matematikçi George Boole’un adından türemiştir. Boolean, sayısal olarak 0 veya 1 şeklinde ifade edilir ki aslında 0 veya 1 dediğimiz şey ise doğru – yanlış yani programlama dillerinde de true – false olarak geçen parametrelerden ibarettir. Aynı zamanda bilgisayar hafızasında sadece 1 bit uzunluğunda yer tutar. 
## Boolean Veri Türü JavaScriptte Neyi İfade Eder?
JavaScriptte boolean veri türü, primitive yani ilkel veri tiplerinden bir tanesidir. Mantık olarak diğer dillerle tamamen aynıdır. Haziran 1997’de ECMAScript’in 1.versiyonuyla standartlaşmış olarak karşımıza çıkmıştır. If-Else, switch, while gibi koşullu ifadelerle birlikte oldukça sık bir şekilde kullanılır. Boolean veri türü Mozilla Firefox, Google Chrome, Safari, Opera ve Internet Explorer tarafından desteklenmektedir.

Boolean'ın kullanımına dair örneği incelemek ve Codepen'de denemek için [linke tıklayın.](https://codepen.io/alperceviz/pen/OJRzbGX)  

Bu kod örneğine baktığımızda var değişkeniyle tanımlanan myBoolean’ı true olarak belirtip console’a yazdırdığımızda en başta da boolean’ın sadece iki değer alacağından söz ettiğimiz üzere true olarak dönecektir. Aynı şekilde 1.satırda tanımlanan myBoolean’ın değerini false olarak güncellediğimizde de console’da çıktı olarak false’u görecektik. Peki bu console’a yazdırdığımız değerin tipini merak ettik mi acaba? Boolean olduğunu söyledik ancak her zaman tanımladığımız ve console’a yazdırdığımız bir değerin tipini bu kadar net bir şekilde bilemeyiz. İşte bu konuda devreye “typeof” kavramı giriyor. Typeof’dan kısaca bahsetmek gerekirse, değişkenle tanımladığımız bir değerin hangi veri tipini bize döndürdüğünü öğrenmemizi sağlayan kavramdır diyebiliriz typeof için. Kod penceresinde 3.satırda bunun örneğini açıkça görebilmek mümkündür. Bu durumda boolean olarak belirtilen bir değerin tipinin tabii ki boolean olduğunu söyleyebiliriz. 


 #### Boolean İle İlgili Örnekler  

 **Örnek-1:**

 ```javascript
    var x = 1;
    console.log(Boolean(x)); // returns true

 ```

 **Örnek-2:**
 ```javascript
    var y = 0;
    console.log(Boolean(y)); // returns true

 ```

 **Örnek-3**
 ```javascript
    var z = "0";
    console.log(Boolean(z)); // returns true
 ```
 Örnek 2 ile Örnek 3 arasındaki farka değinecek olursak aslında burada 0 normal şartlarda false döndürmeliydi. Ancak Örnek-3'teki kullanımına baktığımızda tırnak içerisinde yani string bir ifade olarak görüyoruz. 0, string olarak yer aldığından dolayı console'da true ifadesini görürüz.

***
**Alıştırmalar:**

Aşağıda boolean olarak tanımlanmış değerlerin doğruluğunu Codepen'de [buradaki linkte](https://codepen.io/alperceviz/pen/yLaKaaQ?editors=0010) deneyin.

```javascript
console.log(Boolean(1n));
console.log(Boolean(-1n));
console.log(Boolean(Infinity));
console.log(Boolean({}));
console.log(Boolean(Symbol()));
```
### Soru 1: Aşağıdakilerden hangisi false döner? 
A)  
```javascript
var x = 10 / 'a';
console.log(Boolean(x));
```
B)
```javascript
var y = "" || -2 || 'JavaScript';
console.log(Boolean(y));

```

C) 
```javascript
var z = {2:'js'};
console.log(Boolean(z));

```

### Cevap: A

### Soru 2: Aşağıdakilerden hangisi true döner?

A) 
```javascript
var t = "" && -2 && 'JavaScript';
console.log(Boolean(t));

```
B)

```javascript
var w = false || 0;
console.log(Boolean(w));

```
C) 
```javascript
var a = true;
console.log(Boolean(a));
```
### Cevap: C

# Kaynaklar

https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Boolean
https://www.w3schools.com/js/js_booleans.asp
