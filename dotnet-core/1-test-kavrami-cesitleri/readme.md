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

![Test Project Templates](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/dotnet-core/1-test-kavrami-cesitleri/images/testtemplates.png)

Unit testleri yazarken bağımlılıkları izole etme işlemini, bağımlı olunan nesneyi taklit ederek yaparız. Böylece test ettiğimiz birim bağımlı olduğu nesnenin taklidi ile iletişime geçer ve kendi işlemini yapabilir. Örneğin, veritabanına bir kayıt atma işlemi yapılan bağımlı nesnenin taklidini oluşturduğumuzda veritabanına kayıt at**mış gibi** yaparak, unit test içerisinde test edilen asıl birimi izole etmiş oluruz. Taklit etme işlemini iki farklı şekilde yapabiliriz. İlk yöntem, bağımlı olunan nesnenin test amaçlı olarak taklidinin oluşturulmasıdır. Bu yöntemde taklit nesne için de kod yazmamız ve düzenlememiz gerekir. Basit bağımlılıklar ve taklitler için bu yöntem tercih edilebilir. Bir diğer yöntem ise daha kolay ve esnek taklit nesneler yaratabilmemizi sağlayan **mocking framework** kullanmaktır. Bu yöntemde framework aracılığı ile bağımlı olunan nesnenin taklidinin nasıl davranması gerektiğini belirterek istediğimiz şekilde taklit bir nesne yaratıp kullanabiliriz. .Net içerisinde en sık kullanılan mocking framework Moq'dur. Moq haricinde NSubstitute, FakeItEasy gibi alternatifler de mevcuttur. 

İzole etme işlemi sırasında bağımlı olunan nesneleri taklit edebilmek için, gerçek davranışı sergileyen nesnelerin davranışlarını değiştirmemiz gerekir. Bunu yapabilmenin en kolay yolu, bağımlı olunan nesnelerin bir interface aracılığı ile alınmış olmasıdır. Bu sayede ilgili interface'i implemente eden taklit nesneleri testin ihtiyacına özel olarak oluşturmak ve farklı davranışları sergilemesini sağlamak çok kolay olur. Böylece testin ihtiyacına göre gerçek nesnenin davranışını değiştirmiş oluruz. Test haricinde uygulamamız çalıştığı durumda ise bu interfacein gerçek davranışlarını implemente eden asıl nesne DI container üzerinden alınmış olur.

Her bir unit test çoğunlukla, Arrange (Hazırlama) - Act (Çalıştırma) - Assert (Doğrulama) kısaca AAA şablonu ile 3 aşamadan oluşur. Bu 3 aşamanın anlamları kısaca aşağıdaki gibidir.

- Arrange (Hazırlama) : Bu aşamada test edilecek birimin çalışabilmesi için gerekli hazırlıklar yapılır. İhtiyaç duyulan parametreler, bağımlılıklar için taklitler oluşturulur. Test edilecek birimin hazırlık aşamasına ihtiyacı yok ise bu adım atlanılabilir.
- Act (Çalıştırma) : Bu aşamada test edilen birim çalıştırılır. Test edilen birimi bir method olarak düşünürsek bu adımda method çağrımı yapılır. Methodun ihtiyaç duyduğu parametreler, methodu barındıran sınıfın bağımlılıkları Arrange adımında hazırlanmış olmalıdır. Bu adımda yalnızca çalıştırma işlemi yapılır ve eğer var ise geri dönüş nesnesi bir değişkene atanır.
- Assert (Doğrulama) : Bu aşamada test edilen birimin davranışı doğrulanır. Doğrulama işlemi büyük çoğunlukla geri dönüş nesnesinin doğrulanması ile yapılır. Eğer hata(exception) durumlarını test ediyosak bu aşamada beklenen tipte bir exception fırlatıldığının da doğrulaması yapılır. Gerekli durumlarda bağımlılıklar için oluşturulmuş sahte nesneler ile olan iletişim de bu adımda doğrulanabilir.


Daha önce bir unit testin içerisinde tek bir koşul test edilmesi gerektiğini belirtmiştik. Başarısız olan testlerin hangi koşul için başarısız olduğunu anlamamız ve hızlı bir şekilde problemi tespit edebilmemiz için testlerin isimlendirmesi çok önemlidir. Unit test ismi test edilen koşul, test edilen birim ve beklenen sonucu açıkça anlatmalıdır. Bu açıklık sebebi ile test isimleri uzun olabilirler. İsimlendirmede en önemli unsur test amacının net bir şekilde anlaşılmasıdır. Genel olarak bir unit test isimlendirmesi için aşağıdaki 3 bilgi kullanılır. Bu bilgiler yazılım ekiplerinin tercihlerine farklı şablonlarda standart olarak kullanırlar.

- Koşul : Burda koşul adı genellikle When ön eki ile başlar. Test ettiğimiz birimin hangi koşulda çalışacağını belirtir.
- TestEdilenBirim : Test ettiğimiz birimin adıdır. Eğer unit testleri barındıran sınıf yalnızca tek bir birime ait testleri barındırıyor ise test edilen birim adı unit testler yerine sınıfın adında kullanılır.
- BeklenenSonuç :  Beklenen sonuca göre Returns, Should ön ekleri başlayabilir yada Throws..Exception şeklinde olabilir. Doğrulamasını yaptığımız ve beklediğimiz sonucu belirtir.

