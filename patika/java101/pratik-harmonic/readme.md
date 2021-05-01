# Harmonik Seri Bulan Program

Java ile girilen sayının harmonik serisini bulan program yazacağız.

Harmonik Seri Formülü :

![](C:\Users\mmcet\Desktop\Kodluyoruz\Java 101\Eğitimler\5 - Döngüler\5.14  - Harmonik Sayıları Bulan Program\harmonic_series.gif)

```java
public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("N sayısını giriniz :");
        double n = input.nextInt();
        double result = 0;
        while (n > 0) {
            result += (1 / n);
            n--;
        }

        System.out.println(result);
    }
}

```

