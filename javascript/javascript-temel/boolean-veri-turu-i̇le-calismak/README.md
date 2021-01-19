# Boolean Veri Türü İle Çalışmak

​	Bazı ifadeleri sadece iki ihtimale göre değerlendirmek Javascript programlarımızı yazarken oldukça işimize yarar. Bu alternatifler "evet veya hayır" , " var ya da yok" ,"1 veye 0" , "evet veya hayır" gibi değerler olabilir. Bu tür iki alternatiften bahsettiğimiz veri tipine Boolean veri tipi diyoruz.

Boolean veri tipleri sadece iki değerden birini ifade eder. Bunlar `true` ya da `false` 'dur.

### Boolean() fonksiyonu

```javascript
Boolean(10>9);
//true
```

`Boolean()`foksiyonu bize sadece iki farklı değer dönebilir. Bunlar ya `true` ya da  `false`'dur. 

Yukarıda `Boolean()` fonksiyonun içinde bir olasılığı karşılaştırdık. Bu olasılık 10 sayısının 9 sayısından büyük olup olmadığıdır. Bu soruda alabileceğimiz iki farklı cevap var. Bunlar doğru veya yanlış yani `true`veya`false` ifadeleridir. 10 sayısı 9 sayısından büyük olduğu için buradan `true` çıktısını alıyoruz.



##### İçinde değer barındıran tüm ifadeler `true`'dur.

```javascript
const b1 = Boolean(100);
const b2 = Boolean(3.14);
const b3 = Boolean(-15);
const b4 = Boolean("Hello");
const b5 = Boolean('false');
const b6 = Boolean(1 + 7 + 3.14);
```

Yukarıdaki tüm ifadelerin çıktısını `true` olarak görürüz.

##### İçinde değer barındırmayan tüm ifadeler `false` 'dur.

```javascript
const c1 = Boolean(undefined);
const c2 = Boolean(null);
const c3 = Boolean("");
const c4 = Boolean(false);
const c5 = Boolean(NaN);
const c6 = Boolean(0);
const c6 = Boolean(-0);
```

Yukarıdaki tüm ifadeler bize `false` çıktısını verir. Buradan anlayacağımız üzere 0 ve -0 hariç tüm sayılar bize `true` olarak döner. 

## Sorular

```javascript
let a;
Boolean(a);
```

1.Yukarıdaki ifadenin çıktısı nedir?

<details> 
    <summary>
    Cevap
    </summary>
    <p>
        Doğru cevap false.
    </p>
    <p>
        a değişkeni içerisinde herhangi bir değer barındırmadığı için undefined döner. undefined değerinin karşılığı false'tur.
    </p>
</details>

```javascript
const b  = "0";
Boolean(b);
```

2.Yukarıdaki ifadenin çıktısı nedir?

<details> 
    <summary>
    Cevap
    </summary>
    <p>
        Doğru cevap false.
    </p>
    <p>
        Buradaki "0" ifadesi string veri tipidir. String veri tiplerinde içerisinde herhangi bir değer bulundurması koşuluyla her ifade true olarak döner. Eğer bu "0" ifadesi bir number yani 0 şeklinde yazılsaydı o zaman cevap false olurdu.
    </p>
</details>




##### Kaynaklar

www.w3schools.com