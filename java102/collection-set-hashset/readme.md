## Set interface (Arayüzü)

Collection interface’den kalıtım almıştır. Aynı elemanların veri kümesi içinde tekrar bulunmasına izin vermez. HashSet sınıfı en yaygın olan alt sınıfıdır.
Eleman tekrarının olmamasını sağlayabilmek için veri kümesi içindeki nesnelerin “equals” ve “hashCode” fonksiyonlarının tanımlı olması gerekir.

Set interface’in alt sınıfları:

- HashSet

- LinkedHashSet

- TreeSet

### HashSet Sınıfı

Liste tipinde veri tutmayı sağlar. Veri kümesindeki elemanlara ekleme, silme ve erişim imkanı tanır. Veri kümesinde mükerrer değer tutmaz. Mükerrer değer
tutmamayı nesnelerdeki hashCode fonksiyonunu kullanarak sağlar. “null” değer eklemesi yapılabilir.

“equals” ve “hasCode” fonksiyonları doldurulmuş bir Book sınıfı tasarladık. Book nesnelerinden oluşan bir veri kümesi oluşturduk.

```java
import java.util.HashSet;
import java.util.Iterator;

public class HSet {
    public static void main(String[] args) {

        // f(x) = x*3 * xmod7 * sqrt(x)

        HashSet<String> h = new HashSet<>();
        h.add("a");
        h.add("b");
        h.add("z");
        h.add(null);

        h.remove("b");
        System.out.println(h.size());
        System.out.println(h.contains("b"));
        for (String s : h) {
            System.out.println(s);
        }

        // Itertor kullanarak gezinmek
        Iterator<String> itr = h.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }

    }
}

```
