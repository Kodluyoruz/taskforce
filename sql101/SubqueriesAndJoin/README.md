Alt Sorgular ve JOIN Kullanımı
======
Altsorgular ve JOIN kavramları birlikte çok sık kullanılırlar. Aşağıdaki iki senaryoda bu iki yapıyı birlikte kullanacağız.

İlk senaryomuz: **bookstore** veri tabanında kitap sayfası sayısı ortalama kitap sayfası sayısından fazla olan kitapların isimlerini, bu kitapların yazarlarına ait isim ve soyisim
bilgileriyle birlikte sıralayınız.
```SQL
SELECT author.first_name, author.last_name, book.title
FROM author
INNER JOIN book ON book.author_id = author.id
WHERE page_number >
(
  SELECT AVG(page_number) FROM book
);

```

Yukarıdaki sorgumuzda kitaplara ait yazar bilgilerini JOIN kullanarak elde ediyoruz. Ortalama sayfa sayısını da alt sorgudan getiriyoruz.

İkinci senaryomuz: **dvdrental** veritabanında en uzun filmlerin isimlerini aktör isim ve soyisimleriyle birlikte sıralayalım.
```SQL
SELECT actor.first_name, actor.last_name, film.title
FROM actor
JOIN film_actor ON film_actor.actor_id = actor.actor_id
JOIN film ON film.film_id = film_actor.film_id
WHERE film.length =
(
  SELECT MAX(length)  FROM film
)

```
Burada da görmüş olduğumuz gibi film lerin aktör bilgilerini ikili JOIN yapısı kullanarak elde ediyoruz. En uzun film süresini de alt sorgudan
getiriyoruz.
