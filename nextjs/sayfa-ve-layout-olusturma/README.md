# Sayfa ve Layout Oluşturma

App Router'da sayfalar ve layout'lar birbirini tamamlayan iki kavram. Sayfalar içeriği taşır, layout'lar bu içeriği saran yapıyı oluşturur. İkisinin nasıl çalıştığını anlamak, uygulamanın UI hiyerarşisini doğru kurmana yardımcı olur.

## `page.tsx`: Route'un Görünür İçeriği

Bir klasörde `page.tsx` olduğunda o URL'de bir sayfa oluşur. `page.tsx` olmadan o klasör routing açısından görünmez — sadece organizasyon amaçlı bir klasör olarak kalır.

```tsx
// app/blog/page.tsx → /blog adresinde görünür

export default function BlogSayfasi() {
  return (
    <main>
      <h1>Blog</h1>
      <p>Tüm yazılar burada.</p>
    </main>
  )
}
```

Dinamik sayfalarda URL parametresini props olarak alırsın. Next.js 16'da `params` async oldu:

```tsx
// app/blog/[slug]/page.tsx → /blog/herhangi-bir-slug

// Next.js 16: params artık async, await ile okuyorsun
export default async function YaziSayfasi({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <article>
      <h1>Yazı: {slug}</h1>
    </article>
  )
}
```

## `layout.tsx`: Paylaşılan UI Kapsayıcı

Layout, alt route'lara sarmalayan UI. Kullanıcı alt sayfalar arasında gezerken layout yeniden render edilmez — mount edildiği halde kalır. Bu navigasyon hızını artırır ve state'i korur.

Örneğin bir navigasyon çubuğunu layout'a koyarsan her sayfa geçişinde sıfırdan render edilmez, animasyon veya scroll pozisyonu kaybolmaz.

```tsx
// app/blog/layout.tsx — Tüm /blog/* sayfaları için ortak layout

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Bu header /blog, /blog/yazi-1, /blog/yazi-2 gibi
          tüm alt sayfalarda görünür */}
      <header className="border-b py-4 mb-8">
        <nav>
          <a href="/blog">Tüm Yazılar</a>
        </nav>
      </header>

      {/* Her sayfanın içeriği buraya gelir */}
      {children}
    </div>
  )
}
```

## Root Layout: Zorunlu Temel

`app/layout.tsx` tüm uygulama için zorunlu. Burada `<html>` ve `<body>` etiketleri tanımlanır. Next.js bunları kendi eklemiyor — senin yazman gerekiyor.

```tsx
// app/layout.tsx — Root layout, tüm sayfaları sarar

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

// Google Font — build sürecinde yüklenir, harici istek olmaz
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Skillcamp",  // Alt sayfalardaki başlığa eklenir
    default: "Skillcamp",
  },
  description: "Online eğitim platformu",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
```

Root layout'a koyduğun şeyler uygulamanın her sayfasında görünür. Global CSS importu, font tanımı, analytics script'leri buraya gider.

## Nested Layout: Katmanlı Yapı

Layout'lar iç içe yerleştirilebilir. Her alt dizine koyduğun `layout.tsx`, üst layout'ların içinde render edilir.

```tsx
// app/layout.tsx — Root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <header>Ana Site Header</header>
        {children}
        <footer>Ana Site Footer</footer>
      </body>
    </html>
  )
}

// app/dashboard/layout.tsx — Dashboard layout (root layout içinde render edilir)
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar yalnızca dashboard sayfalarında görünür */}
      <aside className="w-64 bg-gray-100">
        <nav>
          <a href="/dashboard">Genel Bakış</a>
          <a href="/dashboard/projeler">Projeler</a>
          <a href="/dashboard/ayarlar">Ayarlar</a>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}
```

`/dashboard/projeler` adresine girdiğinde render sırası şöyle:

1. Root layout (`<html>`, `<body>`, header, footer)
2. Dashboard layout (sidebar + main)
3. Sayfa içeriği (`app/dashboard/projeler/page.tsx`)

## `template.tsx` ve `layout.tsx` Farkı

`template.tsx`, `layout.tsx` ile aynı işlevi görür ama her navigasyonda yeniden mount edilir. Layout'un koruyacağı state veya animasyon yoktur.

Bunu ne zaman kullanırsın? Sayfa geçişlerinde her seferinde çalışması gereken animasyon veya analytics kodu için. Örneğin her sayfa değişiminde bir giriş animasyonu tetiklemek istiyorsan `template.tsx` kullan.

```tsx
// app/blog/template.tsx
// Her /blog/* sayfasına geçişte yeniden mount edilir

"use client"
import { motion } from "framer-motion"

export default function BlogTemplate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
```

Çoğu durumda `layout.tsx` yeterli. `template.tsx`'e yalnızca yeniden mount davranışına ihtiyaç duyduğunda geç.

