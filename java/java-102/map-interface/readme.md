# Map interface (Arayüzü)

 

“java.util” paketi altında tanımlıdır. Bir array'de tutulan değerlere bu değerlerin tutulduğu index'ler aracılığıyla erişilir. Benzer bir şekilde map'te de anahtarlar(keys) aracılığıyla değerlere(values) erişilebilir. Map interface’den türeyen birden çok alt sınıf vardır. Map ile anahtar-değer (key-value) şeklinde veri formatına sahip verileri saklayabiliriz. Düz liste veri kümesinden farklıdır. Anahtarlar, tıpkı array'in indexleri gibi, tekrar etmeyecek şekilde olmalıdır. Yani bir anahtara karşılık gelen yalnızca bir tane nesne olmalıdır. Fakat farklı anahtarlarda(keys), yine array'de olduğu gibi, aynı değerler(values) tutulabilir.

 

## HashMap Sınıfı

 

Map interface’den kalıtım almıştır. Anahtar-değer şeklindeki verilerin saklanmasını sağlar. HashMap, anahtar (key) değerlerini hashcode’larına göre tutar. Bu nedenle anahtar olarak verdiğimiz nesnelerin “equals” ve “hashCode” fonksiyonlarını doldurmak gerekecektir.

Aynı anahtara sahip iki elemanın eklenmesine izin vermez. İlgili anahtarda bir değer varsa üzerine yazar. Map'lerde bir veriyi ekleyebilmek için put metodu, bir değere ulaşabilmek için get metodu, toplam veri sayısını öğrenebilmek içinse size metodu kullanılır.

```java
Map<Integer, String> exampleMap = new HashMap<>();
exampleMap.put(0, "Tolstoy");
exampleMap.put(1, "Dostoyevski");
exampleMap.put(2, "Puşkin");
exampleMap.put(3, "Gogol");

for(int i = 0; i < exampleMap.size(); i++) {
    System.out.println(exampleMap.get(i));
}
```
```java
Output:
   Tolstoy
   Dostoyevski
   Puşkin
   Gogol
```

Key-Value çiftine bir sınıftan oluşturulan nesne ve liste gibi şeyler de konulabilir.

 

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
