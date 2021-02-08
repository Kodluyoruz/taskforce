# Koşul Yapısı Kullanımı(If/Else)

C programlama dillerinden tutun da Java, Python gibi programlama dillerine kadar her programlama dillerinde kullanılan karar yapıları için **If/Else** kullanılır. Aynı durum JavaScript için de geçerlidir. JavaScriptte de şartların doğru olup olmadığını kontrol etmek için If/Else ifadeleri kullanılır.

If else yapısı içerisinde koşulun sağlandığı kodlar **if** içerisinde yer alırken, koşulun sağlanmadığı kodlar ise **else** içerisinde yer alır.

Eğer ilk koşul yanlışsa başka bir koşul belirtmek amacıyla **else if** kullanılır. If/Else kullanımı aşağıdaki gibidir:

```javascript

if(kosul) {
    // Bu kod satırı çalışacaktır.
}

else {
    // Bu kod satırı çalışır.
}

```

Else kod blokları arasında tek satırlık bir kod yazılacaksa köşeli parantez `{ }` kullanımına gerek yoktur.

```javascript

if(kosul) {
    // Bu kod satırı çalışacaktır.
} 

else // tek satırlık kodu buraya yazabilirsin. 

```

If / Else koşulunun teoride çalışma prensibi bu şekildedir. Şimdi ise basitten başlayarak örneklerle teorik bilgileri pratiğe dökelim. 

**Örnek 1: İki sayıdan büyük olanı bulalım:*.

```javascript
var x = 5;
var y = 7;

if(x > y) {
    console.log(x + " sayisi" + y + " sayisindan kucuktur." );
}

else {
    console.log(y + " sayisi" + " " + x + " sayisindan buyuktur.");
}

```

Bu örneğin benzerlerini kendiniz de [burada](https://codepen.io/alperceviz/pen/PoGRQxv?editors=0011) deneyebilirsiniz.,

**Örnek 2: Vize ve final notları belli olan bir öğrencinin yıl sonunda dersten geçip geçmediğini hesaplayalım:*.

**Şartlar:**
- Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
- Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
- 31-49 aralığındaysa DC - KOŞULLU yazdıralım.
- 50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
- 85-100 aralığındaysa Notunuz AA yazdıralım. 

```javascript
var ogrVizeNot = 45; // Bu kod satırını değiştiriniz. 

var ogrFinalNot = 60; // Bu kod satırını değiştiriniz. 

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if(ogrOrtalama > 0 && ogrOrtalama < 30) {
  console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
}

else if(ogrOrtalama > 31 && ogrOrtalama < 49) {
  console.log("Not ortalamnız: " +ogrOrtalama + " DC - KOŞULLU ");
}

else if(ogrOrtalama > 50 && ogrOrtalama < 84) {
  console.log("Not ortalamnız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
}

else if(ogrOrtalama > 85 && ogrOrtalama <= 100) {
  console.log("Not ortalamnız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
}

```
Bu örneği [Codepen'de Deneyin.](https://codepen.io/alperceviz/pen/YzGaaXB?editors=0012) 

# Koşul Yapısı Kullanımı(If/Else)

C programlama dillerinden tutun da Java, Python gibi programlama dillerine kadar her programlama dillerinde kullanılan karar yapıları için **If/Else** kullanılır. Aynı durum JavaScript için de geçerlidir. JavaScriptte de şartların doğru olup olmadığını kontrol etmek için If/Else ifadeleri kullanılır.

If else yapısı içerisinde koşulun sağlandığı kodlar **if** içerisinde yer alırken, koşulun sağlanmadığı kodlar ise **else** içerisinde yer alır.

Eğer ilk koşul yanlışsa başka bir koşul belirtmek amacıyla **else if** kullanılır. If/Else kullanımı aşağıdaki gibidir:

```javascript

if(kosul) {
    // Bu kod satırı çalışacaktır.
}

else {
    // Bu kod satırı çalışır.
}

```

Else kod blokları arasında tek satırlık bir kod yazılacaksa köşeli parantez `{ }` kullanımına gerek yoktur.

```javascript

if(kosul) {
    // Bu kod satırı çalışacaktır.
} 

else // tek satırlık kodu buraya yazabilirsin. 

```

If / Else koşulunun teoride çalışma prensibi bu şekildedir. Şimdi ise basitten başlayarak örneklerle teorik bilgileri pratiğe dökelim. 

**Örnek 1: İki sayıdan büyük olanı bulalım:*.

```javascript
var x = 5;
var y = 7;

if(x > y) {
    console.log(x + " sayisi" + y + " sayisindan kucuktur." );
}

else {
    console.log(y + " sayisi" + " " + x + " sayisindan buyuktur.");
}

```

Bu örneğin benzerlerini kendiniz de [burada](https://codepen.io/alperceviz/pen/PoGRQxv?editors=0011) deneyebilirsiniz.,

**Örnek 2: Vize ve final notları belli olan bir öğrencinin yıl sonunda dersten geçip geçmediğini hesaplayalım:*.

**Şartlar:**
- Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
- Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
- 31-49 aralığındaysa DC - KOŞULLU yazdıralım.
- 50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
- 85-100 aralığındaysa Notunuz AA yazdıralım. 

```javascript
var ogrVizeNot = 45; // Bu kod satırını değiştiriniz. 

var ogrFinalNot = 60; // Bu kod satırını değiştiriniz. 

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if(ogrOrtalama > 0 && ogrOrtalama < 30) {
  console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
}

else if(ogrOrtalama > 31 && ogrOrtalama < 49) {
  console.log("Not ortalamnız: " +ogrOrtalama + " DC - KOŞULLU ");
}

else if(ogrOrtalama > 50 && ogrOrtalama < 84) {
  console.log("Not ortalamnız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
}

else if(ogrOrtalama > 85 && ogrOrtalama <= 100) {
  console.log("Not ortalamnız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
}

```
Bu örneği [Codepen'de Deneyin.](https://codepen.io/alperceviz/pen/YzGaaXB?editors=0012) 

#### Alıştırma:
**Tahmin Oyunu**
Bilgisayar tarafından 100 ' e kadar tutulmuş olan rastgele sayıyı bulalım:

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