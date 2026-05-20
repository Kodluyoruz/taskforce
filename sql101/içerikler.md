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

#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; BETWEEN ve IN operatörleri üzerine konuştuk.

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
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; LIKE ve ILIKE operatörleri üzerine konuştuk.

### [Ödev 3](Odev3/)
- Bu ödevde; LIKE ve ILIKE operatörleri konularını pekiştirmeye çalışacağız.	

### [DISTINCT ve COUNT](DistinctAndCount/)
#### Sorular
1. "Country" sanal tablomuzda bulunan "city" sütunundaki birbirinden farklı şehir isimlerini nasıl sıralarız?
	- SELECT city FROM Country;
	- SELECT DISTINCT city FROM Country; (Doğru)
	- SELECT DISTINCT Country FROM city;
	- DISTINCT city FROM Country;
	- SELECT DISTINCT FROM Country city;										
					
2. "Country" sanal tablomuzda bulunan "city" sütunundaki birbirinden farklı kaç şehir ismi olduğunu nasıl buluruz?
	- SELECT COUNT(DISTINCT city) Country;
	- SELECT COUNT city FROM Country;
	- SELECT COUNT(city) FROM Country;
	- COUNT(DISTINCT city) FROM Country;
	- SELECT COUNT(DISTINCT city) FROM Country; (Doğru)	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; DISTINCT operatörü ve COUNT aggregate fonksiyonu üzerine konuştuk.

### [Ödev 4](Odev4/)
- Bu ödevde; DISTINCT operatörü ve COUNT aggregate fonksiyonu konularını pekiştirmeye çalışacağız.

### [PSQL ve Uygulama I](PSQLAndPractiveI/)
#### Sorular
1. PSQL terminal ekranında veritabanlarını sıralamak için hangi komut kullanılır?
	- \l (Doğru)
	- list
	- \database
	- \U
	- \list databases										
					
2. PSQL terminal ekranında bağlanılan veritabanına ait tabloları listelemek için hangi komut kullanılır?
	- list
	- \q
	- \dt (Doğru)
	- \dn
	- \list tables	
						
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; PSQL komutlarıyla tanıştık aynı zamanda şimdiye kadar konuşulan konular hakkında genel uygulamalar yapıldı.

## SQL Temelleri II

### [ORDER BY](OrderBY/)
#### Sorular
1. "Employee" sanal tablomuzda bulunan müşteri bilgilerini "name" sütununa göre artan, "age" sütununa göre azalan olarak sıralayınız.
	- SELECT * FROM Employee ORDER BY name DESC age ASC;
	- SELECT * FROM Employee name ASC age DESC;
	- SELECT * FROM Employee name ASC age DESC ORDER BY;
	- SELECT * FROM Employee ORDER BY name ASC age DESC; (Doğru)
	- Employee ORDER BY name ASC age DESC;
						
2. ORDER BY anahtar kelimesini neden kullanılırz?
	- Verileri sıralamak için (Doğru)
	- Verileri gruplamak için
	- Verileri listelemek için
	- Verileri silmek için
	- Verileri eklemek için
					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; ORDER BY anahtar kelimesi üzerine konuştuk.

### [LIMIT ve OFFSET](LimitAndOffset/)
#### Sorular
1. LIMIT anahtar kelimesini neden kullanırız?
	- Sıralanacak veri koşulunu belirtmek için.
	- Sıralanacak veri sayısını belirtmek için. (Doğru)
	- Verileri eklemek için.
	- Verileri listelemek için.
	- Verileri silmek için.					
						
2. ... OFFSET 10 LIMIT 3 sorgu parçacığı sonucunda kaç adet veri sıralanır?
	- 13
	- 30
	- 7
	- 10
	- 3 (Doğru)

					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; LIMIT ve OFFSET anahtar kelimeleri üzerine konuştuk.

### [Ödev 5](Odev5/)
- Bu ödevde; LIMIT ve OFFSET konularını pekiştirmeye çalışacağız.

### [Aggregate Fonksiyonlar](AggregateFunctions/)
#### Sorular
1. "Products" sanal tablomuzda bulunan satır sayısını hangi fonksiyon yardımı ile bulabiliriz?
	- SELECT MAX(*) FROM Products;
	- SELECT MIN(*) FROM Products;
	- SELECT COUNT(*) FROM Products; (Doğru)
	- SELECT AVG(*) FROM Products;
	- SELECT SUM(*) FROM Products;					
							
	
2. "Products" sanal tablomuzda bulunan "Price" sütunundaki değerlerin ortalamasını hangi SQL komutları ile alırız?
	- SELECT MIN(Price) FROM Products;
	- SELECT AVG(Price) FROM Products; (Doğru)
	- SELECT SUM(Price) FROM Products;
	- SELECT COUNT(Price) FROM Products;
	- SELECT MAX(Price) FROM Products;
						
					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Aggregate fonksiyonlar üzerine konuştuk.

