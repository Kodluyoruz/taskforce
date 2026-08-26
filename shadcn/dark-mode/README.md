# Dark Mode

Önceki bölümde theming sistemini incelediğinde `globals.css` içinde hem `:root` hem de `.dark` bloğu gördün. Renkler zaten iki ayrı set halinde tanımlanmıştı. Peki bu iki set arasındaki geçiş nasıl tetikleniyor? Kim `html` elementine `.dark` class'ı ekliyor, kim kaldırıyor, kullanıcının tercihi sayfa yenilemeden sonra nasıl korunuyor? Bu topic tam olarak o soruları yanıtlıyor.

---

## CSS Variables Dark Mode Mantığı

Theming topic'inde gördüğün gibi shadcn/ui'nin dark mode sistemi iki CSS bloğuna dayanıyor:

```css
/* globals.css — token'lar iki ayrı set halinde tanımlanmış */
@layer base {
  :root {
    --background: 0 0% 100%;       /* Açık tema: beyaz arka plan */
    --foreground: 224 71.4% 4.1%;  /* Açık tema: koyu metin */
    --primary: 220.9 39.3% 11%;
    /* ... diğer light token'lar */
  }

  .dark {
    --background: 224 71.4% 4.1%; /* Koyu tema: koyu arka plan */
    --foreground: 210 20% 98%;    /* Koyu tema: açık metin */
    --primary: 210 20% 98%;
    /* ... diğer dark token'lar */
  }
}
```

Bu yapının gücü şuradan geliyor: bileşenler token'ları kullanıyor, token değerlerini değil. `Button` bileşeni içinde `bg-primary` yazıyor, `#1e293b` değil. `html` elementine `.dark` class'ı geldiğinde CSS cascade devreye giriyor ve tüm `var(--primary)` referansları `.dark` bloğundaki değerleri okuyor. Tek bir satır bileşen kodu değişmiyor — yalnızca token değerleri değişiyor.

Bu da şu anlama geliyor: dark mode altyapısı CSS seviyesinde tamamen hazır. Geriye sadece doğru zamanda `.dark` class'ını `html` elementine ekleyip kaldıracak bir mekanizma kurmak kalıyor. Next.js projesinde bu iş için `next-themes` kullanılıyor.

---

## next-themes Kurulumu (Next.js)

`next-themes` paketi dark mode yönetimini standart haline getiriyor. Kullanıcı tercihini `localStorage`'a kaydediyor, sayfa yenilemeden sonra da hatırlıyor, sistem temasını takip edebiliyor ve birden fazla sekme arasında senkronizasyon sağlıyor. SSR (Server-Side Rendering) ile uyumlu olacak şekilde tasarlandığından Next.js App Router ile sorunsuz çalışıyor.

**1. Paketi yükle:**

```bash
npm install next-themes
```

**2. ThemeProvider wrapper oluştur:**

shadcn/ui'nin önerdiği yaklaşım, `next-themes`'i doğrudan kullanmak yerine ince bir wrapper bileşen oluşturmak. Bu sayede ileride provider'ı değiştirmen gerekirse yalnızca bu dosyayı düzenliyorsun:

```tsx
// components/theme-provider.tsx
"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

`"use client"` direktifi burada zorunlu. `next-themes` `localStorage` ve `window` gibi browser API'larına erişiyor — bunlar server'da mevcut değil. Bu direktif olmadan Next.js server component olarak değerlendirip hata veriyor.

**3. layout.tsx'e ekle:**

```tsx
// app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

**`suppressHydrationWarning` neden gerekli?**

Next.js'te server ve client arasında HTML içeriği eşleşmezse React bir hydration hatası fırlatır. Sorun şu: server render sırasında kullanıcının sistem teması bilinmiyor. Server `<html>` elementini class'sız render ediyor. Client tarafında `next-themes` `localStorage`'dan ya da `prefers-color-scheme` media query'den temayı okuyup `<html>`'e `class="dark"` ekliyor. Artık server HTML'i ile client HTML'i farklı — React uyarı veriyor.

`suppressHydrationWarning` prop'u bu uyarıyı bastırıyor ve React'e "bu elemandaki attribute farklılıklarını görmezden gel" diyor. Güvenli çünkü söz konusu fark kasıtlı ve beklenen.

**Provider prop'larının anlamı:**

| Prop | Değer | Açıklama |
|------|-------|----------|
| `attribute` | `"class"` | Tema, `html` elementine class olarak uygulanır (`class="dark"`) |
| `defaultTheme` | `"system"` | İlk yüklemede sistem temasını kullanır |
| `enableSystem` | `true` | OS tercihini dinler ve takip eder |
| `disableTransitionOnChange` | — | Tema değişimi sırasında CSS transition'ları geçici olarak kapatır, renk geçişinin kademeli değil anlık olmasını sağlar |

---

## Theme Toggle Component

Kullanıcının temayı manuel değiştirebilmesi için bir toggle butonu gerekiyor. `next-themes` bunun için `useTheme` hook'unu sunuyor.

**useTheme hook'unun döndürdüğü değerler:**

- `theme`: Şu anda seçili tema (`"light"`, `"dark"` veya `"system"`)
- `setTheme(name)`: Temayı değiştirir ve `localStorage`'a kaydeder
- `resolvedTheme`: Sistem teması aktifken gerçekte hangi temanın geçerli olduğu (`"light"` veya `"dark"`)
- `systemTheme`: Kullanıcının OS düzeyindeki tema tercihi

