# CSS Grid ile Çalışmak

## CSS Grid Nedir?

CSS Grid, web sayfalarında iki boyutlu (satır ve sütun) layout'lar oluşturmak için kullanılan güçlü bir CSS modülüdür. Flexbox'ın tek boyutlu (ya satır ya da sütun) yapısının aksine, Grid hem satırları hem de sütunları aynı anda kontrol etmenizi sağlar. Bu özellik sayesinde karmaşık sayfa düzenlerini daha kolay ve esnek bir şekilde oluşturabilirsiniz.

CSS Grid, modern web tasarımında responsive ve profesyonel görünümlü layout'lar oluşturmak için vazgeçilmez bir araçtır. Özellikle dashboard'lar, galeri sayfaları, blog layout'ları ve karmaşık form düzenleri için idealdir.

## CSS Grid Temel Kavramlar

### Grid Container (Kapsayıcı)
Grid yapısını oluşturmak için öncelikle bir elementi **grid container** yapmamız gerekir. Bu, `display: grid;` veya `display: inline-grid;` özelliği ile yapılır.

```css
.container {
  display: grid;
}
```

### Grid Item (Öğe)
Grid container'ın doğrudan çocuk elementleri otomatik olarak **grid item** haline gelir.

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

### Grid Line (Çizgi)
Grid'i oluşturan yatay ve dikey çizgilere **grid line** denir. Bu çizgiler numaralandırılır ve grid öğelerini konumlandırmak için kullanılır.

### Grid Track (İz)
İki grid çizgisi arasındaki alana **grid track** denir. Satırlar ve sütunlar birer grid track'tir.

### Grid Cell (Hücre)
İki komşu satır ve iki komşu sütun çizgisi arasındaki alana **grid cell** denir. Grid'in en küçük birimidir.

### Grid Area (Alan)
Bir veya daha fazla grid hücresinden oluşan dikdörtgen alana **grid area** denir.

## Grid Container Özellikleri

### 1. grid-template-columns ve grid-template-rows

Bu özellikler grid'in sütun ve satır yapısını tanımlar.

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3 sütun, her biri 200px */
  grid-template-rows: 100px 100px; /* 2 satır, her biri 100px */
}
```

**fr (fraction) birimi** kullanarak esnek boyutlar oluşturabilirsiniz:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* Ortadaki sütun diğerlerinin 2 katı */
}
```

**repeat() fonksiyonu** ile tekrarlayan değerleri kolayca tanımlayabilirsiniz:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 eşit sütun */
  grid-template-rows: repeat(2, 150px); /* 2 satır, her biri 150px */
}
```

### 2. gap (grid-gap)

Grid öğeleri arasındaki boşluğu ayarlar.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* Hem satır hem sütun arası 20px */
}

/* Veya ayrı ayrı: */
.container {
  row-gap: 20px;
  column-gap: 30px;
}
```

### 3. justify-items ve align-items

Grid öğelerini hücreler içinde hizalar.

```css
.container {
  display: grid;
  justify-items: center; /* Yatay hizalama: start, end, center, stretch */
  align-items: center; /* Dikey hizalama: start, end, center, stretch */
}
```

### 4. justify-content ve align-content

Grid'in tamamını container içinde hizalar.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 200px);
  justify-content: center; /* Grid'i yatayda ortala */
  align-content: center; /* Grid'i dikeyde ortala */
}
```

## Grid Item Özellikleri

### 1. grid-column ve grid-row

Grid öğelerinin hangi sütun ve satırlarda yer alacağını belirler.

```css
.item {
  grid-column: 1 / 3; /* 1. çizgiden 3. çizgiye kadar (2 sütun kaplar) */
  grid-row: 1 / 2; /* 1. satırda */
}

/* Veya span kullanarak: */
.item {
  grid-column: span 2; /* 2 sütun kapla */
  grid-row: span 1; /* 1 satır kapla */
}
```

### 2. grid-area

Öğeye bir isim verir veya kısa yoldan konum belirler.

```css
.item {
  grid-area: 1 / 1 / 3 / 3; /* row-start / column-start / row-end / column-end */
}
```

## Pratik Örnekler

### Örnek 1: Basit 3 Sütunlu Grid

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      padding: 20px;
      background-color: #f0f0f0;
    }
    
    .grid-item {
      background-color: #4CAF50;
      color: white;
      padding: 30px;
      text-align: center;
      font-size: 20px;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>
</body>
</html>
```

### Örnek 2: Responsive Fotoğraf Galerisi

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 15px;
      padding: 20px;
    }
    
    .gallery-item {
      background-color: #ddd;
      height: 200px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: #666;
    }
    
    .gallery-item:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
  </style>
</head>
<body>
  <div class="gallery">
    <div class="gallery-item">Fotoğraf 1</div>
    <div class="gallery-item">Fotoğraf 2</div>
    <div class="gallery-item">Fotoğraf 3</div>
    <div class="gallery-item">Fotoğraf 4</div>
    <div class="gallery-item">Fotoğraf 5</div>
    <div class="gallery-item">Fotoğraf 6</div>
  </div>
