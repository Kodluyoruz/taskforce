# Float ve Double Veri Tipleri

Java'da ondalıklı yani küsüratlı sayıları belirten veri tipleri **Float** ve **Double**'dır.

### Float

- 32 Bit boyutundadır ve **1.4×10^-45** ile **3.4×10^38** aralığında bir değer tanımlanabilir.
- Float içerisine tam sayı yazdığımız zamanda bile o sayı 1.0 şeklinde ondalıklı olarak algılar.
- Float ile double ayırmak için , float tanımlamalardan sonra ‘f’ veya ‘F’ konulmalıdır.
- Anahtar Sözcük : **float**

### Double

- 64 Bit boyutundadır ve 4.9×10^-324 ile 1.8×10^308 aralığında bir değer tanımlanabilir.
- Üst düzey matematiksel işlemlerde kullanılır
- Anahtar Sözcük : **double**

### Ondalık Sayı Veri Tiplerinden Hangisi Tercih Edilmelidir ?

Bu sorunun cevabı değişken olmakla beraber hangi durumlarda Double veya Float kullanımınız için dikkat etmeniz gereken hususlar

- **Double** tipi, yüksek duyarlıklı ve hassas matematiksel işlemlerde kullanılır.
- **Float** basittir : hız ve bellek.
- **Double** daha yavaş ve fazla yer kaplar.(Bu işlemler arasında milisaniye oynar)
- **Java** hassas matematiksel işlemler, örneğin sinüs kosinüs fonksiyonları, **double** tipi değer döndürür.

```java
public class JavaPatika {
    public static void main(String[] args) {
        float number1 = 3.14F;
        float number2 = 3.14f;

        double number3 = 3.14;
    }
}
```

