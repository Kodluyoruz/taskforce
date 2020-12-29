# Java&#39;da Nesne Kavramı (Object)

Sınıflar nesneleri tarif eden şablonlardı. Nesneler ise bu şablonlardan üretilen fiziksel yapılardır. Her üretilen nesne Heap Hafıza Bölgesi&#39;nde tutulur. Böylece sınıftan fiziksel karşılığı olan bir yapı elde etmiş oluruz. Sınıftan onlarca, yüzlerce nesne yaratabiliriz. Hepsi de hafıza başka adresleri gösterirler. Java&#39;da nesne üretmek için &quot;new&quot; anahtar kelimesini kullanırız.

````java
// DatabaseConnection sınıfından new anahtar kelimesi ile yeni bir nesne ürettik.
// Ürettiğimiz nesne hafıza bir adrese yerleşti. Artık kullanılabilir durumdadır.
DatabaseConnection dbConnection = new DatabaseConnection();


// Oluşturduğumuz nesne üzerinden "open" isimli fonksiyonu çağırıyoruz.
// Fonksiyon çağırmak için ismini yazıp () içine gerekli parametreleri göndermek gerekiyor.
// "open" fonksiyonu parametresiz olduğu için open() şeklinde bir çağrım yeterli olacaktır.
// Bu fonksiyonu çağırabilmemizin sebebi "public" olarak dışarıya açmamızdır.
dbConnection.open();


// Yine oluşturduğumuz nesne üzerinden "showDatabaseInfo" fonksiyonunu çağırıyoruz.
// Bu fonksiyon içine boolean tipinde bir parametre alıyor. Bu nedenle true veya false bir değer göndermemiz gerekiyor.
dbConnection.showDatabaseInfo(true);
````
