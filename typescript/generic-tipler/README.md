# Generic Tipler

Generic'ler, farklı tiplerle çalışabilen yeniden kullanılabilir kod yazmamızı sağlar.

## Generic Fonksiyonlar

```typescript
function ilkEleman<T>(dizi: T[]): T | undefined {
  return dizi[0];
}

const sayilar = [1, 2, 3];
const isimler = ["Ahmet", "Ayşe"];

console.log(ilkEleman(sayilar));   // 1 (number)
console.log(ilkEleman(isimler));   // "Ahmet" (string)
```

## Generic Class

```typescript
class Kutu<T> {
  private icerik: T;

  constructor(icerik: T) {
    this.icerik = icerik;
  }

  al(): T {
    return this.icerik;
  }

  degistir(yeniIcerik: T): void {
    this.icerik = yeniIcerik;
  }
}

const sayiKutusu = new Kutu<number>(42);
console.log(sayiKutusu.al());

const stringKutusu = new Kutu<string>("Merhaba");
console.log(stringKutusu.al());
```

## Generic Constraints

```typescript
interface UzunlukOlcusu {
  length: number;
}

function uzunlukYazdir<T extends UzunlukOlcusu>(item: T): void {
  console.log(`Uzunluk: ${item.length}`);
}

uzunlukYazdir("Merhaba");      // String'in length'i var
uzunlukYazdir([1, 2, 3]);      // Array'in length'i var
// uzunlukYazdir(42);          // HATA: number'ın length'i yok
```

## Pratik Örnek: Stack

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

const sayiStack = new Stack<number>();
sayiStack.push(1);
sayiStack.push(2);
sayiStack.push(3);
console.log(sayiStack.pop());  // 3
```

Generic'ler, tip güvenliğini koruyarak esnek kod yazmamızı sağlar!
