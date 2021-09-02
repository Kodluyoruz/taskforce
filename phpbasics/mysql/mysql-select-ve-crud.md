### CRUD (CREATE-READ-UPDATE-DELETE)

##### SELECT ifadesi

``SELECT`` seçilecek ifadeyi belirtir.

```
SELECT 1; # 1 Sayısını seçer ve getirir.
SELECT 1+1; # Toplama işlemini yapar.
```

#####Seçilen ifadeyi isimlendirmek
```
SELECT 'Şahin' as isim;
```

##### Mysql Hazır Tanımlı Fonksiyonlar


###### Bazı Tarih Fonksiyonları

```
SET @@lc_time_names = 'tr_TR';

SELECT
DAYNAME('2021-09-02 23:59:59'), 
DAYOFWEEK('2021-09-02 23:59:59'), 
DAYOFYEAR('2021-09-02 23:59:59'),
DAYOFMONTH('2021-09-02 23:59:59');


SELECT SEC_TO_TIME( 3600 );

SELECT LAST_DAY( NOW() );
```

##### IF Kullanımı 

```
SELECT IF(100<200, 'yes', 'no');
```

##### AS Kullanımı

```
SELECT
DAYNAME(NOW()) as gun_ismi,
DAYOFWEEK('2021-09-02 23:59:59') as haftanin_gunu,
DAYOFYEAR('2021-09-02 23:59:59') as yilin_gunu,
DAYOFMONTH('2021-09-02 23:59:59') as ayin_gunu;
```


##### CRUD İŞLEMLERİ


##### CREATE 

```
INSERT INTO test SET
isim = 'Sabahattin',
soyisim = 'BURAK'
```

```
INSERT INTO test (isim, soyisim) VALUES 
('Volkan', 'ERSEVER'),
('Filiz', 'ERSEVER'),
('Mustafa', 'ERSEVER'),
('Muazzez', 'BURAK')
```

##### READ

```
SELECT * FROM test;

SELECT isim,id FROM test;

SELECT isim,id FROM test WHERE id = 1;

SELECT *, CONCAT(isim, ' ', soyisim) as isimsoyisim FROM test;
```

##### UPDATE

```
UPDATE test SET isim = 'Şahin Turgut' WHERE id = 1
```

##### DELETE

```
DELETE FROM test WHERE id = 1
```






























