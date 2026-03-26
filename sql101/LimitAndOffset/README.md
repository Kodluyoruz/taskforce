LIMIT ve OFFSET
======

## LIMIT

Şimdiye kadar yaptığımız SQL sorgularında genellikle verilerin tamamını belirli koşullar altında sıraladık. Bazı durumlarda ise koşullarımızı sağlayan
verilerin tamamını değil belirli sayıda olanlarını sıralamak isteriz, bunun için **LIMIT** anahtar kelimesini kullanırız.

Şöyle bir senaryo üzerine düşünelim. **dvdrental** veritabanında bulunan **film** tablosundan B ile başlayan filmleri uzunluklarına göre en uzun olan 10 filmi sıralayalım.

```SQL
SELECT *
FROM film
WHERE title LIKE 'B%'
ORDER BY length DESC
LIMIT 10
```
Yukarıdaki sorgumuzda da görmüş olduğunuz gibi önce koşullamayı, sonra gruplamayı en son ise **LIMIT** kullanarak istediğimiz veri sayısını belirttik.

## OFFSET

Bazı durumlarda sonuç olarak gördüğümüz veri grubu içerisinden bazılarını "pass" geçmek isteriz. Yukarıdaki senaryomuzu tekrar düşünelim, **dvdrental** 
veritabanında bulunan **film** tablosundan B ile başlayan filmleri uzunluklarına göre sıralayalım ancak en uzun 6 filmi "pass" geçelim ve sonrasındaki
4 filmi sıralayalım. Bu durumda **LIMIT** 4 ve **OFFSET** 6 olacak.

```SQL
SELECT *
FROM film
WHERE title LIKE 'B%'
ORDER BY length DESC
OFFSET 6
LIMIT 4;
```


## Daha Fazlası İçin
- [PostgreSQL Tutorial LIMIT](https://www.postgresqltutorial.com/postgresql-limit/)




