# Fonksiyonlar ve Tip Tanımlamaları

TypeScript'te fonksiyonlar, parametre ve dönüş değeri tipleri ile güçlendirilmiştir. Bu derste fonksiyonlarla ilgili tüm detayları öğreneceksiniz.

## Fonksiyon Tip Tanımlamaları

### Temel Fonksiyon Tanımlama

```typescript
// Parametre ve dönüş tipi belirtilmiş
function topla(a: number, b: number): number {
  return a + b;
}

// Arrow function
const cikar = (a: number, b: number): number => {
  return a - b;
};

// Tek satırlık arrow function
const carp = (a: number, b: number): number => a * b;
```

### Dönüş Tipi Çıkarımı

TypeScript, dönüş tipini otomatik olarak çıkarabilir:

```typescript
// Dönüş tipi otomatik olarak number çıkarılır
function topla(a: number, b: number) {
  return a + b;
}

// Ama açıkça belirtmek daha iyidir
function cikar(a: number, b: number): number {
  return a - b;
}
```

## Opsiyonel Parametreler

Parametrelerin sonuna `?` ekleyerek opsiyonel yapabilirsiniz:

```typescript
function selamla(ad: string, soyad?: string): string {
  if (soyad) {
    return `Merhaba, ${ad} ${soyad}!`;
  }
  return `Merhaba, ${ad}!`;
}

console.log(selamla("Ahmet"));              // "Merhaba, Ahmet!"
console.log(selamla("Ahmet", "Yılmaz"));    // "Merhaba, Ahmet Yılmaz!"
```

**Örnek: Opsiyonel Parametreler**

```typescript
interface UrunAyarlari {
  indirimOrani?: number;
  kargo?: number;
  vergi?: number;
}

function fiyatHesapla(
  fiyat: number,
  ayarlar?: UrunAyarlari
): number {
  let sonuc = fiyat;
  
  if (ayarlar?.indirimOrani) {
    sonuc = sonuc * (1 - ayarlar.indirimOrani);
  }
  
  if (ayarlar?.kargo) {
    sonuc += ayarlar.kargo;
  }
  
  if (ayarlar?.vergi) {
    sonuc = sonuc * (1 + ayarlar.vergi);
  }
  
  return sonuc;
}

console.log(fiyatHesapla(100));
console.log(fiyatHesapla(100, { indirimOrani: 0.2 }));
console.log(fiyatHesapla(100, { indirimOrani: 0.2, kargo: 15, vergi: 0.18 }));
```

## Varsayılan Parametreler

```typescript
function guvenliTopla(a: number, b: number = 0): number {
  return a + b;
}

console.log(guvenliTopla(5));      // 5
console.log(guvenliTopla(5, 3));   // 8

function kullaniciOlustur(
  ad: string,
  rol: string = "kullanici",
  aktif: boolean = true
): object {
  return { ad, rol, aktif };
}

console.log(kullaniciOlustur("Ahmet"));
console.log(kullaniciOlustur("Ayşe", "admin"));
console.log(kullaniciOlustur("Mehmet", "moderator", false));
```

## Rest Parametreler

Belirsiz sayıda parametre almak için:

```typescript
function topla(...sayilar: number[]): number {
  return sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
}

console.log(topla(1, 2, 3));           // 6
console.log(topla(1, 2, 3, 4, 5));     // 15
console.log(topla());                   // 0
```

**Örnek: Rest Parametreler**

```typescript
function enBuyukBul(...sayilar: number[]): number | null {
  if (sayilar.length === 0) return null;
  return Math.max(...sayilar);
}

function birlestir(ayrac: string, ...metinler: string[]): string {
  return metinler.join(ayrac);
}

function ortalama(...notlar: number[]): number {
  if (notlar.length === 0) return 0;
  const toplam = notlar.reduce((acc, not) => acc + not, 0);
  return toplam / notlar.length;
}

console.log(enBuyukBul(5, 10, 3, 8, 15));
console.log(birlestir(" - ", "Ahmet", "Ayşe", "Mehmet"));
console.log(ortalama(85, 90, 78, 92));
```

