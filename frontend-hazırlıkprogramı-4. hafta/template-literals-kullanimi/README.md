# Template Literals Kullanımı

**Template Literals** (önceki adıyla Template Strings), kod okunulabilirliği ve yazım kolaylığı sağlayan ES6 ile gelmiş bir **string** yazma şeklidir. 

### Kullanım Şekli

```javascript
"Eski string"

`Bu bir yeni string örneğidir.`
```

String ifade yazarken, `"` veya `'` kullanırız. Template Literals ile JavaScript'te backtick (```)  işareti kullanılmaya başlanmıştır. 

**Windows için** → `Alt Gr` + `,`

**Mac için** → `option` + `,`

Yaparak bu işareti kullanabilirsiniz.

### Sağladığı Faydalar


- **Çok Satırlı Dize Yazımı:**

```javascript
//Eski kullanım:
let eskiString = "En sevdiğim yemekler:\nİskender\nMantı"

//Yeni kullanım:
let yeniString = `En sevdiğim yemekler:
İskender
Mantı`
```

- **İnterpolasyon:**

**İnterpolasyon**, metin içerisinde değişken kullanmak anlamına gelir. Normal dizeler içerisine ifadeler gömmek için kullanılır.

```javascript
let ad= `Aycan`;
let soyad= `Yerdelen`;

//Eski kullanım
console.log("Benim adım "+ad+" "+ soyad);

//Yeni kullanım
console.log(`Benim adım ${ad} ${soyad}`);
```

→ Örnek:
```javascript
let a = 99;
let b= 999;

console.log(`${a} çarpı ${b} eşittir ${a*b}`);

//Çıktı: 
//99 çarpı 999 eşittir 98901
```

Aşağıda codepen ile deneyimleyebilirsiniz!

- **HTML Şablonları**

Çok satırlı dizeleri kolaylıkla kullanmak ve dizelerimize içerik eklemek için de Template Literal’den faydalanabiliriz.

```javascript
//Değişkenlerimizi tanımlayalım
const ad =`Aycan`
const soyad =`Yerdelen`
const gozRengi =`Kahverengi`
const yas =21
```

→ Eski kullanım, Template  Literals kullanmadan:

```javascript
const kisi = "<p>"+ad+"</p>"+
              "<p>"+soyad+"</p>"+
              "<p>"+gozRengi+"</p>"+
              "<p>"+yas+"</p>"

document.body.innerHTML = kisi;
```

Aşağıda codepen ile deneyimleyebilirsiniz!

→Yeni kullanım, Template Literals kullanarak:

```javascript
const kisi = `
<p>${ad}</>
<p>${soyad}</>
<p>${gozRengi}</>
<p>${yas}</>
`;

document.body.innerHTML = kisi;

//Bu kullanım daha az karmaşık ve okunabilir.
```

Aşağıda codepen ile deneyimleyebilirsiniz!

### Kısaca

Template Literals;
- Kod okunabilirliğini kolaylaştırır,
- Stringler içerisinde değişken yazma kolaylığını sağlar,
- Şablon etiketlerini daha az karmaşık hale getirir.

### Alıştırma
- Aşağıdaki kod satırlarını Template Strings yazımına göre düzenleyiniz.
```javascript
const kitap = {
  ad: "Fırtına",
  yazar: "Shakespeare",
  tarih: 1610
}
const bookTable =
      "<table border>"+
  "<tbody>"+
    "<tr>"+
      "<td>"+"Kitap"+"</td>"+
      "<td>"+kitap.ad+"</td>"+
    "</tr>"+
  "<tr>"+
      "<td>"+"Yazar"+"</td>"+
      "<td>"+kitap.yazar+"</td>"+
    "</tr>"+
      "<tr>"+
      "<td>"+"Tarih"+"</td>"+
      "<td>"+kitap.tarih+"</td>"+
    "</tr>"+
 " </tbody>"+
"</table>"
document.body.innerHTML = bookTable
```

Aşağıda codepen ile deneyimleyebilirsiniz!

## Kaynaklar
- https://medium.com/@gulineyel/javascriptde-template-literals-nedir-76eddd333e7
- https://www.webcebir.com/227-javascript-template-literal-dersi.html
- https://www.w3schools.com/tags/tag_tbody.asp
