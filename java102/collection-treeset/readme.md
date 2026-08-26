# TreeSet Sınıfı

Veri kümesine konulan elemanların verdiğiniz kurala göre sıralanmasını sağlar. Bunun sağlanabilmesi için kullanacağınız sınıfın “sıralanabilir” olması
gerekmektedir. Bir sınıfın sıralanabilir olması için “Comparable” interface’den kalıtım alıp “compareTo” metodunu doldurması gerekmektedir. Nesne üzerindeki
“compareTo” fonksiyonu küçükten büyüğe doğal sıralama imkanı sağlar.

```java
import java.util.TreeSet;

public class TSet {
    public static void main(String[] args) {
        TreeSet<Integer> numbers = new TreeSet<>();

        numbers.add(10);
        numbers.add(1022);
        numbers.add(1);
        numbers.add(-10);
        numbers.add(22);

        for (Integer number : numbers) {
            System.out.println(number);
        }

    }
}

```