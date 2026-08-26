# CSS Transitions - Geçişler ile Animasyonlar

## CSS Transitions Nedir?

CSS Transitions (Geçişler), bir CSS özelliğinin bir değerden başka bir değere yumuşak bir şekilde geçiş yapmasını sağlayan güçlü bir özelliktir. Transitions sayesinde kullanıcı etkileşimlerine (hover, focus, click vb.) görsel geri bildirim vererek kullanıcı deneyimini önemli ölçüde iyileştirebilirsiniz.

Örneğin, bir butonun üzerine gelindiğinde rengi aniden değişmek yerine yumuşak bir şekilde geçiş yapabilir. Bu, web sitenizi daha profesyonel ve kullanıcı dostu hale getirir.

## Neden CSS Transitions Kullanmalıyız?

1. **Kullanıcı Deneyimi**: Ani değişiklikler yerine yumuşak geçişler kullanıcıya daha iyi bir deneyim sunar
2. **Görsel Geri Bildirim**: Kullanıcı etkileşimlerine görsel yanıt verir
3. **Profesyonel Görünüm**: Modern ve şık bir tasarım oluşturur
4. **Kolay Kullanım**: JavaScript'e gerek kalmadan CSS ile kolayca uygulanabilir
5. **Performans**: Doğru kullanıldığında performanslıdır

## Temel Transition Özellikleri

CSS Transitions dört ana özellikten oluşur:

### 1. transition-property (Geçiş Özelliği)

Hangi CSS özelliğinin geçiş yapacağını belirler.

```css
.button {
  transition-property: background-color;
}

/* Birden fazla özellik */
.button {
  transition-property: background-color, transform, opacity;
}

/* Tüm özellikler */
.button {
  transition-property: all;
}
```

**Önemli Not:** `all` kullanmak kolaydır ancak performans sorunlarına yol açabilir. Mümkünse spesifik özellikleri belirtin.

### 2. transition-duration (Geçiş Süresi)

Geçişin ne kadar süreceğini belirler. Saniye (s) veya milisaniye (ms) cinsinden belirtilir.

```css
.button {
  transition-duration: 0.3s; /* 300 milisaniye */
}

.button {
  transition-duration: 500ms; /* 500 milisaniye */
}

/* Birden fazla özellik için farklı süreler */
.button {
  transition-property: background-color, transform;
  transition-duration: 0.3s, 0.5s;
}
```

**Varsayılan değer:** `0s` (geçiş yok)

### 3. transition-timing-function (Zamanlama Fonksiyonu)

Geçişin hızının zaman içinde nasıl değişeceğini belirler. Bu, animasyonun doğal görünmesini sağlar.

```css
/* Önceden tanımlı değerler */
.button {
  transition-timing-function: ease; /* Varsayılan - yavaş başlar, hızlanır, yavaş biter */
}

.button {
  transition-timing-function: linear; /* Sabit hız */
}

.button {
  transition-timing-function: ease-in; /* Yavaş başlar */
}

.button {
  transition-timing-function: ease-out; /* Yavaş biter */
}

.button {
  transition-timing-function: ease-in-out; /* Yavaş başlar ve biter */
}

/* Özel cubic-bezier eğrisi */
.button {
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

**Timing Function Karşılaştırması:**
- **linear**: Robotik, mekanik hareketler için
- **ease**: Genel kullanım için en doğal
- **ease-in**: Açılır menüler, dropdown'lar için
- **ease-out**: Butonlar, hover efektleri için (en çok önerilen)
- **ease-in-out**: Modal'lar, overlay'ler için

### 4. transition-delay (Geçiş Gecikmesi)

Geçişin başlamadan önce ne kadar bekleyeceğini belirler.

```css
.button {
  transition-delay: 0.1s; /* 100ms bekle, sonra başla */
}

.button {
  transition-delay: 0s; /* Varsayılan - hemen başla */
}

/* Negatif değer - geçişi ortasından başlat */
.button {
  transition-delay: -0.5s;
}
```

**Kullanım Alanları:**
- Ardışık animasyonlar (staggered animations)
- Hover efektlerinde gecikme
- Debug için (negatif değerlerle)

## Kısa Yol (Shorthand) Kullanımı

Tüm transition özelliklerini tek satırda yazabilirsiniz:

```css
/* Sözdizimi: property duration timing-function delay */
.button {
  transition: background-color 0.3s ease-in-out 0s;
}

/* Birden fazla özellik */
.button {
  transition: 
    background-color 0.3s ease-out,
    transform 0.5s ease-in-out,
    box-shadow 0.2s ease;
}

/* Tüm özellikler */
.button {
  transition: all 0.3s ease;
}
```

**Uzun Yol vs Kısa Yol Karşılaştırması:**

```css
/* Uzun yol */
.longhand {
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}

