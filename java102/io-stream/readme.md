# I/O Veri Akışları

Bu bölümde Java'da Input / Output akışları (Stream) konusunu öğreneceğiz. Java’da veri giriş/çıkış işlemlerini, bir yerden başka bir yere (byte dizileri halinde) akan veriler olarak düşünebiliriz.

Veri okumak için bir giriş akışı (Input Stream) ve veri yazmak için bir çıktı akışı (Output Stream) kullanılır.

```java

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!"); 
    }
}

```

Örneğin, ilk "Hello World!" örneğimizde, ekrana çıktı vermek için System.out'u kullandık. Burada, System.out bir tür çıktı akışıdır (Output Stream).

Java’da veri akımlarının iki ana gruba ayrıldığını söylemeliyiz:

- Byte akımları (Byte Streams)
- Karakter akımları (Character Streams)

## Byte Akışları (Byte Stream)

Byte akışı, tek baytlık (8 bit) veriyi okumak ve yazmak için kullanılır. Resim, grafik, ses ve benzeri karakter tipinden olmayan bütün akımlar byte akımlarıdır.

Tüm byte akışı sınıfları, InputStream ve OutputStream soyut (abstract) sınıflardan türetilir.

## Karakter Akışları (Character Stream)

Karakter akışı, tek bir veri karakterini okumak ve yazmak için kullanılır. Karakter akımları, adından da anlaşılacağı üzere, karakter tipinden verilerin giriş/çıkışını yapar. Unicode kullandığı için, farklı ülkelerin alfabelerine uyum sağlar.

Tüm karakter akışı sınıfları, Reader ve Writer soyut (abstract) sınıflarından türetilir.

