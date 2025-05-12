# Fonksiyona Parametre (params) ve Geridönüş (return) Eklemek

Fonksiyonlar, bir takım veriler kullanarak, herhangi bir görevi yerine getiren veya bu verileri işleyip, sonuç üreten komut grubudur. 

Fonksiyonlar, JavaScript'te oldukça önemli bir konudur. Genel işlevi itibariyle diğer programlama dillerindeki fonksiyonlara oldukça benzerler. Fakat, diğer programlama dillerinden farklı olarak JavaScript'te fonksiyonlar, birer nesne olarak değerlendirilir ve çok farklı şekillerde kullanılırlar.

Fonksiyonlar, parametreli veya parametresiz fonksiyonlar, değer döndüren veya değer döndürmeyen fonksiyonlar olarak farklı şekillerde oluşturulabilir. Hangi fonksiyon tipini kullanacağımız, yazmak istediğimiz algoritmanın ihtiyacına göre değişmektedir. 

Bu yazımızda, parametreli ve değer döndüren fonksiyonları inceleyeceğiz. Ayrıca, bir fonksiyona parametre(params) ve geridönüş(return) nasıl eklenir öğrenmiş olacağız.

------

Öncelikle, aşağıdaki örnek kod şablonu ile parametreli ve değer döndüren fonksiyon yapısını inceleyelim.

**Dikkat**: Oluşturacağımız fonksiyon ve değişken isimlerinde, İngilizce'de karşılığı olmayan Türkçe karakterli kelimeleri kullanmamalıyız. Örneğin, fonksiyon ismini *fonksiyonAdı* olarak vermek istiyorsak, İngilizce'de *"ı"* harfi bulunmadığından *fonksiyonunAdi* şeklinde değiştirmeliyiz.

```javascript
function fonksiyonunAdi (parametre1, parametre2,...,parametreN)
{
    // ALINAN PARAMETRELER İLE YAPILMAK İSTENEN İŞLEMLER
    return fonksiyonunCiktisi
}
```

Genel olarak fonksiyon şablonunu incelediğimizde, *parametre1, parametre2,...,parametreN* şeklinde belirli sayıda parametre almaktadır. Bu parametreler ile süslü parantezler içerisinde çeşitli işlemler yapıp, *return fonksiyonunCiktisi* ifadesi ile bunu çıktı olarak vermektedir. Burada kullanılan *return* ifadesi fonksiyonun geri dönüş değeri veya çıktısı olarak adlandırılır. 

Genel şablonu inceledikten sonra kafamızda net bir şeyin oluşmamış olması gayet normal. Bu sebeple ilk örneğimizle bu fonksiyon çeşidini daha yakından tanıyalım.

**Örnek 1**: Herhangi iki sayıyı toplayıp, bir değişkene atayan fonksiyon ifadesini yazalım.

Örneğimizi çözmeden önce şu konuya açıklık getirmemiz gerekir; yazmak istediğimiz fonksiyonun belirli iki sayının toplamını istemediğini fark etmeliyiz. Yani, ~~"15 ile 12 sayılarının toplamını veren fonksiyonu yazın"~~ denilmemiştir. Bu sebeple, fonksiyonumuz toplanacak bu iki sayıyı parametre olarak alacaktır. Gelin, nasıl olduğunu yakından inceleyelim,

```javascript
function toplama (a , b) // a ve b toplanacak iki sayıyı temsil eden fonksiyon parametreleri(girdileri)
 {  
    var sonuc = a+b; // Fonksiyonda aldığımız parametrelerle yaptığımız işlem
	return sonuc;  	// Herhangi iki sayının toplamından elde edeceğimiz işlem sonucunu, return ifadesinden hemen sonra belirtiyoruz.
 }        
```

Görüldüğü gibi, kullanıcının gireceği her iki sayıyı ifade etmek için *a ve b* parametrelerini kullandık. Fonksiyon içerisinde, toplama işlemini yapıp *sonuc* değişkenine atadık. *return* ifadesiyle de bunun fonksiyonun geridönüşü/çıkışı olduğunu belirtmiş olduk. 

Buraya kadar tamamsak, yazdığımız bu fonksiyonu nasıl çağıracağımız öğrenelim. Öncelikle, yazdığımız bir fonksiyonu kullanmak istediğimizde, fonksiyonun süslü parantezini kapattığımızdan ve her iki parantezin de dışına çıktığımızdan emin olalım. Daha sonra, çağırmak istediğimiz fonksiyonun adını ve toplamak istediğimiz herhangi iki sayıyı parametre olarak vermemiz gerekecek. Örneğin, 5 ile 7 rakamlarının toplamını isteyelim. Burada dikkat etmemiz gereken önemli bir nokta var. Şöyleki; küme parantezleri arasında fonksiyona gönderdiğimiz parametrelerin sırasına dikkat etmemiz gerekiyor. Fonksiyon çağrısında parametreleri hangi sıra ile gönderirsek, fonksiyonda o sıra ile bilinirler. Yani aşağıdaki fonksiyon çağrısında *toplam(5,7)* dediğimizde fonksiyonun içindeki parametrelerimiz a ve b olduğundan a=5, b=7 olarak kullanılacaktır. Burada toplama yerine çıkartma işlemi yapmış olsaydık parametrelerin gönderim sırası işlemin sonucu tamamen değiştirecekti.

