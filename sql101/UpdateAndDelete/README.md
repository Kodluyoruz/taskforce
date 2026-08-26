Tablo Verilerini Güncellemek (UPDATE - DELETE)
======

Bir tabloda bulunan verileri güncellemek veya silmek için öncelikle örnek bir tablo oluşturup içine 5 date veri yerleştireceğim.
Bunun için [Mockaroo](https://www.mockaroo.com/) benzeri servisleri kullanabiliriz. Aşağıdaki örnek tablo oluşturma ve veri girme komutlarını bulabilirsiniz.

```SQL
CREATE TABLE my_apps (
	id INT,
	name VARCHAR(50),
	price VARCHAR(50)
);
INSERT INTO my_apps (id, name, price) values (1, 'Ronstring', '$0.96');
INSERT INTO my_apps (id, name, price) values (2, 'Duobam', '$3.44');
INSERT INTO my_apps (id, name, price) values (3, 'Tresom', '$2.21');
INSERT INTO my_apps (id, name, price) values (4, 'Redhold', '$2.52');
INSERT INTO my_apps (id, name, price) values (5, 'Y-find', '$9.14');

```

## UPDATE

**UPDATE** anahtar kelimesi sayesinde tablomuzda bulunan verileri güncelleyebiliriz.

### UPDATE Söz Dizimi

```SQL
UPDATE <tablo_adı>
SET <sütun_adı> = değer, 
    <sütun_adı> = değer,
    ----
WHERE <koşul_adı>;
```
### UPDATE Örnek Kullanım
**my_apps** tablosunda bulunan ve id 2' ye eşit olan verimizin name sütunundaki degerini 'Mayak' price sütunundaki değerini '$5.22' ile değiştirelim.

```SQL
UPDATE my_apps
SET name = 'Mayak',
	price = '$5.22'
WHERE id = 2;
```
## DELETE
**DELETE** anahtar kelimesi sayesinde tablomuzda bulunan verileri silebiliriz.

### DELETE Söz Dizimi

```SQL
DELETE FROM <tablo_adı>
WHERE <koşul_adı>;
```
### DELETE Örnek Kullanım
**my_apps** tablosunda bulunan name sütunundaki verisi 'Tresom' olan satırı silelim.

```SQL
DELETE FROM my_apps
WHERE name = 'Tresom';
```

## Daha Fazlası İçin
- [W3Schools SQL UPDATE](https://www.w3schools.com/sql/sql_update.asp)
- [W3Schools SQL DELETE](https://www.w3schools.com/sql/sql_delete.asp)
- [PostgreSQL Tutorial SQL UPDATE](https://www.postgresqltutorial.com/postgresql-update/)
- [PostgreSQL Tutorial SQL DELETE](https://www.postgresqltutorial.com/postgresql-delete/)



