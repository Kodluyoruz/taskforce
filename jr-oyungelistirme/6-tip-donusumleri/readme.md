# Tip Dönüşümleri
Bir değişken tanımlaması yaptığımızda bellekten o değişkenin tipine bağlı olarak bir alan tesis etmiş oluruz. Dolayısıyla tanımladığımız bu değişkene farklı veri tipinde bir değer atanması bellekte işlerin karışmasına neden olabilir. 

Çoğu zaman uygulama yazarken farklı veri tipleri ile çalılmak durumunda kalabiliriz. Bellekte işleri yoluna koyabilmek için bu tip durumlarda tip dönüşümü yapmamız gerekir.

Tip dönüşümleri **2 şekilde** yapılabilir. 
* Implicit Conversion (Bilinçsiz ya da kapalı dönüşüm)
* Explicit Conversion (Bilinçli ya da açık dönüşüm)

## Implicit Conversion
Bir değişkenin kendinen daha yüksek kapasiteli bir değişkene atanmasıdır. Hedef değişkenin veri tipi bellekte yeterli alana sahip olacağından, bu dönüşümde bir veri kaybı sözkonusu olmayacaktır. Dolayısıyla bu dönüşüm kendiliğinden yapılabilir. 

**Örnek:**
```
float a; int b = 25; a = b;
```

**Örnek:**
```
short x = 10; int y; y = x;
```

Yukarıdaki örnek sorunsuz çalışır. Çünkü float integer'a, integer da short veri tipine göre daha büyük sayıları saklayabiliyor.

## Explicit Conversion
 Bu yöntemde dönüşümleri developer'ın yapıyor olması gerekiyor. Dönüşüm için farklı yöntemler mevcut. 

- Convert Metodu

    **Örnek :** 
    ```
    int a; a = Convert.ToInt32(Console.ReadLine());
    ```
- Parse Metodu

    String türündeki verileri sayı tipindeki değerlere dönüştürmek için kullanılır.

    **Örnek :** 
    ```
    int a; a = Int.Parse(Console.ReadLine());
    ```

    **Örnek :** 
    ```
    long x = long.Parse(Console.ReadLine());
    ```
- Cast Operatörü İle Dönüşüm
     
    **Örnek :** 
    ```
        double a = 3.45; int a = (int)sayi;
    ```


