# Önbellekleme ve Yeniden Doğrulama

Bir sayfanın her istekte veritabanına gitmesi gerekmeyebilir. Önbellekleme, aynı veriyi tekrar tekrar hesaplamak yerine saklayıp hızlıca sunmana olanak verir. Yeniden doğrulama ise bu önbelleğin ne zaman güncelleneceğini kontrol eder.

Next.js 16, önbellekleme için yeni bir model getirdi: `use cache` direktifi.

## Next.js 16: `use cache` Direktifi

`'use cache'` direktifi, bir dosyayı, fonksiyonu veya bileşeni önbelleğe almak için kullanılır. Server Component'lerde, async fonksiyonlarda ve page/layout dosyalarında çalışır.

### Dosya Düzeyinde Kullanım

Dosyanın en üstüne `'use cache'` yazarsan tüm export'lar önbelleğe alınır:

```tsx
// app/blog/page.tsx
'use cache';

import { fetchPosts } from '@/lib/data';

export default async function BlogPage() {
  // Bu bileşen ve içindeki veri çekme işlemi önbelleğe alınır
  const posts = await fetchPosts();

  return (
    <main>
      <h1>Blog</h1>
      {posts.map((post) => (
        <article key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </main>
  );
}
```

### Fonksiyon Düzeyinde Kullanım

Sadece belirli bir fonksiyonu önbelleğe almak istersen direktifi o fonksiyon içine yazarsın:

```tsx
// lib/data.ts

async function fetchFeaturedPosts() {
  'use cache'; // sadece bu fonksiyon önbelleğe alınır

  const response = await fetch('https://api.example.com/posts?featured=true');
  return response.json();
}
```

## `cacheTag()` ile Etiket Tabanlı Önbellekleme

`cacheTag()`, önbelleğe bir etiket bağlar. Sonradan `revalidateTag()` çağırınca o etikete sahip tüm önbellek girişleri temizlenir.

```tsx
// app/blog/[slug]/page.tsx
'use cache';

import { cacheTag } from 'next/cache';
import { fetchPost } from '@/lib/data';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  // Bu sayfa 'blog' ve 'post-{slug}' etiketleriyle önbelleğe alınır
  cacheTag('blog', `post-${slug}`);

  const post = await fetchPost(slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}
```

Artık bir yorum eklendiğinde sadece ilgili yazının önbelleğini temizleyebilirsin:

```ts
// app/actions/comment.ts
'use server';

import { revalidateTag } from 'next/cache';
import { db } from '@/lib/db';

export async function addComment(postSlug: string, content: string) {
  // Yorumu kaydet
  await db.comment.create({
    data: { postSlug, content },
  });

  // Sadece bu yazıya ait önbelleği temizle
  revalidateTag(`post-${postSlug}`);

  // Tüm blog listelerini de temizle (yorum sayısı değişti)
  revalidateTag('blog');
}
```

## `cacheLife()` ile Önbellek Ömrü Belirleme

`cacheLife()`, önbelleğin ne kadar süre geçerli kalacağını kontrol eder. Üç parametre alır:

- `stale`: İçerik bu süre boyunca stale sayılmadan sunulur
- `revalidate`: Arka planda yenileme ne sıklıkla olacak
- `expire`: Bu süreden sonra önbellek kesinlikle silinir

```tsx
// app/products/page.tsx
'use cache';

import { cacheLife, cacheTag } from 'next/cache';
import { fetchProducts } from '@/lib/data';

export default async function ProductsPage() {
  // 1 saatlik önbellek — stale-while-revalidate mantığı
  cacheLife({
    stale: 60 * 60,        // 1 saat boyunca eski içerik göster
    revalidate: 60 * 60,   // her saatte bir arka planda yenile
    expire: 60 * 60 * 24,  // 24 saat sonra kesinlikle sil
  });

  cacheTag('products');

  const products = await fetchProducts();

  return (
    <section>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </section>
  );
}
```

Next.js'in hazır tanımlı profilleri de var: `'default'`, `'seconds'`, `'minutes'`, `'hours'`, `'days'`, `'weeks'`, `'max'`:

```tsx
export default async function StaticPage() {
  // Hazır profil kullanımı
  cacheLife('hours'); // birkaç saatlik önbellekleme

  const content = await fetchStaticContent();
  return <div>{content}</div>;
}
```

## `updateTag()` — Okuyucu Haberdar Etme

