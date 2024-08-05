# Joker Argümanını (Wildcard Argument) Kullanmak

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
