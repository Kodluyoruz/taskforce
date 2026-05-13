# Proje Yapısı ve Dosya Kuralları

Next.js App Router, dosya sistemi üzerine kurulu bir mimari kullanır. Nereye ne koyduğun hem URL yapısını hem de component davranışını belirler. Bu kuralları öğrenmek projeyi sürdürülebilir tutmayı kolaylaştırır.

## `app/` Klasörü: App Router'ın Temeli

App Router'ın çalıştığı yer `app/` dizini. Bu dizine koyduğun her klasör ve dosya belirli bir anlam taşır. Next.js bu dosyaları otomatik olarak bulur — herhangi bir import veya konfigürasyon yazman gerekmez.

```
app/
├── layout.tsx      ← Root layout (zorunlu)
├── page.tsx        ← / route'u
├── globals.css
└── favicon.ico
```

## Özel Dosyalar ve Görevleri

App Router'da bazı dosya isimleri rezerv edilmiştir. Bu isimde dosya oluşturursan Next.js onu özel amaçla kullanır.

### `page.tsx`

Bir route'u kullanıcıya görünür yapan dosya. Bu dosya olmadan o URL'de görüntülenecek hiçbir şey yok.

```tsx
// app/hakkimizda/page.tsx → /hakkimizda URL'ine karşılık gelir

export default function HakkimizdaSayfasi() {
  return (
    <main>
      <h1>Hakkımızda</h1>
      <p>Bu sayfa /hakkimizda adresinde görünür.</p>
    </main>
  )
}
```

### `layout.tsx`

Birden fazla sayfa arasında paylaşılan UI. Navigasyon çubuğu, sidebar, footer gibi elemanlar burada tanımlanır. Layout navigasyonlar arasında yeniden render edilmez — bir kez mount olur.

### `loading.tsx`

Sayfanın veri yüklemesi tamamlanana kadar gösterilecek UI. React'ın `Suspense` mekanizmasını otomatik sarmallar.

### `error.tsx`

O route veya alt route'larda oluşan hataları yakalar ve kullanıcıya hata ekranı gösterir. `"use client"` direktifi zorunlu çünkü hata sınırları client-side çalışır.

```tsx
// app/blog/error.tsx
"use client"

export default function BlogHatasi({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <p>Blog yüklenirken bir hata oluştu: {error.message}</p>
      <button onClick={reset}>Tekrar Dene</button>
    </div>
  )
}
```

### `not-found.tsx`

`notFound()` fonksiyonu çağrıldığında veya eşleşen route bulunamadığında gösterilir.

```tsx
// app/not-found.tsx — Tüm uygulama için 404 sayfası
export default function SayfaBulunamadi() {
  return (
    <main>
      <h1>404 — Sayfa Bulunamadı</h1>
      <p>Aradığın sayfa mevcut değil.</p>
    </main>
  )
}
```

### `route.ts`

API endpoint tanımlamak için kullanılır. Bu dosya bir page değil, HTTP handler'ıdır. `page.tsx` ve `route.ts` aynı dizinde bir arada bulunamaz.

```ts
// app/api/kullanicilar/route.ts → GET /api/kullanicilar
export async function GET() {
  const kullanicilar = [
    { id: 1, isim: "Ayşe" },
    { id: 2, isim: "Mehmet" },
  ]
  return Response.json(kullanicilar)
}
```

## Klasör = URL Segmenti

App Router'da klasör yapısı URL yapısını birebir yansıtır:

```
app/
├── page.tsx                    → /
├── hakkimizda/
│   └── page.tsx                → /hakkimizda
├── blog/
│   ├── page.tsx                → /blog
│   └── [slug]/
│       └── page.tsx            → /blog/herhangi-bir-yazi
└── iletisim/
    └── page.tsx                → /iletisim
```

Köşeli parantezli klasörler (`[slug]`) dinamik segment demek. O konuma gelen URL değerini component içinde okuyabilirsin.

## Route Groups: `(grup-adi)`

Parantez içindeki klasörler URL'e yansımaz. Yalnızca proje organizasyonu içindir.

```
app/
├── (pazarlama)/
│   ├── layout.tsx              ← Yalnızca pazarlama sayfaları için layout
│   ├── page.tsx                → /
│   └── fiyatlar/
│       └── page.tsx            → /fiyatlar
└── (uygulama)/
    ├── layout.tsx              ← Yalnızca uygulama sayfaları için layout
    ├── dashboard/
    │   └── page.tsx            → /dashboard
    └── ayarlar/
        └── page.tsx            → /ayarlar
```

`(pazarlama)` ve `(uygulama)` klasörleri URL'de görünmez. `/pazarlama/fiyatlar` değil, `/fiyatlar` olarak erişilir. Ama her grubun kendi layout'u olabildiği için iki farklı tasarım katmanı oluşturabilirsin.

## Private Klasörler: `_ozel`

