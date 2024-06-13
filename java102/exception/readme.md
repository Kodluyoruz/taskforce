# Hata Yönetimi (Exception Handling)

## İstisna Durum Nedir? (Exception)

**İstisna** durum, İngilizce **exception** diye ifade edilir. Programın normal akışını beklenmeyen şekilde hatalı şekilde kesen durumlara karşılık gelir. Örneğin bir dosya okuması yaparken dosyanın harddiskte olmaması hatası, veritabanına bağlanırken bağlantı hatası, bir web servisi çağırırken bağlantı hatası veya null bir nesneye erişim hatası gibi bir çok hatalı durum meydana gelebilir. Java normal akışı kesen bu hatalı durumları yönetebilmek için yazılım geliştiricilere çeşitli imkanlar sunmuştur. Bu özelliği sayesinde Java programları tutarlı ve güvenli bir şekilde çalışabiliyor.

Java dilinde hatalara **istisna** (exception) denir. İstisna, adından da anlaşılacağı üzere, programın çalışması sırasında meydana gelen **istisnai** (**anormal**) durumları belirtir. Diğer bir deyişle, **çalışma zamanında** meydana gelen hatalara istisna denir.

Program yazarken belli kurallar yazmış oluruz. Java çalışma ortamı, programımızı bu kurallara göre çalıştırır. Hata ise istisnai (yani kural dışı) bir durumdur. Böyle bir durumda Java çalışma ortamı ne yapacağını bilemez, çareyi programı sonlandırmakta bulur. Kısacası, bir hata oluştuğu zaman programın çalışması sona erer. Bunun önüne geçebilmek için, kodun yazılış aşamasında hata yönetiminin iyi yapılması gerekir.

![Figure 1](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/java102/exception/figures/exceptions-callstack.png)

Hata yönetiminden kastımız, hatanın meydana gelmesini engellemek değildir. Hata yönetimi, en basit ifadesiyle, çalışma sırasında bir hata meydana gelse bile programın çalışmasına devam etmesini sağlamaktır. Java’da bu mümkündür. Java’nın hata yönetim mekanizması sayesinde, program normal akışında çalışır; eğer bir hata olursa, yazdığımız koda uygun olarak bir aksiyon alınır (kullanıcıya hata bilgilendirmesi yapılır, hata kayıt altına alınır vs.) ve sonra program çalışmasına devam eder.

Java’nın hata yönetim mekanizması şu şekilde işler: Programın çalışması sırasında istisnai bir durum oluşursa bu durumla ilgili bir nesne oluşturulur ve **throws** deyimiyle fırlatılır. Böyle bir durumda, programın olağan akışı durdurulur ve bu hatanın yakalanması beklenir. Hatanın yakalanabilmesi için, hataya sebep olan kodun **try-catch** bloğu içine yazılması gerekir. Bu durumda Java çalışma ortamı, meydana gelen hatayı yakalayabilecek bir catch bloğu arar, eğer bulursa bu **catch** bloğu çalıştırılır. Son olarak, eğer bir **finally** bloğu yazılmışsa bu blok çalıştırılır ve program normal akışına devam eder.

Java hataları yayılımcı hatalardır. Bunun anlamı şudur: hatanın meydana geldiği metot içinde yakalanması gerekir, aksi halde hata bir üst metoda (çağıran metoda) aktarılır. Hata yakalanmadığı sürece bir üst metoda aktarılmaya devam eder. Eğer yazdığımız kodun hiçbir yerinde hatayı yakalamadıysak, hata Java çalışma ortamına aktarılır. Java çalışma ortamı bize varsayılan bir hata yakalama mekanizması sunar. Bu mekanizma hata meydana geldiğinde programı sonlandırır. Bir hata oluştuğunda iki farklı durumla ele alınabilir.

- Hatanın oluştuğu noktada önlem alıp hata kontrol altına alındıktan sonra programın kaldığı noktadan çalışmasına devam etmesini sağlamak bir seçenektir. Örneğin okumaya çalıştığınız klasörde olmayan bir dosyayı yaratıp programın kaldığı noktadan çalışması sağlanabilir.
- Hata oluştuğunda bu hata üste doğru fırlatılabilir. Bu fırlatılan hatayı dinleyen istemci (client) tarafı hatayı uygun bir mesajla kullanıcıya gösterebilir. Örneğin sorgulamaya çalıştığını TC numarası eksik veya hatalı gibi bir bildirimle kullanıcı önyüzde bilgilendirilebilir.

İki tip hata çeşidimiz vardır.

- **Unchecked Exceptions** : Programın derlenmesi sırasında bilinemeyen ancak program çalıştığı esnada ortaya çıkan hata tiplerdir. Çalışma zamanında ortaya çıktıklarından yeniden oluşturulmaları ve tespit edilmeleri daha zordur.
- **Checked Exceptions** : Derleme aşamasında tespit edilen hatalardır.Bu hataların alınabileceği önceden bilinir. Örneğin dosyayı açma işlemi Java&#39;da hata oluşturabilecek bir işlemdir. Bu fonksiyonun hata fırlatabileceği önceden belirtildiği için kodu yazarken Java geliştirme platformu ona göre önlem almamızı ister.

## Exception Hiyerarşisi

Java&#39;da Exception&#39;larda birer sınıftır. Bu sınıfların hepsi &quot;Throwable&quot; sınıfından türemişlerdir.

![](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/java102/exception/figures/exceptions-errorOccurs.gif)

**Throwable** : Exception hiyerarşinin en üstündeki sınıftır. Tüm Exception sınıfları ondan kalıtım alır.

**Error** : Programdaki ciddi hatalı temsil eder. JVM tarafından iletilen uygulama dışında oluşan hatalardır. Bu tip hatalar da &quot;Unchecked Exceptions&quot; tipindedir. Örneğin veritabanı sunucusuna bağlanmaya çalışınca bağlantı hatası verirse bunu ancak çalışma zamanında anlayabiliriz.

**Exception** : Kullanıcı tanımlı Exception sınıfları dahil olmak üzere tüm Exception alt sınıflarının ATA sınıfıdır. &quot;RuntimeException&quot; dışındaki tüm Exception hataları &quot;Checked Exceptions&quot; tipindedir. Bu hata tipleri daha derleme aşamasında belirtilir. Bu hatalara göz önününde bulundurarak bir kod yazmamızı bizden bekler.

**RuntimeException** : Geçersiz ya da hatalı bir işlem sonucunda uygulamada oluşan hatalardır. Bunlar da JVM tarafından fırlatılır. &quot;Unchecked Exceptions&quot; kategorisine girer. Çünkü, ancak çalışma zamanında ortaya çıkarlar. Derleme aşamasında bu hataları yakalama şansımız yoktur. Örneğin null bir nesne üzerinden bir fonksiyon çağırmak veya sayı formatına uygun olmayan bir veriyi sayıya çevirmeye çalışmak gibi hataları örnek verebiliriz.

## Kaynak:

* [Figure 1](https://docs.oracle.com/javase/tutorial/essential/exceptions/definition.html)