## `loading.tsx`: Suspense Tabanlı Yükleme

`loading.tsx` dosyası, sayfanın veri yüklemesi tamamlanana kadar gösterilecek UI için. React'ın `Suspense` sınırını otomatik oluşturur — elle `<Suspense>` sarmanı gerekmez.

```tsx
// app/blog/loading.tsx

export default function BlogYukleniyor() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* İskelet animasyonu ile yükleniyor göstergesi */}
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    </div>
  )
}
```

`/blog` sayfasındaki veri çekme işlemi bitene kadar bu skeleton ekranı görünür. Sayfa render tamamlanınca otomatik olarak sayfa içeriğiyle değişir.

## Metadata: SEO ve Sayfa Başlıkları

Sayfa başlığını, meta description'ı ve diğer metadata bilgilerini `page.tsx` veya `layout.tsx` içinde `metadata` nesnesi export ederek tanımlarsın.

**Statik metadata:**

```tsx
// app/hakkimizda/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hakkımızda",          // Root layout'taki template ile "Hakkımızda | Skillcamp" olur
  description: "Biz kimiz, ne yapıyoruz.",
  openGraph: {
    title: "Hakkımızda — Skillcamp",
    description: "Biz kimiz, ne yapıyoruz.",
    images: ["/og-hakkimizda.jpg"],
  },
}

export default function HakkimizdaSayfasi() {
  return <main>...</main>
}
```

**Dinamik metadata** (URL parametresine göre):

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from "next"

// Next.js 16: params async
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  // Gerçek uygulamada veritabanından veya CMS'den çekersin
  const yazi = await getYazi(slug)

  return {
    title: yazi.baslik,
    description: yazi.ozet,
    openGraph: {
      images: [yazi.kapaKapakGorseli],
    },
  }
}

export default async function YaziSayfasi({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const yazi = await getYazi(slug)

  return (
    <article>
      <h1>{yazi.baslik}</h1>
      <div dangerouslySetInnerHTML={{ __html: yazi.icerik }} />
    </article>
  )
}
```

## Pratik Örnek: Blog Uygulaması Layout Hiyerarşisi

Bir blog uygulamasının tam layout yapısı:

```
app/
├── layout.tsx          ← Root: <html>, <body>, global nav
├── page.tsx            ← / (ana sayfa)
├── blog/
│   ├── layout.tsx      ← Blog: kenar çubuklu layout
│   ├── loading.tsx     ← Blog yüklenirken skeleton
│   ├── page.tsx        ← /blog (yazı listesi)
│   └── [slug]/
│       ├── page.tsx    ← /blog/yazı-adı (yazı detayı)
│       └── loading.tsx ← Yazı yüklenirken skeleton
```

```tsx
// app/layout.tsx — Root layout
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Blogum",
    default: "Blogum",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <header className="border-b px-6 py-4">
          <a href="/" className="font-bold text-xl">Blogum</a>
        </header>
        {children}
      </body>
    </html>
  )
}
```

```tsx
// app/blog/layout.tsx — Blog bölümü için kenar çubuklu layout
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 flex gap-8">
      {/* Ana içerik */}
      <main className="flex-1">{children}</main>

      {/* Kenar çubuğu — tüm blog sayfalarında görünür */}
      <aside className="w-72 shrink-0">
        <h2 className="font-semibold mb-4">Kategoriler</h2>
        <ul>
          <li><a href="/blog?kategori=teknoloji">Teknoloji</a></li>
          <li><a href="/blog?kategori=tasarim">Tasarım</a></li>
        </ul>
      </aside>
    </div>
  )
}
```

```tsx
// app/blog/loading.tsx — Blog yazıları yüklenirken
export default function BlogYukleniyor() {
  return (
    <div className="space-y-6 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="border rounded p-6">
          <div className="h-6 bg-gray-200 rounded w-2/3 mb-3" />
          <div className="h-4 bg-gray-200 rounded w-full mb-2" />
          <div className="h-4 bg-gray-200 rounded w-4/5" />
        </div>
      ))}
    </div>
  )
}
```

Bu yapıda `/blog` adresine girdiğinde:

1. Root layout render edilir (header)
2. Blog layout render edilir (kenar çubuklu yapı)
3. Veri yüklenene kadar `loading.tsx` skeleton gösterilir
4. Yazılar yüklenince `page.tsx` içeriği yerini alır

`/blog/bir-yazi` adresine geçince:

1. Root layout **yeniden render edilmez**
2. Blog layout **yeniden render edilmez**
3. Yalnızca `[slug]/page.tsx` değişir

Bu mimari sayesinde her navigasyonda sayfanın tamamı yeniden çizilmez — yalnızca değişen kısım güncellenir.
