# React Hook Form Entegrasyonu

Form yazmak React'in en can sıkıcı taraflarından biridir. Her input için ayrı bir `useState`, her değişiklikte tetiklenen re-render'lar, validation mantığını elle yazmak… Bunların üstüne bir de hata mesajlarını yönetmek eklenince basit bir giriş formu bile onlarca satır boilerplate koda dönüşüyor. React Hook Form tam olarak bu sorunu çözmek için var. shadcn/ui ise bu kütüphane üzerine inşa edilmiş hazır Form bileşenleri sunuyor. İkisini birlikte kullandığında hem performanslı hem de kullanıcı deneyimi açısından güçlü formlar yazıyorsun.

---

## Neden React Hook Form?

React'te form yönetiminin klasik yolu, her input için `useState` kullanmaktır. Küçük formlarda sorun çıkarmaz ama büyüdükçe iki ciddi problem ortaya çıkar: **gereksiz re-render** ve **karmaşık validation mantığı**.

`useState` ile her tuşa basışta bileşen yeniden render edilir. Büyük bir formda bu yüzlerce gereksiz render anlamına gelir. React Hook Form ise **uncontrolled input** yaklaşımını benimser: input değerlerini React state'inde değil, DOM'da tutar. Değerlere yalnızca ihtiyaç duyulduğunda (submit anında veya explicit bir okumada) erişilir. Bu sayede performans dramatik biçimde artar — form ne kadar büyük olursa ol, tek bir tuşa basış tüm formu yeniden render ettirmez.

Validation cephesinde ise React Hook Form, Zod gibi şema tabanlı doğrulama kütüphaneleriyle `resolver` mekanizması aracılığıyla entegre olur. Validation kurallarını component'ın içinde dağıtık olarak yazmak yerine merkezi bir şema olarak tanımlarsın. Şema hem TypeScript tipini hem de runtime validation'ı tek elden yönetir.

shadcn/ui ile neden doğal eşleşiyor? Çünkü shadcn/ui'nin `Form` bileşenleri React Hook Form'un `Controller` pattern'i üzerine inşa edilmiş. Kütüphaneler birbirini doğal olarak tamamlıyor: React Hook Form form state'ini yönetir, shadcn/ui erişilebilir ve stillenmiş UI katmanını sağlar.

---

## Form Component Hiyerarşisi

shadcn/ui'nin Form sistemi yedi bileşenden oluşuyor. Bunların her biri belirli bir sorumluluğu taşıyor ve birlikte eksiksiz, erişilebilir bir form yapısı oluşturuyor.

```
Form
  └── FormField
        └── FormItem
              ├── FormLabel
              ├── FormControl
              │     └── (Input, Select, Checkbox vb.)
              ├── FormDescription  (opsiyonel)
              └── FormMessage
```

**`<Form />`**: React Hook Form'un `useForm` hook'undan dönen `form` nesnesini Context aracılığıyla alt bileşenlere iletir. `{...form}` spread'i yaparak tüm form metodlarını ve state'ini aşağıya geçirir. Bu wrapper olmadan hiçbir `FormField` çalışmaz.

**`<FormField />`**: Tek bir form alanını yönetir. `control` prop'u React Hook Form'un `form.control`'ünü, `name` prop'u şemadaki alan adını alır. `render` prop'u aracılığıyla `field` nesnesini aşağı geçirir — bu nesne `onChange`, `onBlur`, `value` ve `ref` içerir.

**`<FormItem />`**: Label, input ve hata mesajını görsel olarak bir araya getiren sarmalayıcı div'dir. Erişilebilirlik için gerekli olan id'leri Context üzerinden alt bileşenlerle paylaşır.

**`<FormLabel />`**: Standart HTML `<label>` elementini render eder ama `htmlFor` bağlantısını otomatik yönetir. Alanın validation hatası varsa otomatik olarak kırmızı renk alır — bunu sağlamak için ekstra bir şey yapman gerekmez.

**`<FormControl />`**: Input bileşenini saran kritik bir wrapper. İçine aldığı bileşene `id`, `aria-describedby` ve `aria-invalid` attribute'larını otomatik olarak ekler. Bu attribute'lar ekran okuyucularla uyumluluk ve erişilebilirlik açısından zorunludur. **Önemli:** `FormControl` içine doğrudan wrapper `<div>` koyma — attribute geçişi bozulur.

