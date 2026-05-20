ALTER ve NOT NULL
======

## NOT NULL

Birçok durumda bizler herhangi bir sütuna yazılacak olan verilere belirli kısıtlamalar getirmek isteriz. Örneğin yaş sütünunda sadece sayısal verilerin
olmasını isteriz ya da kullanıcı adı sütununda bilinmeyen (NULL) değerlerin olasını istemeyiz. Bu gibi durumlarda ilgili sütunda **CONSTRAINT** kısıtlama
yapıları kullanılır.

**NULL** bilinmeyen veri anlamındadır. Boş string veya 0 verilerinden farklıdır. Şu şekilde bir senaryo düşünelim bir kullanıcının email hesabı yoksa buradaki veriyi
boş string şeklinde düşünebiliriz. Acak eğer kullanıcının maili var ancak ne olduğunu bilmiyorsak bu durumda o veri NULL (bilinmeyen) olarak tanımlanabilir.

### NOT NULL Kullanımı

Employees şeklinde bir tablomuzu oluşturalım. Tablodaki first_name ve last_name sütunlarında bilinmeyen veri istemiyoruz, bu sütunlarda NOT NULL kısıtlama yapısı
kullanabiliriz.

```SQL
CREATE TABLE Employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    age INTEGER
);
```

### ALTER ve NOT NULL

ALTER anahtar kelimesini varolan bir tabloda değişiklik yapmak için kullanılır. Aşağıdaki senaryoda bir sütuna **NOT NULL** kısıtlaması vermek için aşağıdaki
söz dizimi yapısı kullanılır.

```SQL
ALTER TABLE <tablo_adı>
ALTER COLUMN <sütun_adı>
SET NOT NULL;
```

## Daha Fazlası İçin
- [W3Schools NOT NULL](https://www.w3schools.com/sql/sql_notnull.asp)




