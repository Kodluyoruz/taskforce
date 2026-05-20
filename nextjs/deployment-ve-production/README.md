# Deployment ve Production

## Production Build

Uygulamayı canlıya almadan önce production build alırsın:

```bash
npm run build
```

Bu komut `.next/` klasörünü oluşturur. Build çıktısında hangi sayfaların statik, hangilerinin dinamik olduğunu görebilirsin:

```
Route (app)                     Size    First Load JS
┌ ○ /                           142 B   87.2 kB
├ ○ /about                      142 B   87.2 kB
├ ● /blog/[slug]                2.1 kB  91.5 kB
├ ƒ /dashboard                  1.8 kB  89.0 kB
└ ƒ /api/users                  0 B     0 B

○ Static    ● SSG/ISR    ƒ Dynamic (SSR)
```

**Telemetri kapatma:** Next.js varsayılan olarak anonim kullanım verisi gönderir. Production build'lerde bunu kapatmak için:

```bash
NEXT_TELEMETRY_DISABLED=1 npm run build
```

Ya da `.env.local`'a ekle:

```bash
NEXT_TELEMETRY_DISABLED=1
```

## Vercel'e Deploy

Vercel, Next.js'i geliştiren şirket. Bu nedenle Next.js'in her özelliğini en iyi şekilde destekler: Edge Functions, ISR, Image Optimization, Server Actions — hepsi sıfır konfigürasyonla çalışır.

### CLI ile Deploy

```bash
# Vercel CLI'ı yükle
npm i -g vercel

# İlk kez deploy
vercel

# Production'a deploy
vercel --prod
```

### Environment Variables

Vercel dashboard'da **Settings → Environment Variables** bölümünden eklersin. Development, Preview ve Production ortamları için ayrı değerler tanımlayabilirsin.

```bash
# Lokal ortamda Vercel'in env variable'larını kullanmak için:
vercel env pull .env.local
```

### Preview Deployments

Her pull request veya push, otomatik olarak ayrı bir URL'e deploy edilir. Test için takım arkadaşına link gönderebilirsin, değişiklikler production'ı etkilemez.

### Vercel Analytics ve Speed Insights

```bash
npm install @vercel/analytics @vercel/speed-insights
```

```tsx
// app/layout.tsx
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

## Self-Hosting: Node.js Sunucusu

Kendi sunucunda çalıştırmak istersen:

```bash
npm run build
npm run start
```

`next start` varsayılan olarak 3000 portunda dinler. Port değiştirmek için:

```bash
npm run start -- -p 8080
```

Production'da bir process manager kullanmak istersen PM2 yaygın tercih:

```bash
npm install -g pm2
pm2 start npm --name "my-app" -- start
pm2 save
pm2 startup
```

## Docker ile Deployment

Docker için önce `next.config.ts`'e `output: 'standalone'` eklemen gerekiyor. Bu ayar `.next/standalone/` altında bağımsız çalışabilen minimal bir build üretir — `node_modules` klasörünün tamamına ihtiyaç kalmaz, image boyutu küçülür.

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

export default nextConfig;
```

### Multi-Stage Dockerfile

