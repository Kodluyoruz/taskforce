# Toast ve Sonner

Kullanıcıya bir şeyin olduğunu söylemek gerekiyor — dosya kaydedildi, form gönderildi, bir hata oluştu. Bunu kalıcı bir modal ile yapmak aşırı gürültülü olur; sessizce geçiştirmek ise kullanıcıyı karanlıkta bırakır. Toast bildirimleri tam bu boşluğu doldurur: ekranın köşesinde belirir, birkaç saniye sonra kaybolur ve akışı kesmez.

## Toast Nedir, Neden Sonner?

Toast, kullanıcıya kısa ve geçici bir geri bildirim veren UI pattern'ıdır. "İşlem tamamlandı", "Hata oluştu", "Lütfen bekleyin" — bunlar modal açmayı hak etmeyen ama tamamen görmezden gelinemeyecek mesajlardır. Toast bu dengeyi kurar.

shadcn/ui'ın bu konuda iki farklı dönemi var. Başlangıçta kendi `Toast` component'ı vardı — Radix UI'ın `@radix-ui/react-toast` paketi üzerine inşa edilmişti ve `useToast` hook'u ile kullanılıyordu. Çalışıyordu ama ayrıntılıydı: her kullanımda hook çağırmak, state yönetmek, `ToastProvider` ve `Toaster` ile uğraşmak gerekiyordu.

Sonra shadcn, **Sonner**'ı önerilen çözüm olarak benimsedi. Sonner, Emil Kowalski tarafından yazılmış bağımsız bir kütüphane. Yaklaşımı tamamen farklı: global bir `toast()` fonksiyonu var, onu import edip çağırıyorsun, iş bitiyor. Hook yok, state yok, context geçirmek yok. Dahası, animasyonları son derece başarılı — toast'lar üst üste yığılıp hover'da ayrılıyor, bu da ekrana onlarca toast düştüğünde bile arayüzün düzenli kalmasını sağlıyor.

Shadcn'ın Sonner'ı benimsemesinin nedeni budur: daha basit API, daha iyi animasyonlar, daha az boilerplate.

## Kurulum

shadcn CLI ile tek komutla kurulur:

```bash
npx shadcn@latest add sonner
```

Bu komut `sonner` paketini kurar ve `components/ui/sonner.tsx` dosyasını projeye ekler. Bu dosya, Sonner'ın `Toaster` component'ını shadcn'ın tasarım tokenları ile sarmalayan ince bir wrapper'dır — tema renkleri, border radius ve font ayarları otomatik uyum sağlar.

**Tema senkronizasyonu nasıl çalışır?**

`components/ui/sonner.tsx` dosyasını açarsan şöyle bir kod görürsün:

```tsx
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }: React.ComponentProps<typeof Sonner>) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as "light" | "dark" | "system"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-background ...",
          // shadcn token'larını kullanır
        },
      }}
      {...props}
    />
  )
}
```

Wrapper, `useTheme()` hook'uyla uygulamanın aktif temasını okur ve bunu Sonner'ın kendi `theme` prop'una geçirir. Böylece kullanıcı dark moda geçtiğinde toast'lar da otomatik olarak koyu temaya uyum sağlar — ayrıca bir şey yapman gerekmez. Bu sadece arka planda çalışır; shadcn'ın oluşturduğu wrapper dosyası bu köprüyü kurar.

`"use client"` direktifi wrapper'ın başında zorunludur çünkü `useTheme()` hook'u browser'da çalışan bir React hook'tur.

Kurulumun ardından tek yapılacak şey `<Toaster />` provider'ını kök layout'a eklemek:

```tsx
// app/layout.tsx
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        {children}
        <Toaster /> {/* bir kere koy, her yerden toast() ile kullan */}
      </body>
    </html>
  )
}
```

Bu kadar. `<Toaster />` bir kez layout'a girdi mi, uygulamanın herhangi bir yerinden — herhangi bir component'tan, herhangi bir Server Action callback'inden, herhangi bir event handler'dan — `toast()` fonksiyonunu import edip çağırabilirsin. Sonner global bir kuyruk yönetir, hangi component'tan geldiği önemli değildir.

`<Toaster />` component'ının bazı kullanışlı prop'ları var:

