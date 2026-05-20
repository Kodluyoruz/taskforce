# Class ve Object Oriented Programming

TypeScript, JavaScript'in class yapısını genişleterek güçlü OOP (Object Oriented Programming) özellikleri sunar.

## Temel Class Tanımlama

```typescript
class Kisi {
  ad: string;
  soyad: string;
  yas: number;

  constructor(ad: string, soyad: string, yas: number) {
    this.ad = ad;
    this.soyad = soyad;
    this.yas = yas;
  }

  tamAd(): string {
    return `${this.ad} ${this.soyad}`;
  }

  yetiskinMi(): boolean {
    return this.yas >= 18;
  }
}

const kisi1 = new Kisi("Ahmet", "Yılmaz", 25);
console.log(kisi1.tamAd());
console.log(kisi1.yetiskinMi());
```

## Erişim Belirleyiciler (Access Modifiers)

### public (Varsayılan)

```typescript
class Urun {
  public ad: string;
  public fiyat: number;

  constructor(ad: string, fiyat: number) {
    this.ad = ad;
    this.fiyat = fiyat;
  }
}

const urun = new Urun("Laptop", 15000);
console.log(urun.ad);  // Erişilebilir
```

### private

```typescript
class BankaHesabi {
  private bakiye: number;

  constructor(ilkBakiye: number) {
    this.bakiye = ilkBakiye;
  }

  paraYatir(miktar: number): void {
    this.bakiye += miktar;
  }

  paraCek(miktar: number): boolean {
    if (miktar <= this.bakiye) {
      this.bakiye -= miktar;
      return true;
    }
    return false;
  }

  bakiyeGoster(): number {
    return this.bakiye;
  }
}

const hesap = new BankaHesabi(1000);
// hesap.bakiye = 5000; // HATA: private özellik
hesap.paraYatir(500);
console.log(hesap.bakiyeGoster());
```

### protected

```typescript
class Hayvan {
  protected ad: string;

  constructor(ad: string) {
    this.ad = ad;
  }
}

class Kedi extends Hayvan {
  miyavla(): void {
    console.log(`${this.ad} miyavlıyor`); // protected'a erişilebilir
  }
}

const kedi = new Kedi("Minnoş");
kedi.miyavla();
// console.log(kedi.ad); // HATA: protected özellik
```

## Readonly Özellikler

```typescript
class Kullanici {
  readonly id: number;
  ad: string;

  constructor(id: number, ad: string) {
    this.id = id;
    this.ad = ad;
  }
}

const kullanici = new Kullanici(1, "Ahmet");
kullanici.ad = "Mehmet";  // Çalışır
// kullanici.id = 2;  // HATA: readonly özellik
```

## Getter ve Setter

```typescript
class Dikdortgen {
  private _genislik: number;
  private _yukseklik: number;

  constructor(genislik: number, yukseklik: number) {
    this._genislik = genislik;
    this._yukseklik = yukseklik;
  }

  get alan(): number {
    return this._genislik * this._yukseklik;
  }

  get cevre(): number {
    return 2 * (this._genislik + this._yukseklik);
  }

  set genislik(deger: number) {
    if (deger > 0) {
      this._genislik = deger;
    }
  }

  set yukseklik(deger: number) {
    if (deger > 0) {
      this._yukseklik = deger;
    }
  }
}

const dikdortgen = new Dikdortgen(10, 5);
console.log(dikdortgen.alan);    // 50
console.log(dikdortgen.cevre);   // 30
dikdortgen.genislik = 20;
console.log(dikdortgen.alan);    // 100
```

## Static Members

```typescript
class Matematik {
  static PI: number = 3.14159;

  static daireAlani(yaricap: number): number {
    return this.PI * yaricap * yaricap;
  }

  static daireCevresi(yaricap: number): number {
    return 2 * this.PI * yaricap;
  }
}

// Instance oluşturmadan kullanım
console.log(Matematik.PI);
console.log(Matematik.daireAlani(5));
console.log(Matematik.daireCevresi(5));
```

## Abstract Classes

