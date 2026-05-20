# CSS Units (Birimler) - px, em, rem, %, vw, vh

## CSS Birimleri Nedir?

CSS'de uzunluk, genişlik, yükseklik, font boyutu gibi değerleri belirtmek için çeşitli birimler kullanırız. Doğru birimi seçmek, responsive (duyarlı) ve erişilebilir bir tasarım oluşturmanın anahtarıdır.

CSS birimleri genel olarak iki kategoriye ayrılır:
1. **Mutlak (Absolute) Birimler**
2. **Göreceli (Relative) Birimler**

## 1. Mutlak (Absolute) Birimler

Mutlak birimler sabittir ve diğer ayarlardan etkilenmezler. Genellikle ekran boyutunun değişmediği durumlarda veya baskı (print) stillerinde kullanılırlar.

### `px` (Piksel)
En yaygın kullanılan birimdir. Ekrandaki bir noktayı (pixel) temsil eder.
- **Kullanım:** Kenarlıklar (border), gölgeler (box-shadow) veya kesin boyut gerektiren durumlar.
- **Dezavantaj:** Kullanıcı tarayıcı font ayarlarını değiştirdiğinde `px` ile belirtilen metinler ölçeklenmez, bu da erişilebilirlik sorunlarına yol açabilir.

```css
.box {
  border: 1px solid black; /* Kenarlık için ideal */
  width: 200px; /* Sabit genişlik */
}
```

### Diğer Mutlak Birimler (Genellikle Baskı İçin)
- `cm`: Santimetre
- `mm`: Milimetre
- `in`: İnç (1in = 96px = 2.54cm)
- `pt`: Point (1pt = 1/72 inç)
- `pc`: Pica (1pc = 12pt)

## 2. Göreceli (Relative) Birimler

Göreceli birimler, başka bir değere (ebeveyn elementin boyutu, kök elementin font boyutu, ekran boyutu vb.) bağlı olarak hesaplanır. Responsive tasarım için **en önemli** birimlerdir.

### `%` (Yüzde)
Ebeveyn (parent) elementin ilgili özelliğine göre hesaplanır.
- **Genişlik/Yükseklik:** Ebeveynin genişliğinin/yüksekliğinin yüzdesi.
- **Font Boyutu:** Ebeveynin font boyutunun yüzdesi.

```css
.parent {
  width: 500px;
}

.child {
  width: 50%; /* 250px olur */
}
```

### `em`
Elementin **kendi** font boyutuna (font-size) göre hesaplanır.
- `1em` = Elementin o anki font boyutu.
- **İstisna:** `font-size` özelliğinde kullanıldığında, **ebeveynin** font boyutuna göre hesaplanır.

```css
.parent {
  font-size: 16px;
}

.child {
  /* Ebeveyn 16px olduğu için: 1.5 * 16 = 24px */
  font-size: 1.5em; 
  
  /* Şu anki font-size 24px olduğu için: 2 * 24 = 48px */
  padding: 2em; 
}
```
**Sorun:** `em` birimleri iç içe geçtiğinde (nesting) bileşik etki yaratır ve hesaplaması zorlaşabilir.

### `rem` (Root em)
Kök elementin (`<html>`) font boyutuna göre hesaplanır. Varsayılan tarayıcı font boyutu genellikle `16px`'tir.
- `1rem` = `<html>` font boyutu (genellikle 16px).
- **Avantaj:** İç içe geçme sorunu yoktur, her yerde tutarlıdır.
- **Kullanım:** Font boyutları, margin, padding için modern standarttır.

```css
html {
  font-size: 16px;
}

.box {
  font-size: 1.5rem; /* Her zaman 24px (1.5 * 16) */
  padding: 2rem; /* Her zaman 32px (2 * 16) */
}
```

### `ch` (Character)
"0" (sıfır) karakterinin genişliğine eşittir.
- **Kullanım:** Metin paragraflarının genişliğini sınırlamak için harikadır (okunabilirlik için satır uzunluğu 45-75 karakter olmalıdır).

```css
p {
  max-width: 60ch; /* Yaklaşık 60 karakterlik genişlik */
}
```

## 3. Viewport (Görünüm Alanı) Birimleri

Ekranın (tarayıcı penceresinin) boyutuna göre hesaplanır.

### `vw` (Viewport Width)
Viewport genişliğinin %1'i.
- `100vw` = Ekranın tam genişliği.
- `50vw` = Ekranın yarısı.

### `vh` (Viewport Height)
Viewport yüksekliğinin %1'i.
- `100vh` = Ekranın tam yüksekliği.