- `position` — toast'ların ekranda nerede görüneceğini belirler. Varsayılan `"bottom-right"`. `"top-center"`, `"top-left"`, `"bottom-left"` gibi seçenekler mevcut.
- `richColors` — success, error, warning ve info tiplerini daha belirgin renklerle gösterir.
- `closeButton` — her toast'a kapatma butonu ekler.
- `expand` — `true` yapıldığında toast'lar baştan açık görünür, yığılmaz.
- `duration` — varsayılan görünme süresini milisaniye cinsinden ayarlar.

## Temel Toast Tipleri

`sonner` paketinden gelen `toast` fonksiyonu altı farklı tipi destekler. Her birinin semantic anlamı farklıdır ve `richColors` prop'u aktifse görsel renk tonu da farklılaşır:

```tsx
"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export function ToastOrnekleri() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toast("Varsayılan bildirim")}>
        Default
      </Button>
      <Button onClick={() => toast.success("Başarıyla kaydedildi!")}>
        Başarı
      </Button>
      <Button variant="destructive" onClick={() => toast.error("Bir hata oluştu")}>
        Hata
      </Button>
      <Button variant="outline" onClick={() => toast.warning("Dikkat!")}>
        Uyarı
      </Button>
    </div>
  )
}
```

Her tipi ne zaman kullanacağın:

- `toast()` — nötr bilgilendirmeler için. "Panoya kopyalandı", "Filtreler uygulandı" gibi işlem onayları.
- `toast.success()` — kullanıcının başarıyla tamamladığı işlemler için. Form kaydetme, dosya yükleme, hesap oluşturma.
- `toast.error()` — bir şeyin yanlış gittiğini bildirmek için. Network hatası, validasyon başarısızlığı, izin reddedilmesi. Bu mesajların ne olduğunu açıkça belirtmek kritiktir — "Hata oluştu" yerine "Profil kaydedilemedi, tekrar dene" çok daha faydalıdır.
- `toast.warning()` — devam edilebilir ama dikkat edilmesi gereken durumlar için. "Değişiklikler kaydedilmedi", "Oturum süresi dolmak üzere".
- `toast.info()` — bağlam bilgisi için. "Bu özellik beta aşamasında", "Yeni bir güncelleme mevcut".
- `toast.loading()` — uzun sürebilecek işlemlerde bekleme bildirimi için. Genellikle `toast.promise()` ile birlikte kullanılır ya da manuel olarak ID ile yönetilir.

## Promise Toast

Async işlemlerde en sık karşılaşılan sorun şudur: işlem başladığında "Kaydediliyor..." göstermek, bitince "Başarıyla kaydedildi!" veya "Hata oluştu" göstermek gerekir. Bunu `loading` state ile manuel yönetmek hem boilerplate üretir hem de hata durumlarını yönetmek zorlaşır.

`toast.promise()` bu geçişi otomatize eder. Bir Promise alır, `loading` / `success` / `error` mesajlarını alır ve Promise'in durumuna göre otomatik günceller:

```tsx
"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

async function kayitEt() {
  // Simüle edilmiş async işlem
  return new Promise((resolve) => setTimeout(resolve, 2000))
}

export function KayitButonu() {
  function handleKayit() {
    toast.promise(kayitEt(), {
      loading: "Kaydediliyor...",
      success: "Başarıyla kaydedildi!",
      error: "Kaydetme başarısız oldu.",
    })
  }

  return <Button onClick={handleKayit}>Kaydet</Button>
}
```

`kayitEt()` çağrıldığı anda toast "Kaydediliyor..." mesajı ile belirir. Promise resolve olursa "Başarıyla kaydedildi!" mesajına geçer. Reject olursa "Kaydetme başarısız oldu." gösterir. Tüm geçişler animasyonlu olarak gerçekleşir.

`success` ve `error` değerleri dinamik de olabilir — string yerine fonksiyon geçersen, Promise'in resolve/reject değerini argüman olarak alırsın:

```tsx
toast.promise(kullaniciyiGetir(id), {
  loading: "Kullanıcı yükleniyor...",
  // resolve değeri fonksiyona geliyor
  success: (kullanici) => `${kullanici.ad} başarıyla yüklendi`,
  // reject reason fonksiyona geliyor
  error: (err) => `Hata: ${err.message}`,
})
```

