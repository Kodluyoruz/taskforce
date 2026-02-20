# Çoklu Koşul Yapısı Kullanımı
JavaScript'te if-else koşul yapısındaki koşulların arttığı durumlarda kod okunabilirliğini artırmak ve daha performanslı sayılabilecek bir yapı olan **switch** yapısı tercih edilebilir.

Switch yapısı belirli bir değere göre hangi kodun çalıştırılacağını yönetmek için kullanılır. Bir switch yapısı tanımlarken `switch` keywordunu kullanırız ve ardından parantez içerisinde bir değer ya da değişken tanımlarız. Sonrasında `switch` ile birlikte açılan blok içerisinde yerine getirilmesi gereken koşulları **case** ifadeleriyle birlikte tanımlayabiliriz, tanımlanmış her bir case etiketinden sonra `:` koymalıyız. 

Case tanımlamalarından sonra çalışmasını istediğimiz deyimleri belirtebiliriz. Program akışında switch ifadesine verilmiş değeri sağlayan case etiketine geçerek ilgili deyimleri çalıştıracaktır, bu kontrol switch ifadesine verilmiş değerlerin tanımlanmış case etiketleri ile değer ve tip kontrolünün (===) otomatik tip dönüşümü olmadan yapılmasıdır. 

Aşağıda switch yapısının nasıl tanımlanabileceğini görebilirsiniz sonrasında dört işlem örneğiyle konuyu pekiştirelim.

```javascript
switch(ifade) {
  case a:
    // kod bloğu
    break;
  case b:
    // kod bloğu
    break;
  default:
    // kod bloğu
}
```

Şimdi switch yapısıyla bir örnek yapalım. Tanımlanmış `hava` değişkenine bağlı olarak konsola ilgili hava durumu için öneriler yazdıralım. Switch ifadesinde tanımlamış olduğumuz case etiketleri; *Yağmurlu, Güneşli, Bulutlu, Karlı ve Fırtınalı* şeklinde olsun.

```javascript
let hava = "Gunesli";
switch(hava) {
  case "Yagmurlu":
      console.log("Semsiyeni yanina almayi unutma");
      break;
  case "Gunesli":
      console.log("Hafif giyin");
  case "Bulutlu":
      console.log("Disari cik");
      break;
  case "Karlı":
      console.log("Kalin giyin");
      break;
  case "Firtinali":
      console.log("Bir süre disari cikma");
      break;
  default:
      console.log("Bilinmeyen hava durumu:" , hava);
}
```
Eğer switch ifadesine verilmiş değer herhangi bir case etiketi ile eşleşmezse **default (geçerli)** etiketine geçilecek ve ilgili deyimler çalışacaktır. 
Koşulu sağlayan bir case etiketinin deyimleri çalıştıktan sonra program akışında `break` ifadesiyle karşılaşana kadar diğer case etiketlerinin deyimleri de çalışacaktır. 

Yukarıdaki örnekte *Gunesli* case etiketi için önce konsola *"Hafif giyin"* yazdırıldı. Ardından *break* ifadesi ile karşılaşılmadığı için sonraki *Bulutlu* etiketine geçildi ve konsola *"Disari cik"* yazdırıldı.

Akış diyagramı üzerinden switch yapısının nasıl çalıştığını inceleyebilirsiniz.

![Switch Akış Diyagramı](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/coklu-kosul-yapisi-kullanimi/figures/switch-akis-diyagrami.png)

**Bir başka örnek:**
**islem** adında bir name fonksiyon ifadesi (function expression) tanımladık, bu fonksiyon ifadesi 3 parametre alıyor. 1. ve 2. parametreler işlem yapılacak sayılar ve 3. parametre string olarak yapılacak işlemdir. Switch yapısında tanımlanmış olan case etiketlerinde yapmak istediğimiz işlemleri tanımlıyoruz. Bu fonksiyonun işlem sonucunda bir değer döndürmesini istedik, sonrasında ilgili işlemler için sonuçları konsola yazdırdık.

```javascript
let islem = function(a, b, operator) {
    switch(operator) {
        case 'topla':
            return a + b;
        break;
        case 'cikar':
            return a - b;
        break;
        case 'carp':
            return a * b;
        break;
        case 'bol':
            return a / b;
        break;
        default:
            return 'Tanimlanmamis islem';
        break;
    }
};
console.log(islem(23, 14, 'topla'));  // 37
console.log(islem(10, 3, 'mod'));     // Tanimlanmamis islem
```

**Codepen ile deneyimleyebilirsiniz!** Bir hesap makinesine dönüştürmeden önce *kare alma ve kök alma* case'lerini sizin eklemenizi istiyoruz!



## Kaynaklar

1. https://eloquentjavascript.net/1st_edition/appendix1.html
2. https://medium.com/front-end-weekly/switch-case-if-else-or-a-lookup-map-a-study-case-de1c801d944
3. https://necatiergin2019.medium.com/switch-deyimi-3133d90074a9