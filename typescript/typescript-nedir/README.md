# TypeScript Nedir?

## TypeScript'e Giriş

TypeScript, Microsoft tarafından geliştirilen ve JavaScript'in bir üst kümesi (superset) olan açık kaynaklı bir programlama dilidir. TypeScript, JavaScript'e **statik tip kontrolü** ve modern programlama özellikleri ekler.

### Neden TypeScript?

JavaScript dinamik tipli bir dildir, yani değişkenlerin tipleri çalışma zamanında belirlenir. Bu esneklik sağlar ancak büyük projelerde hatalara yol açabilir:

```javascript
// JavaScript - Hata çalışma zamanında ortaya çıkar
function topla(a, b) {
  return a + b;
}

console.log(topla(5, 10));        // 15
console.log(topla("5", "10"));    // "510" - Beklenmeyen sonuç!
```

TypeScript ile aynı kod:

```typescript
// TypeScript - Hata geliştirme aşamasında yakalanır
function topla(a: number, b: number): number {
  return a + b;
}

console.log(topla(5, 10));        // 15
console.log(topla("5", "10"));    // HATA: String tipi number'a atanamaz
```

## TypeScript'in Avantajları

### 1. Statik Tip Kontrolü

Kodunuzu yazdığınız sırada hataları yakalar:

```typescript
let yas: number = 25;
yas = "yirmi beş"; // HATA: Type 'string' is not assignable to type 'number'
```

### 2. Daha İyi IDE Desteği

- Otomatik tamamlama (IntelliSense)
- Kod navigasyonu
- Refactoring desteği
- Hata gösterimi

```typescript
interface Kullanici {
  ad: string;
  soyad: string;
  yas: number;
}

const kullanici: Kullanici = {
  ad: "Ahmet",
  soyad: "Yılmaz",
  yas: 30
};

// IDE otomatik olarak kullanici. yazdığınızda ad, soyad, yas önerilerini gösterir
console.log(kullanici.ad);
```

### 3. Erken Hata Tespiti

Kodunuz çalışmadan önce hataları bulur:

```typescript
function selamla(isim: string) {
  return `Merhaba, ${isim}!`;
}

selamla("Ali");     // ✓ Doğru
selamla(123);       // ✗ HATA: Argument of type 'number' is not assignable to parameter of type 'string'
selamla();          // ✗ HATA: Expected 1 arguments, but got 0
```

### 4. Modern JavaScript Özellikleri

TypeScript, en yeni JavaScript özelliklerini destekler ve eski tarayıcılar için derleme yapar:

```typescript
// ES6+ özellikleri
const sayilar = [1, 2, 3, 4, 5];
const kareler = sayilar.map(x => x * x);

// Optional chaining
const kullanici = {
  profil: {
    ad: "Ayşe"
  }
};

console.log(kullanici?.profil?.ad); // "Ayşe"
console.log(kullanici?.adres?.sehir); // undefined (hata vermez)
```

### 5. Daha İyi Kod Organizasyonu

Interface'ler ve type'lar ile kodunuzu daha iyi organize edebilirsiniz:

```typescript
interface Urun {
  id: number;
  ad: string;
  fiyat: number;
  stokta: boolean;
}

interface SepetItem {
  urun: Urun;
  adet: number;
}

class AlisverisSepeti {
  private items: SepetItem[] = [];

  urunEkle(urun: Urun, adet: number): void {
    this.items.push({ urun, adet });
  }

  toplamFiyat(): number {
    return this.items.reduce((toplam, item) => 
      toplam + (item.urun.fiyat * item.adet), 0
    );
  }
}
```

## TypeScript vs JavaScript

| Özellik        | JavaScript     | TypeScript        |
| -------------- | -------------- | ----------------- |
| Tip Sistemi    | Dinamik        | Statik            |
| Hata Tespiti   | Çalışma zamanı | Geliştirme zamanı |
| IDE Desteği    | Sınırlı        | Gelişmiş          |
| Öğrenme Eğrisi | Kolay          | Orta              |
| Derleme        | Gerekli değil  | Gerekli           |
| Dosya Uzantısı | .js            | .ts               |

