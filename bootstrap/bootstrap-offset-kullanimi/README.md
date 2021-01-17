# Bootstrap - Offset Kullanımı

Web sayfamızı tasarlarken sütunlarda yani "col" sınıfına sahip div elementlerinde boşluk oluşturma amacıyla sütunun sağ ve sol kısımlardan ittirilmesi için **offset** sınıfı kullanılır. Bir Grid(Izgara) yapısı 12 birimden oluşur, bundan dolayı **yapıda taşma oluşmaması için offset sınıfı için verilecek değerde sütunun sahip olduğu grid boyutu da göz önüne alınmalıdır**. Offset değer belirleme durumunun daha iyi kavranması açısından aşağıdaki örnekleri inceleyiniz. 

**NOT:** Offset ile push sınıfları birbiri ile karıştırılmamalıdır. Benzer bir kullanıma sahip olan "push" sınıfın offset'ten farkı sütun yapısında yalnızca soldan bir itme uygulamasıdır.

### Örnek-1

```html
<div class="container">
    <div class="row bg-secondary mt-5" style="height: 100px;">
        <div class="col-md-10 offset-md-1 bg-warning font-weight-bold text-center pt-4" style="font-size: 20px;">
            .col-md-10 .offset-md-1
        </div>
    </div>
</div>
```


 Yukarıda verilen kodun çıktısı;

![img1](/figures/img1.JPG)

Yukarıdaki örnekte offset için sağdan ve soldan toplam 2 birim ayrıldı. Eğer ki sütunun boyutu 8 birim olarak ayarlansaydı offset için verilebilecek en uygun değer 2 birim olacaktı.

### Örnek-2 

```html
<div class="container">
    <div class="row bg-dark " style="height: 100px;">
        <div class="col-md-10 offset-md-2 bg-danger font-weight-bold text-center pt-4">.col-md-10 .offset-md-2</div>
    </div>
</div>
```

Yukarıda verilen kodun çıktısı;,

![img2](/figures/img2.JPG)

Yukarıdaki örnekte sütun genişliği 8 birim, offset değeri ise sağdan 4 birim ve soldan 4 birim olarak verilmiştir. Fakat verilen değerler toplamı Grid yapısının alabileceği maksimum değerden fazla olduğu için offset ile sütuna yalnızca sol taraftan bir itme uygulanmıştır. Bunun yanı sıra offset için eğer 4'ten fazla bir değer girilseydi de sağ taraftan yapı dışına bir taşma söz konusu olacaktı.

### Alıştırma

[Kodluyoruz.org](https://www.kodluyoruz.org) sitesinde "_Eşitlik_" başlığı altındaki yapıyı örnek alarak yaptığım ve offset kullanarak oluşturduğum alıştırma;

```html
<div class="row">
    <div class="col-sm-10 offset-sm-1 shadow">
        <div class="row bg-white p-3 text-center">
            <div class="col-sm border-right">
                <h2 style="color:#9b51e0; font-size: 3rem; font-weight: 800;">%80</h2>
                <p>Bootcamp'lerden ortalama mezuniyet oranı</p>
            </div>
            <div class="col-sm border-right">
                <h2 style="color:#9b51e0; font-size: 3rem; font-weight: 800;">%45</h2>
                <p>Kadın öğrenci oranımız - Eşitliği destekliyoruz!</p>
            </div>
            <div class="col-sm">
                <h2 style="color:#9b51e0; font-size: 3rem; font-weight: 800;">%60</h2>
                <p>Mezun olduktan sonra 3 ay içinde işe yerleşme oranı</p>
            </div>
        </div>
    </div>
</div>
```

[Codepen'de deneyin](https://codepen.io/ruysapoly/pen/gOwQrZw)

### Sorular

1. "col-md-6" sınıfı ile oluşturulan bir div elementinin offset sınıfına verilebilecek değer aşağıdakilerden hangisidir?

   A. offset-md-4

   B. offset-md-3

   C. offset-md

   D. offset-sm-1

<details><summary>Cevap</summary>Doğru cevap B şıkkıdır.</details>

2. ​	i.  Offset değeri sütun genişliğinden bağımsızdır.

   ii.  Offset değeri negatif bir değer olabilir

   iii.  "col-md-12" sınıflı bir div'e "offset-md-12" sınıfı verildiğinde taşma olmaz.

   iv.  offset sınıfı ile push sınıfı aynı işlemi uygular.

   Yukarıdakilerden hangisi yanlıştır?

   A.  i ve iii

   B. Yalnız i

   C. ii ve iv

   D. i, ii, iv

   E. i, ii, iii, iv

<details><summary>Cevap</summary>Doğru cevap D şıkkıdır.</details>

