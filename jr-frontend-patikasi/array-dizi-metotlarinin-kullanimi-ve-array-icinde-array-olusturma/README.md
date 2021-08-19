# Array (Dizi) Metotlarının Kullanımı ve Array içinde Array Oluşturma

## Dizi Metotları

JavaScript'te, Arrayler(Diziler) sayesinde gerektiği zaman verilerimizi saklıyor ve bunları manipüle edebiliyoruz. Bu kısımda anlatılan metotlar dizi içerisinde tuttuğumuz  verilerimizi kullanmak istediğimiz yöntemlere göre değiştirip şekil aldırmamızı sağlıyor.

Yazının devamındaki CodePen üzerinde verilen örnekleri incelerken CodePen'in console sekmesini açmayı unutmayın.  

### .push() 

- Push metodu var olan bir diziye yeni bir eleman eklememizi sağlıyor. Eklemek istediğimiz elemanı parantez içerisine yazıyoruz. 


**Örneğin:**

```javascript
let alisverisListem = ["elma", "ekmek", "süt"];

alisverisListem.push("yumurta");

console.log(alisverisListem);
// Yeni Dizimiz ["elma", "ekmek", "süt", "yumurta"] şeklinde olacaktır.
```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

### .pop()

- Pop metodu var olan bir dizideki en son elemanı silmemizi sağlar. Parantez içerisine parametre almaz.


**Örneğin:**

```javascript
let alisverisListem = ["elma", "ekmek", "süt"];

alisverisListem.pop();

console.log(alisverisListem);
// Yeni dizimiz ["elma", "ekmek"] şeklinde olacaktır. Son eleman olan "süt" diziden silinmiş oldu.
```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

### .includes()

- Includes metodu bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder. Boolean (true/false) olarak çıktı alınır.


**Örneğin:**

```javascript
const alisverisListem = ["elma", "ekmek", "süt"];

const elmaVar = alisverisListem.includes("elma");
console.log(elmaVar);
// Dizi içerisinde elma olduğu için true yazdırmasını bekleriz.

const armutVar = alisverisListem.includes("armut");
console.log(armutVar);
// Dizi içerisinde armut olmadığı için ekrana false yazdırmasını bekleriz.

```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

### .slice()

- Slice (dilimleme) metodu bir dizinin bir kısmının kopyasıyla yeni bir dizi oluşturmamıza olanak sağlıyor.


-  Parantez içerisine ise kopyalamak istediğimiz elemanların aralığını başlangıç ve bitiş indeksleri olacak şekilde iki parametre olarak giriyoruz. Bitiş indeksindeki değerin aralığa dahil olmadığını unutmayalım.


- Bu metot uygulandığı dizinin orijinal halini değiştirmiyor bu yüzden yeni oluşacak diziyi farklı bir değişkende saklıyoruz.

**Örneğin:**

```javascript
const alisverisListem = ["elma", "ekmek", "süt"];

const yeniAlisverisListem = alisverisListem.slice(0,2);
// "elma"dan başlayıp "süt"e kadar olan elemanları kopyala."süt" dahil değil.

console.log(yeniAlisverisListem);
// ["elma", "ekmek"] görmeyi bekleriz.
```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

### .join()

- Bazen Dizi içerisinde topladığınız verileri, string (sözdizimi) olarak yazdırmak isteyebilirsiniz. Join metodu bu konuda yardıma yetişiyor.
- Parantez içerisine dizi elemanları arasına koymak istediğimiz string'i parametre olarak girebiliriz. Eğer bir parametre vermezsek virgül bastırır.

**Örneğin:**

```javascript
const alisverisListem = ["elma", "ekmek", "süt"];

const stringAlisverisListem =  alisverisListem.join();
console.log(stringAlisverisListem);
// Çıktıda "elma,ekmek,süt" bekleriz.

const stringAlisverisListem2 = alisverisListem.join(" kiraz ");
console.log(stringAlisverisListem2);
// Çıktıda "elma kiraz ekmek kiraz süt" bekleriz.
```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

### .concat()

- Bu metot farklı dizileri birleştirip tek bir diziye çevirmemizi sağlıyor.


**Örneğin:**

