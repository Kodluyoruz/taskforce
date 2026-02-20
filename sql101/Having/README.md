HAVING
======

**HAVING** anahtar kelimesi sayesinde gruplandırılmış verilere koşullar ekleyebiliriz. Hemen aklımıza **WHERE** anahtar kelimesi geldi değil mi? Ancak WHERE anahtar
kelimesi ile biz satır bazlı koşullar verebiliyoruz.

Şöyle bir senaryomuz olsun. Herbir rental_rate oranına karşılık gelen film sayısını bulalım. Bunu GROUP BY ile gerçekleştirebiliriz. Ancak bu kez 1 adım öteye gidip
şöle bir koşul ekleyelim toplam film sayısı 325 ten fazla olan rental_rate oranlarını görelim. Bu durumda GROUP BY ile elde ettiğimiz toplam film sayılarına
koşul eklememiz gerekir.

```SQL
SELECT rental_rate, COUNT(*) 
FROM film
GROUP BY rental_rate
HAVING COUNT(*) > 325;
```

## Daha Fazlası İçin
- [W3Schools SQL HAVING](https://www.w3schools.com/sql/sql_having.asp)
- [PostgreSQL Tutorial SQL HAVING](https://www.postgresqltutorial.com/postgresql-having/)



