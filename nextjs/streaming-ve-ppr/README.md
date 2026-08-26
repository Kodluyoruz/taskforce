# Streaming ve Partial Prerendering

## Geleneksel SSR'nin Sorunu

Klasik sunucu taraflı render'da tarayıcı ilk byte'ı ancak tüm sayfa hazırlandıktan sonra alır. Sayfada veriyi 2 saniyede dönen bir bölüm varsa kullanıcı 2 saniye boyunca beyaz ekranda bekler — diğer her şey çoktan hazır olsa bile.

Bu problemi çözmek için HTTP streaming devreye girer. Sunucu HTML'i parça parça gönderir; tarayıcı gelen parçaları almaya başlar ve ekranda görüntüler. Kullanıcı sayfanın bir bölümünü görebilirken diğer bölümler hâlâ yükleniyor olabilir.

## React Suspense ile Streaming

Next.js App Router'da streaming'in temel taşı React `<Suspense>` bileşenidir. Bir bileşeni `<Suspense>` ile sardığında şunu söylüyorsun: "Bu bileşen hazır olana kadar fallback'i göster, o sırada sayfanın geri kalanını render etmeye devam et."

```tsx
// app/blog/[slug]/page.tsx
import { Suspense } from "react";
import { PostContent } from "@/components/PostContent";
import { Comments } from "@/components/Comments";
import { CommentsSkeleton } from "@/components/CommentsSkeleton";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Next.js 16: params async, await ile açıyoruz
  const { slug } = await params;

  return (
    <article>
      {/* Bu bileşen hızlı — veritabanı yerine statik veri */}
      <PostContent slug={slug} />

      {/* Yorumlar yavaş yüklenebilir — Suspense ile izole et */}
      <Suspense fallback={<CommentsSkeleton />}>
        <Comments slug={slug} />
      </Suspense>
    </article>
  );
}
```

```tsx
// components/Comments.tsx
async function Comments({ slug }: { slug: string }) {
  // Bu fetch tamamlanana kadar Suspense fallback gösterilir
  // Sayfa geri kalanı beklemiyor
  const comments = await fetchComments(slug);

  return (
    <section>
      <h2>Yorumlar ({comments.length})</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <strong>{comment.author}</strong>
          <p>{comment.body}</p>
        </div>
      ))}
    </section>
  );
}
```

### `loading.tsx` — Otomatik Suspense Sınırı

Next.js'te bir route segment klasörüne `loading.tsx` koyduğunda, Next.js o sayfanın tamamını otomatik olarak `<Suspense>` içine alır. Sayfa bileşeni veri çekerken `loading.tsx` gösterilir.

```tsx
// app/dashboard/loading.tsx
export default function DashboardLoading() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-4" />
      <div className="h-64 bg-gray-200 rounded" />
    </div>
  );
}
```

Bu yaklaşım en basit olanı; tüm sayfa tek Suspense sınırı. Sayfanın bir kısmı hızlı bir kısmı yavaş yükleniyorsa manuel `<Suspense>` kullanmak daha iyi deneyim verir.

## `after()` — Response Sonrası İşlemler

Next.js 16'nın getirdiği `after()` fonksiyonu, response tarayıcıya gönderildikten sonra çalışacak kodu planlar. Analytics kaydı, log yazma, notification gönderme gibi işlemler için kullanılır — bunları response süresine eklemek istemezsin.

```tsx
// app/blog/[slug]/page.tsx
import { after } from "next/server";
import { Suspense } from "react";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Next.js 16: params async
  const { slug } = await params;
  const post = await getPost(slug);

  // Response gönderildikten sonra view kaydı yap
  // Kullanıcı sayfayı beklemez
  after(async () => {
    await db.post.update({
      where: { slug },
      data: { viewCount: { increment: 1 } },
    });
    await analytics.track("post_view", { slug });
  });

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
      <Suspense fallback={<p>Yorumlar yükleniyor...</p>}>
        <Comments slug={slug} />
      </Suspense>
    </article>
  );
}
```

## Partial Prerendering (PPR)

### PPR Nedir?

PPR, aynı sayfada hem statik hem dinamik içerik barındırmanın bir yolu. Geleneksel yaklaşımda bir sayfa ya tamamen statik (`getStaticProps`) ya da tamamen dinamikti (`getServerSideProps`). PPR bu ikisini birleştiriyor.

Çalışma prensibi şu: build sırasında Next.js sayfanın statik kısmını HTML olarak üretir ve CDN'e yükler. Dinamik kısımlar için `<Suspense>` sınırları yer tutucu olarak bırakılır. İstek geldiğinde statik kabuk anında CDN'den gelir, dinamik "delikler" ise origin sunucudan paralel olarak doldurulur.

### PPR Aktifleştirme

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true, // Tüm uygulama için aç
    // ya da sadece belirli route'lar için:
    // ppr: 'incremental'
  },
};

