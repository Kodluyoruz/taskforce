# Byte, Short, Int ve Long Veri Tipleri

Java'da tam sayıları belirten veri tipleri **Byte, Short, Integer ve Long**'tur. 

### Byte

- 8 bit uzunluğundadır. Max 127 , Min -128 değerleri arasındadır.
- Anahtar sözcük : **byte**

### Short

- 16 bit uzunluğundadır. Max 32,767 , Min -32,768 değerleri arasındadır.
- Anahtar sözcük : **short**

### Integer

- 32 bit uzunluğundadır. Max 2,147,483,647 , Min -2,147,483,648 değerleri arasındadır.
- En çok tercih edilen veri tipidir , sebebi ise optimize uzunluktadır.
- Anahtar sözcük : **int**

### Long

- 64 bit uzunluğundadır. Max 9,223,372,036,854,775,807 , Min -9,223,372,036,854,775,808  değerleri arasındadır.
- Int’in yetersiz olduğu yerlerde kullanılır
- Anahtar sözcük : **long**

```java
public class JavaPatika {
    public static void main(String[] args) {
        byte a = 120;
        short b = 1000;
        int c = 100000;
        long d = 10000000;
    }
}
```