```css
.hero-section {
  height: 100vh; /* Tüm ekranı kaplayan hero alanı */
  width: 100vw;
}
```

### `vmin` ve `vmax`
- `vmin`: `vw` ve `vh` arasından **küçük** olanı alır.
- `vmax`: `vw` ve `vh` arasından **büyük** olanı alır.
- **Kullanım:** Cihazın yönüne (yatay/dikey) bakılmaksızın ekrana sığması gereken elementler için.

## 4. Modern Viewport Birimleri (lvh, svh, dvh)

Mobil tarayıcılarda adres çubuğu görünüp kaybolduğunda `100vh` bazen sorun yaratabilir (içerik altta kalabilir veya taşabilir). Bunu çözmek için yeni birimler geliştirilmiştir:

- **`svh` (Small Viewport Height):** Adres çubuğu **görünürkenki** (en küçük) yükseklik.
- **`lvh` (Large Viewport Height):** Adres çubuğu **gizliykenki** (en büyük) yükseklik.
- **`dvh` (Dynamic Viewport Height):** Adres çubuğunun durumuna göre dinamik olarak değişen yükseklik.

```css
.full-screen-mobile {
  height: 100dvh; /* Mobilde en iyi tam ekran deneyimi için */
}
```

## Hangi Birimi Ne Zaman Kullanmalıyım?

| Özellik | Önerilen Birim | Neden? |
|---------|----------------|--------|
| **Font Boyutu** | `rem` | Erişilebilirlik ve tutarlılık için. Kullanıcı tarayıcı ayarlarını değiştirirse uyum sağlar. |
| **Padding / Margin** | `rem` veya `em` | Font boyutuyla orantılı boşluklar için. |
| **Genişlik (Layout)** | `%` veya `vw` | Responsive düzenler için. |
| **Yükseklik (Layout)** | `vh` veya `dvh` | Tam ekran bölümler için. |
| **Border (Kenarlık)** | `px` | Genellikle ince ve keskin çizgiler istendiği için. |
| **Media Queries** | `em` veya `px` | Tarayıcılar arasında tutarlılık için genellikle `em` önerilir ama `px` de yaygındır. |

## Pratik Örnekler

### Örnek 1: Responsive Tipografi (`rem` kullanımı)

```css
html {
  font-size: 100%; /* Varsayılan (genellikle 16px) */
}

h1 {
  font-size: 2.5rem; /* 40px */
}

p {
  font-size: 1rem; /* 16px */
  margin-bottom: 1.5rem; /* 24px */
}

@media (min-width: 768px) {
  html {
    font-size: 112.5%; /* 18px'e çıkar */
  }
  /* Tüm rem değerleri otomatik olarak büyür! */
}
```

### Örnek 2: Tam Ekran Hero Bölümü (`dvh` kullanımı)

```css
.hero {
  width: 100%;
  /* Mobilde adres çubuğu sorununu çözer */
  height: 100vh; 
  height: 100dvh; 
  
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #4facfe, #00f2fe);
}
```

### Örnek 3: Okunabilir Metin Bloğu (`ch` kullanımı)

```css
.article-content {
  font-size: 1.2rem;
  line-height: 1.6;
  /* Satır uzunluğunu okunabilir seviyede tutar */
  max-width: 65ch; 
  margin: 0 auto; /* Ortala */
}
```

### Örnek 4: Orantılı Buton (`em` kullanımı)

```css
.btn {
  font-size: 1rem; /* Dışarıdan değiştirilebilir */
  /* Padding font boyutuna göre değişir */
  padding: 0.5em 1.5em; 
  border-radius: 0.25em;
}

.btn-large {
  font-size: 1.5rem; /* Buton büyüdükçe padding ve radius da orantılı büyür */
}
```

## Kaynaklar

- [MDN - CSS Values and Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [web.dev - Sizing Units](https://web.dev/learn/css/sizing-units)
- [CSS Tricks - The Lengths of CSS](https://css-tricks.com/the-lengths-of-css/)

## Sonuç

Doğru CSS birimini seçmek, kodunuzun bakımını kolaylaştırır ve kullanıcı deneyimini iyileştirir.
- Sabit değerler için `px`.
- Ölçeklenebilir layout ve tipografi için `rem`.
- Bileşen içi orantı için `em`.
- Ekran boyutuna göre yerleşim için `vw`, `vh`, `dvh`.
- Okunabilirlik için `ch`.

Modern web geliştirmede `px` kullanımını minimuma indirip, `rem` ve responsive birimlere ağırlık vermek en iyi pratiktir.
