# Karşılaştırma Operatörleri

Java'da **Karşılaştırma Operatörleri** (Java Comparison Operators) sayesinde, farklı iki değişkenin birbirleriyle olan durumları hakkında bir yorum yapabilirsiniz.

Kısacası Java'da **Karşılaştırma Operatörleri** , bir değişkenin başka bir değişkenden **büyük, küçük, eşit değil veya eşit olup** olmadığını belirler. Bu operatörlerin çoğunu günlük hayatımızda ve matematikte kullanıyoruz. İki değişkenin eşit olup olmadığını test ederken **"=" değil de "=="** kullanmanız gerektiğini **(yani çift eşittir)** unutmayın.

## JAVA KARŞILAŞTIRMA OPERATÖRLERİ

| Operatör | Açıklama      | Örnek  |
| -------- | ------------- | ------ |
| ==       | Eşittir       | x == y |
| !=       | Eşit değildir | x != y |
| >        | Büyüktür      | x > y  |
| <        | Küçüktür      | x < y  |
| >=       | Büyük Eşittir | x >= y |
| <=       | Küçük Eşittir | x <= y |

## Örnek 

```java
Operatörlerden bahsetmeden önce 4 adet değişken tanımlayıp,bunlara değer ataması yapalım ve ilişkisel ifadelerimizi bu değişkenler üzerinden karşılaştıralım.
**Bu karşılaştırmaları yaparken matematiksel ifademizi cümle haline getirip bu cümlenin doğruluğunu ve yanlışlığını test edeceğiz.**

int A = 10;
int B = 20;
int C = 10;
int D = 40 ;
```

Elimizde A,B,C ve D olmak üzere 4 adet değişkenimiz var. Şimdi değişkenlerin birbirleri ile olan ilişkilerini inceleyelim.

### == (Eşitlik Operatörü)

```
(A == B) ;//Matematiksel ifademizi cümle haline getirelim. (10 Eşittir 20) bu cümle yanlış bir cümledir.10 sayısı 20 sayısına eşit olamayacağından sonucumuz yanlış yani false'tur.
Aynı cümleleri diğer matematiksel ifadelerimiz içinde yazalım.
(A == C) ; // (10 Eşittir 10 ) evet bu cümle doğru sonucumuz true.
(C == D) ; // (10 Eşittir 40 ) bu cümle yanlıştır ve cevabımız false.
```

### != (Eşit Değil Operatörü)

```
(A != D) ; // (10 Eşit Değildir 40 ) Evet 10 sayısı 40'a eşit değildir ve sonucumuz true'dur.
(A != C) ; // (10 Eşit Değildir 10 ) Bu cümle doğru değildir.Bu yüzden cevabımız false'tur.
(C != B) ; // (10 Eşit Değildir 20 ) True.
```

### > (Büyüktür Operatörü)

```
(A > D) ; // (10 Büyüktür 40 ) 10 sayısı 40 sayısından büyük değildir cümle yanlış olduğundan cevabımız false olacaktır.
(D > C) ; // (40 Büyüktür 10) 40 sayısı 20 sayısından büyüktür,ifade doğrudur sonucumuz true'dur.
(C > B) ; // (10 Büyüktür 20) False
```

### >= (Büyük Eşittir Operatörü)

```
(A >= D) ; // (10 Büyük Eşittir 40 ) 10 sayısı 40 sayısından büyük veya eşit değildir cümle yanlış olduğundan cevabımız false olacaktır.
(A >= C) ; // (10 Büyük Eşittir 10) Burada 10 sayısı 10 sayısından büyük değildir ancak ona eşit olduğundan sonucumuz true olacaktır.
(C >= B) ; // (10 Büyük Eşittir 20) False
```

### < (Küçüktür Operatörü)

```
(A < D) ; // (10 Küçüktür 40) 10 sayısı 40 sayısından küçük ve cümle doğrudur.Sonucumuz true.
(D < C) ; // (40 Küçüktür 10) Bu cümle yanlış olduğundan sonucumuz false olacaktır.
(C < B) ; // (10 Küçüktür 20) True
```

### <= (Küçük Eşittir Operatörü)

```
(A <= D) ; // (10 Küçük eşittir 40) 10 sayısı 40 sayısından küçüktür ve cümle doğrudur.Sonucumuz true.
(A <= C) ; // (10 Küçük eşittir 10) 10 sayısı 10 sayısından küçük değildir ancak eşit olduğundan sonucumuz true.
(C <= B) ; // (10 Küçük eşittir 20) True
```

```java
// Aşağıdaki Kodları kendi IDE'nizde çalıştırarak,farklı değerlerle sonuçları test edebilirsiniz.

        int A = 10;
        int B = 20;
        int C = 10;
        int D = 40 ;

 // == Operatörü
        System.out.println(A == B);
        System.out.println(A == C);
        System.out.println(C == D);

  // !=  Eşit Değil Operatörü

        System.out.println(A != D);
        System.out.println(A != C);
        System.out.println(C != B);

  // > Büyüktür Operatörü

        System.out.println(A > D);
        System.out.println(D > C);
        System.out.println(C > B);

  // >= Büyük-Eşittir Operatörü

        System.out.println(A >= D);
        System.out.println(A >= C);
        System.out.println(C >= B);

  // <  Küçüktür Operatörü

        System.out.println(A < D);
        System.out.println(D < C);
        System.out.println(C < B);


    // <= Küçük-Eşittir Operatörü

        System.out.println(A <= D);
        System.out.println(A <= C);
        System.out.println(C <= B);
```