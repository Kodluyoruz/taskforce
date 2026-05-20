# Button ve Input Variants

shadcn/ui'nin güzelliklerinden biri, component'ların görsel çeşitliliklerini — yani **variant**'larını — prop sistemiyle yönetmesidir. Bu topic'te `Button` ve `Input` component'larını variant derinliğinde inceleyeceğiz; kendi variant'larını nasıl ekleyeceğini öğreneceksin ve arkasındaki kütüphane olan `cva`'yı tanıyacaksın.

---

## variant ve size Prop'ları

shadcn/ui `Button` component'ı, kutudan çıktığı gibi altı farklı `variant` ve sekiz farklı `size` ile gelir.

### Variant'lar

| Variant | Ne Zaman Kullanılır |
|---|---|
| `default` | Sayfadaki birincil aksiyon — "Kaydet", "Gönder" gibi tek güçlü CTA |
| `destructive` | Silme, kaldırma, geri alınamaz işlemler |
| `outline` | İkincil aksiyon; sayfayı doldurmadan seçenek sunar |
| `secondary` | `default` kadar güçlü olmayan ama `outline` kadar soluk da olmayan orta yol |
| `ghost` | Menü öğeleri, toolbar ikonları — neredeyse görünmez, hover'da belirginleşir |
| `link` | Tıklanabilir metin bağlantısı görünümü; `<a>` etiketi gibi davranır |

### Size'lar

- `xs` — Ekstra küçük; yoğun listelerde veya inline etiketlerde kullanılır
- `sm` — Tablo içi aksiyonlar, chip'ler
- `default` — Genel kullanım
- `lg` — Hero bölümleri, modal onayları
- `icon` — Yalnızca ikon içerir (kare boyut); metin yoktur
- `icon-xs` — Ekstra küçük ikon butonu
- `icon-sm` — Küçük ikon butonu
- `icon-lg` — Büyük ikon butonu

Tüm variant ve size kombinasyonlarını tek bir component'ta şöyle görebilirsin:

```tsx
import { Button } from "@/components/ui/button"

// Tüm variant ve size seçeneklerini bir arada gösteren örnek
export function ButtonVariantlari() {
  return (
    <div className="flex flex-wrap gap-2">
      {/* 6 farklı variant */}
      <Button variant="default">Default</Button>
      <Button variant="destructive">Sil</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">İkincil</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Bağlantı</Button>

      {/* Size seçenekleri */}
      <Button size="sm">Küçük</Button>
      <Button size="lg">Büyük</Button>

      {/* İkon button — sadece ikon içerir */}
      <Button size="icon"><span>+</span></Button>

      {/* Devre dışı bırakılmış durum */}
      <Button disabled>Devre Dışı</Button>
    </div>
  )
}
```

Bu örnekteki her button, aynı `Button` component'ından türüyor — ama `variant` ve `size` prop'larıyla tamamen farklı görünümler alıyor. İşin sırrı bu prop'ları Tailwind class'larına çeviren `cva` kütüphanesi.

---

## cva (class-variance-authority) Nedir?

`cva` — *Class Variance Authority* — shadcn/ui'nin variant sisteminin temelini oluşturur. Tailwind kullanırken problem şudur: bir component'ın on farklı görünümünü yönetmek için onlarca `if/else` veya ternary ifadesi yazmak gerekir. `cva` bu karmaşıklığı declarative bir API'ye dönüştürür.

### Temel Mantık

```ts
const buttonVariants = cva(
  // 1. Argüman: tüm variant'larda ortak olan base class'lar
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    // 2. Argüman: konfigürasyon nesnesi
    variants: {
      // Her prop adı bir key, her değer bir class dizisi
      variant: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-200 text-gray-900",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4",
      },
    },
    // compoundVariants: birden fazla variant aynı anda aktifken eklenecek class'lar
    compoundVariants: [
      {
        variant: "primary",
        size: "sm",
        class: "font-bold", // sadece primary + sm birlikte olduğunda
      },
    ],
    // defaultVariants: prop verilmediğinde kullanılacak değerler
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)
```

