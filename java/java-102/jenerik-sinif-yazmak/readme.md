## Jenerik Sınıf Yazmak

Jeneriklerin parametrelendirilmiş tür olduğunu söylemiştik. Jenerik bir sınıf yazarken sınıf adından sonra küçüktür ve büyüktür işaretleri arasında bir tür parametresi belirtilir. Bu parametreyi Java’nın değişken isimlendirme kurallarına uygun olarak adlandırabilirsiniz; yine de geleneksel olarak tek ve büyük bir harf verilir. Şimdi **_Nullable_** sınıfını jenerikleri kullanarak tekrar yazalım:

```java
public class Nullable<T>
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

Gördüğünüz gibi, sınıfımızı jenerik bir hale getirdik. T adında bir tür parametresi aldık ve gerekli yerleri bu türe göre yeniden düzenledik. Öncelikle, artık sınıfımızın içinde tuttuğumuz veri T türünde olacaktır. Aynı şekilde, **_getValue()_** metodunu da T türünde bir değer döndürecek şekilde düzenledik.

Nasıl ki bir metodu çağırırken metodun parametrelerini vermek zorundaysak, jenerik sınıfları kullanırken de parametre olarak bir tür vermek zorundayız. Şimdi bu sınıfı kullanalım:

```java
Nullable<String> nullableString = new Nullable<String>("abc");

if (!nullableString.isNull())
{
	String value = nullableString.getValue();
}
```

Bu örnekte **_Nullable_** sınıfının bir örneğini aldık, fakat bu örneği **_String_** türü için oluşturduk. Artık **_nullableString_** nesnesindeki metotları yalnızca **_String_** türü için kullanabiliriz. Başka bir tür için kullanmaya çalıştığımızda kodumuz derlenmeyecektir:

```java
Nullable<String> nullableString = new Nullable<String>("abc");

if (!nullableString.isNull())
{
	int value = nullableString.getValue(); // Bu satır hata fırlatır
}
```

Örneğin yukarıdaki kod hataya sebep olur; çünkü **_nullableString_** nesnesinin **_getValue()_** metodu **_String_** döndürür. Fakat biz bu metodun sonucunu int türünde bir değişkene aktarmaya çalışıyoruz.

Şimdi başka bir örneğe bakalım:

```java
Nullable<Date> nullableDate = new Nullable<Date>(new Date());

if (!nullableDate.isNull())
{
	Date value = nullableDate.getValue();
}
```

Yukarıdaki örnekte **_Nullable_** sınıfını **_Date_** türü için oluşturduk, dolayısıyla **_getValue()_** metodu **_Date_** türünde bir değer döndürmektedir.

Gördüğünüz gibi, jenerikler sayesinde **tür güvenliğini** (**type-safety**) sağlamış olduk.

