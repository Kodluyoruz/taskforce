# Test Kavramı ve Çeşitleri

Geliştirdiğimiz uygulama/yazılımlar sürekli bir değişim ve gelişim içindedirler. Yeni bir özellik eklenmesi, mevcut özelliklerin bir kısmının değiştirilmesi, kullandığımız altyapıların güncellenmesi vb gibi birçok nedenle uygulamalarımızda güncelleme yapmamız kaçınılmaz bir durumdur. Bu kadar çok değişenin olduğu bir ortamda uygulamamızın beklenen şekilde çalıştığını sürekli doğrulamamız gerekir. Bu doğrulama işlemlerinin her defasında manuel yada insan etkileşimi ile yapılması, büyük bir zaman ve maliyet kaybına sebep olur. Aynı zamanda manuel olarak yapılan testlerde bazı özellikler yeterince test edilmemiş yada yapılan değişikliklerin sebep olduğu beklenmeyen davranışlar gözden kaçırılabilir. Bunlar gibi birçok nedenden dolayı, geliştirdiğimiz uygulamaların davranışlarını ve yapılan değişiklikleri doğrulayan otomatize testler yazmamız çok önemlidir. Bu sayede bir kez yazılan otomatize bir test, istenilen bir zamanda istenen tekrar kadar çalıştırılarak uygulamanın istenen şekilde davrandığını kontrol edecek ve büyük bir zaman ve maliyet kaybı sağlayacaktır.

Otomatize testler çoğunlukla yazılım geliştirme aşamasında yazılırlar. Bu testlerin yazılması başlangıçta yazılım süresini zaman ve maliyet açısından arttıran bir unsur olarak görünüp çok sıcak bakılmayabilir. Fakat uzun vadede düşünüldüğünde otomatize testlerin yazılmış olması sürekli değişen uygulamalar için çok büyük bir zaman ve maliyet kazancı sağlar. Testlerin yazılmış olması aynı zamanda, hem daha az hata ile bir işi tamamlamamıza hem de birçok temel yazılım prensibine sadık kalarak kaliteli kod yazmamızı sağlar.

Otomatize testler, test ettikleri unsurlar açısından temel olarak 3 kategoriye ayrılırlar.

* **1 - Unit (Birim) Testleri**

Unit yani birim testler uygulamamız içerisindeki en küçük kod parçalarının doğru çalıştığını test eder. Buradaki test edilen birimleri sınıflar ve methodlar gibi düşünebiliriz. Test edilen unsur kod blokları olduğu için unit testler **developer tarafından, developer bakış açısı** ile yazılır. Unit testleri yazarak yazdığımız kodun beklediğimiz gibi çalıştığını doğrulamış oluruz.

Unit testin amacı yalnızca test edilecek birim kodunun yaptığı işi doğrulamaktır. Bu nedenle eğer ki test edilecek birimin bağımlılıkları varsa bu bağımlılıklardan izole hale getirilmelidir. Bağımlılıklar izole edilmez ise test ettiğimiz birim ile birlikte aslında bağımlı olunan nesneler de bir nevi test edilmiş olur. Bu durumda bağımlı olunan nesnelerde yapılan bir değişiklik nedeniyle test edilen birime ait unit testler başarısız olabilir. Bu nedenle unit testlerde birimler bağımlılıklarından izole edilerek test edilmeli, bağımlı olduğu nesnelerde yapılan değişikler test sonuçlarını asla etkilememelidir. Aynı şekilde veritabanı işlemi, dış api çağrımı, dosyaya yazma/okuma gibi işlemleri bağımlılıklar unit test içerisinde izole edilmelidir. Bu tarz işlemler de testlerin doğruluğunu olumsuz etkileyebilir ve aslında ilgili birim doğru çalışmasına rağmen yanlış sonuçlar doğurabilir. **Unit testler şartlar ve bulunduğu ortamdan bağımsız olmalı ve ilgili birim değişmedikçe her zaman aynı sonucu üretmelidir.**

