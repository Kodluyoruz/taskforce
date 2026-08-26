# Type Guards ve Narrowing

Type guards, runtime'da tipleri kontrol ederek TypeScript'in tip çıkarımını iyileştirir.

## typeof Type Guard

```typescript
function yazdir(deger: string | number): void {
  if (typeof deger === "string") {
    console.log(deger.toUpperCase());  // string metodları
  } else {
    console.log(deger.toFixed(2));     // number metodları
  }
}
```

## instanceof Type Guard

```typescript
class Kedi {
  miyavla(): void {
    console.log("Miyav!");
  }
}

class Kopek {
  havla(): void {
    console.log("Hav hav!");
  }
}

function seslendir(hayvan: Kedi | Kopek): void {
  if (hayvan instanceof Kedi) {
    hayvan.miyavla();
  } else {
    hayvan.havla();
  }
}
```

## in Operator

```typescript
interface Balik {
  yuz(): void;
}

interface Kus {
  uc(): void;
}

function hareketEt(hayvan: Balik | Kus): void {
  if ("yuz" in hayvan) {
    hayvan.yuz();
  } else {
    hayvan.uc();
  }
}
```

## Custom Type Guards

```typescript
interface Kullanici {
  ad: string;
  email: string;
}

function isKullanici(obj: any): obj is Kullanici {
  return obj && typeof obj.ad === "string" && typeof obj.email === "string";
}

function kullaniciIsle(data: unknown): void {
  if (isKullanici(data)) {
    console.log(`Kullanıcı: ${data.ad}`);
  } else {
    console.log("Geçersiz kullanıcı verisi");
  }
}
```

## Nullish Coalescing ve Optional Chaining

```typescript
// Nullish coalescing (??)
const deger = null ?? "varsayılan";  // "varsayılan"
const sayi = 0 ?? 42;                // 0 (0 falsy ama null/undefined değil)

// Optional chaining (?.)
interface Kullanici {
  ad: string;
  adres?: {
    sehir: string;
  };
}

const kullanici: Kullanici = { ad: "Ahmet" };
console.log(kullanici.adres?.sehir);  // undefined (hata vermez)
```

## Discriminated Unions ile Narrowing

```typescript
type Sekil =
  | { tip: "daire"; yaricap: number }
  | { tip: "kare"; kenar: number }
  | { tip: "dikdortgen"; genislik: number; yukseklik: number };

function alanHesapla(sekil: Sekil): number {
  switch (sekil.tip) {
    case "daire":
      return Math.PI * sekil.yaricap ** 2;
    case "kare":
      return sekil.kenar ** 2;
    case "dikdortgen":
      return sekil.genislik * sekil.yukseklik;
  }
}
```

Type guards ile runtime'da güvenli tip kontrolü yapabilir ve TypeScript'in tip çıkarımından faydalanabilirsiniz!
