<h1 align="center"> :sparkles:Değişken Tanımlama Kuralları:sparkles: </h1>

<p align="center">
  <img src="figures/javascript.jpg" title="img">
</p>

Değişkenler verilerin saklandığı birimlerdir. Değişkenleri tanımlamak için bazı keyword'ler kullanılır. ES6'dan önce, JavaScript'te bir değişken tanımlamak için ``var`` kullanılırdı. Fakat ES6 ile beraber ``const`` ve ``let`` kullanılmaya başlandı. Yani bundan sonra örneklerimizde ``const`` ve ``let`` kullanacağız.

Değişken tanımlamamız için gerekli bir takım değişken tanımlama kuralları vardır. Bu kurallar değişkenimizi tanımlarken nelere dikkat etmemiz gerektiğini gösterir. Bu kuralları sıralamak istersek şöyle olacaktır:

- Değişken isimleri Türkçe karakter <u>içermemelidir.</u> 
- Değişken isimleri büyük ve küçük harf __*duyarlıdır.*__
- Değişken isimlerinde ilk karakter bir sayı __*olamaz.*__
- Değişken isimlerinde JavaScript etiketleri __*kullanılamaz.*__
- Değişken isimlerinde sayı, harf, alt çizgi ve dolar işareti __*kullanılabilir.*__
- Değişken isimlerinde boşluk, noktalama işareti veya sembol __*kullanılamaz.*__


Şimdi gelin bu kuralları teker teker daha detaylı bir şekilde inceleyelim. :smile:

---

## :star:Değişken isimleri Türkçe karakter içermemelidir.

Değişken isimlerinde `"ğ, ş, ı, ç, ö, ü, İ"` gibi Türkçe karakterler kullanmamak, ilerde yaşayacağınız sorunların önüne geçebilir. Dolayısıyla Türkçe karakter kullanmamaya özen gösterelim. Mesela örnek vermek gerekirse:

```javascript
function çiçekİsimleri () {
const çiçek1 = "Gül";
const çiçek2 = "Lale";

alert(çiçek1 +" ve "+ çiçek2);
}
```
Yukarıdaki kodun düzenlenmiş hali şu şekildedir:
```javascript
function cicekIsimleri () {
const cicek1 = "Gül";
const cicek2 = "Lale";

alert(cicek1 +" ve "+ cicek2);
}
```
[Codepen'de dene.](https://codepen.io/lovelysmilee/pen/RwGdaaJ)

---

## :star:Değişken isimleri büyük ve küçük harf duyarlıdır.

Değişken tanımlarken büyük ve küçük harf kullanımına dikkat edilmelidir. Aksi halde bazı problemlerle karşılaşmanız olasıdır. Örneğin:

```javascript 
const userName = "Ahmet";
``` 
```javascript
const userNAme = "Ahmet";
``` 
İlk yazdığımız değişken ismi ile ikinci yazdığımız değişken ismi tamamen farklıdır. Eğer kodunuzun bir yerinde ilk yazdığımız, başka yerinde ikinci yazdığımız gibi kullanırsanız hata almanız muhtemeldir. 

* Aynı zamanda değişken tanımlarken kodunuzun daha okunabilir olması için, `camelCase` isimlendirme kuralını kullanmalısınız. `camelCase`, ilk kelimenin ilk harfi küçük, ikinci kelimenin ilk harfi büyük yazılması durumudur. Yukarıda yazdığımız ilk değişken isminde `camelCase` yöntemi kullanılmıştır.

---

## :star:Değişken isimlerinde ilk karakter bir sayı olamaz.






