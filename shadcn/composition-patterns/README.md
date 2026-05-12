# Composition Patterns

shadcn/ui'ı öğrenirken bir noktaya mutlaka geliyorsun: tek tek component'ları bilmek yetmiyor. Gerçek projelerde ihtiyacın olan UI parçaları "hazır" gelmiyor — onları kendin birleştirmen gerekiyor. Bu topic tam da bu beceriyi ele alıyor: primitive'leri nasıl bir araya getirirsin, kendi composite component'larını nasıl yazarsın, ve bu kararları ne zaman verirsin.

---

## shadcn'ın Composition Felsefesi

shadcn/ui'ı diğer UI kütüphanelerinden ayıran en önemli şey, yaklaşımdaki fark. Çoğu kütüphane sana `<DataGrid />` gibi büyük, tek parça bir component verir — içine prop geçersin, o da her şeyi kendi halleder. shadcn ise tam tersini yapar: sana küçük, tek sorumluluğu olan primitive'ler verir ve bunları kendin birleştirmeni bekler.

Bu "Lego mantığı" olarak düşünebilirsin. Tek bir Lego parçası neredeyse hiçbir şey değildir. Ama doğru parçaları doğru şekilde bir araya getirdiğinde istediğin her şeyi yapabilirsin — ve sonuç tamamen senin kontrolünde olur. shadcn'da da aynı şey geçerli: `Button`, `Popover`, `Command`, `Dialog`, `Form` — bunların her biri kendi başına sınırlıdır. Ama birleştirildiğinde Combobox'a, Modal Form'a, Command Palette'e dönüşür.

Bu felsefenin arkasında **Radix UI'ın compound component pattern'ı** var. Radix UI, erişilebilirliği ve davranışı yönetir ama stilden tamamen elini çeker. shadcn ise bu stil boşluğunu Tailwind ile doldurur ve sana kopyalayıp özelleştirebileceğin kaynak kod verir. Sonuç olarak shadcn'da hiçbir "kara kutu" yoktur — her şey senin projenin içinde, senin kontrolünde.

shadcn'ın bu yaklaşımı seçmesinin pratik nedenleri şunlar:

- **Esneklik**: Her projenin ihtiyacı farklıdır. Büyük, opiniyonated component'lar bu farka uyum sağlayamaz.
- **Şeffaflık**: Kaynak koda baktığında ne olduğunu anlarsın. "Bu prop neden çalışmıyor?" sorusunu sormak yerine kodu okursun.
- **Özelleştirme**: Bir şeyi değiştirmek istediğinde kütüphane maintainer'ının PR'ını beklemezsin — component'ı kopyaladın, artık senin. Değiştir.

---

## Popover + Command → Combobox

Combobox, shadcn/ui'ın resmi component listesinde var — ama aslında ayrı bir component değil. Popover ve Command component'larının belirli bir şekilde birleştirilmesidir. Dokümantasyona gittiğinde kurulacak bir paket görmek yerine doğrudan "bunu böyle yaz" şeklinde bir kod örneği bulursun. Bu kasıtlı bir tercih.

Bu pattern'ı anlamak önemli çünkü shadcn ekosistemindeki pek çok "bileşik" yapı aynı mantıkla çalışıyor. Büyük bir şey görmüyorsun — birkaç primitive'in doğru sırayla bir araya gelmesini görüyorsun.

Combobox'ta yapı şu: `Popover`, tetikleyici buton ile açılan paneli yönetir. `Command` ise panel içindeki arama ve liste mantığını üstlenir. İkisi birleşince klavye ile gezinebilir, aranabilir, erişilebilir bir seçim arayüzü ortaya çıkar.

```tsx
"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const sehirler = [
  { value: "istanbul", label: "İstanbul" },
  { value: "ankara", label: "Ankara" },
  { value: "izmir", label: "İzmir" },
  { value: "bursa", label: "Bursa" },
]

export function SehirSecici() {
  const [acik, setAcik] = useState(false)
  const [secilen, setSecilen] = useState("")

  return (
    <Popover open={acik} onOpenChange={setAcik}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={acik}
          className="w-48 justify-between"
        >
          {secilen
            ? sehirler.find((s) => s.value === secilen)?.label
            : "Şehir seç..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-0">
        <Command>
          <CommandInput placeholder="Şehir ara..." />
          <CommandList>
            <CommandEmpty>Şehir bulunamadı.</CommandEmpty>
            <CommandGroup>
              {sehirler.map((sehir) => (
                <CommandItem
                  key={sehir.value}
                  value={sehir.value}
                  onSelect={(deger) => {
                    // Aynı seçiliyse toggle (seçimi kaldır)
                    setSecilen(deger === secilen ? "" : deger)
                    setAcik(false)
                  }}
                >
                  {sehir.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      secilen === sehir.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
```

