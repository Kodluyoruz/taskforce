# .NET Core (.NET 5) Index

### [.NET 5 Giriş](1-net5-giris/)

#### Video

### [Kurulumlar](2-kurulumlar/)

#### Video

### [Http Protokolü](3-http-protokolu/)

#### Sorular

1. Aşağıdaki http metotlarından hangisi ile sunucuya bir veri seti göndererek insert işlemi yaparız ?

   - GET
   - PUT
   - DELETE
   - POST (Doğru)

2. Erişilmek istenen kaynak bulunamadığında aşağıdaki http durum kodlarından hangisi kullanılır?

   - 401
   - 200
   - 404 (Doğru)
   - 500

3. Aşağıdakilerden http metotlarından hangisi **idempotent** değildir ?

   - POST (Doğru)
   - GET
   - PUT
   - DELETE

4. Aşağıdakilerden hangisi JSON'ın desteklediği veri tiplerinden değildir ?

   - Boolean
   - Array
   - Object
   - Decimal (Doğru)

#### Video

### [Örnek Web Api Yaratmak](4-ornek-webapi-yaratmak/)

#### Sorular

1. Aşağıdaki komutlardan hangisi ile "Kodluyoruz.Api" adında bir dotnet core webapi projesi yaratırız ?

   - dotnet new webapi
   - dotnet new webapi -n Kodluyoruz.Api (Doğru)
   - dotnet new webapi -name Kodluyoruz.Api
   - dotnet new --webapi -n Kodluyoruz.Api

#### Videolar

1. ...
2. ...

### [Proje Dosyalarını Tanıma](5-proje-dosyalari/)

#### Sorular

1. Bir .Net uygulaması ayağa kaldırıldığında ilk çalışan sınıf aşağıdakilerden hangisidir?

   - Startup.cs
   - Program.cs (Doğru)
   - Main.cs
   - Configure.cs

2. Bir .Net Core veya .Net 5 proje içerisinde kullanılacak servislerin tanıtıldığı ve konfigüre edildiği yapı aşağıdakilerden hangisidir?

   - Startup
   - Configure
   - ConfigureServices (Doğru)
   - Main

3. Uygulama genelinde geçerli olacak konfigürasyonların tanımlandığı dosya aşağıdakilerden hangisidir?
   - Program.cs
   - Startup.cs (Doğru)
   - .csproj
   - .sln

#### Video

### [Controllers, Route ve Action Methodlar](6-controllers-route-action-methodlar/)

#### Sorular

1. Controller ile ilgili aşağıdakilerden hangisi yanlıştır ?

   - Resource'lara karşılık gelir.
   - .Net projesi ayağa kaldırıldığında ilk çalışan metotları barındırır. (Doğru)
   - ControllerBase sınıfından kalıtım alır.
   - Bir resource ile ilgili eylemleri içerir.

2. .Net Route ile ilgili aşağıdakilerden hangisi yanlıştır ?

   - Metotlara tanımlanan attribute'lerdir. (Doğru)
   - Sınıf bazında tanımlanır.
   - Web Api'ya gelen requestlerin hangi controller'a yönlendirileceğini belirler.
   - Url içerisinden çözümlenen resource adına karşılık gelir.

3. Action metotlar ile ilgili aşağıdakilerden hangisi yanlıştır?
   - Spesifik bir resource üzerinde işlem yapmamıza olanak sağlayan eylemlerdir.
   - Geriye Http Response dönerler.
   - Eylemlere parametreler geçilmesi yalnızca URL aracılığıyla yapılabilir. (Doğru)
   - Eylemlere birden fazla parametre geçilebilir.

#### Video

### [Ödev 1](7-odev-1/)

#### Sorular

#### Video

### [Swagger ve Postman kullanımı](8-swagger-postman/)

#### Sorular

1. .Net core web api projesi içinde otomatik olarak aşağıdaki araçlardan hangisi ile hem dökümantasyon oluşturup hem de örnek çağrımlar yapabiliriz ?

   - Postman
   - cURL
   - Swagger UI (Doğru)
   - Fiddler

