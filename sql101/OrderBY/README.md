ORDER BY
======
ORDER BY anahtar kelimesi sayesinde bizler verilerimizi herhangi bir sütunda bulunan değerlere göre azalan veya artan bir şekilde sıralayabiliriz.


### ORDER BY Söz Dizimi

```SQL
SELECT <sütun_adı>, <sütun_adı>, ...
FROM <tablo_adı>
ORDER BY <sütun_adı>, <sütun_adı>, ... ASC|DESC;
```


### ORDER BY Örnek Kullanım

```SQL
SELECT *
FROM film
ORDER BY title (ASC);
```
Bu sorgumuzda **dvdrental** veritabanında bulunan **film** tablosundaki tüm sütunları **title** sütununda bulunan verilere göre artan (ASC) şeklinde sıralıyoruz.
ASC sıralama varsayılan olduğu için ayrı bir şekilde yazılması zorunluluğu yoktur ancak sorguyu belirginleştirmesi açısından genelde yazılır.

```SQL
SELECT *
FROM film
ORDER BY title ASC length DESC;
```
Sıralama birden fazla sütuna göre de yapılabilir. Yukarıdaki örneğimizde sıralama **title** sütununa göre artan **length** sütununa göre
azalan şeklinde yapılıyor.

```SQL
SELECT *
FROM film
WHERE title LIKE 'A%'
ORDER BY title ASC length DESC;
```
Yukarıdaki örneğimizde de gördüğümüz gibi sıralama işlemi, koşuldan sonra yazılır.

## Daha Fazlası İçin
- [W3Schools ORDER BY](https://www.w3schools.com/sql/sql_orderby.asp)
- [PostgreSQL Tutorial ORDER BY](https://www.postgresqltutorial.com/postgresql-order-by/)




