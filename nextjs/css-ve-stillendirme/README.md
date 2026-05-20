# CSS ve Stillendirme

Next.js, stillendirme konusunda sana birden fazla seçenek sunar. Bunların hiçbiri "yanlış" değil; proje büyüklüğüne, takım tercihlerine ve uygulama gereksinimlerine göre farklı yaklaşımlar daha mantıklı olabilir. Bu sayfada yaygın kullanılan tüm yöntemleri, önemli kısıtlamalarıyla birlikte ele alıyoruz.

## CSS Modules

CSS Modules, bir bileşene özgü stil dosyaları yazmanın en doğrudan yolu. Dosyayı `.module.css` uzantısıyla kaydettiğinde, içindeki sınıf adları derleme sırasında otomatik olarak benzersiz hale getirilir. Bu sayede farklı bileşenlerde aynı sınıf adını kullansanız bile çakışma olmaz.

```css
/* components/Button.module.css */

.buton {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1.25rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: background-color 150ms;
  cursor: pointer;
}

.birincil {
  background-color: #2563eb;
  color: #fff;
}

.birincil:hover {
  background-color: #1d4ed8;
}

.ikincil {
  background-color: #f3f4f6;
  color: #1f2937;
}

.ikincil:hover {
  background-color: #e5e7eb;
}
```

```tsx
// components/Button.tsx
import styles from "./Button.module.css";

type Varyant = "birincil" | "ikincil";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  varyant?: Varyant;
}

export default function Button({
  varyant = "birincil",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.buton} ${styles[varyant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

Derleme sonrasında `styles.buton` gibi bir ifade `Button_buton__k3f9a` benzeri benzersiz bir sınıf adına dönüşür. Geliştirici araçlarında bu isimleri görebilirsin.

CSS Modules, Server Components'ta da sorunsuz çalışır çünkü runtime'da herhangi bir JavaScript gerektirmez; sadece derleme zamanında CSS üretilir.

## Global CSS

Tüm uygulamada geçerli olmasını istediğin stiller (CSS reset, font tanımları, scrollbar stilleri, CSS değişkenleri) için global bir stylesheet kullanırsın. Next.js App Router'da bu dosyayı `app/layout.tsx` içine import edersin.

```css
/* app/globals.css */

/* CSS değişkenleri — tema renkleri */
:root {
  --renk-birincil: #2563eb;
  --renk-birincil-koyu: #1d4ed8;
  --renk-metin: #1f2937;
  --renk-arka-plan: #ffffff;
  --renk-sinir: #e5e7eb;
  --yari-cap: 0.375rem;
}

/* Karanlık mod */
@media (prefers-color-scheme: dark) {
  :root {
    --renk-metin: #f9fafb;
    --renk-arka-plan: #111827;
    --renk-sinir: #374151;
  }
}

/* Basit reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-sans), system-ui, sans-serif;
  color: var(--renk-metin);
  background-color: var(--renk-arka-plan);
  line-height: 1.6;
}

/* Görsellerin varsayılan davranışını düzelt */
img,
video {
  max-width: 100%;
  height: auto;
  display: block;
}
```

```tsx
// app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
```

Global CSS dosyasını yalnızca `app/layout.tsx` ya da `app/page.tsx` gibi özel dosyalara import edebilirsin. Herhangi bir bileşen dosyasına global CSS import etmek Next.js'te hataya neden olur. Bileşen bazlı stiller için her zaman CSS Modules'ı tercih et.

## Tailwind CSS

Next.js 16, `create-next-app` aracılığıyla Tailwind CSS kurulumunu kutudan destekler. Proje oluştururken Tailwind seçeneğini işaretlemen yeterli:

```bash
npx create-next-app@latest proje-adi --tailwind
```

Next.js 16 ile birlikte gelen `create-next-app`, Tailwind CSS v4'ü varsayılan olarak kurar. Manuel kurulum yaparsan:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

Tailwind CSS v4'te artık `tailwind.config.ts` dosyası yerine CSS içinde `@import` ve `@theme` kullanılır:

```css
/* app/globals.css */
@import "tailwindcss";

/* Özel tema değişkenleri — v4 sözdizimi */
@theme {
  --color-birincil-50: #eff6ff;
  --color-birincil-500: #3b82f6;
  --color-birincil-600: #2563eb;
  --color-birincil-700: #1d4ed8;

  /* next/font CSS değişkeniyle entegrasyon */
  --font-sans: var(--font-sans-variable), system-ui, sans-serif;
}
```

```ts
// postcss.config.mjs — v4 için gerekli
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

