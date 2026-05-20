# CSS Flexbox ile Çalışmak

## Flexbox Nedir?

Flexbox (Flexible Box Layout), CSS'de modern ve güçlü bir layout (yerleşim) sistemidir. Elementleri tek boyutlu (satır veya sütun) olarak hizalamak, dağıtmak ve aralarındaki boşlukları yönetmek için kullanılır. Flexbox, responsive (duyarlı) tasarımlar oluşturmayı kolaylaştırır ve karmaşık layout problemlerini basit çözümlerle halletmenizi sağlar.

### Flexbox'ın Avantajları

- **Kolay hizalama**: Elementleri yatay ve dikey olarak kolayca hizalayabilirsiniz
- **Esnek boyutlandırma**: Elementler otomatik olarak büyüyüp küçülebilir
- **Sıralama kontrolü**: HTML sırasını değiştirmeden elementlerin görsel sırasını değiştirebilirsiniz
- **Responsive tasarım**: Farklı ekran boyutlarına kolayca uyum sağlar
- **Boşluk yönetimi**: Elementler arası boşlukları kolayca yönetebilirsiniz

## Temel Kavramlar

Flexbox iki ana bileşenden oluşur:

1. **Flex Container (Flex Kapsayıcı)**: `display: flex` veya `display: inline-flex` özelliği verilen parent (ebeveyn) element
2. **Flex Items (Flex Öğeleri)**: Flex container'ın direkt çocukları olan elementler

### Eksenler (Axes)

Flexbox iki eksen üzerinde çalışır:

- **Main Axis (Ana Eksen)**: Flex öğelerinin yerleştiği ana yön (varsayılan olarak yatay)
- **Cross Axis (Çapraz Eksen)**: Ana eksene dik olan yön (varsayılan olarak dikey)

```
Main Axis (→)
┌─────────────────────────────────┐
│  ┌────┐  ┌────┐  ┌────┐         │
│  │ 1  │  │ 2  │  │ 3  │         │ Cross Axis (↓)
│  └────┘  └────┘  └────┘         │
└─────────────────────────────────┘
```

## Flex Container Özellikleri

### 1. display

Bir elementi flex container yapmak için kullanılır.

```css
.container {
  display: flex; /* veya inline-flex */
}
```

**Örnek:**

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
}

.item {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  margin: 5px;
  text-align: center;
}
```

### 2. flex-direction

Flex öğelerinin hangi yönde dizileceğini belirler.

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- **row** (varsayılan): Soldan sağa (→)
- **row-reverse**: Sağdan sola (←)
- **column**: Yukarıdan aşağıya (↓)
- **column-reverse**: Aşağıdan yukarıya (↑)

**Örnek:**

```html
<div class="container-row">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<div class="container-column">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
```

```css
.container-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}

.container-column {
  display: flex;
  flex-direction: column;
  width: 200px;
}
```

### 3. flex-wrap

Flex öğelerinin tek satırda mı yoksa birden fazla satıra mı yerleştirileceğini belirler.

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- **nowrap** (varsayılan): Tüm öğeler tek satırda
- **wrap**: Öğeler birden fazla satıra yerleşir
- **wrap-reverse**: Öğeler birden fazla satıra ters sırada yerleşir

**Örnek:**

```html
<div class="container-wrap">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```

```css
.container-wrap {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  background-color: #f0f0f0;
  padding: 10px;
}

.container-wrap .item {
  width: 100px;
  height: 100px;
  background-color: #2196F3;
  color: white;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
```

### 4. flex-flow

`flex-direction` ve `flex-wrap` özelliklerinin kısayoludur.

```css
.container {
  flex-flow: <flex-direction> <flex-wrap>;
}
```

**Örnek:**

```css
.container {
  display: flex;
  flex-flow: row wrap;
  /* Aşağıdakiyle aynı:
  flex-direction: row;
  flex-wrap: wrap;
  */
}
```

### 5. justify-content

Flex öğelerinin ana eksen (main axis) boyunca nasıl hizalanacağını belirler.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

- **flex-start** (varsayılan): Başlangıca hizalı
- **flex-end**: Sona hizalı
- **center**: Ortaya hizalı
- **space-between**: İlk ve son öğe kenarlarda, aralar eşit boşluklu
- **space-around**: Her öğenin etrafında eşit boşluk
- **space-evenly**: Tüm boşluklar eşit

**Örnek:**

```html
<h3>justify-content: flex-start</h3>
<div class="container jc-start">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<h3>justify-content: center</h3>
<div class="container jc-center">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<h3>justify-content: space-between</h3>
<div class="container jc-between">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 20px;
}