Bu örnekte dikkat edilmesi gereken birkaç nokta var:

`asChild` prop'u `PopoverTrigger` üzerinde kullanılıyor. Bu, Radix UI'ın önemli bir pattern'ı: kendi DOM elementini render etmek yerine child component'ı trigger gibi davranmaya zorluyor. Böylece ekstra bir wrapper `<button>` üretilmiyor, senin `Button`'ın tetikleyici oluyor.

`aria-expanded` attribute'u erişilebilirlik için kritik. Ekran okuyucular bu değeri okuyarak kullanıcıya "açık/kapalı" bilgisini aktarır.

`CommandEmpty`, filtreleme sonucunda hiç öğe kalmadığında devreye girer. `Command` bu boş durumu otomatik algılar — sen sadece gösterilecek metni yazarsın.

**Güncel not: Native Combobox componenti**

shadcn/ui artık registry'de doğrudan kurulabilir bir `Combobox` componenti sunuyor:

```bash
npx shadcn@latest add combobox
```

Bu component, hem Radix UI hem de Base UI (MUI ekibinin headless kütüphanesi) tabanlı versiyonlarıyla birlikte geliyor. Özel bir `ComboboxInput`, `ComboboxContent`, `ComboboxList`, `ComboboxItem` API'sine sahip. Popover + Command composition'ını hâlâ kullanabilirsin — özellikle mevcut projelerde ya da Command bileşeninin tam arama yeteneklerine ihtiyacın varsa. Ama yeni başlayan bir projede basit bir seçim kutusu istiyorsan doğrudan `combobox` eklemek daha az boilerplate içeriyor.

---

## Dialog + Form → Modal Form Pattern

Formlar sıklıkla bir modal içinde açılır: "Düzenle" butonuna tıklanır, Dialog açılır, form doldurulur, kaydedilir. Bu pattern kulağa basit gelir ama iki önemli sorun gizlenir içinde: dialog kapandığında form state'i sıfırlanmalı, ve submit sırasında validation hataları dialog açık kalırken gösterilmeli.

Bunları ele alan tam bir örnek:

```tsx
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Zod şeması — validation kuralları burada merkezi olarak tanımlanır
const profilSemasi = z.object({
  isim: z.string().min(2, "İsim en az 2 karakter olmalı"),
  eposta: z.string().email("Geçerli bir e-posta adresi gir"),
})

type ProfilFormu = z.infer<typeof profilSemasi>

export function ProfilDuzenleModal() {
  const [acik, setAcik] = useState(false)

  const form = useForm<ProfilFormu>({
    resolver: zodResolver(profilSemasi),
    defaultValues: { isim: "", eposta: "" },
  })

  function onSubmit(veriler: ProfilFormu) {
    // Gerçek projede burada API çağrısı yapılır
    console.log("Kaydedilen veriler:", veriler)
    // Başarılı kayıt sonrası dialog'u kapat ve formu sıfırla
    setAcik(false)
    form.reset()
  }

  function dialogDegisti(yeniDurum: boolean) {
    setAcik(yeniDurum)
    // Dialog kapandığında formu her zaman temizle
    if (!yeniDurum) {
      form.reset()
    }
  }

  return (
    <Dialog open={acik} onOpenChange={dialogDegisti}>
      <DialogTrigger asChild>
        <Button variant="outline">Profili Düzenle</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Profili Düzenle</DialogTitle>
        </DialogHeader>

        {/* Form, Dialog içinde doğrudan yaşıyor */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="isim"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>İsim</FormLabel>
                  <FormControl>
                    <Input placeholder="Adın ve soyadın" {...field} />
                  </FormControl>
                  {/* Hata mesajı otomatik gösterilir, ekstra bir şey yapmak gerekmez */}
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
                    <Input
                      type="email"
                      placeholder="ornek@mail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              {/* type="submit" dialog'u kapatmaz — onSubmit fonksiyonu yönetir */}
              <Button type="submit">Kaydet</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
```

