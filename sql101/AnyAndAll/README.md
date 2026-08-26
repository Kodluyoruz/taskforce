Any ve All Operatörleri
======
Any ve All operatörleri alt sorugularda sıklıkla kullanılır ve tek bir sütunda bulunan bir değerle bir değer dizisinin karşılaştırılmasını sağlar.


### ANY Operatörü

Alt sorgudan gelen herhangi bir değer koşulu sağlaması durumunda `TRUE` olarak ilgili değerin koşu sağlamasını sağlar.

**bookstore** veritabanında yapmış olduğumuz aşağıdaki sorguyu inceleyelim.

```SQL
SELECT first_name, last_name
FROM author
WHERE id = ANY
(
  SELECT id
  FROM book
  WHERE title = 'Abe Lincoln in Illinois' OR title = 'Saving Shiloh'
)
```
Yukarıda görmüş olduğunuz gibi alt sorgudan gelebilecek potansiye iki id değeri var, bu id değerinin her ikisi de birbirinden bağımsız olarak ana sorgudaki
id sütununda bulunan değerler ile eşleştiği için sorgu sonucunda oluşan sana tabloda id değeri 4 ve 5 olan yazarlara ait first_name ve last_name değerlerini
göreceğiz.

### ALL Operatörü

Alt sorgudan gelen tüm değerlerin koşulu sağlaması durumunda `TRUE` olarak döner.

**bookstore** veritabanındaki yine aynı sorguyu inceleyelim.

```SQL
SELECT first_name, last_name
FROM author
WHERE id = ALL
(
  SELECT id
  FROM book
  WHERE title = 'Abe Lincoln in Illinois' OR title = 'Saving Shiloh'
)
```
Burada ne söylemiştik alt sorgu tarafından 4 ve 5 id leri gelecek burada eştlik olduğu için aynı anda 4 ve 5 in bu şulu sağlaması olanaksız olduğu için
herhangi bir değer dönülmeyecektir.

## Daha Fazlası İçin
- [W3Schools ANY ALL](https://www.w3schools.com/sql/sql_any_all.asp)
- [PostgreSQL Tutorial ANY](https://www.postgresqltutorial.com/postgresql-any/)
- [PostgreSQL Tutorial ALL](https://www.postgresqltutorial.com/postgresql-all/)
