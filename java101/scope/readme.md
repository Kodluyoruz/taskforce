# Kod Blokları (Scope)

İki küme parantezi “{“ ve “}” arasında kalan kod kesimine blok (scope) denir. “{“ işareti bir kod bloğu başlatır ve “}” işareti başlatılan kod bloğunu bitirir. Bu işaretler kodun sınırlarını belirlemekte kullanılır. Herhangi bir değişken, tanımlandığı kod bloğu içinde fiziksel olarak vardır ve o kod bloğu içine yazılan kod kesimlerinden erişilebilirdir. Bir blok içinde aynı değişken adı birden fazla kez kullanılamaz.

```java
public class JavaPatika {
    // JavaPatika sınıfına ait alan
    
    public static void main(String[] args) {
        
        // Main metota ait alan
        System.out.println("Burası main metota ait");
    }
}
```

Yukarıda ki örnekte göreceğiniz üzere, kod blokları kodlar arasındaki hiyerarşik düzeni de belirtir. 

Bu durumda ;

```
- System.out.println("Burası main metota ait"); => main metoda ait
- public static void main(String[] args) {...} => JavaPatika sınıfına ait
```

İç içe bir kod yapısını ve ögelerin bir birilerine aitlik durumlarını kod blokları ile sağlarız. Ayrıca her kod bloğundan sonra bir tab boyutunda boşluk bırakılır. Bunun sebebi kodun okunabilirliğini arttırmaktır. Kodun okunabilirliği bir yazılımcı için çok önemli bir noktadır.

### Kötü Kod Örneği

```java
public class JavaPatika {
// JavaPatika sınıfına ait alan  
public static void main(String[] args) {     
// Main metota ait alan
int a=1,b=2,c=3;
System.out.println("Burası main metota ait");
}
}
```

### Temiz Kod Örneği

```java
public class JavaPatika {
    // JavaPatika sınıfına ait alan  
    public static void main(String[] args) {
        // Main metota ait alan
        int a = 1, b = 2, c = 3;
        System.out.println("Burası main metota ait");
    }
}
```

