# İlk Component Ekleme

Kurulumu tamamladın, `components.json` yerli yerinde ve projen shadcn/ui'ı tanıyor. Sıra component eklemeye geldi. Bu topic'te CLI'ın `add` komutunu öğrenecek, eklenen dosyanın içini anlayacak ve iki component'ı birlikte kullanacaksın.

---

## npx shadcn@latest add

`add` komutu, shadcn/ui'ın en çok kullandığın komutu olacak. Adı üstünde: projena component ekler. Arka planda ne yapar? Seçtiğin component'ın kaynak kodunu GitHub'daki shadcn/ui deposundan çeker, `components.json` dosyandaki konfigürasyona göre doğru klasöre yazar.

Temel sözdizimi şu:

```bash
# Tek component ekle
npx shadcn@latest add button

# Birden fazla aynı anda
npx shadcn@latest add button input card badge

# Tüm mevcut component'ları listele (interaktif seçim ekranı açılır)
npx shadcn@latest add
```

Üçüncü forma dikkat et: herhangi bir argüman vermeden çalıştırdığında interaktif bir seçim menüsü açılır. Ok tuşlarıyla gezinip space ile seçebilir, birden fazla component'ı aynı anda işaretleyebilirsin. Hangi component'ların mevcut olduğunu keşfetmek için ideal.

Ayrıca birkaç kullanışlı flag var:

| Flag | Ne yapar? |
|------|-----------|
| `--yes` / `-y` | Onay sorusunu atlar, direkt yazar |
| `--overwrite` / `-o` | Varolan dosyanın üzerine yazar |
| `--all` / `-a` | Mevcut tüm component'ları ekler |
| `--dry-run` | Dosya yazmadan ne yapacağını gösterir |
| `--path <klasör>` | Varsayılan yerine belirttiğin klasöre yazar |

`--dry-run` özellikle faydalı: "Bu komutu çalıştırırsam ne olur?" diye merak ettiğinde dosyalara dokunmadan önizleme yapmanı sağlar.

---

## Eklenen Dosyanın İçi

`npx shadcn@latest add button` komutunu çalıştırdığında `components/ui/button.tsx` dosyası oluşur. Şimdi bu dosyayı açıp ne olduğuna bakalım:

```tsx
// components/ui/button.tsx — "npx shadcn@latest add button" sonrası oluşturulan dosya
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 ...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground ...",
        destructive: "bg-destructive ...",
        outline: "border border-input ...",
        // ... diğer variant'lar
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
Button.displayName = "Button"

export { Button, buttonVariants }
```

Dosyada dört farklı yapı var ve hepsi birbirini tamamlıyor. Teker teker geçelim:

**`cva` — class-variance-authority**

`cva`, Tailwind sınıflarını varyant mantığıyla yönetmek için kullanılan bir kütüphane. `buttonVariants` fonksiyonu aslında bir sınıf üreteci: `variant` ve `size` parametrelerini alıyor, karşılık gelen Tailwind sınıflarını birleştirip döndürüyor. Bu yapı sayesinde "destructive button neden kırmızı?" sorusunun cevabı doğrudan kaynak kodda: `bg-destructive` sınıfı oraya `cva` ile geliyor.

**`buttonVariants` neden ayrıca export ediliyor?**

Button component'ını kendi Link component'ınla veya başka bir element'la birlikte kullanmak istediğinde `buttonVariants` fonksiyonuna doğrudan ihtiyaç duyabilirsin. Örneğin Next.js'te bir `<Link>` elementine button görünümü vermek için `className={buttonVariants({ variant: "outline" })}` yazman yeterli.

**`ref` desteği**

React 19 ile birlikte shadcn/ui, `React.forwardRef` sarmasını bıraktı. React 19'da `ref` artık sıradan bir prop gibi davranıyor — `ButtonHTMLAttributes` içinde otomatik olarak yer aldığından `...props` spread'iyle doğrudan `<Comp>`'a iletiliyor. Form kütüphaneleri veya parent component'lar `<Button>`'a ref geçmek istediğinde herhangi bir ekstra sarma olmadan bunu yapabilir. React 18 kullanan eski projelerde shadcn'ın önceki sürümleri `React.forwardRef` sarması kullanıyordu — her iki yaklaşım da doğru, hangi React sürümüne göre kurulduğuna bağlı.

**`asChild` ve Radix `Slot`**

`asChild` prop'u, component'ın en akıllı özelliği. `asChild={true}` geçtiğinde `<button>` elementi render edilmiyor, onun yerine içindeki ilk child element render edilip Button'ın tüm stilleri o child'a aktarılıyor. Bu işi `@radix-ui/react-slot` paketi hallediyor.

Pratik örnek: Next.js'te `<Link>` bir `<a>` elementi render eder, `<Button>` ise bir `<button>`. İkisini iç içe koyarsan geçersiz HTML olur. `asChild` ile şöyle yazabilirsin:

```tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"

// <a> elementi render edilir, ama Button'ın stilleri taşınır
<Button asChild>
  <Link href="/dashboard">Dashboard'a git</Link>
</Button>
```

**`Button.displayName`**

React DevTools'ta component adının "Button" olarak görünmesini sağlar. Bu satır olmadan DevTools'ta anonim fonksiyon adı veya genel bir isim görünebilir; hata ayıklarken component'ı hızla tanıman güçleşir.

---

## Import ve Kullanım

Component dosyası oluştuktan sonra import etmek için `@` alias'ını kullanıyorsun. Bu alias, `tsconfig.json`'daki `paths` ayarından geliyor ve projenin root'unu işaret ediyor:

