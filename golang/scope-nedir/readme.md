# Scope Nedir?

Go dilinde, değişkenler bulundukları scope (kapsam) içinde oluşturulur ve kapsam sonunda öldürülür.
Kısaca, süslü parantezler içinde kalan gövde olarak tanımlayabiliriz kapsamı. Her yeni süslü parantez yeni bir kapsam doğurur.
Farklı kapsamlarda, aynı isimde yeni bir değişken oluşturulabilir, hatta aynı isimde fakat türü farklı olabilir.
Bir değişken, kapsam dışında kaldığında tanımsızdır.
Alt kapsamlar, kendisinden daha üst kapsamda yer alan değişkenlere erişebilir. Ancak tersi mümkün değildir.

