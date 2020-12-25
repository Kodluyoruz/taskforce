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



