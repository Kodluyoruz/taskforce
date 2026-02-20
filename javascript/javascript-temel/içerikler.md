# JavaScript Temel INDEX

### [JavaScript Nedir?](javascript-nedir/)

#### Sorular
1. JavaScript, kimin tarafından ve hangi yılda geliştirilmiştir?
	- James Gosling tarafından 1995 yılında
	- Guido van Rossum tarafından 1991 yılında
	- Brenden Eich tarafından 1995 yılında (Doğru)
	- Dennis Ritchie tarafından 1972 yılında
2. Aşağıdakilerden yer alan seçeneklerden hangisi doğrudur?
	- JavaScript sadece web sayfalarını interaktif ve fonksiyonel hale getirmeye yarayan bir betik dilidir.
	- JavaScript sadece internet tarayıcılarında çalışır.
	- JavaScript ile Java aynı dildir.
	- JavaScript prototip-tabanlı bir dildir. (Doğru)
3. Aşağıdakilerden yer alan seçeneklerden hangisi bir JavaScript teknolojisi (Library / Framework) değildir?
	- Phaser
	- Django (Doğru)
	- React
	- Express
4. Aşağıdakilerden yer alan ECMAScript versiyonlarından hangisi yayınlanmamıştır?
	- ES4 / ECMAScript 4 (Doğru)
	- ES6 / ECMAScript 2015 (Haziran 2015)
	- ES2016 / ECMAScript 2016
	- ES2019 / ECMAScript 2019

#### Video
1. https://www.youtube.com/watch?v=gndWkaTyo6g
	- Video başlığında belirttiğimiz "Neden JavaScript?" sorusuna en güzel cevabı StackOverflow'un kurucularından olan Jeff Atwood açıklamıştır.
“Any application that can be written in JavaScript, will eventually be written in JavaScript(JavaScript ile yazılabilecek herhangi bir uygulama, eninde sonunda JavaScript ile yazılacaktır.)." - Atwood’s Law
Kısaca ifade etmek gerekirse burada dile getirilen JavaScript dilinin limitleri dahilinde bir uygulama yazılabilirse, bir gün muhakkak başka bir dille yazılmış olsa bile bu uygulama JavaScript'e geçeceğidir. Atwood bu sözleri 2007 yılında söylediğinde JavaScript bugünkü kadar popüler değildi. Günümüzde ise JavaScript en popüler dillerden birisidir.
Bu videoda kısaca Atwood Yasası'nı ve JavaScript'in önemini anlattık.

###  [Birçok Platformda Hello World ve Hello World'ün Önemi](helloworld/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=p9vBqtM7blk
	- Bu videoda; JavaScript ile birçok platformda "Merhaba Dünya" kodumuzu yazıp ilk kez JavaScript kodumuzu çalıştıracağız.

## Değişkenlerle Çalışmak ####

### [Degisken Tanimlama: var, ES6 ile Birlikte Gelen let ve const Değişken Tanımlama Yapısının Kullanımı, var ile Arasındaki Farklar](degisken-tanimlama-var-es6-ile-birlikte-gelen-let-ve-const-degisken-tanimlama-yapisinin-kullanimi-var-ile-arasindaki-farklar/)

#### Sorular
1. Aşağıdaki değişken tanımlama şekillerinden hangisi *doğrudur?*
	- `const ülke = "Almanya";`
	- `let 1countryname = "Almanya";`
	- `const countryName = "Almanya";` (Doğru)
	- `let country.Name = "Almanya";`
2. [ Aşağıdaki değişken tanımlama kurallarından hangisi __*yanlıştır?*__ ]
	- Değişken isimleri büyük ve küçük harf duyarlıdır.
	- Değişken isimlerinde dolar işareti kelime başında kullanılabilir.
	- Değişken isimlerinde alt çizgi kelimenin sonunda kullanılmalıdır. (Doğru)
	- Değişken isimlerinde ilk karakter bir sayı olamaz.

#### Video
1. https://www.youtube.com/watch?v=E739Sr5n2Hw
	- Bu videoda; JavaScript'te değişken tanımlarken kullandığımız var, let, const kullanımını ve aralarındaki farkları anlattık.

