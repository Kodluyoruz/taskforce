# Sınırlandırılmış Türler (Bounded Types)

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

## Joker Argümanını (Wildcard Argument) Kullanmak

Jenerikler tür güvenliğini mükemmel bir biçimde sağlar; buna rağmen bazen daha genel düşünmek gerekebilir. Örneğin, yukarıda oluşturduğumuz **_Nullable_** sınıfıyla ilgili bir metot yazdığımızı düşünelim. Bu metot **_Nullable_** türünde herhangi bir nesneyi parametre olarak alacak ve içindeki değerin **_null_** olup olmadığını test edecek. _Nullable_ sınıfı jenerik bir sınıf olduğu için, parametre olarak tanımlarken bir tür belirtmek gerekir. Örneğin aşağıda bu metodun bir örneğini görebilirsiniz:

```java
public static boolean isNullableHasValue(Nullable<String> nullable)
{
	return nullable != null && !nullable.isNull();
}
```

Bu metot sorunsuz bir şekilde çalışır; fakat yalnızca **_String_** türündeki **_Nullable_** nesnelerini kabul eder. Takdir edersiniz ki, biz buraya genel bir metot yazmak istiyoruz. Dolayısıyla yalnızca **_String_** değil, bütün türleri kapsayan bir **_Nullable_** nesnesini parametre olarak almak isteriz.

Bu gibi durumlarda **joker argümanını** (**wildcard argument**) kullanırız. Joker argümanını soru işareti (?) ile yazarız. Bu argüman tür parametresi yerine geçer ve bütün türleri temsil eder. Şimdi yukarıdaki metodu joker argümanı kullanarak tekrar yazalım:

```java
public static boolean isNullableHasValue(Nullable<?> nullable)
{
	return nullable != null && !nullable.isNull();
}
```

Artık bu metodu bütün Nullable nesneleri için kullanabiliriz.

## Sınırlandırılmış Joker Argümanı

Joker argümanına da alt veya üst sınır verebilirsiniz. Örneğin yukarıdaki metodu aşağıdaki gibi yazsaydık yalnızca **_Number_** sınıfının alt türleri için **_Nullable_** nesnelerini parametre olarak alabilecektik:

```java
public static boolean isNullableHasValue(Nullable<? extends Number> nullable)
{
	return nullable != null && !nullable.isNull();
}
```