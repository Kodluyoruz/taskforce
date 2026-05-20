Veri Tipleri II
======

##  Karakter Veri Tipleri

| İsim        | Tanım         | 
| ------------- |:-------------|
| character varying(n), varchar(n)      | 	variable-length with limit |
| character(n), char(n)      | fixed-length, blank padded     |
| text | variable unlimited length      |

Sınırlı sayıda karekter kullanımı için VARCHAR veya CHAR veri tipleri kullanılır. VARCHAR veri tipi doldurulmayan karakterleri yok sayar, CHAR veri tipi ise doldurulmayan 
karakterler için boşluk bırakır. Sınırsız karekter kullanımı için ise TEXT veri tipi kullanılır.

##  Boolean Veri Tipleri

TRUE, FALSE veya NULL (Bilinmeyen) değerlerini alabilirler.

- TRUE: true, yes, on, 1
- FALSE: false, no, off, 0

##  Zaman / Tarih Veri Tipleri

| İsim        | Tanım         | 
| ------------- |:-------------|
| timestamp [ (p) ] [ without time zone ]     | 	both date and time (no time zone) |
| timestamp [ (p) ] with time zone      | both date and time, with time zone     |
| date | date (no time of day)      |
| time [ (p) ] [ without time zone ] | time of day (no date)      |
| time [ (p) ] with time zone | time of day (no date), with time zone      |
| interval [ fields ] [ (p) ] | time interval     |


## Daha Fazlası İçin
- [PostgreSQL 13 Veri Tipleri](https://www.postgresql.org/docs/13/datatype.html)




