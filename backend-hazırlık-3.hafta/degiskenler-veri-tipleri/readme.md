# Değişkenler ve Veri Tipleri

Değişkenler programlamada geçici bilgileri sakladığımız ve programcı tarafından belirlenen yapılardır. Değişkenler programlamanın temel yapısını oluşturmaktadır ve tüm programlama dillerinde kullanılan bir yapıdır. Değişkenler sayesinde program içinde yaptığımız işlemleri hafıza da tutar ve gerektiği yerlerde kullanırız. Değişkenlerin 4 özelliği bulunur ; **Veri Tipi, İsim, Değer ve Adres.**

Değişkenlerde **Veri Tipi**, adından da anlaşılacağı üzere verinin saklanacağı türünü belirtmektedir bunlar **sayılar,sözcükler ve programatik** alanlar olabilir. Her değişkenin program içinde kullanıldığı ve çağrıldığı benzersiz bir **ismi** vardır. Bu değişkenlere birde **değer** atarız , işletim sistemimizde bu değişkeni hafızada tutar ve bir **adres** belirler.

Java'da değişkenlerin veri tipleri vardır. Bu tipler Java'da varsayılan olarak tanımlı gelen ilkel tipler (primitive) de olabilir yahut yazılımcıların kendi tanımladığı ilkel olmayan tipler (non-primitive) de olabilir. İlkel tipler her zaman bir değere sahiptir. İlkel olmayan tipler ise 'null' (boş) olabilir. İlkel olmayan türlerin tümü aynı boyuta sahipken ilkel veri tiplerin boyutu alacağı veri tipine bağlıdır.

## Java  Değişken Tanımlama

`<veri tipi> <değişken ismi> = veri (değer)`

İlk önce değişkenin veri tipini ve değişkenin ismini yazarız ve istenirse aynı matematikteki gibi "=" eşittir ile değerini atarız.

```java
int number;
// number isminde, int veri tipinde bir değişken tanımlanmış
```

 Veri tipleri aynı olan değişkenleri aynı satırda tanımlayabiliriz

```java
int a, b, c;
// int veri tipinde 3 tane değişken tanımlanmış
```

 Değişkeni tanımladıktan sonra, atama operatörü (=) kullanarak değişkene atayabiliriz.

```java
double pi; // ilk başta double türünde bir değişken tanımladık
pi = 3.14; // Daha sonra bu değişkene bir değer atadık
```

 Eğer bir değişkene hemen değer atayacaksanız, bunu iki satırda yapmak yerine tek bir satırda halledebilirsiniz.

```java
double pi = 3.14;
```

 Aynı satırda aynı türden birden fazla değişken tanımlıyorsak :

```java
int a = 1 , b = 2;
// Aynı satırda int türünde 2 farklı değişken tanımlanmış ve ikisine de değer verilmiş
```

Değişkene verilen değer sonrasında değiştirilebilir, ama aynı isimde ikinci bir değişken oluşturulamaz ve hata alırız.

Hatalı Kullanım :

```java
int a = 5; // a isminde bir değişken tanımlanmış
int a = 1 ; // Bu satır hataya neden olur, a değişkeni zaten var
```

Doğru Kullanım :

```java
boolean a = true; // a isminde bir değişken tanımlanmış ve varsayılan bir değer verilmiş
a = false; // a değişkeninin değeri değiştirilmiş
```

## Java'daki İlkel Veri Tipleri

- **Tam Sayılar**
  - Byte
  - Short
  - Integer
  - Long
- **Ondalıklı Sayılar**
  - Float
  - Double
- **Karakterler**
  - Char
- **Mantıksal Değerler**
  - Boolean