`button.tsx` dosyasını açarsan, shadcn/ui'nin tam olarak bu yapıyı kullandığını görürsün. `buttonVariants` fonksiyonu prop'ları alır, ilgili class string'ini döndürür ve bu string `className` olarak uygulanır.

### compoundVariants Nedir?

`compoundVariants`, iki veya daha fazla variant'ın **aynı anda** aktif olduğu durumlar için ek class'lar tanımlamana olanak verir. Örneğin yalnızca `destructive` variant + `lg` size kombinasyonunda ekstra bir padding istiyorsan `compoundVariants` ile tanımlarsın. Bu sayede her kombinasyon için ayrı variant oluşturmak zorunda kalmazsın.

---

## Yeni Variant Eklemek

shadcn/ui'nin en büyük avantajı — component dosyaları **senin projenin** içinde. `components/ui/button.tsx` dosyasını istediğin gibi değiştirebilirsin.

### "success" Variant Ekleme

Formları doğrulama, kaydetme veya işlem onayları için sık kullanılan yeşil bir button variant'ı ekleyelim.

`components/ui/button.tsx` içindeki `buttonVariants` tanımını bul ve `variant` nesnesine yeni satırı ekle:

```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Mevcut variant'lar — bunlara dokunma
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        // Yeni eklediğimiz variant: başarı durumu için yeşil button
        success: "bg-green-600 text-white shadow hover:bg-green-700",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "h-7 rounded-md px-2 text-xs",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        "icon-xs": "h-7 w-7",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// Kullanım — artık type-safe, autocomplete çalışır:
// <Button variant="success">Kaydet</Button>
// <Button variant="success" size="lg">Onayla ve Devam Et</Button>
```

TypeScript sayesinde `variant="success"` yazdığında editor otomatik tamamlama sunar ve geçersiz bir değer girersen derleme hatası alırsın. `cva`'nın tip çıkarımı tam burada devreye girer.

---

## asChild Pattern

`asChild` prop'u, shadcn/ui'nin en akıllı özelliklerinden biridir — ama ilk bakışta kafa karıştırıcı görünebilir.

### Problem

Bir Next.js uygulamasında `<Link>` component'ını button gibi stillemek istiyorsun. İki seçenek var:

1. `<Link>` üzerine Tailwind class'larını elle yaz — button.tsx değişince senkron bozulur.
2. `<button>` içine `<Link>` koy — iç içe interaktif element, HTML'de geçersiz.

### Çözüm: asChild + Radix Slot

`asChild` prop'u aktifken, `Button` kendi DOM elementini oluşturmaz. Bunun yerine çocuk element'e (örneğin `<Link>`) tüm button stillerini ve davranışını **aktarır**. Bu mekanizma Radix UI'ın `Slot` primitive'i üzerine kuruludur.

```tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavigasyonOrnekleri() {
  return (
    <div className="flex gap-4">
      {/* asChild: button DOM elementi oluşturmaz, stilini Link'e aktarır */}
      {/* Sayfada tek bir <a> etiketi render edilir — semantik olarak doğru */}
      <Button asChild variant="outline">
        <Link href="/profil">Profile Git</Link>
      </Button>

      {/* Farklı bir variant + size ile de kullanabilirsin */}
      <Button asChild variant="default" size="lg">
        <Link href="/dashboard">Dashboard'a Geç</Link>
      </Button>

      {/* Harici bağlantılar için de çalışır */}
      <Button asChild variant="ghost">
        <a href="https://ornek.com" target="_blank" rel="noopener noreferrer">
          Dış Kaynak
        </a>
      </Button>
    </div>
  )
}
```

`asChild`'ı ne zaman kullanmalısın?

- `<Link>` veya `<a>` elementini button gibi stillemek istiyorsan
- Üçüncü parti bir component'ı (örneğin router'ın `NavLink`'i) button görünümüyle kullanmak istiyorsan
- Semantic HTML'i bozmadan iki component'ın davranışını birleştirmek istiyorsan

---

## Input Variants

