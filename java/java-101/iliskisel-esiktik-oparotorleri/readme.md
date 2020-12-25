# İlişkisel ve Eşitlik Operatörleri

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


