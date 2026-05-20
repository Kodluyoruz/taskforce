# Markdown Nedir ?

Markdown, John Gruber ve Aaron Swartz tarafından geliştirilen ve 2004 yılından bu yana kullanılan metinden HTML'e (text-to-HTML) dönüşüm için kullanılan hafif bir işaretleme dilidir.

GitHub gibi platformları kullananların aşina olduğu Markdown formatı, yaygın kanının aksine sadece README dosyaları oluşturmak kullanılmaz. Temel amaç okunabilirliği ve kullanılabilirliği arttırmaktır. Basitliği ve sadeliği sayesinde forumlarda ileti yazmaktan, kitap yazmaya kadar pek çok yerde kullanılabilir. Asıl güçlü olduğu kısım klavyeden elinizi kaldırmadan tablolardan, matematiksel ifadelere kadar ihtiyaç duyduğunuz her şeyi oluşturabilmeniz ve sonrasında biçimlendirebilmenizdir.

Sözü fazla uzatmadan dilerseniz örnekler üzerinden ilerleyelim. Başta da dediğim gibi zaten oldukça basit bir yapısı var, çok seveceğinizi düşünüyorum.

## Başlıklar

HTML'de `<h1>`, `<h2>`, `<h3>` etiketleri ile aç-kapat yaparak oluşturduğumuz başlıkları, Markdown ile sadece `#` karakteri kullanarak oluşturabiliyoruz. Burada önemli olan nokta `#` karakterinden sonra boşluk bırakmaktır.

| Markdown      | HTML                  | Çıktı         |
| ---           |---                    | ---           |
| # h1 Başlık | \<h1> h1 Başlık \</h1>|  <h1> h1 Başlık </h1>  |
| ## h2 Başlık | \<h2> h2 Başlık \</h2>|  <h2> h2 Başlık </h2>  |
| ### h3 Başlık | \<h3> h3 Başlık \</h3>|  <h3> h3 Başlık </h3>  |
| #### h4 Başlık | \<h4> h4 Başlık \</h4>|  <h4> h4 Başlık </h4>  |
| ##### h5 Başlık | \<h5> h5 Başlık \</h5>|  <h5> h5 Başlık </h5>  |
| ###### h6 Başlık | \<h6> h6 Başlık \</h6>|  <h6> h6 Başlık </h6>  |

`h1` ve `h2` başlıklar yazarken alternatif olarak bir yöntem daha mevcut. `h1` için `=` ve `h2` için `-` kullanabilirsiniz.

| Markdown      | HTML                  | Çıktı         |
| ---           |---                    | ---           |
| # h1 Başlık ======== | \<h1> h1 Başlık \</h1>|  <h1> h1 Başlık </h1>  |
| ## h2 Başlık --------------| \<h2> h2 Başlık \</h2>|  <h2> h2 Başlık </h2>  |

*Not: `h1` ve `h2` başlıklarda GitHub'ın yaptığı özelleştirme sebebiyle otomatik olarak gri bir çizgi geliyor.*

## Paragraf
Paragraf oluşturmak için haricen bir işlem yapmak gerekmiyor. Markdown formatında yazıyorsanız yeni bir satır oluşturmak paragraf için yeterli. Bir paragraf tek satırdan oluşabileceği gibi, arada boşluk bırakmadan alt satırdan devam etmek de mümkün.

## Kalın, Eğik ve Üstü Çizili İfadeler

- Bir ifadeyi;
    - **Kalın** yapmak için ifadenin başına ve sonuna 2 adet `**` yıldız karakteri veya `__` 2 adet alt tire,
    - *Eğik* yapmak için ifadenin başına ve sonuna 1 adet `*` yıldız karakteri veya `_` 1 adet alt tire,
    - ***Hem kalın hem de eğik*** yapmak için ise ifadenin başına ve sonuna `***` veya `___` veya `**_` veya `__*`,
    - ~~Üstü çizili~~ yazmak için ise ifadeni başına ve sonuna 2adet `~~` karakteri ekleyebilirsiniz.

Yaygın kullanımda **kalın** yazmak için `**`, _eğik_ yazmak için `*`, ***hem kalın hem eğik*** yazmak için `***` kullanılmaktadır.

## Tek ve Çok Satırlı Kod Blokları
- Tek satır kod bloğu için kodun başına ve sonuna ` (backtick) karakteri eklenir. 
```
`console.log("Hello, World!");`
```

**Çıktı:**
`console.log("Hello, World!");`

- Çok satır kod bloğu için kodun başına ve sonuna 3 adet  `` ``` `` backtick karakteri eklenir. 

