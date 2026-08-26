# TypeScript Kurulumu ve İlk Program

## TypeScript Kurulumu

TypeScript'i kullanmak için önce Node.js'in bilgisayarınızda kurulu olması gerekir.

### 1. Node.js Kurulumu

Node.js'i [nodejs.org](https://nodejs.org/) adresinden indirip kurabilirsiniz. Kurulumu kontrol etmek için:

```bash
node --version
npm --version
```

### 2. TypeScript'i Global Olarak Kurma

Terminal veya komut satırında şu komutu çalıştırın:

```bash
npm install -g typescript
```

Kurulumu kontrol edin:

```bash
tsc --version
```

Çıktı: `Version 5.x.x` gibi bir şey görmelisiniz.

## İlk TypeScript Programı

### Adım 1: Proje Klasörü Oluşturma

```bash
mkdir typescript-ilk-proje
cd typescript-ilk-proje
```

### Adım 2: İlk TypeScript Dosyası

`merhaba.ts` adında bir dosya oluşturun:

```typescript
// merhaba.ts
function selamla(isim: string): string {
  return `Merhaba, ${isim}!`;
}

const mesaj = selamla("TypeScript");
console.log(mesaj);
```

### Adım 3: TypeScript'i JavaScript'e Derleme

```bash
tsc merhaba.ts
```

Bu komut `merhaba.js` dosyası oluşturacaktır:

```javascript
// merhaba.js (derlenmiş)
function selamla(isim) {
  return "Merhaba, " + isim + "!";
}

var mesaj = selamla("TypeScript");
console.log(mesaj);
```

### Adım 4: Programı Çalıştırma

```bash
node merhaba.js
```

Çıktı: `Merhaba, TypeScript!`

## TypeScript Yapılandırma Dosyası (tsconfig.json)

Daha profesyonel projeler için `tsconfig.json` dosyası kullanılır.

### tsconfig.json Oluşturma

```bash
tsc --init
```

Bu komut otomatik olarak bir `tsconfig.json` dosyası oluşturur.

### Temel tsconfig.json Örneği

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Önemli Yapılandırma Seçenekleri

| Seçenek     | Açıklama                                | Örnek Değer           |
| ----------- | --------------------------------------- | --------------------- |
| `target`    | Hangi JavaScript versiyonuna derlenecek | ES2020, ES6, ES5      |
| `module`    | Modül sistemi                           | commonjs, es6, esnext |
| `outDir`    | Derlenmiş dosyaların konumu             | ./dist, ./build       |
| `rootDir`   | Kaynak dosyaların konumu                | ./src                 |
| `strict`    | Katı tip kontrolü                       | true, false           |
| `sourceMap` | Debug için kaynak haritası              | true, false           |

## Proje Yapısı Örneği

```
typescript-proje/
├── src/
│   ├── index.ts
│   ├── utils.ts
│   └── models/
│       └── user.ts
├── dist/          (derlenmiş dosyalar)
├── node_modules/
├── package.json
└── tsconfig.json
```

### Örnek Proje Oluşturma

```bash
# Proje klasörü oluştur
mkdir typescript-proje
cd typescript-proje

# package.json oluştur
npm init -y

# TypeScript'i proje bağımlılığı olarak ekle
npm install --save-dev typescript

# TypeScript yapılandırması oluştur
npx tsc --init

# Kaynak klasörü oluştur
mkdir src
```

### src/index.ts

```typescript
import { kullaniciOlustur } from './utils';
import { Kullanici } from './models/user';

const yeniKullanici: Kullanici = kullaniciOlustur("Ahmet", "Yılmaz", 25);
console.log(`Kullanıcı oluşturuldu: ${yeniKullanici.adSoyad()}`);
```

### src/utils.ts

```typescript
import { Kullanici } from './models/user';

export function kullaniciOlustur(ad: string, soyad: string, yas: number): Kullanici {
  return new Kullanici(ad, soyad, yas);
}

export function yasHesapla(dogumYili: number): number {
  const suankiYil = new Date().getFullYear();
  return suankiYil - dogumYili;
}
```

### src/models/user.ts

```typescript
export class Kullanici {
  constructor(
    public ad: string,
    public soyad: string,
    public yas: number
  ) {}

  adSoyad(): string {
    return `${this.ad} ${this.soyad}`;
  }

  yetiskinMi(): boolean {
    return this.yas >= 18;
  }
}
```

### Derleme ve Çalıştırma

```bash
# Tüm projeyi derle
npx tsc

# Derlenmiş kodu çalıştır
node dist/index.js
```

## package.json Script'leri

`package.json` dosyanıza script'ler ekleyerek işlemleri kolaylaştırabilirsiniz:

```json
{
  "name": "typescript-proje",
  "version": "1.0.0",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js",
    "dev": "tsc && node dist/index.js",
    "watch": "tsc --watch"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

Kullanım:

```bash
npm run build    # Projeyi derle
npm start        # Derlenmiş kodu çalıştır
npm run dev      # Derle ve çalıştır
npm run watch    # Değişiklikleri izle ve otomatik derle
```

## ts-node ile Doğrudan Çalıştırma

TypeScript dosyalarını derleme adımı olmadan çalıştırmak için `ts-node` kullanabilirsiniz:

```bash
# ts-node kurulumu
npm install --save-dev ts-node

# TypeScript dosyasını doğrudan çalıştır
npx ts-node src/index.ts
```

`package.json`'a ekleyin:

```json
{
  "scripts": {
    "dev": "ts-node src/index.ts"
  }
}
```

## Pratik Örnekler

### Örnek 1: Basit Hesap Makinesi

```typescript
// hesapMakinesi.ts
function topla(a: number, b: number): number {
  return a + b;
}

