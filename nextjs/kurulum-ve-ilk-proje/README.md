# Kurulum ve İlk Proje

Next.js projesini doğru kurmak, ilerideki geliştirme sürecini kolaylaştırır. Bu bölümde `create-next-app` ile sıfırdan bir proje oluşturacak, klasör yapısına bakacak ve ilk sayfanı düzenleyeceksin.

## Ön Gereksinimler

Next.js 16 için **Node.js 20.9 veya üstü** gerekiyor. Node.js sürümünü kontrol et:

```bash
node --version
# v20.9.0 veya üstü olmalı
```

Paket yöneticisi olarak npm, yarn, pnpm veya bun kullanabilirsin. Bu örneklerde npm kullanılacak ama komutların karşılıkları diğer paket yöneticilerinde de aynı şekilde çalışır.

## `create-next-app` ile Proje Oluşturma

En hızlı yol resmi scaffolding aracını kullanmak:

```bash
npx create-next-app@latest benim-projem
```

Komut çalıştıktan sonra sana birkaç soru soracak:

```
Would you like to use TypeScript? › Yes
Would you like to use ESLint? › Yes
Would you like to use Tailwind CSS? › Yes
Would you like your code inside a `src/` directory? › No
Would you like to use App Router? (recommended) › Yes
Would you like to use Turbopack for `next dev`? › Yes
Would you like to customize the import alias (@/* by default)? › No
```

Her seçenek ne anlama geliyor:

- **TypeScript:** Next.js 16'da TypeScript varsayılan olarak açık geliyor. Büyük projelerde tip güvenliği çok işine yarar, açık bırak.
- **ESLint:** Kod kalitesi için lint kuralları ekler.
- **Tailwind CSS:** Utility-first CSS framework. Küçük projelerde biraz fazla gelebilir ama büyük projelerde hız kazandırır.
- **src/ dizini:** Kaynak dosyalarını `src/app/` altında tutmak isteyenler için. Tercih meselesi.
- **App Router:** Kesinlikle evet. Pages Router artık eski mimari.
- **Turbopack:** Next.js 16'da zaten varsayılan ama burada da onaylarsın.

## Oluşturulan Dosya ve Klasör Yapısı

Kurulum tamamlandığında şöyle bir yapı seni karşılar:

```
benim-projem/
├── app/
│   ├── favicon.ico
│   ├── globals.css     ← @import "tailwindcss" burada
│   ├── layout.tsx      ← Root layout
│   └── page.tsx        ← Ana sayfa (/)
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .eslintrc.json
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs  ← @tailwindcss/postcss eklentisi burada
└── tsconfig.json
```

> **Not:** Tailwind CSS v4 ile `tailwind.config.ts` oluşturulmaz. Tema özelleştirmeleri `globals.css` içindeki `@theme {}` bloklarıyla yapılır.

Şimdilik odaklanman gereken dosyalar: `app/page.tsx`, `app/layout.tsx` ve `next.config.ts`.

## Geliştirme Sunucusunu Başlatma

Proje dizinine gir ve geliştirme sunucusunu başlat:

```bash
cd benim-projem
npm run dev
```

Terminal şöyle bir çıktı verecek:

```
▲ Next.js 16.2.6 (Turbopack)
- Local:        http://localhost:3000
- Environments: .env.local
```

Turbopack sayesinde ilk başlatma hızlı olur. Tarayıcında `http://localhost:3000` adresini açtığında Next.js'in karşılama sayfasını görürsün.

## İlk Sayfayı Düzenleme

`app/page.tsx` dosyasını aç. İçinde Next.js'in demo içeriği var. Hepsini sil ve şunu yaz:

```tsx
// app/page.tsx

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Merhaba Dünya</h1>
      <p className="mt-4 text-gray-600">Next.js 16 ile ilk sayfam</p>
    </main>
  )
}
```

Dosyayı kaydeder kaydetmez tarayıcı otomatik yenilenir — bu Turbopack'in hot module replacement özelliği. Sayfayı yenilemeye gerek yok.

## Production Build