### [Ödev 6](Odev6/)
- Bu ödevde; Aggregate fonksiyonlarını pekiştirmeye çalışacağız.

### [GROUP BY](GroupBY/)
#### Sorular
1. "Customers" sanal tablomuzda bulunan müşterilerimizin sayısını "Country" sütununa göre nasıl gruplarız? 
	- SELECT Country FROM Customers GROUP BY Country;
	- SELECT COUNT(Country) GROUP BY Country;
	- SELECT COUNT(Country) FROM Country GROUP BY Customers;
	- SELECT COUNT(Country) FROM Customers GROUP BY Country; (Doğru)
	- COUNT(Country) FROM Customers GROUP BY Country;					
							
	
2. GROUP BY anahtar kelimesi ile...
	- verileri sıralarız.
	- verileri dağıtırız.
	- verileri sileriz.
	- verileri ekleriz.
	- verileri gruplarız. (Doğru)
										
					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; GROUP BY anahtar kelimesi üzerine konuştuk.

### [Having](Having/)
#### Sorular
1. "Customers" sanal tablomuzda bulunan müşterilerimizin sayısını "Country" sütununa göre müşteri sayısı (CustomerID) 10 dan büyük olma koşulu ile nasıl gruplarız?
	- SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country > 10;
	- SELECT COUNT(CustomerID), Country FROM Customers HAVING COUNT(CustomerID) > 10;
	- Country FROM Customers GROUP BY Country HAVING COUNT(CustomerID) > 10;
	- SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country WEHERE COUNT(CustomerID) > 10;
	- SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country HAVING COUNT(CustomerID) > 10; (Doğru)						 													
2. HAVING anahtar kelimesi hakkında hangisi yanlıştır?
	- GROUP BY anahtar kelimesinden sonra kullanılır.
	- WHERE anahtar kelimesi yerine kullanılır. (Doğru)
	- Aggregate fonksiyonlarla birlikte kullanılabilinir.
	- COUNT() fonksiyonu ile birlikte kullanılabilinir.
	- Gruplandırılmış verilere koşul getirir.
																
					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; HAVING anahtar kelimesi üzerine konuştuk.

### [Ödev 7](Odev7/)
- Bu ödevde; GROUP BY ve HAVING anahtar kelimelerini pekiştirmeye çalışacağız.

### [Alias](Alias/)
#### Sorular
1. "Products" sanal tablomuzda bulunan "ProductID" sütununa ID ve "ProductName" sütuna da Product geçici isimleri nasıl veririz?
	- SELECT ProductID AS ID, ProductName AS Product FROM Products; (Doğru)
	- SELECT ProductID AS ID, ProductName AS Product;
	- SELECT ID, Product FROM Products;
	- SELECT ProductID AS ProductName FROM Products;
	- SELECT AS ID, AS Product FROM Products;													 																								
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; ALIAS anahtar kelimesi üzerine konuştuk.

## Tablolarla Çalışmak

### [Tablo Oluşturmak - Silmek](CreateAndDrop/)
#### Sorular
1. "Products" sanal tablomuzu id (serial), name (VARCHAR-100) ve price(INTEGER) sütunları ile birlikte oluşturunuz.
	- CREATE TABLE ( id SERIAL, name VARCHAR(100), price INTEGER ) Products ;
	- CRT TBL Products ( id SERIAL, name VARCHAR(100), price INTEGER );
	- CREATE TABLE Products ( id SERIAL, name VARCHAR(100), price INTEGER ); (Doğru)
	- CREATE TABLE Products ( id, name, price );
	- CREATE TABLE ( id SERIAL, name VARCHAR(100), price INTEGER );
						
						
2. Tablo silme işleminde hata alımını önlemek için hangi anahtar kelimesi kullanılır?
	- IF
	- DROP
	- CREATE
	- IF EXISTS (Doğru)
	- EXISTS
						
					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Tablo oluşturmak ve silmek üzerine konuştuk.

### [Verileri Güncellemek - Silmek](UpdateAndDelete/)
#### Sorular
1. UPDATE anahtar kelimesi ile...
	- verileri güncelleriz. (Doğru)
	- verileri sıralarız.
	- verileri dağıtırız.
	- verileri sileriz.
	- verileri ekleriz.											
						
2. DELETE anahtar kelimesi ile...
	- verileri sıralarız.
	- verileri sileriz. (Doğru)
	- verileri dağıtırız.
	- verileri güncelleriz.
	- verileri ekleriz.
											
					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Tablo içerisindeki verileri güncellemek ve silmek üzerine konuştuk.

