LEFT JOIN
======

LEFT JOIN yapısındaki tablo birleştirmesinde, birleştirme işlemi tablo 1 (soldaki tablo) üzerinden gerçekleştirilir. Senaryomuzu şu şekilde düşünelim eğer tablo 1 
olarak **book** tablosunu aldığımızda öncelikle book tablosundaki ilgili sütundaki tüm verileri alacağız, sonrasında bu verilerin eşleştiği ilgili tablo 2 
sütunundaki verileri alacağız. Tablo 1 de olup Tablo 2 de olmayan veriler için **NULL** değeri kullanılır.


Aşağıdaki SQL sorgusunda kitap isimlerinin tamamını alıyoruz, sonrasında bu kitap isimleriyle eşleşebilen yazar isimlerini alıyoruz. Kitap isimlerine karşılık 
olmayan yazarlar için NULL değeri alıyoruz.

```SQL
SELECT book.title, author.first_name, author.last_name
FROM book
LEFT JOIN author
ON author.id = book.author_id;
```

Yukarıdaki sorgumuz sonucunda göreceğimiz gibi kitapların yazar bilgisine sahip değilse NULL değerlerini alırız.

![Left Join](https://github.com/Kodluyoruz/taskforce/blob/main/sql101/LeftJoin/figures/LeftJoin.png)

Yukarıdaki görselimizde de gördüğümüz üzere LEFT JOIN tablolar arasındaki eşleşmeyi  tablo 1 (soldaki tablo) üzerinden belirlenir.

### LEFT JOIN Söz Dizimi
```SQL
SELECT <sütun_adı>, <sütun_adı> ...
FROM <tablo1_adı>
LEFT JOIN <tablo2_adı>
ON <tablo1_adı>.<sütun_adı> = <tablo2_adı>.<sütun_adı>;
```
Buradaki tablo1 "left table", tablo2 "right table" olarak da adlandırılır.


## Daha Fazlası İçin
- [W3Schools LEFT JOIN](https://www.w3schools.com/sql/sql_join_left.asp)
- [PostgreSQL Tutorial LEFT JOIN](https://www.postgresqltutorial.com/postgresql-left-join/)
