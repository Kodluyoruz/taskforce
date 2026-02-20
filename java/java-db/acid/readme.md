# ACID (Atomicity, Consistency, Isolation, Durability)

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

Yukarıdaki tanımı biraz açıklayalım :

İzole edilmiş işlemler(transaction) serileştirilebilir olarak kabul edilebilir. Her işlem, ardışık olarak gerçekleşen herhangi bir işlem (transaction) olmaksızın farklı bir sırada gerçekleşir. Veri tabanında gerçekleştirilen okuma veya yazma işlemi, aynı veri tabanında gerçekleşen ayrı işlemlerin diğer okuma ve yazmalarından etkilenmeyecektir. İşlemlerin bir diğeri başlamadan önce bütünü ile tamamlanmasını sağlamak için sıraya giren her işlem ile birlikte genel bir durum oluşturulur. İki işlemin yapılamayacağı anlamına gelmez bu durum. Yani işlemlerin aynı anda gerçekleşen diğer işlemleri etkileme olasılığı olmadığı sürece birden fazla işlem gerçekleşebilir.

Birçok işlemi (transaction) başlatmadan önce beklemeye zorlayabileceğinden transactionların hızı etkilenebilir. Bu durum isolation sağladığı ek veri güvenliğine değer.

İzolasyon, optimistic transactions ve pessimistic transactions olarak adlandırılan transactions arasında gidip gelen bir izin verilebilirlik ölçeğinin kullanılması ile yapılabilir. **Optimistic Transaction** aynı yere iki kez okunmadan veya yazmadan tamamlanacağını varsayar. Yani bir işlemin aynı yere iki kez gelmesi durumunda her iki işlemde iptal edilir ve yeniden denenir. **Pessimistic Transaction** transactions diğerlerini etkileyeceği varsayımıyla kaynakları kilitler. 

## Durability (Sağlamlık)

Bir transaction içinde hata oluşursa geri dönme yeteneğine sahip olmalıdır. Hata oluşursa bir önceki ilk noktaya dönülebilmelidir. Eğer transaction başarılı bir şekilde biterse bu durum loglanmalıdır ve başarılı olduğuna dair mesaj verilmelidir.

Aslında Sağlamlık, veri tabanında yapılan değişikliklerin, sistem hataları oluşsa bile kalıcı olarak ayakta kalması sağlanır. Bu durum veri tabanındaki  verilerin hizmet kesintilerinde, çökme durumlarında ve başka durumlarda bozulmamasını sağlar.



Sonuç olarak ACID yaklaşımının her durumu başarılı olduğunda veri tabanları kuruluşa değer sağlamaya devam edebilmelerini sağlamak için en üst düzey veri bütünlüğü ve güvenliği ile korunur.

Bozuk veri tabanlarına sahip veri tabanı, kullanıcılarına günlük işlemlerinde ve analizlerinde maliyet konusunda sorunlar yaratabilir.

İlişkisel veri tabanı yönetim sistemlerinde veriyi sorgulamak için özel bir programlama dili kullanılır. Dünyada neredeyse standart halini almış bu dil SQL’dir. (Structural Query Language) (Yapısal Sorgulama Dili)



SQL içinde işlevlerine göre farklı komutlar yer almaktadır. Bu komutlar mantıksal bir şekilde aşağıdaki gibi sınıflandırılmıştır.

## 1- DDL (Data Definition Language – Veri Tanımlama Dili) 

Veri tabanı veya tablolarda yapısal değişiklikler yapabilmek için var olan SQL komutlarıdır. Bu komutlar ile yeni bir veri tabanı oluşturmak, yeni bir tablo oluşturmak veya var olan tablodan sütun eklemek-silmek veya tüm bunları silebilmek gibi işlemler yapılabilir.

 CREATE, ALTER, DROP, TRUNCATE, COMMENT, RENAME gibi komutlar bu işlemleri yapabilir.

Create -> Bir veri tabanı veya veri tabanı içinde tablo oluşturmayı sağlar.

Create Indez -> Index oluşturmak için, tablonun sütun adı üzerinde index oluşturur.

Create View -> Görüntü oluşturmak için kullanılır.

Örnek kullanımı : 

