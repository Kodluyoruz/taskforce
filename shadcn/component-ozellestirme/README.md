# Component Özelleştirme

shadcn/ui'yi diğer kütüphanelerden ayıran en temel özellik şu: component'lar sana kaynak kodu olarak teslim edilir. Yükledikten sonra `node_modules` içinde bir yerde gizlenmez — doğrudan `components/ui/` altında, senin projenin bir parçası olarak yaşar. Bu fark kulağa küçük görünebilir ama pratikte devrim niteliğinde.

---

## Open Code Özgürlüğü

Geleneksel bir UI kütüphanesi düşün: `react-bootstrap`, `chakra-ui`, `MUI`. Bir button'ın border-radius'unu değiştirmek istediğinde ne yapıyorsun? Seçeneklerin sınırlı:

- Kütüphanenin tema sistemini kullanmak — mümkünse
- `!important` ile Tailwind veya global CSS yazmak
- Component'ı kendi wrapper'ınla sarmak ve prop savaşları vermek
- Stack Overflow'da "how to override MUI styles" araması yapmak

Bu süreç hem zaman alıcı hem kırılgandır. Kütüphane yeni sürüm çıkardığında override'ların bir kısmı bozulabilir. Sürüm notlarını takip etmek zorunda kalırsın; "breaking change" korkusu projeye sinmiş olur.

shadcn/ui bu sorunu başından kesmiş: **kaynak kodun zaten sende**. `components/ui/card.tsx` dosyasını açıp istediğin satırı değiştirirsin. CSS-in-JS specificity savaşlarına girmene gerek yok. `npm` override'ı yazman gerekmiyor. Sadece bir TypeScript dosyasını düzenliyorsun.

Bu yaklaşım shadcn/ui'nin "Open Code" felsefesinin özüdür. Resmi dokümantasyon bu konuda nettir: "Bu bir component kütüphanesi değil. Kendi component kütüphanenizi bu şekilde inşa edersiniz." shadcn/ui sana hazır component değil, başlangıç noktası sunar. Gerisi senin işin.

Pratik sonuç: bir e-ticaret projesinde ürün kartlarının hover'da yukarı kaymasını istiyorsun. Bunu yapmak için üç satır Tailwind class'ı yeterli. Kütüphane API'sine bağımlı değilsin, bir konfigürasyon dosyasını okuman gerekmiyor. Dosyayı açıyorsun, class'ı ekliyorsun, işin bitiyor.

---

## cn() Utility Derinlemesine

shadcn/ui her projede `lib/utils.ts` içinde bir `cn()` fonksiyonu oluşturur. Görünüşte basit:

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Ama bu iki kütüphanenin birleşimi gerçekten önemli bir sorunu çözer.

**clsx** — koşullu class'ları birleştirir. Bir obje, dizi ya da string alır; falsy değerleri (false, null, undefined) görmezden gelir. Koşullu class yazmayı temiz hale getirir.

**tailwind-merge** — Tailwind class'ları arasındaki çakışmaları çözer. Tailwind'de iki padding class aynı anda varsa her ikisi de CSS'e yazılır; ama hangisinin kazandığını DOM sırası değil, CSS specificity belirler. `twMerge` bunu şöyle çözer: aynı "slot"a ait class'lardan sonuncuyu tutar, öncesini atar.

```ts
import { cn } from "@/lib/utils"

// tailwind-merge çakışan class'ları çözer
cn("px-4 py-2", "px-8")
// → "py-2 px-8" (px-4 eziyet, px-8 kazanır)

// clsx koşullu class'ları birleştirir
cn("text-sm", isActive && "font-bold", isError && "text-red-500")
// → isActive + isError ise: "text-sm font-bold text-red-500"

// Obje syntax'ı da çalışır
cn("base-class", {
  "font-bold": isActive,
  "text-red-500": isError,
  "opacity-50": isDisabled,
})

// Dizi karıştırma da mümkün
cn(["px-4", "py-2"], isLarge && "text-lg", { "w-full": isFullWidth })
```

