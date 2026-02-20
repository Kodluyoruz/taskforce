UNION
======
**UNION** operatörü sayesinde farklı SELECT sorgularıyla oluşan sonuçları tek bir sonuç kümesi haline getiririz.


### UNION Kullanımı

**bookstore** veritabanında iki adet sorgu yapıyoruz. İlk sorgumuzda sayfa sayısı en fazla olan 5 kitabı, ikinci sorgumuzda ise isme göre 5 kitabı sıralıyoruz. UNION
anahtar kelimesi sayesinde bu iki sorguyu da birleştirebiliriz.


```SQL
(
SELECT * 
FROM book
ORDER BY title
LIMIT 5
)
UNION
(
SELECT * 
FROM book
ORDER BY page_number DESC
LIMIT 5
);
```
UNION operatörü kullanılacağı sorguların, sütun sayıları eşit olmalıdır ve sütunlardaki veri tipleri eşleşmelidir.


### UNION Söz Dizimi

```SQL
SELECT <sütun_adı>, <sütun_adı>...
FROM <table1>
UNION
SELECT <sütun_adı>, <sütun_adı>...
FROM <table2>
```
### UNION ALL

UNION operatörü bize birleşik veriler içerisindeki tekrar edenleri göstermez. Tekrar edenleri görmek için **UNION ALL** kullanırız.

## Daha Fazlası İçin
- [W3Schools UNION](https://www.w3schools.com/sql/sql_union.asp)
- [PostgreSQL Tutorial UNION](https://www.postgresqltutorial.com/postgresql-union/)
