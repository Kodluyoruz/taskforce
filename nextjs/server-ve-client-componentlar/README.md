# Server ve Client Components

Next.js App Router'da her component varsayılan olarak **Server Component**'tır. Bu, React'in sunucu tarafında render işlemini çalıştırmasını sağlayan ve Next.js 13'ten itibaren standart hale gelen yaklaşımın temelidir. Client Component yazmak için dosyanın en üstüne `'use client'` direktifini eklimen yeterli.

## React Server Components Nedir?

React Server Components (RSC), component'ların sunucu tarafında render edilip HTML olarak tarayıcıya gönderildiği bir modeldir. Tarayıcı bu component'ların JavaScript kodunu indirmez, dolayısıyla bundle boyutu küçülür.

App Router ile birlikte `app/` dizinindeki her `.tsx` ve `.js` dosyası varsayılan olarak Server Component'tır. Açıkça belirtmen gerekmez.

Server Component'ların avantajları:

- **Bundle'a eklenmez:** Component kodu tarayıcıya gönderilmez. Büyük kütüphaneler (örneğin markdown parser, şifreleme araçları) sunucuda kullanılabilir.
- **Veritabanına doğrudan erişim:** ORM ya da SQL sorgularını doğrudan component içinde yazabilirsin. Ayrı bir API katmanına gerek yok.
- **Daha hızlı ilk yükleme:** Sunucu HTML ürettiği için tarayıcı içeriği daha çabuk görür.
- **Gizli kalması gereken veriler:** API anahtarları, veritabanı URL'leri sunucu tarafında kalır, tarayıcıya sızmaz.

```tsx
// app/kullaniciler/page.tsx
// Bu dosya Server Component — async kullanılabilir

import { db } from '@/lib/db'

export default async function KullanicilarPage() {
  // Veritabanı sorgusu doğrudan component içinde
  const kullanicilar = await db.query('SELECT * FROM users LIMIT 10')

  return (
    <ul>
      {kullanicilar.map((kullanici) => (
        <li key={kullanici.id}>{kullanici.ad}</li>
      ))}
    </ul>
  )
}
```

## Client Components

`'use client'` direktifi bir component'ın tarayıcıda çalışacağını işaret eder. Bu direktif dosyanın en üst satırına yazılır.

Client Component kullanmak zorunda olduğun durumlar:

- `useState`, `useEffect`, `useReducer` gibi React hook'ları
- `onClick`, `onChange`, `onSubmit` gibi event handler'lar
- `window`, `document`, `localStorage` gibi tarayıcı API'leri
- Animasyon kütüphaneleri (Framer Motion gibi)
- Gerçek zamanlı güncelleme gerektiren UI parçaları

```tsx
// app/components/BegeniButtoun.tsx
'use client'

import { useState } from 'react'

interface Props {
  baslangicSayisi: number
}

export default function BegeniButon({ baslangicSayisi }: Props) {
  const [sayi, setSayi] = useState(baslangicSayisi)

  return (
    <button onClick={() => setSayi((prev) => prev + 1)}>
      {sayi} kişi beğendi
    </button>
  )
}
```

## Server ve Client Components Arasındaki Sınır

Server Component, Client Component'ı import edip kullanabilir. Bu normal bir kullanımdır ve sıkça yapılır.

```tsx
// app/makale/[id]/page.tsx — Server Component
import BegeniButon from '@/components/BegeniButon'
import { db } from '@/lib/db'

export default async function MakalePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const makale = await db.makaleler.findUnique({ where: { id } })

  return (
    <article>
      <h1>{makale.baslik}</h1>
      <p>{makale.icerik}</p>
      {/* Client Component burada kullanılıyor */}
      <BegeniButon baslangicSayisi={makale.begeniSayisi} />
    </article>
  )
}
```

Ters yön doğrudan çalışmaz: Client Component içinde Server Component'ı import edemezsin. Bunun sebebi, Client Component tarayıcıda çalışırken Server Component'ın sunucuya özgü özellikleri (DB erişimi, async render vb.) barındırmasıdır.

## Children Prop ile Server + Client Birleştirme

Ancak `children` prop'u kullanarak Server Component'ı Client Component içine yerleştirebilirsin. Bu pattern, bir bileşeni etkileşimli yaparken içindeki bazı parçaların sunucu tarafında kalmasını sağlar.

```tsx
// app/components/SuruklenebilirPanel.tsx
'use client'

import { useState } from 'react'

export default function SuruklenebilirPanel({
  children,
}: {
  children: React.ReactNode
}) {
  const [acik, setAcik] = useState(true)

  return (
    <div>
      <button onClick={() => setAcik((prev) => !prev)}>
        {acik ? 'Gizle' : 'Göster'}
      </button>
      {acik && <div>{children}</div>}
    </div>
  )
}
```

```tsx
// app/dashboard/page.tsx — Server Component
import SuruklenebilirPanel from '@/components/SuruklenebilirPanel'
import { db } from '@/lib/db'

export default async function DashboardPage() {
  // Server Component olduğu için DB'ye erişiyor
  const istatistikler = await db.istatistikler.findMany()

  return (
    // Client Component, Server Component'tan gelen içeriği children olarak alıyor
    <SuruklenebilirPanel>
      <ul>
        {istatistikler.map((item) => (
          <li key={item.id}>{item.ad}: {item.deger}</li>
        ))}
      </ul>
    </SuruklenebilirPanel>
  )
}
```

