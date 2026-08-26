# Link Bileşeni ve Navigasyon

Next.js'te sayfalar arasında geçiş yapmak için HTML'deki klasik `<a>` etiketini kullanabilirsin, ama bu yaklaşım sayfayı tamamen yeniden yükler. `<Link>` bileşeni ise client-side navigation sağlar — yani tarayıcı sayfayı sıfırdan getirmek yerine sadece değişen kısmı render eder. Sonuç olarak geçişler çok daha hızlı hissettirirken JavaScript bundle'ının ortak parçaları yeniden indirilmez.

## `<Link>` Bileşeninin Avantajları

`<a>` etiketiyle gidilen sayfalarda tüm sayfa yenilenir: JavaScript yeniden parse edilir, layout tekrar mount olur, scroll pozisyonu sıfırlanır. `<Link>` ile bu problemlerin hiçbiri yaşanmaz çünkü React tree'nin sadece değişen kısmı güncellenmiş olur.

Ek olarak `<Link>`, hedef sayfayı önceden almak için otomatik **prefetching** yapar. Link bileşeni viewport'a girdiği anda (kullanıcı üzerine tıklamadan önce) Next.js arka planda o sayfanın kodunu ve verisini hazırlamaya başlar. Kullanıcı tıkladığında sayfa neredeyse anında açılır.

```tsx
import Link from "next/link";

export default function Anasayfa() {
  return (
    <nav>
      {/* Temel kullanım */}
      <Link href="/hakkimizda">Hakkımızda</Link>

      {/* href nesne olarak da verilebilir */}
      <Link
        href={{
          pathname: "/blog",
          query: { kategori: "nextjs" },
        }}
      >
        Next.js Yazıları
      </Link>
    </nav>
  );
}
```

## `href` Prop

`href`, string ya da nesne alabilir:

- **String:** `/hakkimizda`, `/blog/nextjs-16`, `https://ornek.com`
- **Nesne:** `{ pathname, query, hash }` şeklinde yapılandırılmış URL

```tsx
// String href
<Link href="/urunler/42">Ürün Detayı</Link>

// Nesne href — query string otomatik oluşturulur (?id=42&renk=kirmizi)
<Link href={{ pathname: "/urunler/[id]", query: { id: 42, renk: "kirmizi" } }}>
  Kırmızı Ürün
</Link>
```

## `replace`, `scroll` ve `prefetch` Props'ları

### `replace`

Varsayılan davranışta `<Link>` browser history stack'ine yeni bir kayıt ekler; geri tuşuyla önceki sayfaya dönebilirsin. `replace` prop'u bunu devre dışı bırakır ve geçerli kaydın üzerine yazar. Login sonrası kullanıcıyı dashboard'a gönderirken geri tuşuyla login sayfasına döndürmemek istiyorsan bunu kullanabilirsin.

```tsx
<Link href="/dashboard" replace>
  Giriş Yap
</Link>
```

### `scroll`

Sayfa geçişlerinde Next.js varsayılan olarak scroll pozisyonunu en üste alır. Bunu istemiyorsan `scroll={false}` geçebilirsin.

```tsx
<Link href="/blog#yorumlar" scroll={false}>
  Yorumlara Git
</Link>
```

### `prefetch`

Prefetching varsayılan olarak `"auto"` modundadır: link viewport'a girince prefetch başlar. `prefetch={false}` ile tamamen devre dışı bırakabilir ya da `prefetch={true}` ile bileşen mount olur olmaz (viewport'a girmeden) prefetch başlatabilirsin.

```tsx
{/* Prefetching'i kapat — nadiren kullanılan sayfalar için */}
<Link href="/gizlilik-politikasi" prefetch={false}>
  Gizlilik Politikası
</Link>

{/* Hemen prefetch et */}
<Link href="/dashboard" prefetch={true}>
  Dashboard
</Link>
```

## Active Link Tespiti: `usePathname()`

Hangi linkin aktif olduğunu anlamak için `usePathname()` hook'unu kullanırsın. Bu hook Client Component'ta çalışır, bu yüzden dosyanın başına `"use client"` direktifi eklemelisin.

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinkleri = [
  { href: "/", etiket: "Anasayfa" },
  { href: "/blog", etiket: "Blog" },
  { href: "/hakkimizda", etiket: "Hakkımızda" },
  { href: "/iletisim", etiket: "İletişim" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      {navLinkleri.map((link) => {
        // Tam eşleşme ya da alt path kontrolü
        const aktif =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={aktif ? "font-bold text-blue-600" : "text-gray-600"}
            aria-current={aktif ? "page" : undefined}
          >
            {link.etiket}
          </Link>
        );
      })}
    </nav>
  );
}
```

## Programmatic Navigation: `useRouter()`

Kullanıcı etkileşimine (button click, form submit) bağlı yönlendirmeler için `useRouter()` kullanırsın. Bu hook **sadece Client Components'ta** çalışır.

```tsx
"use client";

import { useRouter } from "next/navigation";

export default function SiparisFormu() {
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // ... form işlemleri
    router.push("/siparis-tamamlandi");   // yeni kayıt ekle
    // router.replace("/dashboard");     // mevcut kaydın üstüne yaz
    // router.back();                    // geri git
    // router.forward();                 // ileri git
    // router.refresh();                 // server'dan yeniden fetch et
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* form alanları */}
      <button type="submit">Siparişi Tamamla</button>
    </form>
  );
}
```

### Kullanılabilir Router Metodları

| Metod | Açıklama |
|---|---|
| `router.push(href)` | Yeni sayfaya git, history'ye ekle |
| `router.replace(href)` | Yeni sayfaya git, history'yi değiştir |
| `router.back()` | Bir önceki sayfaya dön |
| `router.forward()` | Bir sonraki sayfaya ilerle |
| `router.refresh()` | Mevcut sayfanın server verisini yenile |
| `router.prefetch(href)` | Belirtilen sayfayı manuel prefetch et |

`useRouter`, Server Components'ta **kullanılamaz**. Server Component'ta yönlendirme gerekiyorsa `redirect()` fonksiyonunu kullanırsın:

```tsx
import { redirect } from "next/navigation";

