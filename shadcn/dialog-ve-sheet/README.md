# Dialog ve Sheet

Bir önceki bölümde React Hook Form ile form yönetimini öğrendin. Artık bu formları ve diğer içerikleri kullanıcıya sunmanın en etkili yollarından biri olan **modal dialog** ve **yan panel (sheet)** component'larını ele alacağız. shadcn/ui'ın bu iki component'ı, Radix UI primitives üzerine inşa edilmiş olduğu için hem erişilebilirlik hem de özelleştirilebilirlik açısından güçlü bir temel sunar.

## Dialog Component'ı

Dialog, birincil pencerenin üzerine açılan bir katman (overlay) olarak çalışır. Açık olduğu sürece arkasındaki içerik etkileşime kapalı hale gelir; bu durum kullanıcının dikkatini doğrudan dialog üzerine çeker.

shadcn/ui'da Dialog, birden fazla alt component'ın bir araya gelmesiyle oluşur. Bu **composable** (birleştirilebilir) yapı, Radix UI'ın erişilebilirlik gereksinimlerini karşılamak için tasarlanmıştır:

- **`Dialog`** — Tüm yapıyı saran kök component. State yönetimini içeride tutar.
- **`DialogTrigger`** — Dialog'u açan tetikleyici element. Genellikle bir buton olur.
- **`DialogContent`** — Dialog'un gerçek içeriğini taşıyan konteyner. Overlay ve kapatma tuşu buraya dahil.
- **`DialogHeader`** — Başlık ve açıklama için anlam taşıyan bir sarmalayıcı.
- **`DialogTitle`** — Erişilebilirlik için zorunlu. Ekran okuyucular bu elementi arar; atlanmamalı.
- **`DialogDescription`** — Opsiyonel açıklama metni. Kısa ve açıklayıcı tutulmalı.
- **`DialogFooter`** — Aksiyon butonlarını (Kaydet, İptal vb.) gruplamak için kullanılır.

Bu yapının neden bu kadar parçalı olduğunu merak edebilirsin. Bunun temel nedeni **WAI-ARIA Dialog pattern**'idir. Bir dialog açıldığında ekran okuyucunun bunu doğru duyurabilmesi için `role="dialog"`, `aria-labelledby` ve `aria-describedby` gibi attribute'ların doğru bağlanması gerekir. Radix UI bu bağlantıları otomatik olarak kurar; sen sadece doğru component hiyerarşisini kurman yeterlidir.

`DialogDescription` teknik olarak opsiyoneldir ama atladığında Radix UI, var olmayan bir ID'ye işaret eden kırık bir `aria-describedby` attribute'u DOM'a yazar. Bu, erişilebilirlik denetim araçlarının hata bildireceği bir ARIA ihlalidir. Açıklama göstermek istemiyorsan `DialogContent`'e `aria-describedby={undefined}` geçerek bu attribute'u tamamen kaldırabilirsin.

Kurulum:

```bash
npx shadcn@latest add dialog
```

