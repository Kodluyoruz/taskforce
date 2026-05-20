# String Veri Türü İşlemleri

#### **String nedir?**

JavaScript metinlerin tümü "**_string_**" veri tipi içinde tutulur ve "**_string_**" veri türü ile ilgili yapabileceğimiz birden fazla işlem vardır. Bu yazımızda bunlardan bahsedeceğiz.

#### **Length Özelliği- Uzunluk Değerini Alma**

String veri tipinde bulunan bir ifadenin ne kadar uzun olduğunu bulmak için `Length` özelliğimizi kullanırız.

![code](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/1-code.png)

![cikti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/1-cikti.png)

#### **indexOf- Metin İçinde Arama Yapma**

Metnin içinde aramak istediğimiz değerin `index` numarasını bize verir.

![code](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/2-code.png)

![cikti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/2-cikti.png)

#### **lastIndexOf- Metin İçinde Arama Yapma**

`indexOf` ile arasındaki tek fark aranan kelime birden fazla geçiyor ise en son eşleşmeden gelen `index` numarasını döndürür.

![code](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/3-code.png)

![cikti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/3-cikti.png)

#### **Search- Metin İçinde Arama Yapma**

indexOf ile aynı sonuçlara ulaşırız genel olarak "**_Regular Expressions_**" işlemleri için çok kullanılan bir metottur.

![code](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/4-code.png)

![cikti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/4-cikti.png)

#### **Slice- Metninden Parça Almak**

Metin içinden almak istediğimiz yerlerin index numaralarını vererek metin içinde bulunan parçayı alabiliriz.

![code](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/5-code.png)

Bitiş index numarasındaki karakter sonuca dahil edilmez.

![cikti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/5-cikti.png)

 **Not: Tek index yazmak ise yazılan index numarasından sonra gelen tüm karakterleri almasına neden olur.**

![code](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/6-code.png)

![cikti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/6-cikti.png)

#### Replace– Metin Bulma ve Değiştirme

Aranan metni istediğimiz metin ile değiştirmemize olanak sağlar.

![code](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/7-code.png)

![cikti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/7-cikti.png)

`toUpperCase` ve `toLowerCase`

![code](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/8-code.png)

`toUpperCase` metin içinde bulunan tüm karakterleri büyük harf yapmamıza olanak sağlar.

`toLowerCase` metin içinde bulunan tüm karakterleri küçük harf yapmamıza olanak sağlar.

![cikti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/8-cikti.png)

#### Concat- Metin Birleştirme

Elimizde bulunan iki string türündeki veriyi birleştirmemize olanak sağlar.

![code](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/9-code.png)

![cikti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/9-cikti.png)

##### charAt- İndex Numarasına Göre Karakter Bulmak

Belirtilen index numarasında yer alan karakteri verir.

![code](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/10-code.png)

![cikti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/10-cikti.png)

#### charCodeAt– İndex Numarasına Göre Karakterin Unicode Değerini Bulma

Belirtilen index numarasında yer alan karakterin Unicode değerini verir.

![code](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/11-code.png)

![cikti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/11-cikti.png)

#### Split– Metni Diziye Çevirme

Split metodu ile istenilen metin diziye çevrilebilir. Kullanılan parametre ile metnin nasıl parçalanacağı belirtilir.

![code](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/12-code.png)

![cikti](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/javascript/javascript-temel/string-veri-turu-i%CC%87slemleri/figures/12-cikti.png)


Bir String ifadesi içerisinde yer alan bilgilerin istediğimiz gibi olup olmadığını kontrol etmek isteyebiliriz. İçerisinde mail adresi geçiyor mu? Kullanıcın verilerinde benim aradığım bilgi var mı? Gibi kontroller yapmak istiyor olabiliriz. String veri türü işlemleri bize bu noktada yardımcı olur.

**Örnekler üzerinden görelim:**

```javascript
let email = "kodluyoruz@kodluyoruz.org"
let firstName = "JavaScript"
let lastName = "BOOTCAMP"
```

Bu değişkenleri yazı boyunca kullanacağız.

#### Karakter Sayısı
String bir ifadenin karakter sayısını (uzunluğunu) bulmak istiyorsak **length** özelliğini kullanırız.

```javascript
console.log(email.length);  //25
console.log(firstName.length); //10
```

#### Karakter Yeri (Index)
String bir ifadenin içerisinde, aradığımız karakterin yerini bulmak için 2 yöntem vardır. `[ ]` ve `chartAt()` metodu bize bu konuda yardımcı olur.

```javascript
console.log(firstName.[0]); //"J"
console.log(firstName.charAt(2)); //"v"
```

