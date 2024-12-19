# Açıklama Satırları ile Çalışmak ve Genel Font Özellikleri

##  Açıklama Satırları
Açıklama satırları CSS kodu yazarken aralara kendimiz ve diğer yazılımcılar için notlar bırakmamızı sağlar. Açıklama satırlarının önemi kodda güncelleme yapılacığı vakit anlaşılmaktadır. Örnek olarak 5000 satır css kodunuz olduğu düşünün, kodu yazdıktan 1 yıl sonra değişiklik yapmak istediğimizde nerede ne yazdığınızı hatırlamamız çok zordur. Bunun için açıklama satırlarını okuruz ve bulmak istediğimiz yerleri daha kolay buluruz. Açıklama satırları tarayıcılar tarafından görünmemektedir.

CSS'de açıklama satırı bu şekilde başlar /* ve bu şekilde biter */

**Örneğin**

```css
     /* Tekli yorum satırı */
    p {
       color: red;
      }
```

Kod da istediğiniz yere yorum satırı ekleyebilirsiniz: 

```css
    p {
     color: red;  /* Metin rengini kırmızı yap*/
     }
```
Yorumları birden çok satıra da yazabilirsiniz:

 ```css
     /* Çoklu yorum
      satırı bu 
      şekilde */
     p {
       color: red;
     }
```

## Genel Font Özellikleri
CSS'de beş genel yazı tipi ailesi vardır:
 1. **Serif** yazı tiplerinin her harfin kenarlarında küçük bir kontur vardır. Bir formalite ve zarafet duygusu yaratırlar.
 2. **Sans-serif** yazı tiplerinin temiz satırları vardır (küçük konturlar eklenmez). Modern ve minimalist bir görünüm yaratırlar.
 3. **Monospace** yazı tipleri burada tüm harfler aynı sabit genişliğe sahiptir. Mekanik bir görünüm yaratırlar.
 4. **Cursive** yazı insan el yazısı taklidi gibidir.
 5. **Fantasy** yazı tipleri dekoratif, eğlenceli yazı tipleridir.

Tüm farklı yazı tipi adları, genel yazı tipi ailelerinden birine aittir.

**Not:**
Bilgisayar ekranlarında, sans-serif yazı tiplerinin serif yazı tiplerinden daha kolay okunabileceği kabul edilir.

Genel Font Aileleri | Font Örnekleri
 -- | --
 Serif | Times New Roman , Georgia
 Sans-serif | Arial , Verdana
 Monospace | Courier New , Monaco
 Cursive | Lucida Handwriting
 Fantasy | 	Copperplate , Papyrus

### CSS'de, `font-family` bir metnin yazı tipini belirtmek için özelliği kullanırız.

**Not:**
Yazı tipi adı birden fazla kelime ise, "Times New Roman" gibi tırnak içinde olmalıdır.

 ```css
 
     .p1 {
      font-family: "Times New Roman";
     }

     .p2 {
      font-family: Arial;
     }

     .p3 {
      font-family: monospace;
     }
```

 ####  `font-style` çoğunlukla italik metnini belirtmek için kullanılır.
 - **normal** Metin normal şekilde gösterilir.
 - **italic** Metin italik olarak gösterilir.
 - **oblique** Metin eğimli gösterilir ama çok desteklenmiyor.

```css
     p.normal {
      font-style: normal;
     }

     p.italic {
      font-style: italic;
     }

     p.oblique {
      font-style: oblique;
     }
```

#### CSS'de `font-size` metnin boyutunu ayarlar.
Metin boyutunu yönetebilmek web tasarımında önemlidir. Bununla birlikte, paragrafların başlık gibi veya başlıkların paragraflara benzemesi için yazı tipi boyutunu  ayarlamalısınız. Bunun içinde `font-size` kullanılır. 

**Not:** Bir yazı tipi boyutu belirtmezseniz, paragraflar gibi normal metin için varsayılan boyut 16 pikseldir (16px = 1em).

```css
    
     h1 {
      font-size: 40px;
     }
    
     h2 {
      font-size: 30px;
     }

     p {
      font-size: 14px;
     }
```
#### Em ile Yazı Tipi Boyutunu Ayarla
Kullanıcıların metni yeniden boyutlandırmasına izin vermek için (tarayıcı menüsünde), birçok geliştirici piksel yerine em kullanır.

1em, mevcut yazı tipi boyutuna eşittir. Tarayıcılarda varsayılan metin boyutu 16 pikseldir. Yani, 1em'in varsayılan boyutu 16 pikseldir.

```css
     h1 {
      font-size: 2.5em; /* 40px/16=2.5em */
     }

     h2 {
      font-size: 1.875em; /* 30px/16=1.875em */
     }  

     p {
      font-size: 0.875em; /* 14px/16=0.875em */
     }
```

Yukarıdaki örnekte, em içindeki metin boyutu, piksel cinsinden önceki örnekle aynıdır. Ancak em boyutu ile tüm tarayıcılarda metin boyutunu ayarlamak mümkündür.

## Kaynaklar
- [Yorum satırı kaynak](https://www.w3schools.com/css/css_comments.asp)
- [Font-family kaynak](https://www.w3schools.com/css/css_font.asp)