### [Number Veri Turu Kullanımı, Temel Aritmetik İşlemler ve İşlem Önceliği ve Arttırma ve Azaltma İşlemleri](number-veri-turu-kullanimi-temel-aritmetik-i̇slemler-ve-i̇slem-onceligi-ve-arttirma-ve-azaltma-i̇slemleri/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=QwEISRm7OxY
	- Bu videoda; değişken tanımlarken kullanabileceğimiz Number Veri Türü ile çalışmak, toplama, çıkarma, bölme, çarpma, üst alma, mod alma ve yakın sayıya yuvarlama işlemleri ile ilgili egzersizler yaptık.

### [Boolean Veri Türü İle Çalışmak](boolean-veri-turu-i̇le-calismak/)
#### Sorular
1. `let a; Boolean(a);` ifadenin çıktısı nedir?
	- True
	- False (Doğru)
2. `const b  = "0"; Boolean(b);` ifadenin çıktısı nedir?
	- True (Doğru)
	- False 
3. Aşağıdakilerden hangisi false döner?
	- `var x = 10 / 'a'; console.log(Boolean(x));` (Doğru)
	- `var y = "" || -2 || 'JavaScript'; console.log(Boolean(y));`
	- `var z = {2:'js'}; console.log(Boolean(z));`
4. Aşağıdakilerden hangisi true döner?
	- `var t = "" && -2 && 'JavaScript'; console.log(Boolean(t));`
	- `var w = false || 0; console.log(Boolean(w));`
	- `var a = true; console.log(Boolean(a));` (Doğru)
#### Video
1. https://www.youtube.com/watch?v=JQist2dAI80
	- Bu videoda; Boolean Veri Türünü ve true/false yapılarını anlattık.

### [Değişken Türünü Kontrol Etmek ve Değişken Türünü Değiştirmek](degisken-turunu-kontrol-etmek-ve-degisken-turunu-degistirmek/)
#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=T-VYmfC3gB0
	- Bu videoda; typeof ile birlikte değişken türlerini kontrol etmeyi anlatılmış olup parsInt, parsFloat ve toString yapıları ile değişken türlerini dönüştürme egzersizleri yaptık.

### [Template Literals Kullanımı](template-literals-kullanimi/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=snHmVqVKpqE
	- Bu videoda; Template Literals ile değişkenlerin String yapılar oluştururken bize ne tür kolaylıklar sağladığını anlattık.

### [String Veri Türü İşlemleri](string-veri-turu-i̇slemleri/)

#### Sorular
1. Regular Expressions işlemlerinde çok kullanılan metin içinde arama methodu hangisidir ?
	- indexOf Metodu
	- lastIndexOf Metodu
	- Slice Metodu
	- Search Metodu (Doğru)
2. Bir ifade arayıp, o ifadeyi başka bir metin ile değiştirmeye yarayan method hangisidir ?
	- Search Metodu
	- Concat Metodu
	- Replace Metodu (Doğru)
	- indexOf Metodu
3. Index numarası ile belirtilen karakterin Unicode değerini veren method hangisidir ?
	- Substring Metodu
	- Replace Metodu
	- Split Metodu
	- charCodeAt Metodu (Doğru)

#### Video
1. https://www.youtube.com/watch?v=mXbLdT-XfzU
	- Metinsel(string) verilerimiz içerisinde arama yapma, değiştirme, karakter bulma, istediğimiz kelimenin olup olmadığını kontrol etme gibi birçok işlem yapmamız gerekebilir. Bu videoda; string veri türü metotlarını hep birlikte öğreneceğiz.
## DOM ile Çalışmak ##

### [Document Object Model(DOM) Nedir](document-object-model(dom)-nedir/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=_OzyMdVDV3g
	- Bu videoda; DOM(Document Object Model) nedir ve nasıl kullanılır, genel yapısını nasıl inceleyebileceğinizi anlattık.
### [DOM içerisinden Etiket ve ID ile Öğe Seçimi](dom-icerisinden-etiket-ve-id-ile-oge-secimi/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=OXR6Z3Yo3hk
	- Bu videoda; getElementById ve querySelector ile DOM içerisinden öğe seçimini anlatmış olup JavaScript ile style ve class eklemeyi gösterdik.

### [prompt ile Kullanıcıdan Bilgi Almak](prompt-ile-kullanicidan-bilgi-almak/)

#### Sorular

1. Prompt ile aşağıdakilerden hangisi yapılır ?
	- Kullanıcı ile etkileşim sağlanmasında kullanılabilir. (Doğru)
	- Bir yazının fontunun değiştirilmesine yardımcı olur.
	- Yalnızca .js uzantılı dosyalar içerisinde kullanılır.Html'e entegre          edilemez.
	- Linklerin işlevselliği için kullanılır.