#### Büyük/Küçük Harfe Çevirme
String bir ifadeyi tamamen büyük veya küçük harf yapmak istiyorsak. Büyük harf için `toUpperCase()`, küçük harf için ise `toLowerCase()` metotlarını kullanırız.
```javascript
firstName = firstName.toUpperCase();
console.log(firstName); //"JAVASCRIPT"

lastName = lastName.toLowerCase();
console.log(lastName); //"bootcamp"
```

#### İlk Harfi Büyük Kalan Harfleri Küçük Yapma
En başta değişkenlerimizi tanımlardan *lastName* değişkenimizi "BOOTCAMP" olarak sadece büyük harf ile yazdık. Bu ifademizi "Bootcamp" değiştirmek isteyebiliriz. Ya da sadece küçük harfler ile yazılmış bir özel ismin ilk harfini, büyük harf yapmak istiyor olabiliriz.

Bu tür durumları şu şekilde sağlarız.

```javascript
lastName = `${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}` //Bootcamp
```

#### İstediğimiz Bilgiyi Aramak
String bir ifade içerisinde, istediğimiz bir bilginin yerini bulmak için `search()` metodunu kullanırız. Kontrol ettiğimiz ifade nereden başlıyor ise bize onun yerini verir.

```javascript
console.log(email.search("@")); //10
```

Eğer arattığımız şey yok ise -1 sonucu verir.

```javascript
console.log(email.search("olmayan")); //-1
```

`search()` yerine kullanabileceğimiz başka bir metot ise `indexOf()` metodudur.

```javascript
console.log(email.indexOf(".")); //21
```

#### Belli Bir Bilgiyi Almak

Biraz önce search() metoduyla @ işaretinin nerede olduğunu almıştık. İşte bu noktada @ işaretinden sonra gelen domain bilgisini almak bizim için çok kolay bir hale geldi, **slice()** metoduyla bu işlemi gerçekleştirebiliriz. 

```javascript
console.log(email.slice(10+1)); //"@kodluyoruz.org"
//@ ifadesini almak istemediğimiz için +1 kullandık.
```

Başka bir kullanımı ise şu şekildedir.

```javascript
console.log(firstName.slice(1,4)); //"ava"
```

Yukarıdaki ifadede 1'inci index'ten başla ve 4. index'e kadar olan yeri al dedik. Bu noktada şunu anlamak önemli, 1. indexten başlayıp 4. indexe kadar gittiğimiz için sadece 3 karakter aldı.

*email* değişikeninde sadece domaini almak istesek bunu iki farklı yöntemle yapabiliriz.

```javascript
let domain = email.slice(email.search("@")+1); 
console.log(domain); //"kodluyoruz.org"
```

```javascript
let domain = email.slice(email.indexOf("@")+1); 
console.log(domain); //"kodluyoruz.org"
```

#### Bilgiyi Değiştirmek

*email* değişkeninde domaini değiştirmek istersek eğer, `replace()` metodu bize yardımcı olur.

```javascript
email = email.replace("kodluyoruz.org", "gmail.com");
console.log(email); //"kodluyoruz@gmail.com"
```

#### İstediğim Bilgi Var Mı?

Aradığımız bilginin değişken içerisinde olup olmadığını kontrol etmek için `includes()` metodunu kullanırız. true veya false döner.

```javascript
email.includes("@"); //true
email.includes("$"); //false
```

#### Nasıl Başladı Nasıl Bitti?

Aldığımız veri istediğimiz bilgiyle başladı mı? Veya istediğimiz bilgiyle bitti mi? Bu durumu kontrol etmek için `startsWith()` ve `endsWith()` metodunu kullanırız. 

```javascript
email.startsWith("@"); //false
email.endsWith("org"); //true
```

## Sorular

```javascript
let url = "www.kodluyoruz.org";
let language = "Java";
```

**Soru 1: Yukarıdaki *language* değişkenin değerini JavaScript olarak değiştirin ve konsola yazdırın.**

[Çözüm Soru 1](https://codepen.io/sahinaykkt/pen/rNModQg?editors=0011)

**Soru 2: Yukarıdaki *url* değişkenini kullanarak "www" olmadan *domain* (kodluyoruz.org) adında yeni bir değişken oluşturun ve konsola yazdırın.**

[Çözüm Soru 2](https://codepen.io/sahinaykkt/pen/mdraxZM?editors=0011)

## Kaynaklar

- [JavaScript String Metotları](https://www.btdersleri.com/ders/JavaScript-String-Metotlar%C4%B1)
