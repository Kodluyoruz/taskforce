## Veri Tabanı Yönetim Sistemleri

Veri tabanları üzerinde yönetim sağlayan sistemlerdir. Veri tabanı Yönetim Sistemi yeni veri tabanı oluşturmak, güncellemek, kullanmak, veri tabanı üzerinde kullanıcılar tanımlamak, kullanıcıların yetkilerini belirlemek gibi yönetsel olanaklar sağlamaktadır. Aşağıdaki imkanları sağlar.

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