2. Aşağıdaki araçlardan hangisi apilere çağrımlar yapmanın yanında hem dökümantasyon oluşturmamıza hem de otomatize testler çalıştırabilmemizi sağlar ?

   - Fiddler
   - Swagger UI 
   - cURL
   - Postman (Doğru)

#### Video

### [Veritabanı Yönetim Sistemleri](9-veritabani-yonetim-sistemleri/)

#### Sorular

1. İlişkisel veritabanları ve yönetim sistemleri ile ilgili aşağıdakilerden hangisi **yanlıştır?**

   - Verilerin tablolarda birbiri ile ilişkili şekilde tutulmasına olanak sağlar.
   - Okunabilirliği kolay bir veri görseli sunar.
   - Tüm veritabanı yönetim sistemleri dil olarak SQL kullanır. (Doğru)
   - MySql ve PostgreSql ücretsiz veritabanı kullanımı sunar.

2. İlişkisel Veri tabanlarında Data Consistency yani veri tutarlılığı nedir ?

   - Birden fazla tabloda dağıtık halde tutulan ilişkisel verilerin bir arada hareket etmesinin sağlanmasıdır. (Doğru)
   - Datanın optimize edilerek saklanmasıdır.
   - Query performansının arttırılmasına yönelik çalışmadır.
   - Var olan verinin temizlenme aşamasıdır.

3. NoSql Veri tabanları ile ilgili aşağıdakilerden hangisi **yanlıştır?**

   - Büyük verileri saklama ve işleme konusunda ilişkisel veri tabanlarına göre performanslı çalışır.
   - Veri tutarlılığı sağlamaz. İlişkisel veritabanı kullanılan uygulamalarda kulanılamaz. (Doğru)
   - Yüksek performans ve hıza odaklanır.
   - 1998 yılında ilişkisel veritabanı ile yaşanan sıkıntılara odaklanarak geliştirildi.

4. Aşağıdakilerden hangisi NoSql veritabanlarının avantajlarından **değildir?**

   - Yatayda ölçeklenebilir olduğundan dolayı dağıtık uygulamalarda tercih edilebilir.
   - Büyük verilerle performanslı şekilde çalışabilir.
   - Lisans ücretleri ilişkisel veritabanlarına göre çok düşüktür.
   - Yetişmiş uzman bulmak zordur. (Doğru)

5. Primary Key ve Foreign Key ile ilgili aşağıdakilerden hangisi **yanlıştır ?**
   - Bir tabloda birden fazla primary key bulunabilir. (Doğru)
   - Bir tabloda birden fazla foreign key bulunabilir.
   - Foreign Key kullanılarak veri tutarlılığı sağlanır.
   - Primary key tek bir alan olabileceği gibi biden fazla alanın birleşimi de olabilir.

#### Video

### [ORM Araçları ve Entity Framework Core](10-entity-framework-linq/)

#### Sorular

1. İlişkisel veritabanı ve kod içerisindeki objeleri birbirine bağlamak için kullanılan yöntemin adı nedir?

   - Object Relational Mapping (Doğru)
   - Code First Yaklaşım
   - Db First Yaklaşım
   - Model First Yaklaşım

2. ORM Araçları ile ilgili aşağıdakilerden hangisi **yanlıştır?**

   - Uygulama içerisindeki modelleri birbirine dönüştürmek için kullanılır. (Doğru)
   - Db objeleri ve uygulama içerisinde kullandığımız objeleri birbirine dönüştürmek için kullanılır.
   - DB objelerine olan bağımlılığı oratadan kaldırır.
   - Nesne yönelimli kod yazmayı destekler.