## Function Type (Fonksiyon Tipi)

Fonksiyonları değişkenlere atarken tip tanımlama:

```typescript
// Fonksiyon tipi tanımlama
let islem: (a: number, b: number) => number;

islem = function(a: number, b: number): number {
  return a + b;
};

islem = (a: number, b: number): number => a * b;

// Kullanım
console.log(islem(5, 3));
```

**Örnek: Callback Fonksiyonları**

```typescript
type IslemCallback = (sonuc: number) => void;

function hesapla(
  a: number,
  b: number,
  islem: (a: number, b: number) => number,
  callback: IslemCallback
): void {
  const sonuc = islem(a, b);
  callback(sonuc);
}

// Kullanım
hesapla(10, 5, (a, b) => a + b, (sonuc) => {
  console.log(`Toplam: ${sonuc}`);
});

hesapla(10, 5, (a, b) => a * b, (sonuc) => {
  console.log(`Çarpım: ${sonuc}`);
});
```

## Overload (Aşırı Yükleme)

Aynı fonksiyonun farklı parametre tipleriyle çalışması:

```typescript
// Overload imzaları
function birlestir(a: string, b: string): string;
function birlestir(a: number, b: number): number;
function birlestir(a: string[], b: string[]): string[];

// Gerçek implementasyon
function birlestir(a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b];
  }
}

console.log(birlestir("Merhaba ", "Dünya"));     // "Merhaba Dünya"
console.log(birlestir(5, 10));                    // 15
console.log(birlestir(["a", "b"], ["c", "d"]));  // ["a", "b", "c", "d"]
```

**Örnek: Gelişmiş Overload**

```typescript
interface Kullanici {
  id: number;
  ad: string;
}

// Overload imzaları
function kullaniciBul(id: number): Kullanici | undefined;
function kullaniciBul(ad: string): Kullanici | undefined;
function kullaniciBul(idVeyaAd: number | string): Kullanici | undefined {
  const kullanicilar: Kullanici[] = [
    { id: 1, ad: "Ahmet" },
    { id: 2, ad: "Ayşe" },
    { id: 3, ad: "Mehmet" }
  ];

  if (typeof idVeyaAd === "number") {
    return kullanicilar.find(k => k.id === idVeyaAd);
  } else {
    return kullanicilar.find(k => k.ad === idVeyaAd);
  }
}

console.log(kullaniciBul(1));        // { id: 1, ad: "Ahmet" }
console.log(kullaniciBul("Ayşe"));   // { id: 2, ad: "Ayşe" }
```

## Generic Fonksiyonlar

Farklı tiplerle çalışabilen fonksiyonlar:

```typescript
// Generic fonksiyon
function ilkEleman<T>(dizi: T[]): T | undefined {
  return dizi[0];
}

const sayilar = [1, 2, 3, 4, 5];
const isimler = ["Ahmet", "Ayşe", "Mehmet"];

console.log(ilkEleman(sayilar));   // 1 (number)
console.log(ilkEleman(isimler));   // "Ahmet" (string)
```

**Örnek: Generic Fonksiyonlar**

```typescript
function diziCevir<T, U>(dizi: T[], donusturucu: (item: T) => U): U[] {
  return dizi.map(donusturucu);
}

const sayilar = [1, 2, 3, 4, 5];
const stringler = diziCevir(sayilar, sayi => sayi.toString());
console.log(stringler); // ["1", "2", "3", "4", "5"]

const kareler = diziCevir(sayilar, sayi => sayi * sayi);
console.log(kareler); // [1, 4, 9, 16, 25]

// Çoklu generic tipler
function cift<T, U>(ilk: T, ikinci: U): [T, U] {
  return [ilk, ikinci];
}

console.log(cift("Ahmet", 25));        // ["Ahmet", 25]
console.log(cift(true, "aktif"));      // [true, "aktif"]
```

## This Parametresi

Fonksiyonlarda `this` tipini belirtme:

```typescript
interface Kart {
  deger: number;
  goster(this: Kart): void;
}

const kart: Kart = {
  deger: 42,
  goster: function(this: Kart) {
    console.log(`Kart değeri: ${this.deger}`);
  }
};

kart.goster(); // Çalışır
```

