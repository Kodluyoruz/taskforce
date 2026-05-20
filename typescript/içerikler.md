# TYPESCRIPT INDEX

## [TypeScript Nedir?](typescript-nedir/)

### Sorular
1. TypeScript nedir?
	- Bir JavaScript framework'ü
	- JavaScript'in statik tipli bir üst kümesi (Doğru)
	- Bir CSS preprocessor'ü
	- Bir veritabanı yönetim sistemi

2. TypeScript'in JavaScript'e göre en önemli avantajı nedir?
	- Daha hızlı çalışır
	- Statik tip kontrolü sağlar (Doğru)
	- Daha az kod yazılır
	- Otomatik deployment yapar

3. TypeScript kodu nasıl çalıştırılır?
	- Doğrudan tarayıcıda çalışır
	- Önce JavaScript'e derlenir, sonra çalıştırılır (Doğru)
	- Python ile çalıştırılır
	- Derlemeye gerek yoktur

4. Aşağıdakilerden hangisi TypeScript'in avantajlarından biri değildir?
	- Erken hata tespiti
	- Daha iyi IDE desteği
	- Otomatik veritabanı yönetimi (Doğru)
	- Kod organizasyonu

### Videolar
1. TypeScript'in ne olduğunu, JavaScript'ten farkını, statik tip kontrolünün avantajlarını ve TypeScript'in kullanım alanlarını öğrendik.

## [TypeScript Kurulumu ve İlk Program](typescript-kurulumu-ve-ilk-program/)

### Sorular
1. TypeScript'i global olarak kurmak için hangi komut kullanılır?
	- `npm install typescript`
	- `npm install -g typescript` (Doğru)
	- `npm start typescript`
	- `tsc install`

2. TypeScript dosyasını JavaScript'e derlemek için hangi komut kullanılır?
	- `node dosya.ts`
	- `npm run dosya.ts`
	- `tsc dosya.ts` (Doğru)
	- `compile dosya.ts`

3. `tsconfig.json` dosyası ne için kullanılır?
	- TypeScript projesinin yapılandırması için (Doğru)
	- JavaScript kodunu çalıştırmak için
	- Package bağımlılıklarını yönetmek için
	- HTML sayfası oluşturmak için

4. TypeScript dosyalarının uzantısı nedir?
	- .js
	- .ts (Doğru)
	- .tsx
	- .typescript

### Videolar
1. TypeScript'in nasıl kurulacağını, ilk programın nasıl yazılacağını, derleme işleminin nasıl yapılacağını ve tsconfig.json yapılandırmasını öğrendik.

## [Temel Tipler](temel-tipler/)

### Sorular
1. Aşağıdakilerden hangisi TypeScript'te primitive (ilkel) bir tip değildir?
	- number
	- string
	- boolean
	- array (Doğru)

2. Herhangi bir tip olabilen ve tip kontrolünü devre dışı bırakan tip hangisidir?
	- unknown
	- any (Doğru)
	- void
	- never

3. Değer döndürmeyen fonksiyonlar için hangi tip kullanılır?
	- null
	- undefined
	- void (Doğru)
	- never

4. Aşağıdaki tuple tanımlamasından hangisi doğrudur?
	- `let tuple: [string, number] = ["Ahmet", 25];` (Doğru)
	- `let tuple: (string, number) = ["Ahmet", 25];`
	- `let tuple: {string, number} = ["Ahmet", 25];`
	- `let tuple: <string, number> = ["Ahmet", 25];`

5. Enum nedir?
	- Bir fonksiyon tipi
	- İlişkili sabitler kümesi (Doğru)
	- Bir dizi tipi
	- Bir class tipi

6. `unknown` tipi `any` tipinden nasıl farklıdır?
	- Daha hızlıdır
	- Kullanmadan önce tip kontrolü gerektirir (Doğru)
	- Sadece sayılar için kullanılır
	- Fark yoktur

### Videolar
1. TypeScript'in temel tiplerini (number, string, boolean, any, unknown, void, never), array ve tuple tiplerini, enum kullanımını ve object tiplerini öğrendik. Pratik örneklerle kütüphane yönetim sistemi oluşturduk.

## [Fonksiyonlar ve Tip Tanımlamaları](fonksiyonlar-ve-tip-tanimlari/)

