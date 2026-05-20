# File Sınıfı

Java.io paketinin File sınıfı, dosyalar ve dizinler üzerinde çeşitli işlemler gerçekleştirmek için kullanılır.

Dosyalarla çalışmak için kullanılabilecek java.nio adında başka bir paket var. Ancak bu eğitimde java.io paketine odaklanacağız.

## Dosya ve Dizinler

Dosya, ilgili bilgileri depolamak için kullanılabilen adlandırılmış bir konumdur.

Örneğin : main.java, Java programı hakkında bilgiler içeren bir Java dosyasıdır.

Dizinler, dosya ve alt dizinlerden oluşan bir koleksiyondur. Bir dizinin içindeki bir dizin, alt dizin olarak bilinir.

Bir File nesnesi oluşturmak için, önce java.io.File paketini içe aktarmamız gerekir.

````java
File file = new File(String pathName);
````

### File Metotları

| İşlem      | Metot            | Paket              |
| :------------- | :---------------- | :------------------- |
| Dosya Oluşturma | `createNewFile()` | `java.io.File`       |
| Dosya Silme | `delete()`        | `java.io.File`       |
| Dosya Okuma   | `read()`          | `java.io.FileReader` |
| Dosya Yazma  | `write()`         | `java.io.FileWriter` |

### Dosya Oluşturma

Yeni bir dosya oluşturmak için createNewFile() metodunu kullanabiliriz. Eğer yeni bir dosya oluşturulursa metot true, dosya zaten belirtilen konumda mevcutsa
false değerini döndürür.

````java

import java.io.File;

public class PatikaDev {
    public static void main(String[] args) {

        File file = new File("patika.txt");

        try {
            boolean value = file.createNewFile();
            if (value) {
                System.out.println("Yeni Dosya Oluştu.");
            } else {
                System.out.println("Dosya Zaten Mevcut.");
            }
        } catch (Exception e) {
            e.getStackTrace();
        }

    }
}

````

### Dosya Silme

Belirtilen dosyayı veya dizini silmek için File sınıfının delete() metodunu kullanabiliriz.

Not: Sadece boş dizinleri silebiliriz.

````java
import java.io.File;

public class PatikaDev {
    public static void main(String[] args) {

        File file = new File("patika.txt");

        boolean value = file.delete();
        if (value) {
            System.out.println("The File is deleted.");
        } else {
            System.out.println("The File is not deleted.");
        }

    }
}   

````

### Dizin Oluşturma

Java File sınıfı, yeni bir dizin oluşturmak için mkdir() metodunu sağlar. Metot geriye

- yeni dizin oluşturulursa true,
- dizin zaten mevcutsa false döndürür.

````java

import java.io.File;

public class PatikaDev {
    public static void main(String[] args) {

        File file = new File("patika/test");

        boolean value = file.mkdir();
        if(value) {
            System.out.println("The new directory is created.");
        }
        else {
            System.out.println("The directory already exists.");
        }

    }
}

````

### Dizindeki Elemanları Listeleme

````java

import java.io.File;

public class PatikaDev {
    public static void main(String[] args) {

        File file = new File("test");

        String[] fileList = file.list();

        for(String str : fileList) {
            System.out.println(str);
        }

    }
}

````