## Pratik Örnekler

### Örnek 1: Doğrulama Fonksiyonları

```typescript
type DogrulamaHatasi = string | null;

function emailDogrula(email: string): DogrulamaHatasi {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Geçersiz email formatı";
  }
  return null;
}

function sifreDogrula(sifre: string): DogrulamaHatasi {
  if (sifre.length < 8) {
    return "Şifre en az 8 karakter olmalıdır";
  }
  if (!/[A-Z]/.test(sifre)) {
    return "Şifre en az bir büyük harf içermelidir";
  }
  if (!/[0-9]/.test(sifre)) {
    return "Şifre en az bir rakam içermelidir";
  }
  return null;
}

function yasDogrula(yas: number): DogrulamaHatasi {
  if (yas < 0) {
    return "Yaş negatif olamaz";
  }
  if (yas < 18) {
    return "18 yaşından küçükler kayıt olamaz";
  }
  if (yas > 120) {
    return "Geçersiz yaş değeri";
  }
  return null;
}

// Kullanım
const emailHata = emailDogrula("test@example.com");
if (emailHata) {
  console.log(`Email Hatası: ${emailHata}`);
} else {
  console.log("Email geçerli");
}

const sifreHata = sifreDogrula("Abc123");
if (sifreHata) {
  console.log(`Şifre Hatası: ${sifreHata}`);
}
```

### Örnek 2: Dizi İşlemleri

```typescript
function filtrele<T>(
  dizi: T[],
  kosul: (item: T) => boolean
): T[] {
  return dizi.filter(kosul);
}

function bul<T>(
  dizi: T[],
  kosul: (item: T) => boolean
): T | undefined {
  return dizi.find(kosul);
}

function sirala<T>(
  dizi: T[],
  karsilastir: (a: T, b: T) => number
): T[] {
  return [...dizi].sort(karsilastir);
}

function grupla<T, K extends string | number>(
  dizi: T[],
  anahtar: (item: T) => K
): Record<K, T[]> {
  return dizi.reduce((gruplar, item) => {
    const grup = anahtar(item);
    if (!gruplar[grup]) {
      gruplar[grup] = [];
    }
    gruplar[grup].push(item);
    return gruplar;
  }, {} as Record<K, T[]>);
}

// Kullanım
interface Urun {
  id: number;
  ad: string;
  fiyat: number;
  kategori: string;
}

const urunler: Urun[] = [
  { id: 1, ad: "Laptop", fiyat: 15000, kategori: "Elektronik" },
  { id: 2, ad: "Mouse", fiyat: 100, kategori: "Elektronik" },
  { id: 3, ad: "Kitap", fiyat: 50, kategori: "Kırtasiye" },
  { id: 4, ad: "Kalem", fiyat: 10, kategori: "Kırtasiye" }
];

// Fiyatı 100'den büyük ürünler
const pahalıUrunler = filtrele(urunler, u => u.fiyat > 100);
console.log(pahalıUrunler);

// ID'si 2 olan ürün
const urun = bul(urunler, u => u.id === 2);
console.log(urun);

// Fiyata göre sırala
const siraliUrunler = sirala(urunler, (a, b) => a.fiyat - b.fiyat);
console.log(siraliUrunler);

// Kategoriye göre grupla
const gruplar = grupla(urunler, u => u.kategori);
console.log(gruplar);
```

### Örnek 3: Hesap Makinesi

```typescript
type Islem = "topla" | "cikar" | "carp" | "bol";

function hesapla(a: number, b: number, islem: Islem): number {
  switch (islem) {
    case "topla":
      return a + b;
    case "cikar":
      return a - b;
    case "carp":
      return a * b;
    case "bol":
      if (b === 0) {
        throw new Error("Sıfıra bölme hatası!");
      }
      return a / b;
  }
}

function gelismisHesapla(
  ...islemler: Array<{ a: number; b: number; islem: Islem }>
): number[] {
  return islemler.map(({ a, b, islem }) => hesapla(a, b, islem));
}

// Kullanım
console.log(hesapla(10, 5, "topla"));    // 15
console.log(hesapla(10, 5, "cikar"));    // 5
console.log(hesapla(10, 5, "carp"));     // 50
console.log(hesapla(10, 5, "bol"));      // 2

const sonuclar = gelismisHesapla(
  { a: 10, b: 5, islem: "topla" },
  { a: 10, b: 5, islem: "carp" },
  { a: 10, b: 5, islem: "bol" }
);
console.log(sonuclar); // [15, 50, 2]
```

