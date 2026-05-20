# Mantıksal Operatörler

Java'da Mantıksal Operatörler, değişkenler veya değerler arasındaki mantığı belirlemek için kullanılır. Türkçe',de ki bağlaç ekleri gibi düşünebilirsiniz.

Bir kontrol işlemi sonucunda geriye true yada false değeri döndüren operatörlerdir. True / False döndüren ifadeler veya boolean tipinde değerler tutan değişkenler üzerinde kullanılabilirler. Konuyu anlayabilmek için ilk önce mantıksal operatörlerin neler olduğu öğrenilmelidir.

## Java'da Mantıksal Operatörler

| Operatör | İsim       | Açıklama                                | Örnek              |
| -------- | ---------- | --------------------------------------- | ------------------ |
| &&       | Ve (AND)   | Her iki ifade de doğruysa true döndürür | x < 10 && x < 25   |
| \|\|     | Veya (OR)  | İfadelerden biri doğruysa true döndürür | x < 5 \|\| x < 4   |
| !        | Ters İşlem | Sonucu tersine çevirir                  | !(x < 5 && x < 10) |

#### Doğruluk Tabloları

###### Ve (&&) Operatörünün Doğruluk Tablosu

| a     | b     | a&&b  |
| ----- | ----- | ----- |
| True  | True  | True  |
| True  | False | False |
| False | True  | False |
| False | False | False |

###### Veya (||) Operatörünün Doğruluk Tablosu

| a     | b     | a\|\|b |
| ----- | ----- | ------ |
| True  | True  | True   |
| True  | False | True   |
| False | True  | True   |
| False | False | False  |

###### Değil (!) Operatörünün Doğruluk Tablosu

| a     | !(a)  |
| ----- | ----- |
| True  | False |
| False | True  |

## Soru İşareti Operatörü

? işareti operatörü ile Java'da mantıksal kıyaslama yapılabilir. ? ifadesi Java'daki "if-else" yapısı yerine kullanılabilir. Tek satırda bunu yapabilmemizi sağlar. Kullanımı ise if'in içerisinde yer alacak ifadeyi soru işaretinden önce yazılır, ifadenin doğru olması durumunda yapılacak işlemler soru işareti ile iki nokta arasına yazılır. İfadenin yanlış olması durumunda yapılacaklar ise iki noktadan sonra yazılır.

Kullanımı :

```
( kontrol edilecek ifade ) ? doğru olması durumunda yapılacaklar : yanlış olması durumunda yapılacaklar
```

Örnek :

```
public class Test {

   public static void main(String args[]) {
      int a, b;
      a = 10;
      b = (a == 1) ? 20: 30;
      System.out.println( "Value of b is : " +  b );

      b = (a == 10) ? 20: 30;
      System.out.println( "Value of b is : " + b );
   }
}
```

Sonuç :

```
Value of b is : 30

Value of b is : 20
```

Açıklama :

> b = (a == 1) ? 20: 30; => ifadesini incelenirse, (a == 1) ? 20: 30 ifadesinden başlamak daha doğru olacaktır. a'nın 1 olması durumunda 20 değeri, a'nın 1'den farklı olması durumunda 30 değeri dönecektir. b'nin değeri buradan dönen değere göre belirlenecektir. Kodda a değeri 10 olarak verildiği için b'nin değeri 30 olarak atanmaktadır.
>
> b = (a == 10) ? 20: 30; => ifadesi incelenirse, yine yukarıdaki açıklamaya benzer olarak a değerinin 10 olması durumunda 20, a değeri 10'dan farklı olması durumunda ise 30 değeri geriye dönecektir. Bu durumda a değeri kodda 10 olduğu için b değeri de 20 olarak atanacaktır.