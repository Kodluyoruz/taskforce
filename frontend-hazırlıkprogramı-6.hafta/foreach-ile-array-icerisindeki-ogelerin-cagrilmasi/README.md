# JavaScript'de forEach Nasıl Kullanılır?

JavaScript'de forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.

forEach fonksiyonu item, index, array olmak üzere 3 parametre alabilir.

```javascript
arr.forEach(function(value, index, array) {
  // index ve array kullanmak opsiyoneldir
}
```

Konuyu daha iyi anlamak için her parametrenin aldığı değeri gösteren bir örnek yapalım.

```javascript

const animals = ["cat" , "dog" , "bird", "horse"];
  
animals.forEach((value , index , array) => {
  console.log('value: ', value );
  console.log('value parametresinin aldığı index :', index );
  console.log('array:' , array );
});
```
Aynı fonksiyonu her zaman  kullanmak zorunda olduğumuz index parametresiyle  yazalim.

```javascript
const animals = ["cat" , "dog" , "bird", "horse"];
animals.forEach( animal => console.log( animal ) );
//Arrow function gosterimi(ES6)
```
Şimdi de forEach kullanarak yeni bir array oluşturabileceğimiz bir fonksiyon yazalım.

```javascript
const numbers = [4, 11, 9];
const newArray = [];

numbers.forEach(function(numbers){
  newArray.push(numbers*3);
});
console.log(newArray);

// output = [12, 33, 27]
```
Numbers array'ini kullanarak  her elemanının iki fazlasına sahip olan başka bir array oluşturunuz.


```javascript

 const numbers = [12, 24, 36]; 

 numbers.forEach(() => {
     //...
 })
```
## Kaynaklar
- https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
- https://www.w3schools.com/jsref/jsref_foreach.asp
- https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/