### [Ödev 8](Odev8/)
- Bu ödevde; Verileri Güncellemek - Silmek konularını pekiştirmeye çalışacağız.

### [PRIMARY KEY - FOREIGN KEY](PrimaryKeyAndForeignKey/)
#### Sorular
1. PRIMARY KEY kısıtlama yapısı ile ilgili hangisi söylenemez?
	- Sütundaki değerler birbirinden farklı olmalıdır.
	- Unique olmalıdır.
	- Kullanılması şart değildir.
	- Bir tabloda en fazla bir tane bulunabilir.
	- FOREIGN KEY sütununun yanında olmalıdır. (Doğru)											
						
2. FOREIGN KEY kısıtlama yapısı ile ilgili hangisi söylenemez?
	- Sütundaki değerler birbirinin aynı olabilir.
	- Bir tabloda en fazla birden fazla bulunabilir.
	- Her tabloda bulunması zorunludur. (Doğru)
	- Sütundaki değerler birbirinden farklı olabilir.
	- Başka bir tablodaki PRIMARY KEY sütuna referans verebilirler.	
																					
					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Primary Key ve Foreign Key kavramları üzerine konuştuk.

### [Veri Tipleri I](DataTypesI/)
#### Sorular
1. "age" yaş sütunu için kullanılabilecek en efektif veri tipi hangisidir?
	- integer
	- decimal
	- numeric
	- smallint (Doğru)
	- real											
						
2. Hangisi ondalıklı sayılar için kullanılan sayısal veri tip lerinden biridir?
	- integer
	- text
	- smallint
	- serial
	- decimal (Doğru)																																	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Veri tipleri üzerine konuştuk.

### [Veri Tipleri II](DataTypesII/)
#### Sorular
1. "first_name" isimli sütun için 50 karaktere kadar veri girilebilecek, daha az sayıda veri girdiğimde veri uzunluğunun girilen karakter kadar olması için hangi veri tipi kullnılmalıdır?
	- VARCHAR(50) (Doğru)
	- CHAR(50)
	- TEXT(50)
	- TEXT
	- CHAR											
						
2. Hangisi TRUE sonucunu vermez? 
	- 'on'
	- 1
	- dogru (Doğru)
	- 'yes'
	- true																																					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Veri tipleri üzerine konuştuk.

### [UNIQUE](UNIQUE/)
#### Sorular
1. Yok																																					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; UNIQUE kısıtlama yapısı üzerine konuştuk.

### [CHECK](CHECK/)
#### Sorular
1. Yok																																					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; CHECK kısıtlama yapısı üzerine konuştuk.
### [PSQL ve Uygulama II](PSQLAndPractiveII/)
#### Sorular
1. Yok	
						
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; PSQL komutlarıyla tanıştık aynı zamanda şimdiye kadar konuşulan konular hakkında genel uygulamalar yapıldı.

## JOIN Yapıları

### [INNER JOIN](InnerJoin/)
#### Sorular
1. "Customer" tablosu ile "Order" tablosundaki verileri "Customer" tablosundaki ID ve "Order" tablosundaki CustomerID sütunları sayesinde eşleştiriniz.
	- "SELECT Order.CustomerID, Customer.ID FROM INNER JOIN ON Order.CustomerID = Customer.ID;"
	- "SELECT FROM Customer INNER JOIN Order ON Order.CustomerID = Customer.ID;"
	- "SELECT Order, Customer FROM Customer INNER JOIN Order ON Order.CustomerID = Customer.ID;"
	- "SELECT Order.CustomerID, Customer.ID FROM Customer INNER JOIN Order ON Order.CustomerID = Customer.ID;" (Doğru)
	- "SELECT Order.CustomerID, Customer.ID FROM Customer INNER JOIN Order Order.CustomerID = Customer.ID;"							
						
2. JOIN yapılarını temel olarak neden kullanırız?
	- Tablolara veri eklemek için.
	- Tablodaki verileri silmek için.
	- Tablo oluşturmak için.
	- Tablodaki verileri düzenlemek için.
	- Farklı tablolardaki verileri birleştirmek için. (Doğru)
											
					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; INNER JOIN kavramı üzerine konuştuk.

### [Ödev 9](Odev9/)
- Bu ödevde; Inner Join kavramını pekiştirmeye çalışacağız.

### [LEFT JOIN](LeftJoin/)
#### Sorular
1. LEFT JOIN yapısı ile ilgili hangisi söylenemez?
	- Sadece eşleşen veriler belirtilir. (Doğru)
	- Simetrik bir JOIN yapısı değildir. 
	- Tablo 1 deki verilerin tamamı alınır.
	- Sanal tabloda NULL ifadeleri bulunabilir.
	- Tablo 2 deki eşleşen veriler alınır.																																	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; LEFT JOIN kavramı üzerine konuştuk.

