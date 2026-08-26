# İlişkisel ve Eşitlik Operatörleri

![İLİŞKİSEL+OPERATÖRLER](https://slideplayer.biz.tr/slide/13871352/85/images/5/%C4%B0L%C4%B0%C5%9EK%C4%B0SEL+OPERAT%C3%96RLER.jpg)

İlişkisel operatörlerden bahsetmeden önce operatörün ne anlama geldiğinden bahsedelim.Operatörler önceden tanımlanmış birtakım matematiksel veya mantıksal işlemi yapmak için kullanılan özel karakterler veya karakterler topluluğudur.Kod yazarken ilişkisel operatörleri sıklıkla kullanırız.Bu açıdan kullanılan operatörün hangi koşulu yerine getireceği ve sonucunun ne olacağı iyi düşünülmelidir.Aksi takdirde geliştirilen algoritma veya uygulama hatalı çalışabilir ve bu hatayı bulmak biraz zaman alabilir.

Sıklıkla kullandığımız ilişkisel operatörlere yakından bakalım.

**Önemli NOT**

```java
Operatörlerden bahsetmeden önce 4 adet değişken tanımlayıp,bunlara değer ataması yapalım ve ilişkisel ifadelerimizi bu değişkenler üzerinden karşılaştıralım.
**Bu karşılaştırmaları yaparken matematiksel ifademizi cümle haline getirip bu cümlenin doğruluğunu ve yanlışlığını test edeceğiz.**

int A = 10;
int B = 20;
int C = 10;
int D = 40 ;
```

Elimizde A,B,C ve D olmak üzere 4 adet değişkenimiz var.Şimdi değişkenlerin birbirleri ile olan ilişkilerini  inceleyelim.

### ==  (Eşitlik Operatörü) 

```java
(A == B) ;//Matematiksel ifademizi cümle haline getirelim. (10 Eşittir 20) bu cümle yanlış bir cümledir.10 sayısı 20 sayısına eşit olamayacağından sonucumuz yanlış yani false'tur.
Aynı cümleleri diğer matematiksel ifadelerimiz içinde yazalım.
(A == C) ; // (10 Eşittir 10 ) evet bu cümle doğru sonucumuz true.
(C == D) ; // (10 Eşittir 40 ) bu cümle yanlıştır ve cevabımız false.
```

  

### !=  (Eşit Değil Operatörü)

```java
(A != D) ; // (10 Eşit Değildir 40 ) Evet 10 sayısı 40'a eşit değildir ve sonucumuz true'dur.
(A != C) ; // (10 Eşit Değildir 10 ) Bu cümle doğru değildir.Bu yüzden cevabımız false'tur.
(C != B) ; // (10 Eşit Değildir 20 ) True.
```



### > (Büyüktür Operatörü) 

```java
(A > D) ; // (10 Büyüktür 40 ) 10 sayısı 40 sayısından büyük değildir cümle yanlış olduğundan cevabımız false olacaktır.
(D > C) ; // (40 Büyüktür 10) 40 sayısı 20 sayısından büyüktür,ifade doğrudur sonucumuz true'dur.
(C > B) ; // (10 Büyüktür 20) False
```

### >= (Büyük Eşittir Operatörü)

```java
(A >= D) ; // (10 Büyük Eşittir 40 ) 10 sayısı 40 sayısından büyük veya eşit değildir cümle yanlış olduğundan cevabımız false olacaktır.
(A >= C) ; // (10 Büyük Eşittir 10) Burada 10 sayısı 10 sayısından büyük değildir ancak ona eşit olduğundan sonucumuz true olacaktır.
(C >= B) ; // (10 Büyük Eşittir 20) False
```



### <  (Küçüktür Operatörü) 

```java
(A < D) ; // (10 Küçüktür 40) 10 sayısı 40 sayısından küçük ve cümle doğrudur.Sonucumuz true.
(D < C) ; // (40 Küçüktür 10) Bu cümle yanlış olduğundan sonucumuz false olacaktır.
(C < B) ; // (10 Küçüktür 20) True
```

###  <=  (Küçük Eşittir Operatörü) 

```java
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
## KAYNAKLAR 

- http://www.baskent.edu.tr/~tkaracay/etudio/ders/prg/java/ch06/relationalOperators.pdf,

- https://slideplayer.biz.tr/slide/13871352/