```javascript
const yiyecekler = ["pasta", "baklava", "puding"];
const icecekler = ["su", "kahve"];

const menu = yiyecekler.concat(icecekler);
console.log(menu);
// Çıktıda ["pasta", "baklava", "puding", "su", "kahve"] bekleriz.
```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

**Yazının devamında, içerisinde fonksiyon tanımladığımız ve bu fonksiyonlarla dizideki elemanları manipüle ettiğimiz dizi metotlarını inceleyeceğiz.**

### .forEach()

- Eğer bir dizide her bir eleman için bir fonksiyon çalıştırmak istiyorsak bunu forEach metoduyla yapabiliriz.  Bu metot sayesinde dizideki elemanlar için ayrı ayrı fonksiyon çağırmaktansa tek seferde çağırıp işimizi kolaylaştırıyoruz.


- forEach metodu içerisine kullanmak istediğimiz fonksiyonu tanımlamamız gerekiyor. Fonksiyona ise 3 farklı parametre verebiliyoruz. 


- Bunlar sırasıyla;  *dizi elemanının kendisi*, *dizi elemanının indeksi* ve *dizinin kendisi*  : 


```javascript
 dizi.forEach(function(diziElemanınınKendisi, diziElemanınınIndeksi, dizininKendisi) {
// Bir şeyler yap.
}); 
```

- İhtiyacımıza göre bu parametrelerden hepsini veya aralarından birkaçını kullanabiliriz.


**Örneğin:**

```javascript
// Malzemeler dizisindeki her bir malzemeyi ve onun indeksini konsola yazdıran bir kod yazalım:

const malzemeler = ["yumurta", "un", "süt"];

malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log(malzeme, malzemeIndeksi);
});

// console.log() fonksiyonu her bir malzeme için ayrı ayrı çalışacağından çıktı olarak tüm malzemeleri (ve indekslerini) alt alta görürüz.

```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

### .map()

- Map metodu da forEach gibi kendisine verilen fonksiyonu dizinin her elemanı için uygular fakat forEach'ten farklı olarak sonucu yeni bir dizide tutar. Orijinal dizi olduğu gibi kalır.


**Örneğin:**

```javascript
// Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım:

const sayilar = [1,2,3];

let sayilarin5kati = sayilar.map(function(sayi) {
    return sayi*5;
});

console.log(sayilarin5kati);
// Çıktı olarak [5,10,15] görmeyi bekleriz.

console.log(sayilar);
// Çıktı olarak [1,2,3] görmeyi bekleriz. Orijinal dizimiz aynı kalır.

```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

### .some()

- Some metodu, bir dizinin içerisinde, belirtilen bir koşulu sağlayan en az bir eleman olup olmadığını kontrol etmeye yarar. 
- Dizi içerisinde koşula uyan tek bir elemanın olması sonucun "true" dönmesi için yeterlidir.

- "Boolean" (true veya false) olarak döner.

**Örneğin:**

```javascript
const sayilar = [4,5,6];

// sonucu görebilmek çıktıyı sonuc adlı değişkende tutalım:
const sonuc1 = sayilar.some(function(sayi) {
    return sayi > 5 ;
});

console.log(sonuc1);
// Dizi içerisinde 5'ten büyük bir eleman bulunduğu için çıktıda "true" görmeyi bekleriz.


const sonuc2 = sayilar.some(function(sayi) {
    return sayi <3;
});

console.log(sonuc2);
// Dizi içerisinde 3'ten küçük herhangi bir sayı olmadığı için çıktıda "false" görmeyi bekleriz. 
```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

### .every()

- every metodu belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol ederiz.
- some metodunda olduğu gibi, Boolean yani true veya false olarak döner.
- True dönebilmesi için dizideki tüm elemanların fonksiyondaki koşula uyması gerekir.

**Örneğin:**

```javascript
const sayilar = [4,5,6];

const sonuc1 = sayilar.every(function(sayi) {
    return sayi > 3;
});

console.log(sonuc1);
// Dizideki tüm sayılar 3'ten büyük olduğu için bu sonucun true dönmesini bekleriz.


const sonuc2 = sayilar.every(function(sayi) {
    return sayi > 5;
});

console.log(sonuc2);
// Dizideki tüm sayılar 5'ten büyük olmadığı için sonucun false dönmesini bekleriz.


const sonuc3 = sayilar.every(function(sayi) {
    return sayi > 7;
});

console.log(sonuc3);
// Dizideki hiçbir sayı 7'den büyük olmadığı için sonucun false dömmesini bekleriz.
```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