### [RIGHT JOIN](RightJoin/)
#### Sorular
1. "product" ile "category" tabloları arasında arasında category.id ve product.category_id sütunlarından faydalanarak "category" tablosu tablo 2 olma durumunda ilgili RIGHT JOIN'i yazınız.
	- "SELECT category.id, product.category_id FROM product JOIN category ON category.id = product.category_id;"
	- "SELECT category.id, product.category_id FROM product JOIN RIGHT category ON category.id = product.category_id;" 
	- "SELECT category.id, product.category_id FROM product RIGHT JOIN ON category.id = product.category_id;"
	- "SELECT category.id, product.category_id FROM RIGHT JOIN category ON category.id = product.category_id;"
	- "SELECT category.id, product.category_id FROM product RIGHT JOIN category ON category.id = product.category_id;" (Doğru)																	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; RIGHT JOIN kavramı üzerine konuştuk.

### [FULL JOIN](FullJoin/)
#### Sorular
1. Aşağıda kullanılan hangi JOIN işlemi her iki tablonun birleşimini alır?

	- RIGHT JOIN
	- FULL JOIN (Doğru)
	- JOIN
	- INNER JOIN
	- LEFT JOIN																	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; FULL JOIN kavramı üzerine konuştuk.

### [Ödev 10](Odev10/)
- Bu ödevde; Left Join, Right Join ve Full Join kavramlarını pekiştirmeye çalışacağız.

### [UNION](Union/)
#### Sorular
1. "Customer" ve "Supplier" sanaltablolarında bulunan "city" sütunlarındaki verileri nasıl birleştiririz? 

	- "SELECT City FROM Customer AND SELECT City FROM Supplier;"
	- "SELECT City FROM Customer; SELECT City FROM Supplier;"	
	- "SELECT City FROM Customer GROUP SELECT City FROM Supplier;"
	- "SELECT City FROM Customer UNION SELECT City FROM Supplier;" (Doğru)
	- "SELECT City FROM Customer ORDER SELECT City FROM Supplier;"	

2. UNION operatörüyle ilgili hangisi söylenemez?

	- Farklı tablolardaki tüm satırları birleştirir. (ALL)
	- Farklı tablolar üzerinde de kullanılır.		
	- Birleştirdiği sorgular aynı sayıda sütun dönmelidir.
	- ALL anahtar kelimesi ile birlikte kullanılabilir.
	- Birleştirdiği sorgulardaki sütunların veri tipi eşleşmelidir.																
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; UNION operatörü üzerine konuştuk.

### [INTERSECT ve EXCEPT](IntersectAndExcept/)
#### Sorular
1. "Customer" ve "Supplier" sanaltablolarında bulunan "city" sütunlarındaki verilerin kesişim kümelerini nasıl alırız?

	- SELECT City FROM Customer INTERSECT SELECT City FROM Supplier; (Doğru)
	- SELECT City FROM Customer AND SELECT City FROM Supplier;	
	- SELECT City FROM Customer  SELECT City FROM Supplier;
	- SELECT City FROM Customer GROUP SELECT City FROM Supplier;
	- SELECT City FROM Customer EXCEPT SELECT City FROM Supplier;		

2. Farklı iki tablo sorgusu sonucunda ilkinde olup ikincisinde olmayanve tekrar eden verileride gösteren SQL operatörü hangisidir?

	- UNION
	- EXCEPT		
	- INTERSECT
	- ALL
	- EXCEPT ALL (Doğru)	
				  																	
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; INTERSECT ve EXCEPT operatörleri üzerine konuştuk.
					
### [Ödev 11](Odev11/)
- Bu ödevde; INTERSECT ve EXCEPT operatörlerini pekiştirmeye çalışacağız.					
					
## Alt Sorgular

### [Alt Sorgu Nedir?](Subqueries/)
#### Sorular
1. Yok
											
					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Alt Sorgu kavramı üzerine konuştuk.
		
### [Any ve All Operatörleri](AnyAndAll/)
#### Sorular
1. Yok
											
					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Alt sorgularda sıklıkla kullanılan ANY ve ALL operatörleri üzerine konuştuk.
			
### [Ödev 12](Odev12/)
- Bu ödevde; Alt sorgular konusunu pekiştirmeye çalışacağız.

### [Alt Sorgular ve JOIN](SubqueriesAndJoin/)
#### Sorular
1. Yok
											
					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Alt sorgular ve JOIN üzerine konuştuk.	

### [Genel Tekrar](RECAP/)
#### Sorular
1. Yok
											
					
#### Video
1. (Youtube adresi yazılacak)
	- Bu videoda; Şimdiye kadar konuştuğumuz konuları 5 farklı senaryo üzerinden tekrar etmye çalıştık.	
		
