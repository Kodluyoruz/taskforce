# Hata Yönetimi

## İstisna Durum Nedir? (Exception)

İstisna durum, İngilizce Exception diye ifade edilir. Programın normal akışını beklenmeyen şekilde hatalı şekilde kesen durumlara karşılık gelir. Örneğin bir dosya okuması yaparken dosyanın harddiskte olmaması hatası, veritabanına bağlanırken bağlantı hatası, bir web servisi çağırırken bağlantı hatası veya null bir nesneye erişim hatası gibi bir çok hatalı durum meydana gelebilir. Java normal akışı kesen bu hatalı durumları yönetebilmek için yazılım geliştiricilere çeşitli imkanlar sunmuştur. Bu özelliği sayesinde Java programları tutarlı ve güvenli bir şekilde çalışabiliyor.

Bir hata oluştuğunda iki farklı durumla ele alınabilir.

- Hatanın oluştuğu noktada önlem alıp hata kontrol altına alındıktan sonra programın kaldığı noktadan çalışmasına devam etmesini sağlamak bir seçenektir. Örneğin okumaya çalıştığınız klasörde olmayan bir dosyayı yaratıp programın kaldığı noktadan çalışması sağlanabilir.
- Hata oluştuğunda bu hata üste doğru fırlatılabilir. Bu fırlatılan hatayı dinleyen istemci (client) tarafı hatayı uygun bir mesajla kullanıcıya gösterebilir. Örneğin sorgulamaya çalıştığını TC numarası eksik veya hatalı gibi bir bildirimle kullanıcı önyüzde bilgilendirilebilir.

İki tip hata çeşidimiz vardır.

- **Unchecked Exceptions** : Programın derlenmesi sırasında bilinemeyen ancak program çalıştığı esnada ortaya çıkan hata tiplerdir. Çalışma zamanında ortaya çıktıklarından yeniden oluşturulmaları ve tespit edilmeleri daha zordur.
- **Checked Exceptions** : Derleme aşamasında tespit edilen hatalardır.Bu hataların alınabileceği önceden bilinir. Örneğin dosyayı açma işlemi Java&#39;da hata oluşturabilecek bir işlemdir. Bu fonksiyonun hata fırlatabileceği önceden belirtildiği için kodu yazarken Java geliştirme platformu ona göre önlem almamızı ister.

## Exception Hiyerarşisi

Java&#39;da Exception&#39;larda birer sınıftır. Bu sınıfların hepsi &quot;Throwable&quot; sınıfından türemişlerdir.

![](/Users/kodluyoruz/Projeler/kodluyoruz/taskforce/java/java-102/object-oriented-programming/RackMultipart20201127-4-1qsh3jh_html_f92932eaff3b082d.gif)

Throwable

![](/Users/kodluyoruz/Projeler/kodluyoruz/taskforce/java/java-102/object-oriented-programming/RackMultipart20201127-4-1qsh3jh_html_f92932eaff3b082d.gif) ![](/Users/kodluyoruz/Projeler/kodluyoruz/taskforce/java/java-102/object-oriented-programming/RackMultipart20201127-4-1qsh3jh_html_f92932eaff3b082d.gif) ![](/Users/kodluyoruz/Projeler/kodluyoruz/taskforce/java/java-102/object-oriented-programming/RackMultipart20201127-4-1qsh3jh_html_419101c110aea8bf.gif) ![](/Users/kodluyoruz/Projeler/kodluyoruz/taskforce/java/java-102/object-oriented-programming/RackMultipart20201127-4-1qsh3jh_html_4e4463403a3f3852.gif) ![](/Users/kodluyoruz/Projeler/kodluyoruz/taskforce/java/java-102/object-oriented-programming/RackMultipart20201127-4-1qsh3jh_html_5cdd69331ba1a8a5.gif) ![](/Users/kodluyoruz/Projeler/kodluyoruz/taskforce/java/java-102/object-oriented-programming/RackMultipart20201127-4-1qsh3jh_html_774dfcb6d5029be3.gif)

Error

RuntimeException

Exception

**Throwable** : Expetion hiyerarşinin en üstündeki sınıftır. Tüm Exception sınıfları ondan kalıtım alır.

**Error** : Programdaki ciddi hatalı temsil eder. JVM tarafından iletilen uygulama dışında oluşan hatalardır. Bu tip hatalar da &quot;Unchecked Exceptions&quot; tipindedir. Örneğin veritabanı sunucusuna bağlanmaya çalışınca bağlantı hatası verirse bunu ancak çalışma zamanında anlayabiliriz.

**Exception** : Kullanıcı tanımlı Exception sınıfları dahil olmak üzere tüm Exception alt sınıflarının ATA sınıfıdır. &quot;RuntimeException&quot; dışındaki tüm Exception hataları &quot;Checked Exceptions&quot; tipindedir. Bu hata tipleri daha derleme aşamasında belirtilir. Bu hatalara göz önününde bulundurarak bir kod yazmamızı bizden bekler.

**RuntimeException** : Geçersiz ya da hatalı bir işlem sonucunda uygulamada oluşan hatalardır. Bunlar da JVM tarafından fırlatılır. &quot;Unchecked Exceptions&quot; kategorisine girer. Çünkü, ancak çalışma zamanında ortaya çıkarlar. Derleme aşamasında bu hataları yakalama şansımız yoktur. Örneğin null bir nesne üzerinden bir fonksiyon çağırmak veya sayı formatına uygun olmayan bir veriyi sayıya çevirmeye çalışmak gibi hataları örnek verebiliriz.

