# Kurulum ve components.json

Önceki bölümde shadcn/ui'nin ne olduğunu, neden bileşen kütüphanelerinden farklı çalıştığını öğrendin. Şimdi işin pratik kısmına geçiyoruz: projeye nasıl kurulur, kurulumdan sonra ne olur, ve `components.json` dosyası tam olarak ne işe yarar?

---

## Gereklilikler

shadcn/ui'yi bir projeye eklemeden önce bazı şeylerin hazır olması gerekiyor. Bunlar olmadan kurulum ya hata verir ya da düzgün çalışmaz.

- **Node.js 18 veya üzeri** — shadcn CLI modern Node.js özelliklerine ihtiyaç duyar.
- **Desteklenen bir React framework'ü** — Next.js (App Router veya Pages Router), Vite, Remix, Astro gibi seçeneklerden biri. Saf Create React App artık resmi olarak desteklenmiyor.
- **Tailwind CSS kurulu ve yapılandırılmış** — shadcn/ui bileşenleri Tailwind sınıflarıyla yazıldığı için Tailwind olmadan hiçbir şey görünmez.
- **TypeScript (önerilir)** — `tsx: true` ayarıyla TypeScript destekli `.tsx` dosyaları üretilir. JavaScript kullanmak da mümkün ama TypeScript ile deneyim çok daha iyi.
- **`tsconfig.json` içinde `@/*` path alias'ı** — CLI, bileşenleri doğru yere koyabilmek için bu alias'a güvenir.

Eğer Next.js ile başlıyorsan ve projen henüz yoksa, `create-next-app` zaten Tailwind ve TypeScript seçeneklerini kurulum sırasında sunuyor. Oradan kuruyorsan işin büyük kısmı hazır geliyor.

---

## Kurulum Adımları

### `npx shadcn@latest init`

Hazırlıklar tamam olduğunda tek bir komutla başlıyorsun:

```bash
npx shadcn@latest init
```

Bu komut sana birkaç soru sorar. Her soru projenin `components.json` dosyasını şekillendirir. Soruları anlayarak cevaplamak önemli çünkü bazıları sonradan değiştirilmesi zor olan ayarları belirliyor.

**Soru 1 — Style seçimi:**
```
Which style would you like to use? › new-york
```
Görsel stil seçimi. `default` artık deprecated, `new-york` güncel ve önerilen seçenek. Daha temiz kenarlıklar ve daha keskin bir görünüm sunar.

**Soru 2 — Base color:**
```
Which color would you like to use as the base color? › neutral
```
Tema için kullanılacak temel renk paleti. `neutral`, `zinc`, `stone`, `mauve`, `olive`, `mist`, `taupe` gibi seçenekler var. Bu seçim CSS variable'larının başlangıç değerlerini belirler. Sonradan CSS'i düzenleyerek değiştirebilirsin ama başlangıç için `neutral` güvenli bir seçenek.

**Soru 3 — CSS variables:**
```
Would you like to use CSS variables for theming? › yes
```
`yes` dersen bileşenler `--background`, `--foreground`, `--primary` gibi CSS variable'ları kullanır. Bu sayede dark mode desteği kolaylaşır ve temayı tek bir yerden yönetebilirsin. `no` dersen Tailwind utility class'ları doğrudan kullanılır ama tema yönetimi zorlaşır. Büyük ihtimalle `yes` isteyeceksin.

Cevapları tamamladıktan sonra CLI aşağıdakileri otomatik olarak yapar:
- `components.json` dosyasını oluşturur
- `lib/utils.ts` dosyasını oluşturur
- `globals.css` (veya projenin ana CSS dosyası) içine CSS variable'ları ekler
- Gerekli bağımlılıkları (`clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`) yükler

---

## components.json Anatomy

`components.json`, projenin kökünde oluşan bir yapılandırma dosyasıdır. shadcn CLI bu dosyayı okuyarak bileşenleri nereye koyacağını, hangi stil sistemini kullanacağını ve import path'lerini nasıl yazacağını anlar.

İşte tam bir `components.json` örneği:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

Şimdi her alanı tek tek inceleyelim.

### `$schema`

