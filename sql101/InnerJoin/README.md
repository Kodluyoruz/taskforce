JOIN Kavramı (Birleştirme)
======
Veraitabanları çoğunlukla birbiri ile ilşkili olan tablolardan oluşur. Bu birbiri ile ilişkili olan tablardaki verileri farklı JOIN yapıları kullanarak sanal olarak birleştirip 
daha anlamlı veriler haline getirebiliriz.


## INNER JOIN

INNER JOIN yapısı sayesinde birbiriyle ilişkili olan tabloların birbiriyle eşleşen  (kesişen) verilerini sıralayabiliriz. Senaryomuzda kitapları gösterdiğimiz **book**
tablosu ve yazarları gösterdiğimiz **author** tablosu var, author tablosunun id sütunuyla book tablosunun author_id sütunlarında bulunan veriler sayesinde her iki tabloya ait
bilgilerden daha anlamlı sonuçları elde edebiliriz.

Aşağıdaki SQL sorgusunda kitap isimlerini yazar isim ve soyisimler ile birlikte gösterebiliriz.

```SQL
SELECT book.title, author.first_name, author.last_name
FROM book
JOIN author ON author.id = book.author_id;
```

Yukarıdaki sorgumuzda tablolar arasındaki eşleşmeyi author.id ve book.author_id sütunları yardımıyla yapıyoruz.

![Inner Join](https://github.com/Kodluyoruz/taskforce/blob/main/sql101/InnerJoin/figures/InnerJoin.png)

Yukarıdaki görselimizde de gördüğümüz üzere INNER JOIN tablolar arasındaki eşleşen (kesişen) verileri sıralar. Bundan dolayı INNER JOIN yapısı simetriktir, author - book
tablolarının yerlerinin değiştirilmesi sonucu etkilemez.

### INNER JOIN Söz Dizimi
```SQL
SELECT <sütun_adı>, <sütun_adı> ...
FROM <tablo1_adı>
INNER JOIN <tablo2_adı>
ON <tablo1_adı>.<sütun_adı> = <tablo2_adı>.<sütun_adı>;
```
Buradaki tablo1 "left table", tablo2 "right table" olarak da adlandırılır.


## Daha Fazlası İçin
- [W3Schools INNER JOIN](https://www.w3schools.com/sql/sql_join_inner.asp)
- [PostgreSQL Tutorial INNER JOIN](https://www.postgresqltutorial.com/postgresql-inner-join/)