```tsx
import { Button } from "@/components/ui/button"
```

Temel prop'lar:

| Prop | Tipler | Varsayılan | Açıklama |
|------|--------|------------|----------|
| `variant` | `"default"` \| `"destructive"` \| `"outline"` \| `"secondary"` \| `"ghost"` \| `"link"` | `"default"` | Görsel stil |
| `size` | `"default"` \| `"xs"` \| `"sm"` \| `"lg"` \| `"icon"` \| `"icon-xs"` \| `"icon-sm"` \| `"icon-lg"` | `"default"` | Boyut |
| `asChild` | `boolean` | `false` | Child element'a stil aktarır |
| `disabled` | `boolean` | `false` | Standart HTML disabled |
| `onClick` | `(e: MouseEvent) => void` | — | Click event handler |

`ButtonProps`, `React.ButtonHTMLAttributes<HTMLButtonElement>`'i extend ettiği için tüm standart HTML `<button>` attribute'larını da geçebilirsin: `type`, `form`, `aria-label`, `data-*` gibi.

Hızlı kullanım örnekleri:

```tsx
// Varsayılan — mavi dolgu
<Button>Kaydet</Button>

// Kırmızı, silme işlemleri için
<Button variant="destructive">Hesabı Sil</Button>

// Kenarlıklı, daha az vurgulu işlemler için
<Button variant="outline">İptal</Button>

// Tamamen transparan, menü öğesi gibi görünür
<Button variant="ghost">Daha Fazla</Button>

// Sadece metin, link gibi görünür
<Button variant="link">Detayları gör</Button>

// Sadece ikon barındırmak için kare boyut
<Button variant="outline" size="icon">
  <SearchIcon />
</Button>

// Devre dışı
<Button disabled>Gönderiliyor...</Button>
```

---

## İlk Gerçek Örnek

Tek component kullanmak güzel, ama gerçek hayatta component'lar bir arada çalışır. İki component'ı birlikte kullanan bir arama formu yazalım. Önce `Input` component'ını ekliyoruz:

```bash
npx shadcn@latest add input
```

Şimdi her ikisini birlikte kullanan bileşen:

```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AramaFormu() {
  return (
    // gap-2 ile iki element arasında boşluk bırakıyoruz
    <div className="flex gap-2">
      {/* max-w-sm ile input'un genişliğini sınırlıyoruz */}
      <Input placeholder="Ara..." className="max-w-sm" />
      <Button>Ara</Button>
    </div>
  )
}
```

Bu component herhangi bir sayfaya şu şekilde eklenir:

```tsx
import { AramaFormu } from "@/components/arama-formu"

export default function Page() {
  return (
    <main className="p-8">
      <AramaFormu />
    </main>
  )
}
```

Formu daha kullanışlı hale getirmek istersen state ve submit ekleyebilirsin:

```tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AramaFormu() {
  // Arama metnini tutan state
  const [sorgu, setSorgu] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Arama işlemini burada gerçekleştir
    console.log("Aranan:", sorgu)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        placeholder="Ara..."
        value={sorgu}
        onChange={(e) => setSorgu(e.target.value)}
        className="max-w-sm"
      />
      {/* sorgu boşken button'ı devre dışı bırak */}
      <Button type="submit" disabled={sorgu.trim() === ""}>
        Ara
      </Button>
    </form>
  )
}
```

`"use client"` direktifini unutma: `useState` gibi hook'lar ve event handler'lar client component gerektirir. Next.js App Router'da dosyaların varsayılanı Server Component olduğundan, interaktif component'ların başına `"use client"` eklenmesi gerekir.

---

## Hangi Component'lar Var?

shadcn/ui, 40'tan fazla component barındırıyor. Hepsini tek tek ezberlemek yerine kategorilere göre tanıman daha verimli:

**Form & Input**
Kullanıcıdan veri almak için kullanılan component'lar: `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `DatePicker`. Bunların büyük bölümü Radix UI primitive'leri üzerine inşa edilmiş.

**Layout & Navigation**
Sayfa yapısını ve gezinmeyi düzenleyen component'lar: `Card`, `Separator`, `Tabs`, `Breadcrumb`, `Pagination`, `NavigationMenu`, `Sidebar`. `Card`, içerik gruplamak için en sık kullanılanlardan biri.

**Overlays & Dialogs**
Sayfanın üstünde açılan katmanlar: `Dialog`, `AlertDialog`, `Sheet`, `Popover`, `Tooltip`, `HoverCard`, `DropdownMenu`, `ContextMenu`. Hepsi Radix UI'ın erişilebilirlik altyapısını kullanır; klavye navigasyonu ve focus yönetimi hazır gelir.

**Feedback**
Kullanıcıya durum bildiren component'lar: `Toast` (veya `Sonner`), `Alert`, `Badge`, `Progress`, `Skeleton`. `Skeleton`, veri yüklenirken placeholder göstermek için idealdir.

**Display**
Veri göstermek ve organize etmek için kullanılan component'lar: `Table`, `Avatar`, `Accordion`, `Collapsible`, `Carousel`, `Chart`. `Table`, filtre ve sıralama gerektiren data-heavy sayfalarda işe yarar.

Component listesinin tamamına `npx shadcn@latest add` komutunu çalıştırarak veya [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components) adresinden ulaşabilirsin.

---

Şu an elinde çalışan bir `Button` ve `Input` var. Projenin `components/ui/` klasörü artık sadece `shadcn@latest add` komutuyla büyümeye hazır. Bir sonraki adımda `Card` ile gerçek bir içerik kartı oluşturacağız ve component composition'ın nasıl çalıştığını göreceğiz.
