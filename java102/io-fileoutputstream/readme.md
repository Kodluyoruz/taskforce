# FileOutputStream

Java.io paketinin FileOutputStream sınıfı, dosyalara veri (bayt cinsinden) yazmak için kullanılabilir.

OutputStream soyut sınıfını genişletir.

## FileOutputStream oluşturma

Bir dosya çıktı akışı oluşturmak için önce java.io.FileOutputStream paketini içe aktarmalıyız.

### Dosya Yolu Kullanmak

```java

// Including the boolean parameter
FileOutputStream output = new FileOutputStream(String path, boolean value);

// Not including the boolean parameter
FileOutputStream output = new FileOutputStream(String path);

```

İsteğe bağlı bir boolean parametresi gönderilir.Bu parametre True olarak ayarlanırsa, yeni veriler dosyadaki mevcut verilerin sonuna eklenecektir. Aksi
takdirde, yeni veriler dosyadaki mevcut verilerin üzerine yazar.

### File Nesnesi Kullanmak

```java
FileOutputStream output = new FileOutputStream(File fileObject);
```

## Örnek

```java

import java.io.FileOutputStream;

public class PatikaDev {
    public static void main(String[] args) {
        String data = "Patika ile Java Öğreniyorum !!";
        try {
            FileOutputStream output = new FileOutputStream("output.txt");
            byte[] array = data.getBytes();
            output.write(array);
            output.close();
        } catch (Exception e) {
            e.getStackTrace();
        }
    }
}


```
