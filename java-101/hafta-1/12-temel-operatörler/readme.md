# Java Temel Operatörler (Basic Operators)

Java dilinde operatörler ile birçok işlemi yapabilmenize olanak tanır. Örneğin: matematiksel operatörlerle birlikte aritmetik işlemler yapabilmenizi, ilişkisel operatörlerle verileri kıyaslayabilmeyi, atama operatörleri ile değişkenlerin değerlerini değiştirmeye fırsat verir.

Java&#39;da operatörler aşağıdaki gibi listelenebilir:

- Aritmetiksel Operatörler
- İlişkisel ve Eşitlik Operatörler
- Bitsel (Bit Düzeyinde) Operatörler
- Mantıksal Operatörler
- Atama Operatörleri

## Aritmetik Operatörleri

Matematiksel işlemler yapabilmeyi sağlayan operatörlerdir.

int A =10;

int B =20;

şeklinde değişkenlerimiz olduğunu varsayıp matematiksel operatörleri açıklayalım.

| **Operatör**     | **Açıklama**                                                 | **Örnek**                                  |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------ |
| + (Toplama)      | İki değerin toplanıp tek bir değere dönüştürülmesini sağlar. Sayısal değerler yanında yazı tipindeki değerlerde kullanıldığında iki ifadeyi tek bir cümle haline getirmektedir. | A + B = 30"Güzel" + "Kitap" = "GüzelKitap" |
| - (Çıkarma)      | İki değerin çıkarılmasını sağlar.                            | A - B = -10                                |
| \* (Çarpma)      | İki değeri çarpmaya yarar.                                   | A \* B = 200                               |
| / (Bölme)        | Payı paydaya bölmeye yarar.                                  | B / A = 2                                  |
| % (Mod Alma)     | Mod alma işlemini sağlar.                                    | B % A = 0                                  |
| ++ (Bir artırım) | Bir artırmayı sağlar.                                        | B++ 21 olacaktır.                          |
| -- (Bir azaltım) | Bir azaltmayı sağlar.                                        | B-- 19 olacaktır.                          |

Örnek:

``````java
public class Test {
    public static void main(String args[]){

        int a =10;
        int b =20;
        int c =25;
        int d =25;

        System.out.println("a + b = "+(a + b));
        System.out.println("a - b = "+(a - b));

        System.out.println("a \* b = "+(a \* b));
        System.out.println("b / a = "+(b / a));

        System.out.println("b % a = "+(b % a));
        System.out.println("c % a = "+(c % a));

        System.out.println("a++ = "+(a++));
        System.out.println("b-- = "+(a--));

        System.out.println("d++ = "+(d++));
        System.out.println("++d = "+(++d));
	}
}
``````





## İlişkisel ve Eşitlik Operatörleri

Değişkenlere ait verilerin eşitliğini, büyük-küçük olma durumlarının kıyaslanabildiği operatörlerdir.

````java
int A =10;

int B =20;
````

şeklinde değişkenlerimiz olduğunu varsayıp matematiksel operatörleri açıklayalım.

| **Operatör**     | **Açıklama**                                                 | **Örnek**       |
| ---------------- | ------------------------------------------------------------ | --------------- |
| == (eşitlik)     | İki değişkenin değerlerini birbiriyle kıyaslayıp, eğer eşitse true döndürür. Değilse false değer döndürür. | (A == B) false  |
| != (eşit değil)  | İki değişkenin değerini kıyaslar ve eşit değilse true, eşitse false döndürür. | (A != B) true   |
| \> (büyüktür)    | \> operatörünün solundaki değer, sağındaki değerden büyükse true döndürür. Değilse false döner. | (A \> B) false  |
| \< (küçüktür)    | \< operatörünün solundaki değer, sağındaki değerden küçükse false döndürür. Değilse true döner. | (A \< B)true    |
| \>= (büyük eşit) | \>= operatörünün solundaki değer, sağındaki değerden büyük veya eşitse true döndürür. Değilse false döner. | (A \>= B) false |
| \<= (küçük eşit) | \<= operatörünün solundaki değer, sağındaki değerden küçük ve eşitse false döndürür. Değilse true döner. | (A \<= B) true  |

Örnek:

`````java
public class Test {

    public static void main(String args[]){

        int a =10;

        int b =20;

        System.out.println("a == b = "+(a == b));
        System.out.println("a != b = "+(a != b));

        System.out.println("a > b = "+(a > b));
        System.out.println("a < b = "+(a < b));

        System.out.println("b >= a = "+(b >= a));
        System.out.println("b <= a = "+(b <= a));
    }
}
`````



## Bitsel Operatörler

