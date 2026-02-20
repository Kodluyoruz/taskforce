# TypeScript Temel Tipler

TypeScript'te değişkenlere tip tanımlaması yaparak kodunuzu daha güvenli hale getirebilirsiniz. Bu derste TypeScript'in temel tiplerini öğreneceksiniz.

## Tip Tanımlama Söz Dizimi

```typescript
let degiskenAdi: tip = deger;
```

## 1. Primitive (İlkel) Tipler

### number

Tüm sayısal değerler için kullanılır (tam sayı, ondalık, negatif vb.)

```typescript
let yas: number = 25;
let fiyat: number = 19.99;
let sicaklik: number = -5;
let hexadecimal: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Hatalı kullanım
let sayi: number = "123"; // HATA: Type 'string' is not assignable to type 'number'
```

**Örnek: Matematik İşlemleri**

```typescript
function alanHesapla(genislik: number, yukseklik: number): number {
  return genislik * yukseklik;
}

function cevreHesapla(genislik: number, yukseklik: number): number {
  return 2 * (genislik + yukseklik);
}

const genislik: number = 10;
const yukseklik: number = 5;

console.log(`Alan: ${alanHesapla(genislik, yukseklik)}`);
console.log(`Çevre: ${cevreHesapla(genislik, yukseklik)}`);
```

### string

Metin değerleri için kullanılır.

```typescript
let ad: string = "Ahmet";
let soyad: string = 'Yılmaz';
let mesaj: string = `Merhaba, ${ad} ${soyad}!`; // Template literal

// String metodları
let metin: string = "TypeScript";
console.log(metin.length);           // 10
console.log(metin.toUpperCase());    // TYPESCRIPT
console.log(metin.toLowerCase());    // typescript
console.log(metin.substring(0, 4));  // Type
```

**Örnek: String İşlemleri**

```typescript
function tamAdOlustur(ad: string, soyad: string): string {
  return `${ad} ${soyad}`;
}

function emailOlustur(ad: string, soyad: string, domain: string): string {
  return `${ad.toLowerCase()}.${soyad.toLowerCase()}@${domain}`;
}

const ad: string = "Ayşe";
const soyad: string = "Demir";

console.log(tamAdOlustur(ad, soyad));
console.log(emailOlustur(ad, soyad, "example.com"));
```

### boolean

Mantıksal değerler için kullanılır (true/false).

```typescript
let aktif: boolean = true;
let tamamlandi: boolean = false;

// Karşılaştırma sonuçları
let buyukMu: boolean = 10 > 5;        // true
let esitMi: boolean = "a" === "b";    // false
```

**Örnek: Koşullu Kontroller**

```typescript
function yetiskinMi(yas: number): boolean {
  return yas >= 18;
}

function indirimUygulansinMi(fiyat: number, minimumFiyat: number): boolean {
  return fiyat >= minimumFiyat;
}

function girisYapabilirMi(kullaniciAdi: string, sifre: string): boolean {
  const dogruKullaniciAdi: string = "admin";
  const dogruSifre: string = "12345";
  return kullaniciAdi === dogruKullaniciAdi && sifre === dogruSifre;
}

console.log(yetiskinMi(20));                    // true
console.log(indirimUygulansinMi(150, 100));     // true
console.log(girisYapabilirMi("admin", "123"));  // false
```

## 2. Özel Tipler

### any

Herhangi bir tip olabilir. Tip kontrolünü devre dışı bırakır (mümkün olduğunca kaçınılmalıdır).

```typescript
let herhangisey: any = 42;
herhangisey = "şimdi string";
herhangisey = true;
herhangisey = { ad: "Ahmet" };

// any kullanımı tip güvenliğini ortadan kaldırır
let deger: any = "merhaba";
console.log(deger.toUpperCase());  // Çalışır
console.log(deger.toFixed(2));     // Çalışma zamanı hatası!
```

**Ne Zaman Kullanılır:**
- Üçüncü parti kütüphaneler
- Dinamik içerik
- Geçici çözümler (sonra düzeltilmeli)

### unknown

`any`'ye benzer ama daha güvenli. Kullanmadan önce tip kontrolü gerektirir.

```typescript
let bilinmeyen: unknown = 42;

// Doğrudan kullanılamaz
// console.log(bilinmeyen.toFixed(2)); // HATA

// Tip kontrolü ile kullanılabilir
if (typeof bilinmeyen === "number") {
  console.log(bilinmeyen.toFixed(2)); // Çalışır
}
```

**Örnek: Güvenli Tip Kontrolü**