/* Kısa yol (önerilen) */
.shorthand {
  transition: transform 300ms ease-in-out 0s;
}
```

## Hangi Özellikler Transition Yapabilir?

Tüm CSS özellikleri transition yapamaz. Genel kural: **"Ara değer" hesaplanabiliyorsa, transition yapabilir.**

### ✅ Transition Yapabilen Özellikler:

**Renkler:**
```css
color, background-color, border-color, outline-color
```

**Boyutlar:**
```css
width, height, padding, margin, border-width
```

**Pozisyon:**
```css
top, right, bottom, left
```

**Transform:**
```css
transform (translate, rotate, scale, skew)
```

**Görünüm:**
```css
opacity, visibility
```

**Gölgeler:**
```css
box-shadow, text-shadow
```

**Filtreler:**
```css
filter (blur, brightness, contrast, vb.)
```

### ❌ Transition Yapamayan Özellikler:

```css
display, font-family, position
```

**Neden?** Bu özelliklerin "ara değeri" yoktur. Örneğin, `font-family: serif` ile `font-family: monospace` arasında bir "orta nokta" olamaz.

## Pratik Örnekler

### Örnek 1: Basit Buton Hover Efekti

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    .button {
      background-color: #3498db;
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      
      /* Transition tanımı */
      transition: background-color 0.3s ease, transform 0.2s ease;
    }
    
    .button:hover {
      background-color: #2980b9;
      transform: translateY(-2px);
    }
    
    .button:active {
      transform: translateY(0);
    }
  </style>
</head>
<body>
  <button class="button">Bana Tıkla!</button>
</body>
</html>
```

**Açıklama:**
- Hover'da renk değişir ve buton yukarı kalkar
- Active (tıklama) durumunda buton yerine geri döner
- Yumuşak ve doğal bir etkileşim sağlar

