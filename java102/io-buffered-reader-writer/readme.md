# BufferedReader

Java.io paketinin BufferedReader sınıfı, verileri (karakter olarak) daha verimli okumak için diğer okuyucularla birlikte kullanılabilir. Soyut Reader sınıfını
genişletir.

BufferedReader, 8192 karakterlik bir dahili arabellek tutar. BufferedReader'daki okuma işlemi sırasında, diskten bir yığın karakter okunur ve dahili tamponda
saklanır ve dahili tampondan karakterler ayrı ayrı okunur. Böylelikle diskle iletişim sayısı azalır. BufferedReader kullanarak karakterleri okumak daha hızlı
olmasının nedeni budur.

````java
import java.io.BufferedReader;
import java.io.FileReader;

public class PatikaDev {
    public static void main(String[] args) {

        try {
            FileReader file = new FileReader("input.txt");
            BufferedReader input = new BufferedReader(file);

            String line;
            while ((line = input.readLine()) != null) {
                System.out.println(line);
            }

            input.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
    }
}

````

# BufferedWriter

Java.io paketinin BufferedWriter sınıfı, verileri (karakter olarak) daha verimli yazmak için diğer yazarlarla birlikte kullanılabilir. Writer soyut sınıfını
genişletir.

````java


import java.io.BufferedWriter;
import java.io.FileWriter;

public class PatikaDev {
    public static void main(String[] args) {
        String data = "Java 102 Dersleri";

        try {
            FileWriter file = new FileWriter("output.txt");

            BufferedWriter output = new BufferedWriter(file);

            output.write(data);

            output.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
    }
}


````