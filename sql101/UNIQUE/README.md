UNIQUE
======
**UNIQUE** kısıtlaması ile uyguladığımız sütundaki verilerin birbirlerinden farklı benzersiz olmalarını isteriz. PRIMARY KEY kısıtlaması kendiliğinden **UNIQUE**
kısıtlamasına sahiptir.

NOT NULL kısıtlamasında olduğu gibi tablo oluştururken veya ALTER komutu ile beraber tablo oluştuktan sonra da kullanabiliriz.

### UNIQUE Kullanımı

Employees şeklinde bir tablomuzu oluşturalım. Tablodaki email sütununda bulunan verileri **UNIQUE** olarak belirlemek istersek.

```SQL
CREATE TABLE Employees (
    ---
    emaile VARCHAR(100) UNIQUE,
    ----
);
```

### ALTER ve UNIQUE

```SQL
ALTER TABLE <tablo_adı>
ADD UNIQUE <sütun_adı>
```

Bu arada herhangi bir sütuna **UNIQUE** kısıtlaması getirirsek ve öncesinde UNIQUE olmayan verileri kaldrmamız gerekir.

## Daha Fazlası İçin
- [W3Schools UNIQUE](https://www.w3schools.com/sql/sql_unique.asp)
- [PostgreSQL Tutorial UNIQUE](https://www.postgresqltutorial.com/postgresql-unique-constraint/)
