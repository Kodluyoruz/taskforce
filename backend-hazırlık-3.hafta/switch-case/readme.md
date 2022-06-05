# Switch-Case Yapısı

Java'da birden çok kod bloğunu koşullara bağlamak için "switch" deyimi kullanılır. Switch Case; tanımlanmış olan yalnızca bir değişkenin, alacağı değerlere bağlı olarak, farklı sonuçlar döndürmesini sağlayan bir yapıdır. Switch kısmında kullanılacak olan değişkenler byte, short, int, char veya String veri tipine sahip olmalıdır.

## Sözdizimi (Syntax)

```
switch(değer) {
    case x:
        // değer x'e eşitse bu kod bloğu çalışacak
        break;
    case y:
        // değer y'ye eşitse bu kod bloğu çalışacak
        break;
    default:
        // değer hiç bir şeye eşit değilse bu kod bloğu çalışacak
}
```

Burada dikkat edilmesi gereken durum switch içine yazdığımız değerleri case deyimi ile kontrol ediyoruz. Switch içinde ki herhangi bir değer caselerden biri ile uyuşuyorsa o case içindeki kod bloğu çalışır. 

```java
import java.util.Scanner;
public class SwitchCase {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int value = input.nextInt();
        switch (value) {
            case 1:
                // Value 1
                break;
            case 2:
                // Value 1
                break;
            case 3:
                // Value 1
                break;
            default:
                // Value is invalid
                break;
        }
    }
}
```

Yukarıdaki switch-case yapısında hangi kod bloğunun çalıştırılacağını value değişkeni belirler. Value değeri 1 ise case 1, 2 ise case 2, 3 ise case 3 kod bloğu çalıştırılır. Eğer value değişkeninin değeri hiçbir case değeriyle eşleşmiyorsa default alanı çalıştırılır. Her bir case durumunda, switch yapısından çıkmak ve switch'i izleyen bir sonraki ifadeye geçmek için 'break' komutu kullanılır. Break komutunun kullanılmadığı case'lerde ise ilgili case bloğu işletildikten sonra break komutunun bulunduğu satıra kadar olan tüm kod satırları çalıştırılır. Switch-case yapısının çalışma mantığı genel olarak bu şekildedir.

Switch Case ifadeleri, çalışma mantığı açısından baktığımızda If - Else-if ifadeleri ile benzerlik göstermektedir. Ancak çok fazla koşul gerektiren durumlarda If - Else-if ifadelerinin yerine Switch ifadelerini tercih edebiliriz. Bu sayede uzun kod satırlarının aksine daha sade ve düzenli bir görünüm elde edebilir ve kodumuzun okunabilirliğini artırmış oluruz.

Not: "switch-case" yapısında eğer her case'in sonuna "break" ifadesi koymazsak aramış olduğu koşulu bulana kadar tüm case'lere girip o kod bloklarını çalıştıracaktır.

## Örnek

```java
public class SwitchCase {
    public static void main(String[] args) {
        int gun = 2;
        switch (gun) {
            case 6:
                System.out.println("Bugün cumartesi");
                break;
            case 7:
                System.out.println("Bugün pazar");
                break;
            default:
                System.out.println("Bugün hafta içi");
        }
        // Çıktısı "Bugün hafta içi"
    }
}
```

