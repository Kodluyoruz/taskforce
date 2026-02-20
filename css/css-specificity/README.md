# CSS Specificity (Özgüllük) - CSS Öncelik Kurallarını Anlamak

## CSS Specificity Nedir?

CSS Specificity (Özgüllük), aynı HTML elementine birden fazla CSS kuralı uygulandığında, hangi kuralın geçerli olacağını belirleyen bir öncelik sistemidir. Tarayıcı, en yüksek özgüllüğe sahip kuralı uygular.

**Basit Bir Benzetme:**
Aile içinde karar verme gibi düşünün. Kuzeniniz bir yol önerir, kardeşiniz kısayol ısrar eder, ama anneniz "Bu yoldan gideceğiz, nokta!" dediğinde kim kazanır? Anneniz, çünkü onun kararı en yüksek otoriteye sahiptir. CSS de aynı şekilde çalışır - en özgül (specific) kural kazanır.

## Neden Önemlidir?

CSS Specificity'yi anlamak şu durumlarda kritiktir:

1. **Çok Geliştiricili Projeler**: Birden fazla geliştirici aynı proje üzerinde çalışıyorsa
2. **Bakım ve Güncelleme**: Eski projelerde değişiklik yaparken
3. **Stil Çakışmaları**: Neden bazı stillerin uygulanmadığını anlamak için
4. **Temiz Kod**: Gereksiz `!important` kullanımından kaçınmak için

## Specificity Hiyerarşisi

CSS seçicileri, özgüllük seviyelerine göre sıralanır:

### 1. Inline Styles (En Yüksek Öncelik)
HTML elementinin içinde doğrudan `style` attribute ile yazılan stiller.

```html
<h1 style="color: red;">Başlık</h1>
```

**Özgüllük Değeri:** `1,0,0,0`

### 2. ID Seçiciler
`#` ile başlayan seçiciler.

```css
#header {
  color: blue;
}
```

**Özgüllük Değeri:** `0,1,0,0`

### 3. Class, Attribute ve Pseudo-class Seçiciler
- Class: `.class-name`
- Attribute: `[type="text"]`
- Pseudo-class: `:hover`, `:first-child`

```css
.button {
  color: green;
}

input[type="text"] {
  border: 1px solid black;
}

a:hover {
  text-decoration: underline;
}
```

**Özgüllük Değeri:** `0,0,1,0`

### 4. Element ve Pseudo-element Seçiciler (En Düşük Öncelik)
- Element: `div`, `p`, `h1`
- Pseudo-element: `::before`, `::after`

```css
p {
  font-size: 16px;
}

p::before {
  content: "→ ";
}
```

**Özgüllük Değeri:** `0,0,0,1`

### 5. Universal Selector (*) ve Inherited Styles
En düşük önceliğe sahiptir.

```css
* {
  margin: 0;
}
```

**Özgüllük Değeri:** `0,0,0,0`

## Specificity Hesaplama

Specificity, dört basamaklı bir sayı olarak hesaplanır: `a,b,c,d`

- **a**: Inline styles sayısı
- **b**: ID seçici sayısı
- **c**: Class, attribute, pseudo-class sayısı
- **d**: Element, pseudo-element sayısı

### Hesaplama Örnekleri

```css
/* Örnek 1: Element seçici */
p {
  color: black;
}
/* Specificity: 0,0,0,1 */

/* Örnek 2: Class seçici */
.text {
  color: blue;
}
/* Specificity: 0,0,1,0 */

/* Örnek 3: ID seçici */
#main {
  color: red;
}
/* Specificity: 0,1,0,0 */

/* Örnek 4: Kombine seçici */
div.container p {
  color: green;
}
/* Specificity: 0,0,1,2 
   (0 inline, 0 ID, 1 class, 2 element) */

/* Örnek 5: Karmaşık seçici */
#header .nav ul li a:hover {
  color: orange;
}
/* Specificity: 0,1,2,3
   (0 inline, 1 ID, 2 class/pseudo-class, 3 element) */
```

### Hangi Kural Kazanır?

```html
<p id="intro" class="highlight">Merhaba Dünya!</p>
```