function cikar(a: number, b: number): number {
  return a - b;
}

function carp(a: number, b: number): number {
  return a * b;
}

function bol(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Sıfıra bölme hatası!");
  }
  return a / b;
}

// Test
console.log("10 + 5 =", topla(10, 5));
console.log("10 - 5 =", cikar(10, 5));
console.log("10 * 5 =", carp(10, 5));
console.log("10 / 5 =", bol(10, 5));
```

### Örnek 2: Öğrenci Yönetim Sistemi

```typescript
// ogrenci.ts
interface Ogrenci {
  id: number;
  ad: string;
  soyad: string;
  notlar: number[];
}

function ogrenciOlustur(id: number, ad: string, soyad: string): Ogrenci {
  return {
    id,
    ad,
    soyad,
    notlar: []
  };
}

function notEkle(ogrenci: Ogrenci, not: number): void {
  if (not < 0 || not > 100) {
    throw new Error("Not 0-100 arasında olmalıdır!");
  }
  ogrenci.notlar.push(not);
}

function ortalamaHesapla(ogrenci: Ogrenci): number {
  if (ogrenci.notlar.length === 0) {
    return 0;
  }
  const toplam = ogrenci.notlar.reduce((acc, not) => acc + not, 0);
  return toplam / ogrenci.notlar.length;
}

function durumBelirle(ortalama: number): string {
  if (ortalama >= 85) return "Pekiyi";
  if (ortalama >= 70) return "İyi";
  if (ortalama >= 60) return "Orta";
  if (ortalama >= 50) return "Geçer";
  return "Kaldı";
}

// Kullanım
const ogrenci1 = ogrenciOlustur(1, "Ayşe", "Demir");
notEkle(ogrenci1, 85);
notEkle(ogrenci1, 90);
notEkle(ogrenci1, 78);

const ortalama = ortalamaHesapla(ogrenci1);
const durum = durumBelirle(ortalama);

console.log(`${ogrenci1.ad} ${ogrenci1.soyad}`);
console.log(`Ortalama: ${ortalama.toFixed(2)}`);
console.log(`Durum: ${durum}`);
```

### Örnek 3: Todo List

```typescript
// todo.ts
interface Todo {
  id: number;
  baslik: string;
  tamamlandi: boolean;
  olusturmaTarihi: Date;
}

class TodoList {
  private todos: Todo[] = [];
  private sonrakiId: number = 1;

  ekle(baslik: string): Todo {
    const yeniTodo: Todo = {
      id: this.sonrakiId++,
      baslik,
      tamamlandi: false,
      olusturmaTarihi: new Date()
    };
    this.todos.push(yeniTodo);
    return yeniTodo;
  }

  tamamla(id: number): boolean {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.tamamlandi = true;
      return true;
    }
    return false;
  }

  sil(id: number): boolean {
    const index = this.todos.findIndex(t => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  tumunuListele(): Todo[] {
    return this.todos;
  }

  tamamlananlariListele(): Todo[] {
    return this.todos.filter(t => t.tamamlandi);
  }

  bekleyenleriListele(): Todo[] {
    return this.todos.filter(t => !t.tamamlandi);
  }
}

// Kullanım
const todoList = new TodoList();

todoList.ekle("TypeScript öğren");
todoList.ekle("Proje yap");
todoList.ekle("Egzersiz çöz");

todoList.tamamla(1);

console.log("Tüm Görevler:");
todoList.tumunuListele().forEach(todo => {
  const durum = todo.tamamlandi ? "✓" : "○";
  console.log(`${durum} ${todo.id}. ${todo.baslik}`);
});

console.log("\nBekleyen Görevler:");
todoList.bekleyenleriListele().forEach(todo => {
  console.log(`○ ${todo.id}. ${todo.baslik}`);
});
```

## Hata Ayıklama (Debugging)

### Source Maps Kullanımı

`tsconfig.json` dosyanıza ekleyin:

```json
{
  "compilerOptions": {
    "sourceMap": true
  }
}
```

Bu, `.js.map` dosyaları oluşturur ve tarayıcıda TypeScript kodunu debug etmenizi sağlar.

### VS Code ile Debug

`.vscode/launch.json` dosyası oluşturun:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "TypeScript Debug",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "program": "${workspaceFolder}/src/index.ts",
      "outFiles": ["${workspaceFolder}/dist/**/*.js"]
    }
  ]
}
```

## Yaygın Hatalar ve Çözümleri

### Hata 1: "tsc: command not found"

**Çözüm:** TypeScript global olarak kurulmamış.
```bash
npm install -g typescript
```

### Hata 2: "Cannot find module"

**Çözüm:** Modül yolu yanlış veya dosya uzantısı eksik.
```typescript
// Yanlış
import { Kullanici } from './user.ts';

// Doğru
import { Kullanici } from './user';
```

### Hata 3: "Property does not exist on type"

**Çözüm:** Tip tanımlaması eksik veya yanlış.
```typescript
// Yanlış
const obj = {};
obj.name = "Test"; // HATA

// Doğru
interface Obj {
  name: string;
}
const obj: Obj = { name: "Test" };
```

## Özet

Bu derste öğrendikleriniz:
- TypeScript'i nasıl kuracağınız
- İlk TypeScript programınızı nasıl yazacağınız
- TypeScript'i JavaScript'e nasıl derleyeceğiniz
- `tsconfig.json` dosyasını nasıl yapılandıracağınız
- Proje yapısını nasıl oluşturacağınız
- Pratik örneklerle TypeScript kullanımı

Bir sonraki derste TypeScript'in temel tiplerini detaylı olarak inceleyeceğiz!
