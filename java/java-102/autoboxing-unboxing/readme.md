# Kutulama (Autoboxing) ve Kutudan Çıkarma (Unboxing)

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