### .filter()

- filter metodu bir dizi içerisindeki belirli bir koşulu sağlayan elemanlar ile yeni bir dizi oluşturmamıza dolayısıyla dizi elemanlarını filtrelememize yarıyor.
- Yeni oluşacak diziyi bir değişkende saklıyoruz. 
- Orijinal dizi bozulmuyor.

**Örneğin:**

```javascript
const sayilar = [1,2,3,4,5];

const filtrelenmisSayilar = sayilar.filter(function(sayi) {
    return sayi >3;
});

console.log(filtrelenmisSayilar);
// Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.

console.log(sayilar);
// Orijinal dizi bozulmayacağından çıktıda [1,2,3,4,5] olarak görürüz.
```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

### .find()

- Bu metot belirtilen koşula uyum sağlayan dizi elemanını bulmamızı sağlar. 
- Diğer metotların aksine find metodu elemanın kendisini döner.
- Koşulu sağlayan birden fazla eleman varsa, bulduğu ilk elemanı döner.
- Koşulu sağlayan bir eleman bulamazsa undefined döner.

**Örneğin:**

```javascript
const sayilar = [4,5,6,7];

const bulunacakEleman1 = sayilar.find(function(sayi) {
    return sayi === 5;
});
console.log(bulunacakEleman1);
// Dizi içerisinde 5 eleman olarak bulunduğu için çıktıda elemanın kendisini yani 5 görmeyi bekleriz.


const bulunacakEleman2 = sayilar.find(function(sayi) {
    return sayi > 5;
});
console.log(bulunacakEleman2);
// Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.


const bulunacakEleman3 = sayilar.find(function(sayi) {
    return sayi < 3;
});
console.log(bulunacakEleman3);
// Dizi içerisinde 3'ten küçük bir eleman olmadığı için çıktıda undefined görmeyi bekleriz.


```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

### .sort()

- Bu metot, dizi içerisindeki elemanları sıralamaya yarar.
- Orijinal dizi sıralanmış şekilde döner. (Yani dizi mutate eder.)
- Eğer parametre olarak bir fonksiyon verilmezse dizi elemanları string'e çevrilir ve UTF-16 değerlerine göre sıralanır.
- Artan veya azalan olarak sıralamak için farklı bir yol izlenmelidir.

**Örneğin:**

- Varsayılan haliyle (parametre vermeden) sıralamak yapmak istediğimizde:

```javascript
const sayilar = [3,5,2,10,4];

sayilar.sort();
console.log(sayilar);
// Çıktı olarak [10, 2, 3, 4, 5] alırız. 
//(Sayıların string halleri UTF-16 değerlerine göre sıralandıkları için)

```

- Sayılardan oluşan bir dizideki sayıları **artan sırada** olacak şekilde sıralamak istersek:

  ```javascript
  const sayilar = [3,5,2,10,4];
  
  sayilar.sort(function(a,b) {
      return a-b;
  });
  console.log(sayilar);
  // Çıktı olarak [2, 3, 4, 5, 10] alırız.
  
  ```

- Sayılardan oluşan bir dizideki sayıları **azalan sırada** olacak şekilde sıralamak istersek:

```javascript
const sayilar = [3,5,2,10,4];

sayilar.sort(function(a,b) {
    return b-a;
});
console.log(sayilar);
// Çıktı olarak [10, 5, 4, 3, 2] alırız.
```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

### .reduce()

- Bu metot dizimizi yalnızca bir değere indirger.
- Parantez içerisine parametre olarak bir fonksiyon ve accumulator'ün (toplayıcının) başlangıç değeri girilir.
- Bu metot orijinal diziyi değiştirmez. (Mutate etmez.)
- Tam olarak ne yaptığını anlamak için örnekleri inceleyelim.

**Örnekler:**