.jc-start {
  justify-content: flex-start;
}

.jc-center {
  justify-content: center;
}

.jc-between {
  justify-content: space-between;
}

.item {
  background-color: #FF5722;
  color: white;
  padding: 20px;
  margin: 5px;
}
```

### 6. align-items

Flex öğelerinin çapraz eksen (cross axis) boyunca nasıl hizalanacağını belirler.

```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

- **stretch** (varsayılan): Öğeler container'ı dolduracak şekilde uzar
- **flex-start**: Çapraz eksenin başına hizalı
- **flex-end**: Çapraz eksenin sonuna hizalı
- **center**: Çapraz eksenin ortasına hizalı
- **baseline**: Öğelerin text baseline'ına göre hizalı

**Örnek:**

```html
<h3>align-items: flex-start</h3>
<div class="container ai-start">
  <div class="item">1</div>
  <div class="item" style="height: 80px;">2</div>
  <div class="item">3</div>
</div>

<h3>align-items: center</h3>
<div class="container ai-center">
  <div class="item">1</div>
  <div class="item" style="height: 80px;">2</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 20px;
  height: 150px;
}

.ai-start {
  align-items: flex-start;
}

.ai-center {
  align-items: center;
}

.item {
  background-color: #9C27B0;
  color: white;
  padding: 20px;
  margin: 5px;
}
```

### 7. align-content

Birden fazla satır olduğunda, satırların çapraz eksen boyunca nasıl hizalanacağını belirler. (Sadece `flex-wrap: wrap` ile çalışır)

```css
.container {
  align-content: stretch | flex-start | flex-end | center | space-between | space-around;
}
```

**Örnek:**

```html
<div class="container-multi">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```

```css
.container-multi {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  background-color: #f0f0f0;
  padding: 10px;
  height: 400px;
  width: 300px;
}

.container-multi .item {
  width: 80px;
  height: 80px;
  background-color: #00BCD4;
  color: white;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### 8. gap, row-gap, column-gap

Flex öğeleri arasındaki boşluğu belirler (modern tarayıcılarda desteklenir).

```css
.container {
  gap: 20px; /* hem satır hem sütun arası */
  /* veya */
  row-gap: 20px;
  column-gap: 10px;
}
```

**Örnek:**

```html
<div class="container-gap">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

```css
.container-gap {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-color: #f0f0f0;
  padding: 10px;
  width: 300px;
}

.container-gap .item {
  width: 100px;
  height: 100px;
  background-color: #FFC107;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
```

## Flex Item Özellikleri

### 1. order

Flex öğelerinin görüntülenme sırasını değiştirir. Varsayılan değer 0'dır.

```css
.item {
  order: <integer>;
}
```

**Örnek:**

```html
<div class="container">
  <div class="item order-3">1 (order: 3)</div>
  <div class="item order-1">2 (order: 1)</div>
  <div class="item order-2">3 (order: 2)</div>
</div>
```

```css
.container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
}

.item {
  background-color: #E91E63;
  color: white;
  padding: 20px;
  margin: 5px;
}

.order-1 { order: 1; }
.order-2 { order: 2; }
.order-3 { order: 3; }
```

### 2. flex-grow

Flex öğesinin ne kadar büyüyebileceğini belirler. Varsayılan değer 0'dır.

```css
.item {
  flex-grow: <number>; /* varsayılan 0 */
}
```

**Örnek:**

```html
<div class="container">
  <div class="item">1</div>
  <div class="item grow-2">2 (flex-grow: 2)</div>
  <div class="item">3</div>
</div>
```