Uygulamayı production için derlemek:

```bash
npm run build
```

Bu komut `app/` altındaki tüm sayfaları analiz eder, hangi sayfaların static render edileceğine karar verir ve `.next/` klasörüne output yazar. Terminal çıktısında her route için render tipi görünür:

```
Route (app)                Size     First Load JS
┌ ○ /                      1.5 kB   87 kB
└ ○ /about                 800 B    86 kB

○  (Static)   prerendered as static content
```

Build tamamlandıktan sonra production sunucusunu başlat:

```bash
npm run start
```

Bu sefer geliştirme araçları olmadan, gerçek kullanıcı trafiği için optimize edilmiş şekilde çalışır.

## `next.config.ts` Dosyası

Proje kökündeki `next.config.ts`, Next.js'in davranışını özelleştirdiğin yer:

```ts
// next.config.ts
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Harici görsellere izin ver
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Başka alan adına yönlendirme
  redirects: async () => [
    {
      source: "/eski-sayfa",
      destination: "/yeni-sayfa",
      permanent: true,
    },
  ],
}

export default nextConfig
```

Next.js 16'da `next.config.ts` TypeScript ile tam tip desteği sunuyor. `NextConfig` tipi sayesinde geçersiz bir konfigürasyon yazdığında editörün seni uyarıyor.

## Environment Variable Kullanımı

Hassas bilgileri (API anahtarları, veritabanı bağlantı URL'leri) kaynak koduna yazmak yerine `.env.local` dosyasını kullanırsın:

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://localhost:5432/mydb
SECRET_KEY=gizli-anahtar-buraya
```

Önemli bir kural: Tarayıcıda erişmek istediğin değişkenler `NEXT_PUBLIC_` önekiyle başlamalı. Başka türlü yalnızca sunucu tarafında erişilebilir.

```tsx
// app/page.tsx — NEXT_PUBLIC_ önekli değişken tarayıcıda da erişilebilir
export default function HomePage() {
  // Bu değer build sırasında gömülür, tarayıcıda görünür
  const apiUrl = process.env.NEXT_PUBLIC_API_URL

  return <p>API URL: {apiUrl}</p>
}
```

```ts
// app/api/data/route.ts — Sunucu tarafı, gizli kalır
export async function GET() {
  // DATABASE_URL ve SECRET_KEY yalnızca sunucuda erişilebilir
  // Tarayıcıya gönderilmez
  const db = process.env.DATABASE_URL
  const secret = process.env.SECRET_KEY

  return Response.json({ message: "Gizli veriler güvende" })
}
```

`.env.local` dosyasını Git'e ekleme — `.gitignore` dosyasında zaten hariç tutuluyor.

## Tüm npm Scriptleri

`package.json` içinde dört temel script gelir:

```bash
npm run dev      # Geliştirme sunucusu (Turbopack ile)
npm run build    # Production build
npm run start    # Production sunucusunu başlat (build sonrası)
npm run lint     # ESLint ile kod kontrolü
```

Geliştirme sırasında hep `npm run dev` kullanırsın. `npm run build` ve `npm run start` deployment sürecinde işe yarar.

## TypeScript ile Çalışmak

`create-next-app` TypeScript konfigürasyonunu otomatik ayarlıyor. `tsconfig.json` Next.js için optimize edilmiş ayarlarla geliyor. Dosyaların `.tsx` (JSX içeren) veya `.ts` (saf TypeScript) uzantılı olması yeterli.

Next.js'in kendi tipleri için `next` paketinden import yaparsın:

```tsx
// next/image, next/link gibi component'lar için tipler otomatik gelir
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

// Sayfa için metadata tipi
export const metadata: Metadata = {
  title: "Ana Sayfa",
  description: "Hoş geldiniz",
}

export default function HomePage() {
  return (
    <main>
      <Link href="/hakkimizda">Hakkımızda</Link>
      <Image src="/logo.png" alt="Logo" width={200} height={100} />
    </main>
  )
}
```

Artık projen hazır. Sonraki adım klasör yapısını ve dosya kurallarını öğrenmek.
