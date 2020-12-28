# Java Generics (Jenerikler)

Jenerikler, kelime anlamı itibariyle **parametrelendirilmiş** tür anlamına gelir. Jenerikler sayesinde, sınıf, arayüz veya metot yazarken tek bir türe bağlı kalmayıp üzerinde işlem yapacağınız türü parametre olarak alabilirsiniz. Bu sayede, farklı türler üzerinde çalışan tek bir sınıf yazmak mümkündür. Bu şekilde yazılan sınıflara **jenerik sınıf**, metotlara **jenerik metot** denir.

Jenerikler JDK 5 ile dile eklenmiştir. Buna rağmen, Java’nın en temel özelliklerinden biridir ve dili temelden etkilemiştir. Bu yüzden, jenerikleri iyi anlamak Java’yı öğrenmek açısından büyük önem taşır.

Jenerikler **tür güvenliğini** (type-safety) sağlamak amacıyla dile eklenmiştir. Java’nın **tür kesinliği olan** (strongly typed) bir dil olduğunu daha önce belirtmiştik. Fakat bu iki kavram birbirinden farklıdır. Tür güvenliği kavramını ve neden gerekli olduğunu anlamak için bir örnek yapalım.

**_Nullable_** adında basit bir sınıf yazalım. Bu sınıfı NullPointerException hatalarının önüne geçmek amacıyla kullanacağız. İlk olarak bu sınıfı String değerler üzerinde kullanalım:

```java
public class Nullable
{
	private final String value;
	
    public Nullable(String value)
	{
		this.value = value;
	}
	public String getValue()
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
		return isNull() ? "null" : value;
	}
}
```

String nesneler üzerinde uğraşırken null hatalarının önüne geçmek için bu sınıfı kullanacağız. Sınıfı oluştururken parametre olarak bir **_String_** değer vereceğiz. Bu değerin **null** olup olmadığını **_isNull()_** metoduyla kontrol edeceğiz. Şimdi örnek bir kullanım gösterelim:

```java
Nullable x = new Nullable("null olmayan değer");

if (!x.isNull())
{
	System.out.println(x.getValue());
}

String nullString = null;

Nullable y = new Nullable(nullString);

if (y.isNull())
{
	System.out.println("y değişkeni null");
}
```

Yukarıdaki kodu çalıştırdığınız zaman çıktısı aşağıdaki gibi olur:

```java
null olmayan değer
y değişkeni null
```

Gördüğünüz gibi yazdığımız sınıf güzel bir şekilde çalışmaktadır. Peki ya bu sınıfı _String_ türünden başka türler için de kullanmak istersek? Mevcut durumda _Nullable_ sınıfı yalnızca _String_ değerleri kabul ediyor. Yani bu sınıfı Date türündeki değerler üzerinde kullanamayız. O halde bu sınıfın adını _NullableString_ olarak değiştirelim ve _NullableDate_ adında başka bir sınıf oluşturalım:

```java
import java.util.Date;

public class NullableDate
{

 	private final Date value;
    
    public NullableDate(Date value)
	{
		this.value = value;
	}
	public Date getValue()
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

Gördüğünüz gibi, aynı sınıfı sadece **_String_** türünü **_Date_** olarak değiştirerek tekrar yazdık. Bunun iyi bir yöntem olmadığını kabul etmelisiniz. Yalnızca kod tekrarı yapmakla kalmadık, aynı zamanda birbiriyle alakalı olmalarına rağmen sınıflara farklı isimler vermek zorunda kaldık. Artık **_String_** türü için **_NullableString_** sınıfını, **_Date_** türü için **_NullableDate_** sınıfını kullanabiliriz.

Yine de hâlâ ideal bir çözüm bulamadık. Çünkü Nullable sınıfını yalnızca 2 tür için kullanabiliyoruz. Peki ya bu sınıfı Integer, Double, Boolean gibi diğer türler için de kullanmak istersek? Hepsi için aynı kodu kopyalayıp farklı sınıflar oluşturmamız gerekir.

Yapmak istediğimiz şey, bütün türler için geçerli olacak bir **_Nullable_** sınıfı yazmak. Bunu şu şekilde başarabiliriz: **_Nullable_** sınıfının **_Object_** türü üzerinde çalışmasını sağlayalım. Bildiğiniz gibi, **_Object_** sınıfı bütün sınıfların atasıdır. Dolayısıyla bütün türleri **_Object_** türünden ifade edebiliriz. Şimdi sınıfı düzenleyip tekrar yazalım:

```java
public class Nullable
{
    private final Object value;
    