3. Aşağıdakilerden hangisi ORM Araçlarının dezavantajlarından **değildir?**

   - Query execute etmeye nazaran yavaş çalışır.
   - Orm Araçlarını öğrenmekte zaman alır.
   - Orm araçlarının oluşturmuş oldupu SQL'lere manuel müdahale edemeyiz.
   - Çoğu ORM aracı açık kaynak kodludur. (Doğru)

4. Entity Framework Core ile ilgili aşağıdakilerden hangisi **yanlıştır?**
   - Entity Framework 6.x'in yeni versiyonudur.
   - Cross Platform bir yazılımdır.
   - Açık kaynak kodludur.
   - .Net Framework 4.x ve üzeri uygulamalarda çalışabilir. (Doğru)

#### Video

### [Model ve Mapper Kullanımı](11-model-mapper-kullanimi/)

#### Sorular

1. Entity kavramı ile ilgili aşağıdakilerden hanfisi **yanlıştır?**

   - Standart bir sınıf tanımından farkı yoktur.
   - Uygulama içerisindedeki input/output'ları map lemek için kullanılırlar. (Doğru)
   - EF Core'un görebilmesi için DBContext dosyasına DBSet olarak eklenmelidir.
   - Bir entity sınıfı özelliği database de bir tablonun kolonuna karşılık gelir.

2. Entity kavramı ile ilgili aşağıdakilerden hangisi **yanlıştır?**

   - Scalar entity property primitive type'lardan oluşur.
   - String bir skalar entity property dir.
   - Navigation Property bir entity ile başka bir entity arasındaki ilişkiyi tanımlar.
   - Navigation Property'ler ile birlikte Foreign Key kullanılır.
   - Hiçbiri (Doğru)

3. ViewModel kullanımı ile ilgili aşağıdakilerden hangisi **yanlıştır?**

   - ViewModel uygulama içerisinde UI'a dönülecek olan veriyi modellemek için kullanılır.
   - Bir ViewModel sadece tek bir UI için kullanılmalıdır.
   - Katmanlar arası veri transferi için kullanılır. (Doğru)
   - ViewModel lerin yanlış kullanımı veri güvenliği için bir tehdittir.

4. Dto kullanımı ile ilgili aşağıdakilerden hangisi **yanlıştır?**

   - Uygulama içerisinde katmanlar arası veri transferi için kullanılır.
   - Son kullanıcının gördüğü veri DTO'ya maplenerek response içerisinde geri döndürülür. (Doğru)
   - Resource verisi genel olarak database'den gelen veridir.
   - Veriyi her katmanda yeniden elde etme maliyetini azaltır.

5. Object Mapping ile ilgili aşağıdakilerden hangisi **yanlıştır?**
   - Farklı tiplerdeki komplex veri tiplerini birbirine dönüştürmek için Auto Mapper kütüphanesi kullanılır.
   - Dönüşüm sadece primitive type içeren objeler arasında yapılabilir. (Doğru)
   - AutoMapper ile çalışırken mapping config'leri kütüphaneye gösterilmelidir.
   - Autpmapper config dosyası Profile sınıfından kalıtım almalıdır. Aksi halde AutoMapper mapping konfigürasyonlarını göremez.

#### Video

### [Modellerin Doğrulanması](12-model-validasyonu/)

#### Sorular

1. Model Validayonu ile ilgili aşağıdakilerden hangisi **yanlıştır?**
   - Uygulamanın kararlı yapısının korunmasını sağlamak için kullanılır.
   - Esnetilebilir validasyon kuralları yazmamıza olanak sağlar.
   - Uygulama performansını olumsuz etkiler. (Doğru)
   - Fluent Validation .Net ile birlikte en sık kullanılan validasyon kütüphanesidir. 

2. FluentValidation kütüphanesinin doğrulama sonucunda hata varsa hatayı fırlayan metodu aşağıdakilerden hangisidir ? 
   - `Validate()`
   - `ThrowAfterValidate()`
   - `ValidateWithThrow()`
   - `ValidateAndThrow()` (Doğru)

