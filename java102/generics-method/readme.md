# Jenerik Metotlar

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