```SQL
-- Database oluşturmak
Create database veritabanı_adi
-- Veritabanı oluşturduktan sonra tablo oluşrutulabilir. 
Create table tablo_adi{
	sütun_adi1 veri_türü,
	sütun_adi2 veri_türü,
	...
}
```

Alter -> Alter table ile kullanılabilir, bir tabloya sütun eklemek, mevcut sütunları silmek veya değiştirerek tablonun yapısını değiştirmek için kullanılır.

Örnek kullanımı : 

```SQL
-- Tabloya sütun eklemek için:

ALTER TABLE tablo_adı ADD sütun_adı veri_türü

-- Tablodaki sütunu silmek için:

ALTER TABLE tablo_adı DROP sütun_adı

-- Tablodaki sütunun veri türünü değiştirmek için:

ALTER TABLE tablo_adı ALTER COLUMN sütun_adı veri_türü (SQL Server, MS Access)

ALTER TABLE tablo_adı MODIFY COLUMN sütun_adı veri_türü (MySQL, Oracle)
```

Drop -> veri tabanı, tablo ve indekslerin silinmesi için kullanılır.

Drop View -> Görüntüyü siler.

Örnek kullanımı : 

```Sql
-- Drop database komutu bir veritabanını silmek için kullanılır.
Drop database veritabanı_adi
-- Drop table komutu bir tabloyu silmek için kullanılır.
Drop table tablo_adi
-- Drop index komutu bir tablo indexini silmek için kullanılabilir.
ALTER TABLE tablo_adı DROP INDEX indeks_adı (MySQL)

DROP INDEX indeks_adı (DB2/Oracle)

DROP INDEX tablo_adı.indeks_adı (MSSQL)
```

Truncate -> Truncate table ile tablodaki veri içeriklerini siler fakat tablo yapısı kalır.

Comment -> **Sql de yorum satırı** sql ifadesinin ne amaçla kullanıldığını açıklamak için not almaya ve ya sql ifadesinin yürütülmesini durdurmak için kullanılır. Sql de çok satırı yorum satırı yapmak için aşağıdaki yöntem kullanılır. Bu yöntemi sorgu içerisinde bazı alanları by-pass etmek içinde kullanabiliriz.

```sql
--Örnek Yorum Satırı
SELECT * FROM tablo_adi;
/*Çok Satırda
Yorum Satırı Kullanımı*/
SELECT * FROM tablo_adi;
```

Rename -> Alanların isimlerini değiştirmek için kullanılır.

## 2-   DML (Data Manipulation Language – Veri İşleme Dili)

Tablolardaki veriler üzerinde kayıt ekleme, silme, değiştirme ve sorgulama yapabilmeyi sağlayan SQL komutlarıdır.

SELECT, INSERT, UPDATE, DELETE

Select sorgusu, DQL (Data Query Language- Veri Sorgulama Dili) olarak ayrılabilir.

Select -> Veri tabanında yer alan mevcut kayıtların bir kısmını veya tamamını tanımlanan koşullara bağlı olarak alır. Yani bir veri tabanında yer alan bir veya daha fazla tablodan istenen satır değerlerini almak için kullanılır. Select komutu ile elde edilen veriler yine bir tabloya aktarılarak üzerinde işlemler yapılabilir.

Örnek kullanımı: 

```sql
Select sütun_adi1,sütun_adi2, ... From tablo_adi
Select * From tablo_adi
```

Insert -> komutu  DML komutuydu. Insert into komutu ile veri tabanında yer alan tablolara yeni kayıt eklemek için kullanılır. Yani eklenen her bir kayıt tabloya yeni satır ekler. Insert into komutu, hem sütun adı hem de eklenecek verileri içerecek şekilde veya sadece eklenecek değerleri tanımlayarak kullanılabilir.

Örnek kullanımı :

```SQL
-- Sütun adı ve veri tanımlayarak
Insert into tablo_adi(sütun_adi1,sütun_adi2,...) Values(deger1,deger2,...)
-- Sadece veri tanımlayarak
Insert into tablo_adi Values(deger1,deger2,..)
```

Update -> komutu bir veri tabanındaki tablolarda yer alan kayıtlarda değişiklik yapmak ve güncellemek için kullanılır.

Örnek kullanımı : 

