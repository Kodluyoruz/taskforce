# CSS Animations (@keyframes) - İleri Seviye Animasyonlar

## CSS Animations Nedir?

CSS Animations, `@keyframes` kuralı kullanarak karmaşık ve çok aşamalı animasyonlar oluşturmanıza olanak tanıyan güçlü bir CSS özelliğidir. CSS Transitions'ın aksine, animasyonlar otomatik olarak başlayabilir, sürekli tekrar edebilir ve birden fazla ara adım içerebilir.

**CSS Transitions vs CSS Animations:**

| Özellik | Transitions | Animations |
|---------|-------------|------------|
| Tetikleyici | Durum değişikliği gerekir (:hover vb.) | Otomatik başlayabilir |
| Adım Sayısı | 2 (başlangıç → bitiş) | Sınırsız |
| Tekrar | Hayır | Evet (infinite) |
| Karmaşıklık | Basit | İleri seviye |
| Kullanım | Hover efektleri, basit geçişler | Loading animasyonları, karmaşık efektler |

## @keyframes Sözdizimi

Animasyon oluşturmak için önce `@keyframes` kuralı ile animasyonu tanımlarız, sonra bir elemente uygularız.

### Temel Yapı

```css
/* 1. Animasyonu tanımla */
@keyframes animasyon-adi {
  from {
    /* Başlangıç durumu */
    transform: translateX(-100%);
  }
  to {
    /* Bitiş durumu */
    transform: translateX(0%);
  }
}

/* 2. Elemente uygula */
.element {
  animation: animasyon-adi 1s;
}
```

**Önemli:** Her `@keyframes` kuralının benzersiz bir adı olmalıdır. Bu ad global olarak tanımlanır.

### Yüzde Değerleri ile Çok Adımlı Animasyonlar

`from` ve `to` yerine yüzde değerleri kullanarak daha karmaşık animasyonlar oluşturabilirsiniz:

```css
@keyframes renkli-animasyon {
  0% {
    background-color: red;
    transform: translateX(0);
  }
  25% {
    background-color: yellow;
    transform: translateX(100px);
  }
  50% {
    background-color: blue;
    transform: translateX(100px) translateY(100px);
  }
  75% {
    background-color: green;
    transform: translateX(0) translateY(100px);
  }
  100% {
    background-color: red;
    transform: translateX(0) translateY(0);
  }
}
```

**Not:** `from` aslında `0%` için, `to` ise `100%` için bir kısayoldur.

## Animation Özellikleri

### 1. animation-name (Animasyon Adı)

Hangi `@keyframes` animasyonunun kullanılacağını belirler.

```css
.element {
  animation-name: slide-in;
}
```

### 2. animation-duration (Animasyon Süresi)

Animasyonun ne kadar süreceğini belirler.

```css
.element {
  animation-duration: 2s; /* 2 saniye */
}

.element {
  animation-duration: 500ms; /* 500 milisaniye */
}
```

**Varsayılan:** `0s` (animasyon çalışmaz)

### 3. animation-timing-function (Zamanlama Fonksiyonu)

Animasyonun hız eğrisini belirler.

```css
.element {
  animation-timing-function: ease; /* Varsayılan */
}

/* Diğer seçenekler */
animation-timing-function: linear;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

**Önemli:** Timing function her adım için ayrı ayrı uygulanır!

### 4. animation-delay (Animasyon Gecikmesi)

Animasyonun başlamadan önce ne kadar bekleyeceğini belirler.

```css
.element {
  animation-delay: 0.5s; /* 500ms bekle, sonra başla */
}

/* Negatif değer - animasyonu ortasından başlat */
.element {
  animation-delay: -1s;
}
```

### 5. animation-iteration-count (Tekrar Sayısı)

Animasyonun kaç kez tekrar edeceğini belirler.

```css
.element {
  animation-iteration-count: 1; /* Varsayılan - bir kez */
}

.element {
  animation-iteration-count: 3; /* 3 kez tekrarla */
}

.element {
  animation-iteration-count: infinite; /* Sonsuz döngü */
}
```

### 6. animation-direction (Animasyon Yönü)

Animasyonun hangi yönde oynatılacağını belirler.

```css
.element {
  animation-direction: normal; /* Varsayılan - ileri */
}

.element {
  animation-direction: reverse; /* Ters yönde */
}

.element {
  animation-direction: alternate; /* İleri-geri-ileri-geri */
}