```javascript
const sayilar = [10,20,30];

// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici (akumulator, sayi) {
    return akumulator + sayi;
}

// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonuc1 = sayilar.reduce(indirgeyici,0);

console.log(sonuc1);
//0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.



// Eğer akümülatorümüzü 0 yerine 5'den başlatsaydık çıkabilecek sonucu görelim:

const sonuc2 = sayilar.reduce(indirgeyici, 5);

console.log(sonuc2);
// 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.
```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

## Dizi İçerisinde Dizi Oluşturma

-  **Önce iç içe dizileri inceleyelim:**

- JavaScript'te  bir dizi başka bir dizinin elemanı olarak yer alabilir.

**Örneğin:**

- Piknik sepetimizde bulunan yiyeceklerin adlarını ve sayılarını tutan bir dizimiz olsun:

```javascript
const piknikSepetim = [
    ["elma",3],
    ["muz",5],
    ["ekmek", 2]
];
```

- Burada piknik sepetindeki bir elemanlara ulaşmak istersek:

```javascript
const ilkEleman    = piknikSepetim[0];  // ["elma",3]
const ikinciEleman = piknikSepetim[1] // ["muz",5]
const ucuncuEleman = piknikSepetim[2] // ["ekmek", 2]
```

- Piknik sepetindeki yiyeceklerin adlarına ulaşma istersek:

  ```javascript
  const yiyecekAdi = piknikSepetim[0][0]; // "elma"
  ```

  

- Piknik sepetindeki yiyeceklerin sayılarına ulaşmak istersek ise:

```javascript
const kacElma = piknikSepetim[0][1]; // 3
```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

- **Dizi içerisinde dizi oluşturalım:**

- Array() constructor fonksiyonu yeni bir dizi oluşturmamıza yarıyor. 

- new Array () şeklinde new keyword'ünü de kullanarak yeni bir dizi oluşturup bunu bir değişkende tutabiliriz: 

```javascript
let kalemlik = new Array();

// Aynı metotla kalemlik dizisi içerisinde yeni diziler oluşturabiliriz:

kalemlik[0] = new Array("Silgi", 2 ,"mavi");
kalemlik[1] = new Array("Kalem", 3, "kırmızı");
kalemlik[2] = new Array("Cetvel", 1, "siyah");

console.log(kalemlik);
// Çıktı olarak [["Silgi", 2, "mavi"], ["kalem", 3, "kırmızı"], ["Cetvel", 1, "siyah"]] şeklinde 3 elemanlı bir dizi döner.

//Bu dizi içerisindeki silgiyi görüntülemek istersek:
console.log(kalemlik[0][0]);
// Kalemlik dizisinin ilk elemanının birinci elemanı döner yani "silgi" dönmesini bekleriz.


// Kalemlik içerisindeki silgilerin rengini görüntülemek istersek:
console.log(kalemlik[0][2]);
// renk kalemlik dizisinin ilk elemanının üçüncü elemanı olduğundan "mavi" döner.


```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

## Pekiştirme Soruları

**1.Soru**

```javascript
let dizi = [2,5,8,11,15,17];

// Uygun dizi metotlarını kullanarak  yukarıda verilen dizinin elemanları içinde 10'dan büyük olan elemanların 5'er katından oluşan yeni bir dizi oluşturun. (sonuç [55, 75, 85] olmalı.)

```

**Aşağıdaki codepen üzerinde çalışabilirsiniz.**

**2.Soru**

```javascript
let dizi = [3,6,9,14,16];

// Uygun dizi metotlarını kullanarak, yukarıdaki dizi için aşağıdaki şartları sağlayan myFunction fonksiyonunu yazın.
// Elemanların arasında 5'ten büyük olan olan bir eleman varsa konsola "Beşten büyük bir eleman mevcut." yoksa "5'ten büyük eleman mevcut değil." yazdır.

function myFunction (dizi){
// Kodunuzu buraya yazın.
}

myFunction(dizi);
```

**Aşağıdaki codepen üzerinde çalışabilirsiniz.**

**3. Soru**

```javascript
let dizi = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.


```

**Aşağıdaki codepen üzerinde çalışabilirsiniz.**

## Kaynaklar

- https://www.elated.com/nested-arrays-in-javascript/
- [W3Schools](https://www.w3schools.com/js/js_array_methods.asp)
