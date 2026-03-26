# Interface ve Type Alias

TypeScript'te karmaşık tipleri tanımlamak için iki ana yöntem vardır: **Interface** ve **Type Alias**. Bu derste ikisini de detaylı olarak öğreneceksiniz.

## Interface Nedir?

Interface, bir nesnenin şeklini (shape) tanımlar. Hangi özelliklere sahip olması gerektiğini belirtir.

### Temel Interface Kullanımı

```typescript
interface Kullanici {
  id: number;
  ad: string;
  email: string;
  yas: number;
}

const kullanici1: Kullanici = {
  id: 1,
  ad: "Ahmet Yılmaz",
  email: "ahmet@example.com",
  yas: 25
};

// Eksik özellik - HATA
const kullanici2: Kullanici = {
  id: 2,
  ad: "Ayşe Demir"
  // email ve yas eksik - HATA!
};
```

### Opsiyonel Özellikler

```typescript
interface Urun {
  id: number;
  ad: string;
  fiyat: number;
  aciklama?: string;  // Opsiyonel
  resim?: string;     // Opsiyonel
}

const urun1: Urun = {
  id: 1,
  ad: "Laptop",
  fiyat: 15000
  // aciklama ve resim olmayabilir
};

const urun2: Urun = {
  id: 2,
  ad: "Mouse",
  fiyat: 100,
  aciklama: "Kablosuz mouse"
};
```

### Readonly Özellikler

```typescript
interface Nokta {
  readonly x: number;
  readonly y: number;
}

const nokta: Nokta = { x: 10, y: 20 };
// nokta.x = 5; // HATA: readonly özellik değiştirilemez
```

**Örnek: Readonly Kullanımı**

```typescript
interface Ayarlar {
  readonly apiUrl: string;
  readonly apiKey: string;
  timeout: number;
  retryCount: number;
}

const ayarlar: Ayarlar = {
  apiUrl: "https://api.example.com",
  apiKey: "abc123",
  timeout: 5000,
  retryCount: 3
};

// ayarlar.apiUrl = "yeni-url"; // HATA
ayarlar.timeout = 10000; // Çalışır
```

## Interface ile Fonksiyon Tanımlama

```typescript
interface Hesaplama {
  (a: number, b: number): number;
}

const topla: Hesaplama = (a, b) => a + b;
const cikar: Hesaplama = (a, b) => a - b;
const carp: Hesaplama = (a, b) => a * b;

console.log(topla(5, 3));   // 8
console.log(cikar(5, 3));   // 2
console.log(carp(5, 3));    // 15
```

## Interface Extending (Genişletme)

Bir interface başka bir interface'i genişletebilir:

```typescript
interface Kisi {
  ad: string;
  soyad: string;
}

interface Calisan extends Kisi {
  sirketId: number;
  pozisyon: string;
  maas: number;
}

const calisan: Calisan = {
  ad: "Ahmet",
  soyad: "Yılmaz",
  sirketId: 1001,
  pozisyon: "Yazılım Geliştirici",
  maas: 15000
};
```

**Örnek: Çoklu Genişletme**

```typescript
interface Adres {
  sehir: string;
  ilce: string;
  postaKodu: string;
}

interface Iletisim {
  telefon: string;
  email: string;
}

interface Musteri extends Kisi, Adres, Iletisim {
  musteriNo: number;
  kayitTarihi: Date;
}

const musteri: Musteri = {
  ad: "Ayşe",
  soyad: "Demir",
  sehir: "İstanbul",
  ilce: "Kadıköy",
  postaKodu: "34000",
  telefon: "555-1234",
  email: "ayse@example.com",
  musteriNo: 5001,
  kayitTarihi: new Date()
};
```

## Type Alias Nedir?

Type Alias, herhangi bir tip için yeni bir isim oluşturur.

### Temel Type Alias Kullanımı

```typescript
type ID = number | string;
type Durum = "aktif" | "pasif" | "beklemede";

let kullaniciId: ID = 123;
kullaniciId = "abc-123";

let siparisDurum: Durum = "aktif";
// siparisDurum = "iptal"; // HATA: "iptal" geçerli bir değer değil
```

### Object Type Alias

```typescript
type Kullanici = {
  id: number;
  ad: string;
  email: string;
  aktif: boolean;
};

const kullanici: Kullanici = {
  id: 1,
  ad: "Mehmet",
  email: "mehmet@example.com",
  aktif: true
};
```

## Interface vs Type Alias

### Benzerlikler

Her ikisi de nesne şekillerini tanımlayabilir:

```typescript
// Interface
interface KullaniciInterface {
  ad: string;
  yas: number;
}

// Type Alias
type KullaniciType = {
  ad: string;
  yas: number;
};
```

### Farklar

#### 1. Genişletme (Extending)

```typescript
// Interface - extends kullanır
interface Hayvan {
  ad: string;
}

interface Kedi extends Hayvan {
  miyavla(): void;
}

// Type - intersection (&) kullanır
type Hayvan2 = {
  ad: string;
};

type Kedi2 = Hayvan2 & {
  miyavla(): void;
};
```