```css
/* Kural 1 */
p {
  color: black;
}
/* Specificity: 0,0,0,1 */

/* Kural 2 */
.highlight {
  color: blue;
}
/* Specificity: 0,0,1,0 - KAZANAN! */

/* Kural 3 */
p.highlight {
  color: green;
}
/* Specificity: 0,0,1,1 - KAZANAN! */

/* Kural 4 */
#intro {
  color: red;
}
/* Specificity: 0,1,0,0 - KAZANAN! */
```

**Sonuç:** Metin kırmızı olur çünkü `#intro` en yüksek özgüllüğe sahiptir.

## !important Kuralı

`!important` tüm specificity kurallarını geçersiz kılar ve en yüksek önceliği alır.

```css
p {
  color: black !important;
}

#intro {
  color: red; /* Uygulanmaz! */
}
```

**⚠️ Uyarı:** `!important` kullanımı kötü bir pratiktir ve sadece son çare olarak kullanılmalıdır!

### !important'ın Sorunları

1. **Bakım Zorluğu**: Kodun anlaşılmasını zorlaştırır
2. **Override Sorunu**: Başka bir `!important` ile ezilmesi gerekir
3. **Specificity Mantığını Bozar**: CSS'in doğal akışını engeller

## Pratik Örnekler

### Örnek 1: Basit Specificity Çakışması

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    /* Specificity: 0,0,0,1 */
    p {
      color: black;
      font-size: 16px;
    }
    
    /* Specificity: 0,0,1,0 - Daha özgül */
    .intro {
      color: blue;
    }
    
    /* Specificity: 0,1,0,0 - En özgül */
    #welcome {
      color: red;
    }
  </style>
</head>
<body>
  <p>Normal paragraf (siyah)</p>
  <p class="intro">Class'lı paragraf (mavi)</p>
  <p id="welcome">ID'li paragraf (kırmızı)</p>
  <p class="intro" id="welcome">Hem class hem ID (kırmızı - ID kazanır)</p>
</body>
</html>
```

### Örnek 2: Kombine Seçiciler

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    /* Specificity: 0,0,1,1 */
    div.container {
      background: lightgray;
    }
    
    /* Specificity: 0,0,2,1 - Daha özgül */
    div.container.dark {
      background: darkgray;
    }
    
    /* Specificity: 0,1,1,1 - En özgül */
    #main div.container {
      background: white;
    }
  </style>
</head>
<body>
  <div class="container">Açık gri</div>
  <div class="container dark">Koyu gri</div>
  <div id="main">
    <div class="container dark">Beyaz (ID kazanır)</div>
  </div>
</body>
</html>
```

### Örnek 3: Pseudo-class ve Pseudo-element

```css
/* Specificity: 0,0,1,1 */
a.button {
  color: blue;
}

/* Specificity: 0,0,2,1 - Daha özgül */
a.button:hover {
  color: red;
}

/* Specificity: 0,0,1,2 */
p.intro::first-letter {
  font-size: 2em;
}
```

### Örnek 4: Gerçek Dünya Senaryosu - Navigation

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <style>
    /* Genel link stili - Specificity: 0,0,0,1 */
    a {
      color: blue;
      text-decoration: none;
    }
    
    /* Navigation linkleri - Specificity: 0,0,1,1 */
    .nav a {
      color: white;
      padding: 10px;
    }
    
    /* Aktif link - Specificity: 0,0,2,1 */
    .nav a.active {
      background: darkblue;
      font-weight: bold;
    }
    
    /* Hover durumu - Specificity: 0,0,2,1 */
    .nav a:hover {
      background: lightblue;
    }
    
    /* Aktif link hover - Specificity: 0,0,3,1 - En özgül */
    .nav a.active:hover {
      background: navy;
    }
  </style>
</head>
<body>
  <nav class="nav">
    <a href="#">Ana Sayfa</a>
    <a href="#" class="active">Hakkımızda</a>
    <a href="#">İletişim</a>
  </nav>
