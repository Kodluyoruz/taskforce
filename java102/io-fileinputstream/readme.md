# InputStream Sınıfı

InputStream sınıfı byte akışını temsil eden bir abstract sınıftır ve Java.io paketinden gelmektedir.

InputStream abstract bir sınıf olduğu için kendi başına kullanışlı değildir o yüzden InputStream'a ait alt sınıflar veri okumak için kullanılır.

InputStream alt sınıfları : FileInputStream, ByteArrayInputStream, ObjectInputStream

## FileInputStream

Java.io paketinin FileInputStream sınıfı, dosyalardan verileri (bayt cinsinden) okumak için kullanılır.

InputStream soyut (Abstract) sınıfını miras alır.

### FileInputStream Oluşturma

Bir dosya giriş akışı oluşturmak için önce java.io.FileInputStream paketini içe aktarmalıyız. Paketi içe aktardıktan sonra, Java'da bir dosya giriş akışını
nasıl oluşturabileceğimizi burada bulabilirsiniz.

#### Dosya Yolu Kullanma

```java

FileInputStream input = new FileInputStream(stringPath);

```

#### Nesne Kullanma

```java

FileInputStream input = new FileInputStream(File fileObject);

```

### FileInputStream Metotları

FileInputStream sınıfına ait metotlar :

- read() : Dosyadan tek baytlık veri okur.
- read(byte[] array) : dosyadan verileri bayt cinsinde okur ve belirtilen dizide depolar

```java


import java.io.FileInputStream;

public class PatikaDev {
    public static void main(String[] args) {

        try {
            FileInputStream input = new FileInputStream("input.txt");

            System.out.println("Dosyadaki veriler: ");

            // İlk baytı okur
            int i = input.read();

            while (i != -1) {
                // Byte to char
                System.out.print((char) i);
                // Dosyadan sonraki baytı okur
                i = input.read();
            }
            input.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
    }
}


```

#### available();

```java

package stream;

import java.io.FileInputStream;

public class PatikaDev {
    public static void main(String[] args) {

        try {
            FileInputStream input = new FileInputStream("input.txt");

            // Kullanılabilir bayt sayısını verir
            System.out.println("Kullanılabilir bayt sayısı : " + input.available());

            // Dosyadan 3 baytlık veri okur
            input.read();
            input.read();
            input.read();

            // Kullanılabilir bayt sayısını verir
            System.out.println("Kullanılabilir bayt sayısı : " + input.available());

            input.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
    }
}

```

#### skip();

Belirtilen bayt sayısını atmak ve atlamak için skip () yöntemini kullanabiliriz. Örneğin,

```java

import java.io.FileInputStream;

public class PatikaDev {
    public static void main(String[] args) {

        try {
            FileInputStream input = new FileInputStream("input.txt");

            // 5 byte atlanacaktır
            input.skip(5);
            System.out.println("5 bytelık veri atlandı : ");

            int i = input.read();
            while (i != -1) {
                System.out.print((char) i);
                i = input.read();
            }
            input.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
    }
}


```