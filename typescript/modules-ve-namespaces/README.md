# Modules ve Namespaces

## ES6 Modules

### Export

```typescript
// utils.ts
export function topla(a: number, b: number): number {
  return a + b;
}

export function cikar(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14159;

export interface Kullanici {
  id: number;
  ad: string;
}
```

### Import

```typescript
// main.ts
import { topla, cikar, PI, Kullanici } from './utils';

console.log(topla(5, 3));
console.log(PI);

const kullanici: Kullanici = {
  id: 1,
  ad: "Ahmet"
};
```

### Default Export

```typescript
// hesapMakinesi.ts
export default class HesapMakinesi {
  topla(a: number, b: number): number {
    return a + b;
  }

  cikar(a: number, b: number): number {
    return a - b;
  }
}

// main.ts
import HesapMakinesi from './hesapMakinesi';

const hesap = new HesapMakinesi();
console.log(hesap.topla(5, 3));
```

### Named ve Default Export Birlikte

```typescript
// matematik.ts
export default class Matematik {
  static PI = 3.14159;
}

export function daireAlani(yaricap: number): number {
  return Matematik.PI * yaricap ** 2;
}

// main.ts
import Matematik, { daireAlani } from './matematik';

console.log(Matematik.PI);
console.log(daireAlani(5));
```

## Re-exports

```typescript
// models/index.ts
export { Kullanici } from './kullanici';
export { Urun } from './urun';
export { Siparis } from './siparis';

// main.ts
import { Kullanici, Urun, Siparis } from './models';
```

## Namespaces

```typescript
namespace Geometri {
  export interface Nokta {
    x: number;
    y: number;
  }

  export function mesafe(p1: Nokta, p2: Nokta): number {
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  export namespace Sekiller {
    export class Daire {
      constructor(public merkez: Nokta, public yaricap: number) {}

      alan(): number {
        return Math.PI * this.yaricap ** 2;
      }
    }
  }
}

// Kullanım
const p1: Geometri.Nokta = { x: 0, y: 0 };
const p2: Geometri.Nokta = { x: 3, y: 4 };
console.log(Geometri.mesafe(p1, p2));

const daire = new Geometri.Sekiller.Daire(p1, 5);
console.log(daire.alan());
```

## Module vs Namespace

**Modules kullanın:**
- Modern TypeScript/JavaScript projeleri için
- Node.js ve tarayıcı projeleri için
- Dosya bazlı organizasyon için

**Namespaces kullanın:**
- Global scope kirliliğini önlemek için
- Eski projeler için
- Tek dosyada kod organizasyonu için

## Dynamic Imports

```typescript
async function yukle(): Promise<void> {
  const modul = await import('./agirModul');
  modul.islemYap();
}

// Koşullu yükleme
if (kosul) {
  import('./ozelModul').then(modul => {
    modul.ozelIslem();
  });
}
```

Modules ve namespaces ile kodunuzu organize edebilir ve yeniden kullanılabilir hale getirebilirsiniz!