3. String veri tipindeki bir özelliğin boş olup olmadığını kontrol eden kural aşağıdakilerden hangisidir?
   -  `RuleFor(x => !x.Name.IsNullOrEmpty());`
   -  `RuleFor(x => x.Name != null);`
   -  `RuleFor(x => x.Name).NotNull();` (Doğru)
   -  `RuleFor(x => x.Name is not null);`

#### Video

### [Ödev 2](13-odev-2/)

#### Sorular
Gerekli Değil

#### Video

### [Dependency Injection](14-dependency-injection/)

#### Sorular
1. Dependency Kavramı ile ilgili aşağıdakileren hangisi **yanlıştır?** 
   - Bağımlılıklar dependency injection yöntemi ile aşılabilir. 
   - DateTime.Now() bir bağımlılıktır. 
   - Birim testleri yazarken bağımlılıklar işleri zorlaştırır. 
   - Dependency Injection kullanmadan .Net uygulama  geliştirilmez. (Doğru)

2. Yazılım geliştirirken bağımlılık yaratmamanın ilk faydası aşağıdakilerden hangisidir?

   - Uygulamanın daha esnek yani genişleyebilir olmasını sağlar. (Doğru)
   - Uygulamanın daha performanslı çalışmasını sağlar.
   - Adapte olması ve yazılması kolaydır. 
   - Hızlı kod yazmamızı sağlar. 

3. Aşağıdakilerden hangisi dependency injection yöntemi **değildir?**
   - Yapıcı Metot ile 
   - Setter Property ile
   - Method ile
   - `new` anahtar kelimesi ile (Doğru)

4. Dependency Injection yöntemleri ile ilgili aşağıdakilerden hangisi **yanlıştır?**
   - 3 farklı yöntem ile yapılabilir. 
   - Metot ile inject edilen nesne diğer metotlar içerisinde de kullanılabilir. (Doğru)
   - Yapıcı metot ile inject edilen nesne inject edildiği sınıf içerisinde kullanılabilir.
   - Setter Property ile inject edilen nesne sınıf içerisinde kullanılabilir. 

5. DI Container ile ilgili aşağıdakilerden hangisi **yanlıştır?**
   - Bağımlılıkları tek bir noktadan yönetmemize olanak sağlayan yapıdır. 
   - İhtiyacımız olan bir nesneyi oluşturduğumuzda onun bağımlı olduğ nesnelerinde oluşturulmasını sağlar. 
   - Container'a hangi sınıfları uygulama içerisinden dependency olarak kullanacağımızı tanımlayarak gösteririz.
   - Sadece kullanacağımız sınıfı DI container'a tanımlarız, bağımlılıkları o görür. (Doğru)

 6. DI Container ile ilgili aşağıdakilerden hangisi **yanlıştır?**
      - .Net Core kendi içinde bir DI Container barındırır. 
      - Program.cs içerisinde DI Container'a bağımlılık eklenir. (Doğru)
      - DI Container'a servis eklerken yaşam süresini de söylememiz gerekir. 
      - Startup.cs içerisindeki ConfigureServices metodunun aldığı IServiceCollection tipindeki parametre container nesnesine karşılık gelir.

7. Scope servis implementasyonu ile ilgili aşağıdakilerden hangisi doğrudur?
    - Http Request bazında tanımlanır. Response geri döndürüldüğünde yaşam döngüsü sonlanır. (Doğru)
    - Uygulama ayağa kalktığında bir kez tanımlanır ve hep aynı nesne kullanılır. 
    - Nesneye her erişilmek istendiğinden yeniden oluşturulur.
    - Sadece uygulama durdurulduğunda silinir. 

#### Video

### [Middleware Kavramı](15-middleware-kavrami/)

#### Sorular
1. Middleware ile ilgili aşağıdakilerden hangisi **yanlıştır?**
    - Configure metodu içerisinde saklanır. 
    - Tanımlanma sırası önemli değildir. (Doğru)
    - Request ve response arasına girip işlem yapmamıza olanak sağlar. 
    - Çoklu middleware tanımlanabilir. 