2. Aşağıdakilerden hangisi Prompt syntax söz dizimine uygundur ?
	- `a=prompt(Bir değer giriniz,"") `
	- `var kelime=prompt(,"")`
	- `kelime=prompt("Bir değer giriniz",değer giriniz)`
	- `var a=prompt(Bir değer giriniz,)` (Doğru)

#### Video
1. https://www.youtube.com/watch?v=4qiEWu593Xs
	- Bu videoda; kullanıcı ile etkileşime geçmek için prompt ile birlikte kullanıcıdan nasıl bilgi alacağımızı anlattık.

### [Liste içerisindeki Öğeye Erişmek ve Yeni Öğe Eklemek](liste-icerisindeki-ogeye-erismek-ve-yeni-oge-eklemek/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=R0fF3H2GPOA
	- Bu videoda; liste içindeki ilk ve son öğeyi bulmayı ve listeye yeni liste öğesi eklemeyi anlattık.

### [DOM'a CSS Class Bilgisi Eklemek veya Çıkarmak](dom'a-css-class-bilgisi-eklemek-veya-cikarmak/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=cAuIZv9cwy4
	- Bu videoda; class eklemeyi, birden fazla class eklemeyi ve class'ın nasıl sildiğimizi anlattık.

## Karar Yapıları / Koşullar ##

### [Karşılaştırma Operatörleri ve Mantıksal Operatörler](karsilastirma-operatorleri-ve-mantiksal-operatorler/)

#### Sorular
1. Aşağıdaki logların hangisinde sonuç hem değer olarak hem tür olarak karşılaştırıldıktan sonra ekran yazdırılır?
	- `console.log(a==b)`
	- `console.log(a!=b)`
	- `console.log(a>=b)`
	- `console.log(a===b)` (Doğru)
2. `var user="guest"; var price=1;` verilen değişkenlere göre aşağıdakilerin hangisinde sonuç true dönecektir?
	- `console.log(price>0 && !user=="guest")`
	- `console.log(price>0 && user=="guest")` (Doğru)
	- `console.log(price>2 && user=="guest")`
	- `console.log(!(price>0 && user=="guest"))`
3. `console.log(!!2);` kod parçaası ne döner?
	- False
	- True (Doğru)
	- Hata Verir
	- 2

#### Video
1. https://www.youtube.com/watch?v=XePaa7gw1qs
	- Bu videoda; karşılaştırma operatörlerini ve mantıksal operatörleri anlattık.

### [Koşul Yapısı Kullanımı (if / else)](kosul-yapisi-kullanimi-if-else/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=il2GbdS_Oo0
	- Bu videoda; if ve else yapısını, istediğimiz koşullara göre kod bloklarının nasıl çalıştırılabileceğini anlattık.

### [Çoklu Koşul Yapısı Kullanımı](coklu-kosul-yapisi-kullanimi/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=LtuzpDY7ngU
	- Kod bloklarımızı çalıştırırken birden fazla veya iç içe geçmiş koşul yapılarını kullanmamız gerekebilir. Bu videoda; if/else/else if bloklarının çoklu nasıl kullanılabileceğini hep birlikte inceleyelim.

### [Ternary Operator( koşul ? doğruysa : yanlışsa) ile If Kullanımı](ternary-operator-kosul-dogruysa-yanlissa-ile-if-kullanimi/)

#### Sorular
1. `console.log(boolean)` bize hangi çıktıyı verir ?
```javascript
   
       let boolean;
   
       const isBooleanTrue = boolean ? true : false;
   
       console.log(isBooleanTrue)
       >> false
   
       console.log(boolean)

```
- true
- false
- undefined (doğru)
- NaN
2. `console.log(permission)` bize hangi çıktıyı verir 
```javascript
       let age = 24;
       let permission = (age >= 18) ? "Giriş yapabilirsiniz." : "Giriş yapamazsınız.";

       console.log(permission);
```
- true
- "Giriş yapabilirsiniz." (doğru)
- false
- "Giriş yapamazsınız."

