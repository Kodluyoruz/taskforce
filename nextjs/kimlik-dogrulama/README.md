# Kimlik Doğrulama

Next.js, kimlik doğrulamayı kutu dışında sağlamaz. Bunun yerine mevcut pattern'leri ve kütüphaneleri kullanırsın. Bu yaklaşım esnek görünse de kimin nereye erişebileceğini, session'ın nasıl saklanacağını ve token'ın nasıl doğrulanacağını tamamen sen kontrol edersin.

Bu konuda en yaygın tercih **Auth.js** (eski adıyla NextAuth.js v5). App Router'a native destek verir, Server Component'larla doğrudan çalışır ve onlarca provider'ı hazır olarak getirir.

## Auth.js (NextAuth.js v5) Kurulumu

### Kurulum

```bash
npm install next-auth@beta
```

`AUTH_SECRET` environment variable zorunludur. Olmadan uygulama başlamaz:

```bash
# .env.local
AUTH_SECRET="rastgele-uzun-bir-string-buraya"
AUTH_GITHUB_ID="github-client-id"
AUTH_GITHUB_SECRET="github-client-secret"
```

Secret üretmek için:

```bash
npx auth secret
```

### `auth.ts` Konfigürasyon Dosyası

Projenin kök dizininde `auth.ts` oluşturursun. Tüm Auth.js konfigürasyonu buraya girer:

```ts
// auth.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Google,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Şifre", type: "password" },
      },
      async authorize(credentials) {
        // Kendi veritabanına karşı doğrulama yap
        const user = await verifyUser(credentials.email, credentials.password);
        if (!user) return null;
        return user;
      },
    }),
  ],
  callbacks: {
    // JWT'ye ek alan eklemek için
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    // Session nesnesini şekillendirmek için
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
});
```

`handlers` objesini route handler olarak dışarı açman gerekiyor:

```ts
// app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth";
export const { GET, POST } = handlers;
```

## Route Koruması: `proxy.ts`

Next.js 16'da `middleware.ts`'in yerini `proxy.ts` aldı. Önemli fark: `proxy.ts` Node.js runtime'da çalışır, Edge Runtime'ın kısıtlamalarına takılmazsın. Tam Node.js API erişimine sahip olursun — bu da veritabanı bağlantısı, bcrypt gibi native modüller veya büyük kütüphaneler kullanman gerektiğinde işini çok kolaylaştırır.

```ts
// proxy.ts
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;

  // Korumalı route'lar için session kontrolü
  const protectedPaths = ["/dashboard", "/profile", "/admin"];
  const isProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (isProtected && !req.auth) {
    // Oturum açık değilse login sayfasına yönlendir
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Admin sayfalarını role göre koru
  if (pathname.startsWith("/admin") && req.auth?.user?.role !== "admin") {
    return NextResponse.redirect(new URL("/403", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // API route'larını ve statik dosyaları atla
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
```

## Server Component'ta Oturum Okuma

```tsx
// app/dashboard/page.tsx
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { forbidden } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  // Oturum yoksa login sayfasına gönder
  if (!session) {
    redirect("/login");
  }

  // Yeterli yetkisi yoksa 403 sayfası göster
  if (session.user.role !== "premium") {
    forbidden(); // Next.js 16'nın yeni helper'ı
  }

  return (
    <div>
      <h1>Merhaba, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
    </div>
  );
}
```

## `forbidden()` ve `unauthorized()` — Next.js 16 Yenilikleri

Next.js 16, `forbidden()` ve `unauthorized()` adında iki yeni helper getirdi. Bunları çağırdığında Next.js otomatik olarak `forbidden.tsx` veya `unauthorized.tsx` dosyasını render eder.

Bu sayfaları aktifleştirmek için `next.config.ts`'e şunu eklemen gerekir:

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
  },
};

export default nextConfig;
```

Ardından özel sayfaları oluşturursun:

```tsx
// app/forbidden.tsx
export default function ForbiddenPage() {
  return (
    <div>
      <h2>Bu sayfaya erişim yetkiniz yok.</h2>
      <a href="/dashboard">Ana sayfaya dön</a>
    </div>
  );
}

