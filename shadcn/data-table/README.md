# Data Table

Gerçek dünya projelerinde tablolar basit bir `<table>` etiketinin çok ötesine geçer. Sıralama, sayfalama, filtreleme, satır seçimi — bunların hepsini sıfırdan yazmak hem zahmetli hem de hata yapmaya açık. shadcn/ui bu sorunu farklı bir şekilde çözüyor: kendi veri tablosu component'ı sunmak yerine seni **TanStack Table** ile buluşturuyor ve kendi `Table` primitive'lerini üstüne bindirmen için tam özgürlük bırakıyor.

## TanStack Table Nedir?

TanStack Table (eski adıyla React Table), bir **headless UI kütüphanesidir**. "Headless" kelimesi burada kritik: kütüphane sana herhangi bir HTML markup'ı ya da CSS stili vermez. Bunun yerine tablo mantığını — veri işleme, state yönetimi, sıralama algoritmaları, sayfalama hesaplamaları — hazır fonksiyonlar ve hook'lar olarak paketler. Görsel tarafı tamamen sen tasarlarsın.

Bu yaklaşımın pratik faydası şu: aynı tablo mantığını shadcn `Table` component'ıyla, Tailwind class'larıyla veya tamamen özel bir tasarım sistemiyle kullanabilirsin. Kütüphane tasarım kararlarına karışmaz.

TanStack Table; React, Vue, Solid, Svelte ve Qwik'i destekler. Biz React versiyonunu kullanacağız: `@tanstack/react-table`.

### shadcn Table ile Nasıl Birleşiyor?

shadcn'nin `Table` component'ı sadece stillendirilmiş HTML tablo elementleridir: `<Table>`, `<TableHeader>`, `<TableBody>`, `<TableRow>`, `<TableHead>`, `<TableCell>`. TanStack Table ise bu elementlere *ne koyacağını* hesaplar. İkisini birleştirince hem iyi görünen hem de güçlü bir tablo elde edersin.

Kurulum için iki adım yeterli:

```bash
# shadcn Table component'ını ekle
npx shadcn@latest add table

# TanStack Table'ı yükle
npm install @tanstack/react-table
```

---

## ColumnDef Tanımlamak

Her şey kolon tanımlarıyla başlar. `ColumnDef<T>` tipi, tablonun hangi veriye nasıl davranacağını anlatır. `T` burada satır verisinin TypeScript tipidir — bu generic yapı sayesinde her kolondaki `getValue()` ve `row.original` çağrıları tam tip güvenliği sağlar.

Bir `ColumnDef` nesnesinin en çok kullanılan üç alanı şunlardır:

**`accessorKey`**: Veri nesnesinden hangi alanın okunacağını belirtir. `accessorKey: "email"` yazarsan, her satır için `row.email` değeri otomatik olarak bu kolona bağlanır.

**`header`**: Kolon başlığının ne göstereceğini tanımlar. Düz bir string olabilir (`header: "E-posta"`), ya da tıklanabilir buton gibi özel bir JSX döndüren fonksiyon olabilir. Fonksiyon olduğunda `column` nesnesine erişim sağlarsın — bu sayede sıralama gibi işlemleri tetikleyebilirsin.

**`cell`**: Her hücrenin nasıl render edileceğini belirler. Tanımlanmazsa ham değer gösterilir. Tanımlanırsa `row` nesnesine erişerek değeri istediğin biçimde sunabilirsin.

Aşağıda basit bir kolon tanımı örneği var:

```tsx
import { ColumnDef } from "@tanstack/react-table"

// Veri tipini tanımla
type Urun = {
  id: string
  isim: string
  fiyat: number
  stok: number
}

// Kolon tanımları — TypeScript generic ile tam tip güvenliği
const kolonlar: ColumnDef<Urun>[] = [
  {
    accessorKey: "isim",
    header: "Ürün Adı",
    // cell tanımlanmadı — ham değer gösterilir
  },
  {
    accessorKey: "fiyat",
    header: "Fiyat",
    cell: ({ row }) => {
      // Sayısal değeri para birimi formatına çevir
      const fiyat = row.getValue<number>("fiyat")
      return (
        <span className="font-medium">
          {new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY",
          }).format(fiyat)}
        </span>
      )
    },
  },
  {
    accessorKey: "stok",
    header: "Stok",
    cell: ({ row }) => {
      const stok = row.getValue<number>("stok")
      // Stok durumuna göre renk değiştir
      return (
        <span className={stok === 0 ? "text-red-500" : "text-green-600"}>
          {stok === 0 ? "Tükendi" : stok}
        </span>
      )
    },
  },
]
```

---

## useReactTable Hook

Kolon tanımlarını ve veriyi hazırladıktan sonra asıl tablo mantığını `useReactTable` hook'u ile kuarsın. Bu hook, tablonun tüm state'ini ve hesaplamalarını yönetir.

Zorunlu üç parametre vardır:

- **`data`**: Tabloda gösterilecek dizi. Her eleman bir satırı temsil eder.
- **`columns`**: Az önce tanımladığın `ColumnDef` dizisi.
- **`getCoreRowModel`**: Temel satır modelini hesaplayan fonksiyon. Hiçbir özellik eklemesen bile bu zorunlu.