[Codepen'de deneyin](https://codepen.io/ecsabanci/pen/bGwLEyJ)

3. `console.log(isEqual)` bize hangi çıktıyı verir ?
```javascript

       let firstCity = "Ankara";

       let secondCity = "İstanbul";

       const isEqual = (firstCity === secondCity) ? "İki şehir aynı" : "İki şehir aynı değil";

       console.log(isEqual)
```
- "Ankara"
- "İstanbul"
- "İki şehir aynı"
- "İki şehir aynı değil" (doğru)
4. `console.log(canBuy)` bize hangi çıktıyı verir ?
```javascript
    var money;
    var canBuy = 
        (money < 17) ? "Satın alamazsın..";
        (money > 30) ? "Satın alabilirsin..";
        "Para miktarını girmen gerekmektedir..";

    console.log(canBuy) 

```
- "Satın alamazsın.."
- "Satın alabilirsin.."
- "Param miktarını girmen gerekmektedir.." (doğru)
-  false

#### Video
1. https://www.youtube.com/watch?v=0DetgkxkMok
	- Bu videoda; ternary operator ile short if kullanımını anlattık.

## Fonksiyonlar ##

### [Fonksiyon Nedir ? Neden Kullanırız?](fonksiyon-nedir-neden-kullaniriz/)

#### Sorular
1. Javascript'te fonksiyon nasıl yaratılır?
	- `function:myFunction()`
	- `function = myFunction()` 
	- `function myFunction()` (Doğru)
2. myFunction isimli fonksiyon nasıl çağrılır?
	- `myFunction()` (Doğru)
	- `call function myFunction()`
	- `call myFunction()`

#### Video
1. https://www.youtube.com/watch?v=_H5weWiEQYw
	- Bu videoda; fonksiyon nedir ve nasıl tanımlanır konularını anlattık.

### [Fonsiyona Parametre(params) ve Geridönüş(return) Eklemek](fonsiyona-parametre(params)-ve-geridonus(return)-eklemek/)

#### Sorular
1. Aşağıdakilerden hangisi bir fonksiyona parametre göndermenin doğru yoludur?
	- Fonksiyon isminden sonra iki adet yıldız karakteri arasına parametreleri yazmak
	- Fonksiyon isminden sonra boşluk bırakmadan parametreleri yazmak
	- Fonksiyon isminden sonra yay ayraç arasına parametreleri yazmak (Doğru)
2. Aşağıda kod bloğunun çıktısı aşağıdakilerden hangisidir ?
```javascript
function Question(hobby) {
  switch (hobby) {
    case "car":
      return function (name) {
        console.log(name + " do you have a car ?");
      };
      break;

    case "book":
      return function (name) {
        console.log(name + " what is your favorite author?");
      };
      break;

    case "software":
      return function (name, type) {
        console.log(name + " are you interested in " + type + "?");
      };
      break;

    default:
      return function (name) {
        console.log(name + "  how are you ?");
      };
      break;
  }
}

var softwareQuestion = Question("software");
softwareQuestion("Cemre","nodejs");
```
- Undefined 
- What is your favorite author?
- Cemre are you inretesed in nodejs? (Doğru)

#### Video
1. https://www.youtube.com/watch?v=J4hxdAfxayA
	- Bu videoda; function içerisinde parametre kullanımını ve  return ile function içerisinden bilgi dönme konularını işledik.

### [Fat Arrow () => Fonksiyonu Kullanımı](fat-arrow-fonksiyonu-kullanimi/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=Tv7iBzbMDcI
	- Bu videoda; ES6 ile birlikte standartlaşmış olan Arrow Function(fat arrow) kullanımını hep birlikte inceleyeceğiz.

### [DOM Etkinlikleriyle Çalışmak](dom-etkinlikleriyle-calismak/)

#### Sorular
1. Soru işaretli kısmımda hangi DOM etkinliği kullanılmalıdır?
```html
       <div id="text">
        <div>
        <input id="input" placeholder="write">
        <div id="output" style="background-color:orange ;width:60%"> çıktı </div>
       </div>
      </div>
```
```javascript
     let input = document.getElementById('input');
     let output = document.getElementById('output');

     input.addEventListener('?', function(event) {
     output.innerText = event.target.value.split('').join('');
     });
```
- click
- input (Doğru)
- keypress
- select
2. x olan kısıma hangi DOM etkinliği atanmalıdır ?
```html
      <div id="yellow"></div>
      <div id="purple"></div>    
```
```css    
    #yellow, #purple {
    width:70px;
    height:70px;
    border-radius:50%;
    margin:15px;
     }

    #yellow{
      background-color:yellow;
    }

    #purple{
      background-color:rebeccaPurple;
    }
```
```javascript 
     let yellowball = document.getElementById("yellow");
     let purpleBall = document.getElementById("purple");

     yellowball.x = function() {
     purpleBall.style.backgroundColor = "yellow";
     }
     
```
- open
- currentTarget
- play
- onclick (Doğru)

#### Video
1. https://www.youtube.com/watch?v=7qF9WvUsdF8
	- DOM içerisinde her yapının tıklanma, mouse ile üzerine gelme gibi birçok etkinliğini takip edebiliriz. Bu özelliklere genel bakışı ve DOM Events(etkinlikler) yapısını nasıl kullanabileceğimizi bu videoda anlattık.

## localStorage ##

### [localStorage ile Veri Eklemek, Düzenlemek ve Silmek](localstorage-ile-veri-eklemek-duzenlemek-ve-silmek/)

#### Sorular
1. LocalStorage ve SessionStorage'da hangi veriler saklanmalıdır? Bunlara kimler erişebilir? Erişildiğinde düzenleme yapılabilir mi? **(Soru Eklenemedi)**
  - Cevap: LocalStorage'da güvenlik ihlaline sebep olmayacak ve önem arz etmeyen veriler saklanmalıdır. Bunlara hem tarayıcı üzerinden kullanıcı hemde erişim izni verildi ise üçüncü parti programlar erişebilir veya düzenleme yapabilir.
2. LocalStorage ve SessionStorage'a JavaScript üzerinden değilde başka bir yoldan veri eklemek, düzenlemek veya silmek mümkünmüdür?
  - Verileri tarayıcı üzerinden ekleyip çıkarmak veya üzerinde düzenleme yapmak mümkündür. (Doğru)
  - Verileri tarayıcı üzerinden ekleyip çıkarmak veya üzerinde düzenleme yapmak mümkün değildir.

#### Video
1. https://www.youtube.com/watch?v=VYbkY1RK6mc
	- Bu videoda; kullandığımız browser içerisinde bulunan localStorage'a veri ekleme, veriyi düzenleme, çağırma ve silme işlemini anlattık.

### [localStorage içerisine Farklı Türde Veriler Eklemek](localstorage-icerisine-farkli-turde-veriler-eklemek/)

#### Sorular
1. localStorage hangi veri türünde data tutar?
	- Boolean
	- String (Doğru)
	- Object
	- Number
2. `var movies = ["Kasaba", "Kış uykusu","Bir Zamanlar Anadolu"]` Verilen movies dizisini localStorage alanına nasıl kaydetmeliyiz?
	- `localStorage.setItem("Nuri Bilge Ceylan", movies);`
	- `localStorage.getItem("Nuri Bilge Ceylan", movies);`
	- `localStorage.setItem("Nuri Bilge Ceylan", JSON.stringfy(movies));` (Doğru)
	- `localStorage.getItem("Nuri Bilge Ceylan" , JSON.stringfy(movies));`
3. localStorage alanına kaydedilen veriye nasıl erişiriz ?
	- `var retrievedData = JSON.parse(localStorage.getItem("Nuri Bilge Ceylan"))` (Doğru)
	- `var retrievedData = JSON.parse(localStorage.setItem("Nuri Bilge Ceylan"))`
	- `var retrievedData = localStorage.setItem("Nuri Bilge Ceylan")`
	- `var retrievedData = localStorage.getItem("Nuri Bilge Ceylan")`
4. localStorage alanından kaydedilen bütün verileri nasıl sileriz?
	- `localStorage.clearItem()`
	- `localStorage.remove()`
	- `localStorage.removeItem(key)`
	- `localStorage.clear()` (Doğru)

#### Video
1. https://www.youtube.com/watch?v=WwpupdrxVs8
	- Bu videoda; localStorage içerisinde farklı türde verileri nasıl tuttuğumuzu ve nasıl kullanabileceğimizi anlattık.

## Form ##

### [Form ve Form Submit Yönetimi](form-ve-form-submit-yonetimi/)

#### Sorular
1. Kullanıcıdan, gizli kalması gereken bilgileri aldığımızda kullanmamız gereken method hangisidir?
	- GET
	- POST (Doğru)
	- PUT
	- DELETE
2. Form'un içindeki form elementlerinin(input) value'su her değiştiğinde bu değişen value'yu bizim her defasında elde etmemize olanak sağlayan event hangisidir?
	- handleSubmit
	- handleChange
	- onSubmit
	- onChange (Doğru)

#### Video
1. https://www.youtube.com/watch?v=bU3iC5eA3M4
	- JavaScript ile form'un GET veya POST işlemi olmadan önce denetimini yapabilir, default tepkisini değiştirebiliriz. Bu videoda form yönetimi konusunu anlattık.

### [Input içerisinden Değer Almak](input-icerisinden-deger-almak/)

#### Sorular
1. Hangisi aşağıda bulunan input için değerini almaya yarayacak yöntemlerden biri değildir ?
```html
<input type="text" id="myInput" value="myValue">
```
- document.getElemenById("myInput).value
- var x = document.getElemenById("myInput); x.value ;
- document.createElement("value") (Doğru)

2. Aşağıdakilerden hangisi butonun içindeki değeri almaya yarar?
```html
First Name: <input type="text" id="myText" value="Mickey">

<p>Click the button to display the value of the value attribute of the text field.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>
```
- A)

```html
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}
```
(Doğru)
- B)
```html
function myFunction() {
    var x = document.getElementById("myText");
    document.getElementById("demo").innerHTML = x;
}
```
- C) 
```html
function myFunction() {
    var x = document.querySelectorAll("myText").value;
    document.getElementById("demo").innerHTML = x
```

