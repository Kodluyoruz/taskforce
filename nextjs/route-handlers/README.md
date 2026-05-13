# Route Handlers

Next.js App Router'da API endpoint yazmak için Route Handler'ları kullanırsın. Bir `route.ts` (veya `route.js`) dosyası oluşturup HTTP metotlarını export etmek yeterli.

## Route Handler Nedir?

Bir `app` altında `route.ts` dosyası oluşturduğunda bu dosya bir API endpoint'e dönüşür. Klasik `pages/api` yaklaşımının App Router karşılığıdır, ama çok daha esnek çalışır.

```
app/
  api/
    products/
      route.ts       ← /api/products
      [id]/
        route.ts     ← /api/products/:id
    webhooks/
      stripe/
        route.ts     ← /api/webhooks/stripe
```

Önemli bir kural: Aynı klasörde hem `page.tsx` hem `route.ts` olamaz. İkisi çakışır.

## HTTP Metotları

Bir `route.ts` dosyasından GET, POST, PUT, PATCH, DELETE, HEAD ve OPTIONS export edebilirsin:

```ts
// app/api/products/route.ts

import { NextRequest, NextResponse } from 'next/server';

// GET /api/products
export async function GET(request: NextRequest) {
  const products = await fetchProducts();
  return NextResponse.json(products);
}

// POST /api/products
export async function POST(request: NextRequest) {
  const body = await request.json();
  const product = await createProduct(body);
  return NextResponse.json(product, { status: 201 });
}
```

Export edilmeyen metotlar otomatik 405 Method Not Allowed döner.

## `NextRequest` ve `NextResponse`

`NextRequest`, Web Standardı `Request`'i genişletir. URL, cookie ve header'lara kolayca erişebilirsin:

```ts
// URL parametresi okuma
const url = new URL(request.url);
const page = url.searchParams.get('page') ?? '1';
const sort = url.searchParams.get('sort') ?? 'newest';

// Header okuma
const authorization = request.headers.get('authorization');
const contentType = request.headers.get('content-type');
```

`NextResponse` ile response header'ı ve status kodunu ayarlarsın:

```ts
// Özel header ve status kodu
return NextResponse.json(
  { error: 'Kayıt bulunamadı' },
  {
    status: 404,
    headers: {
      'X-Custom-Header': 'value',
    },
  }
);
```

## Request Body Okuma

```ts
// JSON body
const body = await request.json();

// Form data
const formData = await request.formData();
const name = formData.get('name') as string;

// Ham metin
const text = await request.text();

// Webhook'lar için ham binary
const buffer = await request.arrayBuffer();
```

## GET ile Ürün Listesi Döndürme

```ts
// app/api/products/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const page = Number(searchParams.get('page') ?? '1');
  const limit = Number(searchParams.get('limit') ?? '20');
  const category = searchParams.get('category');

  const products = await db.product.findMany({
    where: category ? { category } : undefined,
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { createdAt: 'desc' },
  });

  const total = await db.product.count({
    where: category ? { category } : undefined,
  });

  return NextResponse.json({
    data: products,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
}
```

## POST ile Yeni Kayıt Oluşturma

```ts
// app/api/products/route.ts (devamı)

import { z } from 'zod';

const CreateProductSchema = z.object({
  name: z.string().min(1, 'İsim zorunlu'),
  price: z.number().positive('Fiyat sıfırdan büyük olmalı'),
  category: z.string().min(1, 'Kategori zorunlu'),
  stock: z.number().int().min(0).default(0),
});

export async function POST(request: NextRequest) {
  // Auth kontrolü
  const token = request.headers.get('authorization')?.replace('Bearer ', '');
  if (!token) {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 });
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Geçersiz JSON' }, { status: 400 });
  }

  // Zod ile doğrulama
  const result = CreateProductSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: 'Doğrulama hatası', details: result.error.flatten() },
      { status: 422 }
    );
  }

  const product = await db.product.create({
    data: result.data,
  });

  return NextResponse.json(product, { status: 201 });
}
```

## Dinamik Route Handler

`params` async olduğunu unutma:

```ts
// app/api/products/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server';

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, { params }: RouteContext) {
  // params artık async
  const { id } = await params;

  const product = await db.product.findUnique({ where: { id } });

  if (!product) {
    return NextResponse.json({ error: 'Ürün bulunamadı' }, { status: 404 });
  }

  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;
  const body = await request.json();

  const product = await db.product.update({
    where: { id },
    data: body,
  });

  return NextResponse.json(product);
}

export async function DELETE(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  await db.product.delete({ where: { id } });

  return new NextResponse(null, { status: 204 });
}
```

## Cookie ve Header Okuma

`next/headers` paketinden `cookies()` ve `headers()` fonksiyonlarını içe aktarabilirsin:

```ts
import { cookies, headers } from 'next/headers';

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('session')?.value;

  const headersList = await headers();
  const userAgent = headersList.get('user-agent');

  // ...
}
```

## Webhook Handler (Ham Body Okuma)

Stripe gibi servisler imza doğrulaması için ham request body'ye ihtiyaç duyar. `request.json()` değil, `request.text()` veya `request.arrayBuffer()` kullanman gerekir:

```ts
// app/api/webhooks/stripe/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  // İmza doğrulaması için ham body gerekiyor
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'İmza eksik' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    // Stripe imzayı ham body ile doğrular
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json({ error: 'Geçersiz imza' }, { status: 400 });
  }

  // Event tipine göre işlem
  switch (event.type) {
    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      await handlePaymentSuccess(paymentIntent);
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      await handleSubscriptionCancelled(subscription);
      break;
    }
  }

  // Stripe 200 bekler, yoksa eventi tekrar gönderir
  return NextResponse.json({ received: true });
}
```

## CORS Header Ayarlama

Farklı bir origin'den istek gelecekse CORS header'larını manuel eklemelisin:

```ts
// app/api/products/route.ts

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://myapp.com',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Preflight isteğini karşıla
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(request: NextRequest) {
  const products = await fetchProducts();

  return NextResponse.json(products, { headers: corsHeaders });
}
```

## Statik vs Dinamik Route Handler

`GET` metodu, içinde dinamik bir işlem (cookie, header okuma, request kullanımı) yoksa Next.js tarafından build anında statik olarak önbelleğe alınabilir. `POST` ve diğer mutasyon metotları her zaman dinamiktir.

```ts
// Bu GET dinamik olur — request.url kullanılıyor
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  // ...
}

// Bu GET statik kalabilir — dışarıdan veri çekiyor ama request yok
export async function GET() {
  const data = await fetch('https://api.example.com/data');
  return NextResponse.json(await data.json());
}
```

## Route Handler mı, Server Action mı?

İkisi de sunucu tarafında çalışır ama farklı durumlara uygundur:

| Durum | Tercih |
|---|---|
| Form submit, buton tıklaması | Server Action |
| Harici servis webhook | Route Handler |
| Mobil uygulama veya üçüncü taraf API istemcisi | Route Handler |
| Dosya yükleme | Route Handler |
| Next.js içindeki mutation işlemleri | Server Action |

Route Handler, Next.js dışından (mobil app, başka backend, harici servis) gelen istekler için tercih edilir. Aynı Next.js uygulaması içindeki form ve buton işlemleri için Server Action daha az kod gerektirir.