**`<FormDescription />`**: Input'un altında yardımcı metin göstermek istediğinde kullanırsın. "Şifreniz en az 8 karakter olmalıdır" gibi ön bilgilendirmeler için idealdir.

**`<FormMessage />`**: Zod validation hata mesajlarını otomatik olarak görüntüler. İçine hiçbir şey yazmazsın — mesaj, şemandan otomatik gelir. Hata yoksa bu bileşen DOM'da yer kaplamaz.

---

## Zod ile Validation

React Hook Form kendi başına herhangi bir doğrulama kütüphanesine bağlı değil. `register` üzerinden basit validation kuralları yazabilirsin ama Zod entegrasyonu çok daha güçlü bir yaklaşım sunuyor: şema hem TypeScript tipini otomatik üretiyor hem de runtime'da doğrulama yapıyor.

Önce gerekli paketleri yükle:

```bash
npm install react-hook-form @hookform/resolvers zod
```

Temel bir Zod şeması şöyle görünür:

```typescript
import * as z from "zod"

const kullaniciSchema = z.object({
  // Zorunlu metin alanı, minimum uzunlukla
  ad: z.string().min(2, "Ad en az 2 karakter olmalı"),

  // E-posta formatı kontrolü
  email: z.string().email("Geçerli bir e-posta adresi gir"),

  // Sayısal alan
  yas: z.number().min(18, "18 yaşından büyük olmalısın"),

  // Opsiyonel alan
  biyografi: z.string().optional(),

  // Enum — belirli değerler arasından seçim
  rol: z.enum(["admin", "kullanici", "editor"]),
})
```

Şemadan TypeScript tipini çıkarmak için `z.infer` kullanırsın:

```typescript
type KullaniciForm = z.infer<typeof kullaniciSchema>
// Artık bu tip: { ad: string; email: string; yas: number; biyografi?: string; rol: "admin" | "kullanici" | "editor" }
```

`zodResolver` ise bu şemayı React Hook Form'un anlayacağı formata çevirir:

```typescript
import { zodResolver } from "@hookform/resolvers/zod"

const form = useForm<KullaniciForm>({
  resolver: zodResolver(kullaniciSchema),
})
```

Bu bağlantıdan sonra form submit edildiğinde Zod şeması çalışır, hatalı alanlar tespit edilir ve hata mesajları otomatik olarak `FormMessage` bileşenlerine yönlendirilir.

**Standard Schema desteği:** React Hook Form, "Standard Schema" spesifikasyonunu destekliyor. Bu spesifikasyon, Zod 3.24+, Valibot, ArkType gibi kütüphaneler tarafından uygulanan ortak bir doğrulama arayüzü tanımlar. `@hookform/resolvers` paketindeki `standardSchemaResolver`'ı kullanarak bu kütüphaneleri ayrı bir adapter yazmadan bağlayabilirsin. Production kullanıma hazır; mevcut `zodResolver` yaklaşımı da çalışmaya devam eder.

---

## Tam Çalışır Örnek

Aşağıda email ve şifre alanlarından oluşan eksiksiz bir login formu var. Zod şeması, `useForm` kurulumu, her alanın `FormField` yapısı ve `onSubmit` handler'ı dahil her şey burada.

```tsx
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
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

// Validation şeması — Zod ile
const loginSchema = z.object({
  email: z.string().email("Geçerli bir e-posta adresi gir"),
  sifre: z.string().min(8, "Şifre en az 8 karakter olmalı"),
})

// Zod şemasından TypeScript tipini çıkar
type LoginForm = z.infer<typeof loginSchema>

export function LoginFormu() {
  const form = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      sifre: "",
    },
  })

  function onSubmit(veriler: LoginForm) {
    // Burada API çağrısı yapılır
    console.log(veriler)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-sm">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-posta</FormLabel>
              <FormControl>
                <Input placeholder="ornek@mail.com" {...field} />
              </FormControl>
              <FormMessage /> {/* Zod hata mesajı burada görünür */}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sifre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Şifre</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Giriş Yap
        </Button>
      </form>
    </Form>
  )
}
```

Bu kodda dikkat etmen gereken birkaç nokta var:

- `<Form {...form}>` ile `useForm`'dan dönen her şeyi (control, handleSubmit, formState vb.) Context'e aktarıyorsun.
- `<form onSubmit={form.handleSubmit(onSubmit)}>` — `handleSubmit` önce validation çalıştırır, başarılıysa `onSubmit`'i çağırır. Hatalıysa `onSubmit` hiç çağrılmaz.
- `render={({ field }) => ...}` — `field` nesnesi içinde `onChange`, `onBlur`, `value` ve `ref` var. Bunları `{...field}` ile Input'a spread etmek zorunlusun.
- `defaultValues` mutlaka belirt. Belirtmezsen uncontrolled/controlled input karışıklığına dair React uyarıları alırsın.

---

## Yaygın Hatalar

Birkaç yaygın hata var ki bunları önceden bilirsen saatlerini kurtarırsın.

**`"use client"` direktifini unutmak**

React Hook Form tamamen client-side çalışır. `useForm`, `useState`, `useEffect` gibi hook'lar Next.js'te sadece Client Component'larda kullanılabilir. Dosyanın en üstüne `"use client"` yazmayı unutursan "useState is not defined" ya da "useForm is not defined" hatası alırsın. Bu durum özellikle Next.js App Router kullandığında yaygın.

**`FormControl` içine wrapper `<div>` koymak**

`FormControl` kendi içindeki ilk bileşene doğrudan `aria-*` attribute'ları ve `id` iletir. Araya bir `<div>` girerse bu attribute'lar Input'a ulaşmaz, erişilebilirlik kırılır. Bazı durumlarda shadcn'in stillemesi de bozulabilir.

```tsx
{/* ❌ Yanlış — wrapper div araya giriyor */}
<FormControl>
  <div>
    <Input {...field} />
  </div>
</FormControl>

{/* ✅ Doğru — Input doğrudan FormControl içinde */}
<FormControl>
  <Input {...field} />
</FormControl>
```

**`{...field}` spread'ini unutmak**

`field` nesnesini Input'a spread etmezsen React Hook Form o alanın değerini takip edemez. `onChange` bağlanmaz, `onBlur` çalışmaz, `ref` atanmaz. Form submit ettiğinde o alanın değeri boş gelir, validation da beklediğin gibi çalışmaz. Bu spread zorunlu.

```tsx
{/* ❌ Yanlış — field yok */}
<Input placeholder="E-posta" />

{/* ✅ Doğru — field spread edildi */}
<Input placeholder="E-posta" {...field} />
```

**`name` prop'unu şemayla eşleştirmemek**

`FormField`'ın `name` prop'u şemandaki alan adıyla birebir eşleşmek zorunda. Zod şemanda `email` varsa `name="email"` yazmalısın, `name="kullaniciemail"` değil. TypeScript kullanıyorsan bu hatayı derleme anında zaten yakalarısın ama JavaScript'te çalışıyorsan sessizce geçer ve validation çalışmaz.

**`defaultValues` belirtmemek**

`useForm` içinde `defaultValues` vermeden bir form oluşturup uncontrolled input kullanmak karışıklığa yol açar. Her zaman şemanın tüm alanları için boş da olsa bir `defaultValues` nesnesi tanımla. Bu hem React uyarılarını engeller hem de form reset etme işlevinin beklendiği gibi çalışmasını sağlar.

**`form.handleSubmit` yerine doğrudan `onSubmit` yazmak**

`<form onSubmit={onSubmit}>` yazarsan React Hook Form devreye girmez: validation çalışmaz, hata mesajları güncellenmez, form verisi ham event nesnesi olarak gelir. Mutlaka `form.handleSubmit(onSubmit)` yaz. `handleSubmit`, `onSubmit`'i sadece validation geçildikten sonra çağırır ve sana doğrudan yazılan veriyi, parse edilmiş TypeScript nesnesi olarak iletir.

---

Form yazmak artık ne onlarca `useState` ne de elle yazılan validation anlamına geliyor. React Hook Form, Zod ve shadcn/ui üçlüsüyle tip güvenli, performanslı ve erişilebilir formlar yazmak hem daha hızlı hem de çok daha az hata riski taşıyor.
