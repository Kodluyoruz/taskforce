# CSS Display Özelliği (Block, Inline, Inline-Block)

CSS'te `display` özelliği, web sayfanızın iskeletini oluştururken en sık başvuracağınız, elementlerin birbiriyle nasıl hizalanacağını ve davranacağını belirleyen temel bir yapı taşıdır. 

Her HTML elementinin tarayıcı tarafından varsayılan olarak atanmış bir `display` değeri vardır. Örneğin:
*   `<div>` elementleri varsayılan olarak **block** davranışı gösterir.
*   `<span>` elementleri varsayılan olarak **inline** davranışı gösterir.

Bu derste bu varsayılan davranışları nasıl değiştirebileceğimizi ve tasarımımızı nasıl şekillendirebileceğimizi öğreneceğiz.

---

## 1. Display: Block (Blok Elementler)

`display: block;` özelliğine sahip elementler, sayfanın akışında birer **blok** (kafa) gibi davranırlar.

### Temel Özellikleri:
1.  **Yeni Satır:** Her zaman yeni bir satırdan başlarlar. Kendisinden sonra gelen elementi de bir alt satıra iterler.
2.  **Tam Genişlik:** Genişlik değeri verilmezse, ebeveyn elementinin ("container") genişliğinin tamamını (%100) kaplarlar.
3.  **Boyutlandırma:** `width`, `height`, `margin` ve `padding` özelliklerinin tamamını desteklerler.

### Sık Kullanılan Block Elementler:
`<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<li>`, `<header>`, `<footer>`, `<section>`

### Örnek Senaryo:
Bir blog yazısındaki paragrafları düşünün. Her paragraf (`<p>`) alt alta gelir ve sayfanın genişliğini kaplar.

```css
.kutu {
  display: block;
  width: 50%; /* Genişliği %50 olsa bile yanına başka element kabul etmez (float veya flex yoksa) */
  height: 100px;
  background-color: #3498db;
  margin: 20px auto; /* Ortalamak için margin kullanılabilir */
}
```

---

## 2. Display: Inline (Satır İçi Elementler)

`display: inline;` özelliğine sahip elementler, bir cümledeki kelimeler gibi davranır. Metin akışını bozmadan araya girerler.

### Temel Özellikleri:
1.  **Satır İçi:** Yeni bir satırdan **başlamazlar**. Mevcut satırda yer varsa oraya yerleşirler.
2.  **İçerik Kadar Genişlik:** Sadece içindeki yazı veya görsel kadar yer kaplarlar.
3.  **Kısıtlı Boyutlandırma:** 
    *   `width` ve `height` verilemez (verilse de çalışmaz).
    *   Yatay `margin` ve `padding` (sağ-sol) çalışır ve diğer elementleri iter.
    *   Dikey `margin` ve `padding` (üst-alt) görsel olarak uygulanır ancak **sayfa akışını etkilemez** (diğer satırları aşağı itmez).

### Sık Kullanılan Inline Elementler:
`<span>`, `<a>`, `<b>`, `<strong>`, `<i>`, `<img>`

### Örnek Senaryo:
Bir paragraf içindeki *önemli* bir kelimeyi kalın yapmak veya link vermek.

```css
.link {
  display: inline;
  color: red;
  /* width: 200px; -> ÇALIŞMAZ */
  /* margin-top: 50px; -> Görsel olarak değişir ama üstteki metni itmez */
  margin-left: 10px; /* Bu çalışır, solundaki metni iter */
}
```

---

## 3. Display: Inline-Block (Hibrit Kullanım)

`display: inline-block;`, `block` ve `inline` özelliklerinin en iyi yönlerini birleştirir. **Tasarım yaparken en çok işinize yarayacak klasik yöntemlerden biridir.**

### Temel Özellikleri:
1.  **Yan Yana Dizilim:** Tıpkı `inline` gibi yan yana dizilebilirler.
2.  **Blok Gibi Davranma:** Tıpkı `block` gibi `width`, `height`, `margin` ve `padding` değerlerini **tamamen kabul ederler**.

### Nerede Kullanılır?
*   Yan yana durması gereken kutular (Grid ve Flexbox'tan önce çok popülerdi).
*   Navigasyon menüleri (yan yana linkler ama boyutları ayarlanabilir).
*   Görsel galerileri.

```css
.nav-item {
  display: inline-block;
  width: 120px;
  padding: 15px;
  background-color: #2ecc71;
  text-align: center;
  /* Hem yan yana gelirler hem de boyutları olur */
}
```

---

## 4. Display: None (Görünmezlik Pelerini)

`display: none;` bir elementi DOM ağacından (sayfa yapısından) silmeden kullanıcının görüşünden tamamen kaldırır.

### Temel Özellikleri:
*   Element **yokmuş gibi** davranılır. Sayfa düzeninde yer kaplamaz, diğer elementler o boşluğu doldurur.

### `display: none` vs `visibility: hidden` Farkı (ÖNEMLİ!)

*   **`display: none`:** Elementi yok eder. Sayfada **yer kaplamaz**.
*   **`visibility: hidden`:** Elementi görünmez yapar ama elementin kapladığı alan **bomboş bir kutu olarak kalır**.

**Örnek:**
```css
.silinen-kutu {
  display: none; /* Sayfada hiç yer kaplamaz */
}

.gorunmeyen-kutu {
  visibility: hidden; /* Orada görünmez bir boşluk oluşur */
}
```

---

## Pratik Karşılaştırma Tablosu

| Özellik | `block` | `inline` | `inline-block` |
| :--- | :--- | :--- | :--- |
| **Yeni Satır** | Evet, her zaman | Hayır, yan yana | Hayır, yan yana |
| **Genişlik/Yükseklik** | Ayarlanabilir | Ayarlanamaz (İçerik kadar) | Ayarlanabilir |
| **Margin/Padding** | Tümü çalışır | Sadece yataylar akışı etkiler | Tümü çalışır |
| **Örnek Element** | `<div>`, `<p>` | `<span>`, `<a>` | Ozel kullanım |

## İpucu: Modern CSS

Günümüzde karmaşık düzenler (layout) oluşturmak için `display: block` veya `inline-block` yerine genellikle daha güçlü sistemler olan **Flexbox** (`display: flex`) ve **Grid** (`display: grid`) kullanılır. Ancak bu modern sistemleri anlamak için önce block ve inline mantığını kavramak şarttır.

## Kaynaklar
- [W3Schools - CSS Display](https://www.w3schools.com/css/css_display_visibility.asp)
- [MDN Web Docs - display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
