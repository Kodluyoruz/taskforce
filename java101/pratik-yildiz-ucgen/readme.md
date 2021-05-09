# Yıldız ile Üçgen Yapımı

Java'da döngüler kullanılarak yıldızlar ile üçgen yapıyoruz.

```
     * 
    *** 
   ***** 
  ******* 
 ********* 
***********
```


```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner klavye = new Scanner(System.in);
        System.out.println("Bir Sayı Giriniz :");
        int n = klavye.nextInt();

        for (int i = 0; i <= n ; i++) {
            for (int j = 0; j < (n - i); j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= (2 * i + 1); k++) {
                System.out.print("*");
            }
            System.out.println(" ");
        }


    }
}

```

## Ödev 

Java'da döngüler kullanarak yıldızlar ile elmas yapınız.

```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```


