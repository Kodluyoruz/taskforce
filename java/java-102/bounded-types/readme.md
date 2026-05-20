# Sınırlandırılmış Türler (bounded types)

Jenerik sınıf veya metot tanımlarken parametre olarak aldığınız türü sınırlandırabilirsiniz. Örneğin, parametre olarak aldığım tür **_Number_** sınıfının alt sınıflarından biri olsun, diyebilirsiniz. Böyle bir durumda **_Number_** sınıfından türetilmemiş hiçbir sınıfı parametre olarak veremezsiniz.

Tür sınırlandırması yaparken **extends** veya **super** deyimi kullanılır. Bu deyimlerden sonra bir sınıf veya arayüz ismi verilir. Bu deyimleri kullanarak parametre olarak jenerik türünü sınırlandırmış oluruz:

- **extends** deyimini kullandıysak yalnızca belirttiğimiz türü veya alt sınıflarını kullanabiliriz. Buna **üst sınır** (upper-bound) denir.
- **super** deyimini kullandıysak yalnızca belirttiğimiz türün üst sınıflarını kullanabiliriz. Buna **alt sınır** (lower-bound) denir.

Şimdi yukarıda yazdığımız Nullable sınıfını güncelleyerek bir örnek yapalım:

```java
public class Nullable<T extends Number>
{
    private final T value;
    
    public Nullable(T value)
    {
    	this.value = value;
    }
    public T getValue()
    {
    	return value;
    }
    public boolean isNull()
    {
    	return value == null;
    }
    @Override
    public String toString()
    {
    	return isNull() ? "null" : value.toString();
    }
}
```

Yukarıda da gördüğünüz gibi, jenerik _Nullable_ sınıfına aldığımız tür parametresini **extends** deyimiyle sınırlandırdık. Buna göre bu sınıfı yalnızca _Number_ veya alt türleriyle kullanabiliriz.

```java
Nullable<Integer> nullableInteger = new Nullable<Integer>(2020);
// Bu kullanım uygundur; çünkü Integer, Number sınıfından türetilmiştir
Nullable<String> nullableString = new Nullable<String>("2020");
// Bu kullanım uygun değildir; String, Number sınıfından türetilmemiştir
```

