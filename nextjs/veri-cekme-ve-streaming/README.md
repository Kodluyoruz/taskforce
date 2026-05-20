# Veri Çekme ve Streaming

Next.js App Router'da veri çekme, Server Components'ın sunduğu async yapıyla çok daha doğal bir hale geldi. Artık ayrı bir `getServerSideProps` ya da `getStaticProps` fonksiyonu yazmak yerine, component'ı doğrudan `async` yapıp içinde `await` kullanabilirsin.

## Server Component'ta Veri Çekme

Bir Server Component, normal bir `async` fonksiyon gibi davranır. İçinde `await` ile herhangi bir asenkron işlem yapabilirsin — ister bir API çağrısı, ister doğrudan bir veritabanı sorgusu.

```tsx
// app/haberler/page.tsx

interface Haber {
  id: number
  baslik: string
  icerik: string
}

export default async function HaberlerPage() {
  // fetch çağrısı doğrudan component içinde
  const res = await fetch('https://api.ornek.com/haberler')
  const haberler: Haber[] = await res.json()

  return (
    <main>
      <h1>Son Haberler</h1>
      <ul>
        {haberler.map((haber) => (
          <li key={haber.id}>
            <h2>{haber.baslik}</h2>
            <p>{haber.icerik}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
```

Bu yapı hem sade hem güvenlidir: `fetch` sunucuda çalışır, API anahtarları tarayıcıya sızmaz, bundle'a hiçbir veri çekme kütüphanesi eklenmez.

## Next.js'in fetch Genişletmeleri

Next.js, standart `fetch` API'sini ek seçeneklerle genişletir. Bu sayede bir fetch çağrısının nasıl cache'leneceğini veya ne sıklıkla yenileneceğini kontrol edebilirsin.

```tsx
// Her zaman fresh veri — cache'leme kapalı
const res = await fetch('https://api.ornek.com/haberler', {
  cache: 'no-store',
})

// 60 saniyede bir yenile (ISR benzeri davranış)
const res = await fetch('https://api.ornek.com/haberler', {
  next: { revalidate: 60 },
})

// Tag ile etiketle — sonradan revalidateTag() ile temizlenebilir
const res = await fetch('https://api.ornek.com/haberler', {
  next: { tags: ['haberler'] },
})
```

Next.js 16'da varsayılan davranış `cache: 'no-store'` yönünde değişmiştir. Yani çoğu durumda veri her request'te taze gelir. Açıkça cache'lemek istiyorsan `next: { revalidate: ... }` ya da `force-cache` kullanman gerekir.

## Paralel Veri Çekme

Birden fazla veri kaynağından aynı anda veri çekmen gerektiğinde `Promise.all()` kullanmak önemlidir. Aksi takdirde her `await` bir öncekinin bitmesini bekler ve toplam süre uzar.

```tsx
// app/profil/[id]/page.tsx

export default async function ProfilPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  // Seri (yavaş) — birincisi bitince ikincisi başlar
  // const kullanici = await fetchKullanici(id)
  // const gonderiler = await fetchGonderiler(id)

  // Paralel (hızlı) — ikisi aynı anda başlar
  const [kullanici, gonderiler] = await Promise.all([
    fetchKullanici(id),
    fetchGonderiler(id),
  ])

  return (
    <div>
      <h1>{kullanici.ad}</h1>
      <p>{kullanici.bio}</p>
      <h2>Gönderileri</h2>
      <ul>
        {gonderiler.map((g) => (
          <li key={g.id}>{g.baslik}</li>
        ))}
      </ul>
    </div>
  )
}

async function fetchKullanici(id: string) {
  const res = await fetch(`https://api.ornek.com/kullanicilar/${id}`)
  return res.json()
}

async function fetchGonderiler(id: string) {
  const res = await fetch(`https://api.ornek.com/kullanicilar/${id}/gonderiler`)
  return res.json()
}
```

### Sequential vs Parallel: Hangisi Ne Zaman?

**Paralel veri çekme** tercih edilmeli:
- İki veri kaynağı birbirinden bağımsızsa
- Sayfanın toplam yüklenme süresini düşürmek istiyorsan

**Sequential (sıralı) veri çekme** gerekli olduğu durumlar:
- İkinci isteğin parametresi birinci isteğin sonucuna bağlıysa (örneğin kullanıcı ID'si ile ilk sorgudan geliyor)
- Waterfall kaçınılmazsa

```tsx
// Sequential zorunlu örnek — ikinci istek birinciye bağlı
const kullanici = await fetchKullanici(id)
// kullanici.planId, ilk response'dan geliyor
const plan = await fetchPlan(kullanici.planId)
```

## loading.tsx ile Otomatik Yükleme UI'ı

Next.js App Router'da bir `page.tsx` ile aynı dizine `loading.tsx` koyarsan, sayfa yüklenirken bu dosyayı otomatik olarak gösterir. Bunun altında Suspense vardır — Next.js bunu senin için kurar.

```tsx
// app/haberler/loading.tsx