### Örnek 2: Kart (Card) Hover Efekti

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    .card {
      width: 300px;
      padding: 20px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      
      /* Birden fazla özellik için transition */
      transition: 
        transform 0.3s ease,
        box-shadow 0.3s ease;
    }
    
    .card:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    
    .card h3 {
      margin: 0 0 10px 0;
      color: #2c3e50;
      transition: color 0.3s ease;
    }
    
    .card:hover h3 {
      color: #3498db;
    }
    
    .card p {
      margin: 0;
      color: #7f8c8d;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <div class="card">
    <h3>Kart Başlığı</h3>
    <p>Bu bir örnek kart içeriğidir. Kartın üzerine gelin ve animasyonu görün!</p>
  </div>
</body>
</html>
```

### Örnek 3: Menü Öğeleri - Ardışık Animasyonlar

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    .menu {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .menu-item {
      padding: 15px 20px;
      background: #34495e;
      color: white;
      border-left: 4px solid transparent;
      
      /* Transition tanımı */
      transition: 
        background-color 0.3s ease,
        border-left-color 0.3s ease,
        padding-left 0.3s ease;
    }
    
    .menu-item:hover {
      background-color: #2c3e50;
      border-left-color: #3498db;
      padding-left: 30px;
    }
    
    /* Ardışık gecikme efekti */
    .menu-item:nth-child(1) { transition-delay: 0s; }
    .menu-item:nth-child(2) { transition-delay: 0.05s; }
    .menu-item:nth-child(3) { transition-delay: 0.1s; }
    .menu-item:nth-child(4) { transition-delay: 0.15s; }
  </style>
</head>
<body>
  <ul class="menu">
    <li class="menu-item">Ana Sayfa</li>
    <li class="menu-item">Hakkımızda</li>
    <li class="menu-item">Hizmetler</li>
    <li class="menu-item">İletişim</li>
  </ul>
</body>
</html>
```

### Örnek 4: Form Input Focus Efekti

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    .input-group {
      margin: 20px;
    }
    
    .input-field {
      width: 100%;
      padding: 12px;
      border: 2px solid #ddd;
      border-radius: 5px;
      font-size: 16px;
      outline: none;
      
      /* Transition tanımı */
      transition: 
        border-color 0.3s ease,
        box-shadow 0.3s ease,
        transform 0.2s ease;
    }
    
    .input-field:focus {
      border-color: #3498db;
      box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
      transform: scale(1.01);
    }
    
    .input-field::placeholder {
      color: #bdc3c7;
      transition: color 0.3s ease;
    }
    
    .input-field:focus::placeholder {
      color: #95a5a6;
    }
  </style>
</head>
<body>
  <div class="input-group">
    <input type="text" class="input-field" placeholder="Adınızı girin...">
  </div>
  <div class="input-group">
    <input type="email" class="input-field" placeholder="E-posta adresiniz...">
  </div>
</body>
</html>
```

### Örnek 5: Farklı Giriş/Çıkış Geçişleri

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background: #e74c3c;
      margin: 50px;
      border-radius: 10px;
      
      /* Çıkış geçişi (hover'dan çıkarken) - yavaş */
      transition: background-color 2s ease-in;
    }
    
    .box:hover {
      background: #2ecc71;
      
      /* Giriş geçişi (hover'a girerken) - hızlı */
      transition: background-color 0.15s ease-out;
    }
  </style>
</head>
<body>
  <div class="box"></div>
  <p>Kutunun üzerine gelin: Hızlı yeşil olur, yavaşça kırmızıya döner</p>
</body>
</html>
```

## Transition Tetikleyicileri

Transitions'ın çalışması için bir durum değişikliği gerekir. İşte yaygın tetikleyiciler:

### 1. :hover (Üzerine Gelme)
```css
.element:hover {
  background-color: blue;
}
```

### 2. :focus (Odaklanma)
```css
.input:focus {
  border-color: blue;
}
```

### 3. :active (Aktif/Tıklama)
```css
.button:active {
  transform: scale(0.95);
}
```

### 4. :focus-within (İçeride Odak)
```css
.form:focus-within {
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
```

### 5. JavaScript ile Class Değişikliği
```javascript
element.classList.add('active');
```

```css
.element.active {
  opacity: 1;
}
```

## Erişilebilirlik (Accessibility) Konuları

Bazı kullanıcılar hareket ve animasyonlardan rahatsız olabilir. CSS bunu tespit edebilir:

```css
/* Varsayılan - animasyonlu */
.button {
  transition: transform 0.3s ease;
}

/* Kullanıcı azaltılmış hareket tercih ediyorsa */
@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }
}

/* Kullanıcı animasyon istiyor */
@media (prefers-reduced-motion: no-preference) {
  .button {
    transition: transform 0.3s ease;
  }
}
```

**Önemli:** Erişilebilirlik her zaman öncelikli olmalıdır!

## Performans İpuçları

### ✅ Performanslı Özellikler (Kullanın):

```css
/* GPU hızlandırmalı - çok hızlı */
transform: translate(), scale(), rotate()
opacity
```

### ⚠️ Performans Sorunlu Özellikler (Dikkatli Kullanın):

```css
/* Layout'u yeniden hesaplar - yavaş */
width, height
padding, margin
top, left, right, bottom
```

**Neden?** `width` ve `height` değiştiğinde, tarayıcı tüm sayfanın layout'unu yeniden hesaplamak zorundadır. `transform` ise sadece o elementi etkiler.

### Performans Karşılaştırması:

```css
/* ❌ Kötü - layout değişikliği */
.box:hover {
  width: 200px;
  transition: width 0.3s;
}

/* ✅ İyi - transform kullanımı */
.box:hover {
  transform: scaleX(2);
  transition: transform 0.3s;
}
```

## Yaygın Hatalar ve Çözümleri

### Hata 1: Transition Çalışmıyor

```css
/* ❌ Yanlış - display transition yapamaz */
.modal {
  display: none;
  transition: display 0.3s;
}

.modal.active {
  display: block;
}

/* ✅ Doğru - opacity ve visibility kullan */
.modal {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.modal.active {
  opacity: 1;
  visibility: visible;
}
```

### Hata 2: Tüm Özelliklere Transition

```css
/* ❌ Kötü - gereksiz performans kaybı */
.element {
  transition: all 0.3s;
}

/* ✅ İyi - sadece gerekli özellikler */
.element {
  transition: background-color 0.3s, transform 0.3s;
}
```

### Hata 3: Çok Uzun Süreler

```css
/* ❌ Çok uzun - kullanıcı beklemek zorunda */
.button {
  transition: background-color 2s;
}

/* ✅ Optimal - hızlı ve yumuşak */
.button {
  transition: background-color 0.3s;
}
```

**Önerilen Süreler:**
- Küçük değişiklikler: 150-300ms
- Orta değişiklikler: 300-500ms
- Büyük değişiklikler: 500-800ms
- 1 saniyeden uzun: Genellikle çok yavaş

## Özet ve En İyi Pratikler

### ✅ Yapılması Gerekenler:

1. **Spesifik olun**: `all` yerine spesifik özellikleri belirtin
2. **Kısa süreler**: 150-500ms arası optimal
3. **Transform ve opacity**: Performans için bunları tercih edin
4. **ease-out kullanın**: Çoğu durumda en doğal görünür
5. **Erişilebilirlik**: `prefers-reduced-motion` kullanın
6. **Test edin**: Farklı cihazlarda test edin

### ❌ Yapılmaması Gerekenler:

1. Her şeye transition eklemeyin
2. Çok uzun süreler kullanmayın
3. Layout özelliklerini (width, height) transition yapmayın
4. `all` kullanımından kaçının
5. Erişilebilirliği unutmayın

## Kaynaklar

- [MDN - CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [web.dev - CSS Transitions](https://web.dev/learn/css/transitions)
- [CSS Tricks - Transitions](https://css-tricks.com/almanac/properties/t/transition/)
- [Cubic Bezier Generator](https://cubic-bezier.com/)
- [Easing Functions Cheat Sheet](https://easings.net/)

## Sonuç

CSS Transitions, web sitenize profesyonel ve kullanıcı dostu bir deneyim katmanın en kolay yollarından biridir. Doğru kullanıldığında, kullanıcı etkileşimlerini daha anlamlı ve keyifli hale getirir. 

Unutmayın:
- Basit tutun
- Performansı düşünün
- Erişilebilirliği göz önünde bulundurun
- Kullanıcı deneyimini ön planda tutun

Pratik yaparak öğrenin ve kendi projelerinizde deneyin! 🚀