// app/unauthorized.tsx
export default function UnauthorizedPage() {
  return (
    <div>
      <h2>Devam etmek için oturum açmanız gerekiyor.</h2>
      <a href="/login">Giriş yap</a>
    </div>
  );
}
```

## `forbidden()` Kullanan Korumalı Route Handler

```ts
// app/api/admin/users/route.ts
import { auth } from "@/auth";
import { forbidden, unauthorized } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();

  // Oturum yoksa 401
  if (!session) {
    unauthorized();
  }

  // Admin değilse 403
  if (session.user.role !== "admin") {
    forbidden();
  }

  // Sadece admin'ler buraya gelir
  const users = await db.user.findMany();
  return NextResponse.json(users);
}
```

## Client Component'ta Oturum Okuma

Client Component'ta `useSession()` hook'unu kullanırsın. Bunun çalışması için uygulamayı `SessionProvider` ile sarmalaman gerekir:

```tsx
// app/layout.tsx
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="tr">
      <body>
        {/* Server'dan session'ı provider'a geç — ekstra istek olmaz */}
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
```

```tsx
// components/UserMenu.tsx
"use client";

import { useSession, signOut } from "next-auth/react";

export function UserMenu() {
  const { data: session, status } = useSession();

  if (status === "loading") return <span>Yükleniyor...</span>;
  if (!session) return <a href="/login">Giriş yap</a>;

  return (
    <div>
      <img src={session.user.image ?? ""} alt="Profil" />
      <span>{session.user.name}</span>
      <button onClick={() => signOut()}>Çıkış yap</button>
    </div>
  );
}
```

## Manuel JWT Yaklaşımı

Auth.js yerine kendi token sisteminizi kurmak istersen `jose` kütüphanesi Edge Runtime ile uyumludur:

```bash
npm install jose
```

```ts
// lib/jwt.ts
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.AUTH_SECRET);

export async function createToken(payload: Record<string, unknown>) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}
```

Cookie'ye token yazmak için Server Action veya Route Handler kullanırsın:

```ts
// app/api/login/route.ts
import { cookies } from "next/headers";
import { createToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await authenticateUser(email, password);
  if (!user) {
    return NextResponse.json({ error: "Geçersiz bilgiler" }, { status: 401 });
  }

  const token = await createToken({ userId: user.id, role: user.role });

  // Güvenli cookie ayarları
  const cookieStore = await cookies();
  cookieStore.set("auth-token", token, {
    httpOnly: true,   // JavaScript erişimi engelle
    secure: true,     // Sadece HTTPS üzerinden gönder
    sameSite: "lax",  // CSRF koruması
    maxAge: 60 * 60 * 24 * 7, // 7 gün
    path: "/",
  });

  return NextResponse.json({ success: true });
}
```

## Güvenlik Best Practice'leri

**Cookie güvenliği:** Token her zaman `httpOnly` cookie'de saklanmalı. `localStorage` kullanma — XSS saldırılarına karşı savunmasız kalırsın.

**HTTPS zorunluluğu:** `secure: true` flag'i production'da cookie'nin sadece HTTPS üzerinden iletilmesini sağlar. Development'ta `NODE_ENV` kontrolü yapabilirsin.

**CSRF koruması:** `sameSite: "strict"` veya `sameSite: "lax"` kullanmak cross-site request'leri büyük ölçüde engeller. Server Action'lar zaten built-in CSRF korumasına sahip.

**Session süresi:** Token'ın bir sona erme süresi olsun. Sonsuz token güvenlik açığı yaratır. `jose` ile `.setExpirationTime("7d")` veya Auth.js'de `session.maxAge` ayarlanabilir.

**Hassas veriyi token'a koyma:** JWT payload şifreli değil, sadece imzalı. İçeriğini herkes `atob()` ile okuyabilir. Role, userId gibi bilgiler sorun değil; şifre, banka bilgisi gibi hassas veriler asla token'a girmez.