.element {
  animation-direction: alternate-reverse; /* Geri-ileri-geri-ileri */
}
```

**`alternate` kullanımı:** Loading animasyonları ve salınım efektleri için idealdir.

### 7. animation-fill-mode (Doldurma Modu)

Animasyon başlamadan önce ve bittikten sonra elementin stillerinin nasıl olacağını belirler.

```css
.element {
  animation-fill-mode: none; /* Varsayılan */
}

.element {
  animation-fill-mode: forwards; /* Bitiş stillerini koru */
}

.element {
  animation-fill-mode: backwards; /* Başlangıç stillerini delay sırasında uygula */
}

.element {
  animation-fill-mode: both; /* Her ikisi de */
}
```

**En yaygın kullanım:** `forwards` - Animasyon bittiğinde son durumda kalır.

### 8. animation-play-state (Oynatma Durumu)

Animasyonu duraklatmak veya devam ettirmek için kullanılır.

```css
.element {
  animation-play-state: running; /* Varsayılan - çalışıyor */
}

.element:hover {
  animation-play-state: paused; /* Hover'da duraklat */
}
```

## Kısa Yol (Shorthand) Kullanımı

Tüm animation özelliklerini tek satırda yazabilirsiniz:

```css
/* Sözdizimi: name duration timing-function delay iteration-count direction fill-mode */
.element {
  animation: slide-in 2s ease-in-out 0.5s infinite alternate forwards;
}

/* Minimum kullanım */
.element {
  animation: slide-in 1s;
}

/* Birden fazla animasyon */
.element {
  animation: 
    slide-in 1s ease-out,
    fade-in 0.5s ease-in,
    rotate 2s linear infinite;
}
```

## Pratik Örnekler

### Örnek 1: Basit Fade In Animasyonu

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    @keyframes fade-in {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    .box {
      width: 200px;
      height: 200px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      
      /* Animasyonu uygula */
      animation: fade-in 1s ease-out;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

### Örnek 2: Loading Spinner (Dönen Yükleyici)

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #f3f3f3;
      border-top: 5px solid #3498db;
      border-radius: 50%;
      
      /* Sonsuz döngü, sabit hız */
      animation: spin 1s linear infinite;
    }
  </style>
</head>
<body>
  <div class="spinner"></div>
</body>
</html>
```

**Not:** Spinner'lar için genellikle `linear` timing function kullanılır.

