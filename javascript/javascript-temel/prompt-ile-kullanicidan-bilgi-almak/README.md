
# Prompt ile Kullanıcıdan Nasıl Bilgi Alınır ?

Javascript kullanıcı ile iletişim kurmamızı sağlayabilen etkileşimli bir dildir ve biliyoruz ki kullanıcı ile etkileşimi sağlamının bir yolu kullanıcıdan bilgi istemektir.

Javascript ile ilgilenenler, javascript'te prompt komutu ile sağlarlar.

Şimdi birlikte kullanıcıdan istenilen kelimeyi sayfaya nasıl yazdıracağımıza bakalım...

Öncelikle bir fonksiyon belirleriz bu fonksiyon içerisinde prompt ile kullanıcıdan bilgi ister "document.write" ile'de sayfamıza yazdırırız.
Özelikle bunları aynı fonksiyon içerisinde yazıyoruz ki sayfamız açıldığında ilk olarak fonksiyonumuz yüklensin ve belirtilen uygulamalar yorumlanıp sırası ile sayfamızda gösterilsin.

 - `<script>` tagları arasında veya .js dosyamıza yazacağımız fonksiyonumuza geçelim.

Fonksiyonumuzun ismi istek olsun, function istek()


```
function istek()
{
  var kelime=prompt("Bir değer giriniz","lütfen sadece kelime giriniz..")
  document.write(kelime)
}
```
- Prompt Kullanışına geçelim ...
  

var a=prompt(Bir değer giriniz","lütfen sadece kelime giriniz..")

Yukarıdaki gibidir. var a=prompt diyerek girilecek değere "a" değişkenini atıyoruz ki daha sonra sayfamızda yazdırılmak üzere lazım olacak.

- Prompt'ta ilk olarak yazılan ;

 "Bir değer giriniz" --> Kullanıcıya yönetilen bilgi girişinin başlığının soru halidir.

- Prompt'ta ikinci olarak yazılan;

 "lütfen sadece kelime giriniz.." -->Text(input) içerisinde gösterilcek uyarıdır. Boş da bırakılabilir.

Evet, Prompt komutunu da kavradık. Şimdi iki işlemimiz kaldı.

1- Kullanıcı tarafından girilen kelimenin sayfada gösterimi.
2-  Fonksiyonun sayfamız açıldığında çağırılması.

1- "document.write" komutu bulunan sayfa içerisinde istenileni yazdırmak için kullanılır. Biliyoruz ki değişken yazdırmak istenildiğinde (") kullanmıyoruz.

```js
document.write(a)
```
2-Sayfamız açıldığında fonksiyonun yüklenmesi için body içerisine "onload" komutu ile fonksiyonumuzu çağıralım.

```html
<body onload="mesaj()">
</body>
```

- Evet, işte bu kadar. Şimdi sorulara geçelim !

# Prompt ile Kullanıcıdan Bilgi Almak

**Prompt(),** kullanıcıya soru sorup klavyeden girilen bilgiyle işlem yapan, o bilgiyi döndüren bir **window** metodudur. **alert()** gibi Html üzerinde, HTML sayfasından bağımsız çalışır ve karşımıza diyalog penceresi şeklinde çıkar.

## **Prompt() Kullanımı:**

---

```JavaScript
//prompt("Sorulacak olan soru", "kutunun içerisi")

prompt("Boyunuzu giriniz", "örnek: 166");

//Örnek kısmı diyalog kutusunun içerisinde gözükecektir
```

Bu metodla birlikte ekranda "**Boyunuzu giriniz"** yazısı ve altında da diyalog kutusu belirecektir. Bu diyalog kutusunda da "**örnek: 166**" yazacaktır fakat zorunlu bir kullanım değildir ve genel olarak kullanıcıya rehberlik etmek için kullanılır.

Burada **prompt()** yapısını bir değişken içine atmadığımız için istenilen girdiyi girip **Tamam** tuşuna bassak bile bize bir işlem dönmeyecektir ya da hafızasında girilen bilgiyi tutmayacaktır. Eğer **prompt()** metodumuzu bir değişken içine atarsak,vereceğimiz cevap o değişkenin bir değeri haline gelir.

```jsx
var isim = prompt("Adınız nedir?");
console.log("Merhaba, " + isim);

//Çıktı:
//Merhaba, yazdığınızAd
```

Artık **prompt()** komutumuz bir değişken içinde olduğu için **console.log()** içerisine değişken adımızı yazarak konsol ekranında görebildik. Böylelikle normal bir değişkenle yapabildiğimiz her şeyi artık bu tanımlı değişkenle de yapabiliriz.

### Prompt Mantığı
Kullanıcı **Tamam** düğmesini tıkladığında, giriş alanına girilen metin döndürülür. Kullanıcı herhangi bir metin girmeden Tamam'ı tıklarsa, boş bir dize döndürülür. Kullanıcı **İptal** düğmesini tıklarsa, bu işlev boş döndürür. Bunu bir örnekle gösterelim:

### Örnek:

### TAHMİN OYUNU

---

- Bilgisayar tarafından 100 ' e kadar tutulmuş olan rastgele sayıyı bulalım:

```JavaScript
var randomSayi = Math.floor(Math.random() * 100);
//Girdiğimiz sayıyı aklında tutması için prompt değişkene atanır
var tahmin = prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!");
if (tahmin === randomSayi && tahmin != null) alert("Bildin!!!");
else if (tahmin == "") alert("Boş giriş yaptınız!");
else if (tahmin == null) alert("Giriş yapmaktan vazgeçtiniz!");
else {
  alert("Bir daha denee :(, Random sayi: " + randomSayi);
}
```
[Codepen'de deneyin](https://codepen.io/ayerdelen/pen/BaLJqog)
### Alıştırma
---

- Verilen formüle göre **vücut kitle indeksi** hesaplayan ve hesapladığı değere göre yazı yazan bir program yazalım
- Programda yazılmış kısımları okuyup eksik kısımları tamamlayın.

Not: Fonksiyon parametreleri prompt ile kullanıcıdan alınmalı.

Formül: vki = kg/m \* m;

**İstenilenler:**

1. Prompt ile kullanıcıdan bilgi almak
2. Verilen formülü uygun yere yazmak
3. Formülde metre cinsinden istendiği için diyalog kutucuğuna **metre cinsinden örnek 1.66** yazarak kullanıcıya rehberlik etmek

```JavaScript
//Kod satırını buraya ekleyiniz.
function vkiHesapla(weight, height) {
  var vki; //Bu kod satırını değiştiriniz
if(vki<18.5) return alert(`Vücut kitle indeksiniz: ${vki}, değerleriniz düşüktür`);
if(vki>= 18.5 && vki <= 24.9) return alert(`Vücut kitle indeksiniz: ${vki}, normal değerdesiniz`);
if(vki>= 25.0 && vki <= 29.9) return alert(`Vücut kitle indeksiniz: ${vki}, kilolusunuz`);
if(vki>= 30) return alert(`Vücut kitle indeksiniz: ${vki}, aşırı kilolusunuz`);
return alert("Girdiğiniz değerleri kontrol ediniz");
};
vkiHesapla(weight, height);
```
[Codepen'de Görün](https://codepen.io/ayerdelen/pen/NWRXOLr) / [→ Cevabı Codepen'de Görün](https://codepen.io/ayerdelen/pen/gOwoBEp)

## Kaynaklar

- http://www.erelcolak.com/javascript-temelleri-prompt-ile-kullanicidan-bilgi-almak/

- https://sanalkurs.net/kullanicidan-bilgi-girisi-istemesi-prompt-2953.html
