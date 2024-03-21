# Harmonik Seri Bulan Program

Java ile girilen sayının harmonik serisini bulan program yazacağız.

Harmonik Seri Formülü :

![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/java101/pratik-harmonic/figures/harmonic_series.gif)

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

