# Reader Sınıfı

Java.io paketinin Reader sınıfı, bir karakter akışını (Characters Stream) temsil eden soyut bir üst sınıftır.

Reader soyut bir sınıf olduğu için kendi başına kullanışlı değildir. Bununla birlikte, alt sınıfları verileri okumak için kullanılabilir.

# InputStreamReader Sınıfı

Java.io paketinin InputStreamReader sınıfı, bayt cinsinden verileri karakter cinsinden verilere dönüştürmek için kullanılabilir. Soyut Reader sınıfını
genişletir.

InputStreamReader sınıfı, diğer giriş akışlarıyla (Input Streams) çalışır. Bayt akışları ve karakter akışları arasında bir köprü olarak da bilinir. Bunun
nedeni, InputStreamReader'ın giriş akışındaki baytları karakter olarak okumasıdır.

Örneğin, bazı karakterlerin depoda depolanması için 2 bayt gerekiyordu. Bu tür verileri okumak için, 2 baytı birlikte okuyan ve karşılık gelen karaktere
dönüştürmek için InputStreamReader sınıfını kullanabiliriz.

````java
// InputStream
FileInputStream file = new FileInputStream(String path);

// InputStreamReader
InputStreamReader input = new InputStreamReader(file);

````

````java
import java.io.InputStreamReader;
import java.io.FileInputStream;

public class PatikaDev {
    public static void main(String[] args) {

        char[] array = new char[100];

        try {
            // FileInputStream
            FileInputStream file = new FileInputStream("input.txt");

            // InputStreamReader
            InputStreamReader input = new InputStreamReader(file);

            int data = input.read();
            while (data != -1) {
                System.out.print((char) data);
                data = input.read();
            }
            
            input.close();
        } catch (Exception e) {
            e.getStackTrace();
        }

    }
}

````