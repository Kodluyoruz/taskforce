# CSS Variables (Custom Properties) - Modern CSS Özelliği

## CSS Variables Nedir?

CSS Variables (veya resmi adıyla Custom Properties), CSS değerlerini bir kez tanımlayıp birden fazla yerde kullanmanıza olanak tanıyan güçlü bir özelliktir. Programlama dillerindeki değişkenler gibi çalışır; bir değeri bir değişkene atarsınız ve bu değişkeni kodunuzun herhangi bir yerinde kullanabilirsiniz.

Eskiden sadece SASS veya LESS gibi önişlemcilerle (preprocessors) mümkün olan bu özellik, artık modern tarayıcıların tamamında yerleşik olarak bulunmaktadır.

## Neden CSS Variables Kullanmalıyız?

1. **Bakım Kolaylığı**: Bir rengi veya değeri değiştirmek istediğinizde, tek bir yeri güncellemeniz yeterlidir.
2. **Okunabilirlik**: `#3498db` yerine `--primary-color` kullanmak kodun ne yaptığını daha iyi anlatır.
3. **Dinamiklik**: JavaScript ile anlık olarak değiştirilebilir (SASS değişkenleri derlendikten sonra sabittir).
4. **Kapsam (Scope)**: Değişkenler belirli bir element veya bileşen içinde tanımlanıp sadece orada geçerli olabilir.
5. **Tema Desteği**: Dark mode/Light mode gibi tema özelliklerini uygulamak çok kolaydır.

## Sözdizimi (Syntax)

### Değişken Tanımlama

Bir değişken tanımlamak için ismin başına iki tire (`--`) eklenir:

```css
:root {
  --primary-color: #3498db;
  --font-size-large: 24px;
  --spacing-unit: 16px;
}
```

**Not:** `:root` seçicisi, değişkenlerin tüm sayfada (global) kullanılabilir olmasını sağlar.

### Değişken Kullanma

Değişkeni kullanmak için `var()` fonksiyonu kullanılır:

```css
.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-large);
  padding: var(--spacing-unit);
}
```

## Fallback (Yedek) Değerler

Eğer bir değişken tanımlanmamışsa veya geçersizse kullanılacak bir yedek değer belirtebilirsiniz:

```css
.box {
  /* --box-color tanımlı değilse red kullan */
  background-color: var(--box-color, red);
  
  /* İç içe fallback */
  color: var(--text-color, var(--primary-color, black));
}
```

## Kapsam (Scope) ve Miras (Inheritance)

CSS değişkenleri, tanımlandıkları element ve onun çocukları tarafından erişilebilir (miras alınır).

### Global Kapsam

```css
:root {
  --main-color: blue;
}

/* Tüm elementler --main-color'a erişebilir */
```

### Yerel Kapsam

```css
.card {
  --card-bg: #f0f0f0;
}

.card-title {
  color: var(--card-bg); /* Çalışır */
}

.sidebar {
  background: var(--card-bg); /* ÇALIŞMAZ! (Eğer sidebar card'ın içinde değilse) */
}
```

### Değer Ezme (Overriding)

Değişkenler, CSS'in cascade (şelale) mantığına göre ezilebilir:

```css
:root {
  --button-color: blue;
}

.container {
  --button-color: green;
}

/* Bu buton MAVİ olur */
.button {
  background-color: var(--button-color);
}

/* Bu buton YEŞİL olur */
.container .button {
  background-color: var(--button-color);
}
```

## Pratik Örnekler

### Örnek 1: Tema Yönetimi (Dark/Light Mode)

CSS Variables'ın en güçlü kullanım alanlarından biri tema yönetimidir.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    /* Varsayılan (Light) Tema */
    :root {
      --bg-color: #ffffff;
      --text-color: #333333;
      --primary-color: #3498db;
      --card-bg: #f8f9fa;
      --border-color: #e9ecef;
    }
    
    /* Dark Tema */
    [data-theme="dark"] {
      --bg-color: #1a1a1a;
      --text-color: #f0f0f0;
      --primary-color: #5dade2;
      --card-bg: #2d2d2d;
      --border-color: #404040;
    }
    
    body {
      background-color: var(--bg-color);
      color: var(--text-color);
      transition: background-color 0.3s, color 0.3s;
    }
    
    .card {
      background-color: var(--card-bg);
      border: 1px solid var(--border-color);
      padding: 20px;
      border-radius: 8px;
    }
    
    .btn {
      background-color: var(--primary-color);
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <button onclick="toggleTheme()">Temayı Değiştir</button>
  
  <div class="card">
    <h2>Merhaba CSS Variables!</h2>
    <p>Bu kart tema değişikliğine otomatik uyum sağlar.</p>
    <button class="btn">İşlem Yap</button>
  </div>

  <script>
    function toggleTheme() {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      
      if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
      } else {
        html.setAttribute('data-theme', 'dark');
      }
    }
  </script>
</body>
</html>
```

### Örnek 2: Responsive Değerler

Media Queries içinde değişkenleri güncelleyerek responsive tasarım yapabilirsiniz.

```css
:root {
  --font-size-base: 16px;
  --container-padding: 20px;
  --grid-columns: 1;
}

@media (min-width: 768px) {
  :root {
    --font-size-base: 18px;
    --container-padding: 40px;
    --grid-columns: 2;
  }
}