### Örnek 4: Async Fonksiyonlar

```typescript
// Promise döndüren fonksiyon
function veriGetir(id: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve(`Veri ${id}`);
      } else {
        reject("Geçersiz ID");
      }
    }, 1000);
  });
}

// Async/await kullanımı
async function veriIsle(id: number): Promise<void> {
  try {
    const veri = await veriGetir(id);
    console.log(`İşlenen veri: ${veri}`);
  } catch (hata) {
    console.error(`Hata: ${hata}`);
  }
}

// Birden fazla async işlem
async function cokluVeriGetir(idler: number[]): Promise<string[]> {
  const promises = idler.map(id => veriGetir(id));
  return Promise.all(promises);
}

// Kullanım
veriIsle(1);
veriIsle(-1);

cokluVeriGetir([1, 2, 3]).then(veriler => {
  console.log("Tüm veriler:", veriler);
});
```

### Örnek 5: Curry Fonksiyonları

```typescript
// Curry: Fonksiyonu parçalara bölme
function topla(a: number): (b: number) => number {
  return (b: number) => a + b;
}

const besEkle = topla(5);
console.log(besEkle(10));  // 15
console.log(besEkle(20));  // 25

// Gelişmiş curry
function carp(a: number): (b: number) => (c: number) => number {
  return (b: number) => (c: number) => a * b * c;
}

const ikiIleCarp = carp(2);
const ikiIleUcIleCarp = ikiIleCarp(3);
console.log(ikiIleUcIleCarp(4));  // 24

// Pratik curry örneği
function logOlustur(seviye: string): (mesaj: string) => void {
  return (mesaj: string) => {
    console.log(`[${seviye.toUpperCase()}] ${mesaj}`);
  };
}

const info = logOlustur("info");
const hata = logOlustur("hata");
const uyari = logOlustur("uyari");

info("Uygulama başlatıldı");
hata("Bir hata oluştu");
uyari("Dikkat edilmesi gereken durum");
```

## Fonksiyon Best Practices

### 1. Açık Dönüş Tipleri Kullanın

```typescript
// Kötü
function hesapla(a: number, b: number) {
  return a + b;
}

// İyi
function hesapla(a: number, b: number): number {
  return a + b;
}
```

### 2. Opsiyonel Parametreleri Sonda Tutun

```typescript
// Kötü
function kullaniciOlustur(yas?: number, ad: string) { }

// İyi
function kullaniciOlustur(ad: string, yas?: number) { }
```

### 3. Çok Fazla Parametre Yerine Object Kullanın

```typescript
// Kötü
function urunOlustur(ad: string, fiyat: number, stok: number, kategori: string, aciklama: string) { }

// İyi
interface UrunBilgisi {
  ad: string;
  fiyat: number;
  stok: number;
  kategori: string;
  aciklama: string;
}

function urunOlustur(bilgi: UrunBilgisi) { }
```

### 4. Pure Functions Tercih Edin

```typescript
// Kötü (side effect var)
let toplam = 0;
function ekle(sayi: number) {
  toplam += sayi;
}

// İyi (pure function)
function ekle(toplam: number, sayi: number): number {
  return toplam + sayi;
}
```

## Özet

Bu derste öğrendikleriniz:
- Fonksiyon tip tanımlamaları
- Opsiyonel ve varsayılan parametreler
- Rest parametreler
- Function type ve callback'ler
- Function overload
- Generic fonksiyonlar
- Async fonksiyonlar
- Curry fonksiyonları
- Best practices

Bir sonraki derste Interface ve Type Alias konularını detaylı olarak inceleyeceğiz!
