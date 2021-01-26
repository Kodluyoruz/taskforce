# ACID (Atomicity, Consistency, Isolation, Durability

İlişkisel veri tabanı yönetim sistemleri mimarisinde iş süreci (transaction) ve veri bütünlüğünü sağlamak için uyulması gereken kurallara ACID denilmektedir. İş süreci (transaction) kavramı bir işleminin ya bütünüyle yapılmasını ya da yapılan işlemlerin bütünüyle geri alınıp veri tutarlılığın sağlanmasını garanti altına demektir.

**ACID** ne zaman ihtiyaç duyulur ?

ACID işlem tabanlı veritabanı ilkeleri olarak tasarlanmıştır. Yani verilerin bir tür başarısızlık sonucunda bozulmamasını sağlamak için veritabanı işlemlerinin uyması gereken ilkeleri sağlar. 

Transaction, bir veya daha fazla adımdan oluşan tek bir mantıksal işlemdir. Örneğin banka hesapları arasında para transferi (bir hesabın borçlandırılması ve diğerinin kredilendirilmesi gibi) bir işlemdir. Böyle bir işlem olduğunu varsayalım, eğer yarısında başarısız olursa, büyük problemlere sebep olabilir. Yani ilk hesaptan para çekilebilir ve diğer hesaba aktarılamayabilir. İşte ACID ilkeleri bu noktada uyulması gerekir. Aşağıda ise bu anlatılanların bir örneği verilmiştir.

**Örneğin**, hesabınızda 100 TL’yi arkadaşınızın hesabına havale yoluyla göndermek istiyorsun diyelim. 

Bu iş süreci (transaction) iki işlem parçasından oluşur. 100 TL senin hesabından azaltılıp sana ait bakiye bilgileri güncellenir, ardından 100 TL arkadaşın hesabına +100 olarak işlenir ve güncellenir. İşte bu işlem bütünlüğü garanti altına alınmalıdır. Alınamaz ise tutarsız verilerle karşılaşılır. Böylece veri bütünlüğü bozulur. Eğer sizden 100 TL çektikten sonra bir hata oluşursa ve arkadaşınızın hesabına bu ücret yatırılamaz ise tutarsız bir durum oluşacağı aşikardır. Yine mülakatlarda size soru olarak gelebilecek bir bilgidir. ACID’i açıklayabilmek ve mantığını anlamak gerekir.

**ACID** tanımına göre şunu söyleyebiliriz. Bir veritabanı ancak başarılı transaction sonuçlarını içeriyorsa tutarlıdır. **ACID** uyumlu herhangi bir veritabanı, sadece başarılı transactionların işlenmesini sağlayacaktır. Eğer bir transaction tamamlanmadan önce bir problem oluşursa hiçbir veri değiştirilemeyecektir.

Böylece, **ACID** uyumlu DBMS (Database Management System)'ler transaction işleminde bir sorun oluşsa bile bu yapıyı kullananlara veri bütünlüğünü koruyacağına dair bir güven sağlamış oluyor.

## Hata Türleri

Transaction Hatası (Transaction Failure) : Hatalı giriş veya başka tutarsız bilgi nedeniyle bir transaction hatası oluşabilir.DBMS'de ki (Database Management System) zaman aşımı veya kilitlenmelerde olabilir.

Sistem Hatası (System Failure) : DBMS (Database Management System)'de bir kod hatası Sistem hatasına neden olabilir. Ya da bir donanım problemide olabilir.

Ortam Hatası (Media Failure) : Bir depolama cihazından yazamama veya okuyamama durumunu ifade eder. Ortamdan ve işletim sisteminden kaynaklanıyor olabilir. 

Ortam hatası, Transaction ve Sistem hatasına göre daha nadir olan bir hata türüdür.

## ACID Uyumluluğu

R-DBMS (Relational Database Management System) ' ler ACID ilkelerine sahiptir. Verilerin yazılımsal veya donanımsal problemleri oluştuğunda veya başarısız işlemlerde tutarlı olmasını sağlayan özellikler içerir. NoSQL veritabanları ise biraz farklı bir yapıdadır. Yani NoSQL veritabanları genellikle bir kümede kullanılabilirlik sağlamak için tasarlanır. Tutarlılık ve dayanıklılık bir noktaya kadar feda ediliyor demektir. Çoğu NoSQL DBMS bir seviyeye kadar atomiklik sağlıyor.

Çoğu NoSQL DBMS tutarlı bir yapıda çalışır. Veriler bir süre için senkronize olmayabilir. Ancak sonunda senkronize olacaktır.

MarkLogic, OrientDB ve Neo4j gibi NoSQL veritabanı türleri ACID uyumlu bir yapı sunarlar. 

## Atomicity (Bölünmezlik)

Bir iş sürecinde (transaction) yapılacak işlemler sıralı bir şekilde birden fazla olabilir. Veri tabanında yapılacak olan bu işlemler kümesi bir bütün olarak ele alınır. Yapılan işlemlerinden herhangi bir tanesi tamamlanamaz ise diğer tüm işlemlerde geçersiz sayılmalıdır. Eğer böyle hatalı bir durum varsa o ana kadar yapılan tüm işlemler geri alınır. Fakat, işlemlerin hepsi başarılı ise o iş süreci sonlandırılır.

