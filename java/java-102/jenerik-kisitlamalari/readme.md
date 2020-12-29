# Jenerik Kısıtlamaları

Jeneriklerle ilgili bası kısıtlamalar mevcuttur. Bunlardan kısaca bahsedelim.

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

## Jenerik sınıfların statik üyeleri tür parametresine erişemez

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