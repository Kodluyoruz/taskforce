# StringReader

Java.io paketinin StringReader sınıfı, String veri tiplerini (karakter olarak) okumak için kullanılabilir. Soyut Reader sınıfını genişletir.

````java

import java.io.StringReader;

public class PatikaDev {
    public static void main(String[] args) {

        String str = "Java 101 String Reader.";

        char[] array = new char[100];

        try {
            StringReader input = new StringReader(str);

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

# StringWriter

Java.io paketinin StringWriter sınıfı, dize arabelleğine veri (karakter olarak) yazmak için kullanılabilir. Writer soyut sınıfını genişletir.

`````java

import java.io.StringWriter;

public class PatikaDev {
    public static void main(String[] args) {

        String data = "Java 102.";

        try {
            StringWriter output = new StringWriter();
            output.write(data);
            System.out.println("Data in the StringWriter: " + output);
            output.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
    }
}


`````