```javascript
var donenSonuc = toplama(5,7); // 5 ve 7 değerlerini a ve b parametrelerine karşılık gelen argümanlar olarak düşünebiliriz.
```

Bu noktada, oluşturduğumuz fonksiyon kaç adet parametre alıyorsa, fonksiyonu çağırırken de o kadar parametre girmeliyiz. Ayrıca, fonksiyonumuz return ifadesiyle değer dönen  bir fonksiyon olduğundan, fonksiyonu çağırdığımızda elde edeceğimiz çıktı, işlemin sonucu yani, bir değer olacağından bunu *donenSonuc* gibi bir değişkene atamalıyız. 

------

Parametreli ve bir değer dönen fonksiyon örneklerine devam edelim.

**Örnek 2:** Herhangi bir yarıçapa sahip bir dairenin alanını hesaplayan fonksiyonu yazınız.

Oluşturacağımız fonksiyonun, herhangi bir daireye ait yarıçap ifadesini parametre olarak alıp, alan hesaplaması yaptıktan sonra sonucu dönmesi istenmektedir. Bir dairenin alanını, şu matematiksel ifadeyle hesaplandığını biliyoruz;
$$
A = π x r²
$$
 Buna göre, bu işlemi fonksiyonumuzda da yazmaya çalışalım.

```javascript
const PI = 3.14; // Formülde kullandığımız sabit sayı pi'yi bu şekilde alabiliriz.
function daireAlaniHesaplama (r) // Fonksiyonumuz, r parametresini alıyor.
{
    var islemSonucu = PI*r*r; // Dairenin alanını hesaplayacak işlemimiz.
    return islemSonucu;		 // return ifadesiyle sonucu dönüyoruz.
}

var donenSonuc = daireAlaniHesaplama(3); // Argüman olarak, alanını hesaplamak istediğimiz herhangi bir dairenin yarıçapı için 3 rakamı verildi. 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.
```

Yazdığımız kodun başında sabit olarak belirttiğimiz pi sabitini, fonksiyonumuzun bir parametresi olarak da belirtebiliriz. Fonksiyon içerisindeki işlemimizi bir değere atamadan, direkt olarak return ifadesinden hemen sonra da yazabiliriz. Bu sayede, kodumuzu daha az satırla yazmış olacağız.

```javascript
function daireAlaniHesaplama (r, PI = 3.14) 
{ 
    return PI*r*r;		
}
var donenSonuc = daireAlaniHesaplama(3); 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.
```

------

**Örnek 3:** Farklı yarıçaplardaki iki farklı dairenin, alanları çarpımını veren bir fonksiyon yazınız.

Bu örneğimizde, herhangi iki yarıçaplı dairelerin alanlarını hesaplayan fonksiyonu ve elde ettiğimiz bu iki alanı çarpan bir fonksiyona ihtiyacımız var. 

```javascript
function daireAlaniHesaplama (r, PI = 3.14) 
{ 
    return PI*r*r;		
}

function carpma (a1, a2)
{
    return a1*a2;
}

var alan1 = daireAlaniHesaplama(5); // 5 ve 6 argümanları için dairelerin alanları hesaplandı.
var alan2 = daireAlaniHesaplama(6); 
var donenSonuc = carpma(alan1, alan2); // Hesaplanan alanlar argüman olarak verildi.
console.log(donenSonuc);  			  // 354.9456 olarak hesaplandı.
```

Aşağıda codepen ile deneyimleyebilirsiniz!

Bu örnekten de görüldüğü gibi, bir fonksiyonu çağırdıktan sonra elde ettiğimiz bir değer ile ikinci bir fonksiyonun argümanı olarak kullanabiliyoruz. Bunu yapabilmemize olanak sağlayan şey, değer döndüren(return) fonksiyonları kullanmamız olduğunu söyleyebiliriz. 

Bu konunun detaylıca öğrenilebilmesi için farklı örneklerle çok fazla pratik yapılması gerektiğini unutmamamız gerekir.

# Fonksiyona Geri Dönüş (return) Eklemek

Fonksiyonlarda return komutunun 2 önemli işlevi vardır.

1.Fonksiyonun geri dönüş değerini oluşturur.
2.Fonksiyonu sonlandırır.


Return komutundan sonra  işlem, değişken veya sabit yazılabilir.

````javascript
return false;
return 95;
return cikar(x,y)/7.0 
````

Return ifadesinden sonra döndürülecek değer atlanırsa, undefined döndürülür.

````java
return [[değer]];
````

Return komutu ASI'ne  dahil olduğundan dolayı return ve değeri aynı satırda olmalıdır. Yoksa aşağıdaki senaryo gerçekleşir.

````javascript
return
a*b;
````

ASI tarafından aşağıdaki gibi değiştirilir.

 `````javascript
return;
a*b;
 `````

Ve *return komutundan sonra ulaşılamayan kod* hatasını almamız kaçınılmazdır.

Bu konunun detaylıca öğrenilebilmesi için farklı örneklerle çok fazla pratik yapılması gerektiğini unutmamamız gerekir.

## Kaynaklar

https://www.w3schools.com/js/js_functions.asp
