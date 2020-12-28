# Generic Metotlar

Bir metot yazarken, içinde bulunduğu sınıf jenerik olmasa metodu jenerik hale getirebilirsiniz. Bunun için metodun dönüş türünden önce tür parametresini belirtmeniz yeterlidir. Örneğin **_ArrayUtil_** adında bir sınıf yazalım. Bu sınıfın içinde **_arrayContains()_** adında bir metodumuz olsun. Bu metot herhangi bir elemanın dizi içinde olup olmadığını test etsin.

```java
public class ArrayUtil
{
    public <T> boolean arrayContains(T[] array, T elem)
    {
    	for (T item : array)
    	{
    		if (item != null && item.equals(elem))
    		{
    			return true;
    		}
    	}
    	return false;
    }
}
```

Gördüğünüz gibi, sınıf jenerik olmasa bile metodumuzu jenerik hale getirdik. Artık bu metodu herhangi bir türdeki diziler için kullanabiliriz.

Jenerik sınıf yazarken geçerli olan özellikleri jenerik metotlarda da kullanabilirsiniz. Örneğin, jenerik türü sınırlandırabilir veya joker parametresi kullanabilirsiniz. Ayrıca, jenerik yapılandırıcılar da oluşturabilirsiniz.

## Diamond Operatörünün Kullanılması

JDK 7 ile diamond operatörünü kullanabiliriz. Bu operatörü kullanarak Java derleyicisinin jenerik türü otomatik olarak tespit etmesini sağlarız. Örneğin, aşağıdaki kodu inceleyelim:

```java
Nullable<Integer> nullable = new Nullable<Integer>();
```

Burada öncelikle **_Nullable<Integer>_** türünde bir değişken oluşturuyoruz. Daha sonra bu değişkene yine bu türde bir atama yapıyoruz. Dikkat ederseniz, **_Nullable_** nesnesini oluştururken de parametre olarak Integer yazdık. Fakat JDK 7 ile artık bunu belirtmemize gerek yoktur; çünkü Java derleyicisi değişkene bakarak türün ne olduğunu anlayabilir. Dolayısıyla, yukarıdaki kodu daha kısa bir şekilde yazabiliriz:

```java
Nullable<Integer> nullable = new Nullable<>();
```

Gördüğünüz gibi, nesneyi oluştururken tür parametresini boş bıraktık. Bu operatöre (<>) **diamond operatörü** denir.

## Jenerik Kısıtlamaları

Jeneriklerle ilgili bası kısıtlamalar mevcuttur. Bunlardan kısaca bahsedelim.

### Jenerik türlerin bir örneği alınamaz

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

### Jenerik sınıfların statik üyeleri tür parametresine erişemez

Statik üyelerin sınıfların oluşmasından bağımsız olduğunu daha önce anlatmıştık. Dolayısıyla jenerik bir sınıf içindeki statik üyeler tür parametresine erişemez:

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

### Jenerik dizi oluşturamazsınız

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

### Jenerik Exception sınıfı oluşturamazsınız

Kendinize özel hata sınıfları oluşturabilirsiniz. Fakat bu hata sınıfları jenerik olamaz.

```java
public class MyException<T> extends Exception
{
}
```

Yukarıdaki sınıf henüz derleme aşamasında hata alır; çünkü jenerik bir hata sınıfı oluşturmaya çalışıyoruz.