Bu yapı özellikle component'ların `className` prop'unu desteklerken kritik hale gelir. Kullanıcı dışarıdan `className="px-8"` geçirdiğinde, component'ın içindeki `px-4` ile çakışmaması gerekir. `cn()` bu senaryoyu otomatik olarak doğru şekilde yönetir — tailwind-merge doğru sınıfı kazanır, clsx falsy değerleri filtreler.

---

## Variant Genişletme

`cva` ile variant sistemi zaten button topic'inden tanıdık. Şimdi bir adım ileri gidiyoruz: mevcut bir component'a yeni variant'lar ekliyoruz.

Card component'ı shadcn/ui'nin en sık kullanılan yapılarından biri. Kutudan çıktığı haliyle tek bir görünümü var. Bir ürün kataloğu, dashboard ya da içerik sitesi düşündüğünde şu senaryolarla karşılaşırsın:

- Tıklanabilir kartların hover'da görsel feedback vermesi lazım
- Bazı kartların border ile vurgulanması gerekiyor
- Bazı yerler hafif gölge istiyor, bazıları gölge istemez

Bu üç ihtiyacı `variant` sistemiyle yönetmek hem temiz hem tip-güvenli. İşte `components/ui/card.tsx` dosyasını nasıl genişletirsin:

```tsx
// components/ui/card.tsx — mevcut dosyayı düzenle
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  // Tüm variant'larda ortak olan base class'lar
  "rounded-xl border bg-card text-card-foreground",
  {
    variants: {
      variant: {
        default: "shadow",
        // Hover'da yükselme efekti — tıklanabilir kartlar için
        hoverable: "shadow transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer",
        // Belirgin kenar çizgisi, gölge yok — vurgulu içerik kartları için
        bordered: "shadow-none border-2 border-primary/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// HTMLDivElement attribute'larını + variant prop'larını birleştiren interface
interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

// React 19: ref doğrudan prop olarak geliyor, forwardRef wrapper'a gerek yok
function Card({ className, variant, ...props }: CardProps) {
  return (
    <div
      // cardVariants variant'ı Tailwind class'larına dönüştürür
      // cn() dışarıdan gelen className ile birleştirir ve çakışmaları çözer
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  )
}
Card.displayName = "Card"

export { Card, cardVariants }

// Kullanım:
// <Card>Normal kart</Card>
// <Card variant="hoverable">Hover efektli kart</Card>
// <Card variant="bordered">Kenarlıklı kart</Card>
// <Card variant="hoverable" className="p-6">Ekstra padding ile</Card>
```

TypeScript burada gerçekten yardımcı oluyor. `VariantProps<typeof cardVariants>` sayesinde `variant` prop'u otomatik olarak tip-güvenli hale gelir. Geçersiz bir değer yazarsan editor anında uyarır.

`cardVariants`'ı ayrıca export etmek de bilinçli bir karar. Başka component'lar ya da storybook setup'ı bu fonksiyonu import ederek mevcut variant değerlerini keşfedebilir.

---

## Wrapper Component vs Doğrudan Düzenleme

Her özelleştirme senaryosu aynı yaklaşımı gerektirmez. Doğru stratejiyi seçmek, ileride bakım yükünü belirler.

**Sadece `className` ekleyeceksen → prop yeterli**

En basit senaryo. Bir Button'a belirli bir sayfada ek margin lazımsa, dosyayı düzenlemene gerek yok:

```tsx
<Button className="mt-4 w-full">Kaydet</Button>
```

`cn()` dışarıdan gelen class'ı içerideki class'larla birleştirir. Bu yaklaşım için component dosyasına dokunmak overkill.

**Yeni prop ya da davranış ekleyeceksen → component dosyasını düzenle**

Card örneğinde yaptığımız buydu. `variant` prop'u component'ın API'sine katıldı; bu değişiklik doğrudan `card.tsx` dosyasına işlendi. Özelleştirme projeye özgü, tutarlı kullanım gerekiyor.

**Kaynak component'a dokunmak istemiyorsan → wrapper + re-export pattern**

Bazen shadcn'ın base component'ını koruyarak üzerine katman eklemek isteyebilirsin. Örneğin `AnalyticsCard` gibi spesifik bir component yaratmak:

