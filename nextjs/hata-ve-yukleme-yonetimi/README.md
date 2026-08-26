# Hata ve Yükleme Yönetimi

Next.js App Router, yükleme durumları ve hata yönetimi için özel dosya konvansiyonları sunar. Bu dosyalar React'ın Suspense ve Error Boundary mekanizmaları üzerine inşa edilmiş; elle boundary eklemene gerek kalmadan çalışır.

## `loading.tsx` — Yükleme Durumu

Bir route segment yüklenirken gösterilecek içeriği `loading.tsx` dosyasına koyarsın. Next.js bu dosyayı otomatik olarak `<Suspense>` ile sarar; `page.tsx` verileri çekerken `loading.tsx` gösterilir.

```tsx
// app/blog/loading.tsx

export default function BlogLoading() {
  return (
    <div className="space-y-6">
      {/* Skeleton UI — yazı kartlarını taklit eden yer tutucu */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-1" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6 mt-1" />
        </div>
      ))}
    </div>
  );
}
```

`loading.tsx` sadece sayfa geçişlerinde değil, ilk yüklemede de devreye girer. Bir layout'un altındaki her route için ayrı `loading.tsx` oluşturabilirsin; böylece her bölümün bağımsız bir yükleme durumu olur.

```
app/
  dashboard/
    loading.tsx         ← /dashboard yüklenirken gösterilir
    page.tsx
    analytics/
      loading.tsx       ← /dashboard/analytics için ayrı skeleton
      page.tsx
```

## `error.tsx` — Hata Sınırı

Bir route segment içinde beklenmeyen bir hata fırlatıldığında `error.tsx` devreye girer. Bu dosya **Client Component olmak zorunda** — çünkü React'ın Error Boundary'si sadece client tarafında çalışır.

```tsx
// app/blog/error.tsx
'use client'; // zorunlu

import { useEffect } from 'react';

type Props = {
  error: Error & { digest?: string }; // digest: sunucuda oluşan hata ID'si
  reset: () => void; // segment'i yeniden render etmeyi dener
};

export default function BlogError({ error, reset }: Props) {
  useEffect(() => {
    // Hata izleme servisine gönder (Sentry vb.)
    console.error('Blog hatası:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-4 py-12">
      <h2 className="text-xl font-semibold">Bir şeyler ters gitti</h2>
      <p className="text-gray-500">
        {error.message || 'İçerik yüklenirken bir hata oluştu.'}
      </p>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Tekrar Dene
      </button>
    </div>
  );
}
```

`reset` fonksiyonu, segment'i yeniden render etmeyi dener — Server Component'leri yeniden çalıştırır. Geçici bir ağ hatası için işe yarar; kalıcı bir sorunsa hata tekrar gösterilir.

`error.digest`, sunucu tarafında oluşan hatayı loglarla eşleştirmen için Next.js'in atadığı benzersiz bir ID'dir. Production'da gerçek hata mesajını kullanıcıya göstermek yerine bu ID'yi gösterebilirsin.

## `app/global-error.tsx` — Kök Layout Hataları

`error.tsx` bir layout içindeki hataları yakalamaz; sadece `page.tsx` ve alt segment hatalarını yakalar. Root layout'ta oluşan bir hatayı yakalamak için `app/global-error.tsx` kullanırsın:

```tsx
// app/global-error.tsx
'use client';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  return (
    // global-error, html ve body dahil tüm root layout'un yerine geçer
    <html lang="tr">
      <body>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1>Uygulama hatası</h1>
            <p>Beklenmeyen bir sorun oluştu.</p>
            <button onClick={reset}>Yeniden Başlat</button>
          </div>
        </div>
      </body>
    </html>
  );
}
```

## `not-found.tsx` — 404 Sayfası

`notFound()` fonksiyonu veya bilinmeyen bir URL'e istek geldiğinde `not-found.tsx` gösterilir. Server Component olabilir.

```tsx
// app/not-found.tsx

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-6 py-24">
      <h1 className="text-6xl font-bold text-gray-200">404</h1>
      <h2 className="text-2xl font-semibold">Sayfa Bulunamadı</h2>
      <p className="text-gray-500">Aradığın sayfa mevcut değil ya da taşınmış olabilir.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
```

Belirli bir kaynağın olmadığını anladığında `notFound()` ile manuel tetikleyebilirsin:

```tsx
// app/blog/[slug]/page.tsx

import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) {
    // Akışı keser, not-found.tsx gösterilir
    notFound();
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}
```

Her route segment'in kendi `not-found.tsx` dosyası olabilir. `app/blog/not-found.tsx` varsa blog altındaki 404'ler orada yakalanır.

## `forbidden.tsx` ve `unauthorized.tsx` (Next.js 15+)

Next.js 15 ile birlikte iki yeni özel dosya geldi: HTTP 401 ve 403 durumları için ayrı sayfalar. Bu özelliği kullanmak için `next.config.ts`'e `authInterrupts` flag'ini eklemelisin:

```ts
// next.config.ts
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
  },
}

export default nextConfig
```

```tsx
// app/unauthorized.tsx

import Link from 'next/link';

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center gap-4 py-16">
      <h1 className="text-2xl font-semibold">Giriş Gerekiyor</h1>
      <p className="text-gray-500">Bu sayfayı görüntülemek için giriş yapman gerekiyor.</p>
      <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded">
        Giriş Yap
      </Link>
    </div>
  );
}
```

