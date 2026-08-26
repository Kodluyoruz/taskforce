## Fat Arrow () => Fonksiyonu Kullanımı

JavaScript'te fonksiyonları tanımlamanın birçok yolu vardır.

Bunlardan birincisi **function** keyword'unu kullanarak yazdığımız fonksiyonlardır.

```javascript
// Function declaration
function greet(who) {
  return `Hello, ${who}!`;
}
greet("John") // output : Hello, John!


// Function expression
const greet = function(who) {
  return `Hello, ${who}!`;
}
 greet("John") // output : Hello, John!
```
İkincisi ES6 ile kullanılmaya başlanan **Arrow Fonksiyon** gösterimi. Aynı zamanda Fat Arrow Fonksiyon da deniliyor. Bunlar daha az kod satırı ile fonksiyonu yazmamıza olanak sağlıyor. Üstte yazdığımız örneği bir de Arrow Fonksiyonu olarak yazmayı deneyelim.
```javascript
const greet = (who) => `Hello, ${who}!`;
```
Bu şekilde daha az kod satırı ile fonksiyonu yazdık. Aynı zamanda eğer bir tane parametre varsa;
```javascript
const greet = who => `Hello, ${who}!`;
```
Parametreyi kapsayan parantezleri de kaldırabiliriz.

Başka örnekler yazarak pekiştirelim.
```javascript
// ES5
var toplam = function(x, y) {
  return x + y;
};

// ES6
let toplam = (x, y) => x + y ;
```
```javascript
// ES5
var sayi = function(x) {
    return x*x
};

// ES6
let sayi = x => x*x;
```
```javascript
// ES5
var multiplier = function(item, multi) {
    return item * multi
};
multiplier(5, 2); // output : 10

// ES6
const multiplier = (item, multi) => item * multi;
multiplier(5, 2); // output : 10
```
```javascript
//ES5
var myList = function(param1, param2) {
  return param1.concat(param2);
};
myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]

//ES6
const myList = (param1, param2) => param1.concat(param2);
myList([1, 2], [3, 4, 5]); // output : [ 1, 2, 3, 4, 5 ]
```
**Arrow fonksiyon kullanırken dikkat etmemiz gereken bazı durumlar vardır.**

- "**return**" keyword;
    * Statement'lar süslü{} parantez kullanılarak yazılırlar. Eğer fonksiyon içerisinde bu parantezlerden varsa **return** keyword'ü kullanmamız gerekir. Bir if Statement'i kullanılan bir arrow fonksiyonu yazalım.
  ```javascript
    var feedTheCat = (cat) => {
      if (cat === 'hungry') {
        return 'Feed the cat';
      } else {
        return 'Do not feed the cat';
      }
    }
  ```
- "**this**" keyword;
    * this'in arrow fonksiyonlardaki davranışı, regular fonksiyonlardaki davranışından farklıdır. Nasıl ve nerede oluşturulursa oluşturulsun this'in arrow fonksiyonu içerisindeki değeri her zaman parent fonksiyonuna eşittir. Diğer bir deyişle arrow fonksiyonu kendi execution context'ini oluşturmaz. Yani kendisini referans göstermez, her zaman parent'ına bakar.
    ```javascript
    let movie = { 

    name: "La la land",

    thisInArrow:() => { 
    console.log("Movie name is " + this.name); // 'this' window'u referans gösterir. Bu yüzden name'yi bulamaz.
    }, 

    thisInRegular(){ 
    console.log("Movie name is " + this.name); // 'this' kendisini referans gösterir ve çalışır.
    } 

   };
   movie.thisInArrow(); // output : Movie name is
   movie.thisInRegular(); // output : Movie name is La la land
   ```

### Pekiştirme Soruları  
```
  -Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, bunların herbirini 1'den başlayarak alt alta yazalım.
```


Çözüm
```javascript
const seriesList = list => {
  
  list.forEach((series, index) => {
    console.log(`${index+1}. ${series}`) 
  });
};

seriesList(["Firefly", "The Mandalorian","Breaking Bad"]);
/* output:
1. Firefly
2. The Mandalorian
3. Breaking Bad
*/
```

```
  - [1,2,3,4,5] arrayini parametre alan bir arrow fonksiyonumuz olsun. Bu arrayin sonucu bize yeni bir array döndürsün. Oluşan yeni arraydaki çift sayılar 2,  tek sayılar ise 3 ile çarpılmış olsun. [1,2,3,4,5] => [1x3, 2x2, 3x3, 4x2, 5x3] =>Sonuç çıktımız **[3,4,9,8,15]** olacak.
```

Çözüm
```javascript
const newArray = (nums) => {

    const newNums = nums.map(e=>{      
        if(e%2==0){
            return e*2
        }else if(e%2==1){
            return e*3
        }
    });

   return newNums 
}

console.log(newArray([1,2,3,4,5]));  // output: [3,4,9,8,15]
```


Daha okunaklı olduğu için ben çoğu zaman Arrow Fonksiyonunu kullanmayı tercih ediyorum. Umarım sağladığı güzellikler şuan daha iyi anlaşılmıştır ve faydalı bir yazı olmuştur.

### Kaynaklar

https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/

https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/