```typescript
function islemYap(deger: unknown): string {
  if (typeof deger === "string") {
    return deger.toUpperCase();
  } else if (typeof deger === "number") {
    return deger.toFixed(2);
  } else if (typeof deger === "boolean") {
    return deger ? "Evet" : "Hayır";
  } else {
    return "Bilinmeyen tip";
  }
}

console.log(islemYap("merhaba"));  // MERHABA
console.log(islemYap(42.567));     // 42.57
console.log(islemYap(true));       // Evet
```

### void

Değer döndürmeyen fonksiyonlar için kullanılır.

```typescript
function selamVer(isim: string): void {
  console.log(`Merhaba, ${isim}!`);
  // return değeri yok
}

function logYaz(mesaj: string): void {
  console.log(`[LOG] ${mesaj}`);
}

selamVer("Ahmet");
logYaz("İşlem başarılı");
```

### null ve undefined

```typescript
let bos: null = null;
let tanimsiz: undefined = undefined;

// Genellikle union type ile kullanılır
let isim: string | null = null;
isim = "Ahmet";

let yas: number | undefined = undefined;
yas = 25;
```

**Örnek: Optional Değerler**

```typescript
function kullaniciBul(id: number): string | null {
  const kullanicilar: { [key: number]: string } = {
    1: "Ahmet",
    2: "Ayşe",
    3: "Mehmet"
  };
  
  return kullanicilar[id] || null;
}

const kullanici = kullaniciBul(1);
if (kullanici !== null) {
  console.log(`Kullanıcı bulundu: ${kullanici}`);
} else {
  console.log("Kullanıcı bulunamadı");
}
```

### never

Asla bir değer döndürmeyen fonksiyonlar için kullanılır.

```typescript
function hataFirlat(mesaj: string): never {
  throw new Error(mesaj);
}

function sonsuzDongu(): never {
  while (true) {
    // Sonsuz döngü
  }
}

// Kullanım
function islemYap(deger: string | number): string {
  if (typeof deger === "string") {
    return deger.toUpperCase();
  } else if (typeof deger === "number") {
    return deger.toFixed(2);
  } else {
    // Bu noktaya asla ulaşılmamalı
    return hataFirlat("Beklenmeyen tip");
  }
}
```

## 3. Array (Dizi) Tipleri

İki farklı söz dizimi vardır:

```typescript
// Yöntem 1: Type[]
let sayilar: number[] = [1, 2, 3, 4, 5];
let isimler: string[] = ["Ahmet", "Ayşe", "Mehmet"];
let durumlar: boolean[] = [true, false, true];

// Yöntem 2: Array<Type>
let sayilar2: Array<number> = [1, 2, 3, 4, 5];
let isimler2: Array<string> = ["Ahmet", "Ayşe", "Mehmet"];
```

**Örnek: Dizi İşlemleri**

```typescript
function toplamHesapla(sayilar: number[]): number {
  return sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
}

function ortalamaHesapla(sayilar: number[]): number {
  if (sayilar.length === 0) return 0;
  return toplamHesapla(sayilar) / sayilar.length;
}

function enBuyukBul(sayilar: number[]): number {
  return Math.max(...sayilar);
}

function enKucukBul(sayilar: number[]): number {
  return Math.min(...sayilar);
}

const notlar: number[] = [85, 90, 78, 92, 88];

console.log(`Toplam: ${toplamHesapla(notlar)}`);
console.log(`Ortalama: ${ortalamaHesapla(notlar)}`);
console.log(`En Büyük: ${enBuyukBul(notlar)}`);
console.log(`En Küçük: ${enKucukBul(notlar)}`);
```

**Örnek: String Dizisi İşlemleri**

```typescript
function buyukHarfeCevir(isimler: string[]): string[] {
  return isimler.map(isim => isim.toUpperCase());
}

function filtrele(isimler: string[], harf: string): string[] {
  return isimler.filter(isim => isim.startsWith(harf));
}

function birlestir(isimler: string[], ayrac: string): string {
  return isimler.join(ayrac);
}

const isimler: string[] = ["Ahmet", "Ayşe", "Ali", "Mehmet", "Mustafa"];

console.log(buyukHarfeCevir(isimler));
console.log(filtrele(isimler, "A"));
console.log(birlestir(isimler, ", "));
```

## 4. Tuple (Demet) Tipleri

Sabit sayıda ve belirli tiplerde elemanlar içeren diziler.