</body>
</html>
```

## En İyi Pratikler

### ✅ Yapılması Gerekenler

1. **Class Kullanın**: ID yerine class kullanmayı tercih edin
   ```css
   /* İyi */
   .header {
     background: blue;
   }
   
   /* Kötü */
   #header {
     background: blue;
   }
   ```

2. **Düşük Specificity Tutun**: Basit seçiciler kullanın
   ```css
   /* İyi */
   .card-title {
     font-size: 24px;
   }
   
   /* Kötü - Gereksiz karmaşık */
   div.container div.card h2.card-title {
     font-size: 24px;
   }
   ```

3. **BEM Metodolojisi**: Tutarlı isimlendirme kullanın
   ```css
   /* BEM: Block__Element--Modifier */
   .card { }
   .card__title { }
   .card__title--large { }
   ```

4. **Cascade'i Kullanın**: CSS'in doğal akışından yararlanın
   ```css
   /* Genel kurallar önce */
   button {
     padding: 10px;
     border: none;
   }
   
   /* Özel durumlar sonra */
   .button-primary {
     background: blue;
   }
   ```

### ❌ Yapılmaması Gerekenler

1. **!important Kullanmayın**: Son çare olarak kullanın
   ```css
   /* Kötü */
   .text {
     color: red !important;
   }
   
   /* İyi - Specificity ile çözün */
   .container .text {
     color: red;
   }
   ```

2. **Çok Fazla ID Kullanmayın**: Override etmek zorlaşır
   ```css
   /* Kötü */
   #header #nav #menu {
     color: white;
   }
   
   /* İyi */
   .header-nav-menu {
     color: white;
   }
   ```

3. **Aşırı Nesting Yapmayın**: 3-4 seviyeden fazla gitmeyin
   ```css
   /* Kötü */
   .header .nav .menu .item .link .icon {
     color: blue;
   }
   
   /* İyi */
   .menu-link-icon {
     color: blue;
   }
   ```

## Specificity Hesaplama Araçları

Specificity'yi manuel hesaplamak yerine şu araçları kullanabilirsiniz:

- **[Specificity Calculator](https://specificity.keegan.st/)**: Online hesaplama aracı
- **Browser DevTools**: Chrome/Firefox geliştirici araçları specificity gösterir
- **[CSS Specificity Graph Generator](https://jonassebastianohlsson.com/specificity-graph/)**: Projenizin specificity grafiğini oluşturur

## Yaygın Hatalar ve Çözümleri

### Hata 1: Stilim Uygulanmıyor!

```css
/* Bu çalışmıyor */
.button {
  background: blue;
}

/* Çünkü bu daha özgül */
#sidebar .button {
  background: gray;
}
```

**Çözüm:** Specificity'yi artırın veya HTML yapısını değiştirin.

### Hata 2: !important Savaşları

```css
.text {
  color: red !important;
}

.special-text {
  color: blue !important; /* Çalışmaz! */
}
```

**Çözüm:** `!important` kullanmayın, specificity ile çözün.

### Hata 3: Inline Style Override Edilemiyor

```html
<div style="color: red;">Metin</div>
```

```css
#element {
  color: blue; /* Çalışmaz! Inline style daha güçlü */
}
```

**Çözüm:** Inline style'ı kaldırın veya JavaScript ile değiştirin.

## Özet Tablo

| Seçici Tipi | Örnek | Specificity | Güç |
|-------------|-------|-------------|-----|
| Inline Style | `style="color: red"` | 1,0,0,0 | En Güçlü |
| ID | `#header` | 0,1,0,0 | Çok Güçlü |
| Class | `.button` | 0,0,1,0 | Orta |
| Attribute | `[type="text"]` | 0,0,1,0 | Orta |
| Pseudo-class | `:hover` | 0,0,1,0 | Orta |
| Element | `div` | 0,0,0,1 | Zayıf |
| Pseudo-element | `::before` | 0,0,0,1 | Zayıf |
| Universal | `*` | 0,0,0,0 | En Zayıf |

## Kaynaklar

- [MDN - Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [CSS Tricks - Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)
- [W3C CSS Specification](https://www.w3.org/TR/selectors-3/#specificity)
- [Specificity Calculator](https://specificity.keegan.st/)

## Sonuç

CSS Specificity, temiz ve bakımı kolay CSS yazmak için kritik bir kavramdır. Temel kurallar:

1. **Düşük specificity tercih edin** - Override etmek kolaylaşır
2. **Class kullanın, ID'den kaçının** - Daha esnek
3. **!important kullanmayın** - Son çare olarak
4. **BEM gibi metodolojiler kullanın** - Tutarlılık sağlar
5. **Cascade'i anlayın** - CSS'in doğal akışından yararlanın

Specificity'yi anlamak, "Neden bu stil uygulanmıyor?" sorusuna cevap bulmanızı ve daha profesyonel CSS yazmanızı sağlar! 🎯
