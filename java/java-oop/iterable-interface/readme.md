# Iterable Interface (Arayüzü)

Iterable interface'i Collection interface'in ATA sınıfır. Böylece, Collection’dan kalıtım alan tüm alt sınıflarda da Iterable interface'i kalıtım almış olur. Iterable interface ile elimizdeki veri kümesini tek tek dolaşabilme olanağı kazanırız. Bir for-each döngüsünde veri kümesi elemanlarına erişebiliriz.

Iterable interface'i sadece "iterator" isminde bir tane soyut fonksiyona sahiptir. Bu fonksiyon "Iterator" tipinde bir nesne döndürür. Bu nesne ile veri kümesindeki elemanlara tek tek erişebiliriz. 

```java
public interface Iterable<T> {

  public Iterator<T> iterator();    

}
```

Aşağıdaki gibi Person tipinde nesneleri tutan bir veri kümesini for-each döngüsüyle tek tek gezebiliyoruz. 

```java
for(Person person : persons) {
    // do something with person object.
}
```

Elimizdeki veri kümesini binlerce kez döngüde kullanmamız gerektiği bir durumda Iterator ile for-each döngüsünde dolaşmak indeksli standart döngüyle dönmekten daha yavaş olacaktır. Bu bir performans kaybına sebep olur. Bunun sebebi her döngü iterasyonun "iterator" fonksiyonu çağrılıp yeniden bir nesne üretilecek ve bu milyonlarca kez tekrarlanırsa performans problemi yaratacaktır. 

```java
for(int i=0; i<list.size(); i++) {
    Object obj = list.get(i);
}
```

Yoğun bir şekilde liste halindeki veriniz üzerinde binlerce, milyonlarca kez dönmeniz gerekiyorsa klasik for döngüsü, iterator ve for-each ile döngü kurmaktan daha performanslı olabilecektir.
