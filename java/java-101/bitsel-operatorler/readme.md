# Bitsel Operatörler

Java&#39;da bitsel operatörler bit düzeyinde işlemler yapabilmeyi sağlar. Bit düzeyinde VE (AND), VEYA (OR) ve DEĞİL (NOT) gibi işlemler yapabilmeyi sağlar. Ayrıca, bit düzeyinde sağa veya sola kaydırma işlemleri yapılabilir. Bitsel operatörler long, int, short, byte, char gibi veri tiplerine uygulanabilir.

//

Bilgisayarlarda int tipi tamsayılar 32 bitlik bellek adresinde, long tipi tamsayılar ise 64 bitlik bellek adresinde tutulurlar. Örnek vermek gerekirse; 
7 sayısının bit düzeyindeki karşılığı = 111 
19 sayısının temsili = 10011
200.000 sayısının temsili ise =  110000110101000000 olarak tutulur.


#Java'da negatif tamsayılar nasıl tutulur?

Negatif tamsayılar ise ikili (binary) sistemde ikinin tümleyeni biçiminde tutulur. 
“~” --> Tek bitli değeri tersine çeviren işarettir. Bir sayının negatif halini ifade etmek ve tutmak için kullanılır.
Bir tamsayının negatifini bulmak için aşağıdaki adımlar izlenir:
1. 10'luk tabandaki sayıyı 2'lik tabana çeviriyoruz.
2. Bu sayıyı 32 bitlik adrese yazıyoruz.
3. Adrese yazılan sayıdaki 0'ları 1, 1'leri 0 olarak yeniden yazıyoruz.
4. Son olarak sayıya 1 ekleyerek sayının tümleyenini buluyoruz.
5. Sayımız x ise tümleyenimiz bunun negatifi, yani -x'tir.

Bunu 15 sayısı için hep birlikte yapalım: 
(15)10 = (1111)2
15 = 0000 0000 0000 0000 0000 0000 0000 1111  //Sayımızı 32 bitlik adresine yerleştirdik.
~15 = 1111 1111 1111 1111 1111 1111 1111 0000  //Yerleştirdiğimiz sayıda 1'leri 0, 0'ları ise 1 olarak yeniden düzenledik. 
~15 + 1 = 1111 1111 1111 1111 1111 1111 1111 0001 //Sonuca 1 ekledik.


Bunu koda dökersek:


`````java
public class Reverse {

   public static void main(String[] args) {
   
   int x = 15;
   int y = ~15 + 1;
   
   System.out.println("Pozitif olarak girilen sayı: " + x);
   System.out.println("Sayının negatif karşılığı: " + y);
   }
}

`````


Output:

Pozitif olarak girilen sayı: 15
Sayının negatif karşılığı: -15


   Burada x değeriyle 15 sayısı hard-coded olarak girilmiş ve y değerinde hard-coded olarak sayının negatif karşılığının nasıl yazdırıldığına dair örnek verilmiştir. Sonda ise her iki değer yazdırılmıştır.



Bitsel operatörler int ve long tipleri üzerinde işlerler. İşleme giren sayılar (operand) byte ya da short tipinden ise, önce onlar int tipine dönüştürülür, sonra bitsel operatör uygulanır.
Aşağıdaki tabloda, bitsel operatörlerin bit’ler üzerinde etkisini gösterilmiştir. a ve b iki sayı ise, karşılıklı bitlerindeki etki şöyledir:

a -- b -- a|b -- a&b -- a^b -- ~a -- ~b
0 -- 0 --  0  --  0  --  0  --  1 --  1
0 -- 1 --  1  --  0  --  1  --  1 --  0
1 -- 0 --  1  --  0  --  1  --  0 --  1
1 -- 1 --  1  --  0  --  0  --  0 --  0

//



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

//

Örnek:

`````java
public class Bitwise1 {
   public static void main(String[] args) {
   
   byte a = 29;
   byte b = 10;
   
   System.out.println(a | b);
   
   System.out.println(a & b);
   
   System.out.println(a ^ b);
   
   System.out.println( ~ a);
   
   System.out.println(b << 2);
   
   }
}
`````
Output:
31
8
23
-30
40

`````java
public class Bitwise2 {
   public static void main(String[] a) { 
      int i = 1; 
      System.out.println(i); 
      
      int j = ~i + 1; 
      System.out.println(j); 
      
      i = ~j + 1; 
      System.out.println(i); 
      
      }
}
`````

Output:
1
-1
1

`````java
// byte tipi sayının sola kayması ile ilgili örnek. 

public class BitwiseLeftShift {
   public static void main(String[] args) {
   
   byte x = 100, y;
   int i;
   i = a << 2;
   y = (byte) (x << 2);
   
   System.out.println("x'in asıl değeri : " + x);
   
   System.out.println("(x << 2) değeri : " + (x << 2));
   
   System.out.println("(byte)(x << 2) değeri : " + (byte)(x << 2));
   
   }
}
`````

Output:
x'in asıl değeri : 100
(x << 2) değeri : 400
(byte)(x << 2) değeri : -112

//

//

## KAYNAK:
- http://www.baskent.edu.tr/~tkaracay/etudio/ders/prg/java/ch06/bitwiseOperators.pdf
- https://keramiozsoy.wordpress.com/2018/05/01/2859/
- https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op3.html
- https://ramazanbiyikci.com.tr/java-bitsel-operatorler/
- https://www.baeldung.com/java-bitwise-operators
- https://www.youtube.com/watch?v=dccIw612Q2k



