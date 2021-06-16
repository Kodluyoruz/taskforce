RIGHT JOIN
======

RIGHT JOIN yapısındaki tablo birleştirmesinde, birleştirme işlemi tablo 2 (sağdaki tablo) üzerinden gerçekleştirilir. Senaryomuzu şu şekilde düşünelim eğer tablo 2 
olarak **author** tablosunu aldığımızda öncelikle author tablosundaki ilgili sütundaki tüm verileri alacağız, sonrasında bu verilerin eşleştiği ilgili tablo 1 
sütunundaki verileri alacağız. Tablo 2 de olup Tablo 1 de olmayan veriler için **NULL** değeri kullanılır.


Aşağıdaki SQL sorgusunda yazar isim ve soyisim bilgilerinin tamamını alıyoruz, sonrasında eşleşebilen kitap isimlerini alıyoruz. Yazar bilgilerine karşılık 
olmayan kitap isimleri için NULL değeri alıyoruz.

```SQL
SELECT book.title, author.first_name, author.last_name
FROM book
RIGHT JOIN author
ON author.id = book.author_id;
```

Yukarıdaki sorgumuz sonucunda göreceğimiz gibi yazarlara ait olmayan kitaplar NULL değerlerini alırız.

![Right Join](https://github.com/Kodluyoruz/taskforce/blob/main/sql101/RightJoin/figures/RightJoin.png)

Yukarıdaki görselimizde de gördüğümüz üzere LEFT JOIN tablolar arasındaki eşleşmeyi  tablo 1 (soldaki tablo) üzerinden belirlenir.

### RIGHT JOIN Söz Dizimi
```SQL
SELECT <sütun_adı>, <sütun_adı> ...
FROM <tablo1_adı>
RIGHT JOIN <tablo2_adı>
ON <tablo1_adı>.<sütun_adı> = <tablo2_adı>.<sütun_adı>;
```
Buradaki tablo1 "left table", tablo2 "right table" olarak da adlandırılır.


## Daha Fazlası İçin
- [W3Schools RIGHT JOIN](https://www.w3schools.com/sql/sql_join_right.asp)
- [PostgreSQL Tutorial RIGHT JOIN](https://www.postgresqltutorial.com/postgresql-right-join/)
