# FileReader

Java.io paketinin FileReader sınıfı, dosyalardan verileri (karakter olarak) okumak için kullanılabilir. InputStreamReader sınıfını genişletir.

````java

import java.io.FileReader;

public class PatikaDev {
    public static void main(String[] args) {
        try {
            FileReader input = new FileReader("input.txt");

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

# FileWriter

Java.io paketinin FileWriter sınıfı, dosyalara (karakter olarak) veri yazmak için kullanılabilir. OutputStreamWriter sınıfını genişletir.

````java

import java.io.FileWriter;

public class PatikaDev {
    public static void main(String[] args) {
        String data = "Patika Java102 Dersleri";

        try {
            FileWriter output = new FileWriter("output.txt");
            output.write(data);

            output.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
    }
}

````