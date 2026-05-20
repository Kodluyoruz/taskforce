# Özel Hata Ayıklama (Exception) Oluşturma

&quot;Exception&quot; ATA sınıftan türeterek kendimize ait hata tipleri oluşturabiliriz.

````java
public class Stu {
    private int id;
    private String name;

    public Stu(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public static Stu find(int id) throws StuException {
        if (id == 123) {
            return new Stu(123, "Mustafa Çetindağ");
        } else {
            throw new StuException("Öğrenci Bulunamadı");
        }
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
````

```java

public class StuException extends Exception {
    public StuException(String msg) {
        super(msg);
    }
}

```

```java
public class Main {
    public static void main(String[] args) {

        Stu s = null;
        try {
            s = Stu.find(22);
            System.out.println("ID : " + s.getId());
            System.out.println("Name : " + s.getName());
        } catch (StuException e) {
            System.out.println(e.getMessage());
        }

    }
}
```

## Hatayı Metot Tanımında Belirtmek

Bir metot yazarken hata fırlatabilecek bir metot çağırıyorsak, ya metodun içerisinde **try-catch** bloğuyla bu hatayı yakalamalı ya da hata yakalamayı bir üst metoda bırakmalıyız. Fakat bu durumda, çağıran metodun bu hatadan haberdar olabilmesi için metodun hata fırlatabileceğini metodun tanımında belirtmeliyiz. Bunu **throws** deyimiyle yaparız. Örneğe bakalım:

```java
public class Person
{
	private int age;

    public void setAge(int age) throws IllegalArgumentException
	{
	
        if (age < 0)
		{
			throw new IllegalArgumentException("Yaş sıfırdan küçük olamaz!");
		}

        this.age = age;
	}
}
```

Gördüğünüz gibi, setAge() metodunun hata fırlatabilecek bir metot olduğunu throws deyimiyle metot tanımında belirttik. Artık bu metodu çağıran metotlar da bu hatayı yakalamak veya bir üst metoda bırakmak zorundadır.

## Java’daki Bazı Hata Sınıfları

Java’da bazı ortak hatalar için önceden tanımlanmış hata sınıfları vardır. Bunlardan en çok karşılaşılanları kısaca inceleyelim:

- **ArithmeticException**: Sıfıra bölme başta olmak üzere matematiksel hataları belirtir.
- **ArrayIndexOutOfBoundsException**: Bir dizinin aralığı dışında elemanına erişmeye çalışıldığında fırlatılır.
- **ClassCastException:** Geçersiz tür dönüşümü işlemlerinde fırlatılır.
- **IllegalArgumentException:** Metoda verilen parametrelerden biri hatalı olduğunda fırlatılır.
- **IndexOutOfBoundsException**: Hatalı indeks erişimlerinde fırlatılır.
- **NullPointerException**: Henüz değer ataması yapılmamış değişkenler üzerinde işlem yapmaya çalışıldığında fırlatılır. Java’da en çok karşılaşılan hatalardan
  biridir. Bu hataya karşı önlem almak için yaptığımız kontrollere **null kontrolü** (**null-check**) denir.
- **NumberFormatException**: Bir String değerini sayısal bir türe dönüştürmeye çalıştığımızda, eğer String değer düzgün bir sayı ifade etmiyorsa fırlatılır.
- **UnsupportedOperationException**: Desteklenmeyen bir iş yapmaya çalışıldığında fırlatılır.