```css
.container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
}

.item {
  background-color: #3F51B5;
  color: white;
  padding: 20px;
  margin: 5px;
  flex-grow: 1;
}

.grow-2 {
  flex-grow: 2; /* Bu öğe diğerlerinden 2 kat daha fazla büyür */
}
```

### 3. flex-shrink

Flex öğesinin ne kadar küçülebileceğini belirler. Varsayılan değer 1'dir.

```css
.item {
  flex-shrink: <number>; /* varsayılan 1 */
}
```

**Örnek:**

```html
<div class="container-shrink">
  <div class="item">1</div>
  <div class="item no-shrink">2 (flex-shrink: 0)</div>
  <div class="item">3</div>
</div>
```

```css
.container-shrink {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
  width: 300px;
}

.container-shrink .item {
  background-color: #009688;
  color: white;
  padding: 20px;
  margin: 5px;
  width: 150px;
}

.no-shrink {
  flex-shrink: 0; /* Bu öğe küçülmez */
}
```

### 4. flex-basis

Flex öğesinin başlangıç boyutunu belirler. Varsayılan değer `auto`'dur.

```css
.item {
  flex-basis: <length> | auto; /* varsayılan auto */
}
```

**Örnek:**

```html
<div class="container">
  <div class="item basis-100">1 (100px)</div>
  <div class="item basis-200">2 (200px)</div>
  <div class="item basis-150">3 (150px)</div>
</div>
```

```css
.container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
}

.item {
  background-color: #795548;
  color: white;
  padding: 20px;
  margin: 5px;
}

.basis-100 { flex-basis: 100px; }
.basis-200 { flex-basis: 200px; }
.basis-150 { flex-basis: 150px; }
```

### 5. flex

`flex-grow`, `flex-shrink` ve `flex-basis` özelliklerinin kısayoludur.

```css
.item {
  flex: <flex-grow> <flex-shrink> <flex-basis>;
  /* veya */
  flex: none | auto | initial;
}
```

**Yaygın Kullanımlar:**

```css
.item {
  flex: 1; /* flex: 1 1 0% */
}

.item {
  flex: auto; /* flex: 1 1 auto */
}

.item {
  flex: none; /* flex: 0 0 auto */
}
```

**Örnek:**

```html
<div class="container">
  <div class="item flex-1">flex: 1</div>
  <div class="item flex-2">flex: 2</div>
  <div class="item flex-1">flex: 1</div>
</div>
```

```css
.container {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
}

.item {
  background-color: #607D8B;
  color: white;
  padding: 20px;
  margin: 5px;
}

.flex-1 { flex: 1; }
.flex-2 { flex: 2; }
```

### 6. align-self

Tek bir flex öğesinin çapraz eksen hizalamasını değiştirir. Container'daki `align-items` özelliğini override eder.

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

**Örnek:**

```html
<div class="container">
  <div class="item">1</div>
  <div class="item self-start">2 (flex-start)</div>
  <div class="item self-center">3 (center)</div>
  <div class="item self-end">4 (flex-end)</div>
  <div class="item">5</div>
</div>
```

```css
.container {
  display: flex;
  align-items: stretch;
  background-color: #f0f0f0;
  padding: 10px;
  height: 200px;
}

.item {
  background-color: #673AB7;
  color: white;
  padding: 20px;
  margin: 5px;
}

.self-start { align-self: flex-start; }
.self-center { align-self: center; }
.self-end { align-self: flex-end; }
```

## Pratik Örnekler

### Örnek 1: Basit Navigation Bar

```html
<nav class="navbar">
  <div class="logo">Logo</div>
  <ul class="nav-links">
    <li><a href="#">Ana Sayfa</a></li>
    <li><a href="#">Hakkımızda</a></li>
    <li><a href="#">Hizmetler</a></li>
    <li><a href="#">İletişim</a></li>
  </ul>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #4CAF50;
}
```

### Örnek 2: Card Layout