export default nextConfig;
```

`incremental` modda sadece opt-in ettiğin sayfalar PPR kullanır:

```tsx
// app/products/[id]/page.tsx
export const experimental_ppr = true;

import { Suspense } from "react";
import { ProductDetails } from "@/components/ProductDetails";
import { RecommendedProducts } from "@/components/RecommendedProducts";
import { ProductSkeleton } from "@/components/ProductSkeleton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Next.js 16: params async
  const { id } = await params;
  return (
    <main>
      {/*
        ProductDetails statik: build anında oluşturulur, CDN'den gelir.
        Suspense sınırı = PPR dinamik bölgesi başlangıcı
      */}
      <Suspense fallback={<ProductSkeleton />}>
        {/*
          Bu bileşen cookies() veya headers() kullanıyorsa dinamik olur.
          PPR, bunu statik kabuktan ayırır.
        */}
        <RecommendedProducts productId={id} />
      </Suspense>

      <ProductDetails id={id} />
    </main>
  );
}
```

### PPR + CDN İlişkisi

Statik kabuk CDN edge'inde cache'lenir. İlk byte tarayıcıya milisaniyeler içinde ulaşır. Ardından browser, dinamik `<Suspense>` bölgelerini doldurmak için origin'e paralel istekler yapar. Bu sayede büyük çoğunluğu statik olan bir sayfa için kullanıcı deneyimi SSG kalitesine yaklaşır.

### PPR Ne Zaman Kullanılır?

PPR şu durumlarda değer verir:

- Sayfanın büyük çoğunluğu sabit (ürün açıklaması, blog içeriği, landing page)
- Küçük bir kısmı kullanıcıya göre değişiyor (sepet ikonu, kişiselleştirilmiş öneriler)
- Yüksek trafikli sayfalarda CDN'den yararlanmak istiyorsun

Sayfanın tamamı dinamikse (her istek farklı içerik) PPR anlamsız. Tamamen statikse zaten SSG kullanırsın.

## Rendering Stratejileri Karşılaştırması

| Strateji | Üretim Zamanı | İstek Zamanı | CDN Cache | Dinamik Veri |
|----------|--------------|-------------|-----------|--------------|
| **SSG** | Build | — | Evet | Hayır |
| **ISR** | Build + Interval | Gerekirse rebuild | Evet | Kısmi |
| **SSR** | — | Her istekte | Hayır | Evet |
| **PPR** | Build (statik kabuk) | Dinamik bölgeler | Kısmi | Evet |
| **Streaming** | — | Kademeli HTML | Hayır | Evet |

**SSG:** İçerik değişmiyor veya nadiren değişiyor. Blog, dokümantasyon, landing page.

**ISR:** İçerik değişiyor ama her request için rebuild gerekmez. E-ticaret kategori sayfaları, haber listeleri. `revalidate` ile ne sıklıkta yenileneceğini belirlersin.

**SSR:** Her istekte farklı içerik gerekiyor. Kullanıcıya özel dashboard, arama sonuçları.

**PPR:** Sayfanın çoğu statik, bir kısmı dinamik. Ürün sayfası (açıklama statik, stok durumu dinamik), haber sayfası (içerik statik, yorum sayısı dinamik).

**Streaming:** Uzun süren veri fetch işlemleri olan sayfalar. Yavaş API'lardan beslenen bölümleri izole etmek için.

### PPR ile ISR Farkı

ISR sayfanın tamamını belirli aralıklarla yeniden üretir. Aralarındaki fark şu: ISR'de dinamik veri ancak yeniden build sonrası görünür. PPR'de sayfanın statik kısmı hiç değişmez, dinamik kısım her istekte güncel veri getirir. Birlikte kullanmak da mümkün.

## Suspense Sınırlarını Doğru Yerleştirme

Her async bileşeni ayrı `<Suspense>` ile sarmana gerek yok. Kullanıcı deneyimini düşün:

```tsx
// Fazla granüler — her bileşen ayrı skeleton gösteriyor
// Ekran çok "zıplar"
export default function Page() {
  return (
    <>
      <Suspense fallback={<UserSkeleton />}><UserInfo /></Suspense>
      <Suspense fallback={<StatsSkeleton />}><Stats /></Suspense>
      <Suspense fallback={<ActivitySkeleton />}><RecentActivity /></Suspense>
    </>
  );
}

// Daha iyi — benzer hızda yüklenenler aynı Suspense altında
export default function Page() {
  return (
    <>
      {/* Hızlı veriler — aynı DB sorgusundan geliyor */}
      <Suspense fallback={<HeaderSkeleton />}>
        <UserInfo />
        <Stats />
      </Suspense>

      {/* Yavaş veri — harici API */}
      <Suspense fallback={<ActivitySkeleton />}>
        <RecentActivity />
      </Suspense>
    </>
  );
}
```

Streaming ve PPR, `<Suspense>` sınırlarına dayandığı için bu yerleşim kararları doğrudan kullanıcı deneyimini ve CDN cache verimini etkiler.
