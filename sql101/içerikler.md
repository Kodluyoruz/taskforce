# SQL 101 İÇİNDEKİLER

## SQL Nedir? 
### [Giriş](intro/)
#### Sorular
1. Yok

#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; SQL çalışmamızın genel konu başlıklarından ve temel kaynaklarımızdan bahsettik. 

### [Veri ve Veritabanı](DataAndDatabase/)
#### Sorular
1. Aşağıdakilerden hangisi veritabanlarının Excel benzeri "spreadsheet" yazılımlarına göre avantajlarından değildir?
	- Büyük verilerle çalışabilmeleri.
	- Verilerin birbirleriyle ilişkilerinin daha kolay yönetilmesi.
	- Verilerin hücrelerde depolanması. (Doğru)
	- Çoklu kullanıcı yönetimi ve rol dağıtımının daha kolay yapılması.
	- Başka yazılımlara verilerin daha kolay aktarılması.
2. Veri kavramıyla ilgili aşağıdakilerden hangisi söylenemez?
	- Gelişi güzel elde edilir. (Doğru)
	- Ölçüm yoluyla elde edilebilinir.
	- Sayım yoluyla elde edilinebilinir.
	- Deney yoluyla elde edilinebilinir.
	- Araştırma sonucu olabilir.

#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; SQL çalışmamızın genel konu başlıklarından ve temel kaynaklarımızdan bahsettik. 

### [Veritabanı Yönetim Sistemi](DatabaseManagementSystem/)
#### Sorular
1. Aşağıdakilerden hangisi ilişkisel veri tabanı yönetim sistemidir?
	- Mongo DB
	- Couch DB
	- Cassandra 
	- PostgreSQL (Doğru)
	- Dynamo DB


#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Veritabanı yönetim sistemi (DBMS) kavramından bahsettik. 

### [SQL Nedir?](DatabaseManagementSystem/)
#### Sorular
1. SQL nasıl bir programlama dilidir?
	- Bildirimsel (Doğru)
	- Emredici
	- Nesne yönelimli
	- Sınıf tabanlı
	- Imperative
2. SQL kaçıncı nesil bir programlama dilidir?
	- Birinci nesil
	- Üçüncü nesil
	- İkinci nesil
	- Beşinci nesil
	- Dördüncü nesil (Doğru)


#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; SQL tanımından ve nasıl bir programlama dili olduğundan bahsettik.

### [PostgreSQL Kurulumu](InstallPostgresql/)
#### Sorular
1.Yok

## SQL Temelleri 
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; PostgreSQL veritabanı yönetim sistemi yazılımının kurulum aşamalarını konuştuk.

### [SELECT](Select/)
#### Sorular
1. "Customer" sanal tablomuzda bulunan müşteri bilgilerinden "name" ve "age" sütunlarında bulunan verileri nasıl seçeriz?
	- SLCT name, age FRM customer;
	- FROM name, age SELECT customer;
	- SELECT name, age, customer;
	- SELECT name, age FROM customer; (Doğru)
	- SELECT FROM name, age, customer; 
2. SELECT sorgusunda bulunan asteriks (*) karekteri ile
	- Tüm satırları seçeriz.
	- Tüm sütunları seçeriz. (Doğru)
	- İlk satırı seçeriz.
	- İlk sütunu seçeriz.
	- Son sütunu seçeriz.


#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; SQL SELECT komutu üzerine konuştuk.

### [WHERE ve Karşılaştırma Operatörleri](WhereComparison/)
#### Sorular
1. "Employee" sanal tablomuzda bulunan müşteri bilgilerinden "first_name" ve "age" sütunlarında bulunan verileri "ya 18 den büyük" koşuluyla nasıl seçeriz?
	- SELECT first_name, age FROM Employee WHERE age > 18; (Doğru)
	- WHERE age > 18 SELECT first_name, age FROM Employee;
	- SELECT first_name, age > 18;
	- SELECT WHERE age > 18 FROM Employee;
	- SELECT age FROM Employee WHERE first_name, age > 18;
					
2. "<>" karşılaştırma operatörünün anlamı nedir?
	- Büyük ve küçük
	- Küçük ve büyük
	- Eşit
	- Büyük
	- Eşit değil
					

#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; WHERE komutu ve karşılaştırma operatörleri üzerine konuştuk.

### [WHERE ve Mantıksal Operatörler](WhereLogical/)
#### Sorular
1. a AND b ifadesi hangi koşulda "TRUE" döner?
	- TRUE AND NULL
	- NULL AND NULL
	- TRUE AND TRUE (Doğru)
	- FALSE AND TRUE
	- FALSE AND FALSE				
					
2. a OR b ifadesi hangi koşulda "FALSE" döner?
	- NULL OR NULL
	- FALSE OR TRUE
	- TRUE OR FALSE
	- FALSE OR FALSE (Doğru)
	- TRUE OR TRUE					
					

#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; WHERE komutu ve matıksal operatörler üzerine konuştuk.

### [Ödev 1](Odev1/)
- Bu ödevde; SQL SELECT ve WHERE komutlarının yanında Karşılaştırma ve Mantıksal operatörler konularını pekiştirmeye çalışacağız.

### [BETWEEN ve IN](BetweenAndIn/)
#### Sorular
1. "Players" sanal tablomuzda bulunan oyuncuların "age" sütununda bulunan verileri "18 den büyük eşit ve 40 tan küçük eşit olmayan" koşuluyla nasıl seçeriz?
	- SELECT age FROM Players WHERE age NOT BETWEEN 18 AND 40; (Doğru)
	- WHERE age NOT BETWEEN 18 AND 40;
	- SELECT * FROM Players WHERE age NOT BETWEEN 18 AND 40;
	- SELECT age FROM Players WHERE age BETWEEN 18 AND 40;
	- SELECT age FROM Players WHERE BETWEEN 18 AND 40;										
					
2. BETWEEN 10 AND 20 sorgu parçasında bulunan 10 ve 20 değerleri için hangisi söylenebilir?
	- 10 sonuç versine dahildir.
	- 20 sonuç verisine dahildir.
	- 10 sonuç versine dahildir and 20 dahil değildir.
	- İkisi de sonuç verisine dahil değildir.
	- İkisi de sonuç verisine dahildir. (Doğru)

### [Ödev 2](Odev2/)
- Bu ödevde; SQL, BETWEEN AND ve IN operatörleri konularını pekiştirmeye çalışacağız.		

### [LIKE ve ILIKE](LikeILike/)
#### Sorular
1. " WHERE first_name LIKE 'A%Z' " sorgu parçası nasıl ifade edilir??
	- Yalnızca AZ karakterlerinden oluşan isim.
	- Z karakteri ile başlayıp A karekteri ile biten isim.
	- A ve Z karekterlerinin olmadığı bir isim.
	- A karakteri ile başlayıp Z karekteri ile biten isim. (Doğru)
	- A karakteri ile başlayıp Z karekteri ile biten toplam 3 karaktere sahip isim.										
					
2. "_her%" şablonuna hangi söz dizimi uymaz?
	- cher
	- hero (doğru)
	- ther
	- chera
	- xhert

### [Ödev 2](Odev2/)
- Bu ödevde; LIKE ve ILIKE operatörleri konularını pekiştirmeye çalışacağız.			
