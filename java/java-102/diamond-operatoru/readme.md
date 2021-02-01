# Diamond Operatörünün Kullanılması

JDK 7 ile diamond operatörünü kullanabiliriz. Bu operatörü kullanarak Java derleyicisinin jenerik türü otomatik olarak tespit etmesini sağlarız. Örneğin, aşağıdaki kodu inceleyelim:

```java
Nullable<Integer> nullable = new Nullable<Integer>();
```

Burada öncelikle **_Nullable<Integer>_** türünde bir değişken oluşturuyoruz. Daha sonra bu değişkene yine bu türde bir atama yapıyoruz. Dikkat ederseniz, **_Nullable_** nesnesini oluştururken de parametre olarak Integer yazdık. Fakat JDK 7 ile artık bunu belirtmemize gerek yoktur; çünkü Java derleyicisi değişkene bakarak türün ne olduğunu anlayabilir. Dolayısıyla, yukarıdaki kodu daha kısa bir şekilde yazabiliriz:

```java
Nullable<Integer> nullable = new Nullable<>();
```

Gördüğünüz gibi, nesneyi oluştururken tür parametresini boş bıraktık. Bu operatöre (<>) **diamond operatörü** denir.

