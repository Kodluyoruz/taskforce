# Konu Metni

## Hash Function

Hash function, bir hash table'da anahtarları indekslere dönüştüren fonksiyondur. 

Hash table yapısında şu 3 özelliğin olması beklenir:

1. Hash function **aynı girdiye** her zaman **aynı indeksi** vermelidir.

   Örneğin, "patika" girdisine 5 indeksi veriyorsa her "patika" anahtarı girildiğinde 5 indeksini vermelidir.

2. Hash function **farklı girdilere** **farklı indeks** vermelidir.

   Örneğin, "patika" girdisine 5 indeksi veriyorsa başka herhangi bir girdiye 5 indeksi vermemelidir.

3. Hash function'ın verdiği indeksler, hash table'ın değerlerinin tutulduğu **array'in sınırları içinde** olmalıdır.

   Array'in kapasitesi 10 ise, hash function en az 0 çıktısı, en fazla da 9 çıktısı vermelidir.



# Sorular

1. Kullanılabilecek bir hash function örneği veriniz.

2. Bir hash table'ın anahtarlarının veri tipi array olabilir mi?

   Cevap: Evet, olabilir. Hash function olarak da array'in içindeki değerleri toplayan bir fonksiyon seçilebilir.

3. Bir hash function, iki anahtar için aynı indeks değerini üretebilir. Bu duruma nasıl bir çözüm bulunabilir?



# Ücretsiz Kaynak

* [Hash function vikipedi](https://tr.wikipedia.org/wiki/Hash_fonksiyonu) linkine giderek hash function hakkında bilgi edinebilirsiniz.
