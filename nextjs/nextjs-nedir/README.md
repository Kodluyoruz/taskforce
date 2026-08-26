# Next.js Nedir?

Next.js, React tabanlı bir web framework'üdür. React'ın sana verdiği component sisteminin üstüne routing, server-side rendering, API katmanı ve build optimizasyonu gibi özellikleri ekler. Facebook'un React'ı bir UI kütüphanesi olarak çıkarması kasıtlıydı — uygulamanın geri kalanını nasıl organize edeceğin sana bırakıldı. Next.js bu boşluğu doldurmak için ortaya çıktı.

## React ile Fark: Ne Eksikti?

Sıfırdan bir React uygulaması kurduğunda birkaç problemle karşılaşırsın:

**Routing yok.** React'ın kendi router'ı yok. React Router veya TanStack Router gibi üçüncü parti kütüphaneler kullanman gerekiyor. Her projede farklı bir seçim, farklı konfigürasyon.

**SSR yok.** React varsayılan olarak client-side rendering (CSR) yapar. Tarayıcı sayfayı açar, JavaScript indirir, çalıştırır, sonra içerik görünür. Bu hem ilk yükleme süresini uzatır hem de SEO için kötüdür — arama motorları JavaScript'i her zaman doğru şekilde işlemez.

**API katmanı yok.** Backend ile konuşmak için ayrı bir sunucu kurman gerekir. Frontend ve backend ayrı projeler, ayrı deployment'lar.

**Build optimizasyonu manuel.** Code splitting, image optimization, font yükleme — bunları kendinin yapılandırması gerekir.

Next.js bu dört problemi çözmüş olarak gelir.

## Next.js'in Sunduğu Özellikler

### App Router

Next.js 13'ten itibaren App Router mimarisi kullanılıyor. Klasör yapısı URL yapısını belirler: `app/blog/page.tsx` dosyası otomatik olarak `/blog` route'una karşılık gelir. Ayrı bir router konfigürasyonu yazmanı gerektirmez.

### Rendering Türleri

Next.js üç temel rendering modunu destekler:

**Static Rendering:** Sayfa build sırasında bir kez render edilir ve CDN'den sunulur. Blog yazıları, landing page'ler, ürün listesi gibi sık değişmeyen içerikler için idealdir. Hız açısından en iyi seçenektir.

**Dynamic Rendering:** Sayfa her istek geldiğinde sunucuda render edilir. Kullanıcıya özel içerikler (dashboard, profil sayfası), gerçek zamanlı veriler (borsa fiyatları, stok durumu) için kullanılır.

**Streaming:** Sayfanın tamamını bekleme yerine hazır olan bölümleri tarayıcıya göndermeye başlar. React 19'un Suspense özelliğiyle çalışır. Büyük sayfalarda kullanıcı daha erken içerik görmeye başlar.

### Server Components

Varsayılan olarak `app/` dizinindeki tüm component'lar Server Component'tır. Sunucuda çalışır, tarayıcıya yalnızca HTML gönderilir. Veritabanından direkt veri çekebilirsin, API anahtarlarını güvenle kullanabilirsin ve bundle size'ı küçük tutarsın. Tarayıcı etkileşimi gereken component'lara `"use client"` direktifi eklenir.

### Route Handlers

`app/api/` altında `route.ts` dosyaları oluşturarak API endpoint'leri yazabilirsin. Ayrı bir backend projesine gerek kalmaz.

### Image ve Font Optimizasyonu

`next/image` component'ı görselleri otomatik boyutlar, WebP'ye çevirir ve lazy load eder. `next/font` ise harici font yüklemelerini build sürecine taşır — layout shift olmaz, gizlilik korunur.

## Kullanım Alanları

**E-ticaret:** Ürün sayfaları static render edilir (hız + SEO), sepet ve sipariş takibi dynamic çalışır. Vercel'in Next.js Commerce template'i bu mimari için iyi bir referanstır.