v4'te `content` array'i yazmana gerek yok — Tailwind sınıfları proje genelinde otomatik taranır.

> **Not:** Tailwind CSS v3 kullanmaya devam etmek istiyorsan `npm install tailwindcss@3 postcss autoprefixer` ile kurabilirsin. v3'te `tailwind.config.ts` ve `content` array'i gereklidir.

Tailwind, **JIT (Just-In-Time) mode** ile birlikte gelir. JIT sayesinde sadece gerçekten kullandığın sınıflar CSS çıktısına girer ve üretim bundle'ı son derece küçük olur.

Tailwind ile Button bileşeni yazmak şöyle görünür:

```tsx
// components/Button.tsx — Tailwind versiyonu

type Varyant = "birincil" | "ikincil" | "tehlike";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  varyant?: Varyant;
  boyut?: "kucuk" | "orta" | "buyuk";
}

const varyantSiniflar: Record<Varyant, string> = {
  birincil: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  ikincil: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400",
  tehlike: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};

const boyutSiniflar = {
  kucuk: "px-3 py-1.5 text-sm",
  orta: "px-4 py-2 text-sm",
  buyuk: "px-6 py-3 text-base",
};

export default function Button({
  varyant = "birincil",
  boyut = "orta",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center rounded-md font-medium",
        "transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        varyantSiniflar[varyant],
        boyutSiniflar[boyut],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
```

## CSS-in-JS Kısıtlaması

styled-components, emotion gibi CSS-in-JS kütüphaneleri **Server Components'ta çalışmaz**. Bu kütüphaneler runtime'da JavaScript çalıştırarak stil oluşturur; ancak Server Components sunucuda render edilir ve tarayıcıya sadece HTML/CSS gönderilir.

CSS-in-JS kullanmak zorundaysan iki seçeneğin var:

1. **Bileşeni Client Component yap** (`"use client"` direktifi ekle) — bu en kolay çözüm ama ağır CSS-in-JS kütüphanelerini tüm uygulamaya yayarsan bundle boyutu büyür.
2. **Derleme zamanı çalışan alternatiflere geç** — `@linaria/react`, `vanilla-extract`, `StyleX` gibi araçlar derleme sırasında CSS üretir ve Server Components'ta çalışır.

Genel tavsiye: yeni projelerde CSS Modules + Tailwind kombinasyonu hem performanslı hem de bakımı kolay bir sonuç verir.

## Sass / SCSS

Sass, CSS Modules ile birlikte kullanılabilir. Tek yapman gereken `sass` paketini yüklemek ve dosyaları `.module.scss` uzantısıyla kaydetmek.

```bash
npm install --save-dev sass
```

```scss
// components/Card.module.scss

$kesinti-noktasi: 768px;

.kart {
  border-radius: 0.5rem;
  border: 1px solid var(--renk-sinir);
  overflow: hidden;
  transition: box-shadow 200ms;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  &__baslik {
    padding: 1.25rem;
    font-size: 1.125rem;
    font-weight: 600;
  }

  &__icerik {
    padding: 1.25rem;
    padding-top: 0;
    color: #6b7280;
  }

  @media (max-width: $kesinti-noktasi) {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
}
```

```tsx
import styles from "./Card.module.scss";

export default function Kart({
  baslik,
  icerik,
}: {
  baslik: string;
  icerik: string;
}) {
  return (
    <article className={styles.kart}>
      <h2 className={styles["kart__baslik"]}>{baslik}</h2>
      <p className={styles["kart__icerik"]}>{icerik}</p>
    </article>
  );
}
```

Sass'ın iç içe yazım (`nesting`), mixin, ve değişken özellikleri büyük stylesheet'lerde kodun okunabilirliğini artırır. Ancak modern CSS de artık nesting desteklediği için Sass'a olan ihtiyaç giderek azalmaktadır.

## CSS Değişkenleri (Custom Properties)

CSS değişkenleri, özellikle tema renkleri ve spacing için son derece kullanışlıdır. `globals.css` içinde tanımladığın değişkenlere hem CSS Modules hem de Tailwind ile erişebilirsin.