```typescript
// Tuple tanımlama
let kisi: [string, number] = ["Ahmet", 25];
let koordinat: [number, number] = [41.0082, 28.9784];
let kullanici: [number, string, boolean] = [1, "admin", true];

// Erişim
console.log(kisi[0]);  // "Ahmet"
console.log(kisi[1]);  // 25

// Hatalı kullanım
// kisi = [25, "Ahmet"]; // HATA: Tip sırası yanlış
// kisi = ["Ahmet"];     // HATA: Eleman sayısı yanlış
```

**Örnek: Tuple Kullanımı**

```typescript
type Ogrenci = [number, string, number, boolean];

function ogrenciOlustur(id: number, ad: string, yas: number, aktif: boolean): Ogrenci {
  return [id, ad, yas, aktif];
}

function ogrenciBilgisi(ogrenci: Ogrenci): string {
  const [id, ad, yas, aktif] = ogrenci;
  const durum = aktif ? "Aktif" : "Pasif";
  return `ID: ${id}, Ad: ${ad}, Yaş: ${yas}, Durum: ${durum}`;
}

const ogrenci1: Ogrenci = ogrenciOlustur(1, "Ahmet", 20, true);
console.log(ogrenciBilgisi(ogrenci1));
```

## 5. Enum (Numaralandırma) Tipleri

İlişkili sabitler kümesi tanımlamak için kullanılır.

### Numeric Enum

```typescript
enum Yön {
  Yukari,    // 0
  Asagi,     // 1
  Sol,       // 2
  Sag        // 3
}

let yon: Yön = Yön.Yukari;
console.log(yon);  // 0

// Özel değerler
enum HttpDurum {
  Basarili = 200,
  Bulunamadi = 404,
  SunucuHatasi = 500
}

let durum: HttpDurum = HttpDurum.Basarili;
console.log(durum);  // 200
```

### String Enum

```typescript
enum Renk {
  Kirmizi = "KIRMIZI",
  Yesil = "YESIL",
  Mavi = "MAVI"
}

let seciliRenk: Renk = Renk.Kirmizi;
console.log(seciliRenk);  // "KIRMIZI"
```

**Örnek: Enum Kullanımı**

```typescript
enum Siparisdurumu {
  Beklemede = "BEKLEMEDE",
  Hazirlaniyor = "HAZIRLANIYOR",
  Kargoda = "KARGODA",
  Teslim = "TESLIM",
  Iptal = "IPTAL"
}

interface Siparis {
  id: number;
  urun: string;
  durum: SiparisDurumu;
}

function siparisDurumuGuncelle(siparis: Siparis, yeniDurum: SiparisDurumu): void {
  siparis.durum = yeniDurum;
  console.log(`Sipariş #${siparis.id} durumu: ${yeniDurum}`);
}

function durumMesaji(durum: SiparisDurumu): string {
  switch (durum) {
    case SiparisDurumu.Beklemede:
      return "Siparişiniz alındı, işleme alınıyor.";
    case SiparisDurumu.Hazirlaniyor:
      return "Siparişiniz hazırlanıyor.";
    case SiparisDurumu.Kargoda:
      return "Siparişiniz kargoya verildi.";
    case SiparisDurumu.Teslim:
      return "Siparişiniz teslim edildi.";
    case SiparisDurumu.Iptal:
      return "Siparişiniz iptal edildi.";
    default:
      return "Bilinmeyen durum.";
  }
}

const siparis: Siparis = {
  id: 1001,
  urun: "Laptop",
  durum: SiparisDurumu.Beklemede
};

console.log(durumMesaji(siparis.durum));
siparisDurumuGuncelle(siparis, SiparisDurumu.Kargoda);
console.log(durumMesaji(siparis.durum));
```

## 6. Object (Nesne) Tipleri

```typescript
// Inline tip tanımlama
let kisi: { ad: string; yas: number } = {
  ad: "Ahmet",
  yas: 25
};

// Opsiyonel özellikler
let kullanici: { ad: string; email?: string } = {
  ad: "Ayşe"
  // email opsiyonel, olmayabilir
};

// Readonly özellikler
let ayarlar: { readonly tema: string; dil: string } = {
  tema: "dark",
  dil: "tr"
};

// ayarlar.tema = "light"; // HATA: readonly özellik değiştirilemez
ayarlar.dil = "en"; // Çalışır
```

**Örnek: Nesne Tipleri**

```typescript
interface Urun {
  id: number;
  ad: string;
  fiyat: number;
  stok: number;
  kategori: string;
  indirimli?: boolean;
}

function urunOlustur(
  id: number,
  ad: string,
  fiyat: number,
  stok: number,
  kategori: string
): Urun {
  return { id, ad, fiyat, stok, kategori };
}

