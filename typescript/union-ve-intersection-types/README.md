# Union ve Intersection Types

## Union Types

Bir değişkenin birden fazla tipte olabileceğini belirtir.

```typescript
function yazdir(deger: string | number): void {
  console.log(deger);
}

yazdir("Merhaba");  // Çalışır
yazdir(42);         // Çalışır
// yazdir(true);    // HATA
```

### Literal Union Types

```typescript
type Yön = "yukari" | "asagi" | "sol" | "sag";

function hareket(yon: Yön): void {
  console.log(`${yon} yönüne hareket ediliyor`);
}

hareket("yukari");  // Çalışır
// hareket("ileri"); // HATA
```

## Intersection Types

Birden fazla tipi birleştirir.

```typescript
interface Isim {
  ad: string;
  soyad: string;
}

interface Iletisim {
  email: string;
  telefon: string;
}

type Kullanici = Isim & Iletisim;

const kullanici: Kullanici = {
  ad: "Ahmet",
  soyad: "Yılmaz",
  email: "ahmet@example.com",
  telefon: "555-1234"
};
```

## Discriminated Unions

```typescript
interface Basarili {
  durum: "basarili";
  veri: any;
}

interface Hata {
  durum: "hata";
  mesaj: string;
}

type Sonuc = Basarili | Hata;

function sonucIsle(sonuc: Sonuc): void {
  if (sonuc.durum === "basarili") {
    console.log("Veri:", sonuc.veri);
  } else {
    console.log("Hata:", sonuc.mesaj);
  }
}
```

## Type Guards

```typescript
function isString(deger: unknown): deger is string {
  return typeof deger === "string";
}

function islemYap(deger: string | number): void {
  if (isString(deger)) {
    console.log(deger.toUpperCase());
  } else {
    console.log(deger.toFixed(2));
  }
}
```

Union ve Intersection types ile esnek ve güvenli tip tanımlamaları yapabilirsiniz!
