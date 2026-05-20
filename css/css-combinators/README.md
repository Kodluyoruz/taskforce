# CSS Combinators (Birleştiriciler) - İleri Seviye Seçici Teknikleri

## CSS Combinators Nedir?

CSS Combinators (Birleştiriciler), iki veya daha fazla seçiciyi birbirine bağlayarak elementler arasındaki ilişkiye (ebeveyn-çocuk, kardeş vb.) göre seçim yapmamızı sağlayan özel karakterlerdir.

Dört temel combinator türü vardır:
1. **Descendant Selector** (Torun Seçici): `bosluk`
2. **Child Selector** (Çocuk Seçici): `>`
3. **Adjacent Sibling Selector** (Bitişik Kardeş Seçici): `+`
4. **General Sibling Selector** (Genel Kardeş Seçici): `~`

## 1. Descendant Selector (Torun Seçici)

Bir elementin içindeki **tüm** belirli alt elementleri seçer. Sadece doğrudan çocuklar değil, torunlar ve onların çocukları da dahildir.

**Sözdizimi:** `seçici1 seçici2` (Arada boşluk bırakılır)

```css
/* div içindeki tüm p etiketlerini seçer */
div p {
  color: blue;
}
```

```html
<div>
  <p>Bu p seçilir (çocuk)</p>
  <section>
    <p>Bu p de seçilir (torun)</p>
  </section>
</div>
<p>Bu p seçilmez (div dışında)</p>
```

## 2. Child Selector (Çocuk Seçici)

Bir elementin sadece **doğrudan** alt çocuklarını (direct children) seçer. Torunlar etkilenmez.

**Sözdizimi:** `seçici1 > seçici2`

```css
/* div'in sadece doğrudan çocuğu olan p'leri seçer */
div > p {
  color: red;
}
```

```html
<div>
  <p>Bu p SEÇİLİR (doğrudan çocuk)</p>
  <section>
    <p>Bu p SEÇİLMEZ (torun)</p>
  </section>
</div>
```

## 3. Adjacent Sibling Selector (Bitişik Kardeş Seçici)

Bir elementten **hemen sonra** gelen ilk kardeş elementi seçer.

**Sözdizimi:** `seçici1 + seçici2`

```css
/* h1'den hemen sonra gelen ilk p'yi seçer */
h1 + p {
  font-weight: bold;
}
```

```html
<h1>Başlık</h1>
<p>Bu p SEÇİLİR (hemen sonra)</p>
<p>Bu p SEÇİLMEZ</p>
```

## 4. General Sibling Selector (Genel Kardeş Seçici)

Bir elementten sonra gelen ve aynı ebeveyne sahip olan **tüm** kardeş elementleri seçer.

**Sözdizimi:** `seçici1 ~ seçici2`

```css
/* h1'den sonra gelen tüm p kardeşleri seçer */
h1 ~ p {
  color: green;
}
```

```html
<h1>Başlık</h1>
<p>Bu p SEÇİLİR</p>
<span>Ara eleman</span>
<p>Bu p de SEÇİLİR</p>
```

## Pratik Karşılaştırma Tablosu

| Combinator | Sembol | Anlamı | Örnek |
|------------|--------|--------|-------|
| Descendant | (boşluk) | İçindeki tüm elementler | `div p` |
| Child | `>` | Sadece doğrudan çocuklar | `div > p` |
| Adjacent Sibling | `+` | Hemen sonraki ilk kardeş | `div + p` |
| General Sibling | `~` | Sonraki tüm kardeşler | `div ~ p` |

## Compound Selectors (Bileşik Seçiciler)

Özgüllüğü (specificity) artırmak için seçicileri birleştirebilirsiniz.

```css
/* Hem a etiketi olan hem de .btn class'ına sahip element */
a.btn {
  padding: 10px;
}

/* Hem .box hem de .featured class'ına sahip element */
.box.featured {
  border: 2px solid gold;
}
```

## Pratik Örnekler

### Örnek 1: Menü Tasarımı (Child Selector)

İç içe menülerde, stilin sadece üst seviyeye uygulanmasını sağlamak için `>` kullanılır.

```css
.nav > li {
  /* Sadece ana menü öğeleri */
  display: inline-block;
  border-right: 1px solid #ccc;
}

.nav li {
  /* Tüm menü öğeleri (alt menüler dahil) */
  padding: 10px;
}
```

### Örnek 2: Form Düzeni (Adjacent Sibling)

Label'dan sonra gelen input'u stillendirmek.

```css
label + input {
  margin-left: 10px;
}
```

### Örnek 3: Makale Akışı (General Sibling)

Bir başlık altındaki tüm paragrafları renklendirmek.

```css
h2 ~ p {
  color: #333;
  line-height: 1.6;
}
```

### Örnek 4: Lobotomized Owl Selector (`* + *`)

Heydon Pickering tarafından popülerleştirilen bu teknik, akıştaki elementler arasına (ilk element hariç) boşluk ekler.

```css
/* Birbirini takip eden tüm elementlerin arasına margin ekle */
.flow > * + * {
  margin-top: 1.5em;
}
```
Bu yöntem, `margin-top: 0` veya `:first-child` kullanmaktan daha temiz ve sürdürülebilirdir.

## Kaynaklar

- [MDN - Combinators](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [web.dev - Complex selectors](https://web.dev/learn/css/selectors#complex_selectors)
- [CSS Tricks - Child and Sibling Selectors](https://css-tricks.com/child-and-sibling-selectors/)

## Sonuç

CSS Combinators, HTML yapısını değiştirmeden elementleri hassas bir şekilde hedeflemenizi sağlar.
- Genel stil tanımları için **Descendant** (` `).
- Katı yapısal ilişkiler için **Child** (`>`).
- Bitişik element etkileşimi için **Adjacent Sibling** (`+`).
- Genel akış kontrolü için **General Sibling** (`~`).

Bu teknikleri ustaca kullanmak, CSS kodunuzu daha modüler ve bakımını daha kolay hale getirecektir.