Java&#39;da bitsel operatörler bit düzeyinde işlemler yapabilmeyi sağlar. Bit düzeyinde VE (AND), VEYA (OR) ve DEĞİL (NOT) gibi işlemler yapabilmeyi sağlar. Ayrıca, bit düzeyinde sağa veya sola kaydırma işlemleri yapılabilir. Bitsel operatörler long, int, short, byte, char gibi veri tiplerine uygulanabilir.

| **Operatör**                   | **Açıklama**                                                 | **Örnek**                                      |
| ------------------------------ | ------------------------------------------------------------ | ---------------------------------------------- |
| &amp; (ve)                     | Bit düzeyinde tek tek VE işlemini uygular. 1 &amp; 0 ise 0 olur. 1 &amp; 1 ise 1 olur. 0 &amp; 0 ise 0 olur. | (A &amp; B)                                    |
|                                | (veya)                                                       | Bit düzeyinde tek tek VEYA işlemini uygular. 1 |
| ^ (XOR)                        | Bit düzeyinde tek tek XOR işlemi uygular. 1 ^ 0 ise 1 olur. 1 ^ 1 ise 0 olur. 0 ^ 0 ise 0 olur. | (A ^ B)                                        |
| ~ (tersini alma)               | Bit düzeyinde her bitin tersi alınır. DEĞİL işlemi uygulanır. 1100 ise 0011 olur. | (~A)                                           |
| \<\< (sola kaydırma)           | \<\< operatörü ile bitsel olarak sola doğru belirlenen miktarda kayma yapılır. Boş kalanları sıfır ile doldurur. Örn: A\<\<2 yapılırsa, 0011 1100  1111 0000 | (A \<\< 2)                                     |
| \>\> (sağa kaydırma)           | \>\> operatörü ile bitsel olarak sağa kaydırma işlemi yapılır. Boş kalan alanlar sıfır ile doldurulmaz. Örn: A\>\>2 yapılırsa, 0011 1100  1111 | (A \>\> 2)                                     |
| \>\>\> (sıfırlı sağa kaydırma) | \>\> operatörü ile bitsel olarak sağa kaydırma işlemi yapılır. Boş kalan alanlar sıfır ile doldurulur. Örn: A\>\>\>2 yapılırsa, 0011 1100  0000 1111 | (A\>\>\>2)                                     |

Örnek:

`````java
public class Test {

   public static void main(String args[]) {
      int a = 60;	/* 60 = 0011 1100 */
      int b = 13;	/* 13 = 0000 1101 */
      int c = 0;

      c = a & b;        /* 12 = 0000 1100 */
      System.out.println("a & b = " + c );

      c = a | b;        /* 61 = 0011 1101 */
      System.out.println("a | b = " + c );

      c = a ^ b;        /* 49 = 0011 0001 */
      System.out.println("a ^ b = " + c );

      c = ~a;           /*-61 = 1100 0011 */
      System.out.println("~a = " + c );

      c = a << 2;       /* 240 = 1111 0000 */
      System.out.println("a << 2 = " + c );

      c = a >> 2;       /* 15 = 1111 */
      System.out.println("a >> 2  = " + c );

      c = a >>> 2;      /* 15 = 0000 1111 */
      System.out.println("a >>> 2 = " + c );
   }
}

`````





## Mantıksal Operatörler

true / false döndüren ifadeler veya boolean tipinde değerler tutan değişkenler üzerinde uygulanabilir.

| **Operator**             | **Description**                                              | **Example**            |
| ------------------------ | ------------------------------------------------------------ | ---------------------- |
| &amp;&amp; (mantıksalve) | Eğer A ve B değeri true ise true olur.                       | (A &amp;&amp; B) false |
|                          |                                                              | (mantıksalveya)        |
| ! (mantıksaldeğil)       | () parantez içinde yer alan ifade true ise değilini alıp false yapar. Eğer ifade false ise true yapar. | !(A &amp;&amp; B) true |

Örnek:

````java
public class Test {

   public static void main(String args[]) {
      boolean a = true;
      boolean b = false;

      System.out.println("a && b = " + (a&&b));
      System.out.println("a || b = " + (a||b) );
      System.out.println("!(a && b) = " + !(a && b)); 
   } 
}
````



### Soru İşareti Operatörü

? işareti operatörü ile Java&#39;da mantıksal kıyaslama yapılabilir. ? ifadesi Java&#39;daki "if-else" yapısı yerine kullanılabilir. Tek satırda bunu yapabilmemizi sağlar.

`````java
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

`````



### "instanceof" Operatörü

Nesne tipinde değişkenler için kullanılabilir. İlkel veri tipleri için bu operatör kullanılamaz. "instanceof" operatörü ile değişkenin barındırdığı veri aradığımız tipe sahip mi değil mi anlamamızı sağlar.

`````java
public class Test {

   public static void main(String args[]) {

      String name = "James";

      boolean result = name instanceof String;
      System.out.println( result );
   }
}

`````

