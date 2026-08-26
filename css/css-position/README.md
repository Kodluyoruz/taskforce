# CSS Position (Konumlandırma) - Absolute, Relative, Fixed, Sticky

## CSS Position Nedir?

CSS `position` özelliği, bir elementin doküman akışı (document flow) içinde nasıl konumlanacağını belirler. Normal akışın dışına çıkmak, elementleri üst üste bindirmek veya sayfa kaydırılırken sabitlemek için bu özelliği kullanırız.

5 temel pozisyon değeri vardır:
1.  **static** (Varsayılan)
2.  **relative**
3.  **absolute**
4.  **fixed**
5.  **sticky**

Bu özellikler genellikle `top`, `bottom`, `left`, `right` ve `z-index` özellikleri ile birlikte kullanılır.

---

## 1. Static (Varsayılan)

Tüm HTML elementlerinin varsayılan pozisyonudur. Elementler HTML sırasına göre normal akışta yer alır.
*   `top`, `right`, `bottom`, `left` ve `z-index` özellikleri **ETKİ ETMEZ**.

```css
div {
  position: static;
  /* top: 50px; -> ÇALIŞMAZ */
}
```

---

## 2. Relative (Göreceli)

Elementin **kendi** normal konumuna göre yer değiştirmesini sağlar.
*   Element yer değiştirse bile, **eski kapladığı alan boş kalır**, diğer elementler o boşluğu doldurmaz.
*   En önemli kullanımı: **`absolute` olan çocukları için bir referans noktası oluşturmasıdır.**

```css
.box {
  position: relative;
  top: 20px; /* Kendi normal konumundan 20px aşağı iner */
  left: 20px; /* Kendi normal konumundan 20px sağa kayar */
}
```

---

## 3. Absolute (Mutlak)

Element normal akıştan **tamamen çıkarılır**.
*   Eski yeri diğer elementler tarafından doldurulur.
*   En yakın **"positioned" (static olmayan)** atasına (ancestor) göre konumlanır.
*   Eğer "positioned" bir ata yoksa, `<body>` elementine göre konumlanır.

**Kritik Kural:** Bir elementi başka bir elementin içine sabitlemek istiyorsan; **Ebeveyne `relative`, çocuğa `absolute` ver.**

```css
.parent {
  position: relative; /* Sınırları belirleyen çerçeve */
  width: 400px;
  height: 400px;
  background: gray;
}

.child {
  position: absolute;
  top: 0;
  right: 0; /* Ebeveynin sağ üst köşesine yapışır */
  width: 50px;
  height: 50px;
  background: red;
}
```

---

## 4. Fixed (Sabit)

Element tarayıcı penceresine (viewport) göre konumlanır.
*   Sayfayı aşağı kaydırsanız bile **element yerinden oynamaz**.
*   Navigasyon çubukları (navbar), "Başa Dön" butonları ve modallar için kullanılır.
*   Normal akıştan tamamen çıkarılır.

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; /* Genişlik vermeyi unutmayın */
  background: black;
  color: white;
}
```

---

## 5. Sticky (Yapışkan)

Hem `relative` hem de `fixed` gibi davranan melez bir özelliktir.
*   Element, belirlediğiniz eşik değerine (örn: `top: 0`) gelene kadar `relative` gibi davranır.
*   Sayfa kaydırılıp o noktaya gelindiğinde `fixed` gibi oraya yapışır.
*   Ancak kendi ebeveyninin sınırları dışına çıkamaz.

```css
.sidebar {
  position: sticky;
  top: 20px; /* Sayfa kaydırılınca üstten 20px mesafede sabitlenir */
}
```
**Önemli:** `sticky` çalışması için bir `top`, `bottom`, `left` veya `right` değeri vermelisiniz.

---

## Z-Index (Katman Sırası)

Elementlerin üst üste binme sırasını belirler. Sayı ne kadar büyükse, element o kadar üstte görünür.
*   **Sadece `position` değeri `static` OLMAYAN elementlerde çalışır.**
*   Negatif değerler alabilir (`-1` gibi).

```css
.box-1 {
  position: absolute;
  z-index: 10; /* Altta kalır */
}

.box-2 {
  position: absolute;
  z-index: 20; /* Üstte görünür */
}
```

---

## Pratik Karşılaştırma Tablosu

| Değer | Akıştan Çıkar mı? | Referans Noktası | Kaydırmada Sabit mi? |
| :--- | :--- | :--- | :--- |
| **static** | Hayır | Yok | Hayır |
| **relative** | Hayır | Kendisi | Hayır |
| **absolute** | Evet | En yakın positioned ata | Hayır (Ebeveynle hareket eder) |
| **fixed** | Evet | Viewport (Ekran) | Evet |
| **sticky** | Hayır (Başta) | Kendisi / Viewport | Evet (Belirli noktada) |

---

## Pratik Örnekler

### Örnek 1: Resim Üzerine Yazı (Overlay)
Resmin üzerine metin bindirmek için klasik `relative` + `absolute` kullanımı.

```html
<div class="card">
  <img src="image.jpg" alt="Manzara">
  <div class="overlay">Başlık</div>
</div>
```

```css
.card {
  position: relative; /* Referans noktası */
  width: 300px;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0,0,0,0.5); /* Yarı saydam siyah */
  color: white;
  text-align: center;
  padding: 10px;
}
```

### Örnek 2: "Yukarı Çık" Butonu (Fixed)
Sayfanın sağ alt köşesinde sabit duran buton.

```css
.scroll-top-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Her şeyin üstünde olsun */
}
```

### Örnek 3: Dropdown Menü (Absolute)
Bir butona tıklandığında (veya hover) altında menü açılması.

```css
.menu-container {
  position: relative;
  display: inline-block;
}

.dropdown {
  display: none; /* Gizli */
  position: absolute;
  top: 100%; /* Tam altına */
  left: 0;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.menu-container:hover .dropdown {
  display: block; /* Göster */
}
```

---

## Kaynaklar
- [MDN - Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [CSS Tricks - Absolute, Relative, Fixed Positioning](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/)
- [web.dev - Position property](https://web.dev/learn/css/position)