İşlemin kısmen bilinmeyen bir duruma kadar tamamlandığı servis talepleri oluşturarak çökmeleri ve kesintileri önlemek için kullanışlıdır. Atomik olmayan bir işlem sırasında bir problem oluşursa, işlem kesintiye uğramadan önce ne kadar ilerlendiği bilinemez. Atomicity (Bölünmezlik) kullanılarak işlemin tamamının başarıyla tamamlandığından veya hiçbirinin tamamlanmadığından emin olunur.

## Consistency (Tutarlılık)

Veri tabanında yapılan işlemlerde hep aynı girdiler ile hep aynı çıktıları almalıyız. İşte bu tutarlılığı gösterir. 

Aslında veri bütünlüğü kısıtlamalarının sürdürülmesi anlamına gelir. Tutarlı bir işlem de, veri tabanı kuralları ile bütünlük kısıtlamalarını ihlal edemeyecektir.Tutarlılığı zorunlu hale getirmek (veri bütünlüğü kısıtlamalarının ihlal edilmesi ile) ilerleyen süreci durdurmayı ve değişikliklerin yasal duruma geri döndürülmesi sağlanır.

Her işlem de veri tabanı içinde tutarlılık sağlamanın bir başka yöntemi de, veri tabanına yerleştirilen bildirime dayalı kısıtlamaları uygulamaktır. Örnek : Tüm müşteri hesaplarının pozitif bir bakiyeye sahip olması gerektiği olabilir. İşlem, bir müşteri bakiyesini negatif bakiyeye getirirse, bu işlem geri alınır. Bu şekilde veri bütünlüğünü korumada  değişikliklerin başarılı olmasını veya tamamen iptal edilmesini sağlar.

## Isolation (İzolasyon)

Bir transaction’ın tüm işlemleri tamamlanana kadar diğer transactionlar tarafından yapılan değişiklikler ilgili transaction tarafından görülmez. Her transaction birbirinden bağımsız çalışır. İşlem sırasında birbirlerine müdahale etmezler. Veya dışarıdan bir müdahaleyi kabul etmezler. Bu izolasyonu ifade eder.

## Durability (Sağlamlık)

Bir transaction içinde hata oluşursa geri dönme yeteneğine sahip olmalıdır. Hata oluşursa bir önceki ilk noktaya dönülebilmelidir. Eğer transaction başarılı bir şekilde biterse bu durum loglanmalıdır ve başarılı olduğuna dair mesaj verilmelidir.

İlişkisel veri tabanı yönetim sistemlerinde veriyi sorgulamak için özel bir programlama dili kullanılır. Dünyada neredeyse standart halini almış bu dil SQL’dir. (Structural Query Language) (Yapısal Sorgulama Dili)



SQL içinde işlevlerine göre farklı komutlar yer almaktadır. Bu komutlar mantıksal bir şekilde aşağıdaki gibi sınıflandırılmıştır.

## 1- DDL (Data Definition Language – Veri Tanımlama Dili) 

Veri tabanı veya tablolarda yapısal değişiklikler yapabilmek için var olan SQL komutlarıdır. Bu komutlar ile yeni bir veri tabanı oluşturmak, yeni bir tablo oluşturmak veya var olan tablodan sütun eklemek-silmek veya tüm bunları silebilmek gibi işlemler yapılabilir.

 CREATE, ALTER, DROP, TRUNCATE, COMMENT, RENAME gibi komutlar bu işlemleri yapabilir.



## 2-   DML (Data Manipulation Language – Veri İşleme Dili)

Tablolardaki veriler üzerinde kayıt ekleme, silme, değiştirme ve sorgulama yapabilmeyi sağlayan SQL komutlarıdır.

SELECT, INSERT, UPDATE, DELETE



## 3-   DCL (Data Control Language – Veri Kontrol Dili)

Veri tabanı veya tablolar üzerinde yetkilendirmeler yapabileceğimiz SQL komutlarıdır.

 GRANT, REVOKE, ALTER DEFAULT PRIVILEGES



## 4-   TCL (Transaction Control Language – İşlem Kontrol Dili) 

Tabloların içindeki verileri değiştirmek için kullandığımız DELETE, UPDATE, INSERT gibi DML komutlarımız vardı. Bu komutlarla bir transaction içinde ardışıl şekilde değişiklikler yapabiliriz. İşte bu değişiklikleri yönetebilmek için kullanılan SQL komutlarıdır. Bir transaction başarılı ise DML komutlarının meydana getirdiği değişiklikler COMMIT komutuyla kalıcı olarak tablolara yansıtılır. Özetle veri kalıcı olarak değişir. Eğer, bir sorun varsa ROLLBACK komutu ile o ana kadar oluşan tüm değişimler geri alınır.

COMMIT, ROLLBACK, SAVEPOINT

