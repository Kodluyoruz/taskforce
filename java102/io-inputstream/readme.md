# InputStream Sınıfı

InputStream sınıfı byte akışını temsil eden bir abstract sınıftır ve Java.io paketinden gelmektedir.

InputStream abstract bir sınıf olduğu için kendi başına kullanışlı değildir o yüzden InputStream'a ait alt sınıflar veri okumak için kullanılır.

InputStream alt sınıfları : FileInputStream, ByteArrayInputStream, ObjectInputStream

## InputStream Oluşturma

Bir InputStream oluşturmak için önce java.io.InputStream paketini içe aktarmalıyız. Paketi içe aktardıktan sonra, giriş akışı oluşturabiliriz.

```java
InputStream nesne = new FileInputStream();
```

InputStream oluşturmak için alt sınıflarından birini kullanmalıyız, çünkü bu sınıfın kendisi bir abstract (soyut) sınıftır ve nesne üretilemez.

## InputStream Metotları

InputStream sınıfı, alt sınıfları tarafından uygulanan farklı metotlar sağlar. Yaygın olarak kullanılan metotlardan bazıları şunlardır:
