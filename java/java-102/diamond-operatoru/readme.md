# Diamond Operatörünün (<>) Kullanılması

Java 7'de yeni bir özellik olarak tanıtılan diamond operatörünü JDK 7 ile kullanabiliriz. Bu operatörü kullanarak Java derleyicisinin jenerik türü otomatik olarak tespit etmesini sağlarız. Diamond operatörü, bir nesne oluştururken jeneriklerin kullanımını basitleştirir. Ayrıca, bir programdaki denetlenmemiş uyarıları önler ve parametre türlerinin açıkça yinelenen belirtimlerini gerektirmeyerek genel ayrıntıları azaltır.

Örneğin, aşağıdaki kodu inceleyelim:

```java
Nullable<Integer> nullable = new Nullable<Integer>();
```

Burada öncelikle **_Nullable<Integer>_** türünde bir değişken oluşturuyoruz. Daha sonra bu değişkene yine bu türde bir atama yapıyoruz. Dikkat ederseniz, **_Nullable_** nesnesini oluştururken de parametre olarak Integer yazdık. Fakat JDK 7 ile artık bunu belirtmemize gerek yoktur; çünkü Java derleyicisi değişkene bakarak türün ne olduğunu anlayabilir. Dolayısıyla, yukarıdaki kodu daha kısa bir şekilde yazabiliriz:

```java
Nullable<Integer> nullable = new Nullable<>();
```

Gördüğünüz gibi, nesneyi oluştururken tür parametresini boş bıraktık.

Aşağıdaki kodda görüldüğü üzere Map nesnelerinden oluşan Liste gibi karmaşık veri türlerinde daha kullanışlı hale gelir:

```java
List<Map<String, List<String>> stringList = new ArrayList<>();
```

Örneğin, diamond operatörünü aşağıdaki kodda gösterilen tanımlayıcı için bir tür belirtmeden kullanırsak, bir dizi uyarı alırız.

```java
List arrayList = new ArrayList<>();
arrayList.add("First");
arrayList.add("Second");
```

Programın ```–Xlint:unchecked``` olarak derlenmesi aşağıdaki uyarılara neden olur:

```java
... codenuclear\Diamond.java:10: warning: [unchecked] unchecked call to add(E) as a member of the
raw type ArrayList
arrayList.add("First");
where E is a type-variable:
E extends Object declared in class ArrayList
... \codenuclear\DiamondOP.java:13: warning: [unchecked] unchecked call to add(E) as a member of the raw type ArrayList arrayList.add("Second");
where E is a type-variable:
E extends Object declared in class ArrayList
2 warnings
```
Veri türü aşağıdaki gibi belirtilirse bu uyarılar kaybolacaktır:

```java
List<String> arrayList = new ArrayList<>();
```

## Sorular

**1-** Aşağıdakilerden hangisi diamond operatörünün sağladığı avantajlardan biri değildir?

**A)** Java derleyicisinin jenerik türü otomatik olarak tespit etmesini sağlar.

**B)** Programdaki denetlenmemiş uyarıları önler.

**C)** Bu operatör ile nesne oluşturmak daha kolaydır.

**D)** Bir nesne oluştururken jeneriklerin kullanımını basitleştirir.

**E)** Parametre türlerinin açıkça yinelenen belirtimlerini gerektirmeyerek genel ayrıntıları azaltır.

**Cevap : C** 

## Kaynaklar 

- https://codenuclear.com/diamond-operator-type-inference-generic-instance-creation-java/