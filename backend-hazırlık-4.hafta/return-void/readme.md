# Return ve Void Kullanımı

Java'da iki tür metot mevcuttur bunlar : Return (geri dönüşü olan) , Void (geri dönüşü olmayan) metotlar. Return metotlar çağrıldığında geriye bir değer döndürürken, Void metotlar geriye bir değer döndürmemektedir.

## Return Metotlar

Java'da oluşturduğumuz bir metodun bir değer üretmesini istendiğinde, "return" deyimi kullanılır. Metot içerisinde yazılan kod parçacıkları çalışacaktır, buna ek olarak metot içinde oluşturduğumuz bir veriyi dışarıya aktarma ihtiyacı duyabiliriz, bu durumlarda "return" deyimi kullanılır. Geri dönecek değerin veri tipi, metot tanımlarken verdiğimiz veri tipi ile aynı olmalıdır. Aksi halde derleyici tarafından hata alınır.

```java
public class Main {
  static int toplam(int x, int y) {
    return x + y;
  }
  public static void main(String[] args) {
    int t = toplam(5,2);
    System.out.println(t);
  }
}
// Çıktısı "7"
```

## Void Metotlar

Java'da yazılan bir metodun geriye bir değer döndürmesini istemiyor, sadece metot içindeki kod bloğunun çalışmasını istersek "void" deyimi kullanmalıdır. Metot tanımlanırken veri tipi kısmına "void" deyimi yazılması yeterlidir. Void metotlar içerisinde "return" deyimi kullanılamamaktadır.

```java
public class Main {
  static void toplam(int x, int y) {
      System.out.println(x+y);
  }
  public static void main(String[] args) {
    toplam(5,2);
  }
}
// Çıktısı "7"
```

