# CSS Pseudo-classes (Sözde Sınıflar) ve Pseudo-elements (Sözde Elementler)

## Nedir?

CSS'de elementlerin özel durumlarını (tıklanma, üzerine gelme vb.) veya belirli parçalarını (ilk harf, öncesi, sonrası) seçmek için **Pseudo-classes** ve **Pseudo-elements** kullanılır.

- **Pseudo-class (`:`)**: Elementin *durumunu* veya *konumunu* belirtir. Tek iki nokta ile başlar (Örn: `:hover`).
- **Pseudo-element (`::`)**: Elementin *belirli bir parçasını* seçer veya sanal bir parça oluşturur. Çift iki nokta ile başlar (Örn: `::before`).

---

## 1. Kullanıcı Aksiyonu (User Action) Pseudo-classes

Kullanıcının elementle etkileşime geçtiği anları hedefler.

### `:hover`
Kullanıcı fare ile elementin üzerine geldiğinde çalışır.
```css
button:hover {
  background-color: blue;
  color: white;
}
```

### `:active`
Elemente tıklandığı anda (basılı tutarken) çalışır.
```css
button:active {
  transform: scale(0.98); /* Tıklama hissi verir */
}
```

### `:focus`
Element odaklandığında (tab ile veya tıklayarak) çalışır. Genellikle form elemanları için kullanılır.
```css
input:focus {
  border-color: #3498db;
  outline: none;
}
```

### `:focus-within`
Kendisi VEYA çocuklarından biri odaklandığında çalışır.
```css
/* Formun içindeki herhangi bir inputa tıklandığında tüm formun rengini değiştir */
.form-group:focus-within {
  background-color: #f0f8ff;
}
```

---

## 2. Yapısal (Structural) Pseudo-classes

DOM ağacındaki konumlarına göre elementleri seçer.

### `:first-child` ve `:last-child`
Bir ebeveynin ilk veya son çocuğunu seçer.
```css
/* Listenin ilk elemanı */
li:first-child {
  font-weight: bold;
}

/* Listenin son elemanı */
li:last-child {
  border-bottom: none;
}
```

### `:nth-child(n)`
Belirli bir sıradaki çocuğu seçer. `even` (çift), `odd` (tek) veya formül (`2n+1`) alabilir.
```css
/* Çift sıradaki satırları renklendir (Zebra Tablo) */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Her 3. elemanı seç */
li:nth-child(3n) {
  color: red;
}
```

### `:not(selector)` (Negation)
Belirtilen seçiciye UYMAYAN elementleri seçer.
```css
/* .special class'ına sahip OLMAYAN tüm p etiketleri */
p:not(.special) {
  color: gray;
}
```

---

## 3. Form Pseudo-classes

Form elemanlarının durumlarına göre stil verir.

### `:checked`
Seçili olan `radio` veya `checkbox` elementlerini seçer.
```css
/* Seçili checkbox'ın hemen yanındaki label'ı kalın yap */
input[type="checkbox"]:checked + label {
  font-weight: bold;
  color: green;
}
```

### `:disabled` ve `:enabled`
Devre dışı bırakılmış veya aktif form elemanlarını seçer.
```css
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### `:valid` ve `:invalid`
Form doğrulama durumuna göre stil verir.
```css
input:invalid {
  border-color: red;
}

input:valid {
  border-color: green;
}
```

---

## 4. Pseudo-elements (Sözde Elementler)

Gerçekte HTML'de olmayan sanal elementler yaratır veya parçaları seçer.

### `::before` ve `::after`
Elementin içeriğinin en başına veya en sonuna sanal içerik ekler. `content` özelliği ZORUNLUDUR.

```css
/* Her linkin sonuna ok işareti ekle */
a::after {
  content: " ↗";
  font-size: 12px;
}

/* Özel madde işareti (bullet) */
li::before {
  content: "•";
  color: red;
  margin-right: 5px;
}
```

### `::placeholder`
Input içindeki yer tutucu metni (placeholder) stillendirir.
```css
input::placeholder {
  color: #ccc;
  font-style: italic;
}
```

### `::selection`
Kullanıcı metni seçtiğinde (mavi arka plan) görünen stili değiştirir.
```css
::selection {
  background-color: yellow;
  color: black;
}
```

---

## Pratik Örnekler & Combinators ile Kullanım

Pseudo-class'lar Combinator'lar (`+`, `~`, `>`, ` `) ile birleştiğinde çok güçlü hale gelir.

### Örnek 1: Hamburger Menü Animasyonu
Checkbox hack tekniği ile CSS-only açılır menü.

```css
/* Checkbox gizlenir */
#menu-toggle {
  display: none;
}

/* Menü varsayılan olarak kapalı */
.menu {
  display: none;
}

/* Checkbox seçildiğinde, ondan sonra gelen .menu'yu göster */
/* :checked pseudo-class + Sibling Combinator (~) */
#menu-toggle:checked ~ .menu {
  display: block;
}
```

### Örnek 2: Tooltip Yapımı
`data-` attribute ve `::before` kullanarak CSS tooltip.

```html
<button data-tooltip="Bu bir ipucudur!">Üzerime Gel</button>
```

```css
button {
  position: relative;
}

/* Hover olduğunda pseudo-elementi göster */
button:hover::before {
  content: attr(data-tooltip); /* HTML'den metni al */
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: black;
  color: white;
  padding: 5px;
  border-radius: 4px;
  white-space: nowrap;
}
```

### Örnek 3: Form Odaklanma Efekti (Label Kaydırma)
Input odaklandığında (`:focus`) veya dolu olduğunda (`:valid`) label'ı yukarı kaydır.

```css
.input-group {
  position: relative;
}

label {
  position: absolute;
  top: 10px;
  left: 10px;
  transition: 0.3s;
}

/* Input odaklandığında label'ı yukarı at */
input:focus + label,
input:valid + label {
  top: -20px;
  font-size: 12px;
  color: blue;
}
```

---

## Kaynaklar
- [MDN - Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [MDN - Pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)
- [CSS Tricks - A Whole Bunch of Amazing Stuff Pseudo Elements Can Do](https://css-tricks.com/pseudo-element-roundup/)
