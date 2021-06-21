# ByteArrayInputStream

Java.io paketinin ByteArrayInputStream sınıfı, bir dizi girdi verisini (bayt cinsinden) okumak için kullanılabilir.

ByteArrayInputStream'de, girdi akışı bayt dizisi kullanılarak oluşturulur. Bu bayt dizisinin verilerini depolamak için dahili bir dizi içerir.

Bir bayt dizisi giriş akışı oluşturmak için, önce java.io.ByteArrayInputStream paketini içe aktarmalıyız.

````java
// Dizinin tamamını okuyan bir ByteArrayInputStream oluşturur
ByteArrayInputStream input = new ByteArrayInputStream(byte[] arr);

// Dizinin bir bölümünü okuyan bir ByteArrayInputStream oluşturur
ByteArrayInputStream input = new ByteArrayInputStream(byte[] arr, int start, int length);
````

Burada giriş akışı, başlangıç konumundan başlayarak diziden uzunluğa eşit bayt sayısını okur.

````java

import java.io.ByteArrayInputStream;

public class PatikaDev {
    public static void main(String[] args) {

        byte[] array = {1, 2, 3, 4};
        try {
            ByteArrayInputStream input = new ByteArrayInputStream(array);

            System.out.println("Available bytes at the beginning: " + input.available());

            System.out.println("The bytes read from the input stream: ");
            for (int i = 0; i < array.length; i++) {
                int data = input.read();
                System.out.print(data + ", ");
            }
            System.out.println("Available bytes at the beginning: " + input.available());
            input.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
    }
}


````

````java

import java.io.ByteArrayInputStream;

public class PatikaDev {
    public static void main(String[] args) {
        byte[] array = {1, 2, 3, 4};
        try {
            ByteArrayInputStream input = new ByteArrayInputStream(array);
            
            // 2 baytlık veri atlanacaktır
            input.skip(2);

            int data = input.read();
            while (data != -1) {
                System.out.print(data + ", ");
                data = input.read();
            }

            input.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
    }
}


````

# ByteArrayOutputStream

Java.io paketinin ByteArrayOutputStream sınıfı, bir dizi çıktı verisini (bayt cinsinden) yazmak için kullanılabilir.

OutputStream soyut sınıfını genişletir.

ByteArrayOutputStream'de, verileri depolamak için dahili bir bayt dizisi bulunur.

````java

// Varsayılan boyutta bir ByteArrayOutputStream oluşturur
ByteArrayOutputStream out = new ByteArrayOutputStream();

// Belirtilen boyutta bir ByteArrayOutputStream oluşturma
ByteArrayOutputStream out = new ByteArrayOutputStream(int size);

````

````java
import java.io.ByteArrayOutputStream;

public class PatikaDev {
    public static void main(String[] args) {

        String data = "Patika ile Java Öğreniyorum";

        try {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] array = data.getBytes();

            out.write(array);

            String streamData = out.toString();
            System.out.println("Çıkış akışı : " + streamData);

            out.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
    }
}

````

````java

import java.io.ByteArrayOutputStream;

public class PatikaDev {
    public static void main(String[] args) {

        String data = "Patika ile Java Dersleri";

        try {
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] array = data.getBytes();

            out.write(array);
            
            String stringData = out.toString();
            System.out.println("\nData using toString(): " + stringData);
            out.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
    }
}


````