Hook'un döndürdüğü `table` nesnesi üzerinden `getHeaderGroups()` ile header'ları, `getRowModel()` ile satırları çekersin. Render sırasında `flexRender` fonksiyonunu kullanırsın — bu fonksiyon hem düz string hem de JSX döndüren fonksiyonları düzgünce işler.

---

## Sıralama Eklemek

Sıralama için üç şeyi birlikte yapman gerekir: state tutmak, TanStack'e state'i bildirmek ve header'a tetikleyici eklemek.

`SortingState` tipi, hangi kolonun hangi yönde sıralandığını tutan bir dizidir. Başlangıçta boş diziyle başlarsın, kullanıcı bir header'a tıkladığında bu dizi güncellenir.

`getSortedRowModel` fonksiyonunu `useReactTable`'a eklediğinde TanStack, sıralama state'ine göre satırları otomatik olarak yeniden sıralar. Sen sadece `column.toggleSorting()` çağrısını tetiklersin, geri kalanı otomatik olur.

---

## Sayfalama Eklemek

Sayfalama da aynı pattern'ı izler: `getPaginationRowModel` eklersin, `table.previousPage()` ve `table.nextPage()` metodlarını butonlara bağlarsın, `table.getCanPreviousPage()` ve `table.getCanNextPage()` ile butonları disable/enable edersin.

Varsayılan sayfa boyutu 10'dur. İstersen `initialState: { pagination: { pageSize: 20 } }` ile değiştirebilirsin.

---

## Tam Örnek: Kullanıcı Tablosu

Aşağıdaki component sıralama ve sayfalama özelliklerini bir arada gösteriyor. Gerçek projende bunu `data-table.tsx` gibi bir dosyaya koyar, `columns.tsx`'i ayrı tutarsın.

```tsx
"use client"

import { useState } from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

// Tip tanımı
type Kullanici = {
  id: string
  ad: string
  email: string
  rol: "admin" | "uye"
}

// Kolon tanımları
const kolonlar: ColumnDef<Kullanici>[] = [
  {
    accessorKey: "ad",
    header: ({ column }) => (
      // Tıklanabilir header — sıralama tetikler
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Ad
      </Button>
    ),
  },
  {
    accessorKey: "email",
    header: "E-posta",
  },
  {
    accessorKey: "rol",
    header: "Rol",
    cell: ({ row }) => (
      // Rol değerini büyük harfle göster
      <span className="capitalize">{row.getValue("rol")}</span>
    ),
  },
]

// Ana DataTable component'ı
export function KullaniciTablosu({ veriler }: { veriler: Kullanici[] }) {
  const [siralama, setSiralama] = useState<SortingState>([])

  const tablo = useReactTable({
    data: veriler,
    columns: kolonlar,
    state: {
      sorting: siralama,
    },
    onSortingChange: setSiralama,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {tablo.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {tablo.getRowModel().rows.length ? (
              tablo.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={kolonlar.length} className="text-center">
                  Veri yok
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Sayfalama kontrolleri */}
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => tablo.previousPage()}
          disabled={!tablo.getCanPreviousPage()}
        >
          Önceki
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => tablo.nextPage()}
          disabled={!tablo.getCanNextPage()}
        >
          Sonraki
        </Button>
      </div>
    </div>
  )
}
```

---

## Dosya Yapısı Önerisi

Tablo mantığı büyüdükçe her şeyi tek dosyada tutmak zorlaşır. shadcn'nin önerdiği yapı şu şekilde:

```
app/kullanicilar/
├── columns.tsx      # Kolon tanımları — "use client" gerekiyor
├── data-table.tsx   # useReactTable ve render mantığı
└── page.tsx         # Server component — veri çekme burada
```

`page.tsx` bir Server Component olduğundan veriyi doğrudan database'den ya da API'dan çekebilirsin. Sonra bu veriyi `DataTable` component'ına prop olarak geçersin. `columns.tsx` ve `data-table.tsx` ise `"use client"` direktifiyle client-side çalışır çünkü TanStack Table'ın hook'ları React state kullanır.

Bu ayrım hem performans açısından (data fetching server'da kalır) hem de test edilebilirlik açısından avantajlıdır.

---

## Ne Zaman Daha Fazlasına İhtiyaç Duyarsın?

Temel data table yukarıdaki kadar. Ama projeler büyüdükçe şu özellikleri de ekleyebilirsin:

**Filtreleme**: `getFilteredRowModel` ve `onColumnFiltersChange` ile kolon bazlı arama ekleyebilirsin. Bir `Input` component'ını `table.getColumn("email")?.setFilterValue(value)` ile bağlamak yeterli.

**Kolon görünürlüğü**: `VisibilityState` ve `onColumnVisibilityChange` ile kullanıcıların hangi kolonları göreceğini seçmesine izin verebilirsin. Genellikle bir `DropdownMenu` içinde checkbox'larla sunulur.

**Satır seçimi**: `rowSelection` state'i ve `onRowSelectionChange` ile checkbox'lı satır seçimi ekleyebilirsin. Seçilen satır sayısını `table.getFilteredSelectedRowModel().rows.length` ile okursun.

**Custom header component'ı**: Tekrarlayan sort button mantığını `DataTableColumnHeader` adında bir component'a çıkarabilirsin. Hem ASC/DESC seçenekleri sunar hem de kolon görünürlüğünü toggle eder.

Bu özelliklerin tamamı `useReactTable` hook'una eklediğin model fonksiyonları ve state'lerle aktive olur — her seferinde aynı pattern.
