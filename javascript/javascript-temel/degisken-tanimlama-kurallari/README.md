# Değişken Tanımlama Kuralları

Değişkenler verilerin saklandığı birimlerdir. Değişkenleri tanımlamak için bazı keyword'ler kullanılır. ES6'dan önce, JavaScript'te bir değişken tanımlamak için `var` kullanılırdı. Fakat ES6 ile beraber `const` ve `let` kullanılmaya başlandı. Yani bundan sonra örneklerimizde `const` ve `let` kullanacağız.

Değişken tanımlamamız için gerekli bir takım değişken tanımlama kuralları vardır. Bu kurallar değişkenimizi tanımlarken nelere dikkat etmemiz gerektiğini gösterir. Bu kuralları sıralamak istersek şöyle olacaktır:

- Değişken isimleri Türkçe karakter __*içermemelidir.*__
- Değişken isimleri büyük ve küçük harf __*duyarlıdır.*__
- Değişken isimlerinde ilk karakter bir sayı __*olamaz.*__
- Değişken isimlerinde JavaScript etiketleri __*kullanılamaz.*__
- Değişken isimlerinde sayı, harf, alt çizgi ve dolar işareti __*kullanılabilir;*__ boşluk, noktalama işareti veya sembol __*kullanılamaz.*__

Şimdi gelin bu kuralları teker teker daha detaylı bir şekilde inceleyelim.

## Değişken isimleri Türkçe karakter içermemelidir.
Değişken isimlerinde `"ğ, ş, ı, ç, ö, ü, İ"` gibi Türkçe karakterler kullanmamak, ilerde yaşayacağınız sorunların önüne geçebilir. Dolayısıyla Türkçe karakter kullanmamaya özen gösterelim. Mesela örnek vermek gerekirse:

```javascript
function çiçekİsimleri () {
const çiçek1 = "Gül";
const çiçek2 = "Lale";

alert(çiçek1 +" ve "+ çiçek2);
}
```

**Yukarıdaki kodun düzenlenmiş hali şu şekildedir:**

```javascript
function cicekIsimleri () {
const cicek1 = "Gül";
const cicek2 = "Lale";

alert(cicek1 +" ve "+ cicek2);
}
```
[Codepen'de dene.](https://codepen.io/lovelysmilee/pen/RwGdaaJ)

## Değişken isimleri büyük ve küçük harf duyarlıdır.
Değişken tanımlarken büyük ve küçük harf kullanımına dikkat edilmelidir. Aksi halde bazı problemlerle karşılaşmanız olasıdır. 

**Örneğin:**

```javascript 
const userName = "Ahmet";
```

```javascript
const userNAme = "Ahmet";
```
İlk yazdığımız değişken ismi ile ikinci yazdığımız değişken ismi tamamen farklıdır. Eğer kodunuzun bir yerinde ilk yazdığımız, başka yerinde ikinci yazdığımız gibi kullanırsanız hata almanız muhtemeldir. 

Aynı zamanda değişken tanımlarken kodunuzun daha okunabilir olması için, `camelCase` isimlendirme kuralını kullanmalısınız. `camelCase`, ilk kelimenin ilk harfi küçük, ikinci kelimenin ilk harfi büyük yazılması durumudur. Yukarıda yazdığımız ilk değişken isminde `camelCase` yöntemi kullanılmıştır.

## Değişken isimlerinde ilk karakter bir sayı olamaz.
Değişken tanımlarken ilk yazacağımız karakter bir sayı olamaz. 
**Örnek vermek gerekirse:**

```javascript
let 3person = ["Ahmet", "Mehmet", "Ayşe"];
```

Yukarıdaki yazım şekli __*yanlıştır.*__ Bu şekilde yazarsak hata alırız. 
**Doğru yazım şekli aşağıdaki gibidir:**

```javascript
let threePerson = ["Ahmet", "Mehmet", "Ayşe"];
```

**ya da kısıca şu şekilde de yazabiliriz:**

```javascript
let person = ["Ahmet", "Mehmet", "Ayşe"];
```

## Değişken isimlerinde JavaScript etiketleri kullanılamaz.
Değişken tanımlarken `let`, `const`, `if`, `for`, `while` vs. gibi JavaScript anahtar kelimeleri kullanamayız. Kullandığımız takdirde hata alırız. 
**Örneğin:**

```javascript
const if = "value1";

const for = "value2";
```

Yukarıdaki tanımlama şekli __*yanlıştır.*__

## Değişken isimlerinde sayı, harf, alt çizgi ve dolar işareti kullanılabilir; boşluk, noktalama işareti veya sembol kullanılamaz.

```javascript
const user1 = "value";  //sayı ve harf kullanılabilir.

const user_password = "password";  //alt çizgi kullanılabilir.

const user$info = "info"; //dolar işareti kullanılabilir.
```
Ayrıca sayı, harf, alt çizgi ve dolar işareti değişken isminin başında da, içinde de kullanılabilir.
```javascript
const user name = "name";  //boşluk kullanılamaz.

const user?password = "password";  //noktalama işareti kullanılamaz.

const user+info = "info"; //sembol kullanılamaz.
```

### Son olarak değişken isimlerinizin daha doğru ve okunaklı olması için bir kaç ipucu daha vermek isterim:
- Yukarıda da belirttiğim gibi değişken isimlerini tanımlarken çoğu zaman `camelCase` kullanın. Bu kodunuzun daha okunaklı olmasını sağlar.
- Değişken isimleriniz olabildiğince birbirinden farklı olsun ki bir takım karışıklıklar yaşanmasın.
- Değişken isimlerini tanımlarken çoklu kelimeler kullanmaya çalışın, mesela tek kelime yerine iki kelimelik değişken isimleri daha kullanışlıdır çünkü çoğu JavaScript terimleri tek kelimeden oluşur.
- Değişken isimleri tanımlarken çok fazla uzun kelime grupları kullanmamaya çalışın. Değişken isimlerini 2 ila 4 kelime arasında tutmaya özen gösterin.

![JavaScript Değişken Tanımlama](figures/javascript-degisken-tanimlama2.jpg)

## Kaynaklar

- [https://webdunya.com/javascript-degisken-tanimlama/](https://webdunya.com/javascript-degisken-tanimlama/)
- [https://www.mobilhanem.com/javascript-degiskenler/](https://www.mobilhanem.com/javascript-degiskenler/)
- [https://youtu.be/pR99HbNsUys](https://youtu.be/pR99HbNsUys)