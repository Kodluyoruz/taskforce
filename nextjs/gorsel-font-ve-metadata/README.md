# Görsel, Font ve Metadata

Web uygulamalarının performansını ve arama motoru görünürlüğünü etkileyen üç temel konu: görselleri doğru optimize etmek, fontları tarayıcıya verimli yüklenmek ve sayfa metadata'sını düzgün tanımlamak. Next.js'in bu üç alan için sunduğu araçlar — `next/image`, `next/font` ve Metadata API — çok sayıda ayarı senin yerine yönetir.

## Görsel Optimizasyonu: `next/image`

HTML'deki `<img>` etiketini doğrudan kullandığında boyutlandırma, format dönüşümü ve lazy loading gibi konuları tamamen kendin ele almak zorunda kalırsın. `<Image>` bileşeni ise bunların hepsini otomatik olarak yönetir:

- Görüntüyü **WebP veya AVIF** formatına dönüştürür (tarayıcı destekliyorsa)
- **Lazy loading** varsayılan olarak aktif — viewport dışındaki görseller yüklenmez
- **Boyut bilgisiyle CLS (Cumulative Layout Shift) önler** — layout kayması olmaz
- `priority` prop'u ile LCP (Largest Contentful Paint) görselini erkenden yükler
- Görseli sunucu tarafında isteğe bağlı yeniden boyutlandırabilir

### Temel Props

| Prop | Açıklama |
|---|---|
| `src` | Görsel yolu (string veya `StaticImport`) |
| `alt` | Zorunlu — erişilebilirlik ve SEO için |
| `width` / `height` | Piksel cinsinden boyut; `fill` kullanılmıyorsa zorunlu |
| `fill` | Parent container'ı tamamen kaplar; `position: relative` gerektirir |
| `sizes` | Farklı viewport'larda görselin kaplayacağı genişlik |
| `priority` | Sayfa yüklenince hemen fetch et — above-the-fold görseller için |
| `loading` | `"lazy"` (varsayılan) veya `"eager"` |
| `quality` | 1-100 arası sıkıştırma kalitesi, varsayılan 75 |
| `placeholder` | `"blur"` ile yüklenirken bulanık önizleme göster |

### Yerel Görsel Kullanımı

```tsx
// app/page.tsx
import Image from "next/image";
import heroGorsel from "@/public/images/hero.jpg";

export default function Anasayfa() {
  return (
    <main>
      {/* Yerel import — boyutlar otomatik algılanır */}
      <Image
        src={heroGorsel}
        alt="Platform ana görseli"
        priority // LCP görseli olduğu için hemen yükle
        placeholder="blur" // Yüklenene kadar bulanık göster
        className="w-full rounded-xl"
      />
    </main>
  );
}
```

### Uzak Görsel Kullanımı

Uzak URL'lerden gelen görsellerde `width` ve `height` zorunludur. Ayrıca `next.config.ts` içinde hangi domain'lere izin verildiğini belirtmen gerekir.

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.ornek.com",
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
```

```tsx
// Uzak görsel kullanımı
import Image from "next/image";

export default function KullaniciFotografi({
  avatarUrl,
  isim,
}: {
  avatarUrl: string;
  isim: string;
}) {
  return (
    <Image
      src={avatarUrl}
      alt={`${isim} profil fotoğrafı`}
      width={64}
      height={64}
      className="rounded-full"
    />
  );
}
```

### `fill` Prop ile Esnek Görsel

Görselin boyutunu önceden bilmiyorsan ya da parent container'ı tamamen kaplamasını istiyorsan `fill` kullanırsın. Parent element `position: relative` olmalıdır.

```tsx
// Kart görseli — container boyutuna göre ölçeklenir
export default function BlogKartGorsel({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />
    </div>
  );
}
```

`sizes` prop'u tarayıcıya görüntünün ekranda ne kadar yer kapladığını bildirir. Bu bilgi olmadan tarayıcı gereksiz yere büyük boyut indirebilir. `(max-width: 640px) 100vw` demek "640px altında ekranın tamamı kadar yer kaplıyor" anlamına gelir.

### `alt` Metni ve Erişilebilirlik

`alt` prop'u hem erişilebilirlik hem de SEO açısından zorunludur. Ekran okuyucular bu metni kullanır; arama motorları ise görseli tanımlamak için `alt`'a bakar. Dekoratif bir görsel içinse boş string (`alt=""`) geçmek doğrudur — bu durumda ekran okuyucu görseli atlar.

```tsx
{/* Bilgilendirici görsel */}
<Image src="/grafik.png" alt="2024 yılı kullanıcı büyüme grafiği" ... />