@media (min-width: 1024px) {
  :root {
    --font-size-base: 20px;
    --container-padding: 60px;
    --grid-columns: 3;
  }
}

body {
  font-size: var(--font-size-base);
}

.container {
  padding: var(--container-padding);
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  gap: 20px;
}
```

### Örnek 3: JavaScript ile Etkileşim

JavaScript ile CSS değişkenlerini okuyabilir ve güncelleyebilirsiniz.

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background-color: var(--box-color, #3498db);
      transform: rotate(var(--rotation, 0deg));
      transition: transform 0.3s;
    }
  </style>
</head>
<body>
  <div class="box" id="myBox"></div>
  
  <input type="color" id="colorPicker" value="#3498db">
  <input type="range" id="rotationSlider" min="0" max="360" value="0">
  
  <script>
    const box = document.getElementById('myBox');
    const colorPicker = document.getElementById('colorPicker');
    const rotationSlider = document.getElementById('rotationSlider');
    
    // Rengi güncelle
    colorPicker.addEventListener('input', (e) => {
      box.style.setProperty('--box-color', e.target.value);
    });
    
    // Dönüşü güncelle
    rotationSlider.addEventListener('input', (e) => {
      box.style.setProperty('--rotation', e.target.value + 'deg');
    });
    
    // Değer okuma örneği
    const computedStyle = getComputedStyle(box);
    console.log(computedStyle.getPropertyValue('--box-color'));
  </script>
</body>
</html>
```

### Örnek 4: Hesaplamalar (calc) ile Kullanım

Değişkenler `calc()` fonksiyonu ile harika çalışır.

```css
:root {
  --base-spacing: 8px;
}

.card {
  padding: var(--base-spacing); /* 8px */
  margin-bottom: calc(var(--base-spacing) * 2); /* 16px */
}

.card-large {
  padding: calc(var(--base-spacing) * 3); /* 24px */
}
```

### Örnek 5: HSL Renk Fonksiyonu ile Kullanım

Renkleri bileşenlerine ayırarak daha esnek kullanabilirsiniz.

```css
:root {
  /* HSL: Hue, Saturation, Lightness */
  --primary-h: 210;
  --primary-s: 100%;
  --primary-l: 50%;
}

.button {
  /* Temel renk */
  background-color: hsl(var(--primary-h), var(--primary-s), var(--primary-l));
}

.button:hover {
  /* Sadece parlaklığı değiştir */
  background-color: hsl(var(--primary-h), var(--primary-s), calc(var(--primary-l) - 10%));
}

.button-light {
  /* Daha açık versiyon */
  background-color: hsl(var(--primary-h), var(--primary-s), 90%);
  color: hsl(var(--primary-h), var(--primary-s), 30%);
}
```

## @property ile Tip Kontrolü (İleri Seviye)

Modern tarayıcılarda `@property` kuralı ile değişkenlere tip ve varsayılan değer atayabilirsiniz. Bu, değişkenlerin animasyon yapılabilmesini sağlar!

```css
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.rotating-box {
  background: conic-gradient(from var(--angle), red, blue, red);
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}
```

**Not:** Bu özellik henüz tüm tarayıcılarda tam desteklenmeyebilir.

## En İyi Pratikler

1. **İsimlendirme**: Anlamlı isimler kullanın.
   - Kötü: `--c: red;`
   - İyi: `--error-color: red;`

2. **Global vs Yerel**: Genel tasarım sistemi değişkenlerini (renkler, fontlar) `:root` içinde, bileşene özel değişkenleri bileşen içinde tanımlayın.

3. **Yedek Değerler**: Kritik yerlerde `var(--color, blue)` gibi yedek değerler kullanmayı düşünün.

4. **Birimler**: Mümkünse birimleri değişkenin içinde değil, kullanıldığı yerde ekleyin (veya `calc` ile).
   - `--gap: 20;` yerine `--gap: 20px;` daha güvenlidir, ancak `calc(var(--gap) * 1px)` ile sayıyı birime çevirebilirsiniz.

## SASS/LESS Değişkenleri vs CSS Variables

| Özellik | CSS Variables | SASS/LESS Variables |
|---------|---------------|---------------------|
| **Çalışma Zamanı** | Tarayıcıda (Runtime) | Derleme Zamanında (Build time) |
| **Dinamiklik** | JS ile değiştirilebilir | Sabittir |
| **Kapsam** | DOM yapısına göre (Cascade) | Dosya yapısına göre (Scope) |
| **Tarayıcı Desteği** | Modern tarayıcılar | Hepsi (CSS'e derlendiği için) |

## Kaynaklar

- [MDN - Using CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [web.dev - Custom properties](https://web.dev/learn/css/custom-properties)
- [CSS Tricks - A Complete Guide to Custom Properties](https://css-tricks.com/a-complete-guide-to-custom-properties/)

## Sonuç

CSS Variables, modern web geliştirmenin vazgeçilmez bir parçasıdır. Kodunuzu daha temiz, bakımı kolay ve dinamik hale getirir. Özellikle tema yönetimi ve responsive tasarım konularında işinizi çok kolaylaştırır.

Projelerinizde sabit değerler (hardcoded values) yerine CSS değişkenleri kullanmaya başlayarak kod kalitenizi artırabilirsiniz! 🚀