Bu pattern özellikle API çağrılarında, dosya yüklemelerinde ve form submit işlemlerinde çok kullanışlıdır çünkü loading state için ayrıca `useState` tutmana gerek kalmaz.

## Form ile Entegrasyon

Gerçek dünyada toast en çok form submit akışlarında kullanılır. React Hook Form ile kullandığında iki yaklaşım var: `try/catch` içinde `toast.success/error` veya doğrudan `toast.promise()`.

`toast.promise()` yaklaşımı daha temiz:

```tsx
"use client"

import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Form veri tipi
type ProfilForm = {
  ad: string
  email: string
}

// API çağrısını simüle eden fonksiyon
async function profilGuncelle(data: ProfilForm): Promise<ProfilForm> {
  await new Promise((resolve) => setTimeout(resolve, 1500))
  // Gerçek uygulamada: fetch("/api/profil", { method: "PUT", body: JSON.stringify(data) })
  return data
}

export function ProfilFormu() {
  const { register, handleSubmit } = useForm<ProfilForm>()

  function onSubmit(data: ProfilForm) {
    // Promise döndüren fonksiyonu toast.promise'e ver
    toast.promise(profilGuncelle(data), {
      loading: "Profil güncelleniyor...",
      success: "Profil başarıyla güncellendi!",
      error: "Profil güncellenemedi, lütfen tekrar dene.",
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-sm">
      <Input {...register("ad")} placeholder="Adınız" />
      <Input {...register("email")} placeholder="E-posta" type="email" />
      <Button type="submit">Güncelle</Button>
    </form>
  )
}
```

Alternatif olarak `try/catch` ile de kullanabilirsin — özellikle Promise'i doğrudan geçirme imkanın yoksa:

```tsx
async function onSubmit(data: ProfilForm) {
  try {
    await profilGuncelle(data)
    toast.success("Profil başarıyla güncellendi!")
  } catch (error) {
    toast.error("Profil güncellenemedi.")
  }
}
```

Bu yaklaşımda loading durumunu yönetmek için `toast.loading()` ile manuel bir ID kullanman gerekir:

```tsx
async function onSubmit(data: ProfilForm) {
  // loading toast başlat, ID al
  const toastId = toast.loading("Profil güncelleniyor...")

  try {
    await profilGuncelle(data)
    // Aynı ID'li toast'ı success'e güncelle
    toast.success("Profil güncellendi!", { id: toastId })
  } catch {
    // Aynı ID'li toast'ı error'a güncelle
    toast.error("Güncelleme başarısız.", { id: toastId })
  }
}
```

`toast.promise()` bu ID yönetimini soyutladığı için çoğu senaryoda daha az kod demektir.

## Önemli Notlar

**"use client" zorunluluğu:** `toast()` bir browser API'sidir. Onu çağıran component'ın `"use client"` direktifine sahip olması gerekir. Ama `<Toaster />` component'ının kendisi layout'ta `"use client"` olmadan da kullanılabilir — shadcn wrapper'ı bunu halleder.

**Server Action'larla kullanım:** Next.js'in Server Action'larından doğrudan `toast()` çağıramazsın (server-side kod). Ama action'ın sonucunu client component'ta alıp oradan toast tetikleyebilirsin:

```tsx
// Client component'ta
const sonuc = await serverAction(formData)
if (sonuc.basarili) {
  toast.success("İşlem tamamlandı!")
} else {
  toast.error(sonuc.hata)
}
```

**Dismiss:** `toast.dismiss()` tüm aktif toast'ları kapatır. Belirli bir toast'ı kapatmak için `toast.dismiss(toastId)` kullanırsın. Özellikle bir sayfadan ayrılırken veya yeni bir akış başlarken temizleme yapmak için işe yarar.

Sonner, shadcn/ui ekosisteminde toast bildirimleri için artık standart çözüm. Kurulumu basit, API'si öğrenmesi kolay, animasyonları kaliteli. Section 2 bu topic ile tamamlanıyor — artık form kurulumundan theming'e, dialog'lardan toast bildirimlerine kadar shadcn/ui'ın temel araçlarına hakimsin.
