###  Where - Limit - Order By

##### WHERE

- = Eşit Değilse 
- != Eşit Değilse 
- \> Büyük 
- \< Küçük 
- \>= Büyük Eşit
- \<= Küçük Eşit
- && Ve
- || Veya

```
SELECT * FROM test WHERE id < 5

SELECT * FROM test WHERE id != 1

SELECT * FROM test WHERE id < 5 AND id > 2
SELECT * FROM test WHERE id < 5 && id > 2

```

##### ORDER BY

```
SELECT * FROM test ORDER BY isim ASC
SELECT * FROM test ORDER BY isim DESC

SELECT * FROM test ORDER BY isim , soyisim DESC
```

##### LIMIT

```
SELECT * FROM test LIMIT 2

SELECT * FROM test LIMIT 3,2


```


















