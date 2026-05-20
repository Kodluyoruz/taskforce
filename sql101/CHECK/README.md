CHECK
======
**CHECK** kısıtlaması ile uyguladığımız sütundaki verilere belirli koşullar verebiliriz. Örneğin age (yaş) olarak belirlediğimiz bir sütuna negatif değerler verebiliriz
veya web portaline üye olan kullanıcıların yaşlarının 18 yaşından büyük olması gibi kendi senaryolarımıza uygun başka kıstlamalar da vermek isteyebiliriz.

CHECK kısıtlamasını da tablo oluştururken veya ALTER komutu ile beraber tablo oluştuktan sonra kullanabiliriz.

### CHECK Kullanımı

Employees şeklinde bir tablomuzu oluşturalım. Tablodaki age sütununda bulunan verilerin 18'e eşit veya büyük olmasını istiyoruz.

```SQL
CREATE TABLE Employees (
    ---
    age INTEGER CHECK (age>=18)
    ----
);
```

### ALTER ve CHECK

```SQL
ALTER TABLE <tablo_adı>
ADD CHECK (age>=18)
```

## Daha Fazlası İçin
- [W3Schools CHECK](https://www.w3schools.com/sql/sql_check.asp)
- [PostgreSQL Tutorial CHECK](https://www.postgresqltutorial.com/postgresql-check-constraint/)