Bu sayede `SuruklenebilirPanel` Client Component olmaya devam ederken içeriği sunucu tarafından render edilmiş olur.

## `'use server'` Direktifi

`'use server'` direktifi, Server Components'tan farklı bir kavramdır. Bu direktif **Server Actions** için kullanılır — yani sunucuda çalışması gereken fonksiyonlar için.

```ts
// app/actions/kullanici.ts
'use server'

// Bu dosyadaki tüm fonksiyonlar Server Action olarak çalışır
export async function kullaniciSil(id: string) {
  await db.kullanicilar.delete({ where: { id } })
}
```

Ya da tek bir fonksiyona eklenebilir:

```tsx
// app/profil/page.tsx — Server Component
export default function ProfilPage() {
  async function guncelle(formData: FormData) {
    'use server'
    // Bu fonksiyon sunucuda çalışır
    const ad = formData.get('ad')
    await db.kullanicilar.update({ data: { ad } })
  }

  return <form action={guncelle}>...</form>
}
```

## Ne Zaman Hangisi?

| Durum | Component Türü |
|---|---|
| Veritabanından veri çekme | Server Component |
| API anahtarı kullanma | Server Component |
| SEO için statik içerik | Server Component |
| `useState` veya `useEffect` kullanma | Client Component |
| Tıklama / giriş gibi event'ler | Client Component |
| Tarayıcı API'leri | Client Component |
| Animasyon kütüphaneleri | Client Component |

Genel kural olarak: önce Server Component yaz. Etkileşim, state ya da tarayıcı API'si gerekirse o zaman `'use client'` ekle.

## Yaygın Hatalar

**Server Component'ta hook kullanmaya çalışmak:**

```tsx
// YANLIŞ — Server Component'ta useState kullanılamaz
export default async function SayfaPage() {
  const [sayi, setSayi] = useState(0) // Hata verir!
  // ...
}
```

Çözüm: Bu component'a `'use client'` ekle ya da state'i ayrı bir Client Component'a taşı.

**Client Component'ta doğrudan DB sorgusu:**

```tsx
// YANLIŞ — Client Component'ta DB sorgulanamaз
'use client'

export default function UrunListesi() {
  const urunler = await db.urunler.findMany() // Bu çalışmaz
  // ...
}
```

Çözüm: Veri çekmeyi Server Component'ta yap, sonucu Client Component'a prop olarak ilet.

## Üçüncü Taraf Kütüphane Wrapper'ları

Bazı kütüphaneler `'use client'` direktifi içermez ama tarayıcı API'leri kullanır. Bu durumda o kütüphaneyi kendisi bir Client Component içine sarmalaman gerekir.

```tsx
// app/components/KaruzelWrapper.tsx
'use client'

// Bu kütüphane 'use client' içermiyor ama tarayıcıya özgü
import Karuzel from 'bazi-karuzel-kutuphanesi'

export default function KaruzelWrapper({ resimler }: { resimler: string[] }) {
  return <Karuzel items={resimler} />
}
```

Artık bu wrapper'ı Server Component'lardan güvenle import edebilirsin.

## `next/dynamic` ile Lazy Loading

`next/dynamic`, component'ları dinamik olarak yüklemeni sağlar. Büyük kütüphaneler veya sayfa ilk yüklendiğinde görünmeyen ağır bileşenler için bundle boyutunu küçültmek amacıyla kullanılır.

```tsx
import dynamic from "next/dynamic";

// Bu bileşen ilk sayfa yüklendiğinde indirilmez
// Kullanıcı o kısma scroll edince veya ihtiyaç duyunca yüklenir
const GrafikBileseni = dynamic(() => import("@/components/GrafikBileseni"), {
  loading: () => <p>Grafik yükleniyor...</p>,
  ssr: false, // Sadece client'ta render et (sunucu tarafında atla)
});

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Bu bileşen gerektiğinde lazy olarak yüklenir */}
      <GrafikBileseni />
    </div>
  );
}
```

### `ssr: false` Ne Zaman Kullanılır?

Bazı kütüphaneler `window` veya `document` gibi tarayıcı API'lerine direkt erişir ve sunucuda render edilemez. `ssr: false` bu bileşenleri yalnızca client tarafında yükler:

```tsx
// Harita, grafik veya tarayıcıya özgü kütüphaneler için
const LeafletHarita = dynamic(() => import("@/components/LeafletHarita"), {
  ssr: false,
  loading: () => <div className="h-64 animate-pulse bg-gray-200 rounded" />,
});
```

### Named Export ile Dynamic Import

```tsx
// Bir modülün belirli bir export'unu lazy yüklemek için
// next/dynamic her zaman default export bekler — named export'u { default: ... } ile sarmala
const HafifEditor = dynamic(
  () => import("@/components/Editor").then((mod) => ({ default: mod.HafifEditor })),
  { loading: () => <p>Editör yükleniyor...</p> }
);
```

`next/dynamic` ile `<Suspense>` birbirinin alternatifidir — ikisi de lazy loading sağlar. Fark şu: `next/dynamic` import düzeyinde çalışır (modül split), `<Suspense>` ise data fetching sırasındaki render bekleme için kullanılır.

## Özet

App Router'ın temel mantığı şu: **Server Components veriyi alır, Client Components onu gösterir ve kullanıcıyla etkileşime girer.** Bu ayrımı doğru kurduğunda hem performans hem geliştirici deneyimi açısından iyi bir noktaya gelirsin.
