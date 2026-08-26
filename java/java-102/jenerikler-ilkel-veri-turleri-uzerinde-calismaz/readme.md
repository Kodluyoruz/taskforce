# Jenerikler İlkel Veri Türleri Üzerinde Çalışmaz

Jenerik sınıflara veya metotlara ilkel veri türlerini parametre olarak veremezsiniz:

```java
Nullable<int> nullable = new Nullable<int>(2020);
// Yukarıdaki satır hataya neden olur
```

Yukarıdaki örnek hataya sebep olur; çünkü tüm jenerik tipler runtime'da "Object" olarak dönüştürülür. Bunun sebebi ise Object' in tüm objelerin superclass'ı olması ve kullanıcı tarafından tanımlanan herhangi bir nesneyi temsil edebiliyor olmasıdır. Tüm ilker veri tipleri ise Object' ten miras almadığı için jenerik olarak kullanılamazlar. Örnekle açıklamak gerekirse:

```java
public class Container<T> {

    private T data;

    public T getData() {
        return data;
    }
}
```
Jenerik container sınıfı runtime'da şöyle gözükecektir :

```java
public class Container {

    private Object data;

    public Object getData() {
        return data;
    }
}
```
Bu sınıftan **Integer** tipinde bir obje yaratırsak :

```java
Container<Integer> val = new Container<Integer>(); 
Integer data = val.getData(); 
```

Compiler tarafından otomatik olarak tip dönüşümü yapılır :

```java
Container val = new Container(); 
Integer data = (Integer) val.getData();  
```

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

## Kaynaklar

- [quora.com](https://www.quora.com/Why-is-it-impossible-to-use-primitive-types-as-a-type-parameter-in-Java/answer/Piyush-Sagar-2)