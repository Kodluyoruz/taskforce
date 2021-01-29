# Final Keyword Usage

Final keyword sabit değişkenlerde kullanılır. 

## Sabitler (Constants)

Değeri değiştirilemeyen değişkenlere **sabit (constant)** denir. Bazen, yazdığımız programlarda bazı değişkenlerin bir kere tanımlanmasını ve daha sonra değerlerinin değiştirilmemesini isteriz. Bu gibi durumlarda sabit tanımlarız. Sabitlerin değişkenlerden iki temel farkı vardır:

- Bir değişkeni sabit yapmak istiyorsanız **final** belirteci ile tanımlamalısınız.
- Sabitlerin değeri sonradan değiştirilemediği için tanımladığınız anda değer atamalısınız.

```java
boolean someVariable = false;
// Bir değişken tanımlanmış. Değeri daha sonra değiştirilebilir.
final double pi = 3.14;
// Bir sabit tanımlanmış. Değeri daha sonra değiştirilemez.
```

Sabitlerle ilgili hataya neden olabilecek aşağıdaki örnekleri inceleyelim:

```java
final byte x; // Bu satır hataya neden olur; çünkü sabit olarak belirlenmesine rağmen bir değer atanmamış
```

```java
final int year = 2020;
year = 2021; // Bu satır hataya neden olur; çünkü sabitin değeri değiştirmeye çalışılıyor
```