```tsx
// components/analytics-card.tsx
import { Card, type CardProps } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Base Card'ı extend eden, analytics bağlamına özel wrapper
interface AnalyticsCardProps extends CardProps {
  trend?: "up" | "down" | "neutral"
}

export function AnalyticsCard({ trend, className, ...props }: AnalyticsCardProps) {
  return (
    <Card
      className={cn(
        // Trend durumuna göre ince renk tonu ekle
        trend === "up" && "border-green-200 bg-green-50/30",
        trend === "down" && "border-red-200 bg-red-50/30",
        className
      )}
      {...props}
    />
  )
}
```

Bu pattern'de `Card` base component'ına hiç dokunmuyorsun. `AnalyticsCard` kendi bağlamına özgü prop ve stilleri yönetir; geri kalanı base Card'a devreder.

Hangi yaklaşımı ne zaman seçeceğin konusunda pratik kural: eğer özelleştirme sadece o sayfaya ya da o duruma özgüyse `className` prop yeterli. Özelleştirme birden fazla yerde tekrar edecekse ve yeni prop gerektiriyorsa ya doğrudan düzenle ya da wrapper yaz. Wrapper'ı base component yerine kaynak yönetimi açısından daha temiz buluyorsan — örneğin ekip dışından gelen güncellemeleri kolayca almak istiyorsan — o zaman wrapper pattern daha mantıklı.

---

## Upstream Değişiklikleri Takip Etmek

shadcn/ui'nin en önemli trade-off'u burada: component'lar sende yaşadığı için upstream güncellemeler otomatik gelmiyor. Bu dezavantaj gibi görünebilir ama aslında kontrol avantajı sağlar.

**Upstream farkını görmek**

shadcn CLI'ın `add` komutunun `--diff` flag'i, upstream versiyonla projenin mevcut dosyası arasındaki farkı gösterir:

```bash
# card component'ının upstream ile farkını göster
npx shadcn@latest add card --diff

# button'ı upstream ile karşılaştır
npx shadcn@latest add button --diff
```

Çıktı, upstream'de nelerin değiştiğini satır satır gösterir. Sen de bu değişiklikleri kendi özelleştirmelerinle birleştirip birleştirmeyeceğine karar verirsin.

**Upstream güncellemesi nasıl uygulanır**

Diyelim ki `card.tsx` dosyasını özelleştirdin ve aradan iki ay geçti. shadcn `Card` component'ını güncelledi, accessibility iyileştirmesi yaptı. Şu adımları izle:

1. `npx shadcn@latest add card --diff` ile neyin değiştiğini gör
2. Değişiklikleri bir kenara not et (ya da diff çıktısını bir yere kaydet)
3. `npx shadcn@latest add card` komutunu çalıştır — bu mevcut dosyayı üzerine yazar
4. Kendi özelleştirmelerini (yeni variant'lar, ek prop'lar) tekrar ekle
5. Git ile değişiklikleri incele, her şeyin doğru olduğunu teyit et

Bu süreç zahmetli gibi görünebilir ama pratikte shadcn component'ları sık sık breaking change almaz. Üstelik hangi component'ları ne kadar özelleştirdiğini bildiğin için merge süreci kontrollü olur. Geleneksel kütüphanelerde ise sürüm yükseltmesi tüm uygulamayı kırabilir.

**CHANGELOG takibi**

shadcn/ui'nin GitHub repo'sundaki CHANGELOG dosyasını ve release notlarını takip etmek iyi bir alışkanlık. Kullandığın component'larda önemli bir güncelleme gelirse önceden haberdar olursun. Çoğu güncelleme additive, yani mevcut davranışı bozmaz — yeni prop ya da iyileştirme ekler.

---

## Özet

Component özelleştirme shadcn/ui'nin varoluş sebebidir. Kaynak koduna sahip olmak, `!important` savaşlarını ve kütüphane API'lerine bağımlılığı ortadan kaldırır. `cn()` hem koşullu class yönetimini hem Tailwind çakışmalarını tek fonksiyonla çözer. `cva` ile variant sistemi genişletmek tip-güvenli ve bakımı kolay bir yapı sağlar. Wrapper pattern vs doğrudan düzenleme tercihini bağlama göre yaparken, upstream değişiklikleri `diff` komutu ve CHANGELOG takibiyle yönetebilirsin.