{/* Dekoratif görsel */}
<Image src="/arka-plan-desen.png" alt="" ... />
```

## Font Optimizasyonu: `next/font`

`next/font`, Google Fonts ve local font dosyalarını uygulamanın kendi sunucusundan yükler. Bu yaklaşımın iki önemli avantajı var:

1. **GDPR uyumluluğu:** Google'ın font sunucusuna istek gitmez; kullanıcının IP'si üçüncü tarafla paylaşılmaz.
2. **Performans:** Font dosyaları diğer statik varlıklarla birlikte CDN'den sunulur; ayrı bir DNS çözümlemesi ve bağlantı kurma adımı olmaz.

### Google Fonts Kullanımı

```tsx
// app/layout.tsx
import { Inter, Merriweather } from "next/font/google";

// CSS değişkeni tanımla — Tailwind ile entegrasyon için ideal
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Font yüklenene kadar sistem fontunu göster
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // CSS değişkenleri html elementine eklenir
    <html lang="tr" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
```

`display: 'swap'` seçeneği, font yüklenene kadar sistemin fallback fontunu kullanmasını sağlar. Böylece ekran boş kalmaz (FOIT — Flash of Invisible Text olmaz). Alternatif değerler: `"block"`, `"fallback"`, `"optional"`.

### Local Font Kullanımı

Kendi font dosyalarını kullanıyorsan `next/font/local` ile yükleyebilirsin:

```tsx
// app/layout.tsx
import localFont from "next/font/local";