Temel bir toggle için `theme` ve `setTheme` yeterli:

```tsx
// components/theme-toggle.tsx
"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* Tailwind dark: prefix ile sun/moon geçişi */}
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Temayı değiştir</span>
    </Button>
  )
}
```

İkon animasyonu Tailwind'in `dark:` prefix'i ile yapılıyor. Light modda `Sun` görünür (`scale-100`), dark modda kaybolur (`scale-0`); `Moon` tam tersi. `transition-all` geçişi yumuşatıyor. `absolute` positioning ile iki ikon üst üste oturuyor, görünen yalnızca biri.

`<span className="sr-only">` screen reader kullanıcıları için butonun ne yaptığını sesli anlatıyor. Yalnızca ikon içeren butonlarda erişilebilirlik açısından bu adım kritik.

Bu bileşeni navbar veya header'ına eklemen yeterli:

```tsx
// app/layout.tsx içindeki header kısmı ya da ayrı bir Navbar bileşeni
import { ThemeToggle } from "@/components/theme-toggle"

// ...
<header className="flex items-center justify-between p-4">
  <span>Logo</span>
  <ThemeToggle />
</header>
```

---

## Sistem Temasına Göre Otomatik Geçiş

`defaultTheme="system"` ve `enableSystem` prop'larını birlikte kullandığında uygulama kullanıcının OS tercihine göre otomatik olarak tema seçiyor. macOS'ta Sistem Tercihleri'nden ya da iOS'ta Ekran Görünümü ayarından dark moda geçen kullanıcı, uygulamana girdiğinde siyah arka planla karşılanıyor.

Bunu aktif etmek için kurulum adımında yaptığımız şey yeterli — `defaultTheme="system"` ve `enableSystem` zaten bu davranışı sağlıyor. Kullanıcı hiç toggle'a dokunmasa bile OS tercihine göre doğru tema yükleniyor.

**`resolvedTheme` ne işe yarar?**

Toggle bileşeninde `theme` yerine `resolvedTheme` kullanmak bazen daha doğru sonuç veriyor. `theme` değeri `"system"` olabilir; bu durumda gerçekte uygulamanın hangi görünümde olduğunu öğrenmek için `resolvedTheme`'e ihtiyaç duyuyorsun.

```tsx
// Sistem temasını da doğru yöneten toggle
const { resolvedTheme, setTheme } = useTheme()

// resolvedTheme her zaman "light" ya da "dark" döner, asla "system" dönmez
onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
```

Bu değişiklikle toggle düğmesi; kullanıcı `"system"` modundayken bile doğru ikonu gösteriyor ve doğru temaya geçiş yapıyor.

---

## Vite Projelerinde Dark Mode

Vite ile oluşturulan projelerde `next-themes` kullanamıyorsun çünkü bu paket Next.js'e özgü. Bunun yerine shadcn/ui dökümantasyonu `localStorage` ve `document.documentElement` üzerinden çalışan el yapımı bir `ThemeProvider` öneriyor.

Yaklaşım şu şekilde çalışıyor: tema değiştirdiğinde `html` elementinden önce `"light"` ve `"dark"` class'larını kaldırıyorsun, sonra seçilen class'ı ekliyorsun. Seçimi `localStorage`'a kaydediyorsun. Sayfa yenilendiğinde `localStorage`'dan okuyup tekrar uyguluyorsun.

```tsx
// components/theme-provider.tsx (Vite versiyonu — next-themes olmadan)
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState>({
  theme: "system",
  setTheme: () => null,
})

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      // OS tercihini sorgula
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches ? "dark" : "light"
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

// useTheme hook'u — next-themes'inkiyle aynı API
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")
  return context
}
```

Bu bileşeni `main.tsx`'te uygulamanı sarmak için:

```tsx
// main.tsx
import { ThemeProvider } from "@/components/theme-provider"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
```

Next.js'teki `next-themes` ile kıyaslandığında bu yaklaşım daha manuel ama temel mantık aynı: HTML elementine class ekle, kaldır, localStorage'a yaz, oku. `useTheme` hook'u API'si de bilinçli olarak `next-themes`'inkiyle uyumlu tutulmuş — böylece `ThemeToggle` bileşenini iki proje arasında kopyalayıp kullanabiliyorsun.

---

## Özet

Dark mode kurulumu üç parçadan oluşuyor: CSS token'ları (zaten hazır, kurulumda geldi), theme provider (next-themes veya Vite için el yapımı), ve toggle bileşeni. Bu üçü bir araya geldiğinde tema seçimi çalışıyor, localStorage'a kaydediliyor, sayfa yenilemeden sonra korunuyor, sistem teması otomatik takip ediliyor.

Bir sonraki adım olarak dropdown'lı daha gelişmiş bir toggle oluşturabilirsin: Light, Dark ve System seçeneklerini bir `DropdownMenu` içinde sunmak kullanıcıya üçüncü bir seçenek daha veriyor — "benim OS tercihime göre hareket et" modunu açıkça seçebiliyor. shadcn/ui'nin kendi dökümantasyon sitesinde kullandığı toggle da bu yapıda.