#### 2. Declaration Merging

Interface'ler birleştirilebilir, type'lar birleştirilemez:

```typescript
// Interface - Birleştirme çalışır
interface Pencere {
  baslik: string;
}

interface Pencere {
  genislik: number;
}

const pencere: Pencere = {
  baslik: "Ana Pencere",
  genislik: 800
};

// Type - Birleştirme çalışmaz
type Pencere2 = {
  baslik: string;
};

// type Pencere2 = {  // HATA: Duplicate identifier
//   genislik: number;
// };
```

#### 3. Union Types

Type Alias union types oluşturabilir, interface oluşturamaz:

```typescript
type Sonuc = "basarili" | "basarisiz";
type Deger = string | number | boolean;
type Cevap = { durum: "ok"; veri: any } | { durum: "hata"; mesaj: string };

// Interface ile union yapılamaz
```

## Pratik Örnekler

### Örnek 1: E-Ticaret Sistemi

```typescript
interface Urun {
  id: number;
  ad: string;
  fiyat: number;
  stok: number;
  kategori: Kategori;
  resimler: string[];
  aciklama?: string;
}

interface Kategori {
  id: number;
  ad: string;
  ustKategori?: Kategori;
}

interface SepetItem {
  urun: Urun;
  adet: number;
}

interface Sepet {
  items: SepetItem[];
  toplamFiyat(): number;
  urunEkle(urun: Urun, adet: number): void;
  urunCikar(urunId: number): void;
}

class AlisverisSepeti implements Sepet {
  items: SepetItem[] = [];

  toplamFiyat(): number {
    return this.items.reduce(
      (toplam, item) => toplam + item.urun.fiyat * item.adet,
      0
    );
  }

  urunEkle(urun: Urun, adet: number): void {
    const mevcutItem = this.items.find(item => item.urun.id === urun.id);
    if (mevcutItem) {
      mevcutItem.adet += adet;
    } else {
      this.items.push({ urun, adet });
    }
  }

  urunCikar(urunId: number): void {
    this.items = this.items.filter(item => item.urun.id !== urunId);
  }
}
```

### Örnek 2: API Response Types

```typescript
type ApiDurum = "loading" | "success" | "error";

interface ApiResponse<T> {
  durum: ApiDurum;
  veri?: T;
  hata?: string;
  timestamp: number;
}

interface Kullanici {
  id: number;
  ad: string;
  email: string;
}

interface Urun {
  id: number;
  ad: string;
  fiyat: number;
}

// Kullanım
const kullaniciResponse: ApiResponse<Kullanici> = {
  durum: "success",
  veri: {
    id: 1,
    ad: "Ahmet",
    email: "ahmet@example.com"
  },
  timestamp: Date.now()
};

const urunResponse: ApiResponse<Urun[]> = {
  durum: "success",
  veri: [
    { id: 1, ad: "Laptop", fiyat: 15000 },
    { id: 2, ad: "Mouse", fiyat: 100 }
  ],
  timestamp: Date.now()
};

const hataResponse: ApiResponse<null> = {
  durum: "error",
  hata: "Sunucu hatası",
  timestamp: Date.now()
};
```

### Örnek 3: Form Validation

```typescript
type DogrulamaKurali = {
  tip: "required" | "minLength" | "maxLength" | "pattern" | "custom";
  deger?: any;
  mesaj: string;
  dogrula?: (deger: any) => boolean;
};

interface FormAlani {
  ad: string;
  etiket: string;
  tip: "text" | "email" | "password" | "number";
  deger: string;
  kurallar: DogrulamaKurali[];
}

interface FormHata {
  alan: string;
  mesaj: string;
}

class FormDogrulayici {
  dogrula(alan: FormAlani): FormHata | null {
    for (const kural of alan.kurallar) {
      switch (kural.tip) {
        case "required":
          if (!alan.deger || alan.deger.trim() === "") {
            return { alan: alan.ad, mesaj: kural.mesaj };
          }
          break;
        
        case "minLength":
          if (alan.deger.length < kural.deger) {
            return { alan: alan.ad, mesaj: kural.mesaj };
          }
          break;
        
        case "maxLength":
          if (alan.deger.length > kural.deger) {
            return { alan: alan.ad, mesaj: kural.mesaj };
          }
          break;
        
        case "pattern":
          if (!kural.deger.test(alan.deger)) {
            return { alan: alan.ad, mesaj: kural.mesaj };
          }
          break;
        
        case "custom":
          if (kural.dogrula && !kural.dogrula(alan.deger)) {
            return { alan: alan.ad, mesaj: kural.mesaj };
          }
          break;
      }
    }
    return null;
  }

  formDogrula(alanlar: FormAlani[]): FormHata[] {
    const hatalar: FormHata[] = [];
    for (const alan of alanlar) {
      const hata = this.dogrula(alan);
      if (hata) {
        hatalar.push(hata);
      }
    }
    return hatalar;
  }
}

// Kullanım
const emailAlani: FormAlani = {
  ad: "email",
  etiket: "E-posta",
  tip: "email",
  deger: "test@example.com",
  kurallar: [
    { tip: "required", mesaj: "E-posta zorunludur" },
    {
      tip: "pattern",
      deger: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      mesaj: "Geçerli bir e-posta adresi giriniz"
    }
  ]
};

const dogrulayici = new FormDogrulayici();
const hata = dogrulayici.dogrula(emailAlani);
if (hata) {
  console.log(`Hata: ${hata.mesaj}`);
}
```