const ozelFont = localFont({
  src: [
    {
      path: "../public/fonts/CustomFont-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CustomFont-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/CustomFont-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-ozel",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={ozelFont.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### CSS Değişkeni ile Tailwind Entegrasyonu

Tailwind v4'te font değişkenlerini `globals.css` içindeki `@theme` bloğuna ekleyince tüm Tailwind utility'leriyle kullanılabilir hale gelir:

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* next/font'un oluşturduğu CSS değişkenlerini Tailwind font ailelerine bağla */
  --font-sans: var(--font-sans-variable), system-ui, sans-serif;
  --font-serif: var(--font-serif-variable), Georgia, serif;
  --font-ozel: var(--font-ozel-variable), sans-serif;
}
```

Tailwind v4, `--font-*` değişkenlerinden otomatik olarak `font-sans`, `font-serif`, `font-ozel` utility sınıflarını üretir.

Kullanım:

```tsx
<h1 className="font-serif text-4xl font-bold">Başlık</h1>
<p className="font-sans text-base">Gövde metni</p>
```

CSS değişkeni yaklaşımı, aynı font tanımını CSS Modules ya da inline style içinde de kullanmana olanak tanır:

```tsx
<p style={{ fontFamily: "var(--font-sans)" }}>Metin</p>
```

## Metadata API

Next.js App Router'da Metadata API, `<head>` içindeki tüm meta etiketlerini yönetmenin standart yolu. Statik ve dinamik olmak üzere iki biçimi var.

### Statik Metadata

```tsx
// app/page.tsx ya da herhangi bir layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skillcamp — Yazılım Öğrenme Platformu",
  description: "Next.js, React ve modern web geliştirme kurslarıyla kariyerine yön ver.",
  keywords: ["nextjs", "react", "web geliştirme", "yazılım kursu"],
  authors: [{ name: "Skillcamp Ekibi" }],
  creator: "Skillcamp",
};

export default function Anasayfa() {
  return <main>{/* içerik */}</main>;
}
```

### Dinamik Metadata

Parametreye bağlı sayfalarda (blog yazısı, ürün sayfası) metadata'yı sunucu tarafında oluşturmak için `generateMetadata` fonksiyonunu kullanırsın:

```tsx
// app/blog/[slug]/page.tsx
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// Metadata üretimi — sunucuda çalışır
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // API'dan yazı verisini çek
  const yazi = await fetch(`https://api.ornek.com/blog/${slug}`).then((r) =>
    r.json()
  );

  return {
    title: `${yazi.baslik} — Skillcamp Blog`,
    description: yazi.ozet,
    openGraph: {
      title: yazi.baslik,
      description: yazi.ozet,
      images: [
        {
          url: yazi.kapakGorseli,
          width: 1200,
          height: 630,
          alt: yazi.baslik,
        },
      ],
    },
  };
}

export default async function BlogYazisi({ params }: Props) {
  const { slug } = await params;
  const yazi = await fetch(`https://api.ornek.com/blog/${slug}`).then((r) =>
    r.json()
  );

  return (
    <article>
      <h1>{yazi.baslik}</h1>
      <div dangerouslySetInnerHTML={{ __html: yazi.icerik }} />
    </article>
  );
}
```

Next.js, `generateMetadata` ve sayfa bileşeninin aynı `fetch` çağrısını tekrar tekrar yapmaması için bu istekleri otomatik olarak **deduplication** yaparak önbelleğe alır.

### Open Graph ve Twitter/X Kartları

```tsx
// app/layout.tsx — site geneli OG ayarları
import type { Metadata } from "next";

export const metadata: Metadata = {
  // metadataBase — göreceli URL'leri mutlak URL'ye dönüştürür
  // OG görselleri için zorunlu
  metadataBase: new URL("https://skillcamp.dev"),

  title: {
    // Template sayfa başlıklarına otomatik eklenir
    template: "%s | Skillcamp",
    default: "Skillcamp — Yazılım Öğrenme Platformu",
  },

  description: "Next.js, React ve modern web teknolojilerini öğren.",

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://skillcamp.dev",
    siteName: "Skillcamp",
    title: "Skillcamp — Yazılım Öğrenme Platformu",
    description: "Next.js, React ve modern web teknolojilerini öğren.",
    images: [
      {
        url: "/og-gorsel.png", // metadataBase ile https://skillcamp.dev/og-gorsel.png olur
        width: 1200,
        height: 630,
        alt: "Skillcamp Platformu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@skillcamp",
    creator: "@skillcamp",
    title: "Skillcamp — Yazılım Öğrenme Platformu",
    description: "Next.js, React ve modern web teknolojilerini öğren.",
    images: ["/og-gorsel.png"],
  },
};
```

Alt sayfalardaki `metadata` nesnesi, `layout.tsx`'teki değerleri **birleştirir (merge)**. `title.template` tanımlandıysa, alt sayfa `title: "Next.js 16"` derse tarayıcı sekmesinde `"Next.js 16 | Skillcamp"` görünür.

### Favicon ve Diğer Simgeler

Next.js, `app` klasöründeki özel adlandırılmış dosyaları otomatik olarak tanır:

```
app/
  favicon.ico          → /favicon.ico
  icon.png             → /icon.png (veya .jpg, .svg)
  apple-icon.png       → Apple touch icon
  opengraph-image.png  → OG görseli (statik)
  twitter-image.png    → Twitter görseli (statik)
```

Dinamik OG görseli oluşturmak için `opengraph-image.tsx` dosyası da oluşturabilirsin:

```tsx
// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgGorsel({
  params,
}: {
  params: { slug: string };
}) {
  const yazi = await fetch(`https://api.ornek.com/blog/${params.slug}`).then(
    (r) => r.json()
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          padding: "60px",
          backgroundColor: "#0f172a",
          color: "#f8fafc",
        }}
      >
        <p style={{ fontSize: 20, color: "#60a5fa", marginBottom: 16 }}>
          Skillcamp Blog
        </p>
        <h1 style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.2 }}>
          {yazi.baslik}
        </h1>
      </div>
    ),
    size
  );
}
```

### robots.txt ve manifest

```tsx
// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/dashboard/", "/hesap/"],
      },
    ],
    sitemap: "https://skillcamp.dev/sitemap.xml",
  };
}
```

```tsx
// app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Skillcamp",
    short_name: "Skillcamp",
    description: "Yazılım öğrenme platformu",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#2563eb",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