Örneğin, bir sınıf içerisindeki bir method içerisinde bazı kurallara göre bir doğrulama işlemi yapıp, doğrulama sonucunu bir veritabanı yada dosyaya yazdığımızı düşünelim. Bu method için yazılacak olan unit testler yalnızca doğrulama işlemi sırasında yapılan kontrollerin doğruluğunu kontrol etmelidir. Veritabanı yada dosyaya yazma işlemini yapan bağımlılık izole edilmeli ve testi etkilememelidir.

Unit testleri yazarken, her bir testin yalnızca tek bir koşulu kontrol ettiğine dikkat etmek gerekir. Bir method içerisinde 4 farklı durumda farklı çıktı üretiliyor yada işlem yapılıyorsa bu 4 durumu test eden 4 ayrı test olması gerekir. Böylece 4 testten herhangi biri başarısız olduğunda hangi durumda kod içerisinde hata olduğunu daha kolay anlayabiliriz. Bir test içerisinde 4 durum da test edilmeye çalışılırsa, başarısız olan durumun hangisi olduğunu anlamak ve hatanın kaynağını bulmak için ayrıca zaman harcamak gerekecektir.

Unit testler, yalnızca küçük birimleri test ettiklerinden ve test edilen birimler diğer tüm bileşenlerden izole olduklarından çok hızlı çalışırlar. 

Unit testleri yazmak ve çalıştırmak için unit test frameworkleri/araçları kullanılır. .Net için en çok tercih edilenler xUnit, NUnit ve .Net'in kendi test araçlarını barındıran MSTest frameworküdür. .NET 5 ile birlikte bu 3 frameworkü kullanarak oluşturabileceğimiz unit test proje şablonları hazır olarak gelmektedir.

![Test Project Templates](images/testtemplates.png)

Unit testleri yazarken bağımlılıkları izole etme işlemini, bağımlı olunan nesneyi taklit ederek yaparız. Böylece test ettiğimiz birim bağımlı olduğu nesnenin taklidi ile iletişime geçer ve kendi işlemini yapabilir. Örneğin, veritabanına bir kayıt atma işlemi yapılan bağımlı nesnenin taklidini oluşturduğumuzda veritabanına kayıt at**mış gibi** yaparak, unit test içerisinde test edilen asıl birimi izole etmiş oluruz. Taklit etme işlemini iki farklı şekilde yapabiliriz. İlk yöntem, bağımlı olunan nesnenin test amaçlı olarak taklidinin oluşturulmasıdır. Bu yöntemde taklit nesne için de kod yazmamız ve düzenlememiz gerekir. Basit bağımlılıklar ve taklitler için bu yöntem tercih edilebilir. Bir diğer yöntem ise daha kolay ve esnek taklit nesneler yaratabilmemizi sağlayan **mocking framework** kullanmaktır. Bu yöntemde framework aracılığı ile bağımlı olunan nesnenin taklidinin nasıl davranması gerektiğini belirterek istediğimiz şekilde taklit bir nesne yaratıp kullanabiliriz. .Net içerisinde en sık kullanılan mocking framework Moq'dur. Moq haricinde NSubstitute, FakeItEasy gibi alternatifler de mevcuttur. 

//TODO : Interface - Mocking önemi

//TODO : AAA patterni ve naming

//TODO : Unit Test - TDD temel bileşenidir

* **2 - Integration (Uyuşma) Testleri**

//TODO : Başlıklar
- Parçaların birlikte çalıştığının doğruluğu (iç birimler + dış birimler (veritabanı, file, dış api vs)), izolasyon yok
- Temelde teknik bakış açısı ile yazılır, ürün sahibi bakışı da gerekebilir
- Hız : yavaş
- Unit teste göre daha komleks
- Genelde Unit test için kullanılan araç/frameworkler burda da kullanılır.

* **3 - Functional (Fonksiyonel) Testler**

//TODO : Başlıklar
- Uygulama özelliklerinin doğruluğu, izolasyon yok
- Müşteri bakış açısı ile yazılır
- Hız : yavaş
- Uygulama içindeki parçaların neler olduğunu ve nasıl çalıştıklarını bilmez (girdiye doğru beklenen çıktı üretiliyor mu ?)
- UI var ise UI testi (buton click, form submit, hata mesajları, ekran geçişleri vs.), API'ler için api response doğruluğu
- UI var ise araçlar farklılaşabilir