Temel kullanım örneği:

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ProfilDuzenleDialog() {
  return (
    <Dialog>
      {/* asChild prop'u ile DialogTrigger kendi DOM elementi üretmez,
          çocuk elementi (Button) doğrudan tetikleyici olarak kullanılır */}
      <DialogTrigger asChild>
        <Button variant="outline">Profili Düzenle</Button>
      </DialogTrigger>

      {/* sm:max-w-[425px] ile dialog genişliği kontrol edilir */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profili Düzenle</DialogTitle>
          {/* DialogDescription ekran okuyucular için aria-describedby bağlantısını kurar */}
          <DialogDescription>
            Profil bilgilerini aşağıdan güncelleyebilirsin.
          </DialogDescription>
        </DialogHeader>

        {/* Form alanları */}
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="kullanici-adi">Kullanıcı Adı</Label>
            <Input id="kullanici-adi" defaultValue="ali.arikan" />
          </div>
        </div>

        <Button type="submit">Kaydet</Button>
      </DialogContent>
    </Dialog>
  )
}
```

`asChild` prop'una dikkat et. Bu, `DialogTrigger`'ın kendi `<button>` elementini render etmek yerine, içindeki component'ı tetikleyici olarak kullanmasını sağlar. Böylece iç içe geçmiş iki `<button>` problemi yaşanmaz ve HTML semantiği bozulmaz.

## Controlled vs Uncontrolled

Yukarıdaki örnekte Dialog'u tamamen kendi state'ini yönetsin diye bıraktık — bu **uncontrolled** kullanımdır. `DialogTrigger`'a tıklandığında dialog açılır, `DialogContent` içindeki X butonuna ya da Escape tuşuna basıldığında kapanır. Çoğu durumda bu yeterlidir.

Ancak bazen dialog'un açılıp kapanmasını dışarıdan kontrol etmen gerekir. Örneğin:

- Bir API isteği başarıyla tamamlandığında dialog'u programatik olarak kapatmak
- Başka bir component'taki bir olaya (hata mesajı, yönlendirme vs.) tepki olarak dialog açmak
- Birden fazla dialog arasında geçiş yapmak

Bu durumlarda **controlled** kullanıma geçersin:

```tsx
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function KontrolluDialog() {
  // Dialog'un açık/kapalı state'ini dışarıdan yönetiyoruz
  const [acik, setAcik] = useState(false)

  const handleKaydet = async () => {
    // API isteği simülasyonu
    await fetch("/api/profil", { method: "POST" })
    // İstek başarılıysa dialog'u programatik olarak kapat
    setAcik(false)
  }

  return (
    <>
      {/* DialogTrigger kullanmadan, state ile açma */}
      <Button onClick={() => setAcik(true)}>Profili Düzenle</Button>

      {/* open ve onOpenChange ile tam kontrol */}
      <Dialog open={acik} onOpenChange={setAcik}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Profili Düzenle</DialogTitle>
            <DialogDescription>
              Ad alanını düzenleyip kaydet butonuna tıkla.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="ad">Ad</Label>
              <Input id="ad" placeholder="Adın..." />
            </div>
          </div>
          <DialogFooter>
            {/* İptal butonuna tıklandığında state'i false yap */}
            <Button variant="outline" onClick={() => setAcik(false)}>
              İptal
            </Button>
            <Button onClick={handleKaydet}>Kaydet</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
```

`onOpenChange` prop'u, dialog kapanmaya çalıştığında (X butonuna tıklama, Escape, overlay tıklama) çağrılır. Bunu `setAcik`'e bağlamak hem dışarıdan kontrol etmeni hem de kullanıcının dialog'u doğal yollarla kapatabilmesini sağlar.

## AlertDialog: Yıkıcı İşlemler İçin

Standart `Dialog` esnek ve çok amaçlıdır; form gösterimi, detay paneli, onboarding adımları gibi pek çok senaryoda kullanabilirsin. Ama **geri alınamaz işlemler** için farklı bir component var: `AlertDialog`.

Neden ayrı bir component? Çünkü silme, hesap kapatma, toplu veri temizleme gibi yıkıcı işlemlerde kullanıcıya farklı bir sinyal vermek gerekir. `AlertDialog`'da:

- Overlay'e tıklamak dialog'u **kapatmaz** — kullanıcı kasıtlı bir seçim yapmak zorundadır
- `AlertDialogAction` ve `AlertDialogCancel` butonları, aksiyonu açıkça ayrıştırır
- Ekran okuyucular bu dialog türünü `role="alertdialog"` olarak duyurur; bu kullanıcıya aciliyeti hissettirir

Kurulum:

```bash
npx shadcn@latest add alert-dialog
```

Silme onayı örneği:

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

// onOnayla: silme işlemini gerçekleştirecek fonksiyon prop olarak geliyor
export function SilmeOnayDialog({ onOnayla }: { onOnayla: () => void }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* destructive variant kırmızı stil uygular */}
        <Button variant="destructive">Hesabı Sil</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Emin misin?</AlertDialogTitle>
          <AlertDialogDescription>
            Bu işlem geri alınamaz. Hesabın kalıcı olarak silinecek
            ve tüm verilerin sunucularımızdan kaldırılacak.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          {/* İptal: overlay tıklama çalışmadığı için bu buton kritik */}
          <AlertDialogCancel>İptal</AlertDialogCancel>

          {/* Action: tıklandığında onOnayla çağrılır ve dialog kapanır */}
          <AlertDialogAction onClick={onOnayla}>Evet, Sil</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

`AlertDialogAction`'a tıklandığında dialog otomatik kapanır. `AlertDialogCancel` ise hem dialog'u kapatır hem de varsayılan olarak outline stilinde gelir. Kullanıcıya "vazgeçmek güvenli, ilerlemek tehlikeli" mesajını görsel olarak da iletmiş olursun.

Pratik kural: Bir işlem sonrası "Keşke yapmasaydım" dedirtiyorsa `AlertDialog` kullan. Sıradan veri girişleri ve görüntüleme amaçlı paneller için standart `Dialog` yeterlidir.

## Sheet: Yan Panel

Sheet, Dialog'un genişletilmiş bir versiyonudur. Teknik olarak aynı Radix UI primitive üzerine kurulu, ancak ekranın kenarından süzülerek açılan bir panel şeklinde davranır. Dialog gibi overlay'e sahip, odak yönetimi ve erişilebilirlik Dialog ile aynı standartlarda.

`SheetContent` üzerindeki `side` prop'u ile panelin hangi yönden açılacağını belirlersin:

- `"right"` — Sağdan açılır (en yaygın kullanım: filtre paneli, ayarlar)
- `"left"` — Soldan açılır (mobil navigasyon menüsü)
- `"top"` — Yukarıdan açılır (bildirim paneli, arama çubuğu)
- `"bottom"` — Aşağıdan açılır (mobil action sheet, seçim menüsü)

Kurulum:

```bash
npx shadcn@latest add sheet
```

Filtre paneli örneği:

```tsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function FiltrePanel() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Filtrele</Button>
      </SheetTrigger>

      {/* side="right" ile sağdan açılan panel */}
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Filtreler</SheetTitle>
          <SheetDescription>
            Listeyi daraltmak için filtre seçeneklerini uygula.
          </SheetDescription>
        </SheetHeader>

        {/* Panel içeriği — filtre seçenekleri, checkbox'lar, range slider'lar vb. */}
        <div className="mt-4 space-y-4">
          <p className="text-sm text-muted-foreground">Filtre seçenekleri...</p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
```

Sheet'i ne zaman tercih edersin? İçerik miktarı fazlaysa ve kullanıcının ana içeriğin bağlamını kaybetmemesini istiyorsan Sheet daha iyi bir seçimdir. Dialog daha çok odaklanmış, kısa süren etkileşimler içindir. Örneğin:

- **Dialog**: Şifre değiştirme, e-posta onayı, kısa bir form
- **Sheet (sağ)**: Arama filtreleri, kayıt detayları, ayarlar menüsü
- **Sheet (sol)**: Mobilde hamburger menüsü yerine navigasyon drawer'ı
- **Sheet (bottom)**: Mobil cihazda seçim yapma, ek aksiyon listesi

## Form İçeren Dialog

Bir form'u Dialog içine almak son derece yaygın bir pattern'dir. Önceki bölümde öğrendiğin shadcn Form bileşenlerini — `Form`, `FormField`, `FormControl`, `FormLabel`, `FormMessage` — burada da kullanıyorsun. Dikkat edilmesi gereken ek nokta: dialog kapandığında formun sıfırlanması.

`useForm` hook'unun `reset` fonksiyonunu `onOpenChange` ile ilişkilendirirsin. Böylece kullanıcı dialog'u kapattığında yarım kalan veri formda kalmaz:

```tsx
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// Validation şeması — zorunlu alanlar ve format kuralları
const kullaniciSchema = z.object({
  kullaniciAdi: z.string().min(2, "Kullanıcı adı en az 2 karakter olmalı"),
  eposta: z.string().email("Geçerli bir e-posta adresi gir"),
})

type KullaniciForm = z.infer<typeof kullaniciSchema>

export function FormluDialog() {
  const [acik, setAcik] = useState(false)

  const form = useForm<KullaniciForm>({
    resolver: zodResolver(kullaniciSchema),
    defaultValues: { kullaniciAdi: "", eposta: "" },
  })

  // Dialog açılıp kapanma olayını yönet
  const handleAcikDegisim = (yeniDurum: boolean) => {
    // Dialog kapandığında formu sıfırla — eski veriler kalmasın
    if (!yeniDurum) {
      form.reset()
    }
    setAcik(yeniDurum)
  }

  const onSubmit = async (veri: KullaniciForm) => {
    console.log("Form verisi:", veri)
    // API isteği burada yapılır
    // Başarılıysa dialog kapat
    handleAcikDegisim(false)
  }

  return (
    <>
      <Button onClick={() => setAcik(true)}>Yeni Kullanıcı</Button>

      <Dialog open={acik} onOpenChange={handleAcikDegisim}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Kullanıcı Ekle</DialogTitle>
            <DialogDescription>
              Forma bilgileri gir ve kaydet butonuna tıkla.
            </DialogDescription>
          </DialogHeader>

          {/* Form bileşeni context'i aşağıya taşır */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="kullaniciAdi"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kullanıcı Adı</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    {/* Zod hata mesajı otomatik gösterilir */}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eposta"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-posta</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleAcikDegisim(false)}
                >
                  İptal
                </Button>
                <Button type="submit">Kaydet</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  )
}
```

Bu örnekte dikkat edilmesi gereken birkaç nokta:

1. `handleAcikDegisim` fonksiyonu, `onOpenChange` ile aynı zamanda `form.reset()`'i tetikler. Kullanıcı X butonuna bassın ya da Escape'e bassın, form temizlenir.
2. `<Form {...form}>` wrapper'ı `DialogContent` içine girer; `<form>` etiketi ise onun içinde. Submit olayını `form.handleSubmit` yakalar, validation geçmeden `onSubmit` çağrılmaz.
3. `DialogFooter` içindeki "İptal" butonu `type="button"` olmalı, yoksa formu submit etmeye çalışır.
4. `FormMessage` hata mesajlarını kendisi yönetir — elle `errors.field.message` yazmana gerek yok.

Bu pattern; form doğrulaması, API entegrasyonu ve kullanıcı deneyimi açısından production'da güvenle kullanabileceğin bir yaklaşımdır.
