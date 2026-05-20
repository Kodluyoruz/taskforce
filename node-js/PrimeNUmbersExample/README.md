Asal Sayı Bulma Örneği
======

Node.js tanımı üzerine konuşurken yaptığımız en temel tanımlamayı tekrar açıklayalım. **Node.js bir javascript çalışma ortamıdır** ve bu nedenle bizler bir tarayıcıya gerek 
kalmadan da Node.js kodlarını çalıştırabileceğiz.

Komut satırından Node.js ile javascript uzantılı dosyaları çalıştırmak için: `node dosya_adi.js` veya `node dosya_adi` komutlarını kullanabiliriz.

## İki Sayı Arasındaki Asal Sayıları Bulmak

Örneğimizde senaryomuz şu şekilde: Komut satırından iki sayı girebileceğiz ve sonuç olarak bu iki sayı arasında bulunan asal sayıları komut satırı ekranına yazdıracağız. Kısaca 
asal sayı tanımını tekrar hatırlayacak olursak: Yalnız 1 ve kendisine bölünebilen, 1 den büyük doğal sayılardır.

- Önce asal sayıları bulabileceğimiz showPrimeNumbers fonksiyonumuzu yazalım ve `primeNumbers.js` olarak kaydedelim. 
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
```
- Ve fonksiyonumuzu çalıştıraşım. Fonksiyonumuzu çalıştırırken iki adet argüman girmemiz gerek ve bu argümanları biz fonksiyonu çalıştırırken yazıyoruz.
```javascript
showPrimeNumbers(7,22);
```
- Yalnız burada şöyle bir temel sorunumuz var, uygulamayı `node primeNumbers` komutuyla çalıştırdığımızda devamlı olarak aynı sonuçları `7,11,13,17,19` alacağız.
Bunun için komut satırından parametreleri gireceğimiz bir yol bulmamız gerekiyor. Bunun için **process** nesnesinden faydalanacağız.

#### Process Object
Şu an için tamamıyla kavramak bizi zorlasa da process nesnesi, node.js çalışma ortamında o an yapılan iş ile ilgili bilgiler içerir. Bizim için önemli olan kısım ise 
`process.argv` özelliğidir. **process.argv** bize node.js programı çalıştığında komut satırından girilen argümanları bir array olarak bize sunar.

Örneğin test.js dosyasını `node test.js one two three` komutuyla çalıştırdığımızda, (rakamlar satır sırasını gösteriyor)
```
0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four
```
sonucunu elde ederiz. O zaman biz bir şekilde bu arrayin ilk iki elemanından kurtulabilirsek argümanlara ulaşabiliriz. Bunun için array.slice metodundan faydalanacağız. 
```javascript
const arguments = process.argv.slice(2);
```
bize sadece argümanlardan yeni bir nesne döner. arguments[0], arguments[1], ....arguments[n] ile n tane argümana ulaşabiliriz. Bize 2 tane argüman gerekli olduğu için 
arguments[0] ve arguments[1]'i kullanacağız. ve uygulamamızı çalıştırmak için 
```javascript
showPrimeNumbers(arguments[0] *1, arguments[1]* 1);
```

yeterli olacaktır. Burada argümanları 1 ile çarpmamızın nedeni ise komut satırından girilen argümanlar varsayılan olarak `String` veritipine dönüşür, onu `Number`
veritipine dönüştürmek isteriz.

Kodumuzun son hali:
```javascript
const arguments = process.argv.slice(2);

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

showPrimeNumbers(arguments[0] *1, arguments[1]* 1);
```
