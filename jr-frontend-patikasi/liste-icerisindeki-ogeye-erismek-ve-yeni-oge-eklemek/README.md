# Liste İçerisindeki Öğeye Erişmek ve Yeni Öğe Eklemek
JavaScript’de çoğu zaman HTML elementlerine JavaScript ile müdahale ederiz. Bazen doğrudan bir elemente ulaşmaya çalışıyorken bazen spesifik bir liste öğesine ulaşmamız gerekebilir. Bu başlık altında ise liste öğesine erişmenin farklı yollarını deneyip en sonda ise listemize yeni bir öğe ekleyeceğiz. 

## Önce Listemizi Oluşturalım
Açtığım HTML dosyamın body elementinin içerisine aşağıdaki kodları ekliyorum. 

```html 
<ul class="liste">
  <li id="walterwhite">Walter White</li>
  <li class="alternate">Jesse Pinkman</li>
  <li>Skyler White</li>
  <li class="alternate">Hank Schrader</li>
  <li>Gustavo Fring</l>
</ul>
```

İlgili listemizi oluşturduk ve bazı class, id tanımlamaları yaptık. 

## Öğelere Erişim Yöntemleri

- Kimlik (id) ile öğeye ulaşmak.
- Sınıf (class) ile öğelere/öğeye ulaşmak.
- Etiket adı ile öğelere ulaşmak.

#### Kimlik yani `id` teknik olarak ise `document.getElementById` ile öğeye erişmek.

```javascript 
var one = document.getElementById("walterwhite");
```

Yukarıda önce bir değişken tanımlayıp sonrasında ise `walterwhite` **id** değerine sahip elementi seçtik. 

Sayfamızda eğer ki bu id’e sahip bir element var ise bize o elementi döndürür. 

#### Sınıf yani `class` teknik anlamda ise `getElementsByClassName` ile öğe ve öğelere erişmek

```javascript 
var two  = document.getElementsByClassName("alternate");
```

Burada ise `two` isminde bir değişken tanımlayıp `alternate` sınıfına sahip olan tüm öğeleri alıyoruz. Burada önemli nokta ise `getElementsByClassName` bize class’a sahip tüm öğeleri **nodeList** olarak döndürür.

### Seçtiğimiz sınıfa müdahale edelim.

`two` olarak tanımladığımız değişkenimizin içerisinde döngü yardımı ile dönelim ve `alternate` sınıfına sahip olarak öğelerin renklerini değiştirelim. Döngü kullanmamızın bir sebebi de `getElementsByClassName` metodunun bize `nodeList` dönüyor olması.

```javascript 
for (var i = 0; i < two.length; i++) { 
     two[i].style.color  = "red"; 
}
```

Yukarıdaki döngümüz sayesinde `two` değişkenimize gidip "alternate" sınıfına sahip tüm elementleri *kırmızı* renk yaptık. 

### Etiket adı ile yani `document.querySelector` ile öğeye erişmek.

Bu öğeye erişim yönteminde ise ilgili etiketi sorguladığımızda bize sayfada eğer bu elementten birden fazla varsa sadece **ilk** eşleşeni getirir.

```javascript 
var liste = document.querySelector("ul");
```

Liste değişkenimizi oluşturduk ve `querySelector` ile sayfadaki ilk eşleşen `ul` etiketini yakaladık. Şimdi ise bu liste elementinin içine yeni bir öğe eklemeyi görelim. 

## Liste İçerisine Yeni Öğe Eklemek

Öncelikle sayfamıza 2 tane etiket ekleyeceğim. Birincisi bir `input` diğeri ise bir `button`. `input` etiketi ile kullanıcıdan eklenecek öğe bilgisini alacağız. 
```javascript
<input type="text" id="veri">
<button id="ekle">Listeye Öğe Ekle</button>
```

Hatırlarsanız birkaç satır üstte ise "liste" etiketini seçmiştik. Onu da burada kullanacağız. Haydi şimdi input ve button öğelerimizi `querySelector` ile seçelim.

```javascript 
var urun = document.querySelector("#veri"); 
var ekle = document.querySelector("#ekle");
```

Yukarıda seçim işlemlerimizi de yaptıktan sonra sırada ise `ekle` butonuna tıklandığında ilgili ekleme durumunun gerçekleşmesini sağlamak.

```javascript
ekle.addEventListener("click",function(){
  // createElement ile yeni bir listItem (li) oluşturuyoruz
  var li=document.createElement("li"); 
  
  // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
  li.textContent=veri.value; 
  
  // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
  liste.appendChild(li);
              
  // Veri inputu içerisindeki metni siliyoruz.
  veri.value = "";
});
```

Bu şekilde ise erişim sağladığımız öğenin içerisine yeni bir öğe ekleyebildik. 

**Hadi aşağıda codepen ile deneyin!**

### Kaynaklar
-	https://www.w3schools.com/js/js_htmldom.asp
-	http://www.webcebir.com/170-javascript-dom-erisim-yontemleri-dersi.html
-	https://www.yazilimkodlama.com/javascript/javascript-ile-listeye-ogeler-ekleyin/