#### Video
1. https://www.youtube.com/watch?v=q7HfV7f39tI
	- Bu videoda; form yönetimi ile birlikte ınput içerisindeki bilgiyi nasıl alıp kullanabileceğimizi anlattık.

## Dizi(Array) Veri Tipiyle Çalışmak ##

### [Dizi(Array) Oluşturmak ve Dizi İçindeki Elemanlara Ulaşmak](dizi(array)-olusturmak-ve-dizi-i̇cindeki-elemanlara-ulasmak/)

#### Sorular
1. Bir arrayin veri tipi nedir?
	- boolean
	- stringer
	- integer
	- object (Doğru)
2. Aşağıdakilerden hangisini konsola "denizli" ifadesini yazdırır?
```javascript
let egeBolgesi = ['izmir','aydın','muğla','denizli','manisa'];
```
- `console.log(egeBolgesi[1])`
- `console.log(egeBolgesi[2])`
- `console.log(egeBolgesi[3])` (Doğru)
- `console.log(egeBolgesi[4])`

#### Video
1. https://www.youtube.com/watch?v=7AeqV8-kKOw
	- Bu videoda; array oluşturmayı, array içerisindeki ilk ve son elamanı bulmayı, istenilen elemana ulaşmayı, veri türü kontrolünü ve değişken içerisindeki bilgi tipinin array olup olmadığını anlattık.