export default async function KorunanSayfa() {
  const session = await getSession();

  if (!session) {
    redirect("/giris"); // Server Component'ta çalışır
  }

  return <div>Korunan içerik</div>;
}
```

## `useLinkStatus` Hook'u (Next.js 16)

Next.js 16 ile gelen `useLinkStatus`, bir `<Link>`'in prefetch durumunu takip etmeni sağlar. Özellikle prefetch sürüyor ya da navigasyon başladı ama henüz tamamlanmadıysa loading göstergesi sunmak için kullanışlıdır.

Bu hook, `<Link>` bileşeninin **doğrudan çocuğu** olan bir Client Component içinde çağrılmalıdır.

```tsx
"use client";

import Link from "next/link";
import { useLinkStatus } from "next/navigation";

// Link içine konacak iç bileşen
function LinkIcerik({ children }: { children: React.ReactNode }) {
  const { pending } = useLinkStatus();

  return (
    <span>
      {children}
      {/* Navigasyon başladıysa spinner göster */}
      {pending && (
        <span className="ml-2 inline-block h-3 w-3 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}
    </span>
  );
}

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <LinkIcerik>{children}</LinkIcerik>
    </Link>
  );
}
```

`useLinkStatus` özellikle ağır sayfalar veya Server Action tetikleyen navigasyonlarda kullanıcıya anında görsel geri bildirim vermek için idealdir.

## Shallow Routing ile URL Parametrelerini Değiştirme

Sayfayı yeniden render etmeden URL'deki query string'i güncellemek isteyebilirsin. Bunun için `useRouter` ile `router.push` ya da `router.replace` kullanırken `scroll: false` seçeneğini ekleyebilirsin. Next.js App Router'da tam anlamıyla "shallow routing" için `useSearchParams` ve `useRouter` birlikte çalışır.

```tsx
"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

export default function FiltrePaneli() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filtreGuncelle = useCallback(
    (anahtar: string, deger: string) => {
      // Mevcut parametrelerin kopyasını al
      const params = new URLSearchParams(searchParams.toString());
      params.set(anahtar, deger);

      // Sayfayı reload etmeden URL'yi güncelle
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  return (
    <div>
      <button onClick={() => filtreGuncelle("sira", "yeni")}>
        Yeniden Eskiye
      </button>
      <button onClick={() => filtreGuncelle("sira", "populer")}>
        Popülerlik
      </button>
    </div>
  );
}
```

## Prefetching Nasıl Çalışır?

Next.js'in prefetching mantığını şöyle özetleyebiliriz:

1. **Statik rotalar:** `<Link>` viewport'a girince tüm sayfa verisi prefetch edilir.
2. **Dinamik rotalar:** Sadece loading state (loading.tsx) prefetch edilir; asıl veri tıklamada gelir.
3. **`prefetch={true}`:** Bileşen mount olur olmaz prefetch başlar, viewport'a girmesini beklemez.
4. **`prefetch={false}`:** Prefetch hiç yapılmaz, tıklamada sayfa yüklenir.

Prefetch edilen veriler varsayılan olarak **30 saniye** boyunca router cache'de tutulur. Bu süre geçince bir sonraki viewport tetiklemesinde yeniden prefetch yapılır. `router.refresh()` çağrısı cache'i temizler.

Production build'de prefetching aktif olur; development modunda (`next dev`) prefetch genellikle devre dışıdır ya da kısıtlıdır; bu nedenle geliştirme sırasında prefetch davranışını tam olarak gözlemlemek için `next build && next start` çalıştırman gerekir.

## Tam Örnek: Navbar Bileşeni

Aşağıda active link, `useLinkStatus` ve mobil uyumlu bir navbar örneği var:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLinkStatus } from "next/navigation";

const MENU = [
  { href: "/", etiket: "Anasayfa" },
  { href: "/kurslar", etiket: "Kurslar" },
  { href: "/blog", etiket: "Blog" },
  { href: "/hakkimizda", etiket: "Hakkımızda" },
];

function MenuOgesi({ href, etiket }: { href: string; etiket: string }) {
  const pathname = usePathname();
  const { pending } = useLinkStatus();
  const aktif = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <span
      className={[
        "relative px-3 py-2 text-sm font-medium transition-colors",
        aktif ? "text-blue-600" : "text-gray-700 hover:text-blue-500",
        pending ? "opacity-70" : "",
      ].join(" ")}
    >
      {etiket}
      {/* Aktif çizgi göstergesi */}
      {aktif && (
        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-600" />
      )}
      {/* Yükleniyor animasyonu */}
      {pending && !aktif && (
        <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
      )}
    </span>
  );
}

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-5xl items-center gap-1 px-4 py-3">
        <Link href="/" className="mr-auto text-xl font-bold text-blue-700">
          Skillcamp
        </Link>

        {MENU.map((item) => (
          <Link key={item.href} href={item.href}>
            <MenuOgesi href={item.href} etiket={item.etiket} />
          </Link>
        ))}
      </nav>
    </header>
  );
}
```

Bu yapıyla her sayfa geçişinde aktif link görsel olarak işaretlenir, navigasyon süresince `useLinkStatus` sayesinde kullanıcı beklendiğini fark eder.
