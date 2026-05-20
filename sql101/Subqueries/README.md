Alt Sorgular (Subqueries)
======
Bir sorgu içerisinde, o sorgunun ihtiyaç duyduğu veri veya verileri getiren sorgulardır.


### Alt Sorgu Kullanımı

**bookstore** veritabanında "Gülün Adı" isimli kitabımızın sayfa sayısı 466 dır. Bu kitaptan daha fazla sayıda sayfası bulunan kitapları aşağıdaki sorgu yardımıyla 
sıralayabiliriz.

```SQL
SELECT *
FROM book
WHERE page_number > 466;
```
Ancak yukarıdaki sorgumuzda şöyle bir sorun var. 466 ifade statik bir ifade ve biz bu değeri bilmiyor olabiliriz. Bu nedenle buradaki 466 rakamını aşağıdaki sorgu
yardımıyla bulabiliriz.
```SQL
SELECT page_number
FROM book
WHERE title = 'Gülün Adı'
```

İşte bu ikinci sorgumuz ilk sorgumuzda bir alt sorgu görevi görebilir. Her iki sorguyu da birleştirelim.

```SQL
SELECT *
FROM book
WHERE page_number >
(
SELECT page_number
FROM book
WHERE title = 'Gülün Adı'
);
```


## Daha Fazlası İçin
- [PostgreSQL Tutorial Subquery](https://www.postgresqltutorial.com/postgresql-subquery/)
