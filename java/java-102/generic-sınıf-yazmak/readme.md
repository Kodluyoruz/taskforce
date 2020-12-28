# Generic Sınıf Yazmak

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

| ilkel veri türü | sarmalayıcı sınıf   |
| --------------- | ------------------- |
| byte            | java.lang.Byte      |
| short           | java.lang.Short     |
| int             | java.lang.Integer   |
| long            | java.lang.Long      |
| float           | java.lang.Float     |
| double          | java.lang.Double    |
| char            | java.lang.Character |
| boolean         | java.lang.Boolean   |

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