## Veri Tabanı Yönetim Sistemleri

**Veri Nedir?**

Veri bilgiyi elde etmeye yönelik olan ve işlenmemiş ham, dağınık haldeki bilgi parçacıklarıdır. Çoğu zaman bilgi kavramı ile karıştırılır. Bilgi ise veriler aracılığı ile anlamlı bir bütün elde edecek şekilde bir araya gelmiş topluluktur. Basit bir deyişle, veriler dikkate aldığımız herhangi bir nesne ile ilgili gerçekler olabilir. Örneğin adımız, yaşımız, boyumuz, kilonuz vb. sizinle ilgili bütün bilgiler birer veridir. Bir resim, dosya, pdf de veri olarak kabul edilebilir.

**Veritabanı Nedir?**

Veritabanı; verilerin erişilebilir, yönetilebilir ve güncellenebilir hale getirilmesini sağlamak amacıyla yapılandırılmış bir veri koleksiyonudur. Basit bir deyişle, verilerin depolandığı bir yere bir veritabanı diyebiliriz. Buna günümüzden en iyi örnek kütüphanelerdir. Kütüphaneler, farklı türlerde büyük bir kitap koleksiyonu içerir, burada kütüphane veritabanıdır ve kitaplar verilerdir diyebiliriz.

Veritabanı Yönetim Sistemi; birbiriyle ilişkili verilerin depolandığı koleksiyonlara erişmek için yapılandırılmış bir sistemler bütünüdür. Bir veri koleksiyonuna bilgilerin depolanmasını, geri alınmasını ve yönetimini kolaylaştıran yapıya veritabanı demiştik. Veritabanı Yönetim Sistemlerinin birincil amacı, veritabanlarındaki bilgilerinin alınması ve depolanması sırasında hem uygun hem de verimli bir ortam sağlamaktır. Veritabanı sistemleri, büyük veri kütlelerini yönetmek için tasarlanmıştır. Verilerin yönetimi, hem bilgilerin depolanması için yapıların tanımlanmasını hem de bilgilerin manipülasyonu için mekanizmaların sağlanmasını amaçlar. Ek olarak veritabanı sistemi, sistem çökmelerine veya yetkisiz erişim girişimlerine rağmen depolanan bilgilerin güvenliğini sağlamayı amaçlar. Veritabanı Yönetim Sistemleri, kısaca veritabanlarını yöneten bir yazılım sistemleri bütünüdür diyebiliriz. Aynı zamanda depolanan veri dosyaları ile işlemeyi talep eden programlar arasındaki arayüz işlemlerini sağlar.

Veri tabanları üzerinde yönetim sağlayan sistemlerdir. Veri tabanı Yönetim Sistemi yeni veri tabanı oluşturmak, güncellemek, kullanmak, veri tabanı üzerinde kullanıcılar tanımlamak, kullanıcıların yetkilerini belirlemek gibi yönetsel olanaklar sağlamaktadır. Aşağıdaki imkanları sağlar.

**Veritabanı Yönetim Sistemlerinin Amaçları Nelerdir?**

Bir VTYS'nin birincil amacı, veritabanı bilgilerini almak ve depolamak için uygun bir ortam sağlamaktır. Tek kullanıcılı ve çok kullanıcılı ortamı destekler.
- İlgili verilerin toplu olarak depolanmasını sağlamak,
- Kullanıcılar için verilere erişimi kolaylaştırmak,
- Verileri fiziksel zarar ve yetkisiz erişime karşı korumak,
- Verilerin doğruluğu, tutarlılığı, bütünlüğü, güvenliği vb. gibi konuların üzerinde kontrolün kolaylaştırılması denilebilir.

**Veri Tekilliği ve Veri Bütünlüğü:** Veriler merkezi bir noktada tutularak, yazılımların sürekli mükerrer ve tutarsız veriler üretmesini önler. Veriler tek noktada toplanır, güncellenir veya tek noktadan sorgulanabilir.

**Veri Güvenliği:** Veri tabanları üzerinde kullanıcılar tanımlanabilir. Veritabanlarına erişim için kullanıcı adı ve şifre koruması sağlanabilir. Tanımlanan kullanıcılar belli yetkiler çerçevesinde işlemler yapabilir. Yetkisi yoksa veri tabanını göremez veya üzerinde işlem yapamayabilir.

**Eş Zamanlılık:** Veri tabanı Yönetim Sistemleri veriler üzerinde eş zamanlı erişim yapılabilmesini sağlarlar. Böylece, saniyeler içinde binlerce kullanıcı erişim sağlayabilir.


Birden fazla veri tabanı yönetim sistemi çözümü vardır. Ticari lisanslarının yanında, özgür yazılım lisansına sahip Veri tabanı Yönetim Sistemleri vardır. Örneğin, PostgreSQL, MariaDB özgür yazılım lisansına sahip olanlarıdır. MSSQL, Oracle, DB2 gibi çözümler ise ticari lisansa sahiptirler. 

### Veri Tabanı ile Geliştirilen Uygulamaların Mimarisi

Veri tabanı kullanan yazılımlar genellikle 3 katmanlı mimari şeklinde bir yaklaşımlar veriyle etkileşime geçerler. Katmanlara ayırmamızın sebebi birbiriyle ilişkili olan işlemlerin o katmanda yapılmasıdır. Böylece, sağlam bir izolasyon sağlanmış olacaktır. Bakımı kolay performanslı, az hata çıkaran yazılımlar gerçekleştirmek mümkün olacaktır. Bu üç katman aşağıdaki gibidir.

\- Veri Katmanı (Data Layer)

\- İş Katmanı (Business Process Layer)

\- Sunum Katmanı (Presentation Layer)

**Veri Katmanı**

Veri tabanına verilerin eklenmesi, güncellenmesi veya sorgulanabilmesi gibi veritabanıyla direkt etkileşim halinde olan katmandır. Veriye erişim katmanı olarak bilinir.

**İş Katmanı**

Veri tabanından alınan veya değiştirilen verilerle çalışan iş akışlarının algoritmaların olduğu katmandır. Örneğin, bankada bir EFT veya Havale işleminin nasıl gerçekleşeceği bir algoritma çerçevesinde işletilir. İş bu iş akışlarının bütününün yazılımsal olarak gerçekleştirildiği katmandır. İşlenen, üretilen veya kullanılan veri bu katmandan bir alt katman olan “Veri Katmanına” iletilir. Genellikle “Transaction” yönetimi bu katmanda yapılır. Mülakatta gelebilir J 

**Sunum Katmanı**

İş katmanından gelen veriler ön yüzde gösterilir veya önyüzden yapılan bir işlem işlenmek amacıyla iş katmanına iletilir. Kullanıcı ile etkileşimin sağlandığı katmandır. Bir mobil ara yüzü, bir web sayfası veya bir Veri tabanı Yönetim Sistem istemci yazılımı olabilir.