`updateTag()`, Next.js 16 ile gelen yeni bir API'dir. Tag'e bağlı önbelleğin tüketicilerini "bu içerik değişti" diye haberdar eder; önbelleği silmez, sadece bir sinyal gönderir. "Oku ve bildir" semantiği sunar.

```ts
'use server';

import { updateTag } from 'next/cache';

export async function markPostAsUpdated(postSlug: string) {
  // Önbelleği silmez ama dinleyicilere güncelleme sinyali gönderir
  updateTag(`post-${postSlug}`);
}
```

## Klasik Yöntemler: fetch ile Önbellekleme

`use cache` direktifinden önce gelen yöntemler hâlâ geçerli. Özellikle üçüncü taraf API'leri çekerken kullanışlıdır.

### Time-based ISR (Zaman Tabanlı Yeniden Üretim)

```ts
// lib/data.ts

export async function fetchPosts() {
  const response = await fetch('https://api.example.com/posts', {
    next: {
      revalidate: 3600, // 1 saatte bir yeniden doğrula
    },
  });

  if (!response.ok) {
    throw new Error('Yazılar alınamadı');
  }

  return response.json();
}
```

`revalidate: 0` yazarsan önbellekleme olmaz, her seferinde taze veri gelir. `revalidate: false` ise sonsuz önbellek anlamına gelir (manual revalidate gerekir).

### Tag-based Revalidation

```ts
// lib/data.ts

export async function fetchProductsByCategory(category: string) {
  const response = await fetch(
    `https://api.example.com/products?category=${category}`,
    {
      next: {
        tags: ['products', `category-${category}`],
        revalidate: 600, // 10 dakika
      },
    }
  );

  return response.json();
}
```

Ürün güncellendiğinde tag ile temizle:

```ts
// app/actions/product.ts
'use server';

import { revalidateTag } from 'next/cache';

export async function updateProduct(id: string, data: ProductData) {
  await db.product.update({ where: { id }, data });

  // İlgili tag'li önbellekleri temizle
  revalidateTag('products');
  revalidateTag(`product-${id}`);
}
```

### `revalidatePath()` ile Yol Bazlı Temizleme

Belirli bir URL'in önbelleğini tamamen temizlemek istersen:

```ts
'use server';

import { revalidatePath } from 'next/cache';

export async function publishPost(slug: string) {
  await db.post.update({
    where: { slug },
    data: { published: true },
  });

  // Bu path'in önbelleğini temizle
  revalidatePath(`/blog/${slug}`);
  revalidatePath('/blog'); // liste sayfası da güncellensin
}
```

## Önbellek Katmanları

Next.js'te birden fazla önbellek katmanı var:

**Full Route Cache:** Sunucuda üretilen HTML ve RSC payload'u dosya sisteminde saklanır. `use cache` veya `revalidate` ayarları bunu yönetir.

**Data Cache:** `fetch` çağrılarının sonuçları. `revalidate` ve `tags` ile kontrol edilir. Kalıcıdır — deploy'lar arasında da devam eder.

**Router Cache (Client-side):** Kullanıcı sayfalar arası gezinirken daha önce ziyaret ettiği sayfaların RSC payload'u tarayıcıda tutulur. Geri/ileri navigasyonu anlık hale getirir. Oturum bazlı çalışır, sekme kapatılınca silinir.

## Stale-While-Revalidate Mantığı

Bu strateji şu şekilde çalışır: istek geldiğinde önbellekteki eski içerik hemen sunulur, arka planda taze içerik çekilir ve önbellek güncellenir. Bir sonraki istekte yeni içerik hazır olur.

Kullanıcı beklemiyor, sunucu her seferinde veritabanına gitmiyor. İkisi için de kazanç.

```tsx
// app/dashboard/stats/page.tsx
'use cache';

import { cacheLife, cacheTag } from 'next/cache';

export default async function StatsPage() {
  cacheTag('dashboard-stats');
  cacheLife({
    stale: 300,       // 5 dakika eski içerik göster
    revalidate: 300,  // 5 dakikada bir arka planda yenile
    expire: 3600,     // 1 saatten sonra kesinlikle sil
  });

  const stats = await fetchDashboardStats();

  return (
    <div>
      <p>Toplam kullanıcı: {stats.totalUsers}</p>
      <p>Bugünkü sipariş: {stats.todayOrders}</p>
    </div>
  );
}
```

İlk istek geldiğinde veri çekilir ve önbelleğe alınır. Sonraki 5 dakika boyunca aynı içerik anında sunulur, aynı zamanda arka planda güncelleme yapılır.
