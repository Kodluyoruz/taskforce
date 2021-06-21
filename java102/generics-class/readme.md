## Jenerik Sınıf Yazmak

Jenerikler class, interface ve metodlarda kullanılabildiğini ve jeneriklerin parametrelendirilmiş tür olduğunu söylemiştik. Jenerik bir sınıf yazarken sınıf
adından sonra küçüktür ve büyüktür işaretleri arasında bir tür parametresi belirtilir. Bu parametreyi Java’nın değişken isimlendirme kurallarına uygun olarak
adlandırabilirsiniz. Bunlar :

**E**: Element (Genellikle Java Collection Frameworkte kullanılır.)

**K**: Key

**N**: Number

**T**:Type

**V**: Value

olarak sıralanabilir. Yine de geleneksel olarak tek ve büyük bir harf verilir. Bu harf herhangi bir veri tipini(String, Integer, Obje vb. ) kullanabileceğimiz
anlamına gelir. Şimdi **_Nullable_** sınıfını jenerikleri kullanarak tekrar yazalım:

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

Gördüğünüz gibi, sınıfımızı jenerik bir hale getirdik. T adında bir tür parametresi aldık ve gerekli yerleri bu türe göre yeniden düzenledik. Öncelikle, artık
sınıfımızın içinde tuttuğumuz veri T türünde olacaktır. Aynı şekilde, **_getValue()_** metodunu da T türünde bir değer döndürecek şekilde düzenledik.

Nasıl ki bir metodu çağırırken metodun parametrelerini vermek zorundaysak, jenerik sınıfları kullanırken de parametre olarak bir tür vermek zorundayız. Kısacası
farklı veri türleri için tekrar tekrar sınıflar yazmak yerine, farklı veri türleri için yeni bir obje oluşturup parametre olarak bu veri türünü yazmak
yeterlidir. Şimdi bu sınıfı kullanalım:

```java
Nullable<String> nullableString = new Nullable<String>("abc");

if (!nullableString.isNull())
{
	String value = nullableString.getValue();
}
```

Bu örnekte **_Nullable_** sınıfının bir örneğini aldık, fakat bu örneği **_String_** türü için oluşturduk. Artık **_nullableString_** nesnesindeki metotları
yalnızca **_String_** türü için kullanabiliriz. Başka bir tür için kullanmaya çalıştığımızda kodumuz derlenmeyecektir:

```java
Nullable<String> nullableString = new Nullable<String>("abc");

if (!nullableString.isNull())
{
	int value = nullableString.getValue(); // Bu satır hata fırlatır
}
```

Örneğin yukarıdaki kod hataya sebep olur; çünkü **_nullableString_** nesnesinin **_getValue()_** metodu **_String_** döndürür. Fakat biz bu metodun sonucunu int
türünde bir değişkene aktarmaya çalışıyoruz. Bu hata compile-time' da oluşturulur ve runtime' da hata oluşmasının önüne geçilir. Bu jeneriklerin diğer bir
avantajıdır.

Şimdi başka bir örneğe bakalım:

```java
Nullable<Date> nullableDate = new Nullable<Date>(new Date());

if (!nullableDate.isNull())
{
	Date value = nullableDate.getValue();
}
```

Yukarıdaki örnekte **_Nullable_** sınıfını **_Date_** türü için oluşturduk, dolayısıyla **_getValue()_** metodu **_Date_** türünde bir değer döndürmektedir.
Aynı işlemleri diğer veri tipleri için de yapabiliriz.

Gördüğünüz gibi, jenerikler sayesinde **tür güvenliğini** (**type-safety**) sağlamış olduk.

Jenerik sınıflar birden fazla tip parametresi alabilir. Örneğin :

```java
public class MultipleTypeParameters<V1,V2,V3> {
    
   private V1 value1;
   private V2 value2;
   private V3 value3;

    public MultipleTypeParameters(V1 value1, V2 value2, V3 value3) {
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
    }

    public V1 getValue1() {
        return value1;
    }

    public void setValue1(V1 value1) {
        this.value1 = value1;
    }

    public V2 getValue2() {
        return value2;
    }

    public void setValue2(V2 value2) {
        this.value2 = value2;
    }

    public V3 getValue3() {
        return value3;
    }

    public void setValue3(V3 value3) {
        this.value3 = value3;
    }
   
   public void showInfos(){
   
       System.out.println("Veri Tipleri : " + value1.getClass().getName()+ "," + value2.getClass().getName()+"," + value3.getClass().getName()  );
   
   }
     
}



```

Bu örnekte 3 adet tip parametresi alabilen bir sınıf yarattık. Bu sınıf içerisine ise bu tip parametrelerini ekrana bastıran bir metod yazdık.

```java
public class Main {
    
    public static void main(String[] args) {
        
        MultipleTypeParameters<String,String,Integer> m1 = new MultipleTypeParameters<>("Oracle","Java",25);
        
        MultipleTypeParameters<String,String,String> m2 = new MultipleTypeParameters<>("Oracle","Java","Kodluyoruz");
        
        m1.showInfos();
        m2.showInfos();
    }
}

```

Örnekte görüleceği üzere bu sınıftan yarattığımız ilk objede 2  **String** ve 1 **Integer** tipinde değişken kullandık. İkinci objede ise 3 **String** değişkeni
ayrıca bir sınıf yaratmaya ihtiyaç duymadan kullanabildik.

Ayrıca Java' da jenerik hata sınıfları oluşturulamaz, derleyici hatasına sebep olur.

```java
public class GenericException<T> extends Exception {} 
```

### KAYNAK

[javatpoint.com](https://www.javatpoint.com/generics-in-java)
