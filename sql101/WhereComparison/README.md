WHERE ve Karşılaştırma Operatörleri
======

## WHERE

SELECT komutu ile yaptığımız çalışmalarda bizler tüm sütunların veya ilgili sütunlarda bulunan verilerin tamamını çekmek isteriz. Çoğu durumda ise verilerin 
tamamını değil belirli koşulları sağlayan verileri görmek isteriz. Bunun için **WHERE** anahtar kelimesini kullanırız.
### WHERE Söz Dizimi

```SQL
SELECT <sütun_adı>, <sütun_adı>, ...
FROM <tablo_adı>
WHERE <koşul>;
```
Eğer tablodaki tüm sütunlardaki verileri çekmek istersek asteriks `*` karakterinden faydalanırız.
```SQL
SELECT *
FROM <tablo_adı>;
```

### WHERE Örnek Kullanım

```SQL
SELECT title, replacement_cost
FROM film
WHERE replacement_cost = 14.99;
```
Bu sorgumuzda **dvdrental** veritabanında bulunan **film** tablosundaki **title** ve **replacement_cost** sütunlarında bulunan verileri çekiyoruz ancak bu kez tüm
verileri değil **replacement_cost = 14.99** koşulunu sağlayan verileri alıyoruz.

## Karşılaştırma Operatörleri

Yukarıda da bahsettiğimiz üzere **WHERE** anahtar kelimesi koşul ile birlikte çalışır. Aşağıda SQL ile birlikte kullanılan karşılaştırma operatörlerini
görebilirsiniz.

| Tables        | Are           | 
| ------------- |:-------------:|
| datatype < datatype → boolean      | Küçüktür |
| datatype > datatype → boolean      | Büyüktür      |
| datatype <= datatype → boolean | Küçük eşit      |
| datatype >= datatype → boolean     | Büyük Eşit      |
| datatype = datatype → boolean      | Eşit      | 
| datatype <> datatype → boolean      | Eşit Değil      |
| datatype != datatype → boolean      | Eşit Değil      |


## Daha Fazlası İçin
- [W3Schools SQL WHERE](https://www.w3schools.com/sql/sql_where.asp)
- [PostgreSQL Tutorial SQL WHERE](https://www.postgresqltutorial.com/postgresql-where/)
- [PostgreSQL Karşılaştırma Operatörleri](https://www.postgresql.org/docs/13/functions-comparison.html)



