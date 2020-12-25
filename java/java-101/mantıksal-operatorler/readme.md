# Mantıksal Operatörler

true / false döndüren ifadeler veya boolean tipinde değerler tutan değişkenler üzerinde uygulanabilir.

| **Operator**              | **Description**                                              | **Example**            |
| ------------------------- | ------------------------------------------------------------ | ---------------------- |
| &amp;&amp; (mantıksal ve) | Eğer A ve B değeri true ise true olur.                       | (A &amp;&amp; B) false |
| \|\| (mantıksal veya)     | Eğer A veya B' den en az biri true ise true olur.            | (A \|\| B)             |
| ! (mantıksal değil)       | () parantez içinde yer alan ifade true ise değilini alıp false yapar. Eğer ifade false ise true yapar. | !(A &amp;&amp; B) true |

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



## Soru İşareti Operatörü

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



## "instanceof" Operatörü

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