## TypeScript Nasıl Çalışır?

TypeScript kodu doğrudan tarayıcıda çalışmaz. Önce JavaScript'e derlenmesi gerekir:

```
TypeScript Kodu (.ts)
         ↓
   TypeScript Derleyici (tsc)
         ↓
JavaScript Kodu (.js)
         ↓
   Tarayıcı / Node.js
```

**Örnek:**

TypeScript dosyası (`ornek.ts`):
```typescript
function selamla(isim: string): string {
  return `Merhaba, ${isim}!`;
}

const mesaj = selamla("Dünya");
console.log(mesaj);
```

Derlenmiş JavaScript dosyası (`ornek.js`):
```javascript
function selamla(isim) {
  return "Merhaba, " + isim + "!";
}

var mesaj = selamla("Dünya");
console.log(mesaj);
```

## TypeScript Kullanım Alanları

### 1. Web Uygulamaları
- React, Angular, Vue.js projeleri
- Frontend geliştirme

### 2. Backend Geliştirme
- Node.js uygulamaları
- Express.js, NestJS

### 3. Mobil Uygulama Geliştirme
- React Native
- Ionic

### 4. Desktop Uygulamaları
- Electron

### 5. Büyük Ölçekli Projeler
- Kurumsal uygulamalar
- Karmaşık sistemler

## Popüler Projeler ve Şirketler

TypeScript'i kullanan popüler projeler:
- **Angular** - Google'ın frontend framework'ü
- **VS Code** - Microsoft'un kod editörü
- **Slack** - İletişim platformu
- **Airbnb** - Seyahat platformu
- **Asana** - Proje yönetim aracı

## Basit Bir Karşılaştırma

### JavaScript ile:
```javascript
function hesaplaIndirim(fiyat, indirimOrani) {
  return fiyat - (fiyat * indirimOrani);
}

// Kullanım
console.log(hesaplaIndirim(100, 0.2));      // 80
console.log(hesaplaIndirim("100", "0.2"));  // "1000.2" - Hata!
console.log(hesaplaIndirim(100));           // NaN - Hata!
```

### TypeScript ile:
```typescript
function hesaplaIndirim(fiyat: number, indirimOrani: number): number {
  return fiyat - (fiyat * indirimOrani);
}

// Kullanım
console.log(hesaplaIndirim(100, 0.2));      // 80
console.log(hesaplaIndirim("100", "0.2"));  // HATA: Derleme hatası
console.log(hesaplaIndirim(100));           // HATA: Parametre eksik
```

## TypeScript'in Dezavantajları

1. **Öğrenme Eğrisi**: JavaScript'e ek olarak tip sistemini öğrenmeniz gerekir
2. **Derleme Süreci**: Kod yazmadan önce derleme yapılması gerekir
3. **Ekstra Kod**: Tip tanımlamaları ekstra kod yazmanızı gerektirir
4. **Küçük Projeler**: Çok küçük projeler için fazla karmaşık olabilir

## Ne Zaman TypeScript Kullanmalı?

### TypeScript Kullanın:
✅ Büyük ve karmaşık projeler  
✅ Takım çalışması gerektiren projeler  
✅ Uzun vadeli bakım gerektiren projeler  
✅ Tip güvenliği önemli olan projeler  
✅ Modern framework'ler (Angular, React, Vue)  

### JavaScript Yeterli:
✅ Küçük scriptler  
✅ Prototip geliştirme  
✅ Hızlı denemeler  
✅ Basit web sayfaları  

## Özet

TypeScript, JavaScript'e tip güvenliği ekleyen güçlü bir dildir. Büyük projelerde kod kalitesini artırır, hataları erken yakalar ve geliştirme deneyimini iyileştirir. Modern web geliştirmede giderek daha popüler hale gelmektedir.

**Temel Özellikler:**
- Statik tip kontrolü
- JavaScript'in tüm özelliklerini içerir
- Gelişmiş IDE desteği
- Erken hata tespiti
- Daha iyi kod organizasyonu
- JavaScript'e derlenir

Bir sonraki derste TypeScript'i nasıl kuracağınızı ve ilk programınızı nasıl yazacağınızı öğreneceksiniz!
