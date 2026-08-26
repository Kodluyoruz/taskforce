# Formlar ve Server Actions

Server Actions, Next.js App Router'ın form ve mutation işlemlerini yönetme biçimini kökten değiştirdi. Ayrı bir API route yazmak, `fetch('/api/...')` çağrısı yapmak yerine sunucuda çalışan bir fonksiyon yazıp doğrudan form `action`'ı olarak kullanabilirsin.

## Server Actions Nedir?

Server Actions, sunucu tarafında çalışan fonksiyonlardır. Tarayıcıdan çağrıldıklarında arka planda bir HTTP isteği gönderilir, ama bunu sen yazmazsın — Next.js yönetir. RPC (Remote Procedure Call) benzeri bir yaklaşım olarak düşünebilirsin: bir fonksiyonu çağırır gibi yazarsın, çalışma zamanında sunucuda işlenir.

Temel özellikler:

- Doğrudan veritabanına erişebilirler
- `revalidatePath()` ve `revalidateTag()` ile cache'i temizleyebilirler
- `redirect()` ile yönlendirme yapabilirler
- CSRF koruması Next.js tarafından otomatik sağlanır

## `'use server'` Direktifi

`'use server'` direktifi iki şekilde kullanılabilir:

**Dosya başında** — tüm dosyadaki fonksiyonları Server Action yapar:

```ts
// app/actions/urun.ts
'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function urunEkle(formData: FormData) {
  const ad = formData.get('ad') as string
  const fiyat = Number(formData.get('fiyat'))

  await db.urunler.create({ data: { ad, fiyat } })
  revalidatePath('/urunler')
}

export async function urunSil(id: string) {
  await db.urunler.delete({ where: { id } })
  revalidatePath('/urunler')
}
```

**Fonksiyon başında** — sadece o fonksiyon Server Action olur, Server Component içinde inline yazılabilir:

```tsx
// app/yorum/page.tsx — Server Component
export default function YorumPage() {
  async function yorumGonder(formData: FormData) {
    'use server'
    const metin = formData.get('metin') as string
    await db.yorumlar.create({ data: { metin } })
    revalidatePath('/yorumlar')
  }

  return (
    <form action={yorumGonder}>
      <textarea name="metin" placeholder="Yorumunuzu yazın" />
      <button type="submit">Gönder</button>
    </form>
  )
}
```

## Temel Server Action ile Kayıt Formu

```tsx
// app/actions/kullanici.ts
'use server'

import { db } from '@/lib/db'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function kullaniciKaydet(formData: FormData) {
  const ad = formData.get('ad') as string
  const email = formData.get('email') as string
  const sifre = formData.get('sifre') as string

  // Temel boş alan kontrolü
  if (!ad || !email || !sifre) {
    throw new Error('Tüm alanlar zorunludur')
  }

  await db.kullanicilar.create({
    data: { ad, email, sifre },
  })

  // Kayıt sonrası profil sayfasına yönlendir
  redirect('/profil')
}
```

```tsx
// app/kayit/page.tsx
import { kullaniciKaydet } from '@/actions/kullanici'

export default function KayitPage() {
  return (
    <form action={kullaniciKaydet}>
      <div>
        <label htmlFor="ad">Ad Soyad</label>
        <input id="ad" name="ad" type="text" required />
      </div>
      <div>
        <label htmlFor="email">E-posta</label>
        <input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="sifre">Şifre</label>
        <input id="sifre" name="sifre" type="password" required />
      </div>
      <button type="submit">Kayıt Ol</button>
    </form>
  )
}
```

## Zod ile Validation ve Hata Mesajları

Gerçek projelerde form verilerini mutlaka doğrulamalısın. Zod bu iş için yaygın kullanılan bir kütüphanedir.

