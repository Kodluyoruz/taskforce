# Queue LinkedList

Queue arayüzü Java Collections Framework ‘un bir üyesidir. İşlemlerden geçmeden önce öğeleri depolanmasını sağlar. Collection arayüzünün bir altarayüzü
olduğundan, onun bütün metotlarını kullanır. Onlara ek olarak, kuyruk yapısındaki ekleme, silme gibi işlemleri kolaylaştıran metotlara sahiptir.

Ortaya çıkış nedeniyle, Queue bir FIFO (first-in-first-out, ilk giren ilk çıkar) yapısıdır. Ancak, Queue ve Collection arayüzündeki metotlar kullanılarak, FIFO
yapısı LIFO (lsast-input-first-output, son giren ilk çıkar) yapısı gibi kullanılabilir. Fıfo ve LIFO yapılarına öncelik sıralamalı kuyruklar
(priority queues) denilir. Bu yapılarda, öğeler ya doğal sıralarında ya da bu iş için oluşturulan comparator (mukayeseci) tarafından sıraya konulur. Tabii,
LinkedList yapısı her ikisinden daha geneldir. Yapı ister FIFO, ister LIFO olsun, ilk çıkan öğe kuyruğun başındadır; remove() ya da poll()metodu ile alınır.

- element() :  Kuyruğun başındaki öğeyi verir, ama onu kuyruktan atmaz.
- add(eleman): Parametrede verilen elemanı kuyruğa ekler. İşlemin başarısız olması durumunda hata fırlatır.
- offer(eleman): Parametrede verilen elemanı kuyruğa ekler. İşlemin başarısız olması durumunda null döner.
- poll(): Kuyruğun başındaki elemanı kuyruktan çıkartır.
- peek(): Kuyrukta sıradaki elemana ulaşmak için kullanılır.

```java
import java.util.LinkedList;
import java.util.Queue;

public class QuList {
    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<>();
        // add() metodu ile kuyruğa öğe ekleme
        // ekleme yapılamazsa hata verir
        queue.add("Deniz");
        queue.add("Berna");
        // offer() metodu ile kuyruğa öğe ekleme
        // ekleme yapılamazsa false verir
        queue.offer("Volkan");
        queue.offer("Çağlar");
        // remove() metodu kuyruğun başındaki değeri verir ve onukuyruktan atar
        // Kuyruk boş ise java.util.NoSuchElementException hatasını verir.

        System.out.println("remove() : " + queue.remove());
        // element() metodu kuyruğun başındaki öğeyi verir; onu kuyruktan atmaz
        // Kuyruk boş ise java.util.NoSuchElementException hatasını verir.
        System.out.println("element() : " + queue.element());
        // poll() metodu kuyruğun başındaki öğeyi verir ve onu kuyruktan atar
        // Kuyruk boş ise false değerini verir
        System.out.println("poll() : " + queue.poll());
        // peek() metodu kuyruğun başındaki öğeyi verir; onu kuyruktan atmaz
        // Kuyruk boş ise false değerini verir
        System.out.println("peek() : " + queue.peek());
    }
}

```