Bu örnekteki kritik nokta `dialogDegisti` fonksiyonu. `onOpenChange` prop'u aracılığıyla Dialog'un açılıp kapanmasına müdahale ediyorsun: dialog kapandığında `form.reset()` çağrılıyor. Bunu yapmazsan kullanıcı formu yarım doldurup kapatır, tekrar açar ve önceki verileri görür — bu beklenen bir davranış değil.

Ayrıca `onSubmit` içinde de `form.reset()` çağrıldığına dikkat et. Submit başarılı olunca dialog kapanmadan önce form temizleniyor — böylece dialog animasyonu sürerken sıfırlanmış state görülmez.

---

## Kendi Composite Component'ını Yazmak

Popover + Command veya Dialog + Form örneklerini anladıktan sonra sıradaki adım: aynı birleşimi defalarca kullanmak zorunda kaldığında onu kendi component'ın haline getirmek.

**Ne zaman composite component yaz?**

Bu sorunun cevabı genellikle "en az iki kez kopyaladıktan sonra" şeklindedir. Bir kez kullanıyorsan inline yazmak daha okunaklı olabilir. Ama aynı Dialog + Form kalıbını üç farklı sayfada görüyorsan — "Kullanıcı Ekle", "Ürün Düzenle", "Adres Güncelle" gibi — artık bir abstraction mantıklı.

**Ne zaman yazmaman gerekir?**

Eğer tek yaptığın şey bir prop geçmekse, composite component gerekmez — basit bir wrapper ve default prop değerleri yeterlidir. "Her Dialog'un footer'ında bir 'İptal' butonu olsun" gibi bir ihtiyaç için tüm Dialog'u sarmak aşırıya kaçmaktır.

**Dosya yapısı ve naming convention**

shadcn component'ları `components/ui/` altında yaşar. Kendi composite component'larını ise `components/` altında feature bazlı organize etmen önerilir:

```
components/
  ui/           ← shadcn primitive'leri (dokunma)
  kullanici/
    profil-duzenle-modal.tsx   ← Dialog + Form birleşimi
    sehir-secici.tsx           ← Popover + Command birleşimi
```

**Prop interface tasarımı**

Composite component yazarken prop interface'ini geniş tutmaya çalışma. Sadece gerçekten dışarıya açman gereken şeyleri export et:

```tsx
// Kötü: her iç component'ın prop'larını dışarıya sızdırmak
interface SehirSeciciProps {
  popoverAlign?: "start" | "center" | "end"
  commandInputPlaceholder?: string
  commandEmptyText?: string
  buttonClassName?: string
  // ... sonsuza gidiyor
}

// İyi: domain language ile minimal interface
interface SehirSeciciProps {
  deger: string
  onChange: (deger: string) => void
  placeholder?: string
  disabled?: boolean
}
```

Domain language kullan — `deger`, `onChange`, `placeholder` — iç implementation detaylarını (`popoverAlign`, `commandInputPlaceholder`) dışarıya sızdırma. Kullanıcının "bu bir Popover + Command" bilmesi gerekmez; onun için bu bir şehir seçici.

**Compound component pattern'ı ne zaman uygularsın?**

Eğer component'ın birden fazla "slot"u varsa — header, body, footer gibi — ve bu slot'ların sırası veya içeriği değişebiliyorsa, Radix UI'ın kullandığı compound component pattern'ını düşün:

```tsx
// Kullanım:
<KartPanel>
  <KartPanel.Baslik>İstatistikler</KartPanel.Baslik>
  <KartPanel.Icerik>...</KartPanel.Icerik>
  <KartPanel.Altbilgi>Son güncelleme: bugün</KartPanel.Altbilgi>
</KartPanel>
```

Bu yaklaşım, `headerContent`, `bodyContent`, `footerContent` gibi prop'larla boğulmaktan kurtarır ve component'ın kullanımını çok daha okunabilir kılar.

---

shadcn/ui'ı öğrenirken aslında şunu öğreniyorsun: UI sadece "component eklemek" değil, onları anlamlı şekilde bir araya getirmek. Combobox bir component değil, bir pattern — ve bu ayrımı kavradığında kütüphanenin tüm potansiyelini kullanabilirsin.
