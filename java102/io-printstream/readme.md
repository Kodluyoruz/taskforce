# PrintStream

Java.io paketinin PrintStream sınıfı, çıktı verilerini bayt yerine yaygın olarak okunabilir biçimde (metin) yazmak için kullanılabilir.

Soyut OutputStream sınıfını genişletir.

Diğer çıktı akışlarından farklı olarak, PrintStream ilkel verileri (tamsayı, karakter) bayt yerine metin biçimine dönüştürür. Daha sonra bu biçimlendirilmiş
verileri çıktı akışına yazar.

Ayrıca, PrintStream sınıfı herhangi bir girdi / çıktı istisnası (exception) atmaz. Bunun yerine, içindeki herhangi bir hatayı bulmak için checkError()
metodunu kullanmamız gerekir.

````java

// FileOutputStream
FileOutputStream file = new FileOutputStream(String file);

// PrintStream
PrintStream output = new PrintStream(file, autoFlush);

````

System sınıfında sürekli kullandığımız PrintStream objesi :

````java

class Main {
    public static void main(String[] args) {
        String data = "Hello World.";
        System.out.print(data);
    }
}

````

Aynı nesneyi kendimizde üretebiliriz :

````java

import java.io.PrintStream;

class Main {
    public static void main(String[] args) {

        String data = "Hello World.";

        try {
            PrintStream output = new PrintStream("output.txt");

            output.print(data);
            output.close();
        }
        catch(Exception e) {
            e.getStackTrace();
        }
    }
}

````