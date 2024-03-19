# LinkedHashSet

LinkedHashSet, tüm öğeler arasında çift bağlantılı bir Liste tutan sıralı bir HashSet sürümüdür. Yineleme sırasının korunması gerektiğinde bu sınıf kullanılır.
Bir HashSet aracılığıyla yinelendiğinde, sıra öngörülemezken, LinkedHashSet öğeler arasında eklendikleri sırayla yineleme yapmamıza izin verir. Bir yineleyici
kullanarak LinkedHashSet üzerinden geçiş yaparken, öğeler eklendikleri sırayla döndürülür.

````java
import java.util.LinkedHashSet;

public class LHashSet {
    public static void main(String[] args) {
        LinkedHashSet<String> days = new LinkedHashSet<>();
        days.add("Pazartesi");
        days.add("Salı");
        days.add("Çarşamba");
        days.add("Perşembe");
        days.add("Cuma");
        days.add("Cumartesi");
        days.add("Pazar");

        days.remove("Pazar");

        for (String day : days) {
            System.out.println(day);
        }

    }
}

````