# Tip Dönüşümleri

Bir veri tipini (int, float, double, vb.) başka bir veri türüne dönüştürme işlemi "Type Casting" denir.

## Widening Casting (Otomatik)

Küçük veri tipini daha büyük veri tipine dönüştürme işlemine denir. Genişletme Tipi Dönüşüm (Widening Casting) durumunda, daha düşük veri türü (daha küçük
boyuta sahip olan) daha yüksek veri türüne (daha büyük boyuta sahip) dönüştürülür. Dolayısıyla verilerde kayıp yoktur. Bu tür dönüşümünün otomatik olarak
gerçekleşmesinin nedeni budur.

byte -> short -> char -> int -> long -> float -> double

````java

public class PatikaDev {
    public static void main(String[] args) {
        int myInt = 3;
        double myDouble = myInt; // Otomatik Dönüştürme : int => double

        System.out.println(myInt);      // Çıktısı 3
        System.out.println(myDouble);   // Çıktısı 3.0
    }
}

````

## Narrowing Casting (Manuel)

Büyük veri tipini daha küçük veri tipine dönüştürme işlemine denir.

double -> float -> long -> int -> char -> short -> byte

````java

public class PatikaDev {
    public static void main(String[] args) {
        double myDouble = 3.78;
        int myInt = (int) myDouble; // Manuel Dönüştürme : double => int

        System.out.println(myDouble);   // Çıktısı 3.78
        System.out.println(myInt);      // Çıktısı 3
    }
}
````

### Integer => String Dönüşümü

````java

public class PatikaDev {
    public static void main(String[] args) {
        int num = 10;
        System.out.println("Integer değer : " + num);

        String data = String.valueOf(num);
        System.out.println("String Değer :  " + data);
    }
}

````

### String => Integer Dönüşümü

````java


public class PatikaDev {
    public static void main(String[] args) {
        String data = "15";
        System.out.println("String Değer : " + data);

        int num = Integer.parseInt(data);
        System.out.println("Integer Değer : " + num);
    }
}

````