### SUM MIN MAX COUNT GROUP HAVING

##### SUM

```
 SELECT SUM(id) FROM test 
```
##### MIN

```
 SELECT MIN(id) FROM test 
```
##### MAX

```
 SELECT MAX(id) FROM test 
```
##### COUNT

```
 SELECT COUNT(id) FROM test 
 SELECT COUNT(DISTINCT soyisim) FROM test 
```

##### GROUP BY

```
SELECT COUNT(id) toplam, soyisim FROM test GROUP BY soyisim
```



##### HAVING

```
SELECT COUNT(id) toplam, soyisim FROM test GROUP BY soyisim HAVING toplam > 5
```




















