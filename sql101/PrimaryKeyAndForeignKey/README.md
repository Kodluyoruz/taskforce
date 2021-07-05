Birincil Anahtar ve Yabancı Anahtar (PRIMARY KEY ve FOREIGN KEY)
======

## PRIMARY KEY

**PRIMARY KEY** bir tabloda bulunan veri sıralarını birbirinden ayırmamızı sağlayan bir kısıtlama (constraint) yapısıdır. O tabloda bulunan
veri sıralarına ait bir "benzersiz tanımlayıcıdır".
- Benzersiz (Unique) olmalıdır.
- NULL değerine sahip olamaz.
- Bir tabloda en fazla 1 tane bulunur.

![PRIMARY KEY](https://github.com/Kodluyoruz/taskforce/blob/main/sql101/PrimaryKeyAndForeignKey/figures/PrimaryKey.gif)

Yukarıda bulunan görselimizde de gördüğünüz gibi STUDENT tablosunda bulunan **StudentId** sütunu PRIMARY KEY yapısındadır ve her satırı (veri kaydını) diğer
satırlardan ayırmamızı sağlar.

## FOREIGN KEY

**FOREIGN KEY** bir tabloda bulunan herhangi bir sütundaki verilerin genelde başka bir tablo sütununa referans vermesi durumudur, tablolar arası ilişki kurulmasını sağlar.
- Bir tabloda birden fazla sütun FK olarak tanımlanabilir.
- Aynı sütunun içerisinde aynı değerler bulunabilir.


![PRIMARY KEY](https://github.com/Kodluyoruz/taskforce/blob/main/sql101/PrimaryKeyAndForeignKey/figures/ForeignKey.gif)

Yukarıda bulunan görselimizde de gördüğünüz gibi STUDENT tablosunda bulunan **courseId** sütunu FOREIGN KEY yapısındadır ve başka bir tablo olan "Course" tablosundaki
**courseId** sütununa referans verir.

## Daha Fazlası İçin
- [W3Schools PRIMARY KEY](https://www.w3schools.com/sql/sql_primarykey.asp)
- [W3Schools FOREIGN KEY](https://www.w3schools.com/sql/sql_foreignkey.asp)
- [PostgreSQL Tutorial PRIMARY KEY](https://www.postgresqltutorial.com/postgresql-primary-key/)
- [PostgreSQL Tutorial FOREIGN KEY](https://www.postgresqltutorial.com/postgresql-foreign-key/)