```typescript
abstract class Sekil {
  abstract alan(): number;
  abstract cevre(): number;

  bilgiYazdir(): void {
    console.log(`Alan: ${this.alan()}`);
    console.log(`Çevre: ${this.cevre()}`);
  }
}

class Kare extends Sekil {
  constructor(private kenar: number) {
    super();
  }

  alan(): number {
    return this.kenar * this.kenar;
  }

  cevre(): number {
    return 4 * this.kenar;
  }
}

class Daire extends Sekil {
  constructor(private yaricap: number) {
    super();
  }

  alan(): number {
    return Math.PI * this.yaricap * this.yaricap;
  }

  cevre(): number {
    return 2 * Math.PI * this.yaricap;
  }
}

const kare = new Kare(5);
kare.bilgiYazdir();

const daire = new Daire(3);
daire.bilgiYazdir();
```

## Interface Implementation

```typescript
interface Calisan {
  ad: string;
  maas: number;
  calis(): void;
}

interface Yonetici {
  ekipBoyutu: number;
  toplantıYap(): void;
}

class Muhendis implements Calisan {
  constructor(
    public ad: string,
    public maas: number,
    public uzmanlik: string
  ) {}

  calis(): void {
    console.log(`${this.ad} ${this.uzmanlik} üzerinde çalışıyor`);
  }
}

class ProjeYoneticisi implements Calisan, Yonetici {
  constructor(
    public ad: string,
    public maas: number,
    public ekipBoyutu: number
  ) {}

  calis(): void {
    console.log(`${this.ad} projeyi yönetiyor`);
  }

  toplantıYap(): void {
    console.log(`${this.ekipBoyutu} kişilik ekiple toplantı yapılıyor`);
  }
}
```

## Inheritance (Kalıtım)

```typescript
class Arac {
  constructor(
    public marka: string,
    public model: string,
    public yil: number
  ) {}

  bilgiGoster(): string {
    return `${this.marka} ${this.model} (${this.yil})`;
  }
}

class Otomobil extends Arac {
  constructor(
    marka: string,
    model: string,
    yil: number,
    public kapiSayisi: number
  ) {
    super(marka, model, yil);
  }

  bilgiGoster(): string {
    return `${super.bilgiGoster()} - ${this.kapiSayisi} kapılı`;
  }
}

const araba = new Otomobil("Toyota", "Corolla", 2023, 4);
console.log(araba.bilgiGoster());
```

## Pratik Örnek: Kullanıcı Yönetim Sistemi

```typescript
enum KullaniciRolu {
  Admin = "ADMIN",
  Moderator = "MODERATOR",
  Kullanici = "KULLANICI"
}

interface IKullanici {
  id: number;
  kullaniciAdi: string;
  email: string;
  rol: KullaniciRolu;
}

abstract class BaseKullanici implements IKullanici {
  constructor(
    public id: number,
    public kullaniciAdi: string,
    public email: string,
    public rol: KullaniciRolu
  ) {}

  abstract yetkiKontrol(islem: string): boolean;

  bilgiGoster(): void {
    console.log(`${this.kullaniciAdi} (${this.rol})`);
  }
}

class Admin extends BaseKullanici {
  constructor(id: number, kullaniciAdi: string, email: string) {
    super(id, kullaniciAdi, email, KullaniciRolu.Admin);
  }

  yetkiKontrol(islem: string): boolean {
    return true; // Admin her şeyi yapabilir
  }

  kullaniciSil(kullaniciId: number): void {
    console.log(`Kullanıcı ${kullaniciId} silindi`);
  }
}

class NormalKullanici extends BaseKullanici {
  constructor(id: number, kullaniciAdi: string, email: string) {
    super(id, kullaniciAdi, email, KullaniciRolu.Kullanici);
  }

  yetkiKontrol(islem: string): boolean {
    const izinliIslemler = ["okuma", "yorum"];
    return izinliIslemler.includes(islem);
  }
}

const admin = new Admin(1, "admin", "admin@example.com");
const kullanici = new NormalKullanici(2, "ahmet", "ahmet@example.com");

console.log(admin.yetkiKontrol("silme"));      // true
console.log(kullanici.yetkiKontrol("silme"));  // false
```

Bu derste class'lar, OOP prensipleri, erişim belirleyiciler, inheritance ve abstract class'ları öğrendik!