`Button` ile kıyaslandığında shadcn/ui `Input` component'ı çok daha minimalisttir. Kendi başına herhangi bir `variant` prop'u taşımaz — tasarım gereği tek bir temel stile sahiptir. Bu sizi kısıtlamaz; aksine esneklik sağlar.

### className ile Genişletme

`Input` component'ı, standart HTML `<input>` attribute'larının tamamını kabul eder ve `className` prop'u sayesinde her türlü stil eklenebilir:

```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputOrnekleri() {
  return (
    <div className="flex flex-col gap-4 w-80">
      {/* Temel kullanım */}
      <Input type="text" placeholder="Adınızı girin" />

      {/* Devre dışı input */}
      <Input type="email" placeholder="Email" disabled />

      {/* Hata durumu — className ile kırmızı border ekliyoruz */}
      <div>
        <Label htmlFor="hata-input">Zorunlu Alan</Label>
        <Input
          id="hata-input"
          type="text"
          placeholder="Bu alan zorunlu"
          className="border-red-500 focus-visible:ring-red-500"
          aria-invalid="true"
        />
        <p className="text-sm text-red-500 mt-1">Bu alan boş bırakılamaz.</p>
      </div>

      {/* Büyütülmüş input — padding ve font-size override */}
      <Input
        type="search"
        placeholder="Arama yap..."
        className="h-12 text-base px-4"
      />

      {/* Dosya input'u */}
      <Input type="file" className="cursor-pointer" />
    </div>
  )
}
```

### Prefix / Suffix Pattern — Input Group

Gerçek dünya formlarında input'ların yanında ikon, para birimi sembolü veya aksiyon button'ı görmek gerekir. shadcn/ui bunu doğrudan desteklemez ama `InputGroup` pattern'ı ile kolayca oluşturabilirsin:

```tsx
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

// Prefix ve suffix ile input grubu
export function InputGrupOrnegi() {
  return (
    <div className="flex flex-col gap-4 w-80">
      {/* Prefix ikon — absolute konumlandırma ile */}
      <div className="relative">
        {/* İkonu input'un sol tarafına yerleştiriyoruz */}
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Kullanıcı ara..."
          className="pl-9" // sol padding artırıldı, ikonla çakışma önlendi
        />
      </div>

      {/* Suffix — button ile input yan yana */}
      <div className="flex gap-0">
        <Input
          type="email"
          placeholder="Email adresiniz"
          className="rounded-r-none border-r-0" // sağ köşe ve border kaldırıldı
        />
        <Button className="rounded-l-none" variant="default">
          Abone Ol
        </Button>
      </div>
    </div>
  )
}
```

Bu pattern, shadcn/ui'nin bilerek minimal bıraktığı `Input` component'ını kendi ihtiyaçlarına göre genişletmenin en temiz yoludur. Tailwind'in `flex`, `relative/absolute` ve `rounded` utility'leri ile sınırsız kombinasyon oluşturabilirsin.

### Input'u variant'lı Yapmak İstiyorsan

Projende farklı boyutlarda veya görünümlerde input'lara sürekli ihtiyaç duyuyorsan, tıpkı `Button`'da yaptığın gibi `cva` kullanarak kendi `inputVariants` fonksiyonunu yazabilirsin. `components/ui/input.tsx` dosyasını açıp `className` atamasını `inputVariants({ size, variant })` çağrısıyla değiştirmek yeterlidir.

---

## Özet

Bu topic'te öğrendiklerin:

- `Button` component'ının 6 variant ve 4 size seçeneği ile ne işe yaradığı
- `cva` kütüphanesinin base class + variants + compoundVariants + defaultVariants yapısı
- `button.tsx` dosyasına `success` gibi özel bir variant eklemenin adımları
- `asChild` prop'unun Radix Slot mekanizması sayesinde button stilini başka elementlere nasıl aktardığı
- `Input` component'ının minimal tasarımını `className` ve prefix/suffix pattern'larıyla nasıl genişleteceğin

Bir sonraki adım: bu component'ları gerçek bir form içinde bir araya getirerek React Hook Form ve Zod ile validation entegrasyonunu göreceğiz.