```dockerfile
# Dockerfile

# --- Bağımlılık katmanı ---
FROM node:22-alpine AS deps
WORKDIR /app

# Önce sadece package dosyalarını kopyala (cache optimizasyonu)
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# --- Build katmanı ---
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build sırasında gerekli env variable'lar
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# --- Production katmanı ---
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Güvenlik için root olmayan kullanıcı oluştur
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Standalone build'den sadece gerekli dosyaları al
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Dosyaların sahibini ayarla
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

Build ve çalıştırma:

```bash
docker build -t my-nextjs-app .
docker run -p 3000:3000 --env-file .env.production my-nextjs-app
```

## Statik Export

Sunucu gerektirmeyen tamamen statik bir site üretmek istersen:

```ts
// next.config.ts
const nextConfig: NextConfig = {
  output: "export",
  // Statik export'ta Image Optimization desteklenmez
  // Harici bir servis kullanacaksan:
  images: {
    unoptimized: true,
  },
};
```

```bash
npm run build
# out/ klasörü oluşur — herhangi bir statik hosting'e yüklenebilir
```

**Kısıtlamalar:** `output: 'export'` ile birkaç özellik çalışmaz:
- Server Actions
- Route Handlers (sadece GET desteklenir, `dynamic = 'force-static'` ile)
- Middleware / proxy.ts
- Image Optimization (Next.js built-in)
- Cookies ve Headers okuma (dinamik)

Tamamen statik içerik için idealdir — dokümantasyon siteleri, blog gibi.

## proxy.ts — Next.js 16 Yeniliği

Next.js 16 ile `middleware.ts`'in yerini `proxy.ts` aldı. En büyük değişiklik runtime: `proxy.ts` Node.js runtime'da çalışıyor. Eski middleware Edge Runtime'a kısıtlıydı; native Node.js modülleri, tam dosya sistemi erişimi veya ağır kütüphaneler kullanılamazdı.

`proxy.ts` sayesinde artık şunları yapabilirsin:
- Tam Node.js API erişimi
- `crypto`, `fs` gibi native modüller
- Büyük bağımlılıklar (database client, heavy parsing)
- Ağ sınırını net tanımlama: bu dosya ile uygulaman dış dünyayla konuşur

```ts
// proxy.ts
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Güvenlik başlıkları ekle
  const response = NextResponse.next();

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  // Bot koruması: user-agent kontrolü
  const userAgent = req.headers.get("user-agent") ?? "";
  const knownBots = ["Scrapy", "python-requests", "curl"];
  if (knownBots.some((bot) => userAgent.includes(bot))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // Rate limiting için IP tabanlı kontrol
  // Node.js runtime'da Redis veya başka bir store kullanabilirsin
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const isRateLimited = await checkRateLimit(ip);
  if (isRateLimited) {
    return new NextResponse("Too Many Requests", { status: 429 });
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
```

## Production Checklist ve `next.config.ts` Ayarları

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "X-Powered-By: Next.js" header'ını kaldır — bilgi ifşasını azalt
  poweredByHeader: false,

  // Gzip/Brotli sıkıştırma — Vercel'de otomatik, self-host'ta gerekebilir
  compress: true,

  // Standalone build (Docker için)
  output: "standalone",

  // İzin verilen resim domainleri
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.example.com",
        pathname: "/images/**",
      },
    ],
  },

  // PPR (experimental)
  experimental: {
    ppr: "incremental",
    authInterrupts: true,
  },

  // Güvenlik headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'", // inline script gerekiyorsa
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https://cdn.example.com",
              "connect-src 'self' https://api.example.com",
            ].join("; "),
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### Sentry Entegrasyonu

Hata takibi için Sentry production'da standart tercih:

```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

Wizard gerekli dosyaları (`sentry.client.config.ts`, `sentry.server.config.ts`, `instrumentation.ts`) otomatik oluşturur. `SENTRY_DSN` environment variable'ını Vercel veya sunucuna eklemen yeterli.

### Environment Variable Kontrolü

Build öncesi gerekli variable'ların mevcut olduğunu doğrulamak için:

```ts
// lib/env.ts
function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(
      `Eksik environment variable: ${key}\n.env.local dosyanı kontrol et.`
    );
  }
  return value;
}

export const env = {
  databaseUrl: getEnv("DATABASE_URL"),
  authSecret: getEnv("AUTH_SECRET"),
  sentryDsn: getEnv("SENTRY_DSN"),
};
```

Bu dosyayı uygulama başlangıcında import ettiğinde eksik variable'lar deploy edilmeden önce ortaya çıkar.

## Deployment Özeti

| Platform | Avantaj | Ne Zaman Tercih Et |
|----------|---------|-------------------|
| **Vercel** | Sıfır config, tüm Next.js özellikleri | Hız ve kolaylık öncelikli |
| **Node.js + PM2** | Tam kontrol, mevcut sunucu | Kendi infra'n varsa |
| **Docker** | Taşınabilirlik, her ortamda aynı | Kubernetes, cloud-agnostic |
| **Statik Export** | Herhangi bir CDN/hosting | Server özelliği gerekmiyorsa |