```json
"$schema": "https://ui.shadcn.com/schema.json"
```

JSON Schema referansı. Editörün (VS Code gibi) bu dosyayı düzenlerken otomatik tamamlama ve doğrulama yapmasını sağlar. Fonksiyonel bir etkisi yoktur ama geliştirme deneyimini iyileştirir.

### `style`

```json
"style": "new-york"
```

Bileşenlerin görsel stilini belirler. `"default"` ve `"new-york"` olmak üzere iki seçenek vardı; ancak `"default"` artık deprecated sayılıyor ve `"new-york"` önerilen seçenek haline geldi. Bu değer init sonrasında değiştirilmemeli — değiştirilirse mevcut bileşenlerle yeni eklenenler farklı görünebilir.

### `rsc`

```json
"rsc": true
```

React Server Components desteği. `true` olduğunda CLI, client-side hook veya event handler kullanan bileşenlerin başına otomatik olarak `"use client"` direktifi ekler. Next.js App Router kullanıyorsan `true` olmalı. Vite veya Pages Router gibi RSC desteklemeyen ortamlarda `false` yap.

### `tsx`

```json
"tsx": true
```

`true` ise bileşenler `.tsx` uzantısıyla oluşturulur. `false` ise `.jsx` olarak gelir. TypeScript kullanıyorsan kesinlikle `true` bırak.

### `tailwind` objesi

Tailwind ile entegrasyonu yapılandıran kısım.

**`tailwind.config`** — Tailwind config dosyasının yolu. Tailwind v3 kullanıyorsan bu alanı doldurman gerekiyor (`"tailwind.config.ts"` ya da `"tailwind.config.js"`). Tailwind v4 kullanıyorsan bu alanı boş bırakabilirsin çünkü v4 config dosyasına ihtiyaç duymaz.

**`tailwind.css`** — Tailwind'i import eden CSS dosyasının yolu. Next.js App Router için genellikle `"app/globals.css"`, Pages Router için `"styles/globals.css"` olur.

