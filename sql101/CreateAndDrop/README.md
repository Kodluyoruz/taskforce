Tablo Oluşturmak ve Silmek (CREATE - DROP)
======

## Tablo Oluşturmak - CREATE

SQL ile yeni bir tablo oluşturmak için **CREATE** anahtar kelimesi kullanılır. Tablo oluştururken sonrasında daha detaylı konuşacağımız 3 önemli başlık daha vardır.
Sütunlara verilecek isim, sütunların veri tipi ve varsa sütunlarda bulunan kısıtlama yapıları.

### Tablo Oluşturmak - CREATE Söz Dizimi

```SQL
CREATE TABLE <tablo_adı> (
    <sütun_adı> <veri_tip> (kısıtlama_adı>,
    <sütun_adı> <veri_tip> (kısıtlama_adı>,
   ....
);
```
### Tablo Oluşturmak - CREATE Örnek Kullanım
**author** isminde bir tablo oluşturalım, id, first_name, last_name, email, birthday sütunları olsun. Veri tipleri ve kısıtlama yapılarıyla ilgili sonrasında
detaylı olarak konuşacağız.

```SQL
CREATE TABLE author (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100)
  birthday DATE
);
```
## Tablo Silmek - DROP
Oluşturduğumuz tabloları silmek için **DROP** anaftar kelimesi kullanılır.

### Tablo Silmek - DROP Söz Dizimi

```SQL
DROP TABLE (IF EXISTS) <tablo_adı>;
```
Burada **IF EXISTS** yapısını kullanarak yanlış tablo ismi yazımı durumunda hata mesajı almayı önleriz.

### Tablo Silmek - DROP Örnek Kullanım
"test" isimli tablomuzu silmek istersek;
```SQL
DROP TABLE IF EXISTS test;
```


## Daha Fazlası İçin
- [W3Schools SQL CREATE](https://www.w3schools.com/sql/sql_create_table.asp)
- [W3Schools SQL DROP](https://www.w3schools.com/sql/sql_drop_table.asp)
- [PostgreSQL Tutorial SQL CREATE](https://www.postgresqltutorial.com/postgresql-create-table/)
- [PostgreSQL Tutorial SQL DROP](https://www.postgresqltutorial.com/postgresql-drop-table/)