```tsx
// app/forbidden.tsx

export default function Forbidden() {
  return (
    <div className="flex flex-col items-center gap-4 py-16">
      <h1 className="text-2xl font-semibold">Erişim Reddedildi</h1>
      <p className="text-gray-500">Bu içeriğe erişim yetkiniz bulunmuyor.</p>
    </div>
  );
}
```

Bu sayfaları tetiklemek için `next/navigation`'dan `unauthorized()` ve `forbidden()` fonksiyonlarını kullanırsın:

```tsx
// app/admin/page.tsx

import { unauthorized, forbidden } from 'next/navigation';
import { auth } from '@/lib/auth';

export default async function AdminPage() {
  const session = await auth();

  if (!session) {
    // Kullanıcı giriş yapmamış → 401
    unauthorized();
  }

  if (session.user.role !== 'admin') {
    // Kullanıcı giriş yapmış ama yetkisi yok → 403
    forbidden();
  }

  return <AdminDashboard />;
}
```

## Beklenen Hatalar: Server Action + `useActionState`

Bazı hatalar beklenebilir: form validasyon hatası, kullanıcının halihazırda var olması, yetersiz stok gibi. Bu tür hatalar için exception fırlatmak yerine Server Action'dan hata nesnesi döndürmek daha temiz bir yaklaşımdır.

```ts
// app/actions/auth.ts
'use server';

import { z } from 'zod';

const RegisterSchema = z.object({
  email: z.string().email('Geçerli bir e-posta gir'),
  password: z.string().min(8, 'Şifre en az 8 karakter olmalı'),
});

type ActionState = {
  error?: string;
  fieldErrors?: Record<string, string[]>;
  success?: boolean;
};

export async function registerUser(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  // Zod ile doğrula
  const result = RegisterSchema.safeParse(raw);

  if (!result.success) {
    return {
      fieldErrors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  // Kullanıcı zaten var mı?
  const existing = await db.user.findUnique({ where: { email } });

  if (existing) {
    return { error: 'Bu e-posta adresi zaten kayıtlı.' };
  }

  await db.user.create({ data: { email, password: await hash(password) } });

  return { success: true };
}
```

Client tarafında `useActionState` ile hatayı yakalarsın:

```tsx
// app/register/page.tsx
'use client';

import { useActionState } from 'react';
import { registerUser } from '@/app/actions/auth';

export default function RegisterPage() {
  const [state, action, isPending] = useActionState(registerUser, {});

  return (
    <form action={action} className="space-y-4">
      {/* Genel hata mesajı */}
      {state.error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700">
          {state.error}
        </div>
      )}

      {state.success && (
        <div className="p-3 bg-green-50 border border-green-200 rounded text-green-700">
          Kayıt başarılı! Giriş yapabilirsin.
        </div>
      )}

      <div>
        <label htmlFor="email">E-posta</label>
        <input id="email" name="email" type="email" />
        {/* Alan bazlı hata */}
        {state.fieldErrors?.email && (
          <p className="text-sm text-red-600 mt-1">
            {state.fieldErrors.email[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="password">Şifre</label>
        <input id="password" name="password" type="password" />
        {state.fieldErrors?.password && (
          <p className="text-sm text-red-600 mt-1">
            {state.fieldErrors.password[0]}
          </p>
        )}
      </div>

      <button type="submit" disabled={isPending}>
        {isPending ? 'Kaydediliyor...' : 'Kayıt Ol'}
      </button>
    </form>
  );
}
```

## `unstable_rethrow()` — Next.js İç Hatalarını Yeniden Fırlat

`notFound()`, `redirect()` gibi Next.js fonksiyonları aslında bir exception fırlatır. Eğer kodu `try/catch` ile sarıyorsan bu exception'ları yakalayıp yutma; `unstable_rethrow()` ile yeniden fırlat:

```tsx
// app/products/[id]/page.tsx

import { unstable_rethrow } from 'next/navigation';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  try {
    const product = await fetchProduct(id);

    if (!product) {
      notFound(); // Bu bir exception fırlatır
    }

    return <ProductDetail product={product} />;
  } catch (error) {
    // Next.js'in kendi exception'larını (notFound, redirect) yeniden fırlat
    unstable_rethrow(error);

    // Gerçek hataları işle
    console.error('Ürün sayfası hatası:', error);
    throw error; // error.tsx'e düşer
  }
}
```

## Beklenen vs Beklenmeyen Hatalar

| Tür | Örnek | Nasıl Yönetilir |
|---|---|---|
| Beklenen (expected) | Validasyon hatası, kaynak bulunamadı | Server Action'dan değer döndür, `useActionState` ile yakala |
| Beklenmeyen (unexpected) | Veritabanı bağlantı hatası, işlenmeyen exception | `error.tsx` ile yakala |
| 404 | Slug bulunamadı | `notFound()` → `not-found.tsx` |
| 401 | Giriş yapılmamış | `unauthorized()` → `unauthorized.tsx` |
| 403 | Yetki yok | `forbidden()` → `forbidden.tsx` |

Beklenen hataları `throw` ile fırlatmak yerine return değeri olarak döndürmek, kullanıcıya anlamlı mesajlar göstermeyi ve UI'ı kontrollü güncellemeyi çok daha kolay kılar.