### Örnek 3: Çok Adımlı Animasyon - Zıplayan Top

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
        animation-timing-function: ease-in;
      }
      50% {
        transform: translateY(-100px);
        animation-timing-function: ease-out;
      }
    }
    
    .ball {
      width: 60px;
      height: 60px;
      background: radial-gradient(circle at 30% 30%, #ff6b6b, #c92a2a);
      border-radius: 50%;
      margin: 150px auto 0;
      
      /* Sonsuz zıplama */
      animation: bounce 1s infinite;
    }
    
    .ground {
      width: 300px;
      height: 5px;
      background: #333;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <div class="ball"></div>
  <div class="ground"></div>
</body>
</html>
```

### Örnek 4: Pulse (Nabız) Efekti

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    @keyframes pulse {
      0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.7);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 0 0 10px rgba(52, 152, 219, 0);
      }
      100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(52, 152, 219, 0);
      }
    }
    
    .notification-badge {
      width: 20px;
      height: 20px;
      background: #3498db;
      border-radius: 50%;
      position: relative;
      
      animation: pulse 2s ease-out infinite;
    }
  </style>
</head>
<body>
  <div class="notification-badge"></div>
</body>
</html>
```

### Örnek 5: Slide In Animasyonu (Sayfa Yüklendiğinde)

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    @keyframes slide-in-left {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slide-in-right {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    .card {
      width: 300px;
      padding: 20px;
      margin: 20px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    
    .card:nth-child(1) {
      animation: slide-in-left 0.6s ease-out;
    }
    
    .card:nth-child(2) {
      animation: slide-in-right 0.6s ease-out 0.2s backwards;
    }
    
    .card:nth-child(3) {
      animation: slide-in-left 0.6s ease-out 0.4s backwards;
    }
  </style>
</head>
<body>
  <div class="card">
    <h3>Kart 1</h3>
    <p>Soldan gelen animasyon</p>
  </div>
  <div class="card">
    <h3>Kart 2</h3>
    <p>Sağdan gelen animasyon (gecikme ile)</p>
  </div>
  <div class="card">
    <h3>Kart 3</h3>
    <p>Soldan gelen animasyon (daha fazla gecikme)</p>
  </div>
</body>
</html>
```

### Örnek 6: Typing (Yazma) Efekti

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
    
    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
    
    .typing-text {
      font-family: monospace;
      font-size: 24px;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      border-right: 3px solid #333;
      
      animation: 
        typing 3s steps(30) 1s forwards,
        blink 0.75s step-end infinite;
    }
  </style>
</head>
<body>
  <div class="typing-text">Merhaba, CSS Animations!</div>
</body>
</html>
```

**Not:** `steps()` fonksiyonu animasyonu adım adım yapar, yazma efekti için idealdir.

### Örnek 7: Shake (Sallama) Efekti

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    @keyframes shake {
      0%, 100% {
        transform: translateX(0);
      }
      10%, 30%, 50%, 70%, 90% {
        transform: translateX(-10px);
      }
      20%, 40%, 60%, 80% {
        transform: translateX(10px);
      }
    }
    
    .error-input {
      padding: 10px;
      border: 2px solid #e74c3c;
      border-radius: 5px;
      font-size: 16px;
    }
    
    .error-input.shake {
      animation: shake 0.5s;
    }
  </style>
</head>
<body>
  <input type="text" class="error-input shake" placeholder="Hatalı giriş!">
</body>
</html>
```

## Fill Modes (Doldurma Modları) - Detaylı Açıklama

Fill modes, animasyonun başlamadan önce ve bittikten sonra elementin stillerinin nasıl olacağını kontrol eder. Bu, CSS Animations'ın en karmaşık konularından biridir.

### animation-fill-mode: none (Varsayılan)

```css
@keyframes fade-out {
  to {
    opacity: 0;
  }
}

.element {
  animation: fade-out 1s;
  animation-fill-mode: none;
}
```

**Davranış:**
- Animasyon başlamadan önce: Normal stiller
- Animasyon sırasında: Animasyon stilleri
- Animasyon bittikten sonra: Normal stiller (element geri gelir!)

### animation-fill-mode: forwards

```css
.element {
  animation: fade-out 1s;
  animation-fill-mode: forwards;
}
```

**Davranış:**
- Animasyon bittikten sonra son frame'deki (`100%` veya `to`) stiller korunur
- **En yaygın kullanım:** Animasyon bittiğinde son durumda kalmak istediğinizde

### animation-fill-mode: backwards

```css
.element {
  animation: fade-in 1s 2s; /* 2 saniye delay */
  animation-fill-mode: backwards;
}
```

**Davranış:**
- Delay sırasında ilk frame'deki (`0%` veya `from`) stiller uygulanır
- Animasyon bittikten sonra normal stiller

### animation-fill-mode: both

```css
.element {
  animation: slide-in 1s 0.5s;
  animation-fill-mode: both;
}
```

**Davranış:**
- `forwards` ve `backwards` kombinasyonu
- Delay sırasında başlangıç stilleri, bitişte bitiş stilleri

### Pratik Fill Mode Örneği

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    @keyframes disappear {
      to {
        opacity: 0;
        transform: scale(0);
      }
    }
    
    .box {
      width: 100px;
      height: 100px;
      background: #3498db;
      margin: 20px;
      display: inline-block;
    }
    
    .box-none {
      animation: disappear 1s;
      animation-fill-mode: none;
    }
    
    .box-forwards {
      animation: disappear 1s;
      animation-fill-mode: forwards;
    }
  </style>
</head>
<body>
  <div class="box box-none">none</div>
  <div class="box box-forwards">forwards</div>
  <p>Sol kutu geri gelir, sağ kutu kaybolur!</p>
</body>
</html>
```

## CSS Variables ile Dinamik Animasyonlar

CSS Variables (Custom Properties) ile animasyonları özelleştirilebilir hale getirebilirsiniz:

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    @keyframes bounce-dynamic {
      from {
        transform: translateY(0);
      }
      to {
        /* CSS variable kullanımı */
        transform: translateY(calc(var(--bounce-height) * -1));
      }
    }
    
    .ball {
      width: 50px;
      height: 50px;
      background: #e74c3c;
      border-radius: 50%;
      display: inline-block;
      margin: 20px;
      
      animation: bounce-dynamic 0.5s ease-in-out infinite alternate;
    }
    
    .ball-small {
      --bounce-height: 20px;
    }
    
    .ball-medium {
      --bounce-height: 50px;
    }
    
    .ball-large {
      --bounce-height: 100px;
    }
  </style>
</head>
<body>
  <div class="ball ball-small"></div>
  <div class="ball ball-medium"></div>
  <div class="ball ball-large"></div>
</body>
</html>
```

**Avantajları:**
- Tek bir `@keyframes` tanımı, birden fazla varyasyon
- React props gibi düşünün!
- Daha temiz ve yeniden kullanılabilir kod

## Performans İpuçları

### ✅ Performanslı Özellikler (Kullanın):

```css
/* GPU hızlandırmalı - çok hızlı */
transform: translate(), scale(), rotate()
opacity
filter
```

### ⚠️ Performans Sorunlu Özellikler (Dikkatli Kullanın):

```css
/* Layout'u yeniden hesaplar - yavaş */
width, height
padding, margin
top, left, right, bottom
```

### Performans Optimizasyonu Örneği:

```css
/* ❌ Kötü - layout değişikliği */
@keyframes slide-bad {
  from { left: 0; }
  to { left: 100px; }
}

/* ✅ İyi - transform kullanımı */
@keyframes slide-good {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
```

### will-change Özelliği

Tarayıcıya hangi özelliklerin değişeceğini önceden bildirin:

```css
.element {
  will-change: transform, opacity;
  animation: complex-animation 2s;
}
```

**Dikkat:** `will-change` aşırı kullanmayın, performansı düşürebilir!

## Erişilebilirlik (Accessibility)

Bazı kullanıcılar animasyonlardan rahatsız olabilir:

```css
/* Varsayılan - animasyonlu */
.element {
  animation: slide-in 1s;
}

/* Kullanıcı azaltılmış hareket tercih ediyorsa */
@media (prefers-reduced-motion: reduce) {
  .element {
    animation: none;
  }
}

/* Alternatif: Daha yavaş animasyon */
@media (prefers-reduced-motion: reduce) {
  .element {
    animation-duration: 0.01s;
  }
}
```

## Yaygın Kullanım Senaryoları

### 1. Loading Animasyonları

```css
@keyframes dots {
  0%, 20% { content: '.'; }
  40% { content: '..'; }
  60%, 100% { content: '...'; }
}
```

### 2. Skeleton Screens (İskelet Ekranlar)

```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

### 3. Hover Animasyonları

```css
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

.icon:hover {
  animation: wiggle 0.5s;
}
```

### 4. Notification Badges

```css
@keyframes pop-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.badge {
  animation: pop-in 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

## En İyi Pratikler

### ✅ Yapılması Gerekenler:

1. **Anlamlı isimler kullanın**: `@keyframes slide-in-from-left` gibi
2. **Transform ve opacity tercih edin**: Performans için
3. **Timing function'ları doğru seçin**: Her animasyon için uygun olanı
4. **Erişilebilirliği unutmayın**: `prefers-reduced-motion` kullanın
5. **CSS Variables kullanın**: Özelleştirilebilir animasyonlar için
6. **Test edin**: Farklı cihaz ve tarayıcılarda

### ❌ Yapılmaması Gerekenler:

1. Çok fazla animasyon kullanmayın (dikkat dağıtıcı olur)
2. Çok uzun animasyonlar yapmayın (kullanıcı beklemek zorunda kalır)
3. Layout özelliklerini animate etmeyin (performans sorunu)
4. `will-change` aşırı kullanmayın
5. Erişilebilirliği göz ardı etmeyin

## Özet Karşılaştırma Tablosu

| Özellik | Transitions | Animations |
|---------|-------------|------------|
| **Tetikleme** | Durum değişikliği gerekir | Otomatik başlar |
| **Kontrol** | Sınırlı | Tam kontrol |
| **Adım Sayısı** | 2 (başlangıç-bitiş) | Sınırsız |
| **Tekrar** | Hayır | Evet |
| **Yön** | Tek yön | İleri, geri, alternatif |
| **Karmaşıklık** | Basit | İleri seviye |
| **Kullanım** | Hover, focus efektleri | Loading, karmaşık animasyonlar |
| **Performans** | Hafif | Daha ağır (dikkatli kullanılmalı) |

## Kaynaklar

- [MDN - CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Josh Comeau - Keyframe Animations](https://www.joshwcomeau.com/animation/keyframe-animations/)
- [CSS Tricks - Animation](https://css-tricks.com/almanac/properties/a/animation/)
- [Animista - CSS Animation Generator](https://animista.net/)
- [Cubic Bezier Generator](https://cubic-bezier.com/)

## Sonuç

CSS Animations, web sitenize hayat katan güçlü bir araçtır. `@keyframes` ile karmaşık, çok adımlı animasyonlar oluşturabilir, CSS Variables ile özelleştirebilir ve performanslı, erişilebilir animasyonlar yapabilirsiniz.

**Hatırlatma:**
- Basit geçişler için Transitions kullanın
- Karmaşık animasyonlar için Animations kullanın
- Her zaman performansı ve erişilebilirliği düşünün
- Kullanıcı deneyimini ön planda tutun

Pratik yaparak öğrenin ve kendi animasyonlarınızı oluşturun! 🎨✨