**Çıktı:**
```
function (){
console.log("Hello, World!);
}
```

- Yazılım diline göre kod bloğundaki ifadelerin stillendirilmesini isterseniz, kod bloğunun başındaki 3 adet backtick ifadesinden sonra javascript, python, css gibi etiket ekleybilirsiniz.

**Çıktı:**
```javascript
    function (){
      console.log("Hello, World!);
    }
```

## Yatay Çizgi
İçerikte bölümleme yapmak için `---` kullanabilirsiniz. HTML'deki karşılığı `<hr>` olan bu ifade;

**Çıktı:**

---

Size yukarıdaki gibi bir çizgi üretir.

## Listeler
HTML'de `<ul> </ul>` ve `<li> </li>` etiketleri ile oluşturulan listeler Markdown formatında `-` ve `*` ile oluşturulur.

```
    - Liste Elemanı 1
    - Liste Elemanı 2
    - Liste Elemanı 3
```

**Size aşağıdaki çıktıyı üretir;**

- Liste Elemanı 1
- Liste Elemanı 2
- Liste Elemanı 3

Sıralı liste elde etmek için tek yapmanız gereken liste elemanlarının başına sıra numarası ve `.` nokta eklemek.

```
1. Liste Elemanı
2. Liste Elemanı
3. Liste Elemanı
```
**Çıktı:**

1. Liste Elemanı
2. Liste Elemanı
3. Liste Elemanı


Buradaki önemli nokta şu: Siz farklı sıra numaraları vermek isteseniz de Markdown sıra numaralarını otomatik olarak biçimlendirmektedir. Aşağıdaki örnek üzerinden inceleyelim;

```
1. Liste Elemanı
8. Liste Elemanı
13. Liste Elemanı
```

**Çıktı:**
1. Liste Elemanı
8. Liste Elemanı
13. Liste Elemanı

Gördüldüğü üzere biz 1, 8 ve 13 olarak numaralandırdık fakat çıktı sıralı olarak üretildi.

Markdown ile iç içe listeler yapmak da oldukça kolay. Alt listelere `tab` ile girinti verdiğinizde otomatik olarak nested list yapısına dönüşmekte.

```
1. Liste Elemanı
    1. Alt Liste Elemanı
    2. Alt Liste Elemanı
2. Liste Elemanı
3. Liste Elemanı
```

**Çıktı:**
1. Liste Elemanı
    1. Alt Liste Elemanı
    2. Alt Liste Elemanı
2. Liste Elemanı
3. Liste Elemanı

## Tablolar
Tablo oluşturmak için aşağıdaki yapı kullanılır. Satır çizgisi için kullanılan `-` karaterine, `:` işareti eklenerek tabloda sola, sağa veya ortaya hizalama yapılabilir. 

```
| Ürünlerin Numaraları| Ürün Açıklaması| Ürünlerin Fiyatı|
| :--- | :---: | ---: |
| 1 | Açıklama | Fiyatı |
```

**Çıktı:**
| Ürün Numaraları| Ürün Açıklaması| Ürünlerin Fiyatı|
| :--- | :---: | ---: |
| 1 | Açıklama | Fiyatı |

## Bağlantı ve Resim Eklemek
HTML'den aşina olduğumuz `<a>` etiketi yerine Markdown'da `[]()` karakterleri ile;

```
[Kodluyoruz Sayfamız](https://www.kodluyoruz.org/)
```

yapısı kullanılır. Köşeli parantez bağlantı açıklamasını, küme parantezi ise linki barındırır.

**Çıktı ise şöyledir;**
[Kodluyoruz Sayfamız](https://www.kodluyoruz.org/)

Bağlantı resimleri de aynı şekilde eklenir. Sadece köşeli parantezden önce bir tane `!` ünlem işareti eklenmelidir.

```
![Kodluyoruz Logo](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/markdown-nedir-nasil-kullaniriz-/figures/kodluyoruz_logo.jpg)
```
Yapısı kullanılır. Köşeli parantezin için doldurmak zorunlu değildir. Boş da kalabilir. Çıktı aşağıdaki gibi olacaktır;

![Kodluyoruz Logo](https://raw.githubusercontent.com/Kodluyoruz/taskforce/git/git/markdown-nedir-nasil-kullaniriz-/figures/kodluyoruz_logo.jpg)

## Alıntı
Yazınız içinde alıntı kullanmak isterseniz yapmanız gereken, metinin başına `>` karakteri koymaktır.

```
> Alıntı yapılan metin.
```

**Elde ettiğimiz çıktı:**

 ![Alıntı](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/git/markdown-nedir-nasil-kullaniriz-/figures/github.PNG)