```css
/* app/globals.css — genişletilmiş değişken seti */
:root {
  --renk-birincil: #2563eb;
  --renk-ikincil: #7c3aed;
  --renk-basari: #16a34a;
  --renk-uyari: #ca8a04;
  --renk-hata: #dc2626;

  --bosluk-xs: 0.25rem;
  --bosluk-sm: 0.5rem;
  --bosluk-md: 1rem;
  --bosluk-lg: 1.5rem;
  --bosluk-xl: 2rem;

  --golge-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --golge-md: 0 4px 6px rgba(0, 0, 0, 0.07);
}

[data-tema="karanlik"] {
  --renk-birincil: #60a5fa;
  --renk-ikincil: #a78bfa;
}
```

Tailwind'de bu değişkenleri arbitrary value sözdizimi ile doğrudan kullanabilirsin:

```tsx
<div className="text-[var(--renk-birincil)] shadow-[var(--golge-md)]">
  İçerik
</div>
```

Tailwind v4'te bu değişkenleri `@theme` bloğu içinde tema renklerine bağlayabilirsin:

```css
/* app/globals.css */
@import "tailwindcss";

:root {
  --renk-birincil: #2563eb;
  /* ...diğer değişkenler */
}

@theme {
  /* CSS değişkenini Tailwind tema rengine bağla */
  --color-birincil: var(--renk-birincil);
}
```

Sonra normal Tailwind sınıfı gibi `text-birincil` veya `bg-birincil` diyebilirsin.

## `clsx` + `tailwind-merge` ile Sınıf Birleştirme

Koşullu sınıflar yazmanın en yaygın yolu `clsx` ile Tailwind sınıflarını birleştirmek, ardından çakışan Tailwind sınıflarını `tailwind-merge` ile çözmektir. Genellikle bunlar `cn()` adlı bir yardımcı fonksiyonda bir araya getirilir.

```bash
npm install clsx tailwind-merge
```

```ts
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

```tsx
// Kullanım örneği
import { cn } from "@/lib/utils";

interface BadgeProps {
  durum: "aktif" | "pasif" | "beklemede";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ durum, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        // Temel stiller
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        // Koşullu stiller
        durum === "aktif" && "bg-green-100 text-green-800",
        durum === "pasif" && "bg-gray-100 text-gray-600",
        durum === "beklemede" && "bg-yellow-100 text-yellow-800",
        // Dışarıdan gelen className — tailwind-merge çakışmaları çözer
        className
      )}
    >
      {children}
    </span>
  );
}
```

`tailwind-merge` olmadan `cn("px-2 px-4")` çağrısı her iki sınıfı da tutar ve hangisinin geçerli olduğu belirsizleşir. `tailwind-merge` ile bu çakışma otomatik çözülür ve sonuç `px-4` olur.

## Karanlık Mod

### `prefers-color-scheme` ile Otomatik

CSS media query'si ile sistem temasını doğrudan yakalayabilirsin. `globals.css` içinde:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --renk-metin: #f9fafb;
    --renk-arka-plan: #0f172a;
    --renk-sinir: #1e293b;
  }
}
```

### Tailwind `dark:` Prefix ile

Tailwind CSS v4'te karanlık mod `class` stratejisi varsayılan olarak desteklenir. `<html>` elementine `dark` sınıfı eklenince `dark:` prefix'li utility'ler etkin olur. (v3'te `tailwind.config.ts`'e `darkMode: "class"` eklemen gerekirdi; v4'te bu yapılandırma gerekmez.)

```tsx
"use client";

import { useEffect, useState } from "react";

export default function TemaDugmesi() {
  const [karanlik, setKaranlik] = useState(false);

  useEffect(() => {
    // Sistem tercihini oku
    const tercih = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setKaranlik(tercih);
  }, []);

  useEffect(() => {
    // html elementine dark sınıfı ekle/kaldır
    document.documentElement.classList.toggle("dark", karanlik);
  }, [karanlik]);

  return (
    <button
      onClick={() => setKaranlik((onceki) => !onceki)}
      className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Temayı değiştir"
    >
      {karanlik ? "☀️" : "🌙"}
    </button>
  );
}
```

Ardından bileşenlerinde `dark:` prefix'i ile karanlık mod stillerini tanımlarsın:

```tsx
<div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
  İçerik
</div>
```

Tailwind `darkMode: "media"` seçeneğiyle de çalışır; bu durumda sınıf eklemeye gerek kalmaz, yalnızca sistem tercihine göre otomatik değişir. Ancak kullanıcının manuel tema geçişi yapmasını istiyorsan `"class"` modunu tercih et.
