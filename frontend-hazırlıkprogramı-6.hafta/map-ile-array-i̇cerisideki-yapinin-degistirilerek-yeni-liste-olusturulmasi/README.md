# Map ile Array İçerisideki Yapının Değiştirilerek Yeni Liste Oluşturulması

Map methodundan önce javaScript'te Array(Dizi)'leri kısaca hatırlayalım.
Diziler aslında bir veri yapısıdır ve bellek üzerinde aynı tipte veri tutabilmemizi sağlar. Bir değişken tanımladığımızı düşünürsek eğer bu bizim için tek bir değer tutacaktır. Diziler ise bir değişkenin altında birden fazla değer tutabilmemizi sağlar. Daha sonra bu tanımladığımız dizinin elemanlarına farklı farklı ulaşmak istersek indeks üzerinden ulaşabiliriz.
## Dizi Oluşturma
```javascript
let meyveler = ["Kivi", "Muz"];

console.log(meyveler.length);
// 2
```

## Dizideki Elemana Ulaşma 

Not: Indeks kullanılmıştır.

```javascript
var ilkMeyve = meyveler[0];
// Kivi

var sonMeyve = meyveler[meyveler.length - 1];
/* Diziler sıfır-tabanlı olduğu için uzunluk-1'inci eleman son elemandır.
// Muz
```

# Array Map

Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir.
Örneğin; elimizdeki dizinin tüm elemanlarının iki katını almak istediğimiz zaman kullanabiliriz. Array Map metodu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz. Mevcuttaki dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi oluşturur. Bu kısım önemlidir.
Öncelikle Array Map metodunun kullanımına bir göz atalım.

```javascript
array.map( function(value, index, array), this)
```
**Gönderilen parametreleri inceleyelim;**

- array : Üzerinde işlem yapılacak olan diziyi belirtir. Bu dizinin her bir elemanı map metotunun içinde belirleyeceğimiz işleme tabi tutulacaktır. 
- value : Üzerinde işlem yapılan dizi değerini belirtir. 
- array : Üzerinde işlem yapılan diziye erişimi sağlar
- this : Kullanımı zorunlu değildir(opsiyoneldir). this değişkenine iletilecek olan değeri belirtir. 

## Örnekler

**Örnek 1:** Bir dizinin tüm elemanlarını 2 ile çarpan fonksiyon;

```javascript
const sayilar = [2, 3, 4, 5, 10]
const yeniArray = sayilar.map(deger => {
    return deger * 2
})

console.log(sayilar);
//[2, 3, 4, 5, 10]
console.log(yeniArray);
//[4, 6, 8, 10, 20]
```

**Aşağıda codepen ile deneyimleyebilirsiniz.**

"sayilar" adında veri tipi const(sabit) bir değişken tanımlandık. Bunu içine statik değerler atadık. Daha sonra "yeniArray" olarak belirlediğimiz yeni değişkenimizde sayılar içerisinde map ile döngü oluşturarak mevcuttaki değeri 2 ile çarparak return ettik. Bu işlemden sonra sayılar array'inde herhangi bir değişiklik olmadığını görebilirsiniz. 

**Örnek 2:** Maaş zam hesaplama;
İşçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.

```javascript
const maaslar = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const yeniMaaslar = maaslar.map((e)=>{
    if(e > 3000)
        return e * 1.15;
    else
        return e * 1.25;
});

console.log( yeniMaaslar );
//[1210, 13650, 2750, 4725, 1650.0000000000002, 26250, 2200]
```

maaşlar adında statik verilerden oluşan bir array oluşturduk. Bu array içinde dönerek maaşı  3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 ekleyerek oluşan array'i return ettik.

**Aşağıda codepen ile deneyimleyebilirsiniz.**


