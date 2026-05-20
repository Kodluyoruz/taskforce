# CSS Media Queries - Responsive Tasarım Temelleri

## Media Queries Nedir?

Media Queries (Medya Sorguları), CSS'in farklı ekran boyutları, cihaz özellikleri ve kullanıcı tercihlerine göre farklı stiller uygulamanıza olanak tanıyan güçlü bir özelliğidir. Responsive (duyarlı) web tasarımının temel taşıdır ve web sitenizin mobil telefonlardan masaüstü bilgisayarlara kadar her cihazda mükemmel görünmesini sağlar.

**Responsive Web Tasarım**, içeriğin görüntülendiği cihazın ihtiyaçlarına ve yeteneklerine yanıt veren web siteleri oluşturma yaklaşımıdır.

## Neden Media Queries Kullanmalıyız?

1. **Çoklu Cihaz Desteği**: Telefon, tablet, laptop, masaüstü - hepsi için optimize edilmiş deneyim
2. **Kullanıcı Deneyimi**: Her ekran boyutunda okunabilir ve kullanılabilir içerik
3. **SEO**: Google mobil-uyumlu siteleri tercih eder
4. **Tek Kod Tabanı**: Ayrı mobil site yerine tek bir responsive site
5. **Gelecek Uyumlu**: Yeni cihazlar çıktıkça otomatik uyum sağlar

## Viewport Meta Tag - İlk Adım

Responsive tasarıma başlamadan önce, HTML'de viewport meta tag'ini eklemelisiniz:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Site</title>
</head>
<body>
  <!-- İçerik -->
</body>
</html>
```

**Açıklama:**
- `width=device-width`: Sayfanın genişliğini cihazın ekran genişliğine eşitle
- `initial-scale=1.0`: Başlangıç zoom seviyesini 1:1 olarak ayarla

**Bu tag olmadan**, mobil tarayıcılar sayfayı ~980px genişliğinde render eder ve küçültür, bu da kötü bir kullanıcı deneyimi yaratır.

## Media Query Sözdizimi

### Temel Yapı

```css
@media media-type and (media-feature) {
  /* CSS kuralları */
}
```

### Basit Örnek

```css
/* Varsayılan stiller (mobil-first) */
body {
  font-size: 14px;
}

/* Ekran genişliği 768px veya daha büyükse */
@media (min-width: 768px) {
  body {
    font-size: 16px;
  }
}

/* Ekran genişliği 1024px veya daha büyükse */
@media (min-width: 1024px) {
  body {
    font-size: 18px;
  }
}
```

## Media Types (Medya Türleri)

Media queries üç ana medya türünü destekler:

### 1. all (Tümü)
Tüm cihazlar için geçerlidir (varsayılan).

```css
@media all {
  /* Tüm cihazlar için */
}

/* 'all' belirtmezseniz varsayılan olarak kullanılır */
@media (min-width: 768px) {
  /* Bu da tüm cihazlar için */
}
```

### 2. screen (Ekran)
Bilgisayar ekranları, tabletler, telefonlar için.

```css
@media screen and (min-width: 768px) {
  /* Ekran cihazları için */
}
```

### 3. print (Yazdırma)
Sayfa yazdırılırken uygulanır.

```css
@media print {
  /* Yazdırma stilleri */
  body {
    font-size: 12pt;
    color: black;
  }
  
  .no-print {
    display: none; /* Yazdırmada gizle */
  }
  
  a::after {
    content: " (" attr(href) ")"; /* Linkleri göster */
  }
}
```

## Media Features (Medya Özellikleri)

### 1. Width (Genişlik)

En yaygın kullanılan özellik:

```css
/* Tam eşitlik (nadiren kullanılır) */
@media (width: 768px) {
  /* Ekran tam 768px ise */
}

/* Minimum genişlik (en yaygın) */
@media (min-width: 768px) {
  /* Ekran 768px veya daha büyükse */
}

/* Maksimum genişlik */
@media (max-width: 767px) {
  /* Ekran 767px veya daha küçükse */
}

/* Aralık (modern sözdizimi) */
@media (768px <= width <= 1024px) {
  /* Ekran 768px ile 1024px arasındaysa */
}
```

### 2. Height (Yükseklik)

```css
@media (min-height: 600px) {
  /* Ekran yüksekliği 600px veya daha büyükse */
}

@media (max-height: 500px) {
  /* Kısa ekranlar için (örn: yatay telefon) */
  header {
    height: 50px; /* Daha küçük header */
  }
}
```

### 3. Orientation (Yönelim)

```css
/* Dikey (portrait) */
@media (orientation: portrait) {
  /* Yükseklik > Genişlik */
  .sidebar {
    display: none; /* Mobilde sidebar gizle */
  }
}

