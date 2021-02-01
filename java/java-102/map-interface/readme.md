# Map interface (Arayüzü)

 

“java.util” paketi altında tanımlıdır. Map interface’den türeyen birden çok alt sınıf vardır. Map ile anahtar-değer (key-value) şeklinde veri formatına sahip verileri saklayabiliriz. Düz liste veri kümesinden farklıdır. Anahtarlar tekrar etmeyecek şekilde olmalıdır. Yani bir anahtara karşılık gelen yalnızca bir tane nesne olmalıdır.

 

## HashMap Sınıfı

 

Map interface’den kalıtım almıştır. Anahtar-değer şeklindeki verilerin saklanmasını sağlar. HashMap, anahtar (key) değerlerini hashcode’larına göre tutar. Bu nedenle anahtar olarak verdiğimiz nesnelerin “equals” ve “hashCode” fonksiyonlarını doldurmak gerekecektir. 

 Aynı anahtara sahip iki elemanın eklenmesine izin vermez. İlgili anahtarda bir değer varsa üzerine yazar.

 

```java
Map<Student, List<Lesson>> studentLessonMap = new HashMap<Student, List<Lesson>>();
               studentLessonMap.put(
                               new Student("100", "Ahmet", "Mehmet"), 
                               Arrays.asList(
                                              new Lesson("Matematik", 90),
                                              new Lesson("Türkçe", 70) ));
               
               studentLessonMap.put(
                               new Student("101", "Ali", "Veli"), 
                               Arrays.asList(
                                              new Lesson("Matematik", 90),
                                              new Lesson("Türkçe", 70) ));
               
               studentLessonMap.put(
                               new Student("105", "Hale", "Jale"), 
                               Arrays.asList(
                                              new Lesson("Matematik", 80),
                                              new Lesson("Türkçe", 60) ));
               
               studentLessonMap.put(
                               new Student("90", "Ahmet", "Mehmet"), 
                               Arrays.asList(
                                              new Lesson("Matematik", 100),
                                              new Lesson("Türkçe", 60) ));
```
