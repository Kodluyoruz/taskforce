Aggregate Fonksiyonlar - MIN, MAX, SUM, AVG
======
Aggregate fonksiyonları yardımıyla bizler veri kümelerimizden sonuçlar çıkarabiliriz. Ne demek istiyorum? Şu senaryoları düşünelim.
- Toplam kaç adet müşterimiz var?
- Elimizde bulunan filmlerin ortalama uzunluğu nedir?

Bu şekilde belirli veri kümelerinden tek bir sonuç çıkarmak için aggregate fonksiyonları kullanırız.


### Örnek Kullanımlar
AVG fonsiyonunu kullandığımız sayısal değerlerden oluşan sütunun ortalama değerini alırız.

```SQL
SELECT AVG(length) 
FROM film;
```
sorgusu sayesinde **film** tablosunda bulunan **length** sütunundaki değerlerin ortalamasını alırız.

SUM fonsiyonunu kullandığımız sayısal değerlerden oluşan sütunun toplam değerini alırız.

```SQL
SELECT SUM(length) 
FROM film;
```
sorgusu sayesinde **film** tablosunda bulunan **length** sütunundaki değerlerin toplamını alırız.

MAX fonsiyonunu kullandığımız sayısal değerlerden oluşan sütunun en yüksek değerini alırız.

```SQL
SELECT MAX(length) 
FROM film;
```
sorgusu sayesinde **film** tablosunda bulunan **length** sütunundaki değerlerin en yüksek değerini alırız.

MIN fonsiyonunu kullandığımız sayısal değerlerden oluşan sütunun en düşük değerini alırız.

```SQL
SELECT MIN(length) 
FROM film;
```
sorgusu sayesinde **film** tablosunda bulunan **length** sütunundaki değerlerin en düşük değerini alırız.


## Daha Fazlası İçin
- [W3Schools Aggregate Function](https://www.w3schools.com/sql/sql_count_avg_sum.asp)
- [PostgreSQL Aggregate Function](https://www.postgresql.org/docs/13/tutorial-agg.html)