/* Yatay (landscape) */
@media (orientation: landscape) {
  /* Genişlik > Yükseklik */
  .sidebar {
    display: block;
  }
}
```

### 4. Aspect Ratio (En-Boy Oranı)

```css
@media (aspect-ratio: 16/9) {
  /* 16:9 ekranlar için */
}

@media (min-aspect-ratio: 16/9) {
  /* 16:9 veya daha geniş ekranlar için */
}
```

### 5. Hover (Üzerine Gelme Yeteneği)

```css
/* Hover yapılabilen cihazlar (fare, trackpad) */
@media (hover: hover) {
  .button:hover {
    background-color: blue;
  }
}

/* Hover yapılamayan cihazlar (dokunmatik) */
@media (hover: none) {
  .button:active {
    background-color: blue;
  }
}
```

### 6. Pointer (İşaretçi Hassasiyeti)

```css
/* İnce işaretçi (fare) */
@media (pointer: fine) {
  .button {
    padding: 5px 10px;
  }
}

/* Kaba işaretçi (parmak/dokunmatik) */
@media (pointer: coarse) {
  .button {
    padding: 15px 20px; /* Daha büyük dokunma alanı */
  }
}

/* İşaretçi yok */
@media (pointer: none) {
  /* Klavye navigasyonu için optimize et */
}
```

### 7. Prefers-Color-Scheme (Renk Şeması Tercihi)

```css
/* Açık tema tercihi */
@media (prefers-color-scheme: light) {
  body {
    background: white;
    color: black;
  }
}

/* Koyu tema tercihi */
@media (prefers-color-scheme: dark) {
  body {
    background: #1a1a1a;
    color: #f0f0f0;
  }
}
```

### 8. Prefers-Reduced-Motion (Azaltılmış Hareket Tercihi)

```css
/* Normal animasyonlar */
@media (prefers-reduced-motion: no-preference) {
  .element {
    transition: transform 0.3s;
  }
}

/* Azaltılmış hareket tercihi */
@media (prefers-reduced-motion: reduce) {
  .element {
    transition: none;
  }
}
```

## Mantıksal Operatörler

### 1. and (VE)

Birden fazla koşulu birleştirir:

```css
@media (min-width: 768px) and (max-width: 1024px) {
  /* Ekran 768px ile 1024px arasındaysa */
}

@media screen and (min-width: 768px) and (orientation: landscape) {
  /* Ekran cihazı VE 768px+ VE yatay */
}
```

### 2. , (VEYA)

Virgül ile ayrılmış koşullardan biri doğruysa:

```css
@media (min-width: 768px), (orientation: landscape) {
  /* Ekran 768px+ VEYA yatay ise */
}

@media screen, print {
  /* Ekran VEYA yazdırma için */
}
```

### 3. not (DEĞİL)

Koşulu tersine çevirir:

```css
@media not print {
  /* Yazdırma DIŞINDA her şey için */
}

@media not (min-width: 768px) {
  /* 768px'den KÜÇÜK ekranlar için */
  /* Ancak (max-width: 767px) kullanmak daha net */
}
```

## Yaygın Breakpoint'ler (Kırılma Noktaları)

Breakpoint'ler, tasarımın değiştiği ekran genişlikleridir:

```css
/* Mobil-First Yaklaşımı (Önerilen) */

/* Ekstra küçük cihazlar (telefonlar, 0-599px) */
/* Varsayılan stiller - media query yok */

/* Küçük cihazlar (büyük telefonlar, 600px ve üzeri) */
@media (min-width: 600px) {
  
}

/* Orta cihazlar (tabletler, 768px ve üzeri) */
@media (min-width: 768px) {
  
}

/* Büyük cihazlar (masaüstü, 992px ve üzeri) */
@media (min-width: 992px) {
  
}

/* Ekstra büyük cihazlar (büyük masaüstü, 1200px ve üzeri) */
@media (min-width: 1200px) {
  
}

/* Ekstra ekstra büyük (1400px ve üzeri) */
@media (min-width: 1400px) {
  
}
```

**Not:** Bu değerler genel kılavuzdur. İçeriğinize göre breakpoint'leri ayarlayın!

## Pratik Örnekler

### Örnek 1: Responsive Navigation (Mobil-First)

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Mobil stiller (varsayılan) */
    .nav {
      background: #333;
      padding: 10px;
    }
    
    .nav-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .nav-item {
      padding: 10px;
      border-bottom: 1px solid #555;
    }
    
    .nav-link {
      color: white;
      text-decoration: none;
      display: block;
    }
    
    /* Tablet ve üzeri (768px+) */
    @media (min-width: 768px) {
      .nav-list {
        display: flex;
        justify-content: center;
      }
      
      .nav-item {
        border-bottom: none;
        border-right: 1px solid #555;
      }
      
      .nav-item:last-child {
        border-right: none;
      }
    }
  </style>
</head>
<body>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item"><a href="#" class="nav-link">Ana Sayfa</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Hakkımızda</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Hizmetler</a></li>
      <li class="nav-item"><a href="#" class="nav-link">İletişim</a></li>
    </ul>
  </nav>
</body>
</html>
```