export default function Loading() {
  return (
    <div>
      {/* İskelet ekran ya da basit bir yükleme göstergesi */}
      <div style={{ opacity: 0.4 }}>
        <div>Yükleniyor...</div>
        <div className="skeleton-list">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="skeleton-item" />
          ))}
        </div>
      </div>
    </div>
  )
}
```

Bu dosya varken kullanıcı `/haberler` rotasına gittiğinde sayfa verileri yüklenene kadar `Loading` component'ı görür. Sayfa hazır olunca otomatik olarak değişir.

## Suspense ile Manuel Streaming

`loading.tsx` tüm sayfayı etkiler. Sayfa içinde sadece belirli bir bileşenin yavaş yüklendiğini biliyorsan, o bileşeni `<Suspense>` ile sarmalayarak streaming'i manuel olarak kurabilirsin.

```tsx
// app/dashboard/page.tsx

import { Suspense } from 'react'
import GelirleristeGrafi from '@/components/GelirleristeGrafi'
import HizliIstatistikler from '@/components/HizliIstatistikler'

export default function DashboardPage() {
  return (
    <div>
      {/* Bu component hızlı yüklenir, hemen gösterilir */}
      <HizliIstatistikler />

      {/* Bu component yavaş — Suspense ile sarmalıyoruz */}
      <Suspense fallback={<p>Grafik yükleniyor...</p>}>
        <GelirleristeGrafi />
      </Suspense>
    </div>
  )
}
```

```tsx
// app/components/GelirleristeGrafi.tsx

export default async function GelirleristeGrafi() {
  // Yavaş bir API çağrısı — örneğin analytics servisi
  const veriler = await fetch('https://api.ornek.com/gelirler', {
    cache: 'no-store',
  }).then((r) => r.json())

  return (
    <div>
      <h2>Gelir Grafiği</h2>
      {/* Grafik burada render edilir */}
      <pre>{JSON.stringify(veriler, null, 2)}</pre>
    </div>
  )
}
```

`DashboardPage` render edildiğinde `HizliIstatistikler` hemen gösterilir. `GelirleristeGrafi` ise veri gelene kadar `"Grafik yükleniyor..."` fallback'ini gösterir, veriler hazır olunca akıtılarak (stream edilerek) sayfaya eklenir.

## `connection()` Fonksiyonu

Next.js 16'da eklenen `connection()` fonksiyonu, bir component'ın her zaman dinamik olarak render edilmesini zorlar. Yani bu component'ı içeren sayfanın build zamanında statik olarak üretilmesini engeller.

```tsx
// app/canli-fiyatlar/page.tsx

import { connection } from 'next/server'

export default async function CanliFiyatlarPage() {
  // Bu satır sayesinde sayfa her request'te yeniden render edilir
  await connection()

  const fiyatlar = await fetch('https://api.ornek.com/fiyatlar', {
    cache: 'no-store',
  }).then((r) => r.json())

  return (
    <div>
      <h1>Canlı Fiyatlar</h1>
      {fiyatlar.map((f: { sembol: string; fiyat: number }) => (
        <div key={f.sembol}>
          {f.sembol}: {f.fiyat}
        </div>
      ))}
    </div>
  )
}
```

Bu genellikle `cookies()` ya da `headers()` çağrıları zaten dinamik davranışı tetiklediğinde gerekli olmaz. Ama açıkça "bu sayfa statik üretilmemeli" demek istediğinde `connection()` kullanmak niyeti netleştirir.

## Streaming Neden Önemli?

Geleneksel SSR'da sunucu tüm veriyi bekler, sonra tam sayfayı HTML olarak gönderir. Streaming bu mantığı değiştirir: sayfa parça parça tarayıcıya gönderilir.

**TTFB (Time to First Byte):** Streaming ile sunucu, hazır olan kısımları beklemeden göndermeye başlar. Tarayıcı daha erken ilk byte'ı alır.

**LCP (Largest Contentful Paint):** Sayfanın en büyük görsel içeriği daha çabuk render edilebilir, çünkü tüm verinin bitmesini beklemek gerekmez.

Bir sayfada beş farklı veri kaynağı varsa ve biri çok yavaşsa, o tek yavaş kaynak eskiden tüm sayfayı bloke ederdi. Streaming ile sadece o component bekler, geri kalan sayfa kullanıcıya ulaşır.

## Fetch Cache Kontrolü

Server Component'larda `fetch` ile yapılan istekler Next.js tarafından otomatik olarak cache'lenebilir. Bu davranışı şu seçeneklerle yönetebilirsin:

```tsx
// Statik veri — build zamanında bir kez çekilir
const res = await fetch('https://api.ornek.com/kategoriler', {
  cache: 'force-cache',
})

// Her request'te taze veri
const res = await fetch('https://api.ornek.com/stok', {
  cache: 'no-store',
})

// Her 5 dakikada bir yenile
const res = await fetch('https://api.ornek.com/kampanyalar', {
  next: { revalidate: 300 },
})
```

Ayrıca tüm sayfanın cache davranışını `route segment config` ile de ayarlayabilirsin:

```tsx
// app/stok/page.tsx

// Bu sayfadaki tüm fetch'ler için varsayılan davranışı değiştirir
export const revalidate = 60 // 60 saniyede bir yenile
export const dynamic = 'force-dynamic' // ya da her zaman dinamik
```

## Özet

App Router'da veri çekme şu prensiplere dayanır: component async yap, await ile veri çek, paralel istekler için `Promise.all()` kullan, yavaş parçaları `<Suspense>` ile sar ve `loading.tsx` ile otomatik fallback kur. Streaming, sayfanın tamamının hazır olmasını beklemeden kullanıcıya içerik göstermeni sağlar ve kullanıcı deneyimini somut olarak iyileştirir.