### Örnek 4: Event System

```typescript
type EventCallback<T = any> = (data: T) => void;

interface EventMap {
  "kullanici:giris": { kullaniciId: number; zaman: Date };
  "kullanici:cikis": { kullaniciId: number; zaman: Date };
  "urun:eklendi": { urunId: number; adet: number };
  "siparis:olusturuldu": { siparisId: number; tutar: number };
}

class EventEmitter {
  private events: Map<string, EventCallback[]> = new Map();

  on<K extends keyof EventMap>(
    event: K,
    callback: EventCallback<EventMap[K]>
  ): void {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event)!.push(callback);
  }

  emit<K extends keyof EventMap>(event: K, data: EventMap[K]): void {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(data));
    }
  }

  off<K extends keyof EventMap>(
    event: K,
    callback: EventCallback<EventMap[K]>
  ): void {
    const callbacks = this.events.get(event);
    if (callbacks) {
      const index = callbacks.indexOf(callback);
      if (index > -1) {
        callbacks.splice(index, 1);
      }
    }
  }
}

// Kullanım
const emitter = new EventEmitter();

emitter.on("kullanici:giris", (data) => {
  console.log(`Kullanıcı ${data.kullaniciId} giriş yaptı: ${data.zaman}`);
});

emitter.on("siparis:olusturuldu", (data) => {
  console.log(`Sipariş ${data.siparisId} oluşturuldu: ${data.tutar} TL`);
});

emitter.emit("kullanici:giris", {
  kullaniciId: 1,
  zaman: new Date()
});

emitter.emit("siparis:olusturuldu", {
  siparisId: 5001,
  tutar: 1500
});
```

## Index Signatures

Dinamik özellik isimleri için:

```typescript
interface Sozluk {
  [anahtar: string]: string;
}

const turkceIngilizce: Sozluk = {
  "merhaba": "hello",
  "dünya": "world",
  "bilgisayar": "computer"
};

// Herhangi bir string anahtar kullanılabilir
console.log(turkceIngilizce["merhaba"]);
turkceIngilizce["yeni"] = "new";
```

**Örnek: Gelişmiş Index Signature**

```typescript
interface VeriTabani<T> {
  [id: number]: T;
}

interface Kullanici {
  ad: string;
  email: string;
}

const kullanicilar: VeriTabani<Kullanici> = {
  1: { ad: "Ahmet", email: "ahmet@example.com" },
  2: { ad: "Ayşe", email: "ayse@example.com" },
  3: { ad: "Mehmet", email: "mehmet@example.com" }
};

console.log(kullanicilar[1]);
kullanicilar[4] = { ad: "Fatma", email: "fatma@example.com" };
```

## Utility Types ile Interface/Type Kullanımı

```typescript
interface Kullanici {
  id: number;
  ad: string;
  email: string;
  sifre: string;
  rol: string;
}

// Partial - Tüm özellikleri opsiyonel yapar
type KullaniciGuncelleme = Partial<Kullanici>;

// Pick - Belirli özellikleri seçer
type KullaniciOzet = Pick<Kullanici, "id" | "ad" | "email">;

// Omit - Belirli özellikleri çıkarır
type KullaniciPublic = Omit<Kullanici, "sifre">;

// Readonly - Tüm özellikleri readonly yapar
type SabitKullanici = Readonly<Kullanici>;

// Kullanım
const guncelleme: KullaniciGuncelleme = {
  email: "yeni@example.com"
  // Sadece email güncellenebilir
};

const ozet: KullaniciOzet = {
  id: 1,
  ad: "Ahmet",
  email: "ahmet@example.com"
  // sifre ve rol yok
};
```

## Ne Zaman Interface, Ne Zaman Type?

### Interface Kullanın:
✅ Object şekilleri tanımlarken  
✅ Class implementasyonları için  
✅ Declaration merging gerektiğinde  
✅ Kütüphane API'leri oluştururken  

### Type Alias Kullanın:
✅ Union types için  
✅ Tuple types için  
✅ Primitive types için alias  
✅ Mapped types için  
✅ Conditional types için  

## Özet

Bu derste öğrendikleriniz:
- Interface tanımlama ve kullanımı
- Opsiyonel ve readonly özellikler
- Interface extending
- Type Alias tanımlama
- Interface vs Type Alias farkları
- Index signatures
- Utility types
- Pratik örnekler

Bir sonraki derste Class ve Object Oriented Programming konularını inceleyeceğiz!
