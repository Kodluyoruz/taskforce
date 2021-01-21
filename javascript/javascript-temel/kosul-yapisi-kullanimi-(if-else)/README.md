# Koşul Yapısı Kullanımı(If/Else)

C programlama dilinden tutun da Java, Python gibi programlama dillerinin her birinde karar yapıları için **If/Else** koşul kelimeleri kullanılır. Aynı durum JavaScript için de geçerlidir. JavaScript'te de şartların doğru olup olmadığını kontrol etmek için If/Else kod blokları kullanılır.

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
Bir if koşuluna bağlı gerçekleşecek tek bir fonksiyon veya atama varsa, koşul tek satırda köşeli parantez( **{ }** ) kullanımına gerek duymadan yazılabilir..
```javascript
if(kosul) fonksiyon(parametre);
```

 Aynı şekilde bir if koşuluna bağlı else durumu da tek satır olarak yazılabilir.

 ```javascript

if(kosul) {
    // Bu kod satırı çalışacaktır.
}
else fonksiyon(parametre);// tek satırlık kodu buraya yazabilirsin. 

```
Bununla beraber if blokları iç içe kullanılabilmektedir.
```javascript
if(kosul1){

  if(kosul2){
    // Birinci koşulun gerçekleşmesi sonucuna bağlı ikinci bir 
    // koşulun kontrolü için kullanılabilir.
  }

}
```



If / Else koşulunun teoride çalışma prensibi bu şekildedir. Şimdi ise basitten başlayarak örneklerle teorik bilgileri pratiğe dökelim. 

### Örnek - 1: İki sayıdan büyük olanı bulalım.  

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


### Örnek - 2: Vize ve final notları belli olan bir öğrencinin yıl sonunda dersten geçip geçmediğini hesaplayalım. 


<hr />

**-Şartlar-**

- Öğrencinin vize notunun %30'unu final notunun %70'ini alalım.
- Vize ve final notunun toplamından doğan not ortalaması eğer 0-30 aralığındaysa KALDINIZ (FF) yazdıralım.
- 31-49 aralığındaysa DC - KOŞULLU yazdıralım.
- 50- 84 aralığındaysa CC - GEÇTİNİZ! yazdıralım.
 85-100 aralığındaysa Notunuz AA yazdıralım. 

```javascript
var ogrVizeNot = 45; // Bu kod satırını değiştiriniz. 

var ogrFinalNot = 60; // Bu kod satırını değiştiriniz. 

var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);

if(ogrOrtalama > 0 && ogrOrtalama < 30) {
  console.log("Not ortalamanız: " +ogrOrtalama + " KALDINIZ(FF).");
}

else if(ogrOrtalama > 31 && ogrOrtalama < 49) {
  console.log("Not ortalamanız: " +ogrOrtalama + " DC - KOŞULLU ");
}

else if(ogrOrtalama > 50 && ogrOrtalama < 84) {
  console.log("Not ortalamanız: " +ogrOrtalama + " CC - GEÇTİNİZ ");
}

else if(ogrOrtalama > 85 && ogrOrtalama <= 100) {
  console.log("Not ortalamanız: " +ogrOrtalama + " AA - GEÇTİNİZ ");
}

```
Bu örneği [Codepen'de Deneyin.](https://codepen.io/alperceviz/pen/YzGaaXB?editors=0012) 