**`tailwind.baseColor`** — Başlangıç renk paletini belirler. Güncel geçerli değerler: `neutral`, `stone`, `zinc`, `mauve`, `olive`, `mist`, `taupe`. (`slate` ve `gray` gibi eski seçenekler güncel schema'da artık yer almıyor.) Bu renk, CSS variable'larının ilk değerlerini üretmek için kullanılır. Init sonrasında değiştirirsen mevcut variable'lar güncellenmez, bileşenleri yeniden yüklemen gerekir.

**`tailwind.cssVariables`** — `true` ise bileşenler CSS variable'larla tema alır (`var(--primary)` gibi). `false` ise Tailwind utility class'ları doğrudan embed edilir. CSS variable yaklaşımı dark mode ve özelleştirme açısından çok daha avantajlı, neredeyse her zaman `true` isteyeceksin.

### `iconLibrary`

```json
"iconLibrary": "lucide"
```

Bileşenlerin ikon importlarında hangi kütüphaneyi kullanacağını belirler. Varsayılan değer `"lucide"` (lucide-react). `"heroicons"` gibi alternatif bir ikon kütüphanesi tercih ediyorsan bu alanı değiştirebilirsin; CLI bileşen şablonlarını buna göre üretir.

### `aliases` objesi

CLI'nın bileşenleri dosyalara yazarken kullanacağı import path'lerini belirler. Bu değerler `tsconfig.json` içindeki path alias'larıyla örtüşmeli.

**`aliases.components`** — Genel bileşenlerin kök dizini. Varsayılan `"@/components"`.

**`aliases.utils`** — `cn()` gibi utility fonksiyonların bulunduğu dosyanın yolu. Varsayılan `"@/lib/utils"`.

**`aliases.ui`** — shadcn bileşenlerinin kurulacağı dizin. Varsayılan `"@/components/ui"`. Bu dizini değiştirerek bileşenlerin farklı bir yere kurulmasını sağlayabilirsin.

**`aliases.lib`** — `format-date` gibi yardımcı fonksiyonların kök dizini. Varsayılan `"@/lib"`.

**`aliases.hooks`** — Custom hook'ların dizini. Varsayılan `"@/hooks"`.

---

## init Sonrası Oluşan Dosyalar

`npx shadcn@latest init` komutunu çalıştırdıktan sonra projenin yapısına birkaç şey eklenir.

### `lib/utils.ts`

En önemli dosyalardan biri. `cn()` adlı utility fonksiyonu burada tanımlanır:

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Tailwind class'larını güvenli şekilde birleştiren yardımcı fonksiyon
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

`cn()` fonksiyonu iki kütüphaneyi bir araya getirir:
- **`clsx`** — koşullu class birleştirme yapar. `cn("base", isActive && "active")` gibi kullanılır.
- **`tailwind-merge`** — çakışan Tailwind class'larını akıllıca çözer. Örneğin `cn("p-4", "p-2")` yazarsan sonuç `"p-2"` olur, ikisi birden gelmez.

Bütün shadcn bileşenlerinin içinde bu fonksiyon kullanılır. Kendi bileşenlerinde de kullanabilirsin.

### `components/ui/` klasörü

Bu klasör init aşamasında oluşturulur ama başlangıçta boştur. Her `npx shadcn@latest add [bileşen-adı]` komutunu çalıştırdığında ilgili bileşen buraya eklenir.

### `globals.css` değişiklikleri

CSS variable'lar seçildiyse (`cssVariables: true`), init komutu ana CSS dosyasına şuna benzer bir blok ekler:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  /* ... diğer variable'lar */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... dark mode değerleri */
}
```

Bu variable'ları düzenleyerek projenin genel rengini değiştirebilirsin. Dark mode için `.dark` class'ı body'ye eklenmesi yeterlidir.

---

## Farklı Framework'lerde Kurulum

`npx shadcn@latest init` komutu çoğu framework'te aynı şekilde çalışır, ama bazı küçük farklılıklar var.

**Next.js (App Router):** En iyi desteklenen senaryo. `rsc: true` yap, CSS dosya yolu `"app/globals.css"` olarak ayarlanır. Tailwind v3 veya v4 ikisi de çalışır.

**Next.js (Pages Router):** `rsc: false` yap çünkü Server Components desteklenmiyor. CSS yolu `"styles/globals.css"` olur. Bunun dışında süreç aynı.

**Vite + React:** `rsc: false` yap. `tailwind.config.ts` yolu projenin root'unda. Init sonrası `vite.config.ts` içindeki path alias'larının `tsconfig.json` ile senkron olduğundan emin ol.

**Remix:** `rsc: false`. CSS dosyası genellikle `app/tailwind.css` veya `app/root.tsx` içinde import edilen bir dosya. Alias yapısı Remix'in kendi resolver'ına göre ayarlanmalı.

Farklı bir framework kullanıyorsan, init sırasında CLI genellikle bunu otomatik algılar ve uygun varsayılanları önerir. Yine de sorun yaşarsan önce `components.json` içindeki path'lerin ve alias'ların doğru olduğunu kontrol et.

---

## Sık Yapılan Hatalar

**Path alias eksikliği:** `@/components` gibi alias'lar çalışmıyorsa `tsconfig.json` içinde `paths` tanımı yok demektir. `compilerOptions.paths` içine `"@/*": ["./*"]` eklediğinden emin ol.

**Tailwind CSS yüklü değil:** Bileşenler eklenebilir ama tarayıcıda görünmez. `globals.css` içinde `@import "tailwindcss"` (v4) veya `@tailwind base; @tailwind components; @tailwind utilities;` (v3) satırları olmalı.

**`style` ve `baseColor` sonradan değiştirme:** Bu iki alan mevcut bileşenleri etkilemez, sadece yeni eklenecek bileşenlere uygulanır. Değişiklik yapmak istiyorsan var olan bileşenleri silip yeniden eklemen gerekir.

---

Kurulum tamamlandıktan sonra ilk bileşeni eklemek için `npx shadcn@latest add button` komutunu çalıştırabilirsin. `components/ui/button.tsx` dosyasının projeye geldiğini göreceksin — bu dosya tamamen senindir, istediğin gibi düzenleyebilirsin. Bir sonraki bölümde bileşenler nasıl eklenir, nasıl özelleştirilir, bunlara bakacağız.
