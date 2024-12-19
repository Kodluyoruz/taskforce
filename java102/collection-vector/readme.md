# Vector

Klasik programlama eyleminde array (dizi) çok önemli bir rol oynar. Ancak, array’in uzunluğu; yani bileşenlerinin sayısı array bildiriminde belirleniyor ve bu uzunluk daha sonra değiştirilemiyordu. Bazı uygulamalarda, bu özelik ciddi bir handikap oluşturur. Java 2, bu sorunu çözmek için Vector sınıfını ve benzer işi yapan ArrayList sınıfını ortaya koydu. Her iki sınıfta, diziye yeni öğeler eklenir ya da varolan öğeler silinirse, dizinin uzunluğu kendiliğinden değişir. Tabii, bu değişimin bellek kullanımı ve zaman açısından bir bedeli (karmaşa – complexity) vardır. Ama, java programcısı bu işleri yapan yordamları kendisi yazmak zorunda değildir. Vector ya da ArrayList sınıfına ait nesneler bu işleri kendiliğinden yaparlar.

Vector tipinden dizilerin öğeleri, aynen array tipinde olduğu gibi, birer indise sahiptir. Dolayısyla , vector’un öğelerine indisleri ile doğrudan erişim
sağlanır.

ArrayList senkronize olmadığı için Vector sınıfına göre daha hızlıdır. Elbette hızlı olmanın bir bedeli vardır. Senkronize olmaması demek, çoklu işlem ortamında
güvenirliğin azalması demektir.

```java

import java.util.Vector;

public class VectorExample {
    public static void main(String[] args) {

        Vector<String> v = new Vector<String>();
        v.add("Zonguldak");
        v.add("Sinop");
        v.add("Trabzon");
        v.add("Rize");
        v.add("Đzmit");

        // indisi 3 olan konuma bir öğe ekle (insetion)
        v.add(3, "Bafra");

        // v.size() vektörün bileşen sayısını verir
        System.out.println("Vektörün uzunluğu :" + v.size());

        // v.get(i) vektörün i-inci indisli terimini verir
        for (int i = 0; i < v.size(); i++) {
            System.out.println("Vektör öğesi : " + i + " :" +
                    v.get(i));
        }
    }
}


```

## Kaynak

- http://www.baskent.edu.tr/~tkaracay/etudio/ders/prg/dataStructures/Collections/ClassVector.pdf