### [Diziye Yeni Eleman Eklemek, Çıkartmak ve Güncellemek](diziye-yeni-eleman-eklemek-cikartmak-ve-guncellemek/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=ycjLyTRLDk0
	- Bu videoda; Array yapısına eleman ekleyip çıkartmayı, Array içini düzeltmeyi ve Array içerisinden istediğimiz bilgiyi alma gibi konuları anlattık.

### [Array(Dizi) Metotlarının Kullanımı ve Array içinde Array Oluşturma](array(dizi)-metotlarinin-kullanimi-ve-array-icinde-array-olusturma/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=Glp6kX7KV94
	- Bu videoda; Array içinde Array oluşturmayı, Array içerisindeki öğeleri ayırmayı, Array içerisindeki öğenin index bilgisini bulmayı, Array kopyalamayı, iki Array bilgisini birleştirmeyi, Array içindeki bilgiyi String'e çevirmeyi ve istediğimiz index bilgisine göre öğe eklemeyi ve daha birçok Array metot yapısını anlattık.

#### Codepen Çözümleri

1. Birinci Soru: https://codepen.io/Kodluyoruz/pen/abBmaoL
2. İkinci Soru: https://codepen.io/Kodluyoruz/pen/vYyXzYV
3. Üçüncü Soru: https://codepen.io/Kodluyoruz/pen/zYoKJGd

## Döngüler ##

### [for Döngüsü Kullanımı](for-dongusu-kullanimi/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=nvkrESfSQyk
	- Bu videoda; for döngüsünün nasıl oluşturulduğunu anlatıp olup daha önce öğrendimiz bilgilerle birlikte for döngüsünün kullanımı ile ilgili egzersizler yaptık.

#### Codepen Çözümleri

1. Birinci Ödevin Çözümü: https://codepen.io/Kodluyoruz/pen/bGBwxEG
2. İkinci Ödevin Çözümü: https://codepen.io/Kodluyoruz/pen/JjbRaGL

