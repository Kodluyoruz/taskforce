# Java 102

## [Erişim Belirleyiciler](access-modifier/)

1. Main metodu için hangi erişim belirleyici kullanılmalıdır ?
    - public (Doğru)
    - private
    - protected
    - Varsayılan

2. Hangi erişim belirleyicisi, aynı paket (package) içerisinde erişilmesine izin verir ?
    - protected (doğru)
    - private
    - public
    - varsayılan

3. Aşağıdaki bilgilerden hangisi yanlıştır ?
    - Public ile tanımlanmış öğelere, program içindeki her yerden erişim vardır.
    - Private ile tanımlanmış öğelere, ait oldukları sınıf üzerinden erişim vardır.
    - Private ile tanımlanmış öğelere, ait olduğu paket içerisinde erişim vardır. (Doğru)
    - Protected ile tanımlanmış öğelere, ait olduğu paket içerisinden erişim vardır.

## [Static Anahtar Sözcüğü](static/)

1. Aşağıdakilerden hangisi statik olarak tanımlanamaz ?
    - nesneler (Doğru)
    - sınıflar
    - değişkenler
    - metotlar

2. Aşağıdaki ifadelerden hangisi yanlıştır?
    - statik metotlar yalnızca diğer statik metotlar tarafından çağrılır.
    - statik metotlar yalnızca statik değişkenlere erişebilir.
    - statik metotlar this anahtar sözcüğünü kullanamaz.
    - Sınıftan nesne üretildiğinde, sınıfa ait statik değişkenler nesneler için tekrar oluşturulur. (Doğru)

3. Aşağıdaki metotlardan hangisi static olmalıdır ?
    - main() (Doğru)
    - delete()
    - run()
    - finalize()

## [Final Anahtar Sözcüğü ve Sabit Tanımlama](final/)

1. Bir değişkenin içeriğinin değiştirilmesini önlemek için aşağıdaki anahtar sözcüklerden hangisi kullanılır?
    - final (Doğru)
    - last
    - constant
    - static

2. Aşağıdaki ifadelerden hangisi yanlıştır?
    - Metotlarda final olarak tanımlanabilir. (Doğru)
    - Final ile tanımlanan değişkenler değiştirilemezler.
    - Final ile tanımlanan değişkenlere nesneler üzerinden ulaşılır.
    - Sabit tanımlamak için final anahtar sözcüğü kullanılır.

## [Encapsulation (Kapsülleme)](encapsulation/)

1. Aşağıdakilerden hangisi Encapsulation (Kapsülleme) ilkesini en iyi şekilde tanımlar ?
    - Çeşitli nitelikleri tek bir birimde birleştirmenin bir yoludur.
    - Çeşitli metot parametrelerini tek bir birimde birleştirmenin bir yoludur.
    - Sınıflara ait metotların farklı parametreler ile yazılmasını sağlar.
    - Sınıfa ait niteliklerin anlamsızlaşmasını engelleyen bir yoldur. (Doğru)

2. Sınıfa ait değişken private (özel) olarak tanımlanış ise, niteliklere sınıf nesnesinden erişmek için ne yapabiliriz?
    - Sınıf içerisine, ilgili sınıf değişkenini geri döndüren public (herkese açık) bir metot ekleriz. (Doğru)
    - Sınıf içerisine, ilgili sınıf değişkenini geri döndüren prive (özel) bir metot ekleriz.
    - Private tanımlanmış değişkene hiç bir şekilde ulaşamayız.
    - Sınıf içerisine, ilgili sınıf değişkenini ekrana yazdıran bir metot ekleriz.

3. Kapsülleme kullanılarak hangi özellik uygulanabilir?
    - Inheritance
    - Abstraction (Doğru)
    - Polymorphism
    - Overloading

## [Sınıflar Arası İlişkiler](sinif-iliskiler/)

1. Kalıtım hangi sınıflar arası ilişki türü modellenir?
    - "is a" ilişkisi. (Doğru)
    - "has a" ilişkisi.
    - "uses a" ilişkisi.
    - Hiçbiri
2. Bağımlılık (Dependency) ilişkisini hangisi ifade eder ?
    - "is a" ilişkisi.
    - "has a" ilişkisi.
    - "uses a" ilişkisi.  (Doğru)
    - Hiçbiri

## [Kalıtım (Inheritance) İlkesi](inheritance/)

1. Bir sınıftan kalıtım yapmak için hangi anahtar kelime kullanılmalıdır?
    - super
    - this
    - include
    - extends (Doğru)

2. Aşağıdakilerden hangisi B sınıfını A sınıfından kalıtım yapmanın doğru yoludur?
    - class B + class A {}
    - class B inherits class A {}
    - class B extends A {} (Doğru)
    - class B extends class A {}

3. Aşağıdakilerden hangisi Kalıtım konusunu en iyi tanımlar?
    - Önceden yazılmış kodun kopyalanmasıdır.
    - Daha önce yazılmış bir kod parçasını tekrar kullanmaktır.
    - Programlama dilinde önceden tanımlanmış fonksiyonları kullanmaktır.
    - Verileri ve fonksiyonları türetilmiş sınıflarda kullanmaktır. (Doğru)

## [Kalıtım'da Constructor Zinciri ve Super Anahtar Sözcüğü](inheritance-super/)

1. Alt sınıflardan üst sınıflardaki kurucu metotlara erişmek için hangi anahtar sözcük kullanılır ?
    - super (Doğru)
    - this
    - extends
    - Hiçbiri

## [Method Overriding (Metod Ezme)](method-overriding)

1. Üst sınıfındaki bir metot ile aynı isime ve parametrelere sahip olan alt sınıf metotlarına ne denir ?
    - Metotlarda Aşırı Yüklenme (Method Overloading)
    - Metotlarda Geçersiz Kılma (Method Overriding) (Doğru)
    - Metotlarda Gizleme (Method Hiding)
    - Hiçbiri