function fiyatHesapla(urun: Urun): number {
  if (urun.indirimli) {
    return urun.fiyat * 0.8; // %20 indirim
  }
  return urun.fiyat;
}

function stokKontrol(urun: Urun): string {
  if (urun.stok === 0) {
    return "Stokta yok";
  } else if (urun.stok < 10) {
    return "Son birkaç ürün";
  } else {
    return "Stokta var";
  }
}

const laptop: Urun = urunOlustur(1, "Laptop", 15000, 5, "Elektronik");
laptop.indirimli = true;

console.log(`${laptop.ad} - ${fiyatHesapla(laptop)} TL`);
console.log(`Stok Durumu: ${stokKontrol(laptop)}`);
```

## 7. Type Assertion (Tip Dönüşümü)

Derleyiciye "ben ne yaptığımı biliyorum" demenin yolu.

```typescript
// as söz dizimi (önerilen)
let deger: any = "bu bir string";
let uzunluk: number = (deger as string).length;

// Angle-bracket söz dizimi
let deger2: any = "bu da bir string";
let uzunluk2: number = (<string>deger2).length;
```

**Örnek: Type Assertion Kullanımı**

```typescript
function elementAl(id: string): HTMLElement | null {
  return document.getElementById(id);
}

// Type assertion ile
const buton = elementAl("myButton") as HTMLButtonElement;
buton.disabled = true;

const input = elementAl("myInput") as HTMLInputElement;
input.value = "Merhaba";
```

## Pratik Örnek: Kütüphane Yönetim Sistemi

```typescript
enum KitapDurumu {
  Mevcut = "MEVCUT",
  OduncVerildi = "ODUNC_VERILDI",
  Bakim = "BAKIM"
}

interface Kitap {
  id: number;
  baslik: string;
  yazar: string;
  isbn: string;
  yayinYili: number;
  durum: KitapDurumu;
  oduncAlan?: string;
}

class Kutuphane {
  private kitaplar: Kitap[] = [];
  private sonrakiId: number = 1;

  kitapEkle(baslik: string, yazar: string, isbn: string, yayinYili: number): Kitap {
    const yeniKitap: Kitap = {
      id: this.sonrakiId++,
      baslik,
      yazar,
      isbn,
      yayinYili,
      durum: KitapDurumu.Mevcut
    };
    this.kitaplar.push(yeniKitap);
    return yeniKitap;
  }

  oduncVer(kitapId: number, kisi: string): boolean {
    const kitap = this.kitaplar.find(k => k.id === kitapId);
    if (kitap && kitap.durum === KitapDurumu.Mevcut) {
      kitap.durum = KitapDurumu.OduncVerildi;
      kitap.oduncAlan = kisi;
      return true;
    }
    return false;
  }

  iadeAl(kitapId: number): boolean {
    const kitap = this.kitaplar.find(k => k.id === kitapId);
    if (kitap && kitap.durum === KitapDurumu.OduncVerildi) {
      kitap.durum = KitapDurumu.Mevcut;
      kitap.oduncAlan = undefined;
      return true;
    }
    return false;
  }

  kitapAra(arama: string): Kitap[] {
    return this.kitaplar.filter(kitap =>
      kitap.baslik.toLowerCase().includes(arama.toLowerCase()) ||
      kitap.yazar.toLowerCase().includes(arama.toLowerCase())
    );
  }

  mevcut Kitaplar(): Kitap[] {
    return this.kitaplar.filter(k => k.durum === KitapDurumu.Mevcut);
  }
}

// Kullanım
const kutuphane = new Kutuphane();

kutuphane.kitapEkle("1984", "George Orwell", "978-0451524935", 1949);
kutuphane.kitapEkle("Suç ve Ceza", "Dostoyevski", "978-0486415871", 1866);
kutuphane.kitapEkle("Simyacı", "Paulo Coelho", "978-0062315007", 1988);

kutuphane.oduncVer(1, "Ahmet Yılmaz");

console.log("Mevcut Kitaplar:");
kutuphane.mevcut Kitaplar().forEach(kitap => {
  console.log(`- ${kitap.baslik} (${kitap.yazar})`);
});
```

## Özet

Bu derste öğrendiğiniz temel tipler:

- **Primitive Tipler**: number, string, boolean
- **Özel Tipler**: any, unknown, void, null, undefined, never
- **Array**: Dizi tipleri
- **Tuple**: Sabit uzunluklu diziler
- **Enum**: Numaralandırma tipleri
- **Object**: Nesne tipleri
- **Type Assertion**: Tip dönüşümü

Bir sonraki derste fonksiyonlar ve tip tanımlamalarını detaylı olarak inceleyeceğiz!
