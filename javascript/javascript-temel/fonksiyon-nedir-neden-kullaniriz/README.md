# Fonksiyon Nedir ? Neden Kullanırız?

  Kod yazarken, kodun birçok yerinde aynı işi yapacak alt programlara (subprograms) ihtiyaç duyarız. Mesela, ziyaretçi siteye giriş yaptığında veya çıkış yaptığında bir mesaj göstermek isteriz.
  Fonksiyonlar, programın ana bloklarıdır ve fonksiyonlar sayesinde kodu tekrar tekrar yazmadan, istediğimiz kadar çağırabiliriz. Javascript'te built-in(dilin kendi içerisinde mevcut) fonksiyonlar olduğu gibi(mesela alert(parametre) ve  prompt(parametre) built-in fonksiyonları) biz de kendi fonksiyonlarımızı oluşturabiliriz.
  
## Fonksiyon Bildirimi(Function Declaration)
  Fonksiyon oluşturmak içi fonksiyon bildirimi yapabiliriz. Mesela;
  ```javascript
function mesajVer() {
  alert( 'Herkese Merhabalar!' );
}
```
**function** anahtar kelimesini takiben fonksiyon ismi ve parantez içerisinde parametreler(virgülle ayrılacak şekilde) ve son olarak da süslü parantez içerisinde fonksiyonun içereceği kod(ki bu bölüme fonksiyonun gövdesi(body) denir.) sırasıyla fonksiyonu oluşturur.

  ```javascript
function isim(parametreler) {
  ...fonksiyonun gövdesi...
}
```

Yukarıda bildirdiğimiz **mesajVer** fonksiyonu ismiyle çağrılabilir:
  ```javascript
function mesajVer() {
  alert( 'Herkese Merhabalar!' );
}
mesajVer();
mesajVer();
```
**mesajVer()** çağrısı fonksiyonu çalıştırır. Burada mesajı iki kere çağırdığımız için mesajı iki defa göreceğiz.
Yukarıdaki örnekten de görüldüğü üzere; fonksiyonların ana amacı kodu tekrar yazmayı engellemektir. Eğer fonksiyonun vreceği mesajı değiştirmek istiyorsak, bunu sadece fonksiyonun içerisinde(bir kez) yapmamız yeterlidir.

Örnekler:
  ```javascript
function mesaVer(ad, soyad) {
    alert(`Merhaba ${ad} ${soyad}`);
}

mesajVer("Arturo", "Kelesoglu", "Mr."); /* çıktı: Merhaba Arturo Kelesoglu (Bu örnekte parametrelere geçilen argüman sayısı 3'tür(Arturo, Kelesoglu, Mr.). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden fazlalıklar(Mr.) önemsenmez.*/
mesajVer("Arturo"); /* çıktı: Merhaba Arturo undefined (Bu örnekte parametrelere geçilen argüman sayısı 1'dir.(Arturo). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden eksiklikler undefined döner. */
mesajVer(); // çıktı Merhaba undefined undefined (Yukarıdaki örnekle aynı mantıktadır.)
```

## Geri Dönüş Değeri (Return Value)
Bir fonksiyon **return** anhatar kelimesi kullanılarak sıfır yada bir değer döner:
  ```javascript
function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc = topla(10,20); //  30 döner.

function carp(sayi1, sayi2) {
    console.log( sayi1 * sayi2);
};

result = carp(10,20); // undefined 


```
topla fonksiyonu iki değerin toplamını geri döner. carp fonksiyonunda ise **return** anahtar kelimesi kullanılmadığı içn geri dönüş değeri yoktur,dolayısıyla undefined döner.

##Fonksiyon İfadeleri (Function Expressions)
Javascript bir değişkene fonksiyon atanmasına ve daha sonra bu değişkenin fonksiyon olarak kullanılmasına izin verir. Buna fonksiyon ifadeleri denir:

  ```javascript
var ekle = function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
};

var sonuc1 = ekle(10,20); 
var sonuc2 = topla(10,20); // geçersiz




```
### Quiz

#### Javascript'te fonksiyon nasıl yaratılır?
a) function:myFunction()                                                                                                            
b) function = myFunction()
c) function myFunction()

-cevap : b

#### myFunction isimli fonksiyon nasıl çağrılır?
a) myFunction()
b) call function myFunction()
c) call myFunction()

-cevap : a

### Kaynaklar:
[javascript.info](https://javascript.info/function-basics)
[MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