### [break ve continue Kullanımı](break-ve-continue-kullanimi/)

#### Sorular
1. Yok

#### Video 
1. https://www.youtube.com/watch?v=r1FRJCEnWmk
	- Bu videoda; break ve countinue kullanımını anlattık.

### [while Döngüsü](while-dongusu/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=cZrzF91_z5M
	- Bu videoda; bir şey olana kadar devam eden while döngüsünden bahsettik. for döngüsü belirli bir sayıda dönerken while belirli bir kurala bağlanarak kural yerine getirilene kadar devam edebilir. Hep birlikte bu durumu inceleyelim.

#### [forEach ile Array içerisindeki Öğelerin Çağrılması](foreach-ile-array-icerisindeki-ogelerin-cagrilmasi/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=S02bwfd8Eyo
	- Bu videoda; forEach'in sadece Array içerisinde kullanıldığını anlatıp for döngüsü ile forEach'in farkını incelediğimiz bir egzersiz yaptık.

#### Codepen Çözümleri

1. https://codepen.io/Kodluyoruz/pen/RwoGYav

### [Filter ile Array İçerisinde Sadece İstenilen Bilgilerin Yeni Listeye Eklenmesi](filter-ile-array-i̇cerisinde-sadece-i̇stenilen-bilgilerin-yeni-listeye-eklenmesi/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=ZpHBuQVCs8A
	- Bu videoda; Array filter ile birlikte bir diziyi filtreleyip sadece istenilen verilerle nasıl yeni bir dizinin oluşturulacağını anlattık.

#### Codepen Çözümleri

1. Birinci Sorunun Cevabı: https://codepen.io/Kodluyoruz/pen/BaQLOQa
2. İkinci Sorunun Cevabı: https://codepen.io/Kodluyoruz/pen/xxREaRW

### [Map ile Array İçerisideki Yapının Değiştirilerek Yeni Liste Oluşturulması](map-ile-array-i̇cerisideki-yapinin-degistirilerek-yeni-liste-olusturulmasi/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=er26CndsoXE
	- Bu videoda; map metotu ile birlikte fonksiyon oluşturup yeni bir dizi oluşturmayı anlattık.

## Nesne(Object) ##

### [Object(Nesne) Nedir ? Nasıl Oluşturulur](object(nesne)-nedir-nasil-olusturulur/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=G3PnQmiJNNE
	- Bu videoda; object nedir ve nasıl oluşturulur, key-value ilişkisini, objenin tipine ve içindeki bilgilere nasıl erişilir gibi konuları anlattık.

#### Codepen Çözümleri

1. Object Create alıştırmasının çözümü: https://codepen.io/Kodluyoruz/pen/zYooXbR

### [Object Anahtar(Key) ve Değer(Value) Yapısının Kullanımı / Erişimi](object-anahtar(key)-ve-deger(value)-yapisinin-kullanimi-erisimi/)

#### Sorular
1. Robin Karakterinin ikinci işine ulaşmak isterseniz ne yazmanız gerekir?
```javascript
let show = {
    showName:"How I Met Your Mother",
    characters:[
    {

  	name:"Ted",
  	age: 35,
  	job: ["Architect"]
  },
  {
  	name: "Robin",
  	age: 32,
  	job: ["News Anchor", "Pop-Star"]
  }
  ]
};
```
- alert(show.characters[1].job[1]) (Doğru)
- alert(show.characters[1].job[2])
- alert(show.characters[2].job[1])
- alert(show.characters[2].job[2])
2. Show bitme durumunu kontrol edecek "isEnded" isminde boolean bir değer tutan property nasıl ekleyebilirsiniz?
- show.isEnded = true; (Doğru)
- show.isEnd = true;
- show.isEnd = false;
- show.isFirst = false;

#### Video
1. https://www.youtube.com/watch?v=El4m8M2-KW8
	- Bu videoda; key/value oluşturmayı, oluşturulan key/value yapısını göstermeyi, key bilgisine yeni value ekleme veya değiştirmeyi, key bilgisine ulaşmayı, forEach yapısıyla Object içindeki key bilgilerini döndürerek istenilen işlemlerin yapılabilmesini anlattık.

### [Nesnelere Nasıl Metot Ekleriz?](nesnelere-nasil-metot-ekleriz/)