</body>
</html>
```

**Açıklama:**
- `auto-fit`: Mevcut alana sığacak kadar sütun oluşturur
- `minmax(250px, 1fr)`: Her sütun minimum 250px, maksimum eşit paylaşım

### Örnek 3: Dashboard Layout (Gelişmiş)

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    .dashboard {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto 1fr 1fr;
      gap: 20px;
      padding: 20px;
      height: 100vh;
    }
    
    .header {
      grid-column: 1 / 5; /* Tüm sütunları kapla */
      background-color: #2196F3;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 8px;
    }
    
    .sidebar {
      grid-column: 1 / 2;
      grid-row: 2 / 4; /* 2 satır kapla */
      background-color: #f44336;
      color: white;
      padding: 20px;
      border-radius: 8px;
    }
    
    .main-content {
      grid-column: 2 / 5; /* 3 sütun kapla */
      grid-row: 2 / 3;
      background-color: #4CAF50;
      color: white;
      padding: 20px;
      border-radius: 8px;
    }
    
    .widget1 {
      grid-column: 2 / 3;
      background-color: #FF9800;
      color: white;
      padding: 20px;
      border-radius: 8px;
    }
    
    .widget2 {
      grid-column: 3 / 4;
      background-color: #9C27B0;
      color: white;
      padding: 20px;
      border-radius: 8px;
    }
    
    .widget3 {
      grid-column: 4 / 5;
      background-color: #00BCD4;
      color: white;
      padding: 20px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="dashboard">
    <div class="header">
      <h1>Dashboard Başlık</h1>
    </div>
    <div class="sidebar">
      <h3>Menü</h3>
      <ul>
        <li>Ana Sayfa</li>
        <li>Profil</li>
        <li>Ayarlar</li>
      </ul>
    </div>
    <div class="main-content">
      <h2>Ana İçerik Alanı</h2>
      <p>Burası ana içerik alanıdır.</p>
    </div>
    <div class="widget1">
      <h3>Widget 1</h3>
      <p>İstatistikler</p>
    </div>
    <div class="widget2">
      <h3>Widget 2</h3>
      <p>Grafikler</p>
    </div>
    <div class="widget3">
      <h3>Widget 3</h3>
      <p>Bildirimler</p>
    </div>
  </div>
</body>
</html>
```

## Grid vs Flexbox: Ne Zaman Hangisi?

### Grid Kullanın:
- İki boyutlu layout'lar için (satır VE sütun)
- Karmaşık sayfa düzenleri
- Öğelerin hem yatay hem dikey konumlandırılması gerektiğinde
- Dashboard, galeri, blog layout'ları

### Flexbox Kullanın:
- Tek boyutlu layout'lar için (ya satır ya sütun)
- Basit hizalama işlemleri
- Navigation bar, card layout'ları
- Öğelerin dinamik boyutlandırılması gerektiğinde

**Not:** Grid ve Flexbox birlikte kullanılabilir! Grid ile genel sayfa yapısını oluşturup, içerideki öğeleri Flexbox ile düzenleyebilirsiniz.

## Responsive Grid Teknikleri

### auto-fit ve auto-fill

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

- **auto-fit**: Boş sütunları daraltır, mevcut öğeleri genişletir
- **auto-fill**: Boş sütunları korur, yeni öğeler için yer ayırır

### Media Queries ile Grid

```css
.container {
  display: grid;
  grid-template-columns: 1fr; /* Mobil: tek sütun */
  gap: 20px;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 sütun */
  }
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(4, 1fr); /* Desktop: 4 sütun */
  }
}
```

## Önemli İpuçları

1. **fr birimi kullanın**: Piksel yerine `fr` birimi kullanarak esnek layout'lar oluşturun.
2. **gap kullanın**: Margin yerine `gap` kullanarak öğeler arası boşluk oluşturun.
3. **minmax() fonksiyonu**: Responsive tasarım için `minmax()` fonksiyonunu kullanın.
4. **Browser desteği**: Modern tarayıcılar Grid'i destekler, ancak eski tarayıcılar için fallback düşünün.
5. **DevTools kullanın**: Tarayıcı geliştirici araçlarında Grid overlay özelliğini kullanarak grid yapınızı görselleştirin.

## Kaynaklar

- [MDN Web Docs - CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid by Example](https://gridbyexample.com/)
- [CSS Grid Garden - Interaktif Öğrenme](https://cssgridgarden.com/)

## Sonuç

CSS Grid, modern web geliştirmede vazgeçilmez bir araçtır. İki boyutlu layout'lar oluşturmanın en güçlü ve esnek yoludur. Flexbox ile birlikte kullanıldığında, neredeyse her türlü sayfa düzenini kolayca oluşturabilirsiniz. Pratik yaparak Grid'i öğrenmek en etkili yöntemdir - yukarıdaki örnekleri deneyerek başlayabilirsiniz!
