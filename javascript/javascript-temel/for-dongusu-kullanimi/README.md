# JavaScript for Döngüsü Kullanımı

Bir for döngüsü, _belirtilen koşul doğru olduğu sürece komutların çalıştırılmasını sağlar._ Koşul sağlanmazsa döngü çalışmayı durdurur.

```javascript
for (BaşlangıçAtaması; Koşulİfadesi; döngüSonundaÇalışacakİfade) {
    "Koşul sağlanıyorsa(true) çalışmasını istediğim komutlar."
}; 
"Koşul sağlanmazsa(false) döngüden çıkılır."
```

Yukarıda, basitçe bir for döngüsünün nasıl çalıştığını gördük. 

Şimdi gerçek bir örnekle konunun pekişmesini sağlayalım.

```javascript
for(var i = 1; i < 5; i++) {
    console.log(i);
};
```

Yukarıda ne olduğunu basitçe anlatayım.

İlk olarak değeri 1 olan **i** adında bir değişken tanımladık. 

Daha sonra bu **i** değişkeninin 5 sayısından küçük olduğu sürece döngü içerisine girip çalışmasını istedik. 

Son olarak eğer koşulu sağlıyor ise ++ ifadesini kullanarak değerinin birer birer artmasını istedim.

```javascript
for(var i = 1; i < 5; i++) {
    console.log(i);
};
// 1, 2, 3, 4
```

Koşul sağlandığı sürece döngü çalışacak ve **console.log(i)** ifadesi ile bize her çalıştığında **i** sayısının güncel değerini verecek. 

Konunun pekişmesi adına beraber bir kaç örnek yapalım;

## Örnekler ve Ödevler

**Örnek 1:** 10'dan 0'a kadar olan sayıları geriye doğru olacak şekilde konsola yazdıralım.

```javascript
for (var i = 10; i >= 0; i--) {
    console.log(i);
};
// 10, 9, 8, ... 2, 1, 0
```

Döngümüz 10 ve 0 arasındaki sayılara bakacağı için ilk değerimizi 10 verdik ve 0'dan küçük veya eşit  olduğu sürece çalışsın dedik.

Sayımızın geriye doğru azalması gerektiği için -- ifadesini kullandık.

**Ödev 1:** 20 ile 40 arasındaki tüm sayıları konsola yazdırın.

**Örnek 2:** 0 ve 50 sayıları arasından çift olanları konsola yazdıralım.

```javascript
for (var i = 0; i < 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    };
};
// 0, 2, 4, ... 44, 46, 48
```

Döngümüz 0 ve 50 arasındaki sayılara bakacağı için ilk değerimizi 1 verdik ve 50'den küçük olduğu sürece çalışsın dedik.

Daha sonra çift sayıları alabilmek için bir koşul ifadesi yazdık.

**_if (i % 2 == 0)_** ifadesi **i** sayısının 2'ye bölümünden kalanı 0 olanları console.log(i) ile al demektir.

**Ödev 2:** 0 ve 50 sayıları arasından tek olanları console'a yazdıralım.