2. Pipeline içerisinde kısa devreye neden olan metot aşağıdakilerden hangisidir?
   - `Run()` (Doğru)
   - `Use()`
   - `Map()`
   - `MapWhen()`

3. Sadece path bazında bir middleware tanımlamak için kulanılan pipeline metodu aşağıdakilerden hangisidir?
   - `Run()`
   - `Map()` (Doğru)
   - `MapWhen()`
   - `Use()`

4. Request içerisindeki bilgilere göre özelleştirmek istediğimiz middleware'leri pipeline'a eklemek için aşağıdaki metotlardan hangisini kullanırız? 
   - `Run()`
   - `Map()`
   - `When()`
   - `MapWhen()` (Doğru)

5. Aşağıdaki metotlardan hangisi bir middleware'in sonunda çağırılarak pipeline içerisindeki bir sonraki middleware'in tetiklenmesini sağlayan metottur?
   - `next.Invoke();` (Doğru)
   - `next();`
   - `Invoke();`
   - `InvokeThen();`

#### Video

### [TDD (Test Driven Development)](16-tdd-nedir/)

#### Sorular

1. Aşağıdakilerden hangisi otomatize testlerin faydalarından biri **değildir?**

   - Hataların daha hızlı tespit edilmesi ve daha az hataya sahip çıktı üretilmesi
   - Yazılım süresini azaltması (Doğru)
   - Temel OOP prensiplerine sadık kalınarak kaliteli kod üretilmesi
   - Manuel test için harcanan efor ve maliyetini en aza indirgemesi

2. Yazdığmız kodların diğer birimlerden bağımsız olarak beklediğimiz gibi çalıştığını doğruladığımız test çeşidi aşağıdakilerden hangisidir?

   - Unit (Birim) Test (Doğru)
   - Integration (Uyuşma) Testi
   - Functional (Fonksiyonel) Test
   - Mock Test

3. Yazdığmız kodların birbirleri ile birlikte çalıştıklarında beklediğimiz gibi çalıştığını doğruladığımız test çeşidi aşağıdakilerden hangisidir?

   - Functional (Fonksiyonel) Test
   - Unit (Birim) Test 
   - Mock Test
   - Integration (Uyuşma) Testi (Doğru)

4. Uygulamanın sağladığı özelliklerin beklediğimiz gibi çalıştığını doğruladığımız test çeşidi aşağıdakilerden hangisidir?

   - Unit (Birim) Testi 
   - Mock Test
   - Functional (Fonksiyonel) Test (Doğru)
   - Integration (Uyuşma) Testi

5. 3 aşamadan oluşan bir test içerisinde aşağıdaki aşamalardan hangisinde doğrulama yapılır?

   - Arrange
   - Assert (Doğru)
   - Act
   - Verify

6. Otomatize testlerin çalışma hızları düşünüldüğünde en hızlı çalışan test çeşidi aşağıdakilerden hangisidir  ?

   - Mock Test
   - Unit (Birim) Testi (Doğru)
   - Integration (Uyuşma) Testi
   - Functional (Fonksiyonel) Test

7. Test edilen birimi bağımlı olduğu nesnelerden izole etme işlemi sırasında daha kolay ve esnek taklit nesneler yaratabilmek için kullandığımız yardımcı araç aşağıdakilerden hangisidir ?

   - Postman
   - Moq ve XUnit
   - Testing Framework
   - Mocking Framework (Doğru)

#### Video

### [Ödev 3](17-odev-3/)

#### Sorular

#### Video

### [Kimlik Doğrulama ve Yetkilendirme Protokolleri](18-kimlik-dogrulama-ve-yetkilendirme/)

#### Sorular

#### Video

### [Proje 1](19-proje-1/)

#### Sorular

#### Video

### [Proje 2](20-proje-2/)

#### Sorular

#### Video

### [Tüm Dökümanlar](21-dokumanlar/)