    public Nullable(Object value)
    {
    	this.value = value;
    }
    public Object getValue()
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

Şimdi bu sınıfı farklı türler üzerinde kullanalım:

```java
Nullable nullableString = new Nullable("abc");
Nullable nullableDate = new Nullable(new Date());
Nullable nullableInt = new Nullable(2020);
Nullable nullableDouble = new Nullable(3.14);
Nullable nullableBoolean = new Nullable(true);
```

Yukarıda görebileceğiniz gibi, **_Nullable_** sınıfını farklı türler üzerinde kullanabiliriz. Fakat hâlâ bir sorunumuz var: **_getValue()_** metodunu çağırdığımız zaman çıkan değeri dönüştürmek zorundayız:

```java
Nullable nullableString = new Nullable("abc");

if (!nullableString.isNull())
{
	String value = (String) nullableString.getValue();
}
```

Bu önemli bir açıktır. Bu açık yüzünden farkında olmadan hataya sebebiyet verebiliriz. Örneğin, aşağıdaki kodu inceleyelim:

```java
Nullable nullableString = new Nullable("abc");

if (!nullableString.isNull())
{
	boolean value = (boolean) nullableString.getValue();
}
```

Bu örnekte **_Nullable_** sınıfına parametre olarak verdiğimiz değer **_String_** iken, bu değeri **boolean** türüne dönüştürmeye çalışıyoruz. Bu durumda yukarıda da gördüğümüz **_ClassCastException_** hatasıyla karşılaşırız.

Bu örnekten şunu anlıyoruz: Nullable sınıfını bütün türleri kapsayacak şekilde geliştirmemize rağmen tür güvenliğini sağlayamadık. JDK 5’ten önce bu gibi durumlar sıkça yaşanıyordu ve tür güvensiz kodlar yazılıyordu. Jenerikler ile bunun önüne geçmek mümkün olmuştur. Jenerikler, bir yandan farklı türler için tek bir kod yazmamızı sağlarken, diğer yandan tür güvenliğini sağlar.

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

## Jenerikler İlkel Veri Türleri Üzerinde Çalışmaz

Jenerik sınıflara veya metotlara ilkel veri türlerini parametre olarak veremezsiniz:

```java
Nullable<int> nullable = new Nullable<int>(2020);
// Yukarıdaki satır hataya neden olur
```

Yukarıdaki örnek hataya sebep olur; çünkü tür parametresi olarak ilkel bir veri türü olan int’i veriyoruz.

İlkel veri türlerini de jeneriklerle birlikte kullanabilmek için JDK 5 ile **sarmalayıcı sınıflar** (**wrapper classes**) eklenmiştir. 8 ilkel veri türüne karşılık olarak 8 sarmalayıcı sınıf oluşturulmuştur:

| ilkel veri türü | sarmalayıcı sınıf |
| - | - |
| byte | java.lang.Byte |
| short | java.lang.Short |
| int | java.lang.Integer |
| long | java.lang.Long |
| float | java.lang.Float |
| double | java.lang.Double |
| char | java.lang.Character |
| boolean | java.lang.Boolean |

Sarmalayıcı sınıfları ilkel veri türlerini sarmalamak için aşağıdaki gibi kullanırız:

```java
byte primitiveByte = 1;
Byte byteObject = new Byte(primitiveByte);
byte byteValue = byteObject.byteValue();

short primitiveShort = 1;
Short shortObject = new Short(primitiveShort);
short shortValue = shortObject.shortValue();

int primitiveInt = 1;
Integer intObject = new Integer(primitiveInt);
int intValue = intObject.intValue();

long primitiveLong = 1L;
Long longObject = new Long(primitiveLong);
long longValue = longObject.longValue();

float primitiveFloat = 1.0f;
Float floatObject = new Float(primitiveFloat);
float floatValue = floatObject.floatValue();

double primitiveDouble = 1.0d;
Double doubleObject = new Double(primitiveDouble);
double doubleValue = doubleObject.doubleValue();

char primitiveChar = 'a';
Character charObject = new Character(primitiveChar);
char charValue = charObject.charValue();

boolean primitiveBoolean = true;
Boolean booleanObject = new Boolean(primitiveBoolean);
boolean booleanValue = booleanObject.booleanValue();
```

## Kutulama (Autoboxing) ve Kutudan Çıkarma (Unboxing)

Yukarıda ilkel veri türleri ve sarmalayıcı sınıfları arasında nasıl dönüşüm yapılabileceğini gördük. Bunu daha kısa bir şekilde yapabilmek için JDK 5 ile **kutulama** ve **kutudan çıkarma** özelliği getirilmiştir. Bu sayede ilkel veri türlerini sarmalayıcı sınıflarına hiçbir ek işlem yapmadan atayabilirsiniz. Yukarıdaki kodu aşağıdaki gibi yazabiliriz:

```java
byte primitiveByte = 1;
Byte byteObject = primitiveByte;
byte byteValue = byteObject;

short primitiveShort = 1;
Short shortObject = primitiveShort;
short shortValue = shortObject;

int primitiveInt = 1;
Integer intObject = primitiveInt;
int intValue = intObject;

long primitiveLong = 1L;
Long longObject = primitiveLong;
long longValue = longObject;

float primitiveFloat = 1.0f;
Float floatObject = primitiveFloat;
float floatValue = floatObject;

double primitiveDouble = 1.0d;
Double doubleObject = primitiveDouble;
double doubleValue = doubleObject;

char primitiveChar = 'a';
Character charObject = primitiveChar;
char charValue = charObject;

boolean primitiveBoolean = true;
Boolean booleanObject = primitiveBoolean;
boolean booleanValue = booleanObject;
```

## Sınırlandırılmış Türler (bounded types)

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

## Jenerik Metotlar

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