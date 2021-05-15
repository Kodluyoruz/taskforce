# Temel SQL
**SQL(Structured Query Language)**  yapısal sorgulama dilidir. SQl bir programlama dili değildir. Veri tabanı yönetim sistemlerini ve sql sorgulama dilini kullnarak veritabanları üzerinde çalışabilirsiniz.

SQl tüm veri tabanları arasında standart haline gelmiş bir dildir. Bazı veri tabanı yönetim sistemleri SQL kendi sistemleri için daha da geliştirerek türetmiştir. ÖRnek vermek gerekirse **SQL Server** ile **T-SQL** kullanırken, **Oracle** veri tabanı yönetim sistemi ile **PL-SQL** kullanırız.

Sadece bu başlık altında tüm temel SQl bilgisini vermemiz mümkün değil maalesef. Ama bu kurs kapsamında yazılan LINQ ifadelerini okuyabilmeniz, arka planda çalışan sql cümlesini hayal edebilmeniz adına ilk etapta ihtiyaç duyacağınız bilgileri bulabilirsiniz. 

- **Select:** Listeleme yada sorgulama yapmak amacıyla kullanılır.

    Örnekler:

    - `Select * from dbo.Customer`

    - `Select * from dbo.Customer where name like '%Ayse%'`

    - `Select top 10 * from dbo.Customer`
    - `Select * from dbo.Customer where age>30`
    
- **Insert:** Tabloya veri eklemek için kullanılır

    Örnekler:
    - `Insert into dbo.Customer(name, surname, age) values ('Ayse','Yilmaz',age)`


    - `Insert into dbo.Customer values ('Ayse','Yilmaz',age)`

- **Delete:** Belirtilen tablodan veri silmek silmek için kullanılır.

    Örnekler:
    - `Delete from Dbo.Customer where name = 'Ayse'`
    - `Delete from Dbo.Customer where name like '%Ayse%'`
    - `Delete from Dbo.Customer`

- **Update:** Belirtilen tablo içerisindeki bir veya birden fazla veriyi güncellemek için kullanılır.

    Örnekler:
    - `Update dbo.Customer set age = 20 where name = 'Ayse'`

Sql ile ilgili daha detay bilgiye sahip olmak için lütfen [tıklayınız.](https://www.w3schools.com/sql/default.asp)