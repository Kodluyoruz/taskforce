# BufferedInputStream

Java.io paketinin BufferedInputStream sınıfı, verileri (bayt cinsinden) daha verimli okumak için diğer giriş akışlarıyla birlikte kullanılır. InputStream soyut sınıfını genişletir.

BufferedInputStream, 8192 baytlık bir dahili arabellek tutar. BufferedInputStream'deki okuma işlemi sırasında, diskten bir bayt yığını okunur ve dahili tamponda saklanır.Ayrıca dahili arabellekten baytlar ayrı ayrı okunur. Böylelikle diskle iletişim sayısı azalır. BufferedInputStream kullanarak bayt okumanın daha hızlı olmasının nedeni budur.

````java

// FileInputStream
FileInputStream file = new FileInputStream(String path);

// BufferedInputStream
BufferedInputStream buffer = new BufferInputStream(file);

````

````java

import java.io.BufferedInputStream;
import java.io.FileInputStream;

public class PatikaDev {
    public static void main(String[] args) {

        try {
             FileInputStream file = new FileInputStream("input.txt");

            BufferedInputStream input = new BufferedInputStream(file);
            input.skip(2);
            System.out.println("Kullanılabilir byte : " + input.available());

            int i = input.read();

            while (i != -1) {
                System.out.print((char) i);

                i = input.read();
            }

            System.out.println("Kullanılabilir byte : " + input.available());

            input.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}

````

# BufferedOutputStream

Java.io paketinin BufferedOutputStream sınıfı, verileri (bayt cinsinden) daha verimli yazmak için diğer çıktı akışlarıyla birlikte kullanılır. OutputStream
soyut sınıfını genişletir.

BufferedOutputStream, 8192 baytlık bir dahili arabelleği korur. Yazma işlemi sırasında, baytlar disk yerine dahili tampona yazılır. Tampon doldurulduktan veya akış kapatıldıktan sonra, tüm tampon diske yazılır. Böylelikle diskle iletişim sayısı azalır. BufferedOutputStream kullanarak bayt yazmanın daha hızlı olmasının nedeni budur.

````java
// FileOutputStream
FileOutputStream file = new FileOutputStream(String path);

// BufferedOutputStream
BufferedOutputStream buffer = new BufferOutputStream(file);
````

````java

import java.io.BufferedOutputStream;
import java.io.FileOutputStream;

public class PatikaDev {
    public static void main(String[] args) {

        String data = "Patika ile Java102 Dersleri";

        try {
            // FileOutputStream
            FileOutputStream file = new FileOutputStream("output.txt");

            // BufferedOutputStream
            BufferedOutputStream output = new BufferedOutputStream(file);

            byte[] array = data.getBytes();

            output.write(array);
            output.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}


````
