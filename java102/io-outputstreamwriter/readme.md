# Writer Sınıfı

Java.io paketinin Writer sınıfı, bir karakter akışını temsil eden soyut bir üst sınıftır.

Writer soyut bir sınıf olduğu için kendi başına kullanışlı değildir. Bununla birlikte, alt sınıfları veri yazmak için kullanılabilir.

# OutputStreamWriter

Java.io paketinin OutputStreamWriter sınıfı, karakter biçimindeki verileri bayt biçimindeki verilere dönüştürmek için kullanılabilir. Writer soyut sınıfını
genişletir.

OutputStreamWriter sınıfı, diğer çıktı akışlarıyla çalışır. Bayt akışları ve karakter akışları arasında bir köprü olarak da bilinir. Bunun nedeni,
OutputStreamWriter'ın karakterlerini bayta dönüştürmesidir.

Örneğin, bazı karakterlerin depoda saklanması 2 bayt gerektirir. Bu tür verileri yazmak için, karakteri karşılık gelen baytlara dönüştüren ve baytları birlikte
depolaması için OutputStreamWriter sınıfını kullanabiliriz.

````java
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;

public class PatikaDev {
    public static void main(String[] args) {

        String data = "Patika ile Java102 Dersleri";

        try {
            // FileOutputStream
            FileOutputStream file = new FileOutputStream("output.txt");

            // OutputStreamWriter
            OutputStreamWriter output = new OutputStreamWriter(file);

            output.write(data);

            output.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
    }
}

````

getEncoding() metodu, çıktı akışına veri yazmak için kullanılan kodlama türünü almak için kullanılabilir. Örneğin,

````java

import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;

public class PatikaDev {
    public static void main(String[] args) {

        try {
            FileOutputStream file = new FileOutputStream("output.txt");

            OutputStreamWriter output1 = new OutputStreamWriter(file);

            OutputStreamWriter output2 = new OutputStreamWriter(file, StandardCharsets.UTF_8);

            System.out.println("Character encoding of output1: " + output1.getEncoding());
            System.out.println("Character encoding of output2: " + output2.getEncoding());

            output1.close();
            output2.close();
        }

        catch(Exception e) {
            e.getStackTrace();
        }
    }
}


````