**Blog ve içerik siteleri:** Markdown veya headless CMS (Contentful, Sanity) ile içerikler build'de statik sayfalara dönüşür. Resmi Next.js dokümantasyonu kendisi Next.js ile yapılmış.

**SaaS uygulamaları:** Authentication, dashboard, API — hepsi tek projede. Vercel'de çalışan Linear, Loom, Notion gibi araçlar Next.js kullanıyor.

**Landing page'ler:** Pazarlama sayfaları için static rendering mükemmel uyum sağlar. Hızlı, SEO dostu, deploy kolayı.

## Vercel ile İlişkisi

Next.js'i Vercel geliştiriyor. Bu yüzden en iyi deployment deneyimi Vercel'de oluyor — `git push` ile deploy, önbellekleme, edge functions, analytics hepsi entegre geliyor.

Ama Next.js açık kaynaklı ve herhangi bir Node.js sunucusunda çalışabilir. AWS, GCP, Hetzner, DigitalOcean veya kendi sunucun — hepsinde çalışır. `npm run build` ile production build alırsın, `npm run start` ile başlatırsın. Docker container olarak da deploy edebilirsin.

## Karşılaştırma: React vs Next.js

| Özellik | React | Next.js |
|---|---|---|
| SSR / SSG | Yok (manuel yapılandırma gerekir) | Yerleşik, otomatik |
| Routing | Üçüncü parti kütüphane gerekir | Dosya tabanlı, yerleşik |
| Build optimizasyonu | Manuel Webpack/Vite konfigürasyonu | Otomatik (Turbopack ile) |
| API katmanı | Ayrı backend projesi gerekir | Route Handlers ile aynı projede |
| Image optimizasyonu | Yok | `next/image` ile otomatik |
| Server Components | Yok | App Router ile varsayılan |

## Next.js 16'da Neler Değişti?

### Turbopack Artık Varsayılan

Next.js 16 ile Webpack'in yerini Turbopack aldı. Rust ile yazılmış Turbopack, büyük projelerde geliştirme sunucusunun başlama süresini ciddi ölçüde kısaltıyor. `next dev --turbopack` yazmana gerek yok — artık varsayılan.

### React 19.2 Entegrasyonu

React 19'un Actions API'si, yeni hook'ları (`useOptimistic`, `useFormStatus`) ve geliştirilmiş Suspense desteği Next.js 16 ile tam entegre geliyor.

### React Compiler Stabil

React Compiler artık stabil. `useMemo`, `useCallback` ve `React.memo` manuel kullanımlarını büyük ölçüde ortadan kaldırıyor. Compiler bu optimizasyonları otomatik yapıyor.

### `use cache` Direktifi

Yeni önbellekleme modeli `use cache` direktifiyle çalışıyor. Bir fonksiyonun veya component'ın başına `"use cache"` yazarak o bloğun sonucunu önbelleğe alabilirsin. Eski `fetch` tabanlı önbellekleme yerine daha esnek ve açık bir sistem.

```tsx
// Bir fonksiyonun sonucunu önbelleğe al
async function getProducts() {
  "use cache"
  const res = await fetch("https://api.example.com/products")
  return res.json()
}
```

### Node.js 20.9+ Zorunluluğu

Next.js 16 artık Node.js 18'i desteklemiyor. Minimum 20.9 sürümü gerekiyor.

## Basit Bir Next.js Sayfası

Tüm bunları bir araya getirince şöyle bir dosya yeterli oluyor:

```tsx
// app/page.tsx — Ana sayfa

// Bu bir Server Component, sunucuda çalışır
async function HomePage() {
  // Veritabanından veya API'den direkt veri çekebilirsin
  const res = await fetch("https://api.example.com/featured")
  const featured = await res.json()

  return (
    <main>
      <h1>Öne Çıkan Ürünler</h1>
      <ul>
        {featured.map((item: { id: number; name: string }) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default HomePage
```

Bu kadar. Routing, SSR, veri çekme — hepsi bu yapıda yerleşik olarak çalışıyor.