### Sorular
1. Opsiyonel parametre nasıl tanımlanır?
	- `function test(param: string?)` 
	- `function test(param?: string)` (Doğru)
	- `function test(param: optional string)`
	- `function test(param: string | undefined)`

2. Rest parametreler nasıl tanımlanır?
	- `function test(params: ...number[])`
	- `function test(...params: number[])` (Doğru)
	- `function test(params...: number[])`
	- `function test(params: number...)`

3. Function overload nedir?
	- Fonksiyonu birden fazla kez çağırma
	- Aynı fonksiyonun farklı parametre tipleriyle çalışması (Doğru)
	- Fonksiyonu farklı dosyalarda tanımlama
	- Fonksiyonu async yapma

4. Generic fonksiyon ne işe yarar?
	- Sadece number tipinde çalışır
	- Farklı tiplerle çalışabilen esnek fonksiyonlar oluşturur (Doğru)
	- Fonksiyonu daha hızlı yapar
	- Fonksiyonu private yapar

5. Async fonksiyon hangi tipi döndürür?
	- void
	- any
	- Promise (Doğru)
	- async

### Videolar
1. TypeScript'te fonksiyon tip tanımlamalarını, opsiyonel ve varsayılan parametreleri, rest parametreleri, function overload, generic fonksiyonları ve async fonksiyonları öğrendik. Pratik örneklerle doğrulama, dizi işlemleri ve hesap makinesi uygulamaları yaptık.

## [Interface ve Type Alias](interface-ve-type-alias/)

### Sorular
1. Interface ile nesne özelliğini opsiyonel yapmak için ne kullanılır?
	- `?` (Doğru)
	- `optional`
	- `|`
	- `&`

2. Readonly özellik ne işe yarar?
	- Özelliği gizler
	- Özelliği değiştirilemez yapar (Doğru)
	- Özelliği opsiyonel yapar
	- Özelliği siler

3. Interface extending için hangi anahtar kelime kullanılır?
	- implements
	- extends (Doğru)
	- inherits
	- uses

4. Type Alias ile union type nasıl oluşturulur?
	- `type X = A & B`
	- `type X = A | B` (Doğru)
	- `type X = A + B`
	- `type X = A, B`

5. Interface ve Type Alias arasındaki en önemli fark nedir?
	- Interface daha hızlıdır
	- Interface declaration merging yapabilir (Doğru)
	- Type Alias daha güvenlidir
	- Fark yoktur

6. Index signature ne için kullanılır?
	- Dizileri sıralamak için
	- Dinamik özellik isimleri tanımlamak için (Doğru)
	- Fonksiyon parametrelerini belirtmek için
	- Class oluşturmak için

### Videolar
1. Interface ve Type Alias tanımlamayı, opsiyonel ve readonly özellikleri, interface extending, union ve intersection types, index signatures ve utility types kullanımını öğrendik. E-ticaret sistemi, API response types ve form validation örnekleri yaptık.

## [Class ve Object Oriented Programming](class-ve-object-oriented-programming/)

### Sorular
1. TypeScript'te class özelliği varsayılan olarak hangi erişim belirleyiciye sahiptir?
	- private
	- protected
	- public (Doğru)
	- readonly

2. `private` erişim belirleyici ne anlama gelir?
	- Sadece class içinden erişilebilir (Doğru)
	- Her yerden erişilebilir
	- Sadece alt sınıflardan erişilebilir
	- Hiçbir yerden erişilemez

3. Abstract class nedir?
	- Direkt olarak instance oluşturulamayan, sadece extend edilebilen class (Doğru)
	- Hızlı çalışan class
	- Özel bir interface
	- Statik methodları olan class

4. `implements` anahtar kelimesi ne için kullanılır?
	- Class'ı extend etmek için
	- Interface'i implement etmek için (Doğru)
	- Method tanımlamak için
	- Property oluşturmak için

5. Static method nedir?
	- Class instance'ı olmadan çağrılabilen method (Doğru)
	- Değiştirilemeyen method
	- Private method
	- Async method

### Videolar
1. TypeScript'te class tanımlama, constructor, erişim belirleyiciler (public, private, protected), getter/setter, static members, abstract class, interface implementation ve inheritance konularını öğrendik. Banka hesabı, şekiller ve kullanıcı yönetim sistemi örnekleri yaptık.