Alt çizgiyle başlayan klasörler routing sisteminden tamamen dışarıda tutulur. UI component'ları, helper fonksiyonlar, tipler gibi route dışı dosyaları burada tutabilirsin.

```
app/
├── _components/
│   ├── UrunKarti.tsx
│   └── NavBar.tsx
├── _lib/
│   ├── db.ts
│   └── utils.ts
└── urunler/
    └── page.tsx
```

Bu dosyalara `app/` dışından da erişebilirsin ama routing sistemi onları görmez.

## `public/` Klasörü

Statik dosyalar (görseller, ikonlar, robots.txt, sitemap.xml) buraya gider. `public/` içindeki dosyalara URL kökünden doğrudan erişilebilir:

```
public/
├── logo.png          → /logo.png
├── robots.txt        → /robots.txt
└── icons/
    └── favicon.ico   → /icons/favicon.ico
```

```tsx
// public/logo.png dosyasına erişim
import Image from "next/image"

export default function Header() {
  return <Image src="/logo.png" alt="Logo" width={120} height={40} />
}
```

## Önerilen Klasör Organizasyonu

`app/` dışında projenin geri kalanını nasıl organize edeceğin konusunda Next.js bir kural dayatmaz. Yaygın ve işe yarayan bir yapı:

```
proje/
├── app/                        ← Routing ve sayfalar
├── components/                 ← Paylaşılan UI component'ları
│   ├── ui/                     ← Buton, input gibi temel elemanlar
│   └── layout/                 ← Header, Footer, Sidebar
├── lib/                        ← Yardımcı fonksiyonlar, API client'ları
│   ├── api.ts
│   └── utils.ts
├── hooks/                      ← Custom React hook'ları
├── types/                      ← TypeScript tip tanımları
├── stores/                     ← Global state (Zustand, Jotai vb.)
└── public/                     ← Statik dosyalar
```

## `next.config.ts` ile TypeScript Tam Tipler

Next.js 16'da konfigürasyon dosyası TypeScript ile yazılabilir ve `NextConfig` tipiyle tam oto-tamamlama desteği gelir:

```ts
// next.config.ts
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Geçersiz bir alan yazdığında TypeScript hemen uyarır
  experimental: {
    ppr: true, // Partial Prerendering
  },
}

export default nextConfig
```

## Gerçek Proje Örneği: E-Ticaret

Bir e-ticaret sitesi için proje yapısı şöyle görünebilir:

```
app/
├── (mağaza)/                          ← Müşteri tarafı
│   ├── layout.tsx                     ← Header + Footer ile ana layout
│   ├── page.tsx                       → / (Ana sayfa)
│   ├── urunler/
│   │   ├── page.tsx                   → /urunler (Ürün listesi)
│   │   └── [slug]/
│   │       ├── page.tsx               → /urunler/kirmizi-ayakkabi
│   │       └── loading.tsx            ← Ürün yüklenirken skeleton
│   ├── sepet/
│   │   └── page.tsx                   → /sepet
│   └── odeme/
│       ├── page.tsx                   → /odeme
│       └── basarili/
│           └── page.tsx               → /odeme/basarili
│
├── (yonetim)/                         ← Admin paneli
│   ├── layout.tsx                     ← Admin sidebar ile layout
│   ├── dashboard/
│   │   └── page.tsx                   → /dashboard
│   └── urunler/
│       ├── page.tsx                   → /urunler (admin listesi)
│       └── yeni/
│           └── page.tsx               → /urunler/yeni
│
├── api/
│   ├── urunler/
│   │   └── route.ts                   ← GET /api/urunler
│   ├── sepet/
│   │   └── route.ts                   ← GET, POST /api/sepet
│   └── webhook/
│       └── odeme/
│           └── route.ts               ← POST /api/webhook/odeme
│
├── layout.tsx                         ← Root layout (html, body)
└── not-found.tsx                      ← 404 sayfası

components/
├── ui/
│   ├── Buton.tsx
│   ├── Input.tsx
│   └── Modal.tsx
├── urun/
│   ├── UrunKarti.tsx
│   ├── UrunListesi.tsx
│   └── UrunDetay.tsx
└── sepet/
    ├── SepetIkonu.tsx
    └── SepetOzeti.tsx

lib/
├── db.ts                              ← Veritabanı bağlantısı
├── urun-servisi.ts                    ← Ürün CRUD işlemleri
└── utils.ts                           ← Yardımcı fonksiyonlar

types/
├── urun.ts
└── siparis.ts
```

Bu yapıda `(mağaza)` ve `(yonetim)` grupları birbirinden bağımsız layout'larla çalışır. API route'ları `app/api/` altında toplanmış. Component'lar uygulama mantığından ayrılmış.

Proje büyüdükçe bu organizasyonun değeri ortaya çıkar — neyin nerede olduğunu bulmak için projeyi boydan boya taramak zorunda kalmazsın.
