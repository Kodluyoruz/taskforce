# Java’da Yazım ve İsimlendirme Kuralları

## Yazım Kuralları

- **Türkçe Karakter Kullanımı** : Java ve bir çok programlama dili Türkçe karakter desteklememektedir. Programda ki metin ifadeleri dışında Türkçe karakter kullanılmamalıdır. Türkçe Karakterler : ç, ı, ü, ğ, ö, ş, İ, Ğ, Ü, Ö, Ş, Ç
- **Harf Duyarlılığı** : Java harfe duyarlı bir dildir. Kelimelerdeki küçük ve büyük harfler farklı olarak algılanır. Java’da Kodluyoruz ile kodluyoruz farklı anlama gelmektedir.
- **Sınıf Adları** : Java’da sınıf adlarının ilk harfi büyük olmalıdır. Eğer 2 kelimeyi birleştirerek bir sınıf adı oluşturursak bu isimlerin baş harfleri büyük olmalıdır. Örnek: CamelCase
- **Metot Adları** : Metot adları küçük harfle başlar. Metot adı verilirken iki kelime birleştirilecekse ismin başlangıç harfi küçük diğer birleştirilen kelimelerin başlangıç harfleri büyük yazılır. Örnek: camelCaseOrnek

## İsimlendirme Kuralları

### Camel Case Nedir ?

Camel Case, bir bileşik sözcük içindeki her kelimenin ilk sözcük dışında ki sözcüklerin ilk harfleri büyük harflerle yazıldığı bir adlandırma kuralıdır. Yazılım geliştiricileri genellikle kaynak kodu yazarken "**Camel Case**" kullanır. **Camel Case** kullanımı zorunlu bir kullanım olmasa da yazılım dilinin jargonudur ve genelde tüm yazılımcılar bu kurala uyar. Bu kural sayesinde değişken isimleri daha okunur olur.

**Örnek** : patikaDev, camelCaseKurali, javaPatikasiBasliyor

### Upper Camel Case Nedir ?

Upper Camel Case isimlendirme kuralı ise, bileşik bir sözcükteki tüm sözcüklerin ilk harflerinin büyük olmasıdır.

**Örnek** : PatikaDev, UpperCamelCaseKurali, JavaPatikasiBasliyor

### Snake Case

Kelimeler **alt tire** (_) ile birbirine bağlanır.
Upper snake case **örnek**: Hello_World
Lower snake case **örnek**: hello_world

### Screaming Snake Case

Bütün harfleri büyük yazılır. Genellikle sabit isimlendirmede kullanılır.

## Java'da İsimlendirme Kuralları

- Java'da isimlendirilen tüm ögeler sadece A-Z veya a-z gibi harfler, $ karakteri veya _ karakteri ile başlayabilirler.

- Keyword’ler (Yasaklı Kelimeler) isimlendirmede kullanılamaz

  | `abstract`  | `continue` | `for`        | `new`        | `switch`       |
  | ----------- | ---------- | ------------ | ------------ | -------------- |
  | `assert`*** | `default`  | `goto`*      | `package`    | `synchronized` |
  | `boolean`   | `do`       | `if`         | `private`    | `this`         |
  | `break`     | `double`   | `implements` | `protected`  | `throw`        |
  | `byte`      | `else`     | `import`     | `public`     | `throws`       |
  | `case`      | `enum`**** | `instanceof` | `return`     | `transient`    |
  | `catch`     | `extends`  | `int`        | `short`      | `try`          |
  | `char`      | `final`    | `interface`  | `static`     | `void`         |
  | `class`     | `finally`  | `long`       | `strictfp`** | `volatile`     |
  | `const`*    | `float`    | `native`     | `super`      | `while`        |

- Sınıflar için **upper camel case** kullanılır. **HelloWorld**
- Metotlar için **lower camel case** kullanılır. **helloWorld**
- Değişkenler için **lower camel case** kullanılır. **helloWorld**
- Sabitler için **screaming snake case** kullanılır. **HELLO_WORLD**