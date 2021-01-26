# Bitsel Operatörler

Java&#39;da bitsel operatörler bit düzeyinde işlemler yapabilmeyi sağlar. Bit düzeyinde VE (AND), VEYA (OR) ve DEĞİL (NOT) gibi işlemler yapabilmeyi sağlar. Ayrıca, bit düzeyinde sağa veya sola kaydırma işlemleri yapılabilir. Bitsel operatörler long, int, short, byte, char gibi veri tiplerine uygulanabilir.

| **Operatör**                   | **Açıklama**                                                 | **Örnek**                                      |
| ------------------------------ | ------------------------------------------------------------ | ---------------------------------------------- |
| &amp; (ve)                     | Bit düzeyinde tek tek VE işlemini uygular. 1 &amp; 0 ise 0 olur. 1 &amp; 1 ise 1 olur. 0 &amp; 0 ise 0 olur. 0 & 1 ise 0 olur. | (A &amp; B)                                    |
| \| (veya)                      | Bit düzeyinde tek tek VEYA işlemini uygular. 1 \| 0 ise 1 olur. 1 \| 1 ise 1 olur. 0 \| 0 ise 0 olur. 0 \| 1 ise 1 olur. | Bit düzeyinde tek tek VEYA işlemini uygular. 1 |
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


