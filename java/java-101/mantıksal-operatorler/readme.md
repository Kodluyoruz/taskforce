![image-logical-operators](figures/logicaloperator.png)



# Mantıksal Operatörler

Bir kontrol işlemi sonucunda geriye true yada false değeri döndüren operatörlerdir. True / False döndüren ifadeler veya boolean tipinde değerler tutan değişkenler üzerinde kullanılabilirler. Konuyu anlayabilmek için ilk önce mantıksal operatörlerin neler olduğu öğrenilmelidir.

| **Operator**              | **Description**                                              | **Example**            |
| ------------------------- | ------------------------------------------------------------ | ---------------------- |
| &amp;&amp; (mantıksal ve) | Eğer A ve B değeri true ise true olur.                       | (A &amp;&amp; B)       |
| \|\| (mantıksal veya)     | Eğer A veya B' den en az biri true ise true olur.            | (A \|\| B)             |
| ! (mantıksal değil)       | () parantez içinde yer alan ifade true ise değilini alıp false yapar. Eğer ifade false ise true yapar. | !(A &amp;&amp; B)      |



#### Doğruluk Tabloları 



###### Ve (&&) Operatörünün Doğruluk Tablosu

| a     | b     | a&&b  |
| ----- | ----- | ----- |
| True  | True  | True  |
| True  | False | False |
| False | True  | False |
| False | False | False |



###### Veya (||) Operatörünün Doğruluk Tablosu

| a     | b     | a\|\|b |
| ----- | ----- | ------ |
| True  | True  | True   |
| True  | False | True   |
| False | True  | True   |
| False | False | False  |



###### Değil (!) Operatörünün Doğruluk Tablosu

| a     | !(a)  |
| ----- | ----- |
| True  | False |
| False | True  |



Örnek :

````java
public class Test {

   public static void main(String args[]) {
      boolean a = true;
      boolean b = false;

      System.out.println("a && b = " + (a&&b));
      System.out.println("a || b = " + (a||b) );
      System.out.println("!(a && b) = " + !(a && b)); 
   } 
}
````

Sonuç :

``````java
a && b = false
a || b = true
!(a && b) = true
``````





## Soru İşareti Operatörü

? işareti operatörü ile Java&#39;da mantıksal kıyaslama yapılabilir. ? ifadesi Java&#39;daki "if-else" yapısı yerine kullanılabilir. Tek satırda bunu yapabilmemizi sağlar. Kullanımı ise if'in içerisinde yer alacak ifadeyi soru işaretinden önce yazılır, ifadenin doğru olması durumunda yapılacak işlemler soru işareti ile iki nokta arasına yazılır. İfadenin yanlış olması durumunda yapılacaklar ise iki noktadan sonra yazılır.



Kullanımı :

``````java
( kontrol edilecek ifade ) ? doğru olması durumunda yapılacaklar : yanlış olması durumunda yapılacaklar
``````

Örnek :

`````java
public class Test {

   public static void main(String args[]) {
      int a, b;
      a = 10;
      b = (a == 1) ? 20: 30;
      System.out.println( "Value of b is : " +  b );

      b = (a == 10) ? 20: 30;
      System.out.println( "Value of b is : " + b );
   }
}

`````



Sonuç :

``````java 
Value of b is : 30

Value of b is : 20
``````


Açıklama :

> b = (a == 1) ? 20: 30; => ifadesini incelenirse, (a == 1) ? 20: 30 ifadesinden başlamak daha doğru olacaktır. a'nın 1 olması durumunda 20 değeri, a'nın 1'den farklı olması durumunda 30 değeri dönecektir. b'nin değeri buradan dönen değere göre belirlenecektir. Kodda a değeri 10 olarak verildiği için b'nin değeri 30 olarak atanmaktadır.
>
>
> b = (a == 10) ? 20: 30; => ifadesi incelenirse, yine yukarıdaki açıklamaya benzer olarak a değerinin 10 olması durumunda 20, a değeri 10'dan farklı olması durumunda ise 30 değeri geriye dönecektir. Bu durumda a değeri kodda 10 olduğu için b değeri de 20 olarak atanacaktır.





## instanceof Operatörü

"instanceof" operatörü ile bir değişkenin barındırdığı veri, aradığımız tipe sahip mi değil mi anlamamızı sağlayan operatördür. Geriye true veya false değerler döner. Değişkenler ile kullanıldığı gibi nesneler ile de kullanılabilir. İlerleyen konularda nesne kavramından bahsedilecektir.

 

Kullanımı :  

```java
nesne veya değişken instanceof tip
```

Örnek :

`````java
public class Test {

   public static void main(String args[]) {

      String name = "James";
      Integer age = 10;

      boolean isString = name instanceof String;
      boolean isInteger = value instanceof Integer;
       
      System.out.println("Is the name variable String ? = " isString );
      System.out.println("Is the age variable Integer ? = " isInteger );
      System.out.println("Is the name variable Integer ? = " name instanceof Integer ); 
       
   }
}

`````



Sonuç :

```java
Is the name variable String ? = true
Is the age variable Integer ? = true
Is the name variable Integer ? = false
```