```

Bu iki dosya, Next.js tarafından otomatik olarak `/robots.txt` ve `/manifest.webmanifest` URL'lerinde servis edilir. Elle statik dosya oluşturmana gerek kalmaz.

### sitemap.xml

`app/sitemap.ts` dosyası ile `/sitemap.xml` endpoint'ini programatik olarak üretebilirsin. Arama motorları bu dosyayı kullanarak siteyi tarar.

```tsx
// app/sitemap.ts
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Veritabanından veya CMS'den tüm blog yazılarını çek
  const yazilar = await fetch("https://api.skillcamp.dev/blog").then((r) =>
    r.json()
  );

  const yaziSayfaları: MetadataRoute.Sitemap = yazilar.map(
    (yazi: { slug: string; guncellenmeTarihi: string }) => ({
      url: `https://skillcamp.dev/blog/${yazi.slug}`,
      lastModified: new Date(yazi.guncellenmeTarihi),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  return [
    {
      url: "https://skillcamp.dev",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://skillcamp.dev/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    ...yaziSayfaları,
  ];
}
```

Bu fonksiyon build sırasında çalışır ve `/sitemap.xml` adresinde statik olarak sunulur. Dinamik içerikli büyük sitelerde `generateSitemaps` fonksiyonuyla birden fazla sitemap dosyasına bölebilirsin.

### Tam Örnek: Kurs Sayfası Metadata

```tsx
// app/kurslar/[slug]/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const kurs = await getKurs(slug);

  return {
    title: kurs.baslik,
    description: kurs.kisaAciklama,
    openGraph: {
      title: kurs.baslik,
      description: kurs.kisaAciklama,
      type: "article",
      publishedTime: kurs.yayinTarihi,
      authors: [kurs.egitmenAdi],
      images: [
        {
          url: kurs.kapakGorseli, // metadataBase varsa göreceli olabilir
          width: 1200,
          height: 630,
          alt: `${kurs.baslik} kurs kapağı`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: kurs.baslik,
      description: kurs.kisaAciklama,
      images: [kurs.kapakGorseli],
    },
  };
}

async function getKurs(slug: string) {
  const res = await fetch(`https://api.skillcamp.dev/kurslar/${slug}`, {
    next: { revalidate: 3600 }, // 1 saatte bir yenile
  });

  if (!res.ok) throw new Error("Kurs bulunamadı");
  return res.json();
}

export default async function KursSayfasi({ params }: Props) {
  const { slug } = await params;
  const kurs = await getKurs(slug);

  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      {/* Kurs kapak görseli */}
      <div className="relative mb-8 h-72 w-full overflow-hidden rounded-2xl">
        <Image
          src={kurs.kapakGorseli}
          alt={`${kurs.baslik} kurs kapağı`}
          fill
          sizes="(max-width: 1024px) 100vw, 896px"
          className="object-cover"
          priority // Sayfanın en üstünde, LCP öğesi
        />
      </div>

      <h1 className="mb-4 text-4xl font-bold">{kurs.baslik}</h1>
      <p className="text-lg text-gray-600">{kurs.kisaAciklama}</p>
    </article>
  );
}
```

Bu örnekte hem `<Image>` bileşeni hem de `generateMetadata` aynı API çağrısını yapıyor, ancak Next.js bu istekleri otomatik olarak tekilleştirir (`deduplication`). Aynı URL'ye aynı render sürecinde yapılan `fetch` çağrıları sadece bir kez gerçekleşir.

## Üçüncü Taraf Script'ler: `next/script`

Harici JavaScript dosyalarını (analytics, chat widget, reklam kodu vb.) doğrudan `<script>` etiketiyle eklemek performansı olumsuz etkiler — sayfa yüklenmesini bloke edebilir. `<Script>` bileşeni yükleme stratejisini optimize eder.

### `strategy` Prop

| Strateji | Açıklama | Ne Zaman Kullanılır |
|---|---|---|
| `beforeInteractive` | Sayfa interaktif olmadan önce yüklenir | Kritik polyfill'ler |
| `afterInteractive` | Sayfa interaktif olduktan sonra yüklenir (varsayılan) | Analytics, tag manager |
| `lazyOnload` | Boşta kalan sürede yüklenir | Chat widget, sosyal düğmeler |
| `worker` | Web Worker'da çalışır (deneysel) | Ağır hesaplamalar |

```tsx
// app/layout.tsx
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        {children}

        {/* Google Analytics — sayfa interaktif olduktan sonra yükle */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Intercom chat — boşta kalan sürede yükle */}
        <Script
          src="https://widget.intercom.io/widget/APP_ID"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
```

### `onLoad` ve `onReady` Callbacks

Script yüklendikten sonra bir şey çalıştırman gerekiyorsa `onLoad` veya `onReady` kullanırsın. Bu callback'ler Client Component'ta çalışır:

```tsx
"use client";

import Script from "next/script";

export default function HaritaSection() {
  return (
    <>
      <div id="harita" className="h-64 w-full rounded-xl" />

      <Script
        src="https://maps.googleapis.com/maps/api/js?key=API_KEY"
        strategy="lazyOnload"
        onLoad={() => {
          // Script yüklendi, haritayı başlat
          new window.google.maps.Map(document.getElementById("harita"), {
            center: { lat: 41.01, lng: 28.95 },
            zoom: 12,
          });
        }}
      />
    </>
  );
}
```

Doğrudan `<script>` etiketi yerine `<Script>` kullanmak:
- Aynı script'in birden fazla render'da tekrar yüklenmesini önler
- `strategy` ile yükleme sırasını kontrol etmeni sağlar
- Core Web Vitals skorunu iyileştirir