Örnekler : (şablonlar ekibe göre değişiklik gösterebilir)
- WhenCustomerStateIsValid_Validator_ReturnsValidResult
- WhenPermissionNotGranted_Indexer_ThrowsUnauthorisedException
- Validator_WhenCustomerStateIsValid_ReturnsValidResult
- Indexer_WhenPermissionNotGranted_ThrowsUnauthorisedException

Temel olarak bir unit test aşağıdaki şekilde bir şablona sahip olacaktır.
````
public void {Koşul}_{TestEdilenBirim}_{BeklenenSonuç}()
{
    //arrange (hazırlama)

    //act (çalıştırma)

    //assert (doğrulama)
}
````

* **2 - Integration (Uyuşma) Testleri**

Integration yani uyuşma testleri, uygulama içindeki birimlerin birlikte istenen şekilde çalıştığının yani birbirleri ile uyuştuklarının doğrulaması için yazılır. Test edilen unsur uygulamanın kullandığı tüm birimler olduğu için integration testler daha çok **teknik ekip (developer, architect, vb.) tarafından, teknik bakış açısı** ile yazılır. Uygulama içeriğine göre ürün sahiplerinin bakış açılarının da değerlendirilmesi gerekebilir.

Integration testlerinde izolasyon olabildiğince minimum seviyede tutulmalı, mümkünse hiç izolasyon yapılmamalıdır. Sahte nesne kullanımının minimum seviyede olması, gerçek parçaların doğru çalıştığının doğrulanabilmesi için büyük önem taşımaktadır. Integration testleri uygulama içerisinde yazılmış iç birimlerin (sınıflar vb.) birlikte çalıştığının doğrulanması haricinde varsa uygulama dışı birimler (veritabanı, dosya sistemi, dış api vb.) ile de birlikte çalışırlığı doğrulamalıdır. Dış birimler için gerekli durumlarda izolasyon sağlanabilir fakat olabildiğince minimum seviyede olmalıdır. 

Örneğin; veritabanı ile iletişime geçerek kayıt güncelleme yapılan bir işlem için, mümkünse testlere özgü bir veritabanı kullanılarak veritabanı bağlantısının başarılı kurulabildiği ve ilgili kaydın güncellendiğinin doğrulanması gerekir. Eğer test için özel bir veritabanı kullanılamıyorsa, testler sırasında geçici olarak kullanılmak üzere in-memory bir veritabanı kurgulanması gerekir. Böylece bağlantı ve güncelleme işlemlerinin doğruluğu yapılabilir.

Integration testleri farklı birimlerle iletişime geçildiği ve minimum izolasyona sahip olduğu için unit testlere nazaran daha yavaş çalışırlar ve karmaşıktırlar.

Integration testlerin yazılması ve çalıştırılması için kullanılan araç/frameworkler genellikle unit testler ile aynı araçlardır. Integration testlere özgü ayrı bir araç/framework kullanılmasına genellikle ihtiyaç olmamaktadır.

Integration testlerde de unit testler için uygulanan isimlendirme prensipleri ve AAA şablonu uygulanır.

* **3 - Functional (Fonksiyonel) Testler**

Functional yani fonksiyonel testler uygulamanın sunduğu özelliklerin doğru çalıştığını doğrulamak için yazılır. Bu testlerde uygulama parçalarının nasıl çalıştığı, ne iş yaptıkları birbirleri ile nasıl iletişime geçtikleri bilinmez. Uygulamanın verilen girdiye beklenen çıktıyı ürettiği doğrulanır. Test edilen unsur uygulamanın sunduğu özellikler yani ürün olduğu için functional testler **ürün sahipleri ve teknik ekip ile birlikte, müşteri bakış açısından** yazılır.

Functional testler ürün odaklı olduğu için yazılacak test içerikleri uygulama tipine göre değişecektir. Örneğin bir kullanıcı arayüzüne sahip uygulama için UI etkileşimi odaklı testler (buton click, form submit, hata mesajları, ekran geçişleri vb.) yazılırken, bir web api uygulaması için api response'un doğruluğu odaklı testler yazılır.

Testler uygulama özelliklerini doğruladığı için bu testlerde de izolasyon olmamalıdır. İhtiyaca göre geçici veritabanı vb. kullanılabilir.

Functional testler uygulama özelliklerini doğruladığı için ve minimum izolasyona sahip olduğu için unit ve integration testlere nazaran daha yavaş çalışırlar. Karmaşıklık seviyesi diğer test çeşitlerine oranla daha yüksektir.

Functional testlerin yazılması ve çalıştırılması için, unit ve integration testler için kullanılan araçlara ek olarak farklı araç/frameworkler kullanılması gerekir. Kullanılacak ek araçlar uygulamanın tipine göre değişiklik gösterebilir. UI sahibi bir uygulama için UI test araçları kullanılırken, webapi için yalnızca TestServer/Host araçlarının kullanılması gerekebilir.

Functional testlerin isimlendirilmesi ve yazma şablonu da, unit ve integration testler ile benzerdir. İsimlendirme olarak Given.._When.._Then kalıbı sıkça kullanılan bir şablondur. Temel olarak önkoşullar, çalışma koşulu ve beklenen sonuç isimde belirtilir. Diğer testlerden farklı olarak functional testler aslında uygulamanın tümünü doğruladığı için test edilen birim isimlendirmede kullanılmaz. Uygulamanın daha küçük modülleri isimlendirmeye dahil edilebilir.