```SQL
Update tablo_adi Set sütun_adi1=deger1,sütun_adi2=deger2,... Where sütun_adi=deger
```

! NOT : Where yapısı kullanılmadığında tüm kayıtlar, kullanıldığında ise sadece koşulu karşılayan kayıtlar güncellenir.

Delete -> Veri tabanında yer alan kayıtları silmek için kullanılır.

Örnek kullanımı : 

```SQL
Delete from tablo_adi Where sütun_adi=deger
```

! NOT : Where yapısı kullanılmadığında tüm kayıtlar, kullanıldığında ise sadece koşulu karşılayan kayıtlar silinir.

## 3-   DCL (Data Control Language – Veri Kontrol Dili)

Veri tabanı veya tablolar üzerinde yetkilendirmeler yapabileceğimiz SQL komutlarıdır.

 GRANT, REVOKE, ALTER DEFAULT PRIVILEGES

Grant ->  Veritabanı kullanıcısına, veri tabanı rolüne veya uygulama rolüne izinler vermek için kullanılan komuttur.

Deny -> Kullanıcıların haklarını kısıtlayan komuttur.

Revoke ->  Daha önce yapılan tüm kısıtlama ve izinleri iptal eden komuttur.

Örnek Kullanım  :

```sql
REVOKE INSERT ON *.* FROM 'jeffrey'@'localhost';

REVOKE 'role1', 'role2' FROM 'user1'@'localhost', 'user2'@'localhost';

REVOKE SELECT ON world.* FROM 'role3';

GRANT ALL ON db1.* TO 'jeffrey'@'localhost';

GRANT 'role1', 'role2' TO 'user1'@'localhost', 'user2'@'localhost';

GRANT SELECT ON world.* TO 'role3';
```



## 4-   TCL (Transaction Control Language – İşlem Kontrol Dili) 

Tabloların içindeki verileri değiştirmek için kullandığımız DELETE, UPDATE, INSERT gibi DML komutlarımız vardı. Bu komutlarla bir transaction içinde ardışıl şekilde değişiklikler yapabiliriz. İşte bu değişiklikleri yönetebilmek için kullanılan SQL komutlarıdır. Bir transaction başarılı ise DML komutlarının meydana getirdiği değişiklikler COMMIT komutuyla kalıcı olarak tablolara yansıtılır. Özetle veri kalıcı olarak değişir. Eğer, bir sorun varsa ROLLBACK komutu ile o ana kadar oluşan tüm değişimler geri alınır.

COMMIT, ROLLBACK, SAVEPOINT

Commit -> Yapılan değişiklikleri kalıcı hale getirilir. İş artık tamamlanmıştır.

Rollback -> Son commit e kadar olan yeri geri alır.

Savepoint -> Daha sonra geri dönülecek bir dönüş noktası belirler.

> **KAYNAKÇA**
>
> - [ACID-Wikipedia](https://en.wikipedia.org/wiki/ACID)
>
> - [ACID Nedir?-Medium](https://medium.com/cloud-and-servers/acid-nedir-53f729f2bbb2)
>
> - [ACID](https://www.yusufsezer.com.tr/veritabani-acid/)
>
> - [ACID-Database.Guide](https://database.guide/what-is-acid-in-databases/#:~:text=In%20database%20systems%2C%20ACID%20(Atomicity,occur%20while%20processing%20a%20transaction.))
>
> - [ACID-bmcblogs](https://www.bmc.com/blogs/acid-atomic-consistent-isolated-durable/)
>
> - [Sql Komutları](https://www.bilgigunlugum.net/dbase/sql/sql_drop)
>
> - [DML-DDL-DCL](https://medium.com/@seda.kardz/dml-ddl-dcl-komutlar%C4%B1-cc500da62757)
>
> - [DML-DCL-DDL-TCL Komutlar](https://tuncayuyar.wordpress.com/2014/05/21/ddl-dml-dcl-ve-tcl-komutlari-arasindaki-fark-nedir/)
>
> - [Sql komutları-Geeksforgeeks](https://www.geeksforgeeks.org/sql-ddl-dml-tcl-dcl/)
>
> - [Sql Command-w3schools](https://www.w3schools.com/sql/sql_syntax.asp)
>
>   