```ts
// app/actions/kullanici.ts
'use server'

import { z } from 'zod'
import { db } from '@/lib/db'
import { redirect } from 'next/navigation'

// Doğrulama şeması
const KayitSemasi = z.object({
  ad: z.string().min(2, 'Ad en az 2 karakter olmalı'),
  email: z.string().email('Geçerli bir e-posta adresi girin'),
  sifre: z.string().min(8, 'Şifre en az 8 karakter olmalı'),
})

export type KayitDurumu = {
  hatalar?: {
    ad?: string[]
    email?: string[]
    sifre?: string[]
  }
  mesaj?: string
}

export async function kullaniciKaydet(
  oncekiDurum: KayitDurumu,
  formData: FormData
): Promise<KayitDurumu> {
  // FormData'yı nesneye çevir
  const ham = {
    ad: formData.get('ad'),
    email: formData.get('email'),
    sifre: formData.get('sifre'),
  }

  // Zod ile doğrula
  const sonuc = KayitSemasi.safeParse(ham)

  if (!sonuc.success) {
    // Hataları döndür — sayfa yenilenmez, kullanıcı formu düzeltir
    return {
      hatalar: sonuc.error.flatten().fieldErrors,
      mesaj: 'Form doldurulurken hatalar oluştu.',
    }
  }

  try {
    await db.kullanicilar.create({ data: sonuc.data })
  } catch (e) {
    return { mesaj: 'Kayıt sırasında bir hata oluştu. Lütfen tekrar deneyin.' }
  }

  // Başarılı — yönlendir
  redirect('/giris?kayit=basarili')
}
```

## `useFormStatus` ile Loading Butonu

`useFormStatus`, form submit edildiğinde beklendiğini gösteren bir React hook'udur. Client Component'ta kullanılır.

```tsx
// app/components/GonderButon.tsx
'use client'

import { useFormStatus } from 'react-dom'

export default function GonderButon() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Gönderiliyor...' : 'Gönder'}
    </button>
  )
}
```

```tsx
// app/kayit/page.tsx
import { kullaniciKaydet } from '@/actions/kullanici'
import GonderButon from '@/components/GonderButon'

export default function KayitPage() {
  return (
    <form action={kullaniciKaydet}>
      <input name="ad" type="text" placeholder="Ad Soyad" required />
      <input name="email" type="email" placeholder="E-posta" required />
      <input name="sifre" type="password" placeholder="Şifre" required />
      {/* useFormStatus form elementinin içinde olmalı */}
      <GonderButon />
    </form>
  )
}
```

`useFormStatus` yalnızca `<form>` elementinin içinde bir Client Component'ta çalışır. Formun kendisi dışına koyarsan `pending` her zaman `false` döner.

## `useActionState` ile Form State Yönetimi

`useActionState`, Server Action'ın döndürdüğü değeri yönetmeni ve hata mesajlarını forma yansıtmanı sağlar.

```tsx
// app/kayit/KayitFormu.tsx
'use client'

import { useActionState } from 'react'
import { kullaniciKaydet, type KayitDurumu } from '@/actions/kullanici'
import GonderButon from '@/components/GonderButon'

const baslangicDurumu: KayitDurumu = {}

export default function KayitFormu() {
  // useActionState: [durum, action] döndürür
  const [durum, action] = useActionState(kullaniciKaydet, baslangicDurumu)

  return (
    <form action={action}>
      <div>
        <label htmlFor="ad">Ad Soyad</label>
        <input id="ad" name="ad" type="text" />
        {/* Hata varsa göster */}
        {durum.hatalar?.ad && (
          <span style={{ color: 'red' }}>{durum.hatalar.ad[0]}</span>
        )}
      </div>

      <div>
        <label htmlFor="email">E-posta</label>
        <input id="email" name="email" type="email" />
        {durum.hatalar?.email && (
          <span style={{ color: 'red' }}>{durum.hatalar.email[0]}</span>
        )}
      </div>

      <div>
        <label htmlFor="sifre">Şifre</label>
        <input id="sifre" name="sifre" type="password" />
        {durum.hatalar?.sifre && (
          <span style={{ color: 'red' }}>{durum.hatalar.sifre[0]}</span>
        )}
      </div>

      {/* Genel hata mesajı */}
      {durum.mesaj && <p style={{ color: 'red' }}>{durum.mesaj}</p>}

      <GonderButon />
    </form>
  )
}
```

```tsx
// app/kayit/page.tsx — Server Component, formu import ediyor
import KayitFormu from './KayitFormu'

export default function KayitPage() {
  return (
    <main>
      <h1>Kayıt Ol</h1>
      <KayitFormu />
    </main>
  )
}
```

## `revalidatePath()` ve `revalidateTag()`

Mutation işleminden sonra ilgili sayfa veya cache etiketini temizlemen gerekir; aksi takdirde kullanıcı eski veriyi görmeye devam eder.

```ts
'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

export async function makaleGuncelle(id: string, formData: FormData) {
  const baslik = formData.get('baslik') as string
  await db.makaleler.update({ where: { id }, data: { baslik } })

  // /makaleler sayfasını yenile
  revalidatePath('/makaleler')

  // Belirli bir makale sayfasını yenile
  revalidatePath(`/makaleler/${id}`)

  // 'makaleler' etiketiyle cache'lenmiş tüm fetch'leri temizle
  revalidateTag('makaleler')
}
```

`revalidateTag` kullanmak için fetch çağrısında etiket belirtmen gerekir:

```ts
const res = await fetch('https://api.ornek.com/makaleler', {
  next: { tags: ['makaleler'] },
})
```

## Optimistic UI: `useOptimistic`

Sunucudan yanıt beklenmeden UI'ı hemen güncellemek için `useOptimistic` kullanılır. Sunucudan hata gelirse otomatik olarak eski duruma geri döner.

```tsx
// app/components/BegeniButon.tsx
'use client'

import { useOptimistic, startTransition } from 'react'
import { begeniEkle } from '@/actions/begeni'

export default function BegeniButon({
  makaleId,
  baslangicSayisi,
}: {
  makaleId: string
  baslangicSayisi: number
}) {
  const [optimistikSayi, artir] = useOptimistic(
    baslangicSayisi,
    (mevcutSayi: number) => mevcutSayi + 1
  )

  async function handleBegeni() {
    startTransition(async () => {
      // Önce UI'ı güncelle
      artir(undefined)
      // Sonra sunucuya gönder
      await begeniEkle(makaleId)
    })
  }

  return (
    <button onClick={handleBegeni}>
      {optimistikSayi} beğeni
    </button>
  )
}
```

## Server Action Güvenliği

Server Actions otomatik olarak CSRF koruması sağlar — her action için Next.js gizli bir token kullanır. Ama bu, girdi doğrulamanın önemini ortadan kaldırmaz.

Dikkat edilmesi gerekenler:

- **Her zaman sunucuda doğrula:** Tarayıcıda doğrulama yap, ama asıl güvenlik Server Action'dadır. İstemci tarafı atlanabilir.
- **Yetki kontrolü:** Kullanıcının o işlemi yapmaya hakkı olup olmadığını kontrol et.
- **Rate limiting:** Tekrarlayan isteklere karşı koruma ekle.

```ts
// app/actions/makale.ts
'use server'

import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export async function makaleSil(id: string) {
  // Kullanıcı giriş yapmış mı?
  const oturum = await auth()
  if (!oturum) redirect('/giris')

  // Kullanıcı bu makaleye sahip mi?
  const makale = await db.makaleler.findUnique({ where: { id } })
  if (makale?.kullaniciId !== oturum.kullanici.id) {
    throw new Error('Bu işlem için yetkiniz yok')
  }

  await db.makaleler.delete({ where: { id } })
  revalidatePath('/makaleler')
}
```

## Client Component'tan Server Action Çağırma

Formun `action` prop'u dışında bir Event handler veya `startTransition` ile de Server Action çağırabilirsin:

```tsx
// app/components/SilButon.tsx
'use client'

import { startTransition } from 'react'
import { makaleSil } from '@/actions/makale'

export default function SilButon({ makaleId }: { makaleId: string }) {
  function handleSil() {
    startTransition(async () => {
      await makaleSil(makaleId)
    })
  }

  return (
    <button onClick={handleSil} style={{ color: 'red' }}>
      Sil
    </button>
  )
}
```

`startTransition` kullanmak React'e bu güncellemenin acil olmadığını bildirir ve UI'ın donmasını engeller.

## Özet

Server Actions, form ve mutation işlemlerini basitleştirir: sunucuda bir fonksiyon yaz, forma `action` olarak ver, gerekirse `useFormStatus` ile loading durumu göster ve `useActionState` ile hata mesajlarını forma yansıt. `revalidatePath()` ve `revalidateTag()` ile mutation sonrası cache'i temizlemeyi unutma — aksi takdirde kullanıcı güncellenen veriyi görmez.