### Örnek 2: Responsive Grid Layout

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    .grid {
      display: grid;
      gap: 20px;
      /* Mobil: 1 sütun */
      grid-template-columns: 1fr;
    }
    
    .card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    /* Tablet: 2 sütun */
    @media (min-width: 768px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    /* Masaüstü: 3 sütun */
    @media (min-width: 1024px) {
      .grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    /* Büyük ekran: 4 sütun */
    @media (min-width: 1400px) {
      .grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="grid">
      <div class="card">Kart 1</div>
      <div class="card">Kart 2</div>
      <div class="card">Kart 3</div>
      <div class="card">Kart 4</div>
      <div class="card">Kart 5</div>
      <div class="card">Kart 6</div>
    </div>
  </div>
</body>
</html>
```

### Örnek 3: Responsive Typography (Yazı Boyutları)

```css
/* Mobil */
body {
  font-size: 14px;
  line-height: 1.5;
}

h1 {
  font-size: 24px;
}

h2 {
  font-size: 20px;
}

/* Tablet */
@media (min-width: 768px) {
  body {
    font-size: 16px;
    line-height: 1.6;
  }
  
  h1 {
    font-size: 32px;
  }
  
  h2 {
    font-size: 24px;
  }
}

/* Masaüstü */
@media (min-width: 1024px) {
  body {
    font-size: 18px;
    line-height: 1.7;
  }
  
  h1 {
    font-size: 40px;
  }
  
  h2 {
    font-size: 28px;
  }
}
```

### Örnek 4: Responsive Images

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
    
    .hero-image {
      width: 100%;
      object-fit: cover;
      height: 200px;
    }
    
    @media (min-width: 768px) {
      .hero-image {
        height: 400px;
      }
    }
    
    @media (min-width: 1024px) {
      .hero-image {
        height: 600px;
      }
    }
  </style>
</head>
<body>
  <img src="hero.jpg" alt="Hero" class="hero-image">
</body>
</html>
```

### Örnek 5: Sidebar Layout (Mobil-First)

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Mobil: Tek sütun */
    .layout {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }
    
    .sidebar {
      background: #f0f0f0;
      padding: 20px;
      border-radius: 8px;
    }
    
    .main-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
    }
    
    /* Tablet ve üzeri: İki sütun */
    @media (min-width: 768px) {
      .layout {
        flex-direction: row;
      }
      
      .sidebar {
        flex: 0 0 250px; /* Sabit genişlik */
      }
      
      .main-content {
        flex: 1; /* Kalan alanı doldur */
      }
    }
    
    /* Büyük ekran: Daha geniş sidebar */
    @media (min-width: 1200px) {
      .sidebar {
        flex: 0 0 300px;
      }
    }
  </style>
</head>
<body>
  <div class="layout">
    <aside class="sidebar">
      <h3>Sidebar</h3>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </aside>
    <main class="main-content">
      <h1>Ana İçerik</h1>
      <p>Lorem ipsum dolor sit amet...</p>
    </main>
  </div>
</body>
</html>
```

### Örnek 6: Dark Mode (Sistem Tercihi)

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Açık tema (varsayılan) */
    :root {
      --bg-color: #ffffff;
      --text-color: #333333;
      --card-bg: #f5f5f5;
    }
    
    /* Koyu tema tercihi */
    @media (prefers-color-scheme: dark) {
      :root {
        --bg-color: #1a1a1a;
        --text-color: #f0f0f0;
        --card-bg: #2a2a2a;
      }
    }
    
    body {
      background-color: var(--bg-color);
      color: var(--text-color);
      font-family: Arial, sans-serif;
      padding: 20px;
      transition: background-color 0.3s, color 0.3s;
    }
    
    .card {
      background: var(--card-bg);
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <h1>Dark Mode Örneği</h1>
  <div class="card">
    <p>Bu kart sistem temanıza göre otomatik renk değiştirir!</p>
  </div>
</body>
</html>
```

### Örnek 7: Print Styles (Yazdırma Stilleri)

```css
/* Ekran stilleri */
.no-print {
  display: block;
}

.page-break {
  display: none;
}

/* Yazdırma stilleri */
@media print {
  /* Gereksiz elementleri gizle */
  .no-print,
  nav,
  footer,
  .sidebar,
  button {
    display: none !important;
  }
  
  /* Sayfa sonları */
  .page-break {
    display: block;
    page-break-after: always;
  }
  
  /* Renkleri optimize et */
  body {
    color: black;
    background: white;
  }
  
  /* Link URL'lerini göster */
  a::after {
    content: " (" attr(href) ")";
  }
  
  /* Yazı boyutlarını ayarla */
  body {
    font-size: 12pt;
  }
  
  h1 {
    font-size: 18pt;
  }
}
```

## Mobile-First vs Desktop-First

### Mobile-First (Önerilen)

Mobil cihazlar için tasarlayıp, büyük ekranlar için genişletin:

```css
/* Mobil (varsayılan) */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet ve üzeri */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* Masaüstü */
@media (min-width: 1024px) {
  .container {
    width: 970px;
  }
}
```

**Avantajları:**
- Performans: Mobil cihazlar gereksiz CSS yüklemez
- Daha basit kod
- Modern yaklaşım

### Desktop-First

Masaüstü için tasarlayıp, küçük ekranlar için daraltın:

```css
/* Masaüstü (varsayılan) */
.container {
  width: 1200px;
  margin: 0 auto;
}

/* Tablet ve altı */
@media (max-width: 1023px) {
  .container {
    width: 750px;
  }
}

/* Mobil */
@media (max-width: 767px) {
  .container {
    width: 100%;
    padding: 10px;
  }
}
```

**Dezavantajları:**
- Mobil cihazlar gereksiz CSS yükler
- Daha karmaşık kod
- Eski yaklaşım

## Breakpoint Seçimi İpuçları

### ❌ Yanlış: Cihaz Bazlı

```css
/* iPhone 12 için */
@media (width: 390px) {
  /* Çok spesifik, kötü yaklaşım */
}
```

### ✅ Doğru: İçerik Bazlı

```css
/* İçerik bozulmaya başladığında */
@media (min-width: 768px) {
  /* İçeriğe göre belirlenen breakpoint */
}
```

**Kural:** Breakpoint'leri cihazlara göre değil, içeriğinizin ne zaman "kırıldığına" göre seçin.

## Responsive Design Kontrol Listesi

### ✅ Yapılması Gerekenler:

1. **Viewport meta tag kullanın**
2. **Mobile-first yaklaşımı benimseyin**
3. **Esnek birimler kullanın** (%, em, rem, vw, vh)
4. **Görselleri responsive yapın** (`max-width: 100%`)
5. **Dokunma hedeflerini büyük tutun** (minimum 44x44px)
6. **İçeriğinizi test edin** (gerçek cihazlarda)
7. **Performansı optimize edin**
8. **Erişilebilirliği düşünün**

### ❌ Yapılmaması Gerekenler:

1. Sabit genişlikler kullanmayın (`width: 500px`)
2. Çok fazla breakpoint eklemeyin
3. İçeriği gizlemeyin (mobilde de önemlidir)
4. Yatay kaydırma oluşturmayın
5. Viewport meta tag'i unutmayın
6. Sadece bir cihazda test etmeyin

## Modern CSS Alternatifleri

Bazı durumlarda media query'lere ihtiyacınız olmayabilir:

### 1. CSS Grid ile Auto-Responsive

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

Bu kod media query olmadan responsive olur!

### 2. Flexbox ile Esnek Layout

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.flex-item {
  flex: 1 1 300px; /* Minimum 300px, esnek büyüme */
}
```

### 3. Container Queries (Yeni!)

```css
.container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

Container queries, viewport yerine parent container'a göre stil uygular.

## DevTools ile Test Etme

### Chrome DevTools

1. F12 veya Cmd+Option+I (Mac) / Ctrl+Shift+I (Windows)
2. Device Toolbar'ı açın (Cmd+Shift+M / Ctrl+Shift+M)
3. Farklı cihazları test edin
4. Responsive mode'da boyutları manuel ayarlayın

### Firefox Responsive Design Mode

1. F12 veya Cmd+Option+M (Mac) / Ctrl+Shift+M (Windows)
2. Farklı cihaz boyutlarını test edin
3. Network throttling ile yavaş bağlantıları simüle edin

## Kaynaklar

- [MDN - Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [web.dev - Responsive Web Design Basics](https://web.dev/articles/responsive-web-design-basics)
- [CSS Tricks - Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [Can I Use - Media Queries](https://caniuse.com/css-mediaqueries)

## Sonuç

Media Queries, modern web geliştirmenin vazgeçilmez bir parçasıdır. Doğru kullanıldığında, web sitenizin her cihazda mükemmel görünmesini ve çalışmasını sağlar.

**Hatırlatma:**
- Mobile-first yaklaşımı kullanın
- İçeriğinize göre breakpoint'ler seçin
- Esnek birimler kullanın
- Gerçek cihazlarda test edin
- Performansı ve erişilebilirliği unutmayın

Responsive tasarım bir hedef değil, bir süreçtir. Sürekli test edin ve iyileştirin! 📱💻🖥️
