# Jenerik Kısıtlamaları

Jeneriklerle ilgili bazı kısıtlamalar mevcuttur. Bunlardan kısaca bahsedelim.

## Primitive türlerle jenerik türler örneklenemez

```java
class Pair<K, V> {

    private K key;
    private V value;

    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    // ...
}
```

Bir `Pair` nesnesi oluştururken `K` veya `V` jenerik tür parametresi için bir primitive tür kullanılamaz:

```java
Pair<int, char> p = new Pair<>(8, 'a');  // compile-time error
```

`K` ve `V` jenerik tür parametreleri için yalnızca non-primitive türleri kullanabilirisiniz:

```java
Pair<Integer, Character> p = new Pair<>(8, 'a');
```

## Jenerik türlerin bir örneği alınamaz

Tür parametreleri, türün derleme aşamasında değil çalışma zamanında belirlenmesi için kullanılır. Dolayısıyla kodun yazım aşamasında türün ne olacağını önceden kestirmek mümkün değildir. Bu nedenle tür parametresi kullanarak yeni bir nesne oluşturamazsınız:

```java
public class GenericClass<T>
{
    private T obj;
    
    public GenericClass()
    {
    	obj = new T(); // Bu satır hataya sebep olur
    }
}
```
T çalışma zamanında mevcut olmadığından, derleyici hangi tipte nesne oluşturacağını bilemez. Bu nedenle, T'nin bir örneğini oluşturmak kurallara aykırıdır. 

## Jenerik sınıfların statik üyeleri tür parametresine erişemez

Statik üyelerin sınıfların oluşmasından bağımsız olduğunu daha önce anlatmıştık. Bir sınıfın statik alanı, sınıfın tüm statik olmayan nesneleri tarafından paylaşılan sınıf düzeyinde bir değişkendir. Dolayısıyla jenerik bir sınıf içindeki statik üyeler tür parametresine erişemez:

```java
public class GenericClass<T>
{
    public static createGenericClass(T param)
    {
    	// Yukarıdaki parametre nedeniyle bu kod derlenmez
    	// Statik metot içinde T parametresine erişemeyiz
    }
}
```
Başka bir örnek verelim:

```java
public class MobileDevice<T> {
    private static T os;

    // ...
}
```

Eğer static üyeler tür parametresine erişiyor olsaydı, aşağıdaki kodun kafası karışırdı:

```java
MobileDevice<Smartphone> phone = new MobileDevice<>();
MobileDevice<Pager> pager = new MobileDevice<>();
MobileDevice<TabletPC> pc = new MobileDevice<>();
```

`os` static alanı, `smartphone`, `pager` ve `tabletPC` tarafından paylaşıldığı için gerçek `os` türü nedir? Aynı anda `smartphone`, `pager` ve `tabletPC` olamaz. Bu nedenle tür parametrelerinde static alanlar oluşturamazsınız.

## Jenerik dizi oluşturamazsınız

Dizi oluşturduğunuz zaman hafızada dizinin boyutu kadar yer ayrılır. Jenerik bir türün ne olduğu önceden bilinemeyeceği için jenerik dizi oluşturamazsınız:

```java
public class GenericClass<T>
{
    public GenericClass()
    {
    	T[] array = new T[];
    	// Bu satır hataya sebep olur; jenerik dizi oluşturamazsınız
    }
}
```

## Jenerik Exception sınıfı oluşturamazsınız

Kendinize özel hata sınıfları oluşturabilirsiniz. Fakat bu hata sınıfları jenerik olamaz.

```java
public class MyException<T> extends Exception
{
}
```

Yukarıdaki sınıf henüz derleme aşamasında hata alır; çünkü jenerik bir hata sınıfı oluşturmaya çalışıyoruz.

### Kaynak
- [https://docs.oracle.com/javase/tutorial/java/generics/restrictions.html](https://docs.oracle.com/javase/tutorial/java/generics/restrictions.html)