```html
<div class="card-container">
  <div class="card">
    <img src="image1.jpg" alt="Resim 1">
    <h3>Başlık 1</h3>
    <p>Bu bir açıklama metnidir.</p>
    <button>Detaylar</button>
  </div>
  <div class="card">
    <img src="image2.jpg" alt="Resim 2">
    <h3>Başlık 2</h3>
    <p>Bu bir açıklama metnidir.</p>
    <button>Detaylar</button>
  </div>
  <div class="card">
    <img src="image3.jpg" alt="Resim 3">
    <h3>Başlık 3</h3>
    <p>Bu bir açıklama metnidir.</p>
    <button>Detaylar</button>
  </div>
</div>
```

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  flex: 1 1 300px; /* Minimum 300px genişlik */
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card h3 {
  padding: 1rem;
  margin: 0;
}

.card p {
  padding: 0 1rem;
  flex-grow: 1;
}

.card button {
  margin: 1rem;
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.card button:hover {
  background-color: #45a049;
}
```

### Örnek 3: Centered Content (Dikey ve Yatay Ortalama)

```html
<div class="center-container">
  <div class="center-content">
    <h1>Hoş Geldiniz</h1>
    <p>Bu içerik tam ortada</p>
  </div>
</div>
```

```css
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.center-content {
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
  text-align: center;
}
```

### Örnek 4: Holy Grail Layout

```html
<div class="holy-grail">
  <header class="header">Header</header>
  <div class="content-wrapper">
    <aside class="sidebar-left">Sol Sidebar</aside>
    <main class="main-content">Ana İçerik</main>
    <aside class="sidebar-right">Sağ Sidebar</aside>
  </div>
  <footer class="footer">Footer</footer>
</div>
```

```css
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header, .footer {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

.content-wrapper {
  display: flex;
  flex: 1;
}

.sidebar-left, .sidebar-right {
  background-color: #f0f0f0;
  padding: 1rem;
  flex: 0 0 200px;
}

.main-content {
  background-color: white;
  padding: 1rem;
  flex: 1;
}

/* Responsive */
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
  
  .sidebar-left, .sidebar-right {
    flex: 0 0 auto;
  }
}
```

### Örnek 5: Responsive Grid

```html
<div class="grid">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
</div>
```

```css
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
}

.grid-item {
  flex: 1 1 calc(33.333% - 1rem); /* 3 sütun */
  background-color: #3F51B5;
  color: white;
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Tablet */
@media (max-width: 768px) {
  .grid-item {
    flex: 1 1 calc(50% - 1rem); /* 2 sütun */
  }
}

/* Mobil */
@media (max-width: 480px) {
  .grid-item {
    flex: 1 1 100%; /* 1 sütun */
  }
}
```

## Flexbox ile İlgili İpuçları

1. **Margin auto kullanımı**: Flex öğelerinde `margin: auto` kullanarak öğeleri kolayca hizalayabilirsiniz.

```css
.item {
  margin-left: auto; /* Öğeyi sağa iter */
}
```

2. **Min-width ve max-width**: Flex öğelerinin boyutlarını kontrol altında tutmak için kullanın.

```css
.item {
  flex: 1;
  min-width: 200px;
  max-width: 400px;
}
```

3. **Flex vs Grid**: Tek boyutlu layout'lar için Flexbox, iki boyutlu layout'lar için CSS Grid kullanın.

4. **Browser desteği**: Modern tarayıcılar Flexbox'ı tam destekler. Eski tarayıcılar için prefix kullanmanız gerekebilir.

## Kaynaklar ve Daha Fazlası

- [CSS-Tricks Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [MDN Web Docs - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Flexbox Froggy](https://flexboxfroggy.com/) - Eğlenceli bir Flexbox öğrenme oyunu
- [Flexbox Defense](http://www.flexboxdefense.com/) - Flexbox ile tower defense oyunu

## Alıştırmalar

1. Bir navigation bar oluşturun ve logo ile menü öğelerini iki yana yerleştirin
2. Üç sütunlu bir card layout yapın ve responsive hale getirin
3. Bir footer oluşturun ve içeriği eşit aralıklarla dağıtın
4. Bir form layout'u oluşturun ve label'ları ile input'ları hizalayın
5. Bir image gallery yapın ve resimleri flex-wrap ile sarmalayın

Flexbox, modern web geliştirmede vazgeçilmez bir araçtır. Pratik yaparak ve farklı örnekler deneyerek Flexbox'ta ustalaşabilirsiniz!