## [Generic Tipler](generic-tipler/)

### Sorular
1. Generic tipler ne için kullanılır?
	- Sadece number tipinde çalışmak için
	- Farklı tiplerle çalışabilen yeniden kullanılabilir kod yazmak için (Doğru)
	- Kodu daha hızlı yapmak için
	- Hata ayıklamak için

2. Generic tip parametresi nasıl tanımlanır?
	- `function test<T>(param: T)` (Doğru)
	- `function test(T)(param: T)`
	- `function test[T](param: T)`
	- `function test{T}(param: T)`

3. Generic constraint ne işe yarar?
	- Generic tipi sınırlandırır (Doğru)
	- Generic tipi siler
	- Generic tipi hızlandırır
	- Generic tipi gizler

4. Aşağıdakilerden hangisi generic class tanımlamasıdır?
	- `class Box<T> { }` (Doğru)
	- `class Box(T) { }`
	- `class Box[T] { }`
	- `class Box{T} { }`

### Videolar
1. Generic fonksiyonlar, generic class'lar, generic interface'ler, generic constraints, multiple generic parameters ve utility types ile generic kullanımını öğrendik. Stack, API client ve cache manager örnekleri yaptık.

## [Union ve Intersection Types](union-ve-intersection-types/)

### Sorular
1. Union type nasıl oluşturulur?
	- `type X = A & B`
	- `type X = A | B` (Doğru)
	- `type X = A + B`
	- `type X = A, B`

2. Intersection type ne işe yarar?
	- İki tipi birleştirir (Doğru)
	- İki tipten birini seçer
	- İki tipi karşılaştırır
	- İki tipi siler

3. Discriminated union nedir?
	- Ortak bir özellik ile ayırt edilebilen union type (Doğru)
	- Özel bir class
	- Bir interface türü
	- Bir generic tip

4. Type guard ne için kullanılır?
	- Tipi kontrol etmek ve daraltmak için (Doğru)
	- Tipi genişletmek için
	- Tipi silmek için
	- Tipi gizlemek için

### Videolar
1. Union types, intersection types, discriminated unions, type guards ve literal types kullanımını öğrendik. Ödeme sistemi, form state ve API response örnekleri yaptık.

## [Type Guards ve Narrowing](type-guards-ve-narrowing/)

### Sorular
1. `typeof` type guard hangi tipler için kullanılır?
	- Primitive tipler için (Doğru)
	- Sadece object'ler için
	- Sadece array'ler için
	- Sadece function'lar için

2. `instanceof` type guard ne için kullanılır?
	- Primitive tip kontrolü için
	- Class instance kontrolü için (Doğru)
	- String kontrolü için
	- Number kontrolü için

3. Custom type guard nasıl tanımlanır?
	- `function isType(x: any): x is Type` (Doğru)
	- `function isType(x: any): boolean`
	- `function isType<Type>(x: any)`
	- `function isType(x: Type)`

4. Nullish coalescing operator hangisidir?
	- `||`
	- `&&`
	- `??` (Doğru)
	- `!`

### Videolar
1. typeof, instanceof, in operator, custom type guards, discriminated unions, nullish coalescing ve optional chaining kullanarak tip daraltma (narrowing) işlemlerini öğrendik. Pratik örneklerle form validation ve API response handling yaptık.

## [Modules ve Namespaces](modules-ve-namespaces/)

### Sorular
1. TypeScript'te module export etmek için ne kullanılır?
	- `export` anahtar kelimesi (Doğru)
	- `module.exports`
	- `return`
	- `public`

2. Default export nasıl yapılır?
	- `export default X` (Doğru)
	- `export X as default`
	- `default export X`
	- `export { X as default }`

3. Namespace ne için kullanılır?
	- Kod organizasyonu ve global scope kirliliğini önlemek için (Doğru)
	- Hızlı kod yazmak için
	- Hata ayıklamak için
	- Derleme yapmak için

4. Re-export nedir?
	- Import edilen modülü tekrar export etme (Doğru)
	- Modülü silme
	- Modülü kopyalama
	- Modülü gizleme

### Videolar
1. ES6 modules (import/export), default ve named exports, re-exports, dynamic imports, namespaces ve module resolution stratejilerini öğrendik. Pratik örneklerle utility library ve plugin system oluşturduk.
