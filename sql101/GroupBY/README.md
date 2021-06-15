GROUP BY
======

Bizler şimdiye kadar olan sorgularımızın tamamında sorguları yaparken genel veri kümesinin tamamı üzerine düşündük, ancak bazı durumlarda aynı sonuçları 
veri kümesinin içerisinde bulunan farklı gruplarda da bulmak isteyebiliriz. Senaryomuzu şu şekilde düşünelim, **dvdrental** veritabanında **rental_rate**
sütununda bizim 3 farklı değerimiz var (0.99, 2.99, 4.99). Biz bu 3 farklı değer için en uzun filmi bulmaya çalışalım.
```SQL
SELECT MAX(length) 
FROM film
WHERE rental_rate = 0.99;
```
```SQL
SELECT MAX(length) 
FROM film
WHERE rental_rate = 2.99;
```
```SQL
SELECT MAX(length) 
FROM film
WHERE rental_rate = 4.99;
```

İstediğimiz sonuçları elde ediyoruz ancak şöyle bir sorunumuz var 3 farklı değer yerine 30 farklı değer olsaydı? İşte bu şekilde senaryolar için yani verileri
gruplama için **GROUP BY** anahtar kelimesi kullanılır.

### GROUP BY Söz Dizimi

```SQL
SELECT <sütun_adı>, <sütun_adı>, ... (veya aggregate func)
FROM <tablo_adı>
GROUP BY <sütun_adı>, <sütun_adı>, ...

```
Burada şuna dikkat etmemiz gerekir, SELECT anahtar kelimesinde bulunan sütunların GROUP BY anahtar kelimesi içerisinde bulunması gerekir.

### GROUP BY Örnek Kullanım
Yukarıdaki senaryomuzu GROUP BY anahtar kelimesini kullanarak gerçekleştirelim. Dikkat ettiğiniz üzere SELECT ile kullanılan rental_rate sütunu
GROUP BY satırında da kullanılmıştır.

```SQL
SELECT rental_rate, MAX(length) 
FROM film
GROUP BY rental_rate;
```

## Daha Fazlası İçin
- [W3Schools GROUP BY](https://www.w3schools.com/sql/sql_groupby.asp)
- [PostgreSQL GROUP BY](https://www.postgresqltutorial.com/postgresql-group-by/)