#### Sorular
1. Aşağıdakilerden hangisi bir kitap nesnesinin kitap bilgilerini ekrana yazdırmak için kullanılabilecek metottur? 
- A
```javascript
	  kitapTanit: () => `${this.kitapIsmi} kitabının yazarı ${this.kitapYazari}.`,
  };
  console.log(kitap.kitapTanit());
```
-	B
```javascript
	...
	kitapTanit: function () {
		return `${this.kitapIsmi} kitabının yazarı ${this.kitapYazari}.`;
	},
};
kitap.kitapTanit();
```
- C
```javascript
	...
	kitapTanit: () => `${kitap.kitapIsmi} kitabının yazarı ${kitap.kitapYazari}.`,
};
console.log(kitap.kitapTanit())
```
(Doğru)
- D
```javascript
	...
	kitapTanit: () => {
		return `${kitapIsmi} kitabının yazarı ${kitapYazari}.`
	},
};
console.log(kitap.kitapTanit());
```
2. Aşağıda verilen kodun çıktısı ne olacaktır?
```javascript
var birey = {
	isim: 'Ali',
	soyisim: 'Veli',
	dogumYili: 1989,
	merhabaDe: (age) => `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yaşındayım`,
};
birey.yasHesapla = function () {
	return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla()));
```
- *Undefined* hatası verecektir.
- "Merhaba, ben Ali Veli, 32 yaşındayım" (Doğru)
- "Merhaba, ben Ali Veli, undefined yaşındayım"
- Hiçbir çıktı olmayacaktır.
3. Aşağıdakilerden hangisi fonksiyon kurucu yöntemiyle tanımlanmış bir araba sınıfına, konsola "Korna Sesi" yazısını bastıran bir korna fonksiyonunu eklemek için kullanılabilir? 
- A) 
```jsx
Araba.__proto__.korna = "Korna Sesi";Araba.prototype.korna = "Korna Sesi";
```
- B) 
```jsx
Araba.__proto__.korna = function(){console.log("Korna Sesi")}
```
- C)
```jsx
Araba.prototype.korna = "Korna Sesi";
```
- D) 
```jsx
Araba.prototype.korna = () => {console.log("Korna Sesi")}
```
(Doğru)
4. Aşağıdaki fonksiyonun adına hangisi yardımıyla erişebiliriz.
```jsx
function yaz(){console.log("Merhaba Kodluyoruz")}
```
- A) 
```jsx
yaz.name();
```
- B)
```jsx
yaz("name");
```
- C)
```jsx
yaz["name"];
```
(Doğru)
- D)
```jsx
yaz.function[name]
```

#### Video
1. https://www.youtube.com/watch?v=5PzI_b-Ycn8
	- Bu videoda; object içine metotların nasıl eklenebileceğini anlattık.

### [Object ve Array Destructuring Kullanımı](object-ve-array-destructuring-kullanimi/)

#### Sorular
1. Aşağıda yapısına göre `console.log(pronoun)` ve `console.log(name)` çıktısı sırasıyla aşağıdakilerden hangisidir?]

```javascript
let [,pronoun,,name]=["Merhaba","benim","adım","Mehmet"];
```
- Merhaba-adım
- benim-Mehmet (Doğru)
- adım-benim
- Merhaba-Mehmet
2. Aşağıda yapısına göre `console.log(foo)` hangi çıktıyı verir?
```javascript
let person={name:"Selin",city:"Ankara",favoriteColor:"aqua blue"}; 
let {name:foo}=person;
```
- Undefined
- Hata verir
- foo
- Selin (Doğru)

#### Video
1. https://www.youtube.com/watch?v=TrnfZNPPEAQ
	- Bu videoda; Array ve Object içerisindeki bilgilerin parçalanmasını ve yeniden başka bir yapıya dönüştürülebilmesi için Destructuring kullanımını anlattık.

## Hata Yönetimi ##

### [try ve catch Kullanımı](try-ve-catch-kullanimi/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=aa-fjAhCPj4
	- Bu videoda; kod bloklarımızda çıkabilecek istisnai durumlar için try/catch yapısını kullanarak nasıl hata yönetimi gerçekleştirebileceğimizi anlattık.

## Fetch API ##

### [Fetch API ile Çalışmak](fetch-api-ile-calismak/)

#### Sorular
1. Yok

#### Video
1. https://www.youtube.com/watch?v=_iJk--TuQoM
	- Bu videoda; veri alma/veri gönderme için kullandığımız Fetch API yapısının temellerini anlattık.
