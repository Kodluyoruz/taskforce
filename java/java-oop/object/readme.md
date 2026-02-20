# Java'da Nesne Kavramı (Object)

Sınıflar nesneleri tarif eden şablonlardı. Nesneler ise bu şablonlardan üretilen fiziksel yapılardır. Her üretilen nesne Heap Hafıza Bölgesi'nde tutulur. Böylece sınıftan fiziksel karşılığı olan bir yapı elde etmiş oluruz. Sınıftan onlarca, yüzlerce nesne yaratabiliriz. Hepsi de hafıza başka adresleri gösterirler. Java'da nesne üretmek için "new" anahtar kelimesini kullanırız.

```java
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
```

Durum bilgisi (State) ve Davranış özellikleri barındıran yapılara nesne denilir. Nesne, yazılım dünyasında bir Sınıf&#39;tan oluşturulan (kendi ürettiğimiz veri tipi) ve hafızada saklanan yapıdır. Nesneler, nesneye ait özelliklerin (renk, uzunluk, fiyat gibi) ve davranışların (SMS göndermek, yazıyı formatlamak, ekrana yazdırmak gibi) bir araya toplanmasıyla oluşurlar. Bir de buna ek olarak özellikler içinde tuttukları bilgiyle (veriyle) bir durum bilgisine sahip olurlar. Örneğin: bir ilan nesnesi içinde başlık, açıklama metni, fiyat gibi alanlar o nesnenin özellikleridir. Bu özelliklerin her biri bir veriyi tutar. Örneğin: başlık=süper indirimli otomobil, açıklama=kaçmaz bu fırsat, fiyat=23400TL gibi veriler o nesnenin o anki durumunu (State) ifade eder. Nesnenin durumu fonksiyonlar vasıtasıyla değişebilir. Örnek ilan nesnesinin başlığı ve fiyatı güncellenirse yeni bir duruma geçmiş olur.
