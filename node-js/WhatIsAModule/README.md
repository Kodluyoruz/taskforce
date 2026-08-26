Modül Nedir?
======

Node.js uygulaması farklı görevleri olan farklı Javascript dosyalarından oluşur ve Node.js içerdiği tüm Javascript dosyalarına bir modül olarak davranır.
Modül genelde belirli özel bir işlevi olan Javascript dosyasıdır. Bu şekilde Node.js uygulamaya ait olan dosyaları farklı bölümlere ayırarak kodun daha
modülarize olmasını ve aynı zamanda bu kod kontrolünün ve hata yakalamanın daha kolay olmasını sağlar.

## Asal Sayılar Örneği

Burada daha önce üzerine konuştuğumuz asal sayılar örneğimizi daha modüler hale getirelim ve sonrasında diğer dosyaların bu 
modülümüze ulaşmasını sağlayalım.

```javascript
function showPrimeNumbers(lownumber, highNumber) {
    for (let i =lownumber; i <= highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j ++) {
            if( i % j ===0 && j !==i) {
                isPrime = false
            }
        }

        if(isPrime) {
            console.log(i);
        }
    }
}

module.exports = showPrimeNumbers // Burada fonksiyonu diğer dosyaların kullanımına açıyoruz.
```

Şimdi ise başka bir Javascript dosyasından showPrimeNumbers fonksiyonunu kullanıma alalım. Burada şuna dikkat! Direk fonksiyonumuz üzerinden
değil genelde aynı ismi verdiğimiz bir değişken üzerinden fonksiyonu çalıştıracağız.

```javascript
const primeNumbers = require('./primeNumbers'); // Fonksyonu bir değişkene atıyoruz.

primeNumbers.showPrimeNumbers(10, 22); // Kendi değişkenimiz üzerinden çalıştırıyoruz. 
```

Birden fazla fonkiyon gönderiminde ne yapacağız? Ki genelde Node.js uygulamalarında birden daha fazla fonksiyon kullanıma açılır. Burada iki yöntem
kullanabiliriz. Fonksiyonları direk export edebiliriz.

```javascript
module.exports.showPrimeNumbers ...
module.exports.showFivePrimes....
```
veya yine module.exports nesnesi içerisinde tanımlayabiliriz.

```javascript
module.exports = {
    showPrimeNumbers,
    showFivePrimes
}
```

ve yine bu dosyaları kullanmak için yine iki farklı yöntem kullanabiliriz. İlk yöntemde toplam nesneyi bide değişkene atayım sonra metodları bu değişken 
üzerinde çağırıyoruz.
```javascript
const primeNumbers = require('./primeNumbers');

primeNumbers.showPrimeNumbers(10, 22);
primeNumbers.showFivePrimes();
```

veya require ettiğimiz nesneyi `object destructuring` yöntemiyle parçalayıp kullanabiliriz.
```javascript
const { showPrimeNumbers, showFivePrimes } = require('./primeNumbers');

showPrimeNumbers(10, 22);
showFivePrimes();
```

### ES6 Import Söz Dizimi

Burada ES6 Import söz dizimini kullanarak da aynı işlemi yerine getirebiliriz. Fonksiyonu export ederken tek bir fonksiyon için **default**
anahtar kelimesini kullanırız.

```
export default showPrimeNumbers;
``` 

import ederken ise bu kez dosya uzantısını kullanmak durumundayız.
```
import showPrimeNumbers  from './primeNumbers.js';
``` 

Birden fazla fonksiyon kullanımında 
```
// export
export {
    showPrimeNumbers,
    showFivePrimes
}

// import
import {showPrimeNumbers, showFivePrimes } from './primeNumbers.js';

showPrimeNumbers(14, 28);
showFivePrimes();
```

## Daha Fazlası İçin
- [Node.js Modules](https://nodejs.org/api/modules.html)
- [W3Schools Node.js Modules](https://www.w3schools.com/nodejs/nodejs